describe('features/homepage', () => {
  it('can land on the homepage', () => {
    cy.visit('/');
    cy.title().should(
      'eq',
      'YLD | Technology Consultancy Specialised in Software Engineering. Node.js, React.js, Kubernetes, Design Systems, and React Native'
    );
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
