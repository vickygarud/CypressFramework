/// <reference types="Cypress" />

describe("Test Suite", function () {
  it("Open cart", function () {
    cy.visit("https://demo.opencart.com/");
    cy.get("ul[class='nav navbar-nav']>li:nth-child(6)").click();
    cy.get("#product-list .col").then(function (size) {
      const a = cy.get("#product-list .col");
      console.log(size.length);
      cy.log(a.length);
    });
  });
});
