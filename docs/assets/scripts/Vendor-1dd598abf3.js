!function(n){var r={};function s(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}s.m=n,s.c=r,s.p="",s(0)}([function(e,t,n){"use strict";n(8),n(9),n(10)},,,,,,,,function(e,t){"use strict";var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i,d,p){var o=[],e={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},c=function(){};c.prototype=e,c=new c;var l=[];function m(e,t){return(void 0===e?"undefined":b(e))===t}var h=d.documentElement,g="svg"===h.nodeName.toLowerCase();var t="Moz O ms Webkit",u=e._config.usePrefixes?t.split(" "):[];function A(){return"function"!=typeof d.createElement?d.createElement(arguments[0]):g?d.createElementNS.call(d,"http://www.w3.org/2000/svg",arguments[0]):d.createElement.apply(d,arguments)}e._cssomPrefixes=u;var n={elem:A("modernizr")};c._q.push(function(){delete n.elem});var v={style:n.elem.style};function s(e,t,n,r){var s,i,a,o,c,l="modernizr",u=A("div"),f=((c=d.body)||((c=A(g?"svg":"body")).fake=!0),c);if(parseInt(n,10))for(;n--;)(a=A("div")).id=r?r[n]:l+(n+1),u.appendChild(a);return(s=A("style")).type="text/css",s.id="s"+l,(f.fake?f:u).appendChild(s),f.appendChild(u),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(d.createTextNode(e)),u.id=l,f.fake&&(f.style.background="",f.style.overflow="hidden",o=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),i=t(u,e),f.fake?(f.parentNode.removeChild(f),h.style.overflow=o,h.offsetHeight):u.parentNode.removeChild(u),!!i}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function y(e,t){var n=e.length;if("CSS"in i&&"supports"in i.CSS){for(;n--;)if(i.CSS.supports(a(e[n]),t))return!0;return!1}if("CSSSupportsRule"in i){for(var r=[];n--;)r.push("("+a(e[n])+":"+t+")");return s("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==function(e,t,n){var r;if("getComputedStyle"in i){r=getComputedStyle.call(i,e,t);var s=i.console;null!==r?n&&(r=r.getPropertyValue(n)):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return p}c._q.unshift(function(){delete v.style});var f=e._config.usePrefixes?t.toLowerCase().split(" "):[];function z(e,t){return function(){return e.apply(t,arguments)}}function r(e,t,n,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+u.join(i+" ")+i).split(" ");return m(t,"string")||m(t,"undefined")?function(e,t,n,r){if(r=!m(r,"undefined")&&r,!m(n,"undefined")){var s=y(e,n);if(!m(s,"undefined"))return s}for(var i,a,o,c,l,u=["modernizr","tspan","samp"];!v.style&&u.length;)i=!0,v.modElem=A(u.shift()),v.style=v.modElem.style;function f(){i&&(delete v.style,delete v.modElem)}for(o=e.length,a=0;a<o;a++)if(c=e[a],l=v.style[c],~(""+c).indexOf("-")&&(c=c.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),v.style[c]!==p){if(r||m(n,"undefined"))return f(),"pfx"!=t||c;try{v.style[c]=n}catch(e){}if(v.style[c]!=l)return f(),"pfx"!=t||c}return f(),!1}(a,t,r,s):function(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:m(r=t[e[s]],"function")?z(r,n||t):r;return!1}(a=(e+" "+f.join(i+" ")+i).split(" "),t,n)}function w(e,t,n){return r(e,p,p,t,n)}e._domPrefixes=f,e.testAllProps=r,e.testAllProps=w,c.addTest("flexbox",w("flexBasis","1px",!0)),c.addTest("svg",!!d.createElementNS&&!!d.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,s,i;for(var a in o)if(o.hasOwnProperty(a)){if(e=[],(t=o[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=m(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(i=e[s].split(".")).length?c[i[0]]=r:(!c[i[0]]||c[i[0]]instanceof Boolean||(c[i[0]]=new Boolean(c[i[0]])),c[i[0]][i[1]]=r),l.push((r?"":"no-")+i.join("-"))}}(),function(e){var t=h.className,n=c._config.classPrefix||"";if(g&&(t=t.baseVal),c._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}c._config.enableClasses&&(t+=" "+n+e.join(" "+n),g?h.className.baseVal=t:h.className=t)}(l),delete e.addTest,delete e.addAsyncTest;for(var C=0;C<c._q.length;C++)c._q[C]();i.Modernizr=c}(window,document)},function(fe,de,pe){var me,e,t,s,n,r,i,a,o,c;e=window,c=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(s=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=s.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)},s.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i)),function(e,i,l){"use strict";var s,u,c;i.createElement("picture");var b={},a=!1,t=function(){},n=i.createElement("img"),f=n.getAttribute,d=n.setAttribute,p=n.removeAttribute,o=i.documentElement,r={},S={algorithm:""},m="data-pfsrc",h=m+"set",g=navigator.userAgent,x=/rident/.test(g)||/ecko/.test(g)&&g.match(/rv\:(\d+)/)&&35<RegExp.$1,E="currentSrc",A=/\s+\+?\d+(e\d+)?w/,v=/(\([^)]+\))?\s*(.+)/,y=e.picturefillCFG,z="font-size:100%!important;",w=!0,C={},T={},M=e.devicePixelRatio,P={px:1,in:96},R=i.createElement("a"),L=!1,N=/^[ \t\n\r\u000c]+/,_=/^[, \t\n\r\u000c]+/,B=/^[^ \t\n\r\u000c]+/,k=/[,]+$/,W=/^\d+$/,$=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,D=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},I=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function U(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var F,O,H,j,q,Q,G,V,J,K,X,Z,Y,ee,te,ne,re,se,ie,ae=(F=/^([\d\.]+)(em|vw|px)$/,O=I(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in C))if(C[e]=!1,t&&(n=e.match(F)))C[e]=n[1]*P[n[2]];else try{C[e]=new Function("e",O(e))(P)}catch(e){}return C[e]}),oe=function(e,t){return e.w?(e.cWidth=b.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ce=function(e){if(a){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=(t=s.elements||b.qsa(s.context||i,s.reevaluate||s.reselect?b.sel:b.selShort)).length){for(b.setupRun(s),L=!0,n=0;n<r;n++)b.fillImg(t[n],s);b.teardownRun(s)}}};function le(e,t){return e.res-t.res}function ue(e,t){var n,r,s;if(e&&t)for(s=b.parseSet(t),e=b.makeUrl(e),n=0;n<s.length;n++)if(e===b.makeUrl(s[n].url)){r=s[n];break}return r}e.console&&console.warn,E in n||(E="src"),r["image/jpeg"]=!0,r["image/gif"]=!0,r["image/png"]=!0,r["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b.ns=("pf"+(new Date).getTime()).substr(0,9),b.supSrcset="srcset"in n,b.supSizes="sizes"in n,b.supPicture=!!e.HTMLPictureElement,b.supSrcset&&b.supPicture&&!b.supSizes&&(H=i.createElement("img"),n.srcset="data:,a",H.src="data:,a",b.supSrcset=n.complete===H.complete,b.supPicture=b.supSrcset&&b.supPicture),b.supSrcset&&!b.supSizes?(j="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",q=i.createElement("img"),Q=function(){2===q.width&&(b.supSizes=!0),u=b.supSrcset&&!b.supSizes,a=!0,setTimeout(ce)},q.onload=Q,q.onerror=Q,q.setAttribute("sizes","9px"),q.srcset=j+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",q.src=j):a=!0,b.selShort="picture>img,img[srcset]",b.sel=b.selShort,b.cfg=S,b.DPR=M||1,b.u=P,b.types=r,b.setSize=t,b.makeUrl=I(function(e){return R.href=e,R.href}),b.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},b.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?b.matchesMedia=function(e){return!e||matchMedia(e).matches}:b.matchesMedia=b.mMQ,b.matchesMedia.apply(this,arguments)},b.mMQ=function(e){return!e||ae(e)},b.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},b.supportsType=function(e){return!e||r[e]},b.parseSize=I(function(e){var t=(e||"").match(v);return{media:t&&t[1],length:t&&t[2]}}),b.parseSet=function(e){return e.cands||(e.cands=function(r,f){function e(e){var t,n=e.exec(r.substring(a));if(n)return t=n[0],a+=t.length,t}var d,p,t,n,s,i=r.length,a=0,m=[];function o(){var e,t,n,r,s,i,a,o,c,l=!1,u={};for(r=0;r<p.length;r++)i=(s=p[r])[s.length-1],a=s.substring(0,s.length-1),o=parseInt(a,10),c=parseFloat(a),W.test(a)&&"w"===i?((e||t)&&(l=!0),0===o?l=!0:e=o):$.test(a)&&"x"===i?((e||t||n)&&(l=!0),c<0?l=!0:t=c):W.test(a)&&"h"===i?((n||t)&&(l=!0),0===o?l=!0:n=o):l=!0;l||(u.url=d,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(f.has1x=!0),u.set=f,m.push(u))}function c(){for(e(N),t="",n="in descriptor";;){if(s=r.charAt(a),"in descriptor"===n)if(U(s))t&&(p.push(t),t="",n="after descriptor");else{if(","===s)return a+=1,t&&p.push(t),void o();if("("===s)t+=s,n="in parens";else{if(""===s)return t&&p.push(t),void o();t+=s}}else if("in parens"===n)if(")"===s)t+=s,n="in descriptor";else{if(""===s)return p.push(t),void o();t+=s}else if("after descriptor"===n)if(U(s));else{if(""===s)return void o();n="in descriptor",a-=1}a+=1}}for(;;){if(e(_),i<=a)return m;d=e(B),p=[],","===d.slice(-1)?(d=d.replace(k,""),o()):c()}}(e.srcset,e)),e.cands},b.getEmValue=function(){var e;if(!s&&(e=i.body)){var t=i.createElement("div"),n=o.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",o.style.cssText=z,e.style.cssText=z,e.appendChild(t),s=t.offsetWidth,e.removeChild(t),s=parseFloat(s,10),o.style.cssText=n,e.style.cssText=r}return s||16},b.calcListLength=function(e){if(!(e in T)||S.uT){var t=b.calcLength(function(e){var t,n,r,s,i,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],s=[],i=0,a=0,o=!1;function c(){n&&(r.push(n),n="")}function l(){r[0]&&(s.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),s;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(U(t)){if(e.charAt(a-1)&&U(e.charAt(a-1))||!n){a+=1;continue}if(0===i){c(),a+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<r;t++)if(i=(s=n[t])[s.length-1],o=i,c.test(o)&&0<=parseFloat(o)||l.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=i,s.pop(),0===s.length)return a;if(s=s.join(" "),b.matchesMedia(s))return a}return"100vw"}(e));T[e]=t||P.width}return T[e]},b.setRes=function(e){var t;if(e)for(var n=0,r=(t=b.parseSet(e)).length;n<r;n++)oe(t[n],e.sizes);return t},b.setRes.res=oe,b.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,l,u,f,d,p,m,h,g,A,v,y,z,w=t[b.ns],C=b.DPR;if(o=w.curSrc||t[E],(c=w.curCan||(f=t,d=o,!(p=e[0].set)&&d&&(p=(p=f[b.ns].sets)&&p[p.length-1]),(m=ue(d,p))&&(d=b.makeUrl(d),f[b.ns].curSrc=d,(f[b.ns].curCan=m).res||oe(m,m.set.sizes)),m))&&c.set===e[0].set&&((u=x&&!t.complete&&c.res-.1>C)||(c.cached=!0,c.res>=C&&(a=c))),!a)for(e.sort(le),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=C){a=e[s=r-1]&&(u||o!==b.makeUrl(n.url))&&(h=e[s].res,g=n.res,A=C,v=e[s].cached,z=y=void 0,A<("saveData"===S.algorithm?2.7<h?A+1:(z=(g-A)*(y=Math.pow(h-.6,1.5)),v&&(z+=.1*y),h+z):1<A?Math.sqrt(h*g):h))?e[s]:n;break}a&&(l=b.makeUrl(a.url),w.curSrc=l,w.curCan=a,l!==o&&b.setSrc(t,a),b.setSize(t))}},b.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},b.getSet=function(e){var t,n,r,s=!1,i=e[b.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&b.matchesMedia(n.media)&&(r=b.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},b.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[b.ns];(c.src===l||n.src)&&(c.src=f.call(e,"src"),c.src?d.call(e,m,c.src):p.call(e,m)),(c.srcset===l||n.srcset||!b.supSrcset||e.srcset)&&(r=f.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[b.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:f.call(e,"sizes")},c.sets.push(s),(i=(u||c.src)&&A.test(c.srcset||""))||!c.src||ue(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=l,c.supported=!(o||s&&!b.supSrcset||i&&!b.supSizes),a&&b.supSrcset&&!c.supported&&(r?(d.call(e,h,r),e.srcset=""):p.call(e,h)),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==b.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},b.fillImg=function(e,t){var n,r,s,i,a,o=t.reselect||t.reevaluate;(e[b.ns]||(e[b.ns]={}),n=e[b.ns],o||n.evaled!==c)&&(n.parsed&&!t.reevaluate||b.parseSets(e,e.parentNode,t),n.supported?n.evaled=c:(r=e,i=b.getSet(r),a=!1,"pending"!==i&&(a=c,i&&(s=b.setRes(i),b.applySetCandidate(s,r))),r[b.ns].evaled=a))},b.setupRun=function(){L&&!w&&M===e.devicePixelRatio||(w=!1,M=e.devicePixelRatio,C={},T={},b.DPR=M||1,P.width=Math.max(e.innerWidth||0,o.clientWidth),P.height=Math.max(e.innerHeight||0,o.clientHeight),P.vw=P.width/100,P.vh=P.height/100,c=[P.height,P.width,M].join("-"),P.em=b.getEmValue(),P.rem=P.em)},b.supPicture?(ce=t,b.fillImg=t):(Y=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=i.readyState||"";te=setTimeout(ee,"loading"===e?200:999),i.body&&(b.fillImgs(),(G=G||Y.test(e))&&clearTimeout(te))},te=setTimeout(ee,i.body?9:99),ne=o.clientHeight,D(e,"resize",(V=function(){w=Math.max(e.innerWidth||0,o.clientWidth)!==P.width||o.clientHeight!==ne,ne=o.clientHeight,w&&b.fillImgs()},J=99,Z=function(){var e=new Date-X;e<J?K=setTimeout(Z,J-e):(K=null,V())},function(){X=new Date,K||(K=setTimeout(Z,J))})),D(i,"readystatechange",ee)),b.picturefill=ce,b.fillImgs=ce,b.teardownRun=t,ce._=b,e.picturefillCFG={pf:b,push:function(e){var t=e.shift();"function"==typeof b[t]?b[t].apply(b,e):(S[t]=e[0],L&&b.fillImgs({reselect:!0}))}};for(;y&&y.length;)e.picturefillCFG.push(y.shift());e.picturefill=ce,"object"==typeof fe&&"object"==typeof fe.exports?fe.exports=ce:(me=function(){return ce}.call(de,pe,de,fe))===l||(fe.exports=me),b.supPicture||(r["image/webp"]=(re="image/webp",se="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ie=new e.Image).onerror=function(){r[re]=!1,ce()},ie.onload=function(){r[re]=1===ie.width,ce()},ie.src=se,"pending"))}(window,document)},function(e,t){var n,r;n=window,r=function(r,l){"use strict";if(!l.getElementsByClassName)return;var f,u=l.documentElement,i=r.Date,s=r.HTMLPictureElement,a="addEventListener",d="getAttribute",t=r[a],p=r.setTimeout,n=r.requestAnimationFrame||p,o=r.requestIdleCallback,m=/^picture$/i,c=["load","error","lazyincluded","_lazyloaded"],h={},g=Array.prototype.forEach,A=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[d]("class")||"")&&h[t]},v=function(e,t){A(e,t)||e.setAttribute("class",(e[d]("class")||"").trim()+" "+t)},y=function(e,t){var n;(n=A(e,t))&&e.setAttribute("class",(e[d]("class")||"").replace(n," "))},z=function(t,n,e){var r=e?a:"removeEventListener";e&&z(t,n),c.forEach(function(e){t[r](e,n)})},w=function(e,t,n,r,s){var i=l.createEvent("CustomEvent");return i.initCustomEvent(t,!r,!s,n||{}),e.dispatchEvent(i),i},C=function(e,t){var n;!s&&(n=r.picturefill||f.pf)?n({reevaluate:!0,elements:[e]}):t&&t.src&&(e.src=t.src)},b=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<f.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},x=(ze=[],we=function(){var e;for(ye=!(ve=!0);ze.length;)(e=ze.shift())[0].apply(e[1],e[2]);ve=!1},Ce=function(e){ve?e.apply(this,arguments):(ze.push([e,this,arguments]),ye||(ye=!0,(l.hidden?p:n)(we)))},Ce._lsFlush=we,Ce),e=function(n,e){return e?function(){x(n)}:function(){var e=this,t=arguments;x(function(){n.apply(e,t)})}},E=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?p(s,99-e):(o||r)(r)};return function(){n=i.now(),t||(t=p(s,99))}},T=(te=/^img$/i,ne=/^iframe$/i,re="onscroll"in r&&!/glebot/.test(navigator.userAgent),se=0,ie=0,ae=-1,oe=function(e){ie--,e&&e.target&&z(e.target,oe),(!e||ie<0||!e.target)&&(ie=0)},ce=function(e,t){var n,r=e,s="hidden"==b(l.body,"visibility")||"hidden"!=b(e,"visibility");for(O-=t,q+=t,H-=t,j+=t;s&&(r=r.offsetParent)&&r!=l.body&&r!=u;)(s=0<(b(r,"opacity")||1))&&"visible"!=b(r,"overflow")&&(n=r.getBoundingClientRect(),s=j>n.left&&H<n.right&&q>n.top-1&&O<n.bottom+1);return s},le=function(){var e,t,n,r,s,i,a,o,c;if((D=f.loadMode)&&ie<8&&(e=B.length)){t=0,ae++,null==G&&("expand"in f||(f.expand=500<u.clientHeight&&500<u.clientWidth?500:370),Q=f.expand,G=Q*f.expFactor),se<G&&ie<1&&2<ae&&2<D&&!l.hidden?(se=G,ae=0):se=1<D&&1<ae&&ie<6?Q:0;for(;t<e;t++)if(B[t]&&!B[t]._lazyRace)if(re)if((o=B[t][d]("data-expand"))&&(i=1*o)||(i=se),c!==i&&(U=innerWidth+i*V,F=innerHeight+i,a=-1*i,c=i),n=B[t].getBoundingClientRect(),(q=n.bottom)>=a&&(O=n.top)<=F&&(j=n.right)>=a*V&&(H=n.left)<=U&&(q||j||H||O)&&(W&&ie<3&&!o&&(D<3||ae<4)||ce(B[t],i))){if(ge(B[t]),s=!0,9<ie)break}else!s&&W&&!r&&ie<4&&ae<4&&2<D&&(k[0]||f.preloadAfterLoad)&&(k[0]||!o&&(q||j||H||O||"auto"!=B[t][d](f.sizesAttr)))&&(r=k[0]||B[t]);else ge(B[t]);r&&!s&&ge(r)}},J=le,X=0,Z=666,Y=function(){K=!1,X=i.now(),J()},ee=o?function(){o(Y,{timeout:Z}),666!==Z&&(Z=666)}:e(function(){p(Y)},!0),ue=function(e){var t;(e=!0===e)&&(Z=44),K||(K=!0,(t=125-(i.now()-X))<0&&(t=0),e||t<9&&o?ee():p(ee,t))},fe=function(e){v(e.target,f.loadedClass),y(e.target,f.loadingClass),z(e.target,pe)},de=e(fe),pe=function(e){de({target:e.target})},me=function(e){var t,n,r=e[d](f.srcsetAttr);(t=f.customMedia[e[d]("data-media")||e[d]("media")])&&e.setAttribute("media",t),r&&e.setAttribute("srcset",r),t&&((n=e.parentNode).insertBefore(e.cloneNode(),e),n.removeChild(e))},he=e(function(e,t,n,r,s){var i,a,o,c,l,u;(l=w(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?v(e,f.autosizesClass):e.setAttribute("sizes",r)),a=e[d](f.srcsetAttr),i=e[d](f.srcAttr),s&&(o=e.parentNode,c=o&&m.test(o.nodeName||"")),u=t.firesLoad||"src"in e&&(a||i||c),l={target:e},u&&(z(e,oe,!0),clearTimeout($),$=p(oe,2500),v(e,f.loadingClass),z(e,pe,!0)),c&&g.call(o.getElementsByTagName("source"),me),a?e.setAttribute("srcset",a):i&&!c&&(ne.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,i):e.src=i),(a||c)&&C(e,{src:i})),x(function(){e._lazyRace&&delete e._lazyRace,y(e,f.lazyClass),u&&!e.complete||(u?oe(l):ie--,fe(l))})}),ge=function(e){var t,n=te.test(e.nodeName),r=n&&(e[d](f.sizesAttr)||e[d]("sizes")),s="auto"==r;(!s&&W||!n||!e.src&&!e.srcset||e.complete||A(e,f.errorClass))&&(t=w(e,"lazyunveilread").detail,s&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ie++,he(e,t,s,r,n))},Ae=function(){if(!W)if(i.now()-I<999)p(Ae,999);else{var e=E(function(){f.loadMode=3,ue()});W=!0,f.loadMode=3,ue(),t("scroll",function(){3==f.loadMode&&(f.loadMode=2),e()},!0)}},{_:function(){I=i.now(),B=l.getElementsByClassName(f.lazyClass),k=l.getElementsByClassName(f.lazyClass+" "+f.preloadClass),V=f.hFac,t("scroll",ue,!0),t("resize",ue,!0),r.MutationObserver?new MutationObserver(ue).observe(u,{childList:!0,subtree:!0,attributes:!0}):(u[a]("DOMNodeInserted",ue,!0),u[a]("DOMAttrModified",ue,!0),setInterval(ue,999)),t("hashchange",ue,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){l[a](e,ue,!0)}),/d$|^c/.test(l.readyState)?Ae():(t("load",Ae),l[a]("DOMContentLoaded",ue),p(Ae,2e4)),B.length?le():ue()},checkElems:ue,unveil:ge}),M=(L=e(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),m.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||C(e,n.detail)}),N=function(e,t,n){var r,s=e.parentNode;s&&(n=S(e,s,n),(r=w(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&L(e,s,r,n))},_=E(function(){var e,t=R.length;if(t)for(e=0;e<t;e++)N(R[e])}),{_:function(){R=l.getElementsByClassName(f.autosizesClass),t("resize",_)},checkElems:_,updateElem:N}),P=function(){P.i||(P.i=!0,M._(),T._())};var R,L,N,_;var B,k,W,$,D,I,U,F,O,H,j,q,Q,G,V,J,K,X,Z,Y,ee,te,ne,re,se,ie,ae,oe,ce,le,ue,fe,de,pe,me,he,ge,Ae;var ve,ye,ze,we,Ce;return function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};for(e in f=r.lazySizesConfig||r.lazysizesConfig||{},t)e in f||(f[e]=t[e]);r.lazySizesConfig=f,p(function(){f.init&&P()})}(),{cfg:f,autoSizer:M,loader:T,init:P,uP:C,aC:v,rC:y,hC:A,fire:w,gW:S,rAF:x}}(n,n.document),n.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}]);