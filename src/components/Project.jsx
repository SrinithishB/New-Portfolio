import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BrandingH1 } from '../styledComponents/Nav/Nav.styles';
import { StyledProjects, StyledProjectsBox, StyledProjectsContainer } from '../styledComponents/Project/Project';

const Project = () => {
    let [projects,setProjects]=useState([])
    useEffect(()=>{
        axios.get("https://65fd2a759fc4425c653145d2.mockapi.io/projects")
        .then((resp)=>setProjects(resp.data))
    },[])
    let  projectList= projects.map((project) => 
    <StyledProjectsBox key={project.id} data={project}>
        <img src={project.image} alt="Images"/>
        <div>
        <h1>{project.title}</h1>
        <p>{project.content}</p>
        <a href={project.link}>View Project</a>
        </div>
    </StyledProjectsBox>);
    return (
        <StyledProjects id='projects'>
            <BrandingH1>Project</BrandingH1>
            <StyledProjectsContainer>
                {projectList.reverse()}
            </StyledProjectsContainer>
        </StyledProjects>
    )
}

export default Project