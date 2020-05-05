(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{Hfs0:function(s,t,a){"use strict";a.r(t);var r={data:function(){return{points:[],colorPoint:{},polylines:[{positions:[{lng:119.24884033203125,lat:30.31311798095703,height:1183.3186645507812},{lng:119.24906555725647,lat:30.312892755731806,height:1183.3186645507812}]},{positions:[{lng:119.24884033203125,lat:30.313392639160156,height:1183.804443359375},{lng:119.24906555725632,lat:30.31316741393502,height:1183.684988424182}]},{positions:[{lng:119.24884033203125,lat:30.313655853271484,height:1184.2783203125},{lng:119.24906555725632,lat:30.313430628046348,height:1184.1093236654997}]}]}},methods:{ready:function(s){for(var t=s.Cesium,a=(s.viewer,[]),r=0;r<5e4;r++){var n={};n.position={lng:40*Math.random()+85,lat:30*Math.random()+21},n.color="rgb(255,229,0)",n.pixelSize=8,a.push(n)}this.points=a,this.colorPoint=t.Color.fromCssColorString("rgb(255,229,0)")}}},n=a("JFUb"),e=Object(n.a)(r,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("PointCollection")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加海量点到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-collection-primitive-point",{attrs:{points:s.points}}),s._v(" "),a("vc-collection-primitive-point",[s._l(s.polylines,(function(t,r){return[s._l(t.positions,(function(t,n){return[a("vc-primitive-point",{key:"point"+r+"position"+n,attrs:{position:t,color:s.colorPoint,pixelSize:32}})]}))]}))],2)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-collection-primitive-point")]),this._v(" 组件用于加载点图元集合。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-point")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":points")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"points"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-point")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-point")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(polyline, index) of polylines"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(position, subIndex) of polyline.positions"')]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-point")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"'point' + index + 'position' + subIndex\"")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"colorPoint"')]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":pixelSize")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"32"')]),s._v("\n            >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-point")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-point")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("points")]),s._v(": [],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("colorPoint")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polylines")]),s._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24884033203125")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.313117980957031")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1183.3186645507812")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24906555725647")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.312892755731806")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1183.3186645507812")]),s._v(" }\n            ]\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24884033203125")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.313392639160156")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1183.804443359375")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24906555725632")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.31316741393502")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1183.6849884241819")]),s._v(" }\n            ]\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24884033203125")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.313655853271484")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1184.2783203125")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24906555725632")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.313430628046348")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1184.1093236654997")]),s._v(" }\n            ]\n          }\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" points = []\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50000")]),s._v("; i++) {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" point = {}\n          point.position = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          point.color = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgb(255,229,0)'")]),s._v("\n          point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v("\n          points.push(point)\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".points = points\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".colorPoint = Cesium.Color.fromCssColorString("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgb(255,229,0)'")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("modelMatrix")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。")])]),s._v(" "),a("tr",[a("td",[s._v("debugShowBoundingVolume")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否显示此图元的 BoundingVolume， 仅调试使用。")])]),s._v(" "),a("tr",[a("td",[s._v("blendOption")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定颜色混合选项。")])]),s._v(" "),a("tr",[a("td",[s._v("points")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("[]")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点集合数组。 数组对象结构为"),a("a",{attrs:{href:"./#/zh/primitive/vc-primitive-point"}},[a("code",{pre:!0},[s._v("vc-primitive-point")])]),s._v("组件属性。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html"}},[this._v("PointPrimitiveCollection")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=e.exports},TWVk:function(s,t,a){s.exports=a("Hfs0")}}]);
//# sourceMappingURL=168.739d2f48f381dbcce26f.js.map