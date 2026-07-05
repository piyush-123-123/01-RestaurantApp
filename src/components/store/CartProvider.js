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
    if(action.type=="REMOVE_ITEM"){
       const existingCartItems=state.items.find(
     (item)=>item.id===action.id
    )
    let updatedCartItems;
    if(existingCartItems.amount===1){
         updatedCartItems = state.items.filter(
      (item) => item.id !== action.id
    );
    }else{
      updatedCartItems=state.items.map((item)=>{
            if(item.id===action.id){
             return {
                ...item,
                amount: item.amount - 1 
             }
            }
           return item;
        })
    }
    return {
            items: updatedCartItems,
            totalAmount: state.totalAmount - existingCartItems.price
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
    const removeItemHandler=(id)=>{
        dispatchCartAction({
            type:"REMOVE_ITEM",
            id: id
        })
    }

 const cartItem={
    items:cartState.items,
    totalItems:cartState.items.length,
    addItem:addItemHandler,
    removeItem:removeItemHandler
 }
 return(
    <CartContext.Provider value={cartItem}>
        {props.children}
    </CartContext.Provider>
 )

}
export default CartProvider;