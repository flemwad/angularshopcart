//check if browser version is IE7 or 8
var ie8or7 = false;
if ((navigator.appVersion.indexOf('MSIE 8.') > -1) || (navigator.appVersion.indexOf('MSIE 7.') > -1)) {
    ie8or7 = true;
}

//load es5-shim to replace array prototypes for dependent modules (https://github.com/es-shims/es5-shim)
Modernizr.load({
    test: ie8or7,
    yep: 'js/es5-shim.min.js',
    nope: ''
});