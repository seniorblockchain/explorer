"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[114],{65114:(G,u,i)=>{i.r(u),i.d(u,{ChainAPIModule:()=>L});var f=i(99826),v=i(47423),x=i(69832),C=i(4834),m=i(25245),Z=i(92181),A=i(85899),_=i(90508),I=i(2638),T=i(84847),U=i(24999),y=i(53251),b=i(12666),P=i(42115),J=i(44466),c=i(15861),M=i(77579),n=i(5e3),N=i(29205),O=i(5830),d=i(69808),p=i(93075),h=i(67322),g=i(77531);function Q(t,l){if(1&t&&(n.TgZ(0,"div",18),n._UZ(1,"mat-icon",13),n.TgZ(2,"div",19),n._uU(3),n.qZA()()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("svgIcon","heroicons_solid:badge-check"),n.xp6(2),n.Oqu(null==e.setup.Chain?null:e.setup.Chain.Description)}}function S(t,l){if(1&t&&(n.TgZ(0,"a",36)(1,"button",37),n._uU(2),n.qZA()()),2&t){const e=n.oxw(2);n.Q6J("href",e.docUrl,n.LSH),n.xp6(2),n.hij(" ",e.docUrl," ")}}function k(t,l){if(1&t&&(n.TgZ(0,"div")(1,"span",38),n._uU(2,"Error: "),n.qZA(),n.TgZ(3,"span",39),n._uU(4),n.qZA(),n._UZ(5,"br")(6,"br"),n._uU(7),n.ALo(8,"json"),n.qZA()),2&t){const e=n.oxw(2);n.xp6(4),n.Oqu(e.errorMessage.title),n.xp6(3),n.hij(" ",n.lcZ(8,2,e.errorMessage.errors)," ")}}function w(t,l){1&t&&(n.TgZ(0,"span",44),n._UZ(1,"div",49),n.qZA())}function Y(t,l){1&t&&(n.TgZ(0,"span",44),n._UZ(1,"div",50),n.qZA())}function D(t,l){if(1&t){const e=n.EpF();n.TgZ(0,"div",46)(1,"a",47),n.NdJ("click",function(s){const a=n.CHM(e).$implicit,j=n.oxw(4);return n.KtG(j.savedomain(s,a))}),n.TgZ(2,"button",12),n.YNc(3,w,2,0,"span",48),n.YNc(4,Y,2,0,"span",48),n.TgZ(5,"span",14),n._uU(6),n.qZA()()()()}if(2&t){const e=l.$implicit;n.xp6(2),n.Q6J("color","primary"),n.xp6(1),n.Q6J("ngIf",!0===e.online),n.xp6(1),n.Q6J("ngIf",!0!==e.online),n.xp6(2),n.Oqu(e.domain)}}function F(t,l){if(1&t&&(n.TgZ(0,"div",43)(1,"span",44)(2,"strong"),n._uU(3),n.qZA()(),n.YNc(4,D,7,4,"div",45),n.qZA()),2&t){const e=l.$implicit;n.xp6(3),n.Oqu(e.Source),n.xp6(1),n.Q6J("ngForOf",e)}}function E(t,l){1&t&&(n.TgZ(0,"app-progress",51),n._uU(1,"Loading more domains..."),n.qZA())}function H(t,l){if(1&t){const e=n.EpF();n.TgZ(0,"div")(1,"h4"),n._uU(2,"Discovered Indexers"),n.qZA(),n.TgZ(3,"div",40),n.NdJ("onScroll",function(s){n.CHM(e);const r=n.oxw(2);return n.KtG(r.onScroll(s))}),n.YNc(4,F,5,2,"div",41),n.YNc(5,E,2,0,"app-progress",42),n.qZA()()}if(2&t){const e=n.oxw(2);n.xp6(3),n.Q6J("bottomOffset",400)("topOffset",400),n.xp6(1),n.Q6J("ngForOf",e.endpoints),n.xp6(1),n.Q6J("ngIf",e.loading)}}function B(t,l){if(1&t){const e=n.EpF();n.TgZ(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",18)(4,"div",23)(5,"div",24),n._uU(6,"API "),n.qZA()()(),n.TgZ(7,"div",25)(8,"div",23)(9,"p"),n._uU(10," This block explorer relies on the API exposed by a blockchain indexer. "),n.qZA(),n.TgZ(11,"p"),n._uU(12," If you'd like to call this API directly, you can read the documentation for here: "),n.qZA()()(),n.TgZ(13,"div",26),n.YNc(14,S,3,2,"a",27),n.qZA(),n.TgZ(15,"div",28)(16,"div",23)(17,"div",24),n._uU(18,"Configure API "),n.qZA()()(),n.TgZ(19,"div",25)(20,"div",23)(21,"p"),n._uU(22," For better privacy or in case the default api is offline you can specify a different api url for the indexer. "),n._UZ(23,"Br"),n._uU(24," Or alternatively discover an indexer from the list of supported blockcore DNS servers. "),n.qZA()()(),n.TgZ(25,"mat-form-field",29),n._UZ(26,"mat-icon",30),n.TgZ(27,"input",31,32),n.NdJ("keyup.enter",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.save())})("ngModelChange",function(s){n.CHM(e);const r=n.oxw();return n.KtG(r.inputUrl=s)}),n.qZA()(),n.TgZ(29,"div",26)(30,"a",33),n.NdJ("click",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.discover())}),n.TgZ(31,"button",34),n._uU(32," Discover "),n.qZA()(),n.TgZ(33,"a",33),n.NdJ("click",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.reset())}),n.TgZ(34,"button",34),n._uU(35," Reset "),n.qZA()(),n.TgZ(36,"a",33),n.NdJ("click",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.save())}),n.TgZ(37,"button",34),n._uU(38," Save "),n.qZA()()(),n.YNc(39,k,9,4,"div",35),n.YNc(40,H,6,4,"div",35),n.qZA()()()}if(2&t){const e=n.oxw();n.xp6(14),n.Q6J("ngIf",e.docUrl),n.xp6(11),n.Q6J("floatLabel","always"),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:database"),n.xp6(1),n.Q6J("ngModel",e.inputUrl),n.xp6(12),n.Q6J("ngIf",e.errorMessage),n.xp6(1),n.Q6J("ngIf",e.endpoints)}}const q=[{path:"",component:(()=>{class t{constructor(e,o,s,r){this.route=e,this.setup=o,this.api=s,this.cdr=r,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.chainAPILable="ChainAPI",this.chainAPI={},this._unsubscribeAll=new M.x,this.route.data.subscribe(a=>console.log("Data :",a)),this.load()}load(){var e=this;return(0,c.Z)(function*(){e.inputUrl=yield e.api.getBaseUrl(),e.docUrl=e.inputUrl===e.setup.Explorer.Indexer.ApiUrl?e.setup.Explorer.Indexer.DocUrl:e.inputUrl.replace("api","docs")})()}save(){var e=this;return(0,c.Z)(function*(){yield e.api.setBaseUrl(e.setup.current,e.inputUrl),yield e.load()})()}discover(){var e=this;return(0,c.Z)(function*(){null==e.dnsendpoints&&(e.dnsendpoints=yield e.api.download("https://chains.blockcore.net/services/BLOCKCORE-DNS.json")),e.endpoints=[];const o=e.setup.current;for(let s=0;s<e.dnsendpoints.length;s++){const r=e.dnsendpoints[s];try{const a=yield e.api.download(r["dns-server"]+"/api/dns/services/symbol/"+o.toUpperCase()+"/service/Indexer");a.Source=r["dns-server"],a.Source=a.Source.replace("https://",""),e.endpoints.push(a)}catch(a){e.errorMessage="{"===a.message[0]?JSON.parse(a.message):a,console.log(a)}}yield e.load(),e.cdr.detectChanges()})()}savedomain(e,o){var s=this;return(0,c.Z)(function*(){var r=o.domain;s.inputUrl=r="https://"+r+"/api",yield s.save()})()}reset(){var e=this;return(0,c.Z)(function*(){yield e.api.resetBaseUrl(e.setup.current),yield e.load(),e.cdr.detectChanges()})()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.gz),n.Y36(N.U),n.Y36(O.s),n.Y36(n.sBO))},t.\u0275cmp=n.Xpm({type:t,selectors:[["chainAPI"]],decls:21,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],["class","flex flex-col flex-auto w-full",4,"ngIf"],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"flex","flex-col","flex-auto","p-6","bg-card","rounded-2xl","shadow"],[1,"flex","flex-col"],[1,"mr-4","text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"my-8","space-y-8"],[1,"flex","items-center","mt-auto"],["class","link","target","_blank",3,"href",4,"ngIf"],[1,"flex","items-center","mt-10"],[1,"blockcore-mat-no-subscript","w-full",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","api endpoint.","autocomplete","off","matInput","",3,"ngModel","keyup.enter","ngModelChange"],["query",""],[1,"link",3,"click"],["mat-stroked-button","",1,"m-2"],[4,"ngIf"],["target","_blank",1,"link",3,"href"],["mat-stroked-button","",1,"mt-2"],[1,"muted"],[1,"negative"],["appDetectScroll","",1,"scrollable",3,"bottomOffset","topOffset","onScroll"],["class","grid-list-configure-api",4,"ngFor","ngForOf"],["class","centered",4,"ngIf"],[1,"grid-list-configure-api"],[1,""],["class","grid-list-configure-api-inner",4,"ngFor","ngForOf"],[1,"grid-list-configure-api-inner"],[3,"click"],["class","",4,"ngIf"],[1,"flex-0","w-2","h-2","rounded-full",2,"background-color","rgb(10, 247, 50)"],[1,"flex-0","w-2","h-2","rounded-full",2,"background-color","rgb(247, 10, 10)"],[1,"centered"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n._UZ(6,"img",6),n.qZA(),n.TgZ(7,"div",7),n.ynx(8),n.TgZ(9,"div",8),n._uU(10),n.qZA(),n.BQk(),n.YNc(11,Q,4,2,"div",9),n.qZA()(),n.TgZ(12,"div",10)(13,"a",11)(14,"button",12),n._UZ(15,"mat-icon",13),n.TgZ(16,"span",14),n._uU(17,"Website"),n.qZA()()()()()()(),n.TgZ(18,"div",15)(19,"div",16),n.YNc(20,B,41,6,"div",17),n.qZA()()()),2&e&&(n.xp6(6),n.s9C("src",null==o.setup.Chain?null:o.setup.Chain.Icon,n.LSH),n.xp6(4),n.hij(" ",null==o.setup.Chain?null:o.setup.Chain.Symbol," "),n.xp6(1),n.Q6J("ngIf",null==o.setup.Chain?null:o.setup.Chain.Description),n.xp6(2),n.s9C("href",null==o.setup.Chain?null:o.setup.Chain.Url,n.LSH),n.xp6(1),n.Q6J("color","primary"),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:chevron-double-right"),n.xp6(5),n.Q6J("ngIf",o.setup.chains))},dependencies:[v.lW,m.Hw,d.sg,d.O5,p.Fj,p.JJ,p.On,h.KE,h.qo,g.Nt,d.Ts],encapsulation:2,changeDetection:0}),t})()}];var K=i(57261);let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[f.Bz.forChild(q),v.ot,x.vV,C.t,m.Ps,Z.Tx,A.Cv,_.si,I.SJ,T.JX,U.p0,y.Nh,P.X,b.y4,J.m,g.c,K.ZX]}),t})()}}]);