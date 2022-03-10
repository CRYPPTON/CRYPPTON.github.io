"use strict";
(self.webpackChunkcountries_comparison =
  self.webpackChunkcountries_comparison || []).push([
  [49],
  {
    7049: (d, m, e) => {
      e.r(m), e.d(m, { EconomyModule: () => y });
      var s = e(8583),
        u = e(4655),
        r = e(27),
        n = e(7716);
      const l = [
        {
          path: r._.empty,
          component: (() => {
            class o {
              constructor() {}
            }
            return (
              (o.ɵfac = function (t) {
                return new (t || o)();
              }),
              (o.ɵcmp = n.Xpm({
                type: o,
                selectors: [["app-economy-page"]],
                decls: 2,
                vars: 0,
                template: function (t, i) {
                  1 & t &&
                    (n.TgZ(0, "p"), n._uU(1, "economy-page works!"), n.qZA());
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
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵmod = n.oAB({ type: o })),
            (o.ɵinj = n.cJS({ imports: [[u.Bz.forChild(l)], u.Bz] })),
            o
          );
        })(),
        y = (() => {
          class o {}
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵmod = n.oAB({ type: o })),
            (o.ɵinj = n.cJS({ imports: [[s.ez, p]] })),
            o
          );
        })();
    },
  },
]);
