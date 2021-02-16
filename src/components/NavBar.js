import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeBackground, toggleDropDown } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faEnvelope} from '@fortawesome/free-solid-svg-icons';
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
    event.stopPropagation();
    this.props.toggleDropDown();
  };

  hamburgerMenu = () => {
    return (
      <Fragment>
        <div className="menu" onClick={this.handleClick}>
          <div className='bars'>
            <div className='bar splash' />
            <div className='bar splash' />
            <div className='bar splash' />
          </div>
          <div className='mobile_view_text' style={{ color: this.props.backgroundColor }} >Menu</div>
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
        <a href='/about' className='navbar_link_button' style={{ color: this.props.backgroundColor }} >
          <FontAwesomeIcon icon={faHome} className='navbar_icon' aria-hidden='false'/>
          <div id='about-icon_text' className='icon_text'>Home</div>
        </a>
        <a href='/portfolio' className='navbar_link_button' style={{ color: this.props.backgroundColor }} >
          <FontAwesomeIcon icon={faBriefcase} className='navbar_icon' aria-hidden='false'/>
          <div className='icon_text'>Portfolio</div>
        </a>
        <a href='/contact' className='navbar_link_button' style={{ color: this.props.backgroundColor }} >
          <FontAwesomeIcon icon={faEnvelope} className='navbar_icon' aria-hidden='false'/>
          <div id='contact-icon_text' className='icon_text'>Contact</div>
        </a>
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
        <div className='mobile_view'>
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
