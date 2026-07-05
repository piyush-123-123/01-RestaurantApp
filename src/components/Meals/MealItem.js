import React, { useContext, useRef, useState } from "react";
import classes from  "./MealItem.module.css";
import Input from "../UI/Input";
import CartContext from "../store/cart-context";

const MealItem=(props)=>{
    
    
     const amountRef=useRef(1);
    const ctx=useContext(CartContext);
  
    
    const onFormSubmit=(event)=>{
        event.preventDefault();
          const items={
        id : props.meal.id,
        name:props.meal.name,
        price:props.meal.price,
        amount :Number(amountRef.current.value)
    }

     ctx.addItem(items);
    }
    

return (
    <div className={classes.oneMeal}>
        <div className={classes.mealItem}>
        <h3 className={classes.h3}>{props.meal.name}</h3>
        <p>{props.meal.description}</p>
        <h4 className={classes.price}>{props.meal.price}</h4>
        </div>
        <form className={classes.form} onSubmit={onFormSubmit}>
           <Input
           ref={amountRef}
           label="Amount " 
           
           input={{
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