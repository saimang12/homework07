$(function () {

    const MainSlideOption = {
        arrows: false,
        fade: true,
    }

    $('.mainSlide').slick(MainSlideOption);

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext');
    });



    const DressOption = {
        // centerMode: true,
        // centerPadding: '300px',
        arrows: false,
        slidesToShow: 3,
    };

    $('.Dress').slick(DressOption);

    $('.dress_arrows .left').on('click', function () {
        $('.Dress').slick('slickPrev');
    });

    $('.dress_arrows .right').on('click', function () {
        $('.Dress').slick('slickNext');
    });



    const SuitOption = {
        // centerMode: true,
        // centerPadding: '300px',
        arrows: false,
        slidesToShow: 3,
    };

    $('.Suit').slick(SuitOption);

    $('.suit_arrows .left').on('click', function () {
        $('.Suit').slick('slickPrev');
    });

    $('.suit_arrows .right').on('click', function () {
        $('.Suit').slick('slickNext');
    });















})