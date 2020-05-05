(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+ju6":function(t,s,e){t.exports=e("5oW7")},"5oW7":function(t,s,e){"use strict";e.r(s);var a=e("JFUb"),r=Object(a.a)({data:function(){return{id:"Hello Vue Cesium",description:"This is a billboard",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{lng:90,lat:40,height:1e4},billboard:{},show:!0,distanceDisplayCondition:{near:0,far:2e7},horizontalOrigin:0}},mounted:function(){this.$refs.entity.createPromise.then((function(t){t.Cesium;var s=t.viewer,e=t.cesiumObject;s.zoomTo(e)}))},methods:{ready:function(t){t.Cesium,t.viewer}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("BillboardGraphics")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Example")]),t._v(" "),e("h3",[t._v("Load a BillboardGraphics with vc-graphics-billboard")]),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-entity",{ref:"entity",attrs:{position:t.position,description:t.description,id:t.id,billboard:t.billboard},on:{"update:billboard":function(s){t.billboard=s}}},[e("vc-graphics-billboard",{attrs:{image:t.image,scale:.1,show:t.show,distanceDisplayCondition:t.distanceDisplayCondition,horizontalOrigin:t.horizontalOrigin}})],1)],1),t._v(" "),e("div",{staticClass:"demo-tool"},[e("span",[t._v(t._s(t.show?"Hide":"Show"))]),t._v(" "),e("md-switch",{model:{value:t.show,callback:function(s){t.show=s},expression:"show"}})],1)],1)]],2),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("Events")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-graphics-billboard")]),this._v(" component is used to load billboard (a two dimensional icon) and needs to be used as a subcomponent of "),s("code",{pre:!0},[this._v("vc-entity")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"entity"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"id"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":billboard.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"billboard"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-billboard")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":image")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"image"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":scale")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"0.1"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":distanceDisplayCondition")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"distanceDisplayCondition"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":horizontalOrigin")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"horizontalOrigin"')]),t._v("\n        >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-billboard")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"demo-tool"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("{{ show ? 'Hide' : 'Show' }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Vue Cesium'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("description")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'This is a billboard'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("90")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10000")]),t._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("billboard")]),t._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("distanceDisplayCondition")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("near")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("far")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20000000")]),t._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("horizontalOrigin")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.entity.createPromise.then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("{ Cesium, viewer, cesiumObject }")]),t._v(") =>")]),t._v(" {\n        viewer.zoomTo(cesiumObject)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying the visibility of the billboard.")])]),t._v(" "),e("tr",[e("td",[t._v("image")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the Image, URI, or Canvas to use for the billboard.")])]),t._v(" "),e("tr",[e("td",[t._v("scale")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("1.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the scale to apply to the image size.")])]),t._v(" "),e("tr",[e("td",[t._v("pixelOffset")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("{x: 0, y: 0}")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Cartesian2 Property specifying the pixel offset. "),e("strong",[t._v("structure: { x: number, y: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("eyeOffset")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("{x: 0, y: 0, z: 0}")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Cartesian3 Property specifying the eye offset.")])]),t._v(" "),e("tr",[e("td",[t._v("horizontalOrigin")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the HorizontalOrigin. "),e("strong",[t._v("CENTER: 0, LEFT: 1, RIGHT: -1")])])]),t._v(" "),e("tr",[e("td",[t._v("verticalOrigin")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the VerticalOrigin. "),e("strong",[t._v("CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1")])])]),t._v(" "),e("tr",[e("td",[t._v("heightReference")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying what the height is relative to. "),e("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("Object|String")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("'white'")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the tint Color of the image.")])]),t._v(" "),e("tr",[e("td",[t._v("rotation")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the rotation about the alignedAxis. "),e("strong",[t._v("structure: { x: number, y: number, z: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("alignedAxis")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("{x: 0, y: 0, z: 0}")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Cartesian3 Property specifying the unit vector axis of rotation.")])]),t._v(" "),e("tr",[e("td",[t._v("sizeInMeters")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying whether this billboard's size should be measured in meters.")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the width of the billboard in pixels, overriding the native size.")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the height of the billboard in pixels, overriding the native size.")])]),t._v(" "),e("tr",[e("td",[t._v("scaleByDistance")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A NearFarScalar Property used to scale the point based on distance from the camera. "),e("strong",[t._v("structure: { near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("translucencyByDistance")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A NearFarScalar Property used to set translucency based on distance from the camera. "),e("strong",[t._v("structure: { near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("pixelOffsetScaleByDistance")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A NearFarScalar Property used to set pixelOffset based on distance from the camera. "),e("strong",[t._v("structure: { near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("imageSubRegion")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying a BoundingRectangle that defines a sub-region of the image to use for the billboard, rather than the entire image, measured in pixels from the bottom-left.")])]),t._v(" "),e("tr",[e("td",[t._v("distanceDisplayCondition")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying at what distance from the camera that this billboard will be displayed. "),e("strong",[t._v("structure: { near: number, far: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("disableDepthTestDistance")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the distance from the camera at which to disable the depth test to.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/BillboardGraphics.html"}},[this._v("BillboardGraphics")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),t._v(" "),e("tr",[e("td",[t._v("definitionChanged")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);s.default=r.exports}}]);
//# sourceMappingURL=15.0d5052938342b7812d64.js.map