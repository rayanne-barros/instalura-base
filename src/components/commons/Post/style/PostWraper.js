import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const PostPhotoWrapper = styled.li`
  list-style: none;

  ${({ feedPost }) => feedPost && css`
    background-color: ${({ theme }) => theme.colors.background.light.color};
    margin-bottom: 50px;
    width: 100%;

    .posts__post{
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 25px;
    }

    .posts__post h2{
      font-weight: 600;
      font-size: 14px;
    }

    .posts__post-header{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .posts__post-body{
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .posts__post-body img{
      width: 100%;
    }

    .posts__post-footer{
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 25px;
    }

    .posts__post-footer__feedback{
      display: flex;
      justify-content: space-between;
      width: 40%;
    }

    .posts__post-footer__feedback span{
      font-weight: 500;
      font-size: 14px;
    }  
  `};

  ${({ profile }) => profile && css`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    position: relative;
    width: 30%;
    margin-bottom: 3%;

    &:hover{
      cursor: pointer;
    }

    &:hover .userPosts__post{
      filter: brightness(.5);
    }

    &:hover .userPosts__feedback{
      visibility: visible;
    }

    .userPosts__post{
      object-fit: cover;
      height: 100%;
      width: 100%;
      transition: ${({ theme }) => theme.transition};
    }

    .userPosts__feedback{
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      margin-bottom: -10px;
      visibility: hidden;
      transition: ${({ theme }) => theme.transition};
      z-index: 9;
    }

    .userPosts__feedback-icon{
      filter: invert(1);
      width: 20px;
    }

    ${breakpointsMedia({
    xs: css`
        height: 91px;
      `,
    md: css`
        height: 230px;
      `,
  })}
  `}
`;
