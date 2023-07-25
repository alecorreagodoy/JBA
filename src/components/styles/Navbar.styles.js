import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "50px")};
    background-color:${(props) => props.theme.colors.lightGray};
    font-family:${(props) => props.theme.fonts.heading};
    display: flex;
    flex-direction: column;

    @media (min-width: 700px){
        height: 50px;
        
    }
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    background-color: '#F8F8F8';
`
export const RightContainer = styled.div`
    flex: 0%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    background-color: '#F8F8F8' ;

`;

export const NavbarInnerContainer = styled.div`
width: 100%;
height: 80px;
display: flex;

`;
export const NavbarLinkContainer = styled.div`
display: flex;

`
export const NavbarLink = styled(Link)`
color: black;
font-size: large;
text-decoration: none;
font-family: "SpartanMB-Thin.oft" ;
margin: 10px;

@media ( max-width: 700px) {
    display: none;
}
`;
export const NavbarLinkExtended = styled(Link)`
color: black;
font-size: large;
text-decoration: none;
font-family: 'SpartanMB-Thin.oft';
margin: 10px;


`;


export const LinkedinLogo = styled.img`
    margin: 10px;
    max-width: 30px;
    height: auto;
`;
export const OpenLinkButton = styled.button`
width: 50px;
height: 35px;
background-color: white;
border: none;
color: black;
font-size: 35px;
cursor: pointer;

@media (min-width: 700px){
    display: none;
}
`;
export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) { 
    display: none;
}
`;