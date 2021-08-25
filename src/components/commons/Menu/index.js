import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { LogoDark, LogoLight } from '../../../theme/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas Frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

// eslint-disable-next-line react/prop-types
export default function Menu({ toggleTheme, onCadastrarClick }) {
  const { colorTheme } = useContext(ThemeContext);
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        {colorTheme.title === 'light' ? <LogoLight /> : <LogoDark />}
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text tag="a" variant="smallestException" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button
          ghost
          variant="primary"
          onClick={toggleTheme}
        >
          {colorTheme.title === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>

        <Button ghost variant="secondary" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
