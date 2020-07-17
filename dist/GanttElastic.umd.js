(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["GanttElastic"] = factory(require("vue"));
	else
		root["GanttElastic"] = factory(root["vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/GanttElastic.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[class^='gantt-elastic'],\n[class*=' gantt-elastic'] {\n  box-sizing: border-box;\n}\n.gantt-elastic__main-view svg {\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line,\n.gantt-elastic__grid-vertical-line {\n  stroke: #a0a0a0;\n  stroke-width: 1;\n}\nforeignObject > * {\n  margin: 0px;\n}\n.gantt-elastic .p-2 {\n  padding: 10rem;\n}\n.gantt-elastic__main-view-main-container,\n.gantt-elastic__main-view-container {\n  overflow: hidden;\n  max-width: 100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type {\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type {\n  border-bottom: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container {\n  position: relative;\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value {\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.valueOf()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: mergeDeep, mergeDeepReactive, notEqualDeep, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return mergeDeepReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return notEqualDeep; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainView.vue */ "./src/components/MainView.vue");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.js */ "./src/style.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const ctx = document.createElement('canvas').getContext('2d');
let VueInst = vue__WEBPACK_IMPORTED_MODULE_0___default.a;
function initVue() {
  if (typeof Vue !== 'undefined' && typeof VueInst === 'undefined') {
    VueInst = Vue;
  }
}
initVue();

let hourWidthCache = null;

/**
 * Helper function to fill out empty options in user settings
 *
 * @param {object} userOptions - initial user options that will merge with those below
 * @returns {object} merged options
 */
function getOptions(userOptions) {
  let localeName = 'en';
  if (typeof userOptions.locale !== 'undefined' && typeof userOptions.locale.name !== 'undefined') {
    localeName = userOptions.locale.name;
  }
  return {
    stages: [],
    slots: {
      header: {}
    },
    taskMapping: {
      //*
      id: 'id',
      start: 'start',
      label: 'label',
      duration: 'duration',
      progress: 'progress',
      type: 'type',
      style: 'style',
      collapsed: 'collapsed'
    },
    width: 0,
    height: 0,
    clientWidth: 0,
    outerHeight: 0,
    rowsHeight: 0,
    allVisibleTasksHeight: 0,
    scroll: {
      scrolling: false,
      dragXMoveMultiplier: 3, //*
      dragYMoveMultiplier: 2, //*
      top: 0,
      taskList: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      chart: {
        left: 0,
        right: 0,
        percent: 0,
        timePercent: 0,
        top: 0,
        bottom: 0,
        time: 0,
        timeCenter: 0,
        dateTime: {
          left: '',
          right: ''
        }
      }
    },
    scope: {
      //*
      before: 1,
      after: 1
    },
    times: {
      timeScale: 60 * 1000,
      timeZoom: 17, //*
      timePerPixel: 0,
      firstTime: null,
      lastTime: null,
      firstTaskTime: 0,
      lastTaskTime: 0,
      totalViewDurationMs: 0,
      totalViewDurationPx: 0,
      stepDuration: 'day',
      steps: []
    },
    row: {
      height: 26 //*
    },
    maxRows: 20, //*
    maxHeight: 0, //*
    chart: {
      grid: {
        horizontal: {
          gap: 2 //*
        }
      },
      progress: {
        width: 20, //*
        height: 6, //*
        pattern: true,
        bar: false
      },
      text: {
        offset: 4, //*
        xPadding: 10, //*
        display: true //*
      },
      expander: {
        type: 'chart',
        display: false, //*
        displayIfTaskListHidden: true, //*
        offset: 4, //*
        size: 18
      }
    },
    taskList: {
      display: true, //*
      resizeAfterThreshold: true, //*
      widthThreshold: 75, //*
      columns: [
        //*
        {
          id: 0,
          label: 'ID',
          value: 'id',
          width: 40
        }
      ],
      percent: 100, //*
      width: 0,
      finalWidth: 0,
      widthFromPercentage: 0,
      minWidth: 18,
      expander: {
        type: 'task-list',
        size: 16,
        columnWidth: 24,
        padding: 16,
        margin: 10,
        straight: false
      }
    },
    calendar: {
      workingDays: [1, 2, 3, 4, 5], //*
      gap: 6, //*
      height: 0,
      strokeWidth: 1,
      hour: {
        height: 20, //*
        display: true, //*
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        formatted: {
          long: [],
          medium: [],
          short: []
        },
        format: {
          //*
          long(date) {
            return date.format('HH:mm');
          },
          medium(date) {
            return date.format('HH:mm');
          },
          short(date) {
            return date.format('HH');
          }
        }
      },
      day: {
        height: 20, //*
        display: true, //*
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        format: {
          long(date) {
            return date.format('DD dddd');
          },
          medium(date) {
            return date.format('DD ddd');
          },
          short(date) {
            return date.format('DD');
          }
        }
      },
      month: {
        height: 20, //*
        display: true, //*
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        format: {
          //*
          short(date) {
            return date.format('MM');
          },
          medium(date) {
            return date.format("MMM 'YY");
          },
          long(date) {
            return date.format('MMMM YYYY');
          }
        }
      }
    },
    locale: {
      //*
      name: 'en',
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekStart: 1,
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      formats: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      ordinal: n => {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`;
      }
    }
  };
}

/**
 * Prepare style
 *
 * @returns {object}
 */
function prepareStyle(userStyle) {
  let fontSize = '12px';
  let fontFamily = window
    .getComputedStyle(document.body)
    .getPropertyValue('font-family')
    .toString();
  if (typeof userStyle !== 'undefined') {
    if (typeof userStyle.fontSize !== 'undefined') {
      fontSize = userOptions.fontSize;
    }
    if (typeof userStyle.fontFamily !== 'undefined') {
      fontFamily = userStyle.fontFamily;
    }
  }
  return Object(_style_js__WEBPACK_IMPORTED_MODULE_3__["default"])(fontSize, fontFamily);
}

/**
 * Helper function to determine if specified variable is an object
 *
 * @param {any} item
 *
 * @returns {boolean}
 */
function isObject(item) {
  return (
    item &&
    typeof item === 'object' &&
    !Array.isArray(item) &&
    !(item instanceof HTMLElement) &&
    !(item instanceof CanvasRenderingContext2D) &&
    typeof item !== 'function'
  );
}

/**
 * Helper function which will merge objects recursively - creating brand new one - like clone
 *
 * @param {object} target
 * @params {object} sources
 *
 * @returns {object}
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          target[key] = {};
        }
        target[key] = mergeDeep(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        target[key] = [];
        for (let item of source[key]) {
          if (isObject(item)) {
            target[key].push(mergeDeep({}, item));
            continue;
          }
          target[key].push(item);
        }
      } else {
        target[key] = source[key];
      }
    }
  }
  return mergeDeep(target, ...sources);
}

/**
 * Detect if object or array is observable
 *
 * @param {object|array} obj
 *
 * @returns {boolean}
 */
function isObservable(obj) {
  return typeof obj === 'object' && obj.hasOwnProperty('__ob__');
}

/**
 * Same as above but with reactivity in mind
 *
 * @param {object} target
 * @params {object} sources
 *
 * @returns {object}
 */
function mergeDeepReactive(component, target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          component.$set(target, key, {});
        }
        mergeDeepReactive(component, target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        component.$set(target, key, source[key]);
      } else if (typeof source[key] === 'function') {
        if (source[key].toString().indexOf('[native code]') === -1) {
          target[key] = source[key];
        }
      } else {
        component.$set(target, key, source[key]);
      }
    }
  }
  return mergeDeepReactive(component, target, ...sources);
}
/**
 * Check if objects or arrays are equal by comparing nested values
 *
 * @param {object|array} left
 * @param {object|array} right
 *
 * @returns {boolean}
 */
function notEqualDeep(left, right, cache = [], path = '') {
  if (typeof right !== typeof left) {
    return { left, right, what: path + '.typeof' };
  } else if (Array.isArray(left) && !Array.isArray(right)) {
    return { left, right, what: path + '.isArray' };
  } else if (Array.isArray(right) && !Array.isArray(left)) {
    return { left, right, what: path + '.isArray' };
  } else if (Array.isArray(left) && Array.isArray(right)) {
    if (left.length !== right.length) {
      return { left, right, what: path + '.length' };
    }
    let what;
    for (let index = 0, len = left.length; index < len; index++) {
      if ((what = notEqualDeep(left[index], right[index], cache, path + '.' + index))) {
        return what;
      }
    }
  } else if (isObject(left) && !isObject(right)) {
    return { left, right, what: path + '.isObject' };
  } else if (isObject(right) && !isObject(left)) {
    return { left, right, what: path + '.isObject' };
  } else if (isObject(left) && isObject(right)) {
    for (let key in left) {
      if (!left.hasOwnProperty(key) || !left.propertyIsEnumerable(key)) {
        continue;
      }
      if (!right.hasOwnProperty(key)) {
        return { left, right, what: path + '.' + key };
      }
      let what;
      if ((what = notEqualDeep(left[key], right[key], cache, path + '.' + key))) {
        return what;
      }
    }
  } else if (left !== right) {
    return { left, right, what: path + '. !==' };
  }
  return false;
}

/**
 * GanttElastic
 * Main vue component
 */
const GanttElastic = {
  name: 'GanttElastic',
  components: {
    MainView: _components_MainView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['tasks', 'options', 'dynamicStyle'],
  provide() {
    const provider = {};
    const self = this;
    Object.defineProperty(provider, 'root', {
      enumerable: true,
      get: () => self
    });
    return provider;
  },
  data() {
    return {
      state: {
        tasks: [],
        options: {
          scrollBarHeight: 0,
          allVisibleTasksHeight: 0,
          outerHeight: 0,
          scroll: {
            left: 0,
            top: 0
          }
        },
        dynamicStyle: {},
        refs: {},
        tasksById: {},
        taskTree: {},
        ctx,
        emitTasksChanges: true, // some operations may pause emitting changes to parent component
        emitOptionsChanges: true, // some operations may pause emitting changes to parent component
        resizeObserver: null,
        unwatchTasks: null,
        unwatchOptions: null,
        unwatchStyle: null,
        unwatchOutputTasks: null,
        unwatchOutputOptions: null,
        unwatchOutputStyle: null
      }
    };
  },
  methods: {
    mergeDeep,
    mergeDeepReactive,

    /**
     * Calculate height of scrollbar in current browser
     *
     * @returns {number}
     */
    getScrollBarHeight() {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.height = '100px';
      outer.style.msOverflowStyle = 'scrollbar';
      document.body.appendChild(outer);
      var noScroll = outer.offsetHeight;
      outer.style.overflow = 'scroll';
      var inner = document.createElement('div');
      inner.style.height = '100%';
      outer.appendChild(inner);
      var withScroll = inner.offsetHeight;
      outer.parentNode.removeChild(outer);
      const height = noScroll - withScroll;
      this.style['chart-scroll-container--vertical']['margin-left'] = `-${height}px`;
      return (this.state.options.scrollBarHeight = height);
    },

    /**
     * Fill out empty task properties and make it reactive
     *
     * @param {array} tasks
     */
    fillTasks(tasks) {
      for (let task of tasks) {
        if (typeof task.x === 'undefined') {
          task.x = 0;
        }
        if (typeof task.y === 'undefined') {
          task.y = 0;
        }
        if (typeof task.width === 'undefined') {
          task.width = 0;
        }
        if (typeof task.height === 'undefined') {
          task.height = 0;
        }
        if (typeof task.mouseOver === 'undefined') {
          task.mouseOver = false;
        }
        if (typeof task.collapsed === 'undefined') {
          task.collapsed = false;
        }
        if (typeof task.dependentOn === 'undefined') {
          task.dependentOn = [];
        }
        if (typeof task.parentId === 'undefined') {
          task.parentId = null;
        }
        if (typeof task.style === 'undefined') {
          task.style = {};
        }
        if (typeof task.children === 'undefined') {
          task.children = [];
        }
        if (typeof task.allChildren === 'undefined') {
          task.allChildren = [];
        }
        if (typeof task.parents === 'undefined') {
          task.parents = [];
        }
        if (typeof task.parent === 'undefined') {
          task.parent = null;
        }
        if (typeof task.startTime === 'undefined') {
          task.startTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.start).valueOf();
        }
        if (typeof task.endTime === 'undefined' && task.hasOwnProperty('end')) {
          task.endTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.end).valueOf();
        } else if (typeof task.endTime === 'undefined' && task.hasOwnProperty('duration')) {
          task.endTime = task.startTime + task.duration;
        }
        if (typeof task.duration === 'undefined' && task.hasOwnProperty('endTime')) {
          task.duration = task.endTime - task.startTime;
        }
      }
      return tasks;
    },

    /**
     * Map tasks
     *
     * @param {Array} tasks
     * @param {Object} options
     */
    mapTasks(tasks, options) {
      for (let [index, task] of tasks.entries()) {
        tasks[index] = {
          ...task,
          id: task[options.taskMapping.id],
          start: task[options.taskMapping.start],
          label: task[options.taskMapping.label],
          duration: task[options.taskMapping.duration],
          progress: task[options.taskMapping.progress],
          type: task[options.taskMapping.type],
          style: task[options.taskMapping.style],
          collapsed: task[options.taskMapping.collapsed]
        };
      }
      return tasks;
    },

    /**
     * Initialize component
     */
    initialize(itsUpdate = '') {
      let options = mergeDeep({}, this.state.options, getOptions(this.options), this.options);
      let tasks = this.mapTasks(this.tasks, options);
      if (Object.keys(this.state.dynamicStyle).length === 0) {
        this.initializeStyle();
      }
      dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(options.locale, null, true);
      dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(options.locale.name);
      if (typeof options.taskList === 'undefined') {
        options.taskList = {};
      }
      options.taskList.columns = options.taskList.columns.map((column, index) => {
        column.thresholdPercent = 100;
        column.widthFromPercentage = 0;
        column.finalWidth = 0;
        if (typeof column.height === 'undefined') {
          column.height = 0;
        }
        if (typeof column.style === 'undefined') {
          column.style = {};
        }
        column._id = `${index}-${column.label}`;
        return column;
      });
      this.state.options = options;
      tasks = this.fillTasks(tasks);
      tasks.forEach(task => {
        if (task.tasks) {
          this.mapTasks(task.tasks, options);
          this.fillTasks(task.tasks);
        }
      });
      this.state.tasksById = this.resetTaskTree(tasks);
      this.state.taskTree = this.makeTaskTree(this.state.rootTask, tasks);
      this.state.tasks = this.state.taskTree.allChildren.map(childId => this.getTask(childId));
      this.calculateTaskListColumnsDimensions();
      this.state.options.scrollBarHeight = this.getScrollBarHeight();
      this.state.options.outerHeight = this.state.options.height + this.state.options.scrollBarHeight;
      this.globalOnResize();
    },

    /**
     * Initialize style
     */
    initializeStyle() {
      this.state.dynamicStyle = mergeDeep({}, prepareStyle(this.dynamicStyle), this.dynamicStyle);
    },

    /**
     * Get calendar rows outer height
     *
     * @returns {int}
     */
    getCalendarHeight() {
      return this.state.options.calendar.height + this.state.options.calendar.strokeWidth;
    },

    /**
     * Get maximal level of nested task children
     *
     * @returns {int}
     */
    getMaximalLevel() {
      let maximalLevel = 0;
      this.state.tasks.forEach(task => {
        if (task.parents.length > maximalLevel) {
          maximalLevel = task.parents.length;
        }
      });
      return maximalLevel - 1;
    },

    /**
     * Get maximal expander width - to calculate straight task list text
     *
     * @returns {int}
     */
    getMaximalExpanderWidth() {
      return (
        this.getMaximalLevel() * this.state.options.taskList.expander.padding +
        this.state.options.taskList.expander.margin
      );
    },

    /**
     * Synchronize scrollTop property when row height is changed
     */
    syncScrollTop() {
      if (
        this.state.refs.taskListItems &&
        this.state.refs.chartGraph.scrollTop !== this.state.refs.taskListItems.scrollTop
      ) {
        this.state.options.scroll.top = this.state.refs.taskListItems.scrollTop = this.state.refs.chartScrollContainerVertical.scrollTop = this.state.refs.chartGraph.scrollTop;
      }
    },

    /**
     * Calculate task list columns dimensions
     */
    calculateTaskListColumnsDimensions() {
      let final = 0;
      let percentage = 0;
      for (let column of this.state.options.taskList.columns) {
        if (column.expander) {
          column.widthFromPercentage =
            ((this.getMaximalExpanderWidth() + column.width) / 100) * this.state.options.taskList.percent;
        } else {
          column.widthFromPercentage = (column.width / 100) * this.state.options.taskList.percent;
        }
        percentage += column.widthFromPercentage;
        column.finalWidth = (column.thresholdPercent * column.widthFromPercentage) / 100;
        final += column.finalWidth;
        column.height = this.getTaskHeight() - this.style['grid-line-horizontal']['stroke-width'];
      }
      this.state.options.taskList.widthFromPercentage = percentage;
      this.state.options.taskList.finalWidth = final;
    },

    /**
     * Reset task tree - which is used to create tree like structure inside task list
     */
    resetTaskTree(tasks) {
      this.$set(this.state, 'rootTask', {
        id: null,
        label: 'root',
        children: [],
        allChildren: [],
        parents: [],
        parent: null,
        __root: true
      });
      const tasksById = {};
      for (let i = 0, len = tasks.length; i < len; i++) {
        let current = tasks[i];
        current.children = [];
        current.allChildren = [];
        current.parent = null;
        current.parents = [];
        tasksById[current.id] = current;
      }
      return tasksById;
    },

    /**
     * Make task tree, after reset - look above
     *
     * @param {object} task
     * @returns {object} tasks with children and parents
     */
    makeTaskTree(task, tasks) {
      for (let i = 0, len = tasks.length; i < len; i++) {
        let current = tasks[i];
        if (current.parentId === task.id) {
          if (task.parents.length) {
            task.parents.forEach(parent => current.parents.push(parent));
          }
          if (!task.propertyIsEnumerable('__root')) {
            current.parents.push(task.id);
            current.parent = task.id;
          } else {
            current.parents = [];
            current.parent = null;
          }
          current = this.makeTaskTree(current, tasks);
          task.allChildren.push(current.id);
          task.children.push(current.id);
          current.allChildren.forEach(childId => task.allChildren.push(childId));
        }
      }
      return task;
    },

    /**
     * Get task by id
     *
     * @param {any} taskId
     * @returns {object|null} task
     */
    getTask(taskId) {
      if (typeof this.state.tasksById[taskId] !== 'undefined') {
        return this.state.tasksById[taskId];
      }
      return null;
    },

    /**
     * Get children tasks for specified taskId
     *
     * @param {any} taskId
     * @returns {array} children
     */
    getChildren(taskId) {
      return this.state.tasks.filter(task => task.parent === taskId);
    },

    /**
     * Is task visible
     *
     * @param {Number|String|Task} task
     */
    isTaskVisible(task) {
      if (typeof task === 'number' || typeof task === 'string') {
        task = this.getTask(task);
      }
      for (let i = 0, len = task.parents.length; i < len; i++) {
        if (this.getTask(task.parents[i]).collapsed) {
          return false;
        }
      }
      return true;
    },

    /**
     * Get svg
     *
     * @returns {string} html svg image of gantt
     */
    getSVG() {
      return this.state.options.mainView.outerHTML;
    },

    /**
     * Get image
     *
     * @param {string} type image format
     * @returns {Promise} when resolved returns base64 image string of gantt
     */
    getImage(type = 'image/png') {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = this.state.options.mainView.clientWidth;
          canvas.height = this.state.options.rowsHeight;
          canvas.getContext('2d').drawImage(img, 0, 0);
          resolve(canvas.toDataURL(type));
        };
        img.src = 'data:image/svg+xml,' + encodeURIComponent(this.getSVG());
      });
    },

    /**
     * Get gantt total height
     *
     * @returns {number}
     */
    getHeight(visibleTasks, outer = false) {
      let height =
        visibleTasks.length * (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) +
        this.state.options.calendar.height +
        this.state.options.calendar.strokeWidth +
        this.state.options.calendar.gap;
      if (outer) {
        height += this.state.options.scrollBarHeight;
      }
      return height;
    },

    /**
     * Get one task height
     *
     * @returns {number}
     */
    getTaskHeight(withStroke = false) {
      if (withStroke) {
        return (
          this.state.options.row.height +
          this.state.options.chart.grid.horizontal.gap * 2 +
          this.style['grid-line-horizontal']['stroke-width']
        );
      }
      return this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2;
    },

    /**
     * Get specified tasks height
     *
     * @returns {number}
     */
    getTasksHeight(visibleTasks) {
      return visibleTasks.length * this.getTaskHeight();
    },

    /**
     * Convert time (in milliseconds) to pixel offset inside chart
     *
     * @param {int} ms
     * @returns {number}
     */
    timeToPixelOffsetX(ms) {
      let x = ms - this.state.options.times.firstTime;
      if (x) {
        x = x / this.state.options.times.timePerPixel;
      }
      return x;
    },

    /**
     * Convert pixel offset inside chart to corresponding time offset in milliseconds
     *
     * @param {number} pixelOffsetX
     * @returns {int} milliseconds
     */
    pixelOffsetXToTime(pixelOffsetX) {
      let offset = pixelOffsetX + this.style['grid-line-vertical']['stroke-width'] / 2;
      return offset * this.state.options.times.timePerPixel + this.state.options.times.firstTime;
    },

    /**
     * Determine if element is inside current view port
     *
     * @param {number} x - element placement
     * @param {number} width - element width
     * @param {int} buffer - or threshold, if element is outside viewport but offset from view port is below this value return true
     * @returns {boolean}
     */
    isInsideViewPort(x, width, buffer = 5000) {
      return (
        (x + width + buffer >= this.state.options.scroll.chart.left &&
          x - buffer <= this.state.options.scroll.chart.right) ||
        (x - buffer <= this.state.options.scroll.chart.left &&
          x + width + buffer >= this.state.options.scroll.chart.right)
      );
    },

    /**
     * Chart scroll event handler
     *
     * @param {event} ev
     */
    onScrollChart(ev) {
      this._onScrollChart(
        this.state.refs.chartScrollContainerHorizontal.scrollLeft,
        this.state.refs.chartScrollContainerVertical.scrollTop
      );
    },

    /**
     * After same as above but with different arguments - normalized
     *
     * @param {number} left
     * @param {number} top
     */
    _onScrollChart(left, top) {
      if (this.state.options.scroll.chart.left === left && this.state.options.scroll.chart.top === top) {
        return;
      }
      const chartContainerWidth = this.state.refs.chartContainer.clientWidth;
      this.state.options.scroll.chart.left = left;
      this.state.options.scroll.chart.right = left + chartContainerWidth;
      this.state.options.scroll.chart.percent = (left / this.state.options.times.totalViewDurationPx) * 100;
      this.state.options.scroll.chart.top = top;
      this.state.options.scroll.chart.time = this.pixelOffsetXToTime(left);
      this.state.options.scroll.chart.timeCenter = this.pixelOffsetXToTime(left + chartContainerWidth / 2);
      this.state.options.scroll.chart.dateTime.left = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.scroll.chart.time).valueOf();
      this.state.options.scroll.chart.dateTime.right = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(
        this.pixelOffsetXToTime(left + this.state.refs.chart.clientWidth)
      ).valueOf();
      this.scrollTo(left, top);
    },

    /**
     * Scroll current chart to specified time (in milliseconds)
     *
     * @param {int} time
     */
    scrollToTime(time) {
      let pos = this.timeToPixelOffsetX(time);
      const chartContainerWidth = this.state.refs.chartContainer.clientWidth;
      pos = pos - chartContainerWidth / 2;
      if (pos > this.state.options.width) {
        pos = this.state.options.width - chartContainerWidth;
      }
      this.scrollTo(pos);
    },

    /**
     * Scroll chart or task list to specified pixel values
     *
     * @param {number|null} left
     * @param {number|null} top
     */
    scrollTo(left = null, top = null) {
      if (left !== null) {
        this.state.refs.chartCalendarContainer.scrollLeft = left;
        this.state.refs.chartGraphContainer.scrollLeft = left;
        this.state.refs.chartScrollContainerHorizontal.scrollLeft = left;
        this.state.options.scroll.left = left;
      }
      if (top !== null) {
        this.state.refs.chartScrollContainerVertical.scrollTop = top;
        this.state.refs.chartGraph.scrollTop = top;
        this.state.refs.taskListItems.scrollTop = top;
        this.state.options.scroll.top = top;
        this.syncScrollTop();
      }
    },

    /**
     * After some actions like time zoom change we need to recompensate scroll position
     * so as a result everything will be in same place
     */
    fixScrollPos() {
      this.scrollToTime(this.state.options.scroll.chart.timeCenter);
    },

    /**
     * Mouse wheel event handler
     */
    onWheelChart(ev) {
      if (!ev.shiftKey && ev.deltaX === 0) {
        let top = this.state.options.scroll.top + ev.deltaY;
        const chartClientHeight = this.state.options.rowsHeight;
        const scrollHeight = this.state.refs.chartGraph.scrollHeight - chartClientHeight;
        if (top < 0) {
          top = 0;
        } else if (top > scrollHeight) {
          top = scrollHeight;
        }
        this.scrollTo(null, top);
      } else if (ev.shiftKey && ev.deltaX === 0) {
        let left = this.state.options.scroll.left + ev.deltaY;
        const chartClientWidth = this.state.refs.chartScrollContainerHorizontal.clientWidth;
        const scrollWidth = this.state.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
        if (left < 0) {
          left = 0;
        } else if (left > scrollWidth) {
          left = scrollWidth;
        }
        this.scrollTo(left);
      } else {
        let left = this.state.options.scroll.left + ev.deltaX;
        const chartClientWidth = this.state.refs.chartScrollContainerHorizontal.clientWidth;
        const scrollWidth = this.state.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
        if (left < 0) {
          left = 0;
        } else if (left > scrollWidth) {
          left = scrollWidth;
        }
        this.scrollTo(left);
      }
    },

    /**
     * Time zoom change event handler
     */
    onTimeZoomChange(timeZoom) {
      this.state.options.times.timeZoom = timeZoom;
      this.recalculateTimes();
      this.calculateSteps();
      this.fixScrollPos();
    },

    /**
     * Row height change event handler
     */
    onRowHeightChange(height) {
      this.state.options.row.height = height;
      this.calculateTaskListColumnsDimensions();
      this.syncScrollTop();
    },

    /**
     * Scope change event handler
     */
    onScopeChange(value) {
      this.state.options.scope.before = value;
      this.state.options.scope.after = value;
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.fixScrollPos();
    },

    /**
     * Task list width change event handler
     */
    onTaskListWidthChange(value) {
      this.state.options.taskList.percent = value;
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Task list column width change event handler
     */
    onTaskListColumnWidthChange() {
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Listen to specified event names
     */
    initializeEvents() {
      this.$on('chart-scroll-horizontal', this.onScrollChart);
      this.$on('chart-scroll-vertical', this.onScrollChart);
      this.$on('chart-wheel', this.onWheelChart);
      this.$on('times-timeZoom-change', this.onTimeZoomChange);
      this.$on('row-height-change', this.onRowHeightChange);
      this.$on('scope-change', this.onScopeChange);
      this.$on('taskList-width-change', this.onTaskListWidthChange);
      this.$on('taskList-column-width-change', this.onTaskListColumnWidthChange);
    },

    /**
     * When some action was performed (scale change for example) - recalculate time variables
     */
    recalculateTimes() {
      let max = this.state.options.times.timeScale * 60;
      let min = this.state.options.times.timeScale;
      let steps = max / min;
      let percent = this.state.options.times.timeZoom / 100;
      this.state.options.times.timePerPixel = 3600000 * 24 / 30
      // this.state.options.times.timePerPixel =
      //   this.state.options.times.timeScale * steps * percent + Math.pow(2, this.state.options.times.timeZoom);
      this.state.options.times.totalViewDurationMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTime).diff(
        this.state.options.times.firstTime,
        'milliseconds'
      );
      this.state.options.times.totalViewDurationPx =
        this.state.options.times.totalViewDurationMs / this.state.options.times.timePerPixel;
      this.state.options.width =
        this.state.options.times.totalViewDurationPx + this.style['grid-line-vertical']['stroke-width'];
    },

    /**
     * Initialize time variables
     */
    initTimes() {
      this.state.options.times.firstTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTaskTime)
        .locale(this.state.options.locale.name)
        .startOf('day')
        // .subtract(this.state.options.scope.before, 'days')
        // .startOf('day')
        .valueOf();
      this.state.options.times.lastTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTaskTime)
        .locale(this.state.options.locale.name)
        .endOf('day')
        // .add(this.state.options.scope.after, 'days')
        // .endOf('day')
        .valueOf();
      this.recalculateTimes();
    },

    /**
     * Calculate steps
     * Steps are days by default
     * Each step contain information about time offset and pixel offset of this time inside gantt chart
     */
    calculateSteps() {
      const steps = [];
      const lastMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTime).valueOf();
      const currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime);
      steps.push({
        time: currentDate.valueOf(),
        offset: {
          ms: 0,
          px: 0
        }
      });
      for (
        let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime)
          .add(1, this.state.options.times.stepDuration)
          .startOf('day');
        currentDate.valueOf() <= lastMs;
        currentDate = currentDate.add(1, this.state.options.times.stepDuration).startOf('day')
      ) {
        const offsetMs = currentDate.diff(this.state.options.times.firstTime, 'milliseconds');
        const offsetPx = offsetMs / this.state.options.times.timePerPixel;
        const step = {
          time: currentDate.valueOf(),
          offset: {
            ms: offsetMs,
            px: offsetPx
          }
        };
        const previousStep = steps[steps.length - 1];
        previousStep.width = {
          ms: offsetMs - previousStep.offset.ms,
          px: offsetPx - previousStep.offset.px
        };
        steps.push(step);
      }
      const lastStep = steps[steps.length - 1];
      lastStep.width = {
        ms: this.state.options.times.totalViewDurationMs - lastStep.offset.ms,
        px: this.state.options.times.totalViewDurationPx - lastStep.offset.px
      };
      this.state.options.times.steps = steps;
    },

    /**
     * Calculate calendar widths - when scale was changed for example
     */
    computeCalendarWidths() {
      this.computeDayWidths();
      this.computeHourWidths();
      this.computeMonthWidths();
    },

    /**
     * Compute width of calendar hours column widths basing on text widths
     */
    computeHourWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--hour'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      const localeName = this.state.options.locale.name;
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()('2018-01-01T00:00:00').locale(localeName); // any date will be good for hours
      let maxWidths = this.state.options.calendar.hour.maxWidths;
      if (maxWidths.length) {
        return;
      }
      for (let formatName in this.state.options.calendar.hour.format) {
        maxWidths[formatName] = 0;
      }
      for (let hour = 0; hour < 24; hour++) {
        let widths = { hour };
        for (let formatName in this.state.options.calendar.hour.format) {
          const hourFormatted = this.state.options.calendar.hour.format[formatName](currentDate);
          this.state.options.calendar.hour.formatted[formatName].push(hourFormatted);
          widths[formatName] = this.state.ctx.measureText(hourFormatted).width;
        }
        this.state.options.calendar.hour.widths.push(widths);
        for (let formatName in this.state.options.calendar.hour.format) {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        }
        currentDate = currentDate.add(1, 'hour');
      }
    },

    /**
     * Compute calendar days column widths basing on text widths
     */
    computeDayWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--day'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      const localeName = this.state.options.locale.name;
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.steps[0].time).locale(localeName);
      let maxWidths = this.state.options.calendar.day.maxWidths;
      this.state.options.calendar.day.widths = [];
      Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let day = 0, daysLen = this.state.options.times.steps.length; day < daysLen; day++) {
        const widths = {
          day
        };
        Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
          widths[formatName] = this.state.ctx.measureText(
            this.state.options.calendar.day.format[formatName](currentDate)
          ).width;
        });
        this.state.options.calendar.day.widths.push(widths);
        Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'day');
      }
    },

    /**
     * Months count
     *
     * @description Returns number of different months in specified time range
     *
     * @param {number} fromTime - date in ms
     * @param {number} toTime - date in ms
     *
     * @returns {number} different months count
     */
    monthsCount(fromTime, toTime) {
      if (fromTime > toTime) {
        return 0;
      }
      let currentMonth = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(fromTime);
      let previousMonth = currentMonth.clone();
      let monthsCount = 1;
      while (currentMonth.valueOf() <= toTime) {
        currentMonth = currentMonth.add(1, 'day');
        if (previousMonth.month() !== currentMonth.month()) {
          monthsCount++;
        }
        previousMonth = currentMonth.clone();
      }
      return monthsCount;
    },

    /**
     * Compute month calendar columns widths basing on text widths
     */
    computeMonthWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--month'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let maxWidths = this.state.options.calendar.month.maxWidths;
      this.state.options.calendar.month.widths = [];
      Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      const localeName = this.state.options.locale.name;
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime).locale(localeName);
      const monthsCount = this.monthsCount(this.state.options.times.firstTime, this.state.options.times.lastTime);
      for (let month = 0; month < monthsCount; month++) {
        const widths = {
          month
        };
        Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
          widths[formatName] = this.state.ctx.measureText(
            this.state.options.calendar.month.format[formatName](currentDate)
          ).width;
        });
        this.state.options.calendar.month.widths.push(widths);
        Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'month');
      }
    },

    /**
     * Prepare time and date variables for gantt
     */
    prepareDates() {
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      for (let index = 0, len = this.state.tasks.length; index < len; index++) {
        let task = this.state.tasks[index];
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
        }
        if (task.startTime + task.duration > lastTaskTime) {
          lastTaskTime = task.startTime + task.duration;
        }
      }
      this.state.options.times.firstTaskTime = firstTaskTime;
      this.state.options.times.lastTaskTime = lastTaskTime;
      this.state.options.times.firstTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(firstTaskTime)
        .locale(this.state.options.locale.name)
        .startOf('day')
        // .subtract(this.state.options.scope.before, 'days')
        // .startOf('day')
        .valueOf();
      this.state.options.times.lastTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(lastTaskTime)
        .locale(this.state.options.locale.name)
        .endOf('day')
        // .add(this.state.options.scope.after, 'days')
        // .endOf('day')
        .valueOf();
    },

    /**
     * Setup and calculate everything
     */
    setup(itsUpdate = '') {
      this.initialize(itsUpdate);
      this.prepareDates();
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.state.options.taskList.width = this.state.options.taskList.columns.reduce(
        (prev, current) => {
          return { width: prev.width + current.width };
        },
        { width: 0 }
      ).width;
    },

    /**
     * Global resize event (from window.addEventListener)
     */
    globalOnResize() {
      if (typeof this.$el === 'undefined' || !this.$el) {
        return;
      }
      this.state.options.clientWidth = this.$el.clientWidth;
      if (
        this.state.options.taskList.widthFromPercentage >
        (this.state.options.clientWidth / 100) * this.state.options.taskList.widthThreshold
      ) {
        const diff =
          this.state.options.taskList.widthFromPercentage -
          (this.state.options.clientWidth / 100) * this.state.options.taskList.widthThreshold;
        let diffPercent = 100 - (diff / this.state.options.taskList.widthFromPercentage) * 100;
        if (diffPercent < 0) {
          diffPercent = 0;
        }
        this.state.options.taskList.columns.forEach(column => {
          column.thresholdPercent = diffPercent;
        });
      } else {
        this.state.options.taskList.columns.forEach(column => {
          column.thresholdPercent = 100;
        });
      }
      this.calculateTaskListColumnsDimensions();
      this.$emit('calendar-recalculate');
      this.syncScrollTop();
    }
  },

  computed: {
    /**
     * Get visible tasks
     * Very important method which will bring us only those tasks that are visible inside gantt chart
     * For example when task is collapsed - children of this task are not visible - we should not render them
     */
    visibleTasks() {
      const visibleTasks = this.state.tasks.filter(task => this.isTaskVisible(task));
      const maxRows = visibleTasks.slice(0, this.state.options.maxRows);
      this.state.options.rowsHeight = this.getTasksHeight(maxRows);
      let heightCompensation = 0;
      if (this.state.options.maxHeight && this.state.options.rowsHeight > this.state.options.maxHeight) {
        heightCompensation = this.state.options.rowsHeight - this.state.options.maxHeight;
        this.state.options.rowsHeight = this.state.options.maxHeight;
      }
      this.state.options.height = this.getHeight(maxRows) - heightCompensation;
      this.state.options.allVisibleTasksHeight = this.getTasksHeight(visibleTasks);
      this.state.options.outerHeight = this.getHeight(maxRows, true) - heightCompensation;
      let len = visibleTasks.length;
      for (let index = 0; index < len; index++) {
        let task = visibleTasks[index];
        task.width =
          task.duration / this.state.options.times.timePerPixel - this.style['grid-line-vertical']['stroke-width'];
        if (task.width < 0) {
          task.width = 0;
        }
        task.height = this.state.options.row.height;
        task.x = this.timeToPixelOffsetX(task.startTime);
        task.y =
          (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) * index +
          this.state.options.chart.grid.horizontal.gap;
        if (task.tasks) {
          const subtasks = [];
          task.tasks.forEach(subtask => {
            subtask.width =
              subtask.duration / this.state.options.times.timePerPixel -
              this.style['grid-line-vertical']['stroke-width'];
            if (subtask.width < 0) {
              subtask.width = 0;
            }
            subtask.height = task.height;
            subtask.x = this.timeToPixelOffsetX(subtask.startTime);
            subtask.y = task.y;
            subtasks.push(subtask);
          });
          task.tasks = subtasks;
        }
      }
      return visibleTasks;
    },

    /**
     * Style shortcut
     */
    style() {
      return this.state.dynamicStyle;
    },

    /**
     * Get columns and compute dimensions on the fly
     */
    getTaskListColumns() {
      this.calculateTaskListColumnsDimensions();
      return this.state.options.taskList.columns;
    },

    /**
     * Tasks used for communicate with parent component
     */
    outputTasks() {
      return this.state.tasks;
    },

    /**
     * Options used to communicate with parent component
     */
    outputOptions() {
      return this.state.options;
    }
  },

  /**
   * Watch tasks after gantt instance is created and react when we have new kids on the block
   */
  created() {
    this.initializeEvents();
    this.setup();
    this.state.unwatchTasks = this.$watch(
      'tasks',
      tasks => {
        const notEqual = notEqualDeep(tasks, this.outputTasks);
        if (notEqual) {
          this.setup('tasks');
        }
      },
      { deep: true }
    );
    this.state.unwatchOptions = this.$watch(
      'options',
      opts => {
        const notEqual = notEqualDeep(opts, this.outputOptions);
        if (notEqual) {
          this.setup('options');
        }
      },
      { deep: true }
    );
    this.state.unwatchStyle = this.$watch(
      'dynamicStyle',
      style => {
        const notEqual = notEqualDeep(style, this.dynamicStyle);
        if (notEqual) {
          this.initializeStyle();
        }
      },
      { deep: true, immediate: true }
    );

    this.state.unwatchOutputTasks = this.$watch(
      'outputTasks',
      tasks => {
        this.$emit('tasks-changed', tasks.map(task => task));
      },
      { deep: true }
    );
    this.state.unwatchOutputOptions = this.$watch(
      'outputOptions',
      options => {
        this.$emit('options-changed', mergeDeep({}, options));
      },
      { deep: true }
    );
    this.state.unwatchOutputStyle = this.$watch(
      'style',
      style => {
        this.$emit('dynamic-style-changed', mergeDeep({}, style));
      },
      { deep: true }
    );

    this.$root.$emit('gantt-elastic-created', this);
    this.$emit('created', this);
  },

  /**
   * Emit before-mount event
   */
  beforeMount() {
    this.$emit('before-mount', this);
  },

  /**
   * Emit ready/mounted events and deliver this gantt instance to outside world when needed
   */
  mounted() {
    this.state.options.clientWidth = this.$el.clientWidth;
    this.state.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__["default"]((entries, observer) => {
      this.globalOnResize();
    });
    this.state.resizeObserver.observe(this.$el.parentNode);
    this.globalOnResize();
    this.$emit('ready', this);
    this.$root.$emit('gantt-elastic-mounted', this);
    this.$emit('mounted', this);
    this.$root.$emit('gantt-elastic-ready', this);
  },

  /**
   * Emit event when data was changed and before update (you can cleanup dom events here for example)
   */
  beforeUpdate() {
    this.$emit('before-update');
  },

  /**
   * Emit event when gantt-elastic view was updated
   */
  updated() {
    this.$nextTick(() => {
      this.$emit('updated');
    });
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy() {
    this.state.resizeObserver.unobserve(this.$el.parentNode);
    this.state.unwatchTasks();
    this.state.unwatchOptions();
    this.state.unwatchStyle();
    this.state.unwatchOutputTasks();
    this.state.unwatchOutputOptions();
    this.state.unwatchOutputStyle();
    this.$emit('before-destroy');
  },

  /**
   * Emit event after gantt-elastic was destroyed
   */
  destroyed() {
    this.$emit('destroyed');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GanttElastic);


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CalendarRow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarRow.vue */ "./src/components/Calendar/CalendarRow.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Calendar',
  components: {
    CalendarRow: _CalendarRow_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {};
  },
  methods: {
    /**
     * How many days will fit?
     *
     * @returns {object}
     */
    howManyDaysFit() {
      const stroke = 1;
      const additionalSpace = stroke + 2;
      let fullWidth = this.root.state.options.width;
      let formatNames = Object.keys(this.root.state.options.calendar.day.format);
      for (let days = this.root.state.options.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.options.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth &&
            days > 1
          ) {
            return {
              count: days,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ''
      };
    },

    /**
     * How many months will fit?
     *
     * @returns {object}
     */
    howManyMonthsFit() {
      const stroke = 1;
      const additionalSpace = stroke + 2;
      let fullWidth = this.root.state.options.width;
      let formatNames = Object.keys(this.root.state.options.calendar.month.format);
      let currentMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.firstTime);
      let previousMonth = currentMonth.clone();
      const lastTime = this.root.state.options.times.lastTime;
      let monthsCount = this.root.monthsCount(
        this.root.state.options.times.firstTime,
        this.root.state.options.times.lastTime
      );
      if (monthsCount === 1) {
        for (let formatName of formatNames) {
          if (this.root.state.options.calendar.month.maxWidths[formatName] + additionalSpace <= fullWidth) {
            return {
              count: 1,
              type: formatName
            };
          }
        }
      }
      for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.options.calendar.month.maxWidths[formatName] + additionalSpace) * months <= fullWidth &&
            months > 1
          ) {
            return {
              count: months,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: formatNames[0]
      };
    },

    /**
     * Generate days
     *
     * @returns {array}
     */
    generateDays() {
      let days = [];
      if (!this.root.state.options.calendar.day.display) {
        return days;
      }
      const daysCount = this.howManyDaysFit();
      if (daysCount.count === 0) {
        return days;
      }
      const steps = this.root.state.options.times.steps;
      const localeName = this.root.state.options.locale.name;
      const dayStep = Math.ceil(steps.length / daysCount.count);
      for (let dayIndex = 0, len = steps.length; dayIndex < len; dayIndex += dayStep) {
        let dayWidthPx = 0;
        // day could be shorter (daylight saving time) so join widths and divide
        for (let currentStep = 0; currentStep < dayStep; currentStep++) {
          if (typeof steps[dayIndex + currentStep] !== 'undefined') {
            dayWidthPx += steps[dayIndex + currentStep].width.px;
          }
        }
        const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(steps[dayIndex].time);
        let textWidth = 0;
        if (typeof this.root.state.options.calendar.day.widths[dayIndex] !== 'undefined') {
          textWidth = this.root.state.options.calendar.day.widths[dayIndex][daysCount.type];
        }
        let x = steps[dayIndex].offset.px;
        days.push({
          index: dayIndex,
          key: steps[dayIndex].time + 'd',
          x,
          y: this.root.state.options.calendar.month.height,
          width: dayWidthPx,
          textWidth,
          height: this.root.state.options.calendar.day.height,
          label: this.root.state.options.calendar.day.format[daysCount.type](date.locale(localeName))
        });
      }
      return days.map(item => ({
        key: item.key,
        children: [item]
      }));
    },

    /**
     * Generate months
     *
     * @returns {array}
     */
    generateMonths() {
      let months = [];
      if (!this.root.state.options.calendar.month.display) {
        return months;
      }
      const monthsCount = this.howManyMonthsFit();
      if (monthsCount.count === 0) {
        return months;
      }
      const steps = this.root.state.options.times.steps;
      const localeName = this.root.state.options.locale.name;
      let formatNames = Object.keys(this.root.state.options.calendar.month.format);
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.firstTime);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(currentDate)
          .add(1, 'month')
          .startOf('month');
        if (finalDate.valueOf() > this.root.state.options.times.lastTime) {
          finalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.lastTime);
        }
        // we must find first and last step to get the offsets / widths
        for (let step = 0, len = this.root.state.options.times.steps.length; step < len; step++) {
          let currentStep = this.root.state.options.times.steps[step];
          if (currentStep.time >= currentDate.valueOf() && currentStep.time < finalDate.valueOf()) {
            monthWidth += currentStep.width.px;
            if (currentStep.offset.px < monthOffset) {
              monthOffset = currentStep.offset.px;
            }
          }
        }
        let label = '';
        let choosenFormatName;
        for (let formatName of formatNames) {
          if (this.root.state.options.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
            label = this.root.state.options.calendar.month.format[formatName](currentDate.locale(localeName));
            choosenFormatName = formatName;
          }
        }
        let textWidth = 0;
        if (typeof this.root.state.options.calendar.month.widths[monthIndex] !== 'undefined') {
          textWidth = this.root.state.options.calendar.month.widths[monthIndex][choosenFormatName];
        }
        let x = monthOffset;
        months.push({
          index: monthIndex,
          key: monthIndex + 'm',
          x,
          y: 0,
          width: monthWidth,
          textWidth,
          choosenFormatName,
          height: this.root.state.options.calendar.month.height,
          label
        });
        currentDate = currentDate.add(1, 'month').startOf('month');
        if (currentDate.valueOf() > this.root.state.options.times.lastTime) {
          currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.lastTime);
        }
      }
      return months.map(item => ({
        key: item.key,
        children: [item]
      }));
    },

    /**
     * Sum all calendar rows height and return result
     *
     * @returns {int}
     */
    calculateCalendarDimensions({ hours, days, months }) {
      let height = 0;
      if (this.root.state.options.calendar.hour.display && hours.length > 0) {
        height += this.root.state.options.calendar.hour.height;
      }
      if (this.root.state.options.calendar.day.display && days.length > 0) {
        height += this.root.state.options.calendar.day.height;
      }
      if (this.root.state.options.calendar.month.display && months.length > 0) {
        height += this.root.state.options.calendar.month.height;
      }
      this.root.state.options.calendar.height = height + (this.root.state.options.stages.length ? 16 : 0);
    }
  },

  computed: {
    dates() {
      const days = this.generateDays();
      const months = this.generateMonths();
      const allDates = { days, months };
      this.calculateCalendarDimensions(allDates);
      return allDates;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CalendarRow',
  inject: ['root'],
  props: ['items', 'which'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get x position
     *
     * @returns {number}
     */
    getTextX(item) {
      let x = item.x + item.width / 2 - item.textWidth / 2;
      if (this.which === 'month' && this.root.isInsideViewPort(item.x, item.width, 0)) {
        let scrollWidth = this.root.state.options.scroll.chart.right - this.root.state.options.scroll.chart.left;
        x = this.root.state.options.scroll.chart.left + scrollWidth / 2 - item.textWidth / 2 + 2;
        if (x + item.textWidth + 2 > item.x + item.width) {
          x = item.x + item.width - item.textWidth - 2;
        } else if (x < item.x) {
          x = item.x + 2;
        }
      }
      return x - item.x;
    }
  },
  computed: {
    rowStyle() {
      return { ...this.root.style['calendar-row'], ...this.root.style['calendar-row--' + this.which] };
    },
    rectStyle() {
      return { ...this.root.style['calendar-row-rect'], ...this.root.style['calendar-row-rect--' + this.which] };
    },
    rectChildStyle() {
      const basicStyle = {
        ...this.root.style['calendar-row-rect-child'],
        ...this.root.style['calendar-row-rect-child--' + this.which]
      };
      const style = [];
      for (let item of this.items) {
        const childrenStyle = [];
        for (let child of item.children) {
          childrenStyle.push({
            ...basicStyle,
            width: child.width + 'px',
            height: child.height + 'px'
          });
        }
        style.push(childrenStyle);
      }
      return style;
    },
    textStyle() {
      const basicStyle = {
        ...this.root.style['calendar-row-text'],
        ...this.root.style['calendar-row-text--' + this.which]
      };
      return child => {
        const style = { ...basicStyle };
        // if (this.which === 'month') {
          // style.left = this.getTextX(child) + 'px';
        // }
        return style;
      };
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue */ "./src/components/Chart/Grid.vue");
/* harmony import */ var _DaysHighlight_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaysHighlight.vue */ "./src/components/Chart/DaysHighlight.vue");
/* harmony import */ var _Calendar_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Calendar/Calendar.vue */ "./src/components/Calendar/Calendar.vue");
/* harmony import */ var _DependencyLines_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DependencyLines.vue */ "./src/components/Chart/DependencyLines.vue");
/* harmony import */ var _Row_Task_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row/Task.vue */ "./src/components/Chart/Row/Task.vue");
/* harmony import */ var _Row_Group_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row/Group.vue */ "./src/components/Chart/Row/Group.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Chart',
  components: {
    Grid: _Grid_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DependencyLines: _DependencyLines_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Calendar: _Calendar_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Task: _Row_Task_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Group: _Row_Group_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DaysHighlight: _DaysHighlight_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {
      moving: false
    };
  },
  /**
   * Mounted
   */
  mounted() {
    this.root.state.refs.chart = this.$refs.chart;
    this.root.state.refs.chartCalendarContainer = this.$refs.chartCalendarContainer;
    this.root.state.refs.chartGraphContainer = this.$refs.chartGraphContainer;
    this.root.state.refs.chartGraph = this.$refs.chartGraph;
    this.root.state.refs.chartGraphSvg = this.$refs.chartGraphSvg;
  },

  computed: {
    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${this.root.state.options.width} ${this.root.state.options.allVisibleTasksHeight}`;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DaysHighlight',
  inject: ['root'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get key
     *
     * @param {object} day
     * @returns {string} key ideintifier for loop
     */
    getKey(day) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(day.time).format('YYYY-MM-DD');
    }
  },
  computed: {
    /**
     * Get working days
     *
     * @returns {array}
     */
    workingDays() {
      return this.root.state.options.times.steps.filter(step => {
        return this.root.state.options.calendar.workingDays.indexOf(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(step.time).day()) === -1;
      });
    },

    /**
     * Show working days?
     *
     * @returns {bool}
     */
    showWorkingDays() {
      const calendar = this.root.state.options.calendar;
      if (
        typeof calendar.workingDays !== 'undefined' &&
        Array.isArray(calendar.workingDays) &&
        calendar.workingDays.length
      ) {
        return true;
      }
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DependencyLines',
  inject: ['root'],
  props: ['tasks'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get path points
     *
     * @param {any} fromTaskId
     * @param {any} toTaskId
     * @returns {string}
     */
    getPoints(fromTaskId, toTaskId) {
      const fromTask = this.root.getTask(fromTaskId);
      const toTask = this.root.getTask(toTaskId);
      if (
        fromTask === null ||
        toTask === null ||
        !this.root.isTaskVisible(toTask) ||
        !this.root.isTaskVisible(fromTask)
      ) {
        return null;
      }
      const startX = fromTask.x + fromTask.width;
      const startY = fromTask.y + fromTask.height / 2;
      const stopX = toTask.x;
      const stopY = toTask.y + toTask.height / 2;
      const distanceX = stopX - startX;
      let distanceY;
      let yMultiplier = 1;
      if (stopY >= startY) {
        distanceY = stopY - startY;
      } else {
        distanceY = startY - stopY;
        yMultiplier = -1;
      }
      const offset = 10;
      const roundness = 4;
      const isBefore = distanceX <= offset + roundness;
      let points = `M ${startX} ${startY}
          L ${startX + offset},${startY} `;
      if (isBefore) {
        points += `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY +
          roundness * yMultiplier}
            L ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2 - roundness * yMultiplier}
            Q ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2} ${startX + offset},${startY +
          (distanceY * yMultiplier) / 2}
            L ${startX - offset + distanceX},${startY + (distanceY * yMultiplier) / 2}
            Q ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2} ${startX -
          offset +
          distanceX -
          roundness},${startY + (distanceY * yMultiplier) / 2 + roundness * yMultiplier}
            L ${startX - offset + distanceX - roundness},${stopY - roundness * yMultiplier}
            Q ${startX - offset + distanceX - roundness},${stopY} ${startX - offset + distanceX},${stopY}
            L ${stopX},${stopY}`;
      } else {
        points += `L ${startX + distanceX / 2 - roundness},${startY}
            Q ${startX + distanceX / 2},${startY} ${startX + distanceX / 2},${startY + roundness * yMultiplier}
            L ${startX + distanceX / 2},${stopY - roundness * yMultiplier}
            Q ${startX + distanceX / 2},${stopY} ${startX + distanceX / 2 + roundness},${stopY}
            L ${stopX},${stopY}`;
      }
      return points;
    }
  },
  computed: {
    /**
     * Get tasks which are dependent on other tasks
     *
     * @returns {array}
     */
    dependencyTasks() {
      return this.tasks
        .filter(task => typeof task.dependentOn !== 'undefined')
        .map(task => {
          task.dependencyLines = task.dependentOn.map(id => {
            return { points: this.getPoints(id, task.id) };
          });
          return task;
        })
        .filter(task => task.dependencyLines.points !== null);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Grid',
  inject: ['root'],
  data() {
    return {};
  },
  /**
   * Created
   */
  created() {
    this.root.$on('recenterPosition', this.recenterPosition);
  },

  /**
   * Mounted
   */
  mounted() {
    this.$nextTick(() => {
      this.$nextTick(() => {
        // because of stupid slider :/
        this.root.scrollToTime(this.timeLinePosition.time);
      });
    });
  },

  methods: {
    /**
     * Recenter position - go to current time line
     */
    recenterPosition() {
      this.root.scrollToTime(this.timeLinePosition.time);
    }
  },

  computed: {
    /**
     * Generate vertical lines of the grid
     *
     * @returns {array}
     */
    verticalLines() {
      let lines = [];
      const state = this.root.state;
      state.options.times.steps.forEach(step => {
        if (this.root.isInsideViewPort(step.offset.px, 1)) {
          lines.push({
            key: step.time,
            x1: step.offset.px,
            y1: 0,
            x2: step.offset.px,
            y2:
              state.tasks.length * (state.options.row.height + state.options.chart.grid.horizontal.gap * 2) +
              this.root.style['grid-line-vertical']['stroke-width']
          });
        }
      });
      return lines;
    },

    /**
     * Generate horizontal lines of the grid
     *
     * @returns {array}
     */
    horizontalLines() {
      let lines = [];
      const state = this.root.state.options;
      let tasks = this.root.visibleTasks;
      for (let index = 0, len = tasks.length; index <= len; index++) {
        const y =
          index * (state.row.height + state.chart.grid.horizontal.gap * 2) +
          this.root.style['grid-line-vertical']['stroke-width'] / 2;
        lines.push({
          key: 'hl' + index,
          x1: 0,
          y1: y,
          x2: '100%',
          y2: y
        });
      }
      return lines;
    },

    /**
     * Check if specified line is inside viewport (visible)
     *
     * @returns {function}
     */
    inViewPort() {
      return line => {
        const state = this.root.state.options;
        return line.x1 >= state.scroll.chart.left && line.x1 <= state.scroll.chart.right;
      };
    },

    /**
     * Get current time line position
     *
     * @returns {object}
     */
    timeLinePosition() {
      const d = new Date();
      const current = d.getTime();
      const currentOffset = this.root.timeToPixelOffsetX(current);
      const timeLine = {
        x: 0,
        y1: 0,
        y2: '100%',
        dateTime: '',
        time: current
      };
      timeLine.x = currentOffset;
      timeLine.dateTime = d.toLocaleDateString();
      return timeLine;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Group.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Group.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");
/* harmony import */ var _Task_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue */ "./src/components/Chart/Row/Task.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Group',
  components: { Task: _Task_vue__WEBPACK_IMPORTED_MODULE_1__["default"] },
  inject: ['root'],
  props: ['task'],
  mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data() {
    return {};
  },
  computed: {
    subtaskList() {
      return this.task.tasks;
    },
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Task',
  components: {
  },
  inject: ['root'],
  props: ['task'],
  mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data() {
    return {};
  },
  computed: {
    /**
     * Get clip path id
     *
     * @returns {string}
     */
    clipPathId() {
      return 'gantt-elastic__task-clip-path-' + this.task.id;
    },

    /**
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
      const task = this.task;
      return `2,0 ${task.width - 2},0 ${task.width - 2},${task.height} 2,${task.height}`;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Expander',
  inject: ['root'],
  props: ['tasks', 'options', 'type', 'column', 'task'],
  data() {
    const border = 0.5;
    return {
      border,
      borderStyle: {
        'stroke-width': border
      },
      lineOffset: 5
    };
  },
  computed: {
    style() {
      if (this.type !== 'taskList') {
        return {};
      }
      const margin = this.root.state.options.taskList.expander.margin;
      const padding = this.tasks[0].parents.length * this.root.state.options.taskList.expander.padding;
      return {
        'padding-left': padding + margin + 'px',
        margin: 'auto 0'
      };
    },
    /**
     * Get all tasks
     *
     * @returns {array}
     */
    allChildren() {
      const children = [];
      this.tasks.forEach(task => {
        task.allChildren.forEach(childId => {
          children.push(childId);
        });
      });
      return children;
    },
    /**
     * Is current expander collapsed?
     *
     * @returns {boolean}
     */
    collapsed() {
      if (this.tasks.length === 0) {
        return false;
      }
      let collapsed = 0;
      for (let i = 0, len = this.tasks.length; i < len; i++) {
        if (this.tasks[i].collapsed) {
          collapsed++;
        }
      }
      return collapsed === this.tasks.length;
    }
  },
  methods: {
    /**
     * Get specific class prefix
     *
     * @returns {string}
     */
    getClassPrefix(full = true) {
      return `${full ? 'gantt-elastic__' : ''}${this.options.type}-expander`;
    },
    /**
     * Toggle expander
     */
    toggle() {
      if (this.tasks.length === 0) {
        return;
      }
      const collapsed = !this.collapsed;
      this.tasks.forEach(task => {
        task.collapsed = collapsed;
      });
      this.emitEvent('collapse', { collapsed })
    },
    /**
     * Emit event
     *
     * @param {String} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (typeof this.column.events !== 'undefined' && typeof this.column.events[eventName] === 'function') {
        this.column.events[eventName]({ event, data: this.task || this.tasks, column: this.column });
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList/TaskList.vue */ "./src/components/TaskList/TaskList.vue");
/* harmony import */ var _Chart_Chart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart/Chart.vue */ "./src/components/Chart/Chart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




let ignoreScrollEvents = false;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainView',
  components: {
    TaskList: _TaskList_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Chart: _Chart_Chart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {
      defs: '',
      mousePos: {
        x: 0,
        y: 0,
        movementX: 0,
        movementY: 0,
        lastX: 0,
        lastY: 0,
        positiveX: 0,
        positiveY: 0,
        currentX: 0,
        currentY: 0
      }
    };
  },
  /**
   * Mounted
   */
  mounted() {
    this.viewBoxWidth = this.$el.clientWidth;
    this.root.state.refs.mainView = this.$refs.mainView;
    this.root.state.refs.chartContainer = this.$refs.chartContainer;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.chartScrollContainerHorizontal = this.$refs.chartScrollContainerHorizontal;
    this.root.state.refs.chartScrollContainerVertical = this.$refs.chartScrollContainerVertical;
    document.addEventListener('mouseup', this.chartMouseUp.bind(this));
    document.addEventListener('mousemove', this.chartMouseMove.bind(this));
    document.addEventListener('touchmove', this.chartMouseMove.bind(this));
    document.addEventListener('touchend', this.chartMouseUp.bind(this));
  },
  computed: {
    /**
     * Get margin left
     *
     * @returns {string}
     */
    getMarginLeft() {
      if (!this.root.state.options.taskList.display) {
        return '0px';
      }
      return this.root.state.options.taskList.finalWidth + 'px';
    },

    /**
     * Get vertical style
     *
     * @returns {object}
     */
    verticalStyle() {
      return {
        width: this.root.state.options.scrollBarHeight + 'px',
        height: this.root.state.options.rowsHeight + 'px',
        'margin-top': this.root.state.options.calendar.height + this.root.state.options.calendar.gap + 'px'
      };
    },

    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      if (this.root.state.options.clientWidth) {
        return `0 0 ${this.root.state.options.clientWidth - this.root.state.options.scrollBarHeight} ${
          this.root.state.options.height
        }`;
      }
      return `0 0 0 ${this.root.state.options.height}`;
    }
  },
  methods: {
    /**
     * Emit event when mouse is moving inside main view
     */
    mouseMove(event) {
      this.root.$emit('main-view-mousemove', event);
    },

    /**
     * Emit mouseup event inside main view
     */
    mouseUp(event) {
      this.root.$emit('main-view-mouseup', event);
    },

    /**
     * Horizontal scroll event handler
     */
    onHorizontalScroll(ev) {
      this.root.$emit('chart-scroll-horizontal', ev);
    },

    /**
     * Vertical scroll event handler
     */
    onVerticalScroll(ev) {
      this.root.$emit('chart-scroll-vertical', ev);
    },

    /**
     * Mouse wheel event handler
     */
    chartWheel(ev) {
      this.root.$emit('chart-wheel', ev);
    },

    /**
     * Chart mousedown event handler
     * Initiates drag scrolling mode
     */
    chartMouseDown(ev) {
      if (typeof ev.touches !== 'undefined') {
        this.mousePos.x = this.mousePos.lastX = ev.touches[0].screenX;
        this.mousePos.y = this.mousePos.lastY = ev.touches[0].screenY;
        this.mousePos.movementX = 0;
        this.mousePos.movementY = 0;
        this.mousePos.currentX = this.$refs.chartScrollContainerHorizontal.scrollLeft;
        this.mousePos.currentY = this.$refs.chartScrollContainerVertical.scrollTop;
      }
      this.root.state.options.scroll.scrolling = true;
    },

    /**
     * Chart mouseup event handler
     * Deactivates drag scrolling mode
     */
    chartMouseUp(ev) {
      this.root.state.options.scroll.scrolling = false;
    },

    /**
     * Chart mousemove event handler
     * When in drag scrolling mode this method calculate scroll movement
     */
    chartMouseMove(ev) {
      if (this.root.state.options.scroll.scrolling) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        const touch = typeof ev.touches !== 'undefined';
        let movementX, movementY;
        if (touch) {
          const screenX = ev.touches[0].screenX;
          const screenY = ev.touches[0].screenY;
          movementX = this.mousePos.x - screenX;
          movementY = this.mousePos.y - screenY;
          this.mousePos.lastX = screenX;
          this.mousePos.lastY = screenY;
        } else {
          movementX = ev.movementX;
          movementY = ev.movementY;
        }
        const horizontal = this.$refs.chartScrollContainerHorizontal;
        const vertical = this.$refs.chartScrollContainerVertical;
        let x = 0,
          y = 0;
        if (touch) {
          x = this.mousePos.currentX + movementX * this.root.state.options.scroll.dragXMoveMultiplier;
        } else {
          x = horizontal.scrollLeft - movementX * this.root.state.options.scroll.dragXMoveMultiplier;
        }
        horizontal.scrollLeft = x;
        if (touch) {
          y = this.mousePos.currentY + movementY * this.root.state.options.scroll.dragYMoveMultiplier;
        } else {
          y = vertical.scrollTop - movementY * this.root.state.options.scroll.dragYMoveMultiplier;
        }
        vertical.scrollTop = y;
      }
    }
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy() {
    document.removeEventListener('mouseup', this.chartMouseUp);
    document.removeEventListener('mousemove', this.chartMouseMove);
    document.removeEventListener('touchmove', this.chartMouseMove);
    document.removeEventListener('touchend', this.chartMouseUp);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ItemColumn',
  inject: ['root'],
  props: ['column', 'task'],
  data() {
    return {};
  },
  methods: {
    /**
     * Emit event
     *
     * @param {String} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (typeof this.column.events !== 'undefined' && typeof this.column.events[eventName] === 'function') {
        this.column.events[eventName]({ event, data: this.task, column: this.column });
      }
      this.root.$emit(`taskList-${this.task.type}-${eventName}`, { event, data: this.task, column: this.column });
    }
  },
  computed: {
    /**
     * Should we display html or just text?
     *
     * @returns {boolean}
     */
    html() {
      if (typeof this.column.html !== 'undefined' && this.column.html === true) {
        return true;
      }
      return false;
    },

    /**
     * Get column value
     *
     * @returns {any|string}
     */
    value() {
      if (typeof this.column.value === 'function') {
        return this.column.value(this.task);
      }
      return this.task[this.column.value];
    },

    itemColumnStyle() {
      return {
        ...this.root.style['task-list-item-column'],
        ...this.column.style['task-list-item-column'],
        width: this.column.finalWidth + 'px',
        height: this.column.height + 'px'
      };
    },

    wrapperStyle() {
      return {
        ...this.root.style['task-list-item-value-wrapper'],
        ...this.column.style['task-list-item-value-wrapper']
      };
    },

    containerStyle() {
      return {
        ...this.root.style['task-list-item-value-container'],
        ...this.column.style['task-list-item-value-container']
      };
    },

    valueStyle() {
      return { ...this.root.style['task-list-item-value'], ...this.column.style['task-list-item-value'] };
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListHeader.vue */ "./src/components/TaskList/TaskListHeader.vue");
/* harmony import */ var _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue */ "./src/components/TaskList/TaskListItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskList',
  components: {
    TaskListHeader: _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TaskListItem: _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {};
  },

  /**
   * Mounted
   */
  mounted() {
    this.root.state.refs.taskListWrapper = this.$refs.taskListWrapper;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.taskListItems = this.$refs.taskListItems;
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expander.vue */ "./src/components/Expander.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskListHeader',
  components: {
    TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  inject: ['root'],

  data() {
    return {
      resizer: {
        moving: false,
        x: 0
      }
    };
  },

  computed: {
    /**
     * Is this row collapsible?
     *
     * @returns {bool}
     */
    collapsible() {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    }
  },

  methods: {
    /**
     * Get style
     *
     * @returns {object}
     */
    getStyle(column) {
      return {
        width: column.finalWidth + 'px'
      };
    },
    /**
     * Resizer mouse down event handler
     */
    resizerMouseDown(event, column) {
      if (!this.resizer.moving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
        this.root.$emit('taskList-column-width-change-start', this.resizer.moving);
      }
    },

    /**
     * Resizer mouse move event handler
     */
    resizerMouseMove(event) {
      if (this.resizer.moving) {
        const lastWidth = this.resizer.moving.width;
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        if (this.resizer.moving.width < this.root.state.options.taskList.minWidth) {
          this.resizer.moving.width = this.root.state.options.taskList.minWidth;
        }
        if (lastWidth !== this.resizer.moving.width) {
          this.root.$emit('taskList-column-width-change', this.resizer.moving);
        }
      }
    },

    /**
     * Resizer mouse up event handler
     */
    resizerMouseUp(event) {
      if (this.resizer.moving) {
        this.root.$emit('taskList-column-width-change-stop', this.resizer.moving);
        this.resizer.moving = false;
      }
    }
  },

  /**
   * Created
   */
  created() {
    this.mouseUpListener = document.addEventListener('mouseup', this.resizerMouseUp.bind(this));
    this.mouseMoveListener = document.addEventListener('mousemove', this.resizerMouseMove.bind(this));
    this.root.$on('main-view-mousemove', this.resizerMouseMove);
    this.root.$on('main-view-mouseup', this.resizerMouseUp);
  },

  /**
   * Before destroy event - clear all event listeners
   */
  beforeDestroy() {
    document.removeEventListener('mouseup', this.resizerMouseUp);
    document.removeEventListener('mousemove', this.resizerMouseMove);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColumn.vue */ "./src/components/TaskList/ItemColumn.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskListItem',
  components: {
    TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ItemColumn: _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    columns() {
      return this.root.state.options.taskList.columns;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=template&id=02c6304c&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=template&id=02c6304c& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "gantt-elastic", staticStyle: { width: "100%" } },
    [
      _vm._t("header"),
      _vm._v(" "),
      _c("main-view", { ref: "mainView" }),
      _vm._v(" "),
      _vm._t("footer")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__calendar-wrapper",
      style: Object.assign({}, _vm.root.style["calendar-wrapper"], {
        width: _vm.root.state.options.width + "px"
      })
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__calendar",
          style: Object.assign({}, _vm.root.style["calendar"], {
            width: _vm.root.state.options.width + "px"
          })
        },
        [
          _vm.root.state.options.calendar.month.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.months, which: "month" }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.root.state.options.calendar.day.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.days, which: "day" }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.root.state.options.calendar.hour.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.hours, which: "hour" }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { display: "flex" } },
            _vm._l(_vm.root.state.options.stages, function(item, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticStyle: {
                    height: "16px",
                    "line-height": "16px",
                    "font-size": "12px",
                    color: "white",
                    "text-align": "center",
                    overflow: "hidden",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis",
                    "border-radius": "8px"
                  },
                  style: {
                    width: item.days * 30 + "px",
                    backgroundColor: item.color
                  }
                },
                [_vm._v(_vm._s(item.name) + "（" + _vm._s(item.days) + "天）")]
              )
            }),
            0
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class:
        "gantt-elastic__calendar-row gantt-elastic__calendar-row--" + _vm.which,
      style: _vm.rowStyle
    },
    _vm._l(_vm.items, function(item, itemIndex) {
      return _c(
        "div",
        {
          key: item.key,
          class:
            "gantt-elastic__calendar-row-rect gantt-elastic__calendar-row-rect--" +
            _vm.which,
          style: _vm.rectStyle
        },
        _vm._l(item.children, function(child, childIndex) {
          return _c(
            "div",
            {
              key: child.key,
              class:
                "gantt-elastic__calendar-row-rect-child gantt-elastic__calendar-row-rect-child--" +
                _vm.which,
              style: _vm.rectChildStyle[itemIndex][childIndex]
            },
            [
              _c(
                "div",
                {
                  class:
                    "gantt-elastic__calendar-row-text gantt-elastic__calendar-row-text--" +
                    _vm.which,
                  style: _vm.textStyle(child)
                },
                [_vm._v("\n        " + _vm._s(child.label) + "\n      ")]
              )
            ]
          )
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "chart",
      staticClass: "gantt-elastic__chart",
      style: Object.assign({}, _vm.root.style["chart"])
    },
    [
      _c(
        "div",
        {
          ref: "chartCalendarContainer",
          staticClass: "gantt-elastic__chart-calendar-container",
          style: Object.assign({}, _vm.root.style["chart-calendar-container"], {
            height: _vm.root.state.options.calendar.height + "px",
            "margin-bottom": _vm.root.state.options.calendar.gap + "px"
          })
        },
        [_c("calendar")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "chartGraphContainer",
          staticClass: "gantt-elastic__chart-graph-container",
          style: Object.assign({}, _vm.root.style["chart-graph-container"], {
            height:
              _vm.root.state.options.height -
              _vm.root.state.options.calendar.height +
              "px"
          })
        },
        [
          _c(
            "div",
            {
              style: Object.assign({}, _vm.root.style["chart-area"], {
                width: _vm.root.state.options.width + "px",
                height: _vm.root.state.options.rowsHeight + "px"
              })
            },
            [
              _c(
                "div",
                {
                  ref: "chartGraph",
                  staticClass: "gantt-elastic__chart-graph",
                  style: Object.assign({}, _vm.root.style["chart-graph"], {
                    height: "100%"
                  })
                },
                [
                  _c(
                    "svg",
                    {
                      ref: "chartGraphSvg",
                      staticClass: "gantt-elastic__chart-graph-svg",
                      style: Object.assign(
                        {},
                        _vm.root.style["chart-graph-svg"],
                        {
                          background:
                            "repeating-linear-gradient(to right, white 0, white 2px, transparent 2px, transparent 28px, white 28px, white 30px),repeating-linear-gradient(to bottom, white 0, white 2px, transparent 2px, transparent 28px, white 28px, white 30px) #f7f7f7"
                        }
                      ),
                      attrs: {
                        x: "0",
                        y: "0",
                        width: _vm.root.state.options.width + "px",
                        height:
                          _vm.root.state.options.allVisibleTasksHeight + "px",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("days-highlight"),
                      _vm._v(" "),
                      _c("grid"),
                      _vm._v(" "),
                      _vm._l(_vm.root.visibleTasks, function(task) {
                        return _c(
                          "g",
                          {
                            key: task.id,
                            staticClass: "gantt-elastic__chart-row-wrapper",
                            style: Object.assign(
                              {},
                              _vm.root.style["chart-row-wrapper"]
                            ),
                            attrs: { task: task }
                          },
                          [
                            _c(task.type, {
                              tag: "component",
                              attrs: { task: task }
                            })
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showWorkingDays
    ? _c(
        "g",
        {
          staticClass: "gantt-elastic__chart-days-highlight-container",
          style: Object.assign(
            {},
            _vm.root.style["chart-days-highlight-container"]
          )
        },
        _vm._l(_vm.workingDays, function(day) {
          return _c("rect", {
            key: _vm.getKey(day),
            staticClass: "gantt-elastic__chart-days-highlight-rect",
            style: Object.assign(
              {},
              _vm.root.style["chart-days-highlight-rect"]
            ),
            attrs: {
              x: day.offset.px,
              y: "0",
              width: day.width.px,
              height: "100%"
            }
          })
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "gantt-elastic__chart-dependency-lines-container",
      style: Object.assign(
        {},
        _vm.root.style["chart-dependency-lines-container"]
      ),
      attrs: { x: "0", y: "0", width: "100%", height: "100%" }
    },
    _vm._l(_vm.dependencyTasks, function(task) {
      return _c(
        "g",
        { key: task.id, attrs: { task: task } },
        _vm._l(task.dependencyLines, function(dependencyLine) {
          return _c("path", {
            key: dependencyLine.id,
            staticClass: "gantt-elastic__chart-dependency-lines-path",
            style: Object.assign(
              {},
              _vm.root.style["chart-dependency-lines-path"],
              task.style["chart-dependency-lines-path"]
            ),
            attrs: { task: task, d: dependencyLine.points }
          })
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      ref: "chart",
      staticClass: "gantt-elastic__grid-lines-wrapper",
      style: Object.assign({}, _vm.root.style["grid-lines-wrapper"]),
      attrs: {
        x: "0",
        y: "0",
        width: _vm.root.state.options.width,
        height: _vm.root.state.options.allVisibleTasksHeight,
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c(
        "g",
        {
          staticClass: "gantt-elastic__grid-lines",
          style: Object.assign({}, _vm.root.style["grid-lines"])
        },
        [
          _c("line", {
            staticClass: "gantt-elastic__grid-line-time",
            style: Object.assign({}, _vm.root.style["grid-line-time"]),
            attrs: {
              x1: _vm.timeLinePosition.x,
              y1: _vm.timeLinePosition.y1,
              x2: _vm.timeLinePosition.x,
              y2: _vm.timeLinePosition.y2
            }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Group.vue?vue&type=template&id=78306e59&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Group.vue?vue&type=template&id=78306e59& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    _vm._l(_vm.subtaskList, function(subtask) {
      return _c("Task", { key: subtask.id, attrs: { task: subtask } })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-task-wrapper",
      style: Object.assign(
        {},
        _vm.root.style["chart-row-bar-wrapper"],
        _vm.root.style["chart-row-task-wrapper"],
        _vm.task.style["chart-row-bar-wrapper"]
      )
    },
    [
      _c(
        "svg",
        {
          staticClass:
            "gantt-elastic__chart-row-bar gantt-elastic__chart-row-task",
          style: Object.assign(
            {},
            _vm.root.style["chart-row-bar"],
            _vm.root.style["chart-row-task"],
            _vm.task.style["chart-row-bar"]
          ),
          attrs: {
            x: _vm.task.x,
            y: _vm.task.y,
            width: _vm.task.width,
            height: _vm.task.height,
            viewBox: "0 0 " + _vm.task.width + " " + _vm.task.height,
            xmlns: "http://www.w3.org/2000/svg"
          },
          on: {
            click: function($event) {
              return _vm.emitEvent("click", $event)
            },
            mouseenter: function($event) {
              return _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function($event) {
              return _vm.emitEvent("mouseover", $event)
            },
            mouseout: function($event) {
              return _vm.emitEvent("mouseout", $event)
            },
            mousemove: function($event) {
              return _vm.emitEvent("mousemove", $event)
            },
            mousedown: function($event) {
              return _vm.emitEvent("mousedown", $event)
            },
            mouseup: function($event) {
              return _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function($event) {
              return _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function($event) {
              return _vm.emitEvent("touchstart", $event)
            },
            touchmove: function($event) {
              return _vm.emitEvent("touchmove", $event)
            },
            touchend: function($event) {
              return _vm.emitEvent("touchend", $event)
            }
          }
        },
        [
          _c("polygon", {
            staticClass:
              "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-task-polygon",
            style: Object.assign(
              {},
              _vm.root.style["chart-row-bar-polygon"],
              _vm.root.style["chart-row-task-polygon"],
              _vm.task.style["base"],
              _vm.task.style["chart-row-bar-polygon"]
            ),
            attrs: { points: _vm.getPoints }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=template&id=09a21177&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=template&id=09a21177& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.getClassPrefix() + "-wrapper",
      style: Object.assign(
        {},
        _vm.root.style[_vm.getClassPrefix(false) + "-wrapper"],
        _vm.style
      )
    },
    [
      _vm.allChildren.length
        ? _c(
            "svg",
            {
              class: _vm.getClassPrefix() + "-content",
              style: Object.assign(
                {},
                _vm.root.style[_vm.getClassPrefix(false) + "-content"]
              ),
              attrs: { width: _vm.options.size, height: _vm.options.size },
              on: { click: _vm.toggle }
            },
            [
              _c("rect", {
                class: _vm.getClassPrefix() + "-border",
                style: Object.assign(
                  {},
                  _vm.root.style[_vm.getClassPrefix(false) + "-border"],
                  _vm.borderStyle
                ),
                attrs: {
                  x: _vm.border,
                  y: _vm.border,
                  width: _vm.options.size - _vm.border * 2,
                  height: _vm.options.size - _vm.border * 2,
                  rx: "2",
                  ry: "2"
                }
              }),
              _vm._v(" "),
              _vm.allChildren.length
                ? _c("line", {
                    class: _vm.getClassPrefix() + "-line",
                    style: Object.assign(
                      {},
                      _vm.root.style[_vm.getClassPrefix(false) + "-line"]
                    ),
                    attrs: {
                      x1: _vm.lineOffset,
                      y1: _vm.options.size / 2,
                      x2: _vm.options.size - _vm.lineOffset,
                      y2: _vm.options.size / 2
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.collapsed
                ? _c("line", {
                    class: _vm.getClassPrefix() + "-line",
                    style: Object.assign(
                      {},
                      _vm.root.style[_vm.getClassPrefix(false) + "-line"]
                    ),
                    attrs: {
                      x1: _vm.options.size / 2,
                      y1: _vm.lineOffset,
                      x2: _vm.options.size / 2,
                      y2: _vm.options.size - _vm.lineOffset
                    }
                  })
                : _vm._e()
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=template&id=0bc4212e& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__main-view",
      style: Object.assign({}, _vm.root.style["main-view"])
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__main-container-wrapper",
          style: Object.assign({}, _vm.root.style["main-container-wrapper"], {
            height: _vm.root.state.options.height + "px"
          })
        },
        [
          _c(
            "div",
            {
              ref: "mainView",
              staticClass: "gantt-elastic__main-container",
              style: Object.assign({}, _vm.root.style["main-container"], {
                width: _vm.root.state.options.clientWidth + "px",
                height: _vm.root.state.options.height + "px"
              })
            },
            [
              _c(
                "div",
                {
                  staticClass: "gantt-elastic__container",
                  style: Object.assign({}, _vm.root.style["container"]),
                  on: { mousemove: _vm.mouseMove, mouseup: _vm.mouseUp }
                },
                [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.root.state.options.taskList.display,
                          expression: "root.state.options.taskList.display"
                        }
                      ],
                      ref: "taskList",
                      staticClass: "gantt-elastic__task-list-container",
                      style: Object.assign(
                        {},
                        _vm.root.style["task-list-container"],
                        {
                          width:
                            _vm.root.state.options.taskList.finalWidth + "px",
                          height: _vm.root.state.options.height + "px"
                        }
                      )
                    },
                    [_c("task-list")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      ref: "chartContainer",
                      staticClass: "gantt-elastic__main-view-container",
                      style: Object.assign(
                        {},
                        _vm.root.style["main-view-container"]
                      ),
                      on: {
                        mousedown: _vm.chartMouseDown,
                        touchstart: _vm.chartMouseDown,
                        mouseup: _vm.chartMouseUp,
                        touchend: _vm.chartMouseUp,
                        mousemove: function($event) {
                          $event.preventDefault()
                          return _vm.chartMouseMove($event)
                        },
                        touchmove: function($event) {
                          $event.preventDefault()
                          return _vm.chartMouseMove($event)
                        },
                        wheel: function($event) {
                          $event.preventDefault()
                          return _vm.chartWheel($event)
                        }
                      }
                    },
                    [_c("chart")],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "chartScrollContainerVertical",
              staticClass:
                "gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--vertical",
              style: Object.assign(
                {},
                _vm.root.style["chart-scroll-container"],
                _vm.root.style["chart-scroll-container--vertical"],
                _vm.verticalStyle
              ),
              on: { scroll: _vm.onVerticalScroll }
            },
            [
              _c("div", {
                staticClass: "gantt-elastic__chart-scroll--vertical",
                style: {
                  width: "1px",
                  height: _vm.root.state.options.allVisibleTasksHeight + "px"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "chartScrollContainerHorizontal",
          staticClass:
            "gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--horizontal",
          style: Object.assign(
            {},
            _vm.root.style["chart-scroll-container"],
            _vm.root.style["chart-scroll-container--horizontal"],
            { marginLeft: _vm.getMarginLeft }
          ),
          on: { scroll: _vm.onHorizontalScroll }
        },
        [
          _c("div", {
            staticClass: "gantt-elastic__chart-scroll--horizontal",
            style: { height: "1px", width: _vm.root.state.options.width + "px" }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item-column",
      style: _vm.itemColumnStyle
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__task-list-item-value-wrapper",
          style: _vm.wrapperStyle
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-item-value-container",
              style: _vm.containerStyle
            },
            [
              !_vm.html
                ? _c(
                    "div",
                    {
                      staticClass: "gantt-elastic__task-list-item-value",
                      style: _vm.valueStyle,
                      on: {
                        click: function($event) {
                          return _vm.emitEvent("click", $event)
                        },
                        mouseenter: function($event) {
                          return _vm.emitEvent("mouseenter", $event)
                        },
                        mouseover: function($event) {
                          return _vm.emitEvent("mouseover", $event)
                        },
                        mouseout: function($event) {
                          return _vm.emitEvent("mouseout", $event)
                        },
                        mousemove: function($event) {
                          return _vm.emitEvent("mousemove", $event)
                        },
                        mousedown: function($event) {
                          return _vm.emitEvent("mousedown", $event)
                        },
                        mouseup: function($event) {
                          return _vm.emitEvent("mouseup", $event)
                        },
                        mousewheel: function($event) {
                          return _vm.emitEvent("mousewheel", $event)
                        },
                        touchstart: function($event) {
                          return _vm.emitEvent("touchstart", $event)
                        },
                        touchmove: function($event) {
                          return _vm.emitEvent("touchmove", $event)
                        },
                        touchend: function($event) {
                          return _vm.emitEvent("touchend", $event)
                        }
                      }
                    },
                    [_vm._v("\n        " + _vm._s(_vm.value) + "\n      ")]
                  )
                : _c("div", {
                    staticClass: "gantt-elastic__task-list-item-value",
                    style: _vm.valueStyle,
                    domProps: { innerHTML: _vm._s(_vm.value) },
                    on: {
                      click: function($event) {
                        return _vm.emitEvent("click", $event)
                      },
                      mouseenter: function($event) {
                        return _vm.emitEvent("mouseenter", $event)
                      },
                      mouseover: function($event) {
                        return _vm.emitEvent("mouseover", $event)
                      },
                      mouseout: function($event) {
                        return _vm.emitEvent("mouseout", $event)
                      },
                      mousemove: function($event) {
                        return _vm.emitEvent("mousemove", $event)
                      },
                      mousedown: function($event) {
                        return _vm.emitEvent("mousedown", $event)
                      },
                      mouseup: function($event) {
                        return _vm.emitEvent("mouseup", $event)
                      },
                      mousewheel: function($event) {
                        return _vm.emitEvent("mousewheel", $event)
                      },
                      touchstart: function($event) {
                        return _vm.emitEvent("touchstart", $event)
                      },
                      touchmove: function($event) {
                        return _vm.emitEvent("touchmove", $event)
                      },
                      touchend: function($event) {
                        return _vm.emitEvent("touchend", $event)
                      }
                    }
                  })
            ]
          )
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.root.state.options.taskList.display,
          expression: "root.state.options.taskList.display"
        }
      ],
      ref: "taskListWrapper",
      staticClass: "gantt-elastic__task-list-wrapper",
      style: Object.assign({}, _vm.root.style["task-list-wrapper"], {
        width: "100%",
        height: "100%"
      })
    },
    [
      _c(
        "div",
        {
          ref: "taskList",
          staticClass: "gantt-elastic__task-list",
          style: Object.assign({}, _vm.root.style["task-list"])
        },
        [
          _c("task-list-header"),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "taskListItems",
              staticClass: "gantt-elastic__task-list-items",
              style: Object.assign({}, _vm.root.style["task-list-items"], {
                height: _vm.root.state.options.rowsHeight + "px"
              })
            },
            _vm._l(_vm.root.visibleTasks, function(task) {
              return _c("task-list-item", {
                key: task.id,
                attrs: { task: task }
              })
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-header",
      style: Object.assign({}, _vm.root.style["task-list-header"], {
        height: _vm.root.state.options.calendar.height + "px",
        "margin-bottom": _vm.root.state.options.calendar.gap + "px"
      })
    },
    _vm._l(_vm.root.getTaskListColumns, function(column) {
      return _c(
        "div",
        {
          key: column._id,
          staticClass: "gantt-elastic__task-list-header-column",
          style: Object.assign(
            {},
            _vm.root.style["task-list-header-column"],
            column.style["task-list-header-column"],
            _vm.getStyle(column)
          )
        },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  column: column,
                  tasks: _vm.collapsible,
                  options: _vm.root.state.options.taskList.expander
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-header-label",
              style: Object.assign(
                {},
                _vm.root.style["task-list-header-label"],
                column.style["task-list-header-label"]
              ),
              attrs: { column: column },
              on: { mouseup: _vm.resizerMouseUp }
            },
            [_vm._v("\n      " + _vm._s(column.label) + "\n    ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-header-resizer-wrapper",
              style: Object.assign(
                {},
                _vm.root.style["task-list-header-resizer-wrapper"],
                column.style["task-list-header-resizer-wrapper"]
              ),
              attrs: { column: column },
              on: {
                mousedown: function($event) {
                  return _vm.resizerMouseDown($event, column)
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "gantt-elastic__task-list-header-resizer",
                  style: Object.assign(
                    {},
                    _vm.root.style["task-list-header-resizer"],
                    column.style["task-list-header-resizer"]
                  )
                },
                [
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: Object.assign(
                      {},
                      _vm.root.style["task-list-header-resizer-dot"],
                      column.style["task-list-header-resizer-dot"]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: Object.assign(
                      {},
                      _vm.root.style["task-list-header-resizer-dot"],
                      column.style["task-list-header-resizer-dot"]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: Object.assign(
                      {},
                      _vm.root.style["task-list-header-resizer-dot"],
                      column.style["task-list-header-resizer-dot"]
                    )
                  })
                ]
              )
            ]
          )
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item",
      style: Object.assign({}, _vm.root.style["task-list-item"])
    },
    _vm._l(_vm.columns, function(column) {
      return _c(
        "item-column",
        { key: column._id, attrs: { column: column, task: _vm.task } },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  column: column,
                  tasks: [_vm.task],
                  task: _vm.task,
                  options: _vm.root.state.options.taskList.expander,
                  type: "taskList"
                }
              })
            : _vm._e()
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c3e5085c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/GanttElastic.vue":
/*!******************************!*\
  !*** ./src/GanttElastic.vue ***!
  \******************************/
/*! exports provided: default, mergeDeep, mergeDeepReactive, notEqualDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=template&id=02c6304c& */ "./src/GanttElastic.vue?vue&type=template&id=02c6304c&");
/* harmony import */ var _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=script&lang=js& */ "./src/GanttElastic.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["mergeDeepReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["notEqualDeep"]; });

/* harmony import */ var _GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/GanttElastic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default, mergeDeep, mergeDeepReactive, notEqualDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["mergeDeepReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["notEqualDeep"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=template&id=02c6304c&":
/*!*************************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=template&id=02c6304c& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=template&id=02c6304c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=template&id=02c6304c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Calendar/Calendar.vue":
/*!**********************************************!*\
  !*** ./src/components/Calendar/Calendar.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=dee108e2& */ "./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Calendar/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/Calendar/Calendar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&":
/*!*****************************************************************************!*\
  !*** ./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=dee108e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue":
/*!*************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarRow.vue?vue&type=template&id=0daf06fb& */ "./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&");
/* harmony import */ var _CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarRow.vue?vue&type=script&lang=js& */ "./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Calendar/CalendarRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarRow.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&":
/*!********************************************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarRow.vue?vue&type=template&id=0daf06fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Chart.vue":
/*!****************************************!*\
  !*** ./src/components/Chart/Chart.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.vue?vue&type=template&id=67c3f5cd& */ "./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&");
/* harmony import */ var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.vue?vue&type=script&lang=js& */ "./src/components/Chart/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Chart.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/Chart/Chart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&":
/*!***********************************************************************!*\
  !*** ./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=template&id=67c3f5cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue":
/*!************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DaysHighlight.vue?vue&type=template&id=1bfe64e8& */ "./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&");
/* harmony import */ var _DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaysHighlight.vue?vue&type=script&lang=js& */ "./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/DaysHighlight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DaysHighlight.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&":
/*!*******************************************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DaysHighlight.vue?vue&type=template&id=1bfe64e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue":
/*!**************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DependencyLines.vue?vue&type=template&id=f1cbf6ba& */ "./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&");
/* harmony import */ var _DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DependencyLines.vue?vue&type=script&lang=js& */ "./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/DependencyLines.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyLines.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&":
/*!*********************************************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyLines.vue?vue&type=template&id=f1cbf6ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Grid.vue":
/*!***************************************!*\
  !*** ./src/components/Chart/Grid.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue?vue&type=template&id=2bf979a7& */ "./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&");
/* harmony import */ var _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid.vue?vue&type=script&lang=js& */ "./src/components/Chart/Grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Grid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Grid.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/Chart/Grid.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&":
/*!**********************************************************************!*\
  !*** ./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=template&id=2bf979a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Row/Group.vue":
/*!********************************************!*\
  !*** ./src/components/Chart/Row/Group.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Group_vue_vue_type_template_id_78306e59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group.vue?vue&type=template&id=78306e59& */ "./src/components/Chart/Row/Group.vue?vue&type=template&id=78306e59&");
/* harmony import */ var _Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group.vue?vue&type=script&lang=js& */ "./src/components/Chart/Row/Group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Group_vue_vue_type_template_id_78306e59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Group_vue_vue_type_template_id_78306e59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Row/Group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Row/Group.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/Chart/Row/Group.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Group.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Row/Group.vue?vue&type=template&id=78306e59&":
/*!***************************************************************************!*\
  !*** ./src/components/Chart/Row/Group.vue?vue&type=template&id=78306e59& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_78306e59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Group.vue?vue&type=template&id=78306e59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Group.vue?vue&type=template&id=78306e59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_78306e59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_78306e59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Row/Task.mixin.js":
/*!************************************************!*\
  !*** ./src/components/Chart/Row/Task.mixin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @fileoverview Task mixin
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      const task = this.task;
      return `0 0 ${task.width} ${task.height}`;
    },

    /**
     * Get group transform
     *
     * @returns {string}
     */
    getGroupTransform() {
      return `translate(${this.task.x} ${this.task.y})`;
    },

    /**
     * Should we display expander?
     *
     * @returns {boolean}
     */
    displayExpander() {
      const expander = this.root.state.options.chart.expander;
      return expander.display || (expander.displayIfTaskListHidden && !this.root.state.options.taskList.display);
    }
  },
  methods: {
    /**
     * Emit event
     *
     * @param {string} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (!this.root.state.options.scroll.scrolling) {
        this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
      }
    }
  }
});


/***/ }),

/***/ "./src/components/Chart/Row/Task.vue":
/*!*******************************************!*\
  !*** ./src/components/Chart/Row/Task.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=e9c23eca& */ "./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&");
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Row/Task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/Chart/Row/Task.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&":
/*!**************************************************************************!*\
  !*** ./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=template&id=e9c23eca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Expander.vue":
/*!*************************************!*\
  !*** ./src/components/Expander.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expander.vue?vue&type=template&id=09a21177& */ "./src/components/Expander.vue?vue&type=template&id=09a21177&");
/* harmony import */ var _Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expander.vue?vue&type=script&lang=js& */ "./src/components/Expander.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Expander.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Expander.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/Expander.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Expander.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Expander.vue?vue&type=template&id=09a21177&":
/*!********************************************************************!*\
  !*** ./src/components/Expander.vue?vue&type=template&id=09a21177& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Expander.vue?vue&type=template&id=09a21177& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=template&id=09a21177&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/MainView.vue":
/*!*************************************!*\
  !*** ./src/components/MainView.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainView.vue?vue&type=template&id=0bc4212e& */ "./src/components/MainView.vue?vue&type=template&id=0bc4212e&");
/* harmony import */ var _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.vue?vue&type=script&lang=js& */ "./src/components/MainView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MainView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=template&id=0bc4212e&":
/*!********************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=template&id=0bc4212e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=template&id=0bc4212e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue":
/*!************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemColumn.vue?vue&type=template&id=cb5a6c96& */ "./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&");
/* harmony import */ var _ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColumn.vue?vue&type=script&lang=js& */ "./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/ItemColumn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&":
/*!*******************************************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=template&id=cb5a6c96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskList.vue":
/*!**********************************************!*\
  !*** ./src/components/TaskList/TaskList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.vue?vue&type=template&id=6e11f12f& */ "./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&");
/* harmony import */ var _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/TaskList/TaskList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&":
/*!*****************************************************************************!*\
  !*** ./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=template&id=6e11f12f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue":
/*!****************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListHeader.vue?vue&type=template&id=aefdd7c8& */ "./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&");
/* harmony import */ var _TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListHeader.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskListHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&":
/*!***********************************************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=template&id=aefdd7c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue":
/*!**************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=template&id=9716293c& */ "./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&");
/* harmony import */ var _TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&":
/*!*********************************************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=template&id=9716293c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStyle; });
/**
 * @fileoverview Styles for gantt-elastic
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */

function getStyle(fontSize = '12px', fontFamily = 'Arial, sans-serif') {
  return {
    fontSize,
    fontFamily,
    'main-view': {
      background: '#FFFFFF'
    },
    'main-container-wrapper': {
      overflow: 'hidden',
      'border-top': '1px solid #eee',
      'border-bottom': '1px solid #eee'
    },
    'main-container': {
      float: 'left',
      'max-width': '100%'
    },
    'main-view-container': {},
    container: {
      display: 'flex',
      'max-width': '100%',
      height: '100%'
    },
    'calendar-wrapper': {
      'user-select': 'none'
    },
    calendar: {
      width: '100%',
      background: '#f3f5f7',
      display: 'block'
    },
    'calendar-row': {
      display: 'flex',
      'justify-content': 'space-evenly'
    },
    'calendar-row--month': {},
    'calendar-row--day': {},
    'calendar-row--hour': {
      'border-bottom': '1px solid #eee'
    },
    'calendar-row-rect': {
      background: 'transparent',
      display: 'flex'
    },
    'calendar-row-rect--month': {},
    'calendar-row-rect--day': {},
    'calendar-row-rect--hour': {},
    'calendar-row-rect-child': {
      display: 'block',
      'border-right-width': '1px', // Calendar
      'border-right-color': '#dadada',
      'border-right-style': 'solid',
      position: 'relative'
    },
    'calendar-row-rect-child--month': {},
    'calendar-row-rect-child--day': { 'text-align': 'center' },
    'calendar-row-rect-child--hour': { 'text-align': 'center' },
    'calendar-row-text': {
      'font-family': fontFamily, // GanttElastic
      'font-size': fontSize, //GanttElastic
      color: '#606060',
      display: 'inline-block',
      position: 'relative'
    },
    'calendar-row-text--month': {
      left: '50%',
      transform: 'translate3d(-50%, 0, 0)'
    },
    'calendar-row-text--day': {},
    'calendar-row-text--hour': {},
    'task-list-wrapper': {},
    'task-list': { background: 'transparent', 'border-color': '#eee' },
    'task-list-header': {
      display: 'flex',
      'user-select': 'none',
      'vertical-align': 'middle',
      'border-bottom': '1px solid #eee',
      'border-left': '1px solid #eee'
    },
    'task-list-header-column': {
      'border-left': '1px solid #00000050',
      'box-sizing': 'border-box',
      display: 'flex',
      background: '#f3f5f7',
      'border-color': 'transparent'
    },
    'task-list-expander-wrapper': {
      display: 'inline-flex',
      'flex-shrink': '0',
      'box-sizing': 'border-box',
      margin: '0 0 0 10px'
    },
    'task-list-expander-content': {
      display: 'inline-flex',
      cursor: 'pointer',
      margin: 'auto 0px',
      'box-sizing': 'border-box',
      'user-select': 'none'
    },
    'task-list-expander-line': {
      fill: 'transparent',
      stroke: '#000000',
      'stroke-width': '1',
      'stroke-linecap': 'round'
    },
    'task-list-expander-border': {
      fill: '#ffffffa0',
      stroke: '#000000A0'
    },
    'chart-expander-wrapper': {
      display: 'block',
      'line-height': '1',
      'box-sizing': 'border-box',
      margin: '0'
    },
    'chart-expander-content': {
      display: 'inline-flex',
      cursor: 'pointer',
      margin: 'auto 0px',
      'box-sizing': 'border-box',
      'user-select': 'none'
    },
    'chart-expander-line': {
      fill: 'transparent',
      stroke: '#000000',
      'stroke-width': '1',
      'stroke-linecap': 'round'
    },
    'chart-expander-border': {
      fill: '#ffffffa0',
      stroke: '#000000A0'
    },
    'task-list-container': {},
    'task-list-header-label': {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'font-family': fontFamily,
      'font-size': fontSize,
      'box-sizing': 'border-box',
      margin: 'auto 6px',
      'flex-grow': '1',
      'vertical-align': 'middle'
    },
    'task-list-header-resizer-wrapper': {
      background: 'transparent',
      height: '100%',
      width: '6px',
      cursor: 'col-resize',
      display: 'inline-flex',
      'vertical-align': 'center'
    },
    'task-list-header-resizer': { margin: 'auto 0px' },
    'task-list-header-resizer-dot': {
      width: '3px',
      height: '3px',
      background: '#ddd',
      'border-radius': '100%',
      margin: '4px 0px'
    },
    'task-list-items': {
      overflow: 'hidden'
    },
    'task-list-item': {
      'border-top': '1px solid #eee',
      'border-right': '1px solid #eee',
      'box-sizing': 'border-box',
      display: 'flex',
      background: 'transparent',
      height: '30px'
    },
    'task-list-item-column': {
      display: 'inline-flex',
      'flex-shrink': '0',
      'border-left': '1px solid #00000050',
      'box-sizing': 'border-box',
      'border-color': '#eee'
    },
    'task-list-item-value-wrapper': {
      overflow: 'hidden',
      display: 'flex',
      width: '100%'
    },
    'task-list-item-value-container': {
      margin: 'auto 0px',
      overflow: 'hidden'
    },
    'task-list-item-value': {
      display: 'block',
      'flex-shrink': '100',
      'font-family': fontFamily,
      'font-size': fontSize,
      'margin-top': 'auto',
      'margin-bottom': 'auto',
      'margin-left': '6px', // TaskList
      'margin-right': '6px',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'line-height': '1em',
      'word-break': 'keep-all',
      'white-space': 'nowrap',
      color: '#606060',
      background: '#FFFFFF'
    },
    'grid-lines': {},
    'grid-line-horizontal': {
      stroke: '#00000010',
      'stroke-width': 0
    },
    'grid-line-vertical': {
      stroke: '#00000010',
      'stroke-width': 0
    },
    'grid-line-time': {
      stroke: '#FF000080',
      'stroke-width': 1
    },
    chart: {
      'user-select': 'none',
      overflow: 'hidden'
    },
    'chart-calendar-container': {
      'user-select': 'none',
      overflow: 'hidden',
      'max-width': '100%',
      'border-right': '1px solid #eee'
    },
    'chart-graph-container': {
      'user-select': 'none',
      overflow: 'hidden',
      'max-width': '100%',
      'border-right': '1px solid #eee'
    },
    'chart-area': {},
    'chart-graph': {
      overflow: 'hidden'
    },
    'chart-row-text-wrapper': {},
    'chart-row-text': {
      background: '#ffffffa0',
      'border-radius': '10px',
      'font-family': fontFamily,
      'font-size': fontSize,
      'font-weight': 'normal',
      color: '#000000a0',
      height: '100%',
      display: 'inline-block'
    },
    'chart-row-text-content': {
      padding: '0px 6px'
    },
    'chart-row-text-content--text': {},
    'chart-row-text-content--html': {},
    'chart-row-wrapper': {},
    'chart-row-bar-wrapper': {},
    'chart-row-bar': {},
    'chart-row-bar-polygon': {
      stroke: '#E74C3C',
      'stroke-width': 1,
      fill: '#F75C4C'
    },
    'chart-row-project-wrapper': {},
    'chart-row-project': {},
    'chart-row-project-polygon': {},
    'chart-row-milestone-wrapper': {},
    'chart-row-milestone': {},
    'chart-row-milestone-polygon': {},
    'chart-row-task-wrapper': {},
    'chart-row-task': {},
    'chart-row-task-polygon': {},
    'chart-row-progress-bar-wrapper': {},
    'chart-row-progress-bar': {},
    'chart-row-progress-bar-line': {
      stroke: '#ffffff25',
      'stroke-width': 20
    },
    'chart-row-progress-bar-solid': {
      fill: '#0EAC51',
      height: '20%'
    },
    'chart-row-progress-bar-pattern': {
      fill: 'url(#diagonalHatch)',
      transform: 'translateY(0.1) scaleY(0.8)'
    },
    'chart-row-progress-bar-outline': {
      stroke: '#E74C3C',
      'stroke-width': 1
    },
    'chart-dependency-lines-wrapper': {},
    'chart-dependency-lines-path': {
      fill: 'transparent',
      stroke: '#FFa00090',
      'stroke-width': 2
    },
    'chart-scroll-container': {},
    'chart-scroll-container--horizontal': {
      overflow: 'auto',
      'max-width': '100%'
    },
    'chart-scroll-container--vertical': {
      'overflow-y': 'auto',
      'overflow-x': 'hidden',
      'max-height': '100%',
      float: 'right'
    },
    'chart-days-highlight-rect': {
      // fill: '#f3f5f780',
      fill: '#f2f2f280'
    },
    'slot-header-beforeOptions': {
      display: 'inline-block'
    }
  };
}


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT83ZjFmIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5lcy5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL0dhbnR0RWxhc3RpYy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9DaGFydC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L0dyb3VwLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlPzBkZjkiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlP2JjMDgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlPzExMzgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlPzI4ODEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWU/NDU2ZiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlPzdlZTIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWU/NTliNyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvR3JvdXAudnVlPzllODEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlPzY3YmEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlPzcwZWMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvTWFpblZpZXcudnVlPzRhZGIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWU/OTY5YiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWU/MWU5YiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/ODgwOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlP2NiY2IiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT8zMGM1Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlP2NhMmEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL0dhbnR0RWxhc3RpYy52dWU/NWEyMCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT82NTE2Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci52dWU/NDBkNSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci52dWU/YTAyOSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhclJvdy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlPzI1NWIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlP2FjMWEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZT83ZjljIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZT80ZTNkIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlPzdlMzMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWU/N2VkMiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RlcGVuZGVuY3lMaW5lcy52dWU/NzE2NCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlPzNkZTMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWU/Nzc2MSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZT80ZmEwIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Hcm91cC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L0dyb3VwLnZ1ZT80MGEyIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Hcm91cC52dWU/Nzg2NiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay5taXhpbi5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlPzg2ODciLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlPzRhMTgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZT8wODk4Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZT84ZGYzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9NYWluVmlldy52dWU/ZjViMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9NYWluVmlldy52dWU/ZWQ4NyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9JdGVtQ29sdW1uLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9JdGVtQ29sdW1uLnZ1ZT84ODE0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlPzE0YWMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZT83MzU0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZT9kOWRlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/NjM1MyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/YmM3MiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SXRlbS52dWU/NjRmOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlPzg3YmEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL3N0eWxlLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9leHRlcm5hbCBcInZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzk0QlM7QUFDSjtBQUN1QjtBQUNmO0FBQ29COztBQUV0RDtBQUNBLGNBQWMsMENBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBUTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBSztBQUNoQztBQUNBO0FBQ0EseUJBQXlCLDRDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDRDQUFLO0FBQ1gsTUFBTSw0Q0FBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDRDQUFLO0FBQzNELHVEQUF1RCw0Q0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsNENBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRDQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUFLO0FBQzFCLDBCQUEwQiw0Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRDQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnRUFBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0akRGO0FBQ2tCOztBQUU3QjtBQUNmO0FBQ0E7QUFDQSxJQUFJLHFFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRmE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSXNDO0FBQ1Y7QUFDZjtBQUNmO0FBQ0EsZ0JBQWdCLHVEQUFJO0FBQ3BCO0FBQ0E7QUFDQSxXQUFXLHNEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0JzQztBQUN6QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ2E7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQ2QztBQUNUOztBQUV0Qzs7QUFFZTtBQUNmO0FBQ0E7QUFDQSxJQUFJLHdFQUFRO0FBQ1osSUFBSSwrREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0IsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IscUNBQXFDO0FBQ3JDLGdDQUFnQztBQUNoQyx3QkFBd0I7QUFDeEIsZ0NBQWdDO0FBQ2hDLHdDQUF3QztBQUN4QyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlUQSxpRCIsImZpbGUiOiJHYW50dEVsYXN0aWMudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInZ1ZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHYW50dEVsYXN0aWNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkdhbnR0RWxhc3RpY1wiXSA9IGZhY3Rvcnkocm9vdFtcInZ1ZVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdnVlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9HYW50dEVsYXN0aWMudnVlXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5bY2xhc3NePSdnYW50dC1lbGFzdGljJ10sXFxuW2NsYXNzKj0nIGdhbnR0LWVsYXN0aWMnXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3IHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtaG9yaXpvbnRhbC1saW5lLFxcbi5nYW50dC1lbGFzdGljX19ncmlkLXZlcnRpY2FsLWxpbmUge1xcbiAgc3Ryb2tlOiAjYTBhMGEwO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG5mb3JlaWduT2JqZWN0ID4gKiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuLmdhbnR0LWVsYXN0aWMgLnAtMiB7XFxuICBwYWRkaW5nOiAxMHJlbTtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldy1tYWluLWNvbnRhaW5lcixcXG4uZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1jb2x1bW46bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA1MDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDUwO1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlcjpob3ZlciB7XFxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlcjpob3ZlciA+IC5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXI6aG92ZXIgPiAuZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTp0LmRheWpzPW4oKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibWlsbGlzZWNvbmRcIixuPVwic2Vjb25kXCIsZT1cIm1pbnV0ZVwiLHI9XCJob3VyXCIsaT1cImRheVwiLHM9XCJ3ZWVrXCIsdT1cIm1vbnRoXCIsbz1cInF1YXJ0ZXJcIixhPVwieWVhclwiLGg9L14oXFxkezR9KS0/KFxcZHsxLDJ9KS0/KFxcZHswLDJ9KVteMC05XSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Lj8oXFxkezEsM30pPyQvLGY9L1xcWyhbXlxcXV0rKV18WXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLGM9ZnVuY3Rpb24odCxuLGUpe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PW4/dDpcIlwiK0FycmF5KG4rMS1yLmxlbmd0aCkuam9pbihlKSt0fSxkPXtzOmMsejpmdW5jdGlvbih0KXt2YXIgbj0tdC51dGNPZmZzZXQoKSxlPU1hdGguYWJzKG4pLHI9TWF0aC5mbG9vcihlLzYwKSxpPWUlNjA7cmV0dXJuKG48PTA/XCIrXCI6XCItXCIpK2MociwyLFwiMFwiKStcIjpcIitjKGksMixcIjBcIil9LG06ZnVuY3Rpb24odCxuKXt2YXIgZT0xMioobi55ZWFyKCktdC55ZWFyKCkpKyhuLm1vbnRoKCktdC5tb250aCgpKSxyPXQuY2xvbmUoKS5hZGQoZSx1KSxpPW4tcjwwLHM9dC5jbG9uZSgpLmFkZChlKyhpPy0xOjEpLHUpO3JldHVybiBOdW1iZXIoLShlKyhuLXIpLyhpP3ItczpzLXIpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbihoKXtyZXR1cm57TTp1LHk6YSx3OnMsZDppLGg6cixtOmUsczpuLG1zOnQsUTpvfVtoXXx8U3RyaW5nKGh8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sJD17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpfSxsPVwiZW5cIixtPXt9O21bbF09JDt2YXIgeT1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIHZ9LE09ZnVuY3Rpb24odCxuLGUpe3ZhciByO2lmKCF0KXJldHVybiBsO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KW1bdF0mJihyPXQpLG4mJihtW3RdPW4scj10KTtlbHNle3ZhciBpPXQubmFtZTttW2ldPXQscj1pfXJldHVybiBlfHwobD1yKSxyfSxnPWZ1bmN0aW9uKHQsbixlKXtpZih5KHQpKXJldHVybiB0LmNsb25lKCk7dmFyIHI9bj9cInN0cmluZ1wiPT10eXBlb2Ygbj97Zm9ybWF0Om4scGw6ZX06bjp7fTtyZXR1cm4gci5kYXRlPXQsbmV3IHYocil9LEQ9ZDtELmw9TSxELmk9eSxELnc9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZyh0LHtsb2NhbGU6bi4kTCx1dGM6bi4kdX0pfTt2YXIgdj1mdW5jdGlvbigpe2Z1bmN0aW9uIGModCl7dGhpcy4kTD10aGlzLiRMfHxNKHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCl9dmFyIGQ9Yy5wcm90b3R5cGU7cmV0dXJuIGQucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgbj10LmRhdGUsZT10LnV0YztpZihudWxsPT09bilyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihELnUobikpcmV0dXJuIG5ldyBEYXRlO2lmKG4gaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShuKTtpZihcInN0cmluZ1wiPT10eXBlb2YgbiYmIS9aJC9pLnRlc3Qobikpe3ZhciByPW4ubWF0Y2goaCk7aWYocilyZXR1cm4gZT9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLHJbMl0tMSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHJbN118fDApKTpuZXcgRGF0ZShyWzFdLHJbMl0tMSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHJbN118fDApfXJldHVybiBuZXcgRGF0ZShuKX0odCksdGhpcy5pbml0KCl9LGQuaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LGQuJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIER9LGQuaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEoXCJJbnZhbGlkIERhdGVcIj09PXRoaXMuJGQudG9TdHJpbmcoKSl9LGQuaXNTYW1lPWZ1bmN0aW9uKHQsbil7dmFyIGU9Zyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKG4pPD1lJiZlPD10aGlzLmVuZE9mKG4pfSxkLmlzQWZ0ZXI9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZyh0KTx0aGlzLnN0YXJ0T2Yobil9LGQuaXNCZWZvcmU9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5lbmRPZihuKTxnKHQpfSxkLiRnPWZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gRC51KHQpP3RoaXNbbl06dGhpcy5zZXQoZSx0KX0sZC55ZWFyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkeVwiLGEpfSxkLm1vbnRoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkTVwiLHUpfSxkLmRheT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJFdcIixpKX0sZC5kYXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkRFwiLFwiZGF0ZVwiKX0sZC5ob3VyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkSFwiLHIpfSxkLm1pbnV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJG1cIixlKX0sZC5zZWNvbmQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRzXCIsbil9LGQubWlsbGlzZWNvbmQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuJGcobixcIiRtc1wiLHQpfSxkLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxkLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LGQuc3RhcnRPZj1mdW5jdGlvbih0LG8pe3ZhciBoPXRoaXMsZj0hIUQudShvKXx8byxjPUQucCh0KSxkPWZ1bmN0aW9uKHQsbil7dmFyIGU9RC53KGguJHU/RGF0ZS5VVEMoaC4keSxuLHQpOm5ldyBEYXRlKGguJHksbix0KSxoKTtyZXR1cm4gZj9lOmUuZW5kT2YoaSl9LCQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gRC53KGgudG9EYXRlKClbdF0uYXBwbHkoaC50b0RhdGUoKSwoZj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKG4pKSxoKX0sbD10aGlzLiRXLG09dGhpcy4kTSx5PXRoaXMuJEQsTT1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGMpe2Nhc2UgYTpyZXR1cm4gZj9kKDEsMCk6ZCgzMSwxMSk7Y2FzZSB1OnJldHVybiBmP2QoMSxtKTpkKDAsbSsxKTtjYXNlIHM6dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLHY9KGw8Zz9sKzc6bCktZztyZXR1cm4gZChmP3ktdjp5Kyg2LXYpLG0pO2Nhc2UgaTpjYXNlXCJkYXRlXCI6cmV0dXJuICQoTStcIkhvdXJzXCIsMCk7Y2FzZSByOnJldHVybiAkKE0rXCJNaW51dGVzXCIsMSk7Y2FzZSBlOnJldHVybiAkKE0rXCJTZWNvbmRzXCIsMik7Y2FzZSBuOnJldHVybiAkKE0rXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxkLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LGQuJHNldD1mdW5jdGlvbihzLG8pe3ZhciBoLGY9RC5wKHMpLGM9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGQ9KGg9e30saFtpXT1jK1wiRGF0ZVwiLGguZGF0ZT1jK1wiRGF0ZVwiLGhbdV09YytcIk1vbnRoXCIsaFthXT1jK1wiRnVsbFllYXJcIixoW3JdPWMrXCJIb3Vyc1wiLGhbZV09YytcIk1pbnV0ZXNcIixoW25dPWMrXCJTZWNvbmRzXCIsaFt0XT1jK1wiTWlsbGlzZWNvbmRzXCIsaClbZl0sJD1mPT09aT90aGlzLiREKyhvLXRoaXMuJFcpOm87aWYoZj09PXV8fGY9PT1hKXt2YXIgbD10aGlzLmNsb25lKCkuc2V0KFwiZGF0ZVwiLDEpO2wuJGRbZF0oJCksbC5pbml0KCksdGhpcy4kZD1sLnNldChcImRhdGVcIixNYXRoLm1pbih0aGlzLiRELGwuZGF5c0luTW9udGgoKSkpLnRvRGF0ZSgpfWVsc2UgZCYmdGhpcy4kZFtkXSgkKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sZC5zZXQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxuKX0sZC5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbRC5wKHQpXSgpfSxkLmFkZD1mdW5jdGlvbih0LG8pe3ZhciBoLGY9dGhpczt0PU51bWJlcih0KTt2YXIgYz1ELnAobyksZD1mdW5jdGlvbihuKXt2YXIgZT1nKGYpO3JldHVybiBELncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQobip0KSksZil9O2lmKGM9PT11KXJldHVybiB0aGlzLnNldCh1LHRoaXMuJE0rdCk7aWYoYz09PWEpcmV0dXJuIHRoaXMuc2V0KGEsdGhpcy4keSt0KTtpZihjPT09aSlyZXR1cm4gZCgxKTtpZihjPT09cylyZXR1cm4gZCg3KTt2YXIgJD0oaD17fSxoW2VdPTZlNCxoW3JdPTM2ZTUsaFtuXT0xZTMsaClbY118fDEsbD10aGlzLnZhbHVlT2YoKSt0KiQ7cmV0dXJuIEQudyhsLHRoaXMpfSxkLnN1YnRyYWN0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuYWRkKC0xKnQsbil9LGQuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVyblwiSW52YWxpZCBEYXRlXCI7dmFyIGU9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLHI9RC56KHRoaXMpLGk9dGhpcy4kbG9jYWxlKCkscz10aGlzLiRILHU9dGhpcy4kbSxvPXRoaXMuJE0sYT1pLndlZWtkYXlzLGg9aS5tb250aHMsYz1mdW5jdGlvbih0LHIsaSxzKXtyZXR1cm4gdCYmKHRbcl18fHQobixlKSl8fGlbcl0uc3Vic3RyKDAscyl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIEQucyhzJTEyfHwxMix0LFwiMFwiKX0sJD1pLm1lcmlkaWVtfHxmdW5jdGlvbih0LG4sZSl7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBlP3IudG9Mb3dlckNhc2UoKTpyfSxsPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOm8rMSxNTTpELnMobysxLDIsXCIwXCIpLE1NTTpjKGkubW9udGhzU2hvcnQsbyxoLDMpLE1NTU06aFtvXXx8aCh0aGlzLGUpLEQ6dGhpcy4kRCxERDpELnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpjKGkud2Vla2RheXNNaW4sdGhpcy4kVyxhLDIpLGRkZDpjKGkud2Vla2RheXNTaG9ydCx0aGlzLiRXLGEsMyksZGRkZDphW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOkQucyhzLDIsXCIwXCIpLGg6ZCgxKSxoaDpkKDIpLGE6JChzLHUsITApLEE6JChzLHUsITEpLG06U3RyaW5nKHUpLG1tOkQucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOkQucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpELnModGhpcy4kbXMsMyxcIjBcIiksWjpyfTtyZXR1cm4gZS5yZXBsYWNlKGYsZnVuY3Rpb24odCxuKXtyZXR1cm4gbnx8bFt0XXx8ci5yZXBsYWNlKFwiOlwiLFwiXCIpfSl9LGQudXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LGQuZGlmZj1mdW5jdGlvbih0LGgsZil7dmFyIGMsZD1ELnAoaCksJD1nKHQpLGw9NmU0KigkLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpLG09dGhpcy0kLHk9RC5tKHRoaXMsJCk7cmV0dXJuIHk9KGM9e30sY1thXT15LzEyLGNbdV09eSxjW29dPXkvMyxjW3NdPShtLWwpLzYwNDhlNSxjW2ldPShtLWwpLzg2NGU1LGNbcl09bS8zNmU1LGNbZV09bS82ZTQsY1tuXT1tLzFlMyxjKVtkXXx8bSxmP3k6RC5hKHkpfSxkLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YodSkuJER9LGQuJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBtW3RoaXMuJExdfSxkLmxvY2FsZT1mdW5jdGlvbih0LG4pe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBlPXRoaXMuY2xvbmUoKTtyZXR1cm4gZS4kTD1NKHQsbiwhMCksZX0sZC5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBELncodGhpcy50b0RhdGUoKSx0aGlzKX0sZC50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy4kZCl9LGQudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKX0sZC50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LGQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxjfSgpO3JldHVybiBnLnByb3RvdHlwZT12LnByb3RvdHlwZSxnLmV4dGVuZD1mdW5jdGlvbih0LG4pe3JldHVybiB0KG4sdixnKSxnfSxnLmxvY2FsZT1NLGcuaXNEYXlqcz15LGcudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gZygxZTMqdCl9LGcuZW49bVtsXSxnLkxzPW0sZ30pO1xuIiwiLyoqXHJcbiAqIEEgY29sbGVjdGlvbiBvZiBzaGltcyB0aGF0IHByb3ZpZGUgbWluaW1hbCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBFUzYgY29sbGVjdGlvbnMuXHJcbiAqXHJcbiAqIFRoZXNlIGltcGxlbWVudGF0aW9ucyBhcmUgbm90IG1lYW50IHRvIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJcclxuICogbW9kdWxlcyBhcyB0aGV5IGNvdmVyIG9ubHkgYSBsaW1pdGVkIHJhbmdlIG9mIHVzZSBjYXNlcy5cclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MsIHZhbGlkLWpzZG9jICovXHJcbnZhciBNYXBTaGltID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBNYXA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5kZXggaW4gcHJvdmlkZWQgYXJyYXkgdGhhdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQga2V5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRJbmRleChhcnIsIGtleSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAtMTtcclxuICAgICAgICBhcnIuc29tZShmdW5jdGlvbiAoZW50cnksIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeVswXSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50cmllc19fID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2VudHJpZXNfXy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9fZW50cmllc19fW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfX1tpbmRleF1bMV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18ucHVzaChba2V5LCB2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9fZW50cmllc19fO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleChlbnRyaWVzLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF+Z2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnNwbGljZSgwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbY3R4PW51bGxdXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XHJcbiAgICAgICAgICAgIGlmIChjdHggPT09IHZvaWQgMCkgeyBjdHggPSBudWxsOyB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9fZW50cmllc19fOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGVudHJ5WzFdLCBlbnRyeVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjbGFzc18xO1xyXG4gICAgfSgpKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIERldGVjdHMgd2hldGhlciB3aW5kb3cgYW5kIGRvY3VtZW50IG9iamVjdHMgYXJlIGF2YWlsYWJsZSBpbiBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gKi9cclxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ID09PSBkb2N1bWVudDtcblxuLy8gUmV0dXJucyBnbG9iYWwgb2JqZWN0IG9mIGEgY3VycmVudCBlbnZpcm9ubWVudC5cclxudmFyIGdsb2JhbCQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xyXG4gICAgcmV0dXJuIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XHJcbn0pKCk7XG5cbi8qKlxyXG4gKiBBIHNoaW0gZm9yIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2hpY2ggZmFsbHMgYmFjayB0byB0aGUgc2V0VGltZW91dCBpZlxyXG4gKiBmaXJzdCBvbmUgaXMgbm90IHN1cHBvcnRlZC5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gUmVxdWVzdHMnIGlkZW50aWZpZXIuXHJcbiAqL1xyXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBJdCdzIHJlcXVpcmVkIHRvIHVzZSBhIGJvdW5kZWQgZnVuY3Rpb24gYmVjYXVzZSBJRSBzb21ldGltZXMgdGhyb3dzXHJcbiAgICAgICAgLy8gYW4gXCJJbnZhbGlkIGNhbGxpbmcgb2JqZWN0XCIgZXJyb3IgaWYgckFGIGlzIGludm9rZWQgd2l0aG91dCB0aGUgZ2xvYmFsXHJcbiAgICAgICAgLy8gb2JqZWN0IG9uIHRoZSBsZWZ0IGhhbmQgc2lkZS5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQoZ2xvYmFsJDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFjayhEYXRlLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcclxufSkoKTtcblxuLy8gRGVmaW5lcyBtaW5pbXVtIHRpbWVvdXQgYmVmb3JlIGFkZGluZyBhIHRyYWlsaW5nIGNhbGwuXHJcbnZhciB0cmFpbGluZ1RpbWVvdXQgPSAyO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggZW5zdXJlcyB0aGF0IHByb3ZpZGVkIGNhbGxiYWNrIHdpbGwgYmVcclxuICogaW52b2tlZCBvbmx5IG9uY2UgZHVyaW5nIHRoZSBzcGVjaWZpZWQgZGVsYXkgcGVyaW9kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGRlbGF5IHBlcmlvZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IC0gRGVsYXkgYWZ0ZXIgd2hpY2ggdG8gaW52b2tlIGNhbGxiYWNrLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvdHRsZSAoY2FsbGJhY2ssIGRlbGF5KSB7XHJcbiAgICB2YXIgbGVhZGluZ0NhbGwgPSBmYWxzZSwgdHJhaWxpbmdDYWxsID0gZmFsc2UsIGxhc3RDYWxsVGltZSA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGFuZCBzY2hlZHVsZXMgbmV3IGludm9jYXRpb24gaWZcclxuICAgICAqIHRoZSBcInByb3h5XCIgd2FzIGNhbGxlZCBkdXJpbmcgY3VycmVudCByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZXNvbHZlUGVuZGluZygpIHtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYWlsaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBwcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5LiBJdCB3aWxsIGZ1cnRoZXIgcG9zdHBvbmVcclxuICAgICAqIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGRlbGVnYXRpbmcgaXQgdG8gdGhlXHJcbiAgICAgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRpbWVvdXRDYWxsYmFjaygpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMShyZXNvbHZlUGVuZGluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNjaGVkdWxlcyBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcHJveHkoKSB7XHJcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFJlamVjdCBpbW1lZGlhdGVseSBmb2xsb3dpbmcgY2FsbHMuXHJcbiAgICAgICAgICAgIGlmICh0aW1lU3RhbXAgLSBsYXN0Q2FsbFRpbWUgPCB0cmFpbGluZ1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSBuZXcgY2FsbCB0byBiZSBpbiBpbnZva2VkIHdoZW4gdGhlIHBlbmRpbmcgb25lIGlzIHJlc29sdmVkLlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgXCJ0cmFuc2l0aW9uc1wiIHdoaWNoIG5ldmVyIGFjdHVhbGx5IHN0YXJ0XHJcbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHNvIHRoZXJlIGlzIGEgY2hhbmNlIHRoYXQgd2UgbWlnaHQgbWlzcyBvbmUgaWYgY2hhbmdlXHJcbiAgICAgICAgICAgIC8vIGhhcHBlbnMgYW1pZHMgdGhlIHBlbmRpbmcgaW52b2NhdGlvbi5cclxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrLCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RDYWxsVGltZSA9IHRpbWVTdGFtcDtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm94eTtcclxufVxuXG4vLyBNaW5pbXVtIGRlbGF5IGJlZm9yZSBpbnZva2luZyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy5cclxudmFyIFJFRlJFU0hfREVMQVkgPSAyMDtcclxuLy8gQSBsaXN0IG9mIHN1YnN0cmluZ3Mgb2YgQ1NTIHByb3BlcnRpZXMgdXNlZCB0byBmaW5kIHRyYW5zaXRpb24gZXZlbnRzIHRoYXRcclxuLy8gbWlnaHQgYWZmZWN0IGRpbWVuc2lvbnMgb2Ygb2JzZXJ2ZWQgZWxlbWVudHMuXHJcbnZhciB0cmFuc2l0aW9uS2V5cyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JywgJ3dpZHRoJywgJ2hlaWdodCcsICdzaXplJywgJ3dlaWdodCddO1xyXG4vLyBDaGVjayBpZiBNdXRhdGlvbk9ic2VydmVyIGlzIGF2YWlsYWJsZS5cclxudmFyIG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XHJcbi8qKlxyXG4gKiBTaW5nbGV0b24gY29udHJvbGxlciBjbGFzcyB3aGljaCBoYW5kbGVzIHVwZGF0ZXMgb2YgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIERPTSBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVsbHMgdGhhdCBjb250cm9sbGVyIGhhcyBzdWJzY3JpYmVkIGZvciBNdXRhdGlvbiBFdmVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogS2VlcHMgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiBNdXRhdGlvbk9ic2VydmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge011dGF0aW9uT2JzZXJ2ZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgbGlzdCBvZiBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmVyU1BJPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmVyc18gPSBbXTtcclxuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZF8gPSB0aGlzLm9uVHJhbnNpdGlvbkVuZF8uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2ggPSB0aHJvdHRsZSh0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgUkVGUkVTSF9ERUxBWSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb2JzZXJ2ZXIgdG8gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSBhZGRlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgaWYgKCF+dGhpcy5vYnNlcnZlcnNfLmluZGV4T2Yob2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGxpc3RlbmVycyBpZiB0aGV5IGhhdmVuJ3QgYmVlbiBhZGRlZCB5ZXQuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0XygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIHJlbW92ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc187XHJcbiAgICAgICAgdmFyIGluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBvYnNlcnZlciBpZiBpdCdzIHByZXNlbnQgaW4gcmVnaXN0cnkuXHJcbiAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVycyBpZiBjb250cm9sbGVyIGhhcyBubyBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgIGlmICghb2JzZXJ2ZXJzLmxlbmd0aCAmJiB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0XygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuIEl0IHdpbGwgY29udGludWUgcnVubmluZyB1cGRhdGVzIGluc29mYXJcclxuICAgICAqIGl0IGRldGVjdHMgY2hhbmdlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VzRGV0ZWN0ZWQgPSB0aGlzLnVwZGF0ZU9ic2VydmVyc18oKTtcclxuICAgICAgICAvLyBDb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaWYgY2hhbmdlcyBoYXZlIGJlZW4gZGV0ZWN0ZWQgYXMgdGhlcmUgbWlnaHRcclxuICAgICAgICAvLyBiZSBmdXR1cmUgb25lcyBjYXVzZWQgYnkgQ1NTIHRyYW5zaXRpb25zLlxyXG4gICAgICAgIGlmIChjaGFuZ2VzRGV0ZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBldmVyeSBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0IGFuZCBub3RpZmllcyB0aGVtIG9mIHF1ZXVlZFxyXG4gICAgICogZW50cmllcy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgXCJ0cnVlXCIgaWYgYW55IG9ic2VydmVyIGhhcyBkZXRlY3RlZCBjaGFuZ2VzIGluXHJcbiAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgaXQncyBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVPYnNlcnZlcnNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIENvbGxlY3Qgb2JzZXJ2ZXJzIHRoYXQgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIHZhciBhY3RpdmVPYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc18uZmlsdGVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZ2F0aGVyQWN0aXZlKCksIG9ic2VydmVyLmhhc0FjdGl2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIERlbGl2ZXIgbm90aWZpY2F0aW9ucyBpbiBhIHNlcGFyYXRlIGN5Y2xlIGluIG9yZGVyIHRvIGF2b2lkIGFueVxyXG4gICAgICAgIC8vIGNvbGxpc2lvbnMgYmV0d2VlbiBvYnNlcnZlcnMsIGUuZy4gd2hlbiBtdWx0aXBsZSBpbnN0YW5jZXMgb2ZcclxuICAgICAgICAvLyBSZXNpemVPYnNlcnZlciBhcmUgdHJhY2tpbmcgdGhlIHNhbWUgZWxlbWVudCBhbmQgdGhlIGNhbGxiYWNrIG9mIG9uZVxyXG4gICAgICAgIC8vIG9mIHRoZW0gY2hhbmdlcyBjb250ZW50IGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIHRhcmdldC4gU29tZXRpbWVzXHJcbiAgICAgICAgLy8gdGhpcyBtYXkgcmVzdWx0IGluIG5vdGlmaWNhdGlvbnMgYmVpbmcgYmxvY2tlZCBmb3IgdGhlIHJlc3Qgb2Ygb2JzZXJ2ZXJzLlxyXG4gICAgICAgIGFjdGl2ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gb2JzZXJ2ZXIuYnJvYWRjYXN0QWN0aXZlKCk7IH0pO1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVPYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmNvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IGFkZGVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8IHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN1YnNjcmlwdGlvbiB0byB0aGUgXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaXMgdXNlZCBhcyBhIHdvcmthcm91bmQgZm9yXHJcbiAgICAgICAgLy8gZGVsYXllZCB0cmFuc2l0aW9ucy4gVGhpcyB3YXkgaXQncyBwb3NzaWJsZSB0byBjYXB0dXJlIGF0IGxlYXN0IHRoZVxyXG4gICAgICAgIC8vIGZpbmFsIHN0YXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5vYnNlcnZlKGRvY3VtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuZGlzY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgcmVtb3ZlZC5cclxuICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCAhdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7VHJhbnNpdGlvbkV2ZW50fSBldmVudFxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kXyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hLnByb3BlcnR5TmFtZSwgcHJvcGVydHlOYW1lID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2I7XHJcbiAgICAgICAgLy8gRGV0ZWN0IHdoZXRoZXIgdHJhbnNpdGlvbiBtYXkgYWZmZWN0IGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICB2YXIgaXNSZWZsb3dQcm9wZXJ0eSA9IHRyYW5zaXRpb25LZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF+cHJvcGVydHlOYW1lLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaXNSZWZsb3dQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGluc3RhbmNlIG9mIHRoZSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZV8pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZV8gPSBuZXcgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlXztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhvbGRzIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlcidzIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5pbnN0YW5jZV8gPSBudWxsO1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcjtcclxufSgpKTtcblxuLyoqXHJcbiAqIERlZmluZXMgbm9uLXdyaXRhYmxlL2VudW1lcmFibGUgcHJvcGVydGllcyBvZiB0aGUgcHJvdmlkZWQgdGFyZ2V0IG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIE9iamVjdCBmb3Igd2hpY2ggdG8gZGVmaW5lIHByb3BlcnRpZXMuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIFByb3BlcnRpZXMgdG8gYmUgZGVmaW5lZC5cclxuICogQHJldHVybnMge09iamVjdH0gVGFyZ2V0IG9iamVjdC5cclxuICovXHJcbnZhciBkZWZpbmVDb25maWd1cmFibGUgPSAoZnVuY3Rpb24gKHRhcmdldCwgcHJvcHMpIHtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzW2tleV0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufSk7XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBnbG9iYWwgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCBwcm92aWRlZCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG52YXIgZ2V0V2luZG93T2YgPSAoZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgLy8gQXNzdW1lIHRoYXQgdGhlIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgTm9kZSwgd2hpY2ggbWVhbnMgdGhhdCBpdFxyXG4gICAgLy8gaGFzIHRoZSBcIm93bmVyRG9jdW1lbnRcIiBwcm9wZXJ0eSBmcm9tIHdoaWNoIHdlIGNhbiByZXRyaWV2ZSBhXHJcbiAgICAvLyBjb3JyZXNwb25kaW5nIGdsb2JhbCBvYmplY3QuXHJcbiAgICB2YXIgb3duZXJHbG9iYWwgPSB0YXJnZXQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGxvY2FsIGdsb2JhbCBvYmplY3QgaWYgaXQncyBub3QgcG9zc2libGUgZXh0cmFjdCBvbmUgZnJvbVxyXG4gICAgLy8gcHJvdmlkZWQgZWxlbWVudC5cclxuICAgIHJldHVybiBvd25lckdsb2JhbCB8fCBnbG9iYWwkMTtcclxufSk7XG5cbi8vIFBsYWNlaG9sZGVyIG9mIGFuIGVtcHR5IGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG52YXIgZW1wdHlSZWN0ID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBwcm92aWRlZCBzdHJpbmcgdG8gYSBudW1iZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWVcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHRvRmxvYXQodmFsdWUpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBib3JkZXJzIHNpemUgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwb3NpdGlvbnMgLSBCb3JkZXJzIHBvc2l0aW9ucyAodG9wLCByaWdodCwgLi4uKVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzKSB7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHBvc2l0aW9uc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3NpdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChzaXplLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1snYm9yZGVyLScgKyBwb3NpdGlvbiArICctd2lkdGgnXTtcclxuICAgICAgICByZXR1cm4gc2l6ZSArIHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfSwgMCk7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIHBhZGRpbmdzIHNpemVzIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQYWRkaW5ncyBib3guXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQYWRkaW5ncyhzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xyXG4gICAgdmFyIHBhZGRpbmdzID0ge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHBvc2l0aW9uc18xID0gcG9zaXRpb25zOyBfaSA8IHBvc2l0aW9uc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHBvc2l0aW9uc18xW19pXTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ3BhZGRpbmctJyArIHBvc2l0aW9uXTtcclxuICAgICAgICBwYWRkaW5nc1twb3NpdGlvbl0gPSB0b0Zsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWRkaW5ncztcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBTVkcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtTVkdHcmFwaGljc0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHNcclxuICogICAgICB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIHZhciBiYm94ID0gdGFyZ2V0LmdldEJCb3goKTtcclxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdCgwLCAwLCBiYm94LndpZHRoLCBiYm94LmhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgSFRNTEVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgZm9yIHdoaWNoIHRvIGNhbGN1bGF0ZSB0aGUgY29udGVudCByZWN0YW5nbGUuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICAvLyBDbGllbnQgd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBjYW4ndCBiZVxyXG4gICAgLy8gdXNlZCBleGNsdXNpdmVseSBhcyB0aGV5IHByb3ZpZGUgcm91bmRlZCB2YWx1ZXMuXHJcbiAgICB2YXIgY2xpZW50V2lkdGggPSB0YXJnZXQuY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCA9IHRhcmdldC5jbGllbnRIZWlnaHQ7XHJcbiAgICAvLyBCeSB0aGlzIGNvbmRpdGlvbiB3ZSBjYW4gY2F0Y2ggYWxsIG5vbi1yZXBsYWNlZCBpbmxpbmUsIGhpZGRlbiBhbmRcclxuICAgIC8vIGRldGFjaGVkIGVsZW1lbnRzLiBUaG91Z2ggZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGxlc3NcclxuICAgIC8vIHRoYW4gMC41IHdpbGwgYmUgZGlzY2FyZGVkIGFzIHdlbGwuXHJcbiAgICAvL1xyXG4gICAgLy8gV2l0aG91dCBpdCB3ZSB3b3VsZCBuZWVkIHRvIGltcGxlbWVudCBzZXBhcmF0ZSBtZXRob2RzIGZvciBlYWNoIG9mXHJcbiAgICAvLyB0aG9zZSBjYXNlcyBhbmQgaXQncyBub3QgcG9zc2libGUgdG8gcGVyZm9ybSBhIHByZWNpc2UgYW5kIHBlcmZvcm1hbmNlXHJcbiAgICAvLyBlZmZlY3RpdmUgdGVzdCBmb3IgaGlkZGVuIGVsZW1lbnRzLiBFLmcuIGV2ZW4galF1ZXJ5J3MgJzp2aXNpYmxlJyBmaWx0ZXJcclxuICAgIC8vIGdpdmVzIHdyb25nIHJlc3VsdHMgZm9yIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgbGVzcyB0aGFuIDAuNS5cclxuICAgIGlmICghY2xpZW50V2lkdGggJiYgIWNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICB9XHJcbiAgICB2YXIgc3R5bGVzID0gZ2V0V2luZG93T2YodGFyZ2V0KS5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XHJcbiAgICB2YXIgcGFkZGluZ3MgPSBnZXRQYWRkaW5ncyhzdHlsZXMpO1xyXG4gICAgdmFyIGhvcml6UGFkID0gcGFkZGluZ3MubGVmdCArIHBhZGRpbmdzLnJpZ2h0O1xyXG4gICAgdmFyIHZlcnRQYWQgPSBwYWRkaW5ncy50b3AgKyBwYWRkaW5ncy5ib3R0b207XHJcbiAgICAvLyBDb21wdXRlZCBzdHlsZXMgb2Ygd2lkdGggJiBoZWlnaHQgYXJlIGJlaW5nIHVzZWQgYmVjYXVzZSB0aGV5IGFyZSB0aGVcclxuICAgIC8vIG9ubHkgZGltZW5zaW9ucyBhdmFpbGFibGUgdG8gSlMgdGhhdCBjb250YWluIG5vbi1yb3VuZGVkIHZhbHVlcy4gSXQgY291bGRcclxuICAgIC8vIGJlIHBvc3NpYmxlIHRvIHV0aWxpemUgdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpZiBvbmx5IGl0J3MgZGF0YSB3YXNuJ3RcclxuICAgIC8vIGFmZmVjdGVkIGJ5IENTUyB0cmFuc2Zvcm1hdGlvbnMgbGV0IGFsb25lIHBhZGRpbmdzLCBib3JkZXJzIGFuZCBzY3JvbGwgYmFycy5cclxuICAgIHZhciB3aWR0aCA9IHRvRmxvYXQoc3R5bGVzLndpZHRoKSwgaGVpZ2h0ID0gdG9GbG9hdChzdHlsZXMuaGVpZ2h0KTtcclxuICAgIC8vIFdpZHRoICYgaGVpZ2h0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgd2hlbiB0aGUgJ2JvcmRlci1ib3gnIGJveFxyXG4gICAgLy8gbW9kZWwgaXMgYXBwbGllZCAoZXhjZXB0IGZvciBJRSkuXHJcbiAgICBpZiAoc3R5bGVzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XHJcbiAgICAgICAgLy8gRm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIHJlcXVpcmVkIHRvIGhhbmRsZSBJbnRlcm5ldCBFeHBsb3JlciB3aGljaFxyXG4gICAgICAgIC8vIGRvZXNuJ3QgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB0byBjb21wdXRlZCBDU1MgZGltZW5zaW9ucy5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdlIGNhbiBzYXkgdGhhdCBpZiBDU1MgZGltZW5zaW9ucyArIHBhZGRpbmdzIGFyZSBlcXVhbCB0byB0aGUgXCJjbGllbnRcIlxyXG4gICAgICAgIC8vIHByb3BlcnRpZXMgdGhlbiBpdCdzIGVpdGhlciBJRSwgYW5kIHRodXMgd2UgZG9uJ3QgbmVlZCB0byBzdWJ0cmFjdFxyXG4gICAgICAgIC8vIGFueXRoaW5nLCBvciBhbiBlbGVtZW50IG1lcmVseSBkb2Vzbid0IGhhdmUgcGFkZGluZ3MvYm9yZGVycyBzdHlsZXMuXHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgIT09IGNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ2xlZnQnLCAncmlnaHQnKSArIGhvcml6UGFkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAhPT0gY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd0b3AnLCAnYm90dG9tJykgKyB2ZXJ0UGFkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEZvbGxvd2luZyBzdGVwcyBjYW4ndCBiZSBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudCdzIHJvb3QgZWxlbWVudCBhcyBpdHNcclxuICAgIC8vIGNsaWVudFtXaWR0aC9IZWlnaHRdIHByb3BlcnRpZXMgcmVwcmVzZW50IHZpZXdwb3J0IGFyZWEgb2YgdGhlIHdpbmRvdy5cclxuICAgIC8vIEJlc2lkZXMsIGl0J3MgYXMgd2VsbCBub3QgbmVjZXNzYXJ5IGFzIHRoZSA8aHRtbD4gaXRzZWxmIG5laXRoZXIgaGFzXHJcbiAgICAvLyByZW5kZXJlZCBzY3JvbGwgYmFycyBub3IgaXQgY2FuIGJlIGNsaXBwZWQuXHJcbiAgICBpZiAoIWlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChvbmx5IGluIEZpcmVmb3gsIGFjdHVhbGx5KSBDU1Mgd2lkdGggJiBoZWlnaHRcclxuICAgICAgICAvLyBpbmNsdWRlIHNjcm9sbCBiYXJzIHNpemUgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYXQgdGhpcyBzdGVwIGFzIHNjcm9sbFxyXG4gICAgICAgIC8vIGJhcnMgYXJlIHRoZSBvbmx5IGRpZmZlcmVuY2UgYmV0d2VlbiByb3VuZGVkIGRpbWVuc2lvbnMgKyBwYWRkaW5nc1xyXG4gICAgICAgIC8vIGFuZCBcImNsaWVudFwiIHByb3BlcnRpZXMsIHRob3VnaCB0aGF0IGlzIG5vdCBhbHdheXMgdHJ1ZSBpbiBDaHJvbWUuXHJcbiAgICAgICAgdmFyIHZlcnRTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpIC0gY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdmFyIGhvcml6U2Nyb2xsYmFyID0gTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAtIGNsaWVudEhlaWdodDtcclxuICAgICAgICAvLyBDaHJvbWUgaGFzIGEgcmF0aGVyIHdlaXJkIHJvdW5kaW5nIG9mIFwiY2xpZW50XCIgcHJvcGVydGllcy5cclxuICAgICAgICAvLyBFLmcuIGZvciBhbiBlbGVtZW50IHdpdGggY29udGVudCB3aWR0aCBvZiAzMTQuMnB4IGl0IHNvbWV0aW1lcyBnaXZlc1xyXG4gICAgICAgIC8vIHRoZSBjbGllbnQgd2lkdGggb2YgMzE1cHggYW5kIGZvciB0aGUgd2lkdGggb2YgMzE0LjdweCBpdCBtYXkgZ2l2ZVxyXG4gICAgICAgIC8vIDMxNHB4LiBBbmQgaXQgZG9lc24ndCBoYXBwZW4gYWxsIHRoZSB0aW1lLiBTbyBqdXN0IGlnbm9yZSB0aGlzIGRlbHRhXHJcbiAgICAgICAgLy8gYXMgYSBub24tcmVsZXZhbnQuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlcnRTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHZlcnRTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLmFicyhob3JpelNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGhvcml6U2Nyb2xsYmFyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdChwYWRkaW5ncy5sZWZ0LCBwYWRkaW5ncy50b3AsIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBTVkdHcmFwaGljc0VsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbnZhciBpc1NWR0dyYXBoaWNzRWxlbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTb21lIGJyb3dzZXJzLCBuYW1lbHkgSUUgYW5kIEVkZ2UsIGRvbid0IGhhdmUgdGhlIFNWR0dyYXBoaWNzRWxlbWVudFxyXG4gICAgLy8gaW50ZXJmYWNlLlxyXG4gICAgaWYgKHR5cGVvZiBTVkdHcmFwaGljc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHR3JhcGhpY3NFbGVtZW50OyB9O1xyXG4gICAgfVxyXG4gICAgLy8gSWYgaXQncyBzbywgdGhlbiBjaGVjayB0aGF0IGVsZW1lbnQgaXMgYXQgbGVhc3QgYW4gaW5zdGFuY2Ugb2YgdGhlXHJcbiAgICAvLyBTVkdFbGVtZW50IGFuZCB0aGF0IGl0IGhhcyB0aGUgXCJnZXRCQm94XCIgbWV0aG9kLlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLXBhcmVuc1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0VsZW1lbnQgJiZcclxuICAgICAgICB0eXBlb2YgdGFyZ2V0LmdldEJCb3ggPT09ICdmdW5jdGlvbicpOyB9O1xyXG59KSgpO1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhIGRvY3VtZW50IGVsZW1lbnQgKDxodG1sPikuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkge1xyXG4gICAgcmV0dXJuIHRhcmdldCA9PT0gZ2V0V2luZG93T2YodGFyZ2V0KS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYW4gYXBwcm9wcmlhdGUgY29udGVudCByZWN0YW5nbGUgZm9yIHByb3ZpZGVkIGh0bWwgb3Igc3ZnIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkcyB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIGlmICghaXNCcm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIGlmIChpc1NWR0dyYXBoaWNzRWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIHJlY3RhbmdsZSB3aXRoIGFuIGludGVyZmFjZSBvZiB0aGUgRE9NUmVjdFJlYWRPbmx5LlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZG9tcmVjdHJlYWRvbmx5XHJcbiAqXHJcbiAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gT2JqZWN0IHdpdGggcmVjdGFuZ2xlJ3MgeC95IGNvb3JkaW5hdGVzIGFuZCBkaW1lbnNpb25zLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdFJlYWRPbmx5fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUmVhZE9ubHlSZWN0KF9hKSB7XHJcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAvLyBJZiBET01SZWN0UmVhZE9ubHkgaXMgYXZhaWxhYmxlIHVzZSBpdCBhcyBhIHByb3RvdHlwZSBmb3IgdGhlIHJlY3RhbmdsZS5cclxuICAgIHZhciBDb25zdHIgPSB0eXBlb2YgRE9NUmVjdFJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJyA/IERPTVJlY3RSZWFkT25seSA6IE9iamVjdDtcclxuICAgIHZhciByZWN0ID0gT2JqZWN0LmNyZWF0ZShDb25zdHIucHJvdG90eXBlKTtcclxuICAgIC8vIFJlY3RhbmdsZSdzIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZSBhbmQgbm9uLWVudW1lcmFibGUuXHJcbiAgICBkZWZpbmVDb25maWd1cmFibGUocmVjdCwge1xyXG4gICAgICAgIHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgdG9wOiB5LFxyXG4gICAgICAgIHJpZ2h0OiB4ICsgd2lkdGgsXHJcbiAgICAgICAgYm90dG9tOiBoZWlnaHQgKyB5LFxyXG4gICAgICAgIGxlZnQ6IHhcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgRE9NUmVjdEluaXQgb2JqZWN0IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkaW1lbnNpb25zIGFuZCB0aGUgeC95IGNvb3JkaW5hdGVzLlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZGljdGRlZi1kb21yZWN0aW5pdFxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFJlY3RhbmdsZSdzIHdpZHRoLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gUmVjdGFuZ2xlJ3MgaGVpZ2h0LlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWN0SW5pdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XHJcbn1cblxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGNvbXB1dGF0aW9ucyBvZiB0aGUgY29udGVudCByZWN0YW5nbGUgb2ZcclxuICogcHJvdmlkZWQgRE9NIGVsZW1lbnQgYW5kIGZvciBrZWVwaW5nIHRyYWNrIG9mIGl0J3MgY2hhbmdlcy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIHdpZHRoIG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCcm9hZGNhc3RlZCBoZWlnaHQgb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7RE9NUmVjdEluaXR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBjb250ZW50IHJlY3RhbmdsZSBhbmQgdGVsbHMgd2hldGhlciBpdCdzIHdpZHRoIG9yIGhlaWdodCBwcm9wZXJ0aWVzXHJcbiAgICAgKiBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgYnJvYWRjYXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBnZXRDb250ZW50UmVjdCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSByZWN0O1xyXG4gICAgICAgIHJldHVybiAocmVjdC53aWR0aCAhPT0gdGhpcy5icm9hZGNhc3RXaWR0aCB8fFxyXG4gICAgICAgICAgICByZWN0LmhlaWdodCAhPT0gdGhpcy5icm9hZGNhc3RIZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyAnYnJvYWRjYXN0V2lkdGgnIGFuZCAnYnJvYWRjYXN0SGVpZ2h0JyBwcm9wZXJ0aWVzIHdpdGggYSBkYXRhXHJcbiAgICAgKiBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnRpZXMgb2YgdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fSBMYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuYnJvYWRjYXN0UmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuY29udGVudFJlY3RfO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xyXG59KCkpO1xuXG52YXIgUmVzaXplT2JzZXJ2ZXJFbnRyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckVudHJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0aGF0IGlzIGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBEYXRhIG9mIHRoZSBlbGVtZW50J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0LCByZWN0SW5pdCkge1xyXG4gICAgICAgIHZhciBjb250ZW50UmVjdCA9IGNyZWF0ZVJlYWRPbmx5UmVjdChyZWN0SW5pdCk7XHJcbiAgICAgICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGVcclxuICAgICAgICAvLyBhbmQgYXJlIGFsc28gbm90IGVudW1lcmFibGUgaW4gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFByb3BlcnR5IGFjY2Vzc29ycyBhcmUgbm90IGJlaW5nIHVzZWQgYXMgdGhleSdkIHJlcXVpcmUgdG8gZGVmaW5lIGFcclxuICAgICAgICAvLyBwcml2YXRlIFdlYWtNYXAgc3RvcmFnZSB3aGljaCBtYXkgY2F1c2UgbWVtb3J5IGxlYWtzIGluIGJyb3dzZXJzIHRoYXRcclxuICAgICAgICAvLyBkb24ndCBzdXBwb3J0IHRoaXMgdHlwZSBvZiBjb2xsZWN0aW9ucy5cclxuICAgICAgICBkZWZpbmVDb25maWd1cmFibGUodGhpcywgeyB0YXJnZXQ6IHRhcmdldCwgY29udGVudFJlY3Q6IGNvbnRlbnRSZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlclNQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkXHJcbiAgICAgKiAgICAgIHdoZW4gb25lIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2VzIGl0J3MgY29udGVudCBkaW1lbnNpb25zLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBDb250cm9sbGVyIGluc3RhbmNlIHdoaWNoXHJcbiAgICAgKiAgICAgIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgdXBkYXRlcyBvZiBvYnNlcnZlci5cclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJ9IGNhbGxiYWNrQ3R4IC0gUmVmZXJlbmNlIHRvIHRoZSBwdWJsaWNcclxuICAgICAqICAgICAgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2Ugd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCBjYWxsYmFja0N0eCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbGxlY3Rpb24gb2YgcmVzaXplIG9ic2VydmF0aW9ucyB0aGF0IGhhdmUgZGV0ZWN0ZWQgY2hhbmdlcyBpbiBkaW1lbnNpb25zXHJcbiAgICAgICAgICogb2YgZWxlbWVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZ2lzdHJ5IG9mIHRoZSBSZXNpemVPYnNlcnZhdGlvbiBpbnN0YW5jZXMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TWFwPEVsZW1lbnQsIFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18gPSBuZXcgTWFwU2hpbSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxiYWNrXyA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8gPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tDdHhfID0gY2FsbGJhY2tDdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICBpZiAob2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2YXRpb25zLnNldCh0YXJnZXQsIG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLmFkZE9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIC8vIEZvcmNlIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIHN0b3Agb2JzZXJ2aW5nLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgbm90IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmICghb2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2YXRpb25zLmRlbGV0ZSh0YXJnZXQpO1xyXG4gICAgICAgIGlmICghb2JzZXJ2YXRpb25zLnNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgYWxsIGVsZW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENvbGxlY3RzIG9ic2VydmF0aW9uIGluc3RhbmNlcyB0aGUgYXNzb2NpYXRlZCBlbGVtZW50IG9mIHdoaWNoIGhhcyBjaGFuZ2VkXHJcbiAgICAgKiBpdCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZ2F0aGVyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YXRpb24uaXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5wdXNoKG9ic2VydmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyBpbml0aWFsIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYSBsaXN0IG9mIFJlc2l6ZU9ic2VydmVyRW50cnlcclxuICAgICAqIGluc3RhbmNlcyBjb2xsZWN0ZWQgZnJvbSBhY3RpdmUgcmVzaXplIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmJyb2FkY2FzdEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIG9ic2VydmVyIGRvZXNuJ3QgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLmNhbGxiYWNrQ3R4XztcclxuICAgICAgICAvLyBDcmVhdGUgUmVzaXplT2JzZXJ2ZXJFbnRyeSBpbnN0YW5jZSBmb3IgZXZlcnkgYWN0aXZlIG9ic2VydmF0aW9uLlxyXG4gICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLm1hcChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNpemVPYnNlcnZlckVudHJ5KG9ic2VydmF0aW9uLnRhcmdldCwgb2JzZXJ2YXRpb24uYnJvYWRjYXN0UmVjdCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrXy5jYWxsKGN0eCwgZW50cmllcywgY3R4KTtcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgdGhlIGNvbGxlY3Rpb24gb2YgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmNsZWFyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5zcGxpY2UoMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxscyB3aGV0aGVyIG9ic2VydmVyIGhhcyBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuaGFzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubGVuZ3RoID4gMDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTUEk7XHJcbn0oKSk7XG5cbi8vIFJlZ2lzdHJ5IG9mIGludGVybmFsIG9ic2VydmVycy4gSWYgV2Vha01hcCBpcyBub3QgYXZhaWxhYmxlIHVzZSBjdXJyZW50IHNoaW1cclxuLy8gZm9yIHRoZSBNYXAgY29sbGVjdGlvbiBhcyBpdCBoYXMgYWxsIHJlcXVpcmVkIG1ldGhvZHMgYW5kIGJlY2F1c2UgV2Vha01hcFxyXG4vLyBjYW4ndCBiZSBmdWxseSBwb2x5ZmlsbGVkIGFueXdheS5cclxudmFyIG9ic2VydmVycyA9IHR5cGVvZiBXZWFrTWFwICE9PSAndW5kZWZpbmVkJyA/IG5ldyBXZWFrTWFwKCkgOiBuZXcgTWFwU2hpbSgpO1xyXG4vKipcclxuICogUmVzaXplT2JzZXJ2ZXIgQVBJLiBFbmNhcHN1bGF0ZXMgdGhlIFJlc2l6ZU9ic2VydmVyIFNQSSBpbXBsZW1lbnRhdGlvblxyXG4gKiBleHBvc2luZyBvbmx5IHRob3NlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVmaW5lZCBpbiB0aGUgc3BlYy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNpemVPYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udHJvbGxlciA9IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgdGhpcyk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLnNldCh0aGlzLCBvYnNlcnZlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0oKSk7XHJcbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcyBvZiBSZXNpemVPYnNlcnZlci5cclxuW1xyXG4gICAgJ29ic2VydmUnLFxyXG4gICAgJ3Vub2JzZXJ2ZScsXHJcbiAgICAnZGlzY29ubmVjdCdcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcclxuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gb2JzZXJ2ZXJzLmdldCh0aGlzKSlbbWV0aG9kXS5hcHBseShfYSwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn0pO1xuXG52YXIgaW5kZXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRXhwb3J0IGV4aXN0aW5nIGltcGxlbWVudGF0aW9uIGlmIGF2YWlsYWJsZS5cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBHYW50dEVsYXN0aWMgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj5cbiAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuICAgIDxtYWluLXZpZXcgcmVmPVwibWFpblZpZXdcIj48L21haW4tdmlldz5cbiAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCI+PC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlSW5zdGFuY2UgZnJvbSAndnVlJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSc7XG5pbXBvcnQgZ2V0U3R5bGUgZnJvbSAnLi9zdHlsZS5qcyc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcblxuY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbmxldCBWdWVJbnN0ID0gVnVlSW5zdGFuY2U7XG5mdW5jdGlvbiBpbml0VnVlKCkge1xuICBpZiAodHlwZW9mIFZ1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFZ1ZUluc3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgVnVlSW5zdCA9IFZ1ZTtcbiAgfVxufVxuaW5pdFZ1ZSgpO1xuXG5sZXQgaG91cldpZHRoQ2FjaGUgPSBudWxsO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBmaWxsIG91dCBlbXB0eSBvcHRpb25zIGluIHVzZXIgc2V0dGluZ3NcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdXNlck9wdGlvbnMgLSBpbml0aWFsIHVzZXIgb3B0aW9ucyB0aGF0IHdpbGwgbWVyZ2Ugd2l0aCB0aG9zZSBiZWxvd1xuICogQHJldHVybnMge29iamVjdH0gbWVyZ2VkIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gZ2V0T3B0aW9ucyh1c2VyT3B0aW9ucykge1xuICBsZXQgbG9jYWxlTmFtZSA9ICdlbic7XG4gIGlmICh0eXBlb2YgdXNlck9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdXNlck9wdGlvbnMubG9jYWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWxlTmFtZSA9IHVzZXJPcHRpb25zLmxvY2FsZS5uYW1lO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhZ2VzOiBbXSxcbiAgICBzbG90czoge1xuICAgICAgaGVhZGVyOiB7fVxuICAgIH0sXG4gICAgdGFza01hcHBpbmc6IHtcbiAgICAgIC8vKlxuICAgICAgaWQ6ICdpZCcsXG4gICAgICBzdGFydDogJ3N0YXJ0JyxcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgICAgZHVyYXRpb246ICdkdXJhdGlvbicsXG4gICAgICBwcm9ncmVzczogJ3Byb2dyZXNzJyxcbiAgICAgIHR5cGU6ICd0eXBlJyxcbiAgICAgIHN0eWxlOiAnc3R5bGUnLFxuICAgICAgY29sbGFwc2VkOiAnY29sbGFwc2VkJ1xuICAgIH0sXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGNsaWVudFdpZHRoOiAwLFxuICAgIG91dGVySGVpZ2h0OiAwLFxuICAgIHJvd3NIZWlnaHQ6IDAsXG4gICAgYWxsVmlzaWJsZVRhc2tzSGVpZ2h0OiAwLFxuICAgIHNjcm9sbDoge1xuICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgIGRyYWdYTW92ZU11bHRpcGxpZXI6IDMsIC8vKlxuICAgICAgZHJhZ1lNb3ZlTXVsdGlwbGllcjogMiwgLy8qXG4gICAgICB0b3A6IDAsXG4gICAgICB0YXNrTGlzdDoge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBib3R0b206IDBcbiAgICAgIH0sXG4gICAgICBjaGFydDoge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgcGVyY2VudDogMCxcbiAgICAgICAgdGltZVBlcmNlbnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB0aW1lOiAwLFxuICAgICAgICB0aW1lQ2VudGVyOiAwLFxuICAgICAgICBkYXRlVGltZToge1xuICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgIHJpZ2h0OiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzY29wZToge1xuICAgICAgLy8qXG4gICAgICBiZWZvcmU6IDEsXG4gICAgICBhZnRlcjogMVxuICAgIH0sXG4gICAgdGltZXM6IHtcbiAgICAgIHRpbWVTY2FsZTogNjAgKiAxMDAwLFxuICAgICAgdGltZVpvb206IDE3LCAvLypcbiAgICAgIHRpbWVQZXJQaXhlbDogMCxcbiAgICAgIGZpcnN0VGltZTogbnVsbCxcbiAgICAgIGxhc3RUaW1lOiBudWxsLFxuICAgICAgZmlyc3RUYXNrVGltZTogMCxcbiAgICAgIGxhc3RUYXNrVGltZTogMCxcbiAgICAgIHRvdGFsVmlld0R1cmF0aW9uTXM6IDAsXG4gICAgICB0b3RhbFZpZXdEdXJhdGlvblB4OiAwLFxuICAgICAgc3RlcER1cmF0aW9uOiAnZGF5JyxcbiAgICAgIHN0ZXBzOiBbXVxuICAgIH0sXG4gICAgcm93OiB7XG4gICAgICBoZWlnaHQ6IDI2IC8vKlxuICAgIH0sXG4gICAgbWF4Um93czogMjAsIC8vKlxuICAgIG1heEhlaWdodDogMCwgLy8qXG4gICAgY2hhcnQ6IHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgaG9yaXpvbnRhbDoge1xuICAgICAgICAgIGdhcDogMiAvLypcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHdpZHRoOiAyMCwgLy8qXG4gICAgICAgIGhlaWdodDogNiwgLy8qXG4gICAgICAgIHBhdHRlcm46IHRydWUsXG4gICAgICAgIGJhcjogZmFsc2VcbiAgICAgIH0sXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIG9mZnNldDogNCwgLy8qXG4gICAgICAgIHhQYWRkaW5nOiAxMCwgLy8qXG4gICAgICAgIGRpc3BsYXk6IHRydWUgLy8qXG4gICAgICB9LFxuICAgICAgZXhwYW5kZXI6IHtcbiAgICAgICAgdHlwZTogJ2NoYXJ0JyxcbiAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vKlxuICAgICAgICBkaXNwbGF5SWZUYXNrTGlzdEhpZGRlbjogdHJ1ZSwgLy8qXG4gICAgICAgIG9mZnNldDogNCwgLy8qXG4gICAgICAgIHNpemU6IDE4XG4gICAgICB9XG4gICAgfSxcbiAgICB0YXNrTGlzdDoge1xuICAgICAgZGlzcGxheTogdHJ1ZSwgLy8qXG4gICAgICByZXNpemVBZnRlclRocmVzaG9sZDogdHJ1ZSwgLy8qXG4gICAgICB3aWR0aFRocmVzaG9sZDogNzUsIC8vKlxuICAgICAgY29sdW1uczogW1xuICAgICAgICAvLypcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIGxhYmVsOiAnSUQnLFxuICAgICAgICAgIHZhbHVlOiAnaWQnLFxuICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcGVyY2VudDogMTAwLCAvLypcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgZmluYWxXaWR0aDogMCxcbiAgICAgIHdpZHRoRnJvbVBlcmNlbnRhZ2U6IDAsXG4gICAgICBtaW5XaWR0aDogMTgsXG4gICAgICBleHBhbmRlcjoge1xuICAgICAgICB0eXBlOiAndGFzay1saXN0JyxcbiAgICAgICAgc2l6ZTogMTYsXG4gICAgICAgIGNvbHVtbldpZHRoOiAyNCxcbiAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsZW5kYXI6IHtcbiAgICAgIHdvcmtpbmdEYXlzOiBbMSwgMiwgMywgNCwgNV0sIC8vKlxuICAgICAgZ2FwOiA2LCAvLypcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHN0cm9rZVdpZHRoOiAxLFxuICAgICAgaG91cjoge1xuICAgICAgICBoZWlnaHQ6IDIwLCAvLypcbiAgICAgICAgZGlzcGxheTogdHJ1ZSwgLy8qXG4gICAgICAgIHdpZHRoczogW10sXG4gICAgICAgIG1heFdpZHRoczogeyBzaG9ydDogMCwgbWVkaXVtOiAwLCBsb25nOiAwIH0sXG4gICAgICAgIGZvcm1hdHRlZDoge1xuICAgICAgICAgIGxvbmc6IFtdLFxuICAgICAgICAgIG1lZGl1bTogW10sXG4gICAgICAgICAgc2hvcnQ6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgIC8vKlxuICAgICAgICAgIGxvbmcoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KCdISDptbScpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVkaXVtKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnSEg6bW0nKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3J0KGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnSEgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkYXk6IHtcbiAgICAgICAgaGVpZ2h0OiAyMCwgLy8qXG4gICAgICAgIGRpc3BsYXk6IHRydWUsIC8vKlxuICAgICAgICB3aWR0aHM6IFtdLFxuICAgICAgICBtYXhXaWR0aHM6IHsgc2hvcnQ6IDAsIG1lZGl1bTogMCwgbG9uZzogMCB9LFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICBsb25nKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnREQgZGRkZCcpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVkaXVtKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnREQgZGRkJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG9ydChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoJ0REJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW9udGg6IHtcbiAgICAgICAgaGVpZ2h0OiAyMCwgLy8qXG4gICAgICAgIGRpc3BsYXk6IHRydWUsIC8vKlxuICAgICAgICB3aWR0aHM6IFtdLFxuICAgICAgICBtYXhXaWR0aHM6IHsgc2hvcnQ6IDAsIG1lZGl1bTogMCwgbG9uZzogMCB9LFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAvLypcbiAgICAgICAgICBzaG9ydChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoJ01NJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZWRpdW0oZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU1NICdZWVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvbmcoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KCdNTU1NIFlZWVknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxvY2FsZToge1xuICAgICAgLy8qXG4gICAgICBuYW1lOiAnZW4nLFxuICAgICAgd2Vla2RheXM6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgICAgIHdlZWtkYXlzU2hvcnQ6ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gICAgICB3ZWVrZGF5c01pbjogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgICAgbW9udGhzOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICAgIG1vbnRoc1Nob3J0OiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gICAgICB3ZWVrU3RhcnQ6IDEsXG4gICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgZnV0dXJlOiAnaW4gJXMnLFxuICAgICAgICBwYXN0OiAnJXMgYWdvJyxcbiAgICAgICAgczogJ2EgZmV3IHNlY29uZHMnLFxuICAgICAgICBtOiAnYSBtaW51dGUnLFxuICAgICAgICBtbTogJyVkIG1pbnV0ZXMnLFxuICAgICAgICBoOiAnYW4gaG91cicsXG4gICAgICAgIGhoOiAnJWQgaG91cnMnLFxuICAgICAgICBkOiAnYSBkYXknLFxuICAgICAgICBkZDogJyVkIGRheXMnLFxuICAgICAgICBNOiAnYSBtb250aCcsXG4gICAgICAgIE1NOiAnJWQgbW9udGhzJyxcbiAgICAgICAgeTogJ2EgeWVhcicsXG4gICAgICAgIHl5OiAnJWQgeWVhcnMnXG4gICAgICB9LFxuICAgICAgZm9ybWF0czoge1xuICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgTFRTOiAnSEg6bW06c3MnLFxuICAgICAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgICAgIH0sXG4gICAgICBvcmRpbmFsOiBuID0+IHtcbiAgICAgICAgY29uc3QgcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXTtcbiAgICAgICAgY29uc3QgdiA9IG4gJSAxMDA7XG4gICAgICAgIHJldHVybiBgWyR7bn0ke3NbKHYgLSAyMCkgJSAxMF0gfHwgc1t2XSB8fCBzWzBdfV1gO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHN0eWxlXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gcHJlcGFyZVN0eWxlKHVzZXJTdHlsZSkge1xuICBsZXQgZm9udFNpemUgPSAnMTJweCc7XG4gIGxldCBmb250RmFtaWx5ID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKVxuICAgIC50b1N0cmluZygpO1xuICBpZiAodHlwZW9mIHVzZXJTdHlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHVzZXJTdHlsZS5mb250U2l6ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvbnRTaXplID0gdXNlck9wdGlvbnMuZm9udFNpemU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdXNlclN0eWxlLmZvbnRGYW1pbHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb250RmFtaWx5ID0gdXNlclN0eWxlLmZvbnRGYW1pbHk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnZXRTdHlsZShmb250U2l6ZSwgZm9udEZhbWlseSk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBzcGVjaWZpZWQgdmFyaWFibGUgaXMgYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHthbnl9IGl0ZW1cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKFxuICAgIGl0ZW0gJiZcbiAgICB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiZcbiAgICAhQXJyYXkuaXNBcnJheShpdGVtKSAmJlxuICAgICEoaXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJlxuICAgICEoaXRlbSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgJiZcbiAgICB0eXBlb2YgaXRlbSAhPT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCB3aWxsIG1lcmdlIG9iamVjdHMgcmVjdXJzaXZlbHkgLSBjcmVhdGluZyBicmFuZCBuZXcgb25lIC0gbGlrZSBjbG9uZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbXMge29iamVjdH0gc291cmNlc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBzb3VyY2Vba2V5XSkge1xuICAgICAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0ucHVzaChtZXJnZURlZXAoe30sIGl0ZW0pKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXRba2V5XS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG5cbi8qKlxuICogRGV0ZWN0IGlmIG9iamVjdCBvciBhcnJheSBpcyBvYnNlcnZhYmxlXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IG9ialxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09ic2VydmFibGUob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouaGFzT3duUHJvcGVydHkoJ19fb2JfXycpO1xufVxuXG4vKipcbiAqIFNhbWUgYXMgYWJvdmUgYnV0IHdpdGggcmVhY3Rpdml0eSBpbiBtaW5kXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtcyB7b2JqZWN0fSBzb3VyY2VzXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcFJlYWN0aXZlKGNvbXBvbmVudCwgdGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbXBvbmVudC4kc2V0KHRhcmdldCwga2V5LCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwUmVhY3RpdmUoY29tcG9uZW50LCB0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBjb21wb25lbnQuJHNldCh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtrZXldLnRvU3RyaW5nKCkuaW5kZXhPZignW25hdGl2ZSBjb2RlXScpID09PSAtMSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC4kc2V0KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtZXJnZURlZXBSZWFjdGl2ZShjb21wb25lbnQsIHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4vKipcbiAqIENoZWNrIGlmIG9iamVjdHMgb3IgYXJyYXlzIGFyZSBlcXVhbCBieSBjb21wYXJpbmcgbmVzdGVkIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBsZWZ0XG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gcmlnaHRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdEVxdWFsRGVlcChsZWZ0LCByaWdodCwgY2FjaGUgPSBbXSwgcGF0aCA9ICcnKSB7XG4gIGlmICh0eXBlb2YgcmlnaHQgIT09IHR5cGVvZiBsZWZ0KSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLnR5cGVvZicgfTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGxlZnQpICYmICFBcnJheS5pc0FycmF5KHJpZ2h0KSkge1xuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy5pc0FycmF5JyB9O1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmlnaHQpICYmICFBcnJheS5pc0FycmF5KGxlZnQpKSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLmlzQXJyYXknIH07XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShsZWZ0KSAmJiBBcnJheS5pc0FycmF5KHJpZ2h0KSkge1xuICAgIGlmIChsZWZ0Lmxlbmd0aCAhPT0gcmlnaHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcubGVuZ3RoJyB9O1xuICAgIH1cbiAgICBsZXQgd2hhdDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDAsIGxlbiA9IGxlZnQubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgaWYgKCh3aGF0ID0gbm90RXF1YWxEZWVwKGxlZnRbaW5kZXhdLCByaWdodFtpbmRleF0sIGNhY2hlLCBwYXRoICsgJy4nICsgaW5kZXgpKSkge1xuICAgICAgICByZXR1cm4gd2hhdDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGVmdCkgJiYgIWlzT2JqZWN0KHJpZ2h0KSkge1xuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy5pc09iamVjdCcgfTtcbiAgfSBlbHNlIGlmIChpc09iamVjdChyaWdodCkgJiYgIWlzT2JqZWN0KGxlZnQpKSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLmlzT2JqZWN0JyB9O1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxlZnQpICYmIGlzT2JqZWN0KHJpZ2h0KSkge1xuICAgIGZvciAobGV0IGtleSBpbiBsZWZ0KSB7XG4gICAgICBpZiAoIWxlZnQuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhbGVmdC5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFyaWdodC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy4nICsga2V5IH07XG4gICAgICB9XG4gICAgICBsZXQgd2hhdDtcbiAgICAgIGlmICgod2hhdCA9IG5vdEVxdWFsRGVlcChsZWZ0W2tleV0sIHJpZ2h0W2tleV0sIGNhY2hlLCBwYXRoICsgJy4nICsga2V5KSkpIHtcbiAgICAgICAgcmV0dXJuIHdoYXQ7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGxlZnQgIT09IHJpZ2h0KSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLiAhPT0nIH07XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEdhbnR0RWxhc3RpY1xuICogTWFpbiB2dWUgY29tcG9uZW50XG4gKi9cbmNvbnN0IEdhbnR0RWxhc3RpYyA9IHtcbiAgbmFtZTogJ0dhbnR0RWxhc3RpYycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNYWluVmlld1xuICB9LFxuICBwcm9wczogWyd0YXNrcycsICdvcHRpb25zJywgJ2R5bmFtaWNTdHlsZSddLFxuICBwcm92aWRlKCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0ge307XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3ZpZGVyLCAncm9vdCcsIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6ICgpID0+IHNlbGZcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvdmlkZXI7XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHNjcm9sbEJhckhlaWdodDogMCxcbiAgICAgICAgICBhbGxWaXNpYmxlVGFza3NIZWlnaHQ6IDAsXG4gICAgICAgICAgb3V0ZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkeW5hbWljU3R5bGU6IHt9LFxuICAgICAgICByZWZzOiB7fSxcbiAgICAgICAgdGFza3NCeUlkOiB7fSxcbiAgICAgICAgdGFza1RyZWU6IHt9LFxuICAgICAgICBjdHgsXG4gICAgICAgIGVtaXRUYXNrc0NoYW5nZXM6IHRydWUsIC8vIHNvbWUgb3BlcmF0aW9ucyBtYXkgcGF1c2UgZW1pdHRpbmcgY2hhbmdlcyB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgICAgIGVtaXRPcHRpb25zQ2hhbmdlczogdHJ1ZSwgLy8gc29tZSBvcGVyYXRpb25zIG1heSBwYXVzZSBlbWl0dGluZyBjaGFuZ2VzIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXI6IG51bGwsXG4gICAgICAgIHVud2F0Y2hUYXNrczogbnVsbCxcbiAgICAgICAgdW53YXRjaE9wdGlvbnM6IG51bGwsXG4gICAgICAgIHVud2F0Y2hTdHlsZTogbnVsbCxcbiAgICAgICAgdW53YXRjaE91dHB1dFRhc2tzOiBudWxsLFxuICAgICAgICB1bndhdGNoT3V0cHV0T3B0aW9uczogbnVsbCxcbiAgICAgICAgdW53YXRjaE91dHB1dFN0eWxlOiBudWxsXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG1lcmdlRGVlcCxcbiAgICBtZXJnZURlZXBSZWFjdGl2ZSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBoZWlnaHQgb2Ygc2Nyb2xsYmFyIGluIGN1cnJlbnQgYnJvd3NlclxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTY3JvbGxCYXJIZWlnaHQoKSB7XG4gICAgICBjb25zdCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9ICdzY3JvbGxiYXInO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgICB2YXIgbm9TY3JvbGwgPSBvdXRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgICB2YXIgd2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldEhlaWdodDtcbiAgICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gbm9TY3JvbGwgLSB3aXRoU2Nyb2xsO1xuICAgICAgdGhpcy5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWwnXVsnbWFyZ2luLWxlZnQnXSA9IGAtJHtoZWlnaHR9cHhgO1xuICAgICAgcmV0dXJuICh0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0ID0gaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmlsbCBvdXQgZW1wdHkgdGFzayBwcm9wZXJ0aWVzIGFuZCBtYWtlIGl0IHJlYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB0YXNrc1xuICAgICAqL1xuICAgIGZpbGxUYXNrcyh0YXNrcykge1xuICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICBpZiAodHlwZW9mIHRhc2sueCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0YXNrLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay55ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2sueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLndpZHRoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2sud2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5oZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5tb3VzZU92ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5tb3VzZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suY29sbGFwc2VkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2suY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmRlcGVuZGVudE9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2suZGVwZW5kZW50T24gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2sucGFyZW50SWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5wYXJlbnRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2suc3R5bGUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suY2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5hbGxDaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0YXNrLmFsbENoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnBhcmVudHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5wYXJlbnRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnBhcmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0YXNrLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnN0YXJ0VGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0YXNrLnN0YXJ0VGltZSA9IGRheWpzKHRhc2suc3RhcnQpLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suZW5kVGltZSA9PT0gJ3VuZGVmaW5lZCcgJiYgdGFzay5oYXNPd25Qcm9wZXJ0eSgnZW5kJykpIHtcbiAgICAgICAgICB0YXNrLmVuZFRpbWUgPSBkYXlqcyh0YXNrLmVuZCkudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXNrLmVuZFRpbWUgPT09ICd1bmRlZmluZWQnICYmIHRhc2suaGFzT3duUHJvcGVydHkoJ2R1cmF0aW9uJykpIHtcbiAgICAgICAgICB0YXNrLmVuZFRpbWUgPSB0YXNrLnN0YXJ0VGltZSArIHRhc2suZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmR1cmF0aW9uID09PSAndW5kZWZpbmVkJyAmJiB0YXNrLmhhc093blByb3BlcnR5KCdlbmRUaW1lJykpIHtcbiAgICAgICAgICB0YXNrLmR1cmF0aW9uID0gdGFzay5lbmRUaW1lIC0gdGFzay5zdGFydFRpbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwIHRhc2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgbWFwVGFza3ModGFza3MsIG9wdGlvbnMpIHtcbiAgICAgIGZvciAobGV0IFtpbmRleCwgdGFza10gb2YgdGFza3MuZW50cmllcygpKSB7XG4gICAgICAgIHRhc2tzW2luZGV4XSA9IHtcbiAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgIGlkOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuaWRdLFxuICAgICAgICAgIHN0YXJ0OiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuc3RhcnRdLFxuICAgICAgICAgIGxhYmVsOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcubGFiZWxdLFxuICAgICAgICAgIGR1cmF0aW9uOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuZHVyYXRpb25dLFxuICAgICAgICAgIHByb2dyZXNzOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcucHJvZ3Jlc3NdLFxuICAgICAgICAgIHR5cGU6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy50eXBlXSxcbiAgICAgICAgICBzdHlsZTogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLnN0eWxlXSxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5jb2xsYXBzZWRdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza3M7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50XG4gICAgICovXG4gICAgaW5pdGlhbGl6ZShpdHNVcGRhdGUgPSAnJykge1xuICAgICAgbGV0IG9wdGlvbnMgPSBtZXJnZURlZXAoe30sIHRoaXMuc3RhdGUub3B0aW9ucywgZ2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMpLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgbGV0IHRhc2tzID0gdGhpcy5tYXBUYXNrcyh0aGlzLnRhc2tzLCBvcHRpb25zKTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmR5bmFtaWNTdHlsZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0eWxlKCk7XG4gICAgICB9XG4gICAgICBkYXlqcy5sb2NhbGUob3B0aW9ucy5sb2NhbGUsIG51bGwsIHRydWUpO1xuICAgICAgZGF5anMubG9jYWxlKG9wdGlvbnMubG9jYWxlLm5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRhc2tMaXN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLnRhc2tMaXN0ID0ge307XG4gICAgICB9XG4gICAgICBvcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMgPSBvcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbHVtbi50aHJlc2hvbGRQZXJjZW50ID0gMTAwO1xuICAgICAgICBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSA9IDA7XG4gICAgICAgIGNvbHVtbi5maW5hbFdpZHRoID0gMDtcbiAgICAgICAgaWYgKHR5cGVvZiBjb2x1bW4uaGVpZ2h0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbHVtbi5oZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29sdW1uLnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbHVtbi5zdHlsZSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbi5faWQgPSBgJHtpbmRleH0tJHtjb2x1bW4ubGFiZWx9YDtcbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRhc2tzID0gdGhpcy5maWxsVGFza3ModGFza3MpO1xuICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKHRhc2sudGFza3MpIHtcbiAgICAgICAgICB0aGlzLm1hcFRhc2tzKHRhc2sudGFza3MsIG9wdGlvbnMpO1xuICAgICAgICAgIHRoaXMuZmlsbFRhc2tzKHRhc2sudGFza3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RhdGUudGFza3NCeUlkID0gdGhpcy5yZXNldFRhc2tUcmVlKHRhc2tzKTtcbiAgICAgIHRoaXMuc3RhdGUudGFza1RyZWUgPSB0aGlzLm1ha2VUYXNrVHJlZSh0aGlzLnN0YXRlLnJvb3RUYXNrLCB0YXNrcyk7XG4gICAgICB0aGlzLnN0YXRlLnRhc2tzID0gdGhpcy5zdGF0ZS50YXNrVHJlZS5hbGxDaGlsZHJlbi5tYXAoY2hpbGRJZCA9PiB0aGlzLmdldFRhc2soY2hpbGRJZCkpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxCYXJIZWlnaHQoKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5vdXRlckhlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0O1xuICAgICAgdGhpcy5nbG9iYWxPblJlc2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHN0eWxlXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZVN0eWxlKCkge1xuICAgICAgdGhpcy5zdGF0ZS5keW5hbWljU3R5bGUgPSBtZXJnZURlZXAoe30sIHByZXBhcmVTdHlsZSh0aGlzLmR5bmFtaWNTdHlsZSksIHRoaXMuZHluYW1pY1N0eWxlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhbGVuZGFyIHJvd3Mgb3V0ZXIgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldENhbGVuZGFySGVpZ2h0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuc3Ryb2tlV2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBtYXhpbWFsIGxldmVsIG9mIG5lc3RlZCB0YXNrIGNoaWxkcmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldE1heGltYWxMZXZlbCgpIHtcbiAgICAgIGxldCBtYXhpbWFsTGV2ZWwgPSAwO1xuICAgICAgdGhpcy5zdGF0ZS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAodGFzay5wYXJlbnRzLmxlbmd0aCA+IG1heGltYWxMZXZlbCkge1xuICAgICAgICAgIG1heGltYWxMZXZlbCA9IHRhc2sucGFyZW50cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1heGltYWxMZXZlbCAtIDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBtYXhpbWFsIGV4cGFuZGVyIHdpZHRoIC0gdG8gY2FsY3VsYXRlIHN0cmFpZ2h0IHRhc2sgbGlzdCB0ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldE1heGltYWxFeHBhbmRlcldpZHRoKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5nZXRNYXhpbWFsTGV2ZWwoKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5wYWRkaW5nICtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyLm1hcmdpblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemUgc2Nyb2xsVG9wIHByb3BlcnR5IHdoZW4gcm93IGhlaWdodCBpcyBjaGFuZ2VkXG4gICAgICovXG4gICAgc3luY1Njcm9sbFRvcCgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLnRhc2tMaXN0SXRlbXMgJiZcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGguc2Nyb2xsVG9wICE9PSB0aGlzLnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcy5zY3JvbGxUb3BcbiAgICAgICkge1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnRvcCA9IHRoaXMuc3RhdGUucmVmcy50YXNrTGlzdEl0ZW1zLnNjcm9sbFRvcCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoLnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRhc2sgbGlzdCBjb2x1bW5zIGRpbWVuc2lvbnNcbiAgICAgKi9cbiAgICBjYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCkge1xuICAgICAgbGV0IGZpbmFsID0gMDtcbiAgICAgIGxldCBwZXJjZW50YWdlID0gMDtcbiAgICAgIGZvciAobGV0IGNvbHVtbiBvZiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucykge1xuICAgICAgICBpZiAoY29sdW1uLmV4cGFuZGVyKSB7XG4gICAgICAgICAgY29sdW1uLndpZHRoRnJvbVBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKCh0aGlzLmdldE1heGltYWxFeHBhbmRlcldpZHRoKCkgKyBjb2x1bW4ud2lkdGgpIC8gMTAwKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5wZXJjZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbHVtbi53aWR0aEZyb21QZXJjZW50YWdlID0gKGNvbHVtbi53aWR0aCAvIDEwMCkgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QucGVyY2VudDtcbiAgICAgICAgfVxuICAgICAgICBwZXJjZW50YWdlICs9IGNvbHVtbi53aWR0aEZyb21QZXJjZW50YWdlO1xuICAgICAgICBjb2x1bW4uZmluYWxXaWR0aCA9IChjb2x1bW4udGhyZXNob2xkUGVyY2VudCAqIGNvbHVtbi53aWR0aEZyb21QZXJjZW50YWdlKSAvIDEwMDtcbiAgICAgICAgZmluYWwgKz0gY29sdW1uLmZpbmFsV2lkdGg7XG4gICAgICAgIGNvbHVtbi5oZWlnaHQgPSB0aGlzLmdldFRhc2tIZWlnaHQoKSAtIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ11bJ3N0cm9rZS13aWR0aCddO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggPSBmaW5hbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGFzayB0cmVlIC0gd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgdHJlZSBsaWtlIHN0cnVjdHVyZSBpbnNpZGUgdGFzayBsaXN0XG4gICAgICovXG4gICAgcmVzZXRUYXNrVHJlZSh0YXNrcykge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuc3RhdGUsICdyb290VGFzaycsIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIGxhYmVsOiAncm9vdCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgYWxsQ2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnRzOiBbXSxcbiAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICBfX3Jvb3Q6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdGFza3NCeUlkID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGFza3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0YXNrc1tpXTtcbiAgICAgICAgY3VycmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICBjdXJyZW50LmFsbENoaWxkcmVuID0gW107XG4gICAgICAgIGN1cnJlbnQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgY3VycmVudC5wYXJlbnRzID0gW107XG4gICAgICAgIHRhc2tzQnlJZFtjdXJyZW50LmlkXSA9IGN1cnJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza3NCeUlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIHRhc2sgdHJlZSwgYWZ0ZXIgcmVzZXQgLSBsb29rIGFib3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFza1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHRhc2tzIHdpdGggY2hpbGRyZW4gYW5kIHBhcmVudHNcbiAgICAgKi9cbiAgICBtYWtlVGFza1RyZWUodGFzaywgdGFza3MpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0YXNrcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRhc2tzW2ldO1xuICAgICAgICBpZiAoY3VycmVudC5wYXJlbnRJZCA9PT0gdGFzay5pZCkge1xuICAgICAgICAgIGlmICh0YXNrLnBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YXNrLnBhcmVudHMuZm9yRWFjaChwYXJlbnQgPT4gY3VycmVudC5wYXJlbnRzLnB1c2gocGFyZW50KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGFzay5wcm9wZXJ0eUlzRW51bWVyYWJsZSgnX19yb290JykpIHtcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50cy5wdXNoKHRhc2suaWQpO1xuICAgICAgICAgICAgY3VycmVudC5wYXJlbnQgPSB0YXNrLmlkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50LnBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudCA9IHRoaXMubWFrZVRhc2tUcmVlKGN1cnJlbnQsIHRhc2tzKTtcbiAgICAgICAgICB0YXNrLmFsbENoaWxkcmVuLnB1c2goY3VycmVudC5pZCk7XG4gICAgICAgICAgdGFzay5jaGlsZHJlbi5wdXNoKGN1cnJlbnQuaWQpO1xuICAgICAgICAgIGN1cnJlbnQuYWxsQ2hpbGRyZW4uZm9yRWFjaChjaGlsZElkID0+IHRhc2suYWxsQ2hpbGRyZW4ucHVzaChjaGlsZElkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGFzayBieSBpZFxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IHRhc2tJZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH0gdGFza1xuICAgICAqL1xuICAgIGdldFRhc2sodGFza0lkKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUudGFza3NCeUlkW3Rhc2tJZF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzQnlJZFt0YXNrSWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGlsZHJlbiB0YXNrcyBmb3Igc3BlY2lmaWVkIHRhc2tJZFxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IHRhc2tJZFxuICAgICAqIEByZXR1cm5zIHthcnJheX0gY2hpbGRyZW5cbiAgICAgKi9cbiAgICBnZXRDaGlsZHJlbih0YXNrSWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucGFyZW50ID09PSB0YXNrSWQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJcyB0YXNrIHZpc2libGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xUYXNrfSB0YXNrXG4gICAgICovXG4gICAgaXNUYXNrVmlzaWJsZSh0YXNrKSB7XG4gICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdudW1iZXInIHx8IHR5cGVvZiB0YXNrID09PSAnc3RyaW5nJykge1xuICAgICAgICB0YXNrID0gdGhpcy5nZXRUYXNrKHRhc2spO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhc2sucGFyZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nZXRUYXNrKHRhc2sucGFyZW50c1tpXSkuY29sbGFwc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHN2Z1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gaHRtbCBzdmcgaW1hZ2Ugb2YgZ2FudHRcbiAgICAgKi9cbiAgICBnZXRTVkcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLm1haW5WaWV3Lm91dGVySFRNTDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBpbWFnZSBmb3JtYXRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gd2hlbiByZXNvbHZlZCByZXR1cm5zIGJhc2U2NCBpbWFnZSBzdHJpbmcgb2YgZ2FudHRcbiAgICAgKi9cbiAgICBnZXRJbWFnZSh0eXBlID0gJ2ltYWdlL3BuZycpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5zdGF0ZS5vcHRpb25zLm1haW5WaWV3LmNsaWVudFdpZHRoO1xuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodDtcbiAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICByZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwodHlwZSkpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2V0U1ZHKCkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBnYW50dCB0b3RhbCBoZWlnaHRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SGVpZ2h0KHZpc2libGVUYXNrcywgb3V0ZXIgPSBmYWxzZSkge1xuICAgICAgbGV0IGhlaWdodCA9XG4gICAgICAgIHZpc2libGVUYXNrcy5sZW5ndGggKiAodGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5zdHJva2VXaWR0aCArXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXA7XG4gICAgICBpZiAob3V0ZXIpIHtcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgb25lIHRhc2sgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhc2tIZWlnaHQod2l0aFN0cm9rZSA9IGZhbHNlKSB7XG4gICAgICBpZiAod2l0aFN0cm9rZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ICtcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIgK1xuICAgICAgICAgIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ11bJ3N0cm9rZS13aWR0aCddXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBzcGVjaWZpZWQgdGFza3MgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhc2tzSGVpZ2h0KHZpc2libGVUYXNrcykge1xuICAgICAgcmV0dXJuIHZpc2libGVUYXNrcy5sZW5ndGggKiB0aGlzLmdldFRhc2tIZWlnaHQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCB0aW1lIChpbiBtaWxsaXNlY29uZHMpIHRvIHBpeGVsIG9mZnNldCBpbnNpZGUgY2hhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBtc1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGltZVRvUGl4ZWxPZmZzZXRYKG1zKSB7XG4gICAgICBsZXQgeCA9IG1zIC0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZTtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIHggPSB4IC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHBpeGVsIG9mZnNldCBpbnNpZGUgY2hhcnQgdG8gY29ycmVzcG9uZGluZyB0aW1lIG9mZnNldCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbE9mZnNldFhcbiAgICAgKiBAcmV0dXJucyB7aW50fSBtaWxsaXNlY29uZHNcbiAgICAgKi9cbiAgICBwaXhlbE9mZnNldFhUb1RpbWUocGl4ZWxPZmZzZXRYKSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gcGl4ZWxPZmZzZXRYICsgdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddIC8gMjtcbiAgICAgIHJldHVybiBvZmZzZXQgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsICsgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIGVsZW1lbnQgaXMgaW5zaWRlIGN1cnJlbnQgdmlldyBwb3J0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCAtIGVsZW1lbnQgcGxhY2VtZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gZWxlbWVudCB3aWR0aFxuICAgICAqIEBwYXJhbSB7aW50fSBidWZmZXIgLSBvciB0aHJlc2hvbGQsIGlmIGVsZW1lbnQgaXMgb3V0c2lkZSB2aWV3cG9ydCBidXQgb2Zmc2V0IGZyb20gdmlldyBwb3J0IGlzIGJlbG93IHRoaXMgdmFsdWUgcmV0dXJuIHRydWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0luc2lkZVZpZXdQb3J0KHgsIHdpZHRoLCBidWZmZXIgPSA1MDAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoeCArIHdpZHRoICsgYnVmZmVyID49IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCAmJlxuICAgICAgICAgIHggLSBidWZmZXIgPD0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5yaWdodCkgfHxcbiAgICAgICAgKHggLSBidWZmZXIgPD0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5sZWZ0ICYmXG4gICAgICAgICAgeCArIHdpZHRoICsgYnVmZmVyID49IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFydCBzY3JvbGwgZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtldmVudH0gZXZcbiAgICAgKi9cbiAgICBvblNjcm9sbENoYXJ0KGV2KSB7XG4gICAgICB0aGlzLl9vblNjcm9sbENoYXJ0KFxuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLnNjcm9sbExlZnQsXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWZ0ZXIgc2FtZSBhcyBhYm92ZSBidXQgd2l0aCBkaWZmZXJlbnQgYXJndW1lbnRzIC0gbm9ybWFsaXplZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG9wXG4gICAgICovXG4gICAgX29uU2Nyb2xsQ2hhcnQobGVmdCwgdG9wKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5sZWZ0ID09PSBsZWZ0ICYmIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQudG9wID09PSB0b3ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hhcnRDb250YWluZXJXaWR0aCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCA9IGxlZnQ7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnJpZ2h0ID0gbGVmdCArIGNoYXJ0Q29udGFpbmVyV2lkdGg7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnBlcmNlbnQgPSAobGVmdCAvIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvblB4KSAqIDEwMDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQudG9wID0gdG9wO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50aW1lID0gdGhpcy5waXhlbE9mZnNldFhUb1RpbWUobGVmdCk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRpbWVDZW50ZXIgPSB0aGlzLnBpeGVsT2Zmc2V0WFRvVGltZShsZWZ0ICsgY2hhcnRDb250YWluZXJXaWR0aCAvIDIpO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5kYXRlVGltZS5sZWZ0ID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50aW1lKS52YWx1ZU9mKCk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmRhdGVUaW1lLnJpZ2h0ID0gZGF5anMoXG4gICAgICAgIHRoaXMucGl4ZWxPZmZzZXRYVG9UaW1lKGxlZnQgKyB0aGlzLnN0YXRlLnJlZnMuY2hhcnQuY2xpZW50V2lkdGgpXG4gICAgICApLnZhbHVlT2YoKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG8obGVmdCwgdG9wKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGN1cnJlbnQgY2hhcnQgdG8gc3BlY2lmaWVkIHRpbWUgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSB0aW1lXG4gICAgICovXG4gICAgc2Nyb2xsVG9UaW1lKHRpbWUpIHtcbiAgICAgIGxldCBwb3MgPSB0aGlzLnRpbWVUb1BpeGVsT2Zmc2V0WCh0aW1lKTtcbiAgICAgIGNvbnN0IGNoYXJ0Q29udGFpbmVyV2lkdGggPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRDb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICBwb3MgPSBwb3MgLSBjaGFydENvbnRhaW5lcldpZHRoIC8gMjtcbiAgICAgIGlmIChwb3MgPiB0aGlzLnN0YXRlLm9wdGlvbnMud2lkdGgpIHtcbiAgICAgICAgcG9zID0gdGhpcy5zdGF0ZS5vcHRpb25zLndpZHRoIC0gY2hhcnRDb250YWluZXJXaWR0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsVG8ocG9zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGNoYXJ0IG9yIHRhc2sgbGlzdCB0byBzcGVjaWZpZWQgcGl4ZWwgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudWxsfSBsZWZ0XG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gdG9wXG4gICAgICovXG4gICAgc2Nyb2xsVG8obGVmdCA9IG51bGwsIHRvcCA9IG51bGwpIHtcbiAgICAgIGlmIChsZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydENhbGVuZGFyQ29udGFpbmVyLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRHcmFwaENvbnRhaW5lci5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5sZWZ0ID0gbGVmdDtcbiAgICAgIH1cbiAgICAgIGlmICh0b3AgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRHcmFwaC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy50YXNrTGlzdEl0ZW1zLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC50b3AgPSB0b3A7XG4gICAgICAgIHRoaXMuc3luY1Njcm9sbFRvcCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZnRlciBzb21lIGFjdGlvbnMgbGlrZSB0aW1lIHpvb20gY2hhbmdlIHdlIG5lZWQgdG8gcmVjb21wZW5zYXRlIHNjcm9sbCBwb3NpdGlvblxuICAgICAqIHNvIGFzIGEgcmVzdWx0IGV2ZXJ5dGhpbmcgd2lsbCBiZSBpbiBzYW1lIHBsYWNlXG4gICAgICovXG4gICAgZml4U2Nyb2xsUG9zKCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1RpbWUodGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50aW1lQ2VudGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW91c2Ugd2hlZWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uV2hlZWxDaGFydChldikge1xuICAgICAgaWYgKCFldi5zaGlmdEtleSAmJiBldi5kZWx0YVggPT09IDApIHtcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwudG9wICsgZXYuZGVsdGFZO1xuICAgICAgICBjb25zdCBjaGFydENsaWVudEhlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0O1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRHcmFwaC5zY3JvbGxIZWlnaHQgLSBjaGFydENsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKHRvcCA8IDApIHtcbiAgICAgICAgICB0b3AgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvcCA+IHNjcm9sbEhlaWdodCkge1xuICAgICAgICAgIHRvcCA9IHNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFRvKG51bGwsIHRvcCk7XG4gICAgICB9IGVsc2UgaWYgKGV2LnNoaWZ0S2V5ICYmIGV2LmRlbHRhWCA9PT0gMCkge1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwubGVmdCArIGV2LmRlbHRhWTtcbiAgICAgICAgY29uc3QgY2hhcnRDbGllbnRXaWR0aCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwuY2xpZW50V2lkdGg7XG4gICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5zY3JvbGxXaWR0aCAtIGNoYXJ0Q2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChsZWZ0IDwgMCkge1xuICAgICAgICAgIGxlZnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGxlZnQgPiBzY3JvbGxXaWR0aCkge1xuICAgICAgICAgIGxlZnQgPSBzY3JvbGxXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFRvKGxlZnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmxlZnQgKyBldi5kZWx0YVg7XG4gICAgICAgIGNvbnN0IGNoYXJ0Q2xpZW50V2lkdGggPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwuc2Nyb2xsV2lkdGggLSBjaGFydENsaWVudFdpZHRoO1xuICAgICAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgICAgICBsZWZ0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gc2Nyb2xsV2lkdGgpIHtcbiAgICAgICAgICBsZWZ0ID0gc2Nyb2xsV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhsZWZ0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGltZSB6b29tIGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25UaW1lWm9vbUNoYW5nZSh0aW1lWm9vbSkge1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVab29tID0gdGltZVpvb207XG4gICAgICB0aGlzLnJlY2FsY3VsYXRlVGltZXMoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlU3RlcHMoKTtcbiAgICAgIHRoaXMuZml4U2Nyb2xsUG9zKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJvdyBoZWlnaHQgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblJvd0hlaWdodENoYW5nZShoZWlnaHQpIHtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLnN5bmNTY3JvbGxUb3AoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2NvcGUgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblNjb3BlQ2hhbmdlKHZhbHVlKSB7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYmVmb3JlID0gdmFsdWU7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYWZ0ZXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaW5pdFRpbWVzKCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVN0ZXBzKCk7XG4gICAgICB0aGlzLmNvbXB1dGVDYWxlbmRhcldpZHRocygpO1xuICAgICAgdGhpcy5maXhTY3JvbGxQb3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGFzayBsaXN0IHdpZHRoIGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25UYXNrTGlzdFdpZHRoQ2hhbmdlKHZhbHVlKSB7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QucGVyY2VudCA9IHZhbHVlO1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLmZpeFNjcm9sbFBvcygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUYXNrIGxpc3QgY29sdW1uIHdpZHRoIGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25UYXNrTGlzdENvbHVtbldpZHRoQ2hhbmdlKCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLmZpeFNjcm9sbFBvcygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gc3BlY2lmaWVkIGV2ZW50IG5hbWVzXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZUV2ZW50cygpIHtcbiAgICAgIHRoaXMuJG9uKCdjaGFydC1zY3JvbGwtaG9yaXpvbnRhbCcsIHRoaXMub25TY3JvbGxDaGFydCk7XG4gICAgICB0aGlzLiRvbignY2hhcnQtc2Nyb2xsLXZlcnRpY2FsJywgdGhpcy5vblNjcm9sbENoYXJ0KTtcbiAgICAgIHRoaXMuJG9uKCdjaGFydC13aGVlbCcsIHRoaXMub25XaGVlbENoYXJ0KTtcbiAgICAgIHRoaXMuJG9uKCd0aW1lcy10aW1lWm9vbS1jaGFuZ2UnLCB0aGlzLm9uVGltZVpvb21DaGFuZ2UpO1xuICAgICAgdGhpcy4kb24oJ3Jvdy1oZWlnaHQtY2hhbmdlJywgdGhpcy5vblJvd0hlaWdodENoYW5nZSk7XG4gICAgICB0aGlzLiRvbignc2NvcGUtY2hhbmdlJywgdGhpcy5vblNjb3BlQ2hhbmdlKTtcbiAgICAgIHRoaXMuJG9uKCd0YXNrTGlzdC13aWR0aC1jaGFuZ2UnLCB0aGlzLm9uVGFza0xpc3RXaWR0aENoYW5nZSk7XG4gICAgICB0aGlzLiRvbigndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZScsIHRoaXMub25UYXNrTGlzdENvbHVtbldpZHRoQ2hhbmdlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBzb21lIGFjdGlvbiB3YXMgcGVyZm9ybWVkIChzY2FsZSBjaGFuZ2UgZm9yIGV4YW1wbGUpIC0gcmVjYWxjdWxhdGUgdGltZSB2YXJpYWJsZXNcbiAgICAgKi9cbiAgICByZWNhbGN1bGF0ZVRpbWVzKCkge1xuICAgICAgbGV0IG1heCA9IHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lU2NhbGUgKiA2MDtcbiAgICAgIGxldCBtaW4gPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVNjYWxlO1xuICAgICAgbGV0IHN0ZXBzID0gbWF4IC8gbWluO1xuICAgICAgbGV0IHBlcmNlbnQgPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVpvb20gLyAxMDA7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsID0gMzYwMDAwMCAqIDI0IC8gMzBcbiAgICAgIC8vIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lUGVyUGl4ZWwgPVxuICAgICAgLy8gICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVNjYWxlICogc3RlcHMgKiBwZXJjZW50ICsgTWF0aC5wb3coMiwgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVab29tKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvbk1zID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKS5kaWZmKFxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lLFxuICAgICAgICAnbWlsbGlzZWNvbmRzJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvblB4ID1cbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uTXMgLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLndpZHRoID1cbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uUHggKyB0aGlzLnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXVsnc3Ryb2tlLXdpZHRoJ107XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGltZSB2YXJpYWJsZXNcbiAgICAgKi9cbiAgICBpbml0VGltZXMoKSB7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGFza1RpbWUpXG4gICAgICAgIC5sb2NhbGUodGhpcy5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lKVxuICAgICAgICAuc3RhcnRPZignZGF5JylcbiAgICAgICAgLy8gLnN1YnRyYWN0KHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5iZWZvcmUsICdkYXlzJylcbiAgICAgICAgLy8gLnN0YXJ0T2YoJ2RheScpXG4gICAgICAgIC52YWx1ZU9mKCk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRhc2tUaW1lKVxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcbiAgICAgICAgLmVuZE9mKCdkYXknKVxuICAgICAgICAvLyAuYWRkKHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5hZnRlciwgJ2RheXMnKVxuICAgICAgICAvLyAuZW5kT2YoJ2RheScpXG4gICAgICAgIC52YWx1ZU9mKCk7XG4gICAgICB0aGlzLnJlY2FsY3VsYXRlVGltZXMoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHN0ZXBzXG4gICAgICogU3RlcHMgYXJlIGRheXMgYnkgZGVmYXVsdFxuICAgICAqIEVhY2ggc3RlcCBjb250YWluIGluZm9ybWF0aW9uIGFib3V0IHRpbWUgb2Zmc2V0IGFuZCBwaXhlbCBvZmZzZXQgb2YgdGhpcyB0aW1lIGluc2lkZSBnYW50dCBjaGFydFxuICAgICAqL1xuICAgIGNhbGN1bGF0ZVN0ZXBzKCkge1xuICAgICAgY29uc3Qgc3RlcHMgPSBbXTtcbiAgICAgIGNvbnN0IGxhc3RNcyA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSkudmFsdWVPZigpO1xuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKTtcbiAgICAgIHN0ZXBzLnB1c2goe1xuICAgICAgICB0aW1lOiBjdXJyZW50RGF0ZS52YWx1ZU9mKCksXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgIG1zOiAwLFxuICAgICAgICAgIHB4OiAwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSlcbiAgICAgICAgICAuYWRkKDEsIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwRHVyYXRpb24pXG4gICAgICAgICAgLnN0YXJ0T2YoJ2RheScpO1xuICAgICAgICBjdXJyZW50RGF0ZS52YWx1ZU9mKCkgPD0gbGFzdE1zO1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcER1cmF0aW9uKS5zdGFydE9mKCdkYXknKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldE1zID0gY3VycmVudERhdGUuZGlmZih0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lLCAnbWlsbGlzZWNvbmRzJyk7XG4gICAgICAgIGNvbnN0IG9mZnNldFB4ID0gb2Zmc2V0TXMgLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsO1xuICAgICAgICBjb25zdCBzdGVwID0ge1xuICAgICAgICAgIHRpbWU6IGN1cnJlbnREYXRlLnZhbHVlT2YoKSxcbiAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIG1zOiBvZmZzZXRNcyxcbiAgICAgICAgICAgIHB4OiBvZmZzZXRQeFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdGVwID0gc3RlcHNbc3RlcHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHByZXZpb3VzU3RlcC53aWR0aCA9IHtcbiAgICAgICAgICBtczogb2Zmc2V0TXMgLSBwcmV2aW91c1N0ZXAub2Zmc2V0Lm1zLFxuICAgICAgICAgIHB4OiBvZmZzZXRQeCAtIHByZXZpb3VzU3RlcC5vZmZzZXQucHhcbiAgICAgICAgfTtcbiAgICAgICAgc3RlcHMucHVzaChzdGVwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxhc3RTdGVwID0gc3RlcHNbc3RlcHMubGVuZ3RoIC0gMV07XG4gICAgICBsYXN0U3RlcC53aWR0aCA9IHtcbiAgICAgICAgbXM6IHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvbk1zIC0gbGFzdFN0ZXAub2Zmc2V0Lm1zLFxuICAgICAgICBweDogdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uUHggLSBsYXN0U3RlcC5vZmZzZXQucHhcbiAgICAgIH07XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMgPSBzdGVwcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGNhbGVuZGFyIHdpZHRocyAtIHdoZW4gc2NhbGUgd2FzIGNoYW5nZWQgZm9yIGV4YW1wbGVcbiAgICAgKi9cbiAgICBjb21wdXRlQ2FsZW5kYXJXaWR0aHMoKSB7XG4gICAgICB0aGlzLmNvbXB1dGVEYXlXaWR0aHMoKTtcbiAgICAgIHRoaXMuY29tcHV0ZUhvdXJXaWR0aHMoKTtcbiAgICAgIHRoaXMuY29tcHV0ZU1vbnRoV2lkdGhzKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgd2lkdGggb2YgY2FsZW5kYXIgaG91cnMgY29sdW1uIHdpZHRocyBiYXNpbmcgb24gdGV4dCB3aWR0aHNcbiAgICAgKi9cbiAgICBjb21wdXRlSG91cldpZHRocygpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0geyAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dCddLCAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dC0taG91ciddIH07XG4gICAgICB0aGlzLnN0YXRlLmN0eC5mb250ID0gc3R5bGVbJ2ZvbnQtc2l6ZSddICsgJyAnICsgc3R5bGVbJ2ZvbnQtZmFtaWx5J107XG4gICAgICBjb25zdCBsb2NhbGVOYW1lID0gdGhpcy5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lO1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anMoJzIwMTgtMDEtMDFUMDA6MDA6MDAnKS5sb2NhbGUobG9jYWxlTmFtZSk7IC8vIGFueSBkYXRlIHdpbGwgYmUgZ29vZCBmb3IgaG91cnNcbiAgICAgIGxldCBtYXhXaWR0aHMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5tYXhXaWR0aHM7XG4gICAgICBpZiAobWF4V2lkdGhzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBmb3JtYXROYW1lIGluIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmZvcm1hdCkge1xuICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSAwO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaG91ciA9IDA7IGhvdXIgPCAyNDsgaG91cisrKSB7XG4gICAgICAgIGxldCB3aWR0aHMgPSB7IGhvdXIgfTtcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBpbiB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXQpIHtcbiAgICAgICAgICBjb25zdCBob3VyRm9ybWF0dGVkID0gdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0W2Zvcm1hdE5hbWVdKGN1cnJlbnREYXRlKTtcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXR0ZWRbZm9ybWF0TmFtZV0ucHVzaChob3VyRm9ybWF0dGVkKTtcbiAgICAgICAgICB3aWR0aHNbZm9ybWF0TmFtZV0gPSB0aGlzLnN0YXRlLmN0eC5tZWFzdXJlVGV4dChob3VyRm9ybWF0dGVkKS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci53aWR0aHMucHVzaCh3aWR0aHMpO1xuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIGluIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmZvcm1hdCkge1xuICAgICAgICAgIGlmICh3aWR0aHNbZm9ybWF0TmFtZV0gPiBtYXhXaWR0aHNbZm9ybWF0TmFtZV0pIHtcbiAgICAgICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IHdpZHRoc1tmb3JtYXROYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5hZGQoMSwgJ2hvdXInKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBjYWxlbmRhciBkYXlzIGNvbHVtbiB3aWR0aHMgYmFzaW5nIG9uIHRleHQgd2lkdGhzXG4gICAgICovXG4gICAgY29tcHV0ZURheVdpZHRocygpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0geyAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dCddLCAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dC0tZGF5J10gfTtcbiAgICAgIHRoaXMuc3RhdGUuY3R4LmZvbnQgPSBzdHlsZVsnZm9udC1zaXplJ10gKyAnICcgKyBzdHlsZVsnZm9udC1mYW1pbHknXTtcbiAgICAgIGNvbnN0IGxvY2FsZU5hbWUgPSB0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWU7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbMF0udGltZSkubG9jYWxlKGxvY2FsZU5hbWUpO1xuICAgICAgbGV0IG1heFdpZHRocyA9IHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkubWF4V2lkdGhzO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS53aWR0aHMgPSBbXTtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSAwO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBkYXkgPSAwLCBkYXlzTGVuID0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmxlbmd0aDsgZGF5IDwgZGF5c0xlbjsgZGF5KyspIHtcbiAgICAgICAgY29uc3Qgd2lkdGhzID0ge1xuICAgICAgICAgIGRheVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcbiAgICAgICAgICB3aWR0aHNbZm9ybWF0TmFtZV0gPSB0aGlzLnN0YXRlLmN0eC5tZWFzdXJlVGV4dChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0W2Zvcm1hdE5hbWVdKGN1cnJlbnREYXRlKVxuICAgICAgICAgICkud2lkdGg7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRocy5wdXNoKHdpZHRocyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICAgIGlmICh3aWR0aHNbZm9ybWF0TmFtZV0gPiBtYXhXaWR0aHNbZm9ybWF0TmFtZV0pIHtcbiAgICAgICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IHdpZHRoc1tmb3JtYXROYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCAnZGF5Jyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vbnRocyBjb3VudFxuICAgICAqXG4gICAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgbnVtYmVyIG9mIGRpZmZlcmVudCBtb250aHMgaW4gc3BlY2lmaWVkIHRpbWUgcmFuZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tVGltZSAtIGRhdGUgaW4gbXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG9UaW1lIC0gZGF0ZSBpbiBtc1xuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0gZGlmZmVyZW50IG1vbnRocyBjb3VudFxuICAgICAqL1xuICAgIG1vbnRoc0NvdW50KGZyb21UaW1lLCB0b1RpbWUpIHtcbiAgICAgIGlmIChmcm9tVGltZSA+IHRvVGltZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGxldCBjdXJyZW50TW9udGggPSBkYXlqcyhmcm9tVGltZSk7XG4gICAgICBsZXQgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aC5jbG9uZSgpO1xuICAgICAgbGV0IG1vbnRoc0NvdW50ID0gMTtcbiAgICAgIHdoaWxlIChjdXJyZW50TW9udGgudmFsdWVPZigpIDw9IHRvVGltZSkge1xuICAgICAgICBjdXJyZW50TW9udGggPSBjdXJyZW50TW9udGguYWRkKDEsICdkYXknKTtcbiAgICAgICAgaWYgKHByZXZpb3VzTW9udGgubW9udGgoKSAhPT0gY3VycmVudE1vbnRoLm1vbnRoKCkpIHtcbiAgICAgICAgICBtb250aHNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzTW9udGggPSBjdXJyZW50TW9udGguY2xvbmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb250aHNDb3VudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBtb250aCBjYWxlbmRhciBjb2x1bW5zIHdpZHRocyBiYXNpbmcgb24gdGV4dCB3aWR0aHNcbiAgICAgKi9cbiAgICBjb21wdXRlTW9udGhXaWR0aHMoKSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHsgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQnXSwgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLW1vbnRoJ10gfTtcbiAgICAgIHRoaXMuc3RhdGUuY3R4LmZvbnQgPSBzdHlsZVsnZm9udC1zaXplJ10gKyAnICcgKyBzdHlsZVsnZm9udC1mYW1pbHknXTtcbiAgICAgIGxldCBtYXhXaWR0aHMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgubWF4V2lkdGhzO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLndpZHRocyA9IFtdO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcbiAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gMDtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbG9jYWxlTmFtZSA9IHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZTtcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpLmxvY2FsZShsb2NhbGVOYW1lKTtcbiAgICAgIGNvbnN0IG1vbnRoc0NvdW50ID0gdGhpcy5tb250aHNDb3VudCh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lLCB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpO1xuICAgICAgZm9yIChsZXQgbW9udGggPSAwOyBtb250aCA8IG1vbnRoc0NvdW50OyBtb250aCsrKSB7XG4gICAgICAgIGNvbnN0IHdpZHRocyA9IHtcbiAgICAgICAgICBtb250aFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICAgIHdpZHRoc1tmb3JtYXROYW1lXSA9IHRoaXMuc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdFtmb3JtYXROYW1lXShjdXJyZW50RGF0ZSlcbiAgICAgICAgICApLndpZHRoO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLndpZHRocy5wdXNoKHdpZHRocyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgICAgaWYgKHdpZHRoc1tmb3JtYXROYW1lXSA+IG1heFdpZHRoc1tmb3JtYXROYW1lXSkge1xuICAgICAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gd2lkdGhzW2Zvcm1hdE5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkKDEsICdtb250aCcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRpbWUgYW5kIGRhdGUgdmFyaWFibGVzIGZvciBnYW50dFxuICAgICAqL1xuICAgIHByZXBhcmVEYXRlcygpIHtcbiAgICAgIGxldCBmaXJzdFRhc2tUaW1lID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICBsZXQgbGFzdFRhc2tUaW1lID0gMDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gdGhpcy5zdGF0ZS50YXNrcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gdGhpcy5zdGF0ZS50YXNrc1tpbmRleF07XG4gICAgICAgIGlmICh0YXNrLnN0YXJ0VGltZSA8IGZpcnN0VGFza1RpbWUpIHtcbiAgICAgICAgICBmaXJzdFRhc2tUaW1lID0gdGFzay5zdGFydFRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2suc3RhcnRUaW1lICsgdGFzay5kdXJhdGlvbiA+IGxhc3RUYXNrVGltZSkge1xuICAgICAgICAgIGxhc3RUYXNrVGltZSA9IHRhc2suc3RhcnRUaW1lICsgdGFzay5kdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGFza1RpbWUgPSBmaXJzdFRhc2tUaW1lO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUYXNrVGltZSA9IGxhc3RUYXNrVGltZTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUgPSBkYXlqcyhmaXJzdFRhc2tUaW1lKVxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcbiAgICAgICAgLnN0YXJ0T2YoJ2RheScpXG4gICAgICAgIC8vIC5zdWJ0cmFjdCh0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYmVmb3JlLCAnZGF5cycpXG4gICAgICAgIC8vIC5zdGFydE9mKCdkYXknKVxuICAgICAgICAudmFsdWVPZigpO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lID0gZGF5anMobGFzdFRhc2tUaW1lKVxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcbiAgICAgICAgLmVuZE9mKCdkYXknKVxuICAgICAgICAvLyAuYWRkKHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5hZnRlciwgJ2RheXMnKVxuICAgICAgICAvLyAuZW5kT2YoJ2RheScpXG4gICAgICAgIC52YWx1ZU9mKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHVwIGFuZCBjYWxjdWxhdGUgZXZlcnl0aGluZ1xuICAgICAqL1xuICAgIHNldHVwKGl0c1VwZGF0ZSA9ICcnKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUoaXRzVXBkYXRlKTtcbiAgICAgIHRoaXMucHJlcGFyZURhdGVzKCk7XG4gICAgICB0aGlzLmluaXRUaW1lcygpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVTdGVwcygpO1xuICAgICAgdGhpcy5jb21wdXRlQ2FsZW5kYXJXaWR0aHMoKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aCA9IHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLnJlZHVjZShcbiAgICAgICAgKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4geyB3aWR0aDogcHJldi53aWR0aCArIGN1cnJlbnQud2lkdGggfTtcbiAgICAgICAgfSxcbiAgICAgICAgeyB3aWR0aDogMCB9XG4gICAgICApLndpZHRoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHbG9iYWwgcmVzaXplIGV2ZW50IChmcm9tIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKVxuICAgICAqL1xuICAgIGdsb2JhbE9uUmVzaXplKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRoaXMuJGVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCA9IHRoaXMuJGVsLmNsaWVudFdpZHRoO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGhGcm9tUGVyY2VudGFnZSA+XG4gICAgICAgICh0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggLyAxMDApICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoVGhyZXNob2xkXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGlmZiA9XG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgLVxuICAgICAgICAgICh0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggLyAxMDApICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoVGhyZXNob2xkO1xuICAgICAgICBsZXQgZGlmZlBlcmNlbnQgPSAxMDAgLSAoZGlmZiAvIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aEZyb21QZXJjZW50YWdlKSAqIDEwMDtcbiAgICAgICAgaWYgKGRpZmZQZXJjZW50IDwgMCkge1xuICAgICAgICAgIGRpZmZQZXJjZW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgPSBkaWZmUGVyY2VudDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgPSAxMDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLiRlbWl0KCdjYWxlbmRhci1yZWNhbGN1bGF0ZScpO1xuICAgICAgdGhpcy5zeW5jU2Nyb2xsVG9wKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHZpc2libGUgdGFza3NcbiAgICAgKiBWZXJ5IGltcG9ydGFudCBtZXRob2Qgd2hpY2ggd2lsbCBicmluZyB1cyBvbmx5IHRob3NlIHRhc2tzIHRoYXQgYXJlIHZpc2libGUgaW5zaWRlIGdhbnR0IGNoYXJ0XG4gICAgICogRm9yIGV4YW1wbGUgd2hlbiB0YXNrIGlzIGNvbGxhcHNlZCAtIGNoaWxkcmVuIG9mIHRoaXMgdGFzayBhcmUgbm90IHZpc2libGUgLSB3ZSBzaG91bGQgbm90IHJlbmRlciB0aGVtXG4gICAgICovXG4gICAgdmlzaWJsZVRhc2tzKCkge1xuICAgICAgY29uc3QgdmlzaWJsZVRhc2tzID0gdGhpcy5zdGF0ZS50YXNrcy5maWx0ZXIodGFzayA9PiB0aGlzLmlzVGFza1Zpc2libGUodGFzaykpO1xuICAgICAgY29uc3QgbWF4Um93cyA9IHZpc2libGVUYXNrcy5zbGljZSgwLCB0aGlzLnN0YXRlLm9wdGlvbnMubWF4Um93cyk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCA9IHRoaXMuZ2V0VGFza3NIZWlnaHQobWF4Um93cyk7XG4gICAgICBsZXQgaGVpZ2h0Q29tcGVuc2F0aW9uID0gMDtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnMubWF4SGVpZ2h0ICYmIHRoaXMuc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ID4gdGhpcy5zdGF0ZS5vcHRpb25zLm1heEhlaWdodCkge1xuICAgICAgICBoZWlnaHRDb21wZW5zYXRpb24gPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCAtIHRoaXMuc3RhdGUub3B0aW9ucy5tYXhIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLm1heEhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodChtYXhSb3dzKSAtIGhlaWdodENvbXBlbnNhdGlvbjtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgPSB0aGlzLmdldFRhc2tzSGVpZ2h0KHZpc2libGVUYXNrcyk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMub3V0ZXJIZWlnaHQgPSB0aGlzLmdldEhlaWdodChtYXhSb3dzLCB0cnVlKSAtIGhlaWdodENvbXBlbnNhdGlvbjtcbiAgICAgIGxldCBsZW4gPSB2aXNpYmxlVGFza3MubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICBsZXQgdGFzayA9IHZpc2libGVUYXNrc1tpbmRleF07XG4gICAgICAgIHRhc2sud2lkdGggPVxuICAgICAgICAgIHRhc2suZHVyYXRpb24gLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsIC0gdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddO1xuICAgICAgICBpZiAodGFzay53aWR0aCA8IDApIHtcbiAgICAgICAgICB0YXNrLndpZHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0YXNrLmhlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0O1xuICAgICAgICB0YXNrLnggPSB0aGlzLnRpbWVUb1BpeGVsT2Zmc2V0WCh0YXNrLnN0YXJ0VGltZSk7XG4gICAgICAgIHRhc2sueSA9XG4gICAgICAgICAgKHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ICsgdGhpcy5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAgKiAyKSAqIGluZGV4ICtcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcDtcbiAgICAgICAgaWYgKHRhc2sudGFza3MpIHtcbiAgICAgICAgICBjb25zdCBzdWJ0YXNrcyA9IFtdO1xuICAgICAgICAgIHRhc2sudGFza3MuZm9yRWFjaChzdWJ0YXNrID0+IHtcbiAgICAgICAgICAgIHN1YnRhc2sud2lkdGggPVxuICAgICAgICAgICAgICBzdWJ0YXNrLmR1cmF0aW9uIC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbCAtXG4gICAgICAgICAgICAgIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS12ZXJ0aWNhbCddWydzdHJva2Utd2lkdGgnXTtcbiAgICAgICAgICAgIGlmIChzdWJ0YXNrLndpZHRoIDwgMCkge1xuICAgICAgICAgICAgICBzdWJ0YXNrLndpZHRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnRhc2suaGVpZ2h0ID0gdGFzay5oZWlnaHQ7XG4gICAgICAgICAgICBzdWJ0YXNrLnggPSB0aGlzLnRpbWVUb1BpeGVsT2Zmc2V0WChzdWJ0YXNrLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICBzdWJ0YXNrLnkgPSB0YXNrLnk7XG4gICAgICAgICAgICBzdWJ0YXNrcy5wdXNoKHN1YnRhc2spO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRhc2sudGFza3MgPSBzdWJ0YXNrcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZpc2libGVUYXNrcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3R5bGUgc2hvcnRjdXRcbiAgICAgKi9cbiAgICBzdHlsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmR5bmFtaWNTdHlsZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbHVtbnMgYW5kIGNvbXB1dGUgZGltZW5zaW9ucyBvbiB0aGUgZmx5XG4gICAgICovXG4gICAgZ2V0VGFza0xpc3RDb2x1bW5zKCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmNvbHVtbnM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRhc2tzIHVzZWQgZm9yIGNvbW11bmljYXRlIHdpdGggcGFyZW50IGNvbXBvbmVudFxuICAgICAqL1xuICAgIG91dHB1dFRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGFza3M7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdXNlZCB0byBjb21tdW5pY2F0ZSB3aXRoIHBhcmVudCBjb21wb25lbnRcbiAgICAgKi9cbiAgICBvdXRwdXRPcHRpb25zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdhdGNoIHRhc2tzIGFmdGVyIGdhbnR0IGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHJlYWN0IHdoZW4gd2UgaGF2ZSBuZXcga2lkcyBvbiB0aGUgYmxvY2tcbiAgICovXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaFRhc2tzID0gdGhpcy4kd2F0Y2goXG4gICAgICAndGFza3MnLFxuICAgICAgdGFza3MgPT4ge1xuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcCh0YXNrcywgdGhpcy5vdXRwdXRUYXNrcyk7XG4gICAgICAgIGlmIChub3RFcXVhbCkge1xuICAgICAgICAgIHRoaXMuc2V0dXAoJ3Rhc2tzJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IGRlZXA6IHRydWUgfVxuICAgICk7XG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3B0aW9ucyA9IHRoaXMuJHdhdGNoKFxuICAgICAgJ29wdGlvbnMnLFxuICAgICAgb3B0cyA9PiB7XG4gICAgICAgIGNvbnN0IG5vdEVxdWFsID0gbm90RXF1YWxEZWVwKG9wdHMsIHRoaXMub3V0cHV0T3B0aW9ucyk7XG4gICAgICAgIGlmIChub3RFcXVhbCkge1xuICAgICAgICAgIHRoaXMuc2V0dXAoJ29wdGlvbnMnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XG4gICAgKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hTdHlsZSA9IHRoaXMuJHdhdGNoKFxuICAgICAgJ2R5bmFtaWNTdHlsZScsXG4gICAgICBzdHlsZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdEVxdWFsID0gbm90RXF1YWxEZWVwKHN0eWxlLCB0aGlzLmR5bmFtaWNTdHlsZSk7XG4gICAgICAgIGlmIChub3RFcXVhbCkge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0eWxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IGRlZXA6IHRydWUsIGltbWVkaWF0ZTogdHJ1ZSB9XG4gICAgKTtcblxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFRhc2tzID0gdGhpcy4kd2F0Y2goXG4gICAgICAnb3V0cHV0VGFza3MnLFxuICAgICAgdGFza3MgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCd0YXNrcy1jaGFuZ2VkJywgdGFza3MubWFwKHRhc2sgPT4gdGFzaykpO1xuICAgICAgfSxcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XG4gICAgKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPdXRwdXRPcHRpb25zID0gdGhpcy4kd2F0Y2goXG4gICAgICAnb3V0cHV0T3B0aW9ucycsXG4gICAgICBvcHRpb25zID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnb3B0aW9ucy1jaGFuZ2VkJywgbWVyZ2VEZWVwKHt9LCBvcHRpb25zKSk7XG4gICAgICB9LFxuICAgICAgeyBkZWVwOiB0cnVlIH1cbiAgICApO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFN0eWxlID0gdGhpcy4kd2F0Y2goXG4gICAgICAnc3R5bGUnLFxuICAgICAgc3R5bGUgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdkeW5hbWljLXN0eWxlLWNoYW5nZWQnLCBtZXJnZURlZXAoe30sIHN0eWxlKSk7XG4gICAgICB9LFxuICAgICAgeyBkZWVwOiB0cnVlIH1cbiAgICApO1xuXG4gICAgdGhpcy4kcm9vdC4kZW1pdCgnZ2FudHQtZWxhc3RpYy1jcmVhdGVkJywgdGhpcyk7XG4gICAgdGhpcy4kZW1pdCgnY3JlYXRlZCcsIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbWl0IGJlZm9yZS1tb3VudCBldmVudFxuICAgKi9cbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgdGhpcy4kZW1pdCgnYmVmb3JlLW1vdW50JywgdGhpcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVtaXQgcmVhZHkvbW91bnRlZCBldmVudHMgYW5kIGRlbGl2ZXIgdGhpcyBnYW50dCBpbnN0YW5jZSB0byBvdXRzaWRlIHdvcmxkIHdoZW4gbmVlZGVkXG4gICAqL1xuICBtb3VudGVkKCkge1xuICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCA9IHRoaXMuJGVsLmNsaWVudFdpZHRoO1xuICAgIHRoaXMuc3RhdGUucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmdsb2JhbE9uUmVzaXplKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZS5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuJGVsLnBhcmVudE5vZGUpO1xuICAgIHRoaXMuZ2xvYmFsT25SZXNpemUoKTtcbiAgICB0aGlzLiRlbWl0KCdyZWFkeScsIHRoaXMpO1xuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtbW91bnRlZCcsIHRoaXMpO1xuICAgIHRoaXMuJGVtaXQoJ21vdW50ZWQnLCB0aGlzKTtcbiAgICB0aGlzLiRyb290LiRlbWl0KCdnYW50dC1lbGFzdGljLXJlYWR5JywgdGhpcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVtaXQgZXZlbnQgd2hlbiBkYXRhIHdhcyBjaGFuZ2VkIGFuZCBiZWZvcmUgdXBkYXRlICh5b3UgY2FuIGNsZWFudXAgZG9tIGV2ZW50cyBoZXJlIGZvciBleGFtcGxlKVxuICAgKi9cbiAgYmVmb3JlVXBkYXRlKCkge1xuICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS11cGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogRW1pdCBldmVudCB3aGVuIGdhbnR0LWVsYXN0aWMgdmlldyB3YXMgdXBkYXRlZFxuICAgKi9cbiAgdXBkYXRlZCgpIHtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB0aGlzLiRlbWl0KCd1cGRhdGVkJyk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJlZm9yZSBkZXN0cm95IGV2ZW50IC0gY2xlYW4gdXBcbiAgICovXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZS5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy4kZWwucGFyZW50Tm9kZSk7XG4gICAgdGhpcy5zdGF0ZS51bndhdGNoVGFza3MoKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPcHRpb25zKCk7XG4gICAgdGhpcy5zdGF0ZS51bndhdGNoU3R5bGUoKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPdXRwdXRUYXNrcygpO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dE9wdGlvbnMoKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPdXRwdXRTdHlsZSgpO1xuICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS1kZXN0cm95Jyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVtaXQgZXZlbnQgYWZ0ZXIgZ2FudHQtZWxhc3RpYyB3YXMgZGVzdHJveWVkXG4gICAqL1xuICBkZXN0cm95ZWQoKSB7XG4gICAgdGhpcy4kZW1pdCgnZGVzdHJveWVkJyk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBHYW50dEVsYXN0aWM7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuW2NsYXNzXj0nZ2FudHQtZWxhc3RpYyddLFxuW2NsYXNzKj0nIGdhbnR0LWVsYXN0aWMnXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtaG9yaXpvbnRhbC1saW5lLFxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtdmVydGljYWwtbGluZSB7XG4gIHN0cm9rZTogI2EwYTBhMDtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuZm9yZWlnbk9iamVjdCA+ICoge1xuICBtYXJnaW46IDBweDtcbn1cbi5nYW50dC1lbGFzdGljIC5wLTIge1xuICBwYWRkaW5nOiAxMHJlbTtcbn1cbi5nYW50dC1lbGFzdGljX19tYWluLXZpZXctbWFpbi1jb250YWluZXIsXG4uZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWNvbHVtbjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwNTA7XG59XG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA1MDtcbn1cbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuPC9zdHlsZT5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBDYWxlbmRhciBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jYWxlbmRhci13cmFwcGVyXCJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXdyYXBwZXInXSwgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCcgfVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXJcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NhbGVuZGFyJ10sIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyAncHgnIH1cIj5cbiAgICAgIDxjYWxlbmRhci1yb3cgOml0ZW1zPVwiZGF0ZXMubW9udGhzXCIgd2hpY2g9XCJtb250aFwiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZGlzcGxheVwiPjwvY2FsZW5kYXItcm93PlxuICAgICAgPGNhbGVuZGFyLXJvdyA6aXRlbXM9XCJkYXRlcy5kYXlzXCIgd2hpY2g9XCJkYXlcIiB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5kaXNwbGF5XCI+PC9jYWxlbmRhci1yb3c+XG4gICAgICA8Y2FsZW5kYXItcm93IDppdGVtcz1cImRhdGVzLmhvdXJzXCIgd2hpY2g9XCJob3VyXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXlcIj48L2NhbGVuZGFyLXJvdz5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiByb290LnN0YXRlLm9wdGlvbnMuc3RhZ2VzXCIgOmtleT1cImluZGV4XCIgc3R5bGU9XCJoZWlnaHQ6IDE2cHg7bGluZS1oZWlnaHQ6IDE2cHg7Zm9udC1zaXplOiAxMnB4O2NvbG9yOiB3aGl0ZTt0ZXh0LWFsaWduOiBjZW50ZXI7b3ZlcmZsb3c6IGhpZGRlbjt3aGl0ZS1zcGFjZTogbm93cmFwO3RleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO2JvcmRlci1yYWRpdXM6IDhweDtcIiA6c3R5bGU9XCJ7d2lkdGg6IGl0ZW0uZGF5cyAqIDMwICsgJ3B4JywgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yfVwiPnt7IGl0ZW0ubmFtZSB9fe+8iHt7aXRlbS5kYXlzfX3lpKnvvIk8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IENhbGVuZGFyUm93IGZyb20gJy4vQ2FsZW5kYXJSb3cudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ2FsZW5kYXInLFxuICBjb21wb25lbnRzOiB7XG4gICAgQ2FsZW5kYXJSb3dcbiAgfSxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSBkYXlzIHdpbGwgZml0P1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBob3dNYW55RGF5c0ZpdCgpIHtcbiAgICAgIGNvbnN0IHN0cm9rZSA9IDE7XG4gICAgICBjb25zdCBhZGRpdGlvbmFsU3BhY2UgPSBzdHJva2UgKyAyO1xuICAgICAgbGV0IGZ1bGxXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoO1xuICAgICAgbGV0IGZvcm1hdE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdCk7XG4gICAgICBmb3IgKGxldCBkYXlzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBkYXlzID4gMTsgZGF5cyA9IE1hdGguY2VpbChkYXlzIC8gMikpIHtcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgYWRkaXRpb25hbFNwYWNlKSAqIGRheXMgPD0gZnVsbFdpZHRoICYmXG4gICAgICAgICAgICBkYXlzID4gMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY291bnQ6IGRheXMsXG4gICAgICAgICAgICAgIHR5cGU6IGZvcm1hdE5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgdHlwZTogJydcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IG1vbnRocyB3aWxsIGZpdD9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgaG93TWFueU1vbnRoc0ZpdCgpIHtcbiAgICAgIGNvbnN0IHN0cm9rZSA9IDE7XG4gICAgICBjb25zdCBhZGRpdGlvbmFsU3BhY2UgPSBzdHJva2UgKyAyO1xuICAgICAgbGV0IGZ1bGxXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoO1xuICAgICAgbGV0IGZvcm1hdE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KTtcbiAgICAgIGxldCBjdXJyZW50TW9udGggPSBkYXlqcyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpO1xuICAgICAgbGV0IHByZXZpb3VzTW9udGggPSBjdXJyZW50TW9udGguY2xvbmUoKTtcbiAgICAgIGNvbnN0IGxhc3RUaW1lID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWU7XG4gICAgICBsZXQgbW9udGhzQ291bnQgPSB0aGlzLnJvb3QubW9udGhzQ291bnQoXG4gICAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSxcbiAgICAgICAgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWVcbiAgICAgICk7XG4gICAgICBpZiAobW9udGhzQ291bnQgPT09IDEpIHtcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xuICAgICAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5tYXhXaWR0aHNbZm9ybWF0TmFtZV0gKyBhZGRpdGlvbmFsU3BhY2UgPD0gZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgdHlwZTogZm9ybWF0TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IG1vbnRocyA9IG1vbnRoc0NvdW50OyBtb250aHMgPiAxOyBtb250aHMgPSBNYXRoLmNlaWwobW9udGhzIC8gMikpIHtcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5tYXhXaWR0aHNbZm9ybWF0TmFtZV0gKyBhZGRpdGlvbmFsU3BhY2UpICogbW9udGhzIDw9IGZ1bGxXaWR0aCAmJlxuICAgICAgICAgICAgbW9udGhzID4gMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY291bnQ6IG1vbnRocyxcbiAgICAgICAgICAgICAgdHlwZTogZm9ybWF0TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICB0eXBlOiBmb3JtYXROYW1lc1swXVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgZGF5c1xuICAgICAqXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIGdlbmVyYXRlRGF5cygpIHtcbiAgICAgIGxldCBkYXlzID0gW107XG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5kaXNwbGF5KSB7XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF5c0NvdW50ID0gdGhpcy5ob3dNYW55RGF5c0ZpdCgpO1xuICAgICAgaWYgKGRheXNDb3VudC5jb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZGF5cztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHM7XG4gICAgICBjb25zdCBsb2NhbGVOYW1lID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWU7XG4gICAgICBjb25zdCBkYXlTdGVwID0gTWF0aC5jZWlsKHN0ZXBzLmxlbmd0aCAvIGRheXNDb3VudC5jb3VudCk7XG4gICAgICBmb3IgKGxldCBkYXlJbmRleCA9IDAsIGxlbiA9IHN0ZXBzLmxlbmd0aDsgZGF5SW5kZXggPCBsZW47IGRheUluZGV4ICs9IGRheVN0ZXApIHtcbiAgICAgICAgbGV0IGRheVdpZHRoUHggPSAwO1xuICAgICAgICAvLyBkYXkgY291bGQgYmUgc2hvcnRlciAoZGF5bGlnaHQgc2F2aW5nIHRpbWUpIHNvIGpvaW4gd2lkdGhzIGFuZCBkaXZpZGVcbiAgICAgICAgZm9yIChsZXQgY3VycmVudFN0ZXAgPSAwOyBjdXJyZW50U3RlcCA8IGRheVN0ZXA7IGN1cnJlbnRTdGVwKyspIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHN0ZXBzW2RheUluZGV4ICsgY3VycmVudFN0ZXBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGF5V2lkdGhQeCArPSBzdGVwc1tkYXlJbmRleCArIGN1cnJlbnRTdGVwXS53aWR0aC5weDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRheWpzKHN0ZXBzW2RheUluZGV4XS50aW1lKTtcbiAgICAgICAgbGV0IHRleHRXaWR0aCA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRoc1tkYXlJbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGV4dFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRoc1tkYXlJbmRleF1bZGF5c0NvdW50LnR5cGVdO1xuICAgICAgICB9XG4gICAgICAgIGxldCB4ID0gc3RlcHNbZGF5SW5kZXhdLm9mZnNldC5weDtcbiAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICBpbmRleDogZGF5SW5kZXgsXG4gICAgICAgICAga2V5OiBzdGVwc1tkYXlJbmRleF0udGltZSArICdkJyxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHk6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmhlaWdodCxcbiAgICAgICAgICB3aWR0aDogZGF5V2lkdGhQeCxcbiAgICAgICAgICB0ZXh0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuaGVpZ2h0LFxuICAgICAgICAgIGxhYmVsOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0W2RheXNDb3VudC50eXBlXShkYXRlLmxvY2FsZShsb2NhbGVOYW1lKSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF5cy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxuICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIG1vbnRoc1xuICAgICAqXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIGdlbmVyYXRlTW9udGhzKCkge1xuICAgICAgbGV0IG1vbnRocyA9IFtdO1xuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5KSB7XG4gICAgICAgIHJldHVybiBtb250aHM7XG4gICAgICB9XG4gICAgICBjb25zdCBtb250aHNDb3VudCA9IHRoaXMuaG93TWFueU1vbnRoc0ZpdCgpO1xuICAgICAgaWYgKG1vbnRoc0NvdW50LmNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBtb250aHM7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGVwcyA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzO1xuICAgICAgY29uc3QgbG9jYWxlTmFtZSA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lO1xuICAgICAgbGV0IGZvcm1hdE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KTtcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSk7XG4gICAgICBmb3IgKGxldCBtb250aEluZGV4ID0gMDsgbW9udGhJbmRleCA8IG1vbnRoc0NvdW50LmNvdW50OyBtb250aEluZGV4KyspIHtcbiAgICAgICAgbGV0IG1vbnRoV2lkdGggPSAwO1xuICAgICAgICBsZXQgbW9udGhPZmZzZXQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgICAgbGV0IGZpbmFsRGF0ZSA9IGRheWpzKGN1cnJlbnREYXRlKVxuICAgICAgICAgIC5hZGQoMSwgJ21vbnRoJylcbiAgICAgICAgICAuc3RhcnRPZignbW9udGgnKTtcbiAgICAgICAgaWYgKGZpbmFsRGF0ZS52YWx1ZU9mKCkgPiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSkge1xuICAgICAgICAgIGZpbmFsRGF0ZSA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBtdXN0IGZpbmQgZmlyc3QgYW5kIGxhc3Qgc3RlcCB0byBnZXQgdGhlIG9mZnNldHMgLyB3aWR0aHNcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDAsIGxlbiA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmxlbmd0aDsgc3RlcCA8IGxlbjsgc3RlcCsrKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbc3RlcF07XG4gICAgICAgICAgaWYgKGN1cnJlbnRTdGVwLnRpbWUgPj0gY3VycmVudERhdGUudmFsdWVPZigpICYmIGN1cnJlbnRTdGVwLnRpbWUgPCBmaW5hbERhdGUudmFsdWVPZigpKSB7XG4gICAgICAgICAgICBtb250aFdpZHRoICs9IGN1cnJlbnRTdGVwLndpZHRoLnB4O1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGVwLm9mZnNldC5weCA8IG1vbnRoT2Zmc2V0KSB7XG4gICAgICAgICAgICAgIG1vbnRoT2Zmc2V0ID0gY3VycmVudFN0ZXAub2Zmc2V0LnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgICAgbGV0IGNob29zZW5Gb3JtYXROYW1lO1xuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIG9mIGZvcm1hdE5hbWVzKSB7XG4gICAgICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLm1heFdpZHRoc1tmb3JtYXROYW1lXSArIDIgPD0gbW9udGhXaWR0aCkge1xuICAgICAgICAgICAgbGFiZWwgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXRbZm9ybWF0TmFtZV0oY3VycmVudERhdGUubG9jYWxlKGxvY2FsZU5hbWUpKTtcbiAgICAgICAgICAgIGNob29zZW5Gb3JtYXROYW1lID0gZm9ybWF0TmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRleHRXaWR0aCA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzW21vbnRoSW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRleHRXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLndpZHRoc1ttb250aEluZGV4XVtjaG9vc2VuRm9ybWF0TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHggPSBtb250aE9mZnNldDtcbiAgICAgICAgbW9udGhzLnB1c2goe1xuICAgICAgICAgIGluZGV4OiBtb250aEluZGV4LFxuICAgICAgICAgIGtleTogbW9udGhJbmRleCArICdtJyxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IG1vbnRoV2lkdGgsXG4gICAgICAgICAgdGV4dFdpZHRoLFxuICAgICAgICAgIGNob29zZW5Gb3JtYXROYW1lLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpO1xuICAgICAgICBpZiAoY3VycmVudERhdGUudmFsdWVPZigpID4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpIHtcbiAgICAgICAgICBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1vbnRocy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxuICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN1bSBhbGwgY2FsZW5kYXIgcm93cyBoZWlnaHQgYW5kIHJldHVybiByZXN1bHRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtpbnR9XG4gICAgICovXG4gICAgY2FsY3VsYXRlQ2FsZW5kYXJEaW1lbnNpb25zKHsgaG91cnMsIGRheXMsIG1vbnRocyB9KSB7XG4gICAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXkgJiYgaG91cnMubGVuZ3RoID4gMCkge1xuICAgICAgICBoZWlnaHQgKz0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmRpc3BsYXkgJiYgZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGhlaWdodCArPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmRpc3BsYXkgJiYgbW9udGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCA9IGhlaWdodCArICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zdGFnZXMubGVuZ3RoID8gMTYgOiAwKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBkYXRlcygpIHtcbiAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdlbmVyYXRlRGF5cygpO1xuICAgICAgY29uc3QgbW9udGhzID0gdGhpcy5nZW5lcmF0ZU1vbnRocygpO1xuICAgICAgY29uc3QgYWxsRGF0ZXMgPSB7IGRheXMsIG1vbnRocyB9O1xuICAgICAgdGhpcy5jYWxjdWxhdGVDYWxlbmRhckRpbWVuc2lvbnMoYWxsRGF0ZXMpO1xuICAgICAgcmV0dXJuIGFsbERhdGVzO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENhbGVuZGFyUm93IGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdyBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctLScgKyB3aGljaFwiIDpzdHlsZT1cInJvd1N0eWxlXCI+XG4gICAgPGRpdlxuICAgICAgdi1mb3I9XCIoaXRlbSwgaXRlbUluZGV4KSBpbiBpdGVtc1wiXG4gICAgICA6a2V5PVwiaXRlbS5rZXlcIlxuICAgICAgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LS0nICsgd2hpY2hcIlxuICAgICAgOnN0eWxlPVwicmVjdFN0eWxlXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0tJyArIHdoaWNoXCJcbiAgICAgICAgdi1mb3I9XCIoY2hpbGQsIGNoaWxkSW5kZXgpIGluIGl0ZW0uY2hpbGRyZW5cIlxuICAgICAgICA6a2V5PVwiY2hpbGQua2V5XCJcbiAgICAgICAgOnN0eWxlPVwicmVjdENoaWxkU3R5bGVbaXRlbUluZGV4XVtjaGlsZEluZGV4XVwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICA6Y2xhc3M9XCInZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXRleHQgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXRleHQtLScgKyB3aGljaFwiXG4gICAgICAgICAgOnN0eWxlPVwidGV4dFN0eWxlKGNoaWxkKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBjaGlsZC5sYWJlbCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDYWxlbmRhclJvdycsXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ2l0ZW1zJywgJ3doaWNoJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHggcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VGV4dFgoaXRlbSkge1xuICAgICAgbGV0IHggPSBpdGVtLnggKyBpdGVtLndpZHRoIC8gMiAtIGl0ZW0udGV4dFdpZHRoIC8gMjtcbiAgICAgIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnICYmIHRoaXMucm9vdC5pc0luc2lkZVZpZXdQb3J0KGl0ZW0ueCwgaXRlbS53aWR0aCwgMCkpIHtcbiAgICAgICAgbGV0IHNjcm9sbFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnJpZ2h0IC0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQ7XG4gICAgICAgIHggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCArIHNjcm9sbFdpZHRoIC8gMiAtIGl0ZW0udGV4dFdpZHRoIC8gMiArIDI7XG4gICAgICAgIGlmICh4ICsgaXRlbS50ZXh0V2lkdGggKyAyID4gaXRlbS54ICsgaXRlbS53aWR0aCkge1xuICAgICAgICAgIHggPSBpdGVtLnggKyBpdGVtLndpZHRoIC0gaXRlbS50ZXh0V2lkdGggLSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHggPCBpdGVtLngpIHtcbiAgICAgICAgICB4ID0gaXRlbS54ICsgMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHggLSBpdGVtLng7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHJvd1N0eWxlKCkge1xuICAgICAgcmV0dXJuIHsgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3cnXSwgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctLScgKyB0aGlzLndoaWNoXSB9O1xuICAgIH0sXG4gICAgcmVjdFN0eWxlKCkge1xuICAgICAgcmV0dXJuIHsgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdCddLCAuLi50aGlzLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy1yZWN0LS0nICsgdGhpcy53aGljaF0gfTtcbiAgICB9LFxuICAgIHJlY3RDaGlsZFN0eWxlKCkge1xuICAgICAgY29uc3QgYmFzaWNTdHlsZSA9IHtcbiAgICAgICAgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdC1jaGlsZCddLFxuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkLS0nICsgdGhpcy53aGljaF1cbiAgICAgIH07XG4gICAgICBjb25zdCBzdHlsZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuU3R5bGUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkcmVuU3R5bGUucHVzaCh7XG4gICAgICAgICAgICAuLi5iYXNpY1N0eWxlLFxuICAgICAgICAgICAgd2lkdGg6IGNoaWxkLndpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDogY2hpbGQuaGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLnB1c2goY2hpbGRyZW5TdHlsZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgICB0ZXh0U3R5bGUoKSB7XG4gICAgICBjb25zdCBiYXNpY1N0eWxlID0ge1xuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy10ZXh0J10sXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLScgKyB0aGlzLndoaWNoXVxuICAgICAgfTtcbiAgICAgIHJldHVybiBjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyAuLi5iYXNpY1N0eWxlIH07XG4gICAgICAgIC8vIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnKSB7XG4gICAgICAgICAgLy8gc3R5bGUubGVmdCA9IHRoaXMuZ2V0VGV4dFgoY2hpbGQpICsgJ3B4JztcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoYXJ0IGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydFwiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQnXSB9XCIgcmVmPVwiY2hhcnRcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lclwiXG4gICAgICByZWY9XCJjaGFydENhbGVuZGFyQ29udGFpbmVyXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtY2FsZW5kYXItY29udGFpbmVyJ10sXG4gICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArICdweCcsXG4gICAgICAgICdtYXJnaW4tYm90dG9tJzogcm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcCArICdweCdcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxjYWxlbmRhcj48L2NhbGVuZGFyPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZ3JhcGgtY29udGFpbmVyXCJcbiAgICAgIHJlZj1cImNoYXJ0R3JhcGhDb250YWluZXJcIlxuICAgICAgOnN0eWxlPVwie1xuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1ncmFwaC1jb250YWluZXInXSxcbiAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArICdweCdcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWFyZWEnXSxcbiAgICAgICAgICB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ICsgJ3B4J1xuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZ3JhcGhcIlxuICAgICAgICAgIHJlZj1cImNoYXJ0R3JhcGhcIlxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZ3JhcGgnXSwgaGVpZ2h0OiAnMTAwJScgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLXN2Z1wiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWdyYXBoLXN2ZyddLCBiYWNrZ3JvdW5kOiAncmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUgMCwgd2hpdGUgMnB4LCB0cmFuc3BhcmVudCAycHgsIHRyYW5zcGFyZW50IDI4cHgsIHdoaXRlIDI4cHgsIHdoaXRlIDMwcHgpLHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSAwLCB3aGl0ZSAycHgsIHRyYW5zcGFyZW50IDJweCwgdHJhbnNwYXJlbnQgMjhweCwgd2hpdGUgMjhweCwgd2hpdGUgMzBweCkgI2Y3ZjdmNycgfVwiXG4gICAgICAgICAgICByZWY9XCJjaGFydEdyYXBoU3ZnXCJcbiAgICAgICAgICAgIHg9XCIwXCJcbiAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgIDp3aWR0aD1cInJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCdcIlxuICAgICAgICAgICAgOmhlaWdodD1cInJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgKyAncHgnXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkYXlzLWhpZ2hsaWdodD48L2RheXMtaGlnaGxpZ2h0PlxuICAgICAgICAgICAgPGdyaWQ+PC9ncmlkPlxuICAgICAgICAgICAgPCEtLSA8ZGVwZW5kZW5jeS1saW5lcyA6dGFza3M9XCJyb290LnZpc2libGVUYXNrc1wiPjwvZGVwZW5kZW5jeS1saW5lcz4gLS0+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy13cmFwcGVyXCJcbiAgICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctd3JhcHBlciddIH1cIlxuICAgICAgICAgICAgICB2LWZvcj1cInRhc2sgaW4gcm9vdC52aXNpYmxlVGFza3NcIlxuICAgICAgICAgICAgICA6dGFzaz1cInRhc2tcIlxuICAgICAgICAgICAgICA6a2V5PVwidGFzay5pZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxjb21wb25lbnQgOnRhc2s9XCJ0YXNrXCIgOmlzPVwidGFzay50eXBlXCI+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZC52dWUnO1xuaW1wb3J0IERheXNIaWdobGlnaHQgZnJvbSAnLi9EYXlzSGlnaGxpZ2h0LnZ1ZSc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vQ2FsZW5kYXIvQ2FsZW5kYXIudnVlJztcbmltcG9ydCBEZXBlbmRlbmN5TGluZXMgZnJvbSAnLi9EZXBlbmRlbmN5TGluZXMudnVlJztcbmltcG9ydCBUYXNrIGZyb20gJy4vUm93L1Rhc2sudnVlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL1Jvdy9Hcm91cC52dWUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ2hhcnQnLFxuICBjb21wb25lbnRzOiB7XG4gICAgR3JpZCxcbiAgICBEZXBlbmRlbmN5TGluZXMsXG4gICAgQ2FsZW5kYXIsXG4gICAgVGFzayxcbiAgICBHcm91cCxcbiAgICBEYXlzSGlnaGxpZ2h0XG4gIH0sXG4gIGluamVjdDogWydyb290J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdmluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICAvKipcbiAgICogTW91bnRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydCA9IHRoaXMuJHJlZnMuY2hhcnQ7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRDYWxlbmRhckNvbnRhaW5lciA9IHRoaXMuJHJlZnMuY2hhcnRDYWxlbmRhckNvbnRhaW5lcjtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydEdyYXBoQ29udGFpbmVyID0gdGhpcy4kcmVmcy5jaGFydEdyYXBoQ29udGFpbmVyO1xuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGggPSB0aGlzLiRyZWZzLmNoYXJ0R3JhcGg7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRHcmFwaFN2ZyA9IHRoaXMuJHJlZnMuY2hhcnRHcmFwaFN2ZztcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGJveFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRWaWV3Qm94KCkge1xuICAgICAgcmV0dXJuIGAwIDAgJHt0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aH0gJHt0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHR9YDtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBEYXlzIGhpZ2hsaWdodCBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuXG48dGVtcGxhdGU+XG4gIDxnXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIlxuICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZGF5cy1oaWdobGlnaHQtY29udGFpbmVyJ10gfVwiXG4gICAgdi1pZj1cInNob3dXb3JraW5nRGF5c1wiXG4gID5cbiAgICA8cmVjdFxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0XCJcbiAgICAgIHYtZm9yPVwiZGF5IGluIHdvcmtpbmdEYXlzXCJcbiAgICAgIDprZXk9XCJnZXRLZXkoZGF5KVwiXG4gICAgICA6eD1cImRheS5vZmZzZXQucHhcIlxuICAgICAgeT1cIjBcIlxuICAgICAgOndpZHRoPVwiZGF5LndpZHRoLnB4XCJcbiAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0J10gfVwiXG4gICAgPjwvcmVjdD5cbiAgPC9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEYXlzSGlnaGxpZ2h0JyxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBHZXQga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF5XG4gICAgICogQHJldHVybnMge3N0cmluZ30ga2V5IGlkZWludGlmaWVyIGZvciBsb29wXG4gICAgICovXG4gICAgZ2V0S2V5KGRheSkge1xuICAgICAgcmV0dXJuIGRheWpzKGRheS50aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHdvcmtpbmcgZGF5c1xuICAgICAqXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIHdvcmtpbmdEYXlzKCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmZpbHRlcihzdGVwID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLndvcmtpbmdEYXlzLmluZGV4T2YoZGF5anMoc3RlcC50aW1lKS5kYXkoKSkgPT09IC0xO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3cgd29ya2luZyBkYXlzP1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2x9XG4gICAgICovXG4gICAgc2hvd1dvcmtpbmdEYXlzKCkge1xuICAgICAgY29uc3QgY2FsZW5kYXIgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhcjtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGNhbGVuZGFyLndvcmtpbmdEYXlzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KGNhbGVuZGFyLndvcmtpbmdEYXlzKSAmJlxuICAgICAgICBjYWxlbmRhci53b3JraW5nRGF5cy5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBEZXBlbmRlbmN5TGluZXMgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPHN2Z1xuICAgIHg9XCIwXCJcbiAgICB5PVwiMFwiXG4gICAgd2lkdGg9XCIxMDAlXCJcbiAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtY29udGFpbmVyXCJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtY29udGFpbmVyJ10gfVwiXG4gID5cbiAgICA8ZyB2LWZvcj1cInRhc2sgaW4gZGVwZW5kZW5jeVRhc2tzXCIgOmtleT1cInRhc2suaWRcIiA6dGFzaz1cInRhc2tcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGgnXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoJ10gfVwiXG4gICAgICAgIHYtZm9yPVwiZGVwZW5kZW5jeUxpbmUgaW4gdGFzay5kZXBlbmRlbmN5TGluZXNcIlxuICAgICAgICA6a2V5PVwiZGVwZW5kZW5jeUxpbmUuaWRcIlxuICAgICAgICA6dGFzaz1cInRhc2tcIlxuICAgICAgICA6ZD1cImRlcGVuZGVuY3lMaW5lLnBvaW50c1wiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvZz5cbiAgPC9zdmc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGVwZW5kZW5jeUxpbmVzJyxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgcHJvcHM6IFsndGFza3MnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgcGF0aCBwb2ludHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBmcm9tVGFza0lkXG4gICAgICogQHBhcmFtIHthbnl9IHRvVGFza0lkXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRQb2ludHMoZnJvbVRhc2tJZCwgdG9UYXNrSWQpIHtcbiAgICAgIGNvbnN0IGZyb21UYXNrID0gdGhpcy5yb290LmdldFRhc2soZnJvbVRhc2tJZCk7XG4gICAgICBjb25zdCB0b1Rhc2sgPSB0aGlzLnJvb3QuZ2V0VGFzayh0b1Rhc2tJZCk7XG4gICAgICBpZiAoXG4gICAgICAgIGZyb21UYXNrID09PSBudWxsIHx8XG4gICAgICAgIHRvVGFzayA9PT0gbnVsbCB8fFxuICAgICAgICAhdGhpcy5yb290LmlzVGFza1Zpc2libGUodG9UYXNrKSB8fFxuICAgICAgICAhdGhpcy5yb290LmlzVGFza1Zpc2libGUoZnJvbVRhc2spXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFydFggPSBmcm9tVGFzay54ICsgZnJvbVRhc2sud2lkdGg7XG4gICAgICBjb25zdCBzdGFydFkgPSBmcm9tVGFzay55ICsgZnJvbVRhc2suaGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IHN0b3BYID0gdG9UYXNrLng7XG4gICAgICBjb25zdCBzdG9wWSA9IHRvVGFzay55ICsgdG9UYXNrLmhlaWdodCAvIDI7XG4gICAgICBjb25zdCBkaXN0YW5jZVggPSBzdG9wWCAtIHN0YXJ0WDtcbiAgICAgIGxldCBkaXN0YW5jZVk7XG4gICAgICBsZXQgeU11bHRpcGxpZXIgPSAxO1xuICAgICAgaWYgKHN0b3BZID49IHN0YXJ0WSkge1xuICAgICAgICBkaXN0YW5jZVkgPSBzdG9wWSAtIHN0YXJ0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3RhbmNlWSA9IHN0YXJ0WSAtIHN0b3BZO1xuICAgICAgICB5TXVsdGlwbGllciA9IC0xO1xuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gMTA7XG4gICAgICBjb25zdCByb3VuZG5lc3MgPSA0O1xuICAgICAgY29uc3QgaXNCZWZvcmUgPSBkaXN0YW5jZVggPD0gb2Zmc2V0ICsgcm91bmRuZXNzO1xuICAgICAgbGV0IHBvaW50cyA9IGBNICR7c3RhcnRYfSAke3N0YXJ0WX1cbiAgICAgICAgICBMICR7c3RhcnRYICsgb2Zmc2V0fSwke3N0YXJ0WX0gYDtcbiAgICAgIGlmIChpc0JlZm9yZSkge1xuICAgICAgICBwb2ludHMgKz0gYFEgJHtzdGFydFggKyBvZmZzZXQgKyByb3VuZG5lc3N9LCR7c3RhcnRZfSAke3N0YXJ0WCArIG9mZnNldCArIHJvdW5kbmVzc30sJHtzdGFydFkgK1xuICAgICAgICAgIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxuICAgICAgICAgICAgTCAke3N0YXJ0WCArIG9mZnNldCArIHJvdW5kbmVzc30sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMiAtIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxuICAgICAgICAgICAgUSAke3N0YXJ0WCArIG9mZnNldCArIHJvdW5kbmVzc30sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMn0gJHtzdGFydFggKyBvZmZzZXR9LCR7c3RhcnRZICtcbiAgICAgICAgICAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMn1cbiAgICAgICAgICAgIEwgJHtzdGFydFggLSBvZmZzZXQgKyBkaXN0YW5jZVh9LCR7c3RhcnRZICsgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDJ9XG4gICAgICAgICAgICBRICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYIC0gcm91bmRuZXNzfSwke3N0YXJ0WSArIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyfSAke3N0YXJ0WCAtXG4gICAgICAgICAgb2Zmc2V0ICtcbiAgICAgICAgICBkaXN0YW5jZVggLVxuICAgICAgICAgIHJvdW5kbmVzc30sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMiArIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxuICAgICAgICAgICAgTCAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWCAtIHJvdW5kbmVzc30sJHtzdG9wWSAtIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxuICAgICAgICAgICAgUSAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWCAtIHJvdW5kbmVzc30sJHtzdG9wWX0gJHtzdGFydFggLSBvZmZzZXQgKyBkaXN0YW5jZVh9LCR7c3RvcFl9XG4gICAgICAgICAgICBMICR7c3RvcFh9LCR7c3RvcFl9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvaW50cyArPSBgTCAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDIgLSByb3VuZG5lc3N9LCR7c3RhcnRZfVxuICAgICAgICAgICAgUSAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDJ9LCR7c3RhcnRZfSAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDJ9LCR7c3RhcnRZICsgcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XG4gICAgICAgICAgICBMICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMn0sJHtzdG9wWSAtIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxuICAgICAgICAgICAgUSAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDJ9LCR7c3RvcFl9ICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMiArIHJvdW5kbmVzc30sJHtzdG9wWX1cbiAgICAgICAgICAgIEwgJHtzdG9wWH0sJHtzdG9wWX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHRhc2tzIHdoaWNoIGFyZSBkZXBlbmRlbnQgb24gb3RoZXIgdGFza3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthcnJheX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmN5VGFza3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrc1xuICAgICAgICAuZmlsdGVyKHRhc2sgPT4gdHlwZW9mIHRhc2suZGVwZW5kZW50T24gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAubWFwKHRhc2sgPT4ge1xuICAgICAgICAgIHRhc2suZGVwZW5kZW5jeUxpbmVzID0gdGFzay5kZXBlbmRlbnRPbi5tYXAoaWQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgcG9pbnRzOiB0aGlzLmdldFBvaW50cyhpZCwgdGFzay5pZCkgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcih0YXNrID0+IHRhc2suZGVwZW5kZW5jeUxpbmVzLnBvaW50cyAhPT0gbnVsbCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgR3JpZCBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8c3ZnXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmVzLXdyYXBwZXJcIlxuICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnZ3JpZC1saW5lcy13cmFwcGVyJ10gfVwiXG4gICAgcmVmPVwiY2hhcnRcIlxuICAgIHg9XCIwXCJcbiAgICB5PVwiMFwiXG4gICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoXCJcbiAgICA6aGVpZ2h0PVwicm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8ZyBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXNcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZXMnXSB9XCI+XG4gICAgICA8bGluZVxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS10aW1lXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydncmlkLWxpbmUtdGltZSddIH1cIlxuICAgICAgICA6eDE9XCJ0aW1lTGluZVBvc2l0aW9uLnhcIlxuICAgICAgICA6eTE9XCJ0aW1lTGluZVBvc2l0aW9uLnkxXCJcbiAgICAgICAgOngyPVwidGltZUxpbmVQb3NpdGlvbi54XCJcbiAgICAgICAgOnkyPVwidGltZUxpbmVQb3NpdGlvbi55MlwiXG4gICAgICA+PC9saW5lPlxuICAgIDwvZz5cbiAgPC9zdmc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnR3JpZCcsXG4gIGluamVjdDogWydyb290J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICAvKipcbiAgICogQ3JlYXRlZFxuICAgKi9cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnJvb3QuJG9uKCdyZWNlbnRlclBvc2l0aW9uJywgdGhpcy5yZWNlbnRlclBvc2l0aW9uKTtcbiAgfSxcblxuICAvKipcbiAgICogTW91bnRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIC8vIGJlY2F1c2Ugb2Ygc3R1cGlkIHNsaWRlciA6L1xuICAgICAgICB0aGlzLnJvb3Quc2Nyb2xsVG9UaW1lKHRoaXMudGltZUxpbmVQb3NpdGlvbi50aW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBSZWNlbnRlciBwb3NpdGlvbiAtIGdvIHRvIGN1cnJlbnQgdGltZSBsaW5lXG4gICAgICovXG4gICAgcmVjZW50ZXJQb3NpdGlvbigpIHtcbiAgICAgIHRoaXMucm9vdC5zY3JvbGxUb1RpbWUodGhpcy50aW1lTGluZVBvc2l0aW9uLnRpbWUpO1xuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHZlcnRpY2FsIGxpbmVzIG9mIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgdmVydGljYWxMaW5lcygpIHtcbiAgICAgIGxldCBsaW5lcyA9IFtdO1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnJvb3Quc3RhdGU7XG4gICAgICBzdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QuaXNJbnNpZGVWaWV3UG9ydChzdGVwLm9mZnNldC5weCwgMSkpIHtcbiAgICAgICAgICBsaW5lcy5wdXNoKHtcbiAgICAgICAgICAgIGtleTogc3RlcC50aW1lLFxuICAgICAgICAgICAgeDE6IHN0ZXAub2Zmc2V0LnB4LFxuICAgICAgICAgICAgeTE6IDAsXG4gICAgICAgICAgICB4Mjogc3RlcC5vZmZzZXQucHgsXG4gICAgICAgICAgICB5MjpcbiAgICAgICAgICAgICAgc3RhdGUudGFza3MubGVuZ3RoICogKHN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArIHN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcbiAgICAgICAgICAgICAgdGhpcy5yb290LnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXVsnc3Ryb2tlLXdpZHRoJ11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbGluZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGhvcml6b250YWwgbGluZXMgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthcnJheX1cbiAgICAgKi9cbiAgICBob3Jpem9udGFsTGluZXMoKSB7XG4gICAgICBsZXQgbGluZXMgPSBbXTtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnM7XG4gICAgICBsZXQgdGFza3MgPSB0aGlzLnJvb3QudmlzaWJsZVRhc2tzO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSB0YXNrcy5sZW5ndGg7IGluZGV4IDw9IGxlbjsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCB5ID1cbiAgICAgICAgICBpbmRleCAqIChzdGF0ZS5yb3cuaGVpZ2h0ICsgc3RhdGUuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcbiAgICAgICAgICB0aGlzLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS12ZXJ0aWNhbCddWydzdHJva2Utd2lkdGgnXSAvIDI7XG4gICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgIGtleTogJ2hsJyArIGluZGV4LFxuICAgICAgICAgIHgxOiAwLFxuICAgICAgICAgIHkxOiB5LFxuICAgICAgICAgIHgyOiAnMTAwJScsXG4gICAgICAgICAgeTI6IHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHNwZWNpZmllZCBsaW5lIGlzIGluc2lkZSB2aWV3cG9ydCAodmlzaWJsZSlcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBpblZpZXdQb3J0KCkge1xuICAgICAgcmV0dXJuIGxpbmUgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zO1xuICAgICAgICByZXR1cm4gbGluZS54MSA+PSBzdGF0ZS5zY3JvbGwuY2hhcnQubGVmdCAmJiBsaW5lLngxIDw9IHN0YXRlLnNjcm9sbC5jaGFydC5yaWdodDtcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHRpbWUgbGluZSBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICB0aW1lTGluZVBvc2l0aW9uKCkge1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZC5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBjdXJyZW50T2Zmc2V0ID0gdGhpcy5yb290LnRpbWVUb1BpeGVsT2Zmc2V0WChjdXJyZW50KTtcbiAgICAgIGNvbnN0IHRpbWVMaW5lID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5MTogMCxcbiAgICAgICAgeTI6ICcxMDAlJyxcbiAgICAgICAgZGF0ZVRpbWU6ICcnLFxuICAgICAgICB0aW1lOiBjdXJyZW50XG4gICAgICB9O1xuICAgICAgdGltZUxpbmUueCA9IGN1cnJlbnRPZmZzZXQ7XG4gICAgICB0aW1lTGluZS5kYXRlVGltZSA9IGQudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICByZXR1cm4gdGltZUxpbmU7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgR3JvdXAgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGc+XG4gICAgPFRhc2tcbiAgICAgIHYtZm9yPVwic3VidGFzayBpbiBzdWJ0YXNrTGlzdFwiXG4gICAgICA6dGFzaz1cInN1YnRhc2tcIlxuICAgICAgOmtleT1cInN1YnRhc2suaWRcIj5cbiAgICA8L1Rhc2s+XG4gIDwvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgdGFza01peGluIGZyb20gJy4vVGFzay5taXhpbi5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2sudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0dyb3VwJyxcbiAgY29tcG9uZW50czogeyBUYXNrIH0sXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ3Rhc2snXSxcbiAgbWl4aW5zOiBbdGFza01peGluXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc3VidGFza0xpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrLnRhc2tzO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+IiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2sgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGdcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay13cmFwcGVyXCJcbiAgICA6c3R5bGU9XCJ7XG4gICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyLXdyYXBwZXInXSxcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrLXdyYXBwZXInXSxcbiAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddXG4gICAgfVwiXG4gID5cbiAgICA8c3ZnXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRhc2tcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyJ10sIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSB9XCJcbiAgICAgIDp4PVwidGFzay54XCJcbiAgICAgIDp5PVwidGFzay55XCJcbiAgICAgIDp3aWR0aD1cInRhc2sud2lkdGhcIlxuICAgICAgOmhlaWdodD1cInRhc2suaGVpZ2h0XCJcbiAgICAgIDp2aWV3Qm94PVwiYDAgMCAke3Rhc2sud2lkdGh9ICR7dGFzay5oZWlnaHR9YFwiXG4gICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxuICAgICAgQG1vdXNlb3Zlcj1cImVtaXRFdmVudCgnbW91c2VvdmVyJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXG4gICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZWRvd249XCJlbWl0RXZlbnQoJ21vdXNlZG93bicsICRldmVudClcIlxuICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2hzdGFydD1cImVtaXRFdmVudCgndG91Y2hzdGFydCcsICRldmVudClcIlxuICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cG9seWdvblxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItcG9seWdvbiBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay1wb2x5Z29uXCJcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddLFxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrLXBvbHlnb24nXSxcbiAgICAgICAgICAuLi50YXNrLnN0eWxlWydiYXNlJ10sXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ11cbiAgICAgICAgfVwiXG4gICAgICAgIDpwb2ludHM9XCJnZXRQb2ludHNcIlxuICAgICAgPjwvcG9seWdvbj5cbiAgICA8L3N2Zz5cbiAgPC9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB0YXNrTWl4aW4gZnJvbSAnLi9UYXNrLm1peGluLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Rhc2snLFxuICBjb21wb25lbnRzOiB7XG4gIH0sXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ3Rhc2snXSxcbiAgbWl4aW5zOiBbdGFza01peGluXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IGNsaXAgcGF0aCBpZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBjbGlwUGF0aElkKCkge1xuICAgICAgcmV0dXJuICdnYW50dC1lbGFzdGljX190YXNrLWNsaXAtcGF0aC0nICsgdGhpcy50YXNrLmlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgcG9pbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFBvaW50cygpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XG4gICAgICByZXR1cm4gYDIsMCAke3Rhc2sud2lkdGggLSAyfSwwICR7dGFzay53aWR0aCAtIDJ9LCR7dGFzay5oZWlnaHR9IDIsJHt0YXNrLmhlaWdodH1gO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEV4cGFuZGVyIGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctd3JhcHBlcidcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy13cmFwcGVyJ10sIC4uLnN0eWxlIH1cIj5cbiAgICA8c3ZnXG4gICAgICA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy1jb250ZW50J1wiXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy1jb250ZW50J10gfVwiXG4gICAgICA6d2lkdGg9XCJvcHRpb25zLnNpemVcIlxuICAgICAgOmhlaWdodD1cIm9wdGlvbnMuc2l6ZVwiXG4gICAgICB2LWlmPVwiYWxsQ2hpbGRyZW4ubGVuZ3RoXCJcbiAgICAgIEBjbGljaz1cInRvZ2dsZVwiXG4gICAgPlxuICAgICAgPHJlY3RcbiAgICAgICAgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctYm9yZGVyJ1wiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLWJvcmRlciddLCAuLi5ib3JkZXJTdHlsZSB9XCJcbiAgICAgICAgOng9XCJib3JkZXJcIlxuICAgICAgICA6eT1cImJvcmRlclwiXG4gICAgICAgIDp3aWR0aD1cIm9wdGlvbnMuc2l6ZSAtIGJvcmRlciAqIDJcIlxuICAgICAgICA6aGVpZ2h0PVwib3B0aW9ucy5zaXplIC0gYm9yZGVyICogMlwiXG4gICAgICAgIHJ4PVwiMlwiXG4gICAgICAgIHJ5PVwiMlwiXG4gICAgICA+PC9yZWN0PlxuICAgICAgPGxpbmVcbiAgICAgICAgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctbGluZSdcIlxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy1saW5lJ10gfVwiXG4gICAgICAgIHYtaWY9XCJhbGxDaGlsZHJlbi5sZW5ndGhcIlxuICAgICAgICA6eDE9XCJsaW5lT2Zmc2V0XCJcbiAgICAgICAgOnkxPVwib3B0aW9ucy5zaXplIC8gMlwiXG4gICAgICAgIDp4Mj1cIm9wdGlvbnMuc2l6ZSAtIGxpbmVPZmZzZXRcIlxuICAgICAgICA6eTI9XCJvcHRpb25zLnNpemUgLyAyXCJcbiAgICAgID48L2xpbmU+XG4gICAgICA8bGluZVxuICAgICAgICA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy1saW5lJ1wiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLWxpbmUnXSB9XCJcbiAgICAgICAgdi1pZj1cImNvbGxhcHNlZFwiXG4gICAgICAgIDp4MT1cIm9wdGlvbnMuc2l6ZSAvIDJcIlxuICAgICAgICA6eTE9XCJsaW5lT2Zmc2V0XCJcbiAgICAgICAgOngyPVwib3B0aW9ucy5zaXplIC8gMlwiXG4gICAgICAgIDp5Mj1cIm9wdGlvbnMuc2l6ZSAtIGxpbmVPZmZzZXRcIlxuICAgICAgPjwvbGluZT5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRXhwYW5kZXInLFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWyd0YXNrcycsICdvcHRpb25zJywgJ3R5cGUnLCAnY29sdW1uJywgJ3Rhc2snXSxcbiAgZGF0YSgpIHtcbiAgICBjb25zdCBib3JkZXIgPSAwLjU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvcmRlcixcbiAgICAgIGJvcmRlclN0eWxlOiB7XG4gICAgICAgICdzdHJva2Utd2lkdGgnOiBib3JkZXJcbiAgICAgIH0sXG4gICAgICBsaW5lT2Zmc2V0OiA1XG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzdHlsZSgpIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09ICd0YXNrTGlzdCcpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgICAgY29uc3QgbWFyZ2luID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXIubWFyZ2luO1xuICAgICAgY29uc3QgcGFkZGluZyA9IHRoaXMudGFza3NbMF0ucGFyZW50cy5sZW5ndGggKiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5wYWRkaW5nO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3BhZGRpbmctbGVmdCc6IHBhZGRpbmcgKyBtYXJnaW4gKyAncHgnLFxuICAgICAgICBtYXJnaW46ICdhdXRvIDAnXG4gICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCB0YXNrc1xuICAgICAqXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIGFsbENoaWxkcmVuKCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5hbGxDaGlsZHJlbi5mb3JFYWNoKGNoaWxkSWQgPT4ge1xuICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGRJZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBJcyBjdXJyZW50IGV4cGFuZGVyIGNvbGxhcHNlZD9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbGxhcHNlZCgpIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgY29sbGFwc2VkID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnRhc2tzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmNvbGxhcHNlZCkge1xuICAgICAgICAgIGNvbGxhcHNlZCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29sbGFwc2VkID09PSB0aGlzLnRhc2tzLmxlbmd0aDtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgc3BlY2lmaWMgY2xhc3MgcHJlZml4XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldENsYXNzUHJlZml4KGZ1bGwgPSB0cnVlKSB7XG4gICAgICByZXR1cm4gYCR7ZnVsbCA/ICdnYW50dC1lbGFzdGljX18nIDogJyd9JHt0aGlzLm9wdGlvbnMudHlwZX0tZXhwYW5kZXJgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGV4cGFuZGVyXG4gICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdEV2ZW50KCdjb2xsYXBzZScsIHsgY29sbGFwc2VkIH0pXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBFbWl0IGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0RXZlbnQoZXZlbnROYW1lLCBldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi5ldmVudHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmNvbHVtbi5ldmVudHNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmNvbHVtbi5ldmVudHNbZXZlbnROYW1lXSh7IGV2ZW50LCBkYXRhOiB0aGlzLnRhc2sgfHwgdGhpcy50YXNrcywgY29sdW1uOiB0aGlzLmNvbHVtbiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBNYWluVmlldyBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3XCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydtYWluLXZpZXcnXSB9XCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19tYWluLWNvbnRhaW5lci13cmFwcGVyXCJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnbWFpbi1jb250YWluZXItd3JhcHBlciddLCBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgKyAncHgnIH1cIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19tYWluLWNvbnRhaW5lclwiXG4gICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydtYWluLWNvbnRhaW5lciddLFxuICAgICAgICAgIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCArICdweCdcbiAgICAgICAgfVwiXG4gICAgICAgIHJlZj1cIm1haW5WaWV3XCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY29udGFpbmVyXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NvbnRhaW5lciddIH1cIlxuICAgICAgICAgIEBtb3VzZW1vdmU9XCJtb3VzZU1vdmVcIlxuICAgICAgICAgIEBtb3VzZXVwPVwibW91c2VVcFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9XCJ0YXNrTGlzdFwiXG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1jb250YWluZXJcIlxuICAgICAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgICAgICAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZmluYWxXaWR0aCArICdweCcsXG4gICAgICAgICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCArICdweCdcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgdi1zaG93PVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0YXNrLWxpc3Q+PC90YXNrLWxpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19tYWluLXZpZXctY29udGFpbmVyXCJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnbWFpbi12aWV3LWNvbnRhaW5lciddIH1cIlxuICAgICAgICAgICAgcmVmPVwiY2hhcnRDb250YWluZXJcIlxuICAgICAgICAgICAgQG1vdXNlZG93bj1cImNoYXJ0TW91c2VEb3duXCJcbiAgICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiY2hhcnRNb3VzZURvd25cIlxuICAgICAgICAgICAgQG1vdXNldXA9XCJjaGFydE1vdXNlVXBcIlxuICAgICAgICAgICAgQHRvdWNoZW5kPVwiY2hhcnRNb3VzZVVwXCJcbiAgICAgICAgICAgIEBtb3VzZW1vdmUucHJldmVudD1cImNoYXJ0TW91c2VNb3ZlXCJcbiAgICAgICAgICAgIEB0b3VjaG1vdmUucHJldmVudD1cImNoYXJ0TW91c2VNb3ZlXCJcbiAgICAgICAgICAgIEB3aGVlbC5wcmV2ZW50PVwiY2hhcnRXaGVlbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNoYXJ0PjwvY2hhcnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciBnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbFwiXG4gICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1zY3JvbGwtY29udGFpbmVyJ10sXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWwnXSxcbiAgICAgICAgICAuLi52ZXJ0aWNhbFN0eWxlXG4gICAgICAgIH1cIlxuICAgICAgICByZWY9XCJjaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsXCJcbiAgICAgICAgQHNjcm9sbD1cIm9uVmVydGljYWxTY3JvbGxcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLXZlcnRpY2FsXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiAnMXB4JywgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0ICsgJ3B4JyB9XCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXItLWhvcml6b250YWxcIlxuICAgICAgOnN0eWxlPVwie1xuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1zY3JvbGwtY29udGFpbmVyJ10sXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXNjcm9sbC1jb250YWluZXItLWhvcml6b250YWwnXSxcbiAgICAgICAgbWFyZ2luTGVmdDogZ2V0TWFyZ2luTGVmdFxuICAgICAgfVwiXG4gICAgICBAc2Nyb2xsPVwib25Ib3Jpem9udGFsU2Nyb2xsXCJcbiAgICAgIHJlZj1cImNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC0taG9yaXpvbnRhbFwiXG4gICAgICAgIDpzdHlsZT1cInsgaGVpZ2h0OiAnMXB4Jywgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCcgfVwiXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUYXNrTGlzdCBmcm9tICcuL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZSc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9DaGFydC9DaGFydC52dWUnO1xuXG5sZXQgaWdub3JlU2Nyb2xsRXZlbnRzID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01haW5WaWV3JyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0LFxuICAgIENoYXJ0XG4gIH0sXG4gIGluamVjdDogWydyb290J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZnM6ICcnLFxuICAgICAgbW91c2VQb3M6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgbW92ZW1lbnRYOiAwLFxuICAgICAgICBtb3ZlbWVudFk6IDAsXG4gICAgICAgIGxhc3RYOiAwLFxuICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgcG9zaXRpdmVYOiAwLFxuICAgICAgICBwb3NpdGl2ZVk6IDAsXG4gICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICBjdXJyZW50WTogMFxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIC8qKlxuICAgKiBNb3VudGVkXG4gICAqL1xuICBtb3VudGVkKCkge1xuICAgIHRoaXMudmlld0JveFdpZHRoID0gdGhpcy4kZWwuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMubWFpblZpZXcgPSB0aGlzLiRyZWZzLm1haW5WaWV3O1xuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0Q29udGFpbmVyID0gdGhpcy4kcmVmcy5jaGFydENvbnRhaW5lcjtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdCA9IHRoaXMuJHJlZnMudGFza0xpc3Q7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWw7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbDtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5jaGFydE1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5jaGFydE1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmNoYXJ0TW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5jaGFydE1vdXNlVXAuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IG1hcmdpbiBsZWZ0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldE1hcmdpbkxlZnQoKSB7XG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuICcwcHgnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggKyAncHgnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmVydGljYWwgc3R5bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgdmVydGljYWxTdHlsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgKyAncHgnLFxuICAgICAgICAnbWFyZ2luLXRvcCc6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcCArICdweCdcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGJveFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRWaWV3Qm94KCkge1xuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoKSB7XG4gICAgICAgIHJldHVybiBgMCAwICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggLSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHR9ICR7XG4gICAgICAgICAgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgIH1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAwIDAgMCAke3RoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodH1gO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEVtaXQgZXZlbnQgd2hlbiBtb3VzZSBpcyBtb3ZpbmcgaW5zaWRlIG1haW4gdmlld1xuICAgICAqL1xuICAgIG1vdXNlTW92ZShldmVudCkge1xuICAgICAgdGhpcy5yb290LiRlbWl0KCdtYWluLXZpZXctbW91c2Vtb3ZlJywgZXZlbnQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbWl0IG1vdXNldXAgZXZlbnQgaW5zaWRlIG1haW4gdmlld1xuICAgICAqL1xuICAgIG1vdXNlVXAoZXZlbnQpIHtcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnbWFpbi12aWV3LW1vdXNldXAnLCBldmVudCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhvcml6b250YWwgc2Nyb2xsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkhvcml6b250YWxTY3JvbGwoZXYpIHtcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnY2hhcnQtc2Nyb2xsLWhvcml6b250YWwnLCBldik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIHNjcm9sbCBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25WZXJ0aWNhbFNjcm9sbChldikge1xuICAgICAgdGhpcy5yb290LiRlbWl0KCdjaGFydC1zY3JvbGwtdmVydGljYWwnLCBldik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vdXNlIHdoZWVsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBjaGFydFdoZWVsKGV2KSB7XG4gICAgICB0aGlzLnJvb3QuJGVtaXQoJ2NoYXJ0LXdoZWVsJywgZXYpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFydCBtb3VzZWRvd24gZXZlbnQgaGFuZGxlclxuICAgICAqIEluaXRpYXRlcyBkcmFnIHNjcm9sbGluZyBtb2RlXG4gICAgICovXG4gICAgY2hhcnRNb3VzZURvd24oZXYpIHtcbiAgICAgIGlmICh0eXBlb2YgZXYudG91Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gdGhpcy5tb3VzZVBvcy5sYXN0WCA9IGV2LnRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gdGhpcy5tb3VzZVBvcy5sYXN0WSA9IGV2LnRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy5tb3ZlbWVudFggPSAwO1xuICAgICAgICB0aGlzLm1vdXNlUG9zLm1vdmVtZW50WSA9IDA7XG4gICAgICAgIHRoaXMubW91c2VQb3MuY3VycmVudFggPSB0aGlzLiRyZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5zY3JvbGxMZWZ0O1xuICAgICAgICB0aGlzLm1vdXNlUG9zLmN1cnJlbnRZID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFydCBtb3VzZXVwIGV2ZW50IGhhbmRsZXJcbiAgICAgKiBEZWFjdGl2YXRlcyBkcmFnIHNjcm9sbGluZyBtb2RlXG4gICAgICovXG4gICAgY2hhcnRNb3VzZVVwKGV2KSB7XG4gICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYXJ0IG1vdXNlbW92ZSBldmVudCBoYW5kbGVyXG4gICAgICogV2hlbiBpbiBkcmFnIHNjcm9sbGluZyBtb2RlIHRoaXMgbWV0aG9kIGNhbGN1bGF0ZSBzY3JvbGwgbW92ZW1lbnRcbiAgICAgKi9cbiAgICBjaGFydE1vdXNlTW92ZShldikge1xuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5zY3JvbGxpbmcpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0b3VjaCA9IHR5cGVvZiBldi50b3VjaGVzICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgbGV0IG1vdmVtZW50WCwgbW92ZW1lbnRZO1xuICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICBjb25zdCBzY3JlZW5YID0gZXYudG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgIGNvbnN0IHNjcmVlblkgPSBldi50b3VjaGVzWzBdLnNjcmVlblk7XG4gICAgICAgICAgbW92ZW1lbnRYID0gdGhpcy5tb3VzZVBvcy54IC0gc2NyZWVuWDtcbiAgICAgICAgICBtb3ZlbWVudFkgPSB0aGlzLm1vdXNlUG9zLnkgLSBzY3JlZW5ZO1xuICAgICAgICAgIHRoaXMubW91c2VQb3MubGFzdFggPSBzY3JlZW5YO1xuICAgICAgICAgIHRoaXMubW91c2VQb3MubGFzdFkgPSBzY3JlZW5ZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVtZW50WCA9IGV2Lm1vdmVtZW50WDtcbiAgICAgICAgICBtb3ZlbWVudFkgPSBldi5tb3ZlbWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbDtcbiAgICAgICAgbGV0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICB4ID0gdGhpcy5tb3VzZVBvcy5jdXJyZW50WCArIG1vdmVtZW50WCAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5kcmFnWE1vdmVNdWx0aXBsaWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHggPSBob3Jpem9udGFsLnNjcm9sbExlZnQgLSBtb3ZlbWVudFggKiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuZHJhZ1hNb3ZlTXVsdGlwbGllcjtcbiAgICAgICAgfVxuICAgICAgICBob3Jpem9udGFsLnNjcm9sbExlZnQgPSB4O1xuICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICB5ID0gdGhpcy5tb3VzZVBvcy5jdXJyZW50WSArIG1vdmVtZW50WSAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5kcmFnWU1vdmVNdWx0aXBsaWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB2ZXJ0aWNhbC5zY3JvbGxUb3AgLSBtb3ZlbWVudFkgKiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuZHJhZ1lNb3ZlTXVsdGlwbGllcjtcbiAgICAgICAgfVxuICAgICAgICB2ZXJ0aWNhbC5zY3JvbGxUb3AgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQmVmb3JlIGRlc3Ryb3kgZXZlbnQgLSBjbGVhbiB1cFxuICAgKi9cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5jaGFydE1vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5jaGFydE1vdXNlVXApO1xuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgSXRlbUNvbHVtbiBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tY29sdW1uXCIgOnN0eWxlPVwiaXRlbUNvbHVtblN0eWxlXCI+XG4gICAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXJcIiA6c3R5bGU9XCJ3cmFwcGVyU3R5bGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXJcIiA6c3R5bGU9XCJjb250YWluZXJTdHlsZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cIiFodG1sXCJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCJcbiAgICAgICAgICA6c3R5bGU9XCJ2YWx1ZVN0eWxlXCJcbiAgICAgICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxuICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgdmFsdWUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCJcbiAgICAgICAgICA6c3R5bGU9XCJ2YWx1ZVN0eWxlXCJcbiAgICAgICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxuICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxuICAgICAgICAgIHYtaHRtbD1cInZhbHVlXCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0l0ZW1Db2x1bW4nLFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWydjb2x1bW4nLCAndGFzayddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEVtaXQgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGVtaXRFdmVudChldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uLmV2ZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuY29sdW1uLmV2ZW50c1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuY29sdW1uLmV2ZW50c1tldmVudE5hbWVdKHsgZXZlbnQsIGRhdGE6IHRoaXMudGFzaywgY29sdW1uOiB0aGlzLmNvbHVtbiB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm9vdC4kZW1pdChgdGFza0xpc3QtJHt0aGlzLnRhc2sudHlwZX0tJHtldmVudE5hbWV9YCwgeyBldmVudCwgZGF0YTogdGhpcy50YXNrLCBjb2x1bW46IHRoaXMuY29sdW1uIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBodG1sIG9yIGp1c3QgdGV4dD9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGh0bWwoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uLmh0bWwgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuY29sdW1uLmh0bWwgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjb2x1bW4gdmFsdWVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthbnl8c3RyaW5nfVxuICAgICAqL1xuICAgIHZhbHVlKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4udmFsdWUodGhpcy50YXNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRhc2tbdGhpcy5jb2x1bW4udmFsdWVdO1xuICAgIH0sXG5cbiAgICBpdGVtQ29sdW1uU3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLWNvbHVtbiddLFxuICAgICAgICAuLi50aGlzLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tY29sdW1uJ10sXG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbHVtbi5maW5hbFdpZHRoICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbHVtbi5oZWlnaHQgKyAncHgnXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB3cmFwcGVyU3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXInXSxcbiAgICAgICAgLi4udGhpcy5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXInXVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29udGFpbmVyU3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciddLFxuICAgICAgICAuLi50aGlzLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyJ11cbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZhbHVlU3R5bGUoKSB7XG4gICAgICByZXR1cm4geyAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlJ10sIC4uLnRoaXMuY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZSddIH07XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGFza0xpc3QgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LXdyYXBwZXJcIlxuICAgIHJlZj1cInRhc2tMaXN0V3JhcHBlclwiXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3Qtd3JhcHBlciddLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9XCJcbiAgICB2LXNob3c9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0XCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QnXSB9XCIgcmVmPVwidGFza0xpc3RcIj5cbiAgICAgIDx0YXNrLWxpc3QtaGVhZGVyPjwvdGFzay1saXN0LWhlYWRlcj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbXNcIlxuICAgICAgICByZWY9XCJ0YXNrTGlzdEl0ZW1zXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbXMnXSwgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArICdweCcgfVwiXG4gICAgICA+XG4gICAgICAgIDx0YXNrLWxpc3QtaXRlbSB2LWZvcj1cInRhc2sgaW4gcm9vdC52aXNpYmxlVGFza3NcIiA6a2V5PVwidGFzay5pZFwiIDp0YXNrPVwidGFza1wiPjwvdGFzay1saXN0LWl0ZW0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRhc2tMaXN0SGVhZGVyIGZyb20gJy4vVGFza0xpc3RIZWFkZXIudnVlJztcbmltcG9ydCBUYXNrTGlzdEl0ZW0gZnJvbSAnLi9UYXNrTGlzdEl0ZW0udnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Rhc2tMaXN0JyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0SGVhZGVyLFxuICAgIFRhc2tMaXN0SXRlbVxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICAvKipcbiAgICogTW91bnRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdFdyYXBwZXIgPSB0aGlzLiRyZWZzLnRhc2tMaXN0V3JhcHBlcjtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdCA9IHRoaXMuJHJlZnMudGFza0xpc3Q7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcyA9IHRoaXMuJHJlZnMudGFza0xpc3RJdGVtcztcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2tMaXN0SGVhZGVyIGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXJcIlxuICAgIDpzdHlsZT1cIntcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXInXSxcbiAgICAgIGhlaWdodDogYCR7cm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodH1weGAsXG4gICAgICAnbWFyZ2luLWJvdHRvbSc6IGAke3Jvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXB9cHhgXG4gICAgfVwiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1jb2x1bW4nXSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLWNvbHVtbiddLFxuICAgICAgICAuLi5nZXRTdHlsZShjb2x1bW4pXG4gICAgICB9XCJcbiAgICAgIHYtZm9yPVwiY29sdW1uIGluIHJvb3QuZ2V0VGFza0xpc3RDb2x1bW5zXCJcbiAgICAgIDprZXk9XCJjb2x1bW4uX2lkXCJcbiAgICA+XG4gICAgICA8dGFzay1saXN0LWV4cGFuZGVyXG4gICAgICAgIHYtaWY9XCJjb2x1bW4uZXhwYW5kZXJcIlxuICAgICAgICA6Y29sdW1uPVwiY29sdW1uXCJcbiAgICAgICAgOnRhc2tzPVwiY29sbGFwc2libGVcIlxuICAgICAgICA6b3B0aW9ucz1cInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlclwiXG4gICAgICA+PC90YXNrLWxpc3QtZXhwYW5kZXI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1sYWJlbFwiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1sYWJlbCddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItbGFiZWwnXSB9XCJcbiAgICAgICAgOmNvbHVtbj1cImNvbHVtblwiXG4gICAgICAgIEBtb3VzZXVwPVwicmVzaXplck1vdXNlVXBcIlxuICAgICAgPlxuICAgICAgICB7eyBjb2x1bW4ubGFiZWwgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyXCJcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyJ10sXG4gICAgICAgICAgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlciddXG4gICAgICAgIH1cIlxuICAgICAgICA6Y29sdW1uPVwiY29sdW1uXCJcbiAgICAgICAgQG1vdXNlZG93bj1cInJlc2l6ZXJNb3VzZURvd24oJGV2ZW50LCBjb2x1bW4pXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplciddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplciddIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3QnXSB9XCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3QnXSB9XCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3QnXSB9XCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUYXNrTGlzdEV4cGFuZGVyIGZyb20gJy4uL0V4cGFuZGVyLnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdUYXNrTGlzdEhlYWRlcicsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUYXNrTGlzdEV4cGFuZGVyXG4gIH0sXG5cbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXNpemVyOiB7XG4gICAgICAgIG1vdmluZzogZmFsc2UsXG4gICAgICAgIHg6IDBcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogSXMgdGhpcyByb3cgY29sbGFwc2libGU/XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbH1cbiAgICAgKi9cbiAgICBjb2xsYXBzaWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5hbGxDaGlsZHJlbi5sZW5ndGggPiAwKTtcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEdldCBzdHlsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXRTdHlsZShjb2x1bW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBjb2x1bW4uZmluYWxXaWR0aCArICdweCdcbiAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXNpemVyIG1vdXNlIGRvd24gZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHJlc2l6ZXJNb3VzZURvd24oZXZlbnQsIGNvbHVtbikge1xuICAgICAgaWYgKCF0aGlzLnJlc2l6ZXIubW92aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXplci5tb3ZpbmcgPSBjb2x1bW47XG4gICAgICAgIHRoaXMucmVzaXplci54ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgdGhpcy5yZXNpemVyLmluaXRpYWxXaWR0aCA9IGNvbHVtbi53aWR0aDtcbiAgICAgICAgdGhpcy5yb290LiRlbWl0KCd0YXNrTGlzdC1jb2x1bW4td2lkdGgtY2hhbmdlLXN0YXJ0JywgdGhpcy5yZXNpemVyLm1vdmluZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZXIgbW91c2UgbW92ZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgcmVzaXplck1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKHRoaXMucmVzaXplci5tb3ZpbmcpIHtcbiAgICAgICAgY29uc3QgbGFzdFdpZHRoID0gdGhpcy5yZXNpemVyLm1vdmluZy53aWR0aDtcbiAgICAgICAgdGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCA9IHRoaXMucmVzaXplci5pbml0aWFsV2lkdGggKyBldmVudC5jbGllbnRYIC0gdGhpcy5yZXNpemVyLng7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZXIubW92aW5nLndpZHRoIDwgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QubWluV2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnJlc2l6ZXIubW92aW5nLndpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QubWluV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RXaWR0aCAhPT0gdGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCkge1xuICAgICAgICAgIHRoaXMucm9vdC4kZW1pdCgndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZScsIHRoaXMucmVzaXplci5tb3ZpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZXIgbW91c2UgdXAgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHJlc2l6ZXJNb3VzZVVwKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5yZXNpemVyLm1vdmluZykge1xuICAgICAgICB0aGlzLnJvb3QuJGVtaXQoJ3Rhc2tMaXN0LWNvbHVtbi13aWR0aC1jaGFuZ2Utc3RvcCcsIHRoaXMucmVzaXplci5tb3ZpbmcpO1xuICAgICAgICB0aGlzLnJlc2l6ZXIubW92aW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGVkXG4gICAqL1xuICBjcmVhdGVkKCkge1xuICAgIHRoaXMubW91c2VVcExpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMucmVzaXplck1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lciA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMucmVzaXplck1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJvb3QuJG9uKCdtYWluLXZpZXctbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVyTW91c2VNb3ZlKTtcbiAgICB0aGlzLnJvb3QuJG9uKCdtYWluLXZpZXctbW91c2V1cCcsIHRoaXMucmVzaXplck1vdXNlVXApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCZWZvcmUgZGVzdHJveSBldmVudCAtIGNsZWFyIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgICovXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMucmVzaXplck1vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMucmVzaXplck1vdXNlTW92ZSk7XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBUYXNrTGlzdEl0ZW0gY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtXCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbSddIH1cIj5cbiAgICA8aXRlbS1jb2x1bW4gdi1mb3I9XCJjb2x1bW4gaW4gY29sdW1uc1wiIDprZXk9XCJjb2x1bW4uX2lkXCIgOmNvbHVtbj1cImNvbHVtblwiIDp0YXNrPVwidGFza1wiPlxuICAgICAgPHRhc2stbGlzdC1leHBhbmRlclxuICAgICAgICB2LWlmPVwiY29sdW1uLmV4cGFuZGVyXCJcbiAgICAgICAgOmNvbHVtbj1cImNvbHVtblwiXG4gICAgICAgIDp0YXNrcz1cIlt0YXNrXVwiXG4gICAgICAgIDp0YXNrPVwidGFza1wiXG4gICAgICAgIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyXCJcbiAgICAgICAgdHlwZT1cInRhc2tMaXN0XCJcbiAgICAgID48L3Rhc2stbGlzdC1leHBhbmRlcj5cbiAgICA8L2l0ZW0tY29sdW1uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFRhc2tMaXN0RXhwYW5kZXIgZnJvbSAnLi4vRXhwYW5kZXIudnVlJztcbmltcG9ydCBJdGVtQ29sdW1uIGZyb20gJy4vSXRlbUNvbHVtbi52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdUYXNrTGlzdEl0ZW0nLFxuICBjb21wb25lbnRzOiB7XG4gICAgVGFza0xpc3RFeHBhbmRlcixcbiAgICBJdGVtQ29sdW1uXG4gIH0sXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ3Rhc2snXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29sdW1ucygpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY1wiLCBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgIFtcbiAgICAgIF92bS5fdChcImhlYWRlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm1haW4tdmlld1wiLCB7IHJlZjogXCJtYWluVmlld1wiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImZvb3RlclwiKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXdyYXBwZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNhbGVuZGFyLXdyYXBwZXJcIl0sIHtcbiAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCJcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiY2FsZW5kYXJcIl0sIHtcbiAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgXCJweFwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZGlzcGxheVxuICAgICAgICAgICAgPyBfYyhcImNhbGVuZGFyLXJvd1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5kYXRlcy5tb250aHMsIHdoaWNoOiBcIm1vbnRoXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmRpc3BsYXlcbiAgICAgICAgICAgID8gX2MoXCJjYWxlbmRhci1yb3dcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZGF0ZXMuZGF5cywgd2hpY2g6IFwiZGF5XCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5kaXNwbGF5XG4gICAgICAgICAgICA/IF9jKFwiY2FsZW5kYXItcm93XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLmRhdGVzLmhvdXJzLCB3aGljaDogXCJob3VyXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJmbGV4XCIgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5yb290LnN0YXRlLm9wdGlvbnMuc3RhZ2VzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtb3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI4cHhcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpdGVtLmRheXMgKiAzMCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpICsgXCLvvIhcIiArIF92bS5fcyhpdGVtLmRheXMpICsgXCLlpKnvvIlcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3cgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LS1cIiArIF92bS53aGljaCxcbiAgICAgIHN0eWxlOiBfdm0ucm93U3R5bGVcbiAgICB9LFxuICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBpdGVtLmtleSxcbiAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXJlY3QgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXJlY3QtLVwiICtcbiAgICAgICAgICAgIF92bS53aGljaCxcbiAgICAgICAgICBzdHlsZTogX3ZtLnJlY3RTdHlsZVxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woaXRlbS5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQsIGNoaWxkSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGNoaWxkLmtleSxcbiAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0tXCIgK1xuICAgICAgICAgICAgICAgIF92bS53aGljaCxcbiAgICAgICAgICAgICAgc3R5bGU6IF92bS5yZWN0Q2hpbGRTdHlsZVtpdGVtSW5kZXhdW2NoaWxkSW5kZXhdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy10ZXh0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy10ZXh0LS1cIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS53aGljaCxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0udGV4dFN0eWxlKGNoaWxkKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoY2hpbGQubGFiZWwpICsgXCJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHJlZjogXCJjaGFydFwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnRcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0XCJdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY2hhcnRDYWxlbmRhckNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lclwiXSwge1xuICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIFwicHhcIixcbiAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcCArIFwicHhcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImNhbGVuZGFyXCIpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJjaGFydEdyYXBoQ29udGFpbmVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZ3JhcGgtY29udGFpbmVyXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZ3JhcGgtY29udGFpbmVyXCJdLCB7XG4gICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgK1xuICAgICAgICAgICAgICBcInB4XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1hcmVhXCJdLCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImNoYXJ0R3JhcGhcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1ncmFwaFwiXSwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2hhcnRHcmFwaFN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLXN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWdyYXBoLXN2Z1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlIDAsIHdoaXRlIDJweCwgdHJhbnNwYXJlbnQgMnB4LCB0cmFuc3BhcmVudCAyOHB4LCB3aGl0ZSAyOHB4LCB3aGl0ZSAzMHB4KSxyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgMCwgd2hpdGUgMnB4LCB0cmFuc3BhcmVudCAycHgsIHRyYW5zcGFyZW50IDI4cHgsIHdoaXRlIDI4cHgsIHdoaXRlIDMwcHgpICNmN2Y3ZjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXlzLWhpZ2hsaWdodFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZ3JpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucm9vdC52aXNpYmxlVGFza3MsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRhc2suaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctd3JhcHBlclwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyh0YXNrLnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhc2s6IHRhc2sgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uc2hvd1dvcmtpbmdEYXlzXG4gICAgPyBfYyhcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIl1cbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0ud29ya2luZ0RheXMsIGZ1bmN0aW9uKGRheSkge1xuICAgICAgICAgIHJldHVybiBfYyhcInJlY3RcIiwge1xuICAgICAgICAgICAga2V5OiBfdm0uZ2V0S2V5KGRheSksXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0XCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGF5cy1oaWdobGlnaHQtcmVjdFwiXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHg6IGRheS5vZmZzZXQucHgsXG4gICAgICAgICAgICAgIHk6IFwiMFwiLFxuICAgICAgICAgICAgICB3aWR0aDogZGF5LndpZHRoLnB4LFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtY29udGFpbmVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1jb250YWluZXJcIl1cbiAgICAgICksXG4gICAgICBhdHRyczogeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9XG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLmRlcGVuZGVuY3lUYXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyBrZXk6IHRhc2suaWQsIGF0dHJzOiB7IHRhc2s6IHRhc2sgfSB9LFxuICAgICAgICBfdm0uX2wodGFzay5kZXBlbmRlbmN5TGluZXMsIGZ1bmN0aW9uKGRlcGVuZGVuY3lMaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICBrZXk6IGRlcGVuZGVuY3lMaW5lLmlkLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCJdLFxuICAgICAgICAgICAgICB0YXNrLnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCJdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzaywgZDogZGVwZW5kZW5jeUxpbmUucG9pbnRzIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICByZWY6IFwiY2hhcnRcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXMtd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lcy13cmFwcGVyXCJdKSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHg6IFwiMFwiLFxuICAgICAgICB5OiBcIjBcIixcbiAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGgsXG4gICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXNcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmVzXCJdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS10aW1lXCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmUtdGltZVwiXSksXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB4MTogX3ZtLnRpbWVMaW5lUG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgeTE6IF92bS50aW1lTGluZVBvc2l0aW9uLnkxLFxuICAgICAgICAgICAgICB4MjogX3ZtLnRpbWVMaW5lUG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgeTI6IF92bS50aW1lTGluZVBvc2l0aW9uLnkyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJnXCIsXG4gICAgX3ZtLl9sKF92bS5zdWJ0YXNrTGlzdCwgZnVuY3Rpb24oc3VidGFzaykge1xuICAgICAgcmV0dXJuIF9jKFwiVGFza1wiLCB7IGtleTogc3VidGFzay5pZCwgYXR0cnM6IHsgdGFzazogc3VidGFzayB9IH0pXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRhc2std3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGFzay13cmFwcGVyXCJdLFxuICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXVxuICAgICAgKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwic3ZnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFza1wiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl0sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10YXNrXCJdLFxuICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyXCJdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogX3ZtLnRhc2sueCxcbiAgICAgICAgICAgIHk6IF92bS50YXNrLnksXG4gICAgICAgICAgICB3aWR0aDogX3ZtLnRhc2sud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IF92bS50YXNrLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIFwiICsgX3ZtLnRhc2sud2lkdGggKyBcIiBcIiArIF92bS50YXNrLmhlaWdodCxcbiAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwiY2xpY2tcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZW50ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdmVyXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdXRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vtb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZG93blwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2V1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V1cFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2V3aGVlbDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V3aGVlbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hzdGFydFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaG1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaGVuZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwb2x5Z29uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItcG9seWdvbiBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay1wb2x5Z29uXCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhci1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10YXNrLXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiYmFzZVwiXSxcbiAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhdHRyczogeyBwb2ludHM6IF92bS5nZXRQb2ludHMgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IF92bS5nZXRDbGFzc1ByZWZpeCgpICsgXCItd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtfdm0uZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgXCItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnN0eWxlXG4gICAgICApXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uYWxsQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1jb250ZW50XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW192bS5nZXRDbGFzc1ByZWZpeChmYWxzZSkgKyBcIi1jb250ZW50XCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBfdm0ub3B0aW9ucy5zaXplLCBoZWlnaHQ6IF92bS5vcHRpb25zLnNpemUgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1ib3JkZXJcIixcbiAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLWJvcmRlclwiXSxcbiAgICAgICAgICAgICAgICAgIF92bS5ib3JkZXJTdHlsZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHg6IF92bS5ib3JkZXIsXG4gICAgICAgICAgICAgICAgICB5OiBfdm0uYm9yZGVyLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IF92bS5vcHRpb25zLnNpemUgLSBfdm0uYm9yZGVyICogMixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLm9wdGlvbnMuc2l6ZSAtIF92bS5ib3JkZXIgKiAyLFxuICAgICAgICAgICAgICAgICAgcng6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgcnk6IFwiMlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmFsbENoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzc1ByZWZpeCgpICsgXCItbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtfdm0uZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgXCItbGluZVwiXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHgxOiBfdm0ubGluZU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICB5MTogX3ZtLm9wdGlvbnMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgeDI6IF92bS5vcHRpb25zLnNpemUgLSBfdm0ubGluZU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICB5MjogX3ZtLm9wdGlvbnMuc2l6ZSAvIDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY29sbGFwc2VkXG4gICAgICAgICAgICAgICAgPyBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW192bS5nZXRDbGFzc1ByZWZpeChmYWxzZSkgKyBcIi1saW5lXCJdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgeDE6IF92bS5vcHRpb25zLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIHkxOiBfdm0ubGluZU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICB4MjogX3ZtLm9wdGlvbnMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgeTI6IF92bS5vcHRpb25zLnNpemUgLSBfdm0ubGluZU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3XCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJtYWluLXZpZXdcIl0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX21haW4tY29udGFpbmVyLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJtYWluLWNvbnRhaW5lci13cmFwcGVyXCJdLCB7XG4gICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm1haW5WaWV3XCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX21haW4tY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcIm1haW4tY29udGFpbmVyXCJdLCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNvbnRhaW5lclwiXSksXG4gICAgICAgICAgICAgICAgICBvbjogeyBtb3VzZW1vdmU6IF92bS5tb3VzZU1vdmUsIG1vdXNldXA6IF92bS5tb3VzZVVwIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidGFza0xpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5maW5hbFdpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ0YXNrLWxpc3RcIildLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcIm1haW4tdmlldy1jb250YWluZXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IF92bS5jaGFydE1vdXNlRG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IF92bS5jaGFydE1vdXNlRG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IF92bS5jaGFydE1vdXNlVXAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVuZDogX3ZtLmNoYXJ0TW91c2VVcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhcnRNb3VzZU1vdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhcnRNb3VzZU1vdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFydFdoZWVsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImNoYXJ0XCIpXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJjaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciBnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbFwiXSxcbiAgICAgICAgICAgICAgICBfdm0udmVydGljYWxTdHlsZVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vblZlcnRpY2FsU2Nyb2xsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLXZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjFweFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbFwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXItLWhvcml6b250YWxcIl0sXG4gICAgICAgICAgICB7IG1hcmdpbkxlZnQ6IF92bS5nZXRNYXJnaW5MZWZ0IH1cbiAgICAgICAgICApLFxuICAgICAgICAgIG9uOiB7IHNjcm9sbDogX3ZtLm9uSG9yaXpvbnRhbFNjcm9sbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLWhvcml6b250YWxcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogXCIxcHhcIiwgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tY29sdW1uXCIsXG4gICAgICBzdHlsZTogX3ZtLml0ZW1Db2x1bW5TdHlsZVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyXCIsXG4gICAgICAgICAgc3R5bGU6IF92bS53cmFwcGVyU3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImRlZmF1bHRcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLmNvbnRhaW5lclN0eWxlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmh0bWxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLnZhbHVlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS52YWx1ZSkgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS52YWx1ZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udmFsdWUpIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVuZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJlZjogXCJ0YXNrTGlzdFdyYXBwZXJcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3Qtd3JhcHBlclwiXSwge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJ0YXNrTGlzdFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdFwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdFwiXSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGFzay1saXN0LWhlYWRlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInRhc2tMaXN0SXRlbXNcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1zXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtc1wiXSwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5yb290LnZpc2libGVUYXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0YXNrLWxpc3QtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiB0YXNrLmlkLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhc2s6IHRhc2sgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXJcIl0sIHtcbiAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIFwicHhcIixcbiAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwICsgXCJweFwiXG4gICAgICB9KVxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5yb290LmdldFRhc2tMaXN0Q29sdW1ucywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGNvbHVtbi5faWQsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1jb2x1bW5cIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWNvbHVtblwiXSxcbiAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItY29sdW1uXCJdLFxuICAgICAgICAgICAgX3ZtLmdldFN0eWxlKGNvbHVtbilcbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBjb2x1bW4uZXhwYW5kZXJcbiAgICAgICAgICAgID8gX2MoXCJ0YXNrLWxpc3QtZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgICAgICAgIHRhc2tzOiBfdm0uY29sbGFwc2libGUsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1sYWJlbFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItbGFiZWxcIl0sXG4gICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1sYWJlbFwiXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW46IGNvbHVtbiB9LFxuICAgICAgICAgICAgICBvbjogeyBtb3VzZXVwOiBfdm0ucmVzaXplck1vdXNlVXAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhjb2x1bW4ubGFiZWwpICsgXCJcXG4gICAgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXJcIl0sXG4gICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXJcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uOiBjb2x1bW4gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNpemVyTW91c2VEb3duKCRldmVudCwgY29sdW1uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXJcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplclwiXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1cIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtXCJdKVxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJpdGVtLWNvbHVtblwiLFxuICAgICAgICB7IGtleTogY29sdW1uLl9pZCwgYXR0cnM6IHsgY29sdW1uOiBjb2x1bW4sIHRhc2s6IF92bS50YXNrIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIGNvbHVtbi5leHBhbmRlclxuICAgICAgICAgICAgPyBfYyhcInRhc2stbGlzdC1leHBhbmRlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgdGFza3M6IFtfdm0udGFza10sXG4gICAgICAgICAgICAgICAgICB0YXNrOiBfdm0udGFzayxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRhc2tMaXN0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYzNlNTA4NWNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmM2MzA0YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDJjNjMwNGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDJjNjMwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDJjNjMwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJjNjMwNGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDJjNjMwNGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9HYW50dEVsYXN0aWMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJjNjMwNGMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZWUxMDhlMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZGVlMTA4ZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGVlMTA4ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGVlMTA4ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZWUxMDhlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkZWUxMDhlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGVlMTA4ZTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGFmMDZmYiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGRhZjA2ZmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGRhZjA2ZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGRhZjA2ZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGFmMDZmYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZGFmMDZmYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhZjA2ZmImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2MzZjVjZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjdjM2Y1Y2QnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjdjM2Y1Y2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjdjM2Y1Y2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2MzZjVjZCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2N2MzZjVjZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdjM2Y1Y2QmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZmU2NGU4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWJmZTY0ZTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWJmZTY0ZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWJmZTY0ZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZmU2NGU4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiZmU2NGU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9EYXlzSGlnaGxpZ2h0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZmU2NGU4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxY2JmNmJhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9saWppeGlhbmcvRG9jdW1lbnRzL2NvZGUvYXdlc29tZS9nYW50dC1lbGFzdGljL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YxY2JmNmJhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YxY2JmNmJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YxY2JmNmJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxY2JmNmJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2YxY2JmNmJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjFjYmY2YmEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZjk3OWE3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmJmOTc5YTcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmJmOTc5YTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmJmOTc5YTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZjk3OWE3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJiZjk3OWE3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZjk3OWE3JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Hcm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgzMDZlNTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9saWppeGlhbmcvRG9jdW1lbnRzL2NvZGUvYXdlc29tZS9nYW50dC1lbGFzdGljL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc4MzA2ZTU5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc4MzA2ZTU5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc4MzA2ZTU5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Hcm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgzMDZlNTkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzgzMDZlNTknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Hcm91cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyb3VwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ODMwNmU1OSZcIiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUYXNrIG1peGluXG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgdmlldyBib3hcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Vmlld0JveCgpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XG4gICAgICByZXR1cm4gYDAgMCAke3Rhc2sud2lkdGh9ICR7dGFzay5oZWlnaHR9YDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGdyb3VwIHRyYW5zZm9ybVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRHcm91cFRyYW5zZm9ybSgpIHtcbiAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7dGhpcy50YXNrLnh9ICR7dGhpcy50YXNrLnl9KWA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCB3ZSBkaXNwbGF5IGV4cGFuZGVyP1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGlzcGxheUV4cGFuZGVyKCkge1xuICAgICAgY29uc3QgZXhwYW5kZXIgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlcjtcbiAgICAgIHJldHVybiBleHBhbmRlci5kaXNwbGF5IHx8IChleHBhbmRlci5kaXNwbGF5SWZUYXNrTGlzdEhpZGRlbiAmJiAhdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogRW1pdCBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgZW1pdEV2ZW50KGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnNjcm9sbGluZykge1xuICAgICAgICB0aGlzLnJvb3QuJGVtaXQoYGNoYXJ0LSR7dGhpcy50YXNrLnR5cGV9LSR7ZXZlbnROYW1lfWAsIHsgZXZlbnQsIGRhdGE6IHRoaXMudGFzayB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5YzIzZWNhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTljMjNlY2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTljMjNlY2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTljMjNlY2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5YzIzZWNhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2U5YzIzZWNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lOWMyM2VjYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YTIxMTc3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbGlqaXhpYW5nL0RvY3VtZW50cy9jb2RlL2F3ZXNvbWUvZ2FudHQtZWxhc3RpYy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOWEyMTE3NycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOWEyMTE3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOWEyMTE3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YTIxMTc3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA5YTIxMTc3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWEyMTE3NyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYzQyMTJlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbGlqaXhpYW5nL0RvY3VtZW50cy9jb2RlL2F3ZXNvbWUvZ2FudHQtZWxhc3RpYy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYmM0MjEyZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYmM0MjEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYmM0MjEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYzQyMTJlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBiYzQyMTJlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9NYWluVmlldy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmM0MjEyZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1YTZjOTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbGlqaXhpYW5nL0RvY3VtZW50cy9jb2RlL2F3ZXNvbWUvZ2FudHQtZWxhc3RpYy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjYjVhNmM5NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjYjVhNmM5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjYjVhNmM5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1YTZjOTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2I1YTZjOTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1YTZjOTYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTExZjEyZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmUxMWYxMmYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmUxMWYxMmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmUxMWYxMmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTExZjEyZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZTExZjEyZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUxMWYxMmYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYWVmZGQ3YzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYWVmZGQ3YzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYWVmZGQ3YzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhZWZkZDdjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWVmZGQ3YzgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTcxNjI5M2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xpaml4aWFuZy9Eb2N1bWVudHMvY29kZS9hd2Vzb21lL2dhbnR0LWVsYXN0aWMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTcxNjI5M2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTcxNjI5M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTcxNjI5M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTcxNjI5M2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTcxNjI5M2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NzE2MjkzYyZcIiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTdHlsZXMgZm9yIGdhbnR0LWVsYXN0aWNcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3R5bGUoZm9udFNpemUgPSAnMTJweCcsIGZvbnRGYW1pbHkgPSAnQXJpYWwsIHNhbnMtc2VyaWYnKSB7XG4gIHJldHVybiB7XG4gICAgZm9udFNpemUsXG4gICAgZm9udEZhbWlseSxcbiAgICAnbWFpbi12aWV3Jzoge1xuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnXG4gICAgfSxcbiAgICAnbWFpbi1jb250YWluZXItd3JhcHBlcic6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdib3JkZXItdG9wJzogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICdib3JkZXItYm90dG9tJzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ21haW4tY29udGFpbmVyJzoge1xuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJSdcbiAgICB9LFxuICAgICdtYWluLXZpZXctY29udGFpbmVyJzoge30sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9LFxuICAgICdjYWxlbmRhci13cmFwcGVyJzoge1xuICAgICAgJ3VzZXItc2VsZWN0JzogJ25vbmUnXG4gICAgfSxcbiAgICBjYWxlbmRhcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZjNmNWY3JyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3cnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAnanVzdGlmeS1jb250ZW50JzogJ3NwYWNlLWV2ZW5seSdcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3ctLW1vbnRoJzoge30sXG4gICAgJ2NhbGVuZGFyLXJvdy0tZGF5Jzoge30sXG4gICAgJ2NhbGVuZGFyLXJvdy0taG91cic6IHtcbiAgICAgICdib3JkZXItYm90dG9tJzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LS1tb250aCc6IHt9LFxuICAgICdjYWxlbmRhci1yb3ctcmVjdC0tZGF5Jzoge30sXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LS1ob3VyJzoge30sXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICdib3JkZXItcmlnaHQtd2lkdGgnOiAnMXB4JywgLy8gQ2FsZW5kYXJcbiAgICAgICdib3JkZXItcmlnaHQtY29sb3InOiAnI2RhZGFkYScsXG4gICAgICAnYm9yZGVyLXJpZ2h0LXN0eWxlJzogJ3NvbGlkJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfSxcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQtLW1vbnRoJzoge30sXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkLS1kYXknOiB7ICd0ZXh0LWFsaWduJzogJ2NlbnRlcicgfSxcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQtLWhvdXInOiB7ICd0ZXh0LWFsaWduJzogJ2NlbnRlcicgfSxcbiAgICAnY2FsZW5kYXItcm93LXRleHQnOiB7XG4gICAgICAnZm9udC1mYW1pbHknOiBmb250RmFtaWx5LCAvLyBHYW50dEVsYXN0aWNcbiAgICAgICdmb250LXNpemUnOiBmb250U2l6ZSwgLy9HYW50dEVsYXN0aWNcbiAgICAgIGNvbG9yOiAnIzYwNjA2MCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfSxcbiAgICAnY2FsZW5kYXItcm93LXRleHQtLW1vbnRoJzoge1xuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKSdcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3ctdGV4dC0tZGF5Jzoge30sXG4gICAgJ2NhbGVuZGFyLXJvdy10ZXh0LS1ob3VyJzoge30sXG4gICAgJ3Rhc2stbGlzdC13cmFwcGVyJzoge30sXG4gICAgJ3Rhc2stbGlzdCc6IHsgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgJ2JvcmRlci1jb2xvcic6ICcjZWVlJyB9LFxuICAgICd0YXNrLWxpc3QtaGVhZGVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgJ3VzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScsXG4gICAgICAnYm9yZGVyLWJvdHRvbSc6ICcxcHggc29saWQgI2VlZScsXG4gICAgICAnYm9yZGVyLWxlZnQnOiAnMXB4IHNvbGlkICNlZWUnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWhlYWRlci1jb2x1bW4nOiB7XG4gICAgICAnYm9yZGVyLWxlZnQnOiAnMXB4IHNvbGlkICMwMDAwMDA1MCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZjNmNWY3JyxcbiAgICAgICdib3JkZXItY29sb3InOiAndHJhbnNwYXJlbnQnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWV4cGFuZGVyLXdyYXBwZXInOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgJ2ZsZXgtc2hyaW5rJzogJzAnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46ICcwIDAgMCAxMHB4J1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1leHBhbmRlci1jb250ZW50Jzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbWFyZ2luOiAnYXV0byAwcHgnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZSdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtZXhwYW5kZXItbGluZSc6IHtcbiAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXG4gICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAnMScsXG4gICAgICAnc3Ryb2tlLWxpbmVjYXAnOiAncm91bmQnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWV4cGFuZGVyLWJvcmRlcic6IHtcbiAgICAgIGZpbGw6ICcjZmZmZmZmYTAnLFxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMEEwJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWV4cGFuZGVyLXdyYXBwZXInOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgJ2xpbmUtaGVpZ2h0JzogJzEnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWV4cGFuZGVyLWNvbnRlbnQnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBtYXJnaW46ICdhdXRvIDBweCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWV4cGFuZGVyLWxpbmUnOiB7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogJzEnLFxuICAgICAgJ3N0cm9rZS1saW5lY2FwJzogJ3JvdW5kJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWV4cGFuZGVyLWJvcmRlcic6IHtcbiAgICAgIGZpbGw6ICcjZmZmZmZmYTAnLFxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMEEwJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1jb250YWluZXInOiB7fSxcbiAgICAndGFzay1saXN0LWhlYWRlci1sYWJlbCc6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICd0ZXh0LW92ZXJmbG93JzogJ2VsbGlwc2lzJyxcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksXG4gICAgICAnZm9udC1zaXplJzogZm9udFNpemUsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogJ2F1dG8gNnB4JyxcbiAgICAgICdmbGV4LWdyb3cnOiAnMScsXG4gICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyJzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICc2cHgnLFxuICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ2NlbnRlcidcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXInOiB7IG1hcmdpbjogJ2F1dG8gMHB4JyB9LFxuICAgICd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90Jzoge1xuICAgICAgd2lkdGg6ICczcHgnLFxuICAgICAgaGVpZ2h0OiAnM3B4JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZGRkJyxcbiAgICAgICdib3JkZXItcmFkaXVzJzogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnNHB4IDBweCdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaXRlbXMnOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaXRlbSc6IHtcbiAgICAgICdib3JkZXItdG9wJzogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICdib3JkZXItcmlnaHQnOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgaGVpZ2h0OiAnMzBweCdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaXRlbS1jb2x1bW4nOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgJ2ZsZXgtc2hyaW5rJzogJzAnLFxuICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjMDAwMDAwNTAnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJyNlZWUnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlcic6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXInOiB7XG4gICAgICBtYXJnaW46ICdhdXRvIDBweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaXRlbS12YWx1ZSc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAnZmxleC1zaHJpbmsnOiAnMTAwJyxcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksXG4gICAgICAnZm9udC1zaXplJzogZm9udFNpemUsXG4gICAgICAnbWFyZ2luLXRvcCc6ICdhdXRvJyxcbiAgICAgICdtYXJnaW4tYm90dG9tJzogJ2F1dG8nLFxuICAgICAgJ21hcmdpbi1sZWZ0JzogJzZweCcsIC8vIFRhc2tMaXN0XG4gICAgICAnbWFyZ2luLXJpZ2h0JzogJzZweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAndGV4dC1vdmVyZmxvdyc6ICdlbGxpcHNpcycsXG4gICAgICAnbGluZS1oZWlnaHQnOiAnMWVtJyxcbiAgICAgICd3b3JkLWJyZWFrJzogJ2tlZXAtYWxsJyxcbiAgICAgICd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLFxuICAgICAgY29sb3I6ICcjNjA2MDYwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJ1xuICAgIH0sXG4gICAgJ2dyaWQtbGluZXMnOiB7fSxcbiAgICAnZ3JpZC1saW5lLWhvcml6b250YWwnOiB7XG4gICAgICBzdHJva2U6ICcjMDAwMDAwMTAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDBcbiAgICB9LFxuICAgICdncmlkLWxpbmUtdmVydGljYWwnOiB7XG4gICAgICBzdHJva2U6ICcjMDAwMDAwMTAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDBcbiAgICB9LFxuICAgICdncmlkLWxpbmUtdGltZSc6IHtcbiAgICAgIHN0cm9rZTogJyNGRjAwMDA4MCcsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMVxuICAgIH0sXG4gICAgY2hhcnQ6IHtcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lcic6IHtcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJScsXG4gICAgICAnYm9yZGVyLXJpZ2h0JzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWdyYXBoLWNvbnRhaW5lcic6IHtcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJScsXG4gICAgICAnYm9yZGVyLXJpZ2h0JzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWFyZWEnOiB7fSxcbiAgICAnY2hhcnQtZ3JhcGgnOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuICAgICdjaGFydC1yb3ctdGV4dC13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy10ZXh0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmZhMCcsXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6ICcxMHB4JyxcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksXG4gICAgICAnZm9udC1zaXplJzogZm9udFNpemUsXG4gICAgICAnZm9udC13ZWlnaHQnOiAnbm9ybWFsJyxcbiAgICAgIGNvbG9yOiAnIzAwMDAwMGEwJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgICdjaGFydC1yb3ctdGV4dC1jb250ZW50Jzoge1xuICAgICAgcGFkZGluZzogJzBweCA2cHgnXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dCc6IHt9LFxuICAgICdjaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sJzoge30sXG4gICAgJ2NoYXJ0LXJvdy13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1iYXItd3JhcHBlcic6IHt9LFxuICAgICdjaGFydC1yb3ctYmFyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1iYXItcG9seWdvbic6IHtcbiAgICAgIHN0cm9rZTogJyNFNzRDM0MnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDEsXG4gICAgICBmaWxsOiAnI0Y3NUM0QydcbiAgICB9LFxuICAgICdjaGFydC1yb3ctcHJvamVjdC13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1wcm9qZWN0Jzoge30sXG4gICAgJ2NoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb24nOiB7fSxcbiAgICAnY2hhcnQtcm93LW1pbGVzdG9uZS13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1taWxlc3RvbmUnOiB7fSxcbiAgICAnY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uJzoge30sXG4gICAgJ2NoYXJ0LXJvdy10YXNrLXdyYXBwZXInOiB7fSxcbiAgICAnY2hhcnQtcm93LXRhc2snOiB7fSxcbiAgICAnY2hhcnQtcm93LXRhc2stcG9seWdvbic6IHt9LFxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXInOiB7fSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhcic6IHt9LFxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmUnOiB7XG4gICAgICBzdHJva2U6ICcjZmZmZmZmMjUnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDIwXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZCc6IHtcbiAgICAgIGZpbGw6ICcjMEVBQzUxJyxcbiAgICAgIGhlaWdodDogJzIwJSdcbiAgICB9LFxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXBhdHRlcm4nOiB7XG4gICAgICBmaWxsOiAndXJsKCNkaWFnb25hbEhhdGNoKScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAuMSkgc2NhbGVZKDAuOCknXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lJzoge1xuICAgICAgc3Ryb2tlOiAnI0U3NEMzQycsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMVxuICAgIH0sXG4gICAgJ2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtd3JhcHBlcic6IHt9LFxuICAgICdjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGgnOiB7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgc3Ryb2tlOiAnI0ZGYTAwMDkwJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAyXG4gICAgfSxcbiAgICAnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lcic6IHt9LFxuICAgICdjaGFydC1zY3JvbGwtY29udGFpbmVyLS1ob3Jpem9udGFsJzoge1xuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJSdcbiAgICB9LFxuICAgICdjaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbCc6IHtcbiAgICAgICdvdmVyZmxvdy15JzogJ2F1dG8nLFxuICAgICAgJ292ZXJmbG93LXgnOiAnaGlkZGVuJyxcbiAgICAgICdtYXgtaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICB9LFxuICAgICdjaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0Jzoge1xuICAgICAgLy8gZmlsbDogJyNmM2Y1Zjc4MCcsXG4gICAgICBmaWxsOiAnI2YyZjJmMjgwJ1xuICAgIH0sXG4gICAgJ3Nsb3QtaGVhZGVyLWJlZm9yZU9wdGlvbnMnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH1cbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV92dWVfXzsiXSwic291cmNlUm9vdCI6IiJ9