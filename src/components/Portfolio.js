import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Cards from "./Card";
import NavBar from "./NavBar";

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <div id="portfolio" className="portfolio splash" name="portfolio">
          <Cards />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Portfolio);
