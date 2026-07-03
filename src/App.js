import { useState } from "react";
import Header from "./components/Layout/Header";

function App() {
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
    </div>
   
  );
}

export default App;
