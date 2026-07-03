import { useState } from "react";
import Header from "./components/Layout/Header";
import MealList from "./components/Meals/MealList";

function App() {
  const dummy=[
    {title:"Shushi",description:"Finest fish",price:"$10"},
     {title:"Momos",description:"Finest dish",price:"$50"},
      {title:"Pizza",description:"Finest veggies",price:"$100"},
       {title:"Siddu",description:"Flavours from himalayan",price:"$19"}
  ];

  const [count,setCount]=useState(0);
  const countHandler=()=>{
    setCount((c)=>{
      return c+1;
    })
  }
  return (
    <div>
        <Header total={count}/>
        <button onClick={countHandler}>increase</button>
        <MealList mealList={dummy}/>
    </div>
    
   
  );
}

export default App;
