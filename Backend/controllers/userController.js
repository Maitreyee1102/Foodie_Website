// creating user authentication

import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'    // this package is for user authentication
import bcrypt from "bcrypt"
import validator from "validator"

//login user
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});

        if(!user){
            res.json({success:false,message:"user does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error in fetching user"})
    }
}

//create token
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try{

        //checking if user already exists or not
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success:false,message:"user already exists"})
        }

        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter valid email"})
        }

        //check if password length is greater than 8 digit
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password at least 8 characters"})
        }

        //if all above conditions are not qualified then we register the user
        //before creating this new account we must encrypt the password for which we bcrypt package

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        //saving the user created above in database

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});

    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error in encrypting password"})
    }
}

export {loginUser,registerUser};