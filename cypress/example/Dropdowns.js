/// <reference types="Cypress" />

// Static dropdowns
/* describe("First Test suite", function () {
  it("First Test case", function () {
    cy.visit("http://www.leafground.com/pages/Dropdown.html");
    cy.get("select").select("Selenium").should("have.value", "Selenium");
  });
}); */

// Handling Dynameic dropdowns
describe("First Test suite", function () {
  //To validate checkbox
  it("Tese case for checkbox", function () {
    cy.visit("http://www.leafground.com/pages/checkbox.html");

    // cy.get("input[type='checkbox']").check().should('be.checked')

    cy.get('input[type="checkbox"]').check(["Java", "SQL"]);
  });

  // To handle static dropdown
  it("First Test case Static dropdown", function () {
    cy.visit("http://www.leafground.com/pages/Dropdown.html");
    cy.get("#dropdown1").select("Selenium").should("have.value", "1");
  });

  //To handle Dynamic dropdown
  it("Second Test Dynamic dropdown", function () {
    cy.visit("http://www.leafground.com/pages/autoComplete.html");
    cy.get(".ui-autocomplete-input").type("r");
    cy.get(".ui-menu-item div").each((curElement, curIndex, list) => {
      if (curElement.text().toLowerCase() === "cucumber") {
        // curElement.click(); //@deprecated
        curElement.trigger("click");
      }
    });
  });
});
