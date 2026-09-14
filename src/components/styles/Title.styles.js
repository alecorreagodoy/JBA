import styled from "styled-components";

export const TitleContainer = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px 8px;
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TitleHeading = styled.h1`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: rgb(7, 7, 7);
  letter-spacing: 0.08em;
`;

export const TitleInitial = styled.span`
  display: inline-block;
  margin-right: -0.06em;
`;

export const SubtitleHeading = styled.h3`
  margin: 8px 0 0;
  font-family: 'SpartanMB-Thin.oft';
  font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  color: rgb(7, 7, 7);
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;