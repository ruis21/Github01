// show, hide, toggle

$(function () {
    // show 
    $(".show-btn").click(function () {
        $(".image").show(1000);
        // 또는 "slow","fast"로 시간 제어 가능
    });

    // hide
    $(".hide-btn").click(function () {
        $(".image").hide(2000, function () {
            // 콜백 함수. 이미지 숨기는 동작이 완료된 후 실행됨.
            alert("이미지 숨겨짐");
        });
    });

    // toggle
    $(".toggle-btn").click(function () {
        $(".image").toggle(1000, function () {
            alert("토글");
        });
    });


});



$(function () {
    $(".fade-in-btn").on("click", function () {
        $(".box1").fadeIn();
        $(".box2").fadeIn("fast");
        $(".box3").fadeIn(2000, function () {
            alert("박스 보여짐");
        });
    });

    $(".fade-out-btn").on("click", function () {
        $(".box1").fadeOut();
        $(".box2").fadeOut("slow");
        $(".box3").fadeOut(1000, function () {
            alert("박스 아웃");
        })
    });

    $("fade-toggle-btn").on("click", function () {
        $(".box1").fadeToggle();
        $(".box2").fadeToggle("fast");
        $(".box3").fadeToggle(3000, function () {
            alert("짠");
        });
    });


    $(".fade-to-btn").on("click", function () {
        $(".box1").fadeTo(1000, 0);
    })
});



$(function () {
    $(".slide-down").on("click", function () {
        $(".list").slideDown(2000);
        // $(".list").show(2000);
    });

    $(".slide-up").on("click", function () {
        $(".list").slideUp();
    });

    $(".slide-toggle").on("click", function () {
        // $(".list").toggle(function (1000);
        $(".list").slideToggle(function () {
            alert("메뉴 토글됨")
        });
    });
});


// $(function () {
// $(".animate").on("click", function () {
//     $(".animate-box").animate({
//         left: "200px",
//         top: "100px",
//         margin: "100px",
//         padding: "100px",
//         background: "blue",
//         "font-size": "30px",
//         fontSize: "30px",
//         width: "+=100px",
//         height: "-=50px",
//     }, 2000);
// });

// show, hide, toggle로 지정 가능
// $(".animate").on("click", function () {
//     $(".animate-box1").animate({
//         width: "200px",
//     });
//     $(".animate-box1").animate({
//         height: "200px",
//     });
//     $(".animate-box2").animate({
//         width: "50px",
//     });
//     $(".animate-box2").animate({
//         height: "50px",
//     });
// });


// stop
$(function () {
    $(".animate-btn").on("click", function () {
        $(".animate-box1").animate({
            width: "200px"
        }, 3000);
        $(".animate-box1").animate({
            height: "200px"
        }, 2000);

        $(".animate-box1").stop().toggle(1000);
    });


    $(".animate-box1").css("background-color", "yellow");
    $(".animate-box1").hide();
    $(".animate-box1").show();

    // chaining
    $(".animate-box1").css("background-color", "yellow").hide(1000).show(1000);

    $(".stop-btn").on("click", function () {
        $(".animate-box1").stop(false, true);
    });
});


