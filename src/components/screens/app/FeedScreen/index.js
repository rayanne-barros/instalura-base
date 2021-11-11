/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../foundation/Text';
import { Grid } from '../../../foundation/layout/Grid';
import { FeedWrapper } from './style/FeedWrapper';
import Post from '../../../commons/Post';
import CardFeed from '../../../commons/CardFeed';

const friends = [
  {
    name: 'Rayanne Barros',
    username: 'rayanne-barros',
    avatar: 'https://avatars.githubusercontent.com/u/81394995?v=4',
    url: 'https://github.com/rayanne-barros',
  },
  {
    name: 'Carol Andrade',
    avatar: 'https://avatars.githubusercontent.com/u/65976843?v=4',
    username: 'carolandrade1',
    url: 'https://github.com/carolandrade1',
  },
  {
    name: 'Danilo Yorinori',
    avatar: 'https://avatars.githubusercontent.com/u/624381?v=4',
    username: 'danilok',
    url: 'https://github.com/danilok',
  },
  {
    name: 'Eduardo Tioma',
    avatar: 'https://avatars.githubusercontent.com/u/32800546?v=4',
    username: 'edukure',
    url: 'https://github.com/edukure',
  },
  {
    name: 'Gabriel Bridi Schultz',
    avatar: 'https://avatars.githubusercontent.com/u/81654505?v=4',
    username: 'SchultzGabriel',
    url: 'https://github.com/SchultzGabriel',
  },
];

export default function FeedScreen(props) {
  const { posts } = props;
  const { githubInfo } = props;
  const { user } = props;
  return (
    <FeedWrapper>
      <Grid.Container
        marginTop="100px"
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <ul className="posts">
              {posts.reverse().slice(0, 30).map((post) => (
                <Post item={post} user={user} githubInfo={githubInfo} key={post.createdAt} postProps="feed" />
              ))}
            </ul>
          </Grid.Col>
          <Grid.Col
            value={{ md: 5, lg: 4 }}
            offset={{ md: 0, lg: 0 }}
            display="flex"
          >
            <section className="profiles">
              <CardFeed item={githubInfo} main="true" />
              <Text
                variant="paragraph1"
                tag="span"
                color="tertiary.main"
                margin="20px 5px 0 0"
                opacity=".7"
              >
                Projetos da galera
              </Text>
              <ul>
                {friends.map((item) => (
                  <CardFeed item={item} key={item.username} />
                ))}
              </ul>
            </section>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </FeedWrapper>
  );
}

FeedScreen.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  githubInfo: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
