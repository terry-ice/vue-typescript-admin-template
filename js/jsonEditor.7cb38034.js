(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jsonEditor"],{"0b6d":function(t,e,a){"use strict";var r=a("c5b0"),o=a.n(r);o.a},4453:function(t,e,a){"use strict";var r=a("a504"),o=a.n(r);o.a},"64ce":function(t,e,a){},a504:function(t,e,a){},c5b0:function(t,e,a){},e05a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container"},[t._m(0),a("div",{staticClass:"editor-container"},[a("json-editor",{ref:"jsonEditor",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[t._v("\n    Json-Editor is base on "),a("a",{attrs:{href:"https://github.com/codemirror/CodeMirror",target:"_blank"}},[t._v("CodeMirrorr")]),t._v(". Lint\n    base on "),a("a",{attrs:{href:"https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js",target:"_blank"}},[t._v("json-lint")]),t._v(".\n  ")])}],n=a("d225"),s=a("308d"),i=a("6bb5"),l=a("4e2b"),u=a("9ab4"),c=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"json-editor"},[a("textarea",{ref:"textarea"})])},b=[],m=a("b0b4"),f=a("56b3"),y=a.n(f);a("0dd0"),a("a7be"),a("acdf"),a("f9d4"),a("8822"),a("d2de");a("ae67");var p=function(t){function e(){return Object(n["a"])(this,e),Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(m["a"])(e,[{key:"onValueChange",value:function(t){if(this.jsonEditor){var e=this.jsonEditor.getValue();t!==e&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}}},{key:"mounted",value:function(){var t=this;this.jsonEditor=y.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",function(e){t.$emit("changed",e.getValue()),t.$emit("input",e.getValue())})}},{key:"setValue",value:function(t){this.jsonEditor&&this.jsonEditor.setValue(t)}},{key:"getValue",value:function(){return this.jsonEditor?this.jsonEditor.getValue():""}}]),e}(c["c"]);u["a"]([Object(c["b"])({required:!0})],p.prototype,"value",void 0),u["a"]([Object(c["d"])("value")],p.prototype,"onValueChange",null),p=u["a"]([c["a"]],p);var h=p,v=h,j=(a("4453"),a("e148"),a("0c7c")),_=Object(j["a"])(v,d,b,!1,null,"67c195fa",null),k=_.exports,O='[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]',x=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.value=JSON.parse(O),t}return Object(l["a"])(e,t),e}(c["c"]);x=u["a"]([Object(c["a"])({components:{JsonEditor:k}})],x);var E=x,g=E,C=(a("0b6d"),Object(j["a"])(g,r,o,!1,null,"f982e8b0",null));e["default"]=C.exports},e148:function(t,e,a){"use strict";var r=a("64ce"),o=a.n(r);o.a}}]);