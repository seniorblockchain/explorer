"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[178],{1178:(A,h,e)=>{e.r(h),e.d(h,{BlocksModule:()=>q});var g=e(4521),a=e(7423),C=e(9832),y=e(4834),v=e(5245),Z=e(2181),B=e(5899),x=e(508),k=e(2638),_=e(4847),I=e(4999),m=e(3251),b=e(8608),s=e(7e3),i=e(4466),p=e(4107),r=e(7531),T=e(9828),U=e(7238),J=e(7261),D=e(9837),P=e(7237),L=e(5486),f=e(5861),Q=e(8938),t=e(5e3),H=e(5830),N=e(9205),E=e(9808),w=e(2419),W=e(9364),K=e(1656);function Y(l,c){if(1&l&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",21),t._uU(3),t.qZA()()),2&l){const o=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==o.setup.Chain?null:o.setup.Chain.Description)}}function F(l,c){if(1&l){const o=t.EpF();t.TgZ(0,"div",24)(1,"div",25)(2,"div",26),t._UZ(3,"mat-icon",27),t.TgZ(4,"div",28)(5,"div",29)(6,"span"),t._uU(7,"Latest blocks: "),t.qZA(),t.TgZ(8,"span",30),t._uU(9),t.qZA()()()(),t.TgZ(10,"div",31)(11,"button",32),t.NdJ("click",function(){t.CHM(o);const u=t.oxw(2);return t.KtG(u.exportCSV())}),t._UZ(12,"mat-icon",13),t.TgZ(13,"span",14),t._uU(14,"Export CSV"),t.qZA()()()()()}if(2&l){const o=t.oxw(2);t.xp6(3),t.Q6J("svgIcon","heroicons_outline:cube"),t.xp6(6),t.Oqu(o.total),t.xp6(2),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:document-download")}}function R(l,c){1&l&&t._UZ(0,"app-progress")}const j=function(l){return["../block",l]};function z(l,c){if(1&l&&(t.TgZ(0,"blockcore-block",35),t._UZ(1,"mat-icon",36),t.TgZ(2,"div",37)(3,"div",38)(4,"a",39),t._uU(5),t.qZA()(),t.TgZ(6,"div",40),t._uU(7),t.ALo(8,"date"),t.qZA()(),t.TgZ(9,"div",41)(10,"div",42),t.ynx(11),t.TgZ(12,"div",43)(13,"div",44),t._uU(14,"Transaction Count:"),t.qZA(),t.TgZ(15,"div",45),t._uU(16),t.qZA()(),t.BQk(),t.qZA()(),t._UZ(17,"div",46),t.qZA()),2&l){const o=c.$implicit;t.xp6(1),t.MGl("matTooltip","size: ",(o.blockSize/1024).toFixed(2),""),t.Q6J("svgIcon","heroicons_outline:cube"),t.xp6(3),t.Q6J("routerLink",t.VKq(10,j,o.blockIndex)),t.xp6(1),t.Oqu(o.blockIndex),t.xp6(2),t.Oqu(t.xi3(8,7,1e3*o.blockTime,"dd/MM/yyyy hh:mm")),t.xp6(8),t.MGl("matTooltip","Transaction Count: ",o.transactionCount,""),t.xp6(1),t.hij(" ",o.transactionCount,"")}}function V(l,c){1&l&&t._UZ(0,"app-progress")}function G(l,c){if(1&l){const o=t.EpF();t.TgZ(0,"div")(1,"div",33),t.NdJ("onScroll",function(u){t.CHM(o);const d=t.oxw(2);return t.KtG(d.onScroll(u))}),t.YNc(2,z,18,12,"blockcore-block",34),t.YNc(3,V,1,0,"app-progress",23),t.qZA()()}if(2&l){const o=t.oxw(2);t.xp6(1),t.Q6J("bottomOffset",400)("topOffset",400),t.xp6(1),t.Q6J("ngForOf",o.blocks),t.xp6(1),t.Q6J("ngIf",o.loading)}}function X(l,c){if(1&l&&(t._UZ(0,"app-search"),t.YNc(1,F,15,4,"div",22),t.YNc(2,R,1,0,"app-progress",23),t.YNc(3,G,4,4,"div",23)),2&l){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.total),t.xp6(1),t.Q6J("ngIf",!o.blocks),t.xp6(1),t.Q6J("ngIf",o.blocks)}}const $=[{path:"",component:(()=>{class l{constructor(o,n){this.api=o,this.setup=n,this.hostClass=!0,this.blocks=null,this.count=0,this.maxCount=2,this.limit=20,this.loading=!1}scrollHandler(o){}ngOnInit(){var o=this;return(0,f.Z)(function*(){o.subscription=o.setup.currentChain$.subscribe(function(){var n=(0,f.Z)(function*(u){yield o.updateBlocks("/api/query/block?offset=&limit="+o.limit)});return function(u){return n.apply(this,arguments)}}())})()}ngOnDestroy(){clearTimeout(this.timerInfo),clearTimeout(this.timerBlocks),this.subscription.unsubscribe()}updateBlocks(o){var n=this;return(0,f.Z)(function*(){if(!o)return;const u=n.api.baseUrl.replace("/api",""),d=yield n.api.request(u+o);n.total=d.headers.get("Pagination-Total");const tt=d.headers.get("Link"),ot=n.api.parseLinkHeader(tt);n.link=ot.previous;const S=yield d.json();S.sort((M,O)=>O.blockIndex===M.blockIndex?0:O.blockIndex<M.blockIndex?-1:O.blockIndex>M.blockIndex?1:void 0),n.blocks||(n.blocks=[]),n.blocks=[...n.blocks,...S],n.count++})()}exportCSV(){var o=this;return(0,f.Z)(function*(){new Q.Sv(o.blocks,"blocks",{fieldSeparator:",",quoteStrings:'"',decimalseparator:".",showLabels:!0,showTitle:!0,title:"Blocks",useBom:!0,headers:["blockHash","blockIndex","blockSize","blockTime","nextBlockHash","previousBlockHash","syncComplete","transactionCount","confirmations","bits","difficulty","chainWork","merkleroot","nonce","version","posBlockSignature","posModifierv2","posFlags","posHashProof","posBlockTrust","posChainTrust"],useHeader:!1,nullToEmptyString:!0})})()}onScroll(o){var n=this;return(0,f.Z)(function*(){o.isReachingBottom&&(n.loading=!0,setTimeout((0,f.Z)(function*(){yield n.updateBlocks(n.link),n.loading=!1})))})()}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(H.s),t.Y36(N.U))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-blocks-component"]],hostVars:2,hostBindings:function(o,n){1&o&&t.NdJ("scroll",function(d){return n.scrollHandler(d)}),2&o&&t.ekj("content-centered-top",n.hostClass)},decls:23,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank","target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],["label","Blocks"],["matTabContent",""],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],["class","sm:col-span-2 md:col-span-4 lg:col-span-2 flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden mb-8",4,"ngIf"],[4,"ngIf"],[1,"sm:col-span-2","md:col-span-4","lg:col-span-2","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","mb-8"],[1,"flex","flex-col","sm:flex-row","items-start","justify-between"],[1,"flex","text-lg","font-medium","tracking-tight","leading-6","truncate","align-middle"],[1,"icon-size-22","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col","mt-8"],[1,"text-2xl","font-semibold","leading-tight","break-all"],[1,"text-primary"],[1,"mt-3","sm:mt-0","sm:ml-2"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color","click"],["appDetectScroll","",3,"bottomOffset","topOffset","onScroll"],["class","flex items-center w-full p-6 filter-info justify-between",4,"ngFor","ngForOf"],[1,"flex","items-center","w-full","p-6","filter-info","justify-between"],[1,"icon-size-12","mr-6",3,"svgIcon","matTooltip"],[1,"flex","flex-col","w-full"],[1,"text-2xl","font-semibold","leading-tight","text-primary"],[3,"routerLink"],[1,"text-md","text-secondary"],[1,"flex","flex-col"],[1,"text-1xl","font-semibold","leading-tight"],[1,"font-semibold","tracking-tight","leading-7","md:leading-snug","truncate","inline-flex","mat-flat-button"],[1,"hidden","md:block","mr-3"],[1,"inline-flex","text-primary",3,"matTooltip"],[1,"flex"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,Y,4,2,"div",9),t.qZA()(),t.TgZ(12,"div",10)(13,"a",11)(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA()()()()()()(),t.TgZ(18,"div",15)(19,"div",16)(20,"mat-tab-group",17)(21,"mat-tab",18),t.YNc(22,X,4,3,"ng-template",19),t.qZA()()()()()),2&o&&(t.xp6(6),t.s9C("src",null==n.setup.Chain?null:n.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==n.setup.Chain?null:n.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==n.setup.Chain?null:n.setup.Chain.Description),t.xp6(2),t.s9C("href",null==n.setup.Chain?null:n.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(5),t.Q6J("animationDuration","0"))},dependencies:[g.yS,a.lW,v.Hw,m.SP,m.uX,m.Vc,E.sg,E.O5,w.f,U.gM,W.g,K.t,E.uU],encapsulation:2}),l})()}];let q=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.Bz.forChild($),a.ot,C.vV,y.t,v.Ps,Z.Tx,B.Cv,x.si,k.SJ,_.JX,I.p0,m.Nh,s.X,b.y4,i.m,p.LD,r.c,T.d,U.AV,J.ZX,D.t,P.q,L.T]}),l})()},9364:(A,h,e)=>{e.d(h,{g:()=>I});var g=e(5861),a=e(5e3),C=e(5830),y=e(9205),v=e(4521),Z=e(7261),B=e(5245),x=e(3075),k=e(7322),_=e(7531);let I=(()=>{class m{constructor(s,i,p,r){this.api=s,this.setup=i,this.router=p,this._snackBar=r,this.scheme=JSON.parse(localStorage.getItem("config")).scheme}ngOnDestroy(){}ngOnInit(){return(0,g.Z)(function*(){})()}inputType(s){return s.startsWith(this.setup.Network.NetworkWitnessPrefix)?"address":s.length<20?"index":s.length>30&&s.length<54?"address":"hash"}search(){var s=this;return(0,g.Z)(function*(){const i=s.searchTerm;switch(s.inputType(i)){case"index":{const r=parseInt(i,10);NaN!==r&&r>0?s.router.navigate([s.setup.current,"explorer","block",r]):s._snackBar.open("Explorer cannot detect your data type","retry",{duration:3e3,panelClass:[s.scheme]});break}case"address":s.router.navigate([s.setup.current,"explorer","address",i]);break;case"hash":{let r=null;try{r=yield s.api.getBlockByHash(i)}catch(T){}if(r)s.router.navigate([s.setup.current,"explorer","block",r.blockHash]);else{const T=yield s.api.getTransaction(i);s.router.navigate([s.setup.current,"explorer","transaction",T.transactionId])}break}default:s._snackBar.open("Explorer cannot detect your data type","retry",{duration:3e3,panelClass:[s.scheme]})}})()}}return m.\u0275fac=function(s){return new(s||m)(a.Y36(C.s),a.Y36(y.U),a.Y36(v.F0),a.Y36(Z.ux))},m.\u0275cmp=a.Xpm({type:m,selectors:[["app-search"]],decls:8,vars:3,consts:[[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["type","search","placeholder","Search for address, transaction or block.","autocomplete","off","matInput","",3,"ngModel","keyup.enter","ngModelChange"],["query",""]],template:function(s,i){1&s&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-form-field",4),a._UZ(5,"mat-icon",5),a.TgZ(6,"input",6,7),a.NdJ("keyup.enter",function(){return i.search()})("ngModelChange",function(r){return i.searchTerm=r}),a.qZA()()()()()()),2&s&&(a.xp6(4),a.Q6J("floatLabel","always"),a.xp6(1),a.Q6J("svgIcon","heroicons_solid:search"),a.xp6(1),a.Q6J("ngModel",i.searchTerm))},dependencies:[B.Hw,x.Fj,x.JJ,x.On,k.KE,k.qo,_.Nt],encapsulation:2}),m})()}}]);