import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PortfolioCards from "./PortfolioCards";
import NavBar from "./NavBar";

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <div id="portfolio" className="portfolio splash__background" name="portfolio">
          <PortfolioCards/>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Portfolio);
