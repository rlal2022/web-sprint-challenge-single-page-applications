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
            <Link to="/pizza"><button id="order-pizza"></button></Link>
          Order Here
          </nav>

          <Route path="/" component={Home}></Route>
          <Route path="/pizza" component={Form}></Route>
        </div>
      </div>
    </header>
  );
};
export default App;
