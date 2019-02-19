(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),o=a(157);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h}),a.d(t,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(149),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(151),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Vivero la Cima"}}}}},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(150),l=(a(139),a(74),a(5)),u=a.n(l),d=(a(140),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navEl:null},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=document.querySelector(".stickyNavbar");this.setState({navEl:e}),window.addEventListener("scroll",this.throttle(this.scrollHandler.bind(this)))},a.scrollHandler=function(){window.scrollY>20?this.state.navEl.classList.add("sticked"):this.state.navEl.classList.remove("sticked")},a.clickHandler=function(e){if("/"===window.location.pathname&&window.scrollTo){e.preventDefault();var t=e.target.getAttribute("href").split("#")[1],a=document.querySelector("#"+t).offsetTop;window.scrollTo({top:a+-44,behavior:"smooth"}),console.log(document.querySelector("#"+t)),console.log(a)}else{var n=e.target.getAttribute("href");console.log(n),Object(s.navigate)(n)}document.querySelector(".nav-push").classList.remove("slideOver"),document.querySelector(".stickyNavbar").classList.remove("nav-items-show")},a.hamburgerClick=function(){var e=document.querySelector(".nav-push"),t=document.querySelector(".stickyNavbar");e.classList.toggle("slideOver"),t.classList.toggle("nav-items-show")},a.throttle=function(e,t){var a=!1;return function(){a||(e.call(),a=!0,setTimeout(function(){a=!1},t))}},a.render=function(){return i.a.createElement("nav",{className:"stickyNavbar"},i.a.createElement(s.Link,{to:"/#inicio"},i.a.createElement("figure",{className:"nav-brand"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 118.8 39.2"},i.a.createElement("path",{d:"M0 38l19.6-23.5 11.2 2.6L46 0l8.8 8.6 2.4-1.8 12.3 13.4 15.9-8.8 11 8.8 5.5-3.5 17 14.5-16.6-9.6 2 8.8-19-16.1-11 6.6 8 17.2-25-27.5-3 2.2L45.8 5 27.3 39 29.5 20l-10-2.5z"})))),i.a.createElement("div",{className:"nav-items"},i.a.createElement(s.Link,{to:"/#inicio",onClick:this.clickHandler.bind(this),className:"nav-item"},"Inicio"),i.a.createElement(s.Link,{to:"/#seleccion",onClick:this.clickHandler.bind(this),className:"nav-item"},"Selección"),i.a.createElement(s.Link,{to:"/galeria",className:"nav-item"},"Galería"),i.a.createElement(s.Link,{to:"/#contacto",onClick:this.clickHandler.bind(this),className:"nav-item"},"Contacto")),i.a.createElement("svg",{id:"hamburger-toggle",onClick:this.hamburgerClick,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16.630943 9.6881733"},i.a.createElement("g",{transform:"translate(-103.51822 -70.023682)"},i.a.createElement("rect",{id:"hamburger-top-bar",ry:".12750432",rx:"0",y:"70.023682",x:"103.51822",height:"1.1450591",width:"16.630943"}),i.a.createElement("rect",{id:"hamburger-bottom-bar",width:"16.630943",height:"1.1450591",x:"103.51822",y:"78.566795",rx:"0",ry:".12750432"}),i.a.createElement("rect",{id:"hamburger-middle-bar",ry:".12750432",rx:"0",y:"74.295242",x:"106.0742",height:"1.1450591",width:"14.074958"}))))},t}(i.a.Component)),m=(a(73),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement("main",{className:"nav-push"},t))},data:n})});m.propTypes={children:c.a.node.isRequired};t.a=m},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(160),l=a.n(s),u=a(150),d=a(159),m=a.n(d);function h(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r),link:[{rel:"shortcut icon",type:"image/png",href:""+m.a}]})},data:n})}h.defaultProps={lang:"en",meta:[],keywords:[]},h.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=h;var p="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Vivero la Cima",description:"Variedad de plantas y productos de jardinería de la mejor calidad al mejor precio. Guadalajara",author:"Paulo Zamora"}}}}},159:function(e,t,a){e.exports=a.p+"static/favicon-1876172cf5b0fb7a655919d7e81c32c3.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-4cd9e01b9c6f215967d0.js.map