import { useState } from "react";
import Header from "./components/Layout/Header";

import Summary from "./components/Layout/Summary";
import Meals from "./components/Meals/Meals";

function App() {
  
  return (
    <div>
        <Header />
        <Summary />
        <main><Meals /></main>

    </div>
    
   
  );
}

export default App;
