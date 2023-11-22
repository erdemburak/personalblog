import React from 'react'

function Contact() {
    return (<>
        <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
            <div>
                <h4>You can reach me with the links below</h4>
            </div>
            <div>
                <i className="fa-solid fa-phone fa-lg" style={{ color: "#cccccc" }} /><span style={{ fontSize: '18px' }}> 0553 567 4754</span><br />
                <i className="fa-solid fa-envelope fa-lg" style={{ color: "#cccccc" }} /><span style={{ fontSize: '18px' }}> burakerdem6@hotmail.com</span><br />
                <i className="fa-brands fa-linkedin fa-lg" style={{ color: "#cccccc" }} /><span style={{ fontSize: '18px' }}> https://www.linkedin.com/in/burak-erdem-a8839a237/</span><br />
                <i className="fa-brands fa-github fa-lg" style={{ color: "#cccccc" }} /><span style={{ fontSize: '18px' }}> https://github.com/erdemburak</span>
            </div>

        </div>
    </>)
}

export default Contact