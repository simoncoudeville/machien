var headerScroll = function()
{
    var $header = $('.js-header');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $header.addClass("shrink");
        } else {
            $header.removeClass("shrink");
        }
    });
};
