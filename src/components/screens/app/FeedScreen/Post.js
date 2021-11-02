/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { userService } from '../../../../services/user/userService';
import { PostPhotoWrapper } from './style/PostWraper';
import { Box } from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';
import { Button } from '../../../commons/Button';
import LikeButton from '../../../commons/ButtonLike';
import Link from '../../../commons/Link';

export default function Post({
  item, user, githubInfo, postProps,
}) {
  const hasUserLiked = (postLikes) => postLikes.some((like) => like.user === user.id);
  const [likes, setLikes] = React.useState(item.likes);
  const [totalLikes, setTotalLikes] = React.useState(likes.length);
  const [liked, setIsLiked] = React.useState(hasUserLiked(likes));
  React.useEffect(() => {
    setTotalLikes(likes.length);
    setIsLiked(hasUserLiked(likes));
  }, [likes]);

  const handleLike = async (id) => {
    const response = await userService.likeIt(id);
    if (response) {
      setLikes(response.likes ?? []);
    } if (!response) {
      setLikes([]);
    }
  };

  return (
    <>
      {postProps === 'feed' && (
        <PostPhotoWrapper key={item.createdAt} feedPost>
          <section className="posts__post">
            <Link
              href="/app/profile"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img className="posts__post-header" src={githubInfo.avatar} alt={`perfil de${githubInfo.name}`} />
              <Text
                variant="subTitle"
                tag="h2"
                color="tertiary.main"
                margin="0 0 0 1rem"
              >
                {githubInfo.name}
              </Text>
            </Link>
            <Button ghost className="button">
              <img src="/Images/menu.png" alt="icone de menu" />
            </Button>
          </section>
          <section className="posts__post-body">
            <img src={item.photoUrl} alt={item.description} loading="lazy" />
          </section>
          <section className="posts__post-footer">
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              justifyContent="space-between"
            >
              <section className="posts__post-footer__feedback">
                <Box
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  margin="0 15px 0 0"
                >
                  <LikeButton
                    ghost
                    className="button"
                    onClick={() => handleLike(item._id)}
                    liked={liked}
                    width="60px"
                    height="60px"
                  />
                  <Text
                    variant="subTitle"
                    tag="p"
                    color="tertiary.main"
                    margin="auto 0"
                  >
                    {totalLikes}
                  </Text>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                  margin="0 15px 0 0"
                >
                  <Button ghost className="button">
                    <img src="/Images/comments-1.png" alt="" />
                  </Button>
                  <Text
                    variant="subTitle"
                    tag="p"
                    color="tertiary.main"
                    margin="auto 0 auto 10px"
                  >
                    0
                  </Text>
                </Box>
                <Button ghost className="button">
                  <img src="/Images/send.png" alt="" />
                </Button>
              </section>
              <Button ghost className="button">
                <img src="/Images/save.png" alt="" />
              </Button>
            </Box>
          </section>
        </PostPhotoWrapper>
      )}
      {postProps === 'profile' && (
        <PostPhotoWrapper key={item.createdAt} profile>
          <img className="userPosts__post" src={item.photoUrl} alt={item.description} loading="lazy" />
          <div className="userPosts__feedback">
            <LikeButton
              ghost
              className="button"
              onClick={() => handleLike(item._id)}
              liked={liked}
              width="50%"
              height="50%"
            />
          </div>
        </PostPhotoWrapper>
      )}
    </>
  );
}

Post.defaultProps = {
  githubInfo: {},
};

Post.propTypes = {
  item: PropTypes.object.isRequired,
  postProps: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  githubInfo: PropTypes.object,
};
