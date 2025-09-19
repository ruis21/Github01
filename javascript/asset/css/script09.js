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

