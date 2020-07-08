/// <reference types="cypress" />

describe("wrong wrap", () => {
  it("should work", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("body").test();
  });
});
