((self||window).webpackJsonp=(self||window).webpackJsonp||[]).push([[8],{1478:function(e,t,r){"use strict";r(170),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(175)),a=o(r(233));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.children;return n.default.createElement(a.default,{large:!0,textLight:!0},t)};t.default=l},1479:function(e,t,r){"use strict";r(170),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(206)),a=o(r(363));function o(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)(a.default).attrs((function(e){return{light:!0,message:e.children}})).withConfig({displayName:"Loading",componentId:"sc-ln0ull-0"})(["align-self:center;"]);t.default=l},2773:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r(205),r(171),r(172),r(173),r(54),r(92),r(91),r(183),r(200),r(202),r(208),r(201),r(170),r(193),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(195),r(53),r(55),r(96),r(182),r(199),r(314);var a=g(r(206)),o=r(194),l=r(217),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(175)),i=r(215),c=g(r(236)),f=g(r(225)),s=r(1400),d=g(r(2774)),m=g(r(1478)),p=g(r(1479)),h=g(r(2775)),y=g(r(2776));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function g(e){return e&&e.__esModule?e:{default:e}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,u=[],i=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=(0,l.observer)((function(e){var t,r=e.viewState,n=e.item,a=e.itemSearchProvider,l=e.t,i=c.default.isMixedInto(n)?n.name:"Item",f=b((0,u.useState)({is:"loadingParameters"}),2),v=f[0],g=f[1],S=b((0,u.useState)([]),2),w=S[0],O=S[1],j=b((0,u.useState)({}),2),E=j[0],x=j[1];(0,u.useEffect)((function(){a.initialize().then((function(){return a.describeParameters().then((function(e){g({is:"search"}),O(e),x({})}))})).catch((function(e){console.warn(e),g({is:"error",error:e})})).finally((function(){var t;return null===(t=e.afterLoad)||void 0===t?void 0:t.call(e)}))}),[a]),(0,u.useEffect)((function(){return function(e,t){return(0,o.autorun)((function(){!1!==e.show&&!1!==e.terria.workbench.contains(e)||t()}))}(n,(function(){return r.closeTool()}))}),[n]);var P=null===(t=a.loadParameterHint)||void 0===t?void 0:t.bind(a);return u.default.createElement(s.Frame,{viewState:r,title:l("itemSearchTool.title",{itemName:i})},u.default.createElement(s.Main,{textLight:!0,light:!0},u.default.createElement(_,{centered:!0},"loadingParameters"===v.is&&u.default.createElement(p.default,null,l("itemSearchTool.loading")),"error"===v.is&&u.default.createElement(m.default,null,l("itemSearchTool.loadError")),"search"===v.is&&0===w.length&&u.default.createElement(m.default,null,l("itemSearchTool.noParameters"))),"search"===v.is&&w.length>0&&u.default.createElement(h.default,{itemSearchProvider:a,parameters:w,query:E,onResults:function(e,t){x(e),g({is:"results",results:t})},onValueChange:P}),"results"===v.is&&u.default.createElement(y.default,{item:n,results:v.results,template:n.search.resultTemplate}),"results"===v.is&&u.default.createElement(d.default,{onClick:function(){return g({is:"search"})}},l("itemSearchTool.backBtnText"))))}));var O=(0,i.withTranslation)()(w);t.default=O;var _=(0,a.default)(f.default).withConfig({displayName:"ItemSearchTool___StyledBox",componentId:"sc-uahz0f-0"})(["text-align:center;"])},2774:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r(54),r(53),r(92),r(201),r(91),r(170),r(193),r(171),r(172),r(173),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(206)),o=f(r(175)),l=r(225),u=f(r(241)),i=r(233),c=r(230);function f(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var d=function(e){var t=e.children,r=e.onClick,n=(0,a.useTheme)();return o.default.createElement(m,{transparentBg:!0,onClick:r,$_css:n.textLight,$_css2:n.textLight},o.default.createElement(l.BoxSpan,{centered:!0},o.default.createElement(p,{light:!0,styledWidth:"16px",glyph:c.GLYPHS.arrowDown}),o.default.createElement(i.TextSpan,{noFontSize:!0},t)))};t.default=d;var m=(0,a.default)(u.default).withConfig({displayName:"BackButton___StyledButton",componentId:"sc-7kx2ba-0"})(["color:",";border-color:",";margin:2em 0 1em 0;"],(function(e){return e.$_css}),(function(e){return e.$_css2})),p=(0,a.default)(c.StyledIcon).withConfig({displayName:"BackButton___StyledStyledIcon",componentId:"sc-7kx2ba-1"})(["transform:rotate(90deg);"])},2775:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r(171),r(172),r(173),r(183),r(208),r(177),r(178),r(176),r(170),r(188),r(193),r(184),r(185),r(245),r(243),r(266),r(182),r(201),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SearchButton=t.NumericParameter=t.FieldSet=void 0,r(54),r(291),r(53),r(92),r(91),r(198),r(311),r(199),r(314),r(331),r(195),r(200),r(202),r(211),r(279),r(287),r(205);var a=h(r(206)),o=h(r(878)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(175)),u=r(215),i=h(r(1392)),c=h(r(1478)),f=h(r(1479)),s=h(r(233)),d=h(r(225)),m=h(r(241));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function h(e){return e&&e.__esModule?e:{default:e}}function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,u=[],i=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=function(e){var t=e.parameter;switch(t.type){case"numeric":return l.default.createElement(_,y({},e,{parameter:t}));case"enum":return l.default.createElement(j,y({},e,{parameter:t}));case"text":return l.default.createElement(E,y({},e,{parameter:t}))}},_=function(e){var t,r,n=e.parameter,a=e.value,u=e.t,i=n.range,c=i.min,f=i.max,m=function(t){return function(r){var n=parseFloat(r.target.value),a=g({},e.value);isNaN(n)?delete a[t]:a[t]=n,e.onChange((0,o.default)(a)?void 0:a)}};return l.default.createElement(d.default,{column:!0},l.default.createElement(M,null,n.name),l.default.createElement(z,null,l.default.createElement(R,null,l.default.createElement(d.default,{column:!0},l.default.createElement(s.default,{small:!0},u("itemSearchTool.numericParameter.minimum")),l.default.createElement(T,{type:"number",name:"".concat(n.id,"-min"),value:null!==(t=null==a?void 0:a.start)&&void 0!==t?t:"",min:c,max:f,step:"any",placeholder:c.toString(),onChange:m("start")}))),l.default.createElement(R,null,l.default.createElement(d.default,{column:!0},l.default.createElement(s.default,{small:!0},u("itemSearchTool.numericParameter.maximum")),l.default.createElement(T,{type:"number",name:"".concat(n.id,"-max"),value:null!==(r=null==a?void 0:a.end)&&void 0!==r?r:"",min:c,max:f,step:"any",placeholder:f.toString(),onChange:m("end")})))))};t.NumericParameter=_;var j=function(e){var t=e.parameter,r=e.disabled,n=t.values.map((function(e){var t=e.id;return{value:t,label:t||"<empty>"}})),a=n.filter((function(t){var r;return null===(r=e.value)||void 0===r?void 0:r.includes(t.value)}));return l.default.createElement(d.default,{column:!0},l.default.createElement(I,null,l.default.createElement(M,null,t.name),l.default.createElement(A,{name:t.id,options:n,isMulti:!0,value:a,menuPosition:"fixed",onChange:function(t){var r=null==t?void 0:t.map((function(e){return e.value}));e.onChange(0===(null==r?void 0:r.length)?void 0:r)},isDisabled:r})))},E=function(e){var t=e.parameter,r=e.value,n=e.onChange;return l.default.createElement(d.default,{column:!0},l.default.createElement(I,null,l.default.createElement(M,null,t.name),l.default.createElement(T,{type:"text",name:t.id,value:r||"",onChange:function(e){return n(e.target.value?e.target.value:void 0)}})))},x=a.default.form.withConfig({displayName:"SearchForm__Form",componentId:"sc-1vi7mg7-0"})(["width:100%;"]),P=a.default.fieldset.withConfig({displayName:"SearchForm__FieldSet",componentId:"sc-1vi7mg7-1"})(["border:0;margin:0;padding:0;min-width:0;"]);t.FieldSet=P;var C=(0,a.default)(m.default).withConfig({displayName:"SearchForm__SearchButton",componentId:"sc-1vi7mg7-2"})(["margin:10px 10px 0 0;"]);t.SearchButton=C;var k=(0,a.default)(d.default).attrs({column:!0,paddedVertically:!0}).withConfig({displayName:"SearchForm__Field",componentId:"sc-1vi7mg7-3"})([""]),M=(0,a.default)(s.default).attrs({semiBold:!0}).withConfig({displayName:"SearchForm__ParameterName",componentId:"sc-1vi7mg7-4"})([""]),I=a.default.label.withConfig({displayName:"SearchForm__Label",componentId:"sc-1vi7mg7-5"})([""]),R=(0,a.default)(I).withConfig({displayName:"SearchForm__HalfWidthLabel",componentId:"sc-1vi7mg7-6"})(["width:45%;&:first-child{margin-right:1em;}"]),T=a.default.input.withConfig({displayName:"SearchForm__Input",componentId:"sc-1vi7mg7-7"})(["color:",";box-sizing:border-box;width:100%;height:38px;font-size:1.1em;"],(function(e){return e.theme.dark})),A=(0,a.default)(i.default).attrs({classNamePrefix:"ReactSelect"}).withConfig({displayName:"SearchForm__Select",componentId:"sc-1vi7mg7-8"})(["color:",";width:100%;& .ReactSelect__control{border-radius:0;}"],(function(e){return e.theme.dark})),N=(0,u.withTranslation)()((function(e){var t=e.parameters,r=e.itemSearchProvider,n=S((0,u.useTranslation)(),1)[0],a=S((0,l.useState)({is:"initial"}),2),o=a[0],i=a[1],s=S((0,l.useState)(e.query),2),p=s[0],h=s[1];(0,l.useEffect)((function(){h(e.query)}),[e.query]);var y="searching"===o.is;return l.default.createElement(x,{onSubmit:function(t){try{n=new Map(Object.entries(p).map((function(e){var t=S(e,2);return[t[0],t[1].value]}))),i({is:"searching"}),r.search(n).then((function(t){i({is:"results",results:t}),e.onResults(p,t)})).catch((function(e){console.warn(e),i({is:"error",error:e})}))}finally{t.preventDefault()}var n}},l.default.createElement(d.default,{centered:!0},"searching"===o.is&&l.default.createElement(f.default,null,n("itemSearchTool.searching")),"error"===o.is&&l.default.createElement(c.default,null,n("itemSearchTool.searchError"))),l.default.createElement(P,{disabled:y},t.map((function(t){var r,a,o;return l.default.createElement(k,{key:t.id},l.default.createElement(O,{parameter:t,onChange:(a=t.id,o=t.type,function(t){var r,n=g(g({},p),{},b({},a,{type:o,value:t}));void 0===n[a].value&&delete n[a],h(n),void 0!==t&&(null===(r=e.onValueChange)||void 0===r||r.call(e,a,t))}),value:null===(r=p[t.id])||void 0===r?void 0:r.value,disabled:y,t:n}))})),l.default.createElement(C,{primary:!0,type:"submit",disabled:y},n("itemSearchTool.searchBtnText")),l.default.createElement(m.default,{secondary:!0,type:"reset",onClick:function(){return h({})},disabled:y},n("itemSearchTool.resetBtnText"))))}));t.default=N;var z=(0,a.default)(d.default).withConfig({displayName:"SearchForm___StyledBox",componentId:"sc-1vi7mg7-9"})(["justify-content:space-between;"])},2776:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r(171),r(172),r(53),r(173),r(54),r(92),r(91),r(183),r(200),r(202),r(195),r(208),r(199),r(188),r(242),r(201),r(170),r(193),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ResultsCount=t.Result=void 0,r(198),r(205);var a=y(r(206)),o=r(217),l=y(r(472)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(175)),i=r(215),c=r(2777),f=y(r(225)),s=y(r(241)),d=y(r(312)),m=y(r(2778)),p=["index"];function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function y(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,u=[],i=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=(0,o.observer)((function(e){var t=e.result,r=e.template,n=e.isEven,a=e.isSelected,o=e.style,i=r?(0,d.default)(l.default.render(r,t.properties)):t.id;return u.default.createElement(w,{role:"button",isEven:n,isSelected:a,onClick:function(r){try{e.onClick(t)}finally{r.preventDefault()}},style:o},i)}));t.Result=S;var w=a.default.a.withConfig({displayName:"SearchResults__ClickableItem",componentId:"sc-mpaxje-0"})(["display:block;box-sizing:border-box;padding:5px 10px;cursor:pointer;",""],(function(e){return"background-color: ".concat(e.isSelected?e.theme.toolPrimaryColor:e.isEven?e.theme.dark:e.theme.darkLighter,";")})),O=a.default.div.withConfig({displayName:"SearchResults__List",componentId:"sc-mpaxje-1"})(["",";width:100%;overflow:auto;"],(function(e){return"height: ".concat(e.height)})),_=a.default.div.withConfig({displayName:"SearchResults__ListInner",componentId:"sc-mpaxje-2"})(["",";width:100%;position:relative;"],(function(e){return"height: ".concat(e.height)})),j=(0,a.default)(f.default).attrs({column:!0,flex:1}).withConfig({displayName:"SearchResults__Wrapper",componentId:"sc-mpaxje-3"})([">:only-child{flex:1;align-self:center;align-items:center;}"]),E=function(e){var t=e.count,r=g((0,i.useTranslation)(),1)[0];return u.default.createElement(k,{$_css:0===t?"align-self: center;":""},r("itemSearchTool.resultsCount",{count:t}))};t.ResultsCount=E;var x=(0,a.default)(s.default).attrs((function(e){return{primary:e.selected,secondary:!e.selected,textProps:{medium:!0}}})).withConfig({displayName:"SearchResults__ActionButton",componentId:"sc-mpaxje-4"})(["min-height:20px;padding:1em;padding-top:2px;padding-bottom:2px;border:0px;border-radius:5px;"]),P=a.default.div.withConfig({displayName:"SearchResults__ActionMenu",componentId:"sc-mpaxje-5"})(["display:flex;justify-content:flex-end;padding:0.5em;background-color:",";border-top-left-radius:5px;border-top-right-radius:5px;> ",":first-child{margin-right:1em;}"],(function(e){return e.theme.charcoalGrey}),x),C=function(e){var t=e.item,r=e.results,n=g((0,u.useState)({is:"highlightAll"}),2),a=n[0],o=n[1],l="highlightSingleResult"===a.is?a.result:void 0,f=u.default.createRef(),s=(0,c.useVirtual)({size:r.length,parentRef:f,estimateSize:u.default.useCallback((function(){return 50}),[])}),d=g((0,i.useTranslation)(),1)[0],h=function(e){a.is===e.is&&a.result===e.result?o({is:"none"}):o(e)};return u.default.createElement(j,null,u.default.createElement(E,{count:r.length}),u.default.createElement(P,null,u.default.createElement(x,{selected:"highlightAll"===a.is,onClick:function(){return h({is:"highlightAll"})}},d("itemSearchTool.actions.highlightAll")),u.default.createElement(x,{selected:"showMatchingOnly"===a.is,onClick:function(){return h({is:"showMatchingOnly"})}},d("itemSearchTool.actions.showMatchingOnly"))),u.default.createElement(O,{ref:f,height:"250px"},u.default.createElement(_,{height:"".concat(s.totalSize,"px")},s.virtualItems.map((function(t){var n=t.index,a=v(t,p);return u.default.createElement(S,{key:r[n].id,result:r[n],isSelected:r[n].id===(null==l?void 0:l.id),isEven:n%2==0,onClick:function(){return h({is:"highlightSingleResult",result:r[n]})},template:e.template,style:{position:"absolute",top:0,left:0,width:"100%",height:"".concat(a.size,"px"),transform:"translateY(".concat(a.start,"px)")}})})))),u.default.createElement(m.default,{effect:a,item:t,results:r}))};t.default=C;var k=(0,a.default)(f.default).withConfig({displayName:"SearchResults___StyledBox",componentId:"sc-mpaxje-6"})(["margin-bottom:1em;",""],(function(e){return e.$_css}))},2777:function(e,t,r){"use strict";r.r(t),r.d(t,"useVirtual",(function(){return m}));var n=r(175);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o,l=["bottom","height","left","right","top","width"],u=new Map,i=function e(){var t=[];u.forEach((function(e,r){var n,a,o=r.getBoundingClientRect();n=o,a=e.rect,void 0===n&&(n={}),void 0===a&&(a={}),l.some((function(e){return n[e]!==a[e]}))&&(e.rect=o,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),o=window.requestAnimationFrame(e)};var c="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function f(e){var t=n.useState(e.current),r=t[0],a=t[1],l=n.useReducer(s,null),f=l[0],d=l[1],m=n.useRef(!1);return c((function(){e.current!==r&&a(e.current)})),c((function(){if(r&&!m.current){m.current=!0;var e=r.getBoundingClientRect();d({rect:e})}}),[r]),n.useEffect((function(){if(r){var e,t,n=(e=r,t=function(e){d({rect:e})},{observe:function(){var r=0===u.size;u.has(e)?u.get(e).callbacks.push(t):u.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),r&&i()},unobserve:function(){var r=u.get(e);if(r){var n=r.callbacks.indexOf(t);n>=0&&r.callbacks.splice(n,1),r.callbacks.length||u.delete(e),u.size||cancelAnimationFrame(o)}}});return n.observe(),function(){n.unobserve()}}}),[r]),f}function s(e,t){var r=t.rect;return e&&e.height===r.height&&e.width===r.width?e:r}var d=function(){return 50};function m(e){var t,r,o=e.size,l=void 0===o?0:o,u=e.estimateSize,i=void 0===u?d:u,s=e.overscan,m=void 0===s?0:s,p=e.paddingStart,h=void 0===p?0:p,y=e.paddingEnd,v=void 0===y?0:y,g=e.parentRef,b=e.horizontal,S=e.scrollToFn,w=e.useObserver,O=b?"width":"height",_=b?"scrollLeft":"scrollTop",j=n.useRef({}),E=((w||f)(g)||((t={})[O]=0,t))[O],x=n.useCallback((function(e){g.current&&(g.current[_]=e)}),[g,_]),P=S||x;S=n.useCallback((function(e){P(e,x)}),[x,P]);var C=n.useState({}),k=C[0],M=C[1],I=n.useMemo((function(){for(var e=[],t=0;t<l;t++){var r=k[t],n=e[t-1]?e[t-1].end:h,a="number"==typeof r?r:i(t),o=n+a;e[t]={index:t,start:n,size:a,end:o}}return e}),[i,k,h,l]),R=((null==(r=I[l-1])?void 0:r.end)||0)+v;Object.assign(j.current,{overscan:m,measurements:I,outerSize:E,totalSize:R});var T=n.useState({start:0,end:0}),A=T[0],N=T[1];c((function(){var e=g.current;if(e){var t=function(){var t=e[_];j.current.scrollOffset=t,N((function(e){return function(e,t){var r=e.overscan,n=e.measurements,a=e.outerSize,o=e.scrollOffset,l=n.length,u=l-1;for(;u>0&&n[u].end>=o;)u-=1;var i=0;for(;i<l-1&&n[i].start<=o+a;)i+=1;if(u=Math.max(u-r,0),i=Math.min(i+r,l-1),!t||t.start!==u||t.end!==i)return{start:u,end:i};return t}(j.current,e)}))};return t(),e.addEventListener("scroll",t,{capture:!1,passive:!0}),function(){e.removeEventListener("scroll",t)}}}),[g.current,_,l,E]);var z=n.useMemo((function(){for(var e=[],t=Math.min(A.end,I.length-1),r=function(t){var r=a(a({},I[t]),{},{measureRef:function(e){var n=j.current.scrollOffset;if(e){var o=e.getBoundingClientRect()[O];o!==r.size&&(r.start<n&&x(n+(o-r.size)),M((function(e){var r;return a(a({},e),{},((r={})[t]=o,r))})))}}});e.push(r)},n=A.start;n<=t;n++)r(n);return e}),[A.start,A.end,I,O,x]),F=n.useRef();c((function(){F.current&&(i||l)&&M({}),F.current=!0}),[i,l]);var B=n.useCallback((function(e,t){var r=(void 0===t?{}:t).align,n=void 0===r?"start":r,a=j.current,o=a.scrollOffset,l=a.outerSize;"auto"===n&&(n=e<=o?"start":o>=o+l?"end":"start"),"start"===n?S(e):"end"===n?S(e-l):"center"===n&&S(e-l/2)}),[S]),D=n.useCallback((function(e,t){var r=void 0===t?{}:t,n=r.align,o=void 0===n?"auto":n,u=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,["align"]),i=j.current,c=i.measurements,f=i.scrollOffset,s=i.outerSize,d=c[Math.max(0,Math.min(e,l-1))];if(d){if("auto"===o)if(d.end>=f+s)o="end";else{if(!(d.start<=f))return;o="start"}var m="center"===o?d.start+d.size/2:"end"===o?d.end:d.start;B(m,a({align:o},u))}}),[B,l]),W=n.useCallback((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];D.apply(void 0,t),requestAnimationFrame((function(){D.apply(void 0,t)}))}),[D]);return{virtualItems:z,totalSize:R,scrollToOffset:B,scrollToIndex:W}}},2778:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r(54),r(53),r(92),r(201),r(91),r(170),r(193),r(171),r(172),r(173),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.HighlightResults=t.HideAllResults=void 0,r(205);var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(a,u,i):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(175));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}var l=function(e){var t=e.item,r=e.results,n=e.effect;switch(n.is){case"highlightAll":return a.default.createElement(i,{item:t,results:r});case"highlightSingleResult":return a.default.createElement(i,{item:t,results:n.result});case"showMatchingOnly":return a.default.createElement(u,{item:t,results:r});case"none":return null}};t.default=l;var u=function(e){var t=e.item,r=e.results;return(0,a.useEffect)((function(){return t.hideFeaturesNotInItemSearchResults(r)}),[t,r]),null};t.HideAllResults=u;var i=function(e){return(0,a.useEffect)((function(){var t=e.item,r=Array.isArray(e.results)?e.results:[e.results];return 1===r.length&&function(e,t){e.zoomToItemSearchResult(t)}(t,r[0]),t.highlightFeaturesFromItemSearchResults(r)}),[e.item,e.results]),null};t.HighlightResults=i}}]);