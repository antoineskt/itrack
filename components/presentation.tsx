import styled from 'styled-components';
import Image from 'next/image';
import ButtonShopify from './buttonShopify';
import mockup from '../public/mockupok.png';

const H1 = styled.h1`
  padding-bottom: 30px;
  @media screen and (max-width: 900px) {
    padding: 40px 50px 20px 50px;
    font-size: 1.7em;
  }
`;

const H2 = styled.h2`
  padding-bottom: 30px;
  font-size: 2em;
  @media screen and (max-width: 900px) {
    font-size: 1.2em;
    padding: 50px 50px 30px 50px;
    letter-spacing: 0.4px;
  }
`;

const DivLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: 50px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

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

const DivForResponsive = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const DivImageResponsive = styled.div`
  width: 400px;
  height: 400px;
`;

const DivImage = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export default function Presentation() {
  return (
    <SectionPresentation>
      <DivLeft>
        <H1>iTrack will increase your customer satisfaction by at least 35%</H1>

        <H2>
          iTrack is the must-have tracking app for all Shopify merchants. <br />{' '}
          Create customing delivery and solve after-sales questions about
          delivery times.
        </H2>

        <ButtonShopify />
      </DivLeft>

      <DivImage>
        <Image
          src={mockup}
          alt='svg dashboard'
          sizes='50vw'
          style={{
            width: 'auto',
            height: 'auto',
          }}
        />
      </DivImage>

      <DivForResponsive>
        <H1>iTrack will increase your customer satisfaction by at least 35%</H1>
        <DivImageResponsive>
          <Image
            src={mockup}
            alt='svg dashboard'
            width={400}
            height={400}
            objectFit='cover'
          />
        </DivImageResponsive>
        <H2>
          iTrack is the must-have tracking app for all Shopify merchants. <br />{' '}
          Create customing delivery and solve after-sales questions about
          delivery times.
        </H2>
        <ButtonShopify />
      </DivForResponsive>
    </SectionPresentation>
  );
}
