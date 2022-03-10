"use strict";
(self.webpackChunkcountries_comparison =
  self.webpackChunkcountries_comparison || []).push([
  [148],
  {
    9148: (d, m, e) => {
      e.r(m), e.d(m, { ArmyModule: () => y });
      var s = e(8583),
        u = e(4655),
        a = e(27),
        t = e(7716);
      const l = [
        {
          path: a._.empty,
          component: (() => {
            class o {
              constructor() {}
            }
            return (
              (o.ɵfac = function (n) {
                return new (n || o)();
              }),
              (o.ɵcmp = t.Xpm({
                type: o,
                selectors: [["app-army-page"]],
                decls: 2,
                vars: 0,
                template: function (n, A) {
                  1 & n &&
                    (t.TgZ(0, "p"), t._uU(1, "army-page works!"), t.qZA());
                },
                styles: [""],
              })),
              o
            );
          })(),
        },
      ];
      let p = (() => {
          class o {}
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵmod = t.oAB({ type: o })),
            (o.ɵinj = t.cJS({ imports: [[u.Bz.forChild(l)], u.Bz] })),
            o
          );
        })(),
        y = (() => {
          class o {}
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵmod = t.oAB({ type: o })),
            (o.ɵinj = t.cJS({ imports: [[s.ez, p]] })),
            o
          );
        })();
    },
  },
]);
