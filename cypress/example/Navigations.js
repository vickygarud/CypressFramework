/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
   it("My FirstTest case", function () {
    //Check boxes
    cy.visit("http://qaclickacademy.com/practice.php");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    //window:alert
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.url().should("include", "qaclickacademy");

    cy.log(cy.url());

    cy.go("back");
  }); 

  it("Second test case", function () {
    cy.visit("http://www.leafground.com/");

    cy.log(cy.url());
    cy.get(":nth-child(9) > .wp-categories-link").as("AlertBtn").click();

    cy.log(cy.url());

    cy.get("button[onclick='normalAlert()']").click();
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal("I am an alert box!");
    });
    cy.go("back");
    cy.log(cy.url());
    cy.get('@AlertBtn').click();
  });
});
