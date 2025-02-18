import React,{useState} from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useMemo } from 'react'

const Usememo = () => {

    //useRef
const userRef=useRef(null)
const arr=[10,20,80,40,50];

const[person,SetPerson]=useState("")

useEffect(()=>{
 userRef.current.focus();
 console.log("focus on Input field")}
,[userRef])

const sum=useMemo(()=>{
   return arr.reduce((acc,num)=>acc+num,0);
},[arr]);

  return (
    <div>
        <p>Array Sum:{sum}</p>
        <p>{person}</p>
        <input type="text" ref={userRef} placeholder='Enter  Your Name' onChange={(event)=>{SetPerson(event.target.value)}} />
    </div>
  )
}

export default Usememo