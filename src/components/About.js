import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleOverlay } from '../actions';

import NavBar from './NavBar';
import Footer from './Footer';

class About extends React.PureComponent {
  componentDidMount() {
    this.props.toggleOverlay();
  }

  renderLanding = function (){
    return (
      <Fragment>
        <div id='fade_wrapper'
        className="about__wrap body__content"
        style={{ background: this.props.linearGradient }}>
          <div className='header__name'>WALTER WOODWARD</div>
          <div className='box1_description'>FULL STACK WEB DEVELOPER</div>
          <a
            className='box1_link2'
            href='#portfolio'
            aria-label="Click here to view Walter's current projects"
          >
            PORTFOLIO
          </a>
          <a
            className='box1_link3'
            href='#contact'
            aria-label="Click here to view Walter's Contact form"
          >
            CONTACT
          </a>
          <Footer />
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <NavBar/>
        <div style={this.props.loadOverlay} id='loadOverlay' />
        <div
          id='about'
          className='about'
        >
          {this.renderLanding()}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    backgroundColor: state.backgroundColor,
    loadOverlay: state.loadOverlay,
    linearGradient: state.linearGradient,
    darkerBackgroundColor: state.darkerBackgroundColor
  };
};

export default connect(
  mapStateToProps,
  { toggleOverlay }
)(About);
