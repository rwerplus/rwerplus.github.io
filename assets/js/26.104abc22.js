(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{360:function(t,a,d){"use strict";d.r(a);var s=d(3),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{"data-nodeid":"15165"}},[t._v("对于一个应用来说，除了前期的开发和设计，在项目上线后的维护也很重要，其中就包括监控体系的搭建。一般来说，我们之所以需要搭建前端监控体系，主要是为了解决两个问题。")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"15166"}},[a("li",{attrs:{"data-nodeid":"15167"}},[a("p",{attrs:{"data-nodeid":"15168"}},[t._v("如何及时发现问题？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15169"}},[a("p",{attrs:{"data-nodeid":"15170"}},[t._v("如何快速定位并解决问题？")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15171"}},[t._v("既然叫前端监控体系，那么我们到底需要监控些什么内容？对于线上的系统是否运行正常，我们可以通过以下信息进行观察，包括：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"15172"}},[a("li",{attrs:{"data-nodeid":"15173"}},[a("p",{attrs:{"data-nodeid":"15174"}},[t._v("页面的整体访问情况，包括常见的 PV、UV、用户操作行为；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15175"}},[a("p",{attrs:{"data-nodeid":"15176"}},[t._v("页面的性能情况，包括页面加载耗时、接口耗时等各项数据统计。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15177"}},[t._v("除此之外，我们的系统也需要具备发布灰度过程中的监控，以及用户问题的反馈和定位等能力。这些问题可以从两个角度来解决：数据采集（埋点与收集）、数据上报与监控。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15178"}},[t._v("要对系统运行的指标进行有效的监控，我们需要对监控数据进行采集，下面我们先来看看数据的采集部分。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"15179"}},[t._v("数据埋点与收集")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15180"}},[t._v("在进行数据采集之前，先来看看前端监控中需要关注的数据类型。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15181"}},[t._v("在前端应用中，系统的质量通常从三方面来评估：页面访问速度、页面稳定性/异常、外部服务调用情况。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15182"}},[t._v("结合前面提到的页面的整体访问情况、页面的性能情况、用户问题定位等，我们可以将需要进行关注的数据分成五类。")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"15183"}},[a("li",{attrs:{"data-nodeid":"15184"}},[a("p",{attrs:{"data-nodeid":"15185"}},[t._v("系统的生命周期数据，可用于观察页面性能情况、整体访问情况等。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15186"}},[a("p",{attrs:{"data-nodeid":"15187"}},[t._v("HTTP 测速数据，可用于观察外部服务调用情况 、页面性能优化等。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15188"}},[a("p",{attrs:{"data-nodeid":"15189"}},[t._v("系统异常数据，可用于观察系统稳定性、系统异常问题。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15190"}},[a("p",{attrs:{"data-nodeid":"15191"}},[t._v("用户行为数据，可用于观察页面稳定性、整体访问情况等。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15192"}},[a("p",{attrs:{"data-nodeid":"15193"}},[t._v("用户日志，用于进行用户反馈的问题排查。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15194"}},[t._v("我们来分别看一下，首先是应用的生命周期数据。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"15195"}},[t._v("1. 生命周期数据")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15196"}},[t._v("前端应用的生命周期指页面加载的关键时间点，通常包括页面打开、更新、关闭等耗时数据。我们可以通过"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15362"}},[t._v("PerformanceTiming")]),t._v("属性中获取到一些生命周期相关的数据，比如：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"15197"}},[a("li",{attrs:{"data-nodeid":"15198"}},[a("p",{attrs:{"data-nodeid":"15199"}},[t._v("用于页面跳转："),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15365"}},[t._v("navigationStart")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15367"}},[t._v("unloadEventStart/unloadEventEnd")]),t._v("等。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15200"}},[a("p",{attrs:{"data-nodeid":"15201"}},[t._v("用于页面加载："),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15370"}},[t._v("domLoading")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15372"}},[t._v("domInteractive")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15374"}},[t._v("domContentLoadedEventStart/domContentLoadedEventEnd")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15376"}},[t._v("loadEventStart/loadEventEnd")]),t._v("等。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15202"}},[t._v("除此之外，我们还可以通过"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15379"}},[t._v("document")]),t._v("的"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15381"}},[t._v("DOMContentLoaded")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15383"}},[t._v("readystatechange")]),t._v("等事件，来获取页面加载的关键点。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15203"}},[t._v("但随着前端框架的使用，页面的渲染过程、页面间的切换等逻辑都交给了框架进行控制，因此像"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15386"}},[t._v("DOMContentLoaded")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15388"}},[t._v("readystatechange")]),t._v("这些事件已经失去了原本的作用，很多时候我们会在框架本身提供的生命周期函数中进行数据的收集，比如在 Vue 中就有"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15390"}},[t._v("beforeCreate/created")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15392"}},[t._v("beforeMount/mounted")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15394"}},[t._v("beforeUpdate/updated")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15396"}},[t._v("beforeDestroy/destroyed")]),t._v("这些生命周期的钩子。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15204"}},[t._v("除了框架本身提供的生命周期以外，我们还可以使用"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15399"}},[t._v("MutationObserver")]),t._v("接口，该接口提供了监听页面 DOM 树变化的能力，结合"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15401"}},[t._v("performance")]),t._v("获取到具体的时间。")]),t._v(" "),a("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"15205"}},[a("code",{attrs:{"data-language":"java"}},[a("span",{staticClass:"hljs-comment"},[t._v("// 注册监听函数")]),t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" observer = "),a("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" MutationObserver((mutations) => {\n  console.log(`时间：${performance.now()}，DOM树发生了变化！有以下变化类型:`);\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("for")]),t._v(" (let i = "),a("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("; i < mutations.length; i++) {\n    console.log(mutations["),a("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("].type);\n  }\n});\n"),a("span",{staticClass:"hljs-comment"},[t._v("// 开始监听 document 的节点变化")]),t._v("\nobserver.observe(document, {\n  childList: "),a("span",{staticClass:"hljs-keyword"},[t._v("true")]),t._v(",\n  subtree: "),a("span",{staticClass:"hljs-keyword"},[t._v("true")]),t._v(",\n});\n")])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15206"}},[t._v("除了页面加载相关的生命周期数据，HTTP 请求相关的数据也常常会被关注，这些数据常常被用作前端性能优化的指标。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"15207"}},[t._v("2. HTTP 测速数据")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15208"}},[t._v("HTTP 请求相关的数据，同样可以通过"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15408"}},[t._v("PerformanceTiming")]),t._v("属性获取，包括 HTTP 跳转开始/结束、域名查询开始/结束等各种时间戳。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15209"}},[t._v("通过这些数据，我们可以观察后端服务是否稳定、是否还有优化空间。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15210"}},[t._v("由于同样是测速相关的数据，和生命周期也比较相似，这里就不展开说了，我们来看一下系统异常数据。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"15211"}},[t._v("3. 系统异常数据")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15212"}},[t._v("一般来说，脚本执行异常大多数情况下会直接导致功能不可用，因此首先需要关注系统异常的数据。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15213"}},[t._v("常见的前端异常包括：")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"15214"}},[a("li",{attrs:{"data-nodeid":"15215"}},[a("p",{attrs:{"data-nodeid":"15216"}},[t._v("逻辑错误，可理解为开发实现功能的时候，逻辑梳理不符合预期；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15217"}},[a("p",{attrs:{"data-nodeid":"15218"}},[t._v("代码健壮性，可理解为代码边界情况考虑不周，异常逻辑执行出错；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15219"}},[a("p",{attrs:{"data-nodeid":"15220"}},[t._v("网络错误，可理解为用户网络情况异常、后台服务异常等错误；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15221"}},[a("p",{attrs:{"data-nodeid":"15222"}},[t._v("系统错误，可理解为代码运行环境兼容性问题导致出错；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15223"}},[a("p",{attrs:{"data-nodeid":"15224"}},[t._v("页面内容异常，可理解为缺少内容、绑定事件异常、样式异常等。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15225"}},[t._v("对于 1-4 的异常情况，可以使用"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15423"}},[t._v("window.onerror")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15425"}},[t._v("document.addEventlistener(error)")]),t._v("、"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15427"}},[t._v("XMLHttpRequest status")]),t._v("等方法来进行拦截，同时可获取错误相关的信息和数据。比如，通过监听"),a("code",{attrs:{"data-backticks":"1","data-nodeid":"15429"}},[t._v("window.onerror")]),t._v("事件，我们可以获取项目中的错误和分析堆栈，将错误信息自动上报到后台服务中。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15226"}},[t._v("对于第 5 项的页面内容异常，大多数情况并不会影响系统中大多数功能的运行，同时也缺少可直观观察的数据信息。因此一般情况下，可以通过回归测试、UI 界面测试等方式在上线前进行避免。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15227"}},[t._v("当然，也有比较取巧的方式，比如当某块内容缺失时，这块内容便无法进行点击，从而点击后的页面跳转等行为都会受到影响，因此可观察页面中用户操作的数据、页面访问的数据是否有异常，来辅助判断页面内容是否有异常。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15228"}},[t._v("为此，我们会需要用到用户行为的数据。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"15229"}},[t._v("4. 用户行为数据")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15230"}},[t._v("除了常见的前端页面加载、请求耗时数据，我们还可以关注用户的一些行为数据，包括页面浏览量或点击量、用户在每一个页面的停留时间、用户通过什么入口来访问该页面、用户在页面中的一些操作行为。用户行为数据可以结合 DOM 元素的事件监听、页面的加载情况等方式来获取。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15231"}},[t._v("这些行为数据的统计可以用来监控页面的功能是否正常，正如前面所说的，如果页面中某个点击的功能逻辑异常，必然会导致一些页面的访问量或是该功能的点击量发生变化。同时，我们还可以通过分析用户行为，针对性地调整页面功能、更好地发挥页面的作用。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15232"}},[t._v("除此之外，通过这些用户行为数据，我们还可以统计出用户在时间轴上的操作顺序，以及每个步骤的操作时间、操作内容等，通过可视化系统直观地展示用户的链路情况，包括系统的入口来源、打开或关闭的页面、每个功能点的点击和操作时间、功能异常的情况等。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15233"}},[t._v("用户链路相关信息还可以用来定位问题，比如配合用户日志进行分析。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"15234"}},[t._v("5. 用户日志")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15235"}},[t._v("当系统出现异常的时候，我们都会使用日志进行定位。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15236"}},[t._v("一般来说，日志会在定位用户问题的时候使用，但我们常常需要提前在代码中打印日志。否则，当我们需要定位问题的时候，才发现自己并没有输出相关的日志，有些问题由于复现困难，再补上日志发布后也未必能复现，这样就会比较被动。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15237"}},[t._v("这种情况可以通过添加装饰器、对类方法进行劫持等方式来进行日志的自动打印，举个例子：")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15238"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M01/43/9A/Cgp9HWC5-5iAALYUAABtIOCOlhs147.png",alt:"Drawing 0.png","data-nodeid":"15449"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"15239"}},[t._v("在每个功能模块运行时，通过使用约定的格式来打印输入参数、执行信息、输出参数，则可以通过解析日志的方式，梳理本次操作的完整调用关系、功能模块执行信息。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15240"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/43/A2/CioPOWC5-52AJQiiAACPz6Ee19o794.png",alt:"Drawing 1.png","data-nodeid":"15453"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"15241"}},[t._v("系统运行时输出的日志，可以通过两种方式存放。")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"15242"}},[a("li",{attrs:{"data-nodeid":"15243"}},[a("p",{attrs:{"data-nodeid":"15244"}},[t._v("上报到服务器。由于日志内容很多，如果全量上报到服务器会导致存储成本过大，同时频繁的上报也会增加接口的维护成本。除此之外，由于网络原因等还可能导致部分或全部的日志丢失等问题。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15245"}},[a("p",{attrs:{"data-nodeid":"15246"}},[t._v("本地存储。该方案需要引导用户手动操作提交本地日志，或者通过服务端下发配置自动上传，才可以获取到日志内容，从而可以进行具体的问题定位。如果无法联系到用户，或是缓存被清理的情况下，则可能由于异常无法重现而无法修复。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15247"}},[t._v("两种方式都有各自的优缺点，因此在资源允许的情况下，也可以两个方案配合一起使用。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15248"}},[t._v("关于前端监控中需要关注哪些数据，到这里大概介绍得差不多了。下面我们来看一下，要如何对这些数据进行采集。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"15249"}},[t._v("数据埋点与收集")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15250"}},[t._v("数据采集可以分成两个工作：数据的埋点、数据的收集。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15251"}},[t._v("数据埋点在业界中已经是比较成熟的解决方案，其中前端常见的埋点方案有三种：代码埋点、可视化埋点、无痕埋点。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15252"}},[t._v("我们先来通过一个表格直观地感受下它们的区别。")]),t._v(" "),a("p",{staticClass:"te-preview-highlight",attrs:{"data-nodeid":"16979"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/43/A3/CioPOWC5_CGAOW3dAAE-p5q_scI456.png",alt:"202164-181020.png","data-nodeid":"16982"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"15292"}},[t._v("不同的埋点方案都有各自的优点和缺点，基本上随着埋点灵活性的增加，接入和维护的成本也会越大。因此，通常情况下我们会根据使用场景来将这些方案配合使用。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15293"}},[t._v("比如，无痕埋点一般是通过使用固定的 SDK 来进行数据的采集，但由于无痕埋点的自定义能力很弱，我们可以配合代码埋点的方式来提升埋点的灵活程度。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15294"}},[t._v("不管使用哪种埋点方式，我们都需要对数据进行标准化处理。由于最终的数据需要落盘到服务端并进行计算和监控，因此我们需要将采集的数据，按照与服务端约定好的协议格式来进行转换。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15295"}},[t._v("同时，为了避免用户突然关闭应用、浏览器异常等情况导致数据的丢失，还可以配合本地缓存的方式，将数据进行缓存，在应用恢复的时候进行数据的上报。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15296"}},[t._v("那么下面，我们来看一下采集好的数据要怎么进行处理。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"15297"}},[t._v("数据上报")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15298"}},[t._v("前面介绍了数据的采集，为了快速发现并定位问题，我们需要将这些埋点的数据、运行的日志上报发送到服务端，服务端再进行转换、存储、计算和监控。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15299"}},[t._v("那么，要在什么时候进行上报呢？")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15300"}},[t._v("为了避免数据的上报过于频繁、增加服务端的压力，我们可以在本地进行数据的整合，比如通过队列或数组的方式进行维护，然后选择以下方式/时机进行上报。")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"15301"}},[a("li",{attrs:{"data-nodeid":"15302"}},[a("p",{attrs:{"data-nodeid":"15303"}},[a("strong",{attrs:{"data-nodeid":"15499"}},[t._v("定期/定量上报。")])])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15304"}},[t._v("对于前端来说，过于频繁的请求可能会影响到用户其他正常请求的体验，因此通常我们需要将收集到的数据存储在本地。当收集到一定数量之后再打包一次性上报，或者按照一定的频率（时间间隔）打包上传，打包上传将多次数据合并为一次，可以减轻服务器的压力。")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"15305"}},[a("li",{attrs:{"data-nodeid":"15306"}},[a("p",{attrs:{"data-nodeid":"15307"}},[a("strong",{attrs:{"data-nodeid":"15504"}},[t._v("关键生命周期上报。")])])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15308"}},[t._v("由于用户可能在使用过程中遇到异常，或者在使用过程中退出，因此我们还需要在异常触发的时候、用户退出程序前进行上传，以避免问题没能及时被发现和定位。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15309"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/43/A2/CioPOWC5-7aAIRvmAACGYJ42QWg063.png",alt:"Drawing 2.png","data-nodeid":"15508"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"15310"}},[t._v("如图，当页面打开、更新、关闭等生命周期、用户在页面中的操作行为、系统异常等触发时，系统底层通过关键点监听这些事件，获取相关数据并进行标准化处理后，上报到服务端。")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"15311"}},[a("li",{attrs:{"data-nodeid":"15312"}},[a("p",{attrs:{"data-nodeid":"15313"}},[a("strong",{attrs:{"data-nodeid":"15513"}},[t._v("用户主动提交。")])])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15314"}},[t._v("一些异常和使用体验问题，可以引导用户进行主动上传。当用户触发上传的操作后，可以将本地的数据和日志一并进行提交。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15315"}},[t._v("由于系统生命周期相关数据、系统错误数据、用户行为数据等都会被用作于系统稳定性的实时监控，因此这些数据需要及时地进行上报，用户主动提交的行为可能更适合日志的上报。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15316"}},[t._v("到这里，我们已经完成了数据的上报，那么接下来，我们来看看上报的数据要怎么进行监控。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"15317"}},[t._v("数据监控")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15318"}},[t._v("数据上报完成后，一般来说需要搭建可视化的管理端，来对这些数据进行直观的监控。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15319"}},[t._v("在日常监控中，我们还会通过对监控数据、配置告警阈值等方式，结合邮件、机器人等方式推送到相关的人员，来及时发现并解决问题。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15320"}},[t._v("通过上报的页面整体情况和用户行为数据，我们可以实时对各个操作信息进行分析，得到用户的操作链路、每个页面和功能操作步骤间的耗时和转化率，并进行有效监控。当页面出现异常的时候，可以及时地发现并进行告警，从而快速地解决问题。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15321"}},[t._v("除了日常的监控以外，前端监控在发布和灰度过程中也发挥着极其重要的作用。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15322"}},[t._v("对于链路复杂的前端应用，通过开发自测的方式保证功能是否正确是很低效的，人工测试也常常无法覆盖到所有的功能、各个链路的分支，同时自动化测试也常常因为性价比等问题无法做得很完善。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15323"}},[t._v("因此，在新版本上线时，除了对改动相关的功能进行自测、并使用自动化测试进行回归测试之外，我们可以在上报数据的时候带上当前系统的版本号，发布过程中可以根据版本号来区分各个版本的曲线情况。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15324"}},[t._v("在灰度过程中，我们可以关注以下信息。")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"15325"}},[a("li",{attrs:{"data-nodeid":"15326"}},[a("p",{attrs:{"data-nodeid":"15327"}},[t._v("错误告警是否有新增错误，可通过错误内容找到报错位置修复。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15328"}},[a("p",{attrs:{"data-nodeid":"15329"}},[t._v("全版本监控观察：整体的功能点覆盖曲线是否正常，是否有异常涨跌。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"15330"}},[a("p",{attrs:{"data-nodeid":"15331"}},[t._v("分版本监控观察：新版本是否所有功都能正常访问、灰度占比是否正常、新旧版本的转化率是否一致。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"15332"}},[t._v("通过上报数据功能曲线是否正常、异常是否在预期范围、曲线突变跟灰度时间点是否吻合等信息，我们可以确认系统新版本是否有异常，以及哪里可能有异常，如图所示。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15333"}},[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/43/A2/CioPOWC5-8GAJFltAACIXY7dNjg570.png",alt:"Drawing 3.png","data-nodeid":"15531"}})]),t._v(" "),a("p",{attrs:{"data-nodeid":"15334"}},[t._v("当出现数据异常的时候，可配合相应的告警渠道来及时通知相应的负责人，及时修复功能异常。如果想要做得更多，我们甚至可以结合其他系统来进行协作，比如关联 BUG 管理系统、自动生成 BUG 单，将 BUG 单绑定到对应的版本分支上，通过提交对应的修复分支、进行测试验证后，自动地扭转 BUG 单状态，等等。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"15335"}},[t._v("小结")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15336"}},[t._v("今天我主要介绍了前端监控体系的搭建，包括哪些数据需要关注、如何进行数据采集和上报、如何有效地对数据进行监控等。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15337"}},[t._v("我们在做好功能开发之外，也会收到各种各样的神奇反馈，常常包括一些页面打不开、奇妙报错、歪扭 UI 的神秘兼容性问题。为了提升问题发现和解决的效率，搭建一套完善的前端上报和监控体系是必要的。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15338"}},[t._v("同时，我们还可以通过将一些相似的问题进行归类，思考这类问题出现的原因有哪些，尝试从源头阻止它们的出现，才是最有效的解决方案。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"15339"}},[t._v("你的项目中是否有使用前端监控呢？你觉得好的前端监控系统具备怎样的特点呢？欢迎在留言区进行讨论。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"精选评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),a("h5",{attrs:{id:"宇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宇"}},[t._v("#")]),t._v(" **宇：")]),t._v(" "),a("blockquote",[a("p",[t._v("项目中用过sentry，只是轻量使用")])]),t._v(" "),a("h5",{attrs:{id:"骅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#骅"}},[t._v("#")]),t._v(" **骅：")]),t._v(" "),a("blockquote",[a("p",[t._v("老师可以讲讲什么是灰度吗？查了几篇文章都没明白。")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    其实这里我描述过于简略了，文中提到的“灰度”基本上都是指“灰度发布”，就是让一部分用户继续使用旧版本，一部分用户开始使用新版本，通过控制新旧版本的比例，并观察新版本功能是否正常，来逐步扩大新版本的占比，直到全量。\n一般来说，灰度发布也可以用于 A/B test，即让一部分用户继续用产品特性A，一部分用户开始用产品特性B")])]),t._v(" "),a("h5",{attrs:{id:"历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#历"}},[t._v("#")]),t._v(" **历：")]),t._v(" "),a("blockquote",[a("p",[t._v("请问下现在主流的监控有哪些？哨兵？")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-2"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    监控这块其实很多时候都和具体项目的基础建设有关，很多时候都是由业务根据自身情况进行自主搭建的。\n主要是因为监控的搭建比较简单，但维护是个大头，因此更多时候大家会把监控的维护放在可控范围内。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);