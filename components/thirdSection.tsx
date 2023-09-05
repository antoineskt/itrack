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
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 10px;
  }
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

export default function ThirdSection() {
  return (
    <section id='thirdSection'>
      <Background>
        <H1>
          Custom Tracking. Once..
          <br />
          et voilà
        </H1>
        <Div>
          <div>
            <Image
              src={itrackhdThree}
              priority={false}
              alt='double screen'
              sizes='50vw'
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </div>

          <div>
            {data.map((card, i) => (
              <CardInformation key={i} {...card} />
            ))}
          </div>
        </Div>
      </Background>
    </section>
  );
}
