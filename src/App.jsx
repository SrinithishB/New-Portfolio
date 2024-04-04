import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import ThemeSwitch from './components/ThemeSwitch'
import { ThemeProvider} from 'styled-components'
import { useSelector } from 'react-redux'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import blog from './image/blog.svg'
import movie from './image/movies.svg'
import travel from './image/travel.svg'
const theme={
  dark:{
    primary:'#000',
    text:'#fff',
    blur:"rgba(0,0,0,0.5)"
  },
  light:{
    primary:'#fff',
    text:'#000',
    blur:"rgba(255,255,255,0.5)"
  },
}

const App = () => {
  let mode=useSelector((state)=> state.theme.theme)
  return (
    <ThemeProvider theme={theme[mode]} >
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <ThemeSwitch id="themeSwitch"></ThemeSwitch>
    </ThemeProvider>
  )
}

export default App