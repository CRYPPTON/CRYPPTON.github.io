"use strict";
(self.webpackChunkcountries_comparison =
  self.webpackChunkcountries_comparison || []).push([
  [523],
  {
    4523: (Q, u, a) => {
      a.r(u), a.d(u, { DemographicsModule: () => J });
      var r = a(8583),
        l = a(4655),
        p = a(27),
        t = a(7716),
        m = a(3222),
        g = a(1095),
        h = a(8295),
        C = a(7441),
        d = a(2458),
        f = a(7154);
      const v = ["chart"];
      function y(o, i) {
        if ((1 & o && (t.TgZ(0, "mat-option", 6), t._uU(1), t.qZA()), 2 & o)) {
          const e = i.$implicit;
          t.Q6J("value", e.data),
            t.xp6(1),
            t.AsE(" ", e.viewValue, " ", e.data.icon, " ");
        }
      }
      function D(o, i) {
        if ((1 & o && (t.TgZ(0, "mat-option", 6), t._uU(1), t.qZA()), 2 & o)) {
          const e = i.$implicit;
          t.Q6J("value", e.data),
            t.xp6(1),
            t.AsE(" ", e.viewValue, " ", e.data.icon, " ");
        }
      }
      function T(o, i) {
        if (
          (1 & o &&
            (t.TgZ(0, "div"), t._UZ(1, "app-basic-echarts", 7, 8), t.qZA()),
          2 & o)
        ) {
          const e = t.oxw();
          t.xp6(1), t.Q6J("data", e.data)("title", e.title);
        }
      }
      function Z(o, i) {
        1 & o && (t.TgZ(0, "div"), t._uU(1, "Select countries"), t.qZA());
      }
      const P = [
        {
          path: p._.empty,
          component: (() => {
            class o {
              constructor(e, n) {
                (this.httpCountryService = e),
                  (this.countryModuleStoreService = n),
                  (this.countries = [
                    { data: { name: "", value: "", icon: "" }, viewValue: "" },
                  ]),
                  (this.options = {}),
                  (this.data = []),
                  (this.title = { title: "", subtext: "" });
              }
              ngOnInit() {
                this.countryModuleStoreService.allCountriesData
                  ? ((this.countriesData =
                      this.countryModuleStoreService.allCountriesData),
                    this.getCountriesList())
                  : this.httpCountryService
                      .getCountriesData()
                      .subscribe((e) => {
                        (this.countriesData = e),
                          this.getCountriesList(),
                          (this.countryModuleStoreService.allCountriesData = e);
                      });
              }
              getCountriesList() {
                this.countriesData.forEach((e) => {
                  this.countries.push({
                    data: {
                      name: e.name.common,
                      value: e.population,
                      icon: e.flag,
                    },
                    viewValue: e.name.common,
                  });
                });
              }
              onChangeCountry() {
                this.setChartTitle(),
                  this.setChartData(),
                  this.selectedCountry1 &&
                    this.selectedCountry2 &&
                    setTimeout(() => {
                      this.chart.updateChart(this.data, this.title);
                    }, 10);
              }
              setChartTitle() {
                this.selectedCountry1 &&
                  this.selectedCountry2 &&
                  (this.title = {
                    title:
                      this.selectedCountry1.name +
                      " vs " +
                      this.selectedCountry2.name,
                    subtext: "Population",
                  });
              }
              setChartData() {
                this.data = [this.selectedCountry1, this.selectedCountry2];
              }
            }
            return (
              (o.ɵfac = function (e) {
                return new (e || o)(t.Y36(m.wm), t.Y36(m.vQ));
              }),
              (o.ɵcmp = t.Xpm({
                type: o,
                selectors: [["app-demographic-page"]],
                viewQuery: function (e, n) {
                  if ((1 & e && t.Gf(v, 5), 2 & e)) {
                    let s;
                    t.iGM((s = t.CRH())) && (n.chart = s.first);
                  }
                },
                decls: 15,
                vars: 6,
                consts: [
                  [
                    "routerLink",
                    "..",
                    "mat-raised-button",
                    "",
                    "color",
                    "primary",
                  ],
                  ["appearance", "fill"],
                  [3, "value", "selectionChange", "valueChange"],
                  [3, "value", 4, "ngFor", "ngForOf"],
                  [4, "ngIf", "ngIfElse"],
                  ["noSelected", ""],
                  [3, "value"],
                  [3, "data", "title"],
                  ["chart", ""],
                ],
                template: function (e, n) {
                  if (
                    (1 & e &&
                      (t.TgZ(0, "button", 0),
                      t._uU(1, "Back"),
                      t.qZA(),
                      t.TgZ(2, "mat-form-field", 1),
                      t.TgZ(3, "mat-label"),
                      t._uU(4, "Select country 1"),
                      t.qZA(),
                      t.TgZ(5, "mat-select", 2),
                      t.NdJ("selectionChange", function () {
                        return n.onChangeCountry();
                      })("valueChange", function (c) {
                        return (n.selectedCountry1 = c);
                      }),
                      t.YNc(6, y, 2, 3, "mat-option", 3),
                      t.qZA(),
                      t.qZA(),
                      t.TgZ(7, "mat-form-field", 1),
                      t.TgZ(8, "mat-label"),
                      t._uU(9, "Select country 2"),
                      t.qZA(),
                      t.TgZ(10, "mat-select", 2),
                      t.NdJ("selectionChange", function () {
                        return n.onChangeCountry();
                      })("valueChange", function (c) {
                        return (n.selectedCountry2 = c);
                      }),
                      t.YNc(11, D, 2, 3, "mat-option", 3),
                      t.qZA(),
                      t.qZA(),
                      t.YNc(12, T, 3, 2, "div", 4),
                      t.YNc(13, Z, 2, 0, "ng-template", null, 5, t.W1O)),
                    2 & e)
                  ) {
                    const s = t.MAs(14);
                    t.xp6(5),
                      t.Q6J("value", n.selectedCountry1),
                      t.xp6(1),
                      t.Q6J("ngForOf", n.countries),
                      t.xp6(4),
                      t.Q6J("value", n.selectedCountry2),
                      t.xp6(1),
                      t.Q6J("ngForOf", n.countries),
                      t.xp6(1),
                      t.Q6J("ngIf", n.selectedCountry2 && n.selectedCountry1)(
                        "ngIfElse",
                        s
                      );
                  }
                },
                directives: [
                  g.lW,
                  l.rH,
                  h.KE,
                  h.hX,
                  C.gD,
                  r.sg,
                  r.O5,
                  d.ey,
                  f.r,
                ],
                styles: [
                  ".hide-elm[_ngcontent-%COMP%]{display:none}.show-elm[_ngcontent-%COMP%]{display:block}",
                ],
              })),
              o
            );
          })(),
        },
      ];
      let S = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [[l.Bz.forChild(P)], l.Bz] })),
          o
        );
      })();
      var M = a(3773);
      let J = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [[r.ez, S, M.m]] })),
          o
        );
      })();
    },
  },
]);
