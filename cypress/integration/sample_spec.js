describe("First test", () => {
  it("should visit company page", () => {
    cy.visit("http://localhost:3000/company");
    cy.get(':nth-child(1) > :nth-child(9) > .p-button-success').click();
    cy.get('#name').clear()
    cy.get('#name').type('Matteo');
    cy.get('.p-dialog-footer > .p-button-success').click();
    cy.get('.p-confirm-dialog-accept').click();
  });
  //
  // it("should visit login page", () => {
  //   cy.visit("http://localhost:3000/address");
  // });
  //
  // it("should visit user page", () => {
  //   cy.visit("http://localhost:3000/user");
  //   cy.get('.ng-star-inserted > .fas').click();
  //   cy.get(':nth-child(2) > .p-menuitem-link > .p-menuitem-text').click();
  // });

});
