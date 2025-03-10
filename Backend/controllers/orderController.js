import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing user order from frontend
const placeOrder = async (req,res) =>{
    const frontend_url = "https://foodie-website-frontend.onrender.com/";
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

//this is the temporary payment verification system or say to make the payment status true in our database
const verifyOrder = async (req,res) =>{
    const {orderId,success} = req.body;
    try{
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);   // if the payment fails due to any reason then that order should be deleted from the database
            res.json({success:false,message:"Not Paid"})
        }
    }
    catch(error){
        res.json({success:false,message:"Not successfully paid"})
    }
}

//logic to send user's orders using api
const userOrder = async (req,res) =>{
    try {
        //find all orders of that user using their id:
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in showing all user orders"})
    }
}
//listing orders for admin panel  creating api here and integrating it in frontend
const listOrders = async (req,res) =>{
    try {
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in loading orders"})
    }
}

//api for updating order status
const updateStatus = async (req,res) =>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Could not update order status"})
    }
}

export {placeOrder,verifyOrder,userOrder,listOrders,updateStatus};