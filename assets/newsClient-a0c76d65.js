import{aJ as n,aM as e}from"./webClient-e9003e98.js";class d extends n{async getNewsList(s,r,a,t){let i=this.combin({pageSize:s,pageNum:r},{belongProjectId:a,informationTpeId:t});return await e({url:"/brand/sysFirst/qbsJournalism",params:i})}async getNewsTypeList(s){return await e({url:"/brand/sysFirst/qbsJournalismType",params:{belongProjectId:s}})}async getNewsDetail(s){return await e({url:`/brand/sysFirst/qbsJournalismById?journalismId=${s}`})}async getHotNews(s,r){return await e({url:`/brand/sysFirst/journalismRecommend?pageSize=${s}&pageNum=${r}`})}async addJournalism(s){return await e({url:`/brand/sysFirst/addJournalism?journalismId=${s}`})}}export{d as N};
