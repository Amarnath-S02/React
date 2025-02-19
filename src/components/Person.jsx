import React,{ useState } from "react";


function Person(){
    const [name,setName]=useState("Amar");
    const handleName=()=>{
        setName(" Guest")
    
     }
return (
    <div>
        <p>Name:{name}</p>
        <button onClick={handleName}>set Name</button>
    </div>
)
}


export default Person
