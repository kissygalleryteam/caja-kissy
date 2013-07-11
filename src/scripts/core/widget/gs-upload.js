(function () {
    //全局服务 兼容判断, 每个caja widget都必须要这样申明
    var S = KISSY, Event = S.Event, DOM = S.DOM, IO = S.IO;

    //------begin
    var ExtraCaja = (window.ExtraCaja = window.ExtraCaja || {});
    var GS = (ExtraCaja.GS = ExtraCaja.GS || {});
    GS.initAll = GS.initAll || [];
    //------end

    var genTokenid = "#J_TCajaGenToken"; //页面临时产生token的id标示
    var targetId = "tempCajaIframe";

    function initCajaGS(frameGroup) {
        //addListener 兼容判断
        GS.addListener = GS.addListener || function (name, l) {
            if (!GS.addListener.Fncs[name]) {
                GS.addListener.Fncs[name] = [];
            }
            GS.addListener.Fncs[name].push(l);
        };
        GS.addListener.Fncs = GS.addListener.Fncs || [];


        /**
         * 构造一个iframe和form
         * @param url form需要提交的url
         * @param token form中的验证地址
         * @returns {{form: void, iframe: void}}
         */
        function construIframeForm(url, token) {
            //gen iframe to submit
            var ifr = DOM.create("<iframe id=''" + targetId + "' name='" + targetId + "'></iframe>");
            DOM.css(ifr, 'display', 'none');

            //gen form from submit
            var form = DOM.create('<form action="' + url + '" target="' + targetId + '" method="post"  enctype="multipart/form-data"></form>');
            DOM.css(ifr, 'display', 'none');
            var input = DOM.create('<input type="hidden" name="token" value="' + token + '"/>');
            form.appendChild(input);

            return {
                form: form,
                iframe: ifr
            }
        }


        /**
         * 为页面指定钩子注册事件处理程序
         */
        Event.delegate(document, 'change', 'input.J_TCajaUploadImg', function (e) {
            var tg = e.target;


          /*  IO({
                type: "post",
                url: DOM.val(genTokenid),
                success: function (result) {*/
                var obj = construIframeForm(DOM.attr(tg, 'data-url'),1/* result.data.token*/);
                DOM.append(tg, obj.form);

                document.body.appendChild(obj.iframe);
                document.body.appendChild(obj.form);

                obj.form.submit();
             /*   },
                error: function () {
                    alert('服务端出错，token产生失败! 这是不可以理解的事情.');
                }
            });*/

            //开发者注册的事件，函数调用
            var tempFunc = function (tameJSON) {
                if (GS.addListener.Fncs['cajaupload']) {
                    for (var i = 0; i < GS.addListener.Fncs['cajaupload'].length; i++) {
                        GS.addListener.Fncs['cajaupload'][i](tameJSON);
                    }
                }
            };

            /**
             * 上传完成后，由iframe内部包装函数触发的事件
             * 临时创建事件注册，结束后会移除掉
             * 这里因为需要异步拿token和上传，所以每一次只能上传一个文件
             * todo 后面增加状态的判断
             */
            Event.on(window, 'cajaupload', function (json) {
                //caja 封装返回数据并且调用
                json = {
                    content: json.content
                }
                frameGroup.markReadOnlyRecord(json);
                var tameJSON = frameGroup.tame(json);
                tempFunc(tameJSON);

                //处理后，清楚临时数据
                Event.remove(window, 'cajaupload');
                DOM.remove(obj.iframe);
                DOM.remove(obj.form);
            });

        });
    }

    GS.initAll.push(initCajaGS);

})();

