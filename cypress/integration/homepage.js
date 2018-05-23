describe('features/homepage', () => {
  it('can land on the homepage', () => {
    cy.visit('/');
    cy.title().should('eq', 'YLD | Home');
  });

  it('shows a navigation menu', () => {
    cy.visit('/');
    cy.getComponent('component:navigation');
  });

  it('shows relevant homepage sections', () => {
    cy.visit('/');
    cy.getComponent('home:build-better');
    cy.getComponent('home:case-studies');
    cy.getComponent('home:industries');
    cy.getComponent('home:we-enable');
    cy.getComponent('home:how-we-do-it');
    cy.getComponent('home:community');
    cy.getComponent('home:services-about-us');
  });
});
