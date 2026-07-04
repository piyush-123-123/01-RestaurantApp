import { useState } from "react";
import Header from "./components/Layout/Header";

import Summary from "./components/Layout/Summary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [cartIsVisible,setCartIsVisible]=useState(false);
  const showCartHandler=()=>{
    setCartIsVisible(true);
  }
  const closeCartHandler=()=>{
    setCartIsVisible(false);
  }
  
  return (
    <div>
        <Header onShowCart={showCartHandler} />
        {cartIsVisible && <Cart onCloseCart={closeCartHandler}/>}
        <Summary />
        <main><Meals /></main>
       
    </div>
    
   
  );
}

export default App;
