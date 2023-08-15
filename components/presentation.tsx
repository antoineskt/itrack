import styled from 'styled-components';
import Image from 'next/image';
import ButtonShopify from './buttonShopify';

const SectionPresentation = styled.section`
  margin: 0;
  padding-left: 50px;
  padding-bottom: 50px;
  display: flex;
`;

const H1 = styled.h1``;

const H3 = styled.h3`
  padding-bottom: 30px;
`;

const DivLeft = styled.div``;
export default function Presentation() {
  return (
    <SectionPresentation>
      <DivLeft>
        <H1>iTrack will increase your customer satisfaction by at least 35%</H1>

        <H3>
          iTrack is the must-have tracking app for all Shopify merchants. <br />{' '}
          Create customing delivery, post-purchase upsells, <br />
          thank you page offers & boost customer satisfaction by
          <br /> at least 35%.
        </H3>

        <ButtonShopify />
      </DivLeft>
      <Image src='/mockupok.png' alt='svg dashboard' width={941} height={632} />
    </SectionPresentation>
  );
}
