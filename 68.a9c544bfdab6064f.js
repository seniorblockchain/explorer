"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[68],{3068:(j,m,n)=>{n.r(m),n.d(m,{HomeModule:()=>L});var a=n(4521),u=n(7423),h=n(9832),T=n(4834),d=n(5245),A=n(2181),b=n(5899),c=n(508),w=n(2638),y=n(4847),H=n(4999),s=n(3251),f=n(7455),q=n(1244),C=n(4466),J=n(7579),o=n(5e3),Q=n(1135),g=n(9205);let v=(()=>{class t{constructor(e){this.setup=e,this._data=new Q.X(null)}get data$(){return this.setup.chains.asObservable()}getData(){return this.setup.chains}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(g.U))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var i=n(3075),x=n(7322),p=n(4107),U=n(9808),Z=n(7531);function B(t,l){if(1&t&&(o.ynx(0),o.TgZ(1,"div",23),o._uU(2),o.qZA(),o.BQk()),2&t){const e=l.$implicit;o.xp6(2),o.hij(" ",e("welcome-to")," Blockcore Explorer!")}}function S(t,l){if(1&t&&(o.ynx(0),o.TgZ(1,"mat-option",29),o._uU(2),o.qZA(),o.BQk()),2&t){const e=l.$implicit;o.xp6(1),o.Q6J("value",e.symbol),o.xp6(1),o.Oqu(e.name)}}const F=function(t){return[t,"ticker"]};function Y(t,l){if(1&t&&(o.ynx(0),o.TgZ(1,"div",36),o.TgZ(2,"div",37),o.TgZ(3,"a",38),o.TgZ(4,"div",39),o._UZ(5,"img",40),o.qZA(),o.TgZ(6,"div",41),o._uU(7),o.qZA(),o.TgZ(8,"div",42),o._uU(9),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.BQk()),2&t){const e=l.$implicit;o.xp6(3),o.Q6J("routerLink",o.VKq(4,F,"/"+e.symbol.toLowerCase())),o.xp6(2),o.Q6J("src",e.icon,o.LSH),o.xp6(2),o.Oqu(e.name),o.xp6(2),o.Oqu(e.symbol)}}function D(t,l){if(1&t&&(o.TgZ(0,"div",24),o.TgZ(1,"div",25),o.TgZ(2,"div",19),o.TgZ(3,"form",26),o.TgZ(4,"div",27),o.TgZ(5,"mat-form-field",28),o.TgZ(6,"mat-select",29),o.TgZ(7,"mat-option",29),o._uU(8,"Bitcoin"),o.qZA(),o.YNc(9,S,3,2,"ng-container",30),o.qZA(),o.qZA(),o.TgZ(10,"mat-form-field",31),o._UZ(11,"mat-icon",32),o._UZ(12,"input",33,34),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(14,"div",35),o.YNc(15,Y,10,6,"ng-container",30),o.qZA()),2&t){const e=o.oxw();o.xp6(3),o.Q6J("formGroup",e.searchForm),o.xp6(3),o.Q6J("value","BTC"),o.xp6(1),o.Q6J("value","BTC"),o.xp6(2),o.Q6J("ngForOf",e.setup.chains),o.xp6(1),o.Q6J("floatLabel","always"),o.xp6(1),o.Q6J("svgIcon","heroicons_solid:search"),o.xp6(4),o.Q6J("ngForOf",e.setup.chains)}}const I=[{path:"",component:(()=>{class t{constructor(e,r,N,O){this._homeService=e,this._router=r,this._formBuilder=N,this.setup=O,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.selectNetwork="Select Network",this._unsubscribeAll=new J.x}ngOnInit(){this.searchForm=this._formBuilder.group({name:["Blockcore"]})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(v),o.Y36(a.F0),o.Y36(i.qu),o.Y36(g.U))},t.\u0275cmp=o.Xpm({type:t,selectors:[["home"]],decls:28,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],["src","assets/images/logo/logo.svg",1,"w-full","h-full"],[1,"flex","flex-col","min-w-0","ml-4"],[4,"transloco"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-flat-button","",1,"blockcore-mat-button-rounded","bg-accent-700",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[3,"formGroup"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-36"],[3,"value"],[4,"ngFor","ngForOf"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search for address, transaction or block.","autocomplete","off","matInput",""],["query",""],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-6","gap-6","w-full","min-w-0"],[1,"flex","flex-col","flex-auto","items-center","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","flex-auto","w-full","p-8","text-center"],[3,"routerLink"],[1,"w-12","h-12","mx-auto","overflow-hidden"],[1,"w-full","h-full","object-cover",3,"src"],[1,"mt-6","font-medium"],[1,"text-secondary"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"div",5),o._UZ(6,"img",6),o.qZA(),o.TgZ(7,"div",7),o.YNc(8,B,3,1,"ng-container",8),o.qZA(),o.qZA(),o.TgZ(9,"div",9),o.TgZ(10,"button",10),o._UZ(11,"mat-icon",11),o.TgZ(12,"span",12),o._uU(13,"Contact"),o.qZA(),o.qZA(),o.TgZ(14,"button",13),o._UZ(15,"mat-icon",11),o.TgZ(16,"span",12),o._uU(17,"Blockcore"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(18,"div",14),o.TgZ(19,"div",15),o.TgZ(20,"div",16),o.TgZ(21,"div",17),o._uU(22),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(23,"div",18),o.TgZ(24,"div",19),o.TgZ(25,"mat-tab-group",20),o.TgZ(26,"mat-tab",21),o.YNc(27,D,16,7,"ng-template",22),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(10),o.Q6J("color","accent"),o.xp6(1),o.Q6J("svgIcon","heroicons_solid:mail"),o.xp6(3),o.Q6J("color","primary"),o.xp6(1),o.Q6J("svgIcon","heroicons_solid:chevron-double-right"),o.xp6(7),o.Oqu(r.selectNetwork),o.xp6(3),o.Q6J("animationDuration","0"),o.xp6(1),o.s9C("label",r.selectNetwork))},directives:[f.KI,u.lW,d.Hw,c.wG,s.SP,s.uX,s.Vc,i._Y,i.JL,i.sg,x.KE,p.gD,c.ey,U.sg,x.qo,Z.Nt,a.yS],encapsulation:2,changeDetection:0}),t})(),resolve:{data:(()=>{class t{constructor(e){this._homeService=e}resolve(e,r){return this._homeService.getData()}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(v))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.Bz.forChild(I),u.ot,h.vV,T.t,d.Ps,A.Tx,b.Cv,c.si,w.SJ,y.JX,H.p0,s.Nh,q.X,f.y4,C.m,p.LD,Z.c]]}),t})()}}]);