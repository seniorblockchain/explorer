"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[932],{2932:(z,p,s)=>{s.r(p),s.d(p,{HomeModule:()=>$});var a=s(4521),f=s(7423),C=s(9832),y=s(4834),x=s(5245),w=s(2181),b=s(5899),h=s(508),_=s(2638),k=s(4847),H=s(4999),J=s(3251),v=s(7455),q=s(1244),Q=s(4466),m=s(5861),I=s(7579),e=s(5e3),N=s(5830),U=s(9205),d=s(9808),Z=s(7322),T=s(4107),u=s(3075),A=s(7531);function M(n,i){1&n&&(e.ynx(0),e.TgZ(1,"div",20),e._uU(2," Blockcore Explorer"),e.qZA(),e.BQk())}function Y(n,i){1&n&&e._UZ(0,"app-progress")}function L(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",34),e._uU(2),e.qZA(),e.BQk()),2&n){const t=i.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("selected",t.symbol===o.optionValue)("value",t.symbol),e.xp6(1),e.hij("",t.name," ")}}function B(n,i){1&n&&(e.TgZ(0,"span",49),e._uU(1,"0 %"),e.qZA())}function F(n,i){if(1&n&&(e.TgZ(0,"span",50),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit,o=e.oxw(3);e.Q6J("ngClass",o.getChangeClass(o.tickers[t.coin].usd_24h_change)),e.xp6(1),e.hij("",o.tickers[t.coin].usd_24h_change.toFixed(2),"%")}}function j(n,i){if(1&n&&(e.TgZ(0,"div",44),e.TgZ(1,"a",45),e.TgZ(2,"span",13),e._uU(3),e.TgZ(4,"span",46),e._uU(5,"USDT"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"a",45),e.TgZ(7,"span",13),e.YNc(8,B,2,0,"span",47),e.YNc(9,F,2,2,"span",48),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw().$implicit,o=e.oxw(3);e.xp6(3),e.hij(" ",o.tickers[t.coin].usd.toFixed(8)," "),e.xp6(5),e.Q6J("ngIf",0===o.tickers[t.coin].usd_24h_change),e.xp6(1),e.Q6J("ngIf",o.tickers[t.coin].usd_24h_change&&0!==o.tickers[t.coin].usd_24h_change)}}const O=function(n){return[n,"explorer"]};function S(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",36),e.TgZ(2,"div",37),e.TgZ(3,"a",38),e.TgZ(4,"div",39),e._UZ(5,"img",40),e.qZA(),e.TgZ(6,"div",41),e._uU(7),e.qZA(),e.TgZ(8,"div",42),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.YNc(10,j,10,3,"div",43),e.qZA(),e.BQk()),2&n){const t=i.$implicit,o=e.oxw(3);e.xp6(3),e.Q6J("routerLink",e.VKq(5,O,"/"+t.symbol.toLowerCase())),e.xp6(2),e.Q6J("src",t.icon,e.LSH),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.symbol),e.xp6(1),e.Q6J("ngIf",o.tickers&&t.coin)}}function D(n,i){if(1&n&&(e.TgZ(0,"div",35),e.YNc(1,S,11,7,"ng-container",28),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.setup.chains)}}function V(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",21),e.TgZ(1,"div",22),e.TgZ(2,"div",23),e.TgZ(3,"div",24),e.TgZ(4,"div",17),e.TgZ(5,"div",25),e.TgZ(6,"mat-form-field",26),e.TgZ(7,"mat-select",27),e.NdJ("ngModelChange",function(l){return e.CHM(t),e.oxw().optionValue=l}),e.YNc(8,L,3,3,"ng-container",28),e.qZA(),e.qZA(),e.TgZ(9,"mat-form-field",29),e._UZ(10,"mat-icon",30),e.TgZ(11,"input",31,32),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw().search()})("ngModelChange",function(l){return e.CHM(t),e.oxw().searchTerm=l}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(13,D,2,1,"div",33),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(7),e.Q6J("ngModel",t.optionValue),e.xp6(1),e.Q6J("ngForOf",t.setup.chains),e.xp6(1),e.Q6J("floatLabel","always"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(1),e.Q6J("ngModel",t.searchTerm),e.xp6(2),e.Q6J("ngIf",t.tickers)}}const E=[{path:"",component:(()=>{class n{constructor(t,o,l,c){this.api=t,this._router=o,this.setup=l,this.cdr=c,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.selectNetwork="Select Network",this.optionValue="STRAX",this._unsubscribeAll=new I.x,l.multiChain||o.navigate([l.current.toLowerCase()+"/explorer"])}ngOnInit(){var t=this;return(0,m.Z)(function*(){yield t.updateTickers()})()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}getChangeClass(t){return t<0?"negative":"positive"}updateTickers(){var t=this;return(0,m.Z)(function*(){try{const c=`https://api.coingecko.com/api/v3/simple/price?ids=${t.setup.chains.map(g=>g.coin).filter(g=>null!=g).join("%2C")}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`,r=yield t.api.download(c);t.tickers=r}catch(o){}t.cdr.detectChanges()})()}inputType(t){return t.startsWith(this.setup.Network.NetworkWitnessPrefix)?"address":t.length<20?"index":t.length>30&&t.length<54?"address":"hash"}search(){var t=this;return(0,m.Z)(function*(){yield t.setup.setChain(t.optionValue.toLowerCase());const o=t.searchTerm;switch(t.inputType(o)){case"index":{const c=parseInt(o,10);NaN!==c&&c>0&&t._router.navigate([t.setup.current,"explorer","block",c]);break}case"address":t._router.navigate([t.setup.current,"explorer","address",o]);break;case"hash":{let c=null;try{c=yield t.api.getBlockByHash(o)}catch(r){}if(c)t._router.navigate([t.setup.current,"explorer","block",c.blockHash]);else{const r=yield t.api.getTransaction(o);t._router.navigate([t.setup.current,"explorer","transaction",r.transactionId])}break}}})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N.s),e.Y36(a.F0),e.Y36(U.U),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["home"]],decls:24,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],["src","assets/images/logo/logo.svg",1,"w-full","h-full"],[1,"flex","flex-col","min-w-0","ml-4"],[4,"transloco"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["href","mailto:post@blockcore.net","target","_blank"],["mat-flat-button","",1,"blockcore-mat-button-rounded","bg-accent-700",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[4,"ngIf"],["class","flex flex-col flex-auto w-full",4,"ngIf"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-36"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["type","search","placeholder","Search for address, transaction or block.","autocomplete","off","matInput","",3,"ngModel","keyup.enter","ngModelChange"],["query",""],["class","grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-6 w-full min-w-0",4,"ngIf"],[3,"selected","value"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-5","gap-6","w-full","min-w-0"],[1,"flex","flex-col","flex-auto","items-center","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","flex-auto","w-full","p-8","text-center"],[3,"routerLink"],[1,"w-12","h-12","mx-auto","overflow-hidden"],["loading","lazy",1,"w-full","h-full","object-cover",3,"src"],[1,"mt-6","font-medium"],[1,"text-secondary"],["class","flex items-center w-full border-t divide-x",4,"ngIf"],[1,"flex","items-center","w-full","border-t","divide-x"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-hover",3,"href"],[1,"btccolor"],["class","chain-home-ticker-change",4,"ngIf"],["class","chain-home-ticker-change",3,"ngClass",4,"ngIf"],[1,"chain-home-ticker-change"],[1,"chain-home-ticker-change",3,"ngClass"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7),e.YNc(8,M,3,0,"ng-container",8),e.qZA(),e.qZA(),e.TgZ(9,"div",9),e.TgZ(10,"a",10),e.TgZ(11,"button",11),e._UZ(12,"mat-icon",12),e.TgZ(13,"span",13),e._uU(14,"Contact"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"a",14),e.TgZ(16,"button",15),e._UZ(17,"mat-icon",12),e.TgZ(18,"span",13),e._uU(19,"Blockcore"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div",16),e.TgZ(21,"div",17),e.YNc(22,Y,1,0,"app-progress",18),e.YNc(23,V,14,6,"div",19),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(11),e.Q6J("color","accent"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:mail"),e.xp6(3),e.s9C("href",null==o.setup.Chain?null:o.setup.Chain.Url,e.LSH),e.xp6(1),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:chevron-double-right"),e.xp6(5),e.Q6J("ngIf",!o.setup.chains),e.xp6(1),e.Q6J("ngIf",o.setup.chains))},directives:[v.KI,f.lW,x.Hw,d.O5,Z.KE,T.gD,u.JJ,u.On,d.sg,h.ey,Z.qo,A.Nt,u.Fj,a.yS,d.mk],encapsulation:2,changeDetection:0}),n})()}];let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.Bz.forChild(E),f.ot,C.vV,y.t,x.Ps,w.Tx,b.Cv,h.si,_.SJ,k.JX,H.p0,J.Nh,q.X,v.y4,Q.m,T.LD,A.c]]}),n})()}}]);