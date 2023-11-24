import React from 'react'
import './Projects.css';

function Projects() {
    return (<>

        <div className='product-page'>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div className='project hovered-div'>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>MB Disli</h2>
                        </div>
                        <a href='https://www.mbdisli.com' target='_blank' rel='noreferrer' style={{ margin: '0' }}><h4>www.mbdisli.com</h4></a>
                    </div>
                    <p>
                        The first project I created as a freelancer is mbdisli.com. I created this project right after the Bilge Adam Java course and
                        I used Bootstrap templates for the view layer of this Spring boot based project. I published this website on Contabo server.
                    </p>
                    <p><span>Skills: </span> OOP · Spring Boot · Thymeleaf · HTML · Bootstrap</p>
                </div>

                <div className='project hovered-div'>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>TechCareer Project-Etkinlik</h2>
                        </div>
                        {/* <a href='/' target='_blank' rel='noreferrer' style={{ margin: '0' }}> */}<h4>Coming Soon</h4>
                    </div>
                    <p>
                        In this project, which we created as a team at the end of the bootcamp, a website was created that lists various events such as theater concerts.
                        I created Back-End Rest services using Java Spring Boot and I dockerized it and published it on Aws EC2 server.<br />
                        <p><a href='http://51.20.142.51/api/v1/etkinlik/list' target='_blank' rel='noreferrer'><span style={{ color: '#a0632e', fontWeight: 'normal' }}>http://51.20.142.51/api/v1/etkinlik/list</span></a></p>
                        The Front-End part of the project was created with React.
                    </p>
                    <p><span>Skills: </span> OOP · Spring Boot · React · HTML · Css · H2DB · RESTfull · Aws · Docker</p>
                </div>
            </div>
            <div style={{ display: 'flex', width: '50%' }}>
                <div className='project hovered-div'>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>Personal Website</h2>
                        </div>
                        <a href='https://www.burakerdem.me' target='_blank' rel='noreferrer' style={{ margin: '0' }}><h4>www.burakerdem.me</h4></a>
                    </div>
                    <p>
                        I created my personal website using React.js and I used Midjourney for the UI design. I dockerized the project and published it on the Aws EC2 server.
                    </p>
                    <p><span>Skills: </span> React.js · HTML · CSS · Docker · Aws</p>
                </div>
            </div>
        </div>

    </>)
}

export default Projects