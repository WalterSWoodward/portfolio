import React, { Component } from 'react';

class HamburgerMenu extends Component {
  render() {
    // TODO: Consider just replacing this with the fa icon faHamburger (unless you want to create an animation)
    return (
        <div className="hamburger__menu" onClick={this.props.handleClick}>
            <div className='hamburger-menu__bars'>
                <div className='hamburger-menu__bar' />
                <div className='hamburger-menu__bar' />
                <div className='hamburger-menu__bar' />
            </div>
            <div className='hamburger__text'>Menu</div>
        </div>
    );
  }
}

export default HamburgerMenu;
