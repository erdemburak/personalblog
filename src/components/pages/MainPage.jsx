import React from 'react'
import './Pages.css'
import Slider from "./slider/Slider";


function MainPage() {
    return (<>
        <div className='main-content'>
            <h3>Burak ERDEM</h3>
            <h5>Full Stack Software Developer</h5>
            <p className='summary'>
                Throughout my educational journey, I have developed and continue to enhance myself in various fields. While pursuing my goal of becoming a professional in the field of software development by adopting OOP and SOLID principles, I have also focused on advancing my knowledge and skills in frontend technologies, including JavaScript and React.
            </p>
            <Slider />
        </div>
    </>)
}

export default MainPage