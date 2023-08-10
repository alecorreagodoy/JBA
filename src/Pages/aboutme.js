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
              I am an architect graduated from the University of Belgrano, Argentina, with a background in retail and visual merchandising design. 
              I have been working in the professional field for over 9 years, primarily in the retail sector, where I have been involved in designing, directing,
               coordinating, and managing projects for commercial spaces. 
               This includes calculations, budgeting, and tendering for construction projects.
            
               Some of the brands I have worked with include Chanel, Dior, Guerlain, Carolina Herrera, Paco Rabanne, Clinique, Tom Ford, Burberry, 
               L'Occitane en Provence, Dolce & Gabbana, Lacoste, Hugo Boss, Gucci, Bvlgari, Tiffany & Co, Starbucks Coffee, Samsonite Black Label and Classic, 
               Havanna, among others.

          The diverse range of tasks I have undertaken has provided me with experience in all aspects of the field and has allowed me to work independently and resourcefully. 
          I have thrived under pressure, meeting tight deadlines and exceeding the expectations of demanding clients. This has honed my negotiation and conciliation skills, as well as fostered excellent interpersonal relationships. Furthermore, I have successfully led interdisciplinary teams.
          
          My constant pursuit of new challenges and professional growth has led me to specialize in store design and project management. 
          I have a strong inclination towards coordinating tasks and teams, while always keeping in mind the importance of delivering high-quality results within the designated timeframes and budgets.
          
          I am committed to continuing my professional development and expanding my knowledge in the field of store design and project management. 
          I am eager to contribute to exciting projects and the success of your company.
          
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