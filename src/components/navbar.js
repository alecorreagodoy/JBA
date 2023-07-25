import React, { useState } from 'react';
import Lkdn from '../assets/img/Lkdn.png';
import { Theme } from "./infrastructure/theme/theme.js";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  LinkedinLogo,
  OpenLinkButton,
  NavbarLinkExtended
} from "../components/styles/Navbar.styles";






function Navbarr(props) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <Theme>
      <NavbarContainer extendNavbar={extendNavbar}>

        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/aboutme">About</NavbarLink>
              <NavbarLink to="/works">Work</NavbarLink>
              <NavbarLink to="/contact">Contact</NavbarLink>
              <OpenLinkButton onClick={() => {
                setExtendNavbar((curr) => !curr)
              }}>{extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinkButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <a
              Target="_blank"
              title="Linkedin"
              href="https://www.linkedin.com/in/juanballarino/">
              <LinkedinLogo src={Lkdn}></LinkedinLogo>
            </a>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/aboutme">About</NavbarLinkExtended>
            <NavbarLinkExtended to="/works">Work</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
        <div className="row">
          <div>

          </div>

        </div>
      </NavbarContainer>
    </Theme>

  );
}

export default Navbarr;