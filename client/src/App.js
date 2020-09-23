import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
      </div>



    </Router>
  );
}

export default App;
