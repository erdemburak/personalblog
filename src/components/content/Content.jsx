import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Education from "../pages/education/Education.jsx";

function Content() {
    return (<>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>)
}

export default Content