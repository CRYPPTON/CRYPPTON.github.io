"use strict";
(self.webpackChunkcountries_comparison =
  self.webpackChunkcountries_comparison || []).push([
  [891],
  {
    179: (C, l, n) => {
      n.r(l), n.d(l, { HomeModule: () => M });
      var s = n(8583),
        c = n(4655),
        a = n(27),
        t = n(7716),
        d = n(3222),
        m = n(4929);
      function u(o, i) {
        if (1 & o) {
          const e = t.EpF();
          t.TgZ(0, "mat-grid-tile", 4),
            t.NdJ("click", function () {
              const f = t.CHM(e).$implicit;
              return t.oxw().onOpenModule(f.name);
            }),
            t.TgZ(1, "div"),
            t._uU(2),
            t.qZA(),
            t.qZA();
        }
        if (2 & o) {
          const e = i.$implicit;
          t.xp6(2), t.Oqu(e.name);
        }
      }
      const g = [
        {
          path: a._.empty,
          component: (() => {
            class o {
              constructor(e, r) {
                (this.appModuleService = e), (this.router = r);
              }
              get appModules() {
                return this.appModuleService.appModules;
              }
              onOpenModule(e) {
                this.router.navigateByUrl(`/${e}`);
              }
            }
            return (
              (o.ɵfac = function (e) {
                return new (e || o)(t.Y36(d.KG), t.Y36(c.F0));
              }),
              (o.ɵcmp = t.Xpm({
                type: o,
                selectors: [["app-home"]],
                decls: 6,
                vars: 1,
                consts: [
                  [1, "container"],
                  [1, "app-details"],
                  ["cols", "2", "rowHeight", "2:1"],
                  [3, "click", 4, "ngFor", "ngForOf"],
                  [3, "click"],
                ],
                template: function (e, r) {
                  1 & e &&
                    (t.TgZ(0, "div", 0),
                    t.TgZ(1, "div", 1),
                    t.TgZ(2, "h1"),
                    t._uU(3, "About App"),
                    t.qZA(),
                    t.qZA(),
                    t.TgZ(4, "mat-grid-list", 2),
                    t.YNc(5, u, 3, 1, "mat-grid-tile", 3),
                    t.qZA(),
                    t.qZA()),
                    2 & e && (t.xp6(5), t.Q6J("ngForOf", r.appModules));
                },
                directives: [m.Il, s.sg, m.DX],
                styles: [
                  "mat-grid-tile[_ngcontent-%COMP%]{background:lightblue}mat-grid-tile[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%]{position:relative;text-align:center;height:80%;overflow-y:scroll}.app-details[_ngcontent-%COMP%]{width:100%;height:30%;background:#c7c7df;padding:0 12px}",
                ],
              })),
              o
            );
          })(),
        },
      ];
      let h = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [[c.Bz.forChild(g)], c.Bz] })),
          o
        );
      })();
      var v = n(3773);
      let M = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [[s.ez, h, v.m]] })),
          o
        );
      })();
    },
  },
]);
