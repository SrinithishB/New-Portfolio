import styled from "styled-components";

export const StyledAbout=styled.section`
    background-color:${props=>props.theme.primary};
    color:${props=>props.theme.text};
    min-height:100vh;
    padding:0% 5%;
    font-size:1.5em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-bottom:1px solid rgba(108, 117, 125,.2);

    .content{
        margin:25px;
    }
    >h1{
        font-size:2.5em;
        margin-left:-15px;
    }
    >h3{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color:rgb(184,102,198);
        font-weight:bold;
    }
    p,li{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            line-height:1.5em;
            font-size:16px;
            word-spacing:5px;
    }
    li:before{
        content:"🚀";
        margin:15px;
    }
    li{
        line-height:50px;
        >span{
            font-weight:bold;
        }
    }
    ul{
        list-style:none;
        padding:25px;
    }
    @media screen and (max-width: 1080px) {
        >h1{
            font-size:2em;
        }
    }
    @media screen and (max-width: 425px) {
        h1{
            margin-left:0px;
            font-size:1.5em;
            text-align:center;
        }
        h3,p{
            text-align:center;
        }
    }
    
`