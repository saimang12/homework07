$(function () {


    // header 탭열기
    $('.header .h_icon').on('click', function () {
        $('.right_tap').addClass('on')
    });

    // header 탭닫기
    $('.right_tap .close_box').on('click', function () {
        $('.right_tap').removeClass('on')
    });




    // subVisual 슬라이드 옵션
    $('.subVisual .slide_box').slick({
        arrows: false,
        fade: true,
    });

    // subVisual slide arrows 컨트롤 
    $('.subVisual .arrows i:first-child').on('click', function () {
        $('.subVisual .slide_box').slick('slickPrev')
    });
    $('.subVisual .arrows i:last-child').on('click', function () {
        $('.subVisual .slide_box').slick('slickNext')
    });

    // subVisual slide dots 컨트롤 
    $('.subVisual .slide_dots li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
        var idx = $(this).index()
        $('.slide_box').slick('slickGoTo', idx)
    });

    $('.subVisual .slide_box').on('init afterChange', function (e, s, c) {
        $('.subVisual .slide_dots li').removeClass('on');
        $('.subVisual .slide_dots li').eq(c ? c : 0).addClass('on');
    });





    // slideSection 슬라이드 옵션 
    $('.slideSection .slide_box').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
    });














})