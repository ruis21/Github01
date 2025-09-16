// 배열(Array): 여러 개의 데이터를 하나로 묶어서 변수에 저장.

let fruits = ["사과", "바나나", "샤인머스켓", "수박"];
// console.log(fruits);

// 사과를 출력하고 싶다면
// console.log(fruits[0]);

// 배열에서는 요소에 번호를 매겨줌.이것을 인덱스라고 함.
// 인덱스는 0번째부터 시작

fruits[0] = "딸기";
// console.log(fruits);

fruits[1] = "블루베리";
// console.log(fruits);

// 배열에 관련된 함수 (자주 보는 것)

// pop : 배열의 맨 마지막 요소를 제거.
// fruits.pop();
// console.log(fruits);

// shift : 배열의 맨 첫번째 요소를 제거.
// fruits.shift();
// console.log(fruits);

// push : 배열의 맨 마지막에 요소를 추가.
// fruits.push("포도");
// console.log(fruits);

// unshift : 배열의 맨 첫번째에 요소를 추가.
// fruits.unshift("체리");
// console.log(fruits);

// includes : 배열에 해당 요소가 있는지 확인. true 또는 false.
// console.log(fruits.includes("사과"));
// console.log(fruits.includes("딸기"));

// indexOf : 배열에 해당 요소의 인덱스를 출력. 즉 요소가 몇번 째인지 알려줌.
// console.log(fruits.indexOf("샤인머스켓"));

// slice (여기서 숫자2는 3번째부터 자른다는 의미)
// fruits.slice(2);
// console.log(fruits.slice(2));
// 배열의 2번째 요소부터 끝까지 잘라내어 새로운 배열로 출력

// console.log(fruits.slice(0, 2)); //시작점, 끝점
// 0번째 요소부터 2번째 요소까지 잘라내어 출력. 끝점은 포함하지 않는다.

// splice : 배열의 n번째 요소부터 n개의 요소를 제거하고 새로운 배열을 출력.
// fruits.splice(1, 2); // 시작점, 제거할 요소의 개수
// console.log(fruits);

// fruits.slice(1, 2);
// console.log(fruits);

// let newFruits = fruits.slice(1, 2);
// console.log(newFruits);

// slice: 기존의 배열을 건드리지 않음. 즉 기존의 배열을 그대로 유지하고 새로운 배열을 출력.
// splice : 기본의 배열을 변경.


// ==============================================


// object

// let member = {
//     name: "소연",
//     age: "26",
//     group: "아이들"
// }

// console.log(member);

// 이름만 출력하고 싶을때 (같은 값 출력되나 첫번째가 더 간단.)
// console.log(member.name);
// console.log(member["name"]);

// member.name = "우기";
// member.age = "25";
// console.log(member.age);

// {}사이에는 꼭 콤마로 구분해주기
let member = [
    {
        name: "소연",
        age: "27",
        group: "아이들"
    },
    {
        name: "우기",
        age: "25",
        group: "아이들"
    },
    {
        name: "미연",
        age: "28",
        group: "아이들"
    },
    {
        name: "슈화",
        age: "26",
        group: "아이들"
    },
    {
        name: "민니",
        age: "27",
        group: "아이들"
    },
]

// 미연의 정보 출력
console.log(member[2]);

// 미연의 나이 출력
console.log(member[2].age);