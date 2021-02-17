import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class DesktopMenu extends Component {
    render() {
        return (
            <div className='flex__row--space-around'>
                <NavLink to='/home' className='navbar__link' activeClassName="active">
                    <div className='icon__text'>Home</div>
                </NavLink>
                <NavLink to='/portfolio' className='navbar__link' activeClassName="active">
                    <div className='icon__text'>Portfolio</div>
                </NavLink>
                <NavLink to='/contact' className='navbar__link' activeClassName="active">
                    <div className='icon__text'>Contact</div>
                </NavLink>
            </div>
        );
    }
}

export default DesktopMenu;
