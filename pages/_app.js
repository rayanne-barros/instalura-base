import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme, { colors } from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(colors.modes.dark);

  const toggleTheme = () => {
    setColorTheme(colorTheme.title === 'light' ? colors.modes.dark : colors.modes.light);
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

        <link rel="icon" href="/Images/instalura_icon.ico" />
      </Head>
      <ThemeProvider theme={{ theme, colorTheme }}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
