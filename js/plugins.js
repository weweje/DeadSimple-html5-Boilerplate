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

        
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//If that bitchy browser doesn't understand @media queries, provides response.js

Modernizr.load([
    {
        test: Modernizr.mq('only all'),
        nope: 'js/vendor/respond.min.js'
    }
]);
