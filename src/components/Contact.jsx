import React from 'react'
import { StyledContact } from '../styledComponents/Contact/Contact'
import { BrandingH1 } from '../styledComponents/Nav/Nav.styles'
import { StyledSocial } from '../styledComponents/Home/Home.styles'
import pdf from '../file/srinithish -.pdf'

const Contact = () => {
  return (
    <StyledContact id='contact'>
        <BrandingH1>Contact
            <StyledSocial>
                <a href="https://github.com/SrinithishB"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/srinithish-b-4480b6238/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:srinithishofficial@gmail.com"><i className="fa-solid fa-at"></i></a>
                <a href={pdf}><i className="fa-solid fa-download"></i></a>
            </StyledSocial>
        </BrandingH1>
    </StyledContact>
  )
}

export default Contact