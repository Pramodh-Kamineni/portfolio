import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Pramodh Kamineni,</span> Graduate Student from UB in USA.</h1>
      <p>I'm a master's graduate from the University of Bridgeport with frontend project experience and a 6-month internship in India, seeking to leverage my skills into an front-end developer position.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href="Resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
