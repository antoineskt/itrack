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
  @media screen and (max-width: 900px) {
    display: ${({ $click }) => ($click === true ? 'none' : 'block')};
  }
`;

const A = styled.a`
  padding-right: 2em;
  font-size: 1.3em;
  color: white;
  @media screen and (max-width: 900px) {
    padding-right: 0;
    font-size: 1em;
  }
`;

const NavMenuInBurger = styled.nav<{ $click: boolean }>`
  display: ${({ $click }) => ($click === true ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 10px;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1em;
  background: black;
  z-index: 10;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const SvgCross = styled.svg`
  color: white;
`;

export default function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <ReusableBackground>
      <Header>
        <DivImageContainer>
          <Image height='62' width='62' src='/logowhitefinal.png' alt='logo' />
        </DivImageContainer>
        <Nav>
          <A href='#secondSection'>Features</A>
          <A href='#thirdSection'>Ressources</A>
          <A href='#fourthSection'>Pricing</A>
          <A>Contact</A>
        </Nav>
        <SvgMenu
          $click={click}
          onClick={() => setClick(true)}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          height='34'
          viewBox='0 0 24 24'
          width='34'
        >
          <g stroke='#ffffff' stroke-linecap='round' stroke-width='2'>
            <path d='m4 18h16' />
            <path d='m4 12h16' />
            <path d='m4 6h16' />
          </g>
        </SvgMenu>

        <NavMenuInBurger $click={click}>
          <SvgCross
            onClick={() => setClick(false)}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M20 20L4 4.00003M20 4L4.00002 20'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
            />
          </SvgCross>
          <A href='#secondSection'>Features</A>
          <A href='#thirdSection'>Ressources</A>
          <A href='#fourthSection'>Pricing</A>
          <A>Contact</A>
        </NavMenuInBurger>
      </Header>
    </ReusableBackground>
  );
}
