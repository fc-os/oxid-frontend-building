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
    return [
        {
            /**
             * BASE
             */
            input: [
                buildDir + 'scripts/vendor/vendor1/vendor.scripts',
                buildDir + 'scripts/app.scripts',
            ],
            output: 'shop.min.scripts'
        },

        /**
         * PAGES
         */
        {
            input: [
                buildDir + 'scripts/pages/account.scripts',
            ],
            output: 'account.min.scripts'
        },

        {
            input: [
                buildDir + 'scripts/pages/list.scripts',
            ],
            output: 'list.min.scripts'
        },
    ];
};

