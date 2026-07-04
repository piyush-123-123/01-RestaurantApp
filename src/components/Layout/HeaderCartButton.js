import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import Cart from "../Cart/Cart";

const HeaderCartButton=(props)=>{
    const cartOpenHandler=()=>{
        return (
            <Cart />
        )
    }
return (
    <button  className={classes.button} onClick={cartOpenHandler}>
            <span className={classes.icon}><CartIcon /></span> 
            <span>Your Cart</span>
            <span className={classes.badges}>3</span>
            </button>
)

}
export default HeaderCartButton;
