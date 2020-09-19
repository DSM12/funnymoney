import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />

      
    </div>
    </Router>
  );
}

export default App;
