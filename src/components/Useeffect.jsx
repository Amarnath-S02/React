import React from "react";
import {useState} from "react";
import { useEffect } from "react";

function Useeffect(){
    const[count,setCount]=useState(0);
     function handleCount(){
        setCount(c=>c+1)
     }

     useEffect(()=>{
        document.title=`count:${count}`
        console.log("UseEffcet is running after Render")


        return ()=>{}
     }
    
     
     ,[count]);

     
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={handleCount}>Add</button>
        </div>

    )
}

export default Useeffect;