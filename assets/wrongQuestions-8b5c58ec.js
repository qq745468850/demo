import{P as V}from"./ProjectOnView-2e385455.js";import{Q as P}from"./QuestionView-c9e32ec5.js";import{E as z}from"./examClient-b11362c9.js";import{A as F}from"./accountClient-b6fbd578.js";import{P as L}from"./publicClient-90b64d32.js";import{_ as W}from"./plugin-vue_export-helper-c27b6911.js";import{aD as C}from"./webClient-2e88593a.js";import{f as j,r as n,o as M,G as O,X as G,h as u,j as c,k as r,z as m,C as g,x as K,F as R,V as U,v as w,A as v,B as I,t as X}from"./runtime-core.esm-bundler-201072b8.js";import"./enum-012db698.js";import"./_commonjsHelpers-725317a4.js";import"./vue-router.esm-bundler-926c5a09.js";const Y={class:"pannel"},H={key:0,class:"top-banner"},J=["src"],Z={class:"content-con"},$={key:0,class:"question-con"},ee={class:"showError"},te={class:"btn-con"},se=j({__name:"wrongQuestions",setup(oe){let x=new L,E=new F,h=new z;const p=n(1),B=n(10),_=n(),a=n(!1),i=n(!1),d=n(!1),o=n([]),s=n({schoolId:"",kindId:"",zyId:"",kcId:"",questionType:"-1"});M(async()=>{await E.checkLogIn()&&x.getAdvItemByKey("WrongQuestions.TopBanner").then(e=>{_.value=e.data.boardUrlTbList[0].picture})});const y=()=>{i.value=!0,a.value=!1,o.value=[],h.qbsWrongQuestion(p.value,B.value,s.value.schoolId?s.value.schoolId:void 0,s.value.kindId?s.value.kindId:void 0,s.value.zyId?s.value.zyId:void 0,s.value.kcId?s.value.kcId:void 0,s.value.questionType?s.value.questionType:"-1").then(t=>{if(t.code==0){if(t.data.rows.length==0){C({title:"提示",message:"暂无试题",type:"warning"}),i.value=!1;return}o.value=t.data.rows,A(o.value)}else C({title:"提示",message:t.msg,type:"error"});i.value=!1})},A=t=>{t.forEach((e,l)=>{e.questionType==1&&(e.userAnswer?e.userAnswer=e.userAnswer.split(","):e.userAnswer=[])})},T=t=>{t.forEach((e,l)=>{e.questionType==1&&(e.userAnswer?e.userAnswer=e.userAnswer.toString():e.userAnswer="")})},D=()=>{T(o.value),b(),a.value=!0,k()},Q=()=>{a.value||b(),d.value=!1,a.value=!1,k(),p.value++,y()},b=()=>{d.value=!0,h.getWrongQuestionAnalysis(o.value).then(t=>{t.code==0&&(o.value=t.data,A(o.value)),d.value=!1})},k=()=>{let t=setInterval(()=>{let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,l=Math.ceil(e/5);document.documentElement.scrollTop=e-l,e===0&&clearInterval(t)},20)},q=t=>{p.value=1,s.value=t,y()};return(t,e)=>{const l=O("el-button"),S=G("loading");return u(),c("div",Y,[_.value?(u(),c("div",H,[r("img",{src:_.value,alt:""},null,8,J)])):m("",!0),r("div",Z,[g(V,{showQuesType:!0,propsData:s.value,onClickProject:q},null,8,["propsData"]),o.value.length>0?K((u(),c("div",$,[(u(!0),c(R,null,U(o.value,(f,N)=>(u(),c("div",{key:N},[g(P,{isSubmit:a.value,item:f},{default:w(()=>[r("div",ee,[v(" 累计做错 "),r("span",null,I(f.wrongAnswersNumber),1),v(" 次，错题率: "),r("span",null,I(f.wrongAnswersRate)+"%",1)])]),_:2},1032,["isSubmit","item"])]))),128)),r("div",te,[a.value?m("",!0):(u(),X(l,{key:0,loading:d.value,class:"submit-btn",onClick:D},{default:w(()=>[v("完成练习 ")]),_:1},8,["loading"])),g(l,{loading:i.value,class:"go-btn",onClick:Q},{default:w(()=>[v("继续答题")]),_:1},8,["loading"])])])),[[S,i.value]]):m("",!0)])])}}}),fe=W(se,[["__scopeId","data-v-16dccf2d"]]);export{fe as default};
