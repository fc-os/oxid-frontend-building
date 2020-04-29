/*
 * *
 * @package FATCHIP
 * @author FATCHIP GmbH
 * @copyright (C) 2019, FATCHIP GmbH
 *
 * This Software is the property of FATCHIP GmbH
 * and is protected by copyright law - it is NOT Freeware.
 *
 * Any unauthorized use of this software without a valid license
 * is a violation of the license agreement and will be
 * prosecuted by civil and criminal law.
 * /
 */

module.exports = function (buildDir) {
    const scripts = [
        {
            /**
             * BASE
             */
            input: [
                buildDir + 'js/vendor/vendor1/vendor.js',
                buildDir + 'js/app.js',
            ],
            output: 'shop.min.js'
        },

        /**
         * PAGES
         */
        {
            input: [
                buildDir + 'js/pages/account.js',
            ],
            output: 'account.min.js'
        },

        {
            input: [
                buildDir + 'js/pages/list.js',
            ],
            output: 'list.min.js'
        },
    ];

    const styles = [
        {
            input: [
                buildDir + 'scss/myproject/app.scss',
            ],
            output: 'shop.min.css'
        },
        {
            input: [
                buildDir + 'scss/myproject/pages/details.scss',
            ],
            output: 'details.min.css'
        },
        {
            input: [
                buildDir + 'scss/myproject/pages/list.scss',
            ],
            output: 'list.min.css'
        },
    ];

    const files = [{scripts: scripts, styles: styles}];
    return files;
};

