import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import FunnyMoney from "./pages/FunnyMoney";


function App() {
  return (
    <div>
      <Home></Home>
      <FunnyMoney></FunnyMoney>
    </div>
  );
}

export default App;
