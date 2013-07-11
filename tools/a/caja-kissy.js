/*
 Copyright 2013, caja for kissy lib
 build time: 日期
 */

/**
 * The KISSY 全局对象.在caja中进行封装
 * 作者石霸
 * @class KISSY
 */
var KISSY = {}

/**
 * 输出调试信息
 * @param  msg – 调试信息
 * @param [cat] – 调试信息类别.
 * @param [src]– 调试代码所在的源信息
 */
KISSY.log = function (msg, cat, src) {
};

/**
 将参数字符串 str 还原为对象.
 Parameters:
 o (object) – 参数字符串
 seq (string) – 参数间分隔符, 默认 &
 eq (string) – 参数与参数值间的分割符, 默认 =
 Returns: 参数的对象表示
 Return type: Object
 */
KISSY.unparam = function () {
};

/**
 将对象 o 转换为参数字符串, 用于发送 http 请求.
 Parameters:
 o (object) – 参数键值对对象
 seq (string) – 参数间分隔符, 默认 &
 eq (string) – 参数与参数值间的分隔符, 默认 =
 arr (boolean) – 参数值为数组时, 参数键是否加 [] 即 %5B%5D , 默认 true
 Returns: 可用于发送请求的参数字符串
 Return type: string
 */
KISSY.param = function () {
};

/**
 将字符串中的 html 实体字符替换成对应字符
 Parameters:    str (string) – 包含 html 实体字符的字符串
 Returns:    替换实体字符后的字符串
 Return type:    string
 */
KISSY.unEscapeHTML = function () {
};

/**
 将字符串经过 html 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt;
 Parameters:    str (string) – 要显示在页面中的真实内容
 Returns:    经过 html 转义后的字符串
 Return type:    string
 */
KISSY.escapeHTML = function () {
};

/**
 将字符串中的占位符替换为对应的键值.
 Parameters:
 str (String) – 包含数据占位符的模板字符串, 占位符用 {} 包起来.
 o (Object) – 数据
 Returns:
 将模板和数据结合起来的最终字符串

 Return type:
 String
 */
KISSY.substitute = function () {
};

/**
 *
 * DOM 对象，包含对对DOM的常用操作
 */
KISSY.DOM = function () {
};

/**
 * 获取符合选择器的第一个元素. 相当于调用 query(selector,context)[0]
 */
KISSY.DOM.get = function () {
};

/**
 获取符合选择器的所有元素.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 context (string|HTMLCollection|Array<HTMLElement>) –
 选择器参考上下文,.

 context 限制同 selector 相同.

 Returns:
 符合选择器字符串的 dom 节点数组
 */
KISSY.DOM.query = function () {
};

/**
 * String text ( selector )
 *获取符合选择器的第一个元素所包含的文本值.
 Parameters:    selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 Returns:    获取符合选择器的第一个元素所包含的文本值. 无值时, 返回空字符串.

 void text ( selector, value )
 给符合选择器的所有元素设置文本值.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 value (string) – 将要设置的文本值

 */
KISSY.DOM.text = function () {
};

/**
 *Object offset ( selector )
 获取符合选择器的第一个元素相对页面文档左上角的偏移值.
 Parameters:    selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 Returns:    相对页面文档左上角的偏移值, 包括两个属性
 Return type:    Object
 left
 {Number} - 相对页面文档左上角的横坐标

 top
 {Number} - 相对页面文档左上角的纵坐标

 void offset ( selector, value )
 给符合选择器的所有元素设置偏移值.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 value (object) – 偏移对象, 包括两个属性 left ,``top`` , 格式同获取偏移的返回值.
 */
KISSY.DOM.offset = function () {
};
/**
 *Boolean hasClass ( selector , value )
 判断符合选择器的所有元素中是否有某个元素含有特定 class.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 value (string) – 样式类 class, 多个用空格分隔, 表示同时包含多个样式类
 Returns:
 是否符合选择器的元素中存在某个元素含有特定样式类 value

 Return type:
 Boolean
 */
KISSY.DOM.hasClass = function () {
};

/**
 *void addClass ( selector , value )
 给符合选择器的所有元素添加指定 class.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 value (string) – 样式类 class, 多个用空格分隔
 */
KISSY.DOM.addClass = function () {
};

/**
 *void removeClass ( selector , value )
 给符合选择器的所有元素移除指定 class.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 value (string) – 样式类 class, 多个用空格分隔
 */
KISSY.DOM.removeClass = function () {
};

/**
 *void toggleClass ( selector, value )
 操作符合选择器的所有元素, 如果存在值为 value 的 class, 则移除掉, 反之添加.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 value (string) – 样式类 class, 多个用空格分隔 , 需要 toggle 的样式类
 */
KISSY.DOM.toggleClass = function () {
};

/**
 *void replaceClass ( selector, oldClassName, newClassName )
 将符合选择器的所有元素的老 class 替换为新 class.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 oldClassName (string) – 样式类 class, 多个用空格分隔 , 需要删除的样式类
 newClassName (string) – 样式类 class, 多个用空格分隔 , 需要添加的样式类
 */
KISSY.DOM.replaceClass = function () {
};

/**
 String|undefined data ( selector [ , name ] )
 获取符合选择器的第一个元素的扩展属性(expando).
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 name (string) – 扩展属性名称
 Returns:
 对应扩展属性名的属性值, 如果不存在返回 undefined
 如不指定扩展属性名, 则取得所有扩展属性键值对象 , 如果当前还没设置过扩展属性, 则返回空对象, 可以直接在该空对象上设置
 void data ( selector, name, data )
 给符合选择器的所有元素的扩展属性(expando).设置扩展属性 name 为 data.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 name (string) – 扩展属性名称
 value – 扩展属性值
 void data ( selector, kv )
 给符合选择器的所有元素设置扩展属性(expando).
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 kv (object) – 扩展属性名与扩展属性值的键值对
 */
KISSY.DOM.data = function () {
};

/**
 Boolean hasData ( selector [ , name ] )
 判断是否符合选择器的所有元素中的一个存在对应的扩展属性( expando )值.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 name (string) – 扩展属性名称.如果指定 name, 则判断是否存在指定的扩展属性值. 否则判断是否存在任意扩展属性值
 Returns:
 是否具有扩展属性.

 Return type:
 Boolean
 */
KISSY.DOM.hasData = function () {
};


/**
 void removeData ( selector [ , name ] )
 将符合选择器的所有元素的对应扩展属性( expando )删除.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 name (string) – 扩展属性名称. 如果指定 name, 则只删除名为 name 的 expando . 如果不指定 name, 则删除元素的整个 expando .
 */
KISSY.DOM.removeData = function () {
};

/**
 String attr ( selector, name )
 获取符合选择器的第一个元素的属性值.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 name (string) – 属性名称
 Returns:
 对应属性名的属性值
 */
KISSY.DOM.attr = function () {
};


/**
 Boolean hasAttr ( selector , attrName )
 判断符合选择器的所有元素中是否有某个元素含有特定属性.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 attrname (string) – 属性名称
 Returns:
 符合选择器的所有元素中是否有某个元素含有特定属性.

 Return type:
 Boolean
 */
KISSY.DOM.hasAttr = function () {
};

/**
 void removeAttr ( selector, name )
 移除符合选择器的所有元素的指定属性.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 name (string) – 属性名称
 */
KISSY.DOM.removeAttr = function () {
};

/**
 * 构建 io 请求并发送, 继承自 Promise .
 Parameters:    cfg (Object) – 用来配置请求的键值对对象. 所有的配置项都是可选的
 配置信息去这里看下吧 ： http://docs.kissyui.com/docs/html/api/core/ajax/io.html
 注意：只支持json或者jsonp请求
 */
KISSY.io = function () {
}

/**
 * 获得浏览器的user agent
 * 如KISSY.UA.ie ,如果ie 7 浏览器的话，那么返回7
 * http://docs.kissyui.com/docs/html/api/core/ua/
 */
KISSY.UA = function () {
}

/**
 * Event 事件注册接口，支持on，delegate, detach,fire
 */
KISSY.Event = function () {
}

/**
 *void on ( selector , eventType , fn [ , scope ] )
 为符合匹配的 dom 节点的相应事件添加事件处理器
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 eventType (string) – 包含一个或多个事件名称的字符串, 多个事件名以空格分开。 事件可以通过加点来表示分组，例如 “click.one” , “click.two”
 fn (function(eventObject)) – 当事件触发时的回调函数
 scope (object) – 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素

 Note
 不能在 object , embed , applet 元素上注册事件.
 */
KISSY.Event.on = function (selector, eventType, fn) {
}

/**
 * 和on是一样一样的
 */
KISSY.Event.add = function () {
}

/**
 * void delegate ( selector , eventType , filter , fn [ , scope ] )
 为符合匹配的 dom 节点的相应事件添加事件处理器, 并在该节点的子孙节点中匹配 filter 的节点上触发事件时调用.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 eventType (string) – 包含一个或多个事件名称的字符串, 多个事件名以空格分开
 filter (string) – 可参见 dom.filter() 的 filter 参数
 fn (function(eventObject)) – 当事件触发时的回调函数
 scope (object) – 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素
 */
KISSY.Event.delegate = function () {
}

/**
 * void detach ( selector [ , eventType , fn , scope ] )
 从符合匹配的 dom 节点中移去相应事件的事件处理器
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 eventType (string) – 包含一个或多个事件名称的字符串, 多个事件名以空格分开， 也可以包含事件分组，例如 “click.one” , ”.two” 等
 fn (function(eventObject)) – 绑定事件时的回调函数
 scope (object) – 绑定的事件处理器的对应 this 值
 */
KISSY.Event.detach = function () {
}

/**
 * 和detach一样一样滴
 */
KISSY.Event.remove = function () {
}

/**
 * Boolean fire ( selector , eventType [ , domEvent ] )
 执行符合匹配的 dom 节点的相应事件的事件处理器（并冒泡）和默认行为.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) – 字符串格式参见 KISSY selector
 eventType (string) – 包含一个或多个事件名称的字符串, 多个事件名以空格分开
 domEvent (object) – 模拟原生事件的一些属性值信息
 Returns:
 如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值
 */
KISSY.Event.fire = function () {
}

/**
 * 动画效果函数
 Anim (elem, props[, duration, easing, completeFn])
 得到绑定于某个 dom 节点的动画实例
 Parameters:
 elem (String|HTMLElement|KISSY.Node|window) – 作用动画的元素节点或窗口（窗口时仅支持 scrollTop/Left）.
 props (Object) –
 动画结束的 dom 样式值, 例如

 {
     width:"100px",
     height:"100px"
 }
 表示节点将从当前宽高经过动画平滑变化到宽 100px 与高 100px.

 也可以设置 scrollLeft 或者 scrollTop, 这时会直接对元素的滚动属性产生动画.
 duration (Number) – 默认为 1 , 动画持续时间, 以秒为单元.
 easing (String) – 默认为 ‘easeNone’ , 动画平滑函数, 可取值 “easeNone”,”easeIn”,”easeOut”,”easeBoth”,”easeInStrong”, “easeOutStrong”,”easeBothStrong”,”elasticIn”,”elasticOut”, “elasticBoth”,”backIn”,”backOut”,”backBoth”, “bounceIn”,”bounceOut”,”bounceBoth”. 效果预览, 可以参考 easing 可视化 .
 completeFn (function) – 动画到最后一帧后的回调函数.

 @return {Anim}
 */
KISSY.Anim = function () {
    this.isRuning = 1;
    this.isPaused = 1;
    this.run = 1;
    this.stop = 1;
    this.pause = 1;
    this.resume = 1;
    return Anim;
}

/**
 * node 包括 dom , event , anim 模块的所有功能, 推荐采用 Node 模块, 你只需要把 KISSY.all 看做 jquery 中的 $ 就可以了, 链式操作你会喜欢的！
 * 根据选择器字符串得到节点列表
 Parameters:
 selector (string) – 选择器字符串
 context (HTMLElement|Document|NodeList) –
 选择器上下文,

 格式参照 dom.query() ，增加了 NodeList 支持.

 Return type:
 NodeList

 NodeList all ( element )
 Parameters:    element (HTMLElement) – 包装成 NodeList 类型的原生 dom 节点
 Return type:    NodeList
 NodeList all ( elementArray )
 Parameters:    elementArray (Array<HTMLElement>|HTMLCollection) – 包装成 NodeList 类型的原生 dom 节点集合
 Return type:    NodeList
 NodeList all ( nodeList )
 Parameters:    nodeList (NodeList) – 克隆出一个新的 NodeList 对象
 Return type:    NodeList

 @return {NodeList}
 */
KISSY.all = function () {
    function NodeList() {
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_removeData = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_hasData = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_data = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_hasAttr = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_removeAttr = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_attr = function () {
        };

        /**
         *  和KISSY.all一样
         */
        this.all = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.fire = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_detach = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_delegate = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_on = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.outerHeight = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.outerWidth = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.innerHeight = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.innerWidth = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.contains = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.remove = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.contains = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_children = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_siblings = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_last = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_first = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_prev = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_next = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.scrollIntoView = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.offset = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.toggle = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.text = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.val = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.toggleClass = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.replaceClass = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.removeClass = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_addClass = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.hasClass = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.parent = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.replaceWith = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.empty = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.clone = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.test = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_filter = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.slideToggle = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.slideUp = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.slideDown = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.fadeToggle = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.fadeOut = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.fadeIn = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.toggle = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.hide = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.show = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.isPaused = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.isRunning = function () {
        };


        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.resume = function () {
        };


        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.pause = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.run = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.stop = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_animate = function () {
        };

        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_insertAfter = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_insertBefore = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_prependTo = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_appendTo = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.width = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.height = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.scrollLeft = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.scrollTop = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.slice = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.item = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_add = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.equals = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.end = function () {
        };
        /**
         * 可以参考anim，dom，event接口相关api。 这里api较多，建议直接参考kissy官方文档的node模块
         */
        this.c_getDOMNodes = function () {
        };

    }

    return NodeList
}

/**
 * JSON 模块，用来将字符串解析成json对象和将对象转化成字符串
 * @constructor
 */
KISSY.JSON = function () {
}

/**
 * parse
 Object parse ( text)
 将字符串解析为json对象，解析器
 Parameters:
 text (String) – 字符串
 Returns:
 {Object} - 解析之后返回传入数据的一个对象表示

 */
KISSY.JSON.parse = function (text) {
}

/**
 * stringify
 String stringify ( value[, replacer, space] )
 将json对象或者数组转化为字符串，序列化器
 Parameters:
 value (Object|array) – 要序列化的对象`


 returns:    {String} - 返回JSON字符串
 */
KISSY.JSON.stringify = function (value) {

}



