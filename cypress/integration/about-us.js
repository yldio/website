describe('features/homepage', () => {
  it('can land on the About Us', () => {
    cy.visit('/about-us');
    cy.title().should('eq', 'YLD | About Us');
  });

  it('shows a navigation menu', () => {
    cy.visit('/about-us');
    cy.getComponent('component:navigation');
  });

  it('shows relevant About Us sections', () => {
    cy.visit('/about-us');
    cy.getComponent('about-us:hero');
    cy.getComponent('about-us:our-team');
    cy.getComponent('about-us:team');
    cy.getComponent('about-us:our-values');
    cy.getComponent('about-us:work-width-us');
  });
});
