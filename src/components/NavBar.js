import React, { Component } from 'react';

import DesktopMenu from './NavBar/DesktopMenu';
import MobileMenu from './NavBar/MobileMenu';

class NavBar extends Component {
  render() {
    // Note: Both menus are always rendered. CSS Media Queries determine which of them is visible
    return (
      <nav className='navbar__wrap'>
        <DesktopMenu/>
        <MobileMenu/>
      </nav>
    );
  }
}

export default NavBar;
