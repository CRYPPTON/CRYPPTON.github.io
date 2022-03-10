"use strict";
(self.webpackChunkcountries_comparison =
  self.webpackChunkcountries_comparison || []).push([
  [708],
  {
    7708: (U, h, a) => {
      a.r(h), a.d(h, { GuessCountriesModule: () => J });
      var g = a(8583),
        u = a(4655),
        v = a(27),
        d = a(5321),
        r = (() => {
          return (
            ((s = r || (r = {})).guessCountry = "guessCountry"),
            (s.guessFlag = "guessFlag"),
            (s.guessCity = "guessCity"),
            (s.guessShape = "guessShape"),
            r
          );
          var s;
        })(),
        S = a(5319),
        G = a(8989),
        c = a(3679),
        t = a(7716),
        m = a(3222),
        f = a(1095),
        p = a(8295),
        T = a(6627),
        M = a(9983),
        Z = a(1215);
      function L(s, i) {
        if (1 & s) {
          const e = t.EpF();
          t.TgZ(0, "button", 10),
            t.NdJ("click", function () {
              return t.CHM(e), t.oxw().onNext();
            }),
            t._uU(1, " Next\n"),
            t.qZA();
        }
      }
      let P = (() => {
        class s {
          constructor(e, o, n, l, y, D) {
            (this.httpCountryService = e),
              (this.cdr = o),
              (this.snackBarService = n),
              (this.route = l),
              (this.countryModuleStoreService = y),
              (this.popupService = D),
              (this.guessSubscription$ = new S.w()),
              (this.geoJsonUrl = "assets/geo-json/countries.geojson"),
              (this.mapType = d.z.countryGuessMap),
              (this.IsGuessShapePage = !1),
              (this.dataList = []),
              (this.guessed = 0),
              (this.timeLeft = 60);
          }
          ngOnDestroy() {
            clearInterval(this.interval);
          }
          initPathParam() {
            var e;
            (this.countryFormGroup = new c.cw({ guess: new c.NI("") })),
              null === (e = this.countryFormGroup.get("guess")) ||
                void 0 === e ||
                e.valueChanges.subscribe((o) => {
                  var n;
                  if (
                    o.toLocaleLowerCase().trim() ==
                    this.mapName.toLocaleLowerCase()
                  ) {
                    let l = this.snackBarService.setSnackGuessCountryData(
                      "Successful guess!",
                      !0
                    );
                    this.snackBarService.openSnack(l),
                      null === (n = this.countryFormGroup.get("guess")) ||
                        void 0 === n ||
                        n.setValue(""),
                      this.onNext();
                  }
                }),
              (this.guessSubscription$ = this.route.params.subscribe((o) => {
                (this.pageMode = o.page),
                  this.pageMode == r.guessShape &&
                    (this.mapType = d.z.countryGuessShape);
              }));
          }
          ngOnInit() {
            this.initPathParam(), this.getAllCountriesData(), this.startTimer();
          }
          onGuessCountry(e) {
            if (this.timeLeft > 0) {
              let o;
              this.pageMode == r.guessFlag &&
                (e = this.data.find((n) => n.name.common === e).flag),
                this.pageMode == r.guessCity &&
                  (e = this.data.find((n) => n.name.common === e).capital[0]),
                e === this.guess
                  ? (this.guessed++,
                    this.generateRandomCountry(),
                    (o = this.snackBarService.setSnackGuessCountryData(
                      "Successful guess!",
                      !0
                    )))
                  : ((o = this.snackBarService.setSnackGuessCountryData(
                      "Wrong answer!",
                      !1
                    )),
                    this.generateRandomCountry()),
                this.snackBarService.openSnack(o),
                this.cdr.detectChanges();
            }
          }
          generateRandomCountry() {
            this.guess =
              this.dataList[
                Math.floor(Math.random() * this.dataList.length - 1)
              ];
          }
          getAllCountriesData() {
            if (this.countryModuleStoreService.allCountriesData) {
              this.data = this.countryModuleStoreService.allCountriesData;
              for (const e of this.data) this.handleDataList(e);
              this.generateRandomCountry(), (this.mapName = this.guess);
            } else
              this.httpCountryService.getCountriesData().subscribe((e) => {
                this.data = e;
                for (const o of e) this.handleDataList(o);
                this.generateRandomCountry(),
                  (this.mapName = this.guess),
                  (this.countryModuleStoreService.allCountriesData = e);
              });
          }
          handleDataList(e) {
            switch (this.pageMode) {
              case r.guessCountry:
                this.dataList.push(e.name.common);
                break;
              case r.guessFlag:
                this.dataList.push(e.flag);
                break;
              case r.guessCity:
                e.capital && this.dataList.push(e.capital[0]);
                break;
              case r.guessShape:
                this.dataList.push(e.name.common);
            }
          }
          startTimer() {
            this.interval = setInterval(() => {
              this.timeLeft > 0
                ? this.timeLeft--
                : (this.openGuessPopup(), clearInterval(this.interval));
            }, 1e3);
          }
          openGuessPopup() {
            this.popupService.openPopup(G.c, { data: this.guessed });
          }
          onReset() {
            (this.guessed = 0),
              (this.timeLeft = 10),
              clearInterval(this.interval),
              this.startTimer();
          }
          onNext() {
            this.generateRandomCountry(), (this.mapName = this.guess);
          }
        }
        return (
          (s.ɵfac = function (e) {
            return new (e || s)(
              t.Y36(m.wm),
              t.Y36(t.sBO),
              t.Y36(m.cw),
              t.Y36(u.gz),
              t.Y36(m.vQ),
              t.Y36(m.qL)
            );
          }),
          (s.ɵcmp = t.Xpm({
            type: s,
            selectors: [["app-guess-country"]],
            decls: 18,
            vars: 9,
            consts: [
              ["routerLink", "..", "mat-raised-button", "", "color", "primary"],
              [1, "container", "d-flex", "justify-content-center"],
              [3, "formGroup"],
              ["matPrefix", "", "fontSet", "fal", "fontIcon", "fa-search"],
              [
                "formControlName",
                "guess",
                "matInput",
                "",
                "type",
                "text",
                "autocomplete",
                "off",
              ],
              ["querySearch", ""],
              [1, "chart"],
              [3, "geoJsonUrl", "mapName", "mapType", "selectedCountry"],
              [
                "mat-raised-button",
                "",
                "color",
                "primary",
                3,
                "disabled",
                "click",
              ],
              [
                "mat-raised-button",
                "",
                "color",
                "primary",
                3,
                "click",
                4,
                "ngIf",
              ],
              ["mat-raised-button", "", "color", "primary", 3, "click"],
            ],
            template: function (e, o) {
              1 & e &&
                (t.TgZ(0, "button", 0),
                t._uU(1, "Back"),
                t.qZA(),
                t.TgZ(2, "div", 1),
                t.TgZ(3, "h2"),
                t._uU(4),
                t.qZA(),
                t.qZA(),
                t.TgZ(5, "mat-form-field", 2),
                t.TgZ(6, "mat-label"),
                t._uU(7, "Find country"),
                t.qZA(),
                t._UZ(8, "mat-icon", 3),
                t._UZ(9, "input", 4, 5),
                t.qZA(),
                t.TgZ(11, "div", 6),
                t.TgZ(12, "app-echart-geo-map", 7),
                t.NdJ("selectedCountry", function (l) {
                  return o.onGuessCountry(l);
                }),
                t.qZA(),
                t.qZA(),
                t.TgZ(13, "button", 8),
                t.NdJ("click", function () {
                  return o.onReset();
                }),
                t._uU(14, " Reset\n"),
                t.qZA(),
                t.YNc(15, L, 2, 0, "button", 9),
                t.TgZ(16, "h2"),
                t._uU(17),
                t.qZA()),
                2 & e &&
                  (t.xp6(4),
                  t.hij(" ", o.guess, " "),
                  t.xp6(1),
                  t.Q6J("formGroup", o.countryFormGroup),
                  t.xp6(7),
                  t.Q6J("geoJsonUrl", o.geoJsonUrl)("mapName", o.mapName)(
                    "mapType",
                    o.mapType
                  ),
                  t.xp6(1),
                  t.Q6J("disabled", o.timeLeft > 0),
                  t.xp6(2),
                  t.Q6J("ngIf", "guessShape" == o.pageMode),
                  t.xp6(2),
                  t.AsE(
                    "Guessed countries: ",
                    o.guessed,
                    " | Time: ",
                    o.timeLeft,
                    ""
                  ));
            },
            directives: [
              f.lW,
              u.rH,
              p.KE,
              c.JL,
              c.sg,
              p.hX,
              T.Hw,
              p.qo,
              c.Fj,
              M.Nt,
              c.JJ,
              c.u,
              Z.o,
              g.O5,
            ],
            styles: [".chart[_ngcontent-%COMP%]{height:50%}"],
          })),
          s
        );
      })();
      var C = a(4929);
      function N(s, i) {
        if (1 & s) {
          const e = t.EpF();
          t.TgZ(0, "mat-grid-tile", 3),
            t.NdJ("click", function () {
              const l = t.CHM(e).$implicit;
              return t.oxw().onOpenPage(l.name);
            }),
            t.TgZ(1, "div"),
            t._uU(2),
            t.qZA(),
            t.qZA();
        }
        if (2 & s) {
          const e = i.$implicit;
          t.xp6(2), t.hij("1 minute ", e.name, "");
        }
      }
      const k = [
        {
          path: v._.empty,
          component: (() => {
            class s {
              constructor(e, o) {
                (this.router = e),
                  (this.route = o),
                  (this.guessModulesPage = []);
              }
              ngOnInit() {
                this.getGuessModulePages().forEach((o) => {
                  this.guessModulesPage.push({
                    name: o,
                    image: `image-path/${o}`,
                  });
                });
              }
              getGuessModulePages() {
                return Object.keys(r).filter((e) => isNaN(+e));
              }
              onOpenPage(e) {
                this.router.navigate([e], { relativeTo: this.route });
              }
            }
            return (
              (s.ɵfac = function (e) {
                return new (e || s)(t.Y36(u.F0), t.Y36(u.gz));
              }),
              (s.ɵcmp = t.Xpm({
                type: s,
                selectors: [["app-guess-countries-page"]],
                decls: 4,
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
                  ["cols", "3", "rowHeight", "1:1"],
                  [3, "click", 4, "ngFor", "ngForOf"],
                  [3, "click"],
                ],
                template: function (e, o) {
                  1 & e &&
                    (t.TgZ(0, "button", 0),
                    t._uU(1, "Back"),
                    t.qZA(),
                    t.TgZ(2, "mat-grid-list", 1),
                    t.YNc(3, N, 3, 1, "mat-grid-tile", 2),
                    t.qZA()),
                    2 & e && (t.xp6(3), t.Q6J("ngForOf", o.guessModulesPage));
                },
                directives: [f.lW, u.rH, C.Il, g.sg, C.DX],
                styles: [
                  "mat-grid-tile[_ngcontent-%COMP%]{background:lightblue}mat-grid-tile[_ngcontent-%COMP%]:hover{cursor:pointer}",
                ],
              })),
              s
            );
          })(),
        },
        { path: ":page", component: P },
      ];
      let F = (() => {
        class s {}
        return (
          (s.ɵfac = function (e) {
            return new (e || s)();
          }),
          (s.ɵmod = t.oAB({ type: s })),
          (s.ɵinj = t.cJS({ imports: [[u.Bz.forChild(k)], u.Bz] })),
          s
        );
      })();
      var A = a(3773);
      let J = (() => {
        class s {}
        return (
          (s.ɵfac = function (e) {
            return new (e || s)();
          }),
          (s.ɵmod = t.oAB({ type: s })),
          (s.ɵinj = t.cJS({ imports: [[g.ez, F, A.m]] })),
          s
        );
      })();
    },
  },
]);
