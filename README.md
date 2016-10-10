
# js-templates.class-export

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/js-templates.class-export.svg)](https://www.npmjs.com/package/js-templates.class-export) [![Downloads](https://img.shields.io/npm/dt/js-templates.class-export.svg)](https://www.npmjs.com/package/js-templates.class-export) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Generate a sample class export code.

## :cloud: Installation

```sh
$ npm i --save js-templates.class-export
```


## :clipboard: Example



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

## :memo: Documentation


### `classExport(name, desc)`
Generates a class export template.

#### Params
- **String** `name`: The function name.
- **String** `desc`: The function description (optional).

#### Return
- **String** The rendered template.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`js-templates`](https://github.com/IonicaBizau/js-templates#readme)—Generate JS code templates.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
