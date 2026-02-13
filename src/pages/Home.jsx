import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Education from '../components/Education'
import Contact from './Contact'
import About from './About'
const Home = () => {
    return (
        <div id='home'>
            <HeroSection />
            <Education />
            <Contact />
        </div>
    )
}

export default Home
