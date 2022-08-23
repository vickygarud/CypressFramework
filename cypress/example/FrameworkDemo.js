///<reference types="Cypress"/>
// const { data } = require("cypress/types/jquery");

describe("Test Suite", function () {
  before(function() {
    cy.fixture("example").then(function (key) {         //local variable = key
      this.data = key;              // creating global variable = data
    });
  });

  it("Get Data from fixtures", function () {
    cy.visit("http://www.leafground.com/");
    cy.log(`${this.data.text}`);
  });
});
