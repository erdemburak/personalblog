import React from 'react'
import thiefpng from '../images/thief.png'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (<>
        <div className='blog-navbar'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={thiefpng} style={{ width: 'auto', height: '50px' }} />
                <span style={{ paddingLeft: '30px', fontSize: '20px' }}>Burak ERDEM</span>
            </div>
            <div>
                <ul className='navbar-links'>
                    <li><Link to="/" className='no-underline'>About</Link></li>
                    <li><Link to="/skills" className='no-underline'>Skills</Link></li>
                    <li><Link to="/education" className='no-underline'>Education</Link></li>
                    <li><Link to="/experience" className='no-underline'>Experience</Link></li>
                    <li><Link to="/projects" className='no-underline'>Projects</Link></li>
                    <li><Link to="/contact" className='no-underline'>Contact</Link></li>
                </ul>
            </div>
        </div>
    </>)
}

export default Navbar