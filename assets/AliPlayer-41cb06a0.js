import{$ as v}from"./jquery-0491babd.js";import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{f as T,r as o,I as P,w as c,a as x,o as w,h as u,j as d,z as H}from"./runtime-core.esm-bundler-201072b8.js";const b={class:"prism-player",id:"player-con"},A={key:0,src:"https://xlc-wx.oss-cn-beijing.aliyuncs.com/xlcwx/videologo.png",alt:"",class:"logo-img"},B=T({__name:"AliPlayer",props:{url:{type:String,default:""},seekTime:{type:Number,default:0},timer:{type:Number,default:0}},emits:["getPropsData","play","suspendPlay"],setup(y,{emit:n}){const e=y,i=o(!1),s=o({});o(""),o(""),o(""),o("");const l=P({onSpeed:"1.0",seekTime:0});console.log("苦茶",e),c(()=>e.seekTime,()=>{s.value.seek(e.seekTime)}),c(()=>e.url,()=>{s.value.dispose(),r()}),x(()=>{s.value.dispose()}),w(()=>{r()});const r=async()=>{let a;a=new Aliplayer({id:"player-con",source:e.url,width:"100%",height:"100%",autoplay:!0,preload:!0,isLive:!1,useH5Prism:!0,rePlay:!1},function(t){e.seekTime>0&&t.seek(e.seekTime),console.log("The player is created")});function p(){console.log("3333333"),i.value=!0,e.seekTime>0&&a.seek(e.seekTime)}function m(){}function f(){}function _(){n("suspendPlay")}function g(){n("play")}function k(){if(console.log("花期"),e.isUpload){var t=v("video")[0];l.onSpeed=t.playbackRate,l.seekTime=parseInt(s.value.getCurrentTime()),n("getPropsData",l)}}a.on("play",g),a.on("pause",_),a.on("playing",f),a.on("canplay",m),a.on("ready",p),a.on("timeupdate",k),s.value=a};return(a,p)=>(u(),d("div",b,[i.value?(u(),d("img",A)):H("",!0)]))}}),I=h(B,[["__scopeId","data-v-5a2eeb24"]]);export{I as A};
