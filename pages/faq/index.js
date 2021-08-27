import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

// eslint-disable-next-line react/prop-types
export default function FAQPage({ toggleTheme, faqCategories }) {
  return (
    <FAQScreen faqCategories={faqCategories} toggleTheme={toggleTheme} />
  );
}
export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);
  return {
    props: {
      faqCategories,
    }, // will be passed to the page component as props
  };
}
