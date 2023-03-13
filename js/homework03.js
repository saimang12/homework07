$('.mainSlide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,

});

$('.play').click(function () {
    $('.mainSlide').slick('slickPlay');
});

$('.stop').click(function () {
    $('.mainSlide').slick('slickPause');
});

$('.icon').slick({

});

$('.mainContents .tap01').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.item01').addClass('on').siblings().removeClass('on')
});

$('.mainContents .tap02').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.item02').addClass('on').siblings().removeClass('on')
});

$('.mainContents .tap03').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.item03').addClass('on').siblings().removeClass('on')
});

$('.mainContents .tap04').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.item04').addClass('on').siblings().removeClass('on')
});

$('.control01').on('click', function () {
    $(this).toggleClass('on');
    $(this).hasClass('on') ?
        $('.video01').trigger('pause')
        : $('.video01').trigger('play');
});

$('.control02').on('click', function () {
    $(this).toggleClass('on');
    $(this).hasClass('on') ?
        $('.video02').trigger('pause')
        : $('.video02').trigger('play');
});

$('.control03').on('click', function () {
    $(this).toggleClass('on');
    $(this).hasClass('on') ?
        $('.video03').trigger('pause')
        : $('.video03').trigger('play');
});


// $('.family button').on('click', function () {
//     $(this).addClass('on');
//     $('.site_list').addClass('on');


// });



$('.family button').click(function () {
    if ($('.site_list').hasClass("on")) {
        $('.site_list').removeClass("on");
    } else {
        $('.site_list').addClass("on");
    }
});

$('.model').click(function () {
    if ($('.wrap').hasClass("on")) {
        $('.wrap').removeClass("on");
    } else {
        $('.wrap').addClass("on");
    }
});


