import{u as v}from"./index-006961dc.js";import{aE as c}from"./webClient-2e88593a.js";import{_ as m}from"./plugin-vue_export-helper-c27b6911.js";import{f as h,r,o as g,G as n,h as k,j as b,C as i,v as l,k as t,A as f,af as C,ag as w}from"./runtime-core.esm-bundler-201072b8.js";const y=s=>(C("data-v-de808274"),s=s(),w(),s),B={class:"pointer share-btn"},S={class:"login"},x=y(()=>t("div",{class:"title"},"微信扫一扫分享小程序",-1)),E={style:{"text-align":"center"}},V=["src"],A=h({__name:"shareView",props:{type:{type:Number,value:1},title:{type:String,value:""},id:{type:String,value:""},codeUrl:{type:String,default:""}},setup(s){const o=s;v();const u=r(""),a=r({});g(()=>{a.value=c(),a!=null&&(a.value=c(),setTimeout(()=>{d()},500))});const d=()=>{let e="";switch(o.type){case 1:break;case 2:e="/coachcourse/videoCourse";break;case 3:break;case 4:e="/coachcourse/liveCourse";break;case 5:e="/coachcourse/details";break;case 6:e="/openCourse/details";break;case 8:e="/database/detail";break;case 9:e="/questionBank/packHome";break;case 10:e="/news/details";break;case 11:e="/coachcourse/agreementClass";break}u.value=`http://192.168.7.213:8100${e}?id=${o.id}&regCode=${a.value?a.value.invitationCode:""}`};return(e,I)=>{const p=n("el-svg-icon"),_=n("el-popover");return k(),b("div",null,[i(_,{placement:"bottom",width:260,trigger:"click"},{reference:l(()=>[t("div",B,[i(p,{class:"el-svg-icon",name:"Share",size:18}),f(" 分享 ")])]),default:l(()=>[t("div",S,[x,t("div",E,[t("img",{src:s.codeUrl,alt:"",class:"wx-code mt10"},null,8,V)])])]),_:1})])}}}),T=m(A,[["__scopeId","data-v-de808274"]]);export{T as S};
