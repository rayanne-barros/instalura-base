import ProfileScreenPageObject from '../../../../src/components/screens/app/ProfileScreen/ProfileScreen.pageObject';

describe('postPhoto', () => {
  describe('go to the profile page', () => {
    it('open and fill the form modal', () => {
      const profilePage = new ProfileScreenPageObject(cy);
      profilePage
        .openFormModal()
        .fillFormPost({
          photoUrl: 'https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.png',
          filter: 'amaro',
          description: 'Pikachu da sorte!',
        })
        .submitPostForm();

      cy.url().should('include', '/app/feed/');
    });
  });
});
