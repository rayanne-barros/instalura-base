import React from 'react';
import PropTypes from 'prop-types';
import LogoLight from '../../../theme/Logo';
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
export default function Menu({ onCadastrarClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <LogoLight />
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
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
