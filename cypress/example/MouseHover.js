/// <reference types="Cypress" />

describe("Test Suite", function () {
  it("Mouse Hover", function () {
    cy.visit("http://www.leafground.com/");
    cy.get(`ul[class='wp-categories-list'] .col-lg-3:nth-child(20)`).click();
    cy.get("#age").trigger("mouseover");
    cy.get("#age").then(function (str) {
      cy.log(str.text());
    });
   /*  cy.go("back");
    cy.title().then(function (str) {
      cy.log(str);
    }); */

   cy.printTitle('back');
    let message = "hello";
    const english = {
      greeting() {
        return message;
      },
    };

    setTimeout(() => {
      message = "bye";
    }, 1000);

    // initially the english.greeting() returns "hello" failing the assertion.
    // .invoke('greeting') tries again and again until after 1 second
    // the returned message becomes "bye" and the assertion passes
    cy.wrap(english).invoke("greeting").should("equal", "bye");
  });
});
