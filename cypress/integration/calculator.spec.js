describe('calculator', () => {
	it('does button working?', function () {
		cy.visit('./index.html');

		// 1
		cy.get('.digit').contains('1').click();
		cy.get('#total').should('have.text', '1');
		cy.get('.modifier').contains('AC').click();

		// 0
		cy.get('.digit').contains('0').click();
		cy.get('#total').should('have.text', '0');
		cy.get('.modifier').contains('AC').click();

		// 1
		cy.get('.digit').contains('1').click();
		cy.get('#total').should('have.text', '1');
		cy.get('.modifier').contains('AC').click();

		// 2
		cy.get('.digit').contains('2').click();
		cy.get('#total').should('have.text', '2');
		cy.get('.modifier').contains('AC').click();

		// 3
		cy.get('.digit').contains('3').click();
		cy.get('#total').should('have.text', '3');
		cy.get('.modifier').contains('AC').click();

		// 4
		cy.get('.digit').contains('4').click();
		cy.get('#total').should('have.text', '4');
		cy.get('.modifier').contains('AC').click();

		// 5
		cy.get('.digit').contains('5').click();
		cy.get('#total').should('have.text', '5');
		cy.get('.modifier').contains('AC').click();

		// 6
		cy.get('.digit').contains('6').click();
		cy.get('#total').should('have.text', '6');
		cy.get('.modifier').contains('AC').click();

		// 7
		cy.get('.digit').contains('7').click();
		cy.get('#total').should('have.text', '7');
		cy.get('.modifier').contains('AC').click();

		// 8
		cy.get('.digit').contains('8').click();
		cy.get('#total').should('have.text', '8');
		cy.get('.modifier').contains('AC').click();

		// 9
		cy.get('.digit').contains('9').click();
		cy.get('#total').should('have.text', '9');
		cy.get('.modifier').contains('AC').click();

		/*
		!!AC 테스트!! : just for test
		*/
		cy.get('.modifier').contains('AC').click();
		cy.get('#total').should('have.text', '0');
	});

	it('does restrict 3 numbers at most?', function() {
		/*
		3개까지 숫자 제한 테스트
		*/

		// 12
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('2').click();
		cy.get('#total').should('have.text', '12');
		cy.get('.modifier').contains('AC').click();

		// 345
		cy.get('.digit').contains('3').click();
		cy.get('.digit').contains('4').click();
		cy.get('.digit').contains('5').click();
		cy.get('#total').should('have.text', '345');
		cy.get('.modifier').contains('AC').click();

		// 6789
		cy.get('.digit').contains('6').click();
		cy.get('.digit').contains('7').click();
		cy.get('.digit').contains('8').click();
		cy.get('.digit').contains('9').click();
		cy.get('#total').should('have.text', '678');
		cy.get('.modifier').contains('AC').click();

		// 0123456789
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('2').click();
		cy.get('.digit').contains('3').click();
		cy.get('.digit').contains('4').click();
		cy.get('.digit').contains('5').click();
		cy.get('.digit').contains('6').click();
		cy.get('.digit').contains('7').click();
		cy.get('.digit').contains('8').click();
		cy.get('.digit').contains('9').click();
		cy.get('#total').should('have.text', '123');
		cy.get('.modifier').contains('AC').click();

		// 101
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('1').click();
		cy.get('#total').should('have.text', '101');
		cy.get('.modifier').contains('AC').click();

		// 1001
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('1').click();
		cy.get('#total').should('have.text', '100');
		cy.get('.modifier').contains('AC').click();

		// 10001
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('1').click();
		cy.get('#total').should('have.text', '100');
		cy.get('.modifier').contains('AC').click();
	});

	it('does add correct?', function () {
		/*
		더하기 테스트
		*/
		// 123 + 999 = 1122
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('2').click();
		cy.get('.digit').contains('3').click();
		cy.get('.operation').contains('+').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '1122');

		// 999 + 999 = 1998
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('+').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '1998');

		// 123 + 131 = 254
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('2').click();
		cy.get('.digit').contains('3').click();
		cy.get('.operation').contains('+').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('3').click();
		cy.get('.digit').contains('1').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '254');

		// 666 + 111 = 777
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('6').click();
		cy.get('.digit').contains('6').click();
		cy.get('.digit').contains('6').click();
		cy.get('.operation').contains('+').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('1').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '777');

		// 555 + 888 = 1443
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('5').click();
		cy.get('.digit').contains('5').click();
		cy.get('.digit').contains('5').click();
		cy.get('.operation').contains('+').click();
		cy.get('.digit').contains('8').click();
		cy.get('.digit').contains('8').click();
		cy.get('.digit').contains('8').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '1443');
	});

	it('does substract correct?', function () {
		/*
		빼기 테스트
		*/
		// 123 - 999 = -876
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('2').click();
		cy.get('.digit').contains('3').click();
		cy.get('.operation').contains('-').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '-876');

		// 999 - 999 = 0
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('-').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '0');

		// 123 - 131 = -8
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('2').click();
		cy.get('.digit').contains('3').click();
		cy.get('.operation').contains('-').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('3').click();
		cy.get('.digit').contains('1').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '-8');

		// 666 - 111 = 555
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('6').click();
		cy.get('.digit').contains('6').click();
		cy.get('.digit').contains('6').click();
		cy.get('.operation').contains('-').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('1').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '555');

		// 555 - 888 = -333
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('5').click();
		cy.get('.digit').contains('5').click();
		cy.get('.digit').contains('5').click();
		cy.get('.operation').contains('-').click();
		cy.get('.digit').contains('8').click();
		cy.get('.digit').contains('8').click();
		cy.get('.digit').contains('8').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '-333');
	});

	it ('does multiply correctly?', function() {
		/*
		곱하기 테스트
		*/
		// 999 X 999 = 998001
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('X').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '998001');

		// 999 X 0 = 0
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('X').click();
		cy.get('.digit').contains('0').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '0');

		// 0 X 0 = 0
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('0').click();
		cy.get('.operation').contains('X').click();
		cy.get('.digit').contains('0').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '0');

		// 7 X 7 = 49
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('7').click();
		cy.get('.operation').contains('X').click();
		cy.get('.digit').contains('7').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '49');

		// 101 X 707 = 71407
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('1').click();
		cy.get('.operation').contains('X').click();
		cy.get('.digit').contains('7').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('7').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '71407');
	});

	it ('does divide correctly? result has to be integer', function() {
		/*
		나누기 테스트
		*/

		// 9 / 9 = 1;
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('/').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '1');

		// 8 / 9 = 1;
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('8').click();
		cy.get('.operation').contains('/').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '1');

		// 3 / 9 = 0;
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('3').click();
		cy.get('.operation').contains('/').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '0');

		// 0 / 999 = 0;
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('0').click();
		cy.get('.operation').contains('/').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '0');

		// 1000 / 999 = 0;
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('1').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('0').click();
		cy.get('.digit').contains('0').click();
		cy.get('.operation').contains('/').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.digit').contains('9').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', '0');

		// 0 / 0 = 0;
		cy.get('.modifier').contains('AC').click();
		cy.get('.digit').contains('0').click();
		cy.get('.operation').contains('/').click();
		cy.get('.digit').contains('0').click();
		cy.get('.operation').contains('=').click();
		cy.get('#total').should('have.text', 'NaN');
	});
});