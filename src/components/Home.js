import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleOverlay } from '../actions';

import NavBar from './NavBar';

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.toggleOverlay();
  }

  renderLanding = function (){
    return (
      <Fragment>
        <div id='fade_wrapper'
        className="body__content splash">
          <div className='body-content__name'>WALTER WOODWARD</div>
          <div className='body-content__title'>FULL STACK WEB DEVELOPER</div>
          <a
            className='body-content__link'
            href='/portfolio'
            aria-label="Click here to view Walter's current projects"
          >
            PORTFOLIO
          </a>
          <a
            className='body-content__link'
            href='/contact'
            aria-label="Click here to view Walter's Contact form"
          >
            CONTACT
          </a>
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
    loadOverlay: state.loadOverlay,
  };
};

export default connect(
  mapStateToProps,
  { toggleOverlay }
)(Home);
