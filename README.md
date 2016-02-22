# js-templates.class-export [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/js-templates.class-export.svg)](https://www.npmjs.com/package/js-templates.class-export) [![Downloads](https://img.shields.io/npm/dt/js-templates.class-export.svg)](https://www.npmjs.com/package/js-templates.class-export) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Generate a sample class export code

## Installation

```sh
$ npm i --save js-templates.class-export
```

## Example

```js
const classExport = require("js-templates.class-export");

console.log(classExport("foo"));
// "use strict";
//
// module.exports = class Foo {
//     /**
//      * Foo
//      * Sample description
//      *
//      * @name Foo
//      * @function
//      * @param {Object} options An object containing the following fields:
//      *
//      *  - `fieldOne` (Number): Any number (default: `42`).
//      *
//      * @return Foo The `Foo` instance.
//      */
//     constructor (options) {
//         /* do something */
//     }
// };

console.log(classExport("bar", "Class description"));
// "use strict";
//
// module.exports = class Bar {
//     /**
//      * Bar
//      * Class description
//      *
//      * @name Bar
//      * @function
//      * @param {Object} options An object containing the following fields:
//      *
//      *  - `fieldOne` (Number): Any number (default: `42`).
//      *
//      * @return Bar The `Bar` instance.
//      */
//     constructor (options) {
//         /* do something */
//     }
// };
```

## Documentation

### `classExport(name, name)`
Generates a class export template.

#### Params
- **String** `name`: The function name.
- **String** `name`: The function description (optional).

#### Return
- **String** The rendered template.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md