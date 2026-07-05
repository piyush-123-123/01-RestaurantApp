import { useReducer, useState } from "react";
import CartContext from "./cart-context";

 const initialCartState={
        items:[],
        totalAmount:0
    }
const cartReducer=(state,action)=>{
    
  
    if(action.type=="ADD_ITEM"){
        const existingCartItems=state.items.find(
     (item)=>item.id===action.item.id
    )
    let updatedCartItems;
    if(existingCartItems){
        updatedCartItems=state.items.map((item)=>{
            if(item.id===action.item.id){
             return {
                ...item,
                amount: item.amount + action.item.amount
             }
            }
           return item;
        })
     
    }else{
        updatedCartItems=state.items.concat(action.item);
    }
        return {
            items: updatedCartItems,
            totalAmount: state.totalAmount+ Number(action.item.price)
        }
    }
    return state;
}

const CartProvider=(props)=>{
 
   
    const [cartState,dispatchCartAction]=useReducer(cartReducer,initialCartState);
    

    const addItemHandler=(item)=>{
      
      dispatchCartAction({
        type:"ADD_ITEM",
        item:item
      })

    }

 const cartItem={
    items:cartState.items,
    totalItems:cartState.items.length,
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