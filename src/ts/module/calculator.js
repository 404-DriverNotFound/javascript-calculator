// import selectOperate from './util/operate.js'

const totalH1 = document.getElementById('total');

export default function calculator() {
	let prevVal = 0;
	let op = '';
	let currVal = '0';

	const totalH1 = document.getElementById('total');
	function onDigitClicked(e) {
		if (currVal >= 100 || currVal <= -100)
			return ;
		currVal *= 10;
		currVal += Number(e.target.innerHTML);
		totalH1.innerHTML = String(currVal);
	}

	function onACClicked(e) {
		prevVal = 0;
		op = '';
		currVal = 0;
		totalH1.innerHTML = '0';
	}

	function onOperationClicked(e) {
		if (e.target.innerHTML === '=')
		{
			switch (op) {
				case '+':
					currVal += prevVal;
					console.log(currVal);
					totalH1.innerHTML = String(currVal);
					op = '';
					break ;
				case '-':
					currVal = prevVal - currVal;
					totalH1.innerHTML = String(currVal);
					op = '';
					break ;
				case 'X':
					console.log('prevVal =' + prevVal);
					console.log('currVal =' + currVal);
					currVal *= prevVal;
					totalH1.innerHTML = String(currVal);
					op = '';
					break ;
				case '/' :
					currVal /= prevVal;
					totalH1.innerHTML = String(currVal);
					op = '';
					break ;
			}
		}
		else {
			op = e.target.innerHTML;
			prevVal = currVal;
			currVal = 0;
		}
	}

	document.getElementsByClassName('digits')[0].addEventListener('click', onDigitClicked);
	document.getElementsByClassName('modifier')[0].addEventListener('click', onACClicked);
	document.getElementsByClassName('operations')[0].addEventListener('click', onOperationClicked);
}
