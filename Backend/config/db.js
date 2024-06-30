import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://22ucc060:9423810600@cluster0.4qsntqd.mongodb.net/foodie_website').then(()=>console.log("DB connected"));
}
