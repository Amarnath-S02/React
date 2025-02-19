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

import { useState } from 'react'
import Callback from './components/CAllback'
import ProductList from './components/ProductList'
import {RecoilRoot} from "recoil"
import ShoppingCart from './components/ShoppingCart'
import CheckOut from './components/CheckOut'



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
   {/* <p>Count:{count}</p>
   <Callback handleClick={handleClick}/> */}
   {/* <Usememo/> */}

   <RecoilRoot>
    <ProductList/>
    <ShoppingCart/>
    <CheckOut/>
   </RecoilRoot>

    </>
    
  )
}

export default App