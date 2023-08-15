import styled from 'styled-components';
import Image from 'next/image';
import ButtonShopify from './buttonShopify';
import mockup from '../public/mockupok.png';

const SectionPresentation = styled.section`
  margin: 0;
  padding-left: 50px;
  padding-bottom: 50px;
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding-left: 10px;
    z-index: 1;
  }
`;

const H1 = styled.h1``;

const H3 = styled.h3`
  padding-bottom: 30px;
`;

const DivLeft = styled.div`
  padding-top: 50px;
`;
export default function Presentation() {
  return (
    <SectionPresentation>
      <DivLeft>
        <H1>iTrack will increase your customer satisfaction by at least 35%</H1>

        <H3>
          iTrack is the must-have tracking app for all Shopify merchants. <br />{' '}
          Create customing delivery and solve after-sales questions about
          delivery times.
        </H3>

        <ButtonShopify />
      </DivLeft>
      <Image
        src={mockup}
        alt='svg dashboard'
        sizes='50vw'
        style={{
          width: 'auto',
          height: 'auto',
        }}
      />
    </SectionPresentation>
  );
}
