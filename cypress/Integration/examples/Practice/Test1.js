/// <reference types="Cypress" />

describe("First test suite", function () {
  it("First Test case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    // cy.get("input[class='search-keyword']").type("ca"); // to type send keys
    cy.get("input[class='search-keyword']").as("searchBox"); // to alias name to any element
    cy.get("@searchBox").type("ca");
    cy.get(".product:visible").should("have.length", 4); // to get only visible element
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

    cy.get(".products")
      .find(".product")
      .each((currElement, currIndex, list) => {
        if (currElement.find("h4.product-name").text().includes("Capsicum")) {
          cy.wrap(currElement).find("button").click();
          cy.log(currElement.text());
        }
      });

    (then) => {
      console.log("hello");
    };
  });
});
