/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import { Box } from '../../foundation/layout/Box';
import FeedWrapper, { PostsContainer, ProjetosContainer } from './style/FeedWrapper';
import Post from './Post';

const friends = [
  {
    name: 'Ana Paula Dezuo',
    avatar: 'https://avatars.githubusercontent.com/u/43011663?v=4',
    login: 'anadezuo',
    url: 'https://github.com/anadezuo',
  },
  {
    name: 'Carol Andrade',
    avatar: 'https://avatars.githubusercontent.com/u/65976843?v=4',
    login: 'carolandrade1',
    url: 'https://github.com/carolandrade1',
  },
  {
    name: 'Danilo Yorinori',
    avatar: 'https://avatars.githubusercontent.com/u/624381?v=4',
    login: 'danilok',
    url: 'https://github.com/danilok',
  },
  {
    name: 'Eduardo Tioma',
    avatar: 'https://avatars.githubusercontent.com/u/32800546?v=4',
    login: 'edukure',
    url: 'https://github.com/edukure',
  },
  {
    name: 'Gabriel Bridi Schultz',
    avatar: 'https://avatars.githubusercontent.com/u/81654505?v=4',
    login: 'SchultzGabriel',
    url: 'https://github.com/SchultzGabriel',
  },
  {
    name: 'Victor Dantas',
    avatar: 'https://avatars.githubusercontent.com/u/64330605?v=4',
    login: 'victordantasdev',
    url: 'https://github.com/victordantasdev',
  },
];

export default function FeedScreen(props) {
  const { posts } = props;
  const { githubInfo } = props;
  const { user } = props;
  return (
    <FeedWrapper>
      <PostsContainer>
        <ul>
          {posts.map((post) => (
            <Post item={post} user={user} githubInfo={githubInfo} key={post.createdAt} postProps="feed" />
          ))}
        </ul>
      </PostsContainer>
      <ProjetosContainer>
        <ul>
          <li key={githubInfo.username}>
            <Box
              display="flex"
              alignItems="center"
            >
              <img src={githubInfo.avatar} alt="Imagem do usuário" className="userAvatar" />
              <Box
                display="flex"
                flexDirection="column"
                padding="10px 16px"
              >
                <Text tag="p" variant="paragraph2" color="tertiary.main" className="login">
                  {githubInfo.username}
                </Text>
                <Text tag="p" variant="paragraph2" color="tertiary.light">
                  {githubInfo.name}
                </Text>
              </Box>
            </Box>
            <a href={githubInfo.url} target="_blank" rel="noopener noreferrer">
              <img src="/images/github.svg" alt="Icone Github" />
              <Text tag="p">
                Github
              </Text>
            </a>
          </li>
          <Text tag="p" variant="paragraph1" color="tertiary.light" className="title">
            Projetos da galera
          </Text>
          {friends.map((item) => (
            <li key={item.name}>
              <Box
                display="flex"
                alignItems="center"
              >
                <img src={item.avatar} alt="" />
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="10px 16px"
                >
                  <Text tag="p" variant="paragraph2" color="tertiary.main" className="login">
                    {item.login}
                  </Text>
                  <Text tag="p" variant="paragraph2" color="tertiary.light">
                    {item.name}
                  </Text>
                </Box>
              </Box>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src="/Images/github.svg" alt="Icone Github" />
                <Text tag="p">
                  Github
                </Text>
              </a>
            </li>
          ))}
        </ul>
      </ProjetosContainer>
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
