import React from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../../commons/Menu';
import Footer from '../../commons/Footer';
import { Box } from '../../foundation/layout/Box';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import { SEO } from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  toggleTheme,
  children,
  seoProps,
  menuProps,
}) {
  const { colorTheme } = React.useContext(ThemeContext);
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        backgroundImage={
            colorTheme.title === 'light'
              ? 'url(/images/bubbles.svg)'
              : 'url(/images/bubbles_dark.svg)'
          }
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} setModalState={setModalState} />
          )}
        </Modal>
        {menuProps.display && (
        <Menu
          toggleTheme={toggleTheme}
          onCadastrarClick={() => setModalState(true)}
        />
        )}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
