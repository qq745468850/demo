import{aa as G,aC as J}from"./webClient-2e88593a.js";import{_ as X}from"./zbz-53c88072.js";import{_ as K}from"./line-2545f1db.js";import{_ as Q}from"./hot-4e4545bf.js";import{$ as w}from"./jquery-0491babd.js";import{u as Z}from"./vue-router.esm-bundler-926c5a09.js";import{r as ee,A as se}from"./accountClient-b6fbd578.js";import{O as te}from"./openClient-8733bfdd.js";import{C as oe}from"./coachClient-6606bd3e.js";import{_ as ie}from"./plugin-vue_export-helper-c27b6911.js";import{X as le}from"./index2-e23dce59.js";import{f as ne,r as i,a as ue,o as ae,H as M,G as ce,h as n,j as u,k as e,B as d,A as C,z as m,C as re,F as N,V as O,n as de,x as ve,af as me,ag as _e}from"./runtime-core.esm-bundler-201072b8.js";import"./_commonjsHelpers-725317a4.js";import"./view-88f9eb5c.js";import"./hide-d93c6ca5.js";const c=h=>(me("data-v-487f7384"),h=h(),_e(),h),pe={key:0,class:"pannel"},fe={class:"video-pannel"},he={class:"video-con"},ge={class:"video-left"},Ce={class:"video-title"},Fe=["title"],ke={class:"time"},ye=c(()=>e("img",{src:X,alt:""},null,-1)),De={key:0,class:"player-Prompt"},be=c(()=>e("div",{class:"icon"},[e("i",{class:"iconfont iconzhuyi"})],-1)),Ee=c(()=>e("div",{class:"text"}," 课程视频版权所有，禁止任何形式得转载！并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。 ",-1)),Be=c(()=>e("i",{class:"iconfont iconguanbi"},null,-1)),we={class:"video-block"},Ae={id:"drawPanel",style:{width:"100%",height:"100%"}},Se={key:0,class:"setting-pannel"},Le={class:"teacher"},Te={class:"tea-img"},xe=["src"],Pe={key:0,class:"video-right"},$e=c(()=>e("div",{class:"player-function"},[e("div",{class:"teacher-video"},[e("div",{class:"style1"},[e("div",{id:"livePlayer",style:{width:"100%",height:"100%",position:"relative","border-radius":"10px",overflow:"hidden"}})])])],-1)),Ie={class:"playback"},Me=c(()=>e("div",{class:"text"},"聊天区",-1)),Ne={class:"name"},Oe=["innerHTML"],He={class:"msg-btn"},qe={class:"btn-block"},We={class:"content-con"},Ve={class:"con-ago"},Ye=c(()=>e("div",{class:"ago-title"},[e("span",{class:"title"},"推荐公开课"),e("img",{src:K,alt:""})],-1)),ze={class:"list"},Re={class:"item-con"},je=["src"],Ue={class:"con-info"},Ge={class:"title twoEllipsis"},Je={class:"num-con"},Xe=c(()=>e("div",{class:"tag"},"限免",-1)),Ke={class:"num"},Qe=c(()=>e("img",{src:Q,alt:""},null,-1)),Ze={class:"time-con"},es={class:"time"},ss={key:1,class:"btn btn2"},ts=["onClick"],os={key:3,class:"btn btn4"},is=["onClick"],ls=ne({__name:"openLive",setup(h){let F=new te,A=new se,k=new oe;const v=i(!1),y=i(!0),S=i(!0),H=Z(),D=i(),_=i(""),b=i(""),l=i({}),L=i({}),E=i([]),T=i([]),p=i(),x=i(""),B=i(""),P=i(""),g=i("");ue(()=>{l.value.liveCourseStatus==1&&y.value&&DWLive.destroy(),k.receiveCourse(1)}),ae(async()=>{D.value=H.query.id;let s=await A.checkLogIn();s&&(L.value=s,$(),q())});const $=()=>{F.getDetail(D.value).then(s=>{l.value=s.data,document.title=s.data.openCourseName,s.data.liveCourseStatus==0&&(y.value=!1),s.data.liveCourseStatus==1&&z(),W()})},q=()=>{k.queryCourseTasks().then(s=>{console.log("o",s),P.value=s.data.time,g.value=s.data.frequency})},W=()=>{F.queryOpenRecommend(1,12).then(s=>{T.value=s.data.rows})},I=async(s,o)=>{await A.checkLogIn()&&(s==1?window.location.href=`/openLive?id=${o}`:window.location.href=`/openLiveback?id=${o}`)},V=()=>{F.addOpenScheduled(D.value).then(s=>{s.code==0&&$()})},Y=()=>{_.value==""?J.warning("请输入内容！"):(DWLive.sendPublicChatMsg(_.value),_.value="",M(()=>{p.value.scrollTop=p.value.scrollHeight}))},z=()=>{if(l.value.playLink!="")var s=l.value.playLink,o=s.split("&")[0],f=o.split("=")[1],t=s.split("&")[1],r=t.split("=")[1];b.value=L.value.nickName,DWLive.init({userid:r,roomid:f,viewertoken:"123",pcH5Live:!0,viewername:b.value}),DWLive.onLoginSuccess=function(a){a.live.liveDuration<0&&(y.value=!1,le.alert("直播等待中~","提示",{confirmButtonText:"确定",showClose:!1,callback:()=>{ee.back()}}))},DWLive.onLiveStart=function(a){console.log(a),g.value!=0&&(x.value=setInterval(()=>{B.value++,P.value===B.value&&(k.receiveTaskProfit(10),B.value=0,g.value--,g.value<=0&&clearInterval(x.value))}))},DWLive.onLiveEnd=function(a){console.log(a)},DWLive.onPublicChatMessage=function(a){console.log("-------------------接收公聊-------------------");let U=JSON.parse(a);E.value=E.value.concat(U),M(()=>{p.value.scrollTop=p.value.scrollHeight})}},R=s=>{if(!w.trim(s))return"";s=s.replace(/\</g,"&lt;"),s=s.replace(/\>/g,"&gt;"),s=s.replace(/\n/g,"<br/>"),s=s.replace(/\[em_([0-9]*)\]/g,'<img src="//view.csslcloud.net/img/em/$1.gif" border="0" />'),s=s.replace(/\[em2_([0-9]*)\]/g,'<img src="//view.csslcloud.net/img/em2/$1.png" border="0" />');var o="";return w.each(s.split(" "),function(f,t){if(t=w.trim(t),t.indexOf("[uri_")==0&&t.indexOf("]")==t.length-1&&t.length>6){var r=t.substring(5,t.length-1)+" ";o+='<a target="_blank" style="color: #2f53ff" href="'+r+'">'+r+"</a> "}else o+=t+" "}),o},j=()=>{let s=document.webkitFullscreenElement,o=document.getElementById("drawPanel");s?document.webkitCancelFullScreen():o.webkitRequestFullScreen(),setTimeout(()=>{v.value=!1},2e3)};return(s,o)=>{const f=ce("el-svg-icon");return l.value?(n(),u("div",pe,[e("div",fe,[e("div",he,[e("div",ge,[e("div",Ce,[e("div",{class:"title oneEllipsis",title:l.value.openCourseName},d(l.value.openCourseName),9,Fe),e("div",ke,[ye,C(" 直播时间： "+d(l.value.liveStartTime)+" - "+d(l.value.liveEndTime?l.value.liveEndTime.substring(10):""),1)])]),S.value?(n(),u("div",De,[be,Ee,e("div",{class:"player-Prompt-close",onClick:o[0]||(o[0]=t=>S.value=!1)},[C(" 关闭 "),Be])])):m("",!0),e("div",we,[e("div",{class:"player-main",onMouseover:o[2]||(o[2]=t=>v.value=!0),onMouseleave:o[3]||(o[3]=t=>v.value=!1)},[e("div",Ae,[e("div",{class:"play-mask",onClick:o[1]||(o[1]=t=>v.value=!v.value)},[v.value?(n(),u("div",Se,[re(f,{name:"FullScreen",color:"#fff",size:30,class:"full-screen-btn",title:"点击全屏/取消全屏",onClick:j})])):m("",!0)])])],32)]),e("div",Le,[e("div",Te,[e("img",{src:l.value.teacherPortrait,alt:""},null,8,xe)]),C(" 讲师："+d(l.value.teacherName),1)])]),l.value.liveCourseStatus==1?(n(),u("div",Pe,[$e,e("div",Ie,[Me,e("div",{class:"msg-list",id:"msg-list",ref_key:"chatContent",ref:p},[(n(!0),u(N,null,O(E.value,(t,r)=>(n(),u("div",{class:de(t.username==b.value?"my msg-item":"msg-item"),key:r},[e("div",Ne,d(t.username),1),e("div",{class:"msg",innerHTML:R(t.msg)},null,8,Oe)],2))),128))],512),e("div",He,[e("div",qe,[ve(e("input",{placeholder:"参与聊天","onUpdate:modelValue":o[4]||(o[4]=t=>_.value=t)},null,512),[[G,_.value]]),e("div",{class:"submit",onClick:o[5]||(o[5]=t=>Y())},"发送")])])])])):m("",!0)])]),e("div",We,[e("div",Ve,[Ye,e("div",ze,[(n(!0),u(N,null,O(T.value,(t,r)=>(n(),u("div",{class:"list-item",key:r},[e("div",Re,[e("img",{src:t.surfacePlot,alt:""},null,8,je),e("div",Ue,[e("div",Ge,d(t.openCourseName),1),e("div",Je,[Xe,e("div",Ke,[Qe,C(" "+d(t.heatDegree)+"人气值 ",1)])])])]),e("div",Ze,[e("div",es,"开播时间："+d(s.$dayjs(t.liveStartTime).format("YYYY-MM-DD HH:mm")),1),t.liveCourseStatus==0&&t.scheduledStatus==0?(n(),u("div",{key:0,class:"btn btn1",onClick:o[6]||(o[6]=a=>V())},"立即预约")):m("",!0),t.liveCourseStatus==0&&t.scheduledStatus==1?(n(),u("div",ss,"预约成功 ")):t.liveCourseStatus==1?(n(),u("div",{key:2,class:"btn btn3",onClick:a=>I(1,t.openCourseId)},"进入直播 ",8,ts)):t.liveCourseStatus==2?(n(),u("div",os,"回放生成中")):t.liveCourseStatus==3?(n(),u("div",{key:4,class:"btn btn5",onClick:a=>I(2,t.openCourseId)},"观看课程 ",8,is)):m("",!0)])]))),128))])])])])):m("",!0)}}}),ks=ie(ls,[["__scopeId","data-v-487f7384"]]);export{ks as default};
