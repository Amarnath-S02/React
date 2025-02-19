import React,{useState} from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useMemo } from 'react'

const Usememo = () => {

//useRef
const userRef=useRef(null)

const arr=[10,20,80,40,50];

const[userId,SetUserId]=useState("")
const[apiData,setApiData]=useState("")


useEffect( ()=>{
 const fetchData= async ()=>{
  try{
  const data=await fetch(`https://dummyjson.com/todos/${userId}`)
  const response=await data.json();
  setApiData(response.todo)
}
catch(error)
{console.log(error)}

}
fetchData()
},[userId]);



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
        <p>Api Data:{apiData ? JSON.stringify(apiData): `loading..`}</p>
        <p></p>
        <input type="text" ref={userRef} placeholder='Enter the UserId' onChange={(event)=>{SetUserId(event.target.value)}} />
    </div>
  )
}

export default Usememo