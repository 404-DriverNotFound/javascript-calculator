### .prettierrc.js

[링크](https://velog.io/@kyusung/eslint-prettier-config)
```
{
  "arrowParens": "avoid", // 화살표 함수 괄호 사용 방식
  "bracketSpacing": false, // 객체 리터럴에서 괄호에 공백 삽입 여부
  "endOfLine": "auto", // EoF 방식, OS별로 처리 방식이 다름
  "htmlWhitespaceSensitivity": "css", // HTML 공백 감도 설정
  "jsxBracketSameLine": false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  "jsxSingleQuote": false, // JSX에 singe 쿼테이션 사용 여부
  "printWidth": 80, //  줄 바꿈 할 폭 길이
  "proseWrap": "preserve", // markdown 텍스트의 줄바꿈 방식 (v1.8.2)
  "quoteProps": "as-needed" // 객체 속성에 쿼테이션 적용 방식
  "semi": true, // 세미콜론 사용 여부
  "singleQuote": true, // single 쿼테이션 사용 여부
  "tabWidth": 2, // 탭 너비
  "trailingComma": "all", // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  "useTabs": false, // 탭 사용 여부
  "vueIndentScriptAndStyle": true, // Vue 파일의 script와 style 태그의 들여쓰기 여부 (v1.19.0)
  "parser": '', // 사용할 parser를 지정, 자동으로 지정됨
  "filepath": '', // parser를 유추할 수 있는 파일을 지정
  "rangeStart": 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
  "rangeEnd": Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
  "requirePragma": false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
  "insertPragma": false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
  "overrides": [
    {
      "files": "*.json",
      "options": {
        "printWidth": 200
      }
    }
  ], // 특정 파일별로 옵션을 다르게 지정함, ESLint 방식 사용
}
```

### HTML 실행해보기

[open in browser](https://kamang-it.tistory.com/entry/VisualStudioCode%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8Open-In-Browser-vscode%EC%97%90%EC%84%9C-html%EC%9D%84-%EB%B0%94%EB%A1%9C-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C-%ED%99%95%EC%9D%B8%ED%95%98%EC%9E%90)

### cypress 실행하기

[튜토리얼 링크](https://docs.cypress.io/guides/getting-started/writing-your-first-test#Special-commands)

친절한 동영상과 단계별로 끊어진 설명들이 포함되어 있다.

```
describe('My First Test', function () {
	it('Does not do much', function () {
		// Arrange - setup initial app state
		// - visit a web page
		// - query for an element
		// Act - take an action
		// - interact with that element
		// Assert - make an assertion
		// - make an assertion about page content
	})
})
```

```
describe('My First Test', function () {
	it('Does not do much', function () {
		cy.visit('http://example.cypress.io')
	})
})
```

```
describe('My First Test', function () {
	it('Finds an element', function () {
		cy.visit('https://example.cypress.io')

		cy.contains('type')
	})
})
```

``cy.url()`` :  'yields the current URL as a string'


1. visit web
2. type 클릭
3. url 확인
```
describe('My First Test', function () {
	it('Makes an assertion', function () {
		cy.visit('https://example.cypress.io')

		cy.contains('type').click()

		cy.url().should('include', '/commands/actions')
	})
})
```

1. /cypress/integration/sample_spec.js 만든다. 테스트 로직 작성
2. Cypress 를 킨다(npx cypress open)
3. 해당 sample_spec.js 를 클릭한다. 테스트 실행
```
describe('My First Test', function () {
	it('Makes an assertion', function () {
		cy.visit('https://example.cypress.io')

		cy.contains('type').click()

		cy.url().should('include', '/commands/actions')

		cy.get('.action-email').type('fake@email.com')
		  .should('have.value', 'fake@email.com')
	})
})
```

간단한 실전 적용

```
describe('My First Test', function () {
	it('Makes an assertion', function () {
		cy.visit('./index.html')
	})
})
```

간단한 실전 적용2

상황: 아무것도 작업 안한 index.html 에 연결해서 1을 눌러도 어짜피 아무것도 작업 안했기 때문에 항상 text 가 0으로 고정되어 있음. 따라서 무조건 통과

의의: 이 테스트를 변형해서 버튼을 누르면 ``#total`` 의 text 값이 바뀌는 것을 볼 수 있다.

```
describe('calculator', () => {
	it('Makes an assertion', function () {
		cy.visit('./index.html')
		// cy.pause()
		cy.contains('1').click()
		cy.get('#total').should('have.text', '0')
	});
});
```

display 바꾸기

```
display.innerHTML = display.innerHTML + char;
display.innerHTML = Number(display.innerHTML + char);
```

첫 번째 코드는 초기값 0을 그대로 가져가서 1,2,3을 입력했다면 0123 이 출력된다.

하지만,

두 번째 코드는 위의 0123을 숫자 값으로 바꿔주어 123 이 출력된다.

### 1차 내가 모르는 것 분석

내가 개인적으로 헤맸던 것,
=> prev, next, op 를 어떻게 변수에 저장해서 풀어나갈 것인가? 변수의 라이프 사이클을 어떻게 문법적으로 해결할 것인가? 다른 함수에 값을 넘기고 받을 때 어떤식으로 설계해야하는 가?
=> 자바스크립트의 메인문???
=> innerHTML, innerText 의 차이점. 어떨 때 사용되는가?


#### sunpark 님 코드에서 궁금한 것
- tsc 로 컴파일 방법
	- tsc 컴파일해서 index.html 을 하면, 연결이 잘 안된다.
	- 어떻게 컴파일해서 실행하는 지 물어보자.
- module
	- module 을 쓰려면 export, import 해야한다.

- ``<h1 id="total">0</h1>`` 을 조작하려면
	- ``const totalH1 = document.getElementById('total');`` 이렇게 받아야한다.

- ``document.getElementsByClassName('digits')[0].addEventListener('click', onDigitClicked);``
	- html 에 있는 digits 를 찾고 [0] 의 의미가 무엇일까?
		- 0 은 digits 의 첫번째 것을 의미
		- [테스트 링크](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname)
		- 그렇다면 여기서 왜 digits 클라스의 0번만 사용했을 까?
	- onDigitClicked 는 정의한 함수이다.
	- 해당 html 코드
		```
		<div class="calculator">
	        <h1 id="total">0</h1>
	        <div class="digits flex">
	          <button class="digit">9</button>
	          <button class="digit">8</button>
	          <button class="digit">7</button>
	          <button class="digit">6</button>
	          <button class="digit">5</button>
	          <button class="digit">4</button>
	          <button class="digit">3</button>
	          <button class="digit">2</button>
	          <button class="digit">1</button>
	          <button class="digit">0</button>
	        </div>
		```

- ``function onOperationClicked(e: Event) {`` 여기서 ``e: Event`` 의 의미?
	- 내 추측으로는 e 는 그저 파라미터에 불과하고 Event 는 파라미터가 받을 타입이다.

- ``let prevVal: number | undefined = undefined;`` 의 의미는 prevVal 은 number 와 undefined 만 받을 수 있도록 type 설정한 것

- ``import operateResult from "../util/operate.js";``
	- typescript 로 작성됬다고 하더라도 실제로 import 하는 것은 변환된.js 이기 때문에 .js 의 이름으로 import 해야한다.

- ``if (e.target instanceof HTMLElement) {`` 의 의미가 무엇일까?
	- e 는 click 으로 인한 event가 발생하는 것인데, 정확한 의미를 모르겠다.
	- HTMLElement 는 button type 과 관련있다.
		- prototype 을 얘기한 것이 무엇인가?
			- [이거 인듯?](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
		- DOM 상속관계?
			- ![DOM상속관계](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2530F03A5706A9AD15)
		- instanceof?
			- [링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof)

- eventListener 는 맨 마지막에 모아놓는 게 예쁜 것같다.
- ``totalH1!.innerHTML = String(currVal);`` 에서 ! 는 typescript 에 있는 것
	- non-null assertion operator


#### hyochoi 님 코드에서 궁금한 것

- ``const calculate = (str: string): number`` 에서 ``(str: string): number`` 의 의미
- 이 코드의 의미?
	```
	const first: string = /^-?0*[0-9]{1,3}/.exec(str)!.toString();
	const operator: string = str[first.length]!;
	const last: string = str.slice(first.length + 1)!;
	let result: number = Number(first);
	```
	- ``/^-?0*[0-9]{1,3}`` 정규 표현식?
	-

#### kmin 님 코드에서 궁금한 것

- 코드에서 !, ? 의 의미는 무엇인가?

#### kmin 님과 내 코드 피드백
- prev, curr, oper 값으로 나누었고 연산자가 입력되면 prev 에 값을 저장
	- prev, curr, oper 모두 string 값으로 하셨고 초기화도 당연히 ''을 넣어 초기화하는 방법썼다.
- 내꺼에 cypress 모듈이 제대로 설치되었는 지 확인해봐야할 것같다.
	- cypress open 을 하면 cypress 가 연결되어야 하는 데, 그게 안되는 것같다.
- 전역 변수에 대해서 이야기를 나눠봤다.
	- tmp.js 을 만들고 html에 script 형태로 넣어두면 index.js 에서 선언한 hello 도 tmp.js 에서 가져와서 활용할 수 있었다.
- 해당 테스트할 파일을 cypress 로 돌릴 때 나는 html file 경로를 올렸는 데, cypress 가 임의로 해당 포트를 올려줘서 돌려주는 것같다.
	- kmin 님은 크롬 브라우저의 익스텐션 기능을 활용해서 돌리는 방법으로 구현하셨다고 했던 것같다.

CORS 문제에 대해서 [링크](https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu)

### Javascript 모듈에 관하여

[링크](https://ui.toast.com/weekly-pick/ko_20190418)

### tsconfig.json

[tsconfig 주석링크](https://yamoo9.gitbook.io/typescript/cli-env/tsconfig)

sunpark 님 옵션
```
{
  "compilerOptions": {
    "target": "es2015",                             /* ECMAScript 목표 버전 설정: 'ES3'(기본), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "es6",                                /* 생성될 모듈 코드 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "outDir": "./src/js",                           /* 출력될 디렉토리 설정 */
    "strict": true,                                 /* E모든 엄격한 유형 검사 옵션 활성화 */
    "noImplicitAny": true,                          /* 명시적이지 않은 'any' 유형으로 표현식 및 선언 사용 시 오류 발생 */
    "esModuleInterop": true,                        /* 모든 가져오기에 대한 네임스페이스 객체 생성을 통해 CommonJS와 ES 모듈 간의 상호 운용성을 제공. 'allowSyntheticDefaultImports' 암시 */
    "skipLibCheck": true,                           /* 선언 파일 유형 검사 스킵 */
    "forceConsistentCasingInFileNames": true        /* 동일한 파일에 대한 일관되지 않은 케이스 참조를 허용하지 않음 */
  },
  "include": ["src/ts/**/*.ts"]						/* 컴파일 포함 */
}

```

### 자바스크립트 스코프와 호이스팅

[링크](http://chanlee.github.io/2013/12/10/javascript-variable-scope-and-hoisting/index.html)

#### 변수 범위

자바스크립트 변수는 지역 범위(local scope) 와 전역 범위(global scope) 를 가지고 있지 않는다.

자바스크립트는 함수 수준(function-level) 의 범위를 갖는다.

#### 변수 호이스팅

변수의 정의가 그 범위에 따라 선언과 할당으로 분리된다.

변수가 함수 내에서 정의되었을 경우) 선언이 함수의 최상위로,

변수가 함수 바깥에서 정의되었을 경우) 전역 컨텍스트의 최상위로.

### cypress 모르는 것 공부하기

#### .then()

#### stub

### 2 번째 피드백

- npm global 설치 습관으로 인한 문제
	- 이렇게 하면, 내 local 에서는 돌아가는 데... 다른 곳에서는 안돌아간다.
	- yarn add --dev typescript
	- dist 의 뜻은?

- github.io 로 안 올렸다.(demo page 만들기)
- cypress
	- cypress 에서 describe, it 를 명사 동사 가 이어지도록 하면 좋다.
	- cypress 에서 ; 을 붙여줘야한다.
	- cypress 에서 cy.pause 는 꼭 필요한 경우에만 사용한다.
		- should 는 굳이 pause 를 요구하지 않는다. 어짜피 컴퓨터가 체크해주니깐.
- contain, have 차이점 알아보기
- yarn 을 사용하자.
- pakage.json 에 build; yarn tsc --watch 를 추가한다.
- yarn tsc 가 js 폴더를 만들어주기 때문에, 굳이 js 폴더를 git 에 올리지는 말자.
- 내 코드 피드백
	- (e.target as HTMLButtonElement).value
	- querySelector 사용하기 (``getElementsByClassName('operations')`` 대신에)
		- [해당 관련 링크](https://velog.io/@chloeee/getElementById-%EA%B7%B8%EB%A6%AC%EA%B3%A0-querySelector-%EC%B0%A8%EC%9D%B4%EC%A0%90)

- 내가 이해하지 못한 이야기(이유: 몰라서 + 내가 안해서)
	- flex (행 렬)
	- MVC
	- function 과 class 의 차이?
		- React 는 function
		- Pure 는 class
	- BDD, TDD, DDD 의 개념
	- Modal 창
		- 본래의 창에서 본래의 창이 불투명해지고 새로운 팝업창이 보여지는 데, 그 때 그 팝업창이 modal 창인 것같다.
	- readonly
	- 버블링?
		- div, 버튼 클릭

### 3 번째 피드백

- ts 폴더 안에 .js 파일이 남아있다.
	- 또 놓친 파일 정리. 수정완료.

- ``HTMLButtonElement`` 관계도에 대해서 다시한번 공부해보기
	- ``template``, ``generic``

- 과제에서 요구하는 것은 소수점 버림
	- ``Math.floor`` 를 사용해서 소수점 버림
		- 나는 ``Math.round`` 를 사용했다. 수정 필요
	- ``currVal = Math.floor(preVal / CurrVal)``

- ``e.target as HTMLButtonElement`` 부분을 ``const { target } = e;``
	- 구조 분해할당을 사용해라.

- 출력하는 currVal 과 코드에서 갖고 있는 currVal 이 달라보이는 코드는 지양
	```
	case '/' :
				currVal = prevVal / currVal;
				totalH1!.innerHTML = String(Math.round(currVal));
				op = '';
				break ;
	```
	- 이것을 이렇게 만들어야한다.
	```
	case '/' :
				currVal = Math.floor(prevVal / currVal);
				totalH1!.innerHTML = String(currVal);
				op = '';
				break ;
	```
- 느낌표를 처음부터 끝까지 계속 붙여주는 건에 대해서 개선의 방법을 알려주셨다.
	- 수정 전 코드
		```
		const totalH1 = document.getElementById('total');

		switch (op) {
					case '+':
						currVal += prevVal;
						totalH1!.innerHTML = String(currVal);
						op = '';
						break ;
					case '-':
						currVal = prevVal - currVal;
						totalH1!.innerHTML = String(currVal);
						op = '';
						break ;
					case 'X':
						currVal *= prevVal;
						totalH1!.innerHTML = String(currVal);
						op = '';
						break ;
					case '/' :
						currVal = Math.floor(prevVal / currVal);
						totalH1!.innerHTML = String(currVal);
						op = '';
						break ;
				}
		```
	- 맨 앞에서 처음에 totalH1 을 선언했을 때, 이 코드 끝에 ! 을 붙여 아래 코드에서 더 이상 !을 붙이지 않아도 되도록 하였다.
		- 수정 후 코드
			```
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
			```
- cypress.json 참고
	- 여기에 baseUrl 을 처리하면, ``cy.visit('/')`` 으로 두고 들어가게 할 수 있다.

- cypress 정리하기
	- 너무 하드코딩식으로 짰기 때문에 좀 더 유려하게 짜보자