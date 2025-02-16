
import React from 'react'
import { useState } from 'react'

function Food(){
    const[fruite,setFruite]=useState(["orange","Apple","Mango"])

    function handleFruite(){

        const newFruite=document.getElementById("Food").value;
        document.getElementById("Food").value="";
   
        setFruite(c=>[...c,newFruite])

    }

  return (
    <div>
        <h2>List of Fruits</h2>
        <ul>
           {fruite.map((fruites,index)=> <li key={index}>{fruites}</li>)} 
        </ul>

        <input type="text" id='Food' placeholder='Add Food'  />
        <button onClick={handleFruite}>Add</button>
    </div>
  )
}

export default Food