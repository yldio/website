describe('features/homepage', () => {
  it('can land on the homepage', () => {
    cy.visit('/');
    cy.title().should('eq', 'YLD | Home');
  });

  it('shows a navigation menu', () => {
    cy.visit('/');
    cy.getComponent('header');
  });

  it('shows relevant homepage sections', () => {
    cy.visit('/');
    cy.getComponent('home:intro');
    cy.getComponent('what-do-we-do:intro');
    cy.getComponent('what-do-we-do:clients');
    cy.getComponent('what-do-we-enable');
    cy.getComponent('known-for');
    cy.getComponent('home:call-out');
    cy.getComponent('join-us');
    cy.getComponent('footer');
  });
});
