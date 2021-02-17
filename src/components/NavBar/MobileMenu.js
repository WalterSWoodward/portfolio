import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBackground, toggleDropDown } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import HamburgerMenu from './HamburgerMenu';

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
        <div className='mobile_view'>
            <HamburgerMenu handleClick={ this.handleClick }/>
            <div className={this.props.dropDownOpen === true ? 'dropdownOpen' : 'dropdownClosed'}>
                <div className='dropdown__content' onClick={this.handleClick}>
                    <Link to='/' className='navbar_link_button splash__color' onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faHome} className='navbar_icon' aria-hidden='false'/>
                        <div id='about-icon_text' className='icon_text'>Home</div>
                    </Link>
                    <Link to='/portfolio' className='navbar_link_button splash__color' onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faBriefcase} className='navbar_icon' aria-hidden='false'/>
                        <div className='icon_text'>Portfolio</div>
                    </Link>
                    <Link to='/contact' className='navbar_link_button splash__color' onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faEnvelope} className='navbar_icon' aria-hidden='false'/>
                        <div id='contact-icon_text' className='icon_text'>Contact</div>
                    </Link>
                </div>
                <div className="dropdown__space" onClick={this.handleClick}></div>
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
  { changeBackground, toggleDropDown }
)(MobileMenu);