import styled from "styled-components";

export const StyledProjects=styled.section`
    color:${props=>props.theme.text};
    background-color:${props=>props.theme.primary};
    border-bottom:1px solid rgba(108, 117, 125,.2);    
    min-height:90vh;
    padding:2% 5%;
    >h1{
    font-size:3em;
    }

`
export const StyledProjectsContainer=styled.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(auto-fit, 300px);
    // grid-template-columns:repeat(auto-fill, 300px);
    // grid-template-columns:300px 300px 300px;

    justify-content:center;
    // align-items:center;
    gap:3rem;
    @media screen and (max-width:300px){
        grid-template-columns:repeat(auto-fit, 200px);
    }
    
`
export const StyledProjectsBox=styled.article`
    font-family: "Poppins", sans-serif;
    padding:15px;
    box-shadow: 0px 5px 10px rgba(108, 117, 125,.5);
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    transition:all .4s ease-in-out;
    &:hover{
        transform:scale(1.05) translateY(-6px);
        box-shadow: 0px  10px 20px rgba(108, 117,  125,.8);
    }

    >img{
        width:250px;
        height:250px;
        border-radius:100%;
    }
    h1{
        font-size:1.5em;
    }
    >div{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:200px;
    }
    >div>a{
        // align-self:end;
        text-decoration:none;
        padding:5px 10px;
        width:fit-content;
        background-color:${props=>props.theme.text};
        color:${props=>props.theme.primary};
        border-radius:5px;
    }
    >div>a:hover{
        background:gray;
        color:white;
    }
    
    @media screen and (max-width:300px){
        >img{
            width:100px;
            height:100px;
        }
    }
`