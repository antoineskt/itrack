import Image from 'next/image';
import styled from 'styled-components';
import logowhitefinal from './logowhitefinal.png';

const SectionHeader = styled.section`
  display: flex;
  background-color: black;
  height: 120px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: white;
`;

const DivImageContainer = styled.div`
  padding-left: 50px;
  background: red;
`;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Li = styled.li`
  padding-right: 2em;
  font-size: 2em;
`;

export default function Navbar() {
  return (
    <SectionHeader>
      <DivImageContainer>
        <Image src={logowhitefinal} alt='logo' />
      </DivImageContainer>
      <Ul>
        <Li>Features</Li>
        <Li>Ressources</Li>
        <Li>Pricing</Li>
        <Li>Contact</Li>
      </Ul>
    </SectionHeader>
  );
}
