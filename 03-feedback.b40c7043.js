var e,t,n,r,o,i,a,u,f,c,l,s,d;e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},null==(r=e.parcelRequired7c6)&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(o=r.register)("dCfNN",function(t,n){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var o=r("6aBn7"),i="Expected a function",a=0/0,u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,p=d||v||Function("return this")(),m=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return p.Date.now()};/**
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
 */function x(e){var t=void 0===e?"undefined":(0,o._)(e);return!!e&&("object"==t||"function"==t)}/**
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
 */function O(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":(0,o._)(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return a;if(x(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=c.test(e);return r||l.test(e)?s(e.slice(2),r?2:8):f.test(e)?a:+e}t.exports=/**
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
 */function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw TypeError(i);return x(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),/**
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
 */function(e,t,n){var r,o,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function m(e){var n=e-c,r=e-l;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===c||n>=t||n<0||d&&r>=a}function h(){var e,n,r,o=b();if(m(o))return S(o);// Restart the timer.
f=setTimeout(h,(e=o-c,n=o-l,r=t-e,d?y(r,a-n):r))}function S(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(f=void 0,v&&r)?p(e):(r=o=void 0,u))}function j(){var e,n=b(),i=m(n);if(r=arguments,o=this,c=n,i){if(void 0===f)return(// Reset any `maxWait` timer.
l=e=c,// Start the timer for the trailing edge.
f=setTimeout(h,t),s?p(e):u);if(d)return(// Handle invocations in a tight loop.
f=setTimeout(h,t),p(c))}return void 0===f&&(f=setTimeout(h,t)),u}return t=O(t)||0,x(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},j.flush=function(){return void 0===f?u:S(b())},j}(e,t,{leading:r,maxWait:t,trailing:o})}}),o("6aBn7",function(e,t){function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}Object.defineProperty(e.exports,"_",{get:function(){return n},set:void 0,enumerable:!0,configurable:!0})}),i=r("dCfNN"),u=(a=document.querySelector(".feedback-form")).querySelector("input[type=email]"),f=a.querySelector("textarea"),c="feedback-form-state",l=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log("Error1: ".concat(e.name," => ").concat(e.message))}},void 0!==(d=(s=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log("Error2: ".concat(e.name," => ").concat(e.message))}})(c))&&(u.value=d.email,f.value=d.message),a.addEventListener("submit",function(e){e.preventDefault(),console.log(s(c)),localStorage.removeItem(c),e.target.reset()}),a.addEventListener("input",i(function(e){if(void 0!==d){var t=s(c);t.email=u.value,t.message=f.value,l(c,t);return}l(c,{email:u.value,message:f.value})},500));//# sourceMappingURL=03-feedback.b40c7043.js.map

//# sourceMappingURL=03-feedback.b40c7043.js.map
