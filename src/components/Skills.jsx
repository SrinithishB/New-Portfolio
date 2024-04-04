import React from 'react'
import style from "./skills.module.css"

import svg from '../image/loginBG.42e2b365.svg'
import html from '../image/html.png';
import css from '../image/css.png';
import js from '../image/js.png';
import reactjs from '../image/reactjs.png'
import redux from '../image/redux.png'
import npm from '../image/npm.png'
import python from '../image/python.png'
import django from '../image/Django.png'
import numpy from '../image/numpy.png'
import pandas from '../image/pandas.png'
import sql from '../image/sql.png'
import github from '../image/github.png'
import git from '../image/Git.png'
import matplot from '../image/matplot.png'
import { StyledSkills } from '../styledComponents/Skills/Skills.styles';
import { BrandingH1 } from '../styledComponents/Nav/Nav.styles';

const Skills = () => {
    
  return (
    <StyledSkills id="skills">
        <BrandingH1>Coding Palette: My Artistry Tools</BrandingH1>
        <div className='container'>
            <div className='svg'>
                <img src={svg} alt="" />
            </div>
        <div className={style.skillContainer}>
            <div id={style.html}>
                <img src={html} alt="" />
            </div>
            <div id={style.css}>
            <img src={css} alt=""  />
            </div>
            <div id={style.js}>
            <img src={js} alt="" />
            </div>
            <div id={style.reactjs}>
            <img src={reactjs} alt="" />
            </div>
            <div id={style.redux}>
            <img src={redux} alt="" />
            </div>
            <div id={style.npm}>
            <img src={npm} alt="" />
            </div>
            <div id={style.python}>
            <img src={python} alt="" />
            </div>
            <div id={style.django}>
            <img src={django} alt="" />
            </div>
            <div id={style.numpy}>
            <img src={numpy} alt="" />
            </div>
            <div id={style.pandas}>
            <img src={pandas} alt="" />
            </div>
            <div id={style.matplot}>
            <img src={matplot} alt="" />
            </div>
            <div id={style.sql}>
            <img src={sql} alt="" />
            </div>
            <div id={style.git}>
            <img src={git} alt="" />
            </div>
            <div id={style.github}>
            <img src={github} alt="" />
            </div>
        </div>
        </div>
    </StyledSkills>
  )
}

export default Skills