export default function calculator() {
  let prevVal = 0;
  let currVal = 0;
  let op = '';

  const totalH1 = document.getElementById('total');

  function onDigitClicked(e: Event) {
    if (100 <= currVal && currVal < 1000)
      return;
    if (e.target instanceof HTMLElement) {
      currVal *= 10;
      currVal += Number(e.target!.innerHTML);
    }
    totalH1!.innerHTML = String(currVal);
  }

  document.getElementsByClassName('digits')[0].addEventListener('click', onDigitClicked);
}