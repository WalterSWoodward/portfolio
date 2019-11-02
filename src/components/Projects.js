import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProjectCards from "./Card";

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <div id="portfolio" className="portfolio" name="portfolio">
          <ProjectCards />
          </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {backgroundColor: state.backgroundColor};
}

export default connect(mapStateToProps)(Projects);
