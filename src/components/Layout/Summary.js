import React from "react";
import classes from "./Summy.module.css"

const Summary=()=>{
    return (
         <section className={classes.summary}>
                <h1>Delicious Food,Deliver To You</h1>
                <p >Working on APplication ,soon we deliver food to your houses. Regards Piyush</p>
                <p className={classes.second}>Happy Fooding</p>
              </section>
    )
}
export default Summary;