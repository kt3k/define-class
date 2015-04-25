
/**
 * define-class.js v1.1.0
 * author: Yoshiya Hinosawa ( https://github.com/kt3k )
 * license: MIT
 */

(function ($, subclass) {
    'use strict';


    if (typeof $ === 'undefined') throw new Error('jQuery not found. define-class depends on jQuery.');

    if (typeof subclass !== 'function') throw new Error('subclass not found. define-class depends on subclass.js (https://github.com/kt3k/subclass).');


    /**
     * Defines a custom class of the given name using the parent class and defining function.
     *
     * @param {String} name The name
     * @param {Function} [parentClass] The parentClass of the internal defining class
     * @param {Function} defining The defining function for "intenal definig class", not the defining function for the custom class itself
     * @return {Function} The intenal defining function, which is possibly useful when you want to extend it.
     */
    $.defineClass = function (name, parentClass, defining) {

        var CustomClass = subclass(parentClass, defining);

        $.registerCustomClass(name, function (elem) {

            var customClass = new CustomClass(elem);

        });

        return CustomClass;
    };

}(window.jQuery, window.subclass));
