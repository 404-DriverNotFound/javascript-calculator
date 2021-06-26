<br/>
<br/>
<p align="middle" >
  <img width="100px;" src="src/images/calculator_icon.png"/>
</p>
<h2 align="middle">level1 - 자바스크립트 계산기</h2>
<p align="middle">자바스크립트 계산기로 익혀보는 Cypress</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="300" src="src/images/calculator_ui.png">
</p>

## 🎯 기능 요구사항

- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

<br/>

## 📊 테스트 요구사항

**기능 요구사항에 제시된 7개의 항목에 대해 테스트 케이스를 만든다.**

<br/>

## 📄 참고 사항

- 숫자 입력은 **클릭**으로만 가능하다.

<br/>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br/>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-calculator/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br/>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-calculator/blob/master/LICENSE) licensed.

## 📝 구현 기능 목록

- [ ] 각 숫자버튼 및 연산자를 클릭했을 때 해당 숫자 혹은 연산자를 결과디스플레이에 표시한다.
	- [ ] 버튼을 누르면 html 에 접근해서 버튼을 연동시키는 방법 연구
	- [ ] 버튼을 눌렀을 때 어떤 입력을 했는 지 기억시키는 방법 연구
		- [ ] 버튼을 눌렀을 때 어떤 입력이 먼저 입력되었는 지 인식하는 방법 연구

- [ ] 버튼의 각 역할에 따른 상호작용을 구현한다.
	- [ ] AC 초기화
	- [ ] = 를 누르면 결과 노출
	- [ ] +-x/ 연산자 계산
	- 소수점 이하의 결과 버리는 것
	- 숫자는 최대 3자리까지만 입력 가능
	- 마지막으로 입력한 내용이 숫자가 아닐 때 연산자 클릭하면 경고 메시지 표시

## 📝 테스트 코드 목록

- 숫자와 연산자의 입력이 결과디스플레이에 표시되는지 테스트한다.
  - [ ] 숫자버튼을 눌렀을 경우 결과디스플레이에 제대로 표시되는지 테스트 한다.
  - [ ] 숫자버튼 입력 후 연산자를 클릭했을 경우 결과디스플레이에 제대로 표시되는지 테스트 한다.
  - [ ] 네자리 이상의 숫자가 입력됐을 경우 경고메세지가 뜬다.
  - [ ] 이전에 클릭한 버튼이 숫자버튼이 아닌데 '/'를 클릭한 경우 경고메세지가 뜬다.
  - [ ] 이전에 클릭한 버튼이 숫자버튼이 아닌데 'x'를 클릭한 경우 경고메세지가 뜬다.
  - [ ] 이전에 클릭한 버튼이 숫자버튼이 아닌데 '-'를 클릭한 경우 경고메세지가 뜬다.
  - [ ] 이전에 클릭한 버튼이 숫자버튼이 아닌데 '+'를 클릭한 경우 경고메세지가 뜬다.
  - [ ] 이전에 클릭한 버튼이 숫자버튼이 아닌데 '='를 클릭한 경우 경고메세지가 뜬다.
- 세자리 숫자의 연산 결과과 정확하게 결과디스플레이에 표시되는지 테스트한다.
  - [ ] 덧셈 연산 - 999 + 999 의 결과값이 1998와 같다.
  - [ ] 뺄셈 연산 - 999 - 1 의 결과값이 998과 같다.
  - [ ] 곱셈 연산 - -999 x (999) 의 결과값이 -998001와 같다.
  - [ ] 나눗셈 연산 - 999 / 9 의 결과값이 111과 같다.
  - [ ] 나눗셈 연산 - 999 / 5 의 결과값이 199와 같다.
- [ ] AC 버튼 클릭 시 결과디스플레이의 값이 0이다.

- 최종 테스트
	- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
	- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
	- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
	- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
	- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
	- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
	- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

## 치팅 레퍼런스

[치팅 링크](https://kanhi.tistory.com/2)