import React from 'react'
import './card/Card.css'

function Skills() {
    return (<>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='deneme'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '51%' }} >
                    <div style={{ fontFamily: 'sans-serif', fontSize: '26px' }}>
                        Back-End
                        <hr style={{ marginTop: '0' }} />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div className='card'>
                            Java
                        </div>
                        <div className='card'>
                            Spring Framework
                        </div>
                        <div className='card'>
                            Spring Boot
                        </div>
                        <div className='card'>
                            Hibernate
                        </div>
                        <div className='card'>
                            RESTful WebServices
                        </div>
                        <div className='card'>
                            Maven
                        </div>
                        <div className='card'>
                            Docker
                        </div>
                        <div className='card'>
                            PostgreSql
                        </div>
                        <div className='card'>
                            JPA
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '49%' }}>
                    <div style={{ fontFamily: 'sans-serif', fontSize: '26px' }}>
                        Front-End
                        <hr style={{ marginTop: '0' }} />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '110px' }}>
                        <div className='card'>
                            React
                        </div>
                        <div className='card'>
                            JavaScript
                        </div>
                        <div className='card'>
                            Sass
                        </div>
                        <div className='card'>
                            HTML
                        </div>
                        <div className='card'>
                            Css
                        </div>
                        <div className='card'>
                            No-Code
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Skills