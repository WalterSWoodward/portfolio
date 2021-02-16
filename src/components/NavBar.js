import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeBackground, toggleDropDown } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const bodyScrollLock = require('body-scroll-lock');

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: this.props.dropdown
    };
  }
  changeColor = () => {
    this.props.changeBackground();
  };

  handleClick = (event) => {
    this.props.toggleDropDown();
  };

  hamburgerMenu = () => {
    return (
      <Fragment>
        <div className="menu">
          <div className='bars'>
            <div className='bar splash__background' />
            <div className='bar splash__background' />
            <div className='bar splash__background' />
          </div>
          <div className='mobile_view_text splash__color'>Menu</div>
        </div>
      </Fragment>
    );
  };

  componentDidMount() {
    this.props.changeBackground();
  }

  renderMenu = () => {
    return (
      <Fragment>
        <Link to='/about' className='navbar_link_button splash__color'>
          <FontAwesomeIcon icon={faHome} className='navbar_icon' aria-hidden='false'/>
          <div id='about-icon_text' className='icon_text'>Home</div>
        </Link>
        <Link to='/portfolio' className='navbar_link_button splash__color'>
          <FontAwesomeIcon icon={faBriefcase} className='navbar_icon' aria-hidden='false'/>
          <div className='icon_text'>Portfolio</div>
        </Link>
        <Link to='/contact' className='navbar_link_button splash__color'>
          <FontAwesomeIcon icon={faEnvelope} className='navbar_icon' aria-hidden='false'/>
          <div id='contact-icon_text' className='icon_text'>Contact</div>
        </Link>
      </Fragment>
    );
  };

  render() {
    let dropdown = this.props.dropDownOpen === true ? 'dropdownOpen' : 'dropdownClosed';
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;
    const targetElement = document.body;
    this.props.dropDownOpen
      ? disableBodyScroll(targetElement)
      : enableBodyScroll(targetElement);
    return (
      <nav id='navigation'>
        <div className='mobile_view' onClick={this.handleClick}>
          {this.hamburgerMenu()}
          <div className={dropdown}>{this.renderMenu()}</div>
        </div>
        <div className='desktop_view'>{this.renderMenu()}</div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    backgroundColor: state.backgroundColor,
    dropDownOpen: state.dropDownOpen
  };
};

export default connect(
  mapStateToProps,
  { changeBackground, toggleDropDown }
)(NavBar);
