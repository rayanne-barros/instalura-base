import React from 'react';
import AboutScreen, { getContent } from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function AboutPage({ messages }) {
  return (
    <AboutScreen messages={messages} />
  );
}

AboutPage.propTypes = AboutScreen.propTypes;

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
}
