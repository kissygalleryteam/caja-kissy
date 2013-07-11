/**
 * @fileOverview Preparation for setting up the balcony environment
 * @author chengjing<chengjing.taobao.com>, qingyu<qingyu@taobao.com>
 * @depends caja-adapter
 */
(function (cajaAFTB, caja, KISSY) {
    var S = KISSY,
        version = "r3001",
        HOST_PATH = location && (location.search || '').indexOf('caja-debug') !== -1 ? "http://assets.daily.taobao.net/apps/taesite/balcony/core/" : "http://a.tbcdn.cn/apps/taesite/balcony/core/";

    /**
     * @constant Server hosts the caja service
     */
    var CAJA_SERVER = HOST_PATH + version + "/caja/";

    /**
     * @constant Identifier which indicates the module is scripted module
     */
    var SCRIPTED_MODS_IDENTIFIER = "J_TScriptedModule";

    // Store the relationship between the prototype id and cajoled javascript code of the module
    var jsModsMap = {};

    var Balcony = {};

    /**
     * Add and maintain the map in the form of {prototypeId: CajoledJS}
     * @param {String} prototypeId  the prototype id of the module
     * @param {String} cajoledJS  cajoled JavaScript code of the module
     */
    Balcony.addModsCajoledJS = function (prototypeId, cajoledJS) {
        if (arguments.length < 2) {
            return;
        }

        if (!S.isString(prototypeId)) {
            return;
        }
        jsModsMap[prototypeId] = jsModsMap[prototypeId] || ";" + cajoledJS + ";";
    };


    /**
     * Get the cajoled JavaScript code of the module
     * @param {String} prototypeId the prototype id of the module
     *
     * @returns {String} cajoled JavaScript code of the module
     */
    Balcony.getModsCajoledJS = function (prototypeId) {
        if (!prototypeId) {
            return null;
        }

        return jsModsMap[prototypeId] ? jsModsMap[prototypeId] : null;
    };

    /**
     * 插件处理机制 ，有可能返回的完全是空
     * @param frameGroup
     * @returns {{tameGlobalService: *, kplugin: *}}
     */
    Balcony.readyServicePluginsWidgets = function (frameGroup) {
        var extraCaja = window.ExtraCaja || {};

        var tameGlobalService;


        //init GS service from widget
        if ( extraCaja.GS) {

            //初始化GS相关对象
            S.each(extraCaja.GS.initAll, function (initFunc) {
                initFunc(frameGroup);
            });
            try {
                delete extraCaja.GS.initAll;
            } catch (e) {
                extraCaja.GS.initAll = undefined;
            }

            //获取全局服务对象并且标记为可读
            var GS = frameGroup.markReadOnlyRecord(extraCaja.GS);
            //对函数进行标记白名单
            S.each(GS, function (widgets) {
                if (S.isFunction(widgets)) {
                    frameGroup.markFunction(widgets);
                }
            });

            tameGlobalService = frameGroup.tame(GS);
            //----end GS
        }

        if (extraCaja.kplugin) {
            //kissy plugisn
            S.each(extraCaja.kplugin.initAll, function (initFunc) {
                initFunc(frameGroup);
            });

            try {
                delete extraCaja.kplugin.initAll;
            } catch (e) {
                extraCaja.kplugin.initAll = undefined;
            }
        }


        return {
            tameGlobalService: tameGlobalService,
            kplugin: extraCaja.kplugin
        }
    };


    /**
     * Collect all the scripted modules and run them with corresponding cajoled JavaScript code
     * @param {Object} frameGroup frameGroup in caja environment
     */
    Balcony.runScriptedMods = function (frameGroup) {
        var DOM = KISSY.DOM;
        var scriptedMods = DOM.query("." + SCRIPTED_MODS_IDENTIFIER);
        if (!scriptedMods) {
            return;
        }

        var sharedFn = cajaAFTB.makeSharedFactory(frameGroup, S);

        var serviceObj = Balcony.readyServicePluginsWidgets(frameGroup);


        S.each(scriptedMods, function (scriptedMod) {
            var prototypeId = DOM.attr(scriptedMod, "data-componentid");
            // no prototypeId
            if (!prototypeId) {
                return;
            }

            var cajoledJS = jsModsMap[prototypeId];
            //module with the prototype id hasn't been added into the map
            if (undefined === cajoledJS) {
                return;
            }
            frameGroup.makeES5Frame(scriptedMod, {rewrite: cajaAFTB.rewriteURL }, function (frame) {
                var onerror = frameGroup.tame(frameGroup.markFunction(function (message, source, lineNum) {
                    window.shop_log.sendSyncErrorLog
                    return true;
                }));
                //为iframe 沙箱环境标示出模块的原型id, 将模块的原型id,放在iframe中，后面获取数据的时候方便获取
                DOM.attr(frame.iframe, 'data-modulename', DOM.attr(frame.div, 'data-componentid'));

                //kplugins 是kissy中的插件
                var exposed_kissy = sharedFn({
                    imports: frame.imports,
                    context: scriptedMod,
                    kplugins: serviceObj.kplugin
                });

                var start_time = +new Date();
                var prepareEnv = frame.contentCajoled('', cajoledJS);
                prepareEnv.run(S.mix({
                    KISSY: exposed_kissy,
                    GS: serviceObj.tameGlobalService,
                    onerror: onerror
                },S.isFunction(window.getCajaExposed) ? window.getCajaExposed(frameGroup, cajaAFTB) : {}), function (re, a) {
                });
                //发送监控日志-js执行时间
                shop_log.sendJsMonitor(1, "设计师模块js被编译后的执行时间", prototypeId, +new Date() - start_time);

            });
        });
    };

    /**
     * Set up the balcony environment for scripted modules
     */
    Balcony.setup = function () {
        caja.configure({
            cajaServer: CAJA_SERVER,
            debug: location && (location.search || '').indexOf('caja-debug') !== -1
        }, function (frameGroup) {
            Balcony.runScriptedMods(frameGroup);
        });
    };


    /**
     * Register and maintain the map in the form of {prototypeId: CajoledJS}
     * @param {String} prototypeId  the prototype id of the module
     * @param {String} cajoledJS  cajoled JavaScript code of the module
     */
    Balcony.registerCajoledMods = function (prototypeId, cajoledJS) {
        Balcony.addModsCajoledJS(prototypeId, cajoledJS);
    };

    /**
     * @author 石霸
     * 向前兼容
     * 此处必须声明TShop变量, 因为服务端对设计师js的编译，被编译成 "TShop.Balcony.registerMod(jscode)"
     * 服务端目前做版本控制较困难，前端先做兼容
     * 此处无法修改，因为要向前兼容
     */
    if (!window['TShop']) {
        window['TShop'] = {};
    }
    window['TShop'].Balcony = Balcony;

})(cajaAFTB, caja, KISSY);