import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Modal from "./components/Modal";


function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
