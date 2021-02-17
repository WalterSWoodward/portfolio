import React, { Component } from 'react';

class HamburgerMenu extends Component {
  render() {
    // TODO: Consider just replacing this with the fa icon faHamburger (unless you want to create an animation)
    return (
        <div className="menu" onClick={this.props.handleClick}>
            <div className='bars'>
                <div className='bar' />
                <div className='bar' />
                <div className='bar' />
            </div>
            <div className='mobile_view_text'>Menu</div>
        </div>
    );
  }
}

export default HamburgerMenu;
