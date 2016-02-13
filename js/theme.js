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
