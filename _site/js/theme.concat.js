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
                // chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
                // chopstick.loadObject(chopstick.headerScroll, 'chopstick.headerScroll');
                // chopstick.loadObject(chopstick.ready, 'chopstick.ready');

                // chopstick.mobileNav;
                // chopstick.headerScroll;
                // chopstick.ready;

                headerScroll();

                var $gallery = $('.js-gallery').flickity({
                        accessibility: true,
                        autoPlay: false,
                        cellAlign: 'left',
                        cellSelector: undefined,
                        contain: true,
                        draggable: true,
                        freeScroll: false,
                        selectedAttraction: 0.2,
                        friction: 0.8,
                        initialIndex: 0,
                        lazyLoad: true,
                        percentPosition: true,
                        prevNextButtons: false,
                        pageDots: false,
                        resize: true,
                        rightToLeft: false,
                        setGallerySize: false,
                        watchCSS: false,
                        wrapAround: true
                });

                // var flky = new Flickity( '.js-gallery', {
                //         accessibility: true,
                //         autoPlay: false,
                //         cellAlign: 'left',
                //         cellSelector: undefined,
                //         contain: true,
                //         draggable: true,
                //         freeScroll: false,
                //         selectedAttraction: 0.2,
                //         friction: 0.8,
                //         initialIndex: 0,
                //         lazyLoad: true,
                //         percentPosition: true,
                //         prevNextButtons: false,
                //         pageDots: false,
                //         resize: true,
                //         rightToLeft: false,
                //         setGallerySize: false,
                //         watchCSS: false,
                //         wrapAround: false
                // });

                // $gallery.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
                //         if ( typeof cellIndex == 'number' ) {
                //                 $gallery.flickity( 'select', cellIndex );
                //         }
                // });

                console.log("javascript is locked and loaded!") // for testing purposes. Check your console. Delete after you finished reading this. :-)
        },
};

var headerScroll = function()
{
    var $header = $('.js-header');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 70) {
            $header.addClass("shrink");
        } else {
            $header.removeClass("shrink");
        }
    });
};

var mobileNav = function()
{
    var $navItem = $('.js-nav-main-item');
};

var mobileNavSettings
chopstick.mobileNav =
{
    settings:
    {
        navigation: $('.js-nav'),
        trigger: $('.js-nav-trigger')
    },

    init: function()
    {
        // Initialize mobile nav settings
        mobileNavSettings = chopstick.mobileNav.settings;
        // Bind toggle events
        chopstick.mobileNav.bindUIEvents();
    },

    bindUIEvents: function()
    {
        mobileNavSettings.trigger.on('click', function() {
            chopstick.mobileNav.toggleNavigation();
        });
    },

    // build mobile nav
    toggleNavigation: function()
    {
        mobileNavSettings.navigation.toggleClass('is-visible');
        mobileNavSettings.trigger.toggleClass('is-active');
    }
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
