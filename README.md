# define-class v1.0.0

> Define custom class easy

***Note*** This library depends on `jQuery`, [custom-class](https://github.com/kt3k/custom-class) and [subclass](https://github.com/kt3k/subclass)

# Description

This is the easy version of [custom-class](https://github.com/kt3k/custom-class). You can define your custom-class in a more convenient way and your code will naturally be organized. See the examples.

# Usage

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/custom-class.js"></script>
<script src="path/to/subclass.js"></script>

<script src="path/to/define-class.js"></script>

<script>

$.defineClass('my-class', function (pt) {
    'use strict';

    pt.constructor = function (elem) {

        this.elem = elem;

        // ...

    };

});

</script>
```


The first argument of the defining function is the prototype of the defining (internal) class of the custom class. This internal class will be instantiated when the custom class will be initialized and the first argument for the constructor is the jquery object of the initializing custom class element.

See the [DEMO](https://kt3k.github.io/define-class/test.html)

# License

MIT
