
/**
 * define-class.js v0.1.0
 * author: Yoshiya Hinosawa ( https://github.com/kt3k )
 * license: MIT
 */

(function ($, subclass) {
    'use strict';


    if (typeof $ === 'undefined') throw new Error('jQuery not found. define-class depends on jQuery.');

    if (typeof subclass !== 'function') throw new Error('subclass not found. define-class depends on subclass.js (https://github.com/kt3k/subclass).');


    $.defineClass = function (name, defining) {

        var CustomClass = subclass(defining);

        $.registerCustomClass(name, function (elem) {

            var customClass = new CustomClass(elem);

        });
    };

}(window.jQuery, window.subclass));
