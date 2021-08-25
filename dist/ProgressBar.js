module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=77)}({0:function(e,n,t){e.exports=t(30)()},1:function(e,n){e.exports=require("react")},118:function(e,n,t){(n=e.exports=t(13)(!0)).push([e.i,'._1Sqs7D5mukWn2nOcvTmkAt{width:100%;overflow-x:hidden;position:relative;left:0;bottom:-12px}._6FrmJSaPxWD8rHoAQw2E3{position:relative}._3908VmKIi5jE0-hk6X3CPJ{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;cursor:pointer;width:100%;height:30px;margin:0;border-radius:50px}._3908VmKIi5jE0-hk6X3CPJ::-webkit-slider-runnable-track{height:20px;width:1440px;content:"";pointer-events:none;background:#d7eeff}._3908VmKIi5jE0-hk6X3CPJ::-webkit-slider-thumb{-webkit-appearance:none;height:35px;width:35px;position:relative;margin-top:-2em;box-sizing:border-box;border:solid 1px transparent;border-radius:1px;transform:translateY(-0.8em) rotate(30deg) skewY(30deg) scaleX(0.86603);box-shadow:inset -1px -1px #3a3534;background:linear-gradient(-45deg, #3a3534 20%, #60858a 50%, #3a3534 50%, #3a3534 calc(50% + 1px), rgba(0,0,0,0) calc(50% + 1px)) no-repeat content-box;filter:drop-shadow(0 0 #3a3534)}._3908VmKIi5jE0-hk6X3CPJ::-moz-range-track{height:20px;width:1440px;content:"";pointer-events:none;background:#d7eeff}._3908VmKIi5jE0-hk6X3CPJ::-moz-range-thumb{-moz-appearance:none;height:35px;width:35px;position:relative;box-sizing:border-box;border:solid 1px transparent;border-radius:1px;transform:translateY(-2.2em) rotate(30deg) skewY(30deg) scaleX(0.76603);box-shadow:inset -1px -1px #3a3534;background:linear-gradient(-45deg, #3a3534 20%, #60858a 50%, #3a3534 50%, #3a3534 calc(50% + 1px), rgba(0,0,0,0) calc(50% + 1px)) no-repeat content-box;filter:drop-shadow(0 0 #3a3534)}\n',"",{version:3,sources:["/Applications/projects/react-transcript-editor/packages/components/media-player/src/ProgressBar.module.scss","/Applications/projects/react-transcript-editor/packages/config/style-guide/colours.scss"],names:[],mappings:"AA0BA,yBACE,UAAW,CACX,iBAAkB,CAClB,iBAAkB,CAClB,MAAO,CACP,YAAa,CACd,wBAEC,iBAAkB,CACnB,yBAEC,uBAAwB,CACxB,oBAAqB,CACrB,eAAgB,CAChB,eAAgB,CAChB,cAAe,CACf,UAAW,CACX,WAAY,CACZ,QAAS,CACT,kBAAmB,CATrB,wDAaI,WA7CgB,CA8ChB,YA/CU,CAgDV,UAAW,CACX,mBAAoB,CACpB,kBCrDoB,CDoCxB,+CAqBI,uBAAwB,CACxB,WAAY,CACZ,UAAW,CACX,iBAAkB,CAClB,eAAgB,CAChB,qBAAsB,CACtB,4BAA6B,CAC7B,iBAAkB,CAClB,uEAAwE,CACxE,kCAAmC,CACnC,uJAQuB,CACvB,+BAAgC,CAxCpC,2CA6CI,WA7EgB,CA8EhB,YA/EU,CAgFV,UAAW,CACX,mBAAoB,CACpB,kBCrFoB,CDoCxB,2CAqDI,oBAAqB,CACrB,WAAY,CACZ,UAAW,CACX,iBAAkB,CAClB,qBAAsB,CACtB,4BAA6B,CAC7B,iBAAkB,CAClB,uEAAwE,CACxE,kCAAmC,CACnC,uJAQuB,CACvB,+BAAgC",file:"ProgressBar.module.scss",sourcesContent:['@import "../../../config/style-guide/colours.scss";\n\n$slider-width-number: 1440;\n$slider-width: #{$slider-width-number}px;\n$slider-height: 20px;\n$background-slider: $color-light-grey;\n$bar-slider-filled: $color-labs-red;\n$thumb-width: 50px;\n$thumb-height: 50px;\n$shadow-size: -7px;\n$fit-thumb-in-slider: -7px;\n\n@function strip-units($number) {\n  @return $number / ($number * 0 + 1);\n}\n\n@function makelongshadow($color, $size) {\n  $val: 1px 0 0 $size $color;\n\n  @for $i from 1 through $slider-width-number {\n    $val: #{$val}, #{$i}px 0 0 $size #{$color};\n  }\n\n  @return $val;\n}\n\n.wrapper {\n  width: 100%;\n  overflow-x: hidden;\n  position: relative;\n  left: 0;\n  bottom: -12px;\n}\n.progress-wrapper {\n  position: relative;\n}\n.bar {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: none;\n  cursor: pointer;\n  width: 100%;\n  height: 30px;\n  margin: 0;\n  border-radius: 50px;\n\n  // Chrome\n  &::-webkit-slider-runnable-track {\n    height: $slider-height;\n    width: $slider-width;\n    content: "";\n    pointer-events: none;\n    background: $bar-slider-filled;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 35px;\n    width: 35px;\n    position: relative;\n    margin-top: -2em;\n    box-sizing: border-box;\n    border: solid 1px transparent;\n    border-radius: 1px;\n    transform: translateY(-0.8em) rotate(30deg) skewY(30deg) scaleX(0.86603);\n    box-shadow: inset -1px -1px #3a3534;\n    background: linear-gradient(\n        -45deg,\n        #3a3534 20%,\n        #60858a 50%,\n        #3a3534 50%,\n        #3a3534 calc(50% + 1px),\n        rgba(0, 0, 0, 0) calc(50% + 1px)\n      )\n      no-repeat content-box;\n    filter: drop-shadow(0 0 #3a3534);\n  }\n\n  // Firefox\n  &::-moz-range-track {\n    height: $slider-height;\n    width: $slider-width;\n    content: "";\n    pointer-events: none;\n    background: $bar-slider-filled;\n  }\n\n  &::-moz-range-thumb {\n    -moz-appearance: none;\n    height: 35px;\n    width: 35px;\n    position: relative;\n    box-sizing: border-box;\n    border: solid 1px transparent;\n    border-radius: 1px;\n    transform: translateY(-2.2em) rotate(30deg) skewY(30deg) scaleX(0.76603);\n    box-shadow: inset -1px -1px #3a3534;\n    background: linear-gradient(\n        -45deg,\n        #3a3534 20%,\n        #60858a 50%,\n        #3a3534 50%,\n        #3a3534 calc(50% + 1px),\n        rgba(0, 0, 0, 0) calc(50% + 1px)\n      )\n      no-repeat content-box;\n    filter: drop-shadow(0 0 #3a3534);\n  }\n}\n',"$color-labs-red: #d7eeff !default;\n$color-darkest-grey: #fff !default;\n$color-dark-grey: #000 !default;\n$color-mid-grey: #696969 !default;\n$color-light-grey: #f1f3f5 !default;\n$color-lightest-grey: #f2f2f2 !default;\n$color-subt-green: #000 !default;\n$color-light-shilo: #ddd !default;\n"]}]),n.locals={wrapper:"_1Sqs7D5mukWn2nOcvTmkAt","progress-wrapper":"_6FrmJSaPxWD8rHoAQw2E3",bar:"_3908VmKIi5jE0-hk6X3CPJ"}},13:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},14:function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e,n){return n?n.querySelector(e):document.querySelector(e)},c=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=s.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),u=null,l=0,p=[],f=t(32);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(C(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(C(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function b(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),p.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,t);t.insertBefore(n,o)}}function A(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=p.indexOf(e);n>=0&&p.splice(n,1)}function g(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return m(n,e.attrs),b(e,n),n}function m(e,n){Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])}))}function C(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=l++;t=u||(u=g(n)),r=y.bind(null,t,a,!1),o=y.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(n,e.attrs),b(e,n),n}(n),r=B.bind(null,t,n),o=function(){A(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(n),r=w.bind(null,t),o=function(){A(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=h(e,n);return d(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}e&&d(h(e,n),n);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,x=(v=[],function(e,n){return v[e]=n,v.filter(Boolean).join("\n")});function y(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function w(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function B(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},19:function(e,n,t){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,n){try{return function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){var s,c,u,l=r(n),p=r(t);if(l&&p){if((c=n.length)!=t.length)return!1;for(s=c;0!=s--;)if(!e(n[s],t[s]))return!1;return!0}if(l!=p)return!1;var f=n instanceof Date,d=t instanceof Date;if(f!=d)return!1;if(f&&d)return n.getTime()==t.getTime();var h=n instanceof RegExp,b=t instanceof RegExp;if(h!=b)return!1;if(h&&b)return n.toString()==t.toString();var A=o(n);if((c=A.length)!==o(t).length)return!1;for(s=c;0!=s--;)if(!i.call(t,A[s]))return!1;if(a&&n instanceof Element&&t instanceof Element)return n===t;for(s=c;0!=s--;)if(!("_owner"===(u=A[s])&&n.$$typeof||e(n[u],t[u])))return!1;return!0}return n!=n&&t!=t}(e,n)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},30:function(e,n,t){"use strict";var r=t(31);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},31:function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},32:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,(function(e,n){return n})).replace(/^'(.*)'$/,(function(e,n){return n}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},50:function(e,n,t){var r=t(118);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(14)(r,o);r.locals&&(e.exports=r.locals)},77:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),i=t(0),a=t.n(i),s=t(19),c=t.n(s),u=t(50),l=t.n(u);function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t,r=0;r<n.length;r++)(t=n[r]).enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=g(e);if(n){var o=g(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return b(this,t)}}function b(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?A(e):n}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C=function(e){function n(){var e;p(this,n);for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return m(A(e=a.call.apply(a,[this].concat(r))),"shouldComponentUpdate",(function(n){return!c()(e.props,n)})),m(A(e),"handleOnChange",(function(n){e.props.buttonClick(n)})),e}!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,e);var t,r,i,a=h(n);return t=n,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"progress-wrapper ".concat(l.a.wrapper)},o.a.createElement("input",{type:"range",className:l.a.bar,onChange:this.handleOnChange,value:this.props.value,min:"0",max:this.props.max.toString()}))}}])&&f(t.prototype,r),i&&f(t,i),n}(o.a.Component);C.propTypes={value:a.a.string,max:a.a.string,buttonClick:a.a.func},C.defaultProps={value:"0",max:"0"},n.default=C}});
//# sourceMappingURL=ProgressBar.js.map