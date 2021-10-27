/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
  PageComponet,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper
        {...pageWrapperProps}
        {...props.pageWrapperProps}
        messages={props.messages}
        user={props.user}
      >
        <PageComponet {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
