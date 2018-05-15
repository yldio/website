describe('features/homepage', () => {
  it('visits the homepage', () => {
    cy.visit('/');

    cy.title().should('eq', 'YLD | Home');
  });

  it.skip('allows navigation to page 2', () => {
    cy.visit('/');
    cy.contains('Go to page 2').click();

    cy.contains('Hi from the second page').should('be.visible');
  });
});
