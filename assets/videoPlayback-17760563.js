import{$ as Y}from"./jquery-0491babd.js";import{u as ke}from"./vue-router.esm-bundler-926c5a09.js";import{K as we}from"./KnowledgeView-bc835c84.js";import{R as Fe}from"./ratingPopup-59848cfb.js";import{D as Ee}from"./DataView-5ecd7284.js";import{C as be}from"./coachClient-6606bd3e.js";import{A as Se}from"./accountClient-b6fbd578.js";import{P as De}from"./publicClient-90b64d32.js";import{_ as Be}from"./plugin-vue_export-helper-c27b6911.js";import{f as Ne,r as a,$ as Te,a as $e,b as Pe,o as Ae,G as V,h as l,j as n,C as N,z as _,k as o,B as T,A as U,v as q,F as te,V as le,t as ue,n as Ve,af as qe,ag as Le}from"./runtime-core.esm-bundler-201072b8.js";import"./commonjsHelpers-725317a4.js";import"./webClient-2e88593a.js";import"./user-b1b56a44.js";import"./evaluatView-3e999aa8.js";import"./learningCenterClient-cc3ac964.js";const E=$=>(qe("data-v-dd47d0dc"),$=$(),Le(),$),xe={class:"pannel"},Re={key:0,class:"loading-mask"},We={key:0,class:"loading-con"},je=E(()=>o("div",null,"缓冲中，请稍后",-1)),He={key:1,class:"tip-con"},ze=E(()=>o("div",{class:"mb30"},"网络错误，与服务器断开",-1)),Me={class:"btn-con"},Oe={key:2,class:"tip-con"},Ye={class:"mb30"},Ue={class:"video-pannel"},Ke={class:"video-con"},Ge={class:"video-left"},Je={class:"video-title"},Qe={class:"title oneEllipsis"},Xe={class:"teacher"},Ze={class:"tea-img"},ea=["src"],aa={class:"player"},oa={key:0,class:"player-Prompt"},ta=E(()=>o("div",{class:"icon"},[o("i",{class:"iconfont iconzhuyi"})],-1)),la=E(()=>o("div",{class:"text"}," 课程视频版权所有，禁止任何形式得转载！并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。 ",-1)),ua=E(()=>o("i",{class:"iconfont iconguanbi"},null,-1)),sa={class:"player-main"},na={class:"prism-player",id:"player-con"},ia={key:0,src:"https://xlc-wx.oss-cn-beijing.aliyuncs.com/xlcwx/videologo.png",alt:"",class:"logo-img"},ca={class:"video-list"},da=E(()=>o("div",{class:"tip"},[o("i",{class:"iconfont icondaohang"}),U(" 课程列表")],-1)),ra={class:"list"},va=["title"],pa=["onClick"],ma={key:0,class:"iconfont iconbofangzhong"},_a={key:1,class:"iconfont iconbofang"},ha=["title"],fa={key:2,class:"state"},Ia=Ne({__name:"videoPlayback",setup($){let se=new Se,p=new be,ne=new De;const K=a(),m=a(),L=a(0),f=a(),b=a(),G=a(0),I=a(!0),J=a(!1),d=a(),y=a({}),S=a({}),g=ke(),ie=a([]),Q=a(!1),x=a([]),R=a(""),W=a({}),u=a(),r=a(),C=a(),k=a(),w=a(),i=a(),X=a(!0),F=a({}),P=a({}),D=a(0),Z=a("1.0"),A=a(0),j=a(!1),H=a(!0),ce=a(),de=a("");a(),a();const ee=a();a(),a(),Te(()=>{d.value.onclose=function(e){console.log(e,"WebSocket 关闭"),p.receiveCourse(1)},P.value.dispose(),clearInterval(R.value),clearInterval(b.value),clearInterval(f.value)}),$e(()=>{p.receiveCourse(1)}),Pe(()=>{u.value=g.query.id,i.value=g.query.courseId,r.value=g.query.classId,C.value=g.query.semesterId,k.value=g.query.dateYear,w.value=g.query.courseNameId}),Ae(async()=>{let e=await se.checkLogIn();e&&(W.value=e,ne.checkIsOrder(2,i.value).then(t=>{if(!t){window.location.href=`/coachcourse/videoCourse?id=${i.value}`;return}}),await fe(),r.value?await re():I.value=await!1,pe())});const re=()=>{p.getWatchStatus().then(e=>{e.code==1?(I.value=!0,m.value=3,K.value=e.msg):B()})},ve=e=>{j.value=e,ae()},ae=()=>{p.getMyRatingList({courseId:i.value,chapterId:y.value.videoChapterId,nodeId:u.value}).then(e=>{e.data.length>0?H.value=!1:H.value=!0})},pe=()=>{p.queryCourseTasks().then(e=>{console.log("如一",e),ce.value=e.data.time,de.value=e.data.frequency})},B=()=>{L.value==30&&(m.value=2);var e=Y("video")[0];let t=`ws://60.216.20.210:8000/gateway/knowledge/learningRateServer?userId=${W.value.userId}&clientTypeCode=PC&chapterId=${y.value.videoChapterId}&classId=${r.value}&courseId=${i.value}&courseNameId=${w.value}&dateYear=${k.value}&nodeId=${u.value}&semesterId=${C.value}`;d.value=new WebSocket(t),d.value.onopen=function(){console.log("WebSocket创建成功"),e.play(),m.value!=3&&(I.value=!1),clearInterval(f.value)},d.value.onmessage=function(c){console.log(c,"WebSocket接收数据")},d.value.onerror=function(c){console.log(c,"WebSocket 报错"),e.pause(),I.value=!0,setTimeout(()=>{B()},1e3),clearInterval(f.value),f.value=setInterval(()=>{L.value++},1e3)},d.value.onclose=function(c){console.log(c,"WebSocket 关闭"),e.pause(),I.value=!0,setTimeout(()=>{B()},1e3),clearInterval(f.value),f.value=setInterval(()=>{L.value++},1e3)}},me=()=>{A.value=parseInt(P.value.getCurrentTime()),p.getRecordDuration({courseId:i.value,coachClassTypeId:r.value,courseChapterId:u.value,courseChapterNodeId:ee.value,duration:A.value,teachingMethod:2,platformType:"PC"}).then(t=>{console.log("-----integral----",t)});let e={classId:r.value,semesterId:C.value,dateYear:k.value,courseNameId:w.value,courseId:i.value,coachClassTypeId:r.value,courseChapterId:u.value,courseChapterNodeId:ee.value,duration:A.value,chapterId:y.value.videoChapterId,nodeId:u.value,userId:W.value.userId,clientType:"PC",videoTypeCode:2,videoDuration:S.value.videoDurationSec,currentSeeSec:A.value,multiple:Z.value,liveStatus:0,liveStartTime:""};console.log("obj--333--",e),d.value.readyState==1&&d.value.send(JSON.stringify(e))},_e=async()=>{await p.getViewingHistory(r.value,C.value,k.value,w.value,i.value,y.value.videoChapterId,u.value).then(e=>{e.data&&(D.value=e.data.currentSeeSec)})},he=async()=>{r.value&&await _e(),await ae();let e,t=S.value.playLink;e=new Aliplayer({id:"player-con",source:t,width:"100%",height:"100%",autoplay:!0,preload:!0,isLive:!1,useH5Prism:!0,rePlay:!1},function(h){D.value>0&&h.seek(D.value),console.log("The player is created")});function c(){if(m.value==3){var h=Y("video")[0];h.pause()}J.value=!0,D.value>0&&e.seek(D.value)}function z(){clearInterval(R.value),r.value&&(R.value=setInterval(()=>{me()},1e3))}function M(){clearInterval(b.value)}function O(){console.log("webSocket.value",d.value),d.value.readyState==3&&B(),clearInterval(b.value),b.value=setInterval(()=>{G.value++},1e3),d.value.readyState==3&&B()}function s(){var h=Y("video")[0];if(Z.value=h.playbackRate,H.value){var v=parseInt(e.getDuration());v>1200&&G.value>=v*.9&&(clearInterval(b.value),j.value=!0,e.pause(),document.webkitFullscreenElement&&document.webkitCancelFullScreen())}}e.on("ready",c),e.on("play",O),e.on("pause",M),e.on("playing",z),e.on("timeupdate",s),P.value=e},fe=async()=>{let e=await p.queryCourseDetails(i.value);F.value=e.data;for(let c of e.data.videoList)for(var t of c.queryVideoNodeList)t.nodeId==u.value&&(y.value=c,S.value=t,document.title=await S.value.nodeName),u.value==t.nodeId&&x.value.push(t.nodeId);await he()},Ie=async e=>{P.value.seek(e)},ye=e=>{window.location.href=`/videoPlayback?courseId=${i.value}&id=${e}&classId=${r.value?r.value:""}&semesterId=${C.value?C.value:""}&dateYear=${k.value?k.value:""}&courseNameId=${w.value?w.value:""}`},ge=()=>{window.location.reload()},Ce=()=>{window.close()};return(e,t)=>{const c=V("el-svg-icon"),z=V("el-collapse-item"),M=V("el-collapse"),O=V("el-dialog");return l(),n("div",xe,[I.value?(l(),n("div",Re,[m.value==1?(l(),n("div",We,[N(c,{name:"Loading",size:20,color:"#fff",class:"icon"}),je])):_("",!0),m.value==2?(l(),n("div",He,[ze,o("div",Me,[o("div",{onClick:t[0]||(t[0]=s=>m.value=1)},"继续等待"),o("div",{onClick:t[1]||(t[1]=s=>ge())},"重新播放")])])):_("",!0),m.value==3?(l(),n("div",Oe,[o("div",Ye,T(K.value),1),o("div",{class:"btn-con"},[o("div",{onClick:Ce},"我知道了")])])):_("",!0)])):_("",!0),o("div",Ue,[o("div",Ke,[o("div",Ge,[o("div",Je,[o("div",Qe,T(S.value.nodeName),1),o("div",Xe,[o("div",Ze,[o("img",{src:F.value.teacherPortrait,alt:""},null,8,ea)]),U(" 讲师："+T(F.value.teacherName),1)])]),o("div",aa,[X.value?(l(),n("div",oa,[ta,la,o("div",{class:"player-Prompt-close",onClick:t[2]||(t[2]=s=>X.value=!1)},[U(" 关闭 "),ua])])):_("",!0),o("div",sa,[o("div",na,[J.value?(l(),n("img",ia)):_("",!0)])])])]),o("div",ca,[da,o("div",ra,[N(M,{modelValue:x.value,"onUpdate:modelValue":t[3]||(t[3]=s=>x.value=s)},{default:q(()=>[(l(!0),n(te,null,le(F.value.videoList,(s,h)=>(l(),ue(z,{key:h,name:s.id},{title:q(()=>[o("div",{class:"zhang oneEllipsis",title:s.videoChapterName},T(s.videoChapterName),9,va)]),default:q(()=>[(l(!0),n(te,null,le(s.queryVideoNodeList,(v,oe)=>(l(),n("div",{class:"jie",key:oe},[o("div",{class:Ve(["title pointer",v.nodeId==u.value?"on":""]),onClick:ya=>ye(v.nodeId)},[v.nodeId==u.value?(l(),n("i",ma)):(l(),n("i",_a)),o("div",{class:"name oneEllipsis",title:v.nodeName},T(v.nodeName),9,ha),v.nodeId==u.value?(l(),n("span",fa,"正在播放")):_("",!0)],10,pa)]))),128))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])])])]),F.value?(l(),ue(we,{key:1,type:2,id:u.value,courseId:i.value,teacherId:F.value.teacherId,onClickSeekTime:Ie},null,8,["id","courseId","teacherId"])):_("",!0),N(O,{width:"720px",modelValue:Q.value,"onUpdate:modelValue":t[4]||(t[4]=s=>Q.value=s)},{default:q(()=>[N(Ee,{items:ie.value},null,8,["items"])]),_:1},8,["modelValue"]),N(Fe,{show:j.value,courseId:i.value,chapterId:y.value.videoChapterId,nodeId:u.value,onClickClose:ve},null,8,["show","courseId","chapterId","nodeId"])])}}}),Va=Be(Ia,[["__scopeId","data-v-dd47d0dc"]]);export{Va as default};
