"use strict";(self.webpackChunkcountries_comparison=self.webpackChunkcountries_comparison||[]).push([[989],{3989:(b,a,u)=>{u.r(a),u.d(a,{CustomCountryModule:()=>T});var i=u(8583),l=u(2305),p=u(27),c=u(5321),m=u(9765),t=u(7716),C=u(5193),d=u(1095),h=u(1215),g=u(7154);function y(o,s){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"json"),t._UZ(3,"app-basic-echarts",7),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.lnq(" ",e.selectedCountriesPopulationGroup1," vs ",e.selectedCountriesPopulationGroup2," ",t.lcZ(2,5,e.data)," "),t.xp6(2),t.Q6J("data",e.data)("title",e.title)}}const G=[{path:p._.empty,component:(()=>{class o{constructor(e){this.httpCountryService=e,this.eventsSubject$=new m.xQ,this.geoJsonUrl="assets/geo-json/countries2.json",this.mapName="world",this.mapType=c.z.worldMap,this.selectedCountriesGroup1=[],this.selectedCountriesPopulationGroup1=0,this.selectedCountriesGroup2=[],this.selectedCountriesPopulationGroup2=0,this.title={title:"Group1 vs Group2",subtext:"comparation"},this.data=[],this.isBlueGroup=!0}onSelectedCountry(e){this.isBlueGroup?this.selectedCountriesGroup1.push(e):this.selectedCountriesGroup2.push(e)}onCompare(){for(let e=0;e<this.selectedCountriesGroup1.length;e++)this.httpCountryService.getCountryDataByName(this.selectedCountriesGroup1[e]).subscribe(n=>{this.selectedCountriesPopulationGroup1+=n[0].population,e===this.selectedCountriesGroup1.length-1&&this.data.push({name:"blue group",value:this.selectedCountriesPopulationGroup1})});for(let e=0;e<this.selectedCountriesGroup2.length;e++)this.httpCountryService.getCountryDataByName(this.selectedCountriesGroup2[e]).subscribe(n=>{this.selectedCountriesPopulationGroup2+=n[0].population,e===this.selectedCountriesGroup2.length-1&&this.data.push({name:"red group",value:this.selectedCountriesPopulationGroup2})})}onReset(){this.selectedCountriesGroup1=[],this.selectedCountriesPopulationGroup1=0,this.selectedCountriesGroup2=[],this.selectedCountriesPopulationGroup2=0,this.eventsSubject$.next("reset")}setBlue(){this.isBlueGroup=!0}setRed(){this.isBlueGroup=!1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.wm))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-custom-country-page"]],decls:15,vars:7,consts:[["routerLink","..","mat-raised-button","","color","primary"],[1,"chart"],[3,"geoJsonUrl","mapName","mapType","colorInput","events","selectedCountry"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"],[4,"ngIf"],[3,"data","title"]],template:function(e,n){1&e&&(t.TgZ(0,"button",0),t._uU(1,"Back"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"app-echart-geo-map",2),t.NdJ("selectedCountry",function(Z){return n.onSelectedCountry(Z)}),t.qZA(),t.qZA(),t._uU(4),t.TgZ(5,"div"),t.TgZ(6,"button",3),t.NdJ("click",function(){return n.setBlue()}),t._uU(7,"group 1"),t.qZA(),t.TgZ(8,"button",4),t.NdJ("click",function(){return n.setRed()}),t._uU(9,"group 2"),t.qZA(),t.TgZ(10,"button",5),t.NdJ("click",function(){return n.onReset()}),t._uU(11,"Reset"),t.qZA(),t.qZA(),t.TgZ(12,"button",5),t.NdJ("click",function(){return n.onCompare()}),t._uU(13,"compare"),t.qZA(),t.YNc(14,y,4,7,"div",6)),2&e&&(t.xp6(3),t.Q6J("geoJsonUrl",n.geoJsonUrl)("mapName",n.mapName)("mapType",n.mapType)("colorInput",n.isBlueGroup?"blue":"red")("events",n.eventsSubject$.asObservable()),t.xp6(1),t.hij(" ",n.isBlueGroup,"\n"),t.xp6(10),t.Q6J("ngIf",n.selectedCountriesPopulationGroup2&&n.selectedCountriesPopulationGroup1))},directives:[d.lW,l.rH,h.o,i.O5,g.r],pipes:[i.Ts],styles:[".chart[_ngcontent-%COMP%]{height:50%}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(G)],l.Bz]}),o})();var P=u(9017);let T=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[i.ez,f,P.m]]}),o})()}}]);