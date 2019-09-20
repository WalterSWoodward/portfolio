import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Imported Components:
import Home from "./components/Home.js";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
