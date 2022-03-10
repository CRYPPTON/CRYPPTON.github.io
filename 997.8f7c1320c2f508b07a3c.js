"use strict";
(self.webpackChunkcountries_comparison =
  self.webpackChunkcountries_comparison || []).push([
  [997],
  {
    5997: (j, y, r) => {
      r.r(y), r.d(y, { CountryModule: () => P });
      var u = r(8583),
        a = r(4655),
        C = r(27),
        f = r(5321),
        t = r(7716),
        m = r(3222),
        d = r(1095),
        v = r(1215),
        Z = r(7154);
      function S(e, i) {
        if (
          (1 & e && (t.TgZ(0, "div"), t._uU(1), t.ALo(2, "json"), t.qZA()),
          2 & e)
        ) {
          const n = i.$implicit,
            o = t.oxw();
          t.xp6(1), t.AsE(" ", n, " : ", t.lcZ(2, 2, o.countryData[n]), " ");
        }
      }
      let D = (() => {
        class e {
          constructor(n, o) {
            (this.route = n),
              (this.httpCountryService = o),
              (this.data = [
                { value: 10, name: "magyar" },
                { value: 5, name: "bosnian" },
                { value: 5, name: "croats" },
                { value: 80, name: "serb" },
              ]),
              (this.title = { title: "<country>", subtext: "% population" }),
              (this.geoJsonUrl = "assets/geo-json/countries.geojson"),
              (this.mapType = f.z.countryMap);
          }
          ngOnInit() {
            this.initPathParam(), this.initCountryData();
          }
          ngOnDestroy() {
            this.countySubscription$.unsubscribe();
          }
          initPathParam() {
            this.countySubscription$ = this.route.params.subscribe((n) => {
              (this.country = n.state), (this.title.title = this.country);
            });
          }
          initCountryData() {
            this.httpCountryService
              .getCountryDataByName(this.country)
              .subscribe((n) => {
                n &&
                  ((this.countryData = n[0]),
                  (this.countryDataKey = Object.keys(this.countryData)));
              });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Y36(a.gz), t.Y36(m.wm));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [["app-single-country-details"]],
            decls: 8,
            vars: 7,
            consts: [
              ["routerLink", "..", "mat-raised-button", "", "color", "primary"],
              [3, "geoJsonUrl", "mapName", "mapType"],
              [3, "data", "title"],
              [1, "container"],
              [4, "ngFor", "ngForOf"],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, "button", 0),
                t._uU(1, "Back"),
                t.qZA(),
                t.TgZ(2, "h1"),
                t._uU(3),
                t.qZA(),
                t._UZ(4, "app-echart-geo-map", 1),
                t._UZ(5, "app-basic-echarts", 2),
                t.TgZ(6, "div", 3),
                t.YNc(7, S, 3, 4, "div", 4),
                t.qZA()),
                2 & n &&
                  (t.xp6(3),
                  t.hij("", o.country, " details"),
                  t.xp6(1),
                  t.Q6J("geoJsonUrl", o.geoJsonUrl)("mapName", o.country)(
                    "mapType",
                    o.mapType
                  ),
                  t.xp6(1),
                  t.Q6J("data", o.data)("title", o.title),
                  t.xp6(2),
                  t.Q6J("ngForOf", o.countryDataKey));
            },
            directives: [d.lW, a.rH, v.o, Z.r, u.sg],
            pipes: [u.Ts],
            styles: [""],
          })),
          e
        );
      })();
      var p = (() => {
          return (
            ((e = p || (p = {})).europe = "Europe"),
            (e.africa = "Africa"),
            (e.oceania = "Oceania"),
            (e.northAmerica = "North America"),
            (e.southAmerica = "South America"),
            (e.asia = "Asia"),
            p
          );
          var e;
        })(),
        l = r(171),
        s = r(3679),
        h = r(8295),
        T = r(6627),
        A = r(9983),
        g = r(4929);
      function b(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "button", 10),
            t.NdJ("click", function () {
              return t.CHM(n), t.oxw().onClearSearch();
            }),
            t.TgZ(1, "mat-icon", 11),
            t._uU(2, "clear"),
            t.qZA(),
            t.qZA();
        }
      }
      function x(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "mat-grid-tile"),
            t.TgZ(1, "div", 12),
            t.NdJ("click", function () {
              const q = t.CHM(n).$implicit;
              return t.oxw().onNavigateToCountry(q.name.common);
            }),
            t.TgZ(2, "span", 13),
            t._uU(3),
            t.qZA(),
            t._uU(4),
            t.qZA(),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit;
          t.xp6(3), t.Oqu(n.name.common), t.xp6(1), t.hij(" ", n.flag, " ");
        }
      }
      let F = (() => {
        class e {
          constructor(n, o, c) {
            (this.router = n),
              (this.route = o),
              (this.countryModuleStoreService = c);
          }
          get data() {
            return this.filteredData
              ? this.filteredData
              : this.selectedContinent
              ? this.countryModuleStoreService.continentsData[
                  this.selectedContinent
                ]
              : this.countryModuleStoreService.allCountriesData;
          }
          ngAfterContentInit() {
            this.selectedContinent || (this.filteredData = this.data);
          }
          ngOnInit() {
            this.initQuerySearchForm();
          }
          initQuerySearchForm() {
            var n;
            (this.querySearchForm = new s.cw({ query: new s.NI("") })),
              null === (n = this.querySearchForm.get("query")) ||
                void 0 === n ||
                n.valueChanges.subscribe((o) => {
                  (this.filteredData =
                    this.countryModuleStoreService.continentsData[
                      this.selectedContinent
                    ]),
                    (this.filteredData = this.filterCountry(o));
                });
          }
          onNavigateToCountry(n) {
            this.router.navigate([n], { relativeTo: this.route });
          }
          onClearSearch() {
            var n;
            null === (n = this.querySearchForm.get("query")) ||
              void 0 === n ||
              n.setValue("");
          }
          filterCountry(n) {
            return (
              (n = n.toLocaleLowerCase().trim()),
              this.data.filter((c) =>
                c.name.common.toLocaleLowerCase().trim().includes(n)
              )
            );
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Y36(a.F0), t.Y36(a.gz), t.Y36(m.vQ));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [["app-countries-dashboard"]],
            inputs: { selectedContinent: "selectedContinent" },
            decls: 12,
            vars: 3,
            consts: [
              [1, "container"],
              [
                "fxLayout",
                "row",
                "fxLayoutAlign",
                " center",
                1,
                "filter-and-sort-container",
              ],
              [1, "table-filter"],
              [3, "formGroup"],
              ["matPrefix", "", "fontSet", "fal", "fontIcon", "fa-search"],
              [
                "formControlName",
                "query",
                "matInput",
                "",
                "type",
                "text",
                "autocomplete",
                "off",
              ],
              ["querySearch", ""],
              [
                "class",
                "d-inline",
                "mat-button",
                "",
                "matSuffix",
                "",
                "mat-icon-button",
                "",
                3,
                "click",
                4,
                "ngIf",
              ],
              ["cols", "4", "rowHeight", "2:1"],
              [4, "ngFor", "ngForOf"],
              [
                "mat-button",
                "",
                "matSuffix",
                "",
                "mat-icon-button",
                "",
                1,
                "d-inline",
                3,
                "click",
              ],
              ["aria-hidden", "false"],
              [1, "country-item", 3, "click"],
              [1, "country-title"],
            ],
            template: function (n, o) {
              if (
                (1 & n &&
                  (t.TgZ(0, "div", 0),
                  t.TgZ(1, "div", 1),
                  t.TgZ(2, "div", 2),
                  t.TgZ(3, "mat-form-field", 3),
                  t.TgZ(4, "mat-label"),
                  t._uU(5, "Find country"),
                  t.qZA(),
                  t._UZ(6, "mat-icon", 4),
                  t._UZ(7, "input", 5, 6),
                  t.YNc(9, b, 3, 0, "button", 7),
                  t.qZA(),
                  t.qZA(),
                  t.TgZ(10, "mat-grid-list", 8),
                  t.YNc(11, x, 5, 2, "mat-grid-tile", 9),
                  t.qZA(),
                  t.qZA(),
                  t.qZA()),
                2 & n)
              ) {
                const c = t.MAs(8);
                t.xp6(3),
                  t.Q6J("formGroup", o.querySearchForm),
                  t.xp6(6),
                  t.Q6J("ngIf", c.value),
                  t.xp6(2),
                  t.Q6J("ngForOf", o.data);
              }
            },
            directives: [
              h.KE,
              s.JL,
              s.sg,
              h.hX,
              T.Hw,
              h.qo,
              s.Fj,
              A.Nt,
              s.JJ,
              s.u,
              u.O5,
              g.Il,
              u.sg,
              d.lW,
              h.R9,
              g.DX,
            ],
            styles: [
              ".container[_ngcontent-%COMP%]{height:500px;overflow-y:auto}.dashboard-img[_ngcontent-%COMP%]{height:50px}.country-item[_ngcontent-%COMP%]{cursor:pointer}.country-title[_ngcontent-%COMP%]{margin-right:4px}",
            ],
          })),
          e
        );
      })();
      function M(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, "mat-expansion-panel"),
            t.TgZ(1, "mat-expansion-panel-header"),
            t.TgZ(2, "mat-panel-title"),
            t._uU(3),
            t.qZA(),
            t.TgZ(4, "mat-panel-description"),
            t._uU(5),
            t.qZA(),
            t.qZA(),
            t._UZ(6, "app-countries-dashboard", 2),
            t.qZA()),
          2 & e)
        ) {
          const n = i.$implicit;
          t.xp6(3),
            t.hij(" ", n, " Countries "),
            t.xp6(2),
            t.hij(" Expand ", n, " countries list "),
            t.xp6(1),
            t.Q6J("selectedContinent", n);
        }
      }
      const J = [
        {
          path: C._.empty,
          component: (() => {
            class e {
              constructor(n, o) {
                (this.httpContinentService = n),
                  (this.countryModuleStoreService = o),
                  (this.countries = []),
                  (this.compareData = [
                    { name: "", value: 0 },
                    { name: "", value: 0 },
                  ]),
                  (this.compareTitle = { title: "Population", subtext: "%" });
              }
              ngOnInit() {
                (this.continents = this.initContinentsEnumValue()),
                  this.countryModuleStoreService.allCountriesData ||
                    this.getAllCountriesData();
              }
              ngAfterContentInit() {
                this.initGetCountriesByContinentName();
              }
              initContinentsEnumValue() {
                return Object.entries(p)
                  .filter((n) => !parseInt(n[0]))
                  .map((n) => n[1]);
              }
              initGetCountriesByContinentName() {
                for (const n of this.continents) this.getContinentsData(n);
              }
              getContinentsData(n) {
                this.countryModuleStoreService.continentsData[n] ||
                  this.httpContinentService
                    .getCountriesByContinentName(n.toLowerCase())
                    .subscribe((o) => {
                      this.countryModuleStoreService.continentsData[n] = o;
                    });
              }
              getAllCountriesData() {
                this.httpContinentService.getCountriesData().subscribe((n) => {
                  n.forEach((o) => {
                    this.countries.push(o.name.common);
                  }),
                    (this.countryModuleStoreService.allCountriesData = n);
                });
              }
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(t.Y36(m.wm), t.Y36(m.vQ));
              }),
              (e.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-country-page"]],
                decls: 7,
                vars: 1,
                consts: [
                  [
                    "routerLink",
                    "..",
                    "mat-raised-button",
                    "",
                    "color",
                    "primary",
                  ],
                  [4, "ngFor", "ngForOf"],
                  [3, "selectedContinent"],
                ],
                template: function (n, o) {
                  1 & n &&
                    (t.TgZ(0, "button", 0),
                    t._uU(1, "Back"),
                    t.qZA(),
                    t._UZ(2, "br"),
                    t.TgZ(3, "h3"),
                    t._uU(4, "Search Country Details by Continent"),
                    t.qZA(),
                    t.TgZ(5, "mat-accordion"),
                    t.YNc(6, M, 7, 3, "mat-expansion-panel", 1),
                    t.qZA()),
                    2 & n && (t.xp6(6), t.Q6J("ngForOf", o.continents));
                },
                directives: [d.lW, a.rH, l.pp, u.sg, l.ib, l.yz, l.yK, l.u4, F],
                styles: [""],
              })),
              e
            );
          })(),
        },
        { path: ":state", component: D },
      ];
      let O = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [[a.Bz.forChild(J)], a.Bz] })),
          e
        );
      })();
      var N = r(3773);
      let P = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [[u.ez, O, N.m]] })),
          e
        );
      })();
    },
  },
]);
