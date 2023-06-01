import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Scroll from 'react-scroll';
import { Link, Animatior } from "react-scroll-motion";
import Lkdn from '../assets/img/Lkdn.png';
import './styles/navbar.css';
//import list whit links to views; 
import Links from './links';
import Titulo from './titulo';





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
    <header>
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
    </header>

  );
}

export default Navbarr;