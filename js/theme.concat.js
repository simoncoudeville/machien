// // ---
// // Add smooth page transitions for an app like feel
// // -
// // Source: https://github.com/weblinc/jquery.smoothState.js
// // ---
//
// Smoothstate only works if history is supported so we use a Modernizr wrapper
if (Modernizr.history) {

    $(function() {
        'use strict';
        var options = {
            debug: false,
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 400, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class
                    $container.removeClass('is-finished');
                    $container.addClass('is-exiting');
                    // $("html, body").animate({ scrollTop: 0 });

                    // Restart your animation
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 500, // Duration of our animation
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('is-exiting');
                    $container.addClass('is-finished');
                    // Inject the new content
                    $container.html($newContent);
                    pluginLoader();
                }
            }
            // ,
            // onAfter: function($container, $newContent) {
            //     // load javascript
            //     pluginLoader();
            // }
        },

        smoothState = $('#js-smoothstate').smoothState(options).data('smoothState');
    });
}

var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        mobileNav();
        // chopstick.headerScroll;
        headerScroll();
    },
};

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

var mobileNav = function()
{
    var nav = $('.js-nav');
    var navTrigger = $('.js-nav-trigger');

    navTrigger.on('click', function() {
        nav.toggleClass('is-visible');
        $(this).toggleClass('is-active');
    });
};

var readySettings
chopstick.ready =
{
    settings:
    {
        ready: $('body')
    },

    init: function()
    {
        readySettings = chopstick.ready.settings;
        chopstick.ready.readyContent();
    },

    readyContent: function ()
    {
        readySettings.ready.addClass("is-ready");
        setTimeout(function(){
            readySettings.ready.addClass("is-finished");
        }, 450);
    }
};

// Load all your plugins in the pluginLoader function.
var pluginLoader = function() {
    $(chopstick.init);
}
pluginLoader();
