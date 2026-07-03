import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton=(props)=>{
return (
    <button style={{width:"15%"}} className={classes.button}>
            <span className={classes.icon}><CartIcon /></span> 
            <span>Your Cart</span>
            <span>{props.total}</span>
            </button>
)

}
export default HeaderCartButton;
