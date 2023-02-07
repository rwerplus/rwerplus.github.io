(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{346:function(t,a,d){"use strict";d.r(a);var o=d(3),s=Object(o.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{"data-nodeid":"1721"}},[t._v("JavaScript 在编程语言界是个异类，它和其他编程语言很不一样，JavaScript 可以在运行的时候动态地改变某个变量的类型。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1722"}},[t._v("比如你永远也没法想到像"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1849"}},[t._v("isTimeout")]),t._v("这样一个变量可以存在多少种类型，除了布尔值"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1851"}},[t._v("true")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1853"}},[t._v("false")]),t._v("，它还可能是"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1855"}},[t._v("undefined")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1857"}},[t._v("1")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1859"}},[t._v("0")]),t._v("、一个时间戳，甚至一个对象。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1723"}},[t._v("又或者你的代码跑异常了，打开浏览器开始断点，发现"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1862"}},[t._v("InfoList")]),t._v("这个变量第一次被赋值的时候是个数组"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1864"}},[t._v("[{name: 'test1', value: '11'}, {name: 'test2', value: '22'}]")]),t._v("，过了一会竟然变成了一个对象"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1866"}},[t._v("{test1:'11', test2: '22'}")])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1724"}},[t._v("除了变量可以在运行时被赋值为任何类型以外，JavaScript 中也能实现继承，但它不像 Java、C++、C# 这些编程语言一样基于类来实现继承，而是基于原型进行继承。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1725"}},[t._v("这是因为 JavaScript 中有个特殊的存在：对象。每个对象还都拥有一个原型对象，并可以从中继承方法和属性。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1726"}},[t._v("提到对象和原型，你曾经是否有过这些疑惑：")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"1727"}},[a("li",{attrs:{"data-nodeid":"1728"}},[a("p",{attrs:{"data-nodeid":"1729"}},[t._v("JavaScript 的函数怎么也是个对象？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1730"}},[a("p",{attrs:{"data-nodeid":"1731"}},[a("code",{attrs:{"data-backticks":"1","data-nodeid":"1871"}},[t._v("__proto__")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1873"}},[t._v("prototype")]),t._v("到底是啥关系？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1732"}},[a("p",{attrs:{"data-nodeid":"1733"}},[t._v("JavaScript 中对象是怎么实现继承的？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1734"}},[a("p",{attrs:{"data-nodeid":"1735"}},[t._v("JavaScript 是怎么访问对象的方法和属性的？")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1736"}},[t._v("下面我们一起结合问题，来探讨下 JavaScript 对象和继承。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"1737"}},[t._v("原型对象和对象是什么关系")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1738"}},[t._v("在 JavaScript 中，对象由一组或多组的属性和值组成：")]),t._v(" "),a("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"1739"}},[a("code",{attrs:{"data-language":"java"}},[t._v("{\n  key1: value1,\n  key2: value2,\n  key3: value3,\n}\n")])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1740"}},[t._v("在 JavaScript 中，对象的用途很是广泛，因为它的值既可以是原始类型（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1881"}},[t._v("number")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1883"}},[t._v("string")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1885"}},[t._v("boolean")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1887"}},[t._v("null")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1889"}},[t._v("undefined")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1891"}},[t._v("bigint")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1893"}},[t._v("symbol")]),t._v("），还可以是对象和函数。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1741"}},[t._v("不管是对象，还是函数和数组，它们都是"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1896"}},[t._v("Object")]),t._v("的实例，也就是说在 JavaScript 中，除了原始类型以外，其余都是对象。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1742"}},[t._v("这也就解答了疑惑 1：JavaScript 的函数怎么也是个对象？")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1743"}},[t._v("在 JavaScript 中，函数也是一种特殊的对象，它同样拥有属性和值。所有的函数会有一个特别的属性"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1900"}},[t._v("prototype")]),t._v("，该属性的值是一个对象，这个对象便是我们常说的“原型对象”。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1744"}},[t._v("我们可以在控制台打印一下这个属性：")]),t._v(" "),a("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"1745"}},[a("code",{attrs:{"data-language":"java"}},[a("span",{staticClass:"hljs-function"},[t._v("function "),a("span",{staticClass:"hljs-title"},[t._v("Person")]),a("span",{staticClass:"hljs-params"},[t._v("(name)")]),t._v(" ")]),t._v("{\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".name = name;\n}\nconsole.log(Person.prototype);\n")])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1746"}},[t._v("打印结果显示为：")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1747"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M01/34/06/CioPOWBwCzyAM-CAAAAKDg-SVug894.png",alt:"Drawing 0.png","data-nodeid":"1906"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"1748"}},[t._v("可以看到，该原型对象有两个属性："),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1908"}},[t._v("constructor")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1910"}},[t._v("__proto__")]),t._v("。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1749"}},[t._v("到这里，我们仿佛看到疑惑 “2："),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1913"}},[t._v("__proto__")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1915"}},[t._v("prototype")]),t._v("到底是啥关系？”的答案要出现了。在 JavaScript 中，"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1917"}},[t._v("__proto__")]),t._v("属性指向对象的原型对象，对于函数来说，它的原型对象便是"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1919"}},[t._v("prototype")]),t._v("。函数的原型对象"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1921"}},[t._v("prototype")]),t._v("有以下特点：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"1750"}},[a("li",{attrs:{"data-nodeid":"1751"}},[a("p",{attrs:{"data-nodeid":"1752"}},[t._v("默认情况下，所有函数的原型对象（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1924"}},[t._v("prototype")]),t._v("）都拥有"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1926"}},[t._v("constructor")]),t._v("属性，该属性指向与之关联的构造函数，在这里构造函数便是"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1928"}},[t._v("Person")]),t._v("函数；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1753"}},[a("p",{attrs:{"data-nodeid":"1754"}},[a("code",{attrs:{"data-backticks":"1","data-nodeid":"1930"}},[t._v("Person")]),t._v("函数的原型对象（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1932"}},[t._v("prototype")]),t._v("）同样拥有自己的原型对象，用"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1934"}},[t._v("__proto__")]),t._v("属性表示。前面说过，函数是"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1936"}},[t._v("Object")]),t._v("的实例，因此"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1938"}},[t._v("Person.prototype")]),t._v("的原型对象为"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1940"}},[t._v("Object.prototype。")])])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1755"}},[t._v("我们可以用这样一张图来描述"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1942"}},[t._v("prototype")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1944"}},[t._v("__proto__")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1946"}},[t._v("constructor")]),t._v("三个属性的关系：")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1756"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/39/C6/Cgp9HWB87hmAPbFxAACJvyE_nJI526.png",alt:"图片1.png","data-nodeid":"1950"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"1757"}},[t._v("从这个图中，我们可以找到这样的关系：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"1758"}},[a("li",{attrs:{"data-nodeid":"1759"}},[a("p",{attrs:{"data-nodeid":"1760"}},[t._v("在 JavaScript 中，"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1953"}},[t._v("__proto__")]),t._v("属性指向对象的原型对象；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1761"}},[a("p",{attrs:{"data-nodeid":"1762"}},[t._v("对于函数来说，每个函数都有一个"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1956"}},[t._v("prototype")]),t._v("属性，该属性为该函数的原型对象。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1763"}},[t._v("这是否就是疑惑 2 的完整答案呢？并不全是，在 JavaScript 中还可以通过"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1959"}},[t._v("prototype")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1961"}},[t._v("__proto__")]),t._v("实现继承。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"1764"}},[t._v("使用 prototype 和 "),a("strong",{attrs:{"data-nodeid":"1968"}},[t._v("proto")]),t._v(" 实现继承")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1765"}},[t._v("前面我们说过，对象之所以使用广泛，是因为对象的属性值可以为任意类型。因此，属性的值同样可以为另外一个对象，这意味着 JavaScript 可以这么做：通过将对象 A 的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1970"}},[t._v("__proto__")]),t._v("属性赋值为对象 B，即"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1972"}},[t._v("A.__proto__ = B")]),t._v("，此时使用"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1974"}},[t._v("A.__proto__")]),t._v("便可以访问 B 的属性和方法。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1766"}},[t._v("这样，JavaScript 可以在两个对象之间创建一个关联，使得一个对象可以访问另一个对象的属性和方法，从而实现了继承，此时疑惑 “3. JavaScript 中对象是怎么实现继承的？”解答完毕。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1767"}},[t._v("那么，JavaScript 又是怎样使用"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1978"}},[t._v("prototype")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1980"}},[t._v("__proto__")]),t._v("实现继承的呢？")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1768"}},[t._v("继续以"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1983"}},[t._v("Person")]),t._v("为例，当我们使用"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1985"}},[t._v("new Person()")]),t._v("创建对象时，JavaScript 就会创建构造函数"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1987"}},[t._v("Person")]),t._v("的实例，比如这里我们创建了一个叫“Lily”的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1989"}},[t._v("Person")]),t._v("：")]),t._v(" "),a("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"1769"}},[a("code",{attrs:{"data-language":"java"}},[a("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" lily = "),a("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" Person("),a("span",{staticClass:"hljs-string"},[t._v('"Lily"')]),t._v(");\n")])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1770"}},[t._v("上述这段代码在运行时，JavaScript 引擎通过将"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1992"}},[t._v("Person")]),t._v("的原型对象"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1994"}},[t._v("prototype")]),t._v("赋值给实例对象"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1996"}},[t._v("lily")]),t._v("的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"1998"}},[t._v("__proto__")]),t._v("属性，实现了"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2000"}},[t._v("lily")]),t._v("对"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2002"}},[t._v("Person")]),t._v("的继承，即执行了以下代码：")]),t._v(" "),a("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"1771"}},[a("code",{attrs:{"data-language":"java"}},[a("span",{staticClass:"hljs-comment"},[t._v("// 实际上 JavaScript 引擎执行了以下代码")]),t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" lily = {};\nlily.__proto__ = Person.prototype;\nPerson.call(lily, "),a("span",{staticClass:"hljs-string"},[t._v('"Lily"')]),t._v(");\n")])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1772"}},[t._v("我们来打印一下"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2005"}},[t._v("lily")]),t._v("实例：")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1773"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/33/FE/Cgp9HWBwC56AVE8iAAAQagv5qXA279.png",alt:"Drawing 3.png","data-nodeid":"2009"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"1774"}},[t._v("可以看到，"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2011"}},[t._v("lily")]),t._v("作为"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2013"}},[t._v("Person")]),t._v("的实例对象，它的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2015"}},[t._v("__proto__")]),t._v("指向了"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2017"}},[t._v("Person")]),t._v("的原型对象，即"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2019"}},[t._v("Person.prototype")]),t._v("。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1775"}},[t._v("这时，我们再补充下上图中的关系：")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1776"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/39/CF/CioPOWB87iuAaqLIAADOJoaQI4k669.png",alt:"图片2.png","data-nodeid":"2024"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"1777"}},[t._v("从这幅图中，我们可以清晰地看到构造函数和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2026"}},[t._v("constructor")]),t._v("属性、原型对象（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2028"}},[t._v("prototype")]),t._v("）和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2030"}},[t._v("__proto__")]),t._v("、实例对象之间的关系，这是很多初学者容易搞混的。根据这张图，我们可以得到以下的关系：")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"1778"}},[a("li",{attrs:{"data-nodeid":"1779"}},[a("p",{attrs:{"data-nodeid":"1780"}},[t._v("每个函数的原型对象（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2033"}},[t._v("Person.prototype")]),t._v("）都拥有"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2035"}},[t._v("constructor")]),t._v("属性，指向该原型对象的构造函数（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2037"}},[t._v("Person")]),t._v("）；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1781"}},[a("p",{attrs:{"data-nodeid":"1782"}},[t._v("使用构造函数（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2040"}},[t._v("new Person()")]),t._v("）可以创建对象，创建的对象称为实例对象（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2042"}},[t._v("lily")]),t._v("）；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1783"}},[a("p",{attrs:{"data-nodeid":"1784"}},[t._v("实例对象通过将"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2045"}},[t._v("__proto__")]),t._v("属性指向构造函数的原型对象（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2047"}},[t._v("Person.prototype")]),t._v("），实现了该原型对象的继承。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1785"}},[t._v("那么现在，关于疑惑 2 中"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2050"}},[t._v("__proto__")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2052"}},[t._v("prototype")]),t._v("的关系，我们可以得到这样的答案：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"1786"}},[a("li",{attrs:{"data-nodeid":"1787"}},[a("p",{attrs:{"data-nodeid":"1788"}},[t._v("每个对象都有"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2055"}},[t._v("__proto__")]),t._v("属性来标识自己所继承的原型对象，但只有函数才有"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2057"}},[t._v("prototype")]),t._v("属性；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1789"}},[a("p",{attrs:{"data-nodeid":"1790"}},[t._v("对于函数来说，每个函数都有一个"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2060"}},[t._v("prototype")]),t._v("属性，该属性为该函数的原型对象；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1791"}},[a("p",{attrs:{"data-nodeid":"1792"}},[t._v("通过将实例对象的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2063"}},[t._v("__proto__")]),t._v("属性赋值为其构造函数的原型对象"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2065"}},[t._v("prototype")]),t._v("，JavaScript 可以使用构造函数创建对象的方式，来实现继承。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1793"}},[t._v("现在我们知道，一个对象可通过"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2068"}},[t._v("__proto__")]),t._v("访问原型对象上的属性和方法，而该原型同样也可通过"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2070"}},[t._v("__proto__")]),t._v("访问它的原型对象，这样我们就在实例和原型之间构造了一条原型链。这里我用红色的线将"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2072"}},[t._v("lily")]),t._v("实例的原型链标了出来。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1794"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M01/39/CF/CioPOWB87jeAG0OeAADy6IPqiP8527.png",alt:"图片3.png","data-nodeid":"2076"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"1795"}},[t._v("下面一起来进行疑惑 4 “JavaScript 是怎么访问对象的方法和属性的？”的解答：在 JavaScript 中，是通过遍历原型链的方式，来访问对象的方法和属性。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"1796"}},[t._v("通过原型链访问对象的方法和属性")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1797"}},[t._v("当 JavaScript 试图访问一个对象的属性时，会基于原型链进行查找。查找的过程是这样的：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"1798"}},[a("li",{attrs:{"data-nodeid":"1799"}},[a("p",{attrs:{"data-nodeid":"1800"}},[t._v("首先会优先在该对象上搜寻。如果找不到，还会依次层层向上搜索该对象的原型对象、该对象的原型对象的原型对象等（套娃告警）；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1801"}},[a("p",{attrs:{"data-nodeid":"1802"}},[t._v("JavaScript 中的所有对象都来自"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2082"}},[t._v("Object")]),t._v("，"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2084"}},[t._v("Object.prototype.__proto__ === null")]),t._v("。"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2086"}},[t._v("null")]),t._v("没有原型，并作为这个原型链中的最后一个环节；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1803"}},[a("p",{attrs:{"data-nodeid":"1804"}},[t._v("JavaScript 会遍历访问对象的整个原型链，如果最终依然找不到，此时会认为该对象的属性值为"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2089"}},[t._v("undefined")]),t._v("。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1805"}},[t._v("我们可以通过一个具体的例子，来表示基于原型链的对象属性的访问过程，在该例子中我们构建了一条对象的原型链，并进行属性值的访问：")]),t._v(" "),a("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"1806"}},[a("code",{attrs:{"data-language":"java"}},[a("span",{staticClass:"hljs-comment"},[t._v("// 让我们假设我们有一个对象 o, 其有自己的属性 a 和 b：")]),t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" o = {a: "),a("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(", b: "),a("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("};\n"),a("span",{staticClass:"hljs-comment"},[t._v("// o 的原型 o.__proto__有属性 b 和 c：")]),t._v("\no.__proto__ = {b: "),a("span",{staticClass:"hljs-number"},[t._v("3")]),t._v(", c: "),a("span",{staticClass:"hljs-number"},[t._v("4")]),t._v("};\n"),a("span",{staticClass:"hljs-comment"},[t._v("// 最后, o.__proto__.__proto__ 是 null.")]),t._v("\n"),a("span",{staticClass:"hljs-comment"},[t._v("// 这就是原型链的末尾，即 null，")]),t._v("\n"),a("span",{staticClass:"hljs-comment"},[t._v("// 根据定义，null 没有__proto__.")]),t._v("\n"),a("span",{staticClass:"hljs-comment"},[t._v("// 综上，整个原型链如下:")]),t._v("\n{a:"),a("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(", b:"),a("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("} ---\x3e {b:"),a("span",{staticClass:"hljs-number"},[t._v("3")]),t._v(", c:"),a("span",{staticClass:"hljs-number"},[t._v("4")]),t._v("} ---\x3e "),a("span",{staticClass:"hljs-keyword"},[t._v("null")]),t._v("\n"),a("span",{staticClass:"hljs-comment"},[t._v("// 当我们在获取属性值的时候，就会触发原型链的查找：")]),t._v("\nconsole.log(o.a); "),a("span",{staticClass:"hljs-comment"},[t._v("// o.a => 1")]),t._v("\nconsole.log(o.b); "),a("span",{staticClass:"hljs-comment"},[t._v("// o.b => 2")]),t._v("\nconsole.log(o.c); "),a("span",{staticClass:"hljs-comment"},[t._v("// o.c => o.__proto__.c => 4")]),t._v("\nconsole.log(o.d); "),a("span",{staticClass:"hljs-comment"},[t._v("// o.c => o.__proto__.d => o.__proto__.__proto__ == null => undefined")]),t._v("\n")])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1807"}},[t._v("可以看到，当我们对对象进行属性值的获取时，会触发该对象的原型链查找过程。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1808"}},[t._v("既然 JavaScript 中会通过遍历原型链来访问对象的属性，那么我们可以通过原型链的方式进行继承。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1809"}},[t._v("也就是说，可以通过原型链去访问原型对象上的属性和方法，我们不需要在创建对象的时候给该对象重新赋值/添加方法。比如，我们调用"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2095"}},[t._v("lily.toString()")]),t._v("时，JavaScript 引擎会进行以下操作：")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"1810"}},[a("li",{attrs:{"data-nodeid":"1811"}},[a("p",{attrs:{"data-nodeid":"1812"}},[t._v("先检查"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2098"}},[t._v("lily")]),t._v("对象是否具有可用的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2100"}},[t._v("toString()")]),t._v("方法；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1813"}},[a("p",{attrs:{"data-nodeid":"1814"}},[t._v("如果没有，则``检查"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2106"}},[t._v("lily")]),t._v("的原型对象（"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2108"}},[t._v("Person.prototype")]),t._v("）是否具有可用的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2110"}},[t._v("toString()")]),t._v("方法；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1815"}},[a("p",{attrs:{"data-nodeid":"1816"}},[t._v("如果也没有，则检查"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2113"}},[t._v("Person()")]),t._v("构造函数的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2115"}},[t._v("prototype")]),t._v("属性所指向的对象的原型对象（即"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2117"}},[t._v("Object.prototype")]),t._v("）是否具有可用的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2119"}},[t._v("toString()")]),t._v("方法，于是该方法被调用。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1817"}},[t._v("由于通过原型链进行属性的查找，需要层层遍历各个原型对象，此时可能会带来性能问题：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"1818"}},[a("li",{attrs:{"data-nodeid":"1819"}},[a("p",{attrs:{"data-nodeid":"1820"}},[t._v("当试图访问不存在的属性时，会遍历整个原型链；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1821"}},[a("p",{attrs:{"data-nodeid":"1822"}},[t._v("在原型链上查找属性比较耗时，对性能有副作用，这在性能要求苛刻的情况下很重要。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1823"}},[t._v("因此，我们在设计对象的时候，需要注意代码中原型链的长度。当原型链过长时，可以选择进行分解，来避免可能带来的性能问题。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1824"}},[t._v("除了通过原型链的方式实现 JavaScript 继承，JavaScript 中实现继承的方式还包括经典继承(盗用构造函数)、组合继承、原型式继承、寄生式继承，等等。")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"1825"}},[a("li",{attrs:{"data-nodeid":"1826"}},[a("p",{attrs:{"data-nodeid":"1827"}},[t._v("原型链继承方式中引用类型的属性被所有实例共享，无法做到实例私有；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1828"}},[a("p",{attrs:{"data-nodeid":"1829"}},[t._v("经典继承方式可以实现实例属性私有，但要求类型只能通过构造函数来定义；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1830"}},[a("p",{attrs:{"data-nodeid":"1831"}},[t._v("组合继承融合原型链继承和构造函数的优点，它的实现如下：")])])]),t._v(" "),a("pre",{staticClass:"lang-java te-preview-highlight",attrs:{"data-nodeid":"3873"}},[a("code",{attrs:{"data-language":"java"}},[a("span",{staticClass:"hljs-function"},[t._v("function "),a("span",{staticClass:"hljs-title"},[t._v("Parent")]),a("span",{staticClass:"hljs-params"},[t._v("(name)")]),t._v(" ")]),t._v("{\n  "),a("span",{staticClass:"hljs-comment"},[t._v("// 私有属性，不共享")]),t._v("\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".name = name;\n}\n"),a("p",[a("span",{staticClass:"hljs-comment"},[t._v("// 需要复用、共享的方法定义在父类原型上")]),t._v("\nParent.prototype.speak = function() {\nconsole.log("),a("span",{staticClass:"hljs-string"},[t._v('"hello"')]),t._v(");\n};")]),t._v("\n"),a("p",[a("span",{staticClass:"hljs-function"},[t._v("function "),a("span",{staticClass:"hljs-title"},[t._v("Child")]),a("span",{staticClass:"hljs-params"},[t._v("(name)")]),t._v(" ")]),t._v("{\nParent.call("),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(", name);\n}")]),t._v("\n"),a("p",[a("span",{staticClass:"hljs-comment"},[t._v("// 继承方法")]),t._v("\nChild.prototype = "),a("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" Parent();\n")])])]),a("p"),t._v(" "),a("p",{attrs:{"data-nodeid":"1833"}},[t._v("组合继承模式通过将共享属性定义在父类原型上、将私有属性通过构造函数赋值的方式，实现了按需共享对象和方法，是 JavaScript 中最常用的继承模式。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1834"}},[t._v("虽然在继承的实现方式上有很多种，但实际上都离不开原型对象和原型链的内容，因此掌握"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2131"}},[t._v("__proto__")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2133"}},[t._v("prototype")]),t._v("、对象的继承等这些知识，是我们实现各种继承方式的前提。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"1835"}},[t._v("小结")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1836"}},[t._v("关于 JavaScript 的原型和继承，常常会在我们面试题中出现。随着 ES6/ES7 等新语法糖的出现，我们在日常开发中可能更倾向于使用"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2137"}},[t._v("class")]),t._v("/"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2139"}},[t._v("extends")]),t._v("等语法来编写代码，原型继承等概念逐渐变淡。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1837"}},[t._v("但不管语法糖怎么先进，JavaScript 的设计在本质上依然没有变化，依然是基于原型来实现继承的。如果不了解这些内容，可能在我们遇到一些超出自己认知范围的内容时，很容易束手无策。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"1838"}},[t._v("现在，本文开始的四个疑惑我都在文中进行解答了，现在该轮到你了：")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"1839"}},[a("li",{attrs:{"data-nodeid":"1840"}},[a("p",{attrs:{"data-nodeid":"1841"}},[t._v("JavaScript 的函数和对象是怎样的关系？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1842"}},[a("p",{attrs:{"data-nodeid":"1843"}},[a("code",{attrs:{"data-backticks":"1","data-nodeid":"2144"}},[t._v("__proto__")]),t._v("和"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"2146"}},[t._v("prototype")]),t._v("都表示原型对象，它们有什么区别呢？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"1844"}},[a("p",{attrs:{"data-nodeid":"1845"}},[t._v("JavaScript 中对象的继承和原型链是什么关系？")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"1846"}},[t._v("把你的想法写在留言区~")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"精选评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),a("h5",{attrs:{id:"better"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#better"}},[t._v("#")]),t._v(" Better：")]),t._v(" "),a("blockquote",[a("p",[t._v("老师讲的好棒👍🏻1. 函数是一种特殊的对象，在对象内部属性拥有仅供 JavaScript引擎读取的 Call 属性的对象称为函数，使用 typeof 检测时会被识别为 function 。2. proto 可以称作指针指向 prototype ，后者实质上也是对象。3. 可以将 proto 比作链，prototype 比作节点，以 null 为顶点链接起来形成原型链，当访问标识符时，实例没有则会去原型链上查找，找到则返回结果，直到顶端 null 没找到则返回 undefined。")])]),t._v(" "),a("h6",{attrs:{id:"编辑回复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑回复"}},[t._v("#")]),t._v("     编辑回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    你也好棒！")])]),t._v(" "),a("h5",{attrs:{id:"_2951"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2951"}},[t._v("#")]),t._v(" **2951：")]),t._v(" "),a("blockquote",[a("p",[t._v('1、Function instanceof Object === true;2、只有函数才有prototype 只有对象才有__proto__;3、一个对象的__proto__指向了另一个对象， 另一个对象的__proto__又指向了其他对象，举例let a = {name : "a"}let b = {age: 12}let c={}c.'),a("strong",[t._v("proto")]),t._v(" = bb."),a("strong",[t._v("proto")]),t._v(" = a此时 c继承了a 和 b b继承了 a，同时他们的继承关系组成了一条原型链")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    没毛病！")])]),t._v(" "),a("h5",{attrs:{id:"聪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聪"}},[t._v("#")]),t._v(" *聪：")]),t._v(" "),a("blockquote",[a("p",[t._v("对于构造函数，原型对象等概念不清晰的同学可以看看我的CSDN上的博客（看完一定懂）：《帮你彻底搞懂JS中的prototype、__proto__与constructor（图解）》，没错，原创：码飞_CC，就是我啦~~")])]),t._v(" "),a("h5",{attrs:{id:"雄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雄"}},[t._v("#")]),t._v(" **雄：")]),t._v(" "),a("blockquote",[a("p",[t._v("被删老师你好，我对于”函数的 "),a("code",[t._v("prototype")]),t._v(" 属性指向它的原型对象“这句话有不同的看法；在此之前你说每个对象的 "),a("code",[t._v("__proto__")]),t._v(" 指向它的原型对象，我是比较赞成的，所以对于函数，它的原型对象也应该是由 "),a("code",[t._v("__proto__")]),t._v(" 指向的。那么函数的 "),a("code",[t._v("prototype")]),t._v(" 要怎么理解的，它应该指向函数的实例对象的原型对象；对于一个函数，它的原型对象应该是 fn."),a("strong",[t._v("proto")]),t._v(" = Function.prototype , 也就是对于内置的构造函数 Function 的 prototype 指向它的实例对象 fn 的原型对象；以上是我结合老师讲解后，觉得有一丢丢矛盾的地方，进行了一点点自己的理解，不知道是否有偏差，希望老师能点评一下，万分感谢")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-2"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    文中应该没有说 prototype 属性指向它的原型对象？prototype 属性可以理解为就是函数的原型对象。 Function.prototype 在实例化之前就存在了，而 fn."),a("strong",[t._v("proto")]),t._v(" = Function.prototype 是在实例化过程中，将实例的 "),a("strong",[t._v("proto")]),t._v(" 属性指向 Function.prototype 从而构成原型链。函数本身、以及函数的实例，这两者需要区分清楚~\n因此，你说的“对于内置的构造函数 Function 的 prototype 指向它的实例对象 fn 的原型对象”，个人认为这样可能更加准确：“fn 这个实例，它的 "),a("strong",[t._v("proto")]),t._v(" 指向它的构造函数的原型对象，即 Function.prototype”。")])]),t._v(" "),a("h5",{attrs:{id:"怿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怿"}},[t._v("#")]),t._v(" **怿：")]),t._v(" "),a("blockquote",[a("p",[t._v("Person."),a("strong",[t._v("proto")]),t._v(" === lily."),a("strong",[t._v("proto")]),t._v(" ?")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-3"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    lily."),a("strong",[t._v("proto")]),t._v(" === Person.prototype；\nPerson.prototype."),a("strong",[t._v("proto")]),t._v(" === Object.prototype；")])]),t._v(" "),a("h5",{attrs:{id:"聪-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聪-2"}},[t._v("#")]),t._v(" *聪：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("JavaScript中的函数也是一种对象。除了七种基本类型值，其他的所有都是对象，这就是JS中所谓的万物皆对象。2.__ptoto__属性是对象独有的，prototype属性是函数所独有的，因为函数也是一种对象，所以函数既有__proto__属性，也具有prototype属性，这点需要细细品味！3.对象的继承是依靠原型链来实现的，通过原型链，我们才可以使用其他对象上的属性或方法。")])])]),t._v(" "),a("h5",{attrs:{id:"远"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远"}},[t._v("#")]),t._v(" **远：")]),t._v(" "),a("blockquote",[a("p",[t._v("其实 "),a("strong",[t._v("proto")]),t._v(" 属性是 chrome 自己搞出来的，没有被标准化，并且最新的 chrome 浏览器已经弃用这个属性了，改为 prototype 表示私有属性。标准中有专门用来访问对象原型的方法啊，就是 Object.getPrototypeOf()，标准提供了 Get/SetPrototypeOf 这两个方法用来操作对象的原型，应该避免使用 "),a("strong",[t._v("proto")]),t._v(" 属性。继承一个对象的话，也是推荐 Object.create 方法，避免使用 "),a("strong",[t._v("proto")]),t._v(" 属性。")])]),t._v(" "),a("h5",{attrs:{id:"山"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#山"}},[t._v("#")]),t._v(" *山：")]),t._v(" "),a("blockquote",[a("p",[t._v("当原型链过长时，可以选择进行分解，来避免可能带来的性能问题，请问怎么分解？")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-4"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    避免使用过长的原型链就可以，比如不使用过深的继承关系")])]),t._v(" "),a("h5",{attrs:{id:"kerita"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kerita"}},[t._v("#")]),t._v(" Kerita：")]),t._v(" "),a("blockquote",[a("p",[t._v("请问 Person."),a("strong",[t._v("proto")]),t._v(" 是什么东西？")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-5"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    Person.prototype."),a("strong",[t._v("proto")]),t._v(" === Object.prototype；\n其实可以简单地去控制台打印看看的")])]),t._v(" "),a("h5",{attrs:{id:"_6082"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6082"}},[t._v("#")]),t._v(" **6082：")]),t._v(" "),a("blockquote",[a("p",[t._v("1.每一个构造函数都有一个prototype属性，指向函数的原型对象。并且当创建了一个构造函数后，其原型对象就会默认获得一个constructor属性，该属性解决了对象是由哪个构造函数创造出来的问题，即对象识别；2.每一个原型对象都有一个默认的constructor属性指向构造函数。除了constructor属性，还有__proto__指针；3.每一个对象都有一个__proto__属性，指向原型对象，也叫指针；4.构造函数的原型的原型是由Object生成的。即Foo.prototype."),a("strong",[t._v("proto")]),t._v(".constructor===Object 或者等价于Foo.prototype."),a("strong",[t._v("proto")]),t._v("===Object.prototype；5.原型链的终点是null,null不再有__proto__指针了。")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-6"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    妙呀")])]),t._v(" "),a("h5",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" **：")]),t._v(" "),a("blockquote",[a("p",[t._v("1 都是对象，函数是一个不具体的对象，而对象是一个具体的对象，类似树与柳树的关系2 一个在函数上，一个在对象上3 继承依赖原型链，通过原型链来实现继承")])]),t._v(" "),a("h5",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")]),t._v(" **：")]),t._v(" "),a("blockquote",[a("p",[t._v("1.javascript中除了基础类型外，都是对象，函数是特殊的对象2.所有对象都有__proto__属性，指向它的构造函数的原型对象，每个函数都有个prototype属性，即原型对象3.原型链某种程度上就可以看做继承的表现")])]),t._v(" "),a("h5",{attrs:{id:"-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")]),t._v(" **：")]),t._v(" "),a("blockquote",[a("p",[t._v("你好，学了以后收货很多。现在还有两点疑问详情见下。1.你说只有函数才有prototype 那object. prototype 是咋回事？2.你打印的Lili的实例的那张图，我看到里面是有两个__proto__是怎么看出来__proto__等于prototype 的")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-7"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    1. 这里 Object.prototype 指 Object 的原型对象，并不是指 Object 的属性噢")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("可以在控制台打印判断下噢，lily."),a("strong",[t._v("proto")]),t._v(" === Person.prototype")])]),t._v(" "),a("h5",{attrs:{id:"-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[t._v("#")]),t._v(" *：")]),t._v(" "),a("blockquote",[a("p",[t._v("求教，"),a("strong",[t._v("proto")]),t._v(" 这个属性好像不是标准里面的吧？")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-8"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    实际上，没有官方的方法用于直接访问一个对象的原型对象。在 JavaScript 语言标准中用 prototype 表示，然而大多数现代浏览器还是提供了 "),a("strong",[t._v("proto")]),t._v(" 的属性来包含对象的原型")])])])}),[],!1,null,null,null);a.default=s.exports}}]);