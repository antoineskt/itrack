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
          <h2>100+ users </h2>
          <H3>Join our 100 happy users and start watching happy customer</H3>
        </Div>
        <Div>
          <h2>$100K+</h2>
          <H3>Join our 100 happy users and start watching money raining</H3>
        </Div>
        <Div>
          <h2>5 star reviews</h2>
          <H3>Join our 100 happy users and start watching money raining</H3>
        </Div>
      </Section>
    </ReusableBackground>
  );
}
