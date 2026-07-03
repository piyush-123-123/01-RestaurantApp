import React, { Fragment } from "react";
import classes from "./Header.module.css"
import foodImage from "../../assets/food.png";
import HeaderCartButton from "./HeaderCartButton";


const Header =(props)=>{
  
    return (
        <Fragment>
        <header className={classes.header}>
        <h1 className="header-heading">React Meals</h1>
        <HeaderCartButton total={props.total}/>
        </header>
         
        <div className={classes['main-image']}>
              <img src={foodImage} alt="food" />

            

        </div>
         <section className={classes.summary}>
                <h1>Delicious Food,Deliver To You</h1>
                <p>Working on APplication ,soon we deliver food to your houses. Regards Piyush</p>
              </section>
        </Fragment>
    )

}
export default Header;