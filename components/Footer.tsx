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
      }}
      target='_blank'
      href={link}
    >
      {author}
    </Link>
  );
};

function Footer() {
  return (
    <ReusableBackground>
      <FooterContainer id='footer'>
        <h2>iTrack</h2>
        <ButtonShopify />© 2023 - iTrack . All Rights Reserved |<br />
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
