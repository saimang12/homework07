$('.topBar .xi-close').on('click', function () {
    $('.topBar').addClass('on')
});

$(window).on('scroll', function () {
    var scr = $(window).scrollTop(); //스크롤 값을 구함
    console.log(scr)
    if (scr > 250) {
        $('.hbot_inner').addClass('on')
    } else {
        $('.hbot_inner').removeClass('on');
    };
});

$('.mv_play').on('click', function () {
    $(this).toggleClass('on');
    $(this).hasClass('on') ?
        $('.video_wrap video').trigger('pause')
        : $('.video_wrap video').trigger('play');
});

$('.mv_stop').on('click', function () {
    $(this).toggleClass('on');
    $(this).hasClass('on') ?
        $('.video_wrap video').prop('muted', true)
        : $('.video_wrap video').prop('muted', false);
});

$('.product_slide .slides01').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
});

$('.product_slide .slides02').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
})

$('.tab_btn .mv_tab01').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on')
    $('.slides01').addClass('on').siblings().removeClass('on')
});

$('.tab_btn .mv_tab02').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on')
    $('.slides02').addClass('on').siblings().removeClass('on')
});




$('.hover_right li').eq(0).hover(function () {
    $('.hover_left .hover_itm01').addClass('on').siblings().removeClass('on')
});

$('.hover_right li').eq(1).hover(function () {
    $('.hover_left .hover_itm02').addClass('on').siblings().removeClass('on')
});

$('.hover_right li').eq(2).hover(function () {
    $('.hover_left .hover_itm03').addClass('on').siblings().removeClass('on')
});

$('.hover_right li').eq(3).hover(function () {
    $('.hover_left .hover_itm04').addClass('on').siblings().removeClass('on')
});

// $('.hover_right li').hover(function () {
//     var idx = $(this).index();
//     console.log($(this).index());
//     $('.hover_left .hover_itm').addClass('on', idx).siblings().removeClass('on')
// })





$('.fm_link button').click(function () {
    if ($('.site_list').hasClass("on")) {
        $('.site_list').removeClass("on");
    } else {
        $('.site_list').addClass("on");
    }
});


$('.fixed_btn strong').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500)
})