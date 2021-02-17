import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBackground } from '../actions';

import DesktopMenu from './NavBar/DesktopMenu';
import MobileMenu from './NavBar/MobileMenu';

class NavBar extends Component {
  componentDidMount() {
    this.props.changeBackground();
  }

  render() {
    // Note: Both menus are always rendered. CSS Media Queries determine which of them is visible
    return (
      <nav id='navigation' className='navbar__navbar'>
        <DesktopMenu/>
        <MobileMenu/>
      </nav>
    );
  }
}

const mapStateToProps = () => {
  return { };
};

export default connect(
  mapStateToProps,
  { changeBackground }
)(NavBar);
