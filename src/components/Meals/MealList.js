import React from "react";
import MealItem from "./MealItem";
import Card  from "../UI/Card";

const MealList=(props)=>{

return (
    <Card>
     {
        props.mealList.map((item)=>(
            <MealItem 
            title={item.title}
            description={item.description}
            price={item.price}
            />
        ))
     }
    </Card>
)

}

export default MealList;