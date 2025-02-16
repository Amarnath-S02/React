import React from "react";
import { useState } from "react";
import "./timer.scss"

function Timer() {
    
    
   const[count,setCount]=useState(0)

   const handleIncrement=()=>{
     setCount(count+1);

   }
   const handleDecrement=()=>{
    setCount(count-1);

  }
  const handleReset=()=>{
    setCount(0);

  }

  return (
    <div className="Timer">
        <p className="count">{count}</p>
        <button onClick={handleIncrement} className="bt1">Increment</button>
        <button onClick={handleReset} className="bt2">Reset</button>
        <button onClick={handleDecrement} className="bt3">Decrement</button>
    </div>
  )
}

export default Timer