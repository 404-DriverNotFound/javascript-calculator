export default function calculator() {
	let prevVal: number = 0;
	let op: string = '';
	let currVal: number = 0;

	const totalH1 = document.getElementById('total')!;

	function onDigitClicked(e: Event) {
		if (currVal >= 100 || currVal <= -100)
			return ;
		currVal *= 10;
		currVal = currVal + Number((e.target as HTMLButtonElement).innerHTML);
		totalH1!.innerHTML = String(currVal);
	}

	function onACClicked(e: Event) {
		prevVal = 0;
		op = '';
		currVal = 0;
		totalH1!.innerHTML = '0';
	}

	function onOperationClicked(e: Event) {
		if ((e.target as HTMLButtonElement).innerHTML === '=')
		{
			switch (op) {
				case '+':
					currVal += prevVal;
					totalH1.innerHTML = String(currVal);
					op = '';
					break ;
				case '-':
					currVal = prevVal - currVal;
					totalH1.innerHTML = String(currVal);
					op = '';
					break ;
				case 'X':
					currVal *= prevVal;
					totalH1.innerHTML = String(currVal);
					op = '';
					break ;
				case '/' :
					currVal = Math.floor(prevVal / currVal);
					totalH1.innerHTML = String(currVal);
					op = '';
					break ;
			}
		}
		else {
			op = (e.target as HTMLButtonElement).innerHTML;
			prevVal = currVal;
			currVal = 0;
		}
	}
	document.querySelector<HTMLButtonElement>('.digits')!.addEventListener('click', onDigitClicked);
	document.querySelector<HTMLButtonElement>('.modifier')!.addEventListener('click', onACClicked);
	document.querySelector<HTMLButtonElement>('.operations')!.addEventListener('click', onOperationClicked);
}
