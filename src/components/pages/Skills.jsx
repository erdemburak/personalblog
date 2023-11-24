import React from 'react'
import './card/Card.css'
import './education/Education.css'

function Skills() {
    return (<>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', minHeight: '90vh', maxWidth: '90%' }}>
                <div className='deneme'>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '747px' }} >
                        <div className='courses'>
                            Back-End
                            <hr style={{ marginTop: '0', borderColor: '#a0632e' }} />
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
                                MicroServices
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
                            <div className='card'>
                                ChatGPT
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '747px' }}>
                        <div className='courses'>
                            Front-End
                            <hr style={{ marginTop: '0', borderColor: '#a0632e' }} />
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
                            <div className='card'>
                                Photoshop
                            </div>
                            <div className='card'>
                                MidJourney
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Skills