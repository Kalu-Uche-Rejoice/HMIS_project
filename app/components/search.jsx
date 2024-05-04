"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation"
import PatientsList from "./PatientsList";

export default function Search(){
    const [data, setData] = useState(null)
    const [keyword, setkeyword] = useState("");
//const router = useRouter()
const searchParams =  useSearchParams();
const handleSearch = async (e)=>{
    console.log("searching")
    e.preventDefault()

    const data = await fetch ('http://localhost:3000/api/findrecords',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            keyword
        })

    })
    
   var info = await data.json()
   console.log(" info" + info)
     setData(info)
    return data
}


    return(
        <>
            <form 
            className="flex flex-nowrap"
            onSubmit={handleSearch}
        >
            <input
                className="w-3/4 border border-cyan-900"
                type="text"
                name = "search bar"
                placeholder="Search for patient record by hospital number"
                value={keyword}
                onChange={(e)=>setkeyword(e.target.value)}
            />
            <button
                type="submit"
                className="bg-cyan-900"
                onClick= {handleSearch}
            >search</button>
        </form>
        {
            data?(
                    data.map(item=>{
                        <PatientsList/>
                    })
            ):(
                <div>
                    no patient records
                </div>
            )
        }

        </>
        
    )
}