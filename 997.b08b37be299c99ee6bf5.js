"use strict";(self.webpackChunkcountries_comparison=self.webpackChunkcountries_comparison||[]).push([[997],{5997:(V,v,o)=>{o.r(v),o.d(v,{CountryModule:()=>X});var c=o(8583),u=o(3423),D=o(27),S=o(5321),d=o(8049),t=o(7716),h=o(3227),C=o(1095),Z=o(1215),b=o(7154),x=o(6709);function T(e,a){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&e){const n=a.$implicit,i=t.oxw();t.xp6(1),t.AsE(" ",n," : ",t.lcZ(2,2,i.countryData[n])," ")}}let A=(()=>{class e{constructor(n,i,s){this.route=n,this.httpCountryService=i,this.countryStore=s,this.data=[{value:10,name:"magyar"},{value:5,name:"bosnian"},{value:5,name:"croats"},{value:80,name:"serb"}],this.columns=["name","value"],this.title={title:"<country>",subtext:"% population"},this.geoJsonUrl="assets/geo-json/countries.geojson",this.mapType=S.z.countryMap,this.handleTitle=r=>{this.title.title=r.state},this.handleData=r=>{r&&(this.countryData=r[0],this.countryDataKey=Object.keys(this.countryData))}}ngOnInit(){this.initPathParam(),this.initCountryData()}initPathParam(){this.route.params.pipe((0,d.P)()).subscribe(this.handleTitle)}initCountryData(){this.countryStore.allCountriesData.value?this.countryStore.getCountryByName(this.title.title).subscribe(this.handleData):this.httpCountryService.getCountryDataByName(this.title.title).pipe((0,d.P)()).subscribe(this.handleData)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.gz),t.Y36(h.wm),t.Y36(h.vQ))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-single-country-details"]],decls:9,vars:10,consts:[["routerLink","..","mat-raised-button","","color","primary"],[3,"geoJsonUrl","mapName","mapType"],[3,"data","title"],[3,"columns","data","pageSize"],[1,"container"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.TgZ(0,"button",0),t._uU(1,"Back"),t.qZA(),t.TgZ(2,"h1"),t._uU(3),t.qZA(),t._UZ(4,"app-echart-geo-map",1),t._UZ(5,"app-basic-echarts",2),t._UZ(6,"app-table",3),t.TgZ(7,"div",4),t.YNc(8,T,3,4,"div",5),t.qZA()),2&n&&(t.xp6(3),t.hij("",i.title.title," details"),t.xp6(1),t.Q6J("geoJsonUrl",i.geoJsonUrl)("mapName",i.title.title)("mapType",i.mapType),t.xp6(1),t.Q6J("data",i.data)("title",i.title),t.xp6(1),t.Q6J("columns",i.columns)("data",i.data)("pageSize",2),t.xp6(2),t.Q6J("ngForOf",i.countryDataKey))},directives:[C.lW,u.rH,Z.o,b.r,x.a,c.sg],pipes:[c.Ts],styles:[""],changeDetection:0}),e})();var m=(()=>{return(e=m||(m={})).europe="Europe",e.africa="Africa",e.oceania="Oceania",e.northAmerica="North America",e.southAmerica="South America",e.asia="Asia",m;var e})(),F=o(4402),M=o(5257),U=o(8002),p=o(171),l=o(3679),O=o(6215),J=o(9765),N=o(6782),I=o(4395),g=o(8295),P=o(6627),j=o(9983),f=o(4929);function Q(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){return t.CHM(n),t.oxw().onClearSearch()}),t.TgZ(1,"mat-icon",10),t._uU(2,"clear"),t.qZA(),t.qZA()}}function L(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-grid-tile"),t.TgZ(1,"div",13),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw(2).onNavigateToCountry(r.name.common)}),t.TgZ(2,"span",14),t._uU(3),t.qZA(),t._uU(4),t.qZA(),t.qZA()}if(2&e){const n=a.$implicit;t.xp6(3),t.Oqu(n.name.common),t.xp6(1),t.hij(" ",n.flag," ")}}function $(e,a){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"mat-grid-list",11),t.YNc(2,L,5,2,"mat-grid-tile",12),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.Q6J("ngForOf",n)}}let Y=(()=>{class e{constructor(n,i,s){this.router=n,this.route=i,this.countryModuleStoreService=s,this.countriesData$=new O.X([]),this.unsubscribe$=new J.xQ,this.handleContinentData=r=>{this.addContinentToStore(r),this.localDataStorForFilter=r,this.countriesData$.next(r)},this.handleContinentFromStore=r=>{let y=r[this.selectedContinentIndex];this.localDataStorForFilter=y,this.countriesData$.next(y)},this.filterCountry=r=>{r=r.toLocaleLowerCase().trim();const R=this.localDataStorForFilter.filter(K=>K.name.common.toLocaleLowerCase().trim().includes(r));this.countriesData$.next(R)}}ngOnInit(){this.countryModuleStoreService.continentsData.value.length===Object.entries(m).length?this.countryModuleStoreService.continentsData.subscribe(this.handleContinentFromStore):this.continentData[Object.keys(this.continentData)[0]].subscribe(this.handleContinentData),this.initQuerySearchForm()}ngOnDestroy(){this.unsubscribe()}onNavigateToCountry(n){this.router.navigate([n],{relativeTo:this.route})}onClearSearch(){var n;null===(n=this.querySearchForm.get("query"))||void 0===n||n.setValue("")}initQuerySearchForm(){var n;this.querySearchForm=new l.cw({query:new l.NI("")}),null===(n=this.querySearchForm.get("query"))||void 0===n||n.valueChanges.pipe((0,N.R)(this.unsubscribe$),(0,I.b)(250)).subscribe(this.filterCountry)}addContinentToStore(n){this.countryModuleStoreService.continentsData.value[this.selectedContinentIndex]=n,this.countryModuleStoreService.continentsData.next(this.countryModuleStoreService.continentsData.value)}unsubscribe(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.F0),t.Y36(u.gz),t.Y36(h.vQ))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-countries-dashboard"]],inputs:{selectedContinentIndex:"selectedContinentIndex",continentData:"continentData"},decls:12,vars:5,consts:[[1,"container"],["fxLayout","row","fxLayoutAlign"," center",1,"filter-and-sort-container"],[1,"table-filter"],[3,"formGroup"],["matPrefix","","fontSet","fal","fontIcon","fa-search"],["formControlName","query","matInput","","type","text","autocomplete","off"],["querySearch",""],["class","d-inline","mat-button","","matSuffix","","mat-icon-button","",3,"click",4,"ngIf"],[4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","",1,"d-inline",3,"click"],["aria-hidden","false"],["cols","4","rowHeight","2:1"],[4,"ngFor","ngForOf"],[1,"country-item",3,"click"],[1,"country-title"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"mat-form-field",3),t.TgZ(4,"mat-label"),t._uU(5,"Find country"),t.qZA(),t._UZ(6,"mat-icon",4),t._UZ(7,"input",5,6),t.YNc(9,Q,3,0,"button",7),t.qZA(),t.qZA(),t.YNc(10,$,3,1,"div",8),t.ALo(11,"async"),t.qZA(),t.qZA()),2&n){const s=t.MAs(8);t.xp6(3),t.Q6J("formGroup",i.querySearchForm),t.xp6(6),t.Q6J("ngIf",s.value),t.xp6(1),t.Q6J("ngIf",t.lcZ(11,3,i.countriesData$))}},directives:[g.KE,l.JL,l.sg,g.hX,P.Hw,g.qo,l.Fj,j.Nt,l.JJ,l.u,c.O5,C.lW,g.R9,f.Il,c.sg,f.DX],pipes:[c.Ov],styles:[".container[_ngcontent-%COMP%]{height:500px;overflow-y:auto}.dashboard-img[_ngcontent-%COMP%]{height:50px}.country-item[_ngcontent-%COMP%]{cursor:pointer}.country-title[_ngcontent-%COMP%]{margin-right:4px}"],changeDetection:0}),e})();function B(e,a){if(1&e&&(t.TgZ(0,"mat-expansion-panel"),t.TgZ(1,"mat-expansion-panel-header"),t.TgZ(2,"mat-panel-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-panel-description"),t._uU(5),t.qZA(),t.qZA(),t._UZ(6,"app-countries-dashboard",2),t.qZA()),2&e){const n=a.$implicit,i=a.index,s=t.oxw();t.xp6(3),t.hij(" ",n," Countries "),t.xp6(2),t.hij(" Expand ",n," countries list "),t.xp6(1),t.Q6J("selectedContinentIndex",i)("continentData",s.continentData[i])}}const E=[{path:D._.empty,component:(()=>{class e{constructor(n,i){this.httpContinentService=n,this.countryModuleStoreService=i,this.countries=[],this.continentData=[],this.handleCountriesData=s=>{s.forEach(r=>{this.countries.push(r.name.common)}),this.countryModuleStoreService.allCountriesData.next(s)},this.handleContinent=s=>{this.continentData=s},this.handleContinentData=s=>{this.continentData.push(s)}}ngOnInit(){this.continents=this.initContinentsEnumValue(),this.countryModuleStoreService.allCountriesData.value||this.getAllCountriesData(),Object.keys(this.countryModuleStoreService.continentsData.value).length?this.countryModuleStoreService.continentsData.pipe((0,d.P)()).subscribe(this.handleContinent):this.getCountriesByContinentName()}initContinentsEnumValue(){return Object.entries(m).filter(n=>!parseInt(n[0])).map(n=>n[1].toLocaleLowerCase())}getCountriesByContinentName(){(0,F.D)(this.continents).pipe((0,M.q)(this.continents.length),(0,U.U)(n=>({[n]:this.httpContinentService.getCountriesByContinentName(n)}))).subscribe(this.handleContinentData)}getAllCountriesData(){this.httpContinentService.getCountriesData().pipe((0,d.P)()).subscribe(this.handleCountriesData)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.wm),t.Y36(h.vQ))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-country-page"]],decls:7,vars:1,consts:[["routerLink","..","mat-raised-button","","color","primary"],[4,"ngFor","ngForOf"],[3,"selectedContinentIndex","continentData"]],template:function(n,i){1&n&&(t.TgZ(0,"button",0),t._uU(1,"Back"),t.qZA(),t._UZ(2,"br"),t.TgZ(3,"h3"),t._uU(4,"Search Country Details by Continent"),t.qZA(),t.TgZ(5,"mat-accordion"),t.YNc(6,B,7,4,"mat-expansion-panel",1),t.qZA()),2&n&&(t.xp6(6),t.Q6J("ngForOf",i.continents))},directives:[C.lW,u.rH,p.pp,c.sg,p.ib,p.yz,p.yK,p.u4,Y],styles:[""],changeDetection:0}),e})()},{path:":state",component:A}];let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(E)],u.Bz]}),e})();var H=o(8493);let X=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,q,H.m]]}),e})()}}]);