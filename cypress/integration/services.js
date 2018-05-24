describe('features/services', () => {
  it('can land on the services page', () => {
    cy.visit('/services');
    cy.title().should('eq', 'YLD | Services');
  });

  it('shows a navigation menu', () => {
    cy.visit('/services');
    cy.getComponent('component:navigation');
  });

  it('shows relevant homepage sections', () => {
    cy.visit('/services');
    cy.getComponent('services:hero');
    cy.getComponent('services:table');
    cy.getComponent('services:our-approach');
    cy.getComponent('services:design-product');
    cy.getComponent('services:engineering');
    cy.getComponent('services:training');
  });
});
