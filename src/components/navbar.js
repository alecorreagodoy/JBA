import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-scroll-motion";
import Lkdn from '../assets/img/Lkdn.png';
import Links from './links';
import { Theme } from "./infrastructure/theme/theme.js";
import styled from "styled-components";
import './styles/navbar.css';



const NavbarContainer = styled.nav`
width: 100%;
height: 60px;
background-color:${(props) => props.theme.colors.lightGray};
font-family:${(props) => props.theme.fonts.heading};
display: flex;
flex-direction: column;

`;


function Navbarr(props) {

  const linksMarkup = Links((link, index) => {

    const linkMarkup = link.active ? (
      <a className="nav-link nav-link-active" href={link.link}>{link.label}
      </a>
    ) : (<a className="nav-link " href={link.link}>{link.label}
    </a>)

    return (

      <Link
        activeClass="active"
        to={link.label}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>

        <li key={index} className="nav-item active">
          {linkMarkup}
        </li>
      </Link>


    );

  });

  return (
    <Theme>
      <NavbarContainer>
        <div className="row">
          <div>

          </div>
          <Navbar className=" col-md-12 navigator ">
            <Nav className="navbar-expand navbar-light ">


              <div className="collapse navbar-collapse " id="navbarNavDropdown">

                <ul className="navbar-nav">
                  {linksMarkup}
                </ul>

                <section className="perfil" id="in"> <a
                  Target="_blank"
                  title="Linkedin"
                  href="https://www.linkedin.com/in/juanballarino/"

                >
                  <img
                    className="inicon"
                    src={Lkdn}
                    alt="Third slide"
                    width="20px"
                    height="20px"

                  />

                </a>
                </section>


              </div>
            </Nav>
          </Navbar>
        </div>
      </NavbarContainer>
    </Theme>

  );
}

export default Navbarr;