import React from 'react'
import {useState} from 'react'

function Order(){
    const[name,setName]=useState();
    const[quantity,setQuantity]=useState(0);
    const[comment,setComment]=useState("");
    const[payment,setPayment]=useState("");
    const[shipping,setShipping]=useState("delivery");

    const handleName=(event)=>{
        setName(event.target.value)
    }

    const handleQuantity=(event)=>{
        setQuantity(event.target.value)
    }

    const handleComment=(event)=>{
        setComment(event.target.value)
    }

    const handlePayment=(event)=>{
        setPayment(event.target.value)
    }
    const handleShipping=(event)=>{
        setShipping(event.target.value)
    }
  return (
    <div>
        <input value={name} onChange={handleName} />
        <p>Name: {name}</p>
        <input type="number" value={quantity} onChange={handleQuantity} />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleComment} placeholder='Delivery Details'></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} name="" id="" onChange={handlePayment}>
            <option value="">Select Payment</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
        </select>
        <p>Payment: {payment}</p>

        <label >
            <input type="radio" value="PickUp" onChange={handleShipping} checked={shipping==="Pickup"}  />
            PickUp
        </label>
        <br />
        <label >
            <input type="radio" value="Delivery"  onChange={handleShipping} checked={shipping==="delivery"} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
  )
}

export default Order