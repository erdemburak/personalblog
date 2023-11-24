import React from 'react'
import './Pages.css'
import Carousel from "./carousel/Carousel";


function MainPage() {
    return (<>
        <div className='main-content'>
            <div className='summary'>
                <h1>Burak ERDEM</h1>
                <h3>Full Stack Software Developer</h3>
                <p>
                    Throughout my educational journey, I have developed and continue to enhance myself in various fields. While pursuing my goal of becoming a professional in the field of software development by adopting OOP and SOLID principles, I have also focused on advancing my knowledge and skills in frontend technologies, including JavaScript and React.
                </p>
                <p>
                    I am a person who is hungry for knowledge and learning. I prioritize research and reading articles. I follow detailed trainings and courses on the use of artificial intelligence tools, which are today's popular products. I am working on prompts to use ChatGPT and Midjourney effectively.
                </p>
                <div className='main-content-contact'>
                    <div><i className="fa-solid fa-phone fa-lg" style={{ color: "#cccccc" }} /><span> 0553 567 4754</span></div>
                    <div><i className="fa-solid fa-envelope fa-lg" style={{ color: "#cccccc" }} /><span> burakerdem6@hotmail.com</span></div>
                </div>
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    </>)
}

export default MainPage