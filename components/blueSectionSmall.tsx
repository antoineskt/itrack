import ReusableBackground from './background';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  color: white;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 50px;
  @media screen and (max-width: 900px) {
    padding: 30px;
  }
`;

const H2 = styled.h2`
  @media screen and (max-width: 900px) {
    font-size: 2em;
  }
`;

const H3 = styled.h3`
  color: white;
  text-align: center;
  padding-top: 20px;
  @media screen and (max-width: 900px) {
    font-size: 1.1em;
  }
`;

export default function BlueSectionSmall() {
  return (
    <ReusableBackground>
      <Section>
        <Div>
          <H2>1000+ users </H2>
          <H3>Join our 1000 happy users and start watching happy customer</H3>
        </Div>
        <Div>
          <H2>+35% satisfied</H2>
          <H3>Increase instantly your customer satisfaction by 35%</H3>
        </Div>
        <Div>
          <H2>5 star reviews</H2>
          <H3>
            iTrack has received a flawless 5-star rating from all of our users.
          </H3>
        </Div>
      </Section>
    </ReusableBackground>
  );
}
