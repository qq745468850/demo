import{Q as g}from"./QuestionItem-24928d53.js";import{q}from"./enum-012db698.js";import{E}from"./examClient-b11362c9.js";import{A}from"./accountClient-b6fbd578.js";import"./webClient-2e88593a.js";import{_ as S}from"./plugin-vue_export-helper-c27b6911.js";import{G as b,X as j,h as n,j as r,k as s,B as i,z as y,A as p,x as C,F as m,V as _,C as L,n as k,af as R,ag as B}from"./runtime-core.esm-bundler-201072b8.js";import"./coachClient-6606bd3e.js";import"./commonjsHelpers-725317a4.js";import"./vue-router.esm-bundler-926c5a09.js";let D=new A,N=new E;const V={components:{QuestionItem:g},data(){return{QuestionEnum:q,isImportRecord:!1,loading:!1,userInfo:{},paperId:"",classId:"",courseId:"",chapterId:"",roomId:"",examType:12,shijuan:{},timeEnd:"",time:{days:0,hours:0,minutes:0,seconds:0,Dvalue:0},start:!0,userAnswer:[],num:0,isSubmit:!0,sendFlag:!0,unUserAnswer:0,subjective:!1,roomResultId:""}},destroyed(){document.removeEventListener("keydown",this.keydownListener),window.removeEventListener("beforeunload",e=>{this.beforeunloadHandler(e)}),window.removeEventListener("scroll",this.handleScroll),window.onselectstart=function(){return!0},window.oncontextmenu=function(){return!0},this.$forceUpdate()},async created(){if(this.paperId=this.$route.query.id,this.examType=this.$route.query.examType?this.$route.query.examType:12,!this.paperId){this.$notify({title:"提示",message:"试卷id或试卷类型不能为空",type:"warning",duration:2e3}),setTimeout(()=>{this.$router.go(-1)},2e3);return}this.classId=this.$route.query.classId?this.$route.query.classId:"",this.courseId=this.$route.query.courseId?this.$route.query.courseId:"",this.chapterId=this.$route.query.chapterId?this.$route.query.chapterId:"",this.roomId=this.$route.query.roomId?this.$route.query.roomId:"";let e=await D.checkLogIn();e&&(this.userInfo=await e,this.getPaperResult(),window.onselectstart=function(){return!1},window.oncontextmenu=function(){return!1},window.addEventListener("beforeunload",o=>{this.beforeunloadHandler(o)}),document.addEventListener("keydown",this.keydownListener),window.addEventListener("scroll",this.handleScroll,!0))},methods:{getPaperResult(){this.loading=!0,N.getPaperResult(this.examType,this.paperId,this.classId?this.classId:void 0,this.courseId?this.courseId:void 0,this.chapterId?this.chapterId:void 0,this.roomId?this.roomId:void 0).then(e=>{e.code==0?(this.shijuan=e.data,this.checkBoxChangeArray(this.shijuan)):alert(e.msg),this.loading=!1})},checkBoxChangeArray(e){e.paperTopicList.forEach((o,h)=>{o.questionTopicList.forEach((a,t)=>{this.num=a.topicIndex>this.num?a.topicIndex:this.num,o.topicType=="1"&&(a.userAnswer?a.userAnswer=a.userAnswer.split(","):a.userAnswer=[]),o.topicType=="5"&&a.subTopicList.forEach((d,w)=>{d.type=="1"&&(d.userAnswer?d.userAnswer=d.userAnswer.split(","):d.userAnswer=[]),this.num=d.topicIndex>this.num?d.topicIndex:this.num})})})},jumpShiTi(e){$("html, body").animate({scrollTop:$("#"+e).offset().top},400)},backTop(){let e=setInterval(()=>{let o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,h=Math.ceil(o/5);document.documentElement.scrollTop=o-h,o===0&&clearInterval(e)},20)},handleScroll(){window.pageYOffset>=200?$(".shiti-function").addClass("fixed-card"):$(".shiti-function").removeClass("fixed-card")},keydownListener(){window.onkeydown=function(e){var o=window.event||e,h=o.keyCode||o.which;h==116&&(o.preventDefault?o.preventDefault():(o.keyCode=0,o.returnValue=!1))}}}},f=e=>(R("data-v-14619123"),e=e(),B(),e),P={key:0,class:"pannel"},Q={class:"pannel-con"},z={class:"shijuan-block"},F={class:"shijuan-title"},G={key:0,class:"grade"},H={key:0,class:"content"},O=f(()=>s("br",null,null,-1)),U={key:1,class:"content"},Y=f(()=>s("div",{class:"warning"},"本套试卷含有主观题，请自行参考解析评分",-1)),M={class:"block"},X={class:"shiti-block"},J={class:"shiti-function"},K={class:"control"},W={class:"content"},Z=f(()=>s("i",{class:"iconfont iconfanhui1"},null,-1)),ee={class:"sheet numberPannel"},se={class:"sheet-header"},te=f(()=>s("div",null,"答题卡",-1)),oe={class:"num"},ne={class:"sheet-block"},re={key:0},ie={class:"t-title"},ce=f(()=>s("span",{class:"t-name"},"组合题",-1)),de=["onClick"],ue={key:1},ae={class:"t-title"},le={class:"t-name"},pe={class:"t-numberbox"},he=["onClick"];function me(e,o,h,a,t,d){const w=b("question-item"),x=j("loading");return t.shijuan?(n(),r("div",P,[s("div",Q,[s("div",z,[s("div",F,[t.isSubmit?(n(),r("div",G,i(t.shijuan.userScore),1)):y("",!0),p(" "+i(t.shijuan.paperName),1)]),t.isSubmit?(n(),r("div",U,"试卷已提交")):(n(),r("div",H,[p(" ◇ 作答时间为"+i(t.shijuan.time)+"分钟，总共"+i(t.shijuan.allScore)+"分，"+i(t.shijuan.passScore)+"分及格",1),O,p(" ◇ 试卷来源：本站 ")])),Y]),s("div",M,[C((n(),r("div",X,[(n(!0),r(m,null,_(t.shijuan.paperTopicList,(c,I)=>(n(),r("div",{key:I},[L(w,{paperId:t.paperId,isSubmit:t.isSubmit,item:c},null,8,["paperId","isSubmit","item"])]))),128))])),[[x,t.loading]]),s("div",J,[s("div",K,[s("div",W,[s("a",{class:"btn btn-zt pointer",onClick:o[0]||(o[0]=c=>e.$router.go(-1))},[Z,p("   返回列表 ")])])]),s("div",ee,[s("div",se,[te,s("div",oe,"共"+i(t.num)+"题",1)]),s("div",ne,[(n(!0),r(m,null,_(t.shijuan.paperTopicList,(c,I)=>(n(),r("div",{class:"T-Group",key:I},[c.topicType=="5"?(n(),r("div",re,[s("div",ie,[ce,p(" 总共"+i(c.score)+"分 共"+i(c.questionTopicList.length)+"题 ",1)]),(n(!0),r(m,null,_(c.questionTopicList,(u,v)=>(n(),r("ul",{class:"t-numberbox",key:v},[(n(!0),r(m,null,_(u.subTopicList,(l,T)=>(n(),r("li",{class:k([l.userAnswer&&l.userAnswer!=""?"on":"",l.userScore!=0&&l.userScore&&!t.isImportRecord?"green":"",l.userScore==0&&!t.isImportRecord?"red":""]),key:T,onClick:_e=>d.jumpShiTi(l.topicIndex)},i(l.topicIndex),11,de))),128))]))),128))])):(n(),r("div",ue,[s("div",ae,[s("span",le,i(t.QuestionEnum[Number(c.topicType)]),1),p(" 每题"+i(c.score)+"分 共"+i(c.questionTopicList.length)+"题 ",1)]),s("ul",pe,[(n(!0),r(m,null,_(c.questionTopicList,(u,v)=>(n(),r("li",{class:k([u.userAnswer&&u.userAnswer!=""?"on":"",u.userScore!=0&&u.userScore&&!t.isImportRecord?"green":"",u.userScore==0&&!t.isImportRecord?"red":""]),key:v,onClick:l=>d.jumpShiTi(u.topicIndex)},i(u.topicIndex),11,he))),128))])]))]))),128))])])])])])])):y("",!0)}const Ee=S(V,[["render",me],["__scopeId","data-v-14619123"]]);export{Ee as default};
