(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return h}),a.d(e,"StaticQueryContext",function(){return m}),a.d(e,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),s=a.n(c);a.d(e,"Link",function(){return s.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var l=a(147),u=a.n(l);a.d(e,"PageRenderer",function(){return u.a});var d=a(49);a.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=(a(145),function(t){function e(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).state={navEl:null},e.inicio=0,e.seleccion=null,e.contacto=null,e}r()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=document.querySelector(".stickyNavbar");this.setState({navEl:t}),window.addEventListener("scroll",this.throttle(this.scrollHandler.bind(this)));var e=document.querySelector(".icl-section"),a=document.querySelector(".contact-section");this.seleccion=e.offsetTop,this.contacto=a.offsetTop},a.scrollHandler=function(){window.scrollY>20?this.state.navEl.classList.add("sticked"):this.state.navEl.classList.remove("sticked")},a.clickHandler=function(t){var e=t.target.dataset.button;console.log(document.querySelector(".stickyNavbar").classList.remove("nav-items-show")),document.querySelector(".nav-push").classList.remove("slideOver"),window.scrollTo({top:this[e]-60,behavior:"smooth"})},a.hamburgerClick=function(){var t=document.querySelector(".nav-push"),e=document.querySelector(".stickyNavbar");t.classList.toggle("slideOver"),e.classList.toggle("nav-items-show")},a.throttle=function(t,e){var a=!1;return function(){a||(t.call(),a=!0,setTimeout(function(){a=!1},e))}},a.render=function(){return o.a.createElement("nav",{className:"stickyNavbar"},o.a.createElement("a",{href:"/"},o.a.createElement("figure",{className:"nav-brand"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 118.8 39.2"},o.a.createElement("path",{d:"M0 38l19.6-23.5 11.2 2.6L46 0l8.8 8.6 2.4-1.8 12.3 13.4 15.9-8.8 11 8.8 5.5-3.5 17 14.5-16.6-9.6 2 8.8-19-16.1-11 6.6 8 17.2-25-27.5-3 2.2L45.8 5 27.3 39 29.5 20l-10-2.5z"})))),o.a.createElement("div",{className:"nav-items"},o.a.createElement("p",{onClick:this.clickHandler.bind(this),"data-button":"inicio",className:"nav-item"},"Inicio"),o.a.createElement("p",{onClick:this.clickHandler.bind(this),"data-button":"seleccion",className:"nav-item"},"Selección"),o.a.createElement("p",{onClick:this.clickHandler.bind(this),"data-button":"galeria",className:"nav-item"},"Galería"),o.a.createElement("p",{onClick:this.clickHandler.bind(this),"data-button":"contacto",className:"nav-item"},"Contacto")),o.a.createElement("svg",{id:"hamburger-toggle",onClick:this.hamburgerClick,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16.630943 9.6881733"},o.a.createElement("g",{transform:"translate(-103.51822 -70.023682)"},o.a.createElement("rect",{id:"hamburger-top-bar",ry:".12750432",rx:"0",y:"70.023682",x:"103.51822",height:"1.1450591",width:"16.630943"}),o.a.createElement("rect",{id:"hamburger-bottom-bar",width:"16.630943",height:"1.1450591",x:"103.51822",y:"78.566795",rx:"0",ry:".12750432"}),o.a.createElement("rect",{id:"hamburger-middle-bar",ry:".12750432",rx:"0",y:"74.295242",x:"106.0742",height:"1.1450591",width:"14.074958"}))))},e}(o.a.Component));e.a=c},145:function(t,e,a){},146:function(t,e,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(143),l=(a(154),a(144)),u=(a(155),function(t){var e=t.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null),i.a.createElement("main",{className:"nav-push"},e))},data:n})});u.propTypes={children:c.a.node.isRequired},e.a=u},147:function(t,e,a){var n;t.exports=(n=a(153))&&n.default||n},148:function(t,e,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(157),l=a.n(s),u=a(143),d=a(165),m=a.n(d);function p(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(u.StaticQuery,{query:h,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r),link:[{rel:"shortcut icon",type:"image/png",href:""+m.a}]})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=p;var h="1025518380"},150:function(t){t.exports={data:{site:{siteMetadata:{title:"Vivero la Cima"}}}}},153:function(t,e,a){"use strict";a.r(e);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(68),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},154:function(t,e,a){},155:function(t,e,a){},156:function(t){t.exports={data:{site:{siteMetadata:{title:"Vivero la Cima",description:"Variedad de plantas y productos de jardinería de la mejor calidad al mejor precio. Guadalajara",author:"Paulo Zamora"}}}}},165:function(t,e,a){t.exports=a.p+"static/favicon-1876172cf5b0fb7a655919d7e81c32c3.png"}}]);
//# sourceMappingURL=0-be77f575245bdb9851be.js.map