import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <h1>Home Page</h1>
          </Route>

          <Route path="/login">
            <Header />
            <h1>Log In Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
