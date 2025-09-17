// 함수 function 

// 간단한 토스트 만들기
// console.log("1. 버터 두르고 식빵 굽기");
// console.log("2. 계란 부치기");
// console.log("3. 식빵위에 계란 올리기");
// console.log("4. 케찹 마요네즈 치즈 뿌리기");

// 아이스 아메리카노 만들기
// console.log("1. 컵에 얼음 담기");
// console.log("2. 물 250ml 넣기");
// console.log("3. 에스프레소 내려서 컵에 담기");
// console.log("4. 뚜껑 닫기");


// function 함수명() {
//     실행할 코드
// }

function toast() {
    console.log("1. 버터 두르고 식빵 굽기");
    console.log("2. 계란 부치기");
    console.log("3. 식빵위에 계란 올리기");
    console.log("4. 케찹 마요네즈 치즈 뿌리기");
}

function americano() {
    console.log("1. 컵에 얼음 담기");
    console.log("2. 물 250ml 넣기");
    console.log("3. 에스프레소 내려서 컵에 담기");
    console.log("4. 뚜껑 닫기");
}

// toast();
// americano();

// 불고기 토스트 주문이 들어옴

function toast(type, size, number) {
    console.log("1. 버터 두르고 식빵 굽기");
    if (type === "계란") {
        console.log("2. 계란 부치기");
    } else if (type === "불고기") {
        console.log("2. 불고기 만들기");
    } else {
        console.log("2. 딸기잼 바르기");
    }
    console.log("3. 식빵위에 계란 올리기");
    console.log("4. 케찹 마요네즈 치즈 뿌리기");
    console.log("주문하신" + type + "토스트" + size + "사이즈" + number + "개 나왔습니다")
}

toast("계란", "S", 5);


// ()괄호 안에 들어가는것: 매게변수 또는 파라미터 라고 함. 

// return 함수안에 있는 결과를 밖으로 빼줌.americano
function add(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2
};

let result = add(2, 5);
console.log(result);