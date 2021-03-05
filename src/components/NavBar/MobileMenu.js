import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDropDown } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import HamburgerMenu from './MobileMenu/HamburgerMenu';

const bodyScrollLock = require('body-scroll-lock');

class MobileMenu extends Component {
  handleClick = (event) => {
    event.stopPropagation();
    this.props.toggleDropDown();
  };

  render() {
    const targetElement = document.body;
    this.props.dropDownOpen
      ? bodyScrollLock.disableBodyScroll(targetElement)
      : bodyScrollLock.enableBodyScroll(targetElement);
    return (
        <div className='mobile-menu__wrap'>
            <div className="mobile-menu__menu">
              <HamburgerMenu handleClick={ this.handleClick }/>
              <div className={this.props.dropDownOpen === true ? 'dropdownOpen' : 'dropdownClosed'}>
                  <div className='dropdown__content' onClick={this.handleClick}>
                      <Link to='/' className='navbar__link' onClick={this.handleClick}>
                          <FontAwesomeIcon icon={faHome} className='navbar__icon' aria-hidden='false'/>
                          <div>Home</div>
                      </Link>
                      <Link to='/portfolio' className='navbar__link' onClick={this.handleClick}>
                          <FontAwesomeIcon icon={faBriefcase} className='navbar__icon' aria-hidden='false'/>
                          <div>Portfolio</div>
                      </Link>
                      <Link to='/contact' className='navbar__link' onClick={this.handleClick}>
                          <FontAwesomeIcon icon={faEnvelope} className='navbar__icon' aria-hidden='false'/>
                          <div>Contact</div>
                      </Link>
                  </div>
                  <div className="dropdown__overlay" onClick={this.handleClick}></div>
              </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dropDownOpen: state.dropDownOpen
  };
};

export default connect(
  mapStateToProps,
  { toggleDropDown }
)(MobileMenu);
