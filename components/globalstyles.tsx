import { createGlobalStyle } from 'styled-components';
import { inter, interSmall } from '../utils/fonts';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: ${interSmall.style};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    letter-spacing: -2px;
    line-height: 1.2;
    font-size: 4em;
  }

  h2 {
    letter-spacing: -2px;
    line-height: 1.2;
    font-size: 2.5em;
    margin: 0;
    padding: 0;
  }

  h3, p, li, a {
    font-family: ${interSmall.style};
    color: #353535;
    line-height: 1.8;
    letter-spacing: 0;
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
