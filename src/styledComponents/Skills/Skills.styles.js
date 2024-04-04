import styled from "styled-components";
import image from '../../image/laptop.jpg'

export const StyledSkills=styled.section`
    padding: 2% 5%;
    font-size:1.5em;
    background-image:${props=>props.theme.primary==="#fff"?`linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)),url(${image})`:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${image})`};
    background-repeat:none;
    background-size:cover;
    background-position:top center;
    background-attachment: fixed;
    height:90vh;
    border-bottom:1px solid rgba(108, 117, 125,.2);
    background-color:${props=>props.theme.primary};
    color:${props=>props.theme.text};
    .container{
            height:95%;
            display:flex;
            align-items:center;
            justify-content:center;
            >div{
                width:50%;
            }
    }
    .svg{
        display:flex;
        align-items:center;
        justify-content:center;
        >img{
            width:300px
        }
    }
    @media only screen and (max-width: 780px) {
        height:fit-content;
        .container{
            margin-top:50px;
            flex-direction:column;
            gap:50px;
            >.svg{
                width:100%;
            }
            .skillContainer{
                width:400px;
            }
        }

    }
    @media only screen and (max-width: 425px) {
        font-size:1.2em;
        text-align:center;

    }

`