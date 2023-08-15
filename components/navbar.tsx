import Image from 'next/image';
import styled from 'styled-components';
import ReusableBackground from './background';

const Header = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: white;
`;

const DivImageContainer = styled.div`
  padding-left: 50px;
`;
const Nav = styled.nav`
  display: flex;
  list-style-type: none;
`;

const A = styled.a`
  padding-right: 2em;
  font-size: 1.3em;
  color: white;
`;

export default function Navbar() {
  return (
    <ReusableBackground>
      <Header>
        <DivImageContainer>
          <Image height='62' width='62' src='/logowhitefinal.png' alt='logo' />
        </DivImageContainer>
        <Nav>
          <A href='#secondSection'>Features</A>
          <A href='#thirdSection'>Ressources</A>
          <A>Pricing</A>
          <A>Contact</A>
        </Nav>
      </Header>
    </ReusableBackground>
  );
}
