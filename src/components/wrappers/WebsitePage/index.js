/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
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
        {...seoProps}
      />
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        {...pageBoxProps}
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
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
