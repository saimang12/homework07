$(function () {
    $('.arrow').click(function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset.top }, 3000);
    });
});

$(window).on('scroll', function () {
    // 스크롤된 양을 구해서 0보다 크면 클래스를 붙이고 아니면 클래스를 땐다.
    // if(스크롤양 > 0) {클래스를 붙이} else {클래스를 땐}
    // 스클롤량을 구하기 : $(window).scrollTop()

    if ($(window).scrollTop() > 0) {
        $('.header').addClass('on');
    } else {
        $('.header').removeClass('on');
    }
});

$('.family_site').click(function () {
    if ($('.family_link').hasClass("on")) {
        $('.family_link').removeClass("on");
    } else {
        $('.family_link').addClass("on");
    }
});


$('.move_top').click(function () {

})


