import React from 'react';
import styled from 'styled-components';
import { priceData } from './data';
import CardRate from './CardRate';

const Section = styled.section`
  margin: 2em;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2em;
  margin: 0 auto;
  padding: 0 2em;
  opacity: 1;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 3em;
  margin: 1em;
  @media screen and (max-width: 900px) {
    font-size: 2em;
  }
`;
function FourthSection() {
  return (
    <Section id='fourthSection'>
      <Title>Pricing</Title>
      <Container>
        {priceData.map(({ title, description, price }) => (
          <CardRate
            key={title}
            title={title}
            price={price}
            description={description}
          />
        ))}
      </Container>
    </Section>
  );
}

export default FourthSection;
