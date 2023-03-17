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





    // slideSection 슬라이드 옵션 
    $('.slideSection .slide_box').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
    });














})