describe('features/about-us', () => {
  it('can land on the About Us', () => {
    cy.visit('/about-us');
    cy.title().should('eq', 'YLD | About Us');
  });

  it('shows a navigation menu', () => {
    cy.visit('/about-us');
    cy.getComponent('header');
  });

  it('shows relevant About Us sections', () => {
    cy.visit('/about-us');
    cy.getComponent('about-us:intro');
    cy.getComponent('our-team:intro');
    cy.getComponent('our-team:gallery');
    cy.getComponent('our-team:people');
    cy.getComponent('stats');
    cy.getComponent('contact-us');
    cy.getComponent('join-us');
    cy.getComponent('footer');
  });
});
