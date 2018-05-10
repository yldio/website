import { baseUrl } from '../support/config';

describe('features/homepage', () => {
  it('visits the homepage', () => {
    cy.visit(baseUrl);

    cy.title().should('eq', 'Gatsby Default Starter');
  });

  it('allows navigation to page 2', () => {
    cy.visit(baseUrl);

    cy.contains('Go to page 2').click();

    cy.contains('Hi from the second page').should('be.visible');
  });
});
