import ReusableBackground from './background';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  color: white;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 50px;
`;

const H3 = styled.h3`
  color: white;
  text-align: center;
  padding-top: 20px;
`;

export default function BlueSectionSmall() {
  return (
    <ReusableBackground>
      <Section>
        <Div>
          <h2>1000+ users </h2>
          <H3>Join our 1000 happy users and start watching happy customer</H3>
        </Div>
        <Div>
          <h2>+35% satisfied</h2>
          <H3>Increase instantly your customer satisfaction by 35%</H3>
        </Div>
        <Div>
          <h2>5 star reviews</h2>
          <H3>
            iTrack has received a flawless 5-star rating from all of our users.
          </H3>
        </Div>
      </Section>
    </ReusableBackground>
  );
}
