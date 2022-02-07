"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[721],{3721:(B,c,r)=>{r.r(c),r.d(c,{TickerModule:()=>W});var d=r(4521),h=r(7423),f=r(9832),v=r(4834),m=r(5245),a=r(2181),b=r(5899),x=r(508),Z=r(2638),y=r(4847),k=r(4999),l=r(3251),T=r(7455),u=r(1244),A=r(4466),w=r(7579),C=r(2722),e=r(5e3),E=r(1135),F=r(8505),U=r(520);let g=(()=>{class o{constructor(t){this._httpClient=t,this._data=new E.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/ticker/ticker").pipe((0,F.b)(t=>{this._data.next(t)}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(U.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var q=r(9808);function D(o,i){if(1&o&&(e.TgZ(0,"div",23),e.TgZ(1,"div",24),e.TgZ(2,"div",25),e.TgZ(3,"div",26),e.TgZ(4,"div",27),e.TgZ(5,"div",28),e._uU(6),e.ALo(7,"currency"),e.qZA(),e.TgZ(8,"div",14),e._UZ(9,"mat-icon",29),e.TgZ(10,"div",30),e.TgZ(11,"span",31),e._uU(12,"2%"),e.qZA(),e._uU(13," below tickered "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",32),e.TgZ(15,"div",33),e.TgZ(16,"div",34),e._uU(17,"Weekly Expenses"),e.qZA(),e.TgZ(18,"div",35),e.TgZ(19,"button",36),e._UZ(20,"mat-icon",11),e.qZA(),e.TgZ(21,"mat-menu",null,37),e.TgZ(23,"button",38),e._uU(24,"This week"),e.qZA(),e.TgZ(25,"button",38),e._uU(26,"Last week"),e.qZA(),e.TgZ(27,"button",38),e._uU(28,"2 weeks ago"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div",26),e.TgZ(30,"div",27),e.TgZ(31,"div",28),e._uU(32),e.ALo(33,"currency"),e.qZA(),e.TgZ(34,"div",14),e._UZ(35,"mat-icon",29),e.TgZ(36,"div",30),e.TgZ(37,"span",31),e._uU(38,"2%"),e.qZA(),e._uU(39," below tickered "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"div",39),e._UZ(41,"apx-chart",40),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=e.MAs(22),s=e.oxw();e.xp6(6),e.hij(" ",e.xi3(7,13,s.data.weeklyExpenses.amount,"USD")," "),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:trending-down"),e.xp6(10),e.Q6J("matMenuTriggerFor",t),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:dots-vertical"),e.xp6(12),e.hij(" ",e.xi3(33,16,s.data.weeklyExpenses.amount,"USD")," "),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:trending-down"),e.xp6(6),e.Q6J("chart",s.chartWeeklyExpenses.chart)("colors",s.chartWeeklyExpenses.colors)("series",s.chartWeeklyExpenses.series)("stroke",s.chartWeeklyExpenses.stroke)("tooltip",s.chartWeeklyExpenses.tooltip)("xaxis",s.chartWeeklyExpenses.xaxis)("yaxis",s.chartWeeklyExpenses.yaxis)}}const S=[{path:"",component:(()=>{class o{constructor(t,s){this._tickerService=t,this._router=s,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.tickerLable="BTC Ticker",this._unsubscribeAll=new w.x}ngOnInit(){this._tickerService.data$.pipe((0,C.R)(this._unsubscribeAll)).subscribe(t=>{this.data=t,this._prepareChartData()}),window.Apex={chart:{events:{mounted:(t,s)=>{this._fixSvgFill(t.el)},updated:(t,s)=>{this._fixSvgFill(t.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(t,s){return s.id||t}_fixSvgFill(t){const s=this._router.url;Array.from(t.querySelectorAll("*[fill]")).filter(n=>-1!==n.getAttribute("fill").indexOf("url(")).forEach(n=>{const p=n.getAttribute("fill");n.setAttribute("fill",`url(${s}${p.slice(p.indexOf("#"))}`)})}_prepareChartData(){this.chartprice={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#64748B","#94A3B8"],dataLabels:{enabled:!0,enabledOnSeries:[0],background:{borderWidth:0}},grid:{borderColor:"var(--blockcore-border)"},labels:this.data.price.labels,legend:{show:!1},plotOptions:{bar:{columnWidth:"50%"}},series:this.data.price.series,states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:[3,0]},tooltip:{followCursor:!0,theme:"dark"},xaxis:{axisBorder:{show:!1},axisTicks:{color:"var(--blockcore-border)"},labels:{style:{colors:"var(--blockcore-text-secondary)"}},tooltip:{enabled:!1}},yaxis:{labels:{offsetX:-16,style:{colors:"var(--blockcore-text-secondary)"}}}},this.chartTaskDistribution={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"polarArea",toolbar:{show:!1},zoom:{enabled:!1}},labels:this.data.taskDistribution.labels,legend:{position:"bottom"},plotOptions:{polarArea:{spokes:{connectorColors:"var(--blockcore-border)"},rings:{strokeColor:"var(--blockcore-border)"}}},series:this.data.taskDistribution.series,states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:2},theme:{monochrome:{enabled:!0,color:"#93C5FD",shadeIntensity:.75,shadeTo:"dark"}},tooltip:{followCursor:!0,theme:"dark"},yaxis:{labels:{style:{colors:"var(--blockcore-text-secondary)"}}}},this.chartBudgetDistribution={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"radar",sparkline:{enabled:!0}},colors:["#818CF8"],dataLabels:{enabled:!0,formatter:t=>`${t}%`,textAnchor:"start",style:{fontSize:"13px",fontWeight:500},background:{borderWidth:0,padding:4},offsetY:-15},markers:{strokeColors:"#818CF8",strokeWidth:4},plotOptions:{radar:{polygons:{strokeColors:"var(--blockcore-border)",connectorColors:"var(--blockcore-border)"}}},series:this.data.budgetDistribution.series,stroke:{width:2},tooltip:{theme:"dark",y:{formatter:t=>`${t}%`}},xaxis:{labels:{show:!0,style:{fontSize:"12px",fontWeight:"500"}},categories:this.data.budgetDistribution.categories},yaxis:{max:t=>parseInt((t+10).toFixed(0),10),tickAmount:7}},this.chartWeeklyExpenses={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:["#22D3EE"],series:this.data.weeklyExpenses.series,stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:this.data.weeklyExpenses.labels},yaxis:{labels:{formatter:t=>`$${t}`}}},this.chartMonthlyExpenses={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:["#4ADE80"],series:this.data.monthlyExpenses.series,stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:this.data.monthlyExpenses.labels},yaxis:{labels:{formatter:t=>`$${t}`}}},this.chartYearlyExpenses={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:["#FB7185"],series:this.data.yearlyExpenses.series,stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:this.data.yearlyExpenses.labels},yaxis:{labels:{formatter:t=>`$${t}`}}}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ticker"]],decls:28,vars:5,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],["src","assets/images/logos/btc.jpg",1,"w-full","h-full"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex","items-center","justify-center","pl-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"grid","grid-cols-1","sm:grid-cols-6","gap-6","w-full","min-w-0"],[1,"sm:col-span-6","lg:col-span-6","grid","grid-cols-1","sm:grid-cols-2","gap-y-6"],[1,"col-span-1","sm:col-span-1","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","sm:mr-3"],[1,"flex","items-center","mt-1"],[1,"flex","flex-col"],[1,"text-3xl","font-semibold","tracking-tight","leading-tight"],[1,"mr-1","icon-size-5","text-red-500",3,"svgIcon"],[1,"font-medium","text-sm","text-secondary","leading-none","whitespace-nowrap"],[1,"text-red-500"],[1,"col-span-1","sm:col-span-1","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","sm:ml-3"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"ml-2","-mt-2","-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],["weeklyExpensesMenu","matMenu"],["mat-menu-item",""],[1,"flex","flex-col","flex-auto","ml-8"],[1,"flex-auto","w-full","h-16",3,"chart","colors","series","stroke","tooltip","xaxis","yaxis"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7),e.ynx(8),e.TgZ(9,"div",8),e._uU(10," Bitcoin "),e.qZA(),e.BQk(),e.qZA(),e.qZA(),e.TgZ(11,"div",9),e.TgZ(12,"button",10),e._UZ(13,"mat-icon",11),e.TgZ(14,"span",12),e._uU(15,"Website"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",13),e.TgZ(17,"div",14),e.TgZ(18,"div",15),e.TgZ(19,"div",16),e._uU(20,"Ticker"),e.qZA(),e.qZA(),e.TgZ(21,"div",17),e._UZ(22,"mat-icon",11),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",18),e.TgZ(24,"div",19),e.TgZ(25,"mat-tab-group",20),e.TgZ(26,"mat-tab",21),e.YNc(27,D,42,19,"ng-template",22),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(12),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:chevron-double-right"),e.xp6(9),e.Q6J("svgIcon","heroicons_solid:chevron-down"),e.xp6(3),e.Q6J("animationDuration","0"),e.xp6(1),e.s9C("label",s.tickerLable))},directives:[h.lW,m.Hw,x.wG,l.SP,l.uX,l.Vc,a.p6,a.VK,a.OP,u.x],pipes:[q.H9],encapsulation:2,changeDetection:0}),o})(),resolve:{data:(()=>{class o{constructor(t){this._tickerService=t}resolve(t,s){return this._tickerService.getData()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(S),h.ot,f.vV,v.t,m.Ps,a.Tx,b.Cv,x.si,Z.SJ,y.JX,k.p0,l.Nh,u.X,T.y4,A.m]]}),o})()}}]);