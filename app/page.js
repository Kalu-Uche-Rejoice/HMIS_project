/*"use client"
import Image from "next/image";
import { useState } from "react";

const [username, setUserName] = useState("");
const [password, setpassword] = useState("");

const handleSubmit = async(e)=>{
  e.preventDefault();

  try {
    await
  } catch (error) {
    
  }

}*/

export default function Home() {
  return (
    <main>
      <div className="">
      <form //onSubmit={handleSubmit}
      >
        <label htmlFor="username">
            USERNAME
        </label>
        <input
          name="username"
          type = "text"
          //value={username}
          //onChange={(e)=>setUserName(e.target.value)}
          placeholder="insert your username"
        />

        <label htmlFor="password">
            PASSWORD
        </label>
        <input
          name="password"
          type = "password"
          //value={password}
          //onChange={(e)=>setpassword(e.target.value)}
          placeholder="insert your password"
        />
        <button 
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          LOGIN
        </button>
      </form>
      </div>      
    </main>
  );
}
