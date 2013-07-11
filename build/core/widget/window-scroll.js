(function(){
    //全局服务 兼容判断, 每个caja widget都必须要这样申明
    var S = KISSY, Event = S.Event, DOM = S.DOM;

    //------begin
    var ExtraCaja = (window.ExtraCaja = window.ExtraCaja || {});
    var GS = (ExtraCaja.GS = ExtraCaja.GS || {});
    GS.initAll = GS.initAll || [];
    //------end

    function initCajaGS(frameGroup){
        //addListener 兼容判断
        GS.addListener = GS.addListener || function (name, l) {
            if (!GS.addListener.Fncs[name]) {
                GS.addListener.Fncs[name] = [];
            }
            GS.addListener.Fncs[name].push(l);
        };
        GS.addListener.Fncs = GS.addListener.Fncs || [];


        Event.on(window, 'scroll', function(e){
            var event = {
                scrollTop: S.DOM.scrollTop(window)
            };
            frameGroup.markReadOnlyRecord(event);
            var tameEvent = frameGroup.tame(event);

            if(GS.addListener.Fncs['windowScroll']){
                for(var i =0;i<GS.addListener.Fncs['windowScroll'].length;i++){
                    GS.addListener.Fncs['windowScroll'][i](tameEvent);
                }
            }
        });
    }

    GS.initAll.push(initCajaGS);

})();

