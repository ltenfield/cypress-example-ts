function searchGoogleAdjective(aSearchString: string): void {
  cy.visit('https://google.com');
  cy.url().should('eq','https://www.google.com/');
  cy.get('[name="q"]')
    .type(aSearchString)
    .type('{enter}');
  //cy.get('div > span[data-dobid=hdw]').contains('pro·fi·cient',{timeout: 10});
  cy.get('div.vmod > div.vmod:first-child i > span',{timeout: 5000}).should('have.text','adjective');
}

it('google search for agile', () => {
  searchGoogleAdjective('agile');
});

it('google search for proficient', () => {
  searchGoogleAdjective('proficient');
});
