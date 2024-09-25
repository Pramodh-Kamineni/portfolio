import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As a master's graduate from the University of Bridgeport with a strong foundation in frontend development, I'm excited to take the next step in my career. With diverse project experience and a 6-month internship in India, I'm confident in my ability to adapt and contribute to innovative projects.</p>
                <p>I'm a dedicated and driven individual seeking an front-end developer position in Connecticut, passionate about creating engaging user experiences and staying up-to-date with industry trends. Let's connect and explore opportunities!</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6-Months Internship</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>6</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>0</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
