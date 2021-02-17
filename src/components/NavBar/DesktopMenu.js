import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class DesktopMenu extends Component {
    render() {
        return (
            <div className='desktop_view'>
                <NavLink to='/home' className='navbar__link' activeClassName="active">
                    <div id='about-icon_text' className='icon_text'>Home</div>
                </NavLink>
                <NavLink to='/portfolio' className='navbar__link' activeClassName="active">
                    <div className='icon_text'>Portfolio</div>
                </NavLink>
                <NavLink to='/contact' className='navbar__link' activeClassName="active">
                    <div id='contact-icon_text' className='icon_text'>Contact</div>
                </NavLink>
            </div>
        );
    }
}

export default DesktopMenu;
