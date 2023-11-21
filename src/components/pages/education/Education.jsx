import React from 'react'
import './Education.css';

function Education() {
    return (<>

        <div className='education'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Duzce Univercity</h1>
                <h5>Sep 2014 - Jun 2019</h5>
            </div>
            <h3>Computer Engineering</h3>
            <p>
                I have graduated from Duzce Univercity Computer Engineering department in 2019.At university, I learned about subjects such as C++/C# coding, Algorithm logic, Network structures and OOP.
            </p>
            <p><span>Skills: </span> OOP · C++ · C# · SQL · Python · Algorithm · Network</p>
        </div>
        <div className='education'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Cubuk Anatolian Industrial Vocational High School</h1>
                <h5>Sep 2009 - Jun 2013</h5>
            </div>
            <h3>Information Technologies</h3>
            <p>
                I have graduated from Cubuk Anatolian Industrial Vocational High School Information Technologies department in 2013. I have learned the basics of programming and computer science in this department.
                I have also learned the basics of web development and operating systems.
            </p>
            <p><span>Skills: </span> HTML · Dreamweaver · Hardware</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
            <div style={{ fontFamily: 'sans-serif', fontSize: '26px' }}>
                Courses
                <hr style={{ marginTop: '0' }} />
            </div>
        </div>
        <div className='education'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Bilge Adam Academy</h1>
                <h5>Apr 2022 - Oct 2022</h5>
            </div>
            <h3>Full Stack Java Development</h3>
            <p>
                I took Full Stack Java Development course at BilgeAdam. Throughout the course, I learned the Java programming language in detail and improved myself with various projects.
            </p>
            <p><span>Skills: </span> Object-Oriented Programming (OOP) · Java · Spring Boot · Spring Security · Spring Rest · HTML · Bootstrap · Jakarta Persistence · Primefaces · Thymeleaf · JPA · Hibernate · PostgreSQL · SQL</p>
        </div>
        <div className='education'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>TechCareer</h1>
                <h5>Sep 2023 - Nov 2023</h5>
            </div>
            <h3>Front-End Bootcamp</h3>
            <p>
                During the bootcamp, I gained experience in Html, Css, Js, Sass, React.js. With what I learned, I created various projects, including this website.
            </p>
            <p><span>Skills: </span> Html · Css · Js · Sass · React.js</p>
        </div>
    </>)
}

export default Education