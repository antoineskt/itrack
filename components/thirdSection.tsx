/* eslint-disable react/no-unescaped-entities */
import Background from './background';
import Image from 'next/image';
import itrackhdThree from '../public/itrackhdThree.png';
import styled from 'styled-components';
import ButtonValueBlue from './buttonValueBlue';

export default function ThirdSection() {
  return (
    <Background>
      <H1>
        Custom Tracking. Once..
        <br />
        et voilà
      </H1>
      <Section>
        <Image
          src={itrackhdThree}
          alt='double screen'
          sizes='100vw'
          // Make the image display full width
          style={{
            width: '40%',
            height: 'auto',
            padding: 50,
          }}
        />

        <div>
          <ButtonValueBlue>
            <H3>
              Comprehensible tracking information that provides only the
              essential details
            </H3>
          </ButtonValueBlue>
          <ButtonValueBlue>
            {' '}
            <H3>Say goodbye to messy international tracking numbers</H3>
          </ButtonValueBlue>
          <ButtonValueBlue>
            <H3>
              Configured in just a few checks, there's no need to go back over
              it
            </H3>
          </ButtonValueBlue>
          <ButtonValueBlue>
            {' '}
            <H3>Save time to focus on your Business</H3>
          </ButtonValueBlue>
        </div>
      </Section>
    </Background>
  );
}

const Section = styled.section`
  padding: 50px;
  padding-top: 0px;
  color: white;
  display: flex;
`;

const H3 = styled.h3`
  color: white;
  font-size: 1.2em;
`;

const H1 = styled.h1`
  text-align: center;
  color: white;
  padding-top: 50px;
`;
