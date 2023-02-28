import{_ as x,a as R}from"./miniAppQR-81c249e0.js";import{H as $}from"./homeClient-865e8f81.js";import{_ as F}from"./plugin-vue_export-helper-c27b6911.js";import{f as b,r as k,I as T,o as A,G as B,h as a,j as o,k as e,F as h,V as m,t as C,v as d,B as _,af as D,ag as U,w as H,C as v,n as I}from"./runtime-core.esm-bundler-201072b8.js";import{u as J,a as S}from"./vue-router.esm-bundler-926c5a09.js";import"./webClient-2e88593a.js";import"./commonjsHelpers-725317a4.js";const r=u=>(D("data-v-286d553f"),u=u(),U(),u),V={class:"pannel"},j={class:"pannel-con"},N={class:"pannel-item"},z=r(()=>e("div",{class:"pannel-item-title"},"关于我们",-1)),L={class:"pannel-item"},M=r(()=>e("div",{class:"pannel-item-title"},"新手指南",-1)),G={class:"pannel-item"},O=r(()=>e("div",{class:"pannel-item-title"},"合作联系",-1)),P={class:"pannel-item",style:{"margin-right":"0"}},W=r(()=>e("div",{class:"pannel-item-title"},"更多",-1)),Z={class:"pannel-tel"},q=r(()=>e("div",{class:"title"},"联系我们",-1)),K={class:"row"},Q=r(()=>e("div",{class:"row"},"周一至周六 09:00-17:00 接听",-1)),X=r(()=>e("div",null,[e("img",{src:x}),e("img",{src:R})],-1)),Y={class:"pannel-copy"},ee={class:"copy"},te={class:"copy"},ae={target:"_blank",href:"http://beian.miit.gov.cn/"},se=r(()=>e("a",{target:"_blank",href:"http://www.beian.gov.cn/portal/index.do"},[e("span",null,"鲁公安备 37010102001083号")],-1)),oe=b({__name:"pageFooter",setup(u){let p=new $;const s=k({}),c=T({list:[[{name:"了解新里程",path:"/aboutUs?key=AboutUs"},{name:"新里程发展",path:"/aboutUs?key=FaZhan"},{name:"人才招聘",path:"/aboutUs?key=Jobs"},{name:"联系我们",path:"/aboutUs?key=ContactUs"},{name:"课程顾问",path:"/aboutUs?key=aboutUs"},{name:"学习环境",path:"/aboutUs?key=aboutUs"}],[{name:"注册会员",path:"/aboutUs?key=HowToRegister"},{name:"如何购课",path:"/aboutUs?key=HowToBuy"},{name:"如何学习",path:"/aboutUs?key=HowToWatchVideo"},{name:"在线帮助",path:"/aboutUs?key=OnlineHelp"}],[{name:"企业合作",path:"/aboutUs?key=CooperateIntro"},{name:"讲师招募",path:"/aboutUs?key=TeacherRecruitment"},{name:"友情链接",path:"/aboutUs?key=FriendLinks"}],[{name:"注册协议",path:"/aboutUs?key=RegisterAgreement"},{name:"版权声明",path:"/aboutUs?key=CopyRight"},{name:"反馈纠错",path:"/aboutUs?key=Feedback"}]]});A(()=>{l()});const l=()=>{p.siteConfig().then(f=>{s.value=f.data})};return(f,g)=>{const n=B("router-link");return a(),o("footer",V,[e("div",j,[e("div",N,[z,(a(!0),o(h,null,m(c.list[0],(t,i)=>(a(),C(n,{to:t.path,key:i},{default:d(()=>[e("p",null,_(t.name),1)]),_:2},1032,["to"]))),128))]),e("div",L,[M,(a(!0),o(h,null,m(c.list[1],(t,i)=>(a(),C(n,{to:t.path,key:i},{default:d(()=>[e("p",null,_(t.name),1)]),_:2},1032,["to"]))),128))]),e("div",G,[O,(a(!0),o(h,null,m(c.list[2],(t,i)=>(a(),C(n,{to:t.path,key:i},{default:d(()=>[e("p",null,_(t.name),1)]),_:2},1032,["to"]))),128))]),e("div",P,[W,(a(!0),o(h,null,m(c.list[3],(t,i)=>(a(),C(n,{to:t.path,key:i},{default:d(()=>[e("p",null,_(t.name),1)]),_:2},1032,["to"]))),128))]),e("div",Z,[q,e("div",K,"全国统一客服: "+_(s.value.tel),1),Q,X])]),e("div",Y,[e("p",ee,"copyright © "+_(s.value.company)+" All Rights Reserved版权所有",1),e("p",te,[e("a",ae,[e("span",null,_(s.value.beiAn),1)]),se])])])}}}),ue=F(oe,[["__scopeId","data-v-286d553f"]]);const E=u=>(D("data-v-0911c85b"),u=u(),U(),u),ne={class:"nav-div"},ie={key:0,class:"flex"},ce=["onClick"],le={key:1,class:"flex"},_e=E(()=>e("a",{href:"#manage",class:"nav-item"},"管理类联考",-1)),re=E(()=>e("a",{href:"#ahead",class:"nav-item"},"提前面试",-1)),pe=E(()=>e("a",{href:"#repetition",class:"nav-item"},"复试",-1)),he=[_e,re,pe],de=b({__name:"pageHeader",setup(u){const p=k(!0),s=J(),c=S(),l=k(""),f=k([{name:"首页",path:"/onTheJobResearch/index"},{name:"非全日制研究生",path:"/onTheJobResearch/yjs"},{name:"同等学历申硕",path:"/onTheJobResearch/shenshuo"},{name:"免费试听",path:"/onTheJobResearch/freeAudition"}]);H(s,async(n,t)=>{l.value=s.path,s.path!="/onTheJobResearch/yjs"&&(p.value=!0)}),A(()=>{l.value=s.path,s.path!="/onTheJobResearch/yjs"&&(p.value=!0)});const g=n=>{n=="/onTheJobResearch/yjs"&&(p.value=!1),c.push(n)};return(n,t)=>{const i=B("router-link");return a(),o("header",null,[e("div",ne,[v(i,{to:"/",class:"logo"},{default:d(()=>[e("div",{class:"logo-img",onClick:t[0]||(t[0]=y=>l.value="/")})]),_:1}),p.value?(a(),o("div",ie,[(a(!0),o(h,null,m(f.value,(y,w)=>(a(),o("div",{class:I(l.value==y.path?"nav-item nav-on":"nav-item"),key:w,onClick:ve=>g(y.path)},_(y.name),11,ce))),128))])):(a(),o("div",le,he))])])}}}),me=F(de,[["__scopeId","data-v-0911c85b"]]),ge=b({__name:"appMain",setup(u){return(p,s)=>{const c=B("el-affix"),l=B("router-view");return a(),o(h,null,[v(c,{offset:0,"z-index":999},{default:d(()=>[v(me)]),_:1}),v(l),v(ue)],64)}}});export{ge as default};
