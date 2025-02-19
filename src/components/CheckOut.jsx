import React from 'react'
import { placeOrder,cartItem } from './Atom'
import {useRecoilValue,useSetRecoilState} from "recoil"


const CheckOut = () => {
    const Orders=useRecoilValue(placeOrder)
    const  setCartItem=useSetRecoilState(cartItem)          
   function handleOrder(){
    setCartItem([])}

    
   
  return (
    <div>
        <hr />
       <br />
        <button  onClick={()=>{handleOrder()}}>
            place Order
        </button>
        <p>Total Amount:{Orders}</p>
    </div>
  )
}

export default CheckOut