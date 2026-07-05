import React from "react";
import AvailableMeals from "./AvailableMeals";

const Meals=()=>{
    const dummyMeals=[
        {id :1,name:"Shushi",description:"Finest fish",price:10},
         {id:2,name:"Momos",description:"Finest dish",price:20},
          {id:3,name:"Pizza",description:"Finest veggies",price:100},
           {id:4,name:"Siddu",description:"Flavours from himalayan",price:19},
       
      ];
    return (
        <div>
          <AvailableMeals availableMealList={dummyMeals}/>
        </div>
    )
}
export default Meals;