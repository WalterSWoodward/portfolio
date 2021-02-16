import React, { Component, Fragment } from "react";
import { connect } from "react-redux";


import NavBar from "./NavBar";
import PortfolioCards from "./PortfolioCards";
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
