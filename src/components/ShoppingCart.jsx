import React from 'react'
import { cartItem } from './Atom'
import { useRecoilState } from 'recoil'

const ShoppingCart = () => {

    const [items,setItems]=useRecoilState(cartItem)
    function increment(product){
      setItems((items)=>{
        return items.map((item)=>{
           return  item.name == product.name ?{...product,quantity:item.quantity+1} : item 
        })
      })
    }
    function decrement(product){
        setItems((items)=>{
          return items.map((item)=>{
             return  item.name == product.name ?{...product,quantity:item.quantity-1} : item 
          })
        })
      }
  return (
    <div className='products'>
        <hr />
        <h1>Shopping Cart</h1>
     <div >
        {items.map((product,index)=>{
             return <div className='list' key={index}>
                
                <p>Name:{product.name}</p>
                <p>Cat:{product.category}</p>
                <p>Price:{product.price}</p>
                <p>Quantity:{product.quantity}</p> 
                <button className='btn1' onClick={()=>{increment(product)}}>+</button> 
                 <button className='btn2' onClick={()=>{decrement(product)}}>-</button>   
                
            </div>
        })}
        
        </div>
    </div>
  )
}

export default ShoppingCart