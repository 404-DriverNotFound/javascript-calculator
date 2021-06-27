describe("Calculator module", () => {
  const testClickResult = (fomular: string, result: string) => (
    fomular
      .split('')
      .reduce<Cypress.Chainable<JQuery<HTMLElement>>>(
        (cyObj: Cypress.Chainable<JQuery<HTMLElement>>, f: string) => (
          cyObj
            .get(/\d/.test(f) ? '.digit' : '.operation')
            .contains(f)
            .click()
        ),
        cy)
      .get('#total').should('contain', result)
  )

  it("renders form of calculator", () => {
    cy.visit('/');
    cy.get('#total').should('contain', '0');

    cy.get('.calculator').contains('0');
    cy.get('.digit').contains('1');
    cy.get('.digit').contains('2');
    cy.get('.digit').contains('3');
    cy.get('.digit').contains('4');
    cy.get('.digit').contains('5');
    cy.get('.digit').contains('6');
    cy.get('.digit').contains('7');
    cy.get('.digit').contains('8');
    cy.get('.digit').contains('9');

    cy.get('.modifier').contains('AC');

    cy.get('.operation').contains('+');
    cy.get('.operation').contains('-');
    cy.get('.operation').contains('X');
    cy.get('.operation').contains('/');
    cy.get('.operation').contains('=');
  });

  it("show numbers when digit button clicked", () => {
    cy.reload();
    testClickResult('12', '12');

    cy.reload();
    testClickResult('694', '694');

    cy.reload();
    testClickResult('000', '0');

    cy.reload();
    testClickResult('0001', '1');

    cy.reload();
    testClickResult('00404', '404');
  });

  it("cannot input more than 3 digits", () => {
    cy.reload();
    testClickResult('1234', '123');

    cy.reload();
    testClickResult('0013007', '130');

    cy.reload();
    testClickResult('0987654321', '987');
  });

  it("calculate plus operator", () => {
    cy.reload();
    testClickResult('1+3=', '4');

    cy.reload();
    testClickResult('1+3+5=', '9');

    cy.reload();
    testClickResult('10000+200000=', '300');

    cy.reload();
    testClickResult('10000+200000=+3211111=', '621');
  });

  it("calculate minus operator", () => {
    cy.reload();
    testClickResult('3-1=', '2');

    cy.reload();
    testClickResult('3333333-11111111=', '222');

    cy.reload();
    testClickResult('332-99999999=', '-667');
  });

  it("calculate multiple operator", () => {
    cy.reload();
    testClickResult('1X2X4X4=', '32');

    cy.reload();
    testClickResult('1X2X4X0X2=', '0');

    cy.reload();
    testClickResult('123X456=', '56088');
  });

  it("calculate divide operator", () => {
    cy.reload();
    testClickResult('752/2=', '376');

    cy.reload();
    testClickResult('1/454231234=', '0');

    cy.reload();
    testClickResult('4632345/1234=', '3');
  });

  it("don't calculate before next operator", () => {
    cy.reload();
    testClickResult('1+3', '3');

    cy.reload();
    testClickResult('34X0012', '12');

    cy.reload();
    testClickResult('2X20+0', '0');
  });

  it("calculate with zero when operator button is pressed for the first time", () => {
    cy.reload();
    testClickResult('X3=', '0');

    cy.reload();
    testClickResult('-10=', '-10');
  });

  it("calculate last operator when multiple operator input", () => {
    cy.reload();
    testClickResult('1+X/-2=', '-1');

    cy.reload();
    testClickResult('3+++++++-2=', '1');

    cy.reload();
    testClickResult('34651-X0=', '0');
  });

  it("operate AC button", () => {
    cy.get('.modifier').click().get('#total').should('contain', '0');

    testClickResult('123+123X', '246')
      .get('.modifier').click()
      .get('#total').should('contain', '0')
      .get('.operation').contains('X').click()
      .get('.digit').contains('3').click()
      .get('.operation').contains('=')
      .get('#total').should('contain', '0');
  });
});