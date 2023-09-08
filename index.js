//express
import express from "express"
const app=express();

//morgan
import morgan from 'morgan';
app.use(express.json())
app.use(morgan("dev"))
//database
import connectDB from "./db.js";
import router from "./router.js";
connectDB()
app.use('/api',router)
app.get('*',function(req,res){
    console.log("error in * function")
})

//port listen
const PORT=8000;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})