/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My FirstTest case", function () {
    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //with help of mouseover operation
    cy.get("div.mouse-hover-content").invoke("show");

    //without mouseover force to make visible
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
