/**
 *  ������õط�
 *  @depends KISSY, cajaConfig(��������ҳ�������)
 */
(function (S,cajaConfig) {
    //���������·��url
    var pluginsBaseUrl = location.href.indexOf('.daily.') === -1 ? "http://a.tbcdn.cn/apps/taesite/balcony/core/r3002/kissy-plugins/??" : "http://assets.daily.taobao.net/apps/taesite/balcony/core/r3001/kissy-plugins/??";
    //�����·�������캯����map�ṹ��ΪscriptContent
    var pluginsConfig = {
        kcharts: {
            name:"kcharts",
            module: ",gallery/kcharts/1.1/linechart/index,gallery/kcharts/1.1/barchart/index,gallery/kcharts/1.1/piechart/index",
            constructor: ",LineChart,BarChart,PieChart",
            scriptcontent: "KISSY._KCharts = {};KISSY._KCharts.LineChart = LineChart;KISSY._KCharts.BarChart = BarChart;KISSY._KCharts.PieChart = PieChart;"
        }
    };

    var moduleStr = "";
    var constructorStr = "";
    var scriptcontentStr = "";

    //����window.cajaConfig��ƴ��ҳ����Ҫ��������
    S.each(pluginsConfig, function (plugin) {
        if (cajaConfig.kissy[plugin.name]) {
            moduleStr += plugin.module;
            constructorStr += plugin.constructor;
            scriptcontentStr += plugin.scriptcontent;
            pluginsBaseUrl += "," + plugin.name + ".js";
        }
    });
    pluginsBaseUrl = pluginsBaseUrl.replace("??,","??");

    //ִ��cajaģ���ʼ��
    var scriptContent =
        'KISSY.use("sizzle' + moduleStr + '", function (S,Sizzle' + constructorStr + ') {' +
            'S.ready(function () {' +
            (moduleStr?('KISSY.getScript("'+pluginsBaseUrl+'",function(){'):"") +
                    scriptcontentStr +
                    'if (TShop.Balcony.setup) {' +
                    '   TShop.Balcony.setup();' +
                    '}' +
            (moduleStr ? '});' : "") +
            '})' +
        '});';

    eval(scriptContent);

})(KISSY, window.cajaConfig);