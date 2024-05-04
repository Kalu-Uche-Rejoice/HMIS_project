import connectMongoDB from "@/libs/mongodb";
import Patients from "@/models/patients";
import { NextResponse } from "next/server";

let records

export async function POST(request){
    const lastname = await request.json()

    let query =  lastname.keyword;
    console.log(query)

    await connectMongoDB();

    if(lastname){

        records = await Patients.find({"LastName": query});
    }
    
   console.log("records"+ records)
    return NextResponse.json(records);
    //return NextResponse.redirect()
}
