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
    font-family: ${inter.style};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h2, h3 {
    font-family: ${interSmall};
    color: #353535;
    line-height: 1.8;
    letter-spacing: 0;
  }
  
`;

export default GlobalStyle;
