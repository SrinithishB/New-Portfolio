import styled from "styled-components";

export const StyledNav=styled.nav`
    position:fixed;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:${props=>props.theme.blur};
    height:60px;
    padding:0px 25px;
    backdrop-filter:  blur(10px);
    box-shadow: 0 3px 6px rgba(108, 117, 125,.2);
    i{
        color:${props=>props.theme.text};
    }
    #bar{
        display:none;
    }
    #menu_button{
        display:none;
    }
    #nav_menu{
        display:flex;
        gap:15px;
        transition: all 1s;
    }
    a{
        text-decoration:none;
        color:${props=>props.theme.text};
        // font-family: "Gluten", cursive;
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        font-variation-settings:
        "slnt" 0;
    }
   
    @media screen and (max-width: 550px) {
        #menu_button{
            display:block;
        }
        #nav_menu{
            display:none;
        }
        #nav_side_menu{
            background-color:${props=>props.theme.primary};
            backdrop-filter:  blur(10px);    
            position:absolute;
            width:100vw;
            top:60px;
            right:0%;
            flex-direction:column;
            padding:25px;
            gap:25px;
            // background-color: rgba(255, 255, 255, .9);      
        }
    }
`
export const BrandingH1=styled.h1`
    // font-family: "Finger Paint", sans-serif;
    color:${props=>props.theme.text};
    // font-family: "Nanum Pen Script", cursive;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 500;
    font-style: normal;
    letter-spacing:5px;
    font-size:2em;
`