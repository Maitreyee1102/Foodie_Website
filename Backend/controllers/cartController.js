import userModel from "../models/userModel.js"

// add items to user Cart
const addToCart = async (req,res) =>{
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;   //user's cart data gets stored to this
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;  //if the user does not have any entry in his cart
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        //updating user's cart with above data 
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to cart"});
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove items from user cart
const removeFromCart = async (req,res) =>{
        try{
            let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;   //user's cart data gets stored to this
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;  //if the user does not have any entry in his cart
        }
        //updating user's cart with above data 
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed from Cart"});
        }
        catch(error){
            console.log(error);
            res.json({success:false,message:"Error"})
        }
}

//fetch user cart data
const getCart = async(req,res) =>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addToCart,removeFromCart,getCart}