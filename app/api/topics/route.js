import connectMongoDB from "@/libs/mongodb"
import Vitals from "@/models/Vitals";
import { NextResponse } from "next/server";

export async function POST(request) {
    const{title, description} = await request.json
    await connectMongoDB();

    await Vitals.create({title, description})

    return NextResponse.json ({ message: "topic created"}, {status:201})
 
}