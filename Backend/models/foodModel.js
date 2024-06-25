
import mongoose from "mongoose";

const foodScehma = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image: {type:String,required:true},   // url of image will be stored
    category: {type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodScehma)  //for model to get created only once we add given or operator so that it is not created everytime we run this file

export default foodModel;