import React from 'react';
import ReusableBackground from './background';
import styled from 'styled-components';
import ButtonShopify from './buttonShopify';
import Link from 'next/link';

const FooterContainer = styled.footer`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  color: white;
  font-size: 1em;
  @media screen and (max-width: 900px) {
    font-size: 0.8em;
  }
`;

const GithubLink = ({ link, author }: { link: string; author: string }) => {
  return (
    <Link
      style={{
        color: 'white',
        fontSize: '1em',
        textDecoration: 'underline',
      }}
      target='_blank'
      href={link}
    >
      {author}
    </Link>
  );
};

const H2Footer = styled.h2`
  letter-spacing: 5px;
`;

function Footer() {
  return (
    <ReusableBackground>
      <FooterContainer id='footer'>
        <H2Footer>iTrack</H2Footer>
        <ButtonShopify />© 2023 - iTrack . All Rights Reserved |<br />
        <div>CScorp LLC, 5203 Juan Tabo Blvd. NE Suite 2b</div>
        <div>Albuquerque, New Mexico 87111</div>
        <div>
          Made by{' '}
          <GithubLink
            author='@antoineskt'
            link='https://github.com/antoineskt'
          />{' '}
          &{' '}
          <GithubLink
            author='@RaphGenius'
            link='https://github.com/RaphGenius'
          />
        </div>
      </FooterContainer>
    </ReusableBackground>
  );
}

export default Footer;
