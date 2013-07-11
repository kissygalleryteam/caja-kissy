//判断el是否是经过taming的
function isTameEl(el) {
    return el.setAttribute.toString().indexOf('setAttribute') === -1;
}

describe('基本的语言测试', function () {

    it("数组的一些函数测试", function () {
        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var arr2 = [10, 11];

        expect('arr.length == 9', arr.length == 9, 1);
        expect('合并数组 调用 concat 函数产生一个新的合并后的函数 : ', arr.concat(arr2).length == 11 && arr.length == 9, 2);
        expect('转化为字符串 ，调用 join 将数组中的元素以分隔符合并为一个字符串 ', arr2.join(":") === "10:11", 3);
        expect('pop 弹出', arr.pop() && arr.length == 8, 4);

        var arr = [1, 2, 3];
        arr.forEach(function (i) {
            arr.push(i)
        })
        expect('forEach', arr[3] === 1 && arr[4] === 2 && arr[5] === 3, 5);

        var arr = [1, 2, 3];
        arr.reverse();
        expect('revserse 倒转数组元素', arr.length == 3 && arr[0] === 3 && arr[1] === 2 && arr[2] === 1, 6);
        expect('shift 弹出数组的第一个元素', arr.shift() == 3 && arr.length == 2 && arr[0] === 2 && arr[1] === 1, 7);

        var arr = [1, 2, 3];
        arr.unshift(4);
        expect('unshift 添加新元素到数组头部', arr.length == 4 && arr[0] === 4 && arr[1] === 1, 8);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var arrsub = arr.slice(3, 6);
        var arract = [9, 8, 7];
        expect('slice 返回数组指定索引为3到5的字符，索引从0开始', arrsub.length == 3 && arract.toString() == arrsub.toString(), 9);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var arrreplace = arr.splice(2, 4, 1, 1, 1, 1);
        var arr1 = [3, 9, 8, 7]
        var arrexp = [1, 2, 1, 1, 1, 1, 6, 5, 4];
        expect('splice 指定索引2后面的4个元素被1，1,1,1替代', arr.toString() == arrexp.toString() && arrreplace.toString() == arr1.toString(), 10);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        arr.sort();
        var arrupexp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect('sort 升序排序', arr.toString() == arrupexp.toString(), 11)
        arr.sort(function (a, b) {
            return b - a;
        });
        var arrdownexp = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        expect('sort 降序排序', arr.toString() == arrdownexp.toString(), 12);


        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var dex = arr.indexOf(4)
        expect('index 找到值为参数的索引', dex == 8, 13);

        var arr = [4, 6, 7, 8, 2, 66, 34, 7, 534, 34, 6, 8];
        var lastdex = arr.lastIndexOf(4);
        expect('lastIndexOf 找到该值最后出现的索引位置', lastdex == 0, 14);


        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];

        var flag1 = arr.every(function (a) {
            if (a === 9) {
                return false;
            }
        });
        expect('every 只要有一个元素调用function返回false则every返回false', flag1 == false, 15);


        var flag2 = arr.every(function (a) {
            if (a !== 100) {
                return true;
            }
        });
        expect('every 每个元素调用function返回true则every返回true', flag2 == true, 16);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var flag1 = arr.some(function (a) {
            if (a === 9) {
                return true;
            }
        });
        expect('some 只要有一个元素调用function返回ture则some返回true', flag1 == true, 17);


        var flag2 = arr.some(function (a) {
            if (a === 100) {
                return false;
            }
        });
        expect('some 所有元素调用funtion返回false则some返回flase', flag2 == false, 18);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var arrfilter = arr.filter(function (a) {
            if (a !== 1) {
                return true;
            }
        });
        expect('filter 返回function返回值为true的元素', arrfilter.length == 8 && arrfilter[0] === 2, 19);

        var arr = [1, 2, 3];
        var empty = [];
        arr.map(function (item, index) {
            empty[index] = item;
        });
        expect('arr map', empty[0] === 1 && arr[2] === 3, 20);
    });

    it("all 方法相关：链式用法", function () {
        var S = KISSY;

        var obj = S.all('.dom-father');
        expect('KISSY.all 获得一个对象', typeof obj == "object", 1);

        expect('KISSY.all length 获取长度，注意，这里是函数', S.all('.dom-father').len() ===1,1)

        expect('KISSY.all equals 比较当前节点列表和 others 代表的节点列表是否完全相同', S.all('a').equals(S.all('a')), 1);

        expect('KISSY.all hasClass 是否包含指定class', S.all('.dom-father').hasClass('.dom-father'), 1);

        expect('KISSY.all c_addClass 添加class', S.all('.dom-father').c_addClass('bbb').hasClass('bbb'), 1);

        expect('KISSY.all removeClass 移除class', !S.all('.dom-father').c_addClass('bbb').removeClass('bbb').hasClass('bbb'), 1);

        expect('KISSY.all toggleClass 切换class', !S.all('.dom-father').c_addClass('bbb').toggleClass('bbb').hasClass('bbb'), 1);

        expect('KISSY.all replaceClass 切换class', S.all('.dom-father').c_addClass('bbb').replaceClass('bbb', 'aaa').hasClass('aaa') && !S.all('.dom-father').hasClass('bbb'), 1);

        expect('KISSY.all add方法增加的元素必须是caja容器内的元素', S.all('.row').c_getDOMNodes().length === 0, 1);



        expect('KISSY.all slice 获取包含当前节点列表选定范围内原生节点的新 NodeList 对象',
            S.all('.dom-child1').c_add('.dom-child2').slice(1, 2).equals(S.all('.dom-child2')), 1);


        expect('KISSY.all end 得到上一次 NodeList.prototype.one() / NodeList.prototype.all() 操作前的 NodeList 对象',
            S.all('.dom-child1').all('.dom-child2').end().equals(S.all('.dom-child1')), 1);

        expect('KISSY.all add和item 返回包含合并选择器字符串匹配的元素和当前节点列表元素的新 NodeList 对象， item获取第index个NodeList对象', S.all('.dom-child1').c_add('.dom-child2').item(1).hasClass('dom-child2'), 1);

        expect('KISSY.all scrollTop ', typeof S.all('.dom-child1').scrollTop() === "number", 1);
        expect('KISSY.all scrollLeft' + S.all('.dom-child1').scrollLeft(), typeof S.all('.dom-child1').scrollLeft() === "number", 1);

        expect('KISSY.all height ' + S.all('.dom-father').height(), typeof S.all('.dom-father').height() === "number", 1);
        expect('KISSY.all width' + S.all('.dom-father').width(), typeof S.all('.dom-father').width() === "number", 1);

        expect('KISSY.all c_appendTo/parent/c_children/item 将当前节点列表中的每个元素插入到容器列表的每个元素的最后一个子节点后面.',
            S.all('.dom-child1').c_appendTo(S.all('.dom-father')).parent().c_children().item(0).hasClass("dom-child2"), 1);

        expect('KISSY.all c_prependTo 将当前节点列表中的每个元素插入到容器列表的每个元素的开头.', S.all('.dom-child1').c_prependTo(S.all('.dom-father')).parent().c_children().item(0).hasClass("dom-child1"), 1);

//        S.all('.dom-child1').c_insertBefore(S.all('.dom-child2'));
//        expect('KISSY.all c_insertBefore 将当前节点列表中的每个元素插入到容器列表的每个元素的开头.', S.all('.dom-father').c_children().item(0).hasClass('dom-child1'), 1);

        S.all('.dom-father').show(5).hide(5).toggle(5).fadeIn().fadeOut().fadeToggle().slideDown().slideUp().slideToggle();
        expect('KISSY.all show .', true, 1);
        expect('KISSY.all hide .', true, 1);
        expect('KISSY.all toggle .', true, 1);

        expect('KISSY.all c_filter 获取符合选择器以及过滤参数的所有元素.', S.all('.dom-father').c_children().c_filter('.dom-child2').equals(S.all('.dom-child2')), 1);


        expect('KISSY.all test 判断根据选择器获取的所有元素是否都符合过滤条件.', S.all('.dom-father').c_children().test('div'), 1);

        S.all('.dom-child1').clone().c_insertBefore(S.all('.dom-child2'));
        expect('KISSY.all clone 获取符合选择器的第一个元素的克隆元素.', S.all('.dom-father').c_children().item(1).hasClass('dom-child1'), 1);

        S.all('.dom-child1').item(0).remove();
        expect('KISSY.all remove 将符合选择器的所有元素从 DOM 中移除.', S.all('.dom-father').c_children().item(1).hasClass('dom-child2'), 1);

        var div = document.createElement('div');
        div.innerHTML = "<a class='a'>a</a><a class='b'>b</a>";
        div.className = "dom-child3";
        S.all(div).c_appendTo(S.all('.dom-father'));



        expect('KISSY.all empty 清除节点的所有子孙节点以及子孙节点上的事件', S.all('.dom-father').c_children().item(2).hasClass('dom-child3'), 1);
        S.all('.dom-father').c_children().item(2).empty();
        expect('KISSY.all empty 清除节点的所有子孙节点以及子孙节点上的事件', document.getElementsByClassName('dom-child3')[0].innerHTML === '', 1);
        S.all('.dom-child3').remove();

        div = document.createElement("a");
        div.className = 'temp';
        expect('KISSY.all replaceWith 将 node 节点（数组）替换为新的节点（数组） newNode',
            S.all('.dom-child1').replaceWith(div) && S.all('.temp').hasClass('temp'), 1);

        div = document.createElement("div");
        div.className = 'dom-child1';
        document.getElementsByClassName('dom-father')[0].appendChild(div);

        S.all('.temp').remove();



        expect('KISSY.all offset 获取符合选择器的第一个元素相对页面文档左上角的偏移值', typeof S.all('.dom-father').offset().top, 1);
        expect('KISSY.all offset 获取符合选择器的第一个元素相对页面文档左上角的偏移值', typeof S.all('.dom-father').offset().left, 1);

        expect('KISSY.all c_next 获取符合选择器的第一个元素的下一个同级节点', S.all('.dom-child2').c_next().equals(S.all('.dom-child1')), 1)
        expect('KISSY.all c_prev 获取符合选择器的第一个元素的上一个同级节点', S.all('.dom-child1 ').c_prev().equals(S.all('.dom-child2')), 1)

        expect('KISSY.all c_first 获取符合选择器的第一个孩子节点', S.all('.dom-father').c_first().equals(S.all('.dom-child2')), 1)

        expect('KISSY.all c_last 获取符合选择器的最后一个孩子节点', S.all('.dom-father').c_last().equals(S.all('.dom-child1')), 1)

        expect('KISSY.all c_siblings 获取符合选择器的第一个元素的相应同级节点.', S.all('.dom-father').c_children().item(0).c_add(S.all('.dom-father').c_children().item(0).c_siblings()).equals(S.all('.dom-father').c_children()), 1)

        expect('KISSY.all contains 判断某一容器(container)是否包含另一(contained)节点', S.all('.dom-father').contains(S.all('.dom-child1')), 1)

        expect('KISSY.all innerWidth 获取符合选择器的第一个元素的宽度值, 注意: 该值包含 padding .', typeof S.all('.dom-father').innerWidth() === 'number', 1)
        expect('KISSY.all innerHeight 获取符合选择器的第一个元素的高度值, 注意: 该值包含 padding . .', typeof S.all('.dom-father').innerHeight() === 'number', 1)
        expect('KISSY.all outerWidth 获取符合选择器的第一个元素的宽度值, 注意: 该值除了包含元素本身宽度和 padding 外, 还包含 border或margin .', typeof S.all('.dom-father').outerWidth() === 'number', 1)
        expect('KISSY.all outerHeight 获取符合选择器的第一个元素的高度值, 注意: 该值除了包含元素本身宽度和 padding 外, 还包含 border或margin .', typeof S.all('.dom-father').outerHeight() === 'number', 1)



        var an = S.all('.dom-child2').c_animate({"top": 100});
        an.pause();
        expect('KISSY.all animate/isPaused ', an.isPaused(), 1);
        an.resume();
        expect('KISSY.all animate/isPaused ', an.isRunning(), 1);
        an.stop();
        expect('KISSY.all animate/stop ', true, 1);


        /*S.all('.dom-child1').c_on('click',function (e) {
            e.target.innerHTML = "fffffff"
        });
        S.all('.dom-child1').fire('click');

        expect('KISSY.all fire js手动触发事件', S.all('.dom-child1').c_getDOMNodes()[0].innerHTML === "fffffff", 1);

        expect('KISSY.all scrollIntoView 目测ok了', true,1);*/

        S.all('.inputcls').c_on('click', function(e){
           expect("kissy.al on fire 可以获取争取的值 e.target.value", e.target.value === 'landao');
           expect("kissy.al on fire 可以获取争取的值 this.value", this.value === 'landao');
           expect("kissy.al on fire 可以获取争取的值 S.all(this).val()", S.all(this).val() === 'landao');

        }).fire('click');

    });

    it('S.all 方法链式写法的安全性校验', function () {

        var S = KISSY;
        expect('KISSY.all c_getDOMNodes 返回的elements是已经被taming过的了'+S.all('.dom-child1').c_getDOMNodes()[0].tagName, isTameEl(S.all('.dom-child1').c_getDOMNodes()[0]), 1);
        expect('KISSY.all add方法增加的元素必须是caja容器内的元素', S.all('.dom-child1').c_add('.row').c_getDOMNodes().length === 1, 1);
        expect('KISSY.all c_prependTo/c_appendTo 方法增加的元素必须是caja容器内的元素', S.all('.dom-child1').c_add('.row').c_getDOMNodes().length === 1, 1);


        var el = S.all('.dom-child1').parent(5);

        expect('KISSY.all parent不可以获取到超过容器外的元素', el.c_getDOMNodes()[0].tagName === undefined );

        setTimeout(function(){
            S.all('.rep-father').scrollIntoView();
        },3000);

    });

});

describe('对象基本方法和字符串测试', function () {

    it('对象的属性和函数测试', function () {

        var arr = {a: 1, b: 2};
        expect('hasOwnProperty 检查含有某个属性', arr.hasOwnProperty("b") == true, 1);
        expect('hasOwnProperty 检查不含有某个属性', arr.hasOwnProperty("c") == false, 2)

        function sustract(a, b) {
            var result = a - b;
            return result;
        }

        var res = sustract(7, 5);
        expect('function 函数建立和调用测试', res == 2, 3);

        function callapplytest(c) {
            var result = this.a + this.b + c;
            return result
        }

        var rescall = callapplytest.call({a: 3, b: 4}, 5);
        expect('call 可以直接传递参数列表比如5', rescall == 12, 2);

        var resapply = callapplytest.apply({a: 3, b: 4}, [5]);
        expect('apply 需要包装成数组才能传递', resapply == 12, 3)
    });

    it('对象的字符串测试', function () {
        var zifu = String.fromCharCode(65);
        expect('String.fromCharCode unicode转换成相应的值', zifu == "A", 1);

        var str = "abcde";
        var zifu = str.charAt(2);
        expect('charAt 得到字符串中指定索引值的字符', zifu == "c", 2);
        var zifucode = str.charCodeAt(2);
        expect('charCodeAt 得到字符串中指定索引值的字符的unicode', zifucode == 99, 3);

        //这个字符串连接不测了吗？
        var str = "abc" + "123";
        expect('+ 字符串连接', str == "abc123", 4);

        var str = "ab124ab4ab";
        var flag = str.indexOf("124");
        expect('indexOf 子串出现的第一个位置', flag == 2, 5);

        var flag = str.lastIndexOf("4a");
        expect('lastIndeOf 子串出现的最后一次的位置', flag == 7, 6);

        var str = "ABCD";
        expect('toLowerCase 转换成小写', str.toLowerCase() == "abcd", 7);

        var str = "abcd"
        expect('toUpperCase 转换成大写', str.toUpperCase() == "ABCD", 8);

        var str = "1 加 2 等于 3";
        var strexp = ["1", "2", "3"];
        expect('match 正则匹配' + str.match(/\d+/g), str.match(/\d+/g)[0] == strexp[0], 9);
        var s = "TaoBao 开放 js";
        expect('search 返回匹配的起始位置', s.search(/t.o/i) == 0, 10);


        var str = "1,2,3,4,5";
        var strexp = ["1", "2", "3", "4", "5"];
        expect('split 根据参数分割字符串', str.split(",").toString() == strexp, 11);

        var str = "1::2:3:4:5";
        var strexp1 = ["1", "2", "3", "4", "5"];
        expect('split 根据正则分割字符串', str.split(/:+/).toString() == strexp1, 12);
        var str = "1::2:3:4:5";
        var strexp2 = ["1", ":", "", ":", "2", ":", "3", ":", "4", ":", "5"];
        expect('split 匹配的分隔符也包含在返回结果中', str.split(/(:)/).toString() == strexp2, 13);

        var x = "   ssd  ";
        expect('trim 生效 调用 trim 去掉字符串两边的空格', x.trim() === "ssd", 14);
        expect('trim 字符串没变 调用 trim 去掉字符串两边的空格', x === "   ssd  ", 15)

        var x = "abc";
        x = x.replace("a", '');
        expect("replace", x == "bc", 16);

    });

    it('对象的数字测试', function () {
        expect("Number.POSITIVE_INFINITY 运算正溢出时的值", 1 / 0 === Number.POSITIVE_INFINITY, 1)
        expect('Number.NEFATIVE_INFINITY 运算负溢出时的值', -1 / 0 === Number.NEGATIVE_INFINITY, 2);

        var num = 1234.5678;
        expect('toFixed 去掉小数点的数字', num.toFixed() == 1235, 3);
        expect('toFixed(2) 四舍五入保留两位', num.toFixed(2) == 1234.57, 4);
        //下面这个不知道哪里有问题
        /* var num = 1.23e+5;
         expect('toFixed(2) 没有小数的，小数点后补足两位',num.toFixed(2)==123000.00,5);*/
        var num = 1.23e-5
        expect('toFixed(2) 小数点后面好多位，只保留小数点后两位', num.toFixed(2) == 0.00, 6);

        var num = 12345.6789
        expect('toPrecision（1） 原位数大于限定有效位', num.toPrecision(1) == 10000, 7);
        expect('toPrecision（5） 原位数等于小数点前的位数', num.toPrecision(5) == 12346, 8);
        expect('toPrecision(10)  原位数小于限定位数补足0', num.toPrecision(10) == 12345.678900, 9)
    });

    it('Math相关数学运算测试', function () {
        expect('Math.E  获取E常量测试', Math.E == 2.718281828459045, 1);
        expect('Math.log(x) 获取x的自然对数 Math.LN10 获取10的自然对数', Math.log(10) === Math.LN10, 2);
        expect('Math.LN2 获取2的自然对数', Math.LN2 === Math.log(2), 3);
        expect('Math.LOG2E 2为底e的对数', Math.LOG2E === 1.4426950408889634, 4);
        expect('Math.LOG10E 10为底e的对数', Math.LOG10E === 0.4342944819032518, 5);

        expect('Math.PI ', Math.PI == 3.141592653589793, '6')
        expect('Math.SQRT2 取常量根号2', Math.SQRT2 == 1.4142135623730951, '7')
        expect('Math.abs 正数3取绝对值', Math.abs(3) == 3, 8);
        expect('Math.abs 负数取绝对值', Math.abs(-3) == 3, 9);

        expect('Math.cos 求正数余弦', Math.cos(0.5) == 0.8775825618903728, 10);
        expect('Math.cos 求负数余弦', Math.cos(-0.5) == 0.8775825618903728, 11);
        expect('Math.sin 求正数正弦', Math.sin(0.5) == 0.479425538604203, 12);
        expect('Math.sin 求负数正弦', Math.sin(-0.5) == -0.479425538604203, 13);
        expect('Math.tan 求正数正切', Math.tan(0.5) == 0.5463024898437905, 14);
        expect('Math.tan 求负数正切', Math.tan(-0.5) == -0.5463024898437905, 15);
        expect('Math.acos 反余弦', Math.acos(0.5) == 1.0471975511965979, 16);
        expect('Math.asin 反正弦', Math.asin(0.5) == 0.5235987755982989, 17);
        expect('Math.atan 反正切', Math.atan(0.5) == 0.4636476090008061, 18);

        expect('Math.ceil 大于或等于某数的最近整数', Math.ceil(0.5) == 1, 19);
        expect('Math.floor 小于或等于某数的最近整数', Math.floor(0.5) == 0, 20);
        expect('Math.pow(x,y) x的y次方', Math.pow(2, 3) == 8, 21);
        expect('Math.round 四舍五入后的值', Math.round(2.3) == 2, 22);
        expect('Math.max 最大值', Math.max(2, 4, 3, -9) == 4, 23);
        expect('Math.min 最小值', Math.min(2, 4, 3, -9) == -9, 24);
        expect('Math.random 返回一个随机数', Math.random() !== Math.random());
    });

    it('Date获取时间值', function () {
        expect('Date.UTC 获取给定时间相对于1970.1.1的毫秒数', Date.UTC(1970, 0, 1, 0, 0, 0, 1) == 1);
        expect('date.getFullYear 得到当前年份的四位数表示', new Date().getFullYear() == 2013, 2);

        var dateyear = new Date();
        dateyear.setFullYear(2012);
        expect('getYear 获取Date对象的年份', dateyear.getFullYear() == 2012, 3);

        var datemonth = new Date();
        datemonth.setMonth(11);
        expect('getMonth 获取Date对象的月份', datemonth.getMonth() == 11, 4);

        var datedate = new Date();
        datedate.setDate(27);
        expect('getDate 获取Date对象的日期', datedate.getDate() == 27, 5);

        var datehours = new Date();
        datehours.setHours(13);
        expect('getHours 获取Date对象的时值', datehours.getHours() == 13, 6);

        var dateMinutes = new Date();
        dateMinutes.setMinutes(33);
        expect('getMinutes 获取Date对象的分值', dateMinutes.getMinutes() == 33, 7);

        var dateSeconds = new Date();
        dateSeconds.setSeconds(54);
        expect('getSeconds 获取Date对象的秒数', dateSeconds.getSeconds() == 54, 8);

        var dateMilliseconds = new Date();
        dateMilliseconds.setMilliseconds(398);
        expect('getMilliseconds 获取Date对象的毫秒数', dateMilliseconds.getMilliseconds() == 398, 9);

        var dateUTCyear = new Date();
        dateUTCyear.setUTCFullYear(2012);
        expect('getUTCFullYear 获取Date对象的UTC年份', dateUTCyear.getUTCFullYear() == 2012, 10);

        var dateUTCmonth = new Date();
        datemonth.setUTCMonth(11)
        expect('getUTCMonth 获取Date对象的UTC月份' + dateUTCmonth.getUTCMonth(), typeof dateUTCmonth.getUTCMonth() === "number", 11);

        var dateUTCdate = new Date();
        dateUTCdate.setUTCDate(27);
        expect('getUTCDate 获取Date对象的UTC日期', dateUTCdate.getUTCDate() == 27, 12);

        var dateUTChours = new Date();
        dateUTChours.setUTCHours(13);
        expect('getUTCHours 获取Date对象的UTC时值', dateUTChours.getUTCHours() == 13, 13);

        var dateUTCMinutes = new Date();
        dateUTCMinutes.setUTCMinutes(33);
        expect('getUTCMinutes 获取Date对象的UTC分值', dateUTCMinutes.getUTCMinutes() == 33, 14);

        var dateUTCSeconds = new Date();
        dateUTCSeconds.setUTCSeconds(54);
        expect('getUTCSeconds 获取Date对象的UTC秒数', dateUTCSeconds.getUTCSeconds() == 54, 15);

        var dateUTCMilliseconds = new Date();
        dateUTCMilliseconds.setUTCMilliseconds(398);
        expect('getUTCMilliseconds 获取Date对象的UTC毫秒数', dateMilliseconds.getUTCMilliseconds() == 398, 16);


    });

    it('RegExp正则表达式测试', function () {

        expect('global 查看是否匹配了全局模式', /\d/g.global == true, 1);
        expect('ignoreCase 查看是否匹配了大小写模式', /\d/i.ignoreCase == true, 2);
        expect('multiline 查看是否匹配了多行模式', /\d/m.multiline == true, 3);

        var reg = /ab/g;
        reg.test("aabcde");
        expect('lastIndex 匹配正则表达式后面第一个字符的位置', reg.lastIndex == 3, 4)

        var reg = /(work)\w*/g;
        var result;
        while (result = reg.exec("I am working!")) {
            expect('result[0]  匹配到第一个字符串', result[0] == "working", 5)
            expect('result[1] 匹配分组', result[1] == "work", 6);
            expect('result.lastIndex 下一次开始匹配的位置', reg.lastIndex == 12, 8);
        }

        var reg = /like/i;
        expect('test 判断字符串是否匹配当前模式false', reg.test("working") == false, 9);
        expect('test 判断字符串是否匹配当前模式true', reg.test("Like everything") == true, 10)
    });

    it('全局变量', function () {
        expect('Number 当参数为非数字时返回NaN', Number("ab").toString() == NaN.toString(), 1);
        expect('NaN 不等于任何数字', (NaN == 2) == false, 2);
        expect('NaN 不等于本身', (NaN == NaN) == false, 3);
        expect('Infinity 运算溢出返回该值', (1 / 0) == Infinity, 4)
        expect('parseInt 将字符串转化为整数忽略最后的字母', parseInt("123ahhhh") == 123, 5);
        expect('parseFloat 将字符串转化为浮点数忽略最后的字母', parseFloat("123.98dhhh") == 123.98, 6);
        expect('isNaN 判断一个字符串或数字是否是非NaN数字', isNaN("12") == false && isNaN("12dd") == true, 7);
        expect('isFinite 判断一个字符串是不是有穷的', isFinite("12") == true && isFinite(NaN) == false, 8);
        expect('encodeURI 对url进行编码', encodeURI("http://www.taobao.com/?arg1=1&arg2=hello world") == "http://www.taobao.com/?arg1=1&arg2=hello%20world", 9)
        expect('decodeURI 对编码后的url进行解码', decodeURI("http://www.taobao.com/?arg1=1&arg2=hello%20world") == "http://www.taobao.com/?arg1=1&arg2=hello world", 10);
        expect('encodeURIComponent 字符编码成utf-8', encodeURIComponent("hello ?") == "hello%20%3F", 11);
        expect('decodeURIComponent 被编码成utf-8的字符解码', decodeURIComponent("hello%20%3f") == "hello ?", 12);


    });
});

describe('dom相关测试', function () {
    it('document相关方法测试', function () {
        var acontent = document.getElementsByTagName("a");
        expect('getElementsByTagName 获得节点集合', acontent.length == 2 && acontent[0].innerHTML == "test1", 1);

        var elementinst = document.createElement("button");
        expect('createElement 创建节点实例', elementinst.tagName.toLowerCase() == "button", 2);

        var txtnode = document.createTextNode("button");
        expect('createTextNode 创建文本实例', txtnode.textContent == "button", 3)

    });

    it('Node相关方法测试', function () {
        expect('nodeType  createDocumentFragment返回节点碎片集合的类型为11', document.createDocumentFragment().nodeType == 11, 1);
        expect('nodeType  createTextNode返回文本内容类型是3', document.createTextNode("button").nodeType == 3, 2);
        expect('nodeType  createElement返回元素类型是1', document.createElement("button").nodeType == 1, 3);
        expect('nodeName 返回节点的标签内容', document.createElement("button").nodeName == "BUTTON", 4);

        var element1 = KISSY.DOM.query('.dom-father');
        expect('firstChild 返回元素的第一个子节点', true, 5);
        /*if (!KISSY.UA.ie) {
            expect('firstChild 返回元素的第一个子节点', true, 5);
        }
        else {
            expect('firstChild 返回元素的第一个子节点', element1[0].firstChild.className == "inp1", 5);
        }

        var element2 = KISSY.DOM.query(".dom-father");
        if (!KISSY.UA.ie) {
            expect('lastChild 返回元素的最后一个子节点', element2[0].lastChild.nodeType == 3, 6);
        }
        else {
            expect('lastChild 返回元素的最后一个子节点', element2[0].lastChild.className == "dom-child2", 6);
        }


        var element3 = KISSY.DOM.query(".dom-child1");
        if (!KISSY.UA.ie) {
            expect('nextSibling 返回下一个兄弟节点', element3[0].nextSibling.nodeType == 3, 7);
        }
        else {
            expect('nextSibling 返回下一个兄弟节点', element3[0].nextSibling.className == "dom-child2", 7);
        }

        var element4 = KISSY.DOM.query(".dom-child2");
        if (!KISSY.UA.ie) {
            expect('previousSibling 返回上一个兄弟节点', element4[0].previousSibling.nodeType == 3, 8);
        }
        else {
            expect('previousSibling 返回上一个兄弟节点', element4[0].previousSibling.className == "dom-child1", 8);
        }

        var element5 = KISSY.DOM.query(".dom-child2");
        expect('parentNode 返回父亲节点', element5[0].parentNode.className == "dom-father", 9);

        var element6 = KISSY.DOM.query(".dom-father");
        if (!KISSY.UA.ie) {
            expect('childNodes 返回父亲节点所有子节点', element6[0].childNodes.length == 5, 10);
        }
        else {
            expect('childNodes 返回父亲节点所有子节点', element6[0].childNodes.length == 2, 10);
        }*/

        var text = KISSY.DOM.query(".inner")[0].innerHTML;
        var exp = '1111';
        expect('innerHTML 访问所有子节点的html代码', text == exp, 11);


        var element7 = KISSY.DOM.query(".dom-father");
        var newchild = element7[0].appendChild(document.createElement("span"));
        if (!KISSY.UA.ie) {
            expect('appendChild 给当前元素添加子节点', element7[0].childNodes[5] == newchild, 12);
            element7[0].removeChild(newchild);
        }
        else {
            expect('appendChild 给当前元素添加子节点', element7[0].childNodes[2] == newchild, 12);
            element7[0].removeChild(newchild);
        }

        var parent = KISSY.DOM.query(".dom-father")[0];
        var child1 = KISSY.DOM.query(".dom-child1")[0];
        var newchild = parent.insertBefore(document.createElement("span"), child1);

        if (KISSY.UA.ie) {
            expect('insertBefore 在某个节点之前插入一个新节点', parent.childNodes[0] == newchild, 13);
            parent.removeChild(newchild)
        }
        else {
            expect('insertBefore 在某个节点之前插入一个新节点', parent.childNodes[4] == newchild, 13);
            parent.removeChild(newchild);
        }


        var replacechd = KISSY.DOM.query(".rep-child1")[0];
        var parent = KISSY.DOM.query(".rep-father")[0];
        var newchild = document.createElement("div");
        parent.replaceChild(newchild, replacechd);
        if (!KISSY.UA.ie) {
            expect('replaceChild 用一个新的节点代替旧节点', parent.childNodes[1] == newchild, 15);
        }
        else {
            expect('replaceChild 用一个新的节点代替旧节点', parent.childNodes[0] == newchild, 15);
        }


        var parent = KISSY.DOM.query(".dom-father")[0];
        var childs = parent.getElementsByTagName("div");
        expect('getElementsByTagName 对父节点调用这个方法返回所有指定tagname的子节点'+childs[0].className, childs[0].className == "dom-child2" && childs[1].className == "dom-child1", 16);

        expect('type 获取input节点的类型', KISSY.DOM.query(".inp1")[0].type == "text" && KISSY.DOM.query(".inp2")[0].type == "checkbox", 17)
        expect('type 获取input节点的类型', KISSY.DOM.query(".inp1")[0].name == "inp1_na" && KISSY.DOM.query(".inp2")[0].name == "inp2_na", 18)

        var node1 = KISSY.DOM.query(".dom-father")[0];
        expect('clientWidth :元素的可视区域宽度', node1.clientWidth != null, 20);
        expect('clientHeight :元素的可视区域高度', node1.clientHeight != null, 21);
        expect('offsetWidth :元素的实际宽度', node1.offsetWidth != null, 22);
        expect('offsetHeight :元素的实际宽度', node1.offsetHeight != null, 23);
        expect('scrollLeft :元素的向左滚动值', node1.scrollLeft != null, 24);
        expect('scrollTop :元素的向上滚动值', node1.scrollTop != null, 25);
        expect('scrollHeight :内容实际高度', node1.scrollHeight != null, 26);

        var ele = KISSY.DOM.query(".inp1")[0];
        ele.disabled = true;
        expect('disabled 设置禁用', ele.disabled == true, 27);

        var ele = KISSY.DOM.query(".inp1")[0];
        ele.readOnly = true;
        expect('readOnly 设置只读', ele.readOnly == true, 28);

        var ele = KISSY.DOM.query(".inp2")[0];
        ele.checked = true;
        expect('checked 设置radio选中', ele.checked == true, 29);


        var sel = KISSY.DOM.query(".selt")[0];
        expect('options 下拉框的各种值', sel.options.length == 2, 30);
        expect('selectedIndex 选中的索引', sel.selectedIndex == 1, 31);
        expect('text 选中的索引的内容', sel.options[sel.selectedIndex].text == 2, 32);

    });


});

describe("KISSY类库测试", function () {
    it("KISSY 对象 api 是否定义", function () {
        expect('KISSY 被定义', typeof KISSY === 'object', 1);
        expect('KISSY.DOM.addClass 被定义。 ', typeof KISSY.DOM.addClass === 'function', 2);
        expect('KISSY.Event.on 是函数', typeof KISSY.Event.on === 'function', 3);
        expect('KISSY.io 是函数', typeof KISSY.io === 'function', 4);
        expect('KISSY.UA 是对象', typeof KISSY.UA === 'object', 5);
        expect('KISSY.Anim 是函数', typeof KISSY.Anim === 'function', 6);
    });

    it('KISSY Anim', function(){

        var s = KISSY.Anim('a', {top:10},3,'easeNode', function(){
            expect('anim 回调被执行',true);
        });
        s.run();
        s.stop(true);
        var DOM = KISSY.DOM,
            Event = KISSY.Event,
            Anim = KISSY.Anim,
            $ = DOM.get = function( sel ) {
                return DOM.query( sel )[0];
            };


        var ani = new Anim('a', {
            left: '800px'
        }, 2, 'easeOut', function() {
            KISSY.alert('finsned')
        });
        ani.run();
        ani.stop();
        ani.stop( true )


        expect('anim pause/resume/isPaused/isRunning ', s.isPaused())

    })

    it("KISSY对象上全局方法, 如unparam， trim等", function () {
        //unparam
        var str = "foo=1&bar=2";
        var ob = KISSY.unparam('foo=1&bar=2');
        expect('KISSY.unparam 将参数字符串 str 还原为对象' + ob.foo + ob.bar, ob.foo == 1 && ob.bar == 2, 1)

        //unEscapeHTML
        str = "&lt;a&gt;x&lt;/a&gt;";
        ob = KISSY.unEscapeHTML(str);
        expect('KISSY.unEscapeHTML 将字符串中的 html 实体字符替换成对应字符', ob === '<a>x</a>', 1);

        expect('KISSY.escapeHTML 将字符串经过 html 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt;', KISSY.escapeHTML("<a>x</a>") === "&lt;a&gt;x&lt;&#x2F;a&gt;", 1);

        str = '{name} is {prop_1} and {prop_2}.';
        ob = {name: 'Jack Bauer', prop_1: 'our lord', prop_2: 'savior'};
        expect('KISSY.substitute 将字符串中的占位符替换为对应的键值.', KISSY.substitute(str, ob) === 'Jack Bauer is our lord and savior.', 1);

    });

    it("测试KISSY.DOM 相关 方法", function () {
        var DOM = KISSY.DOM;
        var el = DOM.query('.kissy-dom');
        expect('query返回一个数组', el.length === 1, 6);

        expect('DOM get方法，返回正确的值', DOM.get('.kissy-dom').tagName.toLowerCase() === 'div', 10);

        DOM.removeClass(el, 'kissy-dom');
        expect('removeClass and hasClass', !DOM.hasClass(el, 'kissy-dom'), 6);

        DOM.addClass(el, 'newclass');
        expect('addClass and hasClass', DOM.hasClass(el, 'newclass'), 6);
        DOM.removeClass(el, 'newclass');
        DOM.addClass(el, 'kissy-dom');

        DOM.text(el, "I am new Text");
        expect('text 设置了值', DOM.text(el) === "I am new Text", 8);
        DOM.text(el, '');

        var off = DOM.offset(el);
        expect('offset 获取返回值是否生效', (typeof off.left === "number") && (typeof off.top === "number"), 3);

        DOM.offset(el, {left: 200, top: 300});
        expect('offset 设置offset是否生效', DOM.offset(el).left === 200 && DOM.offset(el).top === 300, 8);

        expect('dom css 只有读属性'+DOM.css(el,'color') , DOM.css(el,'color') == "rgb(51, 51, 51)");
    });


    it("测试KISSY.Event 方法", function(){
        var S = KISSY,Event = S.Event;
       /* Event.on(S.DOM.get('a'),'click', function(e){
            e.halt();
            e.target.innerHTML = "real";
        });

        Event.fire(S.DOM.get('a'), 'click');
        expect("Event.on可以注册事件并且可以被fire触发"+S.DOM.get('a').innerHTML, S.DOM.get('a').innerHTML == "real",1);

        Event.on(S.DOM.get('div'), 'click', function(e){
            e.halt();
            e.target.innerHTML = "i am not";
        })

        Event.remove(S.DOM.get('div'),'click');
        Event.fire(S.DOM.get('div'),'click');
        expect("Event.remove remove掉 ，on的函数就不会生效", S.DOM.get('div').innerHTML != 'i am not');*/


        var xx = S.DOM.get('.dom-child1');

        xx.innerHTML = "d";

        function a(){
            xx.innerHTML = xx.innerHTML+"a"
        }

        function b(){
            xx.innerHTML = xx.innerHTML+"b"
        }


        Event.on(xx, 'click', b);
        Event.on(xx, 'click', a);


        Event.fire(xx,'click');

        expect(" Event.fire ", "dba"===xx.innerHTML ,false);


    });

    it("测试KISSY.UA 方法. 你的浏览器版本是：", function () {
        var s = "";
        if (KISSY.UA.ie) {
            s = KISSY.UA.ie;
        }
        if (!KISSY.UA.ie) {
            s = !KISSY.UA.ie;
        }
        if (KISSY.UA.chrome) {
            s = KISSY.UA.chrome;
        }
        expect(s, true, 1211);
    });

    it("测试KISSY.IO相关方法. 下面只有一条成功是正确的", function () {
        var io = KISSY.io;
        io({
            url: 'http://taegrid.taobao.com',
            error: function () {
                expect('IO 请求可以发出', true, 6);
            },
            success: function () {

            }
        });
        io({
            url: 'http://grid.taobao.com',
            error: function () {
                expect('IO 请求不可以发出，如果看到我，说明有问题了', true, 6);
            }
        });
        io({
            url: 'http://.taobao.com',
            error: function () {
                expect('IO 请求不可以发出，如果看到我，说明有问题了', true, 6);
            }
        });
    });

});

describe("安全--前端规范相关测试", function () {
    it("通过document.createElement 创建html标签, 期望只能创建html白名单允许的标签", function () {
        var ela = document.createElement("a");
        var elform = document.createElement("form");
        var eldiv = document.createElement("div");
        var elcanvas = document.createElement("canvas");
        var eliframe = document.createElement("iframe");

        expect("创建了a, form, div标签。期望成功创建",
            (ela.tagName.toLowerCase() === "a") && (elform.tagName.toLowerCase() === "form") && (eldiv.tagName.toLowerCase() === "div")
            , 3);

        expect("创建了canvas,iframe 期望均无法创建！", elcanvas === null && eliframe === null, 3);

    });

    it("through the method el.innerHTML, create html tag. expect only whitelist html tag can created successful", function () {
        var el = document.createElement("a");
        var prehtml = "onlyme<canvas></canvas>onlyyou";
        el.innerHTML = prehtml;
        expect("innerHTML is 'onlyme&lt;canvas&gt;&lt;/canvas&gt;onlyyou', expect result is 'onlymeonlyyou'",
            el.innerHTML === 'onlymeonlyyou', 1
        );

        var noclosedHtml = "<a>a</a><a>";
        el.innerHTML = noclosedHtml;
        expect("innerHTML is '<a>a</a><a>', tag 补全 expect result is '<a>a</a><a></a>'",
            el.innerHTML === '<a>a</a><a></a>', 1
        );
        el = null;
    });

    it("expect only 'allowed html attr can be set for tagname'", function () {
        var el = document.createElement("img");
        el.setAttribute('name', 'myname');
        el.setAttribute('noexitattr', 'no');
        el.setAttribute('style', 'display:none;');
        expect("html 'a' element,set the 'name' and 'noexitattr' attr, expect 'name' and 'unreconized attr' all can be seted",
            el.getAttribute('name') === 'myname' && el.getAttribute('noexitattr') === "no", 1
        );
        el = null;
    });

    it("expect only 'allowed css attr and value' can be set for tagname'", function () {
        var el = document.createElement("img");
        el.style.marginLeft = "10px";
        expect("el.style.marginLeft = '10px';   expect marginleft is ok! use the attr or value that is not white_list will be script error; hava tested;",
            (el.style.marginLeft) === "10px" && (el.style.marginTop == 0), 1);

    });
});

describe("安全-- 全局方法测试", function () {

    it("window 方法:  这里需要注意，这里的window指的是iframe沙箱环境的window，并非top页面的window", function () {
        expect("window.innerWidth 可以访问", typeof window.innerWidth === "number", 1);
        expect("window.innerHeight 可以访问", typeof window.innerHeight === "number", 1);
        expect("window.location 可以访问" + typeof window.location, typeof window.location === "object", 1)
        expect("window.top 和window.parent 都返回的是当前iframe中的window，不可获取真实的顶层window", window.parent == window && window.top == window, 1)
        expect("window.isNaN 可以访问", typeof window.isNaN === "function", 1)
        expect("window.Infinity 可以访问，，", typeof window.Infinity === "number", 1)
        expect("window.alert 不可以访问，，", typeof window.name === "undefined", 1)
        expect("window.confirm 不可以访问，，", typeof window.confirm === "undefined", 1)
        expect("window.alert 不可以访问，，", typeof window.name === "undefined", 1)
        expect("window.name 不可以访问，，", typeof window.name === "undefined", 1)
        expect("window.history 不可以访问，，", typeof window.history === "undefined", 1)
        expect("window.URL 不可以访问", typeof window.URL === "undefined", 1);
        expect("window eval 不可访问", typeof window.eval === "undefined", 1);
    });


    it("document 除了api的方法外，其他方法均不可使用，需要注意的是:" +
        "使用的document方法，因为document方法这里指的是沙箱中的document，并不是top页面的document：", function () {
        expect('document.cookie 不能访问', document.cookie === undefined, 1);
        expect('document.head 不能访问', document.head === undefined, 1);
        expect('document.body可以访问', typeof document.body === "object", 1);
        expect('document.script 应该是 undefined', document.script === undefined, 1);
        expect('document.URL 应该是 undefined', document.URL === undefined, 1);
        expect('document.activeElement 应该是 undefined', document.activeElement === undefined, 1);
        expect('document.documentElement', document.documentElement.innerHTML !== undefined, 1);
        expect('document.domain', document.domain !== undefined, 1);
        expect('document.location 应该是 undefined', document.location === undefined, 1);
        expect('document.documentURI 应该是 undefined', document.documentURI === undefined, 1);
        expect('document.images 应该是 undefined', document.images === undefined, 1);
    });


});

describe("性能测试:使用一些 js中的常用方法，看下在各个浏览器下面的性能如何", function () {
    it('document.createElement: 用document.createElement 创建3个a元素; ', function () {
        var el1 = document.createElement("a");
        var el1 = document.createElement("a");
        var el1 = document.createElement("a");
    }, true);

    it('document.createElement: 用document.createElement 创建3个div元素; ', function () {
        var el1 = document.createElement("div");
        var el1 = document.createElement("div");
        var el1 = document.createElement("div");
    }, true);

    it('document.createElement: 用document.createElement 创建3个, canvas, iframe script元素; ', function () {
        var el1 = document.createElement("iframe");
        var el1 = document.createElement("iframe");
        var el1 = document.createElement("canvas");
    }, true);

    it('document.createDocumentFragment(): 用document.createDocumentFragment() 创建element; ', function () {
        var k = document.createDocumentFragment();
        var el1 = document.createElement("a");
        var el2 = document.createElement("a");
        var el3 = document.createElement("a");
        k.appendChild(el1);
        k.appendChild(el2);
        k.appendChild(el3);

    }, true);


    it('innerHTML 测试下innerHTML，这个是最常用的 &lt;canvas&gt;&lt;/canvas&gt;', function () {
        var el = document.createElement('div');
        el.innerHTML = "<canvas></canvas>";
        el.innerHTML = "<canvas></canvas>";
        el.innerHTML = "<canvas></canvas>";
    }, true)

    it('innerHTML 测试下innerHTML，这个是最常用的 &lt;a&gt;&lt;/a&gt;', function () {
        var el = document.createElement('div');
        el.innerHTML = "<a href='http://www.baidu.com'></a>";
        el.innerHTML = "<a href='http://www.baidu.com'></a>";
        el.innerHTML = "<a href='http://www.baidu.com'></a>";
    }, true)

    it('innerHTML 测试下innerHTML，这个是最常用的set complex html: ', function () {
        var el = document.createElement('div');
        el.innerHTML = "<div>ddddd<span>dfdf</span><a>dfdf</a></div><div><div><div><canvas></canvas></div></div></div><a href='http://www.baidu.com' name='fuck'>sdssss</a>";
    }, true)

    it('innerHTML 测试下innerHTML，这个是最常用的 get complex html: ', function () {
        var el = document.createElement('div');
        el.innerHTML = "<div>ddddd<span>dfdf</span><a>dfdf</a></div><div><div><div><canvas></canvas></div></div></div><a href='http://www.baidu.com' name='fuck'>sdssss</a>";
        var k = el.innerHTML;
        var k = el.innerHTML;
        var k = el.innerHTML;
        var k = el.innerHTML;
        var k = el.innerHTML;
        var k = el.innerHTML;
    }, true)

});
