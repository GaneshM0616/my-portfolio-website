import React from 'react';
import './NavBar.css'

function NavBar(){
    return(
        <nav className='navbar'>
            <div className='navbar-logo'>Ganesh</div>
            <ul className='navbar-links'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Skills</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;