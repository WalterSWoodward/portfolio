import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeBackground, toggleDropDown } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faBrain, faHandshake, faGlobeAsia, faPalette} from '@fortawesome/free-solid-svg-icons';
const bodyScrollLock = require('body-scroll-lock');


class NavBar extends Component {
  changeColor = () => {
    this.props.changeBackground();
  };

  handleClick = () => {
    this.props.toggleDropDown();
  };

  hamburgerMenu = () => {
    return (
      <Fragment>
        <div className='bars'>
          <div
            className='bar1'
            style={{ backgroundColor: this.props.backgroundColor }}
          />
          <div
            className='bar2'
            style={{ backgroundColor: this.props.backgroundColor }}
          />
          <div
            className='bar3'
            style={{ backgroundColor: this.props.backgroundColor }}
          />
        </div>
        <div
          className='mobile_view_text'
          style={{ color: this.props.backgroundColor }}
        >
          {' '}
          Menu{' '}
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
        <a
          id='about_link'
          href='#about'
          className='navbar_link_button'
          style={{ color: this.props.backgroundColor }}
        >
          <FontAwesomeIcon
            icon={faGlobeAsia}
            id='about_icon'
            className='navbar_icon'
            aria-hidden='false'
          />
          <div id='about-icon_text' className='icon_text'>
            Home
          </div>
        </a>
        <a
          id='journey_link'
          href='#journey'
          className='navbar_link_button'
          style={{ color: this.props.backgroundColor }}
        >
          <FontAwesomeIcon
            icon={faUserAstronaut}
            id='journey_icon'
            className='navbar_icon'
            aria-hidden='false'
          />
          <div id='journey-icon_text' className='icon_text'>
            Journey
          </div>
        </a>
        <a
          id='portfolio_link'
          href='#portfolio'
          className='navbar_link_button'
          style={{ color: this.props.backgroundColor }}
        >
          <FontAwesomeIcon
            icon={faBrain}
            id='portfolio_icon'
            className='navbar_icon'
            aria-hidden='false'
          />
          <div id='portfolio-icon_text' className='icon_text'>
            Portfolio
          </div>
        </a>
        <a
          id='contact_link'
          href='#contact'
          className='navbar_link_button'
          style={{ color: this.props.backgroundColor }}
        >
          <FontAwesomeIcon
            icon={faHandshake}
            id='contact_icon'
            className='navbar_icon'
            aria-hidden='false'
          />
          <div id='contact-icon_text' className='icon_text'>
            Contact
          </div>
        </a>
        <a
          id='splash'
          href='#splash'
          onClick={this.changeColor}
          className='navbar_link_button'
          style={{ color: this.props.backgroundColor }}
        >
          <FontAwesomeIcon
            icon={faPalette}
            id='splash_icon'
            className='navbar_icon'
            style={{ color: this.props.backgroundColor }}
            aria-hidden='false'
          />
          <div id='splash-icon_text' className='icon_text'>
            Splash
          </div>
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
        {/* Both mobile_view and desktop_view menus are loaded, but displayed/hidden via css */}
        <div className='mobile_view' onClick={this.handleClick}>
          <Fragment>{this.hamburgerMenu()} </Fragment>
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
