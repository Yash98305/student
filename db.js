import mongoose from 'mongoose'

 const connectDB = async()=>{
try {
    const conn=await mongoose.connect("mongodb+srv://meteorteamyyjv:meteorteamyyjv@gujaratgovernmentapp.l72ukh8.mongodb.net/Govermental_App")
    console.log("Database Connected")
} catch (error) {
    console.log("Database Not Connected")
}
}
export default connectDB