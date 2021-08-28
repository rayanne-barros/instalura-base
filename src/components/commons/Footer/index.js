import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding: 0 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    cursor: pointer;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        {' '}
        <a href="https://github.com/rayanne-barros" target="_blank" rel="noopener noreferrer">
          <span>Rayanne Barros</span>
        </a>
        {' '}
        {' '}
        durante o
        {' '}
        <a href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
