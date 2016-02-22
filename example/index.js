const classExport = require("../lib");

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
