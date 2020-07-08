// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("test", { prevSubject: true }, (subject) => {
  cy.wrap(subject).then(($wrapped) => {
    if ($wrapped !== subject) {
      console.log("before wrap", subject);
      console.log("after wrap", $wrapped);
      throw new Error("wrapped element is not same as the element before wrap");
    }
  });
});

Cypress.Commands.add("takeScreenshot", { prevSubject: true }, (subject) => {
  cy.wrap(subject).then(($el) => {
    cy.wrap($el).screenshot();
  });
});
