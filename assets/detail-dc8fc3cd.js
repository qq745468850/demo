import{N as k}from"./newsClient-cd49fd61.js";import{u as B}from"./vue-router.esm-bundler-926c5a09.js";import{_ as T}from"./plugin-vue_export-helper-c27b6911.js";import{f as y,r as o,o as A,h as v,j as p,k as t,B as a,A as u,F as x,V as D,z as S,af as V,ag as $}from"./runtime-core.esm-bundler-201072b8.js";import"./webClient-2e88593a.js";import"./_commonjsHelpers-725317a4.js";const w=n=>(V("data-v-5ab71269"),n=n(),$(),n),H={key:0,class:"pannel"},I={class:"content-div"},L={class:"content-left"},b={class:"title"},M={class:"time"},J={class:"time-div"},j=w(()=>t("div",{class:"share-div"},null,-1)),q=["innerHTML"],z={class:"nav-con"},O={class:"nav-up"},R={class:"nav-down"},U={class:"content-right"},G={class:"hot-div"},K=w(()=>t("div",{class:"title"},[t("div",null,"热门资讯")],-1)),P=["onClick"],Q=y({__name:"detail",setup(n){let r=new k;const f=B(),_=o(),m=o([]),s=o({}),i=o({}),l=o({});A(async()=>{_.value=f.query.id,await C(),await F(),await g()});const C=async()=>{let e=await r.getNewsDetail(_.value);s.value=e.data[1]?e.data[1]:{},i.value=e.data[0],l.value=e.data[2],document.title=e.data[1].informationTitle},F=()=>{r.addJournalism(_.value)},g=async()=>{let e=await r.getHotNews(10,1);m.value=e.data},h=e=>{if(e)window.location.href=`/news/detail?id=${e.id}`;else return},E=e=>{window.location.href=`detail?id=${e}`};return(e,d)=>s.value?(v(),p("div",H,[t("div",I,[t("div",L,[t("h1",b,a(s.value.informationTitle),1),t("div",M,[t("div",J,[u(" 来源："),t("span",null,a(s.value.informationSource),1),u("阅读量："+a(s.value.readingVolume),1)]),j]),t("div",{class:"left-con",innerHTML:s.value.readText},null,8,q),t("div",z,[t("div",O,[u(" 上一篇： "),t("span",{class:"pointer",onClick:d[0]||(d[0]=c=>h(i.value))},a(i.value?i.value.informationTitle:"没有了"),1)]),t("div",R,[u(" 下一篇： "),t("span",{class:"pointer",onClick:d[1]||(d[1]=c=>h(l.value))},a(l.value?l.value.informationTitle:"没有了"),1)])])]),t("div",U,[t("div",G,[K,(v(!0),p(x,null,D(m.value,(c,N)=>(v(),p("div",{class:"hot-item twoEllipsis pointer label",key:N},[t("span",{onClick:W=>E(c.id)},a(c.informationTitle),9,P)]))),128))])])])])):S("",!0)}}),at=T(Q,[["__scopeId","data-v-5ab71269"]]);export{at as default};
