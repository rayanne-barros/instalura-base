import React from 'react';
import Logo from '../../../theme/Logo';
import { MenuWrapper } from './style/MenuWraper';
import { Grid } from '../../foundation/layout/Grid';
import TextField from '../../Forms/TextField';
import { Button } from '../Button';

export default function LoggedMenu(user) {
  // eslint-disable-next-line react/destructuring-assignment
  const { username } = user.user;
  return (
    <MenuWrapper>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 10 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <MenuWrapper.Logo>
              <Logo />
            </MenuWrapper.Logo>
            <MenuWrapper.Menu>
              <TextField
                placeholder="Pesquisar"
                name="search"
                type="search"
                margin="0"
                divClassName="searchDiv"
                inputClassName="searchInput"
              />
              <Button type="button" ghost variant="secondary.main" className="addPicButton">
                <img src="/Images/add.png" alt="adicionar foto" />
              </Button>
              <Button type="button" ghost variant="secondary.main" href="/app/login" order="1">
                <img src="/Images/home.png" alt="home" />
              </Button>
              <Button type="button" ghost variant="secondary.main" order="2" className="searchIcon">
                <img src="/Images/search.png" alt="home" />
              </Button>
              <Button type="button" ghost variant="secondary.main" order="4">
                <img src="/Images/heart.png" alt="likes" />
              </Button>
              <Button type="button" ghost variant="secondary.main" order="5" href="/app/profile">
                <img className="userPic" src={`https://github.com/${username}.png`} alt="botão para página de perfil" />
              </Button>
            </MenuWrapper.Menu>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </MenuWrapper>
  );
}
