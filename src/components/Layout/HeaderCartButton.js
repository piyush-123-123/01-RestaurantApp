import React,{useContext, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import Cart from "../Cart/Cart";
import CartContext from "../store/cart-context";

const HeaderCartButton=(props)=>{
  const ctxCart=useContext(CartContext);
    
   
return (
    <button  className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span> 
            <span>Your Cart</span>
            <span className={classes.badges}>{ctxCart.totalItems}</span>
            </button>
)

}
export default HeaderCartButton;
