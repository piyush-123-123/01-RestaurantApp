import { useState } from "react";
import Header from "./components/Layout/Header";

import Summary from "./components/Layout/Summary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  
  return (
    <div>
        <Header />
        <Cart />
        <Summary />
        <main><Meals /></main>
       
    </div>
    
   
  );
}

export default App;
