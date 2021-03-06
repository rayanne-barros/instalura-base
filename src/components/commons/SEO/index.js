import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export function SEO({ headTitle }) {
  const pageTitleDefault = 'Instalura';
  const hasTitle = Boolean(headTitle);
  const title = hasTitle ? (`${headTitle} | ${pageTitleDefault}`) : pageTitleDefault;
  const description = 'Projeto criado  durante o Bootcamp de Front-end Avançado utilizando Next.js, React e styled-components.';
  const image = 'https://i.postimg.cc/PJgNjw7C/projeto-atual.png';
  const urlBase = 'https://instalura-base-rayanne-barros.vercel.app/';
  return (
    <Head>
      <title>{title}</title>
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="keywords" content="Next.js, React, Jamstack" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
