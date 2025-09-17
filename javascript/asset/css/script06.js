// if 문

// if(조건문) {
//     조건 충족 시 코드 실행
// }

// if (false) {
//     console.log("참입니다.")
// } else {
//     console.log("거짓입니다.")
// }


// let age = 12;
// if (age >= 18) {
//     console.log("운전 가능함")
// } else {
//     console.log("운전 불가능")
// }

// 삼항연산식
// 조건 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드;

// let result = age >= 18 ? "운전 가능함" : "운전 불가능";
// console.log(result)


// let score = 85;
// 위에서부터 읽어나가기때문에 순차적으로 작성해야함
// 80점 이상 90점 이하 작성할때 90 > scroe > 80 이렇게는 불가능. 인식을 못함.
// let score = prompt("수학 점수를 입력해주세요")
// if (score >= 90) {
//     alert("A등급")
// } else if (score >= 80 && score < 90) {
//     alert("B등급")
// } else if (score >= 70 && score < 80) {
//     alert("C등급")
// } else if (score >= 60 && score < 70) {
//     alert("D등급")
// } else {
//     alert("F등급")
// }


// let age = prompt("나이를 입력해주세요 (숫자만)")
// if (age < 10) {
//     alert("어린이")
// } else if (age < 20) {
//     alert("청소년")
// } else if (age < 30) {
//     alert("20대")
// } else if (age < 50) {
//     alert("30-40대")
// } else {
//     alert("어르신")
// }


// let time = prompt("현재 시간을 입력해주세요 (숫자만, 0~23)")
// if (time >= 6 && time < 11) {
//     alert("아침메뉴 추천:토스트")
// } else if (time >= 11 && time < 15) {
//     alert("점심메뉴 추천:김밥, 순대, 떡볶이")
// } else if (time >= 15 && time < 18) {
//     alert("간식추천 : 과제, 제티")
// } else if (time >= 18 && time < 22) {
//     alert("저녁메뉴 추천: 삼겹살, 오징어볶음")
// } else {
//     alert("야식추천: 닭발, 곱창")
// }


// ==================================================


// switch 문
// 지정된 값을 넣을때만 사용.

// let fruit = "사과"
// switch (fruit) {
//     case "사과":
//         console.log("사과입니다");
//         break;
//     case "바나나":
//         console.log("바나나입니다");
//         break;
//     case "파인애플":
//         console.log("파인애플입니다");
//         break;
//     default:
//         console.log("그 외의 과일");
//         break;
// }


// ==================================================

// for 문 = 반복문

// for (초기값; 조건식; 증감식) {
//     반복할 코드
// }

// i++는 i=i+1의 줄임말
// i--는 i=i-1의 줄임말
// i+=2 는 i=i+2의 줄임말
// i-=2 는 i=i-2의 줄임말
// i*=2 는 i=i*2의 줄임말
// i/=2 는 i=i/2의 줄임말

// for (let i = 0; i < 10; i++) {
//     console.log("안녕", i);
// }

// 짝수만 출력하기 : 두가지 방법 (첫번째가 효율적이긴 함)
// for (let i = 0; i < 10; i += 2) {
//     console.log("짝수", i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// 이중 for 문

// for (let i = 2; i < 10; i++) {
//     // console.log(i);
//     for (let j = 1; j < 10; j++) {
//         console.log(i, "x", j, "=", i * j);
//     }
// }

// // for 문은 배열과도 같이 씀
// let fruits = ["사과", "메론", "체리", "블루베리"]

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for of 문
// for (let a of fruits) {
//     console.log(a)
// }

// for of : 배열 내에 값 자체만 꺼내고 싶을 때 사용
// for : 배열의 인덱스값이 필요하다고 하면 , 즉 몇번째에 어떤 과일이 있는지 알고싶다면 for문 사용


// =================================================



// while 문 : 반복횟수를 알 수 없을 때
// for 문과비슷
// do while 문과 거의 똑같음

// while (조건식) {
//     반복할 코드
// }


// let i = 5;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// do while 문
let number = 5;
do {
    console.log(number);
    number++;
} while (number < 5);

// do while 문은 조건이 거짓일 때도 한번 실행을 한다

