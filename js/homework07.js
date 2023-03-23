$(function () {











    $('.h_icon a').on('click', function () {
        $('.header .gnb').toggleClass('on');
        if ($('.header .gnb').hasClass('on')) {
            $('.cover').addClass('on')
        } else {
            $('.cover').removeClass('on')
        }
    });

    $('.cover,.header,.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        };
    });






    const MainSlideOption = {
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                }

            }
        ]
    };

    $('.mainSlide').slick(MainSlideOption);

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext');
    });



    const DressOption = {
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                }
            },
        ]
    };

    $('.Dress').slick(DressOption);

    $('.dress_arrows .left').on('click', function () {
        $('.Dress').slick('slickPrev');
    });

    $('.dress_arrows .right').on('click', function () {
        $('.Dress').slick('slickNext');
    });



    const SuitOption = {
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                }
            },
        ]
    };

    $('.Suit').slick(SuitOption);

    $('.suit_arrows .left').on('click', function () {
        $('.Suit').slick('slickPrev');
    });

    $('.suit_arrows .right').on('click', function () {
        $('.Suit').slick('slickNext');
    });




    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.toTop').addClass('on');
        } else {
            $('.toTop').removeClass('on');
        };
    });

    $('.toTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });












})