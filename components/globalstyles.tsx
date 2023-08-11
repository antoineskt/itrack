import { createGlobalStyle } from 'styled-components';
import { borel, inter } from '../utils/fonts';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: ${inter.style};
  }

  h1, h2, h3 {
  
    font-family: ${inter.style}
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
