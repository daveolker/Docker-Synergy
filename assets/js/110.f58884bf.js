(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{108:function(t,e,r){"use strict";r.r(e);var n={computed:{posts:function(){return this.$site.pages.filter(function(t){return t.path.startsWith("/blog/")&&!t.frontmatter.blog_index}).sort(function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)})}}},o=r(0),a=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.posts,function(e){return r("div",[r("h2",[r("router-link",{attrs:{to:e.path}},[t._v(t._s(e.frontmatter.title))])],1),r("p",[t._v(t._s(e.frontmatter.description))]),r("p",[r("router-link",{attrs:{to:e.path}},[t._v("Read more")])],1)])}),0)},[],!1,null,null,null);e.default=a.exports}}]);