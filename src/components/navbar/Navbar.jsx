import React from 'react'
import thiefpng from '../images/thief.png'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (<>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(27, 28, 32, 0.7)', height: '70px' }}>
            <div className='blog-navbar' style={{ display: 'flex', alignItems: 'center', width: '90%' }}>
                <div>
                    <Link to="/" className='no-underline'>
                        <img src={thiefpng} alt='' style={{ width: 'auto', height: '50px' }} />
                        <span style={{ paddingLeft: '30px', fontSize: '20px' }}>Burak ERDEM</span>
                    </Link>

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
        </div>
    </>)
}

export default Navbar