import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./components/Home.js";

class App extends Component {
  render() {
    // removed `basename={process.env.PUBLIC_URL}` attr from <Router>
    // per reactrouter's docs, this is only necessary if the application is served
    // from a subdirectory
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
