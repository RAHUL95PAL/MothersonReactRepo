import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
// const [data,setData]=useState([])

const data=useLoaderData()

//     useEffect(()=>{
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(res=>res.json())
//         .then(data=>setData(data))
//     },[])
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-3 text-3xl">
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="Git_Picture" width={300}></img>
        </div>
    );
}


export const githubInfoLoader =  async ()=>{

    const res= await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json();
}