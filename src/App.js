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
            <Link to="/form">Order Here</Link>
            <Link to="/">Home</Link>
          </nav>

          <Route exact path="/" component={Home}></Route>
          <Route path="/pizza" component={Form}></Route>
        </div>
      </div>
    </header>
  );
};
export default App;
