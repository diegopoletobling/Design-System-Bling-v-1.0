! function() {
    function s(n) {
        var r = Object.create(null);
        return function(e) {
            var t = c(e) ? e : JSON.stringify(e);
            return r[t] || (r[t] = n(e))
        }
    }
    var a = s(function(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }),
        l = Object.prototype.hasOwnProperty,
        p = Object.assign || function(e) {
            for (var t = arguments, n = 1; n < arguments.length; n++) {
                var r, i = Object(t[n]);
                for (r in i) l.call(i, r) && (e[r] = i[r])
            }
            return e
        };

    function c(e) {
        return "string" == typeof e || "number" == typeof e
    }

    function u() {}

    function d(e) {
        return "function" == typeof e
    }
    var h = document.body.clientWidth <= 600,
        f = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
        n = {};

    function g(e, t) {
        if (void 0 === t && (t = !1), "string" == typeof e) {
            if (void 0 !== window.Vue) return y(e);
            e = t ? y(e) : n[e] || (n[e] = y(e))
        }
        return e
    }
    var m = document,
        v = m.body,
        b = m.head;

    function y(e, t) {
        return t ? e.querySelector(t) : m.querySelector(e)
    }

    function k(e, t) {
        return [].slice.call(t ? e.querySelectorAll(t) : m.querySelectorAll(e))
    }

    function w(e, t) {
        return e = m.createElement(e), t && (e.innerHTML = t), e
    }

    function o(e, t) {
        return e.appendChild(t)
    }

    function x(e, t) {
        return e.insertBefore(t, e.children[0])
    }

    function _(e, t, n) {
        d(t) ? window.addEventListener(e, t) : e.addEventListener(t, n)
    }

    function S(e, t, n) {
        d(t) ? window.removeEventListener(e, t) : e.removeEventListener(t, n)
    }

    function A(e, t, n) {
        e && e.classList[n ? t : "toggle"](n || t)
    }

    function e(e, t) {
        void 0 === t && (t = document);
        var n = t.readyState;
        if ("complete" === n || "interactive" === n) return setTimeout(e, 0);
        t.addEventListener("DOMContentLoaded", e)
    }
    var t = Object.freeze({
            __proto__: null,
            getNode: g,
            $: m,
            body: v,
            head: b,
            find: y,
            findAll: k,
            create: w,
            appendTo: o,
            before: x,
            on: _,
            off: S,
            toggleClass: A,
            style: function(e) {
                o(b, w("style", e))
            },
            documentReady: e
        }),
        T = document.currentScript;

    function E(e) {
        var t, n = p({
                el: "#app",
                repo: "",
                maxLevel: 6,
                subMaxLevel: 0,
                loadSidebar: null,
                loadNavbar: null,
                homepage: "README.md",
                coverpage: "",
                basePath: "",
                auto2top: !1,
                name: "",
                themeColor: "",
                nameLink: window.location.pathname,
                autoHeader: !1,
                executeScript: null,
                noEmoji: !1,
                ga: "",
                ext: ".md",
                mergeNavbar: !1,
                formatUpdated: "",
                externalLinkTarget: "_blank",
                cornerExternalLinkTarget: "_blank",
                externalLinkRel: "noopener",
                routerMode: "hash",
                noCompileLinks: [],
                crossOriginLinks: [],
                relativePath: !1,
                topMargin: 0
            }, "function" == typeof window.$docsify ? window.$docsify(e) : window.$docsify),
            r = T || [].slice.call(document.getElementsByTagName("script")).filter(function(e) {
                return /docsify\./.test(e.src)
            })[0];
        if (r)
            for (var i in n) {
                !l.call(n, i) || c(t = r.getAttribute("data-" + a(i))) && (n[i] = "" === t || t)
            }
        return !0 === n.loadSidebar && (n.loadSidebar = "_sidebar" + n.ext), !0 === n.loadNavbar && (n.loadNavbar = "_navbar" + n.ext), !0 === n.coverpage && (n.coverpage = "_coverpage" + n.ext), !0 === n.repo && (n.repo = ""), !0 === n.name && (n.name = ""), window.$docsify = n
    }
    var R = /([^{]*?)\w(?=\})/g,
        $ = {
            YYYY: "getFullYear",
            YY: "getYear",
            MM: function(e) {
                return e.getMonth() + 1
            },
            DD: "getDate",
            HH: "getHours",
            mm: "getMinutes",
            ss: "getSeconds",
            fff: "getMilliseconds"
        };
    var i, r = Object.hasOwnProperty,
        O = Object.setPrototypeOf,
        C = Object.isFrozen,
        L = Object.getPrototypeOf,
        F = Object.getOwnPropertyDescriptor,
        Re = Object.freeze,
        z = Object.seal,
        M = Object.create,
        N = "undefined" != typeof Reflect && Reflect,
        P = (P = N.apply) || function(e, t, n) {
            return e.apply(t, n)
        },
        Re = Re || function(e) {
            return e
        },
        z = z || function(e) {
            return e
        },
        D = (D = N.construct) || function(e, t) {
            return new(Function.prototype.bind.apply(e, [null].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }(t))))
        },
        $e = I(Array.prototype.forEach),
        Oe = I(Array.prototype.pop),
        Ce = I(Array.prototype.push),
        Le = I(String.prototype.toLowerCase),
        Fe = I(String.prototype.match),
        ze = I(String.prototype.replace),
        Me = I(String.prototype.indexOf),
        Ne = I(String.prototype.trim),
        Pe = I(RegExp.prototype.test),
        De = (i = TypeError, function() {
            for (var e = arguments, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = e[r];
            return D(i, n)
        });

    function I(a) {
        return function(e) {
            for (var t = arguments, n = arguments.length, r = Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = t[i];
            return P(a, e, r)
        }
    }

    function Ie(e, t) {
        O && O(e, null);
        for (var n = t.length; n--;) {
            var r, i = t[n];
            "string" != typeof i || (r = Le(i)) !== i && (C(t) || (t[n] = r), i = r), e[i] = !0
        }
        return e
    }

    function je(e) {
        var t = M(null),
            n = void 0;
        for (n in e) P(r, e, [n]) && (t[n] = e[n]);
        return t
    }

    function qe(e, t) {
        for (; null !== e;) {
            var n = F(e, t);
            if (n) {
                if (n.get) return I(n.get);
                if ("function" == typeof n.value) return I(n.value)
            }
            e = L(e)
        }
        return null
    }
    var He = Re(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        Ue = Re(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
        Be = Re(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        Ze = Re(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
        Ge = Re(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
        We = Re(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
        Ve = Re(["#text"]),
        Ye = Re(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
        Xe = Re(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        Ke = Re(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        Qe = Re(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        Je = z(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        et = z(/<%[\s\S]*|[\s\S]*%>/gm),
        tt = z(/^data-[\-\w.\u00B7-\uFFFF]/),
        nt = z(/^aria-[\-\w]+$/),
        rt = z(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        it = z(/^(?:\w+script|data):/i),
        at = z(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

    function st(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var lt = function() {
            return "undefined" == typeof window ? null : window
        },
        ct = function(e, t) {
            if ("object" !== (void 0 === e ? "undefined" : ot(e)) || "function" != typeof e.createPolicy) return null;
            var n = null,
                r = "data-tt-policy-suffix";
            t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
            var i = "dompurify" + (n ? "#" + n : "");
            try {
                return e.createPolicy(i, {
                    createHTML: function(e) {
                        return e
                    }
                })
            } catch (e) {
                return console.warn("TrustedTypes policy " + i + " could not be created."), null
            }
        };
    var j, q, H = function t(e) {
        function c(e) {
            return t(e)
        }
        var s = 0 < arguments.length && void 0 !== e ? e : lt();
        if (c.version = "2.2.6", c.removed = [], !s || !s.document || 9 !== s.document.nodeType) return c.isSupported = !1, c;
        var l = s.document,
            a = s.document,
            u = s.DocumentFragment,
            n = s.HTMLTemplateElement,
            p = s.Node,
            o = s.Element,
            r = s.NodeFilter,
            i = s.NamedNodeMap,
            d = void 0 === i ? s.NamedNodeMap || s.MozNamedAttrMap : i,
            h = s.Text,
            f = s.Comment,
            g = s.DOMParser,
            e = s.trustedTypes,
            i = o.prototype,
            m = qe(i, "cloneNode"),
            v = qe(i, "nextSibling"),
            b = qe(i, "childNodes"),
            y = qe(i, "parentNode");
        "function" != typeof n || (n = a.createElement("template")).content && n.content.ownerDocument && (a = n.content.ownerDocument);
        var k = ct(e, l),
            w = k && ee ? k.createHTML("") : "",
            x = a.implementation,
            _ = a.createNodeIterator,
            S = a.getElementsByTagName,
            A = a.createDocumentFragment,
            T = l.importNode,
            E = {};
        try {
            E = je(a).documentMode ? a.documentMode : {}
        } catch (e) {}
        var R = {};
        c.isSupported = x && void 0 !== x.createHTMLDocument && 9 !== E;

        function $(e) {
            ce && ce === e || (e && "object" === (void 0 === e ? "undefined" : ot(e)) || (e = {}), e = je(e), D = "ALLOWED_TAGS" in e ? Ie({}, e.ALLOWED_TAGS) : I, j = "ALLOWED_ATTR" in e ? Ie({}, e.ALLOWED_ATTR) : q, se = "ADD_URI_SAFE_ATTR" in e ? Ie(je(le), e.ADD_URI_SAFE_ATTR) : le, ae = "ADD_DATA_URI_TAGS" in e ? Ie(je(oe), e.ADD_DATA_URI_TAGS) : oe, H = "FORBID_TAGS" in e ? Ie({}, e.FORBID_TAGS) : {}, U = "FORBID_ATTR" in e ? Ie({}, e.FORBID_ATTR) : {}, O = "USE_PROFILES" in e && e.USE_PROFILES, B = !1 !== e.ALLOW_ARIA_ATTR, Z = !1 !== e.ALLOW_DATA_ATTR, G = e.ALLOW_UNKNOWN_PROTOCOLS || !1, W = e.SAFE_FOR_TEMPLATES || !1, V = e.WHOLE_DOCUMENT || !1, K = e.RETURN_DOM || !1, Q = e.RETURN_DOM_FRAGMENT || !1, J = !1 !== e.RETURN_DOM_IMPORT, ee = e.RETURN_TRUSTED_TYPE || !1, X = e.FORCE_BODY || !1, te = !1 !== e.SANITIZE_DOM, ne = !1 !== e.KEEP_CONTENT, re = e.IN_PLACE || !1, P = e.ALLOWED_URI_REGEXP || P, W && (Z = !1), Q && (K = !0), O && (D = Ie({}, [].concat(st(Ve))), j = [], !0 === O.html && (Ie(D, He), Ie(j, Ye)), !0 === O.svg && (Ie(D, Ue), Ie(j, Xe), Ie(j, Qe)), !0 === O.svgFilters && (Ie(D, Be), Ie(j, Xe), Ie(j, Qe)), !0 === O.mathMl && (Ie(D, Ge), Ie(j, Ke), Ie(j, Qe))), e.ADD_TAGS && (D === I && (D = je(D)), Ie(D, e.ADD_TAGS)), e.ADD_ATTR && (j === q && (j = je(j)), Ie(j, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && Ie(se, e.ADD_URI_SAFE_ATTR), ne && (D["#text"] = !0), V && Ie(D, ["html", "head", "body"]), D.table && (Ie(D, ["tbody"]), delete H.tbody), Re && Re(e), ce = e)
        }
        var O, C = Je,
            L = et,
            F = tt,
            z = nt,
            M = it,
            N = at,
            P = rt,
            D = null,
            I = Ie({}, [].concat(st(He), st(Ue), st(Be), st(Ge), st(Ve))),
            j = null,
            q = Ie({}, [].concat(st(Ye), st(Xe), st(Ke), st(Qe))),
            H = null,
            U = null,
            B = !0,
            Z = !0,
            G = !1,
            W = !1,
            V = !1,
            Y = !1,
            X = !1,
            K = !1,
            Q = !1,
            J = !0,
            ee = !1,
            te = !0,
            ne = !0,
            re = !1,
            ie = Ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            ae = null,
            oe = Ie({}, ["audio", "video", "img", "source", "image", "track"]),
            se = null,
            le = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
            ce = null,
            ue = a.createElement("form"),
            pe = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]),
            de = Ie({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            he = Ie({}, Ue);
        Ie(he, Be), Ie(he, Ze);
        var fe = Ie({}, Ge);
        Ie(fe, We);

        function ge(t) {
            Ce(c.removed, {
                element: t
            });
            try {
                t.parentNode.removeChild(t)
            } catch (e) {
                try {
                    t.outerHTML = w
                } catch (e) {
                    t.remove()
                }
            }
        }

        function me(e, t) {
            try {
                Ce(c.removed, {
                    attribute: t.getAttributeNode(e),
                    from: t
                })
            } catch (e) {
                Ce(c.removed, {
                    attribute: null,
                    from: t
                })
            }
            t.removeAttribute(e)
        }

        function ve(e) {
            var t = void 0,
                n = void 0;
            X ? e = "<remove></remove>" + e : n = (r = Fe(e, /^[\r\n\t ]+/)) && r[0];
            var r, i = k ? k.createHTML(e) : e;
            try {
                t = (new g).parseFromString(i, "text/html")
            } catch (e) {}
            return t && t.documentElement || ((r = (t = x.createHTMLDocument("")).body).parentNode.removeChild(r.parentNode.firstElementChild), r.outerHTML = i), e && n && t.body.insertBefore(a.createTextNode(n), t.body.childNodes[0] || null), S.call(t, V ? "html" : "body")[0]
        }

        function be(e) {
            return _.call(e.ownerDocument || e, e, r.SHOW_ELEMENT | r.SHOW_COMMENT | r.SHOW_TEXT, function() {
                return r.FILTER_ACCEPT
            }, !1)
        }

        function ye(e) {
            return "object" === (void 0 === p ? "undefined" : ot(p)) ? e instanceof p : e && "object" === (void 0 === e ? "undefined" : ot(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }

        function ke(e, t, n) {
            R[e] && $e(R[e], function(e) {
                e.call(c, t, n, ce)
            })
        }

        function we(e) {
            var t;
            if (ke("beforeSanitizeElements", e, null), !((n = e) instanceof h || n instanceof f || "string" == typeof n.nodeName && "string" == typeof n.textContent && "function" == typeof n.removeChild && n.attributes instanceof d && "function" == typeof n.removeAttribute && "function" == typeof n.setAttribute && "string" == typeof n.namespaceURI && "function" == typeof n.insertBefore)) return ge(e), 1;
            if (Fe(e.nodeName, /[\u0080-\uFFFF]/)) return ge(e), 1;
            var n = Le(e.nodeName);
            if (ke("uponSanitizeElement", e, {
                    tagName: n,
                    allowedTags: D
                }), !ye(e.firstElementChild) && (!ye(e.content) || !ye(e.content.firstElementChild)) && Pe(/<[/\w]/g, e.innerHTML) && Pe(/<[/\w]/g, e.textContent)) return ge(e), 1;
            if (D[n] && !H[n]) return e instanceof o && ! function(e) {
                var t = y(e);
                t && t.tagName || (t = {
                    namespaceURI: Ee,
                    tagName: "template"
                });
                var n = Le(e.tagName),
                    r = Le(t.tagName);
                return e.namespaceURI === Te ? t.namespaceURI === Ee ? "svg" === n : t.namespaceURI === Ae ? "svg" === n && ("annotation-xml" === r || pe[r]) : Boolean(he[n]) : e.namespaceURI === Ae ? t.namespaceURI === Ee ? "math" === n : t.namespaceURI === Te ? "math" === n && de[r] : Boolean(fe[n]) : e.namespaceURI === Ee && (t.namespaceURI !== Te || de[r]) && (t.namespaceURI !== Ae || pe[r]) && (r = Ie({}, ["title", "style", "font", "a", "script"]), !fe[n] && (r[n] || !he[n]))
            }(e) || ("noscript" === n || "noembed" === n) && Pe(/<\/no(script|embed)/i, e.innerHTML) ? (ge(e), 1) : (W && 3 === e.nodeType && (t = e.textContent, t = ze(t, C, " "), t = ze(t, L, " "), e.textContent !== t && (Ce(c.removed, {
                element: e.cloneNode()
            }), e.textContent = t)), ke("afterSanitizeElements", e, null), 0);
            if (ne && !ie[n])
                for (var r = y(e), i = b(e), a = i.length - 1; 0 <= a; --a) r.insertBefore(m(i[a], !0), v(e));
            return ge(e), 1
        }

        function xe(e, t, n) {
            if (te && ("id" === t || "name" === t) && (n in a || n in ue)) return !1;
            if (!(Z && Pe(F, t) || B && Pe(z, t))) {
                if (!j[t] || U[t]) return !1;
                if (!se[t] && !Pe(P, ze(n, N, "")) && ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== Me(n, "data:") || !ae[e]) && (!G || Pe(M, ze(n, N, ""))) && n) return !1
            }
            return !0
        }

        function _e(e) {
            var t = void 0,
                n = void 0;
            ke("beforeSanitizeAttributes", e, null);
            var r = e.attributes;
            if (r) {
                for (var i = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: j
                    }, n = r.length; n--;) {
                    var a = (l = r[n]).name,
                        o = l.namespaceURI,
                        t = Ne(l.value),
                        s = Le(a);
                    if (i.attrName = s, i.attrValue = t, i.keepAttr = !0, i.forceKeepAttr = void 0, ke("uponSanitizeAttribute", e, i), t = i.attrValue, !i.forceKeepAttr && (me(a, e), i.keepAttr))
                        if (Pe(/\/>/i, t)) me(a, e);
                        else {
                            W && (t = ze(t, C, " "), t = ze(t, L, " "));
                            var l = e.nodeName.toLowerCase();
                            if (xe(l, s, t)) try {
                                o ? e.setAttributeNS(o, a, t) : e.setAttribute(a, t), Oe(c.removed)
                            } catch (e) {}
                        }
                }
                ke("afterSanitizeAttributes", e, null)
            }
        }

        function Se(e) {
            var t, n = be(e);
            for (ke("beforeSanitizeShadowDOM", e, null); t = n.nextNode();) ke("uponSanitizeShadowNode", t, null), we(t) || (t.content instanceof u && Se(t.content), _e(t));
            ke("afterSanitizeShadowDOM", e, null)
        }
        var Ae = "http://www.w3.org/1998/Math/MathML",
            Te = "http://www.w3.org/2000/svg",
            Ee = "http://www.w3.org/1999/xhtml";
        return c.sanitize = function(e, t) {
            var n, r = void 0,
                i = void 0,
                a = void 0;
            if ("string" != typeof(e = e || "\x3c!--\x3e") && !ye(e)) {
                if ("function" != typeof e.toString) throw De("toString is not a function");
                if ("string" != typeof(e = e.toString())) throw De("dirty is not a string, aborting")
            }
            if (!c.isSupported) {
                if ("object" === ot(s.toStaticHTML) || "function" == typeof s.toStaticHTML) {
                    if ("string" == typeof e) return s.toStaticHTML(e);
                    if (ye(e)) return s.toStaticHTML(e.outerHTML)
                }
                return e
            }
            if (Y || $(t), c.removed = [], "string" == typeof e && (re = !1), !re)
                if (e instanceof p) 1 === (t = (r = ve("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === t.nodeName || "HTML" === t.nodeName ? r = t : r.appendChild(t);
                else {
                    if (!K && !W && !V && -1 === e.indexOf("<")) return k && ee ? k.createHTML(e) : e;
                    if (!(r = ve(e))) return K ? null : w
                } r && X && ge(r.firstChild);
            for (var o = be(re ? e : r); n = o.nextNode();) 3 === n.nodeType && n === i || we(n) || (n.content instanceof u && Se(n.content), _e(n), i = n);
            if (i = null, re) return e;
            if (K) {
                if (Q)
                    for (a = A.call(r.ownerDocument); r.firstChild;) a.appendChild(r.firstChild);
                else a = r;
                return J && (a = T.call(l, a, !0)), a
            }
            return e = V ? r.outerHTML : r.innerHTML, W && (e = ze(e, C, " "), e = ze(e, L, " ")), k && ee ? k.createHTML(e) : e
        }, c.setConfig = function(e) {
            $(e), Y = !0
        }, c.clearConfig = function() {
            ce = null, Y = !1
        }, c.isValidAttribute = function(e, t, n) {
            return ce || $({}), e = Le(e), t = Le(t), xe(e, t, n)
        }, c.addHook = function(e, t) {
            "function" == typeof t && (R[e] = R[e] || [], Ce(R[e], t))
        }, c.removeHook = function(e) {
            R[e] && Oe(R[e])
        }, c.removeHooks = function(e) {
            R[e] && (R[e] = [])
        }, c.removeAllHooks = function() {
            R = {}
        }, c
    }();

    function U(e) {
        var t, n = e.loaded,
            r = e.total,
            i = e.step;
        j || ((e = w("div")).classList.add("progress"), o(v, e), j = e), t = i ? 80 < (t = parseInt(j.style.width || 0, 10) + i) ? 80 : t : Math.floor(n / r * 100), j.style.opacity = 1, j.style.width = 95 <= t ? "100%" : t + "%", 95 <= t && (clearTimeout(q), q = setTimeout(function(e) {
            j.style.opacity = 0, j.style.width = "0%"
        }, 200))
    }
    var B = {};

    function Z(i, e, t) {
        void 0 === e && (e = !1), void 0 === t && (t = {});

        function a() {
            o.addEventListener.apply(o, arguments)
        }
        var n, o = new XMLHttpRequest,
            r = B[i];
        if (r) return {
            then: function(e) {
                return e(r.content, r.opt)
            },
            abort: u
        };
        for (n in o.open("GET", i), t) l.call(t, n) && o.setRequestHeader(n, t[n]);
        return o.send(), {
            then: function(t, n) {
                var r;
                void 0 === n && (n = u), e && (r = setInterval(function(e) {
                    return U({
                        step: Math.floor(5 * Math.random() + 1)
                    })
                }, 500), a("progress", U), a("loadend", function(e) {
                    U(e), clearInterval(r)
                })), a("error", n), a("load", function(e) {
                    e = e.target;
                    400 <= e.status ? n(e) : (e = B[i] = {
                        content: e.response,
                        opt: {
                            updatedAt: o.getResponseHeader("last-modified")
                        }
                    }, t(e.content, e.opt))
                })
            },
            abort: function(e) {
                return 4 !== o.readyState && o.abort()
            }
        }
    }

    function G(e, t) {
        e.innerHTML = e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g, t)
    }

    function W(e, t, n, r) {
        void 0 === r && (r = u);
        var i = e._hooks[t],
            a = function(t) {
                var e = i[t];
                t >= i.length ? r(n) : "function" == typeof e ? 2 === e.length ? e(n, function(e) {
                    n = e, a(t + 1)
                }) : (e = e(n), n = void 0 === e ? n : e, a(t + 1)) : a(t + 1)
            };
        a(0)
    }
    var V = m.title;

    function Y() {
        var e, t = g("section.cover");
        t && (e = t.getBoundingClientRect().height, window.pageYOffset >= e || t.classList.contains("hidden") ? A(v, "add", "sticky") : A(v, "remove", "sticky"))
    }

    function X(e, t, r, n) {
        var i = [];
        null != (t = g(t)) && (i = k(t, "a"));
        var a, o = decodeURI(e.toURL(e.getCurrentPath()));
        return i.sort(function(e, t) {
            return t.href.length - e.href.length
        }).forEach(function(e) {
            var t = decodeURI(e.getAttribute("href")),
                n = r ? e.parentNode : e;
            e.title = e.title || e.innerText, 0 !== o.indexOf(t) || a ? A(n, "remove", "active") : (a = e, A(n, "add", "active"))
        }), n && (m.title = a ? a.title || a.innerText + " - " + V : V), a
    }
    var K = decodeURIComponent,
        Q = encodeURIComponent;

    function J(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, "")) && e.split("&").forEach(function(e) {
            e = e.replace(/\+/g, " ").split("=");
            t[e[0]] = e[1] && K(e[1])
        }), t
    }

    function ee(e, t) {
        void 0 === t && (t = []);
        var n, r = [];
        for (n in e) - 1 < t.indexOf(n) || r.push(e[n] ? (Q(n) + "=" + Q(e[n])).toLowerCase() : Q(n));
        return r.length ? "?" + r.join("&") : ""
    }
    var te = s(function(e) {
            return /(:|(\/{2}))/g.test(e)
        }),
        ne = s(function(e) {
            return e.split(/[?#]/)[0]
        }),
        re = s(function(e) {
            if (/\/$/g.test(e)) return e;
            e = e.match(/(\S*\/)[^/]+$/);
            return e ? e[1] : ""
        }),
        ie = s(function(e) {
            return e.replace(/^\/+/, "/").replace(/([^:])\/{2,}/g, "$1/")
        }),
        ae = s(function(e) {
            for (var t = e.replace(/^\//, "").split("/"), n = [], r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                ".." === a ? n.pop() : "." !== a && n.push(a)
            }
            return "/" + n.join("/")
        });

    function oe(e) {
        return e.split("/").filter(function(e) {
            return -1 === e.indexOf("#")
        }).join("/")
    }

    function se() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return ie(e.map(oe).join("/"))
    }
    var le = s(function(e) {
        return e.replace("#", "?id=")
    });

    function ce(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }

    function ue(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var pe = (function(e, t, n) {
        return t && ue(e.prototype, t), n && ue(e, n), e
    }(de, [{
        key: "getIntermediateValue",
        value: function(e) {
            return this.decimal ? e : Math.round(e)
        }
    }, {
        key: "getFinalValue",
        value: function() {
            return this.end
        }
    }]), de);

    function de() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, de), this.start = e.start, this.end = e.end, this.decimal = e.decimal
    }

    function he(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var fe = (function(e, t, n) {
        return t && he(e.prototype, t), n && he(e, n), e
    }(ge, [{
        key: "begin",
        value: function() {
            return this.isRunning || this.next === this.end || (this.frame = window.requestAnimationFrame(this._tick.bind(this))), this
        }
    }, {
        key: "stop",
        value: function() {
            return window.cancelAnimationFrame(this.frame), this.isRunning = !1, this.frame = null, this.timeStart = null, this.next = null, this
        }
    }, {
        key: "on",
        value: function(e, t) {
            return this.events[e] = this.events[e] || [], this.events[e].push(t), this
        }
    }, {
        key: "_emit",
        value: function(e, t) {
            var n = this,
                e = this.events[e];
            e && e.forEach(function(e) {
                return e.call(n, t)
            })
        }
    }, {
        key: "_tick",
        value: function(e) {
            this.isRunning = !0;
            var t = this.next || this.start;
            this.timeStart || (this.timeStart = e), this.timeElapsed = e - this.timeStart, this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration), this._shouldTick(t) ? (this._emit("tick", this.tweener.getIntermediateValue(this.next)), this.frame = window.requestAnimationFrame(this._tick.bind(this))) : (this._emit("tick", this.tweener.getFinalValue()), this._emit("done", null))
        }
    }, {
        key: "_shouldTick",
        value: function(e) {
            return {
                up: this.next < this.end && e <= this.next,
                down: this.next > this.end && e >= this.next
            } [this.direction]
        }
    }, {
        key: "_defaultEase",
        value: function(e, t, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
        }
    }]), ge);

    function ge() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, ge), this.duration = e.duration || 1e3, this.ease = e.easing || this._defaultEase, this.tweener = e.tweener || new pe(e), this.start = this.tweener.start, this.end = this.tweener.end, this.frame = null, this.next = null, this.isRunning = !1, this.events = {}, this.direction = this.start < this.end ? "up" : "down"
    }
    var me = {},
        ve = !1,
        be = null,
        ye = !0,
        ke = 0;

    function we(e) {
        if (ye) {
            for (var t, n, r = g(".sidebar"), i = k(".anchor"), a = y(r, ".sidebar-nav"), o = y(r, "li.active"), s = document.documentElement, l = (s && s.scrollTop || document.body.scrollTop) - ke, c = 0, u = i.length; c < u; c += 1) {
                var p = i[c];
                if (p.offsetTop > l) {
                    t = t || p;
                    break
                }
                t = p
            }!t || (n = me[xe(e, t.getAttribute("data-id"))]) && n !== o && (o && o.classList.remove("active"), n.classList.add("active"), o = n, !ve && v.classList.contains("sticky") && (s = r.clientHeight, e = o.offsetTop + o.clientHeight + 40, n = o.offsetTop >= a.scrollTop && e <= a.scrollTop + s, o = +e < s, r.scrollTop = n ? a.scrollTop : o ? 0 : e - s))
        }
    }

    function xe(e, t) {
        return decodeURIComponent(e) + "?id=" + decodeURIComponent(t)
    }

    function _e(e, t) {
        var n, r;
        t && (r = E().topMargin, (n = y("#" + t)) && (n = n, void 0 === (r = r) && (r = 0), be && be.stop(), ye = !1, be = new fe({
            start: window.pageYOffset,
            end: Math.round(n.getBoundingClientRect().top) + window.pageYOffset - r,
            duration: 500
        }).on("tick", function(e) {
            return window.scrollTo(0, e)
        }).on("done", function() {
            ye = !0, be = null
        }).begin()), e = me[xe(e, t)], (t = y(g(".sidebar"), "li.active")) && t.classList.remove("active"), e && e.classList.add("active"))
    }
    var Se = m.scrollingElement || m.documentElement;
    var Ae = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function Te(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }

    function Ee(e) {
        return gt[e]
    }
    var ut = Te(function(t) {
            function e() {
                return {
                    baseUrl: null,
                    breaks: !1,
                    gfm: !0,
                    headerIds: !0,
                    headerPrefix: "",
                    highlight: null,
                    langPrefix: "language-",
                    mangle: !0,
                    pedantic: !1,
                    renderer: null,
                    sanitize: !1,
                    sanitizer: null,
                    silent: !1,
                    smartLists: !1,
                    smartypants: !1,
                    tokenizer: null,
                    walkTokens: null,
                    xhtml: !1
                }
            }
            t.exports = {
                defaults: e(),
                getDefaults: e,
                changeDefaults: function(e) {
                    t.exports.defaults = e
                }
            }
        }),
        pt = (ut.defaults, ut.getDefaults, ut.changeDefaults, /[&<>"']/),
        dt = /[&<>"']/g,
        ht = /[<>"']|&(?!#?\w+;)/,
        ft = /[<>"']|&(?!#?\w+;)/g,
        gt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
    var mt = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

    function vt(e) {
        return e.replace(mt, function(e, t) {
            return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
        })
    }
    var bt = /(^|[^\[])\^/g;
    var yt = /[^\w:]/g,
        kt = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    var wt = {},
        xt = /^[^:]+:\/*[^/]*$/,
        _t = /^([^:]+:)[\s\S]*$/,
        St = /^([^:]+:\/*[^/]*)[\s\S]*$/;

    function At(e, t) {
        wt[" " + e] || (xt.test(e) ? wt[" " + e] = e + "/" : wt[" " + e] = Tt(e, "/", !0));
        var n = -1 === (e = wt[" " + e]).indexOf(":");
        return "//" === t.substring(0, 2) ? n ? t : e.replace(_t, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(St, "$1") + t : e + t
    }

    function Tt(e, t, n) {
        var r = e.length;
        if (0 === r) return "";
        for (var i = 0; i < r;) {
            var a = e.charAt(r - i - 1);
            if (a !== t || n) {
                if (a === t || !n) break;
                i++
            } else i++
        }
        return e.substr(0, r - i)
    }
    var Et = function(e, t) {
            if (t) {
                if (pt.test(e)) return e.replace(dt, Ee)
            } else if (ht.test(e)) return e.replace(ft, Ee);
            return e
        },
        Rt = vt,
        $t = function(n, e) {
            n = n.source || n, e = e || "";
            var r = {
                replace: function(e, t) {
                    return t = (t = t.source || t).replace(bt, "$1"), n = n.replace(e, t), r
                },
                getRegex: function() {
                    return new RegExp(n, e)
                }
            };
            return r
        },
        Ot = function(e, t, n) {
            if (e) {
                var r;
                try {
                    r = decodeURIComponent(vt(n)).replace(yt, "").toLowerCase()
                } catch (e) {
                    return null
                }
                if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
            }
            t && !kt.test(n) && (n = At(t, n));
            try {
                n = encodeURI(n).replace(/%25/g, "%")
            } catch (e) {
                return null
            }
            return n
        },
        Ct = {
            exec: function() {}
        },
        Lt = function(e) {
            for (var t, n, r = arguments, i = 1; i < arguments.length; i++)
                for (n in t = r[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        },
        Ft = function(e, t) {
            var n = e.replace(/\|/g, function(e, t, n) {
                    for (var r = !1, i = t; 0 <= --i && "\\" === n[i];) r = !r;
                    return r ? "|" : " |"
                }).split(/ \|/),
                r = 0;
            if (n.length > t) n.splice(t);
            else
                for (; n.length < t;) n.push("");
            for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
            return n
        },
        zt = function(e, t) {
            if (-1 === e.indexOf(t[1])) return -1;
            for (var n = e.length, r = 0, i = 0; i < n; i++)
                if ("\\" === e[i]) i++;
                else if (e[i] === t[0]) r++;
            else if (e[i] === t[1] && --r < 0) return i;
            return -1
        },
        N = function(e) {
            e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
        },
        z = function(e, t) {
            if (t < 1) return "";
            for (var n = ""; 1 < t;) 1 & t && (n += e), t >>= 1, e += e;
            return n + e
        },
        Mt = ut.defaults,
        Nt = Tt,
        Pt = Ft,
        Dt = Et,
        It = zt;

    function jt(e, t, n) {
        var r = t.href,
            i = t.title ? Dt(t.title) : null,
            t = e[1].replace(/\\([\[\]])/g, "$1");
        return "!" !== e[0].charAt(0) ? {
            type: "link",
            raw: n,
            href: r,
            title: i,
            text: t
        } : {
            type: "image",
            raw: n,
            href: r,
            title: i,
            text: Dt(t)
        }
    }
    var qt = function() {
            function e(e) {
                this.options = e || Mt
            }
            return e.prototype.space = function(e) {
                e = this.rules.block.newline.exec(e);
                if (e) return 1 < e[0].length ? {
                    type: "space",
                    raw: e[0]
                } : {
                    raw: "\n"
                }
            }, e.prototype.code = function(e, t) {
                e = this.rules.block.code.exec(e);
                if (e) {
                    t = t[t.length - 1];
                    if (t && "paragraph" === t.type) return {
                        raw: e[0],
                        text: e[0].trimRight()
                    };
                    t = e[0].replace(/^ {1,4}/gm, "");
                    return {
                        type: "code",
                        raw: e[0],
                        codeBlockStyle: "indented",
                        text: this.options.pedantic ? t : Nt(t, "\n")
                    }
                }
            }, e.prototype.fences = function(e) {
                var t = this.rules.block.fences.exec(e);
                if (t) {
                    var n = t[0],
                        e = function(e, t) {
                            if (null === (e = e.match(/^(\s+)(?:```)/))) return t;
                            var n = e[1];
                            return t.split("\n").map(function(e) {
                                var t = e.match(/^\s+/);
                                return null !== t && t[0].length >= n.length ? e.slice(n.length) : e
                            }).join("\n")
                        }(n, t[3] || "");
                    return {
                        type: "code",
                        raw: n,
                        lang: t[2] ? t[2].trim() : t[2],
                        text: e
                    }
                }
            }, e.prototype.heading = function(e) {
                var t = this.rules.block.heading.exec(e);
                if (t) {
                    var n = t[2].trim();
                    return /#$/.test(n) && (e = Nt(n, "#"), !this.options.pedantic && e && !/ $/.test(e) || (n = e.trim())), {
                        type: "heading",
                        raw: t[0],
                        depth: t[1].length,
                        text: n
                    }
                }
            }, e.prototype.nptable = function(e) {
                e = this.rules.block.nptable.exec(e);
                if (e) {
                    var t = {
                        type: "table",
                        header: Pt(e[1].replace(/^ *| *\| *$/g, "")),
                        align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
                        raw: e[0]
                    };
                    if (t.header.length === t.align.length) {
                        for (var n = t.align.length, r = 0; r < n; r++) /^ *-+: *$/.test(t.align[r]) ? t.align[r] = "right" : /^ *:-+: *$/.test(t.align[r]) ? t.align[r] = "center" : /^ *:-+ *$/.test(t.align[r]) ? t.align[r] = "left" : t.align[r] = null;
                        for (n = t.cells.length, r = 0; r < n; r++) t.cells[r] = Pt(t.cells[r], t.header.length);
                        return t
                    }
                }
            }, e.prototype.hr = function(e) {
                e = this.rules.block.hr.exec(e);
                if (e) return {
                    type: "hr",
                    raw: e[0]
                }
            }, e.prototype.blockquote = function(e) {
                var t = this.rules.block.blockquote.exec(e);
                if (t) {
                    e = t[0].replace(/^ *> ?/gm, "");
                    return {
                        type: "blockquote",
                        raw: t[0],
                        text: e
                    }
                }
            }, e.prototype.list = function(e) {
                e = this.rules.block.list.exec(e);
                if (e) {
                    for (var t, n, r, i, a, o = e[0], s = e[2], l = 1 < s.length, c = {
                            type: "list",
                            raw: o,
                            ordered: l,
                            start: l ? +s.slice(0, -1) : "",
                            loose: !1,
                            items: []
                        }, u = e[0].match(this.rules.block.item), p = !1, d = u.length, h = this.rules.block.listItemStart.exec(u[0]), f = 0; f < d; f++) {
                        if (o = t = u[f], f !== d - 1) {
                            if (r = this.rules.block.listItemStart.exec(u[f + 1]), this.options.pedantic ? r[1].length > h[1].length : r[1].length > h[0].length || 3 < r[1].length) {
                                u.splice(f, 2, u[f] + "\n" + u[f + 1]), f--, d--;
                                continue
                            }(!this.options.pedantic || this.options.smartLists ? r[2][r[2].length - 1] !== s[s.length - 1] : l == (1 === r[2].length)) && (n = u.slice(f + 1).join("\n"), c.raw = c.raw.substring(0, c.raw.length - n.length), f = d - 1), h = r
                        }
                        r = t.length, ~(t = t.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (r -= t.length, t = this.options.pedantic ? t.replace(/^ {1,4}/gm, "") : t.replace(new RegExp("^ {1," + r + "}", "gm"), "")), r = p || /\n\n(?!\s*$)/.test(t), f !== d - 1 && (p = "\n" === t.charAt(t.length - 1), r = r || p), r && (c.loose = !0), this.options.gfm && (a = void 0, (i = /^\[[ xX]\] /.test(t)) && (a = " " !== t[1], t = t.replace(/^\[[ xX]\] +/, ""))), c.items.push({
                            type: "list_item",
                            raw: o,
                            task: i,
                            checked: a,
                            loose: r,
                            text: t
                        })
                    }
                    return c
                }
            }, e.prototype.html = function(e) {
                e = this.rules.block.html.exec(e);
                if (e) return {
                    type: this.options.sanitize ? "paragraph" : "html",
                    raw: e[0],
                    pre: !this.options.sanitizer && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : Dt(e[0]) : e[0]
                }
            }, e.prototype.def = function(e) {
                e = this.rules.block.def.exec(e);
                if (e) return e[3] && (e[3] = e[3].substring(1, e[3].length - 1)), {
                    tag: e[1].toLowerCase().replace(/\s+/g, " "),
                    raw: e[0],
                    href: e[2],
                    title: e[3]
                }
            }, e.prototype.table = function(e) {
                e = this.rules.block.table.exec(e);
                if (e) {
                    var t = {
                        type: "table",
                        header: Pt(e[1].replace(/^ *| *\| *$/g, "")),
                        align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : []
                    };
                    if (t.header.length === t.align.length) {
                        t.raw = e[0];
                        for (var n = t.align.length, r = 0; r < n; r++) /^ *-+: *$/.test(t.align[r]) ? t.align[r] = "right" : /^ *:-+: *$/.test(t.align[r]) ? t.align[r] = "center" : /^ *:-+ *$/.test(t.align[r]) ? t.align[r] = "left" : t.align[r] = null;
                        for (n = t.cells.length, r = 0; r < n; r++) t.cells[r] = Pt(t.cells[r].replace(/^ *\| *| *\| *$/g, ""), t.header.length);
                        return t
                    }
                }
            }, e.prototype.lheading = function(e) {
                e = this.rules.block.lheading.exec(e);
                if (e) return {
                    type: "heading",
                    raw: e[0],
                    depth: "=" === e[2].charAt(0) ? 1 : 2,
                    text: e[1]
                }
            }, e.prototype.paragraph = function(e) {
                e = this.rules.block.paragraph.exec(e);
                if (e) return {
                    type: "paragraph",
                    raw: e[0],
                    text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1]
                }
            }, e.prototype.text = function(e, t) {
                e = this.rules.block.text.exec(e);
                if (e) {
                    t = t[t.length - 1];
                    return t && "text" === t.type ? {
                        raw: e[0],
                        text: e[0]
                    } : {
                        type: "text",
                        raw: e[0],
                        text: e[0]
                    }
                }
            }, e.prototype.escape = function(e) {
                e = this.rules.inline.escape.exec(e);
                if (e) return {
                    type: "escape",
                    raw: e[0],
                    text: Dt(e[1])
                }
            }, e.prototype.tag = function(e, t, n) {
                e = this.rules.inline.tag.exec(e);
                if (e) return !t && /^<a /i.test(e[0]) ? t = !0 : t && /^<\/a>/i.test(e[0]) && (t = !1), !n && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (n = !1), {
                    type: this.options.sanitize ? "text" : "html",
                    raw: e[0],
                    inLink: t,
                    inRawBlock: n,
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : Dt(e[0]) : e[0]
                }
            }, e.prototype.link = function(e) {
                var t = this.rules.inline.link.exec(e);
                if (t) {
                    var n = t[2].trim();
                    if (!this.options.pedantic && /^</.test(n)) {
                        if (!/>$/.test(n)) return;
                        e = Nt(n.slice(0, -1), "\\");
                        if ((n.length - e.length) % 2 == 0) return
                    } else {
                        var r = It(t[2], "()"); - 1 < r && (a = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + r, t[2] = t[2].substring(0, r), t[0] = t[0].substring(0, a).trim(), t[3] = "")
                    }
                    var i, r = t[2],
                        a = "";
                    return this.options.pedantic ? (i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r), i && (r = i[1], a = i[3])) : a = t[3] ? t[3].slice(1, -1) : "", r = r.trim(), /^</.test(r) && (r = this.options.pedantic && !/>$/.test(n) ? r.slice(1) : r.slice(1, -1)), jt(t, {
                        href: r ? r.replace(this.rules.inline._escapes, "$1") : r,
                        title: a ? a.replace(this.rules.inline._escapes, "$1") : a
                    }, t[0])
                }
            }, e.prototype.reflink = function(e, t) {
                if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                    e = (n[2] || n[1]).replace(/\s+/g, " ");
                    if ((e = t[e.toLowerCase()]) && e.href) return jt(n, e, n[0]);
                    var n = n[0].charAt(0);
                    return {
                        type: "text",
                        raw: n,
                        text: n
                    }
                }
            }, e.prototype.strong = function(e, t, n) {
                void 0 === n && (n = "");
                var r = this.rules.inline.strong.start.exec(e);
                if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
                    t = t.slice(-1 * e.length);
                    var i, a = "**" === r[0] ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
                    for (a.lastIndex = 0; null != (r = a.exec(t));)
                        if (i = this.rules.inline.strong.middle.exec(t.slice(0, r.index + 3))) return {
                            type: "strong",
                            raw: e.slice(0, i[0].length),
                            text: e.slice(2, i[0].length - 2)
                        }
                }
            }, e.prototype.em = function(e, t, n) {
                void 0 === n && (n = "");
                var r = this.rules.inline.em.start.exec(e);
                if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
                    t = t.slice(-1 * e.length);
                    var i, a = "*" === r[0] ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
                    for (a.lastIndex = 0; null != (r = a.exec(t));)
                        if (i = this.rules.inline.em.middle.exec(t.slice(0, r.index + 2))) return {
                            type: "em",
                            raw: e.slice(0, i[0].length),
                            text: e.slice(1, i[0].length - 1)
                        }
                }
            }, e.prototype.codespan = function(e) {
                var t = this.rules.inline.code.exec(e);
                if (t) {
                    var n = t[2].replace(/\n/g, " "),
                        r = /[^ ]/.test(n),
                        e = /^ /.test(n) && / $/.test(n);
                    return r && e && (n = n.substring(1, n.length - 1)), n = Dt(n, !0), {
                        type: "codespan",
                        raw: t[0],
                        text: n
                    }
                }
            }, e.prototype.br = function(e) {
                e = this.rules.inline.br.exec(e);
                if (e) return {
                    type: "br",
                    raw: e[0]
                }
            }, e.prototype.del = function(e) {
                e = this.rules.inline.del.exec(e);
                if (e) return {
                    type: "del",
                    raw: e[0],
                    text: e[2]
                }
            }, e.prototype.autolink = function(e, t) {
                e = this.rules.inline.autolink.exec(e);
                if (e) {
                    var n, t = "@" === e[2] ? "mailto:" + (n = Dt(this.options.mangle ? t(e[1]) : e[1])) : n = Dt(e[1]);
                    return {
                        type: "link",
                        raw: e[0],
                        text: n,
                        href: t,
                        tokens: [{
                            type: "text",
                            raw: n,
                            text: n
                        }]
                    }
                }
            }, e.prototype.url = function(e, t) {
                var n, r, i, a;
                if (n = this.rules.inline.url.exec(e)) {
                    if ("@" === n[2]) i = "mailto:" + (r = Dt(this.options.mangle ? t(n[0]) : n[0]));
                    else {
                        for (; a = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0], a !== n[0];);
                        r = Dt(n[0]), i = "www." === n[1] ? "http://" + r : r
                    }
                    return {
                        type: "link",
                        raw: n[0],
                        text: r,
                        href: i,
                        tokens: [{
                            type: "text",
                            raw: r,
                            text: r
                        }]
                    }
                }
            }, e.prototype.inlineText = function(e, t, n) {
                e = this.rules.inline.text.exec(e);
                if (e) {
                    n = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : Dt(e[0]) : e[0] : Dt(this.options.smartypants ? n(e[0]) : e[0]);
                    return {
                        type: "text",
                        raw: e[0],
                        text: n
                    }
                }
            }, e
        }(),
        Ft = Ct,
        zt = $t,
        Ct = Lt,
        $t = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
            html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            nptable: Ft,
            table: Ft,
            lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
            _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
            _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        };
    $t.def = zt($t.def).replace("label", $t._label).replace("title", $t._title).getRegex(), $t.bullet = /(?:[*+-]|\d{1,9}[.)])/, $t.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, $t.item = zt($t.item, "gm").replace(/bull/g, $t.bullet).getRegex(), $t.listItemStart = zt(/^( *)(bull)/).replace("bull", $t.bullet).getRegex(), $t.list = zt($t.list).replace(/bull/g, $t.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + $t.def.source + ")").getRegex(), $t._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", $t._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, $t.html = zt($t.html, "i").replace("comment", $t._comment).replace("tag", $t._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $t.paragraph = zt($t._paragraph).replace("hr", $t.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", $t._tag).getRegex(), $t.blockquote = zt($t.blockquote).replace("paragraph", $t.paragraph).getRegex(), $t.normal = Ct({}, $t), $t.gfm = Ct({}, $t.normal, {
        nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
        table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    }), $t.gfm.nptable = zt($t.gfm.nptable).replace("hr", $t.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", $t._tag).getRegex(), $t.gfm.table = zt($t.gfm.table).replace("hr", $t.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", $t._tag).getRegex(), $t.pedantic = Ct({}, $t.normal, {
        html: zt("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", $t._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: Ft,
        paragraph: zt($t.normal._paragraph).replace("hr", $t.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", $t.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    });
    Ft = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: Ft,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        strong: {
            start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
            middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
            endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
            endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/
        },
        em: {
            start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
            middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
            endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
            endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: Ft,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\s*punctuation])/,
        _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"
    };
    Ft.punctuation = zt(Ft.punctuation).replace(/punctuation/g, Ft._punctuation).getRegex(), Ft._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>", Ft._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*", Ft._comment = zt($t._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), Ft.em.start = zt(Ft.em.start).replace(/punctuation/g, Ft._punctuation).getRegex(), Ft.em.middle = zt(Ft.em.middle).replace(/punctuation/g, Ft._punctuation).replace(/overlapSkip/g, Ft._overlapSkip).getRegex(), Ft.em.endAst = zt(Ft.em.endAst, "g").replace(/punctuation/g, Ft._punctuation).getRegex(), Ft.em.endUnd = zt(Ft.em.endUnd, "g").replace(/punctuation/g, Ft._punctuation).getRegex(), Ft.strong.start = zt(Ft.strong.start).replace(/punctuation/g, Ft._punctuation).getRegex(), Ft.strong.middle = zt(Ft.strong.middle).replace(/punctuation/g, Ft._punctuation).replace(/overlapSkip/g, Ft._overlapSkip).getRegex(), Ft.strong.endAst = zt(Ft.strong.endAst, "g").replace(/punctuation/g, Ft._punctuation).getRegex(), Ft.strong.endUnd = zt(Ft.strong.endUnd, "g").replace(/punctuation/g, Ft._punctuation).getRegex(), Ft.blockSkip = zt(Ft._blockSkip, "g").getRegex(), Ft.overlapSkip = zt(Ft._overlapSkip, "g").getRegex(), Ft._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, Ft._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, Ft._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, Ft.autolink = zt(Ft.autolink).replace("scheme", Ft._scheme).replace("email", Ft._email).getRegex(), Ft._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, Ft.tag = zt(Ft.tag).replace("comment", Ft._comment).replace("attribute", Ft._attribute).getRegex(), Ft._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ft._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, Ft._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, Ft.link = zt(Ft.link).replace("label", Ft._label).replace("href", Ft._href).replace("title", Ft._title).getRegex(), Ft.reflink = zt(Ft.reflink).replace("label", Ft._label).getRegex(), Ft.reflinkSearch = zt(Ft.reflinkSearch, "g").replace("reflink", Ft.reflink).replace("nolink", Ft.nolink).getRegex(), Ft.normal = Ct({}, Ft), Ft.pedantic = Ct({}, Ft.normal, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: zt(/^!?\[(label)\]\((.*?)\)/).replace("label", Ft._label).getRegex(),
        reflink: zt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ft._label).getRegex()
    }), Ft.gfm = Ct({}, Ft.normal, {
        escape: zt(Ft.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
    }), Ft.gfm.url = zt(Ft.gfm.url, "i").replace("email", Ft.gfm._extended_email).getRegex(), Ft.breaks = Ct({}, Ft.gfm, {
        br: zt(Ft.br).replace("{2,}", "*").getRegex(),
        text: zt(Ft.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    var Ft = {
            block: $t,
            inline: Ft
        },
        Ht = ut.defaults,
        Ut = Ft.block,
        Bt = Ft.inline,
        Zt = z;

    function Gt(e) {
        return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
    }

    function Wt(e) {
        for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), .5 < Math.random() && (t = "x" + t.toString(16)), n += "&#" + t + ";";
        return n
    }
    var Vt = function() {
            function n(e) {
                this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Ht, this.options.tokenizer = this.options.tokenizer || new qt, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
                e = {
                    block: Ut.normal,
                    inline: Bt.normal
                };
                this.options.pedantic ? (e.block = Ut.pedantic, e.inline = Bt.pedantic) : this.options.gfm && (e.block = Ut.gfm, this.options.breaks ? e.inline = Bt.breaks : e.inline = Bt.gfm), this.tokenizer.rules = e
            }
            var e = {
                rules: {
                    configurable: !0
                }
            };
            return e.rules.get = function() {
                return {
                    block: Ut,
                    inline: Bt
                }
            }, n.lex = function(e, t) {
                return new n(t).lex(e)
            }, n.lexInline = function(e, t) {
                return new n(t).inlineTokens(e)
            }, n.prototype.lex = function(e) {
                return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), this.tokens
            }, n.prototype.blockTokens = function(e, t, n) {
                var r, i, a, o;
                for (void 0 === t && (t = []), void 0 === n && (n = !0), this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e;)
                    if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.type && t.push(r);
                    else if (r = this.tokenizer.code(e, t)) e = e.substring(r.raw.length), r.type ? t.push(r) : ((o = t[t.length - 1]).raw += "\n" + r.raw, o.text += "\n" + r.text);
                else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), t.push(r);
                else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), t.push(r);
                else if (r = this.tokenizer.nptable(e)) e = e.substring(r.raw.length), t.push(r);
                else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), t.push(r);
                else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), r.tokens = this.blockTokens(r.text, [], n), t.push(r);
                else if (r = this.tokenizer.list(e)) {
                    for (e = e.substring(r.raw.length), a = r.items.length, i = 0; i < a; i++) r.items[i].tokens = this.blockTokens(r.items[i].text, [], !1);
                    t.push(r)
                } else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), t.push(r);
                else if (n && (r = this.tokenizer.def(e))) e = e.substring(r.raw.length), this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                    href: r.href,
                    title: r.title
                });
                else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), t.push(r);
                else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), t.push(r);
                else if (n && (r = this.tokenizer.paragraph(e))) e = e.substring(r.raw.length), t.push(r);
                else if (r = this.tokenizer.text(e, t)) e = e.substring(r.raw.length), r.type ? t.push(r) : ((o = t[t.length - 1]).raw += "\n" + r.raw, o.text += "\n" + r.text);
                else if (e) {
                    var s = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(s);
                        break
                    }
                    throw new Error(s)
                }
                return t
            }, n.prototype.inline = function(e) {
                for (var t, n, r, i, a, o = e.length, s = 0; s < o; s++) switch ((a = e[s]).type) {
                    case "paragraph":
                    case "text":
                    case "heading":
                        a.tokens = [], this.inlineTokens(a.text, a.tokens);
                        break;
                    case "table":
                        for (a.tokens = {
                                header: [],
                                cells: []
                            }, r = a.header.length, t = 0; t < r; t++) a.tokens.header[t] = [], this.inlineTokens(a.header[t], a.tokens.header[t]);
                        for (r = a.cells.length, t = 0; t < r; t++)
                            for (i = a.cells[t], a.tokens.cells[t] = [], n = 0; n < i.length; n++) a.tokens.cells[t][n] = [], this.inlineTokens(i[n], a.tokens.cells[t][n]);
                        break;
                    case "blockquote":
                        this.inline(a.tokens);
                        break;
                    case "list":
                        for (r = a.items.length, t = 0; t < r; t++) this.inline(a.items[t].tokens)
                }
                return e
            }, n.prototype.inlineTokens = function(e, t, n, r) {
                var i;
                void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === r && (r = !1);
                var a, o, s, l = e;
                if (this.tokens.links) {
                    var c = Object.keys(this.tokens.links);
                    if (0 < c.length)
                        for (; null != (a = this.tokenizer.rules.inline.reflinkSearch.exec(l));) c.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, a.index) + "[" + Zt("a", a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                }
                for (; null != (a = this.tokenizer.rules.inline.blockSkip.exec(l));) l = l.slice(0, a.index) + "[" + Zt("a", a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (; e;)
                    if (o || (s = ""), o = !1, i = this.tokenizer.escape(e)) e = e.substring(i.raw.length), t.push(i);
                    else if (i = this.tokenizer.tag(e, n, r)) e = e.substring(i.raw.length), n = i.inLink, r = i.inRawBlock, t.push(i);
                else if (i = this.tokenizer.link(e)) e = e.substring(i.raw.length), "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)), t.push(i);
                else if (i = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(i.raw.length), "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)), t.push(i);
                else if (i = this.tokenizer.strong(e, l, s)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i);
                else if (i = this.tokenizer.em(e, l, s)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i);
                else if (i = this.tokenizer.codespan(e)) e = e.substring(i.raw.length), t.push(i);
                else if (i = this.tokenizer.br(e)) e = e.substring(i.raw.length), t.push(i);
                else if (i = this.tokenizer.del(e)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i);
                else if (i = this.tokenizer.autolink(e, Wt)) e = e.substring(i.raw.length), t.push(i);
                else if (n || !(i = this.tokenizer.url(e, Wt))) {
                    if (i = this.tokenizer.inlineText(e, r, Gt)) e = e.substring(i.raw.length), s = i.raw.slice(-1), o = !0, t.push(i);
                    else if (e) {
                        var u = "Infinite loop on byte: " + e.charCodeAt(0);
                        if (this.options.silent) {
                            console.error(u);
                            break
                        }
                        throw new Error(u)
                    }
                } else e = e.substring(i.raw.length), t.push(i);
                return t
            }, Object.defineProperties(n, e), n
        }(),
        Yt = ut.defaults,
        Xt = Ot,
        Kt = Et,
        Qt = function() {
            function e(e) {
                this.options = e || Yt
            }
            return e.prototype.code = function(e, t, n) {
                var r = (t || "").match(/\S*/)[0];
                return !this.options.highlight || null != (t = this.options.highlight(e, r)) && t !== e && (n = !0, e = t), e = e.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + Kt(r, !0) + '">' + (n ? e : Kt(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : Kt(e, !0)) + "</code></pre>\n"
            }, e.prototype.blockquote = function(e) {
                return "<blockquote>\n" + e + "</blockquote>\n"
            }, e.prototype.html = function(e) {
                return e
            }, e.prototype.heading = function(e, t, n, r) {
                return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
            }, e.prototype.hr = function() {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, e.prototype.list = function(e, t, n) {
                var r = t ? "ol" : "ul";
                return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
            }, e.prototype.listitem = function(e) {
                return "<li>" + e + "</li>\n"
            }, e.prototype.checkbox = function(e) {
                return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
            }, e.prototype.paragraph = function(e) {
                return "<p>" + e + "</p>\n"
            }, e.prototype.table = function(e, t) {
                return "<table>\n<thead>\n" + e + "</thead>\n" + (t = t && "<tbody>" + t + "</tbody>") + "</table>\n"
            }, e.prototype.tablerow = function(e) {
                return "<tr>\n" + e + "</tr>\n"
            }, e.prototype.tablecell = function(e, t) {
                var n = t.header ? "th" : "td";
                return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
            }, e.prototype.strong = function(e) {
                return "<strong>" + e + "</strong>"
            }, e.prototype.em = function(e) {
                return "<em>" + e + "</em>"
            }, e.prototype.codespan = function(e) {
                return "<code>" + e + "</code>"
            }, e.prototype.br = function() {
                return this.options.xhtml ? "<br/>" : "<br>"
            }, e.prototype.del = function(e) {
                return "<del>" + e + "</del>"
            }, e.prototype.link = function(e, t, n) {
                if (null === (e = Xt(this.options.sanitize, this.options.baseUrl, e))) return n;
                e = '<a href="' + Kt(e) + '"';
                return t && (e += ' title="' + t + '"'), e += ">" + n + "</a>"
            }, e.prototype.image = function(e, t, n) {
                if (null === (e = Xt(this.options.sanitize, this.options.baseUrl, e))) return n;
                n = '<img src="' + e + '" alt="' + n + '"';
                return t && (n += ' title="' + t + '"'), n += this.options.xhtml ? "/>" : ">"
            }, e.prototype.text = function(e) {
                return e
            }, e
        }(),
        Jt = function() {
            function e() {}
            return e.prototype.strong = function(e) {
                return e
            }, e.prototype.em = function(e) {
                return e
            }, e.prototype.codespan = function(e) {
                return e
            }, e.prototype.del = function(e) {
                return e
            }, e.prototype.html = function(e) {
                return e
            }, e.prototype.text = function(e) {
                return e
            }, e.prototype.link = function(e, t, n) {
                return "" + n
            }, e.prototype.image = function(e, t, n) {
                return "" + n
            }, e.prototype.br = function() {
                return ""
            }, e
        }(),
        en = function() {
            function e() {
                this.seen = {}
            }
            return e.prototype.serialize = function(e) {
                return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
            }, e.prototype.getNextSafeSlug = function(e, t) {
                var n = e,
                    r = 0;
                if (this.seen.hasOwnProperty(n))
                    for (r = this.seen[e]; n = e + "-" + ++r, this.seen.hasOwnProperty(n););
                return t || (this.seen[e] = r, this.seen[n] = 0), n
            }, e.prototype.slug = function(e, t) {
                void 0 === t && (t = {});
                var n = this.serialize(e);
                return this.getNextSafeSlug(n, t.dryrun)
            }, e
        }(),
        tn = ut.defaults,
        nn = Rt,
        rn = function() {
            function n(e) {
                this.options = e || tn, this.options.renderer = this.options.renderer || new Qt, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Jt, this.slugger = new en
            }
            return n.parse = function(e, t) {
                return new n(t).parse(e)
            }, n.parseInline = function(e, t) {
                return new n(t).parseInline(e)
            }, n.prototype.parse = function(e, t) {
                void 0 === t && (t = !0);
                for (var n, r, i, a, o, s, l, c, u, p, d, h, f, g, m, v = "", b = e.length, y = 0; y < b; y++) switch ((c = e[y]).type) {
                    case "space":
                        continue;
                    case "hr":
                        v += this.renderer.hr();
                        continue;
                    case "heading":
                        v += this.renderer.heading(this.parseInline(c.tokens), c.depth, nn(this.parseInline(c.tokens, this.textRenderer)), this.slugger);
                        continue;
                    case "code":
                        v += this.renderer.code(c.text, c.lang, c.escaped);
                        continue;
                    case "table":
                        for (s = u = "", i = c.header.length, n = 0; n < i; n++) s += this.renderer.tablecell(this.parseInline(c.tokens.header[n]), {
                            header: !0,
                            align: c.align[n]
                        });
                        for (u += this.renderer.tablerow(s), l = "", i = c.cells.length, n = 0; n < i; n++) {
                            for (s = "", a = (o = c.tokens.cells[n]).length, r = 0; r < a; r++) s += this.renderer.tablecell(this.parseInline(o[r]), {
                                header: !1,
                                align: c.align[r]
                            });
                            l += this.renderer.tablerow(s)
                        }
                        v += this.renderer.table(u, l);
                        continue;
                    case "blockquote":
                        l = this.parse(c.tokens), v += this.renderer.blockquote(l);
                        continue;
                    case "list":
                        for (u = c.ordered, k = c.start, p = c.loose, i = c.items.length, l = "", n = 0; n < i; n++) f = (h = c.items[n]).checked, g = h.task, d = "", h.task && (m = this.renderer.checkbox(f), p ? 0 < h.tokens.length && "text" === h.tokens[0].type ? (h.tokens[0].text = m + " " + h.tokens[0].text, h.tokens[0].tokens && 0 < h.tokens[0].tokens.length && "text" === h.tokens[0].tokens[0].type && (h.tokens[0].tokens[0].text = m + " " + h.tokens[0].tokens[0].text)) : h.tokens.unshift({
                            type: "text",
                            text: m
                        }) : d += m), d += this.parse(h.tokens, p), l += this.renderer.listitem(d, g, f);
                        v += this.renderer.list(l, u, k);
                        continue;
                    case "html":
                        v += this.renderer.html(c.text);
                        continue;
                    case "paragraph":
                        v += this.renderer.paragraph(this.parseInline(c.tokens));
                        continue;
                    case "text":
                        for (l = c.tokens ? this.parseInline(c.tokens) : c.text; y + 1 < b && "text" === e[y + 1].type;) l += "\n" + ((c = e[++y]).tokens ? this.parseInline(c.tokens) : c.text);
                        v += t ? this.renderer.paragraph(l) : l;
                        continue;
                    default:
                        var k = 'Token with "' + c.type + '" type was not found.';
                        if (this.options.silent) return void console.error(k);
                        throw new Error(k)
                }
                return v
            }, n.prototype.parseInline = function(e, t) {
                t = t || this.renderer;
                for (var n = "", r = e.length, i = 0; i < r; i++) switch ((a = e[i]).type) {
                    case "escape":
                        n += t.text(a.text);
                        break;
                    case "html":
                        n += t.html(a.text);
                        break;
                    case "link":
                        n += t.link(a.href, a.title, this.parseInline(a.tokens, t));
                        break;
                    case "image":
                        n += t.image(a.href, a.title, a.text);
                        break;
                    case "strong":
                        n += t.strong(this.parseInline(a.tokens, t));
                        break;
                    case "em":
                        n += t.em(this.parseInline(a.tokens, t));
                        break;
                    case "codespan":
                        n += t.codespan(a.text);
                        break;
                    case "br":
                        n += t.br();
                        break;
                    case "del":
                        n += t.del(this.parseInline(a.tokens, t));
                        break;
                    case "text":
                        n += t.text(a.text);
                        break;
                    default:
                        var a = 'Token with "' + a.type + '" type was not found.';
                        if (this.options.silent) return void console.error(a);
                        throw new Error(a)
                }
                return n
            }, n
        }(),
        an = Lt,
        on = N,
        sn = Et,
        Et = ut.getDefaults,
        ln = ut.changeDefaults,
        ut = ut.defaults;

    function cn(e, n, r) {
        if (null == e) throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
        if ("function" == typeof n && (r = n, n = null), n = an({}, cn.defaults, n || {}), on(n), r) {
            var i, a = n.highlight;
            try {
                i = Vt.lex(e, n)
            } catch (e) {
                return r(e)
            }

            function o(t) {
                var e;
                if (!t) try {
                    e = rn.parse(i, n)
                } catch (e) {
                    t = e
                }
                return n.highlight = a, t ? r(t) : r(null, e)
            }
            if (!a || a.length < 3) return o();
            if (delete n.highlight, !i.length) return o();
            var s = 0;
            return cn.walkTokens(i, function(n) {
                "code" === n.type && (s++, setTimeout(function() {
                    a(n.text, n.lang, function(e, t) {
                        return e ? o(e) : (null != t && t !== n.text && (n.text = t, n.escaped = !0), void(0 === --s && o()))
                    })
                }, 0))
            }), void(0 === s && o())
        }
        try {
            var t = Vt.lex(e, n);
            return n.walkTokens && cn.walkTokens(t, n.walkTokens), rn.parse(t, n)
        } catch (e) {
            if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", n.silent) return "<p>An error occurred:</p><pre>" + sn(e.message + "", !0) + "</pre>";
            throw e
        }
    }
    cn.options = cn.setOptions = function(e) {
        return an(cn.defaults, e), ln(cn.defaults), cn
    }, cn.getDefaults = Et, cn.defaults = ut, cn.use = function(a) {
        var t, e = an({}, a);
        if (a.renderer) {
            var n, o = cn.defaults.renderer || new Qt;
            for (n in a.renderer) ! function(r) {
                var i = o[r];
                o[r] = function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    var n = a.renderer[r].apply(o, e);
                    return !1 === n && (n = i.apply(o, e)), n
                }
            }(n);
            e.renderer = o
        }
        if (a.tokenizer) {
            var i, s = cn.defaults.tokenizer || new qt;
            for (i in a.tokenizer) ! function() {
                var r = s[i];
                s[i] = function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    var n = a.tokenizer[i].apply(s, e);
                    return !1 === n && (n = r.apply(s, e)), n
                }
            }();
            e.tokenizer = s
        }
        a.walkTokens && (t = cn.defaults.walkTokens, e.walkTokens = function(e) {
            a.walkTokens(e), t && t(e)
        }), cn.setOptions(e)
    }, cn.walkTokens = function(e, t) {
        for (var n = 0, r = e; n < r.length; n += 1) {
            var i = r[n];
            switch (t(i), i.type) {
                case "table":
                    for (var a = 0, o = i.tokens.header; a < o.length; a += 1) {
                        var s = o[a];
                        cn.walkTokens(s, t)
                    }
                    for (var l = 0, c = i.tokens.cells; l < c.length; l += 1)
                        for (var u = 0, p = c[l]; u < p.length; u += 1) {
                            var d = p[u];
                            cn.walkTokens(d, t)
                        }
                    break;
                case "list":
                    cn.walkTokens(i.items, t);
                    break;
                default:
                    i.tokens && cn.walkTokens(i.tokens, t)
            }
        }
    }, cn.parseInline = function(e, t) {
        if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
        t = an({}, cn.defaults, t || {}), on(t);
        try {
            var n = Vt.lexInline(e, t);
            return t.walkTokens && cn.walkTokens(n, t.walkTokens), rn.parseInline(n, t)
        } catch (e) {
            if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + sn(e.message + "", !0) + "</pre>";
            throw e
        }
    }, cn.Parser = rn, cn.parser = rn.parse, cn.Renderer = Qt, cn.TextRenderer = Jt, cn.Lexer = Vt, cn.lexer = Vt.lex, cn.Tokenizer = qt, cn.Slugger = en;
    var un = cn.parse = cn;

    function pn(e, n) {
        if (void 0 === n && (n = '<ul class="app-sub-sidebar">{inner}</ul>'), !e || !e.length) return "";
        var r = "";
        return e.forEach(function(e) {
            var t = e.title.replace(/(<([^>]+)>)/g, "");
            r += '<li><a class="section-link" href="' + e.slug + '" title="' + t + '">' + e.title + "</a></li>", e.children && (r += pn(e.children, n))
        }), n.replace("{inner}", r)
    }

    function dn(e, t) {
        return '<p class="' + e + '">' + t.slice(5).trim() + "</p>"
    }

    function hn(e, r) {
        var i = [],
            a = {};
        return e.forEach(function(e) {
            var t = e.level || 1,
                n = t - 1;
            r < t || (a[n] ? a[n].children = (a[n].children || []).concat(e) : i.push(e), a[t] = e)
        }), i
    }
    var fn = {},
        gn = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;

    function mn(e) {
        return e.toLowerCase()
    }

    function vn(e) {
        if ("string" != typeof e) return "";
        var t = e.trim().replace(/[A-Z]+/g, mn).replace(/<[^>]+>/g, "").replace(gn, "").replace(/\s/g, "-").replace(/-+/g, "-").replace(/^(\d)/, "_$1"),
            e = fn[t],
            e = l.call(fn, t) ? e + 1 : 0;
        return (fn[t] = e) && (t = t + "-" + e), t
    }

    function bn(e, t) {
        return '<img class="emoji" src="https://github.githubassets.com/images/icons/emoji/' + t + '.png" alt="' + t + '" />'
    }

    function yn(e) {
        void 0 === e && (e = "");
        var r = {};
        return {
            str: e = e && e.replace(/^'/, "").replace(/'$/, "").replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function(e, t, n) {
                return -1 === t.indexOf(":") ? (r[t] = n && n.replace(/&quot;/g, "") || !0, "") : e
            }).trim(),
            config: r
        }
    }

    function kn(e) {
        return void 0 === e && (e = ""), e.replace(/(<\/?a.*?>)/gi, "")
    }
    vn.clear = function() {
        fn = {}
    };
    var wn, xn = Te(function(e) {
        var o, s, l, c, u, r, t, i = function(l) {
            var c = /\blang(?:uage)?-([\w-]+)\b/i,
                t = 0,
                O = {
                    manual: l.Prism && l.Prism.manual,
                    disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler,
                    util: {
                        encode: function e(t) {
                            return t instanceof C ? new C(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                        },
                        type: function(e) {
                            return Object.prototype.toString.call(e).slice(8, -1)
                        },
                        objId: function(e) {
                            return e.__id || Object.defineProperty(e, "__id", {
                                value: ++t
                            }), e.__id
                        },
                        clone: function n(e, r) {
                            var i, t;
                            switch (r = r || {}, O.util.type(e)) {
                                case "Object":
                                    if (t = O.util.objId(e), r[t]) return r[t];
                                    for (var a in i = {}, r[t] = i, e) e.hasOwnProperty(a) && (i[a] = n(e[a], r));
                                    return i;
                                case "Array":
                                    return (t = O.util.objId(e), r[t]) ? r[t] : (i = [], r[t] = i, e.forEach(function(e, t) {
                                        i[t] = n(e, r)
                                    }), i);
                                default:
                                    return e
                            }
                        },
                        getLanguage: function(e) {
                            for (; e && !c.test(e.className);) e = e.parentElement;
                            return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none"
                        },
                        currentScript: function() {
                            if ("undefined" == typeof document) return null;
                            if ("currentScript" in document) return document.currentScript;
                            try {
                                throw new Error
                            } catch (e) {
                                var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
                                if (t) {
                                    var n, r = document.getElementsByTagName("script");
                                    for (n in r)
                                        if (r[n].src == t) return r[n]
                                }
                                return null
                            }
                        },
                        isActive: function(e, t, n) {
                            for (var r = "no-" + t; e;) {
                                var i = e.classList;
                                if (i.contains(t)) return !0;
                                if (i.contains(r)) return !1;
                                e = e.parentElement
                            }
                            return !!n
                        }
                    },
                    languages: {
                        extend: function(e, t) {
                            var n, r = O.util.clone(O.languages[e]);
                            for (n in t) r[n] = t[n];
                            return r
                        },
                        insertBefore: function(n, e, t, r) {
                            var i, a = (r = r || O.languages)[n],
                                o = {};
                            for (i in a)
                                if (a.hasOwnProperty(i)) {
                                    if (i == e)
                                        for (var s in t) t.hasOwnProperty(s) && (o[s] = t[s]);
                                    t.hasOwnProperty(i) || (o[i] = a[i])
                                } var l = r[n];
                            return r[n] = o, O.languages.DFS(O.languages, function(e, t) {
                                t === l && e != n && (this[e] = o)
                            }), o
                        },
                        DFS: function e(t, n, r, i) {
                            i = i || {};
                            var a, o, s, l = O.util.objId;
                            for (a in t) {
                                t.hasOwnProperty(a) && (n.call(t, a, t[a], r || a), o = t[a], "Object" !== (s = O.util.type(o)) || i[l(o)] ? "Array" !== s || i[l(o)] || (i[l(o)] = !0, e(o, n, a, i)) : (i[l(o)] = !0, e(o, n, null, i)))
                            }
                        }
                    },
                    plugins: {},
                    highlightAll: function(e, t) {
                        O.highlightAllUnder(document, e, t)
                    },
                    highlightAllUnder: function(e, t, n) {
                        var r = {
                            callback: n,
                            container: e,
                            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                        };
                        O.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), O.hooks.run("before-all-elements-highlight", r);
                        for (var i, a = 0; i = r.elements[a++];) O.highlightElement(i, !0 === t, r.callback)
                    },
                    highlightElement: function(e, t, n) {
                        var r = O.util.getLanguage(e),
                            i = O.languages[r];
                        e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
                        var a = e.parentElement;
                        a && "pre" === a.nodeName.toLowerCase() && (a.className = a.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
                        var o = {
                            element: e,
                            language: r,
                            grammar: i,
                            code: e.textContent
                        };

                        function s(e) {
                            o.highlightedCode = e, O.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, O.hooks.run("after-highlight", o), O.hooks.run("complete", o), n && n.call(o.element)
                        }
                        if (O.hooks.run("before-sanity-check", o), !o.code) return O.hooks.run("complete", o), void(n && n.call(o.element));
                        O.hooks.run("before-highlight", o), o.grammar ? t && l.Worker ? ((t = new Worker(O.filename)).onmessage = function(e) {
                            s(e.data)
                        }, t.postMessage(JSON.stringify({
                            language: o.language,
                            code: o.code,
                            immediateClose: !0
                        }))) : s(O.highlight(o.code, o.grammar, o.language)) : s(O.util.encode(o.code))
                    },
                    highlight: function(e, t, n) {
                        n = {
                            code: e,
                            grammar: t,
                            language: n
                        };
                        return O.hooks.run("before-tokenize", n), n.tokens = O.tokenize(n.code, n.grammar), O.hooks.run("after-tokenize", n), C.stringify(O.util.encode(n.tokens), n.language)
                    },
                    tokenize: function(e, t) {
                        var n = t.rest;
                        if (n) {
                            for (var r in n) t[r] = n[r];
                            delete t.rest
                        }
                        var i = new a;
                        return F(i, i.head, e),
                            function e(t, n, r, i, a, o) {
                                for (var s in r)
                                    if (r.hasOwnProperty(s) && r[s]) {
                                        var l = r[s];
                                        l = Array.isArray(l) ? l : [l];
                                        for (var c = 0; c < l.length; ++c) {
                                            if (o && o.cause == s + "," + c) return;
                                            var u, p = l[c],
                                                d = p.inside,
                                                h = !!p.lookbehind,
                                                f = !!p.greedy,
                                                g = p.alias;
                                            f && !p.pattern.global && (u = p.pattern.toString().match(/[imsuy]*$/)[0], p.pattern = RegExp(p.pattern.source, u + "g"));
                                            for (var m = p.pattern || p, v = i.next, b = a; v !== n.tail && !(o && b >= o.reach); b += v.value.length, v = v.next) {
                                                var y = v.value;
                                                if (n.length > t.length) return;
                                                if (!(y instanceof C)) {
                                                    var k, w = 1;
                                                    if (f) {
                                                        if (!(k = L(m, b, t, h))) break;
                                                        var x = k.index,
                                                            _ = k.index + k[0].length,
                                                            S = b;
                                                        for (S += v.value.length; S <= x;) v = v.next, S += v.value.length;
                                                        if (S -= v.value.length, b = S, v.value instanceof C) continue;
                                                        for (var A = v; A !== n.tail && (S < _ || "string" == typeof A.value); A = A.next) w++, S += A.value.length;
                                                        w--, y = t.slice(b, S), k.index -= b
                                                    } else if (!(k = L(m, 0, y, h))) continue;
                                                    var x = k.index,
                                                        T = k[0],
                                                        E = y.slice(0, x),
                                                        R = y.slice(x + T.length),
                                                        $ = b + y.length;
                                                    o && $ > o.reach && (o.reach = $);
                                                    var y = v.prev;
                                                    E && (y = F(n, y, E), b += E.length), z(n, y, w);
                                                    var T = new C(s, d ? O.tokenize(T, d) : T, g, T);
                                                    v = F(n, y, T), R && F(n, v, R), 1 < w && e(t, n, r, v.prev, b, {
                                                        cause: s + "," + c,
                                                        reach: $
                                                    })
                                                }
                                            }
                                        }
                                    }
                            }(e, i, t, i.head, 0),
                            function(e) {
                                var t = [],
                                    n = e.head.next;
                                for (; n !== e.tail;) t.push(n.value), n = n.next;
                                return t
                            }(i)
                    },
                    hooks: {
                        all: {},
                        add: function(e, t) {
                            var n = O.hooks.all;
                            n[e] = n[e] || [], n[e].push(t)
                        },
                        run: function(e, t) {
                            var n = O.hooks.all[e];
                            if (n && n.length)
                                for (var r, i = 0; r = n[i++];) r(t)
                        }
                    },
                    Token: C
                };

            function C(e, t, n, r) {
                this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
            }

            function L(e, t, n, r) {
                e.lastIndex = t;
                n = e.exec(n);
                return n && r && n[1] && (r = n[1].length, n.index += r, n[0] = n[0].slice(r)), n
            }

            function a() {
                var e = {
                        value: null,
                        prev: null,
                        next: null
                    },
                    t = {
                        value: null,
                        prev: e,
                        next: null
                    };
                e.next = t, this.head = e, this.tail = t, this.length = 0
            }

            function F(e, t, n) {
                var r = t.next,
                    n = {
                        value: n,
                        prev: t,
                        next: r
                    };
                return t.next = n, r.prev = n, e.length++, n
            }

            function z(e, t, n) {
                for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
                (t.next = r).prev = t, e.length -= i
            }
            if (l.Prism = O, C.stringify = function t(e, n) {
                    if ("string" == typeof e) return e;
                    if (Array.isArray(e)) {
                        var r = "";
                        return e.forEach(function(e) {
                            r += t(e, n)
                        }), r
                    }
                    var i = {
                            type: e.type,
                            content: t(e.content, n),
                            tag: "span",
                            classes: ["token", e.type],
                            attributes: {},
                            language: n
                        },
                        e = e.alias;
                    e && (Array.isArray(e) ? Array.prototype.push.apply(i.classes, e) : i.classes.push(e)), O.hooks.run("wrap", i);
                    var a, o = "";
                    for (a in i.attributes) o += " " + a + '="' + (i.attributes[a] || "").replace(/"/g, "&quot;") + '"';
                    return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">"
                }, !l.document) return l.addEventListener && (O.disableWorkerMessageHandler || l.addEventListener("message", function(e) {
                var t = JSON.parse(e.data),
                    n = t.language,
                    e = t.code,
                    t = t.immediateClose;
                l.postMessage(O.highlight(e, O.languages[n], n)), t && l.close()
            }, !1)), O;
            var e, n = O.util.currentScript();

            function r() {
                O.manual || O.highlightAll()
            }
            return n && (O.filename = n.src, n.hasAttribute("data-manual") && (O.manual = !0)), O.manual || ("loading" === (e = document.readyState) || "interactive" === e && n && n.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16)), O
        }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});

        function p(e, t) {
            var n = (n = e.className).replace(r, " ") + " language-" + t;
            e.className = n.replace(/\s+/g, " ").trim()
        }
        e.exports && (e.exports = i), void 0 !== Ae && (Ae.Prism = i), i.languages.markup = {
                comment: /<!--[\s\S]*?-->/,
                prolog: /<\?[\s\S]+?\?>/,
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: !0,
                    inside: {
                        "internal-subset": {
                            pattern: /(\[)[\s\S]+(?=\]>$)/,
                            lookbehind: !0,
                            greedy: !0,
                            inside: null
                        },
                        string: {
                            pattern: /"[^"]*"|'[^']*'/,
                            greedy: !0
                        },
                        punctuation: /^<!|>$|[[\]]/,
                        "doctype-tag": /^DOCTYPE/,
                        name: /[^\s<>'"]+/
                    }
                },
                cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/,
                            inside: {
                                punctuation: /^<\/?/,
                                namespace: /^[^\s>\/:]+:/
                            }
                        },
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                            inside: {
                                punctuation: [{
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                }, /"|'/]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: {
                                namespace: /^[^\s>\/:]+:/
                            }
                        }
                    }
                },
                entity: [{
                    pattern: /&[\da-z]{1,8};/i,
                    alias: "named-entity"
                }, /&#x?[\da-f]{1,8};/i]
            }, i.languages.markup.tag.inside["attr-value"].inside.entity = i.languages.markup.entity, i.languages.markup.doctype.inside["internal-subset"].inside = i.languages.markup, i.hooks.add("wrap", function(e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
            }), Object.defineProperty(i.languages.markup.tag, "addInlined", {
                value: function(e, t) {
                    var n = {};
                    n["language-" + t] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: i.languages[t]
                    }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                    n = {
                        "included-cdata": {
                            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                            inside: n
                        }
                    };
                    n["language-" + t] = {
                        pattern: /[\s\S]+/,
                        inside: i.languages[t]
                    };
                    t = {};
                    t[e] = {
                        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                            return e
                        }), "i"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: n
                    }, i.languages.insertBefore("markup", "cdata", t)
                }
            }), i.languages.html = i.languages.markup, i.languages.mathml = i.languages.markup, i.languages.svg = i.languages.markup, i.languages.xml = i.languages.extend("markup", {}), i.languages.ssml = i.languages.xml, i.languages.atom = i.languages.xml, i.languages.rss = i.languages.xml,
            function(e) {
                var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                lookbehind: !0,
                                alias: "selector"
                            },
                            keyword: {
                                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                lookbehind: !0
                            }
                        }
                    },
                    url: {
                        pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {
                                pattern: RegExp("^" + t.source + "$"),
                                alias: "url"
                            }
                        }
                    },
                    selector: RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                    string: {
                        pattern: t,
                        greedy: !0
                    },
                    property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                    important: /!important\b/i,
                    function: /[-a-z0-9]+(?=\()/i,
                    punctuation: /[(){};:,]/
                }, e.languages.css.atrule.inside.rest = e.languages.css;
                t = e.languages.markup;
                t && (t.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
                    "style-attr": {
                        pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                        lookbehind: !0,
                        inside: {
                            "attr-value": {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                inside: {
                                    style: {
                                        pattern: /(["'])[\s\S]+(?=["']$)/,
                                        lookbehind: !0,
                                        alias: "language-css",
                                        inside: e.languages.css
                                    },
                                    punctuation: [{
                                        pattern: /^=/,
                                        alias: "attr-equals"
                                    }, /"|'/]
                                }
                            },
                            "attr-name": /^style/i
                        }
                    }
                }, t.tag))
            }(i), i.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[.\\]/
                    }
                },
                keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/
            }, i.languages.javascript = i.languages.extend("clike", {
                "class-name": [i.languages.clike["class-name"], {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                    lookbehind: !0
                }],
                keyword: [{
                    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: !0
                }],
                function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
            }), i.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, i.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: !0,
                            alias: "language-regex",
                            inside: i.languages.regex
                        },
                        "regex-flags": /[a-z]+$/,
                        "regex-delimiter": /^\/|\/$/
                    }
                },
                "function-variable": {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: "function"
                },
                parameter: [{
                    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                    lookbehind: !0,
                    inside: i.languages.javascript
                }, {
                    pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    inside: i.languages.javascript
                }, {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: i.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: i.languages.javascript
                }],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            }), i.languages.insertBefore("javascript", "string", {
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        "template-punctuation": {
                            pattern: /^`|`$/,
                            alias: "string"
                        },
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\${|}$/,
                                    alias: "punctuation"
                                },
                                rest: i.languages.javascript
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
            }), i.languages.markup && i.languages.markup.tag.addInlined("script", "javascript"), i.languages.js = i.languages.javascript, "undefined" != typeof self && self.Prism && self.document && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), o = window.Prism, s = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex"
            }, u = "pre[data-src]:not([" + (l = "data-src-status") + '="loaded"]):not([' + l + '="' + (c = "loading") + '"])', r = /\blang(?:uage)?-([\w-]+)\b/i, o.hooks.add("before-highlightall", function(e) {
                e.selector += ", " + u
            }), o.hooks.add("before-sanity-check", function(e) {
                var t, n, r, i, a = e.element;
                a.matches(u) && (e.code = "", a.setAttribute(l, c), (t = a.appendChild(document.createElement("CODE"))).textContent = "Loading…", n = a.getAttribute("data-src"), "none" === (e = e.language) && (r = (/\.(\w+)$/.exec(n) || [, "none"])[1], e = s[r] || r), p(t, e), p(a, e), (r = o.plugins.autoloader) && r.loadLanguages(e), (i = new XMLHttpRequest).open("GET", n, !0), i.onreadystatechange = function() {
                    4 == i.readyState && (i.status < 400 && i.responseText ? (a.setAttribute(l, "loaded"), t.textContent = i.responseText, o.highlightElement(t)) : (a.setAttribute(l, "failed"), 400 <= i.status ? t.textContent = "✖ Error " + i.status + " while fetching file: " + i.statusText : t.textContent = "✖ Error: File does not exist or is empty"))
                }, i.send(null))
            }), t = !(o.plugins.fileHighlight = {
                highlight: function(e) {
                    for (var t, n = (e || document).querySelectorAll(u), r = 0; t = n[r++];) o.highlightElement(t)
                }
            }), o.fileHighlight = function() {
                t || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), t = !0), o.plugins.fileHighlight.highlight.apply(this, arguments)
            })
    });

    function _n(e, t) {
        return "___" + e.toUpperCase() + t + "___"
    }
    wn = Prism, Object.defineProperties(wn.languages["markup-templating"] = {}, {
        buildPlaceholders: {
            value: function(r, i, e, a) {
                var o;
                r.language === i && (o = r.tokenStack = [], r.code = r.code.replace(e, function(e) {
                    if ("function" == typeof a && !a(e)) return e;
                    for (var t, n = o.length; - 1 !== r.code.indexOf(t = _n(i, n));) ++n;
                    return o[n] = e, t
                }), r.grammar = wn.languages.markup)
            }
        },
        tokenizePlaceholders: {
            value: function(c, u) {
                var p, d;
                c.language === u && c.tokenStack && (c.grammar = wn.languages[u], p = 0, d = Object.keys(c.tokenStack), function e(t) {
                    for (var n = 0; n < t.length && !(p >= d.length); n++) {
                        var r, i, a, o, s, l = t[n];
                        "string" == typeof l || l.content && "string" == typeof l.content ? (i = d[p], a = c.tokenStack[i], r = "string" == typeof l ? l : l.content, s = _n(u, i), -1 < (o = r.indexOf(s)) && (++p, i = r.substring(0, o), a = new wn.Token(u, wn.tokenize(a, c.grammar), "language-" + u, a), o = r.substring(o + s.length), s = [], i && s.push.apply(s, e([i])), s.push(a), o && s.push.apply(s, e([o])), "string" == typeof l ? t.splice.apply(t, [n, 1].concat(s)) : l.content = s)) : l.content && e(l.content)
                    }
                    return t
                }(c.tokens))
            }
        }
    });
    var Sn = {},
        An = {
            markdown: function(e) {
                return {
                    url: e
                }
            },
            mermaid: function(e) {
                return {
                    url: e
                }
            },
            iframe: function(e, t) {
                return {
                    html: '<iframe src="' + e + '" ' + (t || "width=100% height=400") + "></iframe>"
                }
            },
            video: function(e, t) {
                return {
                    html: '<video src="' + e + '" ' + (t || "controls") + ">Not Support</video>"
                }
            },
            audio: function(e, t) {
                return {
                    html: '<audio src="' + e + '" ' + (t || "controls") + ">Not Support</audio>"
                }
            },
            code: function(e, t) {
                var n = e.match(/\.(\w+)$/);
                return "md" === (n = t || n && n[1]) && (n = "markdown"), {
                    url: e,
                    lang: n
                }
            }
        },
        Tn = function(i, e) {
            var a = this;
            this.config = i, this.router = e, this.cacheTree = {}, this.toc = [], this.cacheTOC = {}, this.linkTarget = i.externalLinkTarget || "_blank", this.linkRel = "_blank" === this.linkTarget ? i.externalLinkRel || "noopener" : "", this.contentBase = e.getBasePath();
            var t = this._initRenderer();
            this.heading = t.heading;
            var e = i.markdown || {},
                o = d(e) ? e(un, t) : (un.setOptions(p(e, {
                    renderer: p(t, e.renderer)
                })), un);
            this._marked = o, this.compile = function(n) {
                var r = !0,
                    e = s(function(e) {
                        r = !1;
                        var t = "";
                        return n ? (t = c(n) ? o(n) : o.parser(n), t = i.noEmoji ? t : t.replace(/:\+1:/g, ":thumbsup:").replace(/:-1:/g, ":thumbsdown:").replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g, function(e) {
                            return e.replace(/:/g, "__colon__")
                        }).replace(/:(\w+?):/gi, window.emojify || bn).replace(/__colon__/g, ":"), vn.clear(), t) : n
                    })(n),
                    t = a.router.parse().file;
                return r ? a.toc = a.cacheTOC[t] : a.cacheTOC[t] = [].concat(a.toc), e
            }
        };
    Tn.prototype.compileEmbed = function(e, t) {
        var n, r, i = yn(t),
            a = i.str,
            i = i.config;
        if (t = a, i.include) return te(e) || (e = se(this.contentBase, re(this.router.getCurrentPath()), e)), i.type && (r = An[i.type]) ? (n = r.call(this, e, t)).type = i.type : (r = "code", /\.(md|markdown)/.test(e) ? r = "markdown" : /\.mmd/.test(e) ? r = "mermaid" : /\.html?/.test(e) ? r = "iframe" : /\.(mp4|ogg)/.test(e) ? r = "video" : /\.mp3/.test(e) && (r = "audio"), (n = An[r].call(this, e, t)).type = r), n.fragment = i.fragment, n
    }, Tn.prototype._matchNotCompileLink = function(e) {
        for (var t = this.config.noCompileLinks || [], n = 0; n < t.length; n++) {
            var r = t[n];
            if ((Sn[r] || (Sn[r] = new RegExp("^" + r + "$"))).test(e)) return e
        }
    }, Tn.prototype._initRenderer = function() {
        var o, s, l, c, u, p, e = new un.Renderer,
            t = this.linkTarget,
            n = this.linkRel,
            a = this.router,
            r = this.contentBase,
            d = this,
            i = {};
        return i.heading = e.heading = function(e, t) {
            var n = yn(e),
                r = n.str,
                i = n.config,
                e = {
                    level: t,
                    title: kn(r)
                };
            /<!-- {docsify-ignore} -->/g.test(r) && (r = r.replace("\x3c!-- {docsify-ignore} --\x3e", ""), e.title = kn(r), e.ignoreSubHeading = !0), /{docsify-ignore}/g.test(r) && (r = r.replace("{docsify-ignore}", ""), e.title = kn(r), e.ignoreSubHeading = !0), /<!-- {docsify-ignore-all} -->/g.test(r) && (r = r.replace("\x3c!-- {docsify-ignore-all} --\x3e", ""), e.title = kn(r), e.ignoreAllSubs = !0), /{docsify-ignore-all}/g.test(r) && (r = r.replace("{docsify-ignore-all}", ""), e.title = kn(r), e.ignoreAllSubs = !0);
            n = vn(i.id || r), i = a.toURL(a.getCurrentPath(), {
                id: n
            });
            return e.slug = i, d.toc.push(e), "<h" + t + ' id="' + n + '"><a href="' + i + '" data-id="' + n + '" class="anchor"><span>' + r + "</span></a></h" + t + ">"
        }, i.code = {
            renderer: e
        }.renderer.code = function(e, t) {
            void 0 === t && (t = "markup");
            var n = xn.languages[t] || xn.languages.markup;
            return '<pre v-pre data-lang="' + t + '"><code class="lang-' + t + '">' + xn.highlight(e.replace(/@DOCSIFY_QM@/g, "`"), n, t) + "</code></pre>"
        }, i.link = (n = (t = {
            renderer: e,
            router: a,
            linkTarget: t,
            linkRel: n,
            compilerClass: d
        }).renderer, o = t.router, s = t.linkTarget, l = t.linkRel, c = t.compilerClass, n.link = function(e, t, n) {
            void 0 === t && (t = "");
            var r = [],
                i = yn(t),
                a = i.str,
                i = i.config;
            return s = i.target || s, l = "_blank" === s ? c.config.externalLinkRel || "noopener" : "", t = a, te(e) || c._matchNotCompileLink(e) || i.ignore ? (te(e) || "./" !== e.slice(0, 2) || (e = document.URL.replace(/\/(?!.*\/).*/, "/").replace("#/./", "") + e), r.push(0 === e.indexOf("mailto:") ? "" : 'target="' + s + '"'), r.push(0 !== e.indexOf("mailto:") && "" !== l ? ' rel="' + l + '"' : "")) : (e === c.config.homepage && (e = "README"), e = o.toURL(e, null, o.getCurrentPath())), i.crossorgin && "_self" === s && "history" === c.config.routerMode && -1 === c.config.crossOriginLinks.indexOf(e) && c.config.crossOriginLinks.push(e), i.disabled && (r.push("disabled"), e = "javascript:void(0)"), i.class && r.push('class="' + i.class + '"'), i.id && r.push('id="' + i.id + '"'), t && r.push('title="' + t + '"'), '<a href="' + e + '" ' + r.join(" ") + ">" + n + "</a>"
        }), i.paragraph = {
            renderer: e
        }.renderer.paragraph = function(e) {
            e = /^!&gt;/.test(e) ? dn("tip", e) : /^\?&gt;/.test(e) ? dn("warn", e) : "<p>" + e + "</p>";
            return e
        }, i.image = (r = (n = {
            renderer: e,
            contentBase: r,
            router: a
        }).renderer, u = n.contentBase, p = n.router, r.image = function(e, t, n) {
            var r = e,
                i = [],
                a = yn(t),
                o = a.str,
                a = a.config;
            return t = o, a["no-zoom"] && i.push("data-no-zoom"), t && i.push('title="' + t + '"'), a.size && (t = (o = a.size.split("x"))[0], (o = o[1]) ? i.push('width="' + t + '" height="' + o + '"') : i.push('width="' + t + '"')), a.class && i.push('class="' + a.class + '"'), a.id && i.push('id="' + a.id + '"'), te(e) || (r = se(u, re(p.getCurrentPath()), e)), 0 < i.length ? '<img src="' + r + '" data-origin="' + e + '" alt="' + n + '" ' + i.join(" ") + " />" : '<img src="' + r + '" data-origin="' + e + '" alt="' + n + '"' + i + ">"
        }), i.list = {
            renderer: e
        }.renderer.list = function(e, t, n) {
            t = t ? "ol" : "ul";
            return "<" + t + " " + [/<li class="task-list-item">/.test(e.split('class="task-list"')[0]) ? 'class="task-list"' : "", n && 1 < n ? 'start="' + n + '"' : ""].join(" ").trim() + ">" + e + "</" + t + ">"
        }, i.listitem = {
            renderer: e
        }.renderer.listitem = function(e) {
            return /^(<input.*type="checkbox"[^>]*>)/.test(e) ? '<li class="task-list-item"><label>' + e + "</label></li>" : "<li>" + e + "</li>"
        }, e.origin = i, e
    }, Tn.prototype.sidebar = function(e, t) {
        var n = this.toc,
            r = this.router.getCurrentPath(),
            i = "";
        if (e) i = this.compile(e);
        else {
            for (var a = 0; a < n.length; a++)
                if (n[a].ignoreSubHeading) {
                    var o = n[a].level;
                    n.splice(a, 1);
                    for (var s = a; s < n.length && o < n[s].level; s++) n.splice(s, 1) && s-- && a++;
                    a--
                } t = this.cacheTree[r] || hn(n, t), i = pn(t, "<ul>{inner}</ul>");
            this.cacheTree[r] = t
        }
        return i
    }, Tn.prototype.subSidebar = function(e) {
        if (e) {
            var t = this.router.getCurrentPath(),
                n = this.cacheTree,
                r = this.toc;
            r[0] && r[0].ignoreAllSubs && r.splice(0), r[0] && 1 === r[0].level && r.shift();
            for (var i = 0; i < r.length; i++) r[i].ignoreSubHeading && r.splice(i, 1) && i--;
            e = n[t] || hn(r, e);
            return n[t] = e, this.toc = [], pn(e)
        }
        this.toc = []
    }, Tn.prototype.header = function(e, t) {
        return this.heading(e, t)
    }, Tn.prototype.article = function(e) {
        return this.compile(e)
    }, Tn.prototype.cover = function(e) {
        var t = this.toc.slice(),
            e = this.compile(e);
        return this.toc = t.slice(), e
    };
    var En, Rn = function(e) {
            var t = function(e) {
                e = e.match(/^[ \t]*(?=\S)/gm);
                return e ? e.reduce(function(e, t) {
                    return Math.min(e, t.length)
                }, 1 / 0) : 0
            }(e);
            if (0 === t) return e;
            t = new RegExp("^[ \\t]{" + t + "}", "gm");
            return e.replace(t, "")
        },
        $n = {};

    function On(e, r) {
        var a = e.compiler,
            i = e.raw;
        void 0 === i && (i = "");
        var t = e.fetch,
            e = $n[i];
        if (e) {
            var n = e.slice();
            return n.links = e.links, r(n)
        }
        var n = a._marked,
            o = n.lexer(i),
            s = [],
            l = n.Lexer.rules.inline.link,
            c = o.links;
        o.forEach(function(e, i) {
            "paragraph" === e.type && (e.text = e.text.replace(new RegExp(l.source, "g"), function(e, t, n, r) {
                r = a.compileEmbed(n, r);
                return r && s.push({
                    index: i,
                    embed: r
                }), e
            }))
        });
        var u = [];
        ! function(e, a) {
            var t, n = e.embedTokens,
                o = e.compile,
                s = (e.fetch, 0),
                l = 1;
            if (!n.length) return a({});
            for (; t = n[s++];) {
                var r = function(i) {
                    return function(e) {
                        var t, n, r;
                        e && ("markdown" === i.embed.type ? ((n = i.embed.url.split("/")).pop(), n = n.join("/"), e = e.replace(/\[([^[\]]+)\]\(([^)]+)\)/g, function(e) {
                            var t = e.indexOf("(");
                            return "(." === e.slice(t, t + 2) ? e.substring(0, t) + "(" + window.location.protocol + "//" + window.location.host + n + "/" + e.substring(t + 1, e.length - 1) + ")" : e
                        }), !0 === (($docsify.frontMatter || {}).installed || !1) && (e = $docsify.frontMatter.parseMarkdown(e)), t = o.lexer(e)) : "code" === i.embed.type ? (i.embed.fragment && (r = i.embed.fragment, r = new RegExp("(?:###|\\/\\/\\/)\\s*\\[" + r + "\\]([\\s\\S]*)(?:###|\\/\\/\\/)\\s*\\[" + r + "\\]"), e = Rn((e.match(r) || [])[1] || "").trim()), t = o.lexer("```" + i.embed.lang + "\n" + e.replace(/`/g, "@DOCSIFY_QM@") + "\n```\n")) : "mermaid" === i.embed.type ? (t = [{
                            type: "html",
                            text: '<div class="mermaid">\n' + e + "\n</div>"
                        }]).links = {} : (t = [{
                            type: "html",
                            text: e
                        }]).links = {}), a({
                            token: i,
                            embedToken: t
                        }), ++l >= s && a({})
                    }
                }(t);
                t.embed.url ? Z(t.embed.url).then(r) : r(t.embed.html)
            }
        }({
            compile: n,
            embedTokens: s,
            fetch: t
        }, function(e) {
            var t, n = e.embedToken,
                e = e.token;
            e ? (t = e.index, u.forEach(function(e) {
                t > e.start && (t += e.length)
            }), p(c, n.links), o = o.slice(0, t).concat(n, o.slice(t + 1)), u.push({
                start: t,
                length: n.length - 1
            })) : ($n[i] = o.concat(), o.links = $n[i].links = c, r(o))
        })
    }

    function Cn(e, t, n) {
        var r, i, a, o;
        return t = "function" == typeof n ? n(t) : "string" == typeof n ? (a = [], o = 0, (r = n).replace(R, function(t, e, n) {
            a.push(r.substring(o, n - 1)), o = n += t.length + 1, a.push(i && i[t] || function(e) {
                return ("00" + ("string" == typeof $[t] ? e[$[t]]() : $[t](e))).slice(-t.length)
            })
        }), o !== r.length && a.push(r.substring(o)), function(e) {
            for (var t = "", n = 0, r = e || new Date; n < a.length; n++) t += "string" == typeof a[n] ? a[n] : a[n](r);
            return t
        }(new Date(t))) : t, e.replace(/{docsify-updated}/g, t)
    }

    function Ln(e) {
        function t(e) {
            var t = Boolean(e.__vue__ && e.__vue__._isVue),
                e = Boolean(e._vnode && e._vnode.__v_skip);
            return t || e
        }
        var n = this.config,
            r = y(".markdown-section"),
            i = "Vue" in window && window.Vue.version && Number(window.Vue.version.charAt(0));
        if (e = e || "<h1>404 - Not found</h1>", "Vue" in window)
            for (var a = 0, o = k(".markdown-section > *").filter(t); a < o.length; a += 1) {
                var s = o[a];
                2 === i ? s.__vue__.$destroy() : 3 === i && s.__vue_app__.unmount()
            }
        if (this._renderTo(r, e), n.loadSidebar || this._renderSidebar(), (n.executeScript || "Vue" in window && !1 !== n.executeScript) && (!(e = k(".markdown-section>script").filter(function(e) {
                return !/template/.test(e.type)
            })[0]) || (e = e.innerText.trim()) && new Function(e)()), "Vue" in window) {
            var l, c, u = [],
                p = Object.keys(n.vueComponents || {});
            2 === i && p.length && p.forEach(function(e) {
                window.Vue.options.components[e] || window.Vue.component(e, n.vueComponents[e])
            }), !En && n.vueGlobalOptions && "function" == typeof n.vueGlobalOptions.data && (En = n.vueGlobalOptions.data()), u.push.apply(u, Object.entries(n.vueMounts || {}).map(function(e) {
                var t = e[0],
                    e = e[1];
                return [y(r, t), e]
            }).filter(function(e) {
                var t = e[0];
                e[1];
                return t
            })), (n.vueGlobalOptions || p.length) && (l = /{{2}[^{}]*}{2}/, c = /<[^>/]+\s([@:]|v-)[\w-:.[\]]+[=>\s]/, u.push.apply(u, k(".markdown-section > *").filter(function(n) {
                return !u.some(function(e) {
                    var t = e[0];
                    e[1];
                    return t === n
                })
            }).filter(function(e) {
                return e.tagName.toLowerCase() in (n.vueComponents || {}) || e.querySelector(p.join(",") || null) || l.test(e.outerHTML) || c.test(e.outerHTML)
            }).map(function(e) {
                var t = Object.assign({}, n.vueGlobalOptions || {});
                return En && (t.data = function() {
                    return En
                }), [e, t]
            })));
            for (var d = 0, h = u; d < h.length; d += 1) {
                var f, g = h[d],
                    m = g[0],
                    v = g[1],
                    g = "data-isvue";
                m.matches("pre, script") || t(m) || m.querySelector("[" + g + "]") || (m.setAttribute(g, ""), 2 === i ? (v.el = void 0, new window.Vue(v).$mount(m)) : 3 === i && (f = window.Vue.createApp(v), p.forEach(function(e) {
                    var t = n.vueComponents[e];
                    f.component(e, t)
                }), f.mount(m)))
            }
        }
    }

    function Fn(e) {
        var t = e.config;
        e.compiler = new Tn(t, e.router), window.__current_docsify_compiler__ = e.compiler;
        var n, r, i, a, o, s = t.el || "#app",
            l = y("nav") || w("nav"),
            c = y(s),
            u = "",
            p = v;
        c ? (t.repo && (u += (a = t.repo, s = t.cornerExternalLinkTarge, a ? (/\/\//.test(a) || (a = "https://github.com/" + a), '<a href="' + (a = a.replace(/^git\+/, "")) + '" target="' + (s = s || "_blank") + '" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>') : "")), t.coverpage && (u += (i = ", 100%, 85%", '<section class="cover show" style="background: ' + ("linear-gradient(to left bottom, hsl(" + Math.floor(255 * Math.random()) + i + ") 0%,hsl(" + Math.floor(255 * Math.random()) + i + ") 100%)") + '"><div class="mask"></div><div class="cover-main">\x3c!--cover--\x3e</div></section>')), t.logo && (i = /^data:image/.test(t.logo), n = /(?:http[s]?:)?\/\//.test(t.logo), r = /^\./.test(t.logo), i || n || r || (t.logo = se(e.router.getBasePath(), t.logo))), u += (r = (n = t).name ? n.name : "", "<main>" + ('<button class="sidebar-toggle" aria-label="Menu"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">' + (n.name ? '<h1 class="app-name"><a class="app-name-link" data-nosearch>' + (n.logo ? '<img alt="' + r + '" src=' + n.logo + ">" : r) + "</a></h1>" : "") + '<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>') + '<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article></section></main>'), e._renderTo(c, u, !0)) : e.rendered = !0, t.mergeNavbar && h ? p = y(".sidebar") : (l.classList.add("app-nav"), t.repo || l.classList.add("no-badge")), t.loadNavbar && x(p, l), t.themeColor && (m.head.appendChild(w("div", "<style>:root{--theme-color: " + t.themeColor + ";}</style>").firstElementChild), o = t.themeColor, window.CSS && window.CSS.supports && window.CSS.supports("(--v:red)") || (t = k("style:not(.inserted),link"), [].forEach.call(t, function(e) {
            if ("STYLE" === e.nodeName) G(e, o);
            else if ("LINK" === e.nodeName) {
                e = e.getAttribute("href");
                if (!/\.css$/.test(e)) return;
                Z(e).then(function(e) {
                    e = w("style", e);
                    b.appendChild(e), G(e, o)
                })
            }
        }))), e._updateRender(), A(v, "ready")
    }
    var zn = {};
    ut = function(e) {
        this.config = e
    };

    function Mn(e) {
        var t = location.href.indexOf("#");
        location.replace(location.href.slice(0, 0 <= t ? t : 0) + "#" + e)
    }
    ut.prototype.getBasePath = function() {
        return this.config.basePath
    }, ut.prototype.getFile = function(e, t) {
        void 0 === e && (e = this.getCurrentPath());
        var n, r, i = this.config,
            a = this.getBasePath(),
            o = "string" == typeof i.ext ? i.ext : ".md";
        return e = i.alias ? function e(t, n, r) {
            var i = Object.keys(n).filter(function(e) {
                return (zn[e] || (zn[e] = new RegExp("^" + e + "$"))).test(t) && t !== r
            })[0];
            return i ? e(t.replace(zn[i], n[i]), n, t) : t
        }(e, i.alias) : e, n = e, r = o, e = (e = new RegExp("\\.(" + r.replace(/^\./, "") + "|html)$", "g").test(n) ? n : /\/$/g.test(n) ? n + "README" + r : "" + n + r) === "/README" + o && i.homepage || e, e = te(e) ? e : se(a, e), t && (e = e.replace(new RegExp("^" + a), "")), e
    }, ut.prototype.onchange = function(e) {
        void 0 === e && (e = u), e()
    }, ut.prototype.getCurrentPath = function() {}, ut.prototype.normalize = function() {}, ut.prototype.parse = function() {}, ut.prototype.toURL = function(e, t, n) {
        var r = n && "#" === e[0],
            i = this.parse(le(e));
        if (i.query = p({}, i.query, t), e = (e = i.path + ee(i.query)).replace(/\.md(\?)|\.md$/, "$1"), r && (e = (0 < (r = n.indexOf("?")) ? n.substring(0, r) : n) + e), this.config.relativePath && 0 !== e.indexOf("/")) {
            n = n.substring(0, n.lastIndexOf("/") + 1);
            return ie(ae(n + e))
        }
        return ie("/" + e)
    };
    var Nn = function(r) {
            function e(e) {
                r.call(this, e), this.mode = "hash"
            }
            return r && (e.__proto__ = r), ((e.prototype = Object.create(r && r.prototype)).constructor = e).prototype.getBasePath = function() {
                var e = window.location.pathname || "",
                    t = this.config.basePath,
                    e = ce(e, ".html") ? e + "#/" + t : e + "/" + t;
                return /^(\/|https?:)/g.test(t) ? t : ie(e)
            }, e.prototype.getCurrentPath = function() {
                var e = location.href,
                    t = e.indexOf("#");
                return -1 === t ? "" : e.slice(t + 1)
            }, e.prototype.onchange = function(n) {
                void 0 === n && (n = u);
                var r = !1;
                _("click", function(e) {
                    e = "A" === e.target.tagName ? e.target : e.target.parentNode;
                    e && "A" === e.tagName && !/_blank/.test(e.target) && (r = !0)
                }), _("hashchange", function(e) {
                    var t = r ? "navigate" : "history";
                    r = !1, n({
                        event: e,
                        source: t
                    })
                })
            }, e.prototype.normalize = function() {
                var e = this.getCurrentPath();
                if ("/" === (e = le(e)).charAt(0)) return Mn(e);
                Mn("/" + e)
            }, e.prototype.parse = function(e) {
                void 0 === e && (e = location.href);
                var t = "",
                    n = e.indexOf("#");
                0 <= n && (e = e.slice(n + 1));
                n = e.indexOf("?");
                return 0 <= n && (t = e.slice(n + 1), e = e.slice(0, n)), {
                    path: e,
                    file: this.getFile(e, !0),
                    query: J(t)
                }
            }, e.prototype.toURL = function(e, t, n) {
                return "#" + r.prototype.toURL.call(this, e, t, n)
            }, e
        }(ut),
        Pn = function(t) {
            function e(e) {
                t.call(this, e), this.mode = "history"
            }
            return t && (e.__proto__ = t), ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.getCurrentPath = function() {
                var e = this.getBasePath(),
                    t = window.location.pathname;
                return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash
            }, e.prototype.onchange = function(n) {
                var r = this;
                void 0 === n && (n = u), _("click", function(e) {
                    var t = "A" === e.target.tagName ? e.target : e.target.parentNode;
                    "A" !== t.tagName || /_blank/.test(t.target) || (e.preventDefault(), t = t.href, -1 !== r.config.crossOriginLinks.indexOf(t) ? window.open(t, "_self") : window.history.pushState({
                        key: t
                    }, "", t), n({
                        event: e,
                        source: "navigate"
                    }))
                }), _("popstate", function(e) {
                    n({
                        event: e,
                        source: "history"
                    })
                })
            }, e.prototype.parse = function(e) {
                void 0 === e && (e = location.href);
                var t = "",
                    n = e.indexOf("?");
                0 <= n && (t = e.slice(n + 1), e = e.slice(0, n));
                var r = se(location.origin),
                    n = e.indexOf(r);
                return -1 < n && (e = e.slice(n + r.length)), {
                    path: e,
                    file: this.getFile(e),
                    query: J(t)
                }
            }, e
        }(ut);
    var Dn = {};

    function In(e) {
        e.router.normalize(), e.route = e.router.parse(), v.setAttribute("data-page", e.route.file)
    }

    function jn(e) {
        function t(e) {
            return v.classList.toggle("close")
        }
        var n;
        n = "button.sidebar-toggle", e.router, null != (n = g(n)) && (_(n, "click", function(e) {
            e.stopPropagation(), t()
        }), h && _(v, "click", function(e) {
            return v.classList.contains("close") && t()
        })), n = ".sidebar", e.router, null != (n = g(n)) && _(n, "click", function(e) {
            e = e.target;
            "A" === e.nodeName && e.nextSibling && e.nextSibling.classList && e.nextSibling.classList.contains("app-sub-sidebar") && A(e.parentNode, "collapse")
        }), e.config.coverpage ? h || _("scroll", Y) : v.classList.add("sticky")
    }

    function qn(t, n, r, i, a, e) {
        t = e ? t : t.replace(/\/$/, ""), (t = re(t)) && Z(a.router.getFile(t + r) + n, !1, a.config.requestHeaders).then(i, function(e) {
            return qn(t, n, r, i, a)
        })
    }

    function Hn(e) {
        e = e.match(/^([^:/?#]+:)?(?:\/\/([^/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        return "string" == typeof e[1] && 0 < e[1].length && e[1].toLowerCase() !== location.protocol || "string" == typeof e[2] && 0 < e[2].length && e[2].replace(new RegExp(":(" + {
            "http:": 80,
            "https:": 443
        } [location.protocol] + ")?$"), "") !== location.host
    }
    var Un = Object.freeze({
        __proto__: null,
        cached: s,
        hyphenate: a,
        hasOwn: l,
        merge: p,
        isPrimitive: c,
        noop: u,
        isFn: d,
        inBrowser: !0,
        isMobile: h,
        supportsPushState: f,
        parseQuery: J,
        stringifyQuery: ee,
        isAbsolutePath: te,
        removeParams: ne,
        getParentPath: re,
        cleanPath: ie,
        resolvePath: ae,
        getPath: se,
        replaceSlug: le,
        endsWith: ce
    });

    function Bn() {
        this._init()
    }
    var Zn, Gn, Wn, Vn = Bn.prototype;

    function Yn(e, t, n) {
        return Wn && Wn.abort && Wn.abort(), Wn = Z(e, !0, n)
    }
    Vn._init = function() {
        var n, t, r, i, e, a, o = this;
        o.config = E(o), (n = o)._hooks = {}, n._lifecycle = {}, ["init", "mounted", "beforeEach", "afterEach", "doneEach", "ready"].forEach(function(e) {
            var t = n._hooks[e] = [];
            n._lifecycle[e] = function(e) {
                return t.push(e)
            }
        }), [].concat((t = o).config.plugins).forEach(function(e) {
            return d(e) && e(t._lifecycle, t)
        }), W(o, "init"), e = new("history" === ((e = (r = o).config).routerMode || "hash") && f ? Pn : Nn)(e), r.router = e, In(r), Dn = r.route, e.onchange(function(e) {
            In(r), r._updateRender(), Dn.path !== r.route.path ? (r.$fetch(u, r.$resetEvents.bind(r, e.source)), Dn = r.route) : r.$resetEvents(e.source)
        }), Fn(o), jn(o), a = (i = o).config.loadSidebar, i.rendered ? (e = X(i.router, ".sidebar-nav", !0, !0), a && e && (e.parentNode.innerHTML += window.__SUB_SIDEBAR__), i._bindEventOnRendered(e), i.$resetEvents(), W(i, "doneEach"), W(i, "ready")) : i.$fetch(function(e) {
            return W(i, "ready")
        }), W(o, "mounted")
    }, Vn.route = {}, (Zn = Vn)._renderTo = function(e, t, n) {
        e = g(e);
        e && (e[n ? "outerHTML" : "innerHTML"] = t)
    }, Zn._renderSidebar = function(e) {
        var t = this.config,
            n = t.maxLevel,
            r = t.subMaxLevel,
            i = t.loadSidebar;
        if (t.hideSidebar) return [document.querySelector("aside.sidebar"), document.querySelector("button.sidebar-toggle")].forEach(function(e) {
            return e.parentNode.removeChild(e)
        }), document.querySelector("section.content").style.right = "unset", document.querySelector("section.content").style.left = "unset", document.querySelector("section.content").style.position = "relative", document.querySelector("section.content").style.width = "100%", null;
        this._renderTo(".sidebar-nav", this.compiler.sidebar(e, n));
        n = X(this.router, ".sidebar-nav", !0, !0);
        i && n ? n.parentNode.innerHTML += this.compiler.subSidebar(r) || "" : this.compiler.subSidebar(), this._bindEventOnRendered(n)
    }, Zn._bindEventOnRendered = function(e) {
        var t, n = this.config.autoHeader;
        ! function(e) {
            var t = y(".cover.show");
            ke = t ? t.offsetHeight : 0;
            var t = g(".sidebar"),
                n = [];
            null != t && (n = k(t, "li"));
            for (var r, i = 0, a = n.length; i < a; i += 1) {
                var o, s, l = n[i],
                    c = l.querySelector("a");
                c && ("/" !== (o = c.getAttribute("href")) && (c = (s = e.parse(o)).query.id, s = s.path, c && (o = xe(s, c))), o && (me[decodeURIComponent(o)] = l))
            }
            h || (r = ne(e.getCurrentPath()), S("scroll", function() {
                return we(r)
            }), _("scroll", function() {
                return we(r)
            }), _(t, "mouseover", function() {
                ve = !0
            }), _(t, "mouseleave", function() {
                ve = !1
            }))
        }(this.router), n && e && ((n = (t = g("#main")).children[0]) && "H1" !== n.tagName && x(t, w("div", this.compiler.header(e.innerText, 1)).children[0]))
    }, Zn._renderNav = function(e) {
        e && this._renderTo("nav", this.compiler.compile(e)), this.config.loadNavbar && X(this.router, "nav")
    }, Zn._renderMain = function(r, i, a) {
        var o = this;
        if (void 0 === i && (i = {}), !r) return Ln.call(this, r);
        W(this, "beforeEach", r, function(e) {
            function t() {
                i.updatedAt && (n = Cn(n, i.updatedAt, o.config.formatUpdated)), W(o, "afterEach", n, function(e) {
                    return Ln.call(o, e)
                })
            }
            var n;
            o.isHTML ? (n = o.result = r, t(), a()) : On({
                compiler: o.compiler,
                raw: e
            }, function(e) {
                n = o.compiler.compile(e), n = o.isRemoteUrl ? H.sanitize(n, {
                    ADD_TAGS: ["script"]
                }) : n, t(), a()
            })
        })
    }, Zn._renderCover = function(e, t) {
        var n, r = g(".cover");
        A(g("main"), t ? "add" : "remove", "hidden"), e ? (A(r, "add", "show"), (t = (n = this.coverIsHTML ? e : this.compiler.cover(e)).trim().match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$')) && ("color" === t[2] ? r.style.background = t[1] + (t[3] || "") : (e = t[1], A(r, "add", "has-mask"), te(t[1]) || (e = se(this.router.getBasePath(), t[1])), r.style.backgroundImage = "url(" + e + ")", r.style.backgroundSize = "cover", r.style.backgroundPosition = "center center"), n = n.replace(t[0], "")), this._renderTo(".cover-main", n), Y()) : A(r, "remove", "show")
    }, Zn._updateRender = function() {
        var e, t, n, r;
        e = this, t = g(".app-name-link"), n = e.config.nameLink, r = e.route.path, t && (c(e.config.nameLink) ? t.setAttribute("href", n) : "object" == typeof n && (e = Object.keys(n).filter(function(e) {
            return -1 < r.indexOf(e)
        })[0], t.setAttribute("href", n[e])))
    }, (Gn = Vn)._loadSideAndNav = function(e, t, n, r) {
        var i = this;
        return function() {
            if (!n) return r();
            qn(e, t, n, function(e) {
                i._renderSidebar(e), r()
            }, i, !0)
        }
    }, Gn._fetch = function(n) {
        var r = this;
        void 0 === n && (n = u);
        var i, e, t, a, o, s = this.route.query,
            l = this.route.path;
        Hn(l) ? (history.replaceState(null, "", "#"), this.router.normalize()) : (i = ee(s, ["id"]), t = (e = this.config).loadNavbar, s = e.requestHeaders, a = e.loadSidebar, o = this.router.getFile(l), s = Yn(o + i, 0, s), this.isRemoteUrl = Hn(o), this.isHTML = /\.html$/g.test(o), s.then(function(e, t) {
            return r._renderMain(e, t, r._loadSideAndNav(l, i, a, n))
        }, function(e) {
            r._fetchFallbackPage(l, i, n) || r._fetch404(o, i, n)
        }), t && qn(l, i, t, function(e) {
            return r._renderNav(e)
        }, this, !0))
    }, Gn._fetchCover = function() {
        var t = this,
            e = this.config,
            n = e.coverpage,
            r = e.requestHeaders,
            i = this.route.query,
            a = re(this.route.path);
        if (n) {
            var o = null,
                e = this.route.path;
            "string" == typeof n ? "/" === e && (o = n) : o = Array.isArray(n) ? -1 < n.indexOf(e) && "_coverpage" : !0 === (e = n[e]) ? "_coverpage" : e;
            var s = Boolean(o) && this.config.onlyCover;
            return o ? (o = this.router.getFile(a + o), this.coverIsHTML = /\.html$/g.test(o), Z(o + ee(i, ["id"]), !1, r).then(function(e) {
                return t._renderCover(e, s)
            })) : this._renderCover(null, s), s
        }
    }, Gn.$fetch = function(e, t) {
        var n = this;
        void 0 === e && (e = u), void 0 === t && (t = this.$resetEvents.bind(this));

        function r() {
            W(n, "doneEach"), e()
        }
        this._fetchCover() ? r() : this._fetch(function() {
            t(), r()
        })
    }, Gn._fetchFallbackPage = function(n, r, i) {
        var a = this;
        void 0 === i && (i = u);
        var e = this.config,
            t = e.requestHeaders,
            o = e.fallbackLanguages,
            s = e.loadSidebar;
        if (!o) return !1;
        e = n.split("/")[1];
        if (-1 === o.indexOf(e)) return !1;
        e = this.router.getFile(n.replace(new RegExp("^/" + e), ""));
        return Yn(e + r, 0, t).then(function(e, t) {
            return a._renderMain(e, t, a._loadSideAndNav(n, r, s, i))
        }, function() {
            return a._fetch404(n, r, i)
        }), !0
    }, Gn._fetch404 = function(e, t, n) {
        var r = this;
        void 0 === n && (n = u);
        var i = this.config,
            a = i.loadSidebar,
            o = i.requestHeaders,
            i = i.notFoundPage,
            s = this._loadSideAndNav(e, t, a, n);
        if (i) {
            e = function(t, e) {
                var n, r = e.notFoundPage,
                    i = "_404" + (e.ext || ".md");
                switch (typeof r) {
                    case "boolean":
                        n = i;
                        break;
                    case "string":
                        n = r;
                        break;
                    case "object":
                        n = (e = Object.keys(r).sort(function(e, t) {
                            return t.length - e.length
                        }).filter(function(e) {
                            return t.match(new RegExp("^" + e))
                        })[0]) && r[e] || i
                }
                return n
            }(e, this.config);
            return Yn(this.router.getFile(e), 0, o).then(function(e, t) {
                return r._renderMain(e, t, s)
            }, function() {
                return r._renderMain(null, {}, s)
            }), !0
        }
        return this._renderMain(null, {}, s), !1
    }, Vn.$resetEvents = function(e) {
        var t = this,
            n = this.config.auto2top;
        "history" !== e && (t.route.query.id && _e(t.route.path, t.route.query.id), "navigate" === e && n && (void 0 === (n = n) && (n = 0), Se.scrollTop = !0 === n ? 0 : Number(n))), this.config.loadNavbar && X(this.router, "nav")
    }, window.Docsify = {
        util: Un,
        dom: t,
        get: Z,
        slugify: vn,
        version: "4.12.0"
    }, window.DocsifyCompiler = Tn, window.marked = un, window.Prism = xn, e(function(e) {
        return new Bn
    })
}();