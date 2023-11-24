import React, { useState } from 'react';
import thiefpng from '../images/thief.png';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(27, 28, 32, 0.6)',
                    height: '75px',
                }}
            >
                <div className={`blog-navbar ${menuOpen ? 'menu-open' : ''}`} style={{ display: 'flex', alignItems: 'center', width: '90%' }}>
                    <div>
                        <Link to="/" className='no-underline'>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={thiefpng} alt='' style={{ width: 'auto', height: '50px' }} />
                                <span style={{ paddingLeft: '30px', fontSize: '20px' }}>Burak ERDEM</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className='menu-toggle' onClick={toggleMenu}>
                            <i className="fa-solid fa-bars fa-lg" />
                        </div>
                        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                            <li><NavLink to="/" className='navbar-button' onClick={toggleMenu}>About</NavLink></li>
                            <li><NavLink to="/skills" className='navbar-button' onClick={toggleMenu}>Skills</NavLink></li>
                            <li><NavLink to="/education" className='navbar-button' onClick={toggleMenu}>Education</NavLink></li>
                            <li><NavLink to="/experience" className='navbar-button' onClick={toggleMenu}>Experience</NavLink></li>
                            <li><NavLink to="/projects" className='navbar-button' onClick={toggleMenu}>Projects</NavLink></li>
                            <li><NavLink to="/contact" className='navbar-button' onClick={toggleMenu}>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
