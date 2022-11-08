import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <Switch>
          <Route exact path={"/Home"}>
            <Home component={Home} />
          </Route>
          <Route path="/Form/" component={Form} />
        </Switch>
      </div>
    </>
  );
};
export default App;
