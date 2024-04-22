import connectMongoDB from "@/libs/mongodb";
import Patients from "@/models/patients";
import { NextResponse } from "next/server";

//create new record
// a function to generate a hospital number for patients

export async function POST(request) {
    const {firstname,
        MiddleName,
        LastName,
        Age,
        DateOfBirth,
        Nationality,
        StateOfOrigin,
        MedicalHistory,
        ResidentialAdress,
        PhoneNumber,
        Occupation,
        MaritalStatus
    } = await request.json();
    await connectMongoDB();
    console.log(firstname)
    await Patients.create({
        firstname,
        MiddleName,
        LastName,
        Age,
        DateOfBirth,
        Nationality,
        StateOfOrigin,
        MedicalHistory,
        ResidentialAdress,
        PhoneNumber,
        Occupation,
        MaritalStatus
    })

    return NextResponse.json ({ message: "record created"}, {status:201})
}

//update old record
// find old