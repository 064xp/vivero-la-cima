(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(155),o=n(5),s=n.n(o),c=(n(142),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return r.a.createElement("section",{style:{overflow:"hidden",width:"101vw",height:"91vh"}},r.a.createElement("iframe",{id:"juicer-iframe",src:"https://www.juicer.io/api/feeds/lacimazap/iframe",frameBorder:"0",width:"1000",height:"1000"}))},t}(r.a.Component));t.default=function(e){return r.a.createElement(i.a,null,r.a.createElement("div",{style:{padding:"60px 0 0 0",background:"#214726"}},r.a.createElement(c,null)))}},150:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(156)),i=a(n(157)),o=a(n(5)),s=a(n(52)),c=a(n(53)),l=a(n(4)),u=a(n(0)),d=n(23),f=n(151);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(e){function t(t){var n;n=e.call(this,t)||this,(0,c.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,s=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=p(n);return u.default.createElement(d.Link,(0,i.default)({to:v,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:h})),!0}},m))},t}(u.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=u.default.forwardRef(function(e,t){return u.default.createElement(m,(0,i.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p}),n.d(t,"useStaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(150),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(152),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(f);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Vivero la Cima"}}}}},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(54),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},155:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(151),l=(n(139),n(74),n(5)),u=n.n(l),d=(n(140),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={navEl:null},t}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.querySelector(".stickyNavbar");this.setState({navEl:e}),window.addEventListener("scroll",this.throttle(this.scrollHandler.bind(this)))},n.scrollHandler=function(){window.scrollY>20?this.state.navEl.classList.add("sticked"):this.state.navEl.classList.remove("sticked")},n.clickHandler=function(e){if("/"===window.location.pathname&&window.scrollTo){e.preventDefault();var t=window.innerWidth<=730?-55:-65,n=e.target.getAttribute("href").split("#")[1],a=document.querySelector("#"+n).offsetTop;window.scrollTo({top:a+t,behavior:"smooth"}),console.log(document.querySelector("#"+n)),console.log(a)}else{var r=e.target.getAttribute("href");console.log(r),Object(c.navigate)(r)}document.querySelector(".nav-push").classList.remove("slideOver"),document.querySelector(".stickyNavbar").classList.remove("nav-items-show")},n.hamburgerClick=function(){var e=document.querySelector(".nav-push"),t=document.querySelector(".stickyNavbar");e.classList.toggle("slideOver"),t.classList.toggle("nav-items-show")},n.throttle=function(e,t){var n=!1;return function(){n||(e.call(),n=!0,setTimeout(function(){n=!1},t))}},n.render=function(){return i.a.createElement("nav",{className:"stickyNavbar"},i.a.createElement(c.Link,{to:"/#inicio"},i.a.createElement("figure",{className:"nav-brand"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 118.8 39.2"},i.a.createElement("path",{d:"M0 38l19.6-23.5 11.2 2.6L46 0l8.8 8.6 2.4-1.8 12.3 13.4 15.9-8.8 11 8.8 5.5-3.5 17 14.5-16.6-9.6 2 8.8-19-16.1-11 6.6 8 17.2-25-27.5-3 2.2L45.8 5 27.3 39 29.5 20l-10-2.5z"})))),i.a.createElement("div",{className:"nav-items"},i.a.createElement(c.Link,{to:"/#inicio",onClick:this.clickHandler.bind(this),className:"nav-item"},"Inicio"),i.a.createElement(c.Link,{to:"/#seleccion",onClick:this.clickHandler.bind(this),className:"nav-item"},"Selección"),i.a.createElement("a",{href:"https://www.facebook.com/pg/lacimazap/shop/",target:"_",className:"nav-item"},"Tienda"),i.a.createElement(c.Link,{to:"galeria",className:"nav-item"},"Galería"),i.a.createElement(c.Link,{to:"/#contacto",onClick:this.clickHandler.bind(this),className:"nav-item"},"Contacto")),i.a.createElement("svg",{id:"hamburger-toggle",onClick:this.hamburgerClick,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16.630943 9.6881733"},i.a.createElement("g",{transform:"translate(-103.51822 -70.023682)"},i.a.createElement("rect",{id:"hamburger-top-bar",ry:".12750432",rx:"0",y:"70.023682",x:"103.51822",height:"1.1450591",width:"16.630943"}),i.a.createElement("rect",{id:"hamburger-bottom-bar",width:"16.630943",height:"1.1450591",x:"103.51822",y:"78.566795",rx:"0",ry:".12750432"}),i.a.createElement("rect",{id:"hamburger-middle-bar",ry:".12750432",rx:"0",y:"74.295242",x:"106.0742",height:"1.1450591",width:"14.074958"}))))},t}(i.a.Component)),f=(n(73),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement("main",{className:"nav-push"},t))},data:a})});f.propTypes={children:s.a.node.isRequired};t.a=f},156:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},157:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-galeria-js-42788afa88128f0fe1a0.js.map