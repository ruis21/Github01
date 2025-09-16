// creatElement() : 요소 생성
// appendChild() : 자식 요소 추가 (맨마지막에 추가)
// insertBefore() : 특정 요소 앞에 추가
// **변수는 제일 위에 모아놓기!
// remove () : 삭제
// parentNode ():


let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let frontBtn = document.querySelector(".front-btn");
let firstItem = document.querySelector(".first-item");
console.log(firstItem);
let targetRemove = document.querySelector(".target-remove");
let removeBtn = document.querySelector(".remove-btn")

// 버튼 클릭 이벤트
btn.addEventListener('click', function () {
    // console.log('추가 버튼 클릭함');
    let list = document.createElement("li");
    let ul = document.querySelector(".list");
    list.textContent = input.value;

    let button = document.createElement("button");
    list.appendChild(button);
    button.textContent = "X";
    button.classList.add("remove-btn");

    button.addEventListener('click', function (event) {
        console.log(event.target.parentNode);
        event.target.parentNode.remove();
    })

    // list.textContent = "삼김";
    ul.appendChild(list);
    input.value = '';
});

// 앞에 추가 버튼 클릭 이벤트
frontBtn.addEventListener('click', function () {
    // alert("앞에 추가 버튼 클릭함");
    let list = document.createElement("li");
    let ul = document.querySelector(".list");
    list.textContent = input.value;

    let button = document.createElement("button");
    list.appendChild(button);
    button.textContent = "X";

    // ul.appendChild(list);
    ul.insertBefore(list, firstItem);
    input.value = '';
});

// 삭제
targetRemove.addEventListener('click', function () {
    firstItem.remove();
});


removeBtn.addEventListener('click', function (event) {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
});


