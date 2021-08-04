import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
   }

   ${normalize}
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colorTheme.background.color};
    color: ${({ theme }) => theme.colorTheme.background.contrastText};     
  }

  /* Full height layout */
    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
    }
    
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;
