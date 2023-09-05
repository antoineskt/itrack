import React from 'react';
import styled from 'styled-components';
import { InformationData } from '../type/data';

const Container = styled.div`
  background-color: transparent;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 2em;
  margin: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1em;
  border-radius: 20px;
  max-width: 800px;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const LogoContainer = styled.div`
  min-width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1em;
  font-weight: bold;
  text-align: start;
  color: ${(props: { primary: string }) => props.primary};
`;

function CardInformation({ logo, text, primary }: InformationData) {
  const color = primary ? 'black' : 'white';
  return (
    <Container>
      {logo && <LogoContainer>{logo} </LogoContainer>}
      <Title primary={color}>{text} </Title>
    </Container>
  );
}

export default CardInformation;
