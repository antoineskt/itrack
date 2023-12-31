/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styled from 'styled-components';
import doubleScreen from '../public/doubleScreen.png';
import CardInformation from './CardInformation';
import { InformationData } from '../type/data';

export default function secondSection() {
  const paintingSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
      <path d='m0 0h20v20h-20z' fill='none' />
      <path d='m18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24-.61.3-5.76 3.47-7.67 5.57-.86.96-2.06 3.79-1.09 4.82.92.98 3.96-.17 4.79-1 2.06-2.06 5.21-7.17 5.5-7.79zm-16.93 14.08c2.37-1.56 1.46-3.41 3.23-4.64.93-.65 2.22-.62 3.08.29.63.67.8 2.57-.16 3.46-1.57 1.45-4 1.55-6.15.89z' />
    </svg>
  );
  const roadSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <path d='m8 56 2.11-7-2.11-7 13 7z' />
      <path d='m47.5 50h-23.5a1 1 0 0 1 0-2h23.5a4.5 4.5 0 0 0 0-9h-31a6.5 6.5 0 1 1 0-13h23.5a1 1 0 0 1 0 2h-23.5a4.5 4.5 0 0 0 0 9h31a6.5 6.5 0 0 1 0 13z' />
      <path d='m43 25a1 1 0 0 1 -1-1v-16a1 1 0 0 1 2 0v16a1 1 0 0 1 -1 1z' />
      <path d='m43 16h10l-3-3.96 3-4.04h-10z' />
      <circle cx='43' cy='27' r='3' />
    </svg>
  );

  const relaxSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <g clipRule='evenodd' fill='#000' fillRule='evenodd'>
        <path d='m12 9c.5523 0 1 .44772 1 1v4c0 .4589-.3123.8589-.7575.9701l-2.45434.6136 3.98004 4.7761c.3536.4243.2963 1.0549-.128 1.4084-.4243.3536-1.0548.2963-1.4084-.128l-5.00001-6c-.2203-.2644-.2892-.6234-.18241-.9505s.37426-.5764.70809-.6598l3.24253-.8107v-3.2192c0-.55228.4477-1 1-1z' />
        <path d='m11 14c0-.5523.4477-1 1-1h4c.4347 0 .8196.2808.9523.6948s-.0173.8663-.3711 1.1189l-6.99995 5c-.44942.321-1.07397.217-1.39498-.2325-.321-.4494-.21691-1.0739.2325-1.3949l4.46073-3.1863h-.8795c-.5523 0-1-.4477-1-1z' />
        <path d='m14 5c0-1.10457-.8954-2-2-2s-2 .89543-2 2 .8954 2 2 2 2-.89543 2-2z' />
        <path d='m14.7343 3.85681c-.3552.42289-.3004 1.05367.1225 1.40889l1.3977 1.17404-4.2545 2.41086-4.25446-2.41086 1.39766-1.17404c.42289-.35522.47774-.98601.12251-1.40889-.35522-.42289-.98601-.47774-1.4089-.12251l-2.5 2.1c-.25084.2107-.38257.53091-.35261.85713.02995.32622.21778.61708.50279.77859l6.00001 3.39998c.3058.1733.6802.1733.986 0l6-3.39998c.285-.16151.4729-.45237.5028-.77859.03-.32622-.1018-.64643-.3526-.85713l-2.5-2.1c-.4229-.35523-1.0537-.30038-1.4089.12251z' />
      </g>
    </svg>
  );

  const informationData: InformationData[] = [
    {
      logo: paintingSvg,
      text: "Customize once and don't touch again",
      primary: true,
    },
    {
      logo: roadSvg,
      text: 'No more complicate tracking number',
    },
    {
      logo: relaxSvg,
      text: 'Turns frustrated customers who are waiting for their delivery into calm ones',
    },
  ];

  const ContainerImage = styled.div`
    width: 100%;
    max-width: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    @media screen and (max-width: 900px) {
      max-width: 300px;
      height: 300px;
      margin: 0 auto;
    }
  `;

  return (
    <section
      style={{ maxWidth: '1200px', margin: '0 auto' }}
      id='secondSection'
    >
      <H1>
        Save time and relieve your
        <br /> customer service
      </H1>
      <Div>
        <div>
          {informationData.map((card) => (
            <CardInformation key={card.text} primary {...card} />
          ))}
        </div>
        <ContainerImage>
          <Image src={doubleScreen} alt='Double ecran iphone' fill />
        </ContainerImage>
      </Div>
    </section>
  );
}
const H1 = styled.h1`
  text-align: center;
  padding-top: 40px;
  @media screen and (max-width: 900px) {
    padding-top: 40px;
  }
`;
const Div = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
