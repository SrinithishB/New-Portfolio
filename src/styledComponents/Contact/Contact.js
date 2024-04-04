import styled from "styled-components";

export const StyledContact=styled.section`
    color:${props=>props.theme.text};
    background-color:${props=>props.theme.primary};
    border-bottom:1px solid rgba(108, 117, 125,.2);
    padding:2% 5%;
    height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    >h1{
    font-size:3em;
    }
    >div{
        justify-content:center;
        font-size:1em;
    }
    @media screen and (max-width:640px){
        >h1{font-size:2em;}
    }
`