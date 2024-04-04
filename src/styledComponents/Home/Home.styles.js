import styled, { keyframes } from "styled-components";

const flicker=keyframes`
20% {
    opacity: .1;
}
23% {
    opacity: 0;
}
26% {
    opacity: .15;
}
30% {
    opacity: 0;
}
35% {
    opacity: .2;
}
38% {
    opacity: .1;
}
100% {
    opacity: .4;
}
`

export const StyledHome=styled.section`
    padding-top:60px;
    display:grid;
    grid-template-columns: 1fr 1fr ;
    background-color:${props=>props.theme.primary};
    color:${props=>props.theme.text};
    min-height:fit-content;
    // height: fit-content;   
    border-bottom:1px solid rgba(108, 117, 125,.2);
    .beam {
        animation: ${props=>props.theme.primary==="#fff"?``:flicker} .8s .2s forwards;
        opacity:0;
    }
    
    >div{
        display:flex;
        flex-direction:column;
        font-size:1.5em;
        justify-content:center;
        padding: 0% 10%;
    }
    h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .
    p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
        line-height:1.5em;
        font-size:16px;
        word-spacing:5px;
    }
    h3,.Typewriter__wrapper{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size:1em;
        color:rgb(184,102,198);
        letter-spacing:5px;
        font-weight:bold;
        }
    @media screen and (max-width: 768px) {
        padding-top:80px;
        grid-template-columns: 1fr;
        gap:25px;
        > div{
            align-items:center;
            text-align:center;
            min-height:50vh;
            height: fit-content;   

            >img{
                width:275px;
            }
        }
    }
`
export const StyledSocial=styled.div`
    display:flex;
    gap:15px;
    line-height:3em;
    a{
        color:${props=>props.theme.text};
        font-size:1.3em;
    }
`

