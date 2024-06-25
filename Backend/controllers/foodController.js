//this is api we are creating to add more items to our menu

import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food items

//below logic is used to store the data into the database for each food item

const addFood = async (req,res) =>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description: req.body.description,
        price:req.body.price,
        category: req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//to list all the food items in our database on the browser
const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food item from the list in db
const removeFood = async (req,res) =>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listFood,removeFood}