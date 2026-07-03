import React from "react";
import classes from "./MealItem.css"
const MealItem=(props)=>{
return (
    <div className={classes.mealItem}>

        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4>{props.price}</h4>

    </div>
)
}
export default MealItem;