// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
// si le navigateur ne prends pas en charge les @media queries
Modernizr.load([
    {
        test: Modernizr.mq('only all'),
        nope: 'js/vendor/respond.min.js'
    }
]);
console.log(typeof(Response));
// Responsive % + padding
if(typeof(Response)!="undefined"){
    // Response.action(function(){
    //     // console.log(
    //     //     Response.band(0, 480),
    //     //     Response.band(481, 850),
    //     //     Response.band(851+'\n'),
    //     //     Response.deviceW(),
    //     //     Response.deviceH(),
    //     //     Response.viewportW(),
    //     //     Response.viewportH(),
    //     //     Response.scrollX(),
    //     //     Response.scrollY()
    //     //     );
    //     var All = $('.row');
    //     //case:Desktop
    //     if(Response.band(850)){
    //         All.each(function(){
    //             var OuterWidth = $(this).innerWidth()-10;
    //             var HowMany = $(this).find('>div').length;
    //             var pad = HowMany*17-5; // 17 = 15+2(border);
    //             var OptWidth = Math.floor((OuterWidth-pad)/HowMany);
    //             $(this).find('>div').css({width:OptWidth,'margin-right':'5px'});
    //         });
    //     }

    //     else if (Response.band(481, 849))
    //          //case:tablet
    //     {
    //         All.each(function(i){
    //             var OuterWidth = $(this).innerWidth()-10;
    //             var HowMany = $(this).find('>div').length;
    //             if(HowMany == 3){
    //                 pad=13;
    //                 var OptWidth = Math.floor(OuterWidth-pad);
    //                 $(this).find('>div').css({width:OptWidth;});
    //             }else if(HowMany == 1){
    //                 pad=12;
    //                 var OptWidth = Math.floor(OuterWidth-pad);
    //                 $(this).find('>div').css({width:OptWidth});
    //             }else{
    //                 pad=(HowMany/2)*17-5;
    //                 var OptWidth = Math.floor((OuterWidth-pad)/(HowMany/2));
    //                 $(this).find('>div').filter(':odd').css({'width':OptWidth,'margin-right':0});
    //                 $(this).find('>div').filter(':even').css({'width':OptWidth});

    //             }
    //             //console.log('480>850',HowMany,pad,HowMany == 3,OptWidth,Response.viewportW());
                
    //         });
    //     }

    //     else if (Response.band(0, 480))
    //         //case:tel, vertical
    //     {
    //         All.each(function(){
    //             var OuterWidth = $(this).innerWidth()-22;
    //             $(this).find('>div').css({width:OuterWidth});

    //             //console.log(OuterWidth,Response.viewportW());
    //         });
    //     }

    //  });
}