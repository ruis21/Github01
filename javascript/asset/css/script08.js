
// $(documnet).ready(function () {
//     $("button").click(function () {
//         $(this).hide();
//     })
// });

// $(document).ready(function () {
//     $("button").click(function () {

//         // 클래스명으로 갖고올 때
//         // $(".title").hide();

//         // id값으로 갖고올 때
//         // $("#tit").hide();

//         // 태그로 갖고올 때
//         // $("h2").hide();

//         // $(".title.on").hide();

//         // $("[href]").hide();

//         $("[href='http://www.naver.com/']").hide();
//     })
// });


// 이벤트
// $(function () {
// click 이벤트
// $(".btn").click(function () {
//     $(".title").css("background-color", "blue");
// });

// dblclick(더블클릭) 이벤트
// $(".btn").dblclick(function () {
//     $(".title").css("background-color", "blue");
// });

// // mouseenter
// $(".title").mouseenter(function () {
//     $(this).css("background-color", "yellow");
// });

// // mouseleave
// $(".title").mouseleave(function () {
//     $(this).css("background-color", "pink");
// });

// hover
// $(".title").hover(function () {
//     $(this).css("color", "red");
// });

//mousedown (마우스를 눌렀을때 나오는 효과)
// $(".title").mousedown(function () {
//     $(this).css("background-color", "yellow");
// })

// mouseup (마우스를 뗐을떼 나오는 효과)
// $(".title").mouseup(function () {
//     $(this).css("background-color", "red");
// });

// })



//focus, blur, change
// $(function () {
//     $(".input-box").focus(function () {
//         $(this).css("background-color", "yellow");
//     });
//     $("[type='text']").blur(function () {
//         $(this).css("background-color", "red");
//     });

//     $(".input-box").change(function () {
//         $(this).css("background-color", "blue")
//     })
// });


// on
$(function () {
    //     $(".event").click(function () {
    //         $(this).css("color", "red");
    //     });
    //     $(".event").mouseenter(function () {
    //         $(this).css("background-color", "beige");
    //     });
    //     $(".eventt").mouseleave(function () {
    //         $(this).css("background-color", "aqua");
    //     });
    // });

    // $(".event").on({
    //     click: function () {
    //         $(this).css("color", "red");
    //     },
    //     mouseenter: function () {
    //         $(this).css("background-color", "beige")
    //     },
    //     mouseleave: function () {
    //         $(this).css("background-color", "aqua")
    //     }

    $(".event").on("mouseenter mouseleave", function () {
        $(this).toggleClass("on");
    });

});