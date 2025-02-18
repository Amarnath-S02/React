import Hello from './components/Hello'
import React, { useCallback } from 'react'
import Button from "./components/Button"
import Person from  "./components/Person"
import Timer from './components/Timer'
import Order from './components/Order'
// import Food from './components/food'
import Useeffect from './components/Useeffect'
import Display from './components/Display'
import Useref from './components/Useref'
import Usememo from './components/USememo'
import { useState } from 'react'
import Callback from './components/CAllback'



const App = () => {
  // const userinfo={
  //   name:"Amar",
  //   age:"23"
  // };
  const[count,setCount]=useState(0)

  const handleClick= useCallback(()=>{
    console.log(`it memoizes the Function HandleClick 
      so it prevent unecessary rendering of child Component`)
    setCount(prev=>prev+1)
  },[])

  return (
    <>
    {/* <Person/> */}
    {/* <Timer/> */}
    {/* {  <Order/>} */}
    {/* <Food/> */}
    {/* <Useeffect/> */}
    {/* <Display/> */}
    {/* <Useref/> */}
  {/*   <Usememo/> */}
   <p>Count:{count}</p>
   <Callback handleClick={handleClick}/>

    </>
    
  )
}

export default App