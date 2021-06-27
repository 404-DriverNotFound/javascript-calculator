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