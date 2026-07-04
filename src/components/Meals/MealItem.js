import React from "react";
import classes from  "./MealItem.module.css";
import Input from "../UI/Input";
const MealItem=(props)=>{
return (
    <div className={classes.oneMeal}>
        <div className={classes.mealItem}>
        <h3 className={classes.h3}>{props.meal.title}</h3>
        <p>{props.meal.description}</p>
        <h4 className={classes.price}>{props.meal.price}</h4>
        </div>
        <form className={classes.form}>
           <Input label="Amount " input={{
             id:props.meal.id,
             type:"number",
             min:'1',
             max:'5',
             defaultValue:'1'
           }}/>
            <button type="submit" className={classes.button}>+Add</button>
        </form>
    </div>

)
}
export default MealItem;