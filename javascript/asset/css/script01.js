// 변수 선언부터 시작
// 변수: 데이터를 저장하는 공간
// 변수: var let const

// =은 같은값을 의미하는게 아니라 해당값을 저장하는 의미
// const color = "red";
// const color = "blue";
// console.log(color)

// 변수의 이름은 중복되지 않아야 함.

// const color = "red";
// color = "blue";
// console.log(color);

// -----let과 const 차이점
// let은 변수를 선언한 이후에 값을 변경할 수 있음.
// const는 변수를 선언한 이후에 값을 변경할 수 없음. 상수를 선언할 때 사용함.

// -----var 와 let의 차이점 (호이스팅)

// console.log(a);
// let a = 1;
// console.log(a);

// 첫번째: 호이스팅
// 자바스크립트는 실행이 되기 전 선언한 변수를 미리 찾아서 보관해둔다. 변수만 보관하고 값은 보관하지 않음. 이것을 호이스팅이라고 한다.

// var는 호이스팅이 됨.
// let은 호이스팅이 되지만 변수 선언하기 전에 사용하면 에러가 남.


// 두번째: 중복선언

// var는 변수 중복 선언이 가능함.
// var a = 1;
// var a = 2;
// console.log(a);

// let은 변수 중복 선언이 안됨.
// let a = 1;
// let a = 2;
// console.log(a);
// 이미 선언을 했다고 얘기해 줌.

// 세번째: 지역변수와 전역변수
// 전역변수: 블럭 밖에서 선언된 변수. 어디서든 쓰일 수 있음
// 지역변수: 블럭 안에서 즉 특정 영역에서만 선언된 변수.해당 영역 내에서만 쓰일 수 있음.

// 전역변수 선언
// var aa = 1;

// function foo() {
//     // 지역변수 선언
//     var bb = 2;
// }

// console.log(bb);

// for (let i = 0; i < 3; i++) {
//     console.log(i)
// }
// console.log(i)

// var는 지역변수를 전역변수로 끌어올려준다. 함수내에서 선언한 변수만 제외하고


// ============================================

// 변수 이름 만들 때
// 1. 숫자로 시작하면 안됨. $name, _name, 영문자로 시작
// 2. 대부분 변수는 소문자로 시작함.
// 3. camel 표기법 또는 언더바 표시법

// 변수에 들어갈 데이터 타입
// 숫자, 문자열, 불리언, 심볼, 배열, 객체

// let a = 0.55;
// // 숫자.정수와 실수 모두 가능
// let b = "5"; // 문자열. string. 따옴표로 감싸져 있음. 따옴표, 쌍따옴표 모두 가능하나 하나로 정해서 할것.
// console.log(a);
// console.log(b);
// console.log(a + b);

// 불리언(boolean)타입.참 또는 거싯.논리연산에 사용되는 데이터 타입.
// true 또는 false로 사용

// 변수는 기본적인 연산이 가능함.
// 연산자: + , - , * , / , % (나머지 연산자), > , < , >= , <=< , == , != , && , ||, !
// let num = 10 % 3;
// console.log(num);


// let num = 1;
// num = num + 2;
// console.log(num);

// % 나머지 연산자. 10 % 3 = 1 은 10을 3으로 나누고 나머지 1을 반환(return:출력)함.

// -----비교연산자-----
// let num = 1;
// num = num > 2; //false
// num = num < 2; //true
// num = num >= 2; //false
// num = num <= 2; //true
// console.log(num);

// num = num == 2;
// == 비교연산자. 같은 값인지 비교를 하는 연산자. 1==2 false를 반환함.
// num = num === 2;
// === 비교연산자.값과 타입을 모두 비교함.

// == 과 === 의 차이점
// 1 == "1" true. 값만 비교함 (1로 동일하게 출력)
// 1 === "1" false. 값과 타입을 모두 비교한다. (1로 동일하게 출력되지만 "1"은 문자로 분류.)

// num = num != 2;
// ! 값을  반전시킴.true는 false로, false는 true로 반전시킴.
// != 같지 않은 값을 비교. 값만 비교
// !== 같지 않은 값을 비교. 값과 타입을 모두 비교.

// 2 !== "1" true. 값만 비교함
// 2 !=== "1" false. 값과 타입을 모두 비교한다.

// console.log(num);

// -----논리 연산자-----

// && , ||
// && and 연산자. 두 값이 모두 true 일 때만 true를 반환함.

// let num = 1;

// num = num > 2 && num < 10;

// || or 연산자. 두 값중 하나만 true이면 true를 반환함.
// num = num > 2 || num < 10;


// num = !num;
// console.log(num);

// ! 논리부정 연산자. 값을 반전시킴. true 는 false로 false는 true로 반전시킴.

// ==============================================


// html 요소 가져오기

// get 메서드, 쿼리 요소

// getElementById : id는 하나만 올 수있기 때문에 elemnent로 사용함.
let title = document.getElementById("title");
console.log(title);

// getElementsByClassname : class는 여러개가 올 수 있기 때문에 elements로 사용함.
let items = document.getElementsByClassName("item");
console.log(items);

// getElementsByTagName
let liItems = document.getElementsByTagName("li");
console.log(liItems);

// quarySelector 
// : 무조건 하나만 조회함, 첫번째 요소만 조회됨.
// id는 #, class는 . 
let menuTitle = document.querySelector("#title");
console.log(menuTitle);


// quarySelectorAll
// 모두 조회함.
let menuItems = document.querySelectorAll(".item")
console.log(menuItems);

// html 요소 조작하기

// textContent: html 태그 모두 제외하고 순수하게 텍스트 내용만 출력.
// title.textContent = "분식";
// title.textContent = "<h3>분식</h3>"

// innerHTML : html 태그 포함하여 출력
title.innerHTML = "<h3>분식</h3>";


// setAttribute: html 태그 속성을 출력, 변경 또는 추가 모두 가능.


let input = document.querySelector("#menu");
input.setAttribute("placeholder", "입력해주세요");
input.setAttribute("required", "");

// removeAtrribute : html 속성 제거
input.removeAttribute("placeholder");


// html 요소 스타일링
// 변수. style.속성명 = "값"

let desc = document.querySelector(".desc");
// console.log(desc);
// desc.style.color = "red";
// desc.style.fontSize = "30px";

// 클래스 추가 - add, 삭제 - remove;
desc.classList.add("dark")
desc.classList.remove("dark")
