import redirects from './redirects';

// Test Drive Development
describe('config/redirects', () => {
  test('renders all current redirects', () => {
    const redirectsAtuais = [
      {
        source: '/login/',
        destination: '/app/login/',
        permanent: true,
      },
    ];
    expect(redirects).toEqual(redirectsAtuais);
  });
});
