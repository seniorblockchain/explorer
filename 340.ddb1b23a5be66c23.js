"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[340],{1743:(q,m,i)=>{i.d(m,{q:()=>_});var Z=i(5830),n=i(5e3),v=i(69808),f=i(25245);function e(c,g){if(1&c&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&c){const r=n.oxw(2);n.xp6(1),n.Oqu(r.details)}}function p(c,g){if(1&c&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&c){const r=n.oxw(3);n.xp6(1),n.Oqu(r.details)}}function l(c,g){if(1&c&&(n.TgZ(0,"div",16),n._uU(1),n.qZA()),2&c){const r=n.oxw(3);n.xp6(1),n.Oqu(r.stack)}}function u(c,g){if(1&c&&(n.TgZ(0,"div",13),n.YNc(1,p,2,1,"div",9),n.YNc(2,l,2,1,"div",14),n._UZ(3,"br"),n.TgZ(4,"span",15),n._uU(5," Message: "),n.qZA(),n.TgZ(6,"div"),n._uU(7),n.qZA(),n.qZA()),2&c){const r=n.oxw(2);n.xp6(1),n.Q6J("ngIf",r.details),n.xp6(1),n.Q6J("ngIf",r.stack),n.xp6(5),n.Oqu(r.message)}}function x(c,g){if(1&c){const r=n.EpF();n.TgZ(0,"div",1),n.TgZ(1,"div",2),n._UZ(2,"mat-icon",3),n.qZA(),n.TgZ(3,"div",4),n.TgZ(4,"div",5),n.TgZ(5,"div",6),n._uU(6," Something went wrong! "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"div",7),n.TgZ(8,"div",5),n.TgZ(9,"div",8),n.YNc(10,e,2,1,"div",9),n._UZ(11,"br"),n._UZ(12,"br"),n.TgZ(13,"span",10),n.NdJ("click",function(){n.CHM(r);const A=n.oxw();return A.detailsVisible=!A.detailsVisible}),n._UZ(14,"mat-icon",11),n.qZA(),n.qZA(),n.YNc(15,u,8,3,"div",12),n.qZA(),n.qZA(),n.qZA()}if(2&c){const r=n.oxw();n.xp6(2),n.Q6J("svgIcon","heroicons_outline:exclamation-circle"),n.xp6(8),n.Q6J("ngIf",r.details),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:information-circle"),n.xp6(1),n.Q6J("ngIf",r.detailsVisible)}}let _=(()=>{class c{constructor(){this.detailsVisible=!1}ngOnChanges(r){!this.error||(this.error instanceof Z.o?404===this.error.code?(this.message="Not found (404)",this.details=this.error.url,this.stack=this.error.stack.toString()):(this.message=this.error.message+" ("+this.error.code+")",this.details=this.error.url,this.stack=this.error.stack.toString()):this.error instanceof Error?(this.message="Error occured: "+this.error.message,this.stack=this.error.stack.toString()):this.message=this.error)}}return c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-error"]],inputs:{error:"error"},features:[n.TTD],decls:1,vars:1,consts:[["class","relative flex flex-col flex-auto p-6 pr-3 pb-3 bg-card rounded-2xl shadow overflow-hidden",4,"ngIf"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"icon-size-24","opacity-25","text-red-500","dark:text-red-400",3,"svgIcon"],[1,"flex","items-center"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate","break-all","negative"],[1,"flex","items-center","mt-8"],[1,"font-medium","break-all"],[4,"ngIf"],["title","Show error details",1,"clickable",3,"click"],["matPrefix","",1,"icon-size-10","text-red-500",3,"svgIcon"],["class","error-details mt-8",4,"ngIf"],[1,"error-details","mt-8"],["class","error-details-stack",4,"ngIf"],[1,"text-red-500"],[1,"error-details-stack"]],template:function(r,T){1&r&&n.YNc(0,x,16,4,"div",0),2&r&&n.Q6J("ngIf",T.error)},directives:[v.O5,f.Hw],encapsulation:2}),c})()},74340:(q,m,i)=>{i.r(m),i.d(m,{ContractTransactionModule:()=>at});var Z=i(99826),n=i(47423),v=i(69832),f=i(4834),e=i(25245),p=i(92181),l=i(85899),u=i(90508),x=i(2638),_=i(84847),c=i(24999),g=i(53251),r=i(17455),T=i(21244),A=i(44466),Q=i(74107),b=i(77531),O=i(9828),E=i(87238),y=i(57261),w=i(69837),Y=i(17237),N=i(35486),C=i(15861),t=i(5e3),M=i(5830),L=i(29205),U=i(69808),P=i(49364),D=i(11656),V=i(1743),B=i(64421),S=i(30745),F=i(40809);function W(s,a){if(1&s&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",19),t._uU(3),t.qZA(),t.qZA()),2&s){const o=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==o.setup.Chain?null:o.setup.Chain.Description)}}function K(s,a){1&s&&t._UZ(0,"app-progress")}function j(s,a){if(1&s&&(t.TgZ(0,"blockcore-block",26),t._UZ(1,"mat-icon",27),t.TgZ(2,"div",28),t.TgZ(3,"div",29),t.TgZ(4,"span"),t._uU(5,"Transaction Id: "),t.qZA(),t.TgZ(6,"span",30),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&s){const o=t.oxw(2);t.xp6(1),t.Q6J("svgIcon","heroicons_outline:document-text"),t.xp6(6),t.Oqu(o.transaction.transactionId)}}const I=function(s,a){return["../../contract-address",s,a]};function R(s,a){if(1&s&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",37),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"From Address: "),t.qZA(),t.TgZ(5,"span",38),t.TgZ(6,"a",39),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&s){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.WLB(3,I,o.transaction.newContractAddress,o.transaction.fromAddress)),t.xp6(1),t.Oqu(o.transaction.fromAddress)}}function z(s,a){if(1&s&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",37),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"From Address: "),t.qZA(),t.TgZ(5,"span",38),t.TgZ(6,"a",39),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&s){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.WLB(3,I,o.transaction.toAddress,o.transaction.fromAddress)),t.xp6(1),t.Oqu(o.transaction.fromAddress)}}const J=function(s){return["../../contract-address",s]};function H(s,a){if(1&s&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",37),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Contract Addresss: "),t.qZA(),t.TgZ(5,"span",38),t.TgZ(6,"a",39),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&s){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.VKq(3,J,o.transaction.toAddress)),t.xp6(1),t.Oqu(o.transaction.toAddress)}}function X(s,a){if(1&s&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",37),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"New Contract Address: "),t.qZA(),t.TgZ(5,"span",38),t.TgZ(6,"a",39),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&s){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.VKq(3,J,o.transaction.newContractAddress)),t.xp6(1),t.Oqu(o.transaction.newContractAddress)}}function G(s,a){if(1&s&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",37),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Error: "),t.qZA(),t.TgZ(5,"span",38),t._uU(6),t.qZA(),t.qZA(),t.qZA()),2&s){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(o.transaction.error)}}const $=function(s){return["../../block",s]},tt=function(s){return["../../","transaction",s]};function nt(s,a){if(1&s&&(t.TgZ(0,"blockcore-block",31),t.TgZ(1,"div",32),t.TgZ(2,"div",33),t._uU(3,"Smart Contract Transaction Details"),t.qZA(),t.TgZ(4,"div",34),t.TgZ(5,"p",35),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",36),t.TgZ(8,"div",18),t._UZ(9,"mat-icon",37),t.TgZ(10,"div",14),t.TgZ(11,"span"),t._uU(12,"Contract Type: "),t.qZA(),t.TgZ(13,"span",38),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",18),t._UZ(16,"mat-icon",37),t.TgZ(17,"div",14),t.TgZ(18,"span"),t._uU(19,"Method Name: "),t.qZA(),t.TgZ(20,"span",38),t._uU(21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",18),t._UZ(23,"mat-icon",37),t.TgZ(24,"div",14),t.TgZ(25,"span"),t._uU(26,"Block: "),t.qZA(),t.TgZ(27,"span",38),t.TgZ(28,"a",39),t._uU(29),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",18),t._UZ(31,"mat-icon",37),t.TgZ(32,"div",14),t.TgZ(33,"span"),t._uU(34,"Status: "),t.qZA(),t.TgZ(35,"span",38),t._uU(36),t.ALo(37,"success"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",18),t._UZ(39,"mat-icon",37),t.TgZ(40,"div",14),t.TgZ(41,"span"),t._uU(42,"Gas Used: "),t.qZA(),t.TgZ(43,"span",38),t._uU(44),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"div",18),t._UZ(46,"mat-icon",37),t.TgZ(47,"div",14),t.TgZ(48,"span"),t._uU(49,"Gas Price: "),t.qZA(),t.TgZ(50,"span",38),t._uU(51),t.qZA(),t.qZA(),t.qZA(),t.TgZ(52,"div",18),t._UZ(53,"mat-icon",37),t.TgZ(54,"div",14),t.TgZ(55,"span"),t._uU(56,"Amount: "),t.qZA(),t.TgZ(57,"span",38),t._uU(58),t.ALo(59,"amount"),t.qZA(),t.qZA(),t.qZA(),t.YNc(60,R,8,6,"div",9),t.YNc(61,z,8,6,"div",9),t.YNc(62,H,8,5,"div",9),t.YNc(63,X,8,5,"div",9),t.TgZ(64,"div",18),t._UZ(65,"mat-icon",37),t.TgZ(66,"div",14),t.TgZ(67,"span"),t._uU(68,"View Transaction: "),t.qZA(),t.TgZ(69,"span",38),t.TgZ(70,"a",39),t._uU(71),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(72,G,7,2,"div",9),t.qZA(),t.qZA(),t.qZA()),2&s){const o=t.oxw(2);t.xp6(6),t.hij("Transaction Id: ",o.transaction.transactionId,""),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(o.transaction.contractCodeType),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(o.transaction.methodName),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.VKq(28,$,o.transaction.blockIndex)),t.xp6(1),t.Oqu(o.transaction.blockIndex),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(37,24,o.transaction.success)),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(o.transaction.gasUsed),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(o.transaction.gasPrice),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(59,26,o.transaction.amount)),t.xp6(2),t.Q6J("ngIf",o.transaction.newContractAddress),t.xp6(1),t.Q6J("ngIf",o.transaction.toAddress),t.xp6(1),t.Q6J("ngIf",o.transaction.toAddress),t.xp6(1),t.Q6J("ngIf",o.transaction.newContractAddress),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.VKq(30,tt,o.transaction.transactionId)),t.xp6(1),t.Oqu(o.transaction.transactionId),t.xp6(1),t.Q6J("ngIf",o.transaction.error)}}function ot(s,a){if(1&s&&(t.TgZ(0,"div",41),t.TgZ(1,"textarea",42),t._uU(2),t.ALo(3,"json"),t.qZA(),t.qZA()),2&s){const o=t.oxw(3);t.xp6(2),t.hij("                                ",t.lcZ(3,1,o.transaction.logs),"\n                            ")}}function st(s,a){if(1&s&&(t.TgZ(0,"div"),t.TgZ(1,"blockcore-block",26),t._UZ(2,"mat-icon",27),t.TgZ(3,"div",28),t.TgZ(4,"div",29),t.TgZ(5,"span"),t._uU(6,"Transaction Logs: "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(7,ot,4,3,"div",40),t.qZA()),2&s){const o=t.oxw(2);t.xp6(2),t.Q6J("svgIcon","heroicons_outline:clipboard-list"),t.xp6(5),t.Q6J("ngIf",o.transaction.logs)}}function it(s,a){if(1&s&&(t.TgZ(0,"div",20),t.TgZ(1,"div",21),t._UZ(2,"app-search"),t.YNc(3,K,1,0,"app-progress",22),t.YNc(4,j,8,2,"blockcore-block",23),t._UZ(5,"app-error",24),t.YNc(6,nt,73,32,"blockcore-block",25),t.YNc(7,st,8,2,"div",22),t.qZA(),t.qZA()),2&s){const o=t.oxw();t.xp6(3),t.Q6J("ngIf",!o.transaction),t.xp6(1),t.Q6J("ngIf",o.transaction),t.xp6(1),t.Q6J("error",o.error),t.xp6(1),t.Q6J("ngIf",o.transaction),t.xp6(1),t.Q6J("ngIf",o.transaction)}}const ct=[{path:"",component:(()=>{class s{constructor(o,d,et,lt){var h=this;this.api=o,this.router=d,this.setup=et,this.activatedRoute=lt,this.hostClass=!0,this.detailsVisible=!1,this.activatedRoute.paramMap.subscribe(function(){var dt=(0,C.Z)(function*(k){const Zt=k.get("transaction");try{h.transaction=yield h.api.getContractTransaction(Zt),h.error=null}catch(gt){h.error=gt}});return function(k){return dt.apply(this,arguments)}}())}ngOnInit(){return(0,C.Z)(function*(){})()}toggleDetails(){this.detailsVisible=!this.detailsVisible}ngOnDestroy(){}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(M.s),t.Y36(Z.F0),t.Y36(L.U),t.Y36(Z.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-contract-transaction-component"]],hostVars:2,hostBindings:function(o,d){2&o&&t.ekj("content-centered-top",d.hostClass)},decls:21,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],["class","flex flex-col flex-auto w-full",4,"ngIf"],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"flex","flex-col","flex-auto","w-full"],[1,"w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[4,"ngIf"],["class","flex items-center w-full p-6 filter-info ",4,"ngIf"],[3,"error"],["class","flex flex-col lg:flex-row w-full",4,"ngIf"],[1,"flex","items-center","w-full","p-6","filter-info"],[1,"icon-size-16","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","break-all"],[1,"text-primary"],[1,"flex","flex-col","lg:flex-row","w-full"],[1,"p-6","sm:p-8","lg:p-10"],[1,"text-3xl","font-bold"],[1,"mt-2","leading-relaxed","text-secondary"],[1,"break-all"],[1,"grid","grid-cols-1","lg:grid-cols-1","gap-y-4","mt-6"],[1,"icon-size-5","text-primary",3,"svgIcon"],[1,"text-primary","break-all"],[3,"routerLink"],["class","prose max-w-full",4,"ngIf"],[1,"prose","max-w-full"],["blockcore-highlight","","lang","json"]],template:function(o,d){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,W,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.YNc(20,it,8,5,"div",17),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.s9C("src",null==d.setup.Chain?null:d.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==d.setup.Chain?null:d.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==d.setup.Chain?null:d.setup.Chain.Description),t.xp6(2),t.s9C("href",null==d.setup.Chain?null:d.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(5),t.Q6J("ngIf",d.setup.chains))},directives:[U.O5,e.Hw,n.lW,P.g,D.t,V.q,Z.yS,B.b],pipes:[S.h,F.C,U.Ts],encapsulation:2}),s})()}];var rt=i(62499);let at=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[Z.Bz.forChild(ct),n.ot,v.vV,f.t,e.Ps,p.Tx,l.Cv,u.si,x.SJ,_.JX,c.p0,g.Nh,T.X,r.y4,A.m,Q.LD,b.c,O.d,E.AV,y.ZX,w.t,Y.q,N.T,rt.Wl]]}),s})()},40809:(q,m,i)=>{i.d(m,{C:()=>v,N:()=>f});var Z=i(5e3),n=i(29205);let v=(()=>{class e{constructor(l){this.setup=l}transform(l){return this.setup.transformFormat(l)}}return e.\u0275fac=function(l){return new(l||e)(Z.Y36(n.U,16))},e.\u0275pipe=Z.Yjl({name:"amount",type:e,pure:!1}),e})(),f=(()=>{class e{constructor(l){this.setup=l}transform(l){const u=this.setup.transformFormat(l);if(u.indexOf(".")>-1){const x=u.split(".");return`${x[0]}.<span class="decimals">${x[1]}</span>`}return u}}return e.\u0275fac=function(l){return new(l||e)(Z.Y36(n.U,16))},e.\u0275pipe=Z.Yjl({name:"amountHtml",type:e,pure:!1}),e})()}}]);