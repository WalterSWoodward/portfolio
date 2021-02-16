import React, { Component, Fragment } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
