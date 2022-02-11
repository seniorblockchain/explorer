"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[431],{5431:(z,m,r)=>{r.r(m),r.d(m,{TickerModule:()=>X});var g=r(4521),f=r(7423),w=r(9832),_=r(4834),v=r(5245),I=r(2181),U=r(5899),Z=r(508),q=r(2638),S=r(4847),F=r(4999),h=r(3251),D=r(7455),b=r(1244),J=r(4466),T=r(7579),u=r(2722),t=r(5e3),d=r(5861),p=r(1135),Q=r(520),k=r(5830),y=r(9205);let C=(()=>{class i{constructor(e,a,l){var c=this;this._httpClient=e,this.api=a,this.setup=l,this._data3bax=new p.X(null),this._dataprice=new p.X(null),this._dataticker=new p.X(null),this._ticker={},this._pricechartdata={},this._3boxchartdata={},this.subscription=this.setup.currentChain$.subscribe(function(){var s=(0,d.Z)(function*(n){yield c.updateTicker()});return function(n){return s.apply(this,arguments)}}()),this.chain=this.setup.Chain}get data3bax$(){return this._data3bax.asObservable()}get dataprice$(){return this._dataprice.asObservable()}get dataticker$(){return this._dataticker.asObservable()}get3baxChartData(){var e=this;return(0,d.Z)(function*(){return yield e.update3boxChart(),e._3boxchartdata})()}update3boxChart(){var e=this;return(0,d.Z)(function*(){const a=e.setup.chains.map(s=>s).filter(s=>{var n;return s.symbol===(null===(n=e.setup.Chain)||void 0===n?void 0:n.Symbol)}).map(s=>s.coin);if(!a[0])return e._3boxchartdata={},void e._data3bax.next(null);const l=`https://api.coingecko.com/api/v3/coins/${a[0]}/market_chart?vs_currency=usd&days=7&interval=daily`,c=yield e.api.download(l);e._3boxchartdata=c,e._data3bax.next(e._3boxchartdata)})()}getPriceChartData(){var e=this;return(0,d.Z)(function*(){return yield e.updatePriceChart(),e._pricechartdata})()}updatePriceChart(){var e=this;return(0,d.Z)(function*(){const a=e.setup.chains.map(s=>s).filter(s=>{var n;return s.symbol===(null===(n=e.setup.Chain)||void 0===n?void 0:n.Symbol)}).map(s=>s.coin);if(!a[0])return e._pricechartdata={},void e._dataprice.next(null);const l=`https://api.coingecko.com/api/v3/coins/${a[0]}/market_chart?vs_currency=usd&days=365&interval=daily`,c=yield e.api.download(l);e._pricechartdata=c,e._dataprice.next(e._pricechartdata)})()}updateTicker(){var e=this;return(0,d.Z)(function*(){try{e.error=null;const a=e.setup.chains.map(s=>s).filter(s=>{var n;return s.symbol===(null===(n=e.setup.Chain)||void 0===n?void 0:n.Symbol)}).map(s=>s.coin);if(!a[0])return e._ticker={},void e._dataticker.next(null);const l=`https://api.coingecko.com/api/v3/simple/price?ids=${a[0]}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`,c=yield e.api.download(l);e._ticker=c[a[0]]}catch(a){e._ticker={},e.error=a}e._dataticker.next(e._ticker)})()}ngOnDestroy(){this.subscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Q.eN),t.LFG(k.s),t.LFG(y.U))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var x=r(9808),A=r(7238),L=r(5769),Y=r(7338);function B(i,o){if(1&i&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",25),t._uU(3),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==e.setup.Chain?null:e.setup.Chain.Description)}}function V(i,o){if(1&i&&(t.TgZ(0,"div",36),t.TgZ(1,"div",37),t.TgZ(2,"div",38),t._uU(3,"Price"),t.qZA(),t.TgZ(4,"div",39),t.ALo(5,"date"),t.ALo(6,"timestamp"),t._uU(7),t.ALo(8,"ago"),t.qZA(),t.qZA(),t.TgZ(9,"div",40),t.TgZ(10,"div",41),t._uU(11),t.qZA(),t.TgZ(12,"div",42),t._UZ(13,"mat-icon",43),t.TgZ(14,"div",44),t.TgZ(15,"span",45),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",46),t._UZ(18,"apx-chart",47),t.qZA(),t.qZA()),2&i){const e=t.oxw(3);t.xp6(4),t.s9C("matTooltip",t.xi3(5,14,t.lcZ(6,17,e.ticker.last_updated_at),"hh:mm")),t.xp6(3),t.hij("last update : ",t.lcZ(8,19,e.ticker.last_updated_at)," "),t.xp6(4),t.hij(" $",e.ticker.usd.toFixed(3),""),t.xp6(2),t.Q6J("ngClass",e.getChangeClass(e.ticker.usd_24h_change))("svgIcon","heroicons_solid:"+e.getChangeIcon(e.ticker.usd_24h_change)),t.xp6(2),t.Q6J("ngClass",e.getChangeClass(e.ticker.usd_24h_change)),t.xp6(1),t.hij("",e.ticker.usd_24h_change.toFixed(2)," %"),t.xp6(2),t.Q6J("chart",e.chartConversions.chart)("colors",e.chartConversions.colors)("series",e.chartConversions.series)("stroke",e.chartConversions.stroke)("tooltip",e.chartConversions.tooltip)("xaxis",e.chartConversions.xaxis)("yaxis",e.chartConversions.yaxis)}}function $(i,o){if(1&i&&(t.TgZ(0,"div",48),t.TgZ(1,"div",37),t.TgZ(2,"div",38),t._uU(3,"USD Market Cap"),t.qZA(),t.qZA(),t.TgZ(4,"div",40),t.TgZ(5,"div",41),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",46),t._UZ(8,"apx-chart",47),t.qZA(),t.qZA()),2&i){const e=t.oxw(3);t.xp6(6),t.Oqu(e.ticker.usd_market_cap.toFixed(3)),t.xp6(2),t.Q6J("chart",e.chartImpressions.chart)("colors",e.chartImpressions.colors)("series",e.chartImpressions.series)("stroke",e.chartImpressions.stroke)("tooltip",e.chartImpressions.tooltip)("xaxis",e.chartImpressions.xaxis)("yaxis",e.chartImpressions.yaxis)}}function j(i,o){if(1&i&&(t.TgZ(0,"div",48),t.TgZ(1,"div",37),t.TgZ(2,"div",38),t._uU(3,"Volume in Last 24h"),t.qZA(),t.qZA(),t.TgZ(4,"div",40),t.TgZ(5,"div",41),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",46),t._UZ(8,"apx-chart",47),t.qZA(),t.qZA()),2&i){const e=t.oxw(3);t.xp6(6),t.Oqu(e.ticker.usd_24h_vol.toFixed(3)),t.xp6(2),t.Q6J("chart",e.chartVisits.chart)("colors",e.chartVisits.colors)("series",e.chartVisits.series)("stroke",e.chartVisits.stroke)("tooltip",e.chartVisits.tooltip)("xaxis",e.chartVisits.xaxis)("yaxis",e.chartVisits.yaxis)}}function O(i,o){if(1&i&&(t.TgZ(0,"div",27),t.TgZ(1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",30),t.TgZ(4,"div",31),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",32),t._UZ(7,"apx-chart",33),t.qZA(),t.qZA(),t.YNc(8,V,19,21,"div",34),t.YNc(9,$,9,8,"div",35),t.YNc(10,j,9,8,"div",35),t.qZA()),2&i){const e=t.oxw(2);t.xp6(5),t.hij("",null==e.setup.Chain?null:e.setup.Chain.Symbol," to USD Chart "),t.xp6(2),t.Q6J("chart",e.coinpricechart.chart)("colors",e.coinpricechart.colors)("dataLabels",e.coinpricechart.dataLabels)("fill",e.coinpricechart.fill)("grid",e.coinpricechart.grid)("series",e.coinpricechart.series)("stroke",e.coinpricechart.stroke)("tooltip",e.coinpricechart.tooltip)("xaxis",e.coinpricechart.xaxis)("yaxis",e.coinpricechart.yaxis),t.xp6(1),t.Q6J("ngIf",e.data),t.xp6(1),t.Q6J("ngIf",e.data),t.xp6(1),t.Q6J("ngIf",e.data)}}function M(i,o){if(1&i&&t.YNc(0,O,11,14,"div",26),2&i){const e=t.oxw();t.Q6J("ngIf",e.dataprice)}}let N=(()=>{class i{constructor(e,a,l,c,s){this._tickerService=e,this._router=a,this.api=l,this.setup=c,this.cd=s,this.chartprice={},this.tickerLable="Ticker",this.ticker={},this._unsubscribeAll=new T.x,this._unsubscribeTicker=new T.x}ngOnInit(){this._tickerService.data3bax$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{null!==e&&(this.data=e,this._prepareChartData())}),this._tickerService.dataprice$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{null!==e&&(this.dataprice=e,this._preparePriceChartData())}),this._tickerService.dataticker$.pipe((0,u.R)(this._unsubscribeTicker)).subscribe(e=>{null!==e&&(this.ticker=e)})}getChangeClass(e){return e<0?"negative":"positive"}getChangeIcon(e){return e<0?"trending-down":"trending-up"}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this._unsubscribeTicker.next(null),this._unsubscribeTicker.complete(),this.data={},this.dataprice={}}trackByFn(e,a){return a.id||e}_prepareChartData(){this.chartConversions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#38BDF8"],fill:{colors:["#38BDF8"],opacity:.5},series:[{name:"prices",data:this.data.prices}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:e=>e.toString()}}},this.chartImpressions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#34D399"],fill:{colors:["#34D399"],opacity:.5},series:[{name:"market_caps",data:this.data.market_caps}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:e=>e.toString()}}},this.chartVisits={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#FB7185"],fill:{colors:["#FB7185"],opacity:.5},series:[{name:"total_volumes",data:this.data.total_volumes}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:e=>e.toString()}}}}_preparePriceChartData(){this.coinpricechart={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",toolbar:{show:!0},zoom:{enabled:!0}},colors:["#818CF8"],dataLabels:{enabled:!1},fill:{colors:["#312E81"]},grid:{show:!0,borderColor:"#334155",padding:{top:10,bottom:-40,left:0,right:0},position:"back",xaxis:{lines:{show:!0}}},series:[{name:"prices",data:this.dataprice.prices}],stroke:{width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:e=>`${e}`}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{stroke:{color:"#475569",dashArray:0,width:2}},labels:{offsetY:-20,style:{colors:"#CBD5E1"}},tickAmount:20,tooltip:{enabled:!1},type:"datetime"},yaxis:{show:!1}}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C),t.Y36(g.F0),t.Y36(k.s),t.Y36(y.U),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ticker"]],decls:30,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["href","","target","_blank"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex","items-center","justify-center","pl-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2"],[3,"label"],["matTabContent",""],[1,"ml-1.5","leading-6","truncate","text-secondary"],["class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full",4,"ngIf"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","w-full"],[1,"sm:col-span-2","lg:col-span-3","dark","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-center","justify-between","mt-10","ml-10","mr-6","sm:mr-10"],[1,"flex","flex-col"],[1,"mr-4","text-2xl","md:text-3xl","font-semibold","tracking-tight","leading-7"],[1,"flex","flex-col","flex-auto","h-80"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","fill","grid","series","stroke","tooltip","xaxis","yaxis"],["class","sm:col-span-2 lg:col-span-1 flex flex-col flex-auto bg-card shadow rounded-2xl overflow-hidden",4,"ngIf"],["class","flex flex-col flex-auto bg-card shadow rounded-2xl overflow-hidden",4,"ngIf"],[1,"sm:col-span-2","lg:col-span-1","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","justify-between","m-6","mb-0"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-sm","font-medium","tracking-tight","leading-6","truncate",3,"matTooltip"],[1,"flex","flex-col","lg:flex-row","lg:items-center","mx-6","mt-3"],[1,"text-7xl","font-bold","tracking-tighter","leading-tight"],[1,"flex","lg:flex-col","lg:ml-3"],[1,"icon-size-5",3,"ngClass","svgIcon"],[1,"flex","items-center","ml-1","lg:ml-0","lg:mt-0.5","text-md","leading-none","whitespace-nowrap","text-secondary"],[1,"font-medium",3,"ngClass"],[1,"flex","flex-col","flex-auto","h-20"],[1,"flex-auto","w-full","h-full",3,"chart","colors","series","stroke","tooltip","xaxis","yaxis"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,B,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"div",17),t.TgZ(21,"div",18),t._uU(22,"Ticker"),t.qZA(),t.qZA(),t.TgZ(23,"div",19),t._UZ(24,"mat-icon",13),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",20),t.TgZ(26,"div",21),t.TgZ(27,"mat-tab-group",22),t.TgZ(28,"mat-tab",23),t.YNc(29,M,1,1,"ng-template",24),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.s9C("src",null==a.setup.Chain?null:a.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==a.setup.Chain?null:a.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==a.setup.Chain?null:a.setup.Chain.Description),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(9),t.Q6J("svgIcon","heroicons_solid:chevron-down"),t.xp6(4),t.s9C("label",null==a.setup.Chain?null:a.setup.Chain.Name))},directives:[x.O5,v.Hw,f.lW,Z.wG,h.SP,h.uX,h.Vc,b.x,A.gM,x.mk],pipes:[x.uU,L.d,Y.n],encapsulation:2,changeDetection:0}),i})();var P=r(4128);const R=[{path:"",component:N,resolve:{data:(()=>{class i{constructor(e){this._tickerService=e}resolve(e,a){return(0,P.D)([this._tickerService.get3baxChartData(),this._tickerService.updateTicker(),this._tickerService.getPriceChartData()])}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(C))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}];var G=r(9828);let X=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.Bz.forChild(R),f.ot,w.vV,_.t,v.Ps,I.Tx,U.Cv,Z.si,q.SJ,S.JX,F.p0,h.Nh,b.X,D.y4,J.m,A.AV,G.d]]}),i})()}}]);