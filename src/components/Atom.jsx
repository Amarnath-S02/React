import {atom,selector} from "recoil";
import product from "./product"

// export const countState=atom({
//  key:countState,
//  default:0
// });

export const productItem=atom({
    key:"productItem",
    default:product
});

export const cartItem=atom({
    key:"cardItem",
    default:[]
});


export const placeOrder=selector({
    key:"placeOrder",
    get:({get})=>{
       const orders=get(cartItem)
       return  orders.reduce((acc,item)=>{
          const sum= item.quantity * item.price
            return  acc+sum
        },0)

    }
})