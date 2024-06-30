//to authorise the user using token and items to their cart

import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) =>{
    // first we will get token from headers and then destructure it
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorised Login Again"})
    }
    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = token_decode.id; //this id is generated at the time of token generation
        next();
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error due to user authentication"})
    }
}

export default authMiddleware;