// eslint-disable-next-line no-unused-vars
import React from 'react';
import FeedScreen from '../../src/components/screens/app/FeedScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);
    const githubInfo = await userService.getGithubInfo(session.username);
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,

        },
        posts: profilePage.posts,
        githubInfo,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}

export default websitePageHOC(FeedScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Feed',
    },
    menuProps: {
      display: false,
      logged: true,
    },
    pageBoxProps: {
      backgroundColor: '#F2F2F2',
    },
  },
});
