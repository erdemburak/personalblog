import React from 'react'
import thiefpng from '../images/thief.png'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    return (<>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(27, 28, 32, 0.6)', height: '75px' }}>
            <div className='blog-navbar' style={{ display: 'flex', alignItems: 'center', width: '90%' }}>
                <div>
                    <Link to="/" className='no-underline'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={thiefpng} alt='' style={{ width: 'auto', height: '50px' }} />
                            <span style={{ paddingLeft: '30px', fontSize: '20px' }}>Burak ERDEM</span>
                        </div>
                    </Link>

                </div>
                <div >
                    <ul className='navbar-links' >
                        <li><NavLink to="/" className='navbar-button'>About</NavLink></li>
                        <li><NavLink to="/skills" className='navbar-button'>Skills</NavLink></li>
                        <li><NavLink to="/education" className='navbar-button'>Education</NavLink></li>
                        <li><NavLink to="/experience" className='navbar-button'>Experience</NavLink></li>
                        <li><NavLink to="/projects" className='navbar-button'>Projects</NavLink></li>
                        <li><NavLink to="/contact" className='navbar-button'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div >
    </>)
}

export default Navbar