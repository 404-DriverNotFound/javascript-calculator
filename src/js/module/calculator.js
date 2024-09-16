export default function calculator() {
    let prevVal = 0;
    let op = '';
    let currVal = 0;
    const totalH1 = document.getElementById('total');
    function onDigitClicked(e) {
        if (currVal >= 100 || currVal <= -100)
            return;
        currVal *= 10;
        console.log('currVal! : ' + currVal);
        currVal = currVal + Number(e.target.innerHTML);
        console.log('e.target as HTMLButtonElement).value : ' + Number(e.target.innerHTML));
        console.log('currVal : ' + currVal);
        totalH1.innerHTML = String(currVal);
    }
    function onACClicked(e) {
        prevVal = 0;
        op = '';
        currVal = 0;
        totalH1.innerHTML = '0';
    }
    function onOperationClicked(e) {
        console.log('(e.target as HTMLButtonElement).innerHTML' + e.target.innerHTML);
        console.log('(e.target as HTMLButtonElement).innerText' + e.target.innerText);
        if (e.target.innerHTML === '=') {
            switch (op) {
                case '+':
                    currVal += prevVal;
                    console.log(currVal);
                    totalH1.innerHTML = String(currVal);
                    op = '';
                    break;
                case '-':
                    currVal = prevVal - currVal;
                    totalH1.innerHTML = String(currVal);
                    op = '';
                    break;
                case 'X':
                    console.log('prevVal =' + prevVal);
                    console.log('currVal =' + currVal);
                    currVal *= prevVal;
                    totalH1.innerHTML = String(currVal);
                    op = '';
                    break;
                case '/':
                    currVal = prevVal / currVal;
                    totalH1.innerHTML = String(Math.round(currVal));
                    op = '';
                    break;
            }
        }
        else {
            op = e.target.innerHTML;
            prevVal = currVal;
            currVal = 0;
        }
    }
    document.querySelector('.digits').addEventListener('click', onDigitClicked);
    document.querySelector('.modifier').addEventListener('click', onACClicked);
    document.querySelector('.operations').addEventListener('click', onOperationClicked);
}
