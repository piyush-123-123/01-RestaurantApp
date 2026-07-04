import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider=(props)=>{
    const [cartItems,setCartItems]=useState([]);
    const addItemHandler=(item)=>{
        setCartItems((prev)=>
        ( [...prev,item])
        )

    }

 const cartItem={
    items:cartItems,
    totalItems:cartItems.length,
    addItem:addItemHandler,
    removeItem:(item)=>{}
 }
 return(
    <CartContext.Provider value={cartItem}>
        {props.children}
    </CartContext.Provider>
 )

}
export default CartProvider;