describe('features/services', () => {
  it('can land on the services page', () => {
    cy.visit('/services');
    cy.title().should('eq', 'YLD | Services');
  });

  it('shows a navigation menu', () => {
    cy.visit('/services');
    cy.getComponent('component:navigation');
  });

  it('shows relevant services sections', () => {
    cy.visit('/services');
    cy.awaitRender();
    cy.getComponent('services:hero');
    cy.getComponent('services:table');
    cy.getComponent('services:challenges');
    cy.getComponent('services:approach');
    cy.getComponent('services:tech');
    cy.getComponent('services:design');
    cy.getComponent('services:engineering');
  });
});
