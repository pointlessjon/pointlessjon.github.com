webpackJsonp([0],[,function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2),i=a(4),r=a.n(i),c=a(5);e.a.config.productionTip=!1,e.a.use(r.a,{defaultIconPack:"fa"}),new e.a({el:"#app",template:"<App/>",components:{App:c.a}})},,,,function(t,s,a){"use strict";function e(t){a(6)}var i=a(8),r=a(12),c=a(0),n=e,l=c(i.a,r.a,n,null,null);s.a=l.exports},function(t,s){},,function(t,s,a){"use strict";var e=a(9);s.a={components:{Search:e.a}}},function(t,s,a){"use strict";var e=a(10),i=a(11),r=a(0),c=r(e.a,i.a,null,null,null);s.a=c.exports},function(t,s,a){"use strict";s.a={data:function(){return{query:""}},computed:{isUri:function(){if(/^(.*)\.(.*)$/.test(this.query))return"//"!==this.query.slice(0,2)&&(this.query="//"+this.query),!0;var t=document.createElement("a");return t.href=this.query,t.host&&t.host!==window.location.host}},mounted:function(){this.$refs.search.focus()},methods:{search:function(){this.isUri?window.location.href=this.query:window.location.href="https://duckduckgo.com/?q="+this.query}}}},function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",{staticClass:"search",on:{submit:function(s){s.preventDefault(),t.search(s)}}},[a("b-input",{ref:"search",attrs:{placeholder:"Search...",type:"search",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",expanded:""},model:{value:t.query,callback:function(s){t.query=s},expression:"query"}})],1)},i=[],r={render:e,staticRenderFns:i};s.a=r},function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"display"},[t._m(0),t._v(" "),a("section",{staticClass:"taskbar"},[a("div",{staticClass:"container"},[a("search"),t._v(" "),t._m(1)],1)])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"view"},[a("div",{staticClass:"view-body"},[a("h1",{staticClass:"title"},[t._v("The World Wide Web is Yours!")]),t._v(" "),a("i",{staticClass:"s"}),t._v(" "),a("i",{staticClass:"s"}),t._v(" "),a("i",{staticClass:"s"}),t._v(" "),a("i",{staticClass:"s"}),t._v(" "),a("i",{staticClass:"s"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child"},[a("div",{staticClass:"section"},[a("h2",{staticClass:"title"},[t._v("Read")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"//news.ycombinator.com"}},[t._v("Hacker News")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//washingtonpost.com"}},[t._v("Washington Post")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.atlasobscura.com"}},[t._v("Atlas Obscura")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//nautil.us"}},[t._v("Nautilus")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//adbusters.org"}},[t._v("Adbusters")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//lifeandthyme.com"}},[t._v("Life & Thyme")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//nplusonemag.com"}},[t._v("n+1")])])])])]),t._v(" "),a("div",{staticClass:"tile is-child"},[a("div",{staticClass:"section work"},[a("h2",{staticClass:"title"},[t._v("Work")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"//kuokoa.studio"}},[t._v("Kuokoa Studio")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//kuokoa.life"}},[t._v("Kuokoa Life")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//foodvib.es"}},[t._v("FOOD VIBES")])])])])]),t._v(" "),a("div",{staticClass:"tile is-child"},[a("div",{staticClass:"section share"},[a("h2",{staticClass:"title"},[t._v("Share")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"//medium.com/@daetalus"}},[t._v("Medium")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//twitter.com/@daetalus"}},[t._v("Twitter")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//github.com/daetal-us"}},[t._v("Github")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//linkedin.com/in/daetalus"}},[t._v("Linkedin")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//instagram.com/daetal_us"}},[t._v("Instagram")])])])])])])}],r={render:e,staticRenderFns:i};s.a=r}],[1]);
//# sourceMappingURL=app.33958977c897e8af238e.js.map