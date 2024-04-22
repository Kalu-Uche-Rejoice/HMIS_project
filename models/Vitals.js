import { Schema } from "mongoose";
import mongoose from "mongoose";


const VitalsSchema = new Schema(
    {
        title: String,
        description: String
    }, 
    {
        timestamps: true,
    }
);

const Vitals =mongoose.models.Vitals || mongoose.model("Vitals", VitalsSchema)

export default Vitals