import React from 'react'
import {useRecoilValue,useSetRecoilState} from "recoil"
import {productItem,cartItem} from "./Atom"
import "./ProductList.scss"

const ProductList = () => {

  const products=useRecoilValue(productItem)
  const setCardItem=useSetRecoilState(cartItem)

  function addToCart(product){

     setCardItem((cartItems)=>{
        const existingItem = cartItems.find((item)=>  item.name==product.name);
        
    
    if(existingItem){
        return cartItems.map((item)=>{
           return (item.name==product.name ? {...item,quantity:item.quantity+1}:item)
        })

    }
    else{
        return [...cartItems,{...product,quantity:1}]
    }

     })
  }

  return (
    <div className='products'>
        <h1>ProductList</h1>
        {/* <hr /> */}
       <div>
      {products.map((product,index)=>{
       return  <div className='list' key={index}> <p> Name:{product.name}</p>
        <p>Cat:{product.category}</p>
        <p>Price:{product.price}</p>
        <button onClick={()=>{addToCart(product)}}>Add to Cart</button> </div>
        
      })}
      </div>
    </div>
  )
}

export default ProductList