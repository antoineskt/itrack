/* eslint-disable react/no-unescaped-entities */
import Background from './background';
import Image from 'next/image';
import itrackhdThree from '../public/itrackhdThree.png';
import styled from 'styled-components';
import { InformationData } from '../type/data';
import CardInformation from './CardInformation';

const data: InformationData[] = [
  {
    text: 'Comprehensible tracking information that provides only the essential details',
  },
  {
    text: 'Say goodbye to messy international tracking numbers',
  },
  {
    text: 'Comprehensible tracking information that provides only the essential details',
  },
  {
    text: "Configured in just a few checks, there's no need to go back over it",
  },
  {
    text: 'Save time to focus on your Business',
  },
];
const Div = styled.div`
  padding: 50px;
  padding-top: 0px;
  color: white;
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const H1 = styled.h1`
  text-align: center;
  color: white;
  padding-top: 50px;
`;

const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  @media screen and (max-width: 900px) {
    max-width: 300px;
    height: 300px;
  }
`;
export default function ThirdSection() {
  return (
    <Background>
      <section
        id='thirdSection'
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <H1>
          Custom Tracking. Once..
          <br />
          et voilà
        </H1>
        <Div>
          <ContainerImage>
            <Image src={itrackhdThree} fill alt='double screen' />
          </ContainerImage>

          <div style={{ width: '100%' }}>
            {data.map((card, i) => (
              <CardInformation key={i} {...card} />
            ))}
          </div>
        </Div>
      </section>
    </Background>
  );
}
