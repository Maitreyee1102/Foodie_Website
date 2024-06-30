import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing user order from frontend
const placeOrder = async (req,res) =>{
    const frontend_url = "http://localhost:3000";
    let line_items = []
    try {
        let newOrder;
       try {newOrder = new orderModel({
            userId: req.body.userId,   //we get this userId from middleware after passing our token
            items: req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();    //saves the order in our database
        console.log(newOrder);
         }  //whenever order placed user's cart should get empty
        catch(error){
            console.log(error);
            res.json({success:false,message:"Error in fetching data"})
        }

        //logic to create payment link using stripe

        try {
            line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"usd",   
                product_data: {
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))
        console.log(line_items);}
        catch(error){
            console.log(error);
            res.json({success:false,message:"Error in logic for payment"})
        }

       try{ line_items.push({
            price_data:{
                currency:"usd",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100
            },
            quantity:1
        })}
        catch(error){
            console.log(error);
            res.json({success:false,message:"Error in pushing line items"})
        }


        try{const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        return res.json({success:true,session_url:session.url})}
        catch(error){
            console.log(error);
            return res.json({success:false,message:"Error in generating payment link"})
        }
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"Error due to payment failure"})
    }
}

export {placeOrder};