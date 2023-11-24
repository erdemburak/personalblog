import React from 'react'
import './Footer.css'

function Footer() {
    return (<>

        <div style={{ backgroundColor: 'rgba(27, 28, 32, 0.5)', height: '70px', marginTop: '20px' }}>
            <div className='footer-style' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                <div>
                    <p>
                        This website was created by Burak Erdem.
                    </p>
                </div>
            </div>
        </div>
    </>)
}

export default Footer