"use strict";

const camelo = require("camelo");

/**
 * classExport
 * Generates a class export template.
 *
 * @name classExport
 * @function
 * @param {String} name The function name.
 * @param {String} name The function description (optional).
 * @return {String} The rendered template.
 */
module.exports = function classExport (name, desc) {

    name = cameo(name, true);

    return `"use strict";

module.exports = class ${name} {
    /**
     * ${name}
     * ${desc || "Sample description"}
     *
     * @name ${name}
     * @function
     * @param {Object} options An object containing the following fields:
     *
     *  - \`fieldOne\` (Number): Any number (default: \`42\`).
     *
     * @return ${name} The \`${name}\` instance.
     */
    constructor (options) {
        /* do something */
    }
};`;
};
