import{a as w,u as A}from"./vue-router.esm-bundler-926c5a09.js";import{aE as O,aC as S}from"./webClient-2e88593a.js";import{O as D}from"./orderClient-3c76ba2d.js";import{_ as G}from"./plugin-vue_export-helper-c27b6911.js";import{f as M,r as i,I as R,o as j,G as g,h as m,j as f,k as e,C as I,v as u,B as r,F as L,V as U,t as q,z,A as y,af as $,ag as H}from"./runtime-core.esm-bundler-201072b8.js";import"./_commonjsHelpers-725317a4.js";const J=d=>($("data-v-7b8109c8"),d=d(),H(),d),K={class:"pannel"},Q={class:"pannel-con"},W={class:"goods-con"},X=["src"],Y={class:"con"},Z=["title"],ee={class:"price danger"},te={key:0},oe=J(()=>e("div",{class:"tip-div"},[e("div",null,[y("猜你喜欢"),e("i",{class:"el-icon-arrow-down"})])],-1)),se={class:"goods-con"},ae=["src"],ie={class:"con"},ce=["title"],le={class:"price danger"},ne={class:"footer-div"},re={class:"price"},de={class:"danger"},me=M({__name:"chooseGoods",setup(d){let _=new D;const C=w(),b=A();i(!1);const p=i(!1),v=i(0),k=i(),l=i(0),N=i(null),n=i([]),h=i([]),a=R({itemId:"",itemImg:"",itemName:"",itemPrice:"",itemType:""});j(()=>{N.value=O(),k.value=b.query.itemId,l.value=Number(b.query.itemType),F(),E()});const F=()=>{let s=[];s.push(k.value),_.getOrderItems(l.value,s.toString()).then(o=>{let t=o.data[0];a.itemId=t.id,a.itemImg=t.image,a.itemName=t.name,a.itemPrice=t.price,a.itemType=t.type,v.value=t.price})},E=()=>{_.getMineAllRecommend(l.value,3).then(s=>{for(let o of s.data){let t={itemId:o.commodityId,itemName:o.commodityName,itemPrice:o.currentPrice,itemImg:o.imageUrl,itemType:l.value};h.value.push(t)}})},x=()=>{if(n.value.length==0){S.warning("请选择商品！");return}p.value=!0;let s=[],o;for(o of n.value){let t={commodityId:o.itemId,commodityTypeCode:l.value};s.push(t)}_.addPayOrders(s).then(t=>{t.code==0&&C.push(`/order/confirmOrder?orderId=${t.data.orderNum}`),p.value=!1})},B=()=>{let s=0,o;for(o of n.value)s+=Number(o.itemPrice);v.value=s};return(s,o)=>{const t=g("el-checkbox"),P=g("el-checkbox-group"),V=g("el-button");return m(),f("div",K,[e("div",Q,[I(P,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=c=>n.value=c),onChange:B},{default:u(()=>[I(t,{label:a,checked:!0},{default:u(()=>[e("div",W,[e("img",{src:a.itemImg,alt:""},null,8,X),e("div",Y,[e("div",{class:"title oneEllipsis",title:a.itemName},r(a.itemName),9,Z),e("div",ee,"￥ "+r(a.itemPrice),1)])])]),_:1},8,["label"]),h.value.length>0?(m(),f("div",te,[oe,(m(!0),f(L,null,U(h.value,(c,T)=>(m(),q(t,{key:T,label:c},{default:u(()=>[e("div",se,[e("img",{src:c.itemImg,alt:""},null,8,ae),e("div",ie,[e("div",{class:"title oneEllipsis",title:c.itemName},r(c.itemName),9,ce),e("div",le,"￥ "+r(c.itemPrice),1)])])]),_:2},1032,["label"]))),128))])):z("",!0)]),_:1},8,["modelValue"]),e("div",ne,[e("div",re,[y(" 应付："),e("span",de,"￥ "+r(v.value),1)]),I(V,{type:"primary",class:"sub-btn",loading:p.value,onClick:x},{default:u(()=>[y("马上结算")]),_:1},8,["loading"])])])])}}}),fe=G(me,[["__scopeId","data-v-7b8109c8"]]);export{fe as default};
