describe('modul2Tests', () => {
  it('Test1', () => {
    // cypress code
    cy.visit('https://www.edu.goit.global/account/login');

    cy.login('user888@gmail.com', '1234567890');

    cy.get(':nth-child(12) > .next-bve2vl')
      .scrollIntoView()
      .should('be.visible')
      .click();
  });
  it('Test2', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.login('testowyqa@qa.team', 'QA!automation-1');

    cy.get(':nth-child(8) > .next-bve2vl')
      .scrollIntoView()
      .should('be.visible')
      .click();
  });
});
