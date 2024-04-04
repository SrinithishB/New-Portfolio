import React from 'react'
import { StyledAbout } from '../styledComponents/About/About.styles'
import { BrandingH1 } from '../styledComponents/Nav/Nav.styles'

const About = () => {
  return (
    <StyledAbout id="about">
        <BrandingH1>Let's Dive Into A Little About Me.</BrandingH1>
        <h3>FullStack Python Web Developer / Python Developer</h3>
        <div className='content'>
        <p>Driven and skilled Python full stack developer with a passion for creating efficient, scalable, and user-friendly web applications. Leveraging expertise in both front-end and back-end technologies, I aim to contribute to innovative projects where I can utilize my problem-solving skills and creative mindset to deliver high-quality solutions. Seeking a challenging role in a dynamic team environment where I can continuously learn and grow while making a significant impact on the development process.</p>
        <ul>
            <li><span>Full Name: </span>Srinithish B</li>
            <li><span>Department: </span>IT</li>
            <li><span>Degree: </span>B.Sc</li>
            <li><span>Location: </span>Erode, Tamil Nadu, India</li>
        </ul>
        <p>In school, I discovered my passion for programming and honed my skills through a full-stack course at PySpiders. With mastery in front-end technologies like HTML, CSS, JavaScript, and ReactJS, coupled with a strong backend foundation in Python, Django, and SQL, I deliver end-to-end solutions meeting high standards of quality and performance. Currently, I'm pursuing an AI course online at Wercel Technology, aiming to expand my proficiency in Python and its applications in AI. </p>
        </div>
    </StyledAbout>
  )
}

export default About