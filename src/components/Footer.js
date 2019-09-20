import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ color: this.props.backgroundColor }}>
        &copy; 2018 Walter S Woodward{" "}
      </footer>
    );
  }
}

const mapStateToProps = state => {
  return { backgroundColor: state.backgroundColor };
};

export default connect(
  mapStateToProps,
  {}
)(Footer);
