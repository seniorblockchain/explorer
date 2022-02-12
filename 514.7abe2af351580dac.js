"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[514],{8514:(N,a,e)=>{e.r(a),e.d(a,{InsightModule:()=>B});var r=e(4521),h=e(7423),v=e(9832),d=e(4834),c=e(5245),m=e(2181),p=e(5899),u=e(508),f=e(2638),x=e(4847),Z=e(4999),l=e(3251),C=e(7455),I=e(1244),T=e(4466),A=e(7579),b=e(2722),t=e(5e3),y=e(1135),S=e(8505),D=e(520);let g=(()=>{class n{constructor(s){this._httpClient=s,this._data=new y.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/ticker/ticker").pipe((0,S.b)(s=>{this._data.next(s)}))}}return n.\u0275fac=function(s){return new(s||n)(t.LFG(D.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var U=e(5830),Y=e(9205),J=e(9808);function F(n,o){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",24),t._uU(3),t.qZA(),t.qZA()),2&n){const s=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==s.setup.Chain?null:s.setup.Chain.Description)}}function R(n,o){}const Q=[{path:"",component:(()=>{class n{constructor(s,i,L,M){this._insightService=s,this._router=i,this.api=L,this.setup=M,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.insightLable="Insight",this.insight={},this._unsubscribeAll=new A.x}ngOnInit(){this._insightService.data$.pipe((0,b.R)(this._unsubscribeAll)).subscribe(s=>{this.data=s})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(g),t.Y36(r.F0),t.Y36(U.s),t.Y36(Y.U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["insight"]],decls:28,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["target","_blank","target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"ml-1.5","leading-6","truncate","text-secondary"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,F,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"div",17),t.TgZ(21,"div",18),t._uU(22,"Insight"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",19),t.TgZ(24,"div",20),t.TgZ(25,"mat-tab-group",21),t.TgZ(26,"mat-tab",22),t.YNc(27,R,0,0,"ng-template",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&s&&(t.xp6(6),t.s9C("src",null==i.setup.Chain?null:i.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==i.setup.Chain?null:i.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==i.setup.Chain?null:i.setup.Chain.Description),t.xp6(2),t.s9C("href",null==i.setup.Chain?null:i.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(10),t.Q6J("animationDuration","0"),t.xp6(1),t.s9C("label",null==i.setup.Chain?null:i.setup.Chain.Name))},directives:[J.O5,c.Hw,h.lW,u.wG,l.SP,l.uX,l.Vc],encapsulation:2,changeDetection:0}),n})(),resolve:{data:(()=>{class n{constructor(s){this._insightService=s}resolve(s,i){return this._insightService.getData()}}return n.\u0275fac=function(s){return new(s||n)(t.LFG(g))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let B=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.Bz.forChild(Q),h.ot,v.vV,d.t,c.Ps,m.Tx,p.Cv,u.si,f.SJ,x.JX,Z.p0,l.Nh,I.X,C.y4,T.m]]}),n})()}}]);