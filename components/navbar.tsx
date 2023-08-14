import Image from 'next/image';
import styled from 'styled-components';
import ReusableBackground from './Background';

const SectionHeader = styled.section`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: white;
`;

const DivImageContainer = styled.div`
  padding-left: 50px;
`;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Li = styled.li`
  padding-right: 2em;
  font-size: 1em;
`;

export default function Navbar() {
  return (
    <ReusableBackground>
      <SectionHeader>
        <DivImageContainer>
          <Image height='62' width='62' src='/logowhitefinal.png' alt='logo' />
        </DivImageContainer>
        <Ul>
          <Li>Features</Li>
          <Li>Ressources</Li>
          <Li>Pricing</Li>
          <Li>Contact</Li>
        </Ul>
      </SectionHeader>
    </ReusableBackground>
  );
}
