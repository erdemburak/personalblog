import React from 'react'
import './Contact.css'

function Contact() {
    return (<>
        <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
            <div>
                <h4>You can reach me with the links below</h4>
            </div>
            <div className='contact-address'>
                <div><i className="fa-solid fa-phone fa-xl" /><span> +90 553 567 4754</span></div>
                <div><i className="fa-solid fa-envelope fa-xl" /><span> burakerdem6@hotmail.com</span></div>
                <div>
                    <a href='https://www.linkedin.com/in/burak-erdem-a8839a237/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin fa-xl" /><span> https://www.linkedin.com/in/burak-erdem-a8839a237/</span></a><br />
                </div>
                <div>
                    <a href='https://github.com/erdemburak' target='_blank' rel='noreferrer'><i className="fa-brands fa-github fa-xl" /><span> https://github.com/erdemburak</span></a>
                </div>

            </div>

        </div>
    </>)
}

export default Contact