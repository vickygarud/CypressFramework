class GoibioHomePage {
  getFromLocation() {
    return cy.get(`.bZxKPD .sc-iIPllB`);
  }

  getListOfDestination() {
    return cy.get(`ul[id='autoSuggest-list'] .autoCompleteTitle`);
  }
  getToLocation() {
    return cy.get(".jyKOEg .sc-iIPllB");
  }
}

export default GoibioHomePage;
