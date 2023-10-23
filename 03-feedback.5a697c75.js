var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),(0,n.register)("9OeKo",function(t,r){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var n="Expected a function",o=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,p=Math.max,m=Math.min,g=function(){return d.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return o;if(y(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):a.test(e)?o:+e}t.exports=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return y(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,r){var o,i,a,l,u,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(n);function O(t){var r=o,n=i;return o=i=void 0,c=t,l=e.apply(n,r)}function x(e){var r=e-f,n=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===f||r>=t||r<0||d&&n>=a}function h(){var e,r,n,o=g();if(x(o))return j(o);// Restart the timer.
u=setTimeout(h,(e=o-f,r=o-c,n=t-e,d?m(n,a-r):n))}function j(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(u=void 0,v&&o)?O(e):(o=i=void 0,l))}function S(){var e,r=g(),n=x(r);if(o=arguments,i=this,f=r,n){if(void 0===u)return(// Reset any `maxWait` timer.
c=e=f,// Start the timer for the trailing edge.
u=setTimeout(h,t),s?O(e):l);if(d)return(// Handle invocations in a tight loop.
u=setTimeout(h,t),O(f))}return void 0===u&&(u=setTimeout(h,t)),l}return t=b(t)||0,y(r)&&(s=!!r.leading,a=(d="maxWait"in r)?p(b(r.maxWait)||0,t):a,v="trailing"in r?!!r.trailing:v),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},S.flush=function(){return void 0===u?l:j(g())},S}(e,t,{leading:o,maxWait:t,trailing:i})}});var o=n("9OeKo");const i=document.querySelector(".feedback-form"),a=i.querySelector("input[type=email]"),l=i.querySelector("textarea"),u="feedback-form-state",f=(e,t)=>{try{let r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.log(`Error1: ${e.name} => ${e.message}`)}},c=e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(`Error2: ${e.name} => ${e.message}`)}},s=c(u);void 0!==s&&(a.value=s.email,l.value=s.message),i.addEventListener("submit",e=>{e.preventDefault(),console.log(c(u)),localStorage.removeItem(u),e.target.reset()}),i.addEventListener("input",o(e=>{if(void 0!==s){let e=c(u);e.email=a.value,e.message=l.value,f(u,e);return}let t={email:a.value,message:l.value};f(u,t)},500));//# sourceMappingURL=03-feedback.5a697c75.js.map

//# sourceMappingURL=03-feedback.5a697c75.js.map
