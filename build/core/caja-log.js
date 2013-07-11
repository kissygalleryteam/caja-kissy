/**
 * @fileOverview shop_log 负责错误收集
 *               目前负责处理caja的错误收集
 *               只在线上环境或者?caja-debug的时候才发送日志
 * @author 石霸 shiba@taobao.com
 * @depends window, KISSY
 * @type {Object}
 */
var shop_log = (function (win, S) {

    /**
     * goldlog.send(url, data)
     url {String} logurl eg, http://xx.com/1.gif
     data {Object} (Optional) log obj to send   eg：{a: 1, b:2, c:3, d: “DDD”}。

     这是最基本的方法，调用这个方法，脚本将使用 new Image() 的方法创建一个新的图片，并将 data 中的 key/value 参数拼装为搜索字符串，提交一个 GET 请求。
     */
    var log_url = "http://log.mmstat.com/shopjserr.1.htm",
        shop_data = win.shop_config || {}, //浏览系统中提供的全局变量
        shop_url = win.document.location.href;
    shop_data.template = shop_data.template || {};

    //判断是否是线上环境，根据url 来判断 ，是否是*.taobao.com这种形式
    var sendFlag = /.*(\.taobao\.com)$/.test(win.location.host) || win.location.search.indexOf("caja-debug") !== -1;

    //自动执行，埋点获取一些全局数据


    /**
     * 准备log数据
     * 店铺浏览系统全局变量shop_cifnig中提供了大部分需要的信息，如下
     *  var shop_config = {
     "shopId":"57299736",
     "siteId":"2",
     "userId":"92688455",
     "user_nick": "%E6%9D%8E%E5%AE%81%E5%AE%98%E6%96%B9%E7%BD%91%E7%BB%9C%E6%97%97%E8%88%B0%E5%BA%97",
     "template": {
     "name": "",
     "id": "",
     "design_nick": ""
     }
     }

     * @return {Object}
     */

    function prepareData(msg, iframe) {
        shop_data.template = shop_data.template || {};

        return S.mix({
            error_page:shop_url,
            msg       :msg,
            name      :S.isString(iframe) ? iframe : S.DOM.attr(iframe, 'data-modulename'),
            random    :+new Date()
        }, {
            "shop_id"      :shop_data.shopId,
            "site_id"      :shop_data.siteId,
            "user_id"      :shop_data.userId,
            "user_nick"    :shop_data.user_nick,
            "template_name":shop_data.template.name,
            "template_id"  :shop_data.template.id,
            "design_nick"  :shop_data.template.design_nick
        });
    }

    /**
     * 监控js执行时间
     * @param type 监控类型 1： caja后js本身的执行时间
     * @param desc 和type对应的文字描述
     * @param prototypeid 模块原型id
     * @param time_consume
     */
    function prepareMonitorData(type, desc, prototypeid, time_consume) {
        shop_data.template = shop_data.template || {};
        return S.mix({
            type        :type,
            desc        :desc,
            module_name :prototypeid,
            time_consume:time_consume
        }, {
            "shop_id"      :shop_data.shopId,
            "site_id"      :shop_data.siteId,
            "user_id"      :shop_data.userId,
            "user_nick"    :shop_data.user_nick,
            "template_name":shop_data.template.name,
            "template_id"  :shop_data.template.id,
            "design_nick"  :shop_data.template.design_nick
        });
    }

    /**
     * 发送被捕获到的错误到日志服务器上
     * @param msg
     * @param filename
     * @param errorline
     */

    function sendSyncErrorLog(msg, filename) {
        if (!sendFlag) {
            return;
        }
        var data = prepareData(msg, filename);
        goldlog.emit('caja_log', data);
    }

    /**
     * 发送taming iframe 内部的错误信息到服务器(async error)
     * @param msg 沙箱环境的异常信息
     * @param iframe 沙箱的iframe
     */
    function sendTamingErrorLog(msg, iframe) {
        if (!sendFlag) {
            return;
        }
        var data = prepareData(msg, iframe);
        goldlog.emit('caja_log', data);
    }

    /**
     * 发送错误监控日志到后端
     * @param type
     * @param desc
     * @param prototypeid
     * @param time_consume
     */
    function sendJsMonitor(type, desc, prototypeid, time_consume) {
        if (!sendFlag) {
            return;
        }
        var data = prepareMonitorData(type, desc, prototypeid, time_consume);
        goldlog.emit('caja_per', data);
    }


    return {
        sendSyncErrorLog  :sendSyncErrorLog,
        sendTamingErrorLog:sendTamingErrorLog,
        sendJsMonitor     :sendJsMonitor
    }

})(window, KISSY);