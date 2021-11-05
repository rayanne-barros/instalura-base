import styled from 'styled-components';

export const ProfileWrapper = styled.main`
background-color: ${({ theme }) => theme.colors.background.main.color};
z-index: 1;
margin-bottom: 100px;
`;

ProfileWrapper.UserInfo = styled.section`
  width: 100%;
`;

ProfileWrapper.UserPics = styled.section`
        width:100%;
    .userPosts{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width:100%;
    }
`;
