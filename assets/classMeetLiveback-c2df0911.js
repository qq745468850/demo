import{A as p}from"./AliPlayer-41cb06a0.js";import{A as m}from"./accountClient-b6fbd578.js";import{C as u}from"./coachClient-6606bd3e.js";import{_ as v}from"./plugin-vue_export-helper-c27b6911.js";import{G as y,h as o,j as c,k as s,B as n,A as r,z as d,t as f,F as g,V as k,af as w,ag as D}from"./runtime-core.esm-bundler-201072b8.js";import"./jquery-0491babd.js";import"./commonjsHelpers-725317a4.js";import"./vue-router.esm-bundler-926c5a09.js";import"./webClient-2e88593a.js";let S=new m,C=new u;const x={data(){return{onData:{},userInfo:{},showPrompt:!0,onSpeed:"1.0",speeds:[{name:"0.8x",value:"0.8"},{name:"1.0x",value:"1.0"},{name:"1.25x",value:"1.25"},{name:"1.5x",value:"1.5"},{name:"2.0x",value:"2.0"}],showSpeed:!1,switchStyle:!0,isFullscreen:!1,player:{},seek:0,isPlay:!1,tjList:[]}},components:{AliPlayer:p},watch:{isFullscreen(){this.isFullscreen==!0&&(this.switchStyle=!0)}},async created(){this.id=this.$route.query.id;let e=await S.checkLogIn();e&&(this.userInfo=e,this.queryClassMeetingDetails())},methods:{async queryClassMeetingDetails(){let e=await C.queryClassMeetingDetails(1,99,this.id);this.onData=await e.data},play(){$.DW.play()},showSpeedClick(){this.showSpeed=!0},pitchOnSpend(e){this.showSpeed=!1,this.onSpeed=e,$.DW.playbackRate(e)}}},a=e=>(w("data-v-49a9c00a"),e=e(),D(),e),M={class:"pannel"},P={class:"video-pannel"},I={class:"video-con"},L={class:"video-left",style:{width:"100%"}},b={class:"video-title"},A=["title"],N={class:"teacher"},B={class:"tea-img"},F=["src"],q={key:0,class:"player-Prompt"},V=a(()=>s("div",{class:"icon"},[s("i",{class:"iconfont iconzhuyi"})],-1)),E=a(()=>s("div",{class:"text"}," 课程视频版权所有，禁止任何形式得转载！并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。 ",-1)),j=a(()=>s("i",{class:"iconfont iconguanbi"},null,-1)),z={class:"player-main",style:{width:"100%",height:"675px"}},T={class:"content-con"},W={class:"con-ago"},G=a(()=>s("div",{class:"ago-title"},"往期班会",-1)),O={class:"list"},R=a(()=>s("div",{class:"state"},"直播已结束",-1)),H={class:"item-con"},J=["src"],K={class:"con-info"},Q={class:"title oneEllipsis"},U={class:"time"},X={class:"num"},Y=["href"];function Z(e,l,ss,es,t,ts){const _=y("AliPlayer");return o(),c("div",M,[s("div",P,[s("div",I,[s("div",L,[s("div",b,[s("div",{class:"title oneEllipsis",title:t.onData.classMeetingName},n(t.onData.classMeetingName),9,A),s("div",N,[s("div",B,[s("img",{src:t.onData.teacherPortrait,alt:""},null,8,F)]),r(" 讲师："+n(t.onData.teacherName),1)])]),t.showPrompt?(o(),c("div",q,[V,E,s("div",{class:"player-Prompt-close",onClick:l[0]||(l[0]=i=>t.showPrompt=!1)},[r(" 关闭 "),j])])):d("",!0),s("div",z,[t.onData.playbackLink?(o(),f(_,{key:0,url:t.onData.playbackLink},null,8,["url"])):d("",!0)])])])]),s("div",T,[s("div",W,[G,s("div",O,[(o(!0),c(g,null,k(t.onData.meetingList,(i,h)=>(o(),c("div",{class:"list-item",key:h},[R,s("div",H,[s("img",{src:i.classMeetingImg,alt:""},null,8,J),s("div",K,[s("div",Q,n(i.classMeetingName),1),s("div",U,"直播时间："+n(i.liveStartTime),1),s("div",X,[s("a",{href:`/classMeetLiveback?id=${i.classMeetingId}`,class:"btn pointer"},"观看回放",8,Y)])])])]))),128))])])])])}const hs=v(x,[["render",Z],["__scopeId","data-v-49a9c00a"]]);export{hs as default};
