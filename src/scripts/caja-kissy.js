/*
 Copyright 2013, caja for kissy lib
 build time: 日期
 */

/**
 * The KISSY 全局对象.
 * 作者石霸
 * @class KISSY
 */
var KISSY = (function () {


})()

/**
 * 输出调试信息
 msg (string) – 调试信息
 cat (string) – 调试信息类别. 可以取 info, warn, error, dir, time 等 console 对象的方法名, 默认为 log.
 src (string) – 调试代码所在的源信息
 */
KISSY.log = function(){};

/**
 将参数字符串 str 还原为对象.
 Parameters:
     o (object) – 参数字符串
     seq (string) – 参数间分隔符, 默认 &
     eq (string) – 参数与参数值间的分割符, 默认 =
 Returns: 参数的对象表示
 Return type: Object
 */
KISSY.unparam = function(){};

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
KISSY.param = function(){};

/**
 将字符串中的 html 实体字符替换成对应字符
 Parameters:	str (string) – 包含 html 实体字符的字符串
 Returns:	替换实体字符后的字符串
 Return type:	string
 */
KISSY.unEscapeHTML = function(){};

/**
 将字符串经过 html 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt;
 Parameters:	str (string) – 要显示在页面中的真实内容
 Returns:	经过 html 转义后的字符串
 Return type:	string
 */
KISSY.escapeHTML = function(){};

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
KISSY.substitute = function(){};

/**
 *
 * DOM 对象，包含对对DOM的常用操作
 */
KISSY.DOM = function(){};

/**
 * 获取符合选择器的第一个元素. 相当于调用 query(selector,context)[0]
 */
KISSY.DOM.get = function(){};

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
KISSY.DOM.query = function(){};

/**
 *
 */
KISSY.DOM.get = function(){};

/**
 *
 */
KISSY.DOM.get = function(){};
/**
 *
 */
KISSY.DOM.get = function(){};

/**
 *
 */
KISSY.DOM.get = function(){};

/**
 *
 */
KISSY.DOM.get = function(){};

/**
 *
 */
KISSY.DOM.get = function(){};

/**
 *
 */
KISSY.DOM.get = function(){};


