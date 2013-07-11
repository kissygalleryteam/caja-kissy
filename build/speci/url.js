/**
 * Rewrite uri according to the combination of whitelist and blacklist
 * @param {String} uri the uri to be rewritten
 * @param {Number} uriEffect the effect that allowing a URI to load
 * @param {Number} loaderType type of loader that would load the URI or the rewritten version
 * @param {Object} hints record that describes the context in which the URI appears.  If a hint is not present it should not be relied upon.
 *
 * @returns {String} rewrited uri
 */
//需要根据后端提供的uri配置来配置这里的白名单或者黑名单
(function (win, S) {
    win.cajaAFTB = win.cajaAFTB || {};

    cajaAFTB.rewriteURL = function (uri, uriEffect, loaderType, hints) {
        var cajaConfig = win.cajaConfig;
        //后端如果没有提供这个值，那么这边的url默认全部关闭，为了安全
        if(cajaConfig || cajaConfig.uri){
            return false;
        }
        var URI_RULE = {
            WHITE_LIST: cajaConfig.uri.white_list, BLACK_LIST: cajaConfig.uri.black_list
        };

        if (!hints) {
            return;
        }
        uri = S.trim(uri);

        //shop img src maybe other site
        if ("src" === hints.XML_ATTR) {
            return uri;
        }

        var protocolRex = /^http[s]?:\/\//;
        //not start with http or https protocol
        if (0 === uri.length || !(protocolRex.test(uri))) {
            return;
        }

        if ("href" === hints.XML_ATTR) {
            //check whether the uri is in blacklist
            for (var i = 0, l = URI_RULE.BLACK_LIST.length; i < l; i++) {
                if (-1 !== uri.indexOf(URI_RULE.BLACK_LIST[i])) { //in blacklist then return directly
                    return;
                }
            }

            //find the hostname
            var tUri = uri.replace(protocolRex, "")
                , lastSlashPos = tUri.lastIndexOf("/")
                , hostname = (-1 === lastSlashPos) ? tUri : tUri.substring(0, lastSlashPos);

            //check whether the uri is in whitelist
            for (var i = 0, l = URI_RULE.WHITE_LIST.length; i < l; i++) {
                if (-1 !== hostname.indexOf(URI_RULE.WHITE_LIST[i])) { //not in whitelist
                    return uri;
                }
            }
            return;
        }
    };
})(window, KISSY);
