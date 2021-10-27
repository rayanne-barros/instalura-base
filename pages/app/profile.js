// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProfileScreen from '../../src/components/screens/ProfileScreen';
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

// function ProfilePage() {
//   return (
//     <ProfileScreen />
//   );
// }

export default websitePageHOC(ProfileScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perfil',
    },
    menuProps: {
      display: false,
      logged: true,
    },
  },
});
