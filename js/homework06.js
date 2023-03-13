$(window).on('scroll', function () {
    var scr = $(window).scrollTop();
    console.log(scr);
    if (scr > 0) {
        $('.header').addClass('on')
    } else {
        $('.header').removeClass('on')
    };
});

$('.mainSlide').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
})


// .after() 로 가상요소 선택가능 //
$('.mainVisual .slick-dots').after().click(function () {
    $('.mainVisual .slick-dots').toggleClass('on');
    if ($('.mainVisual .slick-dots').hasClass('on')) {
        $('.mainSlide').slick('pause');
    } else {
        $('.mainSlide').slick('play');
    }
});

$('.leftSlide').slick({
    arrows: false,
    draggable: false,
    // asNavFor: '.rightSlide'
});

$('.rightSlide').slick({
    arrows: false,
    draggable: false,
    // asNavFor: '.leftSlide'
});

$('.slideBox .arrows i').eq(0).on('click', function () {
    $('.menuContent .leftSlide').slick('slickPrev')
    $('.menuContent .rightSlide').slick('slickNext')
});

$('.slideBox .arrows i').eq(1).on('click', function () {
    $('.menuContent .leftSlide').slick('slickNext')
    $('.menuContent .rightSlide').slick('slickPrev')
});

$('.totop i').on('click', function () {
    $('html, body').animate({ scrollTop: 0 })
});


$('.header .gnb>ul>li').on('click', function (e) {
    if ($(window).width() < 769) {
        e.preventDefault();
        // $(this).parent().siblings().find('.submenu').slideUp();
        $(this).addClass('on')
        $(this).children('ul').slideToggle()
        $(this).siblings().children('ul').slideUp()
    }
});

// $('.menuContent .slideBox .arrows').after().click(function () {
//     $('.menuContent .leftSlide').slick('slickNext')
// });


// $('.mainVisual .slick-dots').on('click', function () {
//     $('.mainVisual .slick-dots').toggleClass('on');
//     if ($('.mainVisual .slick-dots').hasClass('on')) {
//         $('.mainSlide').slick('pause');
//     } else {
//         $('.mainSlide').slick('play');
//     }
// })
// $('.mainVisual .play').on('click', function () {
//     $(this).toggleClass('on');
//     if ($('.mainVisual .play').hasClass('on')) {
//         $('.mainSlide').slick('pause');
//     } else {
//         $('.mainSlide').slick('play');
//     }
// })




$('.header .inner .h_icon a').eq(2).on('click', function (e) {
    if ($(window).width() < 769) {
        e.preventDefault();
        $('.gnb').toggleClass('on');


    }
});

AOS.init({
    duration: 1000
});