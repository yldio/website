describe('features/navigation', () => {
  it('can navigate home', () => {
    cy.visit('/services');

    cy.getComponent('component:logo').click();
    cy.pathEq('/');
  });

  it('can navigate to /services', () => {
    cy.visit('/');
    cy.awaitRender();

    cy
      .getComponent('component:navigation')
      .contains('Services')
      .click();

    cy.pathEq('/services');
  });
});
