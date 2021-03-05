import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import ContactLinks from './ContactLinks';

class About extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div className='flex__column'>
            <div className="image" />
            <div id='fade_wrapper' className="flex-column__content flex__column">
                <div className='flex-column-content__name'>WALTER WOODWARD</div>
                <div className='flex-column-content__title'>FULL STACK WEB DEVELOPER</div>
                <Link
                className='flex-column-content__link'
                to='/portfolio'
                aria-label="Click here to view Walter's current projects"
                >
                PORTFOLIO
                </Link>
                <Link
                className='flex-column-content__link'
                to='/contact'
                aria-label="Click here to view Walter's Contact form"
                >
                CONTACT
                </Link>
                <ContactLinks/>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
