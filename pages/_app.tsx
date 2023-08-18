import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import Head from 'next/head';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          iTrack, the must-have tracking app for all Shopify merchants.
        </title>
        <meta
          name='description'
          content='iTrack is the must-have tracking app for all Shopify merchants.
Create customing delivery and solve after-sales questions about delivery times.'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
