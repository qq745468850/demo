import{T as I}from"./teacherClient-67c9bd25.js";import{P as L}from"./projectView-52e8e39d.js";import{P as w}from"./publicClient-90b64d32.js";import{_ as P}from"./plugin-vue_export-helper-c27b6911.js";import{f as S,r as n,o as V,G as h,h as o,j as a,k as t,z as r,C as k,F as z,V as N,B as d,t as f,af as M,ag as F}from"./runtime-core.esm-bundler-201072b8.js";import"./webClient-2e88593a.js";import"./_commonjsHelpers-725317a4.js";const H=c=>(M("data-v-da77ffb2"),c=c(),F(),c),A={class:"pannel"},D={key:0,class:"top-img"},G=["src"],K={class:"content-main"},U={key:0,class:"content-div"},$={class:"item-name"},q={class:"name"},J={key:0,class:"job oneEllipsis"},O={class:"mask-con"},Q={class:"mask-name"},R={class:"name"},W={key:0,class:"job oneEllipsis"},X=["innerHTML"],Y=["href"],Z=H(()=>t("div",{class:"btn"},"查看详情",-1)),ee=[Z],te=S({__name:"index",setup(c){let b=new w,y=new I;const _=n(),u=n(),p=n(),i=n(1),v=n(16),g=n(0),l=n([]);V(()=>{m(),b.getAdvItemByKey("Teacher.TopBanner").then(e=>{_.value=e.data.boardUrlTbList[0].picture})});const m=()=>{y.getCourseLectureList(v.value,i.value,p.value?p.value.id:void 0,u.value?u.value.id:void 0).then(e=>{l.value=e.data.rows,g.value=e.data.total})},C=e=>{u.value=e.kind?e.kind:null,p.value=e.school?e.school:null,i.value=1,m()},j=e=>{i.value=e,m()};return(e,se)=>{const T=h("xlc-image"),x=h("el-empty"),B=h("el-pagination");return o(),a("div",A,[_.value?(o(),a("div",D,[t("img",{src:_.value,alt:""},null,8,G)])):r("",!0),t("div",K,[k(L,{class:"project-view",onClickProject:C}),l.value.length>0?(o(),a("div",U,[(o(!0),a(z,null,N(l.value,(s,E)=>(o(),a("div",{class:"item",key:E},[k(T,{url:s.terImg,class:"img"},null,8,["url"]),t("div",$,[t("span",q,d(s.nickname),1),s.jobTitle?(o(),a("div",J,d(s.jobTitle),1)):r("",!0)]),t("div",O,[t("div",Q,[t("span",R,d(s.nickname),1),s.jobTitle?(o(),a("div",W,d(s.jobTitle),1)):r("",!0)]),t("div",{class:"mask-desc",innerHTML:s.profile},null,8,X),t("a",{href:`/teacher/Introduction?id=${s.id}`,target:"_blank",class:"go"},ee,8,Y)])]))),128))])):(o(),f(x,{key:1,description:"暂无数据~"})),l.value.length>0?(o(),f(B,{key:2,background:"",layout:"prev, pager, next",total:g.value,"page-size":v.value,"current-page":i.value,onCurrentChange:j},null,8,["total","page-size","current-page"])):r("",!0)])])}}}),de=P(te,[["__scopeId","data-v-da77ffb2"]]);export{de as default};
