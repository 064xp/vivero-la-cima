(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{169:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function(e,t,i){for(var n=!0;n;){var s=e,o=t,r=i;n=!1,null===s&&(s=Function.prototype);var a=Object.getOwnPropertyDescriptor(s,o);if(void 0!==a){if("value"in a)return a.value;var l=a.get;if(void 0===l)return;return l.call(r)}var c=Object.getPrototypeOf(s);if(null===c)return;e=c,t=o,i=r,n=!0,a=c=void 0}};function o(e){return e&&e.__esModule?e:{default:e}}var r=i(0),a=o(r),l=o(i(170)),c=o(i(4)),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,l.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var i=this;this.delayedAnimationTimeout=setTimeout(function(){i.animating=!0,i.setState({classes:"animated "+e,style:{animationDuration:i.props.duration+"s"}}),i.callbackTimeout=setTimeout(t,1e3*i.props.duration)},this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var i=t.getVisibility();e&&e(i)})}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var i=t.getVisibility();i.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(i)})}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return a.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}();t.default=u,u.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},u.propTypes={animateIn:c.default.string,animateOut:c.default.string,offset:c.default.number,duration:c.default.number,delay:c.default.number,initiallyVisible:c.default.bool,animateOnce:c.default.bool,style:c.default.object,scrollableParentSelector:c.default.string,className:c.default.string,animatePreScroll:c.default.bool},e.exports=t.default},170:function(e,t,i){(function(t){var i="Expected a function",n=NaN,s="[object Symbol]",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),p=Object.prototype.toString,h=Math.max,g=Math.min,b=function(){return f.Date.now()};function y(e,t,n){var s,o,r,a,l,c,u=0,d=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var i=s,n=o;return s=o=void 0,u=t,a=e.apply(n,i)}function w(e){var i=e-c;return void 0===c||i>=t||i<0||f&&e-u>=r}function S(){var e=b();if(w(e))return k(e);l=setTimeout(S,function(e){var i=t-(e-c);return f?g(i,r-(e-u)):i}(e))}function k(e){return l=void 0,p&&s?y(e):(s=o=void 0,a)}function O(){var e=b(),i=w(e);if(s=arguments,o=this,c=e,i){if(void 0===l)return function(e){return u=e,l=setTimeout(S,t),d?y(e):a}(c);if(f)return l=setTimeout(S,t),y(c)}return void 0===l&&(l=setTimeout(S,t)),a}return t=v(t)||0,m(n)&&(d=!!n.leading,r=(f="maxWait"in n)?h(v(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==l&&clearTimeout(l),u=0,s=c=o=l=void 0},O.flush=function(){return void 0===l?a:k(b())},O}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==s}(e))return n;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=a.test(e);return i||l.test(e)?c(e.slice(2),i?2:8):r.test(e)?n:+e}e.exports=function(e,t,n){var s=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return m(n)&&(s="leading"in n?!!n.leading:s,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:s,maxWait:t,trailing:o})}}).call(this,i(75))},172:function(e,t,i){"use strict";var n=i(8);t.__esModule=!0,t.default=t.createImageToLoad=void 0;var s=n(i(0)),o=n(i(4)),r=n(i(173));const a=e=>{let t=Object.assign({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},l=e=>{if("undefined"!=typeof window){const t=a(e),i=new Image;return i.complete||"function"!=typeof t.onLoad||i.addEventListener("load",t.onLoad),"function"==typeof t.onError&&i.addEventListener("error",t.onError),i.src=t.fluid?t.fluid.src:t.fixed.src,i}return null};t.createImageToLoad=l;const c={},u=e=>{const t=a(e),i=t.fluid?t.fluid.src:t.fixed.src;return c[i]||!1},d=e=>{const t=a(e),i=t.fluid?t.fluid.src:t.fixed.src;c[i]=!0};let f;const p=[];const h=(e,t)=>{(void 0===f&&"undefined"!=typeof window&&window.IntersectionObserver&&(f=new window.IntersectionObserver(e=>{e.forEach(e=>{p.forEach(t=>{t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),f).observe(e),p.push([e,t])},g=e=>{const t=e.src?`src="${e.src}" `:'src="" ',i=e.sizes?`sizes="${e.sizes}" `:"",n=e.srcSetWebp?`<source type='image/webp' srcSet="${e.srcSetWebp}" ${i}/>`:"",s=e.srcSet?`<source srcSet="${e.srcSet}" ${i}/>`:"",o=e.title?`title="${e.title}" `:"",r=e.alt?`alt="${e.alt}" `:'alt="" ',a=e.width?`width="${e.width}" `:"",l=e.height?`height="${e.height}" `:"",c=e.opacity?e.opacity:"1";return`<picture>${n}${s}<img ${a}${l}${t}${r}${o}style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:${e.transitionDelay?e.transitionDelay:"0.5s"};opacity:${c};width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`},b=({classId:e,backgroundSize:t,backgroundRepeat:i,transitionDelay:n,bgImage:s,nextImage:o,afterOpacity:r,bgColor:a})=>`\n          .gatsby-background-image-${e}:before,\n          .gatsby-background-image-${e}:after {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            -webkit-background-size: ${t};\n            -moz-background-size: ${t};\n            -o-background-size: ${t};\n            background-size: ${t};\n            transition: opacity ${n} ease-in-out;\n            -webkit-transition: opacity ${n} ease-in-out;\n            -moz-transition: opacity ${n} ease-in-out;\n            -o-transition: opacity ${n} ease-in-out;\n          }\n          .gatsby-background-image-${e}:before {\n            z-index: -101;\n            background-color: ${a};\n            background-image: url(${s});\n            ${i}\n          }\n          .gatsby-background-image-${e}:after {\n            z-index: -100;\n            background-image: url(${o});\n            ${i}\n            opacity: ${r};\n          }\n        `;class y extends s.default.Component{constructor(e){super(e);let t=!0,i=!1,n=e.fadeIn;const s=u(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,i=!0),"undefined"==typeof window&&(t=!1),e.critical&&(t=!0,i=!1);const o=!(this.props.critical&&!this.props.fadeIn);this.state={isVisible:t,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:s},this.bgImage="",this.backgroundStyles=(0,r.default)(this.props.className),this.imageRef=l(this.props),this.handleImageLoaded=this.handleImageLoaded.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:u(this.props)}),this.props.critical){const e=this.imageRef;e&&e.complete&&this.handleImageLoaded()}}handleRef(e){this.state.IOSupported&&e&&h(e,()=>{this.state.isVisible||"function"!=typeof this.props.onStartLoad||this.props.onStartLoad({wasCached:u(this.props)}),this.setState({isVisible:!0,imgLoaded:!1})})}handleImageLoaded(){d(this.props),this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()}render(){const e=a(this.props),t=e.title,i=e.alt,n=e.className,o=e.style,r=void 0===o?{}:o,l=e.fluid,c=e.fixed,u=e.backgroundColor,d=e.Tag,f=e.classId,p=void 0===f?Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7):f,h=e.children,y="boolean"==typeof u?"lightgray":u,m=this.backgroundStyles.hasOwnProperty("backgroundSize")?this.backgroundStyles.backgroundSize:"cover",v=`background-repeat: ${this.backgroundStyles.hasOwnProperty("backgroundRepeat")?this.backgroundStyles.backgroundRepeat:"no-repeat"};`,w=this.state.imgLoaded?"0.5s":"0.25s";if(l){const e=l;let o=this.bgImage,a=null;e.tracedSVG&&(a=`"${e.tracedSVG}"`),e.base64&&!e.tracedSVG&&(a=e.base64),this.state.isVisible&&(a=e.src);const c=a!==(o=""===o?a:this.bgImage)||!1===this.state.fadeIn?1:0;this.bgImage=o;const u={classId:p,backgroundSize:m,backgroundRepeat:v,transitionDelay:w,bgImage:o,nextImage:a,afterOpacity:c,bgColor:y};return s.default.createElement(d,{className:`${n||""} gatsby-background-image-${p} gatsby-image-wrapper`,style:Object.assign({position:"relative",overflow:"hidden"},r,this.backgroundStyles),ref:this.handleRef,key:`fluid-${JSON.stringify(e.srcSet)}`},s.default.createElement("style",{dangerouslySetInnerHTML:{__html:b(u)}}),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g(Object.assign({alt:i,title:t},e))}}),h)}if(c){const e=c,o=Object.assign({position:"relative",overflow:"hidden",display:"inline-block",width:e.width,height:e.height},r);"inherit"===r.display&&delete o.display;let a=this.bgImage,l="";e.tracedSVG&&(l=`'${e.tracedSVG}'`),e.base64&&!e.tracedSVG&&(l=e.base64),this.state.isVisible&&(l=e.src);const u=l!==(a=""===a?l:"")?1:0;this.bgImage=a;const f={classId:p,backgroundSize:m,backgroundRepeat:v,transitionDelay:w,bgImage:a,nextImage:l,afterOpacity:u};return s.default.createElement(d,{className:`${n||""} gatsby-background-image-${p} gatsby-image-wrapper`,style:Object.assign({},o,this.backgroundStyles),ref:this.handleRef,key:`fixed-${JSON.stringify(e.srcSet)}`},s.default.createElement("style",{dangerouslySetInnerHTML:{__html:b(f)}}),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g(Object.assign({alt:i,title:t,width:e.width,height:e.height},e))}}),h)}return null}}y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};const m=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),v=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});y.propTypes={resolutions:m,sizes:v,fixed:m,fluid:v,fadeIn:o.default.bool,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,classId:o.default.string};var w=y;t.default=w},173:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;const n=e=>{const t=function(e){if("undefined"!=typeof document){const t=document.implementation.createHTMLDocument(""),i=document.createElement("style");return i.textContent=e,t.body.appendChild(i),i.sheet.cssRules}return{}}((e=>{const t="undefined"!=typeof window?window.document.styleSheets:[];for(let n=0;n<t.length;n++){let s;try{s=void 0!==t[n].rules?t[n].rules:void 0!==t[n].cssRules?t[n].cssRules:""}catch(i){console.debug(`Unable to read stylesheet rules for ${t[n].href}`,i)}if(s)for(let t=0;t<s.length;t++)if(s[t].selectorText===e){const e=s[t].cssText?s[t].cssText:s[t].style.cssText;return-1===e.indexOf(s[t].selectorText)?`${s[t].selectorText}{${e}}`:e}}})(`.${e}`));return t.length>0&&void 0!==t[0].style?Object.keys((e=>{let t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name){case"CSS2Properties":Object.values(e[0].style).forEach(i=>{t[(e=>e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(e,t)=>0===t?e.toLowerCase():e.toUpperCase()).replace(/\s|\W+/g,""))(i)]=e[0].style[i]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t})(t)).filter(e=>0===e.indexOf("background")&&""!==t[0].style[e]).reduce((e,i)=>(e[i]=t[0].style[i],e),{}):{}};var s=e=>{if("undefined"!=typeof window&&null!==e&&(e instanceof Object||e instanceof String||"string"==typeof e)&&!(e instanceof Array)){if(e.includes(" ")){const t=e.split(" ");let i=[];return t.forEach(e=>i.push(n(e))),Object.assign(...i)}return n(e)}return{}};t.default=s}}]);
//# sourceMappingURL=8-cc20d3b97ba7ac46dfb5.js.map