/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { CardProfileWrapper } from './style/CardProfileWrapper';
import Text from '../../foundation/Text';

export default function CardProfile({ githubInfo, posts }) {
  return (
    <CardProfileWrapper>
      <section className="user__image">
        <img className="profilePic" src={`${githubInfo.avatar}`} alt="Foto de perfil" />
      </section>
      <section className="user__data">
        <div className="user__data__counter">
          <Text
            variant="subTitle"
            tag="span"
            color="tertiary.main"
          >
            {posts.length}
            <br />
          </Text>
          <Text
            variant="smallestException"
            tag="span"
            color="tertiary.main"
            opacity=".7"
          >
            Posts
            <br />
          </Text>
        </div>
        <div className="user__data__counter">
          <Text
            variant="subTitle"
            tag="span"
            color="tertiary.main"
          >
            {githubInfo.following}
            <br />
          </Text>
          <Text
            variant="smallestException"
            tag="span"
            color="tertiary.main"
            opacity=".7"
          >
            Seguindo
            <br />
          </Text>
        </div>
        <div className="user__data__counter">
          <Text
            variant="subTitle"
            tag="span"
            color="tertiary.main"
          >
            {githubInfo.followers}
            <br />
          </Text>
          <Text
            variant="smallestException"
            tag="span"
            color="tertiary.main"
            opacity=".7"
          >
            Seguidores
            <br />
          </Text>
        </div>
      </section>
      <section className="user__bio">
        <Text
          variant="subTitle"
          tag="h1"
          color="tertiary.main"
          margin="16px 0 0 0"
        >
          {githubInfo.name}
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.main"
          opacity=".7"
          margin="0"
        >
          {githubInfo.bio}
        </Text>
      </section>
    </CardProfileWrapper>
  );
}

CardProfile.propTypes = {
  githubInfo: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};
