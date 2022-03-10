"use strict";
(self.webpackChunkcountries_comparison =
  self.webpackChunkcountries_comparison || []).push([
  [989],
  {
    3989: (b, p, u) => {
      u.r(p), u.d(p, { CustomCountryModule: () => B });
      var l = u(8583),
        c = u(4655),
        m = u(27),
        C = u(5321),
        d = u(9765),
        h = u(5758),
        t = u(7716),
        y = u(3222),
        g = u(1215),
        v = u(1095),
        f = u(7154);
      function G(o, s) {
        if (
          (1 & o &&
            (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "json"),
            t._UZ(3, "app-basic-echarts", 6),
            t.qZA()),
          2 & o)
        ) {
          const e = t.oxw();
          t.xp6(1),
            t.hij(" ", t.lcZ(2, 3, e.data), " "),
            t.xp6(2),
            t.Q6J("data", e.data)("title", e.title);
        }
      }
      const P = [
        {
          path: m._.empty,
          component: (() => {
            class o {
              constructor(e) {
                (this.httpCountryService = e),
                  (this.eventsSubject$ = new d.xQ()),
                  (this.geoJsonUrl = "assets/geo-json/countries2.json"),
                  (this.mapName = "world"),
                  (this.mapType = C.z.worldMap),
                  (this.selectedCountriesGroup1 = []),
                  (this.selectedCountriesPopulationGroup1 = 0),
                  (this.selectedCountriesGroup2 = []),
                  (this.selectedCountriesPopulationGroup2 = 0),
                  (this.title = {
                    title: "Group1 vs Group2",
                    subtext: "comparation",
                  }),
                  (this.data = []),
                  (this.isBlueGroup = !0);
              }
              onSelectedCountry(e) {
                this.isBlueGroup
                  ? this.selectedCountriesGroup1.push(e)
                  : this.selectedCountriesGroup2.push(e);
              }
              onCompare() {
                this.addCountriesSumPopulation(
                  this.selectedCountriesGroup1,
                  "Blue"
                ),
                  this.addCountriesSumPopulation(
                    this.selectedCountriesGroup2,
                    "Red"
                  );
              }
              onReset() {
                (this.selectedCountriesGroup1 = []),
                  (this.selectedCountriesPopulationGroup1 = 0),
                  (this.selectedCountriesGroup2 = []),
                  (this.selectedCountriesPopulationGroup2 = 0),
                  this.eventsSubject$.next("reset");
              }
              setBlue() {
                this.isBlueGroup = !0;
              }
              setRed() {
                this.isBlueGroup = !1;
              }
              addCountriesSumPopulation(e, n) {
                let r = 0,
                  a = {};
                for (const i of e)
                  a[i] = this.httpCountryService.getCountryDataByName(i);
                (0, h.D)(a).subscribe((i) => {
                  for (const S in i) r += i[S][0].population;
                  this.pushGroupData(r, n);
                });
              }
              pushGroupData(e, n) {
                this.data.push({ name: n, value: e });
              }
            }
            return (
              (o.ɵfac = function (e) {
                return new (e || o)(t.Y36(y.wm));
              }),
              (o.ɵcmp = t.Xpm({
                type: o,
                selectors: [["app-custom-country-page"]],
                decls: 13,
                vars: 7,
                consts: [
                  [1, "chart"],
                  [
                    3,
                    "geoJsonUrl",
                    "mapName",
                    "mapType",
                    "colorInput",
                    "events",
                    "selectedCountry",
                  ],
                  ["mat-raised-button", "", "color", "primary", 3, "click"],
                  ["mat-raised-button", "", "color", "warn", 3, "click"],
                  ["mat-raised-button", "", "color", "accent", 3, "click"],
                  [4, "ngIf"],
                  [3, "data", "title"],
                ],
                template: function (e, n) {
                  1 & e &&
                    (t.TgZ(0, "div", 0),
                    t.TgZ(1, "app-echart-geo-map", 1),
                    t.NdJ("selectedCountry", function (a) {
                      return n.onSelectedCountry(a);
                    }),
                    t.qZA(),
                    t.qZA(),
                    t._uU(2),
                    t.TgZ(3, "div"),
                    t.TgZ(4, "button", 2),
                    t.NdJ("click", function () {
                      return n.setBlue();
                    }),
                    t._uU(5, "group 1"),
                    t.qZA(),
                    t.TgZ(6, "button", 3),
                    t.NdJ("click", function () {
                      return n.setRed();
                    }),
                    t._uU(7, "group 2"),
                    t.qZA(),
                    t.TgZ(8, "button", 4),
                    t.NdJ("click", function () {
                      return n.onReset();
                    }),
                    t._uU(9, "Reset"),
                    t.qZA(),
                    t.qZA(),
                    t.TgZ(10, "button", 4),
                    t.NdJ("click", function () {
                      return n.onCompare();
                    }),
                    t._uU(11, "compare"),
                    t.qZA(),
                    t.YNc(12, G, 4, 5, "div", 5)),
                    2 & e &&
                      (t.xp6(1),
                      t.Q6J("geoJsonUrl", n.geoJsonUrl)("mapName", n.mapName)(
                        "mapType",
                        n.mapType
                      )("colorInput", n.isBlueGroup ? "blue" : "red")(
                        "events",
                        n.eventsSubject$.asObservable()
                      ),
                      t.xp6(1),
                      t.hij(" ", n.isBlueGroup, "\n"),
                      t.xp6(10),
                      t.Q6J("ngIf", 2 === n.data.length));
                },
                directives: [g.o, v.lW, l.O5, f.r],
                pipes: [l.Ts],
                styles: [".chart[_ngcontent-%COMP%]{height:50%}"],
              })),
              o
            );
          })(),
        },
      ];
      let Z = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [[c.Bz.forChild(P)], c.Bz] })),
          o
        );
      })();
      var J = u(3773);
      let B = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [[l.ez, Z, J.m]] })),
          o
        );
      })();
    },
  },
]);
