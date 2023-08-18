import Image from 'next/image';
import styled from 'styled-components';
import ReusableBackground from './background';
import { useState } from 'react';

const Header = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  color: white;
  @media screen and (max-width: 900px) {
  }
`;

const DivImageContainer = styled.div`
  padding-left: 50px;
  @media screen and (max-width: 900px) {
    padding-left: 20px;
  }
`;
const Nav = styled.nav`
  display: flex;
  list-style-type: none;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const SvgMenu = styled.svg<{ $click: boolean }>`
  display: none;
  margin-right: 20px;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    display: ${({ $click }) => ($click === true ? 'none' : 'block')};
  }
`;

const A = styled.a`
  &:hover {
    color: hotpink;
  }
  padding-right: 2em;
  font-size: 1.3em;
  color: white;
  @media screen and (max-width: 900px) {
    font-size: 1em;
    padding-right: 0;
    padding-top: 10px;
  }
`;

const NavMenuInBurger = styled.nav<{ $click: boolean }>`
  display: ${({ $click }) => ($click === true ? 'flex' : 'flex')};
  position: absolute;
  transform: ${({ $click }) => ($click === true ? 'scaleY(1)' : 'scaleY(0)')};
  transition: 200ms all ease;
  transform-origin: top;
  right: 0;
  width: 100%;
  top: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 1em;
  background: rgb(3, 111, 136);
  background: radial-gradient(
    circle,
    rgba(3, 111, 136, 1) 0%,
    rgba(3, 3, 3, 1) 100%
  );
  z-index: 10;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const SvgCross = styled.svg`
  color: white;
  margin-right: 20px;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export default function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <ReusableBackground>
      <Header>
        <DivImageContainer>
          <Image
            height='62'
            width='62'
            src='/logowhitefinal.png'
            alt='iTrack Logo '
          />
        </DivImageContainer>
        <Nav>
          <A href='#secondSection'>Features</A>
          <A href='#thirdSection'>Ressources</A>
          <A href='#fourthSection'>Pricing</A>
          <A href='mailto:beyondagency.apps@gmail.com'>Contact</A>
        </Nav>
        {!click ? (
          <SvgMenu
            $click={click}
            onClick={() => setClick(true)}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            height='34'
            viewBox='0 0 24 24'
            width='34'
          >
            <g stroke='#ffffff' strokeLinecap='round' strokeWidth='2'>
              <path d='m4 18h16' />
              <path d='m4 12h16' />
              <path d='m4 6h16' />
            </g>
          </SvgMenu>
        ) : (
          <SvgCross
            onClick={() => setClick(false)}
            xmlns='http://www.w3.org/2000/svg'
            width='34'
            height='34'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M20 20L4 4.00003M20 4L4.00002 20'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </SvgCross>
        )}

        <NavMenuInBurger $click={click}>
          <A href='#secondSection'>Features</A>
          <A href='#thirdSection'>Ressources</A>
          <A href='#fourthSection'>Pricing</A>
          <A href='mailto:beyondagency.apps@gmail.com'>Contact</A>
        </NavMenuInBurger>
      </Header>
    </ReusableBackground>
  );
}
