// 주석
// 자바스크립트란?

// 변수
// var, let, const
// ES5 자바스크립트 시절에는 var을 선언했었으나 지금은 아니다.

// let a1 = 1;
// let a2 = 2;

// //문자열은 "" 안에 입력.
// // 변수는 중복이 안됨. var는 중복상황에서 에러가 안뜨기 때문에 앞으로 let을 사용할것.
// // 자바스크립트 끝에는 꼭 ; 넣어야 함.

// document.write(a1 + a2 + "<br>");

// let a3 = 3;

// document.write(a3 + "<br>");
// document.write("문자열" + "<br>");
// document.write(1 + "2" + "<br>");

// 자바스크립트는 숫자(정수,실수), 문자
// +, -, /, * 정수에는 이것들을 사용
// 숫자(number), 문자(string), 심볼(symbol)
// 객체(object), boolean


// 표기법 : 낙타표기법 (단어별로 구분) 
//*5 이런식으로는 실행되지않음.
let loginBtn = document.querySelector('.login');

loginBtn.addEventListener("click", function () {
    // alert 알림창
    // alert("너 해킹당했다 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ");
    // prompt 고객한테 입력받는창
    prompt("아이디를 입력해주세요");
})