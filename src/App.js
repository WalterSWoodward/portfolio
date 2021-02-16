import React, { Component, Fragment } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";

class App extends Component {
  render() {
    // removed `basename={process.env.PUBLIC_URL}` attr from <Router>
    // per reactrouter's docs, this is only necessary if the application is served
    // from a subdirectory
    return (
      <Router>
        <Fragment>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul> */}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
