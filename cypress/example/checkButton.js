describe("Test suite", function () {
  it("Button check", function () {
    cy.visit("http://www.leafground.com/pages/Edit.html");

    cy.get(":nth-child(13) > .row > .large-6 > input").then(($btn) => {
      cy.log($btn.is(":enabled") ? "Button is Enabled" : "Button is Disabled");

      // const a = $btn.is(":enabled");
      // cy.log(a)
      /*     if ($btn.is(":enabled")) {
        cy.log("Button is Enabled");
      } else {
        cy.log("Button is disabled");
      }
 */
    });
  });
});
