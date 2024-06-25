import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

app.use(express.urlencoded({extended:false}))

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))  //we are mounting our uploads folder at the /images end point by passing any file name after this url we can get our image on the browser

app.get("/",(req,res)=>{          //https method to request the data from server
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
