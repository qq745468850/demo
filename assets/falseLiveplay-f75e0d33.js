import{R as k}from"./ratingPopup-59848cfb.js";import{A as y}from"./accountClient-b6fbd578.js";import{C as w}from"./coachClient-6606bd3e.js";import{P as b}from"./publicClient-90b64d32.js";import{aa as C}from"./webClient-2e88593a.js";import{_ as S}from"./video-img1-ca5161b6.js";import{_ as T}from"./plugin-vue_export-helper-c27b6911.js";import{G as I,h as n,j as r,k as s,C as m,z as d,B as p,A as g,F as P,V as O,x as M,n as j,af as N,ag as W}from"./runtime-core.esm-bundler-201072b8.js";import"./commonjsHelpers-725317a4.js";import"./vue-router.esm-bundler-926c5a09.js";let q=new b,l=new w,R=new y;const L={components:{RatingPopup:k},data(){return{loadingTip:"",loadingTipType:"",loadingTime:0,loadingInterval:"",loading:!0,banTime:0,showRating:!1,firstRating:!0,showSettingPannel:!1,im_time_interval:"",msgList:[],msgDW:"",isMuted:!0,showLogo:!1,groupId:"",IMToken:"",im_websocket:null,requestId:"",webSocket:{},timer:"",userInfo:{},classId:0,semesterId:"",dateYear:"",courseNameId:"",id:"",courseId:"",showPrompt:!0,liveshow:{},playback:{},onSpeed:"1.0",playerObj:{},chapterObj:{},seek:0,timePoint:0,timer:"",frequency:"",coachClassTypeId:"",courseChapterId:"",courseChapterNodeId:"",duration:"",teachingMethod:"",platformType:"PC"}},destoryed(){this.webSocket.onclose=function(e){console.log(e,"WebSocket 关闭")},this.im_websocket.onclose=function(e){console.log(e,"WebSocket 关闭")},this.chapterObj.ccPlaybackId&&this.chapterObj.liveRootId&&$.DW.destroy(),clearInterval(this.timer),clearInterval(this.loadingInterval),l.receiveCourse(1)},async created(){this.id=this.$route.query.id,this.courseId=this.$route.query.courseId,this.classId=this.$route.query.classId,this.semesterId=this.$route.query.semesterId,this.dateYear=this.$route.query.dateYear,this.courseNameId=this.$route.query.courseNameId;let e=await R.checkLogIn();e&&(this.userInfo=await e,q.checkIsOrder(1,this.courseId).then(t=>{if(!t){window.location.href=`/coachcourse/liveCourse?id=${this.courseId}`;return}}),this.classId?await this.getWatchStatus():this.loading=!1,await this.getLiveData()),await this.queryCourseTasks()},methods:{queryCourseTasks(){l.queryCourseTasks().then(e=>{console.log("Melody",e),this.timer=e.data.time,this.frequency=e.data.frequency})},getWatchStatus(){l.getWatchStatus().then(e=>{e.code==1?(this.loading=!0,this.loadingTipType=3,this.loadingTip=e.msg):this.webSocketConnection()})},clickClose(e){this.showRating=e,this.getMyRatingList()},getMyRatingList(){l.getMyRatingList({courseId:this.courseId,chapterId:this.id}).then(e=>{e.data.length>0?this.firstRating=!1:this.firstRating=!0})},submit(){if(this.msgDW==""){alert("请输入聊天内容~");return}l.imSendGroupMsg(this.groupId,this.msgDW,this.IMToken).then(e=>{e.code==200?(this.msgDW="",this.$nextTick(()=>{this.$refs.chatContent.scrollTop=this.$refs.chatContent.scrollHeight})):console.log(e,"IM发送失败")})},im_connect(){try{this.im_websocket=new WebSocket("wss://websocket.lingju.cc"),this.im_websocket.onopen=this.im_onOpen,this.im_websocket.onmessage=this.im_onMessage,this.im_websocket.onerror=function(e){console.log(e,"IMWebSocket 报错"),this.im_websocket.onclose=function(t){console.log(t,"IMWebSocket 关闭")}}}catch(e){console.log("new WebSocket error:"+e),setTimeout(()=>{this.im_connect()},1e3)}},im_onOpen(){this.im_websocket.send(JSON.stringify({requestId:this.requestId,reqMsg:this.userInfo.userName,type:1})),this.im_time_interval=window.setInterval(this.im_send,1e4)},im_send(){this.im_websocket.readyState==WebSocket.OPEN&&this.im_websocket.send(JSON.stringify({requestId:this.requestId,reqMsg:"ping msg",type:1}))},im_onMessage(e){let t=JSON.parse(e.data);if(t.type==2){let c=t.reqMsg,h=JSON.parse(c);h.create_time=h.send_time,h.content=h.msg,this.msgList.push(h),this.$nextTick(()=>{this.$refs.chatContent.scrollTop=this.$refs.chatContent.scrollHeight})}},imRegister(){l.imRegister({userId:this.userInfo.userId,headerUrl:this.userInfo.headPortrait,userName:this.userInfo.userName,tenantId:"1533366097988919026"}).then(e=>{this.IMToken=e.data.access_token,this.requestId=e.data.request_id,this.im_connect(),l.imJoinGroup(this.groupId,[this.userInfo.userId+"::"+this.userInfo.userName],this.IMToken).then(t=>{t.code==200&&l.imQueryGroupMsg(this.groupId,1,100,this.IMToken).then(c=>{this.msgList=c.result.list.reverse(),this.$nextTick(()=>{this.$refs.chatContent.scrollTop=this.$refs.chatContent.scrollHeight})})})})},webSocketConnection(){let e=this;try{e.loadingTime==30&&(e.loadingTipType=2);let t=`ws://60.216.20.210:8000/gateway/knowledge/learningRateServer?userId=${e.userInfo.userId}&clientTypeCode=PC&chapterId=${e.id}&classId=${e.classId}&courseId=${e.courseId}&courseNameId=${e.courseNameId}&dateYear=${e.dateYear}&nodeId=&semesterId=${e.semesterId}`;e.webSocket=new WebSocket(t),e.webSocket.onopen=function(){console.log("WebSocket创建成功"),e.loadingTipType!=3&&(e.loading=!1),clearInterval(e.loadingInterval)},e.webSocket.onmessage=function(c){console.log(c,"WebSocket接收数据")}}catch(t){console.log(t,"webSocket错误"),clearInterval(e.loadingInterval),e.loadingInterval=setInterval(()=>{e.loadingTime++},1e3),e.loading=!0,setTimeout(()=>{e.webSocketConnection()},1e3)}},webSocketSend(){this.chapterObj.ccPlaybackId&&this.chapterObj.liveRootId?this.timePoint=parseInt($.DW.getPlayerTime()):this.timePoint=parseInt(this.playerObj.getCurrentTime()),l.getRecordDuration({courseId:this.courseId,coachClassTypeId:this.classId,courseChapterId:this.id,courseChapterNodeId:this.courseChapterNodeId,duration:this.timePoint,teachingMethod:this.videoTypeCode,platformType:"PC"}).then(t=>{console.log("获取积分",t)});let e={classId:this.classId,semesterId:this.semesterId,dateYear:this.dateYear,courseNameId:this.courseNameId,courseId:this.courseId,coachClassTypeId:this.classId,courseChapterId:this.courseChapterId,courseChapterNodeId:this.courseChapterNodeId,duration:this.timePoint,chapterId:this.id,nodeId:"",userId:this.userInfo.userId,clientType:"PC",videoTypeCode:1,videoDuration:this.chapterObj.totalTime,currentSeeSec:this.timePoint,multiple:this.onSpeed,liveStatus:1,liveStartTime:this.chapterObj.liveStartTime};this.webSocket.readyState==1&&this.webSocket.send(JSON.stringify(e))},async getLiveData(){let e=await l.queryCourseDetails(this.courseId);this.liveshow=e.data;for(let c of e.data.liveList)if(c.liveChapterId==this.id){this.chapterObj=c,this.groupId=c.groupId,document.title=c.liveChapterName;var t=await parseInt(this.$dayjs().unix())-parseInt(this.$dayjs(this.chapterObj.liveStartTime).unix());this.seek=await t}if(this.chapterObj.liveCourseStatus==0){alert("直播尚未开始~"),this.$router.go(-1);return}if(this.chapterObj.liveCourseStatus==2){alert("回放生成中~"),this.$router.go(-1);return}if(this.chapterObj.liveCourseStatus==3){alert("直播回放中~"),this.$router.go(-1);return}await this.getMyRatingList(),this.chapterObj.liveCourseStatus==1&&await this.initCCPlayer(),await this.imRegister()},clickVoice(){var e=$("#playbackVideo")[0];e.muted=!1,this.isMuted=!1},initCCPlayer(){$.DW.config({userId:"41A331E332E32281",roomId:this.chapterObj.liveRootId,recordId:this.chapterObj.ccPlaybackId,isH5play:!0,fastMode:!0}),$.DW.isShowBar(1);var e=this;window.on_player_start=function(){clearInterval(e.timer),e.timer=setInterval(()=>{e.webSocketSend()},1e3),e.webSocket.readyState==3&&e.webSocketConnection()},window.on_spark_player_pause=async function(){clearInterval(e.timer)},window.on_cc_live_player_load=function(){var t=$("#playbackVideo")[0];t.muted=!0,$.DW.play(),e.showLogo=!0},window.on_cc_swf_loading_completed=function(){e.seek>0&&$.DW.seek(e.seek)},window.on_spark_player_end=function(){e.firstRating&&(e.showRating=!0),document.webkitFullscreenElement&&document.webkitCancelFullScreen()}},clickFullScreen(){let e=document.webkitFullscreenElement,t=document.getElementById("playbackPanel");e?document.webkitCancelFullScreen():t.webkitRequestFullScreen(),setTimeout(()=>{this.showSettingPannel=!1},2e3)}}},a=e=>(N("data-v-0ddc3afc"),e=e(),W(),e),D={class:"pannel"},x={class:"video-pannel"},E={key:0,class:"loading-mask"},V={key:0,class:"loading-con"},F=a(()=>s("div",null,"缓冲中，请稍后",-1)),B={key:1,class:"tip-con"},Y=a(()=>s("div",{class:"mb30"},"网络错误，与服务器断开",-1)),H={class:"btn-con"},J={key:2,class:"tip-con"},z={class:"mb30"},A={class:"btn-con"},G={class:"video-con"},U={class:"video-left"},Q={class:"video-title"},K=["title"],X={class:"teacher"},Z={class:"tea-img"},ee=["src"],te={key:0,class:"player-Prompt"},se=a(()=>s("div",{class:"icon"},[s("i",{class:"iconfont iconzhuyi"})],-1)),ie=a(()=>s("div",{class:"text"}," 课程视频版权所有，禁止任何形式得转载！并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。 ",-1)),oe=a(()=>s("i",{class:"iconfont iconguanbi"},null,-1)),ne={id:"playbackPanel",style:{width:"100%",height:"100%"}},re={key:0,class:"setting-pannel"},ce={class:"player-function"},le={class:"teacher-video"},ae={key:0,class:"style1"},de=a(()=>s("div",{id:"playbackPlayer",style:{width:"100%",height:"100%"}},null,-1)),he=[de],ue={key:1},pe=a(()=>s("img",{src:S},null,-1)),me=[pe],ge={class:"mask-con"},_e=a(()=>s("i",{class:"iconfont iconxiaolaba"},null,-1)),Ie={class:"playback-talk"},ve=a(()=>s("div",{class:"text"},"聊天区",-1)),fe={class:"msg-list",id:"msg-list",ref:"chatContent"},ke={class:"user-con"},ye=["src"],we={class:"name"},be={class:"msg"},Ce=["innerHTML"],Se={class:"msg-btn"},Te={class:"btn-block"};function Pe(e,t,c,h,i,u){const _=I("el-svg-icon"),v=I("rating-popup");return n(),r("div",D,[s("div",x,[i.loading?(n(),r("div",E,[i.loadingTipType==1?(n(),r("div",V,[m(_,{name:"Loading",size:20,color:"#fff",class:"icon"}),F])):d("",!0),i.loadingTipType==2?(n(),r("div",B,[Y,s("div",H,[s("div",{onClick:t[0]||(t[0]=o=>i.loadingTipType=1)},"继续等待"),s("div",{onClick:t[1]||(t[1]=o=>e.reloadPage())},"重新播放")])])):d("",!0),i.loadingTipType==3?(n(),r("div",J,[s("div",z,p(i.loadingTip),1),s("div",A,[s("div",{onClick:t[2]||(t[2]=(...o)=>e.closeWindow&&e.closeWindow(...o))},"我知道了")])])):d("",!0)])):d("",!0),s("div",G,[s("div",U,[s("div",Q,[s("div",{class:"title oneEllipsis",title:i.chapterObj.liveChapterName},p(i.chapterObj.liveChapterName),9,K),s("div",X,[s("div",Z,[s("img",{src:i.liveshow.teacherPortrait,alt:""},null,8,ee)]),g(" 讲师："+p(i.liveshow.teacherName),1)])]),i.showPrompt?(n(),r("div",te,[se,ie,s("div",{class:"player-Prompt-close",onClick:t[3]||(t[3]=o=>i.showPrompt=!1)},[g(" 关闭 "),oe])])):d("",!0),i.chapterObj&&i.chapterObj.ccPlaybackId&&i.chapterObj.liveRootId?(n(),r("div",{key:1,class:"player-main",onMouseover:t[5]||(t[5]=o=>i.showSettingPannel=!0),onMouseleave:t[6]||(t[6]=o=>i.showSettingPannel=!1)},[s("div",ne,[s("div",{class:"play-mask",onClick:t[4]||(t[4]=o=>i.showSettingPannel=!i.showSettingPannel)},[i.showSettingPannel?(n(),r("div",re,[m(_,{name:"FullScreen",color:"#fff",size:30,class:"full-screen-btn",title:"点击全屏/取消全屏",onClick:u.clickFullScreen},null,8,["onClick"])])):d("",!0)])])],32)):d("",!0)]),s("div",ce,[s("div",le,[i.chapterObj&&i.chapterObj.ccPlaybackId&&i.chapterObj.liveRootId?(n(),r("div",ae,he)):(n(),r("div",ue,me)),s("div",ge,[i.isMuted?(n(),r("div",{key:0,class:"showLiveBtn",onClick:t[7]||(t[7]=(...o)=>u.clickVoice&&u.clickVoice(...o))},[_e,g("打开声音 ")])):d("",!0)])]),s("div",Ie,[ve,s("div",fe,[(n(!0),r(P,null,O(i.msgList,(o,f)=>(n(),r("div",{class:j(["msg-item",o.user_id==i.userInfo.userId?"my":""]),key:f},[s("div",ke,[s("img",{src:o.header_url,alt:"",class:"head-img"},null,8,ye),s("div",we,p(o.user_name),1)]),s("div",be,[s("div",{innerHTML:o.content},null,8,Ce)])],2))),128))],512),s("div",Se,[s("div",Te,[M(s("input",{placeholder:"参与聊天","onUpdate:modelValue":t[8]||(t[8]=o=>i.msgDW=o)},null,512),[[C,i.msgDW]]),s("div",{class:"submit",onClick:t[9]||(t[9]=o=>u.submit())},"发送")])])])])])]),m(v,{show:i.showRating,courseId:i.courseId,chapterId:i.id,onClickClose:u.clickClose},null,8,["show","courseId","chapterId","onClickClose"])])}const $e=T(L,[["render",Pe],["__scopeId","data-v-0ddc3afc"]]);export{$e as default};
