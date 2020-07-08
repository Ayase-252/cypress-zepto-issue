/// <reference types="cypress" />

describe("wrong wrap", () => {
  it("should work", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("body").test();
  });

  it("should be able to use screenshot", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("body").takeScreenshot();
  });

  it("should work too", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("body").then(($el) => {
      cy.wrap($el).screenshot();
    });
  });
});
