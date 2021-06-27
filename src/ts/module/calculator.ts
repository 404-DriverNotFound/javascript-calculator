import operateResult from "../util/operate.js";

export default function calculator() {
  let prevVal: number | undefined = undefined;
  let currVal: number | undefined = undefined;
  let op = '';

  const totalH1 = document.getElementById('total');

  function onDigitClicked(e: Event) {
    if (currVal === undefined || op === '=')
      currVal = 0;
    if (100 <= currVal && currVal < 1000)
      return;
    if (e.target instanceof HTMLElement) {
      currVal *= 10;
      currVal += Number(e.target.innerHTML);
    }
    totalH1!.innerHTML = String(currVal);
  }

  function onOperationClicked(e: Event) {
    prevVal = operateResult(prevVal ?? 0, currVal ?? 0, op);
    currVal = undefined;
    if (e.target instanceof HTMLElement) {
      op = e.target.innerHTML;
      if (op === '=') {
        currVal = prevVal;
        prevVal = undefined;
        totalH1!.innerHTML = String(currVal);
      }
    }
  }

  document.getElementsByClassName('digits')[0].addEventListener('click', onDigitClicked);
  document.getElementsByClassName('operations')[0].addEventListener('click', onOperationClicked);
}