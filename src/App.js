import React, { Component, Fragment } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { connect } from 'react-redux';
import { changeBackground } from './actions';

import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";

class App extends Component {
  componentDidMount() {
    this.props.changeBackground();
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/portfolio" component={Portfolio} exact/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = () => {
  return { };
};

export default connect(
  mapStateToProps,
  { changeBackground }
)(App);
