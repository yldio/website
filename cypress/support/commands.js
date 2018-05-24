// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/*
  cy.getComponent(String selector)

  Less brittle method of finding a component on the page by the selector we have
  defined

  Usage:

  cy.getComponent('component:navigation');
*/

Cypress.Commands.add('getComponent', selector => {
  cy.get(`[data-selector="${selector}"]`);
});

/*
  cy.pathEq(String path)

  Assert that the current pathName equals $path

  Usage:

  cy.pathEq('/services');
*/

Cypress.Commands.add('pathEq', path => {
  cy.location().should(loc => {
    expect(loc.pathname).to.eq(path);
  });
});

/*
  cy.awaitRender()

  Sometimes when interacting with elements, Cypress will actually perform an interaction
  before React has mounted, which will make the test fail as the dom element has changed between
  visiting the page and interacting. Using this, we can wait until Gatsby has rendered
  our application on the page.

  See gatsby-browser.js for where this property is attached.

  Usage:

  cy.visit('/path');
  cy.awaitRender();

  (...interact with dom)
*/

Cypress.Commands.add('awaitRender', () => {
  cy.window().should('have.property', 'GATSBY_RENDERED', true);
});
