import React from 'react'
import './Contact.css'

function Contact() {
    return (<>
        <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
            <div>
                <h4>You can reach me with the links below</h4>
            </div>
            <div>
                <i className="fa-solid fa-phone fa-lg" /><span> +90 553 567 4754</span><br />
                <i className="fa-solid fa-envelope fa-lg" /><span> burakerdem6@hotmail.com</span><br />
                <a href='https://www.linkedin.com/in/burak-erdem-a8839a237/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin fa-lg" /><span> https://www.linkedin.com/in/burak-erdem-a8839a237/</span></a><br />
                <a href='https://github.com/erdemburak' target='_blank' rel='noreferrer'><i className="fa-brands fa-github fa-lg" /><span> https://github.com/erdemburak</span></a>
            </div>

        </div>
    </>)
}

export default Contact