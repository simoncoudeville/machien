var mobileNav = function()
{
    var nav = $('.js-nav');
    var navTrigger = $('.js-nav-trigger');

    navTrigger.on('click', function() {
        nav.toggleClass('is-visible');
        $(this).toggleClass('is-active');
    });
};
