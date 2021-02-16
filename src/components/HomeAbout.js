import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import HomeContactLinks from './HomeContactLinks';

class HomeAbout extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div id='about' className='about'>
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
                <HomeContactLinks/>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeAbout;
