import{C as g}from"./coachClient-6606bd3e.js";import{A as p}from"./accountClient-b6fbd578.js";import{aa as f}from"./webClient-2e88593a.js";import{_ as y}from"./teacher-img-725b40ec.js";import{_ as w}from"./plugin-vue_export-helper-c27b6911.js";import{h as d,j as h,k as s,B as _,A as v,z as C,n as c,F as D,V as k,x as b,af as I,ag as L}from"./runtime-core.esm-bundler-201072b8.js";import"./_commonjsHelpers-725317a4.js";import"./vue-router.esm-bundler-926c5a09.js";let P=new p,r=new g;const S={data(){return{classId:"",onData:{},showPrompt:!0,userInfo:{},id:"",switchStyle:!0,isFullscreen:!1,msg:"",msgDW:"",msgList:[],nickName:"",isPlay:!1,timer:"",frequency:"",times:"",seconds:"",type:1}},async created(){this.id=this.$route.query.id,this.classId=this.$route.query.classId;let e=await P.checkLogIn();e&&(this.userInfo=e,this.nickName=this.userInfo.nickName,this.queryClassMeetingDetails(),this.queryCourseTasks())},watch:{isFullscreen(){this.isFullscreen==!0&&(this.switchStyle=!0)}},beforeDestroy(){DWLive.destroy(),r.receiveCourse(this.type)},methods:{async queryCourseTasks(){await r.queryCourseTasks().then(e=>{console.log("----150----",e),this.timer=e.data.time,this.frequency=e.data.frequency})},async queryClassMeetingDetails(){let e=await r.queryClassMeetingDetails(1,99,this.id);this.onData=await e.data,await this.initCCPlayer(),this.onData.liveCourseStatus==1?(this.isPlay=await!0,await this.initCCPlayer()):this.isPlay=await!1},addClassMeetingRecords(){r.addClassMeetingRecords(this.classId,this.id,this.userInfo.userId)},initCCPlayer(){let e=this.onData.liveLink,m=e.split("&")[0].split("=")[1],t=e.split("&")[1].split("=")[1];var n=this;DWLive.init({userid:t,roomid:m,viewertoken:"123",pcH5Live:!0,viewername:n.nickName}),DWLive.onLiveStart=function(i){console.log(i),this.frequency!=0&&(this.times=setInterval(()=>{this.seconds++,this.times===this.seconds&&(r.receiveTaskProfit(10),this.seconds=0,this.frequency--,this.frequency<=0&&clearInterval(this.times))}))},DWLive.onLiveEnd=function(i){console.log(i),clearInterval()},DWLive.onPublicChatMessage=async function(i){let u=JSON.parse(i);n.msgList=await n.msgList.concat(u),await n.$forceUpdate(),$("#msg-list").scrollTop($("#msg-list")[0].scrollHeight)}},submit(){this.msgDW!=""?(DWLive.sendPublicChatMsg(this.msgDW),this.msgDW=""):alert("请输入内容~！")},showEm(e){if(!$.trim(e))return"";e=e.replace(/\</g,"&lt;"),e=e.replace(/\>/g,"&gt;"),e=e.replace(/\n/g,"<br/>"),e=e.replace(/\[em_([0-9]*)\]/g,'<img src="//view.csslcloud.net/img/em/$1.gif" border="0" />'),e=e.replace(/\[em2_([0-9]*)\]/g,'<img src="//view.csslcloud.net/img/em2/$1.png" border="0" />');var o="";return $.each(e.split(" "),function(m,l){if(l=$.trim(l),l.indexOf("[uri_")==0&&l.indexOf("]")==l.length-1&&l.length>6){var t=l.substring(5,l.length-1)+" ";o+='<a target="_blank" style="color: #2f53ff" href="'+t+'">'+t+"</a> "}else o+=l+" "}),o}}},a=e=>(I("data-v-75c2bf68"),e=e(),L(),e),q={class:"pannel"},M={class:"video-pannel"},x={class:"video-con"},N={class:"video-left"},W={class:"video-title"},T=["title"],F={key:0,class:"player-Prompt"},E=a(()=>s("div",{class:"icon"},[s("i",{class:"iconfont iconzhuyi"})],-1)),V=a(()=>s("div",{class:"text"}," 课程视频版权所有，禁止任何形式得转载！并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。 ",-1)),B=a(()=>s("i",{class:"iconfont iconguanbi"},null,-1)),H={class:"video-block"},O={class:"player-main"},z=a(()=>s("div",{class:"play-mask"},null,-1)),A=a(()=>s("div",{id:"drawPanel"},null,-1)),U=[A],R={class:"teacher"},j={class:"tea-img"},J=["src"],G={class:"video-right"},K={class:"teacher-video"},Q=a(()=>s("div",{id:"livePlayer",style:{width:"100%",height:"100%",position:"relative"}},null,-1)),X=[Q],Y=a(()=>s("img",{src:y},null,-1)),Z=a(()=>s("div",{class:"text"},"讲师赶来中...",-1)),ss=[Y,Z],es={class:"playback"},ts=a(()=>s("div",{class:"text"},"聊天区",-1)),is={class:"msg-list",id:"msg-list"},os={class:"name"},ls={class:"msg"},as=["innerHTML"],ns={class:"msg-btn"},cs={class:"btn-block"};function rs(e,o,m,l,t,n){return d(),h("div",q,[s("div",M,[s("div",x,[s("div",N,[s("div",W,[s("div",{class:"title oneEllipsis",title:t.onData.classMeetingName},_(t.onData.classMeetingName),9,T)]),t.showPrompt?(d(),h("div",F,[E,V,s("div",{class:"player-Prompt-close",onClick:o[0]||(o[0]=i=>t.showPrompt=!1)},[v(" 关闭 "),B])])):C("",!0),s("div",H,[s("div",O,[z,s("div",{class:c([t.switchStyle?"style1":"style2",t.isPlay?"":"null"])},U,2)])]),s("div",R,[s("div",j,[s("img",{src:t.onData.teacherPortrait,alt:""},null,8,J)]),v(" 讲师："+_(t.onData.teacherName),1)])]),s("div",G,[s("div",{class:c(t.isFullscreen?"player-function functionisFullscreen":"player-function")},[s("div",K,[s("div",{class:c([t.switchStyle?"style1":"style2",t.isPlay?"":"null"])},X,2),s("div",{class:c(t.isPlay?"null":"playIsnull")},ss,2)])],2),s("div",es,[ts,s("div",is,[(d(!0),h(D,null,k(t.msgList,(i,u)=>(d(),h("div",{class:c(i.username==t.nickName?"my msg-item":"msg-item"),key:u},[s("div",os,_(i.username),1),s("div",ls,[s("div",{innerHTML:n.showEm(i.msg)},null,8,as)])],2))),128))]),s("div",ns,[s("div",cs,[b(s("input",{name:"name",placeholder:"参与聊天","onUpdate:modelValue":o[1]||(o[1]=i=>t.msgDW=i)},null,512),[[f,t.msgDW]]),s("div",{class:"submit",onClick:o[2]||(o[2]=i=>n.submit())},"发送")])])])])])])])}const fs=w(S,[["render",rs],["__scopeId","data-v-75c2bf68"]]);export{fs as default};
