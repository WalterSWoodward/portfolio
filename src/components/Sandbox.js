import React, { Component, Fragment } from "react";

class Sandbox extends Component {
    renderBlocks = () => {
        let blocks = [...Array(100).keys()].map((_val, index) => (
            <div className="block" key={index}>w</div>
        ));
        return blocks;
      };
    render() {
        return (
            <Fragment>
                {this.renderBlocks()}
            </Fragment>
        );
    }
}

export default Sandbox;
