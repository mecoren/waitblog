(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{445:function(t,s,i){},531:function(t,s,i){"use strict";var e=i(445);i.n(e).a},547:function(t,s,i){"use strict";i.r(s);i(17),i(33),i(46);var e=i(451),a={data:function(){return{recordsData:e.a,addtime:"",seetime:"",look:"自己",lookwithfairy:"仙女",type:"全部",currentPage:1,defaultCover:"/img/all.jpg",lookOptions:["自己","看过","影院","未看"],lookwithfairyOptions:["仙女","看过","影院","未看"],typeOptions:["全部","经典","剧情","喜剧","动作","爱情","科幻","动画","悬疑","犯罪","战争","冒险"]}},computed:{formatData:function(){var t=this.recordsData,s=this.look,i=this.lookwithfairy,e=this.type;return t.filter((function(t){return"自己"===s&&"仙女"===i&&"全部"===e||"自己"!==s&&"仙女"===i&&"全部"===e&&s===t.look||"自己"===s&&"仙女"===i&&"全部"!==e&&e===t.type||"自己"===s&&"仙女"!==i&&"全部"===e&&i===t.lookwithfairy||s===t.look&&i===t.lookwithfairy&&e===t.type?t:void 0}))},currentPageData:function(){var t=10*this.currentPage-10,s=10*this.currentPage;return this.formatData.slice(t,s)}},methods:{getCurrentPage:function(t){this.currentPage=t,setTimeout((function(){window.scrollTo(0,0)}),100)},screenClick:function(t,s){this[t]=s,this.currentPage=1}}},r=(i(531),i(23)),n=Object(r.a)(a,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"records-recommend"},[i("div",{staticClass:"screen"},[i("ul",{staticClass:"screen-wrapper"},[t._m(0),t._v(" "),t._l(t.lookOptions,(function(s,e){return i("li",{key:e,staticClass:"screen-item",class:t.look===s?"active":"",on:{click:function(i){return t.screenClick("look",s)}}},[t._v("\n          "+t._s(s)+"\n        ")])})),t._v(" "),i("br"),t._v(" "),t._l(t.lookwithfairyOptions,(function(s,e){return i("li",{key:e,staticClass:"fairy-screen-item",class:t.lookwithfairy===s?"active":"",on:{click:function(i){return t.screenClick("lookwithfairy",s)}}},[t._v("\n          "+t._s(s)+"\n        ")])}))],2),t._v(" "),i("ul",{staticClass:"screen-wrapper"},[t._m(1),t._v(" "),t._l(t.typeOptions,(function(s,e){return i("li",{key:e,staticClass:"screen-item",class:t.type===s?"active":"",on:{click:function(i){return t.screenClick("type",s)}}},[t._v("\n          "+t._s(s)+"\n        ")])}))],2)]),t._v(" "),i("hr",{staticStyle:{"margin-bottom":"1.2rem"}}),t._v(" "),i("div",{staticClass:"record-list-wrapper"},t._l(t.currentPageData,(function(s,e){return i("div",{key:e,staticClass:"record-item"},[i("div",{staticClass:"info"},[i("h3",{staticClass:"title"},[i("div",{staticClass:"name",attrs:{title:s.name}},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"look"},[i("a",{attrs:{href:s.addr||"#",target:"_blank"}},[t._v(t._s(s.look||"未看"))])]),t._v(" "),i("div",{staticClass:"lookwithfairy"},[t._v(t._s(s.lookwithfairy||"未看"))])]),t._v(" "),i("hr",{staticStyle:{"margin-bottom":"1.2rem"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"cover"},[i("img",{attrs:{src:s.cover||t.defaultCover}})]),t._v(" "),i("div",{staticClass:"docs"},[i("div",{staticClass:"content-type"},[i("div",{staticClass:"type"},[t._v(t._s(s.type||"未知"))]),t._v(" "),i("div",{staticClass:"origin"},[t._v(t._s(s.origin||"未知"))])]),t._v(" "),i("div",[i("p",{staticClass:"firstc",attrs:{title:s.actor||"-"}},[t._v(t._s(s.actor||"-"))])]),t._v(" "),i("div",[i("p",{staticClass:"firstc",attrs:{title:s.firstc||"-"}},[t._v(t._s(s.firstc||"-"))])]),t._v(" "),i("div",[i("p",{staticClass:"desc",attrs:{title:s.desc||"-"}},[t._v(t._s(s.desc||"-"))])])])]),t._v(" "),i("div",{staticClass:"time"},[t._v("\n            看完："+t._s(s.seetime||"-")+"\n            "),i("br"),t._v("\n            添加："+t._s(s.addtime||"-")+"\n          ")])])])})),0),t._v(" "),i("pagation",{staticClass:"pagation",attrs:{total:t.formatData.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("h4",[this._v("观影方式：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("h4",[this._v("影片类型：")])])}],!1,null,"4c63f460",null);s.default=n.exports}}]);