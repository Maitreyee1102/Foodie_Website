import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})  // we have set this minimize false so that it can create the entry for empty cart object as well

const userModel = mongoose.model.user || mongoose.model("user",userSchema);

export default userModel;