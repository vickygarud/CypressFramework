/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

describe("Test Suite", function () {
  it("Test case", function () {
    cy.viewport("macbook-11");
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.visit("https://www.goibibo.com/");

    // cy.get(".bZxKPD .sc-iIPllB").type(" Pune");
    cy.get(":nth-child(1) > .sc-hiCibw > .sc-bkkeKt > .sc-iJKOTD").type("Pune");
    cy.log(typeof cy.get(`ul[id='autoSuggest-list'] .autoCompleteTitle`));

    cy.scrollTo("top");
    cy.get(`ul[id='autoSuggest-list'] .autoCompleteTitle`).each(
      (curElement, index, list) => {
        // curElement.includes
        if (curElement.text().includes("Pune")) {
          curElement.trigger("click");
        }
      }
    );

    cy.scrollTo("top");
    // cy.get("div.sc-ciZhAO.dOPsYm > input:nth-child(2)").type(" Bengalaru");

    // cy.get(".sc-iJKOTD").type("Bengalaru");
    cy.get(":nth-child(2) > .sc-hiCibw > .sc-bkkeKt").type("Ben");

    cy.get(`ul[id='autoSuggest-list'] .autoCompleteTitle`).each(
      (curEle, index, list) => {
        if (curEle.text().includes("Bengaluru")) {
          curEle.trigger("click");
        }
      }
    );
  });
});
