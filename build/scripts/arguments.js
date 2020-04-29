/*
 * *
 * @package FATCHIP
 * @author FATCHIP GmbH
 * @copyright (C) 2018, FATCHIP GmbH
 *
 * This Software is the property of FATCHIP GmbH
 * and is protected by copyright law - it is NOT Freeware.
 *
 * Any unauthorized use of this software without a valid license
 * is a violation of the license agreement and will be
 * prosecuted by civil and criminal law.
 * /
 */
//https://www.sitepoint.com/pass-parameters-gulp-tasks/
module.exports = function(args) {
    const arg = (argList => {
        let arg = {}, a, opt, thisOpt, curOpt;
        for (a = 0; a < argList.length; a++) {
            thisOpt = argList[a].trim();
            opt = thisOpt.replace(/^\-+/, '');
            if (opt === thisOpt) {

                // argument value
                if (curOpt) arg[curOpt] = opt;
                curOpt = null;

            }
            else {
                // argument name
                curOpt = opt;
                arg[curOpt] = true;

            }
        }
        return arg;

    })(args);
    return arg;
};