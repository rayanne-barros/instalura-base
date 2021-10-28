import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const FeedWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 48px;
  padding: 0 16px;
  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      padding: 0;
      margin-top: 97px;
      max-width: 788px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

export const PostsContainer = styled.section`
  padding-top: 0;
  ${breakpointsMedia({
    md: css`
      padding-top: 24px;
    `,
  })}
  li {
    width: 100%;
    height: 490px;
    background-color: ${({ theme }) => theme.colors.background.light.color};
    margin-bottom: 25px;
    ${breakpointsMedia({
    md: css`
      max-width: 600px;
      height: 778px;
    `,
  })}
  }
`;

export const ProjetosContainer = styled.section`
  display: none;
  
  ${breakpointsMedia({
    md: css`
      display: initial;
      width: 450px;
      margin-top: 24px;
      padding: 0 10px;
    `,
  })}
  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 18px; 
  }
  .userAvatar {
    width: 64px;
    height: 64px;
  }
  img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration-line: none;
    p {
      padding-left: 8px;
      color: #FB7B6B;
      font-weight: 500;
    }
    img {
      width: 24px;
      height: 24px;
      border-radius: 0;
    }
  }
  .login, .title {
    font-weight: 500;
  }
  .title {
    padding: 25px 0 18px 0;
  }
`;

export default FeedWrapper;
