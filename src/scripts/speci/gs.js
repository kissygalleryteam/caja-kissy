//需要根据后端提供的uri配置来配置这里的白名单或者黑名单
(function (win) {
    win.cajaAFTB = win.cajaAFTB || {};

    cajaAFTB.GS = function (frameGroup, S) {
        //ready global service
        var listener = {};
        var GS = {
            addListener:function(name, l){
                if(!listener[name]){
                    listener[name] = [];
                }
                listener[name].push(l);
            }
        };

        frameGroup.markReadOnlyRecord(GS);
        frameGroup.markFunction(GS.addListener);

        S.Event.on(window, 'scroll', function(e){
            var event = {
                scrollTop: KISSY.DOM.scrollTop(window)
            };
            frameGroup.markReadOnlyRecord(event);
            var tameEvent = frameGroup.tame(event);
            if(listener['windowScroll']){
                for(var i =0;i<listener['windowScroll'].length;i++){
                    listener['windowScroll'][i](tameEvent);
                }
            }
        });


        return frameGroup.tame(GS);
    }
})(window);
