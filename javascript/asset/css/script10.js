// $(function () {
//     $(".get-btn").on("click", function () {
//         alert($(".text").text());
//         alert($(".text").html());

//         alert($(".input-box").val());

//         순수 자바스크립트로 썼을 때
//         alert(document.querySelector(".input-box").value)

//         alert($(".link").attr("href"));

//         순수 자바스크립트로 썼을 때
//         alert(document.querySelector(".link").href)
//     });
// });


// 변경하기
$(function () {
    $(".set-btn").on("click", function () {
        $(".text").text("문구 변경됨");
        // $(".text").html("<span>문구</span> 변경됨");

        // $(".menu").text(function (i, origText) {
        //     return "분식집에는" + origText + "이 있습니다." + i;
        // });

        // $(".link").attr("hret", function (i, origText) {
        //     return origText + "/news"
    });


    $(".get-btn").on("click", function () {
        alert($(".text").tect());
        alert($(".link".attr("href")));
    });

});

$(function () {
    $(".append-btn").on("click", function () {
        // $(".list").append("<li>뒤에 추가/li>");
        $(".list").prepend("<li>앞에 추가</li>");
    });
});

$(function () {
    $(".append-btn").on("click", function () {
        // $(".list li").before("<li>ddfdfd</li>");
        $(".list li").after("<li>뒤에 추가</li>");
    });
});


// 삭제하기
$(function () {
    $(".remove-btn").on("click", function () {
        // $(".box").remove();
        // $(".box").empty();
        $(".box p").remove(".yellow, .red");
    });
});

$(function () {
    $(".box2").on("mouseenter", function () {
        // $(".cont").text($(this).css("background-color"));

        // $(this).css("background-color", "pink");
        // $(this).css("color", "blue");
        // $(this).css("border", "1px solid black");

        // 위에 세가지를 연 이어서 쓸 수 있음
        $(this).css({
            "background-color": "pink",
            "color": "blue",
            "border": "1px solid black"
        });
    });
});