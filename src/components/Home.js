import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import NavBar from './NavBar';

class Home extends React.PureComponent {
  renderLanding = function (){
    return (
      <Fragment>
        <div id='fade_wrapper' className="body__content splash__background">
          <div className='body-content__name'>WALTER WOODWARD</div>
          <div className='body-content__title'>FULL STACK WEB DEVELOPER</div>
          <Link
            className='body-content__link'
            to='/portfolio'
            aria-label="Click here to view Walter's current projects"
          >
            PORTFOLIO
          </Link>
          <Link
            className='body-content__link'
            to='/contact'
            aria-label="Click here to view Walter's Contact form"
          >
            CONTACT
          </Link>
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <NavBar/>
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
  return { };
};

export default connect(mapStateToProps)(Home);
