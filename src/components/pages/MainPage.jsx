import React from 'react'
import './Pages.css'
import Carousel from "./carousel/Carousel";


function MainPage() {
    return (<>
        <div className='main-content'>
            <div className='summary'>
                <h2>Burak ERDEM</h2>
                <h3>Full Stack Software Developer</h3>
                <p>
                    Throughout my educational journey, I have developed and continue to enhance myself in various fields. While pursuing my goal of becoming a professional in the field of software development by adopting OOP and SOLID principles, I have also focused on advancing my knowledge and skills in frontend technologies, including JavaScript and React.
                </p>
                <div>
                    <i className="fa-solid fa-phone fa-lg" style={{ color: "#cccccc" }} /><span style={{ fontSize: '18px' }}> 0553 567 4754</span><br />
                    <i className="fa-solid fa-envelope fa-lg" style={{ color: "#cccccc" }} /><span style={{ fontSize: '18px' }}> burakerdem6@hotmail.com</span>

                </div>
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    </>)
}

export default MainPage