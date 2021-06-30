describe('calculator', () => {
	it('Is button working?', function () {
		cy.visit('./index.html')

		cy.pause()

		/*
		숫자 테스트
		*/
		cy.get('.digit').contains('1').click()
		cy.get('#total').should('have.text', '1')
		cy.get('.modifier').contains('AC').click()

		cy.get('.digit').contains('2').click()
		cy.get('#total').should('have.text', '2')
		cy.get('.modifier').contains('AC').click()

		cy.get('.digit').contains('3').click()
		cy.get('#total').should('have.text', '3')
		cy.get('.modifier').contains('AC').click()

		cy.get('.digit').contains('4').click()
		cy.get('#total').should('have.text', '4')
		cy.get('.modifier').contains('AC').click()

		cy.get('.digit').contains('5').click()
		cy.get('#total').should('have.text', '5')
		cy.get('.modifier').contains('AC').click()

		cy.get('.digit').contains('6').click()
		cy.get('#total').should('have.text', '6')
		cy.get('.modifier').contains('AC').click()

		cy.get('.digit').contains('7').click()
		cy.get('#total').should('have.text', '7')
		cy.get('.modifier').contains('AC').click()

		cy.get('.digit').contains('8').click()
		cy.get('#total').should('have.text', '8')
		cy.get('.modifier').contains('AC').click()

		cy.get('.digit').contains('9').click()
		cy.get('#total').should('have.text', '9')
		cy.get('.modifier').contains('AC').click()

		/*
		!!AC 테스트!! : just for test
		*/
		cy.get('.modifier').contains('AC').click()
		cy.get('#total').should('have.text', '0')
	});

	it('Is calculating correct?', function () {

		cy.pause()
		/*
		!!연산자 테스트!! : Just for test
		*/
		// 9 / 9 = 1;
		cy.get('.modifier').contains('AC').click()
		cy.get('.digit').contains('9').click()
		cy.get('.operation').contains('/').click()
		cy.get('.digit').contains('9').click()
		cy.get('.operation').contains('=').click()
		cy.get('#total').should('have.text', '1')

		// 7 X 6 = 42;
		cy.get('.modifier').contains('AC').click()
		cy.get('.digit').contains('7').click()
		cy.get('.operation').contains('X').click()
		cy.get('.digit').contains('6').click()
		cy.get('.operation').contains('=').click()
		cy.get('#total').should('have.text', '42')

		// 76 - 32 = 44;
		cy.get('.modifier').contains('AC').click()
		cy.get('.digit').contains('7').click()
		cy.get('.digit').contains('6').click()
		cy.get('.operation').contains('-').click()
		cy.get('.digit').contains('3').click()
		cy.get('.digit').contains('2').click()
		cy.get('.operation').contains('=').click()
		cy.get('#total').should('have.text', '44')

		// 123 + 999 = 1122
		cy.get('.modifier').contains('AC').click()
		cy.get('.digit').contains('1').click()
		cy.get('.digit').contains('2').click()
		cy.get('.digit').contains('3').click()
		cy.get('.operation').contains('+').click()
		cy.get('.digit').contains('9').click()
		cy.get('.digit').contains('9').click()
		cy.get('.digit').contains('9').click()
		cy.get('.operation').contains('=').click()
		cy.get('#total').should('have.text', '1122')
	});
});