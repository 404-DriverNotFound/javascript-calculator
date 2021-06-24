describe('calculator', () => {
	it('Makes an assertion', function () {
		cy.visit('./index.html')

		cy.pause()

		/*
		숫자 테스트
		*/
		cy.get('.digit').contains('1').click()
		cy.get('#total').should('have.text', '1')

		cy.get('.digit').contains('2').click()
		cy.get('#total').should('have.text', '2')

		cy.get('.digit').contains('3').click()
		cy.get('#total').should('have.text', '3')

		cy.get('.digit').contains('4').click()
		cy.get('#total').should('have.text', '4')

		cy.get('.digit').contains('5').click()
		cy.get('#total').should('have.text', '5')

		cy.get('.digit').contains('6').click()
		cy.get('#total').should('have.text', '6')

		cy.get('.digit').contains('7').click()
		cy.get('#total').should('have.text', '7')

		cy.get('.digit').contains('8').click()
		cy.get('#total').should('have.text', '8')

		cy.get('.digit').contains('9').click()
		cy.get('#total').should('have.text', '9')

		/*
		!!연산자 테스트!! : Just for test
		*/
		cy.get('.operation').contains('/').click()
		cy.get('#total').should('have.text', '/')

		cy.get('.operation').contains('X').click()
		cy.get('#total').should('have.text', 'X')

		cy.get('.operation').contains('-').click()
		cy.get('#total').should('have.text', '-')

		cy.get('.operation').contains('+').click()
		cy.get('#total').should('have.text', '+')

		cy.get('.operation').contains('=').click()
		cy.get('#total').should('have.text', '=')

		/*
		!!AC 테스트!! : just for test
		*/
		cy.get('.modifier').contains('AC').click()
		cy.get('#total').should('have.text', 'AC')
	});
});