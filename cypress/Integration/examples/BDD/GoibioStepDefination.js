/// <reference types="Cypress" />

// describe("Goibio Test Suitr", function () {
//   it("Goibio Test Case", function () {

import GoibioHomePage from "../../../support/PageObjeccts/GoibioHomePage";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// import { data } from "cypress/types/jquery";

describe(" Test Suite ", function () {
  beforeEach(() => {
    cy.fixture("example").then(function (key) {
      this.data = key;
    });

    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });
  it(" Test case", function () {
    // Given("I open goibio web Page", () => {
    cy.visit("https://www.goibibo.com/");
    const goibioHomePage = new GoibioHomePage();
    cy.viewport("macbook-11");

    cy.wait(10000);
    // });

    // When I add items to Cart
    //   When("I select destination from pune to Bangaluru", function () {
    goibioHomePage.getFromLocation().type(this.data.fromDest);
    const a = `ul[id='autoSuggest-list'] .autoCompleteTitle`;
    cy.selectDestination(a, this.data.fromDest);
    cy.scrollTo("top");
    goibioHomePage
      .getToLocation()
      .click({ force: true })
      .type(this.data.toDest);

    cy.selectDestination(
      goibioHomePage.getListOfDestination(),
      this.data.toDest
    );
  });
});
//   });
// });
