import React from 'react'
import './Projects.css';

function Projects() {
    return (<>

        <div className='product-page'>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div className='project hovered-div'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1>MB Disli</h1>
                    </div>
                    <a href='https://www.mbdisli.com' target='_blank' rel='noreferrer' style={{ margin: '0' }}><h3>www.mbdisli.com</h3></a>
                    <p>
                        The first project I created as a freelancer is mbdisli.com. I created this project right after the Bilge Adam Java course and
                        I used Bootstrap templates for the view layer of this Spring boot based project. I published this website on Contabo server.
                    </p>
                    <p><span>Skills: </span> OOP · Spring Boot · Thymeleaf · HTML · Bootstrap</p>
                </div>

                <div className='project hovered-div'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1>TechCareer Project-Etkinlik</h1>
                    </div>
                    {/* <a href='/' target='_blank' rel='noreferrer' style={{ margin: '0' }}> */}<h3>Coming Soon</h3>
                    <p>
                        In this project, which we created as a team at the end of the bootcamp, a website was created that lists various events such as theater concerts.
                        I created Back-End Rest services using Java Spring Boot and I dockerized it and published it on Aws EC2 server.<br />
                        <a href='http://51.20.142.51/api/v1/etkinlik/list' target='_blank' rel='noreferrer'><span style={{ color: '#a0632e', fontWeight: 'normal' }}>http://51.20.142.51/api/v1/etkinlik/list</span></a><br />
                        The Front-End part of the project was created with React.
                    </p>
                    <p><span>Skills: </span> OOP · Spring Boot · React · HTML · Css · H2DB · RESTfull · Aws · Docker</p>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div className='project hovered-div'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1>Personal Website</h1>
                    </div>
                    <a href='https://www.burakerdem.me' target='_blank' rel='noreferrer' style={{ margin: '0' }}><h3>www.burakerdem.me</h3></a>
                    <p>
                        I created my website using React.js and I used Midjourney for the UI design. I dockerized the project and published it on the Aws EC2 server.
                    </p>
                    <p><span>Skills: </span> React.js · HTML · CSS · Docker · Aws</p>
                </div>


            </div>
        </div>

    </>)
}

export default Projects