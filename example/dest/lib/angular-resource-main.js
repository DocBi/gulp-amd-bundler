!function(r,e,t){"use strict";function n(r){return null!=r&&""!==r&&"hasOwnProperty"!==r&&s.test("."+r)}function a(r,e){if(!n(e))throw o("badmember",'Dotted member path "@{0}" is invalid.',e);for(var a=e.split("."),i=0,s=a.length;s>i&&r!==t;i++){var c=a[i];r=null!==r?r[c]:t}return r}function i(r,t){t=t||{},e.forEach(t,function(r,e){delete t[e]});for(var n in r)!r.hasOwnProperty(n)||"$"===n.charAt(0)&&"$"===n.charAt(1)||(t[n]=r[n]);return t}var o=e.$$minErr("$resource"),s=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;e.module("ngResource",["ng"]).provider("$resource",function(){var r=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}},this.$get=["$http","$q",function(n,s){function c(r){return u(r,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function u(r,e){return encodeURIComponent(r).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}function p(e,t){this.template=e,this.defaults=d({},r.defaults,t),this.urlParams={}}function l(c,u,$,v){function w(r,e){var t={};return e=d({},u,e),h(e,function(e,n){g(e)&&(e=e()),t[n]=e&&e.charAt&&"@"==e.charAt(0)?a(r,e.substr(1)):e}),t}function y(r){return r.resource}function E(r){i(r||{},this)}var A=new p(c,v);return $=d({},r.defaults.actions,$),h($,function(r,a){var c=/^(POST|PUT|PATCH)$/i.test(r.method);E[a]=function(a,u,p,l){var $,v,b,P={};switch(arguments.length){case 4:b=l,v=p;case 3:case 2:if(!g(u)){P=a,$=u,v=p;break}if(g(a)){v=a,b=u;break}v=u,b=p;case 1:g(a)?v=a:c?$=a:P=a;break;case 0:break;default:throw o("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var T=this instanceof E,x=T?$:r.isArray?[]:new E($),O={},R=r.interceptor&&r.interceptor.response||y,D=r.interceptor&&r.interceptor.responseError||t;h(r,function(r,e){"params"!=e&&"isArray"!=e&&"interceptor"!=e&&(O[e]=m(r))}),c&&(O.data=$),A.setUrlParams(O,d({},w($,r.params||{}),P),r.url);var k=n(O).then(function(t){var n=t.data,a=x.$promise;if(n){if(e.isArray(n)!==!!r.isArray)throw o("badcfg","Error in resource configuration. Expected response to contain an {0} but got an {1}",r.isArray?"array":"object",e.isArray(n)?"array":"object");r.isArray?(x.length=0,h(n,function(r){x.push(new E(r))})):(i(n,x),x.$promise=a)}return x.$resolved=!0,t.resource=x,t},function(r){return x.$resolved=!0,(b||f)(r),s.reject(r)});return k=k.then(function(r){var e=R(r);return(v||f)(e,r.headers),e},D),T?k:(x.$promise=k,x.$resolved=!1,x)},E.prototype["$"+a]=function(r,e,t){g(r)&&(t=e,e=r,r={});var n=E[a].call(this,r,this,e,t);return n.$promise||n}}),E.bind=function(r){return l(c,d({},u,r),$)},E}var f=e.noop,h=e.forEach,d=e.extend,m=e.copy,g=e.isFunction;return p.prototype={setUrlParams:function(r,t,n){var a,i,s=this,u=n||s.template,p=s.urlParams={};h(u.split(/\W/),function(r){if("hasOwnProperty"===r)throw o("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(r)&&r&&new RegExp("(^|[^\\\\]):"+r+"(\\W|$)").test(u)&&(p[r]=!0)}),u=u.replace(/\\:/g,":"),t=t||{},h(s.urlParams,function(r,n){a=t.hasOwnProperty(n)?t[n]:s.defaults[n],e.isDefined(a)&&null!==a?(i=c(a),u=u.replace(new RegExp(":"+n+"(\\W|$)","g"),function(r,e){return i+e})):u=u.replace(new RegExp("(/?):"+n+"(\\W|$)","g"),function(r,e,t){return"/"==t.charAt(0)?t:e+t})}),s.defaults.stripTrailingSlashes&&(u=u.replace(/\/+$/,"")||"/"),u=u.replace(/\/\.(?=\w+($|\?))/,"."),r.url=u.replace(/\/\\\./,"/."),h(t,function(e,t){s.urlParams[t]||(r.params=r.params||{},r.params[t]=e)})}},l}]})}(window,window.angular);