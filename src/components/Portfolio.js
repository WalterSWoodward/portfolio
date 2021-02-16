import React, { Component, Fragment } from "react";

import NavBar from "./NavBar";
import PortfolioCards from "./Portfolio/Cards";
import Footer from "./Footer";

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <PortfolioCards/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Portfolio;
