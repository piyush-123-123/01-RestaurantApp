import React, { Fragment } from "react";
import classes from "./Header.module.css"
import foodImage from "../../assets/food.png";
import HeaderCartButton from "./HeaderCartButton";


const Header =(props)=>{
    
    

    return (
        <Fragment>
        <header className={classes.header}>
        <h1 className="header-heading">React Meals</h1>
        <HeaderCartButton  onClick={props.onShowCart}/>
        </header>
         
        <div className={classes['main-image']}>
              <img src={foodImage} alt="food" />

        </div>
        
        </Fragment>
    )

}
export default Header;