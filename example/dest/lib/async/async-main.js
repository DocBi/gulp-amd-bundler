!function(){function n(n){var e=!1;return function(){if(e)throw new Error("Callback was already called.");e=!0,n.apply(t,arguments)}}var t,e,r={};t=this,null!=t&&(e=t.async),r.noConflict=function(){return t.async=e,r};var i=Object.prototype.toString,u=Array.isArray||function(n){return"[object Array]"===i.call(n)},c=function(n,t){for(var e=0;e<n.length;e+=1)t(n[e],e,n)},o=function(n,t){if(n.map)return n.map(t);var e=[];return c(n,function(n,r,i){e.push(t(n,r,i))}),e},a=function(n,t,e){return n.reduce?n.reduce(t,e):(c(n,function(n,r,i){e=t(e,n,r,i)}),e)},l=function(n){if(Object.keys)return Object.keys(n);var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);return t};"undefined"!=typeof process&&process.nextTick?(r.nextTick=process.nextTick,"undefined"!=typeof setImmediate?r.setImmediate=function(n){setImmediate(n)}:r.setImmediate=r.nextTick):"function"==typeof setImmediate?(r.nextTick=function(n){setImmediate(n)},r.setImmediate=r.nextTick):(r.nextTick=function(n){setTimeout(n,0)},r.setImmediate=r.nextTick),r.each=function(t,e,r){function i(n){n?(r(n),r=function(){}):(u+=1,u>=t.length&&r())}if(r=r||function(){},!t.length)return r();var u=0;c(t,function(t){e(t,n(i))})},r.forEach=r.each,r.eachSeries=function(n,t,e){if(e=e||function(){},!n.length)return e();var r=0,i=function(){t(n[r],function(t){t?(e(t),e=function(){}):(r+=1,r>=n.length?e():i())})};i()},r.forEachSeries=r.eachSeries,r.eachLimit=function(n,t,e,r){var i=f(t);i.apply(null,[n,e,r])},r.forEachLimit=r.eachLimit;var f=function(n){return function(t,e,r){if(r=r||function(){},!t.length||n<=0)return r();var i=0,u=0,c=0;!function o(){if(i>=t.length)return r();for(;c<n&&u<t.length;)u+=1,c+=1,e(t[u-1],function(n){n?(r(n),r=function(){}):(i+=1,c-=1,i>=t.length?r():o())})}()}},s=function(n){return function(){var t=Array.prototype.slice.call(arguments);return n.apply(null,[r.each].concat(t))}},p=function(n,t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[f(n)].concat(e))}},d=function(n){return function(){var t=Array.prototype.slice.call(arguments);return n.apply(null,[r.eachSeries].concat(t))}},y=function(n,t,e,r){if(t=o(t,function(n,t){return{index:t,value:n}}),r){var i=[];n(t,function(n,t){e(n.value,function(e,r){i[n.index]=r,t(e)})},function(n){r(n,i)})}else n(t,function(n,t){e(n.value,function(n){t(n)})})};r.map=s(y),r.mapSeries=d(y),r.mapLimit=function(n,t,e,r){return v(t)(n,e,r)};var v=function(n){return p(n,y)};r.reduce=function(n,t,e,i){r.eachSeries(n,function(n,r){e(t,n,function(n,e){t=e,r(n)})},function(n){i(n,t)})},r.inject=r.reduce,r.foldl=r.reduce,r.reduceRight=function(n,t,e,i){var u=o(n,function(n){return n}).reverse();r.reduce(u,t,e,i)},r.foldr=r.reduceRight;var h=function(n,t,e,r){var i=[];t=o(t,function(n,t){return{index:t,value:n}}),n(t,function(n,t){e(n.value,function(e){e&&i.push(n),t()})},function(n){r(o(i.sort(function(n,t){return n.index-t.index}),function(n){return n.value}))})};r.filter=s(h),r.filterSeries=d(h),r.select=r.filter,r.selectSeries=r.filterSeries;var m=function(n,t,e,r){var i=[];t=o(t,function(n,t){return{index:t,value:n}}),n(t,function(n,t){e(n.value,function(e){e||i.push(n),t()})},function(n){r(o(i.sort(function(n,t){return n.index-t.index}),function(n){return n.value}))})};r.reject=s(m),r.rejectSeries=d(m);var g=function(n,t,e,r){n(t,function(n,t){e(n,function(e){e?(r(n),r=function(){}):t()})},function(n){r()})};r.detect=s(g),r.detectSeries=d(g),r.some=function(n,t,e){r.each(n,function(n,r){t(n,function(n){n&&(e(!0),e=function(){}),r()})},function(n){e(!1)})},r.any=r.some,r.every=function(n,t,e){r.each(n,function(n,r){t(n,function(n){n||(e(!1),e=function(){}),r()})},function(n){e(!0)})},r.all=r.every,r.sortBy=function(n,t,e){r.map(n,function(n,e){t(n,function(t,r){t?e(t):e(null,{value:n,criteria:r})})},function(n,t){if(n)return e(n);var r=function(n,t){var e=n.criteria,r=t.criteria;return e<r?-1:e>r?1:0};e(null,o(t.sort(r),function(n){return n.value}))})},r.auto=function(n,t){t=t||function(){};var e=l(n),i=e.length;if(!i)return t();var o={},f=[],s=function(n){f.unshift(n)},p=function(n){for(var t=0;t<f.length;t+=1)if(f[t]===n)return void f.splice(t,1)},d=function(){i--,c(f.slice(0),function(n){n()})};s(function(){if(!i){var n=t;t=function(){},n(null,o)}}),c(e,function(e){var i=u(n[e])?n[e]:[n[e]],f=function(n){var i=Array.prototype.slice.call(arguments,1);if(i.length<=1&&(i=i[0]),n){var u={};c(l(o),function(n){u[n]=o[n]}),u[e]=i,t(n,u),t=function(){}}else o[e]=i,r.setImmediate(d)},y=i.slice(0,Math.abs(i.length-1))||[],v=function(){return a(y,function(n,t){return n&&o.hasOwnProperty(t)},!0)&&!o.hasOwnProperty(e)};if(v())i[i.length-1](f,o);else{var h=function(){v()&&(p(h),i[i.length-1](f,o))};s(h)}})},r.retry=function(n,t,e){var i=5,u=[];"function"==typeof n&&(e=t,t=n,n=i),n=parseInt(n,10)||i;var c=function(i,c){for(var o=function(n,t){return function(e){n(function(n,r){e(!n||t,{err:n,result:r})},c)}};n;)u.push(o(t,!(n-=1)));r.series(u,function(n,t){t=t[t.length-1],(i||e)(t.err,t.result)})};return e?c():c},r.waterfall=function(n,t){if(t=t||function(){},!u(n)){var e=new Error("First argument to waterfall must be an array of functions");return t(e)}if(!n.length)return t();var i=function(n){return function(e){if(e)t.apply(null,arguments),t=function(){};else{var u=Array.prototype.slice.call(arguments,1),c=n.next();c?u.push(i(c)):u.push(t),r.setImmediate(function(){n.apply(null,u)})}}};i(r.iterator(n))()};var k=function(n,t,e){if(e=e||function(){},u(t))n.map(t,function(n,t){n&&n(function(n){var e=Array.prototype.slice.call(arguments,1);e.length<=1&&(e=e[0]),t.call(null,n,e)})},e);else{var r={};n.each(l(t),function(n,e){t[n](function(t){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),r[n]=i,e(t)})},function(n){e(n,r)})}};r.parallel=function(n,t){k({map:r.map,each:r.each},n,t)},r.parallelLimit=function(n,t,e){k({map:v(t),each:f(t)},n,e)},r.series=function(n,t){if(t=t||function(){},u(n))r.mapSeries(n,function(n,t){n&&n(function(n){var e=Array.prototype.slice.call(arguments,1);e.length<=1&&(e=e[0]),t.call(null,n,e)})},t);else{var e={};r.eachSeries(l(n),function(t,r){n[t](function(n){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),e[t]=i,r(n)})},function(n){t(n,e)})}},r.iterator=function(n){var t=function(e){var r=function(){return n.length&&n[e].apply(null,arguments),r.next()};return r.next=function(){return e<n.length-1?t(e+1):null},r};return t(0)},r.apply=function(n){var t=Array.prototype.slice.call(arguments,1);return function(){return n.apply(null,t.concat(Array.prototype.slice.call(arguments)))}};var A=function(n,t,e,r){var i=[];n(t,function(n,t){e(n,function(n,e){i=i.concat(e||[]),t(n)})},function(n){r(n,i)})};r.concat=s(A),r.concatSeries=d(A),r.whilst=function(n,t,e){n()?t(function(i){return i?e(i):void r.whilst(n,t,e)}):e()},r.doWhilst=function(n,t,e){n(function(i){if(i)return e(i);var u=Array.prototype.slice.call(arguments,1);t.apply(null,u)?r.doWhilst(n,t,e):e()})},r.until=function(n,t,e){n()?e():t(function(i){return i?e(i):void r.until(n,t,e)})},r.doUntil=function(n,t,e){n(function(i){if(i)return e(i);var u=Array.prototype.slice.call(arguments,1);t.apply(null,u)?e():r.doUntil(n,t,e)})},r.queue=function(t,e){function i(n,t,e,i){return n.started||(n.started=!0),u(t)||(t=[t]),0==t.length?r.setImmediate(function(){n.drain&&n.drain()}):void c(t,function(t){var u={data:t,callback:"function"==typeof i?i:null};e?n.tasks.unshift(u):n.tasks.push(u),n.saturated&&n.tasks.length===n.concurrency&&n.saturated(),r.setImmediate(n.process)})}void 0===e&&(e=1);var o=0,a={tasks:[],concurrency:e,saturated:null,empty:null,drain:null,started:!1,paused:!1,push:function(n,t){i(a,n,!1,t)},kill:function(){a.drain=null,a.tasks=[]},unshift:function(n,t){i(a,n,!0,t)},process:function(){if(!a.paused&&o<a.concurrency&&a.tasks.length){var e=a.tasks.shift();a.empty&&0===a.tasks.length&&a.empty(),o+=1;var r=function(){o-=1,e.callback&&e.callback.apply(e,arguments),a.drain&&a.tasks.length+o===0&&a.drain(),a.process()},i=n(r);t(e.data,i)}},length:function(){return a.tasks.length},running:function(){return o},idle:function(){return a.tasks.length+o===0},pause:function(){a.paused!==!0&&(a.paused=!0)},resume:function(){if(a.paused!==!1){a.paused=!1;for(var n=1;n<=a.concurrency;n++)r.setImmediate(a.process)}}};return a},r.priorityQueue=function(n,t){function e(n,t){return n.priority-t.priority}function i(n,t,e){for(var r=-1,i=n.length-1;r<i;){var u=r+(i-r+1>>>1);e(t,n[u])>=0?r=u:i=u-1}return r}function o(n,t,o,a){return n.started||(n.started=!0),u(t)||(t=[t]),0==t.length?r.setImmediate(function(){n.drain&&n.drain()}):void c(t,function(t){var u={data:t,priority:o,callback:"function"==typeof a?a:null};n.tasks.splice(i(n.tasks,u,e)+1,0,u),n.saturated&&n.tasks.length===n.concurrency&&n.saturated(),r.setImmediate(n.process)})}var a=r.queue(n,t);return a.push=function(n,t,e){o(a,n,t,e)},delete a.unshift,a},r.cargo=function(n,t){var e=!1,i=[],a={tasks:i,payload:t,saturated:null,empty:null,drain:null,drained:!0,push:function(n,e){u(n)||(n=[n]),c(n,function(n){i.push({data:n,callback:"function"==typeof e?e:null}),a.drained=!1,a.saturated&&i.length===t&&a.saturated()}),r.setImmediate(a.process)},process:function r(){if(!e){if(0===i.length)return a.drain&&!a.drained&&a.drain(),void(a.drained=!0);var u="number"==typeof t?i.splice(0,t):i.splice(0,i.length),l=o(u,function(n){return n.data});a.empty&&a.empty(),e=!0,n(l,function(){e=!1;var n=arguments;c(u,function(t){t.callback&&t.callback.apply(null,n)}),r()})}},length:function(){return i.length},running:function(){return e}};return a};var x=function(n){return function(t){var e=Array.prototype.slice.call(arguments,1);t.apply(null,e.concat([function(t){var e=Array.prototype.slice.call(arguments,1);"undefined"!=typeof console&&(t?console.error&&console.error(t):console[n]&&c(e,function(t){console[n](t)}))}]))}};r.log=x("log"),r.dir=x("dir"),r.memoize=function(n,t){var e={},i={};t=t||function(n){return n};var u=function(){var u=Array.prototype.slice.call(arguments),c=u.pop(),o=t.apply(null,u);o in e?r.nextTick(function(){c.apply(null,e[o])}):o in i?i[o].push(c):(i[o]=[c],n.apply(null,u.concat([function(){e[o]=arguments;var n=i[o];delete i[o];for(var t=0,r=n.length;t<r;t++)n[t].apply(null,arguments)}])))};return u.memo=e,u.unmemoized=n,u},r.unmemoize=function(n){return function(){return(n.unmemoized||n).apply(null,arguments)}},r.times=function(n,t,e){for(var i=[],u=0;u<n;u++)i.push(u);return r.map(i,t,e)},r.timesSeries=function(n,t,e){for(var i=[],u=0;u<n;u++)i.push(u);return r.mapSeries(i,t,e)},r.seq=function(){var n=arguments;return function(){var t=this,e=Array.prototype.slice.call(arguments),i=e.pop();r.reduce(n,e,function(n,e,r){e.apply(t,n.concat([function(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);r(n,t)}]))},function(n,e){i.apply(t,[n].concat(e))})}},r.compose=function(){return r.seq.apply(null,Array.prototype.reverse.call(arguments))};var S=function(n,t){var e=function(){var e=this,r=Array.prototype.slice.call(arguments),i=r.pop();return n(t,function(n,t){n.apply(e,r.concat([t]))},i)};if(arguments.length>2){var r=Array.prototype.slice.call(arguments,2);return e.apply(this,r)}return e};r.applyEach=s(S),r.applyEachSeries=d(S),r.forever=function(n,t){function e(r){if(r){if(t)return t(r);throw r}n(e)}e()},"undefined"!=typeof module&&module.exports?module.exports=r:"undefined"!=typeof define&&define.amd?define([],function(){return r}):t.async=r}();