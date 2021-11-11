/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ProfileWrapper } from './style/ProfileWrapper';
import { Grid } from '../../../foundation/layout/Grid';
import Post from '../../../commons/Post';
import CardProfile from '../../../commons/CardProfile';

export default function ProfileScreen(props) {
  const { posts } = props;
  const { githubInfo } = props;
  const { user } = props;
  return (
    <ProfileWrapper>
      <Grid.Container
        marginTop="100px"
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 10, lg: 8 }}
            offset={{ xs: 0, md: 1, lg: 2 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <ProfileWrapper.UserInfo>
              <CardProfile githubInfo={githubInfo} posts={posts} />
            </ProfileWrapper.UserInfo>
            <ProfileWrapper.UserPics>
              <ul className="userPosts">
                {posts.reverse().slice(0, 30).map((post) => (
                  <Post item={post} user={user} key={post.createdAt} postProps="profile" />
                ))}
              </ul>
            </ProfileWrapper.UserPics>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </ProfileWrapper>
  );
}

ProfileScreen.propTypes = {
  githubInfo: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  user: PropTypes.object.isRequired,
};
