import connectMongoDB from "@/libs/mongodb";
import Patients from "@/models/patients";
import { NextResponse } from "next/server";

//create new record
// a function to generate a hospital number for patients
function hospitalNum (LN,DOB,PN){
    const year =  new Date().getFullYear();
    const L = LN.slice(0,2);
    const P = PN.slice (10, 14);
    const HN = L + DOB + P + year 
    return HN;
}

export async function POST(request) {
    
    
    let {HospitalNumber,
        firstname,
        MiddleName,
        LastName,
        Age,
        DateOfBirth,
        Gender,
        Nationality,
        StateOfOrigin,
        MedicalHistory,
        ResidentialAdress,
        PhoneNumber,
        Occupation,
        MaritalStatus,
        AccountsCleared
    } = await request.json();
    await connectMongoDB();
     HospitalNumber = hospitalNum(LastName, DateOfBirth, PhoneNumber)
     AccountsCleared = false

     const records = await Patients.find({"HospitalNumber": HospitalNumber});

     if (records.length == 0) {
        console.log(HospitalNumber)
        console.log(records.length)
        await Patients.create({
            HospitalNumber,
            firstname,
            MiddleName,
            LastName,
            Age,
            DateOfBirth,
            Gender,
            Nationality,
            StateOfOrigin,
            MedicalHistory,
            ResidentialAdress,
            PhoneNumber,
            Occupation,
            MaritalStatus,
            AccountsCleared
        })
        return NextResponse.json ({ message: "record created"}, {status:201})
     } else {
        return NextResponse.json ({ message: "record exists"}, {status:201})
     }

    

    
}

//find old record



export async function GET(request) {
    //let search = request.body.search()
    const lastname = request.nextUrl.searchParams.get("LastName");
    const firstname = request.nextUrl.searchParams.get("firstname");
    
    let records
    await connectMongoDB();

    if(lastname|| firstname){
        records = await Patients.find({"LastName": lastname , "firstname": firstname});

    }
   
    return NextResponse.json({records})
    
}

export async function PUT(params) {
    await connectMongoDB();
}

// find old