$(function () {
    $('.xi-close').on('click', function () {
        $('.topBanner').addClass('on')


    })




    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });

    $('.subContents .inner').slick({
        // dots: true,
        slidesToShow: 4,
    });

    $('.tapmenu01').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainNav .con01').addClass('on').siblings().removeClass('on')

    });

    $('.tapmenu02').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainNav .con02').addClass('on').siblings().removeClass('on')

    });

    $('.tapmenu03').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainNav .con03').addClass('on').siblings().removeClass('on')

    })




















})