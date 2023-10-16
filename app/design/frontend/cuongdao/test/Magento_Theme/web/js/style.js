
require(['jquery', 'slick'], function ($) {
    $(document).ready(function () {
        $('.banner-left').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,
            isFinite: true,
        });
    });
});