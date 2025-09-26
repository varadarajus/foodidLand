import React from "react";

import Header from "./Componets/Header/Header";
import FoodItems from "./Componets/Header/FoodItems/FoodItems";
import Footer from "./Componets/Header/FoodItems/Footer/Footer";

const App=()=>{
  return(
    <div>
      <Header/>
      <div style={{backgroundColor:"#73b9e2ff",padding:"20px",textAlign:"center"}}>
      <h2>Simple and Tasty reception</h2>
      <p>Feel it like Home,Here is your dishes</p>
      <FoodItems/>
      </div>
      <div style={{backgroundColor:"#693da1ff",padding:"20px",textAlign:"center"}}>
      <Footer />
      </div>
    </div>
  )
}

export default App;