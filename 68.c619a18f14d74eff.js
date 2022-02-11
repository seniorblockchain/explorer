"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[68],{3068:(_,h,n)=>{n.r(h),n.d(h,{HomeModule:()=>M});var u=n(4521),p=n(7423),y=n(9832),w=n(4834),v=n(5245),q=n(2181),k=n(5899),d=n(508),H=n(2638),J=n(4847),U=n(4999),l=n(3251),x=n(7455),Q=n(1244),I=n(4466),S=n(7579),F=n(2722),t=n(5e3),r=n(5861),Y=n(1135),Z=n(9205),B=n(5830);let T=(()=>{class o{constructor(e,i){this.setup=e,this.api=i,this._data=new Y.X(null)}get data$(){return this._data.asObservable()}getData(){var e=this;return(0,r.Z)(function*(){return yield e.updateTicker(),e.tickers})()}ngOnInit(){var e=this;return(0,r.Z)(function*(){yield e.updateTicker()})()}updateTicker(){var e=this;return(0,r.Z)(function*(){try{const c=`https://api.coingecko.com/api/v3/simple/price?ids=${e.setup.chains.map(f=>f.coin).filter(f=>null!=f).join("%2C")}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`,X=yield e.api.download(c);e.tickers=X,e._data.next(e.tickers)}catch(i){console.error(i)}})()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(Z.U),t.LFG(B.s))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var a=n(3075),g=n(9808),A=n(7322),b=n(4107),C=n(7531);function L(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"div",26),t._uU(2),t.qZA(),t.BQk()),2&o){const e=s.$implicit;t.xp6(2),t.hij(" ",e("welcome-to")," Blockcore Explorer!")}}function N(o,s){if(1&o&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",27),t._uU(3),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==e.setup.Chain?null:e.setup.Chain.Description)}}function D(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"mat-option",33),t._uU(2),t.qZA(),t.BQk()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("value",e.symbol),t.xp6(1),t.hij("",e.name," ")}}function O(o,s){1&o&&(t.TgZ(0,"span",53),t._uU(1,"0 %"),t.qZA())}function j(o,s){if(1&o&&(t.TgZ(0,"span",54),t._uU(1),t.qZA()),2&o){const e=t.oxw(2).$implicit,i=t.oxw(2);t.Q6J("ngClass",i.getChangeClass(i.tickers[e.coin].usd_24h_change)),t.xp6(1),t.hij("",i.tickers[e.coin].usd_24h_change.toFixed(2),"%")}}function $(o,s){if(1&o&&(t.TgZ(0,"div",48),t.TgZ(1,"a",49),t.TgZ(2,"span",14),t._uU(3),t.TgZ(4,"span",50),t._uU(5,"USDT"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"a",49),t.TgZ(7,"span",14),t.YNc(8,O,2,0,"span",51),t.YNc(9,j,2,2,"span",52),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(3),t.hij(" ",i.tickers[e.coin].usd.toFixed(8)," "),t.xp6(5),t.Q6J("ngIf",0===i.tickers[e.coin].usd_24h_change),t.xp6(1),t.Q6J("ngIf",i.tickers[e.coin].usd_24h_change&&0!==i.tickers[e.coin].usd_24h_change)}}const G=function(o){return[o,"ticker"]};function R(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"div",40),t.TgZ(2,"div",41),t.TgZ(3,"a",42),t.TgZ(4,"div",43),t._UZ(5,"img",44),t.qZA(),t.TgZ(6,"div",45),t._uU(7),t.qZA(),t.TgZ(8,"div",46),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.YNc(10,$,10,3,"div",47),t.qZA(),t.BQk()),2&o){const e=s.$implicit,i=t.oxw(2);t.xp6(3),t.Q6J("routerLink",t.VKq(5,G,"/"+e.symbol.toLowerCase())),t.xp6(2),t.Q6J("src",e.icon,t.LSH),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.symbol),t.xp6(1),t.Q6J("ngIf",i.tickers&&e.coin)}}function z(o,s){if(1&o&&(t.TgZ(0,"div",28),t.TgZ(1,"div",29),t.TgZ(2,"div",22),t.TgZ(3,"form",30),t.TgZ(4,"div",31),t.TgZ(5,"mat-form-field",32),t.TgZ(6,"mat-select",33),t.TgZ(7,"mat-option",33),t._uU(8,"Bitcoin"),t.qZA(),t.YNc(9,D,3,2,"ng-container",34),t.qZA(),t.qZA(),t.TgZ(10,"mat-form-field",35),t._UZ(11,"mat-icon",36),t._UZ(12,"input",37,38),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",39),t.YNc(15,R,11,7,"ng-container",34),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.searchForm),t.xp6(3),t.Q6J("value","BTC"),t.xp6(1),t.Q6J("value","BTC"),t.xp6(2),t.Q6J("ngForOf",e.setup.chains),t.xp6(1),t.Q6J("floatLabel","always"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(4),t.Q6J("ngForOf",e.setup.chains)}}const E=[{path:"",component:(()=>{class o{constructor(e,i,m,c){this._homeService=e,this._router=i,this._formBuilder=m,this.setup=c,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.tickers={},this.selectNetwork="Select Network",this._unsubscribeAll=new S.x,c.multiChain||i.navigate(["/blockcore"+c.current.toLowerCase()])}ngOnInit(){this.searchForm=this._formBuilder.group({name:["Blockcore"]}),this._homeService.data$.pipe((0,F.R)(this._unsubscribeAll)).subscribe(e=>{this.tickers=e})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}getChangeClass(e){return e<0?"negative":"positive"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T),t.Y36(u.F0),t.Y36(a.qu),t.Y36(Z.U))},o.\u0275cmp=t.Xpm({type:o,selectors:[["home"]],decls:31,vars:9,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],["src","assets/images/logo/logo.svg",1,"w-full","h-full"],[1,"flex","flex-col","min-w-0","ml-4"],[4,"transloco"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["href","mailto:post@blockcore.net","target","_blank"],["mat-flat-button","",1,"blockcore-mat-button-rounded","bg-accent-700",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[3,"formGroup"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-36"],[3,"value"],[4,"ngFor","ngForOf"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search for address, transaction or block.","autocomplete","off","matInput",""],["query",""],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-5","gap-6","w-full","min-w-0"],[1,"flex","flex-col","flex-auto","items-center","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","flex-auto","w-full","p-8","text-center"],[3,"routerLink"],[1,"w-12","h-12","mx-auto","overflow-hidden"],[1,"w-full","h-full","object-cover",3,"src"],[1,"mt-6","font-medium"],[1,"text-secondary"],["class","flex items-center w-full border-t divide-x",4,"ngIf"],[1,"flex","items-center","w-full","border-t","divide-x"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-hover",3,"href"],[1,"btccolor"],["class","chain-home-ticker-change",4,"ngIf"],["class","chain-home-ticker-change",3,"ngClass",4,"ngIf"],[1,"chain-home-ticker-change"],[1,"chain-home-ticker-change",3,"ngClass"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.YNc(8,L,3,1,"ng-container",8),t.YNc(9,N,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(10,"div",10),t.TgZ(11,"a",11),t.TgZ(12,"button",12),t._UZ(13,"mat-icon",13),t.TgZ(14,"span",14),t._uU(15,"Contact"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"a",15),t.TgZ(17,"button",16),t._UZ(18,"mat-icon",13),t.TgZ(19,"span",14),t._uU(20,"Blockcore"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",17),t.TgZ(22,"div",18),t.TgZ(23,"div",19),t.TgZ(24,"div",20),t._uU(25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",21),t.TgZ(27,"div",22),t.TgZ(28,"mat-tab-group",23),t.TgZ(29,"mat-tab",24),t.YNc(30,z,16,7,"ng-template",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("ngIf",null==i.setup.Chain?null:i.setup.Chain.Description),t.xp6(3),t.Q6J("color","accent"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(3),t.s9C("href",null==i.setup.Chain?null:i.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(7),t.Oqu(i.selectNetwork),t.xp6(3),t.Q6J("animationDuration","0"),t.xp6(1),t.s9C("label",i.selectNetwork))},directives:[x.KI,g.O5,v.Hw,p.lW,d.wG,l.SP,l.uX,l.Vc,a._Y,a.JL,a.sg,A.KE,b.gD,d.ey,g.sg,A.qo,C.Nt,u.yS,g.mk],encapsulation:2,changeDetection:0}),o})(),resolve:{data:(()=>{class o{constructor(e){this._homeService=e}resolve(e,i){var m=this;return(0,r.Z)(function*(){return yield m._homeService.getData()})()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(T))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(E),p.ot,y.vV,w.t,v.Ps,q.Tx,k.Cv,d.si,H.SJ,J.JX,U.p0,l.Nh,Q.X,x.y4,I.m,b.LD,C.c]]}),o})()}}]);