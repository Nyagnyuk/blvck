

$(document).on('ready', function () {
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: false,
        speed: 1000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });


    $('.burger-button').on('click', function () {
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('opened');
        $('body').toggleClass('no-scroll');
    });
});

