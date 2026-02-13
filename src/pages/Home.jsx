import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Education from '../components/Education'
import Contact from '../components/Contact'
const Home = () => {
    return (
        <div id='home'>
            <NavBar />
            <HeroSection />
            <Education />
            <Contact />
        </div>
    )
}

export default Home
