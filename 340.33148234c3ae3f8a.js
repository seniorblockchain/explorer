"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[340],{1743:(E,Z,o)=>{o.d(Z,{q:()=>m});var g=o(5830),n=o(5e3),T=o(9808),h=o(5245);function f(i,l){if(1&i&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&i){const s=n.oxw(2);n.xp6(1),n.Oqu(s.details)}}function _(i,l){if(1&i&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&i){const s=n.oxw(3);n.xp6(1),n.Oqu(s.details)}}function v(i,l){if(1&i&&(n.TgZ(0,"div",16),n._uU(1),n.qZA()),2&i){const s=n.oxw(3);n.xp6(1),n.Oqu(s.stack)}}function A(i,l){if(1&i&&(n.TgZ(0,"div",13),n.YNc(1,_,2,1,"div",9),n.YNc(2,v,2,1,"div",14),n._UZ(3,"br"),n.TgZ(4,"span",15),n._uU(5," Message: "),n.qZA(),n.TgZ(6,"div"),n._uU(7),n.qZA(),n.qZA()),2&i){const s=n.oxw(2);n.xp6(1),n.Q6J("ngIf",s.details),n.xp6(1),n.Q6J("ngIf",s.stack),n.xp6(5),n.Oqu(s.message)}}function C(i,l){if(1&i){const s=n.EpF();n.TgZ(0,"div",1),n.TgZ(1,"div",2),n._UZ(2,"mat-icon",3),n.qZA(),n.TgZ(3,"div",4),n.TgZ(4,"div",5),n.TgZ(5,"div",6),n._uU(6," Something went wrong! "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"div",7),n.TgZ(8,"div",5),n.TgZ(9,"div",8),n.YNc(10,f,2,1,"div",9),n._UZ(11,"br"),n._UZ(12,"br"),n.TgZ(13,"span",10),n.NdJ("click",function(){n.CHM(s);const c=n.oxw();return c.detailsVisible=!c.detailsVisible}),n._UZ(14,"mat-icon",11),n.qZA(),n.qZA(),n.YNc(15,A,8,3,"div",12),n.qZA(),n.qZA(),n.qZA()}if(2&i){const s=n.oxw();n.xp6(2),n.Q6J("svgIcon","heroicons_outline:exclamation-circle"),n.xp6(8),n.Q6J("ngIf",s.details),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:information-circle"),n.xp6(1),n.Q6J("ngIf",s.detailsVisible)}}let m=(()=>{class i{constructor(){this.detailsVisible=!1}ngOnChanges(s){!this.error||(this.error instanceof g.o?404===this.error.code?(this.message="Not found (404)",this.details=this.error.url,this.stack=this.error.stack.toString()):(this.message=this.error.message+" ("+this.error.code+")",this.details=this.error.url,this.stack=this.error.stack.toString()):this.error instanceof Error?(this.message="Error occured: "+this.error.message,this.stack=this.error.stack.toString()):this.message=this.error)}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-error"]],inputs:{error:"error"},features:[n.TTD],decls:1,vars:1,consts:[["class","relative flex flex-col flex-auto p-6 pr-3 pb-3 bg-card rounded-2xl shadow overflow-hidden",4,"ngIf"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"icon-size-24","opacity-25","text-red-500","dark:text-red-400",3,"svgIcon"],[1,"flex","items-center"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate","break-all","negative"],[1,"flex","items-center","mt-8"],[1,"font-medium","break-all"],[4,"ngIf"],["title","Show error details",1,"clickable",3,"click"],["matPrefix","",1,"icon-size-10","text-red-500",3,"svgIcon"],["class","error-details mt-8",4,"ngIf"],[1,"error-details","mt-8"],["class","error-details-stack",4,"ngIf"],[1,"text-red-500"],[1,"error-details-stack"]],template:function(s,r){1&s&&n.YNc(0,C,16,4,"div",0),2&s&&n.Q6J("ngIf",r.error)},directives:[T.O5,h.Hw],encapsulation:2}),i})()},4340:(E,Z,o)=>{o.r(Z),o.d(Z,{ContractTransactionModule:()=>ot});var g=o(4521),n=o(7423),T=o(9832),h=o(4834),f=o(5245),_=o(2181),v=o(5899),A=o(508),C=o(2638),m=o(4847),i=o(4999),l=o(3251),s=o(7455),r=o(1244),c=o(4466),x=o(4107),p=o(7531),q=o(9828),J=o(7238),b=o(7261),P=o(9837),N=o(7237),Q=o(5486),O=o(5861),t=o(5e3),w=o(5830),L=o(9205),I=o(9808),B=o(9364),Y=o(1656),S=o(1743),k=o(745);function K(e,d){if(1&e&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",19),t._uU(3),t.qZA(),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==a.setup.Chain?null:a.setup.Chain.Description)}}function W(e,d){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",29),t.TgZ(2,"div"),t.TgZ(3,"span",30),t._UZ(4,"i",31),t.qZA(),t.TgZ(5,"span",32),t._uU(6),t.qZA(),t.TgZ(7,"span",33),t._UZ(8,"div",34),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const a=t.oxw(2);t.xp6(6),t.Oqu(a.transaction.transactionId)}}function R(e,d){1&e&&t._UZ(0,"app-progress",35)}function V(e,d){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"span"),t._uU(2,"Method Name"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA()),2&e){const a=t.oxw(3);t.xp6(4),t.Oqu(a.transaction.methodName)}}const y=function(e){return["../../contract-address",e]};function F(e,d){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"span"),t._uU(2,"To Address"),t.qZA(),t.TgZ(3,"span"),t.TgZ(4,"a",37),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&e){const a=t.oxw(3);t.xp6(4),t.Q6J("routerLink",t.VKq(2,y,a.transaction.toAddress)),t.xp6(1),t.Oqu(a.transaction.toAddress)}}function H(e,d){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"span"),t._uU(2,"New Contract Address"),t.qZA(),t.TgZ(3,"span"),t.TgZ(4,"a",37),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&e){const a=t.oxw(3);t.xp6(4),t.Q6J("routerLink",t.VKq(2,y,a.transaction.newContractAddress)),t.xp6(1),t.Oqu(a.transaction.newContractAddress)}}function j(e,d){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"span"),t._uU(2,"Error"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA()),2&e){const a=t.oxw(3);t.xp6(4),t.Oqu(a.transaction.error)}}const z=function(e){return["../../block",e]},X=function(e){return["../../","transaction",e]};function G(e,d){if(1&e&&(t.TgZ(0,"div",36),t.TgZ(1,"div"),t.TgZ(2,"span"),t._uU(3,"Contract Type"),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,V,5,1,"div",23),t.TgZ(7,"div"),t.TgZ(8,"span"),t._uU(9,"Block"),t.qZA(),t.TgZ(10,"span"),t.TgZ(11,"a",37),t._uU(12),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div"),t.TgZ(14,"span"),t._uU(15,"Status"),t.qZA(),t.TgZ(16,"span"),t._uU(17),t.ALo(18,"success"),t.qZA(),t.qZA(),t.TgZ(19,"div"),t.TgZ(20,"span"),t._uU(21,"Gas Used"),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.qZA(),t.qZA(),t.TgZ(24,"div"),t.TgZ(25,"span"),t._uU(26,"From Address"),t.qZA(),t.TgZ(27,"span"),t._uU(28),t.qZA(),t.qZA(),t.YNc(29,F,6,4,"div",23),t.YNc(30,H,6,4,"div",23),t.TgZ(31,"div"),t.TgZ(32,"span"),t._uU(33,"View Transaction"),t.qZA(),t.TgZ(34,"span"),t.TgZ(35,"a",37),t._uU(36),t.ALo(37,"slice"),t.qZA(),t.qZA(),t.qZA(),t.YNc(38,j,5,1,"div",23),t.qZA()),2&e){const a=t.oxw(2);t.xp6(5),t.Oqu(a.transaction.contractCodeType),t.xp6(1),t.Q6J("ngIf",a.transaction.methodName),t.xp6(5),t.Q6J("routerLink",t.VKq(18,z,a.transaction.blockIndex)),t.xp6(1),t.Oqu(a.transaction.blockIndex),t.xp6(5),t.Oqu(t.lcZ(18,12,a.transaction.success)),t.xp6(6),t.Oqu(a.transaction.gasUsed),t.xp6(5),t.Oqu(a.transaction.fromAddress),t.xp6(1),t.Q6J("ngIf",a.transaction.toAddress),t.xp6(1),t.Q6J("ngIf",a.transaction.newContractAddress),t.xp6(5),t.Q6J("routerLink",t.VKq(20,X,a.transaction.transactionId)),t.xp6(1),t.Oqu(t.Dn7(37,14,a.transaction.transactionId,0,20)),t.xp6(2),t.Q6J("ngIf",a.transaction.error)}}function $(e,d){if(1&e&&(t.TgZ(0,"div",38),t.TgZ(1,"h3"),t._uU(2,"Logs"),t.qZA(),t.TgZ(3,"span"),t.TgZ(4,"pre",39),t._uU(5),t.ALo(6,"json"),t.qZA(),t.qZA(),t.qZA()),2&e){const a=t.oxw(2);t.xp6(5),t.Oqu(t.lcZ(6,1,a.transaction.logs))}}function tt(e,d){if(1&e&&(t.TgZ(0,"div",20),t.TgZ(1,"div",21),t._UZ(2,"app-search"),t.TgZ(3,"div",22),t.YNc(4,W,9,1,"div",23),t.qZA(),t.TgZ(5,"div",22),t.TgZ(6,"h3"),t._UZ(7,"i",24),t._uU(8,"\xa0\xa0Smart Contract Transaction Details"),t.qZA(),t.YNc(9,R,1,0,"app-progress",25),t._UZ(10,"app-error",26),t.YNc(11,G,39,22,"div",27),t.qZA(),t.YNc(12,$,7,3,"div",28),t.qZA(),t.qZA()),2&e){const a=t.oxw();t.xp6(4),t.Q6J("ngIf",a.transaction),t.xp6(5),t.Q6J("ngIf",!a.transaction),t.xp6(1),t.Q6J("error",a.error),t.xp6(1),t.Q6J("ngIf",a.transaction),t.xp6(1),t.Q6J("ngIf",a.transaction.logs)}}const nt=[{path:"",component:(()=>{class e{constructor(a,u,et,at){var U=this;this.api=a,this.router=u,this.setup=et,this.activatedRoute=at,this.hostClass=!0,this.detailsVisible=!1,this.activatedRoute.paramMap.subscribe(function(){var rt=(0,O.Z)(function*(M){const D=M.get("transaction");console.log("Transaction ID:",D);try{U.transaction=yield U.api.getContractTransaction(D),U.error=null}catch(st){U.error=st}console.log(U.transaction)});return function(M){return rt.apply(this,arguments)}}())}ngOnInit(){return(0,O.Z)(function*(){})()}toggleDetails(){this.detailsVisible=!this.detailsVisible}ngOnDestroy(){}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(w.s),t.Y36(g.F0),t.Y36(L.U),t.Y36(g.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contract-transaction-component"]],hostVars:2,hostBindings:function(a,u){2&a&&t.ekj("content-centered-top",u.hostClass)},decls:21,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],["class","flex flex-col flex-auto w-full",4,"ngIf"],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"flex","flex-col","flex-auto","w-full"],[1,"w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"box"],[4,"ngIf"],[1,"fas","fa-receipt"],["class","centered",4,"ngIf"],[1,"centered",3,"error"],["class","grid-label-value",4,"ngIf"],["class","box left",4,"ngIf"],[1,"grid-hash"],[1,"grid-hash-left"],[1,"fas","fa-hashtag"],[1,"grid-hash-middle","breakable"],[1,"grid-hash-right"],[1,"grid-double"],[1,"centered"],[1,"grid-label-value"],[3,"routerLink"],[1,"box","left"],[2,"max-width","1270px","overflow","auto"]],template:function(a,u){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,K,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.YNc(20,tt,13,5,"div",17),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(6),t.s9C("src",null==u.setup.Chain?null:u.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==u.setup.Chain?null:u.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==u.setup.Chain?null:u.setup.Chain.Description),t.xp6(2),t.s9C("href",null==u.setup.Chain?null:u.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(5),t.Q6J("ngIf",u.setup.chains))},directives:[I.O5,f.Hw,n.lW,B.g,Y.t,S.q,g.yS],pipes:[k.h,I.OU,I.Ts],encapsulation:2}),e})()}];let ot=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(nt),n.ot,T.vV,h.t,f.Ps,_.Tx,v.Cv,A.si,C.SJ,m.JX,i.p0,l.Nh,r.X,s.y4,c.m,x.LD,p.c,q.d,J.AV,b.ZX,P.t,N.q,Q.T]]}),e})()},9364:(E,Z,o)=>{o.d(Z,{g:()=>i});var g=o(5861),n=o(5e3),T=o(5830),h=o(9205),f=o(4521),_=o(7261),v=o(7322),A=o(5245),C=o(7531),m=o(3075);let i=(()=>{class l{constructor(r,c,x,p){this.api=r,this.setup=c,this.router=x,this._snackBar=p,this.scheme=JSON.parse(localStorage.getItem("config")).scheme}ngOnDestroy(){}ngOnInit(){return(0,g.Z)(function*(){})()}inputType(r){return r.startsWith(this.setup.Network.NetworkWitnessPrefix)?"address":r.length<20?"index":r.length>30&&r.length<54?"address":"hash"}search(){var r=this;return(0,g.Z)(function*(){const c=r.searchTerm;switch(r.inputType(c)){case"index":{const p=parseInt(c,10);NaN!==p&&p>0?r.router.navigate([r.setup.current,"explorer","block",p]):r._snackBar.open("Explorer cannot detect your data type","retry",{duration:3e3,panelClass:[r.scheme]});break}case"address":r.router.navigate([r.setup.current,"explorer","address",c]);break;case"hash":{let p=null;try{p=yield r.api.getBlockByHash(c)}catch(q){}if(p)r.router.navigate([r.setup.current,"explorer","block",p.blockHash]);else{const q=yield r.api.getTransaction(c);r.router.navigate([r.setup.current,"explorer","transaction",q.transactionId])}break}default:r._snackBar.open("Explorer cannot detect your data type","retry",{duration:3e3,panelClass:[r.scheme]})}})()}}return l.\u0275fac=function(r){return new(r||l)(n.Y36(T.s),n.Y36(h.U),n.Y36(f.F0),n.Y36(_.ux))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-search"]],decls:8,vars:3,consts:[[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["type","search","placeholder","Search for address, transaction or block.","autocomplete","off","matInput","",3,"ngModel","keyup.enter","ngModelChange"],["query",""]],template:function(r,c){1&r&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"mat-form-field",4),n._UZ(5,"mat-icon",5),n.TgZ(6,"input",6,7),n.NdJ("keyup.enter",function(){return c.search()})("ngModelChange",function(p){return c.searchTerm=p}),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&r&&(n.xp6(4),n.Q6J("floatLabel","always"),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:search"),n.xp6(1),n.Q6J("ngModel",c.searchTerm))},directives:[v.KE,A.Hw,v.qo,C.Nt,m.Fj,m.JJ,m.On],encapsulation:2}),l})()}}]);