import React from 'react';
import Logo from '../../../theme/Logo';
import { MenuWrapper } from './style/MenuWraper';
import { Grid } from '../../foundation/layout/Grid';
import TextField from '../../Forms/TextField';
import { Button } from '../Button';
import { Box } from '../../foundation/layout/Box';

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
                value=""
                divClassName="searchDiv"
                inputClassName="searchInput"
              />
              <Button type="button" ghost variant="secondary.main" className="addPicButton">
                <img src="/Images/add.png" alt="adicionar foto" />
              </Button>
              <Button type="button" ghost variant="secondary.main" href="/app/feed" order="1">
                <img src="/Images/home.png" alt="home" />
              </Button>
              <Button type="button" ghost variant="secondary.main" order="2" className="searchIcon">
                <img src="/Images/search.png" alt="lupa" />
              </Button>
              <Button type="button" ghost variant="secondary.main" order="4">
                <img src="/Images/heart.png" alt="like" />
              </Button>
              <Box order="5" className="header__userButton">
                <Button type="button" ghost variant="secondary.main" href="/app/profile">
                  <img className="userPic" src={`https://github.com/${username}.png`} alt="botão para página de perfil" />
                </Button>
                <Box className="header__userButton_modal">
                  <Button
                    type="button"
                    ghost
                    variant="tertiary.main"
                    href="/app/profile"
                    fullWidth
                    style={{
                      width: '100%', justifyContent: 'flex-start', padding: '12px 20px', whiteSpace: 'nowrap',
                    }}
                  >
                    Meu Perfil
                  </Button>
                  <Button type="button" ghost variant="tertiary.main" fullWidth style={{ width: '100%', justifyContent: 'flex-start', padding: '12px 20px' }}>
                    Logout
                  </Button>
                </Box>
              </Box>
            </MenuWrapper.Menu>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </MenuWrapper>
  );
}
