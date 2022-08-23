describe("Test Suite", function () {
  it("Test Case", function () {
    cy.visit("https://www.makemytrip.com/");

    cy.get(`#fromCity`).click().type("Pune");
  });
});
