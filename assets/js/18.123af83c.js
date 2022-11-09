(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{352:function(a,t,d){"use strict";d.r(t);var e=d(3),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",{attrs:{"data-nodeid":"917"}},[a._v("编程是将逻辑通过代码实现的过程，因此代码的编写效率和质量往往取决于我们的逻辑思维，以及如何将思考的内容使用代码来表达。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"918"}},[a._v("今天我会介绍事件驱动和数据驱动两种编码思维模式，给你带来更好的开发体验。")]),a._v(" "),t("h3",{attrs:{"data-nodeid":"919"}},[a._v("事件驱动")]),a._v(" "),t("p",{attrs:{"data-nodeid":"920"}},[a._v("首先，我们先来看看什么是事件驱动的编程方式。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"921"}},[a._v("前端开发在实现功能的时候，会更倾向于使用事件驱动，这是因为受到 JavaScript 语言的设计和使用场景的影响。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"922"}},[a._v("作为浏览器脚本语言，JavaScript 的主要用途是与用户互动、操作 DOM，实现页面 UI 和交互操作，属于 GUI（图形用户界面）编程。而 GUI 则是基于事件 I/O 模式的编程方式。")]),a._v(" "),t("h4",{attrs:{"data-nodeid":"923"}},[a._v("GUI 与事件")]),a._v(" "),t("p",{attrs:{"data-nodeid":"924"}},[a._v("GUI 应用程序注重与用户的交互，大部分的程序执行需要等到用户的交互动作发生之后，所以 GUI 程序的执行取决于与用户的实时交互情况。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"925"}},[a._v("然而，用户在访问程序期间，与程序进行交互的频率并不高。若不停轮询获取用户输入（类似 HTTP 短轮询），不仅资源利用率低，还无法做到真正的同步。因此，GUI 程序会将执行流程交由用户控制，当用户触发事件的时候进行响应，调用预先绑定好的代码来对事件进行处理。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"926"}},[a._v("JavaScript 也一样，前面我们介绍了事件循环机制，所有的异步事件都会通过执行回调的方式来触发相应的逻辑执行。因此，前端开发在实现业务功能的时候，更容易倾向与用户交互流程（"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1019"}},[a._v("用户输入")]),a._v("->"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1021"}},[a._v("事件响应")]),a._v("->"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1023"}},[a._v("执行相应的代码逻辑")]),a._v("->"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1025"}},[a._v("更新页面状态")]),a._v("）结合，来完成与用户的交互操作。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"927"}},[a._v("我们在写代码实现页面功能的时候，思路常常是这样的：")]),a._v(" "),t("ol",{attrs:{"data-nodeid":"928"}},[t("li",{attrs:{"data-nodeid":"929"}},[t("p",{attrs:{"data-nodeid":"930"}},[a._v("编写静态页面（HTML 和样式）；")])]),a._v(" "),t("li",{attrs:{"data-nodeid":"931"}},[t("p",{attrs:{"data-nodeid":"932"}},[a._v("在特定的元素上添加事件监听，监听用户交互（点击、输入、拖拽）等事件；")])]),a._v(" "),t("li",{attrs:{"data-nodeid":"933"}},[t("p",{attrs:{"data-nodeid":"934"}},[a._v("将事件绑定到对应的函数和处理逻辑，比如获取用户输入/应用状态、计算并更新状态等；")])]),a._v(" "),t("li",{attrs:{"data-nodeid":"935"}},[t("p",{attrs:{"data-nodeid":"936"}},[a._v("根据计算后的数据状态，更新相应的页面元素。")])])]),a._v(" "),t("p",{attrs:{"data-nodeid":"937"}},[a._v("通俗地说，事件驱动思维是从事件响应出发，来完成应用的设计和编程。这种编程方式实现起来既简单又清晰，所以很多开发者会选择（或是下意识地）使用事件驱动方式来写代码。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"938"}},[a._v("我们来看看基于事件驱动的编程流程是怎样的。")]),a._v(" "),t("h4",{attrs:{"data-nodeid":"939"}},[a._v("事件驱动的编码流程")]),a._v(" "),t("p",{attrs:{"data-nodeid":"940"}},[a._v("这里我们以实现一个提交表单的页面作为例子，如果用事件驱动的方式来实现，大致分为三个步骤。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"941"}},[a._v("第一步：编写静态页面。")]),a._v(" "),t("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"942"}},[t("code",{attrs:{"data-language":"java"}},[a._v('\x3c!-- 实现静态页面 --\x3e\n<form>\n  Name:\n  <p id="name-value"></p>\n  <input type="text" name="name" id="name-input" />\n  Email:\n  <p id="email-value"></p>\n  <input type="email" name="email" id="email-input" />\n  <input type="submit" />\n</form>\n')])]),a._v(" "),t("p",{attrs:{"data-nodeid":"943"}},[a._v("第二步：给对应的元素绑定对应的事件，例如通过"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1038"}},[a._v("addEventListener")]),a._v("来监听"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1040"}},[a._v("input")]),a._v("输入框的输入事件。")]),a._v(" "),t("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"944"}},[t("code",{attrs:{"data-language":"java"}},[t("span",{staticClass:"hljs-keyword"},[a._v("var")]),a._v(" nameInputEl = document.getElementById("),t("span",{staticClass:"hljs-string"},[a._v('"name-input"')]),a._v(");\n"),t("span",{staticClass:"hljs-keyword"},[a._v("var")]),a._v(" emailInputEl = document.getElementById("),t("span",{staticClass:"hljs-string"},[a._v('"email-input"')]),a._v(");\n"),t("span",{staticClass:"hljs-comment"},[a._v("// 监听输入事件，此时 updateValue 函数未定义")]),a._v("\nnameInputEl.addEventListener("),t("span",{staticClass:"hljs-string"},[a._v('"input"')]),a._v(", updateNameValue);\nemailInputEl.addEventListener("),t("span",{staticClass:"hljs-string"},[a._v('"input"')]),a._v(", updateEmailValue);\n")])]),a._v(" "),t("p",{attrs:{"data-nodeid":"945"}},[a._v("第三步：事件触发时，进行相关逻辑的处理（发起请求、更新页面内容等），并更新页面内容。我们将用户输入的内容更新到页面中展示。")]),a._v(" "),t("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"946"}},[t("code",{attrs:{"data-language":"java"}},[t("span",{staticClass:"hljs-keyword"},[a._v("var")]),a._v(" nameValueEl = document.getElementById("),t("span",{staticClass:"hljs-string"},[a._v('"name-value"')]),a._v(");\n"),t("span",{staticClass:"hljs-keyword"},[a._v("var")]),a._v(" emailValueEl = document.getElementById("),t("span",{staticClass:"hljs-string"},[a._v('"email-value"')]),a._v(");\n"),t("span",{staticClass:"hljs-comment"},[a._v("// 定义 updateValue 函数，用来更新页面内容")]),a._v("\n"),t("span",{staticClass:"hljs-function"},[a._v("function "),t("span",{staticClass:"hljs-title"},[a._v("updateNameValue")]),t("span",{staticClass:"hljs-params"},[a._v("(e)")]),a._v(" ")]),a._v("{\n  nameValueEl.innerText = e.srcElement.value;\n}\n"),t("span",{staticClass:"hljs-function"},[a._v("function "),t("span",{staticClass:"hljs-title"},[a._v("updateEmailValue")]),t("span",{staticClass:"hljs-params"},[a._v("(e)")]),a._v(" ")]),a._v("{\n  emailValueEl.innerText = e.srcElement.value;\n}\n")])]),a._v(" "),t("p",{attrs:{"data-nodeid":"947"}},[a._v("上述的三个步骤，便是基于事件驱动的思维实现的，是前端页面开发中很常见的编程思路。即使使用了前端框架（这里以 Vue 为例），也很容易用事件驱动的方式来实现上述功能：")]),a._v(" "),t("pre",{staticClass:"lang-java te-preview-highlight",attrs:{"data-nodeid":"6654"}},[t("code",{attrs:{"data-language":"java"}},[a._v("<template>\n  \x3c!-- 1. 绘制 HTML --\x3e\n  <div>\n    Name:\n    <p>"+a._s(a.name)+'</p>\n    \x3c!-- 2. 使用 v-on 绑定事件，这里绑定 updateValue 方法 --\x3e\n    <input type="text" v-bind:value="name" v-on:input="updateValue" />\n    \x3c!-- 上面 input 可以简写为： --\x3e\n    <input type="text" v-model="name" />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        name: "",\n      };\n    },\n    methods: {\n      // 3. change 事件触发时，更新数据\n      updateValue(event) {\n        this.name = event.target.value;\n      },\n    },\n  };\n<\/script>\n')])]),a._v(" "),t("p",{attrs:{"data-nodeid":"949"}},[a._v("这里可以看出，使用前端框架帮我们省去了元素选择、HTML 拼接并更新等这些工作，同时还可以直接在模板上绑定事件监听。至于前端框架是如何做到这些的，我们会在下一讲详细介绍。"),t("br"),a._v("\n现在，我们来回顾下事件驱动的编程思路：")]),a._v(" "),t("ol",{attrs:{"data-nodeid":"950"}},[t("li",{attrs:{"data-nodeid":"951"}},[t("p",{attrs:{"data-nodeid":"952"}},[a._v("开发静态页面；")])]),a._v(" "),t("li",{attrs:{"data-nodeid":"953"}},[t("p",{attrs:{"data-nodeid":"954"}},[a._v("在对应的元素上绑定事件；")])]),a._v(" "),t("li",{attrs:{"data-nodeid":"955"}},[t("p",{attrs:{"data-nodeid":"956"}},[a._v("实现被绑定的事件功能，例如获取数据、更新页面等。")])])]),a._v(" "),t("p",{attrs:{"data-nodeid":"957"}},[a._v("代码实现思路的关注点在于"),t("strong",{attrs:{"data-nodeid":"1059"}},[a._v("触发了怎样的操作")]),a._v("和"),t("strong",{attrs:{"data-nodeid":"1060"}},[a._v("这个操作会导致什么后果（即需要做怎样的处理）")]),a._v("，因此事件驱动的思维方式会围绕着“操作”和“响应”进行。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"958"}},[a._v("那么，数据驱动又怎样的呢？")]),a._v(" "),t("h3",{attrs:{"data-nodeid":"959"}},[a._v("数据驱动")]),a._v(" "),t("p",{attrs:{"data-nodeid":"960"}},[a._v("使用数据驱动的前提，在于将页面内容抽象为数据表达。基于抽象后的数据，这些数据会发生怎样的变化、又是如何被改变的，这些便是数据驱动的关注点。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"961"}},[a._v("数据驱动和事件驱动的最大差异是开发的视角。")]),a._v(" "),t("ul",{attrs:{"data-nodeid":"962"}},[t("li",{attrs:{"data-nodeid":"963"}},[t("p",{attrs:{"data-nodeid":"964"}},[a._v("事件驱动会关注于“操作”和“响应”，基于流程实现编码。")])]),a._v(" "),t("li",{attrs:{"data-nodeid":"965"}},[t("p",{attrs:{"data-nodeid":"966"}},[a._v("数据驱动则会关注于“数据”和“数据的变化”，基于状态实现编码。")])])]),a._v(" "),t("p",{attrs:{"data-nodeid":"967"}},[a._v("下面我们同样以实现一个提交表单的页面为例，介绍数据驱动的编码流程（由于篇幅关系，以下代码会基于 Vue.js 实现）。")]),a._v(" "),t("h4",{attrs:{"data-nodeid":"968"}},[a._v("数据驱动的编码流程")]),a._v(" "),t("p",{attrs:{"data-nodeid":"969"}},[a._v("对于提交表单的页面实现，数据驱动的编程方式同样可以分成三个步骤。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"970"}},[a._v("第一步：对页面进行抽象设计，使用合适的数据结构来表达。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"971"}},[a._v("抽象设计的内容会在第 14、15 讲内容中介绍，在这里我们先使用最简单的方式来设计：将页面中会变化和不会变化的内容隔离开，对其中会变化的内容进行抽象，再根据抽象结果来设计数据结构。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"972"}},[a._v("以页面中的表单为例，变化的部分包括两个输入框、两处展示输入框内容的文字。其中，输入框和展示部分关联着相同的内容，因此我们可以使用同一个数据来表达。")]),a._v(" "),t("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"973"}},[t("code",{attrs:{"data-language":"java"}},[t("span",{staticClass:"hljs-comment"},[a._v("// 包括一个 name 和 一个 email 的值")]),a._v("\nexport "),t("span",{staticClass:"hljs-keyword"},[a._v("default")]),a._v(" {\n  data() {\n    "),t("span",{staticClass:"hljs-keyword"},[a._v("return")]),a._v(" {\n      name: "),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(",\n      email: "),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(",\n    };\n  },\n};\n")])]),a._v(" "),t("p",{attrs:{"data-nodeid":"974"}},[a._v("通过这样的方式，我们得到了两个抽象后的数据，一个是名字"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1074"}},[a._v("name")]),a._v("，另外一个是邮件"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1076"}},[a._v("email")]),a._v("，它们都是字符串格式。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"975"}},[a._v("第二步：这个表单除了具备"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1079"}},[a._v("name")]),a._v("和"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1081"}},[a._v("email")]),a._v("两个数据，还包括两个分别用于改变数据的方法。因此，我们给该表单添加上更新值的方法：")]),a._v(" "),t("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"976"}},[t("code",{attrs:{"data-language":"java"}},[a._v("export "),t("span",{staticClass:"hljs-keyword"},[a._v("default")]),a._v(" {\n  data() {\n    "),t("span",{staticClass:"hljs-keyword"},[a._v("return")]),a._v(" {\n      name: "),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(",\n      email: "),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(",\n    };\n  },\n  methods: {\n    "),t("span",{staticClass:"hljs-comment"},[a._v("// 更新 name 值")]),a._v("\n    updateNameValue(newName) {\n      "),t("span",{staticClass:"hljs-keyword"},[a._v("this")]),a._v(".name = newName;\n    },\n    "),t("span",{staticClass:"hljs-comment"},[a._v("// 更新 email 值")]),a._v("\n    updateEmailValue(newEmail) {\n      "),t("span",{staticClass:"hljs-keyword"},[a._v("this")]),a._v(".email = newEmail;\n    },\n  },\n};\n")])]),a._v(" "),t("p",{attrs:{"data-nodeid":"977"}},[a._v("第三步：实现静态页面，并把数据和事件绑定到页面中。我们将步骤 1 中的数据绑定到页面中书输入框和展示值的地方，同时在需要监听事件的元素上绑定上述的方法。")]),a._v(" "),t("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"978"}},[t("code",{attrs:{"data-language":"java"}},[a._v("<form>\n  Name:\n  <p>"+a._s(a.name)+'</p>\n  <input\n    type="text"\n    name="name"\n    v-bind:value="name"\n    v-on:input="updateNameValue($event.target.value)"\n  />\n  Email:\n  <p>'+a._s(a.email)+'</p>\n  <input\n    type="email"\n    name="email"\n    v-bind:value="email"\n    v-on:input="updateEmailValue($event.target.value)"\n  />\n  <input type="submit" />\n</form>\n')])]),a._v(" "),t("p",{attrs:{"data-nodeid":"979"}},[a._v("如果说步骤 1 和步骤 2 分别是抽象数据和抽象逻辑的过程，那么步骤 3 则是将抽象数据的逻辑具现化的过程。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"980"}},[a._v("通过将抽象的逻辑具现化，我们最终将抽象的结果实现为应用的功能，这就是数据驱动的实现过程。")]),a._v(" "),t("h4",{attrs:{"data-nodeid":"981"}},[a._v("数据驱动和事件驱动的区别")]),a._v(" "),t("p",{attrs:{"data-nodeid":"982"}},[a._v("这里或许你会有些疑问，看起来只是写代码的顺序不一样而已，甚至写代码的顺序都是一样的，那事件驱动和数据驱动的区别在哪？")]),a._v(" "),t("p",{attrs:{"data-nodeid":"983"}},[t("strong",{attrs:{"data-nodeid":"1093"}},[a._v("1. 数据驱动更容易将视图与逻辑解绑，能快速适应变更和调整。")])]),a._v(" "),t("p",{attrs:{"data-nodeid":"984"}},[a._v("对于数据驱动，我们在编程实现的过程中，更多的是思考数据状态的维护和处理，而无需过于考虑 UI 的变化和事件的监听。即使我们页面 UI 全部重构了，影响到的只有模板中绑定的部分（即上面的第 3 个步骤），功能逻辑并不会受到影响。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"985"}},[a._v("简单来说，基于数据模型设计的代码，即使经历了需求变更、页面结构调整、服务器接口调整，也可以快速地实现更新和支持。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"986"}},[t("strong",{attrs:{"data-nodeid":"1101"}},[a._v("2. 事件驱动更倾向于流程式开发，数据驱动倾向于数据状态的变更和流动。")])]),a._v(" "),t("p",{attrs:{"data-nodeid":"987"}},[a._v("事件驱动的特点是，以某个交互操作为起点，流程式地处理逻辑。流程式的代码，在遇到中间某个环节变更，就需要同时更新该变更点前后环节的流程交接。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"988"}},[a._v("例如，对于页面加载渲染的过程，可以分成"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1104"}},[a._v("加载页面逻辑")]),a._v("->"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1106"}},[a._v("请求服务器")]),a._v("->"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1108"}},[a._v("更新页面")]),a._v("。如果需要在从服务器获取的基础上，新增"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1110"}},[a._v("读取本地缓存")]),a._v("的环节，同时需要在"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1112"}},[a._v("加载页面逻辑")]),a._v("、"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1114"}},[a._v("更新页面")]),a._v("两个环节进行衔接，并发地支持"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1116"}},[a._v("读取本地缓存")]),a._v("和"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1118"}},[a._v("请求服务器")]),a._v("。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"989"}},[a._v("而数据驱动的思考方式特点是，以数据为中心，思考数据的输入和输出。")]),a._v(" "),t("ul",{attrs:{"data-nodeid":"990"}},[t("li",{attrs:{"data-nodeid":"991"}},[t("p",{attrs:{"data-nodeid":"992"}},[a._v("数据来源：比如从服务器获取、用户输入、重置清空。")])]),a._v(" "),t("li",{attrs:{"data-nodeid":"993"}},[t("p",{attrs:{"data-nodeid":"994"}},[a._v("数据去处：比如提交给服务器。")])])]),a._v(" "),t("p",{attrs:{"data-nodeid":"995"}},[a._v("同样的，如果我们需新增"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1124"}},[a._v("读取本地缓存")]),a._v("的环节，在数据驱动的情况下，只是增加了一个数据来源，对于整个模型影响会小很多。")]),a._v(" "),t("ul",{attrs:{"data-nodeid":"996"}},[t("li",{attrs:{"data-nodeid":"997"}},[t("p",{attrs:{"data-nodeid":"998"}},[a._v("数据来源：从服务器获取、用户输入、重置清空、"),t("code",{attrs:{"data-backticks":"1","data-nodeid":"1127"}},[a._v("读取本地缓存")])])])]),a._v(" "),t("p",{attrs:{"data-nodeid":"999"}},[a._v("事件驱动和数据驱动一个很重要的区别在于，"),t("strong",{attrs:{"data-nodeid":"1132"}},[a._v("事件驱动是从每个事件的触发（“操作”）为中心来设计我们的代码，数据驱动则是以数据为中心，通过接收事件触发和更新数据状态的方式来实现页面功能。")])]),a._v(" "),t("p",{attrs:{"data-nodeid":"1000"}},[t("strong",{attrs:{"data-nodeid":"1137"}},[a._v("从事件驱动到数据驱动，可以理解为从用户交互为中心，调整成以数据的状态扭转为中心")]),a._v("，来进行一些页面逻辑的实现。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"1001"}},[a._v("事件驱动的方式相比于数据驱动，少了数据抽象设计的一部分，因此开发的时候可能很快就完成某个功能的实现。但从维护和拓展的角度来说，习惯数据驱动的方式，在遇到功能变更和迭代时可以更高效、更合理地进行调整。")]),a._v(" "),t("h3",{attrs:{"data-nodeid":"1002"}},[a._v("小结")]),a._v(" "),t("p",{attrs:{"data-nodeid":"1003"}},[a._v("今天我介绍了前端开发中两种编程思维模式：事件驱动和数据驱动。其中，由于浏览器属于 GUI 编程，我们在开发过程中常常基于“事件”和“响应”的方式来理解功能，因此大多数会倾向于使用事件驱动的方式。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"1004"}},[a._v("相比于事件驱动，数据驱动更倾向于以“数据”为中心，通过将页面抽象为数据表达，用数据状态变更的方式来表达功能逻辑。数据驱动更容易将视图与逻辑解绑，能快速适应变更和调整。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"1005"}},[a._v("在我们日常开发中，更多时候是结合了事件驱动和数据驱动来进行编码。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"1006"}},[a._v("Vue、Angular、React 这些前端框架的出现，处理了很多事件驱动流程上的工作，从而推动了更多开发者从事件驱动转变成数据驱动的方式，更加专注于数据的处理。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"1007"}},[a._v("技术的迭代、工具的更新和个人的成长，有时候是相辅相成的。思维模式也好，设计模式也好，我们在一次次的开发过程中，会不断地积累和加深一些思考，适合业务场景的才是最好的。")]),a._v(" "),t("p",{attrs:{"data-nodeid":"1008"}},[a._v("今日思考：你认为事件驱动和数据驱动，各自的优劣分别是什么呢？")]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"精选评论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[a._v("#")]),a._v(" 精选评论")]),a._v(" "),t("h5",{attrs:{id:"宋"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宋"}},[a._v("#")]),a._v(" 宋：")]),a._v(" "),t("blockquote",[t("p",[a._v("事件驱动：1.开发更加简单直观2.少了数据抽象设计，减少工作量3.对于大量涉及到dom频繁变化的需求，如动画之类，事件驱动开发更合适4.界面和业务逻辑强耦合，代码不易于更改和扩展需求数据驱动：1.需要合理抽象数据设计2.开发工作量梢大一些3.需要好的数据状态管理工具4.界面和业务逻辑分离，方便后期更改和扩展需求")])]),a._v(" "),t("h5",{attrs:{id:"kerita"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kerita"}},[a._v("#")]),a._v(" Kerita：")]),a._v(" "),t("blockquote",[t("p",[a._v("数据驱动可以方便地对复杂的数据进行处理，同时将数据展示在页面上。事件驱动方便与用户进行复杂交互或者展示复杂动画。")])]),a._v(" "),t("h5",{attrs:{id:"振"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#振"}},[a._v("#")]),a._v(" *振：")]),a._v(" "),t("blockquote",[t("p",[a._v("数据驱动怎么不是直接用 v-model，怎么还要绑定输入事件？")])]),a._v(" "),t("h6",{attrs:{id:"讲师回复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[a._v("#")]),a._v("     讲师回复：")]),a._v(" "),t("blockquote",[t("p",[a._v("    v-model 只是一个语法糖而已，实际上便是通过 v-bind 和事件绑定实现。这里一是为了方便说明和对比，二是因为并不是所有情况都能用 v-model 解决的~很多时候还是需要绑定事件的~")])])])}),[],!1,null,null,null);t.default=n.exports}}]);