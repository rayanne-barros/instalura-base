import React from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import animationData from './likeanimation.json';

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;
  z-index: 0;
  .animation {
    pointer-events: none;
  }
`;

export default function ButtonLike({
  height, width, display, totalLikes, userLiked, handleLike,
}) {
  // Animaçao
  const [animationState, setAnimationState] = React.useState({
    isStopped: false, isPaused: false, direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  React.useEffect(() => {
    setAnimationState({ ...animationState, direction: userLiked ? 1 : -1 });
  }, [userLiked]);

  return (
    <>
      <ButtonWrapper
        onClick={() => {
          handleLike();
          const reverseAnimation = -1;
          const normalAnimation = 1;
          setAnimationState({
            ...animationState,
            direction: animationState.direction === normalAnimation
              ? reverseAnimation
              : normalAnimation,
          });
        }}
      >
        <div className="animation">
          <Lottie
            options={defaultOptions}
            height={height}
            width={width}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </ButtonWrapper>
      <p style={{ display: `${display}` }}>
        {totalLikes}
      </p>
    </>
  );
}

ButtonLike.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  totalLikes: PropTypes.string.isRequired,
  userLiked: PropTypes.bool.isRequired,
  handleLike: PropTypes.func.isRequired,
};
