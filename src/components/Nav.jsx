import React, { useState } from 'react'
import { BrandingH1, StyledNav } from '../styledComponents/Nav/Nav.styles'

const Nav = () => {
  let [isExpanded, setIsExpanded] =useState(true)
  let style={
    display: isExpanded?"none":"flex",
  }
  
  return (
    <StyledNav>
        <BrandingH1>Srinithish</BrandingH1>
        <div id="menu_button">
          <label htmlFor="bar">{isExpanded?<i className="fa-solid fa-bars"></i>:<i className="fa-solid fa-xmark"></i>}</label>
          <input type="checkbox" name="bar" id="bar" onClick={(x)=>{
            setIsExpanded(x.target.checked);
          }}/>
          <div id="nav_side_menu" style={style}>
            <a href="#home_container">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact</a>
        </div>
        </div>

        <div id="nav_menu" >
            <a href="#home_container">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact</a>
        </div>
        
    </StyledNav>
  )
}

export default Nav