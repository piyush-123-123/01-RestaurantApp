import React from "react";
import AvailableMeals from "./AvailableMeals";

const Meals=()=>{
    const dummyMeals=[
        {id :1,title:"Shushi",description:"Finest fish",price:"$10"},
         {id:2,title:"Momos",description:"Finest dish",price:"$50"},
          {id:3,title:"Pizza",description:"Finest veggies",price:"$100"},
           {id:4,title:"Siddu",description:"Flavours from himalayan",price:"$19"}
      ];
    return (
        <div>
          <AvailableMeals availableMealList={dummyMeals}/>
        </div>
    )
}
export default Meals;