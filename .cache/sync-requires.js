// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/komalpervez/projects/NooBs2/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/komalpervez/projects/NooBs2/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/komalpervez/projects/NooBs2/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/komalpervez/projects/NooBs2/.cache/json/layout-index.json"),
  "404.json": require("/Users/komalpervez/projects/NooBs2/.cache/json/404.json"),
  "layout-index.json": require("/Users/komalpervez/projects/NooBs2/.cache/json/layout-index.json"),
  "index.json": require("/Users/komalpervez/projects/NooBs2/.cache/json/index.json"),
  "layout-index.json": require("/Users/komalpervez/projects/NooBs2/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/komalpervez/projects/NooBs2/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/komalpervez/projects/NooBs2/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/komalpervez/projects/NooBs2/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/komalpervez/projects/NooBs2/.cache/layouts/index.js"))
}