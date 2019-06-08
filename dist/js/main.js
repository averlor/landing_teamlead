$(() => {
    // menu
    $(window).scroll(() => {
        if ($('.navbar').offset().top > 90) {
            $('.fixed-top').addClass('nav-scrolled');
            $('.nav').addClass('nav-a-scrolled');
        } else {
            $('.fixed-top').removeClass('nav-scrolled');
            $('.nav').removeClass('nav-a-scrolled');
            $('.nav').addClass('nav__a');
        }
    });
});

$(() => {
    // tooltip
    $('input[rel="tooltip"]').on('focus', function() {
        $(this).tooltip('show');
    });
});