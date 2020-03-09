!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("EmblaCarousel", [], t) : "object" == typeof exports ? exports.EmblaCarousel = t() : e.EmblaCarousel = t()
}("undefined" != typeof self ? self : this, (function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(r, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return r
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 6)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Vector1D = function(e) {
            var t = {
                value: e
            };
            function n() {
                return t.value
            }
            function r(e) {
                return t.value /= e,
                i
            }
            function o(e) {
                return "number" == typeof e ? e : e.get()
            }
            var i = {
                add: function(e) {
                    return t.value += o(e),
                    i
                },
                divide: r,
                get: n,
                multiply: function(e) {
                    return t.value *= e,
                    i
                },
                normalize: function() {
                    var e = n();
                    return 0 !== e && r(e),
                    i
                },
                set: function(e) {
                    return t.value = o(e),
                    i
                },
                subtract: function(e) {
                    return t.value -= o(e),
                    i
                }
            };
            return Object.freeze(i)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Limit = function(e) {
            var t = e.min
              , n = e.max
              , r = {
                min: n,
                max: t
            }
              , o = {
                min: t,
                max: n
            };
            function i(e) {
                return e < t
            }
            function c(e) {
                return e > n
            }
            function a(e) {
                var t = i(e) && "min"
                  , n = c(e) && "max";
                return t || n || ""
            }
            var u = {
                constrain: function(e) {
                    var t = a(e);
                    return t ? o[t] : e
                },
                loop: function(e) {
                    var t = a(e);
                    return t ? r[t] : e
                },
                max: n,
                min: t,
                reachedAny: function(e) {
                    return i(e) || c(e)
                },
                reachedMax: c,
                reachedMin: i
            };
            return Object.freeze(u)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.rectWidth = function(e) {
            return e.getBoundingClientRect().width
        }
        ,
        t.map = function(e, t, n, r, o) {
            return r + (e - t) / (n - t) * (o - r)
        }
        ,
        t.arrayFromCollection = function(e) {
            return Array.prototype.slice.call(e)
        }
        ,
        t.debounce = function(e, t) {
            var n = {
                id: 0
            };
            return function() {
                window.clearTimeout(n.id),
                n.id = window.setTimeout(e, t) || 0
            }
        }
        ,
        t.groupNumbers = function(e, t) {
            for (var n = [], r = 0; r < e.length; r += t)
                n.push(e.slice(r, r + t));
            return n
        }
        ,
        t.roundToDecimals = function(e) {
            var t = Math.pow(10, e);
            return function(e) {
                return Math.round(e * t) / t
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0);
        t.Direction = function(e) {
            var t = r.Vector1D(n(e));
            function n(e) {
                return 0 === e ? 0 : e / Math.abs(e)
            }
            var o = {
                get: t.get,
                set: function(e) {
                    var r = n(e.get());
                    return 0 !== r && t.set(r),
                    o
                }
            };
            return Object.freeze(o)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Counter = function e(t) {
            var n = t.start
              , r = t.limit
              , o = t.loop
              , i = r.min
              , c = r.max
              , a = o ? "loop" : "constrain"
              , u = {
                value: d(n)
            };
            function s() {
                return u.value
            }
            function l(e) {
                return u.value = d(e),
                f
            }
            function d(e) {
                return r[a](e)
            }
            var f = {
                add: function e(t) {
                    if (0 !== t) {
                        var n = t / Math.abs(t);
                        return l(s() + n),
                        e(t + -1 * n)
                    }
                    return f
                },
                clone: function() {
                    return e({
                        start: s(),
                        limit: r,
                        loop: o
                    })
                },
                get: s,
                max: c,
                min: i,
                set: l
            };
            return Object.freeze(f)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EventStore = function() {
            var e = {
                listeners: []
            }
              , t = {
                add: function(n, r, o) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return n.addEventListener(r, o, i),
                    e.listeners.push((function() {
                        return n.removeEventListener(r, o, i)
                    }
                    )),
                    t
                },
                removeAll: function() {
                    return e.listeners.filter((function(e) {
                        return e()
                    }
                    )),
                    t
                }
            };
            return Object.freeze(t)
        }
    }
    , function(e, t, n) {
        e.exports = n(7)
    }
    , function(e, t, n) {
        "use strict";
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(8)
          , i = n(26)
          , c = n(5)
          , a = n(27)
          , u = n(2);
        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = {
                active: !1,
                windowWidth: 0
            }
              , s = r({}, a.defaultOptions, t)
              , l = i.EventDispatcher()
              , d = c.EventStore()
              , f = u.debounce((function() {
                var e = window.innerWidth;
                e !== n.windowWidth && (n.windowWidth = e,
                h(),
                l.dispatch("resize"))
            }
            ), 500)
              , v = h
              , p = {}
              , m = {}
              , g = l.on
              , b = l.off;
            function x() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , i = !n.active;
                if (n.windowWidth = window.innerWidth,
                function() {
                    if (!e)
                        throw new Error("No root element provided 😢");
                    var t = s.containerSelector
                      , r = e.querySelector(t);
                    if (!r)
                        throw new Error("No valid container element found 😢");
                    m.root = e,
                    m.container = r,
                    m.slides = u.arrayFromCollection(r.children),
                    n.active = !0
                }(),
                m.slides.length > 0) {
                    var c = m.root
                      , a = m.container
                      , v = m.slides
                      , g = r(s, t)
                      , b = o.Engine(c, a, v, g, l);
                    r(p, b);
                    if (d.add(window, "resize", f),
                    v.forEach(S),
                    p.translate.to(p.scrollBody.location),
                    s.loop && 1 === v.length)
                        return x({
                            loop: !1
                        });
                    s.draggable && function() {
                        var e = m.root.classList
                          , t = s.draggingClass
                          , n = s.draggableClass;
                        p.dragHandler.addActivationEvents(),
                        l.on("dragStart", (function() {
                            return e.add(t)
                        }
                        )),
                        l.on("dragEnd", (function() {
                            return e.remove(t)
                        }
                        )),
                        e.add(n)
                    }(),
                    s.loop && p.slideLooper.loop(v),
                    i && (l.on("select", y),
                    l.on("init", y),
                    setTimeout((function() {
                        return l.dispatch("init")
                    }
                    ), 0))
                }
            }
            function y() {
                var e = m.slides
                  , t = p.index
                  , n = p.indexPrevious
                  , r = p.indexGroups
                  , o = s.selectedClass
                  , i = r[n.get()]
                  , c = r[t.get()];
                i.forEach((function(t) {
                    return e[t].classList.remove(o)
                }
                )),
                c.forEach((function(t) {
                    return e[t].classList.add(o)
                }
                ))
            }
            function S(t, n) {
                d.add(t, "focus", (function() {
                    var t = Math.floor(n / s.slidesToScroll)
                      , r = n ? t : n;
                    e.scrollLeft = 0,
                    O(r)
                }
                ), !0)
            }
            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (n.active) {
                    var t = r({
                        startIndex: p.index.get()
                    }, e);
                    M(),
                    x(t)
                }
            }
            function M() {
                var e = m.root
                  , t = m.container
                  , n = m.slides;
                p.dragHandler.removeAllEvents(),
                p.animation.stop(),
                d.removeAll(),
                e.classList.remove(s.draggableClass),
                t.style.transform = "",
                n.forEach((function(e) {
                    return e.style.left = ""
                }
                ))
            }
            function O(e) {
                p.scrollBody.useDefaultMass().useDefaultSpeed(),
                p.scrollTo.index(e, 0)
            }
            x(s);
            var j = {
                canScrollNext: function() {
                    var e = p.index;
                    return s.loop || e.get() !== e.max
                },
                canScrollPrev: function() {
                    var e = p.index;
                    return s.loop || e.get() !== e.min
                },
                changeOptions: v,
                clickAllowed: function() {
                    return p.dragHandler.clickAllowed()
                },
                containerNode: function() {
                    return m.container
                },
                destroy: function() {
                    n.active = !1,
                    M(),
                    l.dispatch("destroy")
                },
                off: b,
                on: g,
                previousScrollSnap: function() {
                    return p.indexPrevious.get()
                },
                scrollBy: function(e) {
                    var t = p.scrollBy.distance(e);
                    p.scrollBody.useDefaultMass().useDefaultSpeed(),
                    p.scrollTo.distance(t, !1)
                },
                scrollNext: function() {
                    var e = p.index.clone().add(1);
                    p.scrollBody.useDefaultMass().useDefaultSpeed(),
                    p.scrollTo.index(e.get(), -1)
                },
                scrollPrev: function() {
                    var e = p.index.clone().add(-1);
                    p.scrollBody.useDefaultMass().useDefaultSpeed(),
                    p.scrollTo.index(e.get(), 1)
                },
                scrollProgress: function() {
                    return p.scrollProgress.get()
                },
                scrollSnapList: function() {
                    return p.indexGroups.map((function(e) {
                        return {
                            slideIndexes: e,
                            slideNodes: e.map((function(e) {
                                return m.slides[e]
                            }
                            ))
                        }
                    }
                    ))
                },
                scrollTo: O,
                selectedScrollSnap: function() {
                    return p.index.get()
                },
                slideNodes: function() {
                    return m.slides
                }
            };
            return Object.freeze(j)
        }
        t.EmblaCarousel = s,
        t.default = s,
        e.exports = s
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(9)
          , o = n(10)
          , i = n(4)
          , c = n(11)
          , a = n(12)
          , u = n(1)
          , s = n(13)
          , l = n(14)
          , d = n(15)
          , f = n(16)
          , v = n(17)
          , p = n(18)
          , m = n(19)
          , g = n(20)
          , b = n(21)
          , x = n(22)
          , y = n(23)
          , S = n(24)
          , h = n(25)
          , M = n(2)
          , O = n(0);
        t.Engine = function(e, t, n, j, P) {
            var _ = j.align
              , D = j.startIndex
              , z = j.loop
              , w = j.speed
              , T = j.dragFree
              , E = j.slidesToScroll
              , C = j.containScroll
              , k = M.rectWidth(t)
              , B = s.PxToPercent(k)
              , L = B.totalPercent
              , A = Object.keys(n).map(Number)
              , V = n.map(M.rectWidth).map(B.measure)
              , N = M.groupNumbers(V, E).map((function(e) {
                return e.reduce((function(e, t) {
                    return e + t
                }
                ))
            }
            ))
              , F = V.reduce((function(e, t) {
                return e + t
            }
            ))
              , I = r.Alignment({
                align: _,
                viewSize: L
            })
              , W = b.ScrollSnap({
                snapSizes: N,
                alignment: I,
                loop: z
            })
              , H = v.ScrollContain({
                alignment: I,
                contentSize: F,
                slideIndexes: A,
                slidesToScroll: E,
                viewSize: L
            })
              , G = !z && C
              , U = N.map(W.measure)
              , q = H.snaps(U)
              , R = G ? q : U
              , X = M.groupNumbers(A, E)
              , Y = H.indexes(U)
              , J = R.length - 1
              , K = G ? Y : X
              , Q = u.Limit({
                min: 0,
                max: J
            })
              , Z = i.Counter({
                limit: Q,
                start: D,
                loop: z
            })
              , $ = Z.clone()
              , ee = p.ScrollLimit({
                loop: z,
                contentSize: F
            }).measure(R)
              , te = o.Animation((function() {
                ue.scrollBody.seek(oe).update(),
                ae.pointerDown() || (z || ue.scrollBounds.constrain(oe),
                ue.scrollBody.settle(oe) && ue.animation.stop()),
                z && (ue.scrollLooper.loop(ae.pointerDown() ? ae.direction.get() : ue.scrollBody.direction.get()),
                ue.slideLooper.loop(n));
                var e = ue.scrollBody.settle(oe);
                P.dispatch(e ? "settle" : "scroll"),
                ue.translate.to(ue.scrollBody.location),
                ue.animation.proceed()
            }
            ))
              , ne = R[Z.get()]
              , re = O.Vector1D(ne)
              , oe = O.Vector1D(ne)
              , ie = l.ScrollBody({
                location: re,
                speed: w,
                mass: 1
            })
              , ce = y.ScrollTo({
                animation: te,
                events: P,
                index: Z,
                indexPrevious: $,
                scrollTarget: x.ScrollTarget({
                    align: _,
                    contentSize: F,
                    index: Z,
                    limit: ee,
                    loop: z,
                    scrollSnaps: R,
                    snapSizes: N,
                    target: oe
                }),
                target: oe
            })
              , ae = c.DragHandler({
                animation: te,
                dragFree: T,
                dragTracker: a.DragTracker(B),
                element: e,
                events: P,
                index: Z,
                limit: ee,
                location: re,
                loop: z,
                scrollBody: ie,
                scrollTo: ce,
                snapSizes: N,
                target: oe
            })
              , ue = {
                animation: te,
                dragHandler: ae,
                index: Z,
                indexGroups: K,
                indexPrevious: $,
                scrollBody: ie,
                scrollBounds: d.ScrollBounds({
                    animation: te,
                    limit: ee,
                    location: re,
                    scrollBody: ie,
                    tolerance: 50
                }),
                scrollBy: f.ScrollBy({
                    limit: ee,
                    loop: z,
                    target: oe
                }),
                scrollLooper: m.ScrollLooper({
                    contentSize: F,
                    limit: ee,
                    location: re,
                    pxToPercent: B,
                    vectors: [re, oe]
                }),
                scrollProgress: g.ScrollProgress({
                    limit: ee,
                    location: re
                }),
                scrollTo: ce,
                slideLooper: S.SlideLooper({
                    contentSize: F,
                    location: re,
                    scrollSnaps: R,
                    slideSizes: V,
                    viewSize: L
                }),
                target: oe,
                translate: h.Translate(t)
            };
            return Object.freeze(ue)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Alignment = function(e) {
            var t = e.viewSize
              , n = e.align
              , r = {
                start: function(e) {
                    return 0 * e
                },
                center: function(e) {
                    return (t - e) / 2
                },
                end: function(e) {
                    return t - e
                }
            }
              , o = {
                measure: function(e) {
                    return r[n](e)
                }
            };
            return Object.freeze(o)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Animation = function(e) {
            var t = requestAnimationFrame.bind(window)
              , n = cancelAnimationFrame.bind(window)
              , r = {
                animationFrame: 0
            };
            function o(e, t) {
                return function() {
                    e === !!r.animationFrame && t()
                }
            }
            function i() {
                r.animationFrame = t(e)
            }
            var c = {
                proceed: o(!0, i),
                start: o(!1, i),
                stop: o(!0, (function() {
                    n(r.animationFrame),
                    r.animationFrame = 0
                }
                ))
            };
            return Object.freeze(c)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(3)
          , o = n(5)
          , i = n(0);
        t.DragHandler = function(e) {
            var t = e.target
              , n = e.scrollBody
              , c = e.dragFree
              , a = e.animation
              , u = e.element
              , s = e.dragTracker
              , l = e.location
              , d = e.events
              , f = e.limit
              , v = s.direction
              , p = ["INPUT", "SELECT", "TEXTAREA"]
              , m = i.Vector1D(0)
              , g = i.Vector1D(0)
              , b = i.Vector1D(0)
              , x = o.EventStore()
              , y = o.EventStore()
              , S = {
                mouse: 2.5,
                touch: 3.5
            }
              , h = {
                mouse: 4,
                touch: 7
            }
              , M = {
                mouse: 12,
                touch: 14
            }
              , O = {
                mouse: 6,
                touch: 5
            }
              , j = 4
              , P = {
                isDown: !1,
                isMouse: !1,
                preventClick: !1,
                preventScroll: !1
            };
            function _(e) {
                var r, o, i = "mousedown" === e.type, c = t.get() - l.get(), f = Math.abs(c) >= 2, v = i || !f, x = (r = e.target,
                o = r.nodeName || "",
                !(p.indexOf(o) > -1)), S = f || i && x;
                i && 0 !== e.button || (P.isDown = !0,
                P.isMouse = i,
                s.pointerDown(e),
                b.set(t),
                t.set(l),
                n.useDefaultMass().useSpeed(80),
                function() {
                    var e = P.isMouse ? document : u;
                    y.add(e, "touchmove", D).add(e, "touchend", z).add(e, "mousemove", D).add(e, "mouseup", z)
                }(),
                a.start(),
                m.set(s.readPoint(e, "x")),
                g.set(s.readPoint(e, "y")),
                d.dispatch("dragStart"),
                v && (P.preventClick = !1),
                S && e.preventDefault())
            }
            function D(n) {
                if (!P.preventScroll && !P.isMouse) {
                    var r = s.readPoint(n, "x").get()
                      , o = s.readPoint(n, "y").get()
                      , i = Math.abs(r - m.get())
                      , c = Math.abs(o - g.get());
                    if (P.preventScroll = i > c,
                    !P.preventScroll && !P.preventClick)
                        return z()
                }
                var a = s.pointerMove(n)
                  , u = f.reachedAny(l.get())
                  , d = !e.loop && u ? 2 : 1;
                !P.preventClick && a && (P.preventClick = !0),
                t.add(a / d),
                n.preventDefault()
            }
            function z() {
                var o = s.pointerUp() * (c ? h : S)[P.isMouse ? "mouse" : "touch"]
                  , i = t.get() - b.get();
                Math.abs(i) >= .5 && !P.isMouse && (P.preventClick = !0),
                P.isMouse = !1,
                P.preventScroll = !1,
                P.isDown = !1,
                y.removeAll(),
                n.useSpeed((c ? O : M)[P.isMouse ? "mouse" : "touch"]),
                function(n) {
                    var o = e.scrollTo
                      , i = e.snapSizes
                      , a = e.index
                      , u = Math.abs(n)
                      , s = i[a.get()] / 2
                      , l = f.reachedAny(t.get() + n);
                    if (c || l || !(u > j && u < s))
                        o.distance(n, !c);
                    else {
                        var d = -1 * r.Direction(n).get()
                          , v = a.clone().add(d);
                        o.index(v.get(), 0)
                    }
                }(o),
                d.dispatch("dragEnd")
            }
            function w(e) {
                P.preventClick && e.preventDefault()
            }
            var T = {
                addActivationEvents: function() {
                    var e = u;
                    x.add(e, "touchmove", (function() {}
                    )).add(e, "touchend", (function() {}
                    )).add(e, "touchstart", _).add(e, "mousedown", _).add(e, "touchcancel", z).add(e, "contextmenu", z).add(e, "click", w)
                },
                clickAllowed: function() {
                    return !P.preventClick
                },
                direction: v,
                pointerDown: function() {
                    return P.isDown
                },
                removeAllEvents: function() {
                    x.removeAll(),
                    y.removeAll()
                }
            };
            return Object.freeze(T)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(3)
          , o = n(0);
        t.DragTracker = function(e) {
            var t = {
                x: "clientX",
                y: "clientY"
            }
              , n = o.Vector1D(0)
              , i = o.Vector1D(0)
              , c = o.Vector1D(0)
              , a = o.Vector1D(0)
              , u = r.Direction(0)
              , s = 10
              , l = {
                isMouse: !1,
                trackPoints: [],
                trackTime: (new Date).getTime()
            };
            function d(e, n) {
                l.isMouse = !e.touches;
                var r = t[n]
                  , o = l.isMouse ? e[r] : e.touches[0][r];
                return a.set(o)
            }
            var f = {
                direction: u,
                pointerDown: function(t) {
                    var r = d(t, "x");
                    return n.set(r),
                    c.set(r),
                    e.measure(n.get())
                },
                pointerMove: function(t) {
                    var n = d(t, "x")
                      , r = (new Date).getTime();
                    return r - l.trackTime >= s && (l.trackPoints.push(n.get()),
                    l.trackTime = r),
                    i.set(n).subtract(c),
                    u.set(i),
                    c.set(n),
                    e.measure(i.get())
                },
                pointerUp: function() {
                    var t = c.get()
                      , n = l.isMouse ? 5 : 4
                      , r = l.trackPoints.slice(-n).map((function(e) {
                        return t - e
                    }
                    )).sort((function(e, t) {
                        return Math.abs(e) < Math.abs(t) ? 1 : -1
                    }
                    ))[0];
                    return c.set(r || 0),
                    l.trackPoints = [],
                    e.measure(c.get())
                },
                readPoint: d
            };
            return Object.freeze(f)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PxToPercent = function(e) {
            var t = 100
              , n = {
                measure: function(n) {
                    return n / e * t
                },
                totalPercent: t
            };
            return Object.freeze(n)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(3)
          , o = n(2)
          , i = n(0);
        t.ScrollBody = function(e) {
            var t = e.location
              , n = e.speed
              , c = e.mass
              , a = o.roundToDecimals(2)
              , u = i.Vector1D(0)
              , s = i.Vector1D(0)
              , l = i.Vector1D(0)
              , d = r.Direction(0)
              , f = {
                speed: n,
                mass: c
            };
            function v(e) {
                return f.speed = e,
                m
            }
            function p(e) {
                return f.mass = e,
                m
            }
            var m = {
                direction: d,
                location: t,
                seek: function(e) {
                    l.set(e).subtract(t);
                    var n = l.get()
                      , r = o.map(n, 0, 100, 0, f.speed);
                    return d.set(l),
                    l.normalize().multiply(r).subtract(u),
                    function(e) {
                        e.divide(f.mass),
                        s.add(e)
                    }(l),
                    m
                },
                settle: function(e) {
                    var n = e.get() - t.get()
                      , r = !a(n);
                    return r && t.set(e),
                    r
                },
                update: function() {
                    u.add(s),
                    t.add(u),
                    s.multiply(0)
                },
                useDefaultMass: function() {
                    return p(c),
                    m
                },
                useDefaultSpeed: function() {
                    return v(n),
                    m
                },
                useMass: p,
                useSpeed: v
            };
            return Object.freeze(m)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ScrollBounds = function(e) {
            var t = e.limit
              , n = e.location
              , r = e.scrollBody
              , o = e.animation
              , i = e.tolerance
              , c = t.min
              , a = t.max
              , u = t.reachedMin
              , s = t.reachedMax
              , l = {
                timeout: 0
            }
              , d = {
                constrain: function(e) {
                    (function(e) {
                        return !l.timeout && (u(n.get()) ? e.get() !== c : !!s(n.get()) && e.get() !== a)
                    }
                    )(e) && (l.timeout = window.setTimeout((function() {
                        var n = t.constrain(e.get());
                        e.set(n),
                        r.useSpeed(10).useMass(3),
                        o.start(),
                        l.timeout = 0
                    }
                    ), i))
                }
            };
            return Object.freeze(d)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ScrollBy = function(e) {
            var t = e.loop
              , n = e.limit
              , r = e.target
              , o = n.min
              , i = n.max
              , c = n.reachedMin
              , a = n.reachedMax
              , u = o - i
              , s = {
                distance: function(e) {
                    var n = u * e;
                    return t ? n : function(e) {
                        var t = r.get() + e;
                        return a(t) ? i - r.get() : c(t) ? o - r.get() : e
                    }(n)
                }
            };
            return Object.freeze(s)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(1)
          , o = n(2);
        t.ScrollContain = function(e) {
            var t = e.alignment
              , n = e.contentSize
              , i = e.viewSize
              , c = e.slideIndexes
              , a = e.slidesToScroll
              , u = o.groupNumbers(c, a)
              , s = n > i
              , l = r.Limit({
                min: -n + i,
                max: 0
            });
            function d(e, t) {
                return u.slice(e, t).reduce((function(e, t) {
                    return e.concat(t)
                }
                ), [])
            }
            function f(e) {
                var t = e[0]
                  , n = e[e.length - 1]
                  , o = e.lastIndexOf(t) + 1
                  , i = e.indexOf(n);
                return r.Limit({
                    min: o,
                    max: i
                })
            }
            var v = {
                indexes: function(e) {
                    if (!s)
                        return [c];
                    var t = f(e.map(l.constrain))
                      , n = t.min
                      , r = t.max
                      , o = d(0, n)
                      , i = u.slice(n, r)
                      , a = d(r, e.length);
                    return [o].concat(i.concat([a]))
                },
                snaps: function(e) {
                    if (!s)
                        return [t.measure(n)];
                    var r = e.map(l.constrain)
                      , o = f(r)
                      , i = o.min
                      , c = o.max;
                    return r.slice(i - 1, c + 1)
                }
            };
            return Object.freeze(v)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(1);
        t.ScrollLimit = function(e) {
            var t = e.contentSize
              , n = e.loop
              , o = {
                measure: function(e) {
                    var o = e[0]
                      , i = e[e.length - 1]
                      , c = n ? o - t : i
                      , a = o;
                    return r.Limit({
                        min: c,
                        max: a
                    })
                }
            };
            return Object.freeze(o)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(1);
        t.ScrollLooper = function(e) {
            var t = e.contentSize
              , n = e.location
              , o = e.vectors
              , i = e.limit
              , c = e.pxToPercent
              , a = i.min + c.measure(.1)
              , u = i.max + c.measure(.1)
              , s = r.Limit({
                min: a,
                max: u
            })
              , l = s.reachedMin
              , d = s.reachedMax
              , f = {
                loop: function(e) {
                    if (function(e) {
                        return 1 === e ? d(n.get()) : -1 === e && l(n.get())
                    }(e)) {
                        var r = t * (-1 * e);
                        o.forEach((function(e) {
                            return e.add(r)
                        }
                        ))
                    }
                }
            };
            return Object.freeze(f)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ScrollProgress = function(e) {
            var t = e.location
              , n = e.limit
              , r = n.min
              , o = n.max
              , i = r - o
              , c = {
                get: function() {
                    return (t.get() - o) / i
                }
            };
            return Object.freeze(c)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(4)
          , o = n(1);
        t.ScrollSnap = function(e) {
            var t, n, i = e.snapSizes, c = e.alignment, a = e.loop, u = i.map(c.measure), s = (t = o.Limit({
                min: 0,
                max: i.length - 1
            }),
            n = r.Counter({
                limit: t,
                start: 0,
                loop: a
            }),
            i.map((function(e, t) {
                var r = n.set(t + 1).get();
                return e + u[t] - u[r]
            }
            ))), l = {
                measure: function(e, t) {
                    return s.slice(0, t).reduce((function(e, t) {
                        return e - t
                    }
                    ), u[0])
                }
            };
            return Object.freeze(l)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ScrollTarget = function(e) {
            var t, n, r, o = e.loop, i = e.limit, c = e.scrollSnaps, a = e.contentSize, u = i.reachedMin, s = i.reachedMax, l = i.reachedAny, d = (t = e.align,
            n = e.snapSizes,
            r = e.index.clone(),
            n.reduce((function(e, o, i) {
                var a = r.set(i).add("end" === t ? 1 : 0)
                  , u = c[i] - n[a.get()] / 2
                  , s = i ? e[i - 1].end : c[0];
                return e.concat([{
                    start: s,
                    end: u
                }])
            }
            ), []));
            function f(e, t) {
                return Math.abs(e) < Math.abs(t) ? e : t
            }
            var v = {
                byDistance: function(t, n) {
                    var r = e.target
                      , i = e.index
                      , f = r.get() + t
                      , v = function(e) {
                        for (; s(e); )
                            e -= a;
                        for (; u(e); )
                            e += a;
                        var t = d.reduce((function(t, n, r) {
                            return e <= n.start && e > n.end ? r : t
                        }
                        ), 0);
                        return {
                            distance: e,
                            index: t
                        }
                    }(f)
                      , p = !o && l(f);
                    if (p || !n) {
                        var m = i.min
                          , g = i.max
                          , b = s(f) ? m : g;
                        return {
                            distance: t,
                            index: p ? b : v.index
                        }
                    }
                    var x = {
                        distance: f,
                        index: i.get()
                    }
                      , y = 0 === t ? x : v;
                    return {
                        distance: t + function(t) {
                            var n = t.distance
                              , r = t.index
                              , i = c[e.index.max]
                              , u = o && n < i && 0 === r ? n + a : n;
                            return c[r] - u
                        }(y),
                        index: y.index
                    }
                },
                byIndex: function(t, n) {
                    var r = e.target.get()
                      , i = c[t] - r
                      , u = {
                        distance: i,
                        index: t
                    };
                    if (o) {
                        var s = i
                          , l = a + i
                          , d = i - a;
                        if (n && 1 === e.index.max) {
                            var v = f(s, 1 === n ? l : d);
                            u.distance = Math.abs(v) * n
                        } else
                            u.distance = f(f(s, l), d)
                    }
                    return u
                }
            };
            return Object.freeze(v)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ScrollTo = function(e) {
            var t = e.index
              , n = e.scrollTarget
              , r = e.animation
              , o = e.indexPrevious
              , i = e.events
              , c = e.target;
            function a(e) {
                var n = e.distance
                  , a = e.index !== t.get();
                n && (r.start(),
                c.add(n)),
                a && (o.set(t.get()),
                t.set(e.index),
                i.dispatch("select"))
            }
            var u = {
                distance: function(e, t) {
                    a(n.byDistance(e, t))
                },
                index: function(e, r) {
                    var o = t.clone().set(e);
                    a(n.byIndex(o.get(), r))
                }
            };
            return Object.freeze(u)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0);
        t.SlideLooper = function(e) {
            var t, n, o, i = e.contentSize, c = e.viewSize, a = e.slideSizes, u = e.scrollSnaps, s = Object.keys(a).map(Number), l = s.slice().reverse(), d = (t = u[0] - 1,
            n = v(t, l),
            o = p(t, n, 0),
            m(n, o, 1)).concat(function() {
                var e = v(c - u[0] - 1, s)
                  , t = p(i, s, -c);
                return m(e, -t, 0)
            }());
            function f(e, t) {
                return e.reduce((function(e, t) {
                    return e - a[t]
                }
                ), t)
            }
            function v(e, t) {
                return t.reduce((function(t, n) {
                    return f(t, e) > 0 ? t.concat([n]) : t
                }
                ), [])
            }
            function p(e, t, n) {
                return t.reduce((function(t, n) {
                    var r = t + a[n];
                    return r < e ? r : t
                }
                ), n)
            }
            function m(e, t, n) {
                var o = e.slice().sort((function(e, t) {
                    return e - t
                }
                ));
                return o.map((function(e, c) {
                    var a = e
                      , u = i * (n ? -1 : 0)
                      , l = i * (n ? 0 : 1)
                      , d = function(e, t, n) {
                        var r = s.length - 1;
                        return f(e.map((function(e) {
                            return (e + n) % r
                        }
                        )), t)
                    }(o.slice(0, c), t, n)
                      , v = r.Vector1D(-1)
                      , p = r.Vector1D(0);
                    return {
                        point: d,
                        findTarget: function(e) {
                            var t = e > d ? u : l;
                            return p.set(0).set(t)
                        },
                        location: v,
                        index: a
                    }
                }
                ))
            }
            var g = {
                loop: function(t) {
                    var n = e.location;
                    d.forEach((function(e) {
                        var r = e.findTarget
                          , o = e.location
                          , i = e.index
                          , c = r(n.get());
                        c.get() !== o.get() && (t[i].style.left = "".concat(c.get(), "%"),
                        o.set(c))
                    }
                    ))
                },
                loopPoints: d
            };
            return Object.freeze(g)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(2)
          , o = n(0);
        t.Translate = function(e) {
            var t = r.roundToDecimals(2)
              , n = o.Vector1D(0)
              , i = {
                to: function(r) {
                    var o = t(r.get());
                    n.get() !== o && (getComputedStyle(e).transform,
                    e.style.transform = "translate3d(".concat(o, "%,0px,0px)"),
                    n.set(o))
                }
            };
            return Object.freeze(i)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EventDispatcher = function() {
            var e = {
                destroy: [],
                dragEnd: [],
                dragStart: [],
                init: [],
                resize: [],
                scroll: [],
                select: [],
                settle: []
            }
              , t = {
                dispatch: function(n) {
                    return e[n].forEach((function(e) {
                        return e()
                    }
                    )),
                    t
                },
                off: function(n, r) {
                    var o = e[n];
                    return e[n] = o.filter((function(e) {
                        return e !== r
                    }
                    )),
                    t
                },
                on: function(n, r) {
                    var o = e[n];
                    return e[n] = o.concat([r]),
                    t
                }
            };
            return Object.freeze(t)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.defaultOptions = Object.freeze({
            align: "center",
            containScroll: !1,
            containerSelector: "*",
            dragFree: !1,
            draggable: !0,
            draggableClass: "is-draggable",
            draggingClass: "is-dragging",
            loop: !1,
            selectedClass: "is-selected",
            slidesToScroll: 1,
            speed: 10,
            startIndex: 0
        })
    }
    ])
}
));
