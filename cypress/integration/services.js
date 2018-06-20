describe('features/services', () => {
  it('can land on the services page', () => {
    cy.visit('/services');
    cy.title().should('eq', 'YLD | Services');
  });

  it('shows a navigation menu', () => {
    cy.visit('/services');
    cy.getComponent('header');
  });

  it('shows relevant services sections', () => {
    cy.visit('/services');
    cy.getComponent('services:intro');
    cy.getComponent('services');
    cy.getComponent('challenges');
    cy.getComponent('our-approach');
    cy.getComponent('consultancy');
    cy.getComponent('techniques:intro');
    cy.getComponent('techniques:description');
    cy.getComponent('design:intro');
    cy.getComponent('design:description');
    cy.getComponent('engineering:intro');
    cy.getComponent('engineering:description');
    cy.getComponent('addcode:intro');
    cy.getComponent('addcode:description');
    cy.getComponent('knowledge-transfer:intro');
    cy.getComponent('knowledge-transfer:topics');
    cy.getComponent('knowledge-transfer:description');
    cy.getComponent('partners');
    cy.getComponent('join-us');
    cy.getComponent('footer');
  });
});
