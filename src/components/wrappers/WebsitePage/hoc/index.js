/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(PageComponet, { pageWrapperProps }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponet {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
