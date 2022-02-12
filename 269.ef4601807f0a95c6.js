"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[269],{5269:(at,x,n)=>{n.r(x),n.d(x,{ExplorerModule:()=>ct});var p=n(4521),v=n(7423),w=n(9832),U=n(4834),h=n(5245),u=n(2181),C=n(5899),T=n(508),S=n(2638),E=n(4847),J=n(4999),d=n(3251),Q=n(7455),B=n(1244),M=n(4466),c=n(5861),Y=n(7579),A=n(2722),t=n(5e3),b=n(1135),F=n(520),f=n(9205),L=n(5830);let q=(()=>{class o{constructor(e,i,l){this._httpClient=e,this.setup=i,this.api=l,this._blockdata=new b.X(null),this._infodata=new b.X(null)}get blocksdata$(){return this._blockdata.asObservable()}get infodata$(){return this._infodata.asObservable()}getBlocksData(){var e=this;return(0,c.Z)(function*(){return yield e.updateBlocks(),e.blocks})()}getInfoData(){var e=this;return(0,c.Z)(function*(){return yield e.updateInfo(),e.info})()}updateBlocks(){var e=this;return(0,c.Z)(function*(){if(!e.setup.isCurrentRootChain){try{const i=yield e.api.getBlocks(0,4);i.sort((l,s)=>s.blockIndex===l.blockIndex?0:s.blockIndex<l.blockIndex?-1:s.blockIndex>l.blockIndex?1:void 0),e.blocks=i,e._blockdata.next(e.blocks),e.errorBlocks=null}catch(i){e.errorBlocks=i}e.timerBlocks=setTimeout((0,c.Z)(function*(){yield e.updateBlocks(),e._blockdata.next(e.blocks)}),15e3)}})()}updateInfo(){var e=this;return(0,c.Z)(function*(){if(!e.setup.isCurrentRootChain){try{e.info=yield e.api.getInfo(),e._infodata.next(e.info),e.errorInfo=null}catch(i){e.errorInfo=i}e.timerInfo=setTimeout((0,c.Z)(function*(){yield e.updateInfo(),e._infodata.next(e.info)}),15e3)}})()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(F.eN),t.LFG(f.U),t.LFG(L.s))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=n(3075),g=n(9808),k=n(7322),y=n(7531),I=n(7238),P=n(5769),D=n(7338);let z=(()=>{class o{transform(e){return(e/1024).toFixed(3)+"kB"}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"size",type:o,pure:!0}),o})(),j=(()=>{class o{constructor(e){this.setup=e}transform(e){return this.setup.transformFormat(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.U,16))},o.\u0275pipe=t.Yjl({name:"amount",type:o,pure:!1}),o})();function N(o,r){if(1&o&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",25),t._uU(3),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==e.setup.Chain?null:e.setup.Chain.Description)}}const _=function(o){return["block",o]};function O(o,r){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",27),t.TgZ(2,"div",38),t.TgZ(3,"div",39),t.ALo(4,"date"),t.ALo(5,"timestamp"),t._uU(6),t.ALo(7,"ago"),t.qZA(),t.TgZ(8,"div",40),t.TgZ(9,"button",41),t._UZ(10,"mat-icon",13),t.qZA(),t.TgZ(11,"mat-menu",null,42),t.TgZ(13,"a",43),t.TgZ(14,"button",44),t._uU(15,"Block Details"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",45),t.TgZ(17,"div",46),t._uU(18),t.qZA(),t.TgZ(19,"div",47),t._uU(20),t.ALo(21,"size"),t.qZA(),t.TgZ(22,"div",48),t.TgZ(23,"div",49),t._uU(24,"Transactions:"),t.qZA(),t.TgZ(25,"div",50),t._uU(26),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=r.$implicit,i=t.MAs(12);t.xp6(3),t.s9C("matTooltip",t.xi3(4,8,t.lcZ(5,11,e.blockTime),"hh:mm")),t.xp6(3),t.hij("",t.lcZ(7,13,e.blockTime)," "),t.xp6(3),t.Q6J("matMenuTriggerFor",i),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(3),t.Q6J("routerLink",t.VKq(17,_,e.blockIndex)),t.xp6(5),t.hij(" ",e.blockIndex,""),t.xp6(2),t.hij("Size: ",t.lcZ(21,15,e.blockSize)," "),t.xp6(6),t.Oqu(e.transactionCount)}}function R(o,r){if(1&o&&(t.TgZ(0,"div",36),t.YNc(1,O,27,19,"div",37),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.blocks)}}const G=function(){return["blocks"]};function $(o,r){1&o&&(t.TgZ(0,"div",51),t.TgZ(1,"div",52),t.TgZ(2,"a",43),t.TgZ(3,"button",53),t.TgZ(4,"span",54),t._uU(5,"View All Blocks"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("routerLink",t.DdM(1,G)))}function V(o,r){if(1&o&&(t.TgZ(0,"div",26),t.TgZ(1,"div",27),t.TgZ(2,"div",20),t.TgZ(3,"form",28),t.TgZ(4,"div",29),t.TgZ(5,"mat-form-field",30),t._UZ(6,"mat-icon",31),t._UZ(7,"input",32,33),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(9,R,2,1,"div",34),t.YNc(10,$,6,2,"div",35)),2&o){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.searchForm),t.xp6(2),t.Q6J("floatLabel","always"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(3),t.Q6J("ngIf",e.blocks),t.xp6(1),t.Q6J("ngIf",e.blocks)}}function X(o,r){if(1&o&&(t.TgZ(0,"div",59),t.TgZ(1,"div",60),t._UZ(2,"mat-icon",61),t.qZA(),t.TgZ(3,"div",16),t.TgZ(4,"div",62),t.TgZ(5,"div",63),t._uU(6,"Error from node :"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",64),t.TgZ(8,"span",65),t._uU(9),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("svgIcon","heroicons_outline:exclamation-circle"),t.xp6(7),t.Oqu(e.node.error)}}function W(o,r){if(1&o&&(t.TgZ(0,"div",59),t.TgZ(1,"div",60),t._UZ(2,"mat-icon",61),t.qZA(),t.TgZ(3,"div",16),t.TgZ(4,"div",62),t.TgZ(5,"div",63),t._uU(6,"Error from indexer :"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",64),t.TgZ(8,"div",66),t.TgZ(9,"div",67),t.TgZ(10,"span",65),t._uU(11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("svgIcon","heroicons_outline:exclamation-circle"),t.xp6(9),t.Oqu(e.errorInfo)}}function H(o,r){if(1&o&&(t.TgZ(0,"div",59),t.TgZ(1,"div",60),t._UZ(2,"mat-icon",69),t.qZA(),t.TgZ(3,"div",16),t.TgZ(4,"div",62),t.TgZ(5,"div",63),t._uU(6,"Sync Progress :"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",64),t.TgZ(8,"div",66),t.TgZ(9,"div",67),t._uU(10,"Details :"),t.qZA(),t.TgZ(11,"div",73),t._uU(12),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw(3);t.xp6(2),t.Q6J("svgIcon","heroicons_outline:check-circle"),t.xp6(10),t.hij(" ",e.node.progress,"")}}const K=function(){return["mempool"]};function tt(o,r){if(1&o&&(t.TgZ(0,"div",68),t.TgZ(1,"div",59),t.TgZ(2,"div",60),t._UZ(3,"mat-icon",69),t.qZA(),t.TgZ(4,"div",16),t.TgZ(5,"div",62),t.TgZ(6,"div",63),t._uU(7,"Transactions in pool :"),t.qZA(),t.qZA(),t.TgZ(8,"div",70),t.TgZ(9,"button",41),t._UZ(10,"mat-icon",13),t.qZA(),t.TgZ(11,"mat-menu",null,71),t.TgZ(13,"a",43),t.TgZ(14,"button",44),t.TgZ(15,"span",16),t._UZ(16,"mat-icon",72),t.TgZ(17,"span"),t._uU(18,"Mempool Details"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",64),t.TgZ(20,"div",66),t.TgZ(21,"div",67),t._uU(22,"Count :"),t.qZA(),t.TgZ(23,"div",73),t._uU(24),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(25,H,13,2,"div",56),t.qZA()),2&o){const e=t.MAs(12),i=t.oxw(2);t.xp6(3),t.Q6J("svgIcon","heroicons_outline:check-circle"),t.xp6(6),t.Q6J("matMenuTriggerFor",e),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(3),t.Q6J("routerLink",t.DdM(7,K)),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:credit-card"),t.xp6(8),t.hij(" ",i.node.transactionsInPool,""),t.xp6(1),t.Q6J("ngIf",!(null!=i.node&&i.node.error)&&i.info)}}function et(o,r){if(1&o&&(t.TgZ(0,"div",74),t.TgZ(1,"div",75),t.TgZ(2,"div",38),t.TgZ(3,"div",63),t._uU(4,"Average Block Size :"),t.qZA(),t.qZA(),t.TgZ(5,"div",76),t.ynx(6),t.TgZ(7,"div",77),t._uU(8),t.ALo(9,"size"),t.qZA(),t.BQk(),t.qZA(),t.qZA(),t.TgZ(10,"div",75),t.TgZ(11,"div",38),t.TgZ(12,"div",63),t._uU(13,"Difficulty : "),t.qZA(),t.qZA(),t.TgZ(14,"div",76),t.ynx(15),t.TgZ(16,"div",77),t._uU(17),t.qZA(),t.BQk(),t.qZA(),t.qZA(),t.TgZ(18,"div",75),t.TgZ(19,"div",38),t.TgZ(20,"div",63),t._uU(21,"Total Network Staking Weight :"),t.qZA(),t.qZA(),t.TgZ(22,"div",76),t.ynx(23),t.TgZ(24,"div",77),t._uU(25),t.ALo(26,"amount"),t.qZA(),t.BQk(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.xp6(8),t.hij(" ",t.lcZ(9,4,e.node.avgBlockSizeKb)," "),t.xp6(9),t.hij(" ",e.blockchain.difficulty," "),t.xp6(8),t.AsE(" ",t.lcZ(26,6,e.blockchain.networkWeight)," ",e.setup.Chain.Symbol," ")}}function ot(o,r){if(1&o&&(t.TgZ(0,"div",55),t.YNc(1,X,10,2,"div",56),t.YNc(2,W,12,2,"div",56),t.qZA(),t.YNc(3,tt,26,8,"div",57),t.YNc(4,et,27,8,"div",58)),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.node?null:e.node.error),t.xp6(1),t.Q6J("ngIf",e.errorInfo),t.xp6(1),t.Q6J("ngIf",!(null!=e.node&&e.node.error)&&e.info),t.xp6(1),t.Q6J("ngIf",!(null!=e.node&&e.node.error)&&e.info)}}let nt=(()=>{class o{constructor(e,i,l,s,a,Z){this._explorerService=e,this._router=i,this._formBuilder=l,this.setup=s,this.cdr=a,this.com=Z,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.explorerLable="Explorer",this._unsubscribeAll=new Y.x}ngOnInit(){var e=this;this.searchForm=this._formBuilder.group({name:["blockcore"]}),this.subscription=this.setup.currentChain$.subscribe(function(){var i=(0,c.Z)(function*(l){e.setup.isCurrentRootChain||(e._explorerService.blocksdata$.pipe((0,A.R)(e._unsubscribeAll)).subscribe(s=>{null!==s&&(e.blocks=s)}),e._explorerService.infodata$.pipe((0,A.R)(e._unsubscribeAll)).subscribe(s=>{var a;if(null!==s)try{e.info=s,e.node=e.info.node,e.blockchain=e.node.blockchain,e.network=e.node.network,e.configuration=e.info.configuration,e.consensus=null===(a=e.configuration)||void 0===a?void 0:a.consensus,e.errorInfo=null}catch(Z){e.errorInfo=Z}}))});return function(l){return i.apply(this,arguments)}}())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),clearTimeout(this._explorerService.timerInfo),clearTimeout(this._explorerService.timerBlocks),this.subscription.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(q),t.Y36(p.F0),t.Y36(m.qu),t.Y36(f.U),t.Y36(t.sBO),t.Y36(g.ez))},o.\u0275cmp=t.Xpm({type:o,selectors:[["explorer"]],decls:30,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],["label","Search & Last Blocks"],["matTabContent",""],["label","Network Statistics"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[3,"formGroup"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search for address, transaction or block.","autocomplete","off","matInput",""],["query",""],["class","grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 w-full min-w-0",4,"ngIf"],["class","py-10 sm:py-12 sm:px-16 text-on-primary-600",4,"ngIf"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-4","gap-6","w-full","min-w-0"],[4,"ngFor","ngForOf"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate",3,"matTooltip"],[1,"ml-2","-mt-2","-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],["Menu1254","matMenu"],[3,"routerLink"],["mat-menu-item",""],[1,"flex","flex-col","items-center","mt-2"],[1,"text-5xl","sm:text-6xl","font-bold","tracking-tight","leading-none","chaincolor"],[1,"text-lg","font-medium","text-blue-600","dark:text-blue-500","mt-3"],[1,"flex","items-baseline","justify-center","w-full","mt-5","text-secondary"],[1,"text-md","font-medium","truncate"],[1,"ml-1.5","text-lg","font-semibold"],[1,"py-10","sm:py-12","sm:px-16","text-on-primary-600"],[1,"flex","flex-col","items-center","w-full","max-w-7xl","mx-auto","text-center"],["mat-flat-button","",1,"blockcore-mat-button-large","px-12","back-chain-color","text-primary-800"],[1,"text-lg"],[1,"grid","grid-cols-1","sm:grid-cols-1","lg:grid-cols-1","gap-8","w-full"],["class","relative flex flex-col flex-auto p-6 pr-3 pb-3 bg-card rounded-2xl shadow overflow-hidden",4,"ngIf"],["class","grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full",4,"ngIf"],["class","grid grid-cols-1 mt-6 sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full",4,"ngIf"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"icon-size-24","opacity-25","text-red-500","dark:text-red-400",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"flex","flex-row","flex-wrap","mt-4","-mx-6"],[1,"negative"],[1,"flex","flex-col","mx-6","my-3"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"grid","grid-cols-1","sm:grid-cols-1","lg:grid-cols-2","gap-8","w-full"],[1,"icon-size-24","opacity-25","text-green-500","dark:text-green-400",3,"svgIcon"],[1,"ml-auto","-mt-2"],["previousStatementMenu","matMenu"],[1,"icon-size-5","mr-3",3,"svgIcon"],[1,"mt-2","font-medium","text-3xl","leading-none","chaincolor"],[1,"grid","grid-cols-1","mt-6","sm:grid-cols-1","lg:grid-cols-3","gap-8","w-full"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden","p-6"],[1,"mt-8"],[1,"flex","items-center","text-blue-500"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,N,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"div",17),t.TgZ(21,"div",18),t._uU(22,"Explorer"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",19),t.TgZ(24,"div",20),t.TgZ(25,"mat-tab-group",21),t.TgZ(26,"mat-tab",22),t.YNc(27,V,11,5,"ng-template",23),t.qZA(),t.TgZ(28,"mat-tab",24),t.YNc(29,ot,5,4,"ng-template",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.s9C("src",null==i.setup.Chain?null:i.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==i.setup.Chain?null:i.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==i.setup.Chain?null:i.setup.Chain.Description),t.xp6(2),t.s9C("href",null==i.setup.Chain?null:i.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(10),t.Q6J("animationDuration","0"))},directives:[g.O5,h.Hw,v.lW,T.wG,d.SP,d.uX,d.Vc,m._Y,m.JL,m.sg,k.KE,k.qo,y.Nt,g.sg,I.gM,u.p6,u.VK,p.yS,u.OP],pipes:[g.uU,P.d,D.n,z,j],encapsulation:2,changeDetection:0}),o})();var it=n(4128);const rt=[{path:"",component:nt,resolve:{data:(()=>{class o{constructor(e){this._explorerService=e}resolve(e,i){var l=this;return(0,c.Z)(function*(){return(0,it.D)([yield l._explorerService.getBlocksData(),yield l._explorerService.getInfoData()])})()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(q))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];var lt=n(4107),st=n(9828);let ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(rt),v.ot,w.vV,U.t,h.Ps,u.Tx,C.Cv,T.si,S.SJ,E.JX,J.p0,d.Nh,B.X,Q.y4,M.m,lt.LD,y.c,st.d,I.AV]]}),o})()}}]);