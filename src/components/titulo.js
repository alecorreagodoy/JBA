import React from 'react';
import {
  TitleContainer,
  TitleContent,
  TitleHeading,
  TitleInitial,
  SubtitleHeading,
} from './styles/Title.styles';

function Titulo() {
  return (
    <TitleContainer>
      <TitleContent>
        <TitleHeading>
          <TitleInitial>J</TitleInitial>UAN BALLARINO
        </TitleHeading>
        <SubtitleHeading>ARCHITECT</SubtitleHeading>
      </TitleContent>
    </TitleContainer>
  );
}

export default Titulo;

