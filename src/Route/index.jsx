import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
const index = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    )
}

export default index
