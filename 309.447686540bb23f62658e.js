"use strict";(self.webpackChunkcountries_comparison=self.webpackChunkcountries_comparison||[]).push([[309],{3309:(y,l,e)=>{e.r(l),e.d(l,{AuthModule:()=>J});var u=e(8583),p=e(8493),i=e(3423),f=e(27),t=e(3679),o=e(7716),d=e(3227),s=e(8295),g=e(9983),h=e(1095);function Z(r,m){1&r&&(o.TgZ(0,"mat-error"),o._uU(1,"eror email"),o.qZA())}function A(r,m){1&r&&(o.TgZ(0,"mat-error"),o._uU(1," req. email "),o.qZA())}function v(r,m){1&r&&(o.TgZ(0,"mat-error"),o._uU(1," six. char "),o.qZA())}function T(r,m){1&r&&(o.TgZ(0,"mat-error"),o._uU(1," req. pass "),o.qZA())}const L=[{path:f._.empty,component:(()=>{class r{constructor(n,a){this.authService=n,this.router=a,this.form=new t.cw({email:new t.NI("",[t.kI.required,t.kI.pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$")]),password:new t.NI("",[t.kI.required,t.kI.minLength(3)])})}onLogin(){this.authService.login(this.form.controls.email.value,this.form.controls.password.value).subscribe(c=>{c&&this.router.navigate(["/home"])})}}return r.\u0275fac=function(n){return new(n||r)(o.Y36(d.e8),o.Y36(i.F0))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-login"]],decls:18,vars:6,consts:[[1,"login","container","col-md-4","text-center"],[1,"d-flex","col-md-12","flex-column",3,"formGroup"],["appearance","fill"],["matInput","","placeholder","pat@example.com","formControlName","email","required",""],[4,"ngIf"],["matInput","","formControlName","password","required","","type","password"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(n,a){1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"h2"),o._uU(2,"Login"),o.qZA(),o.TgZ(3,"form",1),o.TgZ(4,"mat-form-field",2),o.TgZ(5,"mat-label"),o._uU(6,"email"),o.qZA(),o._UZ(7,"input",3),o.YNc(8,Z,2,0,"mat-error",4),o.YNc(9,A,2,0,"mat-error",4),o.qZA(),o.TgZ(10,"mat-form-field",2),o.TgZ(11,"mat-label"),o._uU(12,"Password"),o.qZA(),o._UZ(13,"input",5),o.YNc(14,v,2,0,"mat-error",4),o.YNc(15,T,2,0,"mat-error",4),o.qZA(),o.qZA(),o.TgZ(16,"button",6),o.NdJ("click",function(){return a.onLogin()}),o._uU(17," login "),o.qZA(),o.qZA()),2&n&&(o.xp6(3),o.Q6J("formGroup",a.form),o.xp6(5),o.Q6J("ngIf",a.form.controls.email.hasError("pattern")),o.xp6(1),o.Q6J("ngIf",a.form.controls.email.hasError("required")),o.xp6(5),o.Q6J("ngIf",a.form.controls.password.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",a.form.controls.password.hasError("required")),o.xp6(1),o.Q6J("disabled",!a.form.valid))},directives:[t._Y,t.JL,t.sg,s.KE,s.hX,g.Nt,t.Fj,t.JJ,t.u,t.Q7,u.O5,h.lW,s.TO],styles:[""],changeDetection:0}),r})()}];let I=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[i.Bz.forChild(L)],i.Bz]}),r})(),J=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[u.ez,p.m,I]]}),r})()}}]);