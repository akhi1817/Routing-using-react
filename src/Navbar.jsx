import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-primary text-light'>
        <a href='/' className='navabar-brand bg text-light nav-link'><h4>React Router</h4></a>
        <ul className='navbar-nav m-auto'>
            <li className='nav-item mx-4'><NavLink to='/' className='text-light nav-link'>Home</NavLink></li>
            <li className='nav-item mx-4'><NavLink to='/about' className='text-light nav-link'>About us</NavLink></li>
            <li className='nav-item mx-4'><NavLink to='/contact' className='text-light nav-link'>Contact us</NavLink></li>
            <li className='nav-item mx-4'><NavLink to='/service' className='text-light nav-link'>Services</NavLink></li>
            <li className='nav-item mx-4'><NavLink to='/blog' className='text-light nav-link'>Blog</NavLink></li>
            
        </ul>
    </nav>
  )
}
