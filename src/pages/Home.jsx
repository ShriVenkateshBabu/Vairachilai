import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Education from '../components/Education'
import Contact from './Contact'
import WorkExperience from '../components/WorkExperience'
const Home = () => {
    return (
        <div id='home'>
            <HeroSection />
            <Education />
            <WorkExperience />
            <Contact />
        </div>
    )
}

export default Home
