// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/paulo/Documents/work/vivero-la-cima/vivero-la-cima/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/paulo/Documents/work/vivero-la-cima/vivero-la-cima/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/paulo/Documents/work/vivero-la-cima/vivero-la-cima/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/paulo/Documents/work/vivero-la-cima/vivero-la-cima/.cache/data.json")
