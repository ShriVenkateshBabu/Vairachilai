import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Navbar from '../components/NavBar'
import Contact from '../pages/Contact'
import Publications from '../pages/Publications'
const index = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/publications' element={<Publications />} />
            </Routes>
        </>
    )
}

export default index
