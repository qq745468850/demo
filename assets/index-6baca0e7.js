import{C as X}from"./coachClient-6606bd3e.js";import{N as tt}from"./newsClient-cd49fd61.js";import{P as et}from"./publicClient-90b64d32.js";import{u as ot}from"./vue-router.esm-bundler-926c5a09.js";import{_ as at}from"./plugin-vue_export-helper-c27b6911.js";import{f as st,r as s,o as nt,G as r,h as n,j as c,k as t,n as g,F as k,V as f,B as u,C as _,v as D,t as b,A as M,af as lt,ag as it,g as ct}from"./runtime-core.esm-bundler-201072b8.js";import"./webClient-2e88593a.js";import"./commonjsHelpers-725317a4.js";const E=v=>(lt("data-v-1ff0ba86"),v=v(),it(),v),dt={class:"pannel"},rt={class:"content-nav-div"},ut={class:"content-allcat"},pt=E(()=>t("div",{class:"allcat-title label"},"选择学院",-1)),_t={class:"allcat-item"},vt=["onClick"],mt={class:"content-allcat"},ht=E(()=>t("div",{class:"allcat-title label"},"选择项目",-1)),gt={class:"allcat-item"},kt=["onClick"],ft={class:"content"},Dt={class:"content-left"},yt={class:"time-line"},It={class:"time-box"},Ct={class:"year"},Lt={class:"day"},bt={class:"list-con"},Et={key:0},wt={class:"item-con"},xt={class:"title oneEllipsis mt7"},Tt=["innerHTML"],Nt={class:"content-right"},Bt={class:"hotDiv"},$t={class:"title mb16"},St=E(()=>t("div",{class:"tag-title"},[t("span",null,"热门"),M(" 好课 "),t("div",{class:"tag"})],-1)),zt={class:"info"},Yt={class:"twoEllipsis info-title"},jt={class:"time"},qt=st({__name:"index",props:{propData:{type:Object,default:{}}},emits:["clickProject"],setup(v,{emit:P}){const e=v,{proxy:w}=ct(),m=ot();let h=new et,x=new tt,V=new X;s(!1);const p=s(),y=s(),I=s(1),T=s(10),N=s(1),R=s(5),B=s(0),C=s([]),$=s([]),L=s([]),H=s([]),K=s([]),S=s([]);nt(()=>{p.value=m.query.kindId?m.query.kindId:0,y.value=m.query.typeId?m.query.typeId:0,p.value&&U(),h.getSchoolList().then(o=>{console.log("x学院-=-",o),$.value=o.data}),e.propData.schoolId&&h.getKindList(e.propData.schoolId).then(o=>{console.log("0--------",o),L.value=o.data}),j(),q()});const z=(o,l)=>{o==1&&(e.propData.schoolId=l.id,e.propData.kindId=null,e.propData.kindId==1&&(e.propData.stageId=null),h.getKindList(l.id).then(i=>{console.log("x项目--",i),L.value=i.data})),o==2&&(e.propData.kindId=l.id,e.propData.kindId==1&&(e.propData.stageId=null),e.propData.zyId=null,e.propData.kcId=null,h.getZYList(l.id).then(i=>{console.log(i.data),H.value=i.data}),console.log(e.propData.kindId),w.$forceUpdate())},Y=o=>{o==1&&(e.propData.schoolId=null,e.propData.kindId=null,e.propData.typeId=null),o==2&&(e.propData.schoolId=null,e.propData.kindId=null,e.propData.typeId=null),o==3&&(e.propData.schoolId=null,e.propData.kindId=null,e.propData.typeId=null),w.$forceUpdate(),P("clickProject",e.propData)},j=()=>{x.getNewsList(T.value,I.value,p.value?p.value:void 0,y.value?y.value:void 0).then(o=>{console.log("list---",o),console.log("time",o.data.rows[0].createTime.substring(5,11)),console.log("time",o.data.rows[0].createTime.substring(0,4)),C.value=o.data.rows,B.value=o.data.total})},U=()=>{x.getNewsTypeList(p.value?p.value:void 0).then(o=>{console.log("p0p0",o),K.value=o.data})},q=()=>{V.queryCourseRecommend(N.value,R.value).then(o=>{S.value=o.data,N.value++})},A=o=>{I.value=o,j()};return(o,l)=>{const i=r("xlc-image"),F=r("router-link"),G=r("el-empty"),O=r("el-timeline-item"),Z=r("el-pagination"),J=r("el-timeline"),Q=r("el-svg-icon");return n(),c("div",dt,[t("div",rt,[t("div",ut,[pt,t("div",_t,[t("span",{class:g(["pointer darkLabel",{primary:!e.propData.schoolId}]),onClick:l[0]||(l[0]=a=>Y(2))},"全部",2),(n(!0),c(k,null,f($.value,(a,d)=>(n(),c("span",{onClick:W=>z(1,a),class:g(["pointer darkLabel",{primary:e.propData.schoolId&&e.propData.schoolId==a.id}]),key:d},u(a.valStr),11,vt))),128))])]),t("div",mt,[ht,t("div",gt,[t("span",{class:g(["pointer darkLabel",{primary:!e.propData.kindId}]),onClick:l[1]||(l[1]=a=>Y(3))},"全部",2),(n(!0),c(k,null,f(L.value,(a,d)=>(n(),c("span",{onClick:W=>z(2,a),class:g(["pointer darkLabel",{primary:e.propData.kindId&&e.propData.kindId==a.id}]),key:d},u(a.valStr),11,kt))),128))])])]),t("div",ft,[t("div",Dt,[t("div",yt,[_(J,{reverse:!0},{default:D(()=>[(n(!0),c(k,null,f(C.value,(a,d)=>(n(),b(O,{key:d,color:"#1C47FF"},{default:D(()=>[t("div",It,[t("div",Ct,u(a.createTime.substring(5,11)),1),t("div",Lt,u(a.createTime.substring(0,4))+"年",1)]),t("div",bt,[C.value.length>0?(n(),c("div",Et,[t("div",null,[_(F,{to:`/news/detail?id=${a.id}`,class:"list-item"},{default:D(()=>[_(i,{url:a.informationImg,class:"img"},null,8,["url"]),t("div",wt,[t("div",xt,u(a.informationTitle),1),t("div",{class:"con twoEllipsis mt15",innerHTML:a.readText.substring(0,200)},null,8,Tt)])]),_:2},1032,["to"])])])):(n(),b(G,{key:1,description:"暂无数据~"}))])]),_:2},1024))),128)),_(Z,{class:"pagination",background:"",layout:"prev, pager, next",total:B.value,"page-size":T.value,"current-page":I.value,onCurrentChange:A},null,8,["total","page-size","current-page"])]),_:1})])]),t("div",Nt,[t("div",Bt,[t("div",$t,[St,t("div",{class:"more",onClick:q},[M("刷新一下 "),_(Q,{name:"Refresh",size:20,color:"#999999"})])]),(n(!0),c(k,null,f(S.value,(a,d)=>(n(),b(F,{to:`${a.courseType==1?"/coachcourse/liveCourse":"/coachcourse/videoCourse"}?id=${a.courseId}`,class:"item pointer mb24",key:d},{default:D(()=>[_(i,{url:a.surfacePlot,class:"img"},null,8,["url"]),t("div",zt,[t("div",Yt,u(a.courseName),1),t("div",jt,u(o.$dayjs(a.createTime).format("YYYY-MM-DD")),1)])]),_:2},1032,["to"]))),128))])])])])}}}),At=at(qt,[["__scopeId","data-v-1ff0ba86"]]);export{At as default};
