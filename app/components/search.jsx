"use client";

export default function Search(){
    return(
        <>
            <form 
            className="flex flex-nowrap"
            
        >
            <input
                className="w-3/4 border border-cyan-900"
                type="text"
                name = "search bar"
                placeholder="Search for patient record by hospital number"
            />
            <button
                type="submit"
                className="bg-cyan-900"
            >search</button>
        </form>
        </>
        
    )
}