import styled from 'styled-components';
import { inter, andika, borel } from '../utils/fonts';

import Image from 'next/image';

const SectionPresentation = styled.section`
  margin: 0;
  padding: 80px;
  display: flex;
`;

const H1 = styled.h1`
  font-size: 48px;
`;

const H2 = styled.h2`
  font-family: 'borel';
`;

const AncerShopify = styled.a`
  background-color: black;
  display: flex;
  color: white;
  border-radius: 5px;
  width: 250px;
  height: 75px;
  padding: 10px;
  align-items: center;

  &:hover {
    filter: invert(100%);
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Svg = styled.svg`
  fill: white;
`;

const P1buttonshopify = styled.p`
  margin: 0;
  font-size: 0.8em;
`;

const P2buttonshopify = styled.p`
  margin: 0;
  font-size: 1.2em;
`;

const DivRight = styled.div``;

const DivLeft = styled.div``;
export default function Presentation() {
  const svgShopify = (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      height='55'
      viewBox='0 0 32 32'
      width='55'
    >
      <path d='m20.448 31.974 9.625-2.083s-3.474-23.484-3.5-23.641-.156-.255-.281-.255c-.13 0-2.573-.182-2.573-.182s-1.703-1.698-1.922-1.88c-.057-.052-.099-.078-.161-.099l-1.219 28.141zm-4.833-16.901s-1.083-.563-2.365-.563c-1.932 0-2.005 1.203-2.005 1.521 0 1.641 4.318 2.286 4.318 6.172 0 3.057-1.922 5.01-4.542 5.01-3.141 0-4.719-1.953-4.719-1.953l.859-2.781s1.661 1.422 3.042 1.422c.901 0 1.302-.724 1.302-1.245 0-2.156-3.542-2.255-3.542-5.807-.047-2.984 2.094-5.891 6.438-5.891 1.677 0 2.5.479 2.5.479l-1.26 3.625zm-.719-13.969c.177 0 .359.052.536.182-1.313.62-2.75 2.188-3.344 5.323-.875.286-1.724.542-2.516.771.688-2.38 2.359-6.26 5.323-6.26zm1.646 3.932v.182c-1.005.307-2.115.646-3.193.979.62-2.37 1.776-3.526 2.781-3.958.255.667.411 1.568.411 2.797zm.718-2.973c.922.094 1.521 1.151 1.901 2.339-.464.151-.979.307-1.542.484v-.333c0-1.005-.13-1.828-.359-2.495zm3.99 1.718c-.031 0-.083.026-.104.026-.026 0-.385.099-.953.281-.563-1.646-1.568-3.161-3.344-3.161h-.156c-.51-.646-1.135-.927-1.672-.927-4.141 0-6.12 5.172-6.74 7.797-1.594.484-2.75.844-2.88.896-.901.286-.927.313-1.031 1.161-.099.615-2.438 18.75-2.438 18.75l18.078 3.396z' />
    </Svg>
  );

  return (
    <SectionPresentation>
      <DivLeft>
        <H1>iTrack will increase your Shopify sales by at least 35%</H1>

        <H2>
          Cart X is the must-have upsell app for all Shopify merchants. Create
          pre-purchase upsells, post-purchase upsells, thank you page offers &
          boost sales by at least 35%.
        </H2>

        <AncerShopify href='https://apps.shopify.com/itrack?locale=fr'>
          {svgShopify}
          <Div>
            <P1buttonshopify>FIND IT ON THE</P1buttonshopify>
            <P2buttonshopify>Shopify App store</P2buttonshopify>
          </Div>
        </AncerShopify>
      </DivLeft>
      <Image src='/mockup.png' alt='svg dashboard' width={1920} height={1290} />
    </SectionPresentation>
  );
}
