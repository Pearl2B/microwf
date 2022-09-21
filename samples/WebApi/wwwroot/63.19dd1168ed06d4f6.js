"use strict";(self.webpackChunkwebclient=self.webpackChunkwebclient||[]).push([[63],{7063:(w,f,n)=>{n.r(f),n.d(f,{HolidayModule:()=>P});var c=n(6895),r=n(5699),m=n(9116),v=n(5202),l=n(337),T=n(709),p=n(655),h=n(5570),e=n(5062),O=n(7165);let g=(()=>{class i{constructor(t){this._http=t}myWork(){return this._http.get("holiday/mywork")}get(t){return this._http.get(`holiday/${t}`)}create(){return this._http.post("holiday/new",null)}apply(t){return this._http.post("holiday/apply",t)}approve(t){return this._http.post("holiday/approve",t)}reject(t){return this._http.post("holiday/reject",t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(O.O))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),y=(()=>{class i{constructor(){this.key=i.KEY,this.type=l.AF,this.title="Apply for holidays",this.editors=[{key:"from",type:l.jv,label:"From",required:!0},{key:"to",type:l.jv,label:"To",required:!0},{key:"message",type:l.P8,label:"Message"}]}}return i.KEY="apply_holidaydetailslot",i})(),A=(()=>{class i{constructor(){this.key=i.KEY,this.type=l.AF,this.title="Approve Holiday",this.editors=[{key:"id",type:l.md,label:"Id",required:!0},{key:"message",type:l.P8,label:"Message",required:!1}]}}return i.KEY="approve_holidaydetailslot",i})();var M=n(8613),H=n(5108),C=n(1803);const D=["formDef"];function S(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"tw-trigger-info",4),e.NdJ("trigger",function(a){e.CHM(t);const $=e.oxw();return e.KtG($.triggerClicked(a))}),e.qZA()}if(2&i){const t=e.oxw(),s=e.MAs(4);e.Q6J("canTrigger",s.formIsValid)("triggerInfo",t.triggerInfo)}}function I(i,o){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&i){const t=o.$implicit;e.xp6(2),e.Oqu(t.author),e.xp6(2),e.Oqu(t.message)}}function L(i,o){if(1&i&&(e.TgZ(0,"div",6)(1,"h5"),e.SDv(2,7),e.qZA(),e.TgZ(3,"table")(4,"thead")(5,"tr")(6,"th"),e.SDv(7,8),e.qZA(),e.TgZ(8,"th"),e.SDv(9,9),e.qZA()()(),e.TgZ(10,"tbody"),e.YNc(11,I,5,2,"tr",10),e.qZA()()()),2&i){const t=e.oxw(2);e.xp6(11),e.Q6J("ngForOf",t.entity.messages)}}function Z(i,o){if(1&i&&(e.TgZ(0,"div")(1,"p")(2,"b"),e._uU(3),e.qZA(),e._uU(4," applied for holiday between "),e.TgZ(5,"b"),e._uU(6),e.ALo(7,"date"),e.qZA(),e._uU(8," and "),e.TgZ(9,"b"),e._uU(10),e.ALo(11,"date"),e.qZA(),e._uU(12,". "),e.qZA(),e.YNc(13,L,12,1,"div",5),e.qZA()),2&i){const t=e.oxw();e.xp6(3),e.Oqu(t.entity.requester),e.xp6(3),e.Oqu(e.lcZ(7,4,t.entity.from)),e.xp6(4),e.Oqu(e.lcZ(11,6,t.entity.to)),e.xp6(3),e.Q6J("ngIf",t.entity.messages&&t.entity.messages.length>0)}}let _=class{constructor(o,t,s,a){this._route=o,this._router=t,this._user=s,this._service=a,this.key=y.KEY,this.canTrigger=!1}ngOnInit(){this._routeParams$=this._route.params.subscribe(o=>{o.id&&this.init(o.id)})}submitted(o){console.log(o)}triggerClicked(o){"apply"===o&&this._service.apply(this.formDef.formValue).subscribe(t=>{this.checkResponse(t)}),"approve"===o&&this._service.approve(this.formDef.formValue).subscribe(t=>{this.checkResponse(t)}),"reject"===o&&this._service.reject(this.formDef.formValue).subscribe(t=>{this.checkResponse(t)})}init(o){"new"!==o?this.load(o.toString()):this.create()}load(o){this._holiday$=this._service.get(o).subscribe(t=>{this.key=A.KEY,this.viewModel=t.viewModel,this.triggerInfo=t.triggerInfo,this.entity=t.entity})}create(){this._holiday$=this._service.create().subscribe(o=>{this.viewModel=o.viewModel,this.triggerInfo=o.triggerInfo,this.entity=o.entity})}checkResponse(o){this._router.navigate(o.triggerInfo.succeeded&&o.viewModel.assignee!==this._user.userName?["dispatch",o.viewModel.assignee,"holiday"]:["holiday"])}};_.\u0275fac=function(o){return new(o||_)(e.Y36(r.gz),e.Y36(r.F0),e.Y36(M.K),e.Y36(g))},_.\u0275cmp=e.Xpm({type:_,selectors:[["tw-holiday"]],viewQuery:function(o,t){if(1&o&&e.Gf(D,5),2&o){let s;e.iGM(s=e.CRH())&&(t.formDef=s.first)}},features:[e._Bn([g])],decls:6,vars:4,consts:function(){let i,o,t;return i=$localize`:␟ea965d544a7dfd8185064c52cdfff553cf94d585␟6452372740127749380:Messages`,o=$localize`:␟d7293b61e9088c66421df2e367e0ccc00346cf9f␟7071470734400948493:Author`,t=$localize`:␟ccac601bf473fa28c9ac46794f1cd40542f74347␟8066608938393600549:Message`,[[3,"canTrigger","triggerInfo","trigger",4,"ngIf"],[3,"key","viewModel","submitted"],["formDef",""],[4,"ngIf"],[3,"canTrigger","triggerInfo","trigger"],["class","table-responsive-md",4,"ngIf"],[1,"table-responsive-md"],i,o,t,[4,"ngFor","ngForOf"]]},template:function(o,t){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,S,1,2,"tw-trigger-info",0),e.qZA(),e.TgZ(2,"div")(3,"tw-formdef",1,2),e.NdJ("submitted",function(a){return t.submitted(a)}),e.qZA()(),e.YNc(5,Z,14,8,"div",3)),2&o){const s=e.MAs(4);e.xp6(1),e.Q6J("ngIf",s),e.xp6(2),e.Q6J("key",t.key)("viewModel",t.viewModel),e.xp6(2),e.Q6J("ngIf",t.entity&&t.entity.id)}},dependencies:[c.sg,c.O5,H.w,C.S,c.uU],encapsulation:2}),_=(0,p.gn)([h.k],_);var N=n(5370),u=n(453);const E=function(i){return["detail",i]};function b(i,o){if(1&i&&(e.TgZ(0,"div",11)(1,"div",12)(2,"p")(3,"b"),e.SDv(4,13),e.qZA(),e.TgZ(5,"span"),e._uU(6),e.qZA()(),e.TgZ(7,"div",14)(8,"p")(9,"b"),e.SDv(10,15),e.qZA(),e._uU(11),e.ALo(12,"date"),e.TgZ(13,"span",16)(14,"b"),e.SDv(15,17),e.qZA(),e._uU(16),e.ALo(17,"date"),e.qZA()()()()()),2&i){const t=o.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(8,E,null==t?null:t.id)),e.xp6(5),e.hij(" ",null==t?null:t.requester,""),e.xp6(5),e.hij(" ",e.lcZ(12,4,null==t?null:t.from)," "),e.xp6(5),e.hij(" ",e.lcZ(17,6,null==t?null:t.to),"")}}const R=function(){return["detail/new"]};let d=class{constructor(o,t){this._router=o,this._service=t,this.workspace="pane"}ngOnInit(){this.myWork$=this._service.myWork()}create(){this._router.navigate(["./detail/new"])}reload(){this.ngOnInit()}};d.\u0275fac=function(o){return new(o||d)(e.Y36(r.F0),e.Y36(g))},d.\u0275cmp=e.Xpm({type:d,selectors:[["tw-holiday-dashboard"]],hostVars:2,hostBindings:function(o,t){2&o&&e.Tol(t.workspace)},features:[e._Bn([g])],decls:15,vars:5,consts:function(){let i,o,t,s;return i=$localize`:␟c38c5590e97411d14a64f2fcee9a1bff7abe0eb3␟9223174834682042610:Holidays`,o=$localize`:␟a050bc4332d7d1982af99c603fc37a70235bb75f␟1754642683981981592:Requester:`,t=$localize`:␟e02703feac6e3e5b095e50c8e537093ac0cb7100␟5487630018331375668:From:`,s=$localize`:␟e2c8f8048544457d662b2ac145da670de270ec95␟5752829569732845992:To:`,[[1,"pane__left"],[3,"rows"],["list",""],i,[1,"button__bar"],[1,"button",3,"routerLink"],["name","plus"],["type","button",3,"click"],["name","refresh"],["twTemplate","holiday-item"],[1,"pane__main"],[1,"list__item"],["routerLinkActive","active",3,"routerLink"],o,[1,"list__itemDetail"],t,[1,"list_item--right"],s]},template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"tw-list",1,2),e.ALo(3,"async"),e.TgZ(4,"tw-header")(5,"h3"),e.SDv(6,3),e.qZA(),e.TgZ(7,"div",4)(8,"a",5),e._UZ(9,"tw-icon",6),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return t.reload()}),e._UZ(11,"tw-icon",8),e.qZA()()(),e.YNc(12,b,18,10,"ng-template",9),e.qZA()(),e.TgZ(13,"div",10),e._UZ(14,"router-outlet"),e.qZA()),2&o&&(e.xp6(1),e.Q6J("rows",e.lcZ(3,2,t.myWork$)),e.xp6(7),e.Q6J("routerLink",e.DdM(4,R)))},dependencies:[r.lC,r.rH,r.yS,r.Od,N.o,u.ns,u.Gt,u.VC,c.Ov,c.uU],encapsulation:2}),d=(0,p.gn)([h.k],d);const Y=[{path:"",component:d,children:[{path:"detail/:id",component:_},{path:"detail/new",component:_}]}];let P=(()=>{class i{constructor(t){this._slotRegistry=t,this._slotRegistry.register(new y),this._slotRegistry.register(new A)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(l.FR))},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[g],imports:[c.ez,r.Bz.forChild(Y),l.eO,T.L,m.Q,v.p,r.Bz]}),i})()}}]);