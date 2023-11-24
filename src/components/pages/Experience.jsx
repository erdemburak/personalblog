import React from 'react'
import './education/Education.css'

function Experience() {
    return (<>

        <div className='education hovered-div'>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Freelance</h2>
                    <h5>Oct 2022 - Current</h5>
                </div>
                <h3>Full Stack Software Developer</h3>
            </div>
            <div>
                <p>
                    I am currently working as a freelancer.
                </p>
            </div>
            <div>
                <p><span>Skills: </span> OOP · Java · React.js · Spring Boot · Sql · RESTfull Web Services · JPA · Hibernate · PostgreSQL · HTML · JavaScript · Sass</p>
            </div>
        </div>

        <div className='education hovered-div'>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Emek Elektrik Endustrisi A.S.</h2>
                    <h5>Nov 2020 - Apr 2021</h5>
                </div>
                <h3>Computer Engineer</h3>
            </div>
            <div>
                <p>
                    During the time I worked at Emek Elektrik, I took part in the development, updating and control of the company's website in the IT department.
                </p>
            </div>
            <div>
                <p><span>Skills: </span> HTML · Bootstrap · IT Operations</p>
            </div>
        </div>

        <div className='education hovered-div'>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Impark Egitim Bilisim Ltd. Sti.</h2>
                    <h5>Feb 2019 - May 2019</h5>
                </div>
                <h3>Trainee</h3>
            </div>
            <div>
                <p>
                    I developed applications with ASP.Net programming language, took part in the testing phases of these applications, and gained teamwork experience as a part of the software development team.
                </p>
            </div>
            <div>
                <p><span>Skills: </span> OOP · ASP.Net · HTML · Bootstrap</p>
            </div>
        </div>

    </>)
}

export default Experience