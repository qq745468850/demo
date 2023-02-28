import{aG as Z,aE as ee,aD as D,aa as O}from"./webClient-2e88593a.js";import{q as se}from"./enum-012db698.js";import{C as oe}from"./coachClient-6606bd3e.js";import{_ as Q}from"./plugin-vue_export-helper-c27b6911.js";import{f as j,r as f,o as G,G as k,h as e,j as l,k as s,A as v,n as N,B as d,C as m,z as u,v as c,af as P,ag as R,F as y,V as h,u as x,t as g,x as z}from"./runtime-core.esm-bundler-201072b8.js";const S=a=>(P("data-v-eb98381a"),a=a(),R(),a),te={class:"shiti-analysis"},ne={class:"answer"},le={class:""},ue={key:0},de={key:0},ae={class:"span2"},ie={key:1},re={class:"answer"},ce=["innerHTML"],pe={class:"analysis"},_e=S(()=>s("div",{class:"title"},"参考解析:",-1)),me=["innerHTML"],ve=["innerHTML"],ye=["src"],he=["src"],Ie={class:"dialog-content"},ge={class:"textarea"},qe={class:"flex-algin"},fe=S(()=>s("div",{class:"mt10 ml10"},"点击上传图片（最多可上传3张）",-1)),ke=["src"],Ae={class:"btnDiv"},Te=j({__name:"ExamAnalysis",props:{paperId:{type:String,default:""},item:{type:Object,default:{}},shitiItem:{type:Object,default:{}},showScore:{type:Boolean,default:!0},showInput:{type:Boolean,default:!0}},setup(a){const n=a;let w=new oe;const C=f(!1),H=f(),A=f({}),T=f(""),L=f(""),B=f(!1),t=f([]),I=f({}),o=f("http://60.216.20.210:8000/gateway/outside/uploadOss/uploadFiles"),i=f(!1);G(async()=>{A.value=await{Authorization:Z()},n.item.topicType=Number(n.item.topicType),n.shitiItem.type=Number(n.shitiItem.type),I.value=ee()});const p=async()=>{if(T.value==""){D({title:"提示",message:"请输入反馈内容",type:"warning",duration:2e3});return}C.value=await!0;let V=[],r;if(t.value.length>0)for(r of t.value)V.push(r.response[0].pathOSSStr);(await w.addAnswerQuestion(1,0,T.value,void 0,void 0,void 0,void 0,V.length>0?V:void 0,n.paperId,n.shitiItem.id)).code==0&&(H.value.clearFiles(),t.value=[],T.value="",$()),C.value=await!1},_=V=>{V.size/1024/1024<3||D.warning("文件大小超过 3MB")},J=V=>{L.value=V.response[0].pathOSSStr,B.value=!0},K=async(V,r,M)=>{t.value=M},$=()=>{T.value="",t.value=[],L.value="",i.value=!1};return(V,r)=>{const M=k("el-input-number"),U=k("el-button"),W=k("el-input"),X=k("el-svg-icon"),Y=k("el-upload"),E=k("el-dialog");return e(),l("div",te,[s("div",ne,[s("div",le,[v(" 你的答案: "),n.shitiItem.topicType==2||n.shitiItem.questionType==2?(e(),l("span",{key:0,class:N(["span1",[n.shitiItem.userScore!=0&&n.shitiItem.userScore!=null?"green":"",n.shitiItem.userScore==0?"red":""]])},d(n.shitiItem.userAnswer=="A"?"对":"错"),3)):(e(),l("span",{key:1,class:N(["span1",[n.shitiItem.userScore!=0&&n.shitiItem.userScore!=null?"green":"",n.shitiItem.userScore==0?"red":""]])},d(n.shitiItem.userAnswer?n.shitiItem.userAnswer.toString():""),3))]),a.showScore?(e(),l("div",ue,[!n.showInput||n.item.topicType==0||n.item.topicType==1||n.item.topicType==2||n.item.topicType==5&&(n.shitiItem.questionType==0||n.shitiItem.questionType==1||n.shitiItem.questionType==2)?(e(),l("div",de,[v(" 你的得分: "),s("span",ae,d(n.shitiItem.userScore?n.shitiItem.userScore:0)+"分",1)])):(e(),l("div",ie,[v(" 你的得分: "),m(M,{modelValue:n.shitiItem.userScore,"onUpdate:modelValue":r[0]||(r[0]=q=>n.shitiItem.userScore=q),min:0,max:n.shitiItem.score,"controls-position":"right"},null,8,["modelValue","max"])]))])):u("",!0)]),s("div",re,[s("div",null,[v(" 参考答案: "),s("span",{class:"span1",innerHTML:n.shitiItem.topicType==2?n.shitiItem.questionAnswer=="A"?"对":"错":n.shitiItem.questionAnswer},null,8,ce)]),m(U,{class:"feedBackBtn",onClick:r[1]||(r[1]=q=>i.value=!0)},{default:c(()=>[v("提交试题答疑")]),_:1})]),s("div",pe,[_e,n.shitiItem.questionAnswerAnalysis?(e(),l("div",{key:0,class:"analysis-con",innerHTML:n.shitiItem.questionAnswerAnalysis},null,8,me)):u("",!0),n.shitiItem.questionAnswerAnalysisImage?(e(),l("img",{key:1,innerHTML:n.shitiItem.questionAnswerAnalysisImage},null,8,ve)):u("",!0),n.shitiItem.questionAnswerAnalysisAudio?(e(),l("audio",{key:2,src:n.shitiItem.questionAnswerAnalysisAudio,controls:""},null,8,ye)):u("",!0),n.shitiItem.questionAnswerAnalysisVideo?(e(),l("video",{key:3,src:n.shitiItem.questionAnswerAnalysisVideo,controls:""},null,8,he)):u("",!0)]),m(E,{title:"提交试题答疑",modelValue:i.value,"onUpdate:modelValue":r[6]||(r[6]=q=>i.value=q),"show-close":!1,"close-on-click-modal":!1},{default:c(()=>[s("div",Ie,[s("div",ge,[m(W,{type:"textarea",rows:10,placeholder:"请输入内容",modelValue:T.value,"onUpdate:modelValue":r[2]||(r[2]=q=>T.value=q)},null,8,["modelValue"])]),s("div",qe,[m(Y,{class:"el-upload-box",ref_key:"upload",ref:H,name:"file",multiple:"",action:o.value,headers:A.value,limit:3,"list-type":"picture-card",accept:".jpg,.png","before-upload":_,"on-preview":J,"on-success":K},{default:c(()=>[m(X,{name:"Plus"})]),_:1},8,["action","headers"]),fe]),m(E,{modelValue:B.value,"onUpdate:modelValue":r[3]||(r[3]=q=>B.value=q),"append-to-body":""},{default:c(()=>[s("img",{src:L.value,alt:"",style:{width:"100%",height:"auto"}},null,8,ke)]),_:1},8,["modelValue"])]),s("div",Ae,[m(U,{onClick:r[4]||(r[4]=q=>$())},{default:c(()=>[v("取消")]),_:1}),m(U,{type:"primary",loading:C.value,onClick:r[5]||(r[5]=q=>p())},{default:c(()=>[v("提交")]),_:1},8,["loading"])])]),_:1},8,["modelValue"])])}}}),b=Q(Te,[["__scopeId","data-v-eb98381a"]]);const F=a=>(P("data-v-27c45905"),a=a(),R(),a),Ve={key:0},we={key:0},Le=["id"],Be={class:"shiti-header"},be={class:"num"},Ce={class:"name"},Me=["innerHTML"],xe=["src"],Fe=["src"],He=["src"],Ue={class:"pannelBody"},$e={class:"label"},Ee=["innerHTML"],De={class:"option"},Oe={key:1},Ne=["id"],ze={class:"shiti-header"},Qe={class:"num"},je={class:"name"},Ge=["innerHTML"],Pe=["src"],Re=["src"],Se=["src"],Je={class:"pannelBody"},Ke={class:"label"},We=["innerHTML"],Xe={class:"option"},Ye={key:2},Ze=["id"],es={class:"shiti-header"},ss={class:"num"},os={class:"name"},ts=["innerHTML"],ns=["src"],ls=["src"],us=["src"],ds={class:"pannelBody"},as={class:"option"},is={class:"btn btn-default"},rs={class:"btn btn-default"},cs={key:3},ps=["id"],_s={class:"shiti-header"},ms={class:"num"},vs={class:"name"},ys=["innerHTML"],hs=["src"],Is=["src"],gs=["src"],qs={class:"shiti-tiankong"},fs=["onUpdate:modelValue","disabled"],ks={key:4},As=["id"],Ts={class:"zuhe"},Vs={class:"zuhe-tigan"},ws=["innerHTML"],Ls=["id"],Bs={class:"shiti-header"},bs={class:"num"},Cs=F(()=>s("div",{class:"name"},"[单选题]",-1)),Ms=["innerHTML"],xs=["src"],Fs=["src"],Hs=["src"],Us={class:"pannelBody"},$s=["innerHTML"],Es={class:"option"},Ds=["id"],Os={class:"shiti-header"},Ns={class:"num"},zs=F(()=>s("div",{class:"name"},"[多选题]",-1)),Qs=["innerHTML"],js=["src"],Gs=["src"],Ps=["src"],Rs={class:"pannelBody"},Ss=["innerHTML"],Js={class:"option"},Ks=["id"],Ws={class:"shiti-header"},Xs={class:"num"},Ys=F(()=>s("div",{class:"name"},"[判断题]",-1)),Zs=["innerHTML"],eo=["src"],so=["src"],oo=["src"],to={class:"pannelBody"},no={class:"option"},lo={class:"btn btn-default"},uo={class:"btn btn-default"},ao=["id"],io={class:"shiti-header"},ro={class:"num"},co=F(()=>s("div",{class:"name"},"[填空题]",-1)),po=["innerHTML"],_o=["src"],mo=["src"],vo=["src"],yo={class:"shiti-tiankong"},ho=["onUpdate:modelValue","disabled"],Io=j({__name:"QuestionItem",props:{paperId:{type:String,default:""},item:{type:Object,default:{}},isSubmit:{type:Boolean,default:!1},showScore:{type:Boolean,default:!0},showInput:{type:Boolean,default:!0}},setup(a){const n=a,w=se;return G(()=>{}),(C,H)=>{const A=k("el-radio"),T=k("el-radio-group"),L=k("el-checkbox"),B=k("el-checkbox-group");return n.item?(e(),l("div",Ve,[n.item.topicType=="0"?(e(),l("div",we,[(e(!0),l(y,null,h(n.item.questionTopicList,(t,I)=>(e(),l("div",{class:"shiti-item",key:I,id:t.topicIndex},[s("div",Be,[s("div",be,d(t.topicIndex),1),s("div",Ce,"["+d(x(w)[Number(t.questionType)])+"]",1),s("div",{class:"tigan",innerHTML:t.questionTitle},null,8,Me),t.questionImage?(e(),l("img",{key:0,src:t.questionImage,alt:""},null,8,xe)):u("",!0),t.questionAudio?(e(),l("audio",{key:1,src:t.questionAudio,controls:""},null,8,Fe)):u("",!0),t.questionVideo?(e(),l("video",{key:2,src:t.questionVideo,controls:""},null,8,He)):u("",!0)]),s("div",Ue,[(e(!0),l(y,null,h(t.questionOptionList,(o,i)=>(e(),l("div",{class:"option-html",key:i},[s("span",$e,d(String.fromCharCode(65+i))+".",1),s("div",{innerHTML:o},null,8,Ee)]))),128)),s("div",De,[m(T,{modelValue:t.userAnswer,"onUpdate:modelValue":o=>t.userAnswer=o},{default:c(()=>[(e(!0),l(y,null,h(t.questionOptionList.length,(o,i)=>(e(),g(A,{label:String.fromCharCode(65+i),border:"",key:i,disabled:a.isSubmit},{default:c(()=>[v(d(String.fromCharCode(65+i)),1)]),_:2},1032,["label","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),n.isSubmit?(e(),g(b,{key:0,paperId:n.paperId,shitiItem:t,item:n.item},null,8,["paperId","shitiItem","item"])):u("",!0)],8,Le))),128))])):u("",!0),n.item.topicType=="1"?(e(),l("div",Oe,[(e(!0),l(y,null,h(n.item.questionTopicList,(t,I)=>(e(),l("div",{class:"shiti-item",key:I,id:t.topicIndex},[s("div",ze,[s("div",Qe,d(t.topicIndex),1),s("div",je,"["+d(x(w)[Number(t.questionType)])+"]",1),s("div",{class:"tigan",innerHTML:t.questionTitle},null,8,Ge),t.questionImage?(e(),l("img",{key:0,src:t.questionImage,alt:""},null,8,Pe)):u("",!0),t.questionAudio?(e(),l("audio",{key:1,src:t.questionAudio,controls:""},null,8,Re)):u("",!0),t.questionVideo?(e(),l("video",{key:2,src:t.questionVideo,controls:""},null,8,Se)):u("",!0)]),s("div",Je,[(e(!0),l(y,null,h(t.questionOptionList,(o,i)=>(e(),l("div",{class:"option-html",key:i},[s("span",Ke,d(String.fromCharCode(65+i))+".",1),s("div",{innerHTML:o},null,8,We)]))),128)),s("div",Xe,[t.questionOptionList.length>0?(e(),g(B,{key:0,modelValue:t.userAnswer,"onUpdate:modelValue":o=>t.userAnswer=o,disabled:a.isSubmit},{default:c(()=>[(e(!0),l(y,null,h(t.questionOptionList.length,(o,i)=>(e(),g(L,{border:"",class:"btn btn-default",label:String.fromCharCode(65+i),key:i},{default:c(()=>[v(d(String.fromCharCode(65+i)),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])):u("",!0)])]),n.isSubmit?(e(),g(b,{key:0,paperId:n.paperId,shitiItem:t,item:n.item},null,8,["paperId","shitiItem","item"])):u("",!0)],8,Ne))),128))])):u("",!0),n.item.topicType=="2"?(e(),l("div",Ye,[(e(!0),l(y,null,h(n.item.questionTopicList,(t,I)=>(e(),l("div",{class:"shiti-item",key:I,id:t.topicIndex},[s("div",es,[s("div",ss,d(t.topicIndex),1),s("div",os,"["+d(x(w)[Number(t.questionType)])+"]",1),s("div",{class:"tigan",innerHTML:t.questionTitle},null,8,ts),t.questionImage?(e(),l("img",{key:0,src:t.questionImage,alt:""},null,8,ns)):u("",!0),t.questionAudio?(e(),l("audio",{key:1,src:t.questionAudio,controls:""},null,8,ls)):u("",!0),t.questionVideo?(e(),l("video",{key:2,src:t.questionVideo,controls:""},null,8,us)):u("",!0)]),s("div",ds,[s("div",as,[s("label",is,[m(A,{label:"A",border:"",modelValue:t.userAnswer,"onUpdate:modelValue":o=>t.userAnswer=o,disabled:a.isSubmit},{default:c(()=>[v("对")]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),s("label",rs,[m(A,{label:"B",border:"",modelValue:t.userAnswer,"onUpdate:modelValue":o=>t.userAnswer=o,disabled:a.isSubmit},{default:c(()=>[v("错")]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])])])]),n.isSubmit?(e(),g(b,{key:0,paperId:n.paperId,shitiItem:t,item:n.item},null,8,["paperId","shitiItem","item"])):u("",!0)],8,Ze))),128))])):u("",!0),n.item.topicType=="3"||n.item.topicType=="4"?(e(),l("div",cs,[(e(!0),l(y,null,h(n.item.questionTopicList,(t,I)=>(e(),l("div",{class:"shiti-item",key:I,id:t.topicIndex},[s("div",_s,[s("div",ms,d(t.topicIndex),1),s("div",vs,"["+d(x(w)[Number(t.questionType)])+"]",1),s("div",{class:"tigan",innerHTML:t.questionTitle},null,8,ys),t.questionImage?(e(),l("img",{key:0,src:t.questionImage,alt:""},null,8,hs)):u("",!0),t.questionAudio?(e(),l("audio",{key:1,src:t.questionAudio,controls:""},null,8,Is)):u("",!0),t.questionVideo?(e(),l("video",{key:2,src:t.questionVideo,controls:""},null,8,gs)):u("",!0)]),s("div",qs,[z(s("textarea",{placeholder:"请填写答案","onUpdate:modelValue":o=>t.userAnswer=o,disabled:a.isSubmit},null,8,fs),[[O,t.userAnswer]])]),n.isSubmit?(e(),g(b,{key:0,paperId:n.paperId,shitiItem:t,item:n.item},null,8,["paperId","shitiItem","item"])):u("",!0)],8,ps))),128))])):u("",!0),n.item.topicType=="5"?(e(),l("div",ks,[(e(!0),l(y,null,h(n.item.questionTopicList,(t,I)=>(e(),l("div",{key:I,id:t.topicIndex},[s("div",Ts,[s("div",Vs,[s("div",{innerHTML:t.questionTitle},null,8,ws)]),(e(!0),l(y,null,h(t.subTopicList,(o,i)=>(e(),l("div",{class:"zuhe-item",key:i},[o.questionType=="0"?(e(),l("div",{key:0,class:"shiti-item",id:o.topicIndex},[s("div",Bs,[s("div",bs,d(o.topicIndex),1),Cs,s("div",{class:"tigan",innerHTML:o.questionTitle},null,8,Ms),o.questionImage?(e(),l("img",{key:0,src:o.questionImage,alt:""},null,8,xs)):u("",!0),o.questionAudio?(e(),l("audio",{key:1,src:o.questionAudio,controls:""},null,8,Fs)):u("",!0),o.questionVideo?(e(),l("video",{key:2,src:o.questionVideo,controls:""},null,8,Hs)):u("",!0)]),s("div",Us,[(e(!0),l(y,null,h(o.questionOptionList,(p,_)=>(e(),l("div",{class:"option-html",key:_},[s("span",null,d(String.fromCharCode(65+_))+".",1),s("div",{innerHTML:p},null,8,$s)]))),128)),s("div",Es,[m(T,{modelValue:o.userAnswer,"onUpdate:modelValue":p=>o.userAnswer=p},{default:c(()=>[(e(!0),l(y,null,h(o.questionOptionList.length,(p,_)=>(e(),g(A,{label:String.fromCharCode(65+_),border:"",key:_,disabled:a.isSubmit},{default:c(()=>[v(d(String.fromCharCode(65+_)),1)]),_:2},1032,["label","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])])])],8,Ls)):u("",!0),o.questionType=="1"?(e(),l("div",{key:1,class:"shiti-item",id:o.topicIndex},[s("div",Os,[s("div",Ns,d(o.topicIndex),1),zs,s("div",{class:"tigan",innerHTML:o.questionTitle},null,8,Qs),o.questionImage?(e(),l("img",{key:0,src:o.questionImage,alt:""},null,8,js)):u("",!0),o.questionAudio?(e(),l("audio",{key:1,src:o.questionAudio,controls:""},null,8,Gs)):u("",!0),o.questionVideo?(e(),l("video",{key:2,src:o.questionVideo,controls:""},null,8,Ps)):u("",!0)]),s("div",Rs,[(e(!0),l(y,null,h(o.questionOptionList,(p,_)=>(e(),l("div",{class:"option-html",key:_},[s("span",null,d(String.fromCharCode(65+_))+".",1),s("div",{innerHTML:p},null,8,Ss)]))),128)),s("div",Js,[o.questionOptionList.length>0?(e(),g(B,{key:0,modelValue:o.userAnswer,"onUpdate:modelValue":p=>o.userAnswer=p,disabled:a.isSubmit},{default:c(()=>[(e(!0),l(y,null,h(o.questionOptionList.length,(p,_)=>(e(),g(L,{border:"",class:"btn btn-default",label:String.fromCharCode(65+_),key:_},{default:c(()=>[v(d(String.fromCharCode(65+_)),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])):u("",!0)])])],8,Ds)):u("",!0),o.questionType=="2"?(e(),l("div",{key:2,class:"shiti-item",id:o.topicIndex},[s("div",Ws,[s("div",Xs,d(o.topicIndex),1),Ys,s("div",{class:"tigan",innerHTML:o.questionTitle},null,8,Zs),o.questionImage?(e(),l("img",{key:0,src:o.questionImage,alt:""},null,8,eo)):u("",!0),o.questionAudio?(e(),l("audio",{key:1,src:o.questionAudio,controls:""},null,8,so)):u("",!0),o.questionVideo?(e(),l("video",{key:2,src:o.questionVideo,controls:""},null,8,oo)):u("",!0)]),s("div",to,[s("div",no,[s("label",lo,[m(A,{label:"A",border:"",modelValue:o.userAnswer,"onUpdate:modelValue":p=>o.userAnswer=p,disabled:a.isSubmit},{default:c(()=>[v("对")]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),s("label",uo,[m(A,{label:"B",border:"",modelValue:o.userAnswer,"onUpdate:modelValue":p=>o.userAnswer=p,disabled:a.isSubmit},{default:c(()=>[v("错")]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])])])])],8,Ks)):u("",!0),o.questionType=="3"||o.questionType=="4"?(e(),l("div",{key:3,class:"shiti-item",id:o.topicIndex},[s("div",io,[s("div",ro,d(o.topicIndex),1),co,s("div",{class:"tigan",innerHTML:o.questionTitle},null,8,po),o.questionImage?(e(),l("img",{key:0,src:o.questionImage,alt:""},null,8,_o)):u("",!0),o.questionAudio?(e(),l("audio",{key:1,src:o.questionAudio,controls:""},null,8,mo)):u("",!0),o.questionVideo?(e(),l("video",{key:2,src:o.questionVideo,controls:""},null,8,vo)):u("",!0)]),s("div",yo,[z(s("textarea",{placeholder:"请填写答案","onUpdate:modelValue":p=>o.userAnswer=p,disabled:a.isSubmit},null,8,ho),[[O,o.userAnswer]])])],8,ao)):u("",!0),n.isSubmit?(e(),g(b,{key:4,paperId:n.paperId,shitiItem:o,item:n.item},null,8,["paperId","shitiItem","item"])):u("",!0)]))),128))])],8,As))),128))])):u("",!0)])):u("",!0)}}}),To=Q(Io,[["__scopeId","data-v-27c45905"]]);export{To as Q};
