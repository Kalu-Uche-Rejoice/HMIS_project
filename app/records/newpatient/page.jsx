"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default ()=>{
    const [firstname, setFirstName]= useState("");
    const [MiddleName, setMiddleName]= useState("");
    const [LastName, setLastName]= useState("");
    const [Age, setAge]= useState("");
    const [ DateOfBirth, setDateOfBirth]= useState("");
    const [Gender, setGender] = useState("");
    const [Nationality, setNationality]= useState("");
    const [StateOfOrigin, setStateOfOrigin]= useState("");
    const [MedicalHistory, setMedicalHistory]= useState("");
    const [ResidentialAdress, setResidentialAdress]= useState("");
    const [PhoneNumber, setPhoneNumber]= useState("");
    const [Occupation, setOccupation]= useState("");
    const [MaritalStatus, setMaritalStatus]= useState("");

    const router = useRouter()

    const handleSubmit= async (e)=>{
        e.preventDefault()

        if(!firstname||
           ! LastName||
           ! Age||
           ! DateOfBirth||
           ! Gender||
           ! Nationality||
           ! StateOfOrigin||
           ! MedicalHistory||
           ! ResidentialAdress||
           ! PhoneNumber||
           ! Occupation||
           ! MaritalStatus){
            alert( "All fields are required");
           }

        try {
            await fetch ('http://localhost:3000/api/records',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
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
            })
        });
        //alert("New patient record created")
        //router.push('/records')
        if (res.ok) {
            alert("new patient record created")
            router.push('/');
         }else{
                throw new Error ('Failed to create patient record')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return(
        <main className="h-screen">
            <form onSubmit={handleSubmit}>
            <label htmlFor="FirstName">
                First Name
            <input 
                name="FirstName" 
                type="text" 
                placeholder="Insert Patients first name" 
                required
                value={firstname}
                onChange={(e)=>setFirstName(e.target.value)}
            />
            </label>
            <label htmlFor="MiddleName">
                Middle Name
            <input 
                name="MiddleName" 
                type="text" 
                placeholder="Insert Patients other name"
                value={MiddleName}
                onChange={(e)=>setMiddleName(e.target.value)}
            />
            </label>
            <label htmlFor="LastName">
                Last Name
            <input
                name="LastName" 
                type="text" 
                placeholder="Insert Patients Last name" 
                required
                value={LastName}
                onChange={(e)=>setLastName(e.target.value)}
            />
            </label>
            <label htmlFor="Age">
                Age
            <input
                name="Age" 
                type="number" 
                required
                value={Age}
                onChange={(e)=>setAge(e.target.value)}
             />
            </label>
            <label htmlFor="DOB">
                Date of Birth
            <input
                 name="DOB" 
                type="date" 
                required
                value={DateOfBirth}
                onChange={(e)=>setDateOfBirth(e.target.value)}
            />
            </label>
            
                <fieldset className="border border-black w-fit">
                   <legend>Gender</legend>
                <label htmlFor="MALE"> MALE</label>
                    <input 
                        type="radio"   
                        id="MALE" 
                        name="GENDER" 
                        value="MALE"
                        onChange={(e)=>setGender(e.target.value)}
                    />
                
                <label htmlFor="FEMALE"> FEMALE</label>
                    <input 
                        type="radio" 
                        id="FEMALE" 
                        name="GENDER" 
                        value="FEMALE"
                        onChange={(e)=>setGender(e.target.value)}
                    />
                
                </fieldset>

                <label htmlFor="Nationality">
                Nationality
                <input 
                name="Nationality" 
                type="text" 
                placeholder="Insert Patients Nationality" 
                required
                value={Nationality}
                onChange={(e)=>setNationality(e.target.value)}
            />
            </label>

            <label htmlFor="StateOfOrigin">
                State Of Origin
                <input 
                name="StateOfOrigin" 
                type="text" 
                placeholder="Insert Patients State of Origin" 
                required
                value={StateOfOrigin}
                onChange={(e)=>setStateOfOrigin(e.target.value)}
            />
            </label>

            <label htmlFor="MaritalStatus">
            Marital Status
                <input 
                name="MaritalStatus" 
                type="text" 
                placeholder="Insert Patients Marital Status" 
                required
                value={MaritalStatus}
                onChange={(e)=>setMaritalStatus(e.target.value)}
            />
            </label>

            <label htmlFor="MedicaHistory">
                Medical History
            <textarea className="block"
                name="MedicaHistory" 
                type="text-area" 
                placeholder="Insert Patients Medical History" 
                required
                value={MedicalHistory}
                onChange={(e)=>setMedicalHistory(e.target.value)}
            ></textarea>
            </label>

            <label htmlFor="occupation">
                Occupation
            <input 
                name="Occupation" 
                type="text" 
                placeholder="Insert Patients Occupation" 
                required
                value={Occupation}
                onChange={(e)=>setOccupation(e.target.value)}
            />
            </label>
            <label htmlFor="phoneNumber">
                Phone Number
            <input 
                name="phoneNumber" 
                type="text" 
                placeholder="Insert Patients Phone Numer" 
                required
                value={PhoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
            />
            </label>

            <label htmlFor="address">
                Residential Address
            <input 
                name="ResidentialAdress" 
                type="text" 
                placeholder="Insert Patients Address" 
                required
                value={ResidentialAdress}
                onChange={(e)=>setResidentialAdress(e.target.value)}
            />
            </label>
            <button
                type="submit"
            >
                SUBMIT
            </button>
            </form>
        </main>
    )
}