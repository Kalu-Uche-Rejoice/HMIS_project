import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("connected successfully")
    } catch (error) {
        console.log(error)
    }
} 

export default connectMongoDB;