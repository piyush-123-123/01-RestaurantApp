import React from "react";
import classes from  "./MealItem.module.css";
const MealItem=(props)=>{
return (
    <div className={classes.oneMeal}>
        <div className={classes.mealItem}>
        <h3 className={classes.h3}>{props.meal.title}</h3>
        <p>{props.meal.description}</p>
        <h4 className={classes.price}>{props.meal.price}</h4>
        </div>
        <form className={classes.form}>
            <div>
            <label name="amount">Amount</label>
            <input name="amount" type="number "/>
            </div>
            <button type="submit" className={classes.button}>Add To Cart</button>

        </form>
    </div>

)
}
export default MealItem;