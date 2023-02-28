import{_ as B}from"./QuesBankView-8eb9c74e.js";import{ae as F,f as $,r as g,o as N,G as w,h as s,j as t,F as A,V as x,k as a,B as u,C as y,A as v,z as i,n as b,t as T,ag as L,ah as S,g as R}from"./plugin-vue_export-helper-3a3407bb.js";import{aD as h}from"./webClient-e9003e98.js";const V="/assets/exam3-7ac7f15e.png";const E=r=>(L("data-v-4f93741a"),r=r(),S(),r),z={key:0,class:"exam-block"},M={class:"exam-room-item-con"},P=E(()=>a("div",{class:"img"},[a("img",{src:V})],-1)),H={class:"content"},j=["title"],Y={key:0,class:"item-num"},O={key:0,class:"class-name oneEllipsis"},U={class:"item-num-sum"},q={key:0},G=["onClick"],J={class:"arrow"},K=["onClick"],Q={class:"arrow"},W={key:0,class:"item-list"},X=E(()=>a("img",{src:B,alt:"",class:"icon"},null,-1)),Z=["title"],ee={key:0,class:"btn btn1 pointer"},se=["href"],te={key:1,class:"btn btn3 pointer"},oe=["onClick"],ae=$({__name:"ExamRoomView",props:{isBuy:{type:Boolean,default:!0},examRoomList:{type:Array,default:[]},classId:{type:String,default:""}},setup(r){const d=r,{proxy:D}=R(),k=g(),m=g({});N(()=>{var n=new Date,c=n.getFullYear();k.value=c});const f=(n,c)=>{c==!0?m.value.index=n:m.value.index=null,D.$forceUpdate()},C=(n,c,_,p,e)=>{if(d.isBuy){if(p==1){h({title:"提示",message:"该考场已结束",type:"warning"});return}if(p==2){h({title:"提示",message:"该考场未开始",type:"warning"});return}_<k.value?h({title:"提示",message:"往年不可做题",type:"warning"}):window.location.href=`/questionBank/roomDetails?id=${c}&examType=${14}&classId=${d.classId?d.classId:e}&roomId=${n}`}else h({title:"提示",message:"请先购买班型",type:"warning"})};return(n,c)=>{const _=w("el-svg-icon"),p=w("el-empty");return s(),t("div",null,[d.examRoomList.length>0?(s(),t("div",z,[(s(!0),t(A,null,x(d.examRoomList,(e,l)=>(s(),t("div",{class:"exam-room-item",key:l},[a("div",M,[P,a("div",H,[a("div",{class:"item-title oneEllipsis",title:e.roomName},u(e.roomName),9,j),e.startTime?(s(),t("div",Y,[y(_,{name:"Clock",size:16,color:"#AAAAAA",class:"mr8"}),v(" "+u(n.$dayjs(e.startTime).format("MM.DD HH:mm"))+" - "+u(n.$dayjs(e.endTime).format("MM.DD HH:mm"))+" ",1),e.coachClassTypeName?(s(),t("div",O,"   |  "+u(e.coachClassTypeName),1)):i("",!0)])):i("",!0),a("div",U,"共"+u(e.roomPaperList.length)+"套试卷",1)]),e.roomPaperList?(s(),t("div",q,[e.roomPaperList.length>0&&m.value.index!=l?(s(),t("div",{key:0,class:"item-btn",onClick:o=>f(l,!0)},[v(" 展开 "),a("div",J,[y(_,{name:"ArrowDown",size:12})])],8,G)):e.roomPaperList.length>0&&m.value.index==l?(s(),t("div",{key:1,class:"item-btn",onClick:o=>f(l,!1)},[v(" 收起 "),a("div",Q,[y(_,{name:"ArrowUp",size:12})])],8,K)):i("",!0)])):i("",!0)]),m.value.index==l?(s(),t("div",W,[(s(!0),t(A,null,x(e.roomPaperList,(o,I)=>(s(),t("div",{class:"list-title",key:I},[X,a("div",{class:"title oneEllipsis",title:o.paperName},u(o.paperName),9,Z),o.whetherAnswer==1&&o.whetherAnswer==4?(s(),t("div",ee,[a("a",{href:`/examResult?id=${o.paperId}&examType=${14}&classId=${r.classId?r.classId:e.coachClassTypeId}&roomId=${o.roomId}`}," 查看成绩 ",8,se)])):i("",!0),o.examResultStatus==2?(s(),t("div",te,"待阅卷")):i("",!0),o.whetherAnswer==0?(s(),t("div",{key:2,class:b(["btn btn1 pointer",e.roomFinish==1||e.roomFinish==2?"btn2":""]),onClick:ne=>C(e.roomId,o.paperId,e.roomYear,e.roomFinish,e.coachClassTypeId)}," 开始答题 ",10,oe)):i("",!0)]))),128))])):i("",!0)]))),128))])):(s(),T(p,{key:1,class:"empty",description:"暂无数据~"}))])}}}),le=F(ae,[["__scopeId","data-v-4f93741a"]]);export{le as E};
