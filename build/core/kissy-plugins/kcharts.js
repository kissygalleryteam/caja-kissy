;
/**
 * 假设所有的组件都已经附件到kissy对象上去
 * kcharts 下面所有组件，都附加到KISSY._KCharts.xxx 上
 */
(function (S) {
    var ExtraCaja = (window.ExtraCaja = window.ExtraCaja || {});

    ExtraCaja.kplugin = ExtraCaja.kplugin || {};
    ExtraCaja.kplugin.initAll = ExtraCaja.kplugin.initAll || [];

    ExtraCaja.kplugin.initAll.push(function (frameGroup, context) {

        //---- linechart
        frameGroup.markCtor(S._KCharts.LineChart);
        frameGroup.grantMethod(S._KCharts.LineChart, "render");
        frameGroup.grantMethod(S._KCharts.LineChart, "showLine");
        frameGroup.grantMethod(S._KCharts.LineChart, "hideLine");
        frameGroup.grantMethod(S._KCharts.LineChart, "clear");
        frameGroup.grantMethod(S._KCharts.LineChart, "on");

        S._KCharts.LineChart.prototype.c_on= S._KCharts.LineChart.prototype.on;
        S._KCharts.LineChart.prototype.on = function(type,fnc){
            var self = this;
            this.c_on(type, frameGroup.markFunction(function(){
                fnc.call(self);
            }));
        };
        // -- end linechart

        //-- barChart
        frameGroup.markCtor(S._KCharts.BarChart);
        frameGroup.grantMethod(S._KCharts.BarChart, "render");
        frameGroup.grantMethod(S._KCharts.BarChart, "clear");
        frameGroup.grantMethod(S._KCharts.BarChart, "on");

        S._KCharts.BarChart.prototype.c_on= S._KCharts.BarChart.prototype.on;
        S._KCharts.BarChart.prototype.on = function(type,fnc){
            var self = this;
            this.c_on(type, frameGroup.markFunction(function(){
                fnc.call(self);
            }));
        };
        //-- end barChart

        //-- piechart
        frameGroup.markCtor(S._KCharts.PieChart);
        frameGroup.grantMethod(S._KCharts.PieChart, "render");
        frameGroup.grantMethod(S._KCharts.PieChart, "clear");
        frameGroup.grantMethod(S._KCharts.PieChart, "on");

        S._KCharts.PieChart.prototype.c_on= S._KCharts.PieChart.prototype.on;
        S._KCharts.PieChart.prototype.on = function(type,fnc){
            var self = this;
            this.c_on(type, frameGroup.markFunction(function(){
                fnc.call(self);
            }));
        };
        //-- end piechart



        S.mix(ExtraCaja.kplugin, {
            KCharts: {
                LineChart: frameGroup.markFunction(function () {
                    var args = S.makeArray(arguments);
                    var cfg = cajaAFTB.untame(args[0]);
                    cfg.renderTo = S.DOM.get(cfg.renderTo, context);
                    return new S._KCharts.LineChart(cfg);
                }),

                BarChart: frameGroup.markFunction(function(){
                    var args = S.makeArray(arguments);
                    var cfg = cajaAFTB.untame(args[0]);
                    cfg.renderTo = S.DOM.get(cfg.renderTo, context);
                    return new S._KCharts.BarChart(cfg);
                }),

                PieChart: frameGroup.markFunction(function(){
                    var args = S.makeArray(arguments);
                    var cfg = cajaAFTB.untame(args[0]);
                    cfg.renderTo = S.DOM.get(cfg.renderTo, context);
                    return new S._KCharts.PieChart(cfg);
                })
            }
        });
    });

    window.ExtraCaja = ExtraCaja;

})(KISSY);