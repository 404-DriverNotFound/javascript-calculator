function input(char) {
	var display = document.getElementById('total'); // 우리가 식을 입력할 input 태그를 불러옵니다.
    // display.value는 input 태그 안에 들어 있는 값을 의미합니다.
    display.innerHTML = Number(display.innerHTML + char);
    // display.value += char; 로 쓸 수도 있습니다.
    // input 태그의 값 뒤에 char 문자를 추가해 주는 역할을 합니다.
}

function funcAC() {
	document.getElementById('total').innerHTML = '0';
}

// function plus() {
// 	plus_flag = 1;
// 	var display = document.getElementById('total'); // 우리가 식을 입력할 input 태그를 불러옵니다.
// 	prevNumber = Number(display.innerHTML);
// 	/* 처음부터 다시 값을 받아와야한다. */
// }

// function pushEqualBtn() {
// 	if (plus_flag == 1) {
// 		plus_flag = 0;

// 	}
// }