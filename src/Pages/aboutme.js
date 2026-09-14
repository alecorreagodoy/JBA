import React, { Component } from 'react';
import styled from 'styled-components';
import { Theme } from "../components/infrastructure/theme/theme.js";



// Luego, puedes utilizar el módulo de autenticación



function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="gray">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
};

const Box = styled.div`
padding: 4rem;
margin: 4rem;
color: ${(props) => props.theme.colors.darkGray};
font-family: ${(props) => props.theme.fonts.body}
`

class Aboutme extends Component {



  render() {
    const style = {

      margin: '10',

    }
    return (
      <Theme>
        <div id="Aboutme" className="Section 1 container card " >
          <Box>
            <Dialog
              title="About me"
              style={style}
              message="
              I am a retail and hospitality design leader with over a decade of experience developing innovative environments for some of the world's most recognized brands. My career has been centered on translating brand strategy into impactful physical experiences that connect with customers and support business growth.

Having delivered over 120 projects, including flagship renovations, new store openings, and concept developments, I bring a strong balance of creative vision, operational expertise, and commercial awareness. My experience spans multiple international markets, where I have successfully adapted global design standards to local requirements while maintaining brand consistency and optimizing investment.

I believe that exceptional design happens when creativity, functionality, and storytelling come together to create meaningful experiences.
          
          Thank you for visiting my portfolio website and considering my experience. 
          If you would like further information, please do not hesitate to contact me.
          
          ">

            </Dialog>
          </Box>
        </div>
      </Theme>

    );

  }

}


export default Aboutme;