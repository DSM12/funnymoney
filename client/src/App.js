import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Home></Home>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
