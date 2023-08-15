import { createGlobalStyle } from 'styled-components';
import { inter, interSmall } from '../utils/fonts';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
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
