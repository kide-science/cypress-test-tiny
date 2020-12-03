/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('/');
    cy.get('button')
      .click();
    // The hard coded expired session id should result in a page that says: "Something went wrong"
    cy.contains('Something went wrong');
  })
})
