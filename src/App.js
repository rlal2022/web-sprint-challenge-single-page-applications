import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  return (
    <header>
      <div>
        <h1>Bloomtech Eats</h1>
        <div>
          <nav>  
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/pizza"><button id="order-pizza">Click Here</button></Link>
          
          </nav>

          <Route path="/" component={Home}></Route>
          <Route path="/pizza" component={Form}></Route>
        </div>
      </div>
    </header>
  );
};
export default App;
