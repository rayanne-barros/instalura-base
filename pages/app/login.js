import React from 'react';
import styled from 'styled-components';
import { Box } from '../../src/components/foundation/layout/Box';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const Title = styled.h1`
  text-align: center;
`;

function LoginScreen() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <Title>Página de Login</Title>
    </Box>
  );
}

export default websitePageHOC(LoginScreen,
  {
    pageWrapperProps: {
      seoProps: {
        headTitle: 'Login',
      },
      menuProps: {
        display: false,
      },
    },
  });
