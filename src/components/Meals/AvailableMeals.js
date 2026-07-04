import React from "react";
import MealItem from "./MealItem";
import Card  from "../UI/Card";
import classes from "./AvailableMeals.module.css"


const AvailableMeals=(props)=>{

    const mealList=props.availableMealList.map((item)=>(
            <MealItem 
            key={item.id}
            meal={item}
            />
        ))
    ;

 return (
    <div className={classes.meals}>
     <Card>
          {mealList}
    </Card>
    </div>
    
)

}

export default AvailableMeals;