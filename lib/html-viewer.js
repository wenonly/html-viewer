const hb = `/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
	display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
	line-height: 1;
}
menu, ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
function Li(i, e) {
  const t = /* @__PURE__ */ Object.create(null), n = i.split(",");
  for (let r = 0; r < n.length; r++)
    t[n[r]] = !0;
  return e ? (r) => !!t[r.toLowerCase()] : (r) => !!t[r];
}
function al(i) {
  if (ee(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
      const n = i[t], r = Pe(n) ? Ob(n) : al(n);
      if (r)
        for (const s in r)
          e[s] = r[s];
    }
    return e;
  } else {
    if (Pe(i))
      return i;
    if (Se(i))
      return i;
  }
}
const fb = /;(?![^(]*\))/g, ub = /:([^]+)/, db = /\/\*.*?\*\//gs;
function Ob(i) {
  const e = {};
  return i.replace(db, "").split(fb).forEach((t) => {
    if (t) {
      const n = t.split(ub);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function os(i) {
  let e = "";
  if (Pe(i))
    e = i;
  else if (ee(i))
    for (let t = 0; t < i.length; t++) {
      const n = os(i[t]);
      n && (e += n + " ");
    }
  else if (Se(i))
    for (const t in i)
      i[t] && (e += t + " ");
  return e.trim();
}
const pb = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", mb = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", gb = /* @__PURE__ */ Li(pb), bb = /* @__PURE__ */ Li(mb), Sb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yb = /* @__PURE__ */ Li(Sb);
function mO(i) {
  return !!i || i === "";
}
const ge = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, Mn = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], Ye = () => {
}, gO = () => !1, Qb = /^on[^a-z]/, ls = (i) => Qb.test(i), Qo = (i) => i.startsWith("onUpdate:"), Ze = Object.assign, Kc = (i, e) => {
  const t = i.indexOf(e);
  t > -1 && i.splice(t, 1);
}, vb = Object.prototype.hasOwnProperty, oe = (i, e) => vb.call(i, e), ee = Array.isArray, Yn = (i) => cl(i) === "[object Map]", xb = (i) => cl(i) === "[object Set]", te = (i) => typeof i == "function", Pe = (i) => typeof i == "string", Jc = (i) => typeof i == "symbol", Se = (i) => i !== null && typeof i == "object", eh = (i) => Se(i) && te(i.then) && te(i.catch), wb = Object.prototype.toString, cl = (i) => wb.call(i), th = (i) => cl(i).slice(8, -1), $b = (i) => cl(i) === "[object Object]", ih = (i) => Pe(i) && i !== "NaN" && i[0] !== "-" && "" + parseInt(i, 10) === i, Ks = /* @__PURE__ */ Li(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pb = /* @__PURE__ */ Li("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), hl = (i) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = i(t));
}, kb = /-(\w)/g, Gn = hl((i) => i.replace(kb, (e, t) => t ? t.toUpperCase() : "")), Cb = /\B([A-Z])/g, Di = hl((i) => i.replace(Cb, "-$1").toLowerCase()), as = hl((i) => i.charAt(0).toUpperCase() + i.slice(1)), en = hl((i) => i ? `on${as(i)}` : ""), Wr = (i, e) => !Object.is(i, e), ur = (i, e) => {
  for (let t = 0; t < i.length; t++)
    i[t](e);
}, vo = (i, e, t) => {
  Object.defineProperty(i, e, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, bO = (i) => {
  const e = parseFloat(i);
  return isNaN(e) ? i : e;
};
let df;
const SO = () => df || (df = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xo(i, ...e) {
  console.warn(`[Vue warn] ${i}`, ...e);
}
let bt;
class Tb {
  constructor(e = !1) {
    this.detached = e, this.active = !0, this.effects = [], this.cleanups = [], this.parent = bt, !e && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const t = bt;
      try {
        return bt = this, e();
      } finally {
        bt = t;
      }
    } else
      ({}).NODE_ENV !== "production" && xo("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    bt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    bt = this.parent;
  }
  stop(e) {
    if (this.active) {
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].stop();
      for (t = 0, n = this.cleanups.length; t < n; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function _b(i, e = bt) {
  e && e.active && e.effects.push(i);
}
function Xb() {
  return bt;
}
function Ab(i) {
  bt ? bt.cleanups.push(i) : {}.NODE_ENV !== "production" && xo("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
const Nr = (i) => {
  const e = new Set(i);
  return e.w = 0, e.n = 0, e;
}, yO = (i) => (i.w & Wi) > 0, QO = (i) => (i.n & Wi) > 0, Vb = ({ deps: i }) => {
  if (i.length)
    for (let e = 0; e < i.length; e++)
      i[e].w |= Wi;
}, Eb = (i) => {
  const { deps: e } = i;
  if (e.length) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      yO(r) && !QO(r) ? r.delete(i) : e[t++] = r, r.w &= ~Wi, r.n &= ~Wi;
    }
    e.length = t;
  }
}, Va = /* @__PURE__ */ new WeakMap();
let xr = 0, Wi = 1;
const Ea = 30;
let ot;
const hn = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), Za = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class nh {
  constructor(e, t = null, n) {
    this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, _b(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = ot, t = Vi;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = ot, ot = this, Vi = !0, Wi = 1 << ++xr, xr <= Ea ? Vb(this) : Of(this), this.fn();
    } finally {
      xr <= Ea && Eb(this), Wi = 1 << --xr, ot = this.parent, Vi = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ot === this ? this.deferStop = !0 : this.active && (Of(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Of(i) {
  const { deps: e } = i;
  if (e.length) {
    for (let t = 0; t < e.length; t++)
      e[t].delete(i);
    e.length = 0;
  }
}
let Vi = !0;
const vO = [];
function vn() {
  vO.push(Vi), Vi = !1;
}
function xn() {
  const i = vO.pop();
  Vi = i === void 0 ? !0 : i;
}
function pt(i, e, t) {
  if (Vi && ot) {
    let n = Va.get(i);
    n || Va.set(i, n = /* @__PURE__ */ new Map());
    let r = n.get(t);
    r || n.set(t, r = Nr());
    const s = {}.NODE_ENV !== "production" ? { effect: ot, target: i, type: e, key: t } : void 0;
    Ra(r, s);
  }
}
function Ra(i, e) {
  let t = !1;
  xr <= Ea ? QO(i) || (i.n |= Wi, t = !yO(i)) : t = !i.has(ot), t && (i.add(ot), ot.deps.push(i), {}.NODE_ENV !== "production" && ot.onTrack && ot.onTrack(Object.assign({ effect: ot }, e)));
}
function di(i, e, t, n, r, s) {
  const o = Va.get(i);
  if (!o)
    return;
  let l = [];
  if (e === "clear")
    l = [...o.values()];
  else if (t === "length" && ee(i)) {
    const c = bO(n);
    o.forEach((h, f) => {
      (f === "length" || f >= c) && l.push(h);
    });
  } else
    switch (t !== void 0 && l.push(o.get(t)), e) {
      case "add":
        ee(i) ? ih(t) && l.push(o.get("length")) : (l.push(o.get(hn)), Yn(i) && l.push(o.get(Za)));
        break;
      case "delete":
        ee(i) || (l.push(o.get(hn)), Yn(i) && l.push(o.get(Za)));
        break;
      case "set":
        Yn(i) && l.push(o.get(hn));
        break;
    }
  const a = {}.NODE_ENV !== "production" ? { target: i, type: e, key: t, newValue: n, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && ({}.NODE_ENV !== "production" ? Zn(l[0], a) : Zn(l[0]));
  else {
    const c = [];
    for (const h of l)
      h && c.push(...h);
    ({}).NODE_ENV !== "production" ? Zn(Nr(c), a) : Zn(Nr(c));
  }
}
function Zn(i, e) {
  const t = ee(i) ? i : [...i];
  for (const n of t)
    n.computed && pf(n, e);
  for (const n of t)
    n.computed || pf(n, e);
}
function pf(i, e) {
  (i !== ot || i.allowRecurse) && ({}.NODE_ENV !== "production" && i.onTrigger && i.onTrigger(Ze({ effect: i }, e)), i.scheduler ? i.scheduler() : i.run());
}
const Zb = /* @__PURE__ */ Li("__proto__,__v_isRef,__isVue"), xO = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((i) => i !== "arguments" && i !== "caller").map((i) => Symbol[i]).filter(Jc)
), Rb = /* @__PURE__ */ fl(), Db = /* @__PURE__ */ fl(!1, !0), Wb = /* @__PURE__ */ fl(!0), Nb = /* @__PURE__ */ fl(!0, !0), mf = /* @__PURE__ */ Mb();
function Mb() {
  const i = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    i[e] = function(...t) {
      const n = se(this);
      for (let s = 0, o = this.length; s < o; s++)
        pt(n, "get", s + "");
      const r = n[e](...t);
      return r === -1 || r === !1 ? n[e](...t.map(se)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    i[e] = function(...t) {
      vn();
      const n = se(this)[e].apply(this, t);
      return xn(), n;
    };
  }), i;
}
function fl(i = !1, e = !1) {
  return function(n, r, s) {
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return e;
    if (r === "__v_raw" && s === (i ? e ? XO : _O : e ? TO : CO).get(n))
      return n;
    const o = ee(n);
    if (!i && o && oe(mf, r))
      return Reflect.get(mf, r, s);
    const l = Reflect.get(n, r, s);
    return (Jc(r) ? xO.has(r) : Zb(r)) || (i || pt(n, "get", r), e) ? l : Ue(l) ? o && ih(r) ? l : l.value : Se(l) ? i ? sh(l) : cs(l) : l;
  };
}
const Yb = /* @__PURE__ */ wO(), jb = /* @__PURE__ */ wO(!0);
function wO(i = !1) {
  return function(t, n, r, s) {
    let o = t[n];
    if (Ni(o) && Ue(o) && !Ue(r))
      return !1;
    if (!i && (!wo(r) && !Ni(r) && (o = se(o), r = se(r)), !ee(t) && Ue(o) && !Ue(r)))
      return o.value = r, !0;
    const l = ee(t) && ih(n) ? Number(n) < t.length : oe(t, n), a = Reflect.set(t, n, r, s);
    return t === se(s) && (l ? Wr(r, o) && di(t, "set", n, r, o) : di(t, "add", n, r)), a;
  };
}
function Ub(i, e) {
  const t = oe(i, e), n = i[e], r = Reflect.deleteProperty(i, e);
  return r && t && di(i, "delete", e, void 0, n), r;
}
function Ib(i, e) {
  const t = Reflect.has(i, e);
  return (!Jc(e) || !xO.has(e)) && pt(i, "has", e), t;
}
function qb(i) {
  return pt(i, "iterate", ee(i) ? "length" : hn), Reflect.ownKeys(i);
}
const $O = {
  get: Rb,
  set: Yb,
  deleteProperty: Ub,
  has: Ib,
  ownKeys: qb
}, PO = {
  get: Wb,
  set(i, e) {
    return {}.NODE_ENV !== "production" && xo(`Set operation on key "${String(e)}" failed: target is readonly.`, i), !0;
  },
  deleteProperty(i, e) {
    return {}.NODE_ENV !== "production" && xo(`Delete operation on key "${String(e)}" failed: target is readonly.`, i), !0;
  }
}, Bb = /* @__PURE__ */ Ze({}, $O, {
  get: Db,
  set: jb
}), Lb = /* @__PURE__ */ Ze({}, PO, {
  get: Nb
}), rh = (i) => i, ul = (i) => Reflect.getPrototypeOf(i);
function xs(i, e, t = !1, n = !1) {
  i = i.__v_raw;
  const r = se(i), s = se(e);
  t || (e !== s && pt(r, "get", e), pt(r, "get", s));
  const { has: o } = ul(r), l = n ? rh : t ? oh : Mr;
  if (o.call(r, e))
    return l(i.get(e));
  if (o.call(r, s))
    return l(i.get(s));
  i !== r && i.get(e);
}
function ws(i, e = !1) {
  const t = this.__v_raw, n = se(t), r = se(i);
  return e || (i !== r && pt(n, "has", i), pt(n, "has", r)), i === r ? t.has(i) : t.has(i) || t.has(r);
}
function $s(i, e = !1) {
  return i = i.__v_raw, !e && pt(se(i), "iterate", hn), Reflect.get(i, "size", i);
}
function gf(i) {
  i = se(i);
  const e = se(this);
  return ul(e).has.call(e, i) || (e.add(i), di(e, "add", i, i)), this;
}
function bf(i, e) {
  e = se(e);
  const t = se(this), { has: n, get: r } = ul(t);
  let s = n.call(t, i);
  s ? {}.NODE_ENV !== "production" && kO(t, n, i) : (i = se(i), s = n.call(t, i));
  const o = r.call(t, i);
  return t.set(i, e), s ? Wr(e, o) && di(t, "set", i, e, o) : di(t, "add", i, e), this;
}
function Sf(i) {
  const e = se(this), { has: t, get: n } = ul(e);
  let r = t.call(e, i);
  r ? {}.NODE_ENV !== "production" && kO(e, t, i) : (i = se(i), r = t.call(e, i));
  const s = n ? n.call(e, i) : void 0, o = e.delete(i);
  return r && di(e, "delete", i, void 0, s), o;
}
function yf() {
  const i = se(this), e = i.size !== 0, t = {}.NODE_ENV !== "production" ? Yn(i) ? new Map(i) : new Set(i) : void 0, n = i.clear();
  return e && di(i, "clear", void 0, void 0, t), n;
}
function Ps(i, e) {
  return function(n, r) {
    const s = this, o = s.__v_raw, l = se(o), a = e ? rh : i ? oh : Mr;
    return !i && pt(l, "iterate", hn), o.forEach((c, h) => n.call(r, a(c), a(h), s));
  };
}
function ks(i, e, t) {
  return function(...n) {
    const r = this.__v_raw, s = se(r), o = Yn(s), l = i === "entries" || i === Symbol.iterator && o, a = i === "keys" && o, c = r[i](...n), h = t ? rh : e ? oh : Mr;
    return !e && pt(s, "iterate", a ? Za : hn), {
      // iterator protocol
      next() {
        const { value: f, done: u } = c.next();
        return u ? { value: f, done: u } : {
          value: l ? [h(f[0]), h(f[1])] : h(f),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Si(i) {
  return function(...e) {
    if ({}.NODE_ENV !== "production") {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${as(i)} operation ${t}failed: target is readonly.`, se(this));
    }
    return i === "delete" ? !1 : this;
  };
}
function zb() {
  const i = {
    get(s) {
      return xs(this, s);
    },
    get size() {
      return $s(this);
    },
    has: ws,
    add: gf,
    set: bf,
    delete: Sf,
    clear: yf,
    forEach: Ps(!1, !1)
  }, e = {
    get(s) {
      return xs(this, s, !1, !0);
    },
    get size() {
      return $s(this);
    },
    has: ws,
    add: gf,
    set: bf,
    delete: Sf,
    clear: yf,
    forEach: Ps(!1, !0)
  }, t = {
    get(s) {
      return xs(this, s, !0);
    },
    get size() {
      return $s(this, !0);
    },
    has(s) {
      return ws.call(this, s, !0);
    },
    add: Si(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Si(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Si(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Si(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ps(!0, !1)
  }, n = {
    get(s) {
      return xs(this, s, !0, !0);
    },
    get size() {
      return $s(this, !0);
    },
    has(s) {
      return ws.call(this, s, !0);
    },
    add: Si(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Si(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Si(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Si(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ps(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    i[s] = ks(s, !1, !1), t[s] = ks(s, !0, !1), e[s] = ks(s, !1, !0), n[s] = ks(s, !0, !0);
  }), [
    i,
    t,
    e,
    n
  ];
}
const [Gb, Fb, Hb, Kb] = /* @__PURE__ */ zb();
function dl(i, e) {
  const t = e ? i ? Kb : Hb : i ? Fb : Gb;
  return (n, r, s) => r === "__v_isReactive" ? !i : r === "__v_isReadonly" ? i : r === "__v_raw" ? n : Reflect.get(oe(t, r) && r in n ? t : n, r, s);
}
const Jb = {
  get: /* @__PURE__ */ dl(!1, !1)
}, eS = {
  get: /* @__PURE__ */ dl(!1, !0)
}, tS = {
  get: /* @__PURE__ */ dl(!0, !1)
}, iS = {
  get: /* @__PURE__ */ dl(!0, !0)
};
function kO(i, e, t) {
  const n = se(t);
  if (n !== t && e.call(i, n)) {
    const r = th(i);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const CO = /* @__PURE__ */ new WeakMap(), TO = /* @__PURE__ */ new WeakMap(), _O = /* @__PURE__ */ new WeakMap(), XO = /* @__PURE__ */ new WeakMap();
function nS(i) {
  switch (i) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function rS(i) {
  return i.__v_skip || !Object.isExtensible(i) ? 0 : nS(th(i));
}
function cs(i) {
  return Ni(i) ? i : Ol(i, !1, $O, Jb, CO);
}
function sS(i) {
  return Ol(i, !1, Bb, eS, TO);
}
function sh(i) {
  return Ol(i, !0, PO, tS, _O);
}
function Rn(i) {
  return Ol(i, !0, Lb, iS, XO);
}
function Ol(i, e, t, n, r) {
  if (!Se(i))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(i)}`), i;
  if (i.__v_raw && !(e && i.__v_isReactive))
    return i;
  const s = r.get(i);
  if (s)
    return s;
  const o = rS(i);
  if (o === 0)
    return i;
  const l = new Proxy(i, o === 2 ? n : t);
  return r.set(i, l), l;
}
function fn(i) {
  return Ni(i) ? fn(i.__v_raw) : !!(i && i.__v_isReactive);
}
function Ni(i) {
  return !!(i && i.__v_isReadonly);
}
function wo(i) {
  return !!(i && i.__v_isShallow);
}
function Da(i) {
  return fn(i) || Ni(i);
}
function se(i) {
  const e = i && i.__v_raw;
  return e ? se(e) : i;
}
function AO(i) {
  return vo(i, "__v_skip", !0), i;
}
const Mr = (i) => Se(i) ? cs(i) : i, oh = (i) => Se(i) ? sh(i) : i;
function VO(i) {
  Vi && ot && (i = se(i), {}.NODE_ENV !== "production" ? Ra(i.dep || (i.dep = Nr()), {
    target: i,
    type: "get",
    key: "value"
  }) : Ra(i.dep || (i.dep = Nr())));
}
function EO(i, e) {
  i = se(i), i.dep && ({}.NODE_ENV !== "production" ? Zn(i.dep, {
    target: i,
    type: "set",
    key: "value",
    newValue: e
  }) : Zn(i.dep));
}
function Ue(i) {
  return !!(i && i.__v_isRef === !0);
}
function Ce(i) {
  return RO(i, !1);
}
function ZO(i) {
  return RO(i, !0);
}
function RO(i, e) {
  return Ue(i) ? i : new oS(i, e);
}
class oS {
  constructor(e, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : se(e), this._value = t ? e : Mr(e);
  }
  get value() {
    return VO(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || wo(e) || Ni(e);
    e = t ? e : se(e), Wr(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : Mr(e), EO(this, e));
  }
}
function We(i) {
  return Ue(i) ? i.value : i;
}
const lS = {
  get: (i, e, t) => We(Reflect.get(i, e, t)),
  set: (i, e, t, n) => {
    const r = i[e];
    return Ue(r) && !Ue(t) ? (r.value = t, !0) : Reflect.set(i, e, t, n);
  }
};
function DO(i) {
  return fn(i) ? i : new Proxy(i, lS);
}
var WO;
class aS {
  constructor(e, t, n, r) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this[WO] = !1, this._dirty = !0, this.effect = new nh(e, () => {
      this._dirty || (this._dirty = !0, EO(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n;
  }
  get value() {
    const e = se(this);
    return VO(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
WO = "__v_isReadonly";
function cS(i, e, t = !1) {
  let n, r;
  const s = te(i);
  s ? (n = i, r = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Ye) : (n = i.get, r = i.set);
  const o = new aS(n, r, s || !r, t);
  return {}.NODE_ENV !== "production" && e && !t && (o.effect.onTrack = e.onTrack, o.effect.onTrigger = e.onTrigger), o;
}
const un = [];
function Js(i) {
  un.push(i);
}
function eo() {
  un.pop();
}
function A(i, ...e) {
  if ({}.NODE_ENV === "production")
    return;
  vn();
  const t = un.length ? un[un.length - 1].component : null, n = t && t.appContext.config.warnHandler, r = hS();
  if (n)
    hi(n, t, 11, [
      i + e.join(""),
      t && t.proxy,
      r.map(({ vnode: s }) => `at <${Ql(t, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${i}`, ...e];
    r.length && s.push(`
`, ...fS(r)), console.warn(...s);
  }
  xn();
}
function hS() {
  let i = un[un.length - 1];
  if (!i)
    return [];
  const e = [];
  for (; i; ) {
    const t = e[0];
    t && t.vnode === i ? t.recurseCount++ : e.push({
      vnode: i,
      recurseCount: 0
    });
    const n = i.component && i.component.parent;
    i = n && n.vnode;
  }
  return e;
}
function fS(i) {
  const e = [];
  return i.forEach((t, n) => {
    e.push(...n === 0 ? [] : [`
`], ...uS(t));
  }), e;
}
function uS({ vnode: i, recurseCount: e }) {
  const t = e > 0 ? `... (${e} recursive calls)` : "", n = i.component ? i.component.parent == null : !1, r = ` at <${Ql(i.component, i.type, n)}`, s = ">" + t;
  return i.props ? [r, ...dS(i.props), s] : [r + s];
}
function dS(i) {
  const e = [], t = Object.keys(i);
  return t.slice(0, 3).forEach((n) => {
    e.push(...NO(n, i[n]));
  }), t.length > 3 && e.push(" ..."), e;
}
function NO(i, e, t) {
  return Pe(e) ? (e = JSON.stringify(e), t ? e : [`${i}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? t ? e : [`${i}=${e}`] : Ue(e) ? (e = NO(i, se(e.value), !0), t ? e : [`${i}=Ref<`, e, ">"]) : te(e) ? [`${i}=fn${e.name ? `<${e.name}>` : ""}`] : (e = se(e), t ? e : [`${i}=`, e]);
}
const lh = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function hi(i, e, t, n) {
  let r;
  try {
    r = n ? i(...n) : i();
  } catch (s) {
    pl(s, e, t);
  }
  return r;
}
function Wt(i, e, t, n) {
  if (te(i)) {
    const s = hi(i, e, t, n);
    return s && eh(s) && s.catch((o) => {
      pl(o, e, t);
    }), s;
  }
  const r = [];
  for (let s = 0; s < i.length; s++)
    r.push(Wt(i[s], e, t, n));
  return r;
}
function pl(i, e, t, n = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy, l = {}.NODE_ENV !== "production" ? lh[t] : t;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](i, o, l) === !1)
            return;
      }
      s = s.parent;
    }
    const a = e.appContext.config.errorHandler;
    if (a) {
      hi(a, null, 10, [i, o, l]);
      return;
    }
  }
  OS(i, t, r, n);
}
function OS(i, e, t, n = !0) {
  if ({}.NODE_ENV !== "production") {
    const r = lh[e];
    if (t && Js(t), A(`Unhandled error${r ? ` during execution of ${r}` : ""}`), t && eo(), n)
      throw i;
    console.error(i);
  } else
    console.error(i);
}
let Yr = !1, Wa = !1;
const He = [];
let Gt = 0;
const jn = [];
let Lt = null, Qi = 0;
const MO = /* @__PURE__ */ Promise.resolve();
let ah = null;
const pS = 100;
function hs(i) {
  const e = ah || MO;
  return i ? e.then(this ? i.bind(this) : i) : e;
}
function mS(i) {
  let e = Gt + 1, t = He.length;
  for (; e < t; ) {
    const n = e + t >>> 1;
    jr(He[n]) < i ? e = n + 1 : t = n;
  }
  return e;
}
function ml(i) {
  (!He.length || !He.includes(i, Yr && i.allowRecurse ? Gt + 1 : Gt)) && (i.id == null ? He.push(i) : He.splice(mS(i.id), 0, i), YO());
}
function YO() {
  !Yr && !Wa && (Wa = !0, ah = MO.then(IO));
}
function gS(i) {
  const e = He.indexOf(i);
  e > Gt && He.splice(e, 1);
}
function jO(i) {
  ee(i) ? jn.push(...i) : (!Lt || !Lt.includes(i, i.allowRecurse ? Qi + 1 : Qi)) && jn.push(i), YO();
}
function Qf(i, e = Yr ? Gt + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map()); e < He.length; e++) {
    const t = He[e];
    if (t && t.pre) {
      if ({}.NODE_ENV !== "production" && ch(i, t))
        continue;
      He.splice(e, 1), e--, t();
    }
  }
}
function UO(i) {
  if (jn.length) {
    const e = [...new Set(jn)];
    if (jn.length = 0, Lt) {
      Lt.push(...e);
      return;
    }
    for (Lt = e, {}.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map()), Lt.sort((t, n) => jr(t) - jr(n)), Qi = 0; Qi < Lt.length; Qi++)
      ({}).NODE_ENV !== "production" && ch(i, Lt[Qi]) || Lt[Qi]();
    Lt = null, Qi = 0;
  }
}
const jr = (i) => i.id == null ? 1 / 0 : i.id, bS = (i, e) => {
  const t = jr(i) - jr(e);
  if (t === 0) {
    if (i.pre && !e.pre)
      return -1;
    if (e.pre && !i.pre)
      return 1;
  }
  return t;
};
function IO(i) {
  Wa = !1, Yr = !0, {}.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map()), He.sort(bS);
  const e = {}.NODE_ENV !== "production" ? (t) => ch(i, t) : Ye;
  try {
    for (Gt = 0; Gt < He.length; Gt++) {
      const t = He[Gt];
      if (t && t.active !== !1) {
        if ({}.NODE_ENV !== "production" && e(t))
          continue;
        hi(
          t,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    Gt = 0, He.length = 0, UO(i), Yr = !1, ah = null, (He.length || jn.length) && IO(i);
  }
}
function ch(i, e) {
  if (!i.has(e))
    i.set(e, 1);
  else {
    const t = i.get(e);
    if (t > pS) {
      const n = e.ownerInstance, r = n && Qp(n.type);
      return A(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      i.set(e, t + 1);
  }
}
let dn = !1;
const Xn = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (SO().__VUE_HMR_RUNTIME__ = {
  createRecord: Bl(qO),
  rerender: Bl(QS),
  reload: Bl(vS)
});
const gn = /* @__PURE__ */ new Map();
function SS(i) {
  const e = i.type.__hmrId;
  let t = gn.get(e);
  t || (qO(e, i.type), t = gn.get(e)), t.instances.add(i);
}
function yS(i) {
  gn.get(i.type.__hmrId).instances.delete(i);
}
function qO(i, e) {
  return gn.has(i) ? !1 : (gn.set(i, {
    initialDef: Xr(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Xr(i) {
  return vp(i) ? i.__vccOpts : i;
}
function QS(i, e) {
  const t = gn.get(i);
  t && (t.initialDef.render = e, [...t.instances].forEach((n) => {
    e && (n.render = e, Xr(n.type).render = e), n.renderCache = [], dn = !0, n.update(), dn = !1;
  }));
}
function vS(i, e) {
  const t = gn.get(i);
  if (!t)
    return;
  e = Xr(e), vf(t.initialDef, e);
  const n = [...t.instances];
  for (const r of n) {
    const s = Xr(r.type);
    Xn.has(s) || (s !== t.initialDef && vf(s, e), Xn.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Xn.add(s), r.ceReload(e.styles), Xn.delete(s)) : r.parent ? ml(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  jO(() => {
    for (const r of n)
      Xn.delete(Xr(r.type));
  });
}
function vf(i, e) {
  Ze(i, e);
  for (const t in i)
    t !== "__file" && !(t in e) && delete i[t];
}
function Bl(i) {
  return (e, t) => {
    try {
      return i(e, t);
    } catch (n) {
      console.error(n), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Ft, wr = [], Na = !1;
function fs(i, ...e) {
  Ft ? Ft.emit(i, ...e) : Na || wr.push({ event: i, args: e });
}
function BO(i, e) {
  var t, n;
  Ft = i, Ft ? (Ft.enabled = !0, wr.forEach(({ event: r, args: s }) => Ft.emit(r, ...s)), wr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((n = (t = window.navigator) === null || t === void 0 ? void 0 : t.userAgent) === null || n === void 0) && n.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    BO(s, e);
  }), setTimeout(() => {
    Ft || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Na = !0, wr = []);
  }, 3e3)) : (Na = !0, wr = []);
}
function xS(i, e) {
  fs("app:init", i, e, {
    Fragment: wt,
    Text: us,
    Comment: Ot,
    Static: io
  });
}
function wS(i) {
  fs("app:unmount", i);
}
const $S = /* @__PURE__ */ hh(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), LO = /* @__PURE__ */ hh(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), PS = /* @__PURE__ */ hh(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), kS = (i) => {
  Ft && typeof Ft.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ft.cleanupBuffer(i) && PS(i);
};
function hh(i) {
  return (e) => {
    fs(i, e.appContext.app, e.uid, e.parent ? e.parent.uid : void 0, e);
  };
}
const CS = /* @__PURE__ */ zO(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), TS = /* @__PURE__ */ zO(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function zO(i) {
  return (e, t, n) => {
    fs(i, e.appContext.app, e.uid, e, t, n);
  };
}
function _S(i, e, t) {
  fs("component:emit", i.appContext.app, i, e, t);
}
function XS(i, e, ...t) {
  if (i.isUnmounted)
    return;
  const n = i.vnode.props || ge;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [f] } = i;
    if (h)
      if (!(e in h))
        (!f || !(en(e) in f)) && A(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${en(e)}" prop.`);
      else {
        const u = h[e];
        te(u) && (u(...t) || A(`Invalid event arguments: event validation failed for event "${e}".`));
      }
  }
  let r = t;
  const s = e.startsWith("update:"), o = s && e.slice(7);
  if (o && o in n) {
    const h = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: u } = n[h] || ge;
    u && (r = t.map((d) => Pe(d) ? d.trim() : d)), f && (r = t.map(bO));
  }
  if ({}.NODE_ENV !== "production" && _S(i, e, r), {}.NODE_ENV !== "production") {
    const h = e.toLowerCase();
    h !== e && n[en(h)] && A(`Event "${h}" is emitted in component ${Ql(i, i.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Di(e)}" instead of "${e}".`);
  }
  let l, a = n[l = en(e)] || // also try camelCase event handler (#2249)
  n[l = en(Gn(e))];
  !a && s && (a = n[l = en(Di(e))]), a && Wt(a, i, 6, r);
  const c = n[l + "Once"];
  if (c) {
    if (!i.emitted)
      i.emitted = {};
    else if (i.emitted[l])
      return;
    i.emitted[l] = !0, Wt(c, i, 6, r);
  }
}
function GO(i, e, t = !1) {
  const n = e.emitsCache, r = n.get(i);
  if (r !== void 0)
    return r;
  const s = i.emits;
  let o = {}, l = !1;
  if (!te(i)) {
    const a = (c) => {
      const h = GO(c, e, !0);
      h && (l = !0, Ze(o, h));
    };
    !t && e.mixins.length && e.mixins.forEach(a), i.extends && a(i.extends), i.mixins && i.mixins.forEach(a);
  }
  return !s && !l ? (Se(i) && n.set(i, null), null) : (ee(s) ? s.forEach((a) => o[a] = null) : Ze(o, s), Se(i) && n.set(i, o), o);
}
function gl(i, e) {
  return !i || !ls(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), oe(i, e[0].toLowerCase() + e.slice(1)) || oe(i, Di(e)) || oe(i, e));
}
let Ie = null, FO = null;
function $o(i) {
  const e = Ie;
  return Ie = i, FO = i && i.type.__scopeId || null, e;
}
function An(i, e = Ie, t) {
  if (!e || i._n)
    return i;
  const n = (...r) => {
    n._d && Af(-1);
    const s = $o(e);
    let o;
    try {
      o = i(...r);
    } finally {
      $o(s), n._d && Af(1);
    }
    return {}.NODE_ENV !== "production" && LO(e), o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
let Ma = !1;
function Po() {
  Ma = !0;
}
function Ll(i) {
  const { type: e, vnode: t, proxy: n, withProxy: r, props: s, propsOptions: [o], slots: l, attrs: a, emit: c, render: h, renderCache: f, data: u, setupState: d, ctx: O, inheritAttrs: m } = i;
  let b, y;
  const P = $o(i);
  ({}).NODE_ENV !== "production" && (Ma = !1);
  try {
    if (t.shapeFlag & 4) {
      const T = r || n;
      b = Zt(h.call(T, T, f, s, d, u, O)), y = a;
    } else {
      const T = e;
      ({}).NODE_ENV !== "production" && a === s && Po(), b = Zt(T.length > 1 ? T(s, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return Po(), a;
        },
        slots: l,
        emit: c
      } : { attrs: a, slots: l, emit: c }) : T(
        s,
        null
        /* we know it doesn't need it */
      )), y = e.props ? a : VS(a);
    }
  } catch (T) {
    Vr.length = 0, pl(
      T,
      i,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), b = ce(Ot);
  }
  let C = b, x;
  if ({}.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && ([C, x] = AS(b)), y && m !== !1) {
    const T = Object.keys(y), { shapeFlag: R } = C;
    if (T.length) {
      if (R & 7)
        o && T.some(Qo) && (y = ES(y, o)), C = Mi(C, y);
      else if ({}.NODE_ENV !== "production" && !Ma && C.type !== Ot) {
        const G = Object.keys(a), N = [], W = [];
        for (let D = 0, F = G.length; D < F; D++) {
          const J = G[D];
          ls(J) ? Qo(J) || N.push(J[2].toLowerCase() + J.slice(3)) : W.push(J);
        }
        W.length && A(`Extraneous non-props attributes (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), N.length && A(`Extraneous non-emits event listeners (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return t.dirs && ({}.NODE_ENV !== "production" && !xf(C) && A("Runtime directive used on component with non-element root node. The directives will not function as intended."), C = Mi(C), C.dirs = C.dirs ? C.dirs.concat(t.dirs) : t.dirs), t.transition && ({}.NODE_ENV !== "production" && !xf(C) && A("Component inside <Transition> renders non-element root node that cannot be animated."), C.transition = t.transition), {}.NODE_ENV !== "production" && x ? x(C) : b = C, $o(P), b;
}
const AS = (i) => {
  const e = i.children, t = i.dynamicChildren, n = HO(e);
  if (!n)
    return [i, void 0];
  const r = e.indexOf(n), s = t ? t.indexOf(n) : -1, o = (l) => {
    e[r] = l, t && (s > -1 ? t[s] = l : l.patchFlag > 0 && (i.dynamicChildren = [...t, l]));
  };
  return [Zt(n), o];
};
function HO(i) {
  let e;
  for (let t = 0; t < i.length; t++) {
    const n = i[t];
    if (bn(n)) {
      if (n.type !== Ot || n.children === "v-if") {
        if (e)
          return;
        e = n;
      }
    } else
      return;
  }
  return e;
}
const VS = (i) => {
  let e;
  for (const t in i)
    (t === "class" || t === "style" || ls(t)) && ((e || (e = {}))[t] = i[t]);
  return e;
}, ES = (i, e) => {
  const t = {};
  for (const n in i)
    (!Qo(n) || !(n.slice(9) in e)) && (t[n] = i[n]);
  return t;
}, xf = (i) => i.shapeFlag & 7 || i.type === Ot;
function ZS(i, e, t) {
  const { props: n, children: r, component: s } = i, { props: o, children: l, patchFlag: a } = e, c = s.emitsOptions;
  if ({}.NODE_ENV !== "production" && (r || l) && dn || e.dirs || e.transition)
    return !0;
  if (t && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? wf(n, o, c) : !!o;
    if (a & 8) {
      const h = e.dynamicProps;
      for (let f = 0; f < h.length; f++) {
        const u = h[f];
        if (o[u] !== n[u] && !gl(c, u))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? wf(n, o, c) : !0 : !!o;
  return !1;
}
function wf(i, e, t) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(i).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (e[s] !== i[s] && !gl(t, s))
      return !0;
  }
  return !1;
}
function RS({ vnode: i, parent: e }, t) {
  for (; e && e.subTree === i; )
    (i = e.vnode).el = t, e = e.parent;
}
const DS = (i) => i.__isSuspense;
function WS(i, e) {
  e && e.pendingBranch ? ee(i) ? e.effects.push(...i) : e.effects.push(i) : jO(i);
}
function KO(i, e) {
  if (!je)
    ({}).NODE_ENV !== "production" && A("provide() can only be used inside setup().");
  else {
    let t = je.provides;
    const n = je.parent && je.parent.provides;
    n === t && (t = je.provides = Object.create(n)), t[i] = e;
  }
}
function Ei(i, e, t = !1) {
  const n = je || Ie;
  if (n) {
    const r = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
    if (r && i in r)
      return r[i];
    if (arguments.length > 1)
      return t && te(e) ? e.call(n.proxy) : e;
    ({}).NODE_ENV !== "production" && A(`injection "${String(i)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && A("inject() can only be used inside setup() or functional components.");
}
function NS(i, e) {
  return fh(i, null, e);
}
const Cs = {};
function Je(i, e, t) {
  return {}.NODE_ENV !== "production" && !te(e) && A("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), fh(i, e, t);
}
function fh(i, e, { immediate: t, deep: n, flush: r, onTrack: s, onTrigger: o } = ge) {
  ({}).NODE_ENV !== "production" && !e && (t !== void 0 && A('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), n !== void 0 && A('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (x) => {
    A("Invalid watch source: ", x, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = je;
  let c, h = !1, f = !1;
  if (Ue(i) ? (c = () => i.value, h = wo(i)) : fn(i) ? (c = () => i, n = !0) : ee(i) ? (f = !0, h = i.some((x) => fn(x) || wo(x)), c = () => i.map((x) => {
    if (Ue(x))
      return x.value;
    if (fn(x))
      return ln(x);
    if (te(x))
      return hi(
        x,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    ({}).NODE_ENV !== "production" && l(x);
  })) : te(i) ? e ? c = () => hi(
    i,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : c = () => {
    if (!(a && a.isUnmounted))
      return u && u(), Wt(i, a, 3, [d]);
  } : (c = Ye, {}.NODE_ENV !== "production" && l(i)), e && n) {
    const x = c;
    c = () => ln(x());
  }
  let u, d = (x) => {
    u = P.onStop = () => {
      hi(
        x,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, O;
  if (Ir)
    if (d = Ye, e ? t && Wt(e, a, 3, [
      c(),
      f ? [] : void 0,
      d
    ]) : c(), r === "sync") {
      const x = Uy();
      O = x.__watcherHandles || (x.__watcherHandles = []);
    } else
      return Ye;
  let m = f ? new Array(i.length).fill(Cs) : Cs;
  const b = () => {
    if (P.active)
      if (e) {
        const x = P.run();
        (n || h || (f ? x.some((T, R) => Wr(T, m[R])) : Wr(x, m))) && (u && u(), Wt(e, a, 3, [
          x,
          // pass undefined as the old value when it's changed for the first time
          m === Cs ? void 0 : f && m[0] === Cs ? [] : m,
          d
        ]), m = x);
      } else
        P.run();
  };
  b.allowRecurse = !!e;
  let y;
  r === "sync" ? y = b : r === "post" ? y = () => ft(b, a && a.suspense) : (b.pre = !0, a && (b.id = a.uid), y = () => ml(b));
  const P = new nh(c, y);
  ({}).NODE_ENV !== "production" && (P.onTrack = s, P.onTrigger = o), e ? t ? b() : m = P.run() : r === "post" ? ft(P.run.bind(P), a && a.suspense) : P.run();
  const C = () => {
    P.stop(), a && a.scope && Kc(a.scope.effects, P);
  };
  return O && O.push(C), C;
}
function MS(i, e, t) {
  const n = this.proxy, r = Pe(i) ? i.includes(".") ? JO(n, i) : () => n[i] : i.bind(n, n);
  let s;
  te(e) ? s = e : (s = e.handler, t = e);
  const o = je;
  Fn(this);
  const l = fh(r, s.bind(n), t);
  return o ? Fn(o) : pn(), l;
}
function JO(i, e) {
  const t = e.split(".");
  return () => {
    let n = i;
    for (let r = 0; r < t.length && n; r++)
      n = n[t[r]];
    return n;
  };
}
function ln(i, e) {
  if (!Se(i) || i.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(i)))
    return i;
  if (e.add(i), Ue(i))
    ln(i.value, e);
  else if (ee(i))
    for (let t = 0; t < i.length; t++)
      ln(i[t], e);
  else if (xb(i) || Yn(i))
    i.forEach((t) => {
      ln(t, e);
    });
  else if ($b(i))
    for (const t in i)
      ln(i[t], e);
  return i;
}
function Nt(i) {
  return te(i) ? { setup: i, name: i.name } : i;
}
const Ar = (i) => !!i.type.__asyncLoader, uh = (i) => i.type.__isKeepAlive;
function YS(i, e) {
  ep(i, "a", e);
}
function jS(i, e) {
  ep(i, "da", e);
}
function ep(i, e, t = je) {
  const n = i.__wdc || (i.__wdc = () => {
    let r = t;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return i();
  });
  if (bl(e, n, t), t) {
    let r = t.parent;
    for (; r && r.parent; )
      uh(r.parent.vnode) && US(n, e, t, r), r = r.parent;
  }
}
function US(i, e, t, n) {
  const r = bl(
    e,
    i,
    n,
    !0
    /* prepend */
  );
  dh(() => {
    Kc(n[e], r);
  }, t);
}
function bl(i, e, t = je, n = !1) {
  if (t) {
    const r = t[i] || (t[i] = []), s = e.__weh || (e.__weh = (...o) => {
      if (t.isUnmounted)
        return;
      vn(), Fn(t);
      const l = Wt(e, t, i, o);
      return pn(), xn(), l;
    });
    return n ? r.unshift(s) : r.push(s), s;
  } else if ({}.NODE_ENV !== "production") {
    const r = en(lh[i].replace(/ hook$/, ""));
    A(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const pi = (i) => (e, t = je) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ir || i === "sp") && bl(i, (...n) => e(...n), t)
), IS = pi(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), lr = pi(
  "m"
  /* LifecycleHooks.MOUNTED */
), qS = pi(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), tp = pi(
  "u"
  /* LifecycleHooks.UPDATED */
), BS = pi(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), dh = pi(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), LS = pi(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), zS = pi(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), GS = pi(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function FS(i, e = je) {
  bl("ec", i, e);
}
function ip(i) {
  Pb(i) && A("Do not use built-in directive ids as custom directive id: " + i);
}
function HS(i, e) {
  const t = Ie;
  if (t === null)
    return {}.NODE_ENV !== "production" && A("withDirectives can only be used inside render functions."), i;
  const n = yl(t) || t.proxy, r = i.dirs || (i.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [o, l, a, c = ge] = e[s];
    o && (te(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ln(l), r.push({
      dir: o,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return i;
}
function Fi(i, e, t, n) {
  const r = i.dirs, s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    s && (l.oldValue = s[o].value);
    let a = l.dir[n];
    a && (vn(), Wt(a, t, 8, [
      i.el,
      l,
      i,
      e
    ]), xn());
  }
}
const KS = Symbol();
function Oh(i, e, t = {}, n, r) {
  if (Ie.isCE || Ie.parent && Ar(Ie.parent) && Ie.parent.isCE)
    return e !== "default" && (t.name = e), ce("slot", t, n && n());
  let s = i[e];
  ({}).NODE_ENV !== "production" && s && s.length > 1 && (A("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), _t();
  const o = s && np(s(t)), l = bh(
    wt,
    {
      key: t.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${e}`
    },
    o || (n ? n() : []),
    o && i._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function np(i) {
  return i.some((e) => bn(e) ? !(e.type === Ot || e.type === wt && !np(e.children)) : !0) ? i : null;
}
const Ya = (i) => i ? bp(i) ? yl(i) || i.proxy : Ya(i.parent) : null, On = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ze(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => ({}).NODE_ENV !== "production" ? Rn(i.props) : i.props,
    $attrs: (i) => ({}).NODE_ENV !== "production" ? Rn(i.attrs) : i.attrs,
    $slots: (i) => ({}).NODE_ENV !== "production" ? Rn(i.slots) : i.slots,
    $refs: (i) => ({}).NODE_ENV !== "production" ? Rn(i.refs) : i.refs,
    $parent: (i) => Ya(i.parent),
    $root: (i) => Ya(i.root),
    $emit: (i) => i.emit,
    $options: (i) => mh(i),
    $forceUpdate: (i) => i.f || (i.f = () => ml(i.update)),
    $nextTick: (i) => i.n || (i.n = hs.bind(i.proxy)),
    $watch: (i) => MS.bind(i)
  })
), ph = (i) => i === "_" || i === "$", zl = (i, e) => i !== ge && !i.__isScriptSetup && oe(i, e), rp = {
  get({ _: i }, e) {
    const { ctx: t, setupState: n, data: r, props: s, accessCache: o, type: l, appContext: a } = i;
    if ({}.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let c;
    if (e[0] !== "$") {
      const d = o[e];
      if (d !== void 0)
        switch (d) {
          case 1:
            return n[e];
          case 2:
            return r[e];
          case 4:
            return t[e];
          case 3:
            return s[e];
        }
      else {
        if (zl(n, e))
          return o[e] = 1, n[e];
        if (r !== ge && oe(r, e))
          return o[e] = 2, r[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = i.propsOptions[0]) && oe(c, e)
        )
          return o[e] = 3, s[e];
        if (t !== ge && oe(t, e))
          return o[e] = 4, t[e];
        ja && (o[e] = 0);
      }
    }
    const h = On[e];
    let f, u;
    if (h)
      return e === "$attrs" && (pt(i, "get", e), {}.NODE_ENV !== "production" && Po()), h(i);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[e])
    )
      return f;
    if (t !== ge && oe(t, e))
      return o[e] = 4, t[e];
    if (
      // global properties
      u = a.config.globalProperties, oe(u, e)
    )
      return u[e];
    ({}).NODE_ENV !== "production" && Ie && (!Pe(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (r !== ge && ph(e[0]) && oe(r, e) ? A(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : i === Ie && A(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`));
  },
  set({ _: i }, e, t) {
    const { data: n, setupState: r, ctx: s } = i;
    return zl(r, e) ? (r[e] = t, !0) : {}.NODE_ENV !== "production" && r.__isScriptSetup && oe(r, e) ? (A(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : n !== ge && oe(n, e) ? (n[e] = t, !0) : oe(i.props, e) ? ({}.NODE_ENV !== "production" && A(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in i ? ({}.NODE_ENV !== "production" && A(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && e in i.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : s[e] = t, !0);
  },
  has({ _: { data: i, setupState: e, accessCache: t, ctx: n, appContext: r, propsOptions: s } }, o) {
    let l;
    return !!t[o] || i !== ge && oe(i, o) || zl(e, o) || (l = s[0]) && oe(l, o) || oe(n, o) || oe(On, o) || oe(r.config.globalProperties, o);
  },
  defineProperty(i, e, t) {
    return t.get != null ? i._.accessCache[e] = 0 : oe(t, "value") && this.set(i, e, t.value, null), Reflect.defineProperty(i, e, t);
  }
};
({}).NODE_ENV !== "production" && (rp.ownKeys = (i) => (A("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(i)));
function JS(i) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => i
  }), Object.keys(On).forEach((t) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get: () => On[t](i),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ye
    });
  }), e;
}
function ey(i) {
  const { ctx: e, propsOptions: [t] } = i;
  t && Object.keys(t).forEach((n) => {
    Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.props[n],
      set: Ye
    });
  });
}
function ty(i) {
  const { ctx: e, setupState: t } = i;
  Object.keys(se(t)).forEach((n) => {
    if (!t.__isScriptSetup) {
      if (ph(n[0])) {
        A(`setup() return property ${JSON.stringify(n)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(e, n, {
        enumerable: !0,
        configurable: !0,
        get: () => t[n],
        set: Ye
      });
    }
  });
}
function iy() {
  const i = /* @__PURE__ */ Object.create(null);
  return (e, t) => {
    i[t] ? A(`${e} property "${t}" is already defined in ${i[t]}.`) : i[t] = e;
  };
}
let ja = !0;
function ny(i) {
  const e = mh(i), t = i.proxy, n = i.ctx;
  ja = !1, e.beforeCreate && $f(
    e.beforeCreate,
    i,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: s,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: h,
    beforeMount: f,
    mounted: u,
    beforeUpdate: d,
    updated: O,
    activated: m,
    deactivated: b,
    beforeDestroy: y,
    beforeUnmount: P,
    destroyed: C,
    unmounted: x,
    render: T,
    renderTracked: R,
    renderTriggered: G,
    errorCaptured: N,
    serverPrefetch: W,
    // public API
    expose: D,
    inheritAttrs: F,
    // assets
    components: J,
    directives: re,
    filters: Oe
  } = e, ae = {}.NODE_ENV !== "production" ? iy() : null;
  if ({}.NODE_ENV !== "production") {
    const [K] = i.propsOptions;
    if (K)
      for (const B in K)
        ae("Props", B);
  }
  if (c && ry(c, n, ae, i.appContext.config.unwrapInjectedRef), o)
    for (const K in o) {
      const B = o[K];
      te(B) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(n, K, {
        value: B.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[K] = B.bind(t), {}.NODE_ENV !== "production" && ae("Methods", K)) : {}.NODE_ENV !== "production" && A(`Method "${K}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    ({}).NODE_ENV !== "production" && !te(r) && A("The data option must be a function. Plain object usage is no longer supported.");
    const K = r.call(t, t);
    if ({}.NODE_ENV !== "production" && eh(K) && A("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Se(K))
      ({}).NODE_ENV !== "production" && A("data() should return an object.");
    else if (i.data = cs(K), {}.NODE_ENV !== "production")
      for (const B in K)
        ae("Data", B), ph(B[0]) || Object.defineProperty(n, B, {
          configurable: !0,
          enumerable: !0,
          get: () => K[B],
          set: Ye
        });
  }
  if (ja = !0, s)
    for (const K in s) {
      const B = s[K], fe = te(B) ? B.bind(t, t) : te(B.get) ? B.get.bind(t, t) : Ye;
      ({}).NODE_ENV !== "production" && fe === Ye && A(`Computed property "${K}" has no getter.`);
      const tt = !te(B) && te(B.set) ? B.set.bind(t) : {}.NODE_ENV !== "production" ? () => {
        A(`Write operation failed: computed property "${K}" is readonly.`);
      } : Ye, it = Yi({
        get: fe,
        set: tt
      });
      Object.defineProperty(n, K, {
        enumerable: !0,
        configurable: !0,
        get: () => it.value,
        set: (nt) => it.value = nt
      }), {}.NODE_ENV !== "production" && ae("Computed", K);
    }
  if (l)
    for (const K in l)
      sp(l[K], n, t, K);
  if (a) {
    const K = te(a) ? a.call(t) : a;
    Reflect.ownKeys(K).forEach((B) => {
      KO(B, K[B]);
    });
  }
  h && $f(
    h,
    i,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function H(K, B) {
    ee(B) ? B.forEach((fe) => K(fe.bind(t))) : B && K(B.bind(t));
  }
  if (H(IS, f), H(lr, u), H(qS, d), H(tp, O), H(YS, m), H(jS, b), H(FS, N), H(GS, R), H(zS, G), H(BS, P), H(dh, x), H(LS, W), ee(D))
    if (D.length) {
      const K = i.exposed || (i.exposed = {});
      D.forEach((B) => {
        Object.defineProperty(K, B, {
          get: () => t[B],
          set: (fe) => t[B] = fe
        });
      });
    } else
      i.exposed || (i.exposed = {});
  T && i.render === Ye && (i.render = T), F != null && (i.inheritAttrs = F), J && (i.components = J), re && (i.directives = re);
}
function ry(i, e, t = Ye, n = !1) {
  ee(i) && (i = Ua(i));
  for (const r in i) {
    const s = i[r];
    let o;
    Se(s) ? "default" in s ? o = Ei(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : o = Ei(s.from || r) : o = Ei(s), Ue(o) ? n ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (l) => o.value = l
    }) : ({}.NODE_ENV !== "production" && A(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), e[r] = o) : e[r] = o, {}.NODE_ENV !== "production" && t("Inject", r);
  }
}
function $f(i, e, t) {
  Wt(ee(i) ? i.map((n) => n.bind(e.proxy)) : i.bind(e.proxy), e, t);
}
function sp(i, e, t, n) {
  const r = n.includes(".") ? JO(t, n) : () => t[n];
  if (Pe(i)) {
    const s = e[i];
    te(s) ? Je(r, s) : {}.NODE_ENV !== "production" && A(`Invalid watch handler specified by key "${i}"`, s);
  } else if (te(i))
    Je(r, i.bind(t));
  else if (Se(i))
    if (ee(i))
      i.forEach((s) => sp(s, e, t, n));
    else {
      const s = te(i.handler) ? i.handler.bind(t) : e[i.handler];
      te(s) ? Je(r, s, i) : {}.NODE_ENV !== "production" && A(`Invalid watch handler specified by key "${i.handler}"`, s);
    }
  else
    ({}).NODE_ENV !== "production" && A(`Invalid watch option: "${n}"`, i);
}
function mh(i) {
  const e = i.type, { mixins: t, extends: n } = e, { mixins: r, optionsCache: s, config: { optionMergeStrategies: o } } = i.appContext, l = s.get(e);
  let a;
  return l ? a = l : !r.length && !t && !n ? a = e : (a = {}, r.length && r.forEach((c) => ko(a, c, o, !0)), ko(a, e, o)), Se(e) && s.set(e, a), a;
}
function ko(i, e, t, n = !1) {
  const { mixins: r, extends: s } = e;
  s && ko(i, s, t, !0), r && r.forEach((o) => ko(i, o, t, !0));
  for (const o in e)
    if (n && o === "expose")
      ({}).NODE_ENV !== "production" && A('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = sy[o] || t && t[o];
      i[o] = l ? l(i[o], e[o]) : e[o];
    }
  return i;
}
const sy = {
  data: Pf,
  props: tn,
  emits: tn,
  // objects
  methods: tn,
  computed: tn,
  // lifecycle
  beforeCreate: st,
  created: st,
  beforeMount: st,
  mounted: st,
  beforeUpdate: st,
  updated: st,
  beforeDestroy: st,
  beforeUnmount: st,
  destroyed: st,
  unmounted: st,
  activated: st,
  deactivated: st,
  errorCaptured: st,
  serverPrefetch: st,
  // assets
  components: tn,
  directives: tn,
  // watch
  watch: ly,
  // provide / inject
  provide: Pf,
  inject: oy
};
function Pf(i, e) {
  return e ? i ? function() {
    return Ze(te(i) ? i.call(this, this) : i, te(e) ? e.call(this, this) : e);
  } : e : i;
}
function oy(i, e) {
  return tn(Ua(i), Ua(e));
}
function Ua(i) {
  if (ee(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++)
      e[i[t]] = i[t];
    return e;
  }
  return i;
}
function st(i, e) {
  return i ? [...new Set([].concat(i, e))] : e;
}
function tn(i, e) {
  return i ? Ze(Ze(/* @__PURE__ */ Object.create(null), i), e) : e;
}
function ly(i, e) {
  if (!i)
    return e;
  if (!e)
    return i;
  const t = Ze(/* @__PURE__ */ Object.create(null), i);
  for (const n in e)
    t[n] = st(i[n], e[n]);
  return t;
}
function ay(i, e, t, n = !1) {
  const r = {}, s = {};
  vo(s, Sl, 1), i.propsDefaults = /* @__PURE__ */ Object.create(null), op(i, e, r, s);
  for (const o in i.propsOptions[0])
    o in r || (r[o] = void 0);
  ({}).NODE_ENV !== "production" && ap(e || {}, r, i), t ? i.props = n ? r : sS(r) : i.type.props ? i.props = r : i.props = s, i.attrs = s;
}
function cy(i) {
  for (; i; ) {
    if (i.type.__hmrId)
      return !0;
    i = i.parent;
  }
}
function hy(i, e, t, n) {
  const { props: r, attrs: s, vnode: { patchFlag: o } } = i, l = se(r), [a] = i.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !({}.NODE_ENV !== "production" && cy(i)) && (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const h = i.vnode.dynamicProps;
      for (let f = 0; f < h.length; f++) {
        let u = h[f];
        if (gl(i.emitsOptions, u))
          continue;
        const d = e[u];
        if (a)
          if (oe(s, u))
            d !== s[u] && (s[u] = d, c = !0);
          else {
            const O = Gn(u);
            r[O] = Ia(
              a,
              l,
              O,
              d,
              i,
              !1
              /* isAbsent */
            );
          }
        else
          d !== s[u] && (s[u] = d, c = !0);
      }
    }
  } else {
    op(i, e, r, s) && (c = !0);
    let h;
    for (const f in l)
      (!e || // for camelCase
      !oe(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Di(f)) === f || !oe(e, h))) && (a ? t && // for camelCase
      (t[f] !== void 0 || // for kebab-case
      t[h] !== void 0) && (r[f] = Ia(
        a,
        l,
        f,
        void 0,
        i,
        !0
        /* isAbsent */
      )) : delete r[f]);
    if (s !== l)
      for (const f in s)
        (!e || !oe(e, f)) && (delete s[f], c = !0);
  }
  c && di(i, "set", "$attrs"), {}.NODE_ENV !== "production" && ap(e || {}, r, i);
}
function op(i, e, t, n) {
  const [r, s] = i.propsOptions;
  let o = !1, l;
  if (e)
    for (let a in e) {
      if (Ks(a))
        continue;
      const c = e[a];
      let h;
      r && oe(r, h = Gn(a)) ? !s || !s.includes(h) ? t[h] = c : (l || (l = {}))[h] = c : gl(i.emitsOptions, a) || (!(a in n) || c !== n[a]) && (n[a] = c, o = !0);
    }
  if (s) {
    const a = se(t), c = l || ge;
    for (let h = 0; h < s.length; h++) {
      const f = s[h];
      t[f] = Ia(r, a, f, c[f], i, !oe(c, f));
    }
  }
  return o;
}
function Ia(i, e, t, n, r, s) {
  const o = i[t];
  if (o != null) {
    const l = oe(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && te(a)) {
        const { propsDefaults: c } = r;
        t in c ? n = c[t] : (Fn(r), n = c[t] = a.call(null, e), pn());
      } else
        n = a;
    }
    o[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? n = !1 : o[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (n === "" || n === Di(t)) && (n = !0));
  }
  return n;
}
function lp(i, e, t = !1) {
  const n = e.propsCache, r = n.get(i);
  if (r)
    return r;
  const s = i.props, o = {}, l = [];
  let a = !1;
  if (!te(i)) {
    const h = (f) => {
      a = !0;
      const [u, d] = lp(f, e, !0);
      Ze(o, u), d && l.push(...d);
    };
    !t && e.mixins.length && e.mixins.forEach(h), i.extends && h(i.extends), i.mixins && i.mixins.forEach(h);
  }
  if (!s && !a)
    return Se(i) && n.set(i, Mn), Mn;
  if (ee(s))
    for (let h = 0; h < s.length; h++) {
      ({}).NODE_ENV !== "production" && !Pe(s[h]) && A("props must be strings when using array syntax.", s[h]);
      const f = Gn(s[h]);
      kf(f) && (o[f] = ge);
    }
  else if (s) {
    ({}).NODE_ENV !== "production" && !Se(s) && A("invalid props options", s);
    for (const h in s) {
      const f = Gn(h);
      if (kf(f)) {
        const u = s[h], d = o[f] = ee(u) || te(u) ? { type: u } : Object.assign({}, u);
        if (d) {
          const O = Tf(Boolean, d.type), m = Tf(String, d.type);
          d[
            0
            /* BooleanFlags.shouldCast */
          ] = O > -1, d[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = m < 0 || O < m, (O > -1 || oe(d, "default")) && l.push(f);
        }
      }
    }
  }
  const c = [o, l];
  return Se(i) && n.set(i, c), c;
}
function kf(i) {
  return i[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && A(`Invalid prop name: "${i}" is a reserved property.`), !1);
}
function qa(i) {
  const e = i && i.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : i === null ? "null" : "";
}
function Cf(i, e) {
  return qa(i) === qa(e);
}
function Tf(i, e) {
  return ee(e) ? e.findIndex((t) => Cf(t, i)) : te(e) && Cf(e, i) ? 0 : -1;
}
function ap(i, e, t) {
  const n = se(e), r = t.propsOptions[0];
  for (const s in r) {
    let o = r[s];
    o != null && fy(s, n[s], o, !oe(i, s) && !oe(i, Di(s)));
  }
}
function fy(i, e, t, n) {
  const { type: r, required: s, validator: o } = t;
  if (s && n) {
    A('Missing required prop: "' + i + '"');
    return;
  }
  if (!(e == null && !t.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const a = ee(r) ? r : [r], c = [];
      for (let h = 0; h < a.length && !l; h++) {
        const { valid: f, expectedType: u } = dy(e, a[h]);
        c.push(u || ""), l = f;
      }
      if (!l) {
        A(Oy(i, e, c));
        return;
      }
    }
    o && !o(e) && A('Invalid prop: custom validator check failed for prop "' + i + '".');
  }
}
const uy = /* @__PURE__ */ Li("String,Number,Boolean,Function,Symbol,BigInt");
function dy(i, e) {
  let t;
  const n = qa(e);
  if (uy(n)) {
    const r = typeof i;
    t = r === n.toLowerCase(), !t && r === "object" && (t = i instanceof e);
  } else
    n === "Object" ? t = Se(i) : n === "Array" ? t = ee(i) : n === "null" ? t = i === null : t = i instanceof e;
  return {
    valid: t,
    expectedType: n
  };
}
function Oy(i, e, t) {
  let n = `Invalid prop: type check failed for prop "${i}". Expected ${t.map(as).join(" | ")}`;
  const r = t[0], s = th(e), o = _f(e, r), l = _f(e, s);
  return t.length === 1 && Xf(r) && !py(r, s) && (n += ` with value ${o}`), n += `, got ${s} `, Xf(s) && (n += `with value ${l}.`), n;
}
function _f(i, e) {
  return e === "String" ? `"${i}"` : e === "Number" ? `${Number(i)}` : `${i}`;
}
function Xf(i) {
  return ["string", "number", "boolean"].some((t) => i.toLowerCase() === t);
}
function py(...i) {
  return i.some((e) => e.toLowerCase() === "boolean");
}
const cp = (i) => i[0] === "_" || i === "$stable", gh = (i) => ee(i) ? i.map(Zt) : [Zt(i)], my = (i, e, t) => {
  if (e._n)
    return e;
  const n = An((...r) => ({}.NODE_ENV !== "production" && je && A(`Slot "${i}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), gh(e(...r))), t);
  return n._c = !1, n;
}, hp = (i, e, t) => {
  const n = i._ctx;
  for (const r in i) {
    if (cp(r))
      continue;
    const s = i[r];
    if (te(s))
      e[r] = my(r, s, n);
    else if (s != null) {
      ({}).NODE_ENV !== "production" && A(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const o = gh(s);
      e[r] = () => o;
    }
  }
}, fp = (i, e) => {
  ({}).NODE_ENV !== "production" && !uh(i.vnode) && A("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const t = gh(e);
  i.slots.default = () => t;
}, gy = (i, e) => {
  if (i.vnode.shapeFlag & 32) {
    const t = e._;
    t ? (i.slots = se(e), vo(e, "_", t)) : hp(e, i.slots = {});
  } else
    i.slots = {}, e && fp(i, e);
  vo(i.slots, Sl, 1);
}, by = (i, e, t) => {
  const { vnode: n, slots: r } = i;
  let s = !0, o = ge;
  if (n.shapeFlag & 32) {
    const l = e._;
    l ? {}.NODE_ENV !== "production" && dn ? Ze(r, e) : t && l === 1 ? s = !1 : (Ze(r, e), !t && l === 1 && delete r._) : (s = !e.$stable, hp(e, r)), o = e;
  } else
    e && (fp(i, e), o = { default: 1 });
  if (s)
    for (const l in r)
      !cp(l) && !(l in o) && delete r[l];
};
function up() {
  return {
    app: null,
    config: {
      isNativeTag: gO,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Sy = 0;
function yy(i, e) {
  return function(n, r = null) {
    te(n) || (n = Object.assign({}, n)), r != null && !Se(r) && ({}.NODE_ENV !== "production" && A("root props passed to app.mount() must be an object."), r = null);
    const s = up(), o = /* @__PURE__ */ new Set();
    let l = !1;
    const a = s.app = {
      _uid: Sy++,
      _component: n,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Zf,
      get config() {
        return s.config;
      },
      set config(c) {
        ({}).NODE_ENV !== "production" && A("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...h) {
        return o.has(c) ? {}.NODE_ENV !== "production" && A("Plugin has already been applied to target app.") : c && te(c.install) ? (o.add(c), c.install(a, ...h)) : te(c) ? (o.add(c), c(a, ...h)) : {}.NODE_ENV !== "production" && A('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(c) {
        return s.mixins.includes(c) ? {}.NODE_ENV !== "production" && A("Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")) : s.mixins.push(c), a;
      },
      component(c, h) {
        return {}.NODE_ENV !== "production" && La(c, s.config), h ? ({}.NODE_ENV !== "production" && s.components[c] && A(`Component "${c}" has already been registered in target app.`), s.components[c] = h, a) : s.components[c];
      },
      directive(c, h) {
        return {}.NODE_ENV !== "production" && ip(c), h ? ({}.NODE_ENV !== "production" && s.directives[c] && A(`Directive "${c}" has already been registered in target app.`), s.directives[c] = h, a) : s.directives[c];
      },
      mount(c, h, f) {
        if (l)
          ({}).NODE_ENV !== "production" && A("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && c.__vue_app__ && A("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const u = ce(n, r);
          return u.appContext = s, {}.NODE_ENV !== "production" && (s.reload = () => {
            i(Mi(u), c, f);
          }), h && e ? e(u, c) : i(u, c, f), l = !0, a._container = c, c.__vue_app__ = a, {}.NODE_ENV !== "production" && (a._instance = u.component, xS(a, Zf)), yl(u.component) || u.component.proxy;
        }
      },
      unmount() {
        l ? (i(null, a._container), {}.NODE_ENV !== "production" && (a._instance = null, wS(a)), delete a._container.__vue_app__) : {}.NODE_ENV !== "production" && A("Cannot unmount an app that is not mounted.");
      },
      provide(c, h) {
        return {}.NODE_ENV !== "production" && c in s.provides && A(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`), s.provides[c] = h, a;
      }
    };
    return a;
  };
}
function Ba(i, e, t, n, r = !1) {
  if (ee(i)) {
    i.forEach((u, d) => Ba(u, e && (ee(e) ? e[d] : e), t, n, r));
    return;
  }
  if (Ar(n) && !r)
    return;
  const s = n.shapeFlag & 4 ? yl(n.component) || n.component.proxy : n.el, o = r ? null : s, { i: l, r: a } = i;
  if ({}.NODE_ENV !== "production" && !l) {
    A("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = e && e.r, h = l.refs === ge ? l.refs = {} : l.refs, f = l.setupState;
  if (c != null && c !== a && (Pe(c) ? (h[c] = null, oe(f, c) && (f[c] = null)) : Ue(c) && (c.value = null)), te(a))
    hi(a, l, 12, [o, h]);
  else {
    const u = Pe(a), d = Ue(a);
    if (u || d) {
      const O = () => {
        if (i.f) {
          const m = u ? oe(f, a) ? f[a] : h[a] : a.value;
          r ? ee(m) && Kc(m, s) : ee(m) ? m.includes(s) || m.push(s) : u ? (h[a] = [s], oe(f, a) && (f[a] = h[a])) : (a.value = [s], i.k && (h[i.k] = a.value));
        } else
          u ? (h[a] = o, oe(f, a) && (f[a] = o)) : d ? (a.value = o, i.k && (h[i.k] = o)) : {}.NODE_ENV !== "production" && A("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (O.id = -1, ft(O, t)) : O();
    } else
      ({}).NODE_ENV !== "production" && A("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let dr, $i;
function li(i, e) {
  i.appContext.config.performance && Co() && $i.mark(`vue-${e}-${i.uid}`), {}.NODE_ENV !== "production" && CS(i, e, Co() ? $i.now() : Date.now());
}
function ai(i, e) {
  if (i.appContext.config.performance && Co()) {
    const t = `vue-${e}-${i.uid}`, n = t + ":end";
    $i.mark(n), $i.measure(`<${Ql(i, i.type)}> ${e}`, t, n), $i.clearMarks(t), $i.clearMarks(n);
  }
  ({}).NODE_ENV !== "production" && TS(i, e, Co() ? $i.now() : Date.now());
}
function Co() {
  return dr !== void 0 || (typeof window < "u" && window.performance ? (dr = !0, $i = window.performance) : dr = !1), dr;
}
function Qy() {
  const i = [];
  if ({}.NODE_ENV !== "production" && i.length) {
    const e = i.length > 1;
    console.warn(`Feature flag${e ? "s" : ""} ${i.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ft = WS;
function vy(i) {
  return xy(i);
}
function xy(i, e) {
  Qy();
  const t = SO();
  t.__VUE__ = !0, {}.NODE_ENV !== "production" && BO(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const { insert: n, remove: r, patchProp: s, createElement: o, createText: l, createComment: a, setText: c, setElementText: h, parentNode: f, nextSibling: u, setScopeId: d = Ye, insertStaticContent: O } = i, m = (p, g, Q, $ = null, w = null, X = null, Z = !1, _ = null, V = {}.NODE_ENV !== "production" && dn ? !1 : !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !Or(p, g) && ($ = vs(p), Ae(p, w, X, !0), p = null), g.patchFlag === -2 && (V = !1, g.dynamicChildren = null);
    const { type: k, ref: q, shapeFlag: M } = g;
    switch (k) {
      case us:
        b(p, g, Q, $);
        break;
      case Ot:
        y(p, g, Q, $);
        break;
      case io:
        p == null ? P(g, Q, $, Z) : {}.NODE_ENV !== "production" && C(p, g, Q, Z);
        break;
      case wt:
        re(p, g, Q, $, w, X, Z, _, V);
        break;
      default:
        M & 1 ? R(p, g, Q, $, w, X, Z, _, V) : M & 6 ? Oe(p, g, Q, $, w, X, Z, _, V) : M & 64 || M & 128 ? k.process(p, g, Q, $, w, X, Z, _, V, Cn) : {}.NODE_ENV !== "production" && A("Invalid VNode type:", k, `(${typeof k})`);
    }
    q != null && w && Ba(q, p && p.ref, X, g || p, !g);
  }, b = (p, g, Q, $) => {
    if (p == null)
      n(g.el = l(g.children), Q, $);
    else {
      const w = g.el = p.el;
      g.children !== p.children && c(w, g.children);
    }
  }, y = (p, g, Q, $) => {
    p == null ? n(g.el = a(g.children || ""), Q, $) : g.el = p.el;
  }, P = (p, g, Q, $) => {
    [p.el, p.anchor] = O(p.children, g, Q, $, p.el, p.anchor);
  }, C = (p, g, Q, $) => {
    if (g.children !== p.children) {
      const w = u(p.anchor);
      T(p), [g.el, g.anchor] = O(g.children, Q, w, $);
    } else
      g.el = p.el, g.anchor = p.anchor;
  }, x = ({ el: p, anchor: g }, Q, $) => {
    let w;
    for (; p && p !== g; )
      w = u(p), n(p, Q, $), p = w;
    n(g, Q, $);
  }, T = ({ el: p, anchor: g }) => {
    let Q;
    for (; p && p !== g; )
      Q = u(p), r(p), p = Q;
    r(g);
  }, R = (p, g, Q, $, w, X, Z, _, V) => {
    Z = Z || g.type === "svg", p == null ? G(g, Q, $, w, X, Z, _, V) : D(p, g, w, X, Z, _, V);
  }, G = (p, g, Q, $, w, X, Z, _) => {
    let V, k;
    const { type: q, props: M, shapeFlag: z, transition: ie, dirs: he } = p;
    if (V = p.el = o(p.type, X, M && M.is, M), z & 8 ? h(V, p.children) : z & 16 && W(p.children, V, null, $, w, X && q !== "foreignObject", Z, _), he && Fi(p, null, $, "created"), M) {
      for (const me in M)
        me !== "value" && !Ks(me) && s(V, me, null, M[me], X, p.children, $, w, oi);
      "value" in M && s(V, "value", null, M.value), (k = M.onVnodeBeforeMount) && jt(k, $, p);
    }
    N(V, p, p.scopeId, Z, $), {}.NODE_ENV !== "production" && (Object.defineProperty(V, "__vnode", {
      value: p,
      enumerable: !1
    }), Object.defineProperty(V, "__vueParentComponent", {
      value: $,
      enumerable: !1
    })), he && Fi(p, null, $, "beforeMount");
    const be = (!w || w && !w.pendingBranch) && ie && !ie.persisted;
    be && ie.beforeEnter(V), n(V, g, Q), ((k = M && M.onVnodeMounted) || be || he) && ft(() => {
      k && jt(k, $, p), be && ie.enter(V), he && Fi(p, null, $, "mounted");
    }, w);
  }, N = (p, g, Q, $, w) => {
    if (Q && d(p, Q), $)
      for (let X = 0; X < $.length; X++)
        d(p, $[X]);
    if (w) {
      let X = w.subTree;
      if ({}.NODE_ENV !== "production" && X.patchFlag > 0 && X.patchFlag & 2048 && (X = HO(X.children) || X), g === X) {
        const Z = w.vnode;
        N(p, Z, Z.scopeId, Z.slotScopeIds, w.parent);
      }
    }
  }, W = (p, g, Q, $, w, X, Z, _, V = 0) => {
    for (let k = V; k < p.length; k++) {
      const q = p[k] = _ ? vi(p[k]) : Zt(p[k]);
      m(null, q, g, Q, $, w, X, Z, _);
    }
  }, D = (p, g, Q, $, w, X, Z) => {
    const _ = g.el = p.el;
    let { patchFlag: V, dynamicChildren: k, dirs: q } = g;
    V |= p.patchFlag & 16;
    const M = p.props || ge, z = g.props || ge;
    let ie;
    Q && Hi(Q, !1), (ie = z.onVnodeBeforeUpdate) && jt(ie, Q, g, p), q && Fi(g, p, Q, "beforeUpdate"), Q && Hi(Q, !0), {}.NODE_ENV !== "production" && dn && (V = 0, Z = !1, k = null);
    const he = w && g.type !== "foreignObject";
    if (k ? (F(p.dynamicChildren, k, _, Q, $, he, X), {}.NODE_ENV !== "production" && Q && Q.type.__hmrId && to(p, g)) : Z || fe(p, g, _, null, Q, $, he, X, !1), V > 0) {
      if (V & 16)
        J(_, g, M, z, Q, $, w);
      else if (V & 2 && M.class !== z.class && s(_, "class", null, z.class, w), V & 4 && s(_, "style", M.style, z.style, w), V & 8) {
        const be = g.dynamicProps;
        for (let me = 0; me < be.length; me++) {
          const Ee = be[me], At = M[Ee], Tn = z[Ee];
          (Tn !== At || Ee === "value") && s(_, Ee, At, Tn, w, p.children, Q, $, oi);
        }
      }
      V & 1 && p.children !== g.children && h(_, g.children);
    } else
      !Z && k == null && J(_, g, M, z, Q, $, w);
    ((ie = z.onVnodeUpdated) || q) && ft(() => {
      ie && jt(ie, Q, g, p), q && Fi(g, p, Q, "updated");
    }, $);
  }, F = (p, g, Q, $, w, X, Z) => {
    for (let _ = 0; _ < g.length; _++) {
      const V = p[_], k = g[_], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        V.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (V.type === wt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Or(V, k) || // - In the case of a component, it could contain anything.
        V.shapeFlag & 70) ? f(V.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Q
        )
      );
      m(V, k, q, null, $, w, X, Z, !0);
    }
  }, J = (p, g, Q, $, w, X, Z) => {
    if (Q !== $) {
      if (Q !== ge)
        for (const _ in Q)
          !Ks(_) && !(_ in $) && s(p, _, Q[_], null, Z, g.children, w, X, oi);
      for (const _ in $) {
        if (Ks(_))
          continue;
        const V = $[_], k = Q[_];
        V !== k && _ !== "value" && s(p, _, k, V, Z, g.children, w, X, oi);
      }
      "value" in $ && s(p, "value", Q.value, $.value);
    }
  }, re = (p, g, Q, $, w, X, Z, _, V) => {
    const k = g.el = p ? p.el : l(""), q = g.anchor = p ? p.anchor : l("");
    let { patchFlag: M, dynamicChildren: z, slotScopeIds: ie } = g;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (dn || M & 2048) && (M = 0, V = !1, z = null), ie && (_ = _ ? _.concat(ie) : ie), p == null ? (n(k, Q, $), n(q, Q, $), W(g.children, Q, q, w, X, Z, _, V)) : M > 0 && M & 64 && z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (F(p.dynamicChildren, z, Q, w, X, Z, _), {}.NODE_ENV !== "production" && w && w.type.__hmrId ? to(p, g) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (g.key != null || w && g === w.subTree) && to(
        p,
        g,
        !0
        /* shallow */
      )
    )) : fe(p, g, Q, q, w, X, Z, _, V);
  }, Oe = (p, g, Q, $, w, X, Z, _, V) => {
    g.slotScopeIds = _, p == null ? g.shapeFlag & 512 ? w.ctx.activate(g, Q, $, Z, V) : ae(g, Q, $, w, X, Z, V) : H(p, g, V);
  }, ae = (p, g, Q, $, w, X, Z) => {
    const _ = p.component = Vy(p, $, w);
    if ({}.NODE_ENV !== "production" && _.type.__hmrId && SS(_), {}.NODE_ENV !== "production" && (Js(p), li(_, "mount")), uh(p) && (_.ctx.renderer = Cn), {}.NODE_ENV !== "production" && li(_, "init"), Zy(_), {}.NODE_ENV !== "production" && ai(_, "init"), _.asyncDep) {
      if (w && w.registerDep(_, K), !p.el) {
        const V = _.subTree = ce(Ot);
        y(null, V, g, Q);
      }
      return;
    }
    K(_, p, g, Q, w, X, Z), {}.NODE_ENV !== "production" && (eo(), ai(_, "mount"));
  }, H = (p, g, Q) => {
    const $ = g.component = p.component;
    if (ZS(p, g, Q))
      if ($.asyncDep && !$.asyncResolved) {
        ({}).NODE_ENV !== "production" && Js(g), B($, g, Q), {}.NODE_ENV !== "production" && eo();
        return;
      } else
        $.next = g, gS($.update), $.update();
    else
      g.el = p.el, $.vnode = g;
  }, K = (p, g, Q, $, w, X, Z) => {
    const _ = () => {
      if (p.isMounted) {
        let { next: q, bu: M, u: z, parent: ie, vnode: he } = p, be = q, me;
        ({}).NODE_ENV !== "production" && Js(q || p.vnode), Hi(p, !1), q ? (q.el = he.el, B(p, q, Z)) : q = he, M && ur(M), (me = q.props && q.props.onVnodeBeforeUpdate) && jt(me, ie, q, he), Hi(p, !0), {}.NODE_ENV !== "production" && li(p, "render");
        const Ee = Ll(p);
        ({}).NODE_ENV !== "production" && ai(p, "render");
        const At = p.subTree;
        p.subTree = Ee, {}.NODE_ENV !== "production" && li(p, "patch"), m(
          At,
          Ee,
          // parent may have changed if it's in a teleport
          f(At.el),
          // anchor may have changed if it's in a fragment
          vs(At),
          p,
          w,
          X
        ), {}.NODE_ENV !== "production" && ai(p, "patch"), q.el = Ee.el, be === null && RS(p, Ee.el), z && ft(z, w), (me = q.props && q.props.onVnodeUpdated) && ft(() => jt(me, ie, q, he), w), {}.NODE_ENV !== "production" && LO(p), {}.NODE_ENV !== "production" && eo();
      } else {
        let q;
        const { el: M, props: z } = g, { bm: ie, m: he, parent: be } = p, me = Ar(g);
        if (Hi(p, !1), ie && ur(ie), !me && (q = z && z.onVnodeBeforeMount) && jt(q, be, g), Hi(p, !0), M && ql) {
          const Ee = () => {
            ({}).NODE_ENV !== "production" && li(p, "render"), p.subTree = Ll(p), {}.NODE_ENV !== "production" && ai(p, "render"), {}.NODE_ENV !== "production" && li(p, "hydrate"), ql(M, p.subTree, p, w, null), {}.NODE_ENV !== "production" && ai(p, "hydrate");
          };
          me ? g.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && Ee()
          ) : Ee();
        } else {
          ({}).NODE_ENV !== "production" && li(p, "render");
          const Ee = p.subTree = Ll(p);
          ({}).NODE_ENV !== "production" && ai(p, "render"), {}.NODE_ENV !== "production" && li(p, "patch"), m(null, Ee, Q, $, p, w, X), {}.NODE_ENV !== "production" && ai(p, "patch"), g.el = Ee.el;
        }
        if (he && ft(he, w), !me && (q = z && z.onVnodeMounted)) {
          const Ee = g;
          ft(() => jt(q, be, Ee), w);
        }
        (g.shapeFlag & 256 || be && Ar(be.vnode) && be.vnode.shapeFlag & 256) && p.a && ft(p.a, w), p.isMounted = !0, {}.NODE_ENV !== "production" && $S(p), g = Q = $ = null;
      }
    }, V = p.effect = new nh(
      _,
      () => ml(k),
      p.scope
      // track it in component's effect scope
    ), k = p.update = () => V.run();
    k.id = p.uid, Hi(p, !0), {}.NODE_ENV !== "production" && (V.onTrack = p.rtc ? (q) => ur(p.rtc, q) : void 0, V.onTrigger = p.rtg ? (q) => ur(p.rtg, q) : void 0, k.ownerInstance = p), k();
  }, B = (p, g, Q) => {
    g.component = p;
    const $ = p.vnode.props;
    p.vnode = g, p.next = null, hy(p, g.props, $, Q), by(p, g.children, Q), vn(), Qf(), xn();
  }, fe = (p, g, Q, $, w, X, Z, _, V = !1) => {
    const k = p && p.children, q = p ? p.shapeFlag : 0, M = g.children, { patchFlag: z, shapeFlag: ie } = g;
    if (z > 0) {
      if (z & 128) {
        it(k, M, Q, $, w, X, Z, _, V);
        return;
      } else if (z & 256) {
        tt(k, M, Q, $, w, X, Z, _, V);
        return;
      }
    }
    ie & 8 ? (q & 16 && oi(k, w, X), M !== k && h(Q, M)) : q & 16 ? ie & 16 ? it(k, M, Q, $, w, X, Z, _, V) : oi(k, w, X, !0) : (q & 8 && h(Q, ""), ie & 16 && W(M, Q, $, w, X, Z, _, V));
  }, tt = (p, g, Q, $, w, X, Z, _, V) => {
    p = p || Mn, g = g || Mn;
    const k = p.length, q = g.length, M = Math.min(k, q);
    let z;
    for (z = 0; z < M; z++) {
      const ie = g[z] = V ? vi(g[z]) : Zt(g[z]);
      m(p[z], ie, Q, null, w, X, Z, _, V);
    }
    k > q ? oi(p, w, X, !0, !1, M) : W(g, Q, $, w, X, Z, _, V, M);
  }, it = (p, g, Q, $, w, X, Z, _, V) => {
    let k = 0;
    const q = g.length;
    let M = p.length - 1, z = q - 1;
    for (; k <= M && k <= z; ) {
      const ie = p[k], he = g[k] = V ? vi(g[k]) : Zt(g[k]);
      if (Or(ie, he))
        m(ie, he, Q, null, w, X, Z, _, V);
      else
        break;
      k++;
    }
    for (; k <= M && k <= z; ) {
      const ie = p[M], he = g[z] = V ? vi(g[z]) : Zt(g[z]);
      if (Or(ie, he))
        m(ie, he, Q, null, w, X, Z, _, V);
      else
        break;
      M--, z--;
    }
    if (k > M) {
      if (k <= z) {
        const ie = z + 1, he = ie < q ? g[ie].el : $;
        for (; k <= z; )
          m(null, g[k] = V ? vi(g[k]) : Zt(g[k]), Q, he, w, X, Z, _, V), k++;
      }
    } else if (k > z)
      for (; k <= M; )
        Ae(p[k], w, X, !0), k++;
    else {
      const ie = k, he = k, be = /* @__PURE__ */ new Map();
      for (k = he; k <= z; k++) {
        const rt = g[k] = V ? vi(g[k]) : Zt(g[k]);
        rt.key != null && ({}.NODE_ENV !== "production" && be.has(rt.key) && A("Duplicate keys found during update:", JSON.stringify(rt.key), "Make sure keys are unique."), be.set(rt.key, k));
      }
      let me, Ee = 0;
      const At = z - he + 1;
      let Tn = !1, hf = 0;
      const fr = new Array(At);
      for (k = 0; k < At; k++)
        fr[k] = 0;
      for (k = ie; k <= M; k++) {
        const rt = p[k];
        if (Ee >= At) {
          Ae(rt, w, X, !0);
          continue;
        }
        let Yt;
        if (rt.key != null)
          Yt = be.get(rt.key);
        else
          for (me = he; me <= z; me++)
            if (fr[me - he] === 0 && Or(rt, g[me])) {
              Yt = me;
              break;
            }
        Yt === void 0 ? Ae(rt, w, X, !0) : (fr[Yt - he] = k + 1, Yt >= hf ? hf = Yt : Tn = !0, m(rt, g[Yt], Q, null, w, X, Z, _, V), Ee++);
      }
      const ff = Tn ? wy(fr) : Mn;
      for (me = ff.length - 1, k = At - 1; k >= 0; k--) {
        const rt = he + k, Yt = g[rt], uf = rt + 1 < q ? g[rt + 1].el : $;
        fr[k] === 0 ? m(null, Yt, Q, uf, w, X, Z, _, V) : Tn && (me < 0 || k !== ff[me] ? nt(
          Yt,
          Q,
          uf,
          2
          /* MoveType.REORDER */
        ) : me--);
      }
    }
  }, nt = (p, g, Q, $, w = null) => {
    const { el: X, type: Z, transition: _, children: V, shapeFlag: k } = p;
    if (k & 6) {
      nt(p.component.subTree, g, Q, $);
      return;
    }
    if (k & 128) {
      p.suspense.move(g, Q, $);
      return;
    }
    if (k & 64) {
      Z.move(p, g, Q, Cn);
      return;
    }
    if (Z === wt) {
      n(X, g, Q);
      for (let M = 0; M < V.length; M++)
        nt(V[M], g, Q, $);
      n(p.anchor, g, Q);
      return;
    }
    if (Z === io) {
      x(p, g, Q);
      return;
    }
    if ($ !== 2 && k & 1 && _)
      if ($ === 0)
        _.beforeEnter(X), n(X, g, Q), ft(() => _.enter(X), w);
      else {
        const { leave: M, delayLeave: z, afterLeave: ie } = _, he = () => n(X, g, Q), be = () => {
          M(X, () => {
            he(), ie && ie();
          });
        };
        z ? z(X, he, be) : be();
      }
    else
      n(X, g, Q);
  }, Ae = (p, g, Q, $ = !1, w = !1) => {
    const { type: X, props: Z, ref: _, children: V, dynamicChildren: k, shapeFlag: q, patchFlag: M, dirs: z } = p;
    if (_ != null && Ba(_, null, Q, p, !0), q & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const ie = q & 1 && z, he = !Ar(p);
    let be;
    if (he && (be = Z && Z.onVnodeBeforeUnmount) && jt(be, g, p), q & 6)
      cb(p.component, Q, $);
    else {
      if (q & 128) {
        p.suspense.unmount(Q, $);
        return;
      }
      ie && Fi(p, null, g, "beforeUnmount"), q & 64 ? p.type.remove(p, g, Q, w, Cn, $) : k && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== wt || M > 0 && M & 64) ? oi(k, g, Q, !1, !0) : (X === wt && M & 384 || !w && q & 16) && oi(V, g, Q), $ && kn(p);
    }
    (he && (be = Z && Z.onVnodeUnmounted) || ie) && ft(() => {
      be && jt(be, g, p), ie && Fi(p, null, g, "unmounted");
    }, Q);
  }, kn = (p) => {
    const { type: g, el: Q, anchor: $, transition: w } = p;
    if (g === wt) {
      ({}).NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && w && !w.persisted ? p.children.forEach((Z) => {
        Z.type === Ot ? r(Z.el) : kn(Z);
      }) : ab(Q, $);
      return;
    }
    if (g === io) {
      T(p);
      return;
    }
    const X = () => {
      r(Q), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (p.shapeFlag & 1 && w && !w.persisted) {
      const { leave: Z, delayLeave: _ } = w, V = () => Z(Q, X);
      _ ? _(p.el, X, V) : V();
    } else
      X();
  }, ab = (p, g) => {
    let Q;
    for (; p !== g; )
      Q = u(p), r(p), p = Q;
    r(g);
  }, cb = (p, g, Q) => {
    ({}).NODE_ENV !== "production" && p.type.__hmrId && yS(p);
    const { bum: $, scope: w, update: X, subTree: Z, um: _ } = p;
    $ && ur($), w.stop(), X && (X.active = !1, Ae(Z, p, g, Q)), _ && ft(_, g), ft(() => {
      p.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve()), {}.NODE_ENV !== "production" && kS(p);
  }, oi = (p, g, Q, $ = !1, w = !1, X = 0) => {
    for (let Z = X; Z < p.length; Z++)
      Ae(p[Z], g, Q, $, w);
  }, vs = (p) => p.shapeFlag & 6 ? vs(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : u(p.anchor || p.el), cf = (p, g, Q) => {
    p == null ? g._vnode && Ae(g._vnode, null, null, !0) : m(g._vnode || null, p, g, null, null, null, Q), Qf(), UO(), g._vnode = p;
  }, Cn = {
    p: m,
    um: Ae,
    m: nt,
    r: kn,
    mt: ae,
    mc: W,
    pc: fe,
    pbc: F,
    n: vs,
    o: i
  };
  let Il, ql;
  return e && ([Il, ql] = e(Cn)), {
    render: cf,
    hydrate: Il,
    createApp: yy(cf, Il)
  };
}
function Hi({ effect: i, update: e }, t) {
  i.allowRecurse = e.allowRecurse = t;
}
function to(i, e, t = !1) {
  const n = i.children, r = e.children;
  if (ee(n) && ee(r))
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = vi(r[s]), l.el = o.el), t || to(o, l)), l.type === us && (l.el = o.el), {}.NODE_ENV !== "production" && l.type === Ot && !l.el && (l.el = o.el);
    }
}
function wy(i) {
  const e = i.slice(), t = [0];
  let n, r, s, o, l;
  const a = i.length;
  for (n = 0; n < a; n++) {
    const c = i[n];
    if (c !== 0) {
      if (r = t[t.length - 1], i[r] < c) {
        e[n] = r, t.push(n);
        continue;
      }
      for (s = 0, o = t.length - 1; s < o; )
        l = s + o >> 1, i[t[l]] < c ? s = l + 1 : o = l;
      c < i[t[s]] && (s > 0 && (e[n] = t[s - 1]), t[s] = n);
    }
  }
  for (s = t.length, o = t[s - 1]; s-- > 0; )
    t[s] = o, o = e[o];
  return t;
}
const $y = (i) => i.__isTeleport, wt = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), us = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), Ot = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), io = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Vr = [];
let Rt = null;
function _t(i = !1) {
  Vr.push(Rt = i ? null : []);
}
function Py() {
  Vr.pop(), Rt = Vr[Vr.length - 1] || null;
}
let Ur = 1;
function Af(i) {
  Ur += i;
}
function dp(i) {
  return i.dynamicChildren = Ur > 0 ? Rt || Mn : null, Py(), Ur > 0 && Rt && Rt.push(i), i;
}
function mi(i, e, t, n, r, s) {
  return dp(ar(
    i,
    e,
    t,
    n,
    r,
    s,
    !0
    /* isBlock */
  ));
}
function bh(i, e, t, n, r) {
  return dp(ce(
    i,
    e,
    t,
    n,
    r,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function bn(i) {
  return i ? i.__v_isVNode === !0 : !1;
}
function Or(i, e) {
  return {}.NODE_ENV !== "production" && e.shapeFlag & 6 && Xn.has(e.type) ? (i.shapeFlag &= -257, e.shapeFlag &= -513, !1) : i.type === e.type && i.key === e.key;
}
const ky = (...i) => pp(...i), Sl = "__vInternal", Op = ({ key: i }) => i ?? null, no = ({ ref: i, ref_key: e, ref_for: t }) => i != null ? Pe(i) || Ue(i) || te(i) ? { i: Ie, r: i, k: e, f: !!t } : i : null;
function ar(i, e = null, t = null, n = 0, r = null, s = i === wt ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i,
    props: e,
    key: e && Op(e),
    ref: e && no(e),
    scopeId: FO,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ie
  };
  return l ? (Sh(a, t), s & 128 && i.normalize(a)) : t && (a.shapeFlag |= Pe(t) ? 8 : 16), {}.NODE_ENV !== "production" && a.key !== a.key && A("VNode created with invalid key (NaN). VNode type:", a.type), Ur > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Rt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Rt.push(a), a;
}
const ce = {}.NODE_ENV !== "production" ? ky : pp;
function pp(i, e = null, t = null, n = 0, r = null, s = !1) {
  if ((!i || i === KS) && ({}.NODE_ENV !== "production" && !i && A(`Invalid vnode type when creating vnode: ${i}.`), i = Ot), bn(i)) {
    const l = Mi(
      i,
      e,
      !0
      /* mergeRef: true */
    );
    return t && Sh(l, t), Ur > 0 && !s && Rt && (l.shapeFlag & 6 ? Rt[Rt.indexOf(i)] = l : Rt.push(l)), l.patchFlag |= -2, l;
  }
  if (vp(i) && (i = i.__vccOpts), e) {
    e = Cy(e);
    let { class: l, style: a } = e;
    l && !Pe(l) && (e.class = os(l)), Se(a) && (Da(a) && !ee(a) && (a = Ze({}, a)), e.style = al(a));
  }
  const o = Pe(i) ? 1 : DS(i) ? 128 : $y(i) ? 64 : Se(i) ? 4 : te(i) ? 2 : 0;
  return {}.NODE_ENV !== "production" && o & 4 && Da(i) && (i = se(i), A("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, i)), ar(i, e, t, n, r, o, s, !0);
}
function Cy(i) {
  return i ? Da(i) || Sl in i ? Ze({}, i) : i : null;
}
function Mi(i, e, t = !1) {
  const { props: n, ref: r, patchFlag: s, children: o } = i, l = e ? gp(n || {}, e) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i.type,
    props: l,
    key: l && Op(l),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && r ? ee(r) ? r.concat(no(e)) : [r, no(e)] : no(e)
    ) : r,
    scopeId: i.scopeId,
    slotScopeIds: i.slotScopeIds,
    children: {}.NODE_ENV !== "production" && s === -1 && ee(o) ? o.map(mp) : o,
    target: i.target,
    targetAnchor: i.targetAnchor,
    staticCount: i.staticCount,
    shapeFlag: i.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && i.type !== wt ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: i.dynamicProps,
    dynamicChildren: i.dynamicChildren,
    appContext: i.appContext,
    dirs: i.dirs,
    transition: i.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: i.component,
    suspense: i.suspense,
    ssContent: i.ssContent && Mi(i.ssContent),
    ssFallback: i.ssFallback && Mi(i.ssFallback),
    el: i.el,
    anchor: i.anchor,
    ctx: i.ctx
  };
}
function mp(i) {
  const e = Mi(i);
  return ee(i.children) && (e.children = i.children.map(mp)), e;
}
function Ty(i = " ", e = 0) {
  return ce(us, null, i, e);
}
function _y(i = "", e = !1) {
  return e ? (_t(), bh(Ot, null, i)) : ce(Ot, null, i);
}
function Zt(i) {
  return i == null || typeof i == "boolean" ? ce(Ot) : ee(i) ? ce(
    wt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    i.slice()
  ) : typeof i == "object" ? vi(i) : ce(us, null, String(i));
}
function vi(i) {
  return i.el === null && i.patchFlag !== -1 || i.memo ? i : Mi(i);
}
function Sh(i, e) {
  let t = 0;
  const { shapeFlag: n } = i;
  if (e == null)
    e = null;
  else if (ee(e))
    t = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Sh(i, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = e._;
      !r && !(Sl in e) ? e._ctx = Ie : r === 3 && Ie && (Ie.slots._ === 1 ? e._ = 1 : (e._ = 2, i.patchFlag |= 1024));
    }
  else
    te(e) ? (e = { default: e, _ctx: Ie }, t = 32) : (e = String(e), n & 64 ? (t = 16, e = [Ty(e)]) : t = 8);
  i.children = e, i.shapeFlag |= t;
}
function gp(...i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = i[t];
    for (const r in n)
      if (r === "class")
        e.class !== n.class && (e.class = os([e.class, n.class]));
      else if (r === "style")
        e.style = al([e.style, n.style]);
      else if (ls(r)) {
        const s = e[r], o = n[r];
        o && s !== o && !(ee(s) && s.includes(o)) && (e[r] = s ? [].concat(s, o) : o);
      } else
        r !== "" && (e[r] = n[r]);
  }
  return e;
}
function jt(i, e, t, n = null) {
  Wt(i, e, 7, [
    t,
    n
  ]);
}
const Xy = up();
let Ay = 0;
function Vy(i, e, t) {
  const n = i.type, r = (e ? e.appContext : i.appContext) || Xy, s = {
    uid: Ay++,
    vnode: i,
    type: n,
    parent: e,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Tb(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: lp(n, r),
    emitsOptions: GO(n, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: ge,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ge,
    data: ge,
    props: ge,
    attrs: ge,
    slots: ge,
    refs: ge,
    setupState: ge,
    setupContext: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return {}.NODE_ENV !== "production" ? s.ctx = JS(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = XS.bind(null, s), i.ce && i.ce(s), s;
}
let je = null;
const wn = () => je || Ie, Fn = (i) => {
  je = i, i.scope.on();
}, pn = () => {
  je && je.scope.off(), je = null;
}, Ey = /* @__PURE__ */ Li("slot,component");
function La(i, e) {
  const t = e.isNativeTag || gO;
  (Ey(i) || t(i)) && A("Do not use built-in or reserved HTML elements as component id: " + i);
}
function bp(i) {
  return i.vnode.shapeFlag & 4;
}
let Ir = !1;
function Zy(i, e = !1) {
  Ir = e;
  const { props: t, children: n } = i.vnode, r = bp(i);
  ay(i, t, r, e), gy(i, n);
  const s = r ? Ry(i, e) : void 0;
  return Ir = !1, s;
}
function Ry(i, e) {
  var t;
  const n = i.type;
  if ({}.NODE_ENV !== "production") {
    if (n.name && La(n.name, i.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let o = 0; o < s.length; o++)
        La(s[o], i.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let o = 0; o < s.length; o++)
        ip(s[o]);
    }
    n.compilerOptions && Dy() && A('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  i.accessCache = /* @__PURE__ */ Object.create(null), i.proxy = AO(new Proxy(i.ctx, rp)), {}.NODE_ENV !== "production" && ey(i);
  const { setup: r } = n;
  if (r) {
    const s = i.setupContext = r.length > 1 ? yp(i) : null;
    Fn(i), vn();
    const o = hi(r, i, 0, [{}.NODE_ENV !== "production" ? Rn(i.props) : i.props, s]);
    if (xn(), pn(), eh(o)) {
      if (o.then(pn, pn), e)
        return o.then((l) => {
          Vf(i, l, e);
        }).catch((l) => {
          pl(
            l,
            i,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (i.asyncDep = o, {}.NODE_ENV !== "production" && !i.suspense) {
        const l = (t = n.name) !== null && t !== void 0 ? t : "Anonymous";
        A(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Vf(i, o, e);
  } else
    Sp(i, e);
}
function Vf(i, e, t) {
  te(e) ? i.type.__ssrInlineRender ? i.ssrRender = e : i.render = e : Se(e) ? ({}.NODE_ENV !== "production" && bn(e) && A("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (i.devtoolsRawSetupState = e), i.setupState = DO(e), {}.NODE_ENV !== "production" && ty(i)) : {}.NODE_ENV !== "production" && e !== void 0 && A(`setup() should return an object. Received: ${e === null ? "null" : typeof e}`), Sp(i, t);
}
let za;
const Dy = () => !za;
function Sp(i, e, t) {
  const n = i.type;
  if (!i.render) {
    if (!e && za && !n.render) {
      const r = n.template || mh(i).template;
      if (r) {
        ({}).NODE_ENV !== "production" && li(i, "compile");
        const { isCustomElement: s, compilerOptions: o } = i.appContext.config, { delimiters: l, compilerOptions: a } = n, c = Ze(Ze({
          isCustomElement: s,
          delimiters: l
        }, o), a);
        n.render = za(r, c), {}.NODE_ENV !== "production" && ai(i, "compile");
      }
    }
    i.render = n.render || Ye;
  }
  Fn(i), vn(), ny(i), xn(), pn(), {}.NODE_ENV !== "production" && !n.render && i.render === Ye && !e && (n.template ? A(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : A("Component is missing template or render function."));
}
function Ef(i) {
  return new Proxy(i.attrs, {}.NODE_ENV !== "production" ? {
    get(e, t) {
      return Po(), pt(i, "get", "$attrs"), e[t];
    },
    set() {
      return A("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return A("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(e, t) {
      return pt(i, "get", "$attrs"), e[t];
    }
  });
}
function yp(i) {
  const e = (n) => {
    ({}).NODE_ENV !== "production" && i.exposed && A("expose() should be called only once per setup()."), i.exposed = n || {};
  };
  let t;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return t || (t = Ef(i));
    },
    get slots() {
      return Rn(i.slots);
    },
    get emit() {
      return (n, ...r) => i.emit(n, ...r);
    },
    expose: e
  }) : {
    get attrs() {
      return t || (t = Ef(i));
    },
    slots: i.slots,
    emit: i.emit,
    expose: e
  };
}
function yl(i) {
  if (i.exposed)
    return i.exposeProxy || (i.exposeProxy = new Proxy(DO(AO(i.exposed)), {
      get(e, t) {
        if (t in e)
          return e[t];
        if (t in On)
          return On[t](i);
      },
      has(e, t) {
        return t in e || t in On;
      }
    }));
}
const Wy = /(?:^|[-_])(\w)/g, Ny = (i) => i.replace(Wy, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Qp(i, e = !0) {
  return te(i) ? i.displayName || i.name : i.name || e && i.__name;
}
function Ql(i, e, t = !1) {
  let n = Qp(e);
  if (!n && e.__file) {
    const r = e.__file.match(/([^/\\]+)\.\w+$/);
    r && (n = r[1]);
  }
  if (!n && i && i.parent) {
    const r = (s) => {
      for (const o in s)
        if (s[o] === e)
          return o;
    };
    n = r(i.components || i.parent.type.components) || r(i.appContext.components);
  }
  return n ? Ny(n) : t ? "App" : "Anonymous";
}
function vp(i) {
  return te(i) && "__vccOpts" in i;
}
const Yi = (i, e) => cS(i, e, Ir);
function My() {
  return Yy().slots;
}
function Yy() {
  const i = wn();
  return {}.NODE_ENV !== "production" && !i && A("useContext() called without active instance."), i.setupContext || (i.setupContext = yp(i));
}
const jy = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), Uy = () => {
  {
    const i = Ei(jy);
    return i || {}.NODE_ENV !== "production" && A("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), i;
  }
};
function Gl(i) {
  return !!(i && i.__v_isShallow);
}
function Iy() {
  if ({}.NODE_ENV === "production" || typeof window > "u")
    return;
  const i = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, t = { style: "color:#b62e24" }, n = { style: "color:#9d288c" }, r = {
    header(f) {
      return Se(f) ? f.__isVue ? ["div", i, "VueInstance"] : Ue(f) ? [
        "div",
        {},
        ["span", i, h(f)],
        "<",
        l(f.value),
        ">"
      ] : fn(f) ? [
        "div",
        {},
        ["span", i, Gl(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${Ni(f) ? " (readonly)" : ""}`
      ] : Ni(f) ? [
        "div",
        {},
        ["span", i, Gl(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const u = [];
    f.type.props && f.props && u.push(o("props", se(f.props))), f.setupState !== ge && u.push(o("setup", f.setupState)), f.data !== ge && u.push(o("data", se(f.data)));
    const d = a(f, "computed");
    d && u.push(o("computed", d));
    const O = a(f, "inject");
    return O && u.push(o("injected", O)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), u;
  }
  function o(f, u) {
    return u = Ze({}, u), Object.keys(u).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(u).map((d) => [
          "div",
          {},
          ["span", n, d + ": "],
          l(u[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, u = !0) {
    return typeof f == "number" ? ["span", e, f] : typeof f == "string" ? ["span", t, JSON.stringify(f)] : typeof f == "boolean" ? ["span", n, f] : Se(f) ? ["object", { object: u ? se(f) : f }] : ["span", t, String(f)];
  }
  function a(f, u) {
    const d = f.type;
    if (te(d))
      return;
    const O = {};
    for (const m in f.ctx)
      c(d, m, u) && (O[m] = f.ctx[m]);
    return O;
  }
  function c(f, u, d) {
    const O = f[d];
    if (ee(O) && O.includes(u) || Se(O) && u in O || f.extends && c(f.extends, u, d) || f.mixins && f.mixins.some((m) => c(m, u, d)))
      return !0;
  }
  function h(f) {
    return Gl(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Zf = "3.2.45", qy = "http://www.w3.org/2000/svg", nn = typeof document < "u" ? document : null, Rf = nn && /* @__PURE__ */ nn.createElement("template"), By = {
  insert: (i, e, t) => {
    e.insertBefore(i, t || null);
  },
  remove: (i) => {
    const e = i.parentNode;
    e && e.removeChild(i);
  },
  createElement: (i, e, t, n) => {
    const r = e ? nn.createElementNS(qy, i) : nn.createElement(i, t ? { is: t } : void 0);
    return i === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (i) => nn.createTextNode(i),
  createComment: (i) => nn.createComment(i),
  setText: (i, e) => {
    i.nodeValue = e;
  },
  setElementText: (i, e) => {
    i.textContent = e;
  },
  parentNode: (i) => i.parentNode,
  nextSibling: (i) => i.nextSibling,
  querySelector: (i) => nn.querySelector(i),
  setScopeId(i, e) {
    i.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(i, e, t, n, r, s) {
    const o = t ? t.previousSibling : e.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; e.insertBefore(r.cloneNode(!0), t), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Rf.innerHTML = n ? `<svg>${i}</svg>` : i;
      const l = Rf.content;
      if (n) {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      e.insertBefore(l, t);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      t ? t.previousSibling : e.lastChild
    ];
  }
};
function Ly(i, e, t) {
  const n = i._vtc;
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? i.removeAttribute("class") : t ? i.setAttribute("class", e) : i.className = e;
}
function zy(i, e, t) {
  const n = i.style, r = Pe(t);
  if (t && !r) {
    for (const s in t)
      Ga(n, s, t[s]);
    if (e && !Pe(e))
      for (const s in e)
        t[s] == null && Ga(n, s, "");
  } else {
    const s = n.display;
    r ? e !== t && (n.cssText = t) : e && i.removeAttribute("style"), "_vod" in i && (n.display = s);
  }
}
const Gy = /[^\\];\s*$/, Df = /\s*!important$/;
function Ga(i, e, t) {
  if (ee(t))
    t.forEach((n) => Ga(i, e, n));
  else if (t == null && (t = ""), {}.NODE_ENV !== "production" && Gy.test(t) && A(`Unexpected semicolon at the end of '${e}' style value: '${t}'`), e.startsWith("--"))
    i.setProperty(e, t);
  else {
    const n = Fy(i, e);
    Df.test(t) ? i.setProperty(Di(n), t.replace(Df, ""), "important") : i[n] = t;
  }
}
const Wf = ["Webkit", "Moz", "ms"], Fl = {};
function Fy(i, e) {
  const t = Fl[e];
  if (t)
    return t;
  let n = Gn(e);
  if (n !== "filter" && n in i)
    return Fl[e] = n;
  n = as(n);
  for (let r = 0; r < Wf.length; r++) {
    const s = Wf[r] + n;
    if (s in i)
      return Fl[e] = s;
  }
  return e;
}
const Nf = "http://www.w3.org/1999/xlink";
function Hy(i, e, t, n, r) {
  if (n && e.startsWith("xlink:"))
    t == null ? i.removeAttributeNS(Nf, e.slice(6, e.length)) : i.setAttributeNS(Nf, e, t);
  else {
    const s = yb(e);
    t == null || s && !mO(t) ? i.removeAttribute(e) : i.setAttribute(e, s ? "" : t);
  }
}
function Ky(i, e, t, n, r, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    n && o(n, r, s), i[e] = t ?? "";
    return;
  }
  if (e === "value" && i.tagName !== "PROGRESS" && // custom elements may use _value internally
  !i.tagName.includes("-")) {
    i._value = t;
    const a = t ?? "";
    (i.value !== a || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    i.tagName === "OPTION") && (i.value = a), t == null && i.removeAttribute(e);
    return;
  }
  let l = !1;
  if (t === "" || t == null) {
    const a = typeof i[e];
    a === "boolean" ? t = mO(t) : t == null && a === "string" ? (t = "", l = !0) : a === "number" && (t = 0, l = !0);
  }
  try {
    i[e] = t;
  } catch (a) {
    ({}).NODE_ENV !== "production" && !l && A(`Failed setting prop "${e}" on <${i.tagName.toLowerCase()}>: value ${t} is invalid.`, a);
  }
  l && i.removeAttribute(e);
}
function Jy(i, e, t, n) {
  i.addEventListener(e, t, n);
}
function e1(i, e, t, n) {
  i.removeEventListener(e, t, n);
}
function t1(i, e, t, n, r = null) {
  const s = i._vei || (i._vei = {}), o = s[e];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = i1(e);
    if (n) {
      const c = s[e] = s1(n, r);
      Jy(i, l, c, a);
    } else
      o && (e1(i, l, o, a), s[e] = void 0);
  }
}
const Mf = /(?:Once|Passive|Capture)$/;
function i1(i) {
  let e;
  if (Mf.test(i)) {
    e = {};
    let n;
    for (; n = i.match(Mf); )
      i = i.slice(0, i.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [i[2] === ":" ? i.slice(3) : Di(i.slice(2)), e];
}
let Hl = 0;
const n1 = /* @__PURE__ */ Promise.resolve(), r1 = () => Hl || (n1.then(() => Hl = 0), Hl = Date.now());
function s1(i, e) {
  const t = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= t.attached)
      return;
    Wt(o1(n, t.value), e, 5, [n]);
  };
  return t.value = i, t.attached = r1(), t;
}
function o1(i, e) {
  if (ee(e)) {
    const t = i.stopImmediatePropagation;
    return i.stopImmediatePropagation = () => {
      t.call(i), i._stopped = !0;
    }, e.map((n) => (r) => !r._stopped && n && n(r));
  } else
    return e;
}
const Yf = /^on[a-z]/, l1 = (i, e, t, n, r = !1, s, o, l, a) => {
  e === "class" ? Ly(i, n, r) : e === "style" ? zy(i, t, n) : ls(e) ? Qo(e) || t1(i, e, t, n, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : a1(i, e, n, r)) ? Ky(i, e, n, s, o, l, a) : (e === "true-value" ? i._trueValue = n : e === "false-value" && (i._falseValue = n), Hy(i, e, n, r));
};
function a1(i, e, t, n) {
  return n ? !!(e === "innerHTML" || e === "textContent" || e in i && Yf.test(e) && te(t)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && i.tagName === "INPUT" || e === "type" && i.tagName === "TEXTAREA" || Yf.test(e) && Pe(t) ? !1 : e in i;
}
const c1 = {
  beforeMount(i, { value: e }, { transition: t }) {
    i._vod = i.style.display === "none" ? "" : i.style.display, t && e ? t.beforeEnter(i) : pr(i, e);
  },
  mounted(i, { value: e }, { transition: t }) {
    t && e && t.enter(i);
  },
  updated(i, { value: e, oldValue: t }, { transition: n }) {
    !e != !t && (n ? e ? (n.beforeEnter(i), pr(i, !0), n.enter(i)) : n.leave(i, () => {
      pr(i, !1);
    }) : pr(i, e));
  },
  beforeUnmount(i, { value: e }) {
    pr(i, e);
  }
};
function pr(i, e) {
  i.style.display = e ? i._vod : "none";
}
const h1 = /* @__PURE__ */ Ze({ patchProp: l1 }, By);
let jf;
function f1() {
  return jf || (jf = vy(h1));
}
const u1 = (...i) => {
  const e = f1().createApp(...i);
  ({}).NODE_ENV !== "production" && (d1(e), O1(e));
  const { mount: t } = e;
  return e.mount = (n) => {
    const r = p1(n);
    if (!r)
      return;
    const s = e._component;
    !te(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const o = t(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
};
function d1(i) {
  Object.defineProperty(i.config, "isNativeTag", {
    value: (e) => gb(e) || bb(e),
    writable: !1
  });
}
function O1(i) {
  {
    const e = i.config.isCustomElement;
    Object.defineProperty(i.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        A("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const t = i.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(i.config, "compilerOptions", {
      get() {
        return A(n), t;
      },
      set() {
        A(n);
      }
    });
  }
}
function p1(i) {
  if (Pe(i)) {
    const e = document.querySelector(i);
    return {}.NODE_ENV !== "production" && !e && A(`Failed to mount app: mount target selector "${i}" returned null.`), e;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && i instanceof window.ShadowRoot && i.mode === "closed" && A('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), i;
}
function m1() {
  Iy();
}
({}).NODE_ENV !== "production" && m1();
function g1(i) {
  for (var e = -1, t = i == null ? 0 : i.length, n = {}; ++e < t; ) {
    var r = i[e];
    n[r[0]] = r[1];
  }
  return n;
}
var b1 = Object.defineProperty, S1 = Object.defineProperties, y1 = Object.getOwnPropertyDescriptors, Uf = Object.getOwnPropertySymbols, Q1 = Object.prototype.hasOwnProperty, v1 = Object.prototype.propertyIsEnumerable, If = (i, e, t) => e in i ? b1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, x1 = (i, e) => {
  for (var t in e || (e = {}))
    Q1.call(e, t) && If(i, t, e[t]);
  if (Uf)
    for (var t of Uf(e))
      v1.call(e, t) && If(i, t, e[t]);
  return i;
}, w1 = (i, e) => S1(i, y1(e));
function qf(i, e) {
  var t;
  const n = ZO();
  return NS(() => {
    n.value = i();
  }, w1(x1({}, e), {
    flush: (t = e == null ? void 0 : e.flush) != null ? t : "sync"
  })), sh(n);
}
var Bf;
const yh = typeof window < "u", xp = (i) => typeof i == "number", $1 = (i) => typeof i == "string", P1 = () => {
};
yh && ((Bf = window == null ? void 0 : window.navigator) != null && Bf.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function k1(i) {
  return typeof i == "function" ? i() : We(i);
}
function C1(i) {
  return i;
}
function wp(i) {
  return Xb() ? (Ab(i), !0) : !1;
}
function T1(i, e = !0) {
  wn() ? lr(i) : e ? i() : hs(i);
}
function $p(i) {
  var e;
  const t = k1(i);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const Qh = yh ? window : void 0, _1 = yh ? window.document : void 0;
function Fa(...i) {
  let e, t, n, r;
  if ($1(i[0]) || Array.isArray(i[0]) ? ([t, n, r] = i, e = Qh) : [e, t, n, r] = i, !e)
    return P1;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const s = [], o = () => {
    s.forEach((h) => h()), s.length = 0;
  }, l = (h, f, u) => (h.addEventListener(f, u, r), () => h.removeEventListener(f, u, r)), a = Je(() => $p(e), (h) => {
    o(), h && s.push(...t.flatMap((f) => n.map((u) => l(h, f, u))));
  }, { immediate: !0, flush: "post" }), c = () => {
    a(), o();
  };
  return wp(c), c;
}
function X1(i, e = !1) {
  const t = Ce(), n = () => t.value = Boolean(i());
  return n(), T1(n, e), t;
}
const Ha = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ka = "__vueuse_ssr_handlers__";
Ha[Ka] = Ha[Ka] || {};
Ha[Ka];
function A1({ document: i = _1 } = {}) {
  if (!i)
    return Ce("visible");
  const e = Ce(i.visibilityState);
  return Fa(i, "visibilitychange", () => {
    e.value = i.visibilityState;
  }), e;
}
var Lf = Object.getOwnPropertySymbols, V1 = Object.prototype.hasOwnProperty, E1 = Object.prototype.propertyIsEnumerable, Z1 = (i, e) => {
  var t = {};
  for (var n in i)
    V1.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
  if (i != null && Lf)
    for (var n of Lf(i))
      e.indexOf(n) < 0 && E1.call(i, n) && (t[n] = i[n]);
  return t;
};
function Pp(i, e, t = {}) {
  const n = t, { window: r = Qh } = n, s = Z1(n, ["window"]);
  let o;
  const l = X1(() => r && "ResizeObserver" in r), a = () => {
    o && (o.disconnect(), o = void 0);
  }, c = Je(() => $p(i), (f) => {
    a(), l.value && r && f && (o = new ResizeObserver(e), o.observe(f, s));
  }, { immediate: !0, flush: "post" }), h = () => {
    a(), c();
  };
  return wp(h), {
    isSupported: l,
    stop: h
  };
}
var zf;
(function(i) {
  i.UP = "UP", i.RIGHT = "RIGHT", i.DOWN = "DOWN", i.LEFT = "LEFT", i.NONE = "NONE";
})(zf || (zf = {}));
var R1 = Object.defineProperty, Gf = Object.getOwnPropertySymbols, D1 = Object.prototype.hasOwnProperty, W1 = Object.prototype.propertyIsEnumerable, Ff = (i, e, t) => e in i ? R1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, N1 = (i, e) => {
  for (var t in e || (e = {}))
    D1.call(e, t) && Ff(i, t, e[t]);
  if (Gf)
    for (var t of Gf(e))
      W1.call(e, t) && Ff(i, t, e[t]);
  return i;
};
const M1 = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
N1({
  linear: C1
}, M1);
function Y1({ window: i = Qh } = {}) {
  if (!i)
    return Ce(!1);
  const e = Ce(i.document.hasFocus());
  return Fa(i, "blur", () => {
    e.value = !1;
  }), Fa(i, "focus", () => {
    e.value = !0;
  }), e;
}
const Ja = (i) => i === void 0, j1 = (i) => Pe(i) ? !Number.isNaN(Number(i)) : !1, Pi = (i) => as(i);
class kp extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function vh(i, e) {
  throw new kp(`[${i}] ${e}`);
}
function Cp(i, e) {
  if ({}.NODE_ENV !== "production") {
    const t = Pe(i) ? new kp(`[${i}] ${e}`) : i;
    console.warn(t);
  }
}
const U1 = "utils/dom/style";
function I1(i, e = "px") {
  if (!i)
    return "";
  if (xp(i) || j1(i))
    return `${i}${e}`;
  if (Pe(i))
    return i;
  Cp(U1, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.10 */
var vl = (i, e) => {
  let t = i.__vccOpts || i;
  for (let [n, r] of e)
    t[n] = r;
  return t;
}, q1 = {
  name: "ArrowLeft"
}, B1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, L1 = /* @__PURE__ */ ar("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), z1 = [
  L1
];
function G1(i, e, t, n, r, s) {
  return _t(), mi("svg", B1, z1);
}
var F1 = /* @__PURE__ */ vl(q1, [["render", G1], ["__file", "arrow-left.vue"]]), H1 = {
  name: "ArrowRight"
}, K1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J1 = /* @__PURE__ */ ar("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), eQ = [
  J1
];
function tQ(i, e, t, n, r, s) {
  return _t(), mi("svg", K1, eQ);
}
var iQ = /* @__PURE__ */ vl(H1, [["render", tQ], ["__file", "arrow-right.vue"]]), nQ = {
  name: "Close"
}, rQ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sQ = /* @__PURE__ */ ar("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), oQ = [
  sQ
];
function lQ(i, e, t, n, r, s) {
  return _t(), mi("svg", rQ, oQ);
}
var aQ = /* @__PURE__ */ vl(nQ, [["render", lQ], ["__file", "close.vue"]]), cQ = {
  name: "Plus"
}, hQ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fQ = /* @__PURE__ */ ar("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), uQ = [
  fQ
];
function dQ(i, e, t, n, r, s) {
  return _t(), mi("svg", hQ, uQ);
}
var OQ = /* @__PURE__ */ vl(cQ, [["render", dQ], ["__file", "plus.vue"]]);
const Tp = "__epPropKey", xl = (i) => i, pQ = (i) => Se(i) && !!i[Tp], mQ = (i, e) => {
  if (!Se(i) || pQ(i))
    return i;
  const { values: t, required: n, default: r, type: s, validator: o } = i, a = {
    type: s,
    required: !!n,
    validator: t || o ? (c) => {
      let h = !1, f = [];
      if (t && (f = Array.from(t), oe(i, "default") && f.push(r), h || (h = f.includes(c))), o && (h || (h = o(c))), !h && f.length > 0) {
        const u = [...new Set(f)].map((d) => JSON.stringify(d)).join(", ");
        A(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${u}], got value ${JSON.stringify(c)}.`);
      }
      return h;
    } : void 0,
    [Tp]: !0
  };
  return oe(i, "default") && (a.default = r), a;
}, ds = (i) => g1(Object.entries(i).map(([e, t]) => [
  e,
  mQ(t, e)
])), _p = (i, e) => {
  if (i.install = (t) => {
    for (const n of [i, ...Object.values(e ?? {})])
      t.component(n.name, n);
  }, e)
    for (const [t, n] of Object.entries(e))
      i[t] = n;
  return i;
}, gQ = (i) => (i.install = Ye, i), ro = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Xp = "update:modelValue", so = (i) => {
  const e = ee(i) ? i : [i], t = [];
  return e.forEach((n) => {
    var r;
    ee(n) ? t.push(...so(n)) : bn(n) && ee(n.children) ? t.push(...so(n.children)) : (t.push(n), bn(n) && ((r = n.component) != null && r.subTree) && t.push(...so(n.component.subTree)));
  }), t;
}, Ap = (i) => i, bQ = Symbol(), wl = Symbol("tabsRootContextKey"), Hf = Ce();
function SQ(i, e = void 0) {
  const t = wn() ? Ei(bQ, Hf) : Hf;
  return i ? Yi(() => {
    var n, r;
    return (r = (n = t.value) == null ? void 0 : n[i]) != null ? r : e;
  }) : t;
}
const yQ = ({ from: i, replacement: e, scope: t, version: n, ref: r, type: s = "API" }, o) => {
  Je(() => We(o), (l) => {
    l && Cp(t, `[${s}] ${i} is about to be deprecated in version ${n}, please use ${e} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, QQ = "el", vQ = "is-", Ki = (i, e, t, n, r) => {
  let s = `${i}-${e}`;
  return t && (s += `-${t}`), n && (s += `__${n}`), r && (s += `--${r}`), s;
}, Os = (i) => {
  const e = SQ("namespace", QQ);
  return {
    namespace: e,
    b: (O = "") => Ki(e.value, i, O, "", ""),
    e: (O) => O ? Ki(e.value, i, "", O, "") : "",
    m: (O) => O ? Ki(e.value, i, "", "", O) : "",
    be: (O, m) => O && m ? Ki(e.value, i, O, m, "") : "",
    em: (O, m) => O && m ? Ki(e.value, i, "", O, m) : "",
    bm: (O, m) => O && m ? Ki(e.value, i, O, "", m) : "",
    bem: (O, m, b) => O && m && b ? Ki(e.value, i, O, m, b) : "",
    is: (O, ...m) => {
      const b = m.length >= 1 ? m[0] : !0;
      return O && b ? `${vQ}${O}` : "";
    },
    cssVar: (O) => {
      const m = {};
      for (const b in O)
        O[b] && (m[`--${e.value}-${b}`] = O[b]);
      return m;
    },
    cssVarName: (O) => `--${e.value}-${O}`,
    cssVarBlock: (O) => {
      const m = {};
      for (const b in O)
        O[b] && (m[`--${e.value}-${i}-${b}`] = O[b]);
      return m;
    },
    cssVarBlockName: (O) => `--${e.value}-${i}-${O}`
  };
}, xQ = (i, e, t) => so(i.subTree).filter((s) => {
  var o;
  return bn(s) && ((o = s.type) == null ? void 0 : o.name) === e && !!s.component;
}).map((s) => s.component.uid).map((s) => t[s]).filter((s) => !!s), wQ = (i, e) => {
  const t = {}, n = ZO([]);
  return {
    children: n,
    addChild: (o) => {
      t[o.uid] = o, n.value = xQ(i, e, t);
    },
    removeChild: (o) => {
      delete t[o], n.value = n.value.filter((l) => l.uid !== o);
    }
  };
};
var xh = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, r] of e)
    t[n] = r;
  return t;
};
const $Q = ds({
  size: {
    type: xl([Number, String])
  },
  color: {
    type: String
  }
}), PQ = Nt({
  name: "ElIcon",
  inheritAttrs: !1
}), kQ = /* @__PURE__ */ Nt({
  ...PQ,
  props: $Q,
  setup(i) {
    const e = i, t = Os("icon"), n = Yi(() => {
      const { size: r, color: s } = e;
      return !r && !s ? {} : {
        fontSize: Ja(r) ? void 0 : I1(r),
        "--color": s
      };
    });
    return (r, s) => (_t(), mi("i", gp({
      class: We(t).b(),
      style: We(n)
    }, r.$attrs), [
      Oh(r.$slots, "default")
    ], 16));
  }
});
var CQ = /* @__PURE__ */ xh(kQ, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const oo = _p(CQ), TQ = ds({
  tabs: {
    type: xl(Array),
    default: () => Ap([])
  }
}), Vp = "ElTabBar", _Q = Nt({
  name: Vp
}), XQ = /* @__PURE__ */ Nt({
  ..._Q,
  props: TQ,
  setup(i, { expose: e }) {
    const t = i, n = wn(), r = Ei(wl);
    r || vh(Vp, "<el-tabs><el-tab-bar /></el-tabs>");
    const s = Os("tabs"), o = Ce(), l = Ce(), a = () => {
      let h = 0, f = 0;
      const u = ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height", d = u === "width" ? "x" : "y", O = d === "x" ? "left" : "top";
      return t.tabs.every((m) => {
        var b, y;
        const P = (y = (b = n.parent) == null ? void 0 : b.refs) == null ? void 0 : y[`tab-${m.uid}`];
        if (!P)
          return !1;
        if (!m.active)
          return !0;
        h = P[`offset${Pi(O)}`], f = P[`client${Pi(u)}`];
        const C = window.getComputedStyle(P);
        return u === "width" && (t.tabs.length > 1 && (f -= Number.parseFloat(C.paddingLeft) + Number.parseFloat(C.paddingRight)), h += Number.parseFloat(C.paddingLeft)), !1;
      }), {
        [u]: `${f}px`,
        transform: `translate${Pi(d)}(${h}px)`
      };
    }, c = () => l.value = a();
    return Je(() => t.tabs, async () => {
      await hs(), c();
    }, { immediate: !0 }), Pp(o, () => c()), e({
      ref: o,
      update: c
    }), (h, f) => (_t(), mi("div", {
      ref_key: "barRef",
      ref: o,
      class: os([We(s).e("active-bar"), We(s).is(We(r).props.tabPosition)]),
      style: al(l.value)
    }, null, 6));
  }
});
var AQ = /* @__PURE__ */ xh(XQ, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);
const VQ = ds({
  panes: {
    type: xl(Array),
    default: () => Ap([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
}), EQ = {
  tabClick: (i, e, t) => t instanceof Event,
  tabRemove: (i, e) => e instanceof Event
}, Kf = "ElTabNav", ZQ = Nt({
  name: Kf,
  props: VQ,
  emits: EQ,
  setup(i, {
    expose: e,
    emit: t
  }) {
    const n = wn(), r = Ei(wl);
    r || vh(Kf, "<el-tabs><tab-nav /></el-tabs>");
    const s = Os("tabs"), o = A1(), l = Y1(), a = Ce(), c = Ce(), h = Ce(), f = Ce(!1), u = Ce(0), d = Ce(!1), O = Ce(!0), m = Yi(() => ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height"), b = Yi(() => ({
      transform: `translate${m.value === "width" ? "X" : "Y"}(-${u.value}px)`
    })), y = () => {
      if (!a.value)
        return;
      const N = a.value[`offset${Pi(m.value)}`], W = u.value;
      if (!W)
        return;
      const D = W > N ? W - N : 0;
      u.value = D;
    }, P = () => {
      if (!a.value || !c.value)
        return;
      const N = c.value[`offset${Pi(m.value)}`], W = a.value[`offset${Pi(m.value)}`], D = u.value;
      if (N - D <= W)
        return;
      const F = N - D > W * 2 ? D + W : N - W;
      u.value = F;
    }, C = async () => {
      const N = c.value;
      if (!f.value || !h.value || !a.value || !N)
        return;
      await hs();
      const W = h.value.querySelector(".is-active");
      if (!W)
        return;
      const D = a.value, F = ["top", "bottom"].includes(r.props.tabPosition), J = W.getBoundingClientRect(), re = D.getBoundingClientRect(), Oe = F ? N.offsetWidth - re.width : N.offsetHeight - re.height, ae = u.value;
      let H = ae;
      F ? (J.left < re.left && (H = ae - (re.left - J.left)), J.right > re.right && (H = ae + J.right - re.right)) : (J.top < re.top && (H = ae - (re.top - J.top)), J.bottom > re.bottom && (H = ae + (J.bottom - re.bottom))), H = Math.max(H, 0), u.value = Math.min(H, Oe);
    }, x = () => {
      if (!c.value || !a.value)
        return;
      const N = c.value[`offset${Pi(m.value)}`], W = a.value[`offset${Pi(m.value)}`], D = u.value;
      if (W < N) {
        const F = u.value;
        f.value = f.value || {}, f.value.prev = F, f.value.next = F + W < N, N - F < W && (u.value = N - W);
      } else
        f.value = !1, D > 0 && (u.value = 0);
    }, T = (N) => {
      const W = N.code, {
        up: D,
        down: F,
        left: J,
        right: re
      } = ro;
      if (![D, F, J, re].includes(W))
        return;
      const Oe = Array.from(N.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")), ae = Oe.indexOf(N.target);
      let H;
      W === J || W === D ? ae === 0 ? H = Oe.length - 1 : H = ae - 1 : ae < Oe.length - 1 ? H = ae + 1 : H = 0, Oe[H].focus({
        preventScroll: !0
      }), Oe[H].click(), R();
    }, R = () => {
      O.value && (d.value = !0);
    }, G = () => d.value = !1;
    return Je(o, (N) => {
      N === "hidden" ? O.value = !1 : N === "visible" && setTimeout(() => O.value = !0, 50);
    }), Je(l, (N) => {
      N ? setTimeout(() => O.value = !0, 50) : O.value = !1;
    }), Pp(h, x), lr(() => setTimeout(() => C(), 0)), tp(() => x()), e({
      scrollToActiveTab: C,
      removeFocus: G
    }), Je(() => i.panes, () => n.update(), {
      flush: "post"
    }), () => {
      const N = f.value ? [ce("span", {
        class: [s.e("nav-prev"), s.is("disabled", !f.value.prev)],
        onClick: y
      }, [ce(oo, null, {
        default: () => [ce(F1, null, null)]
      })]), ce("span", {
        class: [s.e("nav-next"), s.is("disabled", !f.value.next)],
        onClick: P
      }, [ce(oo, null, {
        default: () => [ce(iQ, null, null)]
      })])] : null, W = i.panes.map((D, F) => {
        var J, re, Oe, ae;
        const H = D.uid, K = D.props.disabled, B = (re = (J = D.props.name) != null ? J : D.index) != null ? re : `${F}`, fe = !K && (D.isClosable || i.editable);
        D.index = `${F}`;
        const tt = fe ? ce(oo, {
          class: "is-icon-close",
          onClick: (Ae) => t("tabRemove", D, Ae)
        }, {
          default: () => [ce(aQ, null, null)]
        }) : null, it = ((ae = (Oe = D.slots).label) == null ? void 0 : ae.call(Oe)) || D.props.label, nt = !K && D.active ? 0 : -1;
        return ce("div", {
          ref: `tab-${H}`,
          class: [s.e("item"), s.is(r.props.tabPosition), s.is("active", D.active), s.is("disabled", K), s.is("closable", fe), s.is("focus", d.value)],
          id: `tab-${B}`,
          key: `tab-${H}`,
          "aria-controls": `pane-${B}`,
          role: "tab",
          "aria-selected": D.active,
          tabindex: nt,
          onFocus: () => R(),
          onBlur: () => G(),
          onClick: (Ae) => {
            G(), t("tabClick", D, B, Ae);
          },
          onKeydown: (Ae) => {
            fe && (Ae.code === ro.delete || Ae.code === ro.backspace) && t("tabRemove", D, Ae);
          }
        }, [it, tt]);
      });
      return ce("div", {
        ref: h,
        class: [s.e("nav-wrap"), s.is("scrollable", !!f.value), s.is(r.props.tabPosition)]
      }, [N, ce("div", {
        class: s.e("nav-scroll"),
        ref: a
      }, [ce("div", {
        class: [s.e("nav"), s.is(r.props.tabPosition), s.is("stretch", i.stretch && ["top", "bottom"].includes(r.props.tabPosition))],
        ref: c,
        style: b.value,
        role: "tablist",
        onKeydown: T
      }, [i.type ? null : ce(AQ, {
        tabs: [...i.panes]
      }, null), W])])]);
    };
  }
}), RQ = ds({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  activeName: {
    type: [String, Number]
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: xl(Function),
    default: () => !0
  },
  stretch: Boolean
}), Kl = (i) => Pe(i) || xp(i), DQ = {
  [Xp]: (i) => Kl(i),
  tabClick: (i, e) => e instanceof Event,
  tabChange: (i) => Kl(i),
  edit: (i, e) => ["remove", "add"].includes(e),
  tabRemove: (i) => Kl(i),
  tabAdd: () => !0
};
var WQ = Nt({
  name: "ElTabs",
  props: RQ,
  emits: DQ,
  setup(i, {
    emit: e,
    slots: t,
    expose: n
  }) {
    var r, s;
    const o = Os("tabs"), {
      children: l,
      addChild: a,
      removeChild: c
    } = wQ(wn(), "ElTabPane"), h = Ce(), f = Ce((s = (r = i.modelValue) != null ? r : i.activeName) != null ? s : "0"), u = (y) => {
      f.value = y, e(Xp, y), e("tabChange", y);
    }, d = async (y) => {
      var P, C, x;
      if (!(f.value === y || Ja(y)))
        try {
          await ((P = i.beforeLeave) == null ? void 0 : P.call(i, y, f.value)) !== !1 && (u(y), (x = (C = h.value) == null ? void 0 : C.removeFocus) == null || x.call(C));
        } catch {
        }
    }, O = (y, P, C) => {
      y.props.disabled || (d(P), e("tabClick", y, C));
    }, m = (y, P) => {
      y.props.disabled || Ja(y.props.name) || (P.stopPropagation(), e("edit", y.props.name, "remove"), e("tabRemove", y.props.name));
    }, b = () => {
      e("edit", void 0, "add"), e("tabAdd");
    };
    return yQ({
      from: '"activeName"',
      replacement: '"model-value" or "v-model"',
      scope: "ElTabs",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/tabs.html#attributes",
      type: "Attribute"
    }, Yi(() => !!i.activeName)), Je(() => i.activeName, (y) => d(y)), Je(() => i.modelValue, (y) => d(y)), Je(f, async () => {
      var y;
      await hs(), (y = h.value) == null || y.scrollToActiveTab();
    }), KO(wl, {
      props: i,
      currentName: f,
      registerPane: a,
      unregisterPane: c
    }), n({
      currentName: f
    }), () => {
      const y = i.editable || i.addable ? ce("span", {
        class: o.e("new-tab"),
        tabindex: "0",
        onClick: b,
        onKeydown: (x) => {
          x.code === ro.enter && b();
        }
      }, [ce(oo, {
        class: o.is("icon-plus")
      }, {
        default: () => [ce(OQ, null, null)]
      })]) : null, P = ce("div", {
        class: [o.e("header"), o.is(i.tabPosition)]
      }, [y, ce(ZQ, {
        ref: h,
        currentName: f.value,
        editable: i.editable,
        type: i.type,
        panes: l.value,
        stretch: i.stretch,
        onTabClick: O,
        onTabRemove: m
      }, null)]), C = ce("div", {
        class: o.e("content")
      }, [Oh(t, "default")]);
      return ce("div", {
        class: [o.b(), o.m(i.tabPosition), {
          [o.m("card")]: i.type === "card",
          [o.m("border-card")]: i.type === "border-card"
        }]
      }, [...i.tabPosition !== "bottom" ? [P, C] : [C, P]]);
    };
  }
});
const NQ = ds({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
}), MQ = ["id", "aria-hidden", "aria-labelledby"], Ep = "ElTabPane", YQ = Nt({
  name: Ep
}), jQ = /* @__PURE__ */ Nt({
  ...YQ,
  props: NQ,
  setup(i) {
    const e = i, t = wn(), n = My(), r = Ei(wl);
    r || vh(Ep, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const s = Os("tab-pane"), o = Ce(), l = Yi(() => e.closable || r.props.closable), a = qf(() => {
      var d;
      return r.currentName.value === ((d = e.name) != null ? d : o.value);
    }), c = Ce(a.value), h = Yi(() => {
      var d;
      return (d = e.name) != null ? d : o.value;
    }), f = qf(() => !e.lazy || c.value || a.value);
    Je(a, (d) => {
      d && (c.value = !0);
    });
    const u = cs({
      uid: t.uid,
      slots: n,
      props: e,
      paneName: h,
      active: a,
      index: o,
      isClosable: l
    });
    return lr(() => {
      r.registerPane(u);
    }), dh(() => {
      r.unregisterPane(u.uid);
    }), (d, O) => We(f) ? HS((_t(), mi("div", {
      key: 0,
      id: `pane-${We(h)}`,
      class: os(We(s).b()),
      role: "tabpanel",
      "aria-hidden": !We(a),
      "aria-labelledby": `tab-${We(h)}`
    }, [
      Oh(d.$slots, "default")
    ], 10, MQ)), [
      [c1, We(a)]
    ]) : _y("v-if", !0);
  }
});
var Zp = /* @__PURE__ */ xh(jQ, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);
const UQ = _p(WQ, {
  TabPane: Zp
}), Ts = gQ(Zp);
class de {
  /**
  @internal
  */
  constructor() {
  }
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, n) {
    let r = [];
    return this.decompose(
      0,
      e,
      r,
      2
      /* Open.To */
    ), n.length && n.decompose(
      0,
      n.length,
      r,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      r,
      1
      /* Open.From */
    ), Ht.from(r, this.length - (t - e) + n.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    let n = [];
    return this.decompose(e, t, n, 0), Ht.from(n, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), r = new Er(this), s = new Er(e);
    for (let o = t, l = t; ; ) {
      if (r.next(o), s.next(o), o = 0, r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value)
        return !1;
      if (l += r.value.length, r.done || l >= n)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new Er(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Rp(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let n;
    if (e == null)
      n = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let r = this.line(e).from;
      n = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Dp(n);
  }
  /**
  @internal
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? de.empty : e.length <= 32 ? new Ve(e) : Ht.from(Ve.split(e, []));
  }
}
class Ve extends de {
  constructor(e, t = IQ(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, r) {
    for (let s = 0; ; s++) {
      let o = this.text[s], l = r + o.length;
      if ((t ? n : l) >= e)
        return new qQ(r, l, n, o);
      r = l + 1, n++;
    }
  }
  decompose(e, t, n, r) {
    let s = e <= 0 && t >= this.length ? this : new Ve(Jf(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let o = n.pop(), l = lo(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32)
        n.push(new Ve(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        n.push(new Ve(l.slice(0, a)), new Ve(l.slice(a)));
      }
    } else
      n.push(s);
  }
  replace(e, t, n) {
    if (!(n instanceof Ve))
      return super.replace(e, t, n);
    let r = lo(this.text, lo(n.text, Jf(this.text, 0, e)), t), s = this.length + n.length - (t - e);
    return r.length <= 32 ? new Ve(r, s) : Ht.from(Ve.split(r, []), s);
  }
  sliceString(e, t = this.length, n = `
`) {
    let r = "";
    for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
      let l = this.text[o], a = s + l.length;
      s > e && o && (r += n), e < a && t > s && (r += l.slice(Math.max(0, e - s), t - s)), s = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [], r = -1;
    for (let s of e)
      n.push(s), r += s.length + 1, n.length == 32 && (t.push(new Ve(n, r)), n = [], r = -1);
    return r > -1 && t.push(new Ve(n, r)), t;
  }
}
class Ht extends de {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let n of e)
      this.lines += n.lines;
  }
  lineInner(e, t, n, r) {
    for (let s = 0; ; s++) {
      let o = this.children[s], l = r + o.length, a = n + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, n, r);
      r = l + 1, n = a + 1;
    }
  }
  decompose(e, t, n, r) {
    for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
      let l = this.children[s], a = o + l.length;
      if (e <= a && t >= o) {
        let c = r & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !c ? n.push(l) : l.decompose(e - o, t - o, n, c);
      }
      o = a + 1;
    }
  }
  replace(e, t, n) {
    if (n.lines < this.lines)
      for (let r = 0, s = 0; r < this.children.length; r++) {
        let o = this.children[r], l = s + o.length;
        if (e >= s && t <= l) {
          let a = o.replace(e - s, t - s, n), c = this.lines - o.lines + a.lines;
          if (a.lines < c >> 5 - 1 && a.lines > c >> 5 + 1) {
            let h = this.children.slice();
            return h[r] = a, new Ht(h, this.length - (t - e) + n.length);
          }
          return super.replace(s, l, a);
        }
        s = l + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = `
`) {
    let r = "";
    for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
      let l = this.children[s], a = o + l.length;
      o > e && s && (r += n), e < a && t > o && (r += l.sliceString(e - o, t - o, n)), o = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Ht))
      return 0;
    let n = 0, [r, s, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += t, s += t) {
      if (r == o || s == l)
        return n;
      let a = this.children[r], c = e.children[s];
      if (a != c)
        return n + a.scanIdentical(c, t);
      n += a.length + 1;
    }
  }
  static from(e, t = e.reduce((n, r) => n + r.length + 1, -1)) {
    let n = 0;
    for (let d of e)
      n += d.lines;
    if (n < 32) {
      let d = [];
      for (let O of e)
        O.flatten(d);
      return new Ve(d, t);
    }
    let r = Math.max(
      32,
      n >> 5
      /* Tree.BranchShift */
    ), s = r << 1, o = r >> 1, l = [], a = 0, c = -1, h = [];
    function f(d) {
      let O;
      if (d.lines > s && d instanceof Ht)
        for (let m of d.children)
          f(m);
      else
        d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof Ve && a && (O = h[h.length - 1]) instanceof Ve && d.lines + O.lines <= 32 ? (a += d.lines, c += d.length + 1, h[h.length - 1] = new Ve(O.text.concat(d.text), O.length + 1 + d.length)) : (a + d.lines > r && u(), a += d.lines, c += d.length + 1, h.push(d));
    }
    function u() {
      a != 0 && (l.push(h.length == 1 ? h[0] : Ht.from(h, c)), c = -1, a = h.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new Ht(l, t);
  }
}
de.empty = /* @__PURE__ */ new Ve([""], 0);
function IQ(i) {
  let e = -1;
  for (let t of i)
    e += t.length + 1;
  return e;
}
function lo(i, e, t = 0, n = 1e9) {
  for (let r = 0, s = 0, o = !0; s < i.length && r <= n; s++) {
    let l = i[s], a = r + l.length;
    a >= t && (a > n && (l = l.slice(0, n - r)), r < t && (l = l.slice(t - r)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), r = a + 1;
  }
  return e;
}
function Jf(i, e, t) {
  return lo(i, [""], e, t);
}
class Er {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Ve ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1, r = this.nodes[n], s = this.offsets[n], o = s >> 1, l = r instanceof Ve ? r.text.length : r.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (n == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[n] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (r instanceof Ve) {
        let a = r.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[n] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = r.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Ve ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Rp {
  constructor(e, t, n) {
    this.value = "", this.done = !1, this.cursor = new Er(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), n -= e;
    let { value: r } = this.cursor.next(e);
    return this.pos += (r.length + e) * t, this.value = r.length <= n ? r : t < 0 ? r.slice(r.length - n) : r.slice(0, n), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Dp {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: r } = this.inner.next(e);
    return t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (de.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Er.prototype[Symbol.iterator] = Rp.prototype[Symbol.iterator] = Dp.prototype[Symbol.iterator] = function() {
  return this;
});
class qQ {
  /**
  @internal
  */
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.number = n, this.text = r;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
let Un = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((i) => i ? parseInt(i, 36) : 1);
for (let i = 1; i < Un.length; i++)
  Un[i] += Un[i - 1];
function BQ(i) {
  for (let e = 1; e < Un.length; e += 2)
    if (Un[e] > i)
      return Un[e - 1] <= i;
  return !1;
}
function eu(i) {
  return i >= 127462 && i <= 127487;
}
const tu = 8205;
function lt(i, e, t = !0, n = !0) {
  return (t ? Wp : LQ)(i, e, n);
}
function Wp(i, e, t) {
  if (e == i.length)
    return e;
  e && Np(i.charCodeAt(e)) && Mp(i.charCodeAt(e - 1)) && e--;
  let n = Le(i, e);
  for (e += yt(n); e < i.length; ) {
    let r = Le(i, e);
    if (n == tu || r == tu || t && BQ(r))
      e += yt(r), n = r;
    else if (eu(r)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && eu(Le(i, o)); )
        s++, o -= 2;
      if (s % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function LQ(i, e, t) {
  for (; e > 0; ) {
    let n = Wp(i, e - 2, t);
    if (n < e)
      return n;
    e--;
  }
  return 0;
}
function Np(i) {
  return i >= 56320 && i < 57344;
}
function Mp(i) {
  return i >= 55296 && i < 56320;
}
function Le(i, e) {
  let t = i.charCodeAt(e);
  if (!Mp(t) || e + 1 == i.length)
    return t;
  let n = i.charCodeAt(e + 1);
  return Np(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function wh(i) {
  return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function yt(i) {
  return i < 65536 ? 1 : 2;
}
const ec = /\r\n?|\n/;
var Ge = /* @__PURE__ */ function(i) {
  return i[i.Simple = 0] = "Simple", i[i.TrackDel = 1] = "TrackDel", i[i.TrackBefore = 2] = "TrackBefore", i[i.TrackAfter = 3] = "TrackAfter", i;
}(Ge || (Ge = {}));
class ti {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t + 1];
      e += n < 0 ? this.sections[t] : n;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, n = 0, r = 0; t < this.sections.length; ) {
      let s = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(n, r, s), r += s) : r += o, n += s;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    tc(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], r = this.sections[t++];
      r < 0 ? e.push(n, r) : e.push(r, n);
    }
    return new ti(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Yp(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `other` happened before the ones in `this`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : ic(this, e, t);
  }
  mapPos(e, t = -1, n = Ge.Simple) {
    let r = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], c = r + l;
      if (a < 0) {
        if (c > e)
          return s + (e - r);
        s += l;
      } else {
        if (n != Ge.Simple && c >= e && (n == Ge.TrackDel && r < e && c > e || n == Ge.TrackBefore && r < e || n == Ge.TrackAfter && c > e))
          return null;
        if (c > e || c == e && t < 0 && !l)
          return e == r || t < 0 ? s : s + a;
        s += a;
      }
      r = c;
    }
    if (e > r)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return s;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let n = 0, r = 0; n < this.sections.length && r <= t; ) {
      let s = this.sections[n++], o = this.sections[n++], l = r + s;
      if (o >= 0 && r <= t && l >= e)
        return r < e && l > t ? "cover" : !0;
      r = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], r = this.sections[t++];
      e += (e ? " " : "") + n + (r >= 0 ? ":" + r : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new ti(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new ti(e);
  }
}
class De extends ti {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return tc(this, (t, n, r, s, o) => e = e.replace(r, r + (n - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return ic(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), n = [];
    for (let r = 0, s = 0; r < t.length; r += 2) {
      let o = t[r], l = t[r + 1];
      if (l >= 0) {
        t[r] = l, t[r + 1] = o;
        let a = r >> 1;
        for (; n.length < a; )
          n.push(de.empty);
        n.push(o ? e.slice(s, s + o) : de.empty);
      }
      s += o;
    }
    return new De(t, n);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Yp(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : ic(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    tc(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return ti.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], n = [], r = [], s = new qr(this);
    e:
      for (let o = 0, l = 0; ; ) {
        let a = o == e.length ? 1e9 : e[o++];
        for (; l < a || l == a && s.len == 0; ) {
          if (s.done)
            break e;
          let h = Math.min(s.len, a - l);
          Fe(r, h, -1);
          let f = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
          Fe(t, h, f), f > 0 && Ci(n, t, s.text), s.forward(h), l += h;
        }
        let c = e[o++];
        for (; l < c; ) {
          if (s.done)
            break e;
          let h = Math.min(s.len, c - l);
          Fe(t, h, -1), Fe(r, h, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(h), l += h;
        }
      }
    return {
      changes: new De(t, n),
      filtered: ti.create(r)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t], r = this.sections[t + 1];
      r < 0 ? e.push(n) : r == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, n) {
    let r = [], s = [], o = 0, l = null;
    function a(h = !1) {
      if (!h && !r.length)
        return;
      o < t && Fe(r, t - o, -1);
      let f = new De(r, s);
      l = l ? l.compose(f.map(l)) : f, r = [], s = [], o = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let f of h)
          c(f);
      else if (h instanceof De) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: f, to: u = f, insert: d } = h;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let O = d ? typeof d == "string" ? de.of(d.split(n || ec)) : d : de.empty, m = O.length;
        if (f == u && m == 0)
          return;
        f < o && a(), f > o && Fe(r, f - o, -1), Fe(r, u - f, m), Ci(s, r, O), o = u;
      }
    }
    return c(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new De(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], n = [];
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (typeof s == "number")
        t.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          t.push(s[0], 0);
        else {
          for (; n.length < r; )
            n.push(de.empty);
          n[r] = de.of(s.slice(1)), t.push(s[0], n[r].length);
        }
      }
    }
    return new De(t, n);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new De(e, t);
  }
}
function Fe(i, e, t, n = !1) {
  if (e == 0 && t <= 0)
    return;
  let r = i.length - 2;
  r >= 0 && t <= 0 && t == i[r + 1] ? i[r] += e : e == 0 && i[r] == 0 ? i[r + 1] += t : n ? (i[r] += e, i[r + 1] += t) : i.push(e, t);
}
function Ci(i, e, t) {
  if (t.length == 0)
    return;
  let n = e.length - 2 >> 1;
  if (n < i.length)
    i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < n; )
      i.push(de.empty);
    i.push(t);
  }
}
function tc(i, e, t) {
  let n = i.inserted;
  for (let r = 0, s = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++], a = i.sections[o++];
    if (a < 0)
      r += l, s += l;
    else {
      let c = r, h = s, f = de.empty;
      for (; c += l, h += a, a && n && (f = f.append(n[o - 2 >> 1])), !(t || o == i.sections.length || i.sections[o + 1] < 0); )
        l = i.sections[o++], a = i.sections[o++];
      e(r, c, s, h, f), r = c, s = h;
    }
  }
}
function ic(i, e, t, n = !1) {
  let r = [], s = n ? [] : null, o = new qr(i), l = new qr(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let c = Math.min(o.len, l.len);
      Fe(r, c, -1), o.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let c = l.len;
      for (Fe(r, l.ins, -1); c; ) {
        let h = Math.min(o.len, c);
        o.ins >= 0 && a < o.i && o.len <= h && (Fe(r, 0, o.ins), s && Ci(s, r, o.text), a = o.i), o.forward(h), c -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let c = 0, h = o.len;
      for (; h; )
        if (l.ins == -1) {
          let f = Math.min(h, l.len);
          c += f, h -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < h)
          h -= l.len, l.next();
        else
          break;
      Fe(r, c, a < o.i ? o.ins : 0), s && a < o.i && Ci(s, r, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return s ? De.createSet(r, s) : ti.create(r);
      throw new Error("Mismatched change set lengths");
    }
}
function Yp(i, e, t = !1) {
  let n = [], r = t ? [] : null, s = new qr(i), o = new qr(e);
  for (let l = !1; ; ) {
    if (s.done && o.done)
      return r ? De.createSet(n, r) : ti.create(n);
    if (s.ins == 0)
      Fe(n, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done)
      Fe(n, 0, o.ins, l), r && Ci(r, n, o.text), o.next();
    else {
      if (s.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len), c = n.length;
        if (s.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Fe(n, a, h, l), r && h && Ci(r, n, o.text);
        } else
          o.ins == -1 ? (Fe(n, s.off ? 0 : s.len, a, l), r && Ci(r, n, s.textBit(a))) : (Fe(n, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), r && !o.off && Ci(r, n, o.text));
        l = (s.ins > a || o.ins >= 0 && o.len > a) && (l || n.length > c), s.forward2(a), o.forward(a);
      }
    }
  }
}
class qr {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? de.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, n = this.i - 2 >> 1;
    return n >= t.length && !e ? de.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class an {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.flags = n;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 16 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 16 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 3;
    return e == 3 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 5;
    return e == 33554431 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let n, r;
    return this.empty ? n = r = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), n == this.from && r == this.to ? this : new an(n, r, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return v.range(e, t);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return v.range(this.anchor, n);
  }
  /**
  Compare this range to another range.
  */
  eq(e) {
    return this.anchor == e.anchor && this.head == e.head;
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return v.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new an(e, t, n);
  }
}
class v {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : v.create(this.ranges.map((n) => n.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection.
  */
  eq(e) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let t = 0; t < this.ranges.length; t++)
      if (!this.ranges[t].eq(e.ranges[t]))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new v([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return v.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return n[t] = e, v.create(n, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new v(e.ranges.map((t) => an.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new v([v.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, r = 0; r < e.length; r++) {
      let s = e[r];
      if (s.empty ? s.from <= n : s.from < n)
        return v.normalized(e.slice(), t);
      n = s.to;
    }
    return new v(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, n, r) {
    return an.create(e, e, (t == 0 ? 0 : t < 0 ? 4 : 8) | (n == null ? 3 : Math.min(2, n)) | (r ?? 33554431) << 5);
  }
  /**
  Create a selection range.
  */
  static range(e, t, n, r) {
    let s = (n ?? 33554431) << 5 | (r == null ? 3 : Math.min(2, r));
    return t < e ? an.create(t, e, 24 | s) : an.create(e, t, (t > e ? 4 : 0) | s);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let n = e[t];
    e.sort((r, s) => r.from - s.from), t = e.indexOf(n);
    for (let r = 1; r < e.length; r++) {
      let s = e[r], o = e[r - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, a = Math.max(s.to, o.to);
        r <= t && t--, e.splice(--r, 2, s.anchor > s.head ? v.range(a, l) : v.range(l, a));
      }
    }
    return new v(e, t);
  }
}
function jp(i, e) {
  for (let t of i.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let $h = 0;
class j {
  constructor(e, t, n, r, s) {
    this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = r, this.id = $h++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new j(e.combine || ((t) => t), e.compareInput || ((t, n) => t === n), e.compare || (e.combine ? (t, n) => t === n : Ph), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new ao([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new ao(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new ao(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function Ph(i, e) {
  return i == e || i.length == e.length && i.every((t, n) => t === e[n]);
}
class ao {
  constructor(e, t, n, r) {
    this.dependencies = e, this.facet = t, this.type = n, this.value = r, this.id = $h++;
  }
  dynamicSlot(e) {
    var t;
    let n = this.value, r = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, a = !1, c = !1, h = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? c = !0 : ((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1 || h.push(e[f.id]);
    return {
      create(f) {
        return f.values[o] = n(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || c && (u.docChanged || u.selection) || nc(f, h)) {
          let d = n(f);
          if (l ? !iu(d, f.values[o], r) : !r(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, O = u.config.address[s];
        if (O != null) {
          let m = _o(u, O);
          if (this.dependencies.every((b) => b instanceof j ? u.facet(b) === f.facet(b) : b instanceof qe ? u.field(b, !1) == f.field(b, !1) : !0) || (l ? iu(d = n(f), m, r) : r(d = n(f), m)))
            return f.values[o] = m, 0;
        } else
          d = n(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function iu(i, e, t) {
  if (i.length != e.length)
    return !1;
  for (let n = 0; n < i.length; n++)
    if (!t(i[n], e[n]))
      return !1;
  return !0;
}
function nc(i, e) {
  let t = !1;
  for (let n of e)
    Zr(i, n) & 1 && (t = !0);
  return t;
}
function zQ(i, e, t) {
  let n = t.map((a) => i[a.id]), r = t.map((a) => a.type), s = n.filter((a) => !(a & 1)), o = i[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let h = 0; h < n.length; h++) {
      let f = _o(a, n[h]);
      if (r[h] == 2)
        for (let u of f)
          c.push(u);
      else
        c.push(f);
    }
    return e.combine(c);
  }
  return {
    create(a) {
      for (let c of n)
        Zr(a, c);
      return a.values[o] = l(a), 1;
    },
    update(a, c) {
      if (!nc(a, s))
        return 0;
      let h = l(a);
      return e.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
    },
    reconfigure(a, c) {
      let h = nc(a, n), f = c.config.facets[e.id], u = c.facet(e);
      if (f && !h && Ph(t, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const nu = /* @__PURE__ */ j.define({ static: !0 });
class qe {
  constructor(e, t, n, r, s) {
    this.id = e, this.createF = t, this.updateF = n, this.compareF = r, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new qe($h++, e.create, e.update, e.compare || ((n, r) => n === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(nu).find((n) => n.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => (n.values[t] = this.create(n), 1),
      update: (n, r) => {
        let s = n.values[t], o = this.updateF(s, r);
        return this.compareF(s, o) ? 0 : (n.values[t] = o, 1);
      },
      reconfigure: (n, r) => r.config.address[this.id] != null ? (n.values[t] = r.field(this), 0) : (n.values[t] = this.create(n), 1)
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, nu.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const rn = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function mr(i) {
  return (e) => new Up(e, i);
}
const $n = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ mr(rn.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ mr(rn.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ mr(rn.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ mr(rn.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ mr(rn.lowest)
};
class Up {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class $l {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new rc(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return $l.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class rc {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class To {
  constructor(e, t, n, r, s, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = r, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < n.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, n) {
    let r = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of GQ(e, t, o))
      u instanceof qe ? r.push(u) : (s[u.facet.id] || (s[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let u of r)
      l[u.id] = c.length << 1, c.push((d) => u.slot(d));
    let h = n == null ? void 0 : n.config.facets;
    for (let u in s) {
      let d = s[u], O = d[0].facet, m = h && h[u] || [];
      if (d.every(
        (b) => b.type == 0
        /* Provider.Static */
      ))
        if (l[O.id] = a.length << 1 | 1, Ph(m, d))
          a.push(n.facet(O));
        else {
          let b = O.combine(d.map((y) => y.value));
          a.push(n && O.compare(b, n.facet(O)) ? n.facet(O) : b);
        }
      else {
        for (let b of d)
          b.type == 0 ? (l[b.id] = a.length << 1 | 1, a.push(b.value)) : (l[b.id] = c.length << 1, c.push((y) => b.dynamicSlot(y)));
        l[O.id] = c.length << 1, c.push((b) => zQ(b, O, d));
      }
    }
    let f = c.map((u) => u(l));
    return new To(e, o, f, l, a, s);
  }
}
function GQ(i, e, t) {
  let n = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = r.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let c = n[a].indexOf(o);
      c > -1 && n[a].splice(c, 1), o instanceof rc && t.delete(o.compartment);
    }
    if (r.set(o, l), Array.isArray(o))
      for (let c of o)
        s(c, l);
    else if (o instanceof rc) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(o.compartment) || o.inner;
      t.set(o.compartment, c), s(c, l);
    } else if (o instanceof Up)
      s(o.inner, o.prec);
    else if (o instanceof qe)
      n[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof ao)
      n[l].push(o), o.facet.extensions && s(o.facet.extensions, rn.default);
    else {
      let c = o.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(c, l);
    }
  }
  return s(i, rn.default), n.reduce((o, l) => o.concat(l));
}
function Zr(i, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, n = i.status[t];
  if (n == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2)
    return n;
  i.status[t] = 4;
  let r = i.computeSlot(i, i.config.dynamicSlots[t]);
  return i.status[t] = 2 | r;
}
function _o(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const Ip = /* @__PURE__ */ j.define(), qp = /* @__PURE__ */ j.define({
  combine: (i) => i.some((e) => e),
  static: !0
}), Bp = /* @__PURE__ */ j.define({
  combine: (i) => i.length ? i[0] : void 0,
  static: !0
}), Lp = /* @__PURE__ */ j.define(), zp = /* @__PURE__ */ j.define(), Gp = /* @__PURE__ */ j.define(), Fp = /* @__PURE__ */ j.define({
  combine: (i) => i.length ? i[0] : !1
});
class zi {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new FQ();
  }
}
class FQ {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new zi(this, e);
  }
}
class HQ {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new ne(this, e);
  }
}
class ne {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new ne(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds.
  */
  static define(e = {}) {
    return new HQ(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let n = [];
    for (let r of e) {
      let s = r.map(t);
      s && n.push(s);
    }
    return n;
  }
}
ne.reconfigure = /* @__PURE__ */ ne.define();
ne.appendConfig = /* @__PURE__ */ ne.define();
class Ne {
  constructor(e, t, n, r, s, o) {
    this.startState = e, this.changes = t, this.selection = n, this.effects = r, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, n && jp(n, t.newLength), s.some((l) => l.type == Ne.time) || (this.annotations = s.concat(Ne.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, n, r, s, o) {
    return new Ne(e, t, n, r, s, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(Ne.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
Ne.time = /* @__PURE__ */ zi.define();
Ne.userEvent = /* @__PURE__ */ zi.define();
Ne.addToHistory = /* @__PURE__ */ zi.define();
Ne.remote = /* @__PURE__ */ zi.define();
function KQ(i, e) {
  let t = [];
  for (let n = 0, r = 0; ; ) {
    let s, o;
    if (n < i.length && (r == e.length || e[r] >= i[n]))
      s = i[n++], o = i[n++];
    else if (r < e.length)
      s = e[r++], o = e[r++];
    else
      return t;
    !t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Hp(i, e, t) {
  var n;
  let r, s, o;
  return t ? (r = e.changes, s = De.empty(e.changes.length), o = i.changes.compose(e.changes)) : (r = e.changes.map(i.changes), s = i.changes.mapDesc(e.changes, !0), o = i.changes.compose(r)), {
    changes: o,
    selection: e.selection ? e.selection.map(s) : (n = i.selection) === null || n === void 0 ? void 0 : n.map(r),
    effects: ne.mapEffects(i.effects, r).concat(ne.mapEffects(e.effects, s)),
    annotations: i.annotations.length ? i.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: i.scrollIntoView || e.scrollIntoView
  };
}
function sc(i, e, t) {
  let n = e.selection, r = In(e.annotations);
  return e.userEvent && (r = r.concat(Ne.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof De ? e.changes : De.of(e.changes || [], t, i.facet(Bp)),
    selection: n && (n instanceof v ? n : v.single(n.anchor, n.head)),
    effects: In(e.effects),
    annotations: r,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Kp(i, e, t) {
  let n = sc(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let o = !!e[s].sequential;
    n = Hp(n, sc(i, e[s], o ? n.changes.newLength : i.doc.length), o);
  }
  let r = Ne.create(i, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return ev(t ? JQ(r) : r);
}
function JQ(i) {
  let e = i.startState, t = !0;
  for (let r of e.facet(Lp)) {
    let s = r(i);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : KQ(t, s));
  }
  if (t !== !0) {
    let r, s;
    if (t === !1)
      s = i.changes.invertedDesc, r = De.empty(e.doc.length);
    else {
      let o = i.changes.filter(t);
      r = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    i = Ne.create(e, r, i.selection && i.selection.map(s), ne.mapEffects(i.effects, s), i.annotations, i.scrollIntoView);
  }
  let n = e.facet(zp);
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r](i);
    s instanceof Ne ? i = s : Array.isArray(s) && s.length == 1 && s[0] instanceof Ne ? i = s[0] : i = Kp(e, In(s), !1);
  }
  return i;
}
function ev(i) {
  let e = i.startState, t = e.facet(Gp), n = i;
  for (let r = t.length - 1; r >= 0; r--) {
    let s = t[r](i);
    s && Object.keys(s).length && (n = Hp(n, sc(e, s, i.changes.newLength), !0));
  }
  return n == i ? i : Ne.create(e, i.changes, i.selection, n.effects, n.annotations, n.scrollIntoView);
}
const tv = [];
function In(i) {
  return i == null ? tv : Array.isArray(i) ? i : [i];
}
var $e = /* @__PURE__ */ function(i) {
  return i[i.Word = 0] = "Word", i[i.Space = 1] = "Space", i[i.Other = 2] = "Other", i;
}($e || ($e = {}));
const iv = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let oc;
try {
  oc = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function nv(i) {
  if (oc)
    return oc.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || iv.test(t)))
      return !0;
  }
  return !1;
}
function rv(i) {
  return (e) => {
    if (!/\S/.test(e))
      return $e.Space;
    if (nv(e))
      return $e.Word;
    for (let t = 0; t < i.length; t++)
      if (e.indexOf(i[t]) > -1)
        return $e.Word;
    return $e.Other;
  };
}
class ue {
  constructor(e, t, n, r, s, o) {
    this.config = e, this.doc = t, this.selection = n, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Zr(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Zr(this, n), _o(this, n);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Kp(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: n, compartments: r } = t;
    for (let o of e.effects)
      o.is($l.reconfigure) ? (t && (r = /* @__PURE__ */ new Map(), t.compartments.forEach((l, a) => r.set(a, l)), t = null), r.set(o.value.compartment, o.value.extension)) : o.is(ne.reconfigure) ? (t = null, n = o.value) : o.is(ne.appendConfig) && (t = null, n = In(n).concat(o.value));
    let s;
    t ? s = e.startState.values.slice() : (t = To.resolve(n, r, this), s = new ue(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (l, a) => a.reconfigure(l, this), null).values), new ue(t, e.newDoc, e.newSelection, s, (o, l) => l.update(o, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: v.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, n = e(t.ranges[0]), r = this.changes(n.changes), s = [n.range], o = In(n.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), c = this.changes(a.changes), h = c.map(r);
      for (let u = 0; u < l; u++)
        s[u] = s[u].map(h);
      let f = r.mapDesc(c, !0);
      s.push(a.range.map(f)), r = r.compose(h), o = ne.mapEffects(o, h).concat(ne.mapEffects(In(a.effects), f));
    }
    return {
      changes: r,
      selection: v.create(s, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof De ? e : De.of(e, this.doc.length, this.facet(ue.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return de.of(e.split(this.facet(ue.lineSeparator) || ec));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Zr(this, t), _o(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let n in e) {
        let r = e[n];
        r instanceof qe && this.config.address[r.id] != null && (t[n] = r.spec.toJSON(this.field(e[n]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, n) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let r = [];
    if (n) {
      for (let s in n)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let o = n[s], l = e[s];
          r.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return ue.create({
      doc: e.doc,
      selection: v.fromJSON(e.selection),
      extensions: t.extensions ? r.concat([t.extensions]) : r
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = To.resolve(e.extensions || [], /* @__PURE__ */ new Map()), n = e.doc instanceof de ? e.doc : de.of((e.doc || "").split(t.staticFacet(ue.lineSeparator) || ec)), r = e.selection ? e.selection instanceof v ? e.selection : v.single(e.selection.anchor, e.selection.head) : v.single(0);
    return jp(r, n.length), t.staticFacet(qp) || (r = r.asSingle()), new ue(t, n, r, t.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(ue.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(ue.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Fp);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let n of this.facet(ue.phrases))
      if (Object.prototype.hasOwnProperty.call(n, e)) {
        e = n[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (n, r) => {
      if (r == "$")
        return "$";
      let s = +(r || 1);
      return !s || s > t.length ? n : t[s - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, n = -1) {
    let r = [];
    for (let s of this.facet(Ip))
      for (let o of s(this, t, n))
        Object.prototype.hasOwnProperty.call(o, e) && r.push(o[e]);
    return r;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return rv(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: n, length: r } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - n, l = e - n;
    for (; o > 0; ) {
      let a = lt(t, o, !1);
      if (s(t.slice(a, o)) != $e.Word)
        break;
      o = a;
    }
    for (; l < r; ) {
      let a = lt(t, l);
      if (s(t.slice(l, a)) != $e.Word)
        break;
      l = a;
    }
    return o == l ? null : v.range(o + n, l + n);
  }
}
ue.allowMultipleSelections = qp;
ue.tabSize = /* @__PURE__ */ j.define({
  combine: (i) => i.length ? i[0] : 4
});
ue.lineSeparator = Bp;
ue.readOnly = Fp;
ue.phrases = /* @__PURE__ */ j.define({
  compare(i, e) {
    let t = Object.keys(i), n = Object.keys(e);
    return t.length == n.length && t.every((r) => i[r] == e[r]);
  }
});
ue.languageData = Ip;
ue.changeFilter = Lp;
ue.transactionFilter = zp;
ue.transactionExtender = Gp;
$l.reconfigure = /* @__PURE__ */ ne.define();
function ri(i, e, t = {}) {
  let n = {};
  for (let r of i)
    for (let s of Object.keys(r)) {
      let o = r[s], l = n[s];
      if (l === void 0)
        n[s] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(t, s))
          n[s] = t[s](l, o);
        else
          throw new Error("Config merge conflict for field " + s);
    }
  for (let r in e)
    n[r] === void 0 && (n[r] = e[r]);
  return n;
}
class Sn {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return Xo.create(e, t, this);
  }
}
Sn.prototype.startSide = Sn.prototype.endSide = 0;
Sn.prototype.point = !1;
Sn.prototype.mapMode = Ge.TrackDel;
let Xo = class {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.value = n;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Xo(e, t, n);
  }
};
function lc(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class kh {
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.value = n, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, n, r = 0) {
    let s = n ? this.to : this.from;
    for (let o = r, l = s.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, c = s[a] - e || (n ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return c >= 0 ? o : l;
      c >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, n, r) {
    for (let s = this.findIndex(t, -1e9, !0), o = this.findIndex(n, 1e9, !1, s); s < o; s++)
      if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, t) {
    let n = [], r = [], s = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let c = this.value[a], h = this.from[a] + e, f = this.to[a] + e, u, d;
      if (h == f) {
        let O = t.mapPos(h, c.startSide, c.mapMode);
        if (O == null || (u = d = O, c.startSide != c.endSide && (d = t.mapPos(h, c.endSide), d < u)))
          continue;
      } else if (u = t.mapPos(h, c.startSide), d = t.mapPos(f, c.endSide), u > d || u == d && c.startSide > 0 && c.endSide <= 0)
        continue;
      (d - u || c.endSide - c.startSide) < 0 || (o < 0 && (o = u), c.point && (l = Math.max(l, d - u)), n.push(c), r.push(u - o), s.push(d - o));
    }
    return { mapped: n.length ? new kh(r, s, n, l) : null, pos: o };
  }
}
class pe {
  constructor(e, t, n, r) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = r;
  }
  /**
  @internal
  */
  static create(e, t, n, r) {
    return new pe(e, t, n, r);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: n = !1, filterFrom: r = 0, filterTo: s = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (n && (t = t.slice().sort(lc)), this.isEmpty)
      return t.length ? pe.of(t) : this;
    let l = new Jp(this, null, -1).goto(0), a = 0, c = [], h = new ji();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        h.addInner(f.from, f.to, f.value) || c.push(f);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || r > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || r > l.to || s < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || c.push(Xo.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? pe.empty : this.nextLayer.update({ add: c, filter: o, filterFrom: r, filterTo: s }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], n = [], r = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], c = e.touchesRange(l, l + a.length);
      if (c === !1)
        r = Math.max(r, a.maxPoint), t.push(a), n.push(e.mapPos(l));
      else if (c === !0) {
        let { mapped: h, pos: f } = a.map(l, e);
        h && (r = Math.max(r, h.maxPoint), t.push(h), n.push(f));
      }
    }
    let s = this.nextLayer.map(e);
    return t.length == 0 ? s : new pe(n, t, s || pe.empty, r);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let s = this.chunkPos[r], o = this.chunk[r];
        if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, n) === !1)
          return;
      }
      this.nextLayer.between(e, t, n);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return Br.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return Br.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, n, r, s = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= s), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= s), a = ru(o, l, n), c = new gr(o, a, s), h = new gr(l, a, s);
    n.iterGaps((f, u, d) => su(c, f, h, u, d, r)), n.empty && n.length == 0 && su(c, 0, h, 0, 0, r);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, n = 0, r) {
    r == null && (r = 1e9 - 1);
    let s = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (s.length != o.length)
      return !1;
    if (!s.length)
      return !0;
    let l = ru(s, o), a = new gr(s, l, 0).goto(n), c = new gr(o, l, 0).goto(n);
    for (; ; ) {
      if (a.to != c.to || !ac(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point)))
        return !1;
      if (a.to > r)
        return !0;
      a.next(), c.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, n, r, s = -1) {
    let o = new gr(e, null, s).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let c = Math.min(o.to, n);
      if (o.point) {
        let h = o.activeForPoint(o.to), f = o.pointFrom < t ? h.length + 1 : Math.min(h.length, a);
        r.point(l, c, o.point, h, f, o.pointRank), a = Math.min(o.openEnd(c), h.length);
      } else
        c > l && (r.span(l, c, o.active, a), a = o.openEnd(c));
      if (o.to > n)
        return a + (o.point && o.to > n ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let n = new ji();
    for (let r of e instanceof Xo ? [e] : t ? sv(e) : e)
      n.add(r.from, r.to, r.value);
    return n.finish();
  }
}
pe.empty = /* @__PURE__ */ new pe([], [], null, -1);
function sv(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let n = i[t];
      if (lc(e, n) > 0)
        return i.slice().sort(lc);
      e = n;
    }
  return i;
}
pe.empty.nextLayer = pe.empty;
class ji {
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  finishChunk(e) {
    this.chunks.push(new kh(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, n) {
    this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new ji())).add(e, t, n);
  }
  /**
  @internal
  */
  addInner(e, t, n) {
    let r = e - this.lastTo || n.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let n = t.value.length - 1;
    return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(pe.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = pe.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function ru(i, e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let s of i)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && n.set(s.chunk[o], s.chunkPos[o]);
  let r = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = n.get(s.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == s.chunkPos[o] && !(t != null && t.touchesRange(l, l + s.chunk[o].length)) && r.add(s.chunk[o]);
    }
  return r;
}
class Jp {
  constructor(e, t, n, r = 0) {
    this.layer = e, this.skip = t, this.minPoint = n, this.rank = r;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, n = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!n || this.rangeIndex < r) && this.setRangeIndex(r);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], n = e + t.from[this.rangeIndex];
        if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Br {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let r = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && r.push(new Jp(o, t, n, s));
    return r.length == 1 ? r[0] : new Br(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap)
      n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Jl(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap)
      n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Jl(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Jl(this.heap, 0);
    }
  }
}
function Jl(i, e) {
  for (let t = i[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= i.length)
      break;
    let r = i[n];
    if (n + 1 < i.length && r.compare(i[n + 1]) >= 0 && (r = i[n + 1], n++), t.compare(r) < 0)
      break;
    i[n] = t, i[e] = r, e = n;
  }
}
class gr {
  constructor(e, t, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Br.from(e, t, n);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    _s(this.active, e), _s(this.activeTo, e), _s(this.activeRank, e), this.minActive = ou(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: n, to: r, rank: s } = this.cursor;
    for (; t < this.activeRank.length && this.activeRank[t] <= s; )
      t++;
    Xs(this.active, t, n), Xs(this.activeTo, t, r), Xs(this.activeRank, t, s), e && Xs(e, t, this.cursor.from), this.minActive = ou(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), n && _s(n, r);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(n), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let r = n.length - 1; r >= 0 && n[r] < e; r--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--)
      (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)
      t++;
    return t;
  }
}
function su(i, e, t, n, r, s) {
  i.goto(e), t.goto(n);
  let o = n + r, l = n, a = n - e;
  for (; ; ) {
    let c = i.to + a - t.to || i.endSide - t.endSide, h = c < 0 ? i.to + a : t.to, f = Math.min(h, o);
    if (i.point || t.point ? i.point && t.point && (i.point == t.point || i.point.eq(t.point)) && ac(i.activeForPoint(i.to + a), t.activeForPoint(t.to)) || s.comparePoint(l, f, i.point, t.point) : f > l && !ac(i.active, t.active) && s.compareRange(l, f, i.active, t.active), h > o)
      break;
    l = h, c <= 0 && i.next(), c >= 0 && t.next();
  }
}
function ac(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] != e[t] && !i[t].eq(e[t]))
      return !1;
  return !0;
}
function _s(i, e) {
  for (let t = e, n = i.length - 1; t < n; t++)
    i[t] = i[t + 1];
  i.pop();
}
function Xs(i, e, t) {
  for (let n = i.length - 1; n >= e; n--)
    i[n + 1] = i[n];
  i[e] = t;
}
function ou(i, e) {
  let t = -1, n = 1e9;
  for (let r = 0; r < e.length; r++)
    (e[r] - n || i[r].endSide - i[t].endSide) < 0 && (t = r, n = e[r]);
  return t;
}
function ps(i, e, t = i.length) {
  let n = 0;
  for (let r = 0; r < t; )
    i.charCodeAt(r) == 9 ? (n += e - n % e, r++) : (n++, r = lt(i, r));
  return n;
}
function cc(i, e, t, n) {
  for (let r = 0, s = 0; ; ) {
    if (s >= e)
      return r;
    if (r == i.length)
      break;
    s += i.charCodeAt(r) == 9 ? t - s % t : 1, r = lt(i, r);
  }
  return n === !0 ? -1 : i.length;
}
const hc = "ͼ", lu = typeof Symbol > "u" ? "__" + hc : Symbol.for(hc), fc = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), au = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Ui {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: n } = t || {};
    function r(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function s(o, l, a, c) {
      let h = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null)
        return a.push(o[0] + ";");
      for (let d in l) {
        let O = l[d];
        if (/&/.test(d))
          s(
            d.split(/,\s*/).map((m) => o.map((b) => m.replace(/&/, b))).reduce((m, b) => m.concat(b)),
            O,
            a
          );
        else if (O && typeof O == "object") {
          if (!f)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          s(r(d), O, h, u);
        } else
          O != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + O + ";");
      }
      (h.length || u) && a.push((n && !f && !c ? o.map(n) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in e)
      s(r(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = au[lu] || 1;
    return au[lu] = e + 1, hc + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>)
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  static mount(e, t) {
    (e[fc] || new ov(e)).mount(Array.isArray(t) ? t : [t]);
  }
}
let As = null;
class ov {
  constructor(e) {
    if (!e.head && e.adoptedStyleSheets && typeof CSSStyleSheet < "u") {
      if (As)
        return e.adoptedStyleSheets = [As.sheet].concat(e.adoptedStyleSheets), e[fc] = As;
      this.sheet = new CSSStyleSheet(), e.adoptedStyleSheets = [this.sheet].concat(e.adoptedStyleSheets), As = this;
    } else {
      this.styleTag = (e.ownerDocument || e).createElement("style");
      let t = e.head || e;
      t.insertBefore(this.styleTag, t.firstChild);
    }
    this.modules = [], e[fc] = this;
  }
  mount(e) {
    let t = this.sheet, n = 0, r = 0;
    for (let s = 0; s < e.length; s++) {
      let o = e[s], l = this.modules.indexOf(o);
      if (l < r && l > -1 && (this.modules.splice(l, 1), r--, l = -1), l == -1) {
        if (this.modules.splice(r++, 0, o), t)
          for (let a = 0; a < o.rules.length; a++)
            t.insertRule(o.rules[a], n++);
      } else {
        for (; r < l; )
          n += this.modules[r++].rules.length;
        n += o.rules.length, r++;
      }
    }
    if (!t) {
      let s = "";
      for (let o = 0; o < this.modules.length; o++)
        s += this.modules[o].getRules() + `
`;
      this.styleTag.textContent = s;
    }
  }
}
var Ii = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Lr = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, cu = typeof navigator < "u" && /Chrome\/(\d+)/.exec(navigator.userAgent), lv = typeof navigator < "u" && /Mac/.test(navigator.platform), av = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), cv = lv || cu && +cu[1] < 57;
for (var ze = 0; ze < 10; ze++)
  Ii[48 + ze] = Ii[96 + ze] = String(ze);
for (var ze = 1; ze <= 24; ze++)
  Ii[ze + 111] = "F" + ze;
for (var ze = 65; ze <= 90; ze++)
  Ii[ze] = String.fromCharCode(ze + 32), Lr[ze] = String.fromCharCode(ze);
for (var ea in Ii)
  Lr.hasOwnProperty(ea) || (Lr[ea] = Ii[ea]);
function hv(i) {
  var e = cv && (i.ctrlKey || i.altKey || i.metaKey) || av && i.shiftKey && i.key && i.key.length == 1 || i.key == "Unidentified", t = !e && i.key || (i.shiftKey ? Lr : Ii)[i.keyCode] || i.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function Ao(i) {
  let e;
  return i.nodeType == 11 ? e = i.getSelection ? i : i.ownerDocument : e = i, e.getSelection();
}
function Hn(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function fv(i) {
  let e = i.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function co(i, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Hn(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function zr(i) {
  return i.nodeType == 3 ? Kn(i, 0, i.nodeValue.length).getClientRects() : i.nodeType == 1 ? i.getClientRects() : [];
}
function Vo(i, e, t, n) {
  return t ? hu(i, e, t, n, -1) || hu(i, e, t, n, 1) : !1;
}
function Eo(i) {
  for (var e = 0; ; e++)
    if (i = i.previousSibling, !i)
      return e;
}
function hu(i, e, t, n, r) {
  for (; ; ) {
    if (i == t && e == n)
      return !0;
    if (e == (r < 0 ? 0 : Gr(i))) {
      if (i.nodeName == "DIV")
        return !1;
      let s = i.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = Eo(i) + (r < 0 ? 0 : 1), i = s;
    } else if (i.nodeType == 1) {
      if (i = i.childNodes[e + (r < 0 ? -1 : 0)], i.nodeType == 1 && i.contentEditable == "false")
        return !1;
      e = r < 0 ? Gr(i) : 0;
    } else
      return !1;
  }
}
function Gr(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
const em = { left: 0, right: 0, top: 0, bottom: 0 };
function Ch(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function uv(i) {
  return {
    left: 0,
    right: i.innerWidth,
    top: 0,
    bottom: i.innerHeight
  };
}
function dv(i, e, t, n, r, s, o, l) {
  let a = i.ownerDocument, c = a.defaultView || window;
  for (let h = i; h; )
    if (h.nodeType == 1) {
      let f, u = h == a.body;
      if (u)
        f = uv(c);
      else {
        if (h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let m = h.getBoundingClientRect();
        f = {
          left: m.left,
          right: m.left + h.clientWidth,
          top: m.top,
          bottom: m.top + h.clientHeight
        };
      }
      let d = 0, O = 0;
      if (r == "nearest")
        e.top < f.top ? (O = -(f.top - e.top + o), t > 0 && e.bottom > f.bottom + O && (O = e.bottom - f.bottom + O + o)) : e.bottom > f.bottom && (O = e.bottom - f.bottom + o, t < 0 && e.top - O < f.top && (O = -(f.top + O - e.top + o)));
      else {
        let m = e.bottom - e.top, b = f.bottom - f.top;
        O = (r == "center" && m <= b ? e.top + m / 2 - b / 2 : r == "start" || r == "center" && t < 0 ? e.top - o : e.bottom - b + o) - f.top;
      }
      if (n == "nearest" ? e.left < f.left ? (d = -(f.left - e.left + s), t > 0 && e.right > f.right + d && (d = e.right - f.right + d + s)) : e.right > f.right && (d = e.right - f.right + s, t < 0 && e.left < f.left + d && (d = -(f.left + d - e.left + s))) : d = (n == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : n == "start" == l ? e.left - s : e.right - (f.right - f.left) + s) - f.left, d || O)
        if (u)
          c.scrollBy(d, O);
        else {
          let m = 0, b = 0;
          if (O) {
            let y = h.scrollTop;
            h.scrollTop += O, b = h.scrollTop - y;
          }
          if (d) {
            let y = h.scrollLeft;
            h.scrollLeft += d, m = h.scrollLeft - y;
          }
          e = {
            left: e.left - m,
            top: e.top - b,
            right: e.right - m,
            bottom: e.bottom - b
          }, m && Math.abs(m - d) < 1 && (n = "nearest"), b && Math.abs(b - O) < 1 && (r = "nearest");
        }
      if (u)
        break;
      h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function Ov(i) {
  let e = i.ownerDocument;
  for (let t = i.parentNode; t && t != e.body; )
    if (t.nodeType == 1) {
      if (t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth)
        return t;
      t = t.assignedSlot || t.parentNode;
    } else if (t.nodeType == 11)
      t = t.host;
    else
      break;
  return null;
}
class pv {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    this.set(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset);
  }
  set(e, t, n, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = r;
  }
}
let _n = null;
function tm(i) {
  if (i.setActive)
    return i.setActive();
  if (_n)
    return i.focus(_n);
  let e = [];
  for (let t = i; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (i.focus(_n == null ? {
    get preventScroll() {
      return _n = { preventScroll: !0 }, !0;
    }
  } : void 0), !_n) {
    _n = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++], r = e[t++], s = e[t++];
      n.scrollTop != r && (n.scrollTop = r), n.scrollLeft != s && (n.scrollLeft = s);
    }
  }
}
let fu;
function Kn(i, e, t = e) {
  let n = fu || (fu = document.createRange());
  return n.setEnd(i, t), n.setStart(i, e), n;
}
function qn(i, e, t) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 }, r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, i.dispatchEvent(r);
  let s = new KeyboardEvent("keyup", n);
  return s.synthetic = !0, i.dispatchEvent(s), r.defaultPrevented || s.defaultPrevented;
}
function mv(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || i.nodeType == 11 && i.host))
      return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function im(i) {
  for (; i.attributes.length; )
    i.removeAttributeNode(i.attributes[0]);
}
function gv(i, e) {
  let t = e.focusNode, n = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != n)
    return !1;
  for (; ; )
    if (n) {
      if (t.nodeType != 1)
        return !1;
      let r = t.childNodes[n - 1];
      r.contentEditable == "false" ? n-- : (t = r, n = Gr(t));
    } else {
      if (t == i)
        return !0;
      n = Eo(t), t = t.parentNode;
    }
}
class Ke {
  constructor(e, t, n = !0) {
    this.node = e, this.offset = t, this.precise = n;
  }
  static before(e, t) {
    return new Ke(e.parentNode, Eo(e), t);
  }
  static after(e, t) {
    return new Ke(e.parentNode, Eo(e) + 1, t);
  }
}
const Th = [];
class xe {
  constructor() {
    this.parent = null, this.dom = null, this.dirty = 2;
  }
  get editorView() {
    if (!this.parent)
      throw new Error("Accessing view in orphan content view");
    return this.parent.editorView;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let n of this.children) {
      if (n == e)
        return t;
      t += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  // Will return a rectangle directly before (when side < 0), after
  // (side > 0) or directly on (when the browser supports it) the
  // given position.
  coordsAt(e, t) {
    return null;
  }
  sync(e) {
    if (this.dirty & 2) {
      let t = this.dom, n = null, r;
      for (let s of this.children) {
        if (s.dirty) {
          if (!s.dom && (r = n ? n.nextSibling : t.firstChild)) {
            let o = xe.get(r);
            (!o || !o.parent && o.canReuseDOM(s)) && s.reuseDOM(r);
          }
          s.sync(e), s.dirty = 0;
        }
        if (r = n ? n.nextSibling : t.firstChild, e && !e.written && e.node == t && r != s.dom && (e.written = !0), s.dom.parentNode == t)
          for (; r && r != s.dom; )
            r = uu(r);
        else
          t.insertBefore(s.dom, r);
        n = s.dom;
      }
      for (r = n ? n.nextSibling : t.firstChild, r && e && e.node == t && (e.written = !0); r; )
        r = uu(r);
    } else if (this.dirty & 1)
      for (let t of this.children)
        t.dirty && (t.sync(e), t.dirty = 0);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let n;
    if (e == this.dom)
      n = this.dom.childNodes[t];
    else {
      let r = Gr(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let s = e.parentNode;
        if (s == this.dom)
          break;
        r == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? r = -1 : r = 1), e = s;
      }
      r < 0 ? n = e : n = e.nextSibling;
    }
    if (n == this.dom.firstChild)
      return 0;
    for (; n && !xe.get(n); )
      n = n.nextSibling;
    if (!n)
      return this.length;
    for (let r = 0, s = 0; ; r++) {
      let o = this.children[r];
      if (o.dom == n)
        return s;
      s += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, n = 0) {
    let r = -1, s = -1, o = -1, l = -1;
    for (let a = 0, c = n, h = n; a < this.children.length; a++) {
      let f = this.children[a], u = c + f.length;
      if (c < e && u > t)
        return f.domBoundsAround(e, t, c);
      if (u >= e && r == -1 && (r = a, s = c), c > t && f.dom.parentNode == this.dom) {
        o = a, l = h;
        break;
      }
      h = u, c = u + f.breakAfter;
    }
    return {
      from: s,
      to: l < 0 ? n + this.length : l,
      startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(e = !1) {
    this.dirty |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.dirty |= 2), t.dirty & 1)
        return;
      t.dirty |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.dirty && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this;
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, n = Th) {
    this.markDirty();
    for (let r = e; r < t; r++) {
      let s = this.children[r];
      s.parent == this && s.destroy();
    }
    this.children.splice(e, t - e, ...n);
    for (let r = 0; r < n.length; r++)
      n[r].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new nm(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  merge(e, t, n, r, s, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor;
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    this.parent = null;
  }
}
xe.prototype.breakAfter = 0;
function uu(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class nm {
  constructor(e, t, n) {
    this.children = e, this.pos = t, this.i = n, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let n = this.children[--this.i];
      this.pos -= n.length + n.breakAfter;
    }
  }
}
function rm(i, e, t, n, r, s, o, l, a) {
  let { children: c } = i, h = c.length ? c[e] : null, f = s.length ? s[s.length - 1] : null, u = f ? f.breakAfter : o;
  if (!(e == n && h && !o && !u && s.length < 2 && h.merge(t, r, s.length ? f : null, t == 0, l, a))) {
    if (n < c.length) {
      let d = c[n];
      d && r < d.length ? (e == n && (d = d.split(r), r = 0), !u && f && d.merge(0, r, f, !0, 0, a) ? s[s.length - 1] = d : (r && d.merge(0, r, null, !1, 0, a), s.push(d))) : d != null && d.breakAfter && (f ? f.breakAfter = 1 : o = 1), n++;
    }
    for (h && (h.breakAfter = o, t > 0 && (!o && s.length && h.merge(t, h.length, s[0], !1, l, 0) ? h.breakAfter = s.shift().breakAfter : (t < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(t, h.length, null, !1, l, 0), e++)); e < n && s.length; )
      if (c[n - 1].become(s[s.length - 1]))
        n--, s.pop(), a = s.length ? 0 : l;
      else if (c[e].become(s[0]))
        e++, s.shift(), l = s.length ? 0 : a;
      else
        break;
    !s.length && e && n < c.length && !c[e - 1].breakAfter && c[n].merge(0, 0, c[e - 1], !1, l, a) && e--, (e < n || s.length) && i.replaceChildren(e, n, s);
  }
}
function sm(i, e, t, n, r, s) {
  let o = i.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: c, off: h } = o.findPos(e, -1), f = e - t;
  for (let u of n)
    f += u.length;
  i.length += f, rm(i, c, h, l, a, n, 0, r, s);
}
let Qt = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, uc = typeof document < "u" ? document : { documentElement: { style: {} } };
const dc = /* @__PURE__ */ /Edge\/(\d+)/.exec(Qt.userAgent), om = /* @__PURE__ */ /MSIE \d/.test(Qt.userAgent), Oc = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Qt.userAgent), Pl = !!(om || Oc || dc), du = !Pl && /* @__PURE__ */ /gecko\/(\d+)/i.test(Qt.userAgent), ta = !Pl && /* @__PURE__ */ /Chrome\/(\d+)/.exec(Qt.userAgent), Ou = "webkitFontSmoothing" in uc.documentElement.style, lm = !Pl && /* @__PURE__ */ /Apple Computer/.test(Qt.vendor), pu = lm && (/* @__PURE__ */ /Mobile\/\w+/.test(Qt.userAgent) || Qt.maxTouchPoints > 2);
var Y = {
  mac: pu || /* @__PURE__ */ /Mac/.test(Qt.platform),
  windows: /* @__PURE__ */ /Win/.test(Qt.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(Qt.platform),
  ie: Pl,
  ie_version: om ? uc.documentMode || 6 : Oc ? +Oc[1] : dc ? +dc[1] : 0,
  gecko: du,
  gecko_version: du ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(Qt.userAgent) || [0, 0])[1] : 0,
  chrome: !!ta,
  chrome_version: ta ? +ta[1] : 0,
  ios: pu,
  android: /* @__PURE__ */ /Android\b/.test(Qt.userAgent),
  webkit: Ou,
  safari: lm,
  webkit_version: Ou ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: uc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const bv = 256;
class qi extends xe {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, n) {
    return n && (!(n instanceof qi) || this.length - (t - e) + n.length > bv) ? !1 : (this.text = this.text.slice(0, e) + (n ? n.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new qi(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new Ke(this.dom, e);
  }
  domBoundsAround(e, t, n) {
    return { from: n, to: n + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return pc(this.dom, e, t);
  }
}
class ni extends xe {
  constructor(e, t = [], n = 0) {
    super(), this.mark = e, this.children = t, this.length = n;
    for (let r of t)
      r.setParent(this);
  }
  setAttrs(e) {
    if (im(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.dirty |= 6);
  }
  sync(e) {
    this.dom ? this.dirty & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e);
  }
  merge(e, t, n, r, s, o) {
    return n && (!(n instanceof ni && n.mark.eq(this.mark)) || e && s <= 0 || t < this.length && o <= 0) ? !1 : (sm(this, e, t, n ? n.children : [], s - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], n = 0, r = -1, s = 0;
    for (let l of this.children) {
      let a = n + l.length;
      a > e && t.push(n < e ? l.split(e - n) : l), r < 0 && n >= e && (r = s), n = a, s++;
    }
    let o = this.length - e;
    return this.length = e, r > -1 && (this.children.length = r, this.markDirty()), new ni(this.mark, t, o);
  }
  domAtPos(e) {
    return hm(this, e);
  }
  coordsAt(e, t) {
    return um(this, e, t);
  }
}
function pc(i, e, t) {
  let n = i.nodeValue.length;
  e > n && (e = n);
  let r = e, s = e, o = 0;
  e == 0 && t < 0 || e == n && t >= 0 ? Y.chrome || Y.gecko || (e ? (r--, o = 1) : s < n && (s++, o = -1)) : t < 0 ? r-- : s < n && s++;
  let l = Kn(i, r, s).getClientRects();
  if (!l.length)
    return em;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return Y.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), o ? Ch(a, o < 0) : a || null;
}
class Ti extends xe {
  constructor(e, t, n) {
    super(), this.widget = e, this.length = t, this.side = n, this.prevWidget = null;
  }
  static create(e, t, n) {
    return new (e.customView || Ti)(e, t, n);
  }
  split(e) {
    let t = Ti.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync() {
    (!this.dom || !this.widget.updateDOM(this.dom)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(this.editorView)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(e, t, n, r, s, o) {
    return n && (!(n instanceof Ti) || !this.widget.compare(n.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (n ? n.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e.length == this.length && e instanceof Ti && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.eq(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return de.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let t = e.editorView, n = t && t.state.doc, r = this.posAtStart;
    return n ? n.slice(r, r + this.length) : de.empty;
  }
  domAtPos(e) {
    return e == 0 ? Ke.before(this.dom) : Ke.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let n = this.dom.getClientRects(), r = null;
    if (!n.length)
      return em;
    for (let s = e > 0 ? n.length - 1 : 0; r = n[s], !(e > 0 ? s == 0 : s == n.length - 1 || r.top < r.bottom); s += e > 0 ? -1 : 1)
      ;
    return this.length ? r : Ch(r, this.side > 0);
  }
  get isEditable() {
    return !1;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class am extends Ti {
  domAtPos(e) {
    let { topView: t, text: n } = this.widget;
    return t ? mc(e, 0, t, n, (r, s) => r.domAtPos(s), (r) => new Ke(n, Math.min(r, n.nodeValue.length))) : new Ke(n, Math.min(e, n.nodeValue.length));
  }
  sync() {
    this.setDOM(this.widget.toDOM());
  }
  localPosFromDOM(e, t) {
    let { topView: n, text: r } = this.widget;
    return n ? cm(e, t, n, r) : Math.min(t, this.length);
  }
  ignoreMutation() {
    return !1;
  }
  get overrideDOMText() {
    return null;
  }
  coordsAt(e, t) {
    let { topView: n, text: r } = this.widget;
    return n ? mc(e, t, n, r, (s, o, l) => s.coordsAt(o, l), (s, o) => pc(r, s, o)) : pc(r, e, t);
  }
  destroy() {
    var e;
    super.destroy(), (e = this.widget.topView) === null || e === void 0 || e.destroy();
  }
  get isEditable() {
    return !0;
  }
  canReuseDOM() {
    return !0;
  }
}
function mc(i, e, t, n, r, s) {
  if (t instanceof ni) {
    for (let o = t.dom.firstChild; o; o = o.nextSibling) {
      let l = xe.get(o);
      if (!l)
        return s(i, e);
      let a = Hn(o, n), c = l.length + (a ? n.nodeValue.length : 0);
      if (i < c || i == c && l.getSide() <= 0)
        return a ? mc(i, e, l, n, r, s) : r(l, i, e);
      i -= c;
    }
    return r(t, t.length, -1);
  } else
    return t.dom == n ? s(i, e) : r(t, i, e);
}
function cm(i, e, t, n) {
  if (t instanceof ni)
    for (let r of t.children) {
      let s = 0, o = Hn(r.dom, n);
      if (Hn(r.dom, i))
        return s + (o ? cm(i, e, r, n) : r.localPosFromDOM(i, e));
      s += o ? n.nodeValue.length : r.length;
    }
  else if (t.dom == n)
    return Math.min(e, n.nodeValue.length);
  return t.localPosFromDOM(i, e);
}
class Jn extends xe {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof Jn && e.side == this.side;
  }
  split() {
    return new Jn(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return Ke.before(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    let t = this.dom.getBoundingClientRect(), n = Sv(this, this.side > 0 ? -1 : 1);
    return n && n.top < t.bottom && n.bottom > t.top ? { left: t.left, right: t.right, top: n.top, bottom: n.bottom } : t;
  }
  get overrideDOMText() {
    return de.empty;
  }
}
qi.prototype.children = Ti.prototype.children = Jn.prototype.children = Th;
function Sv(i, e) {
  let t = i.parent, n = t ? t.children.indexOf(i) : -1;
  for (; t && n >= 0; )
    if (e < 0 ? n > 0 : n < t.children.length) {
      let r = t.children[n + e];
      if (r instanceof qi) {
        let s = r.coordsAt(e < 0 ? r.length : 0, e);
        if (s)
          return s;
      }
      n += e;
    } else if (t instanceof ni && t.parent)
      n = t.parent.children.indexOf(t) + (e < 0 ? 0 : 1), t = t.parent;
    else {
      let r = t.dom.lastChild;
      if (r && r.nodeName == "BR")
        return r.getClientRects()[0];
      break;
    }
}
function hm(i, e) {
  let t = i.dom, { children: n } = i, r = 0;
  for (let s = 0; r < n.length; r++) {
    let o = n[r], l = s + o.length;
    if (!(l == s && o.getSide() <= 0)) {
      if (e > s && e < l && o.dom.parentNode == t)
        return o.domAtPos(e - s);
      if (e <= s)
        break;
      s = l;
    }
  }
  for (let s = r; s > 0; s--) {
    let o = n[s - 1];
    if (o.dom.parentNode == t)
      return o.domAtPos(o.length);
  }
  for (let s = r; s < n.length; s++) {
    let o = n[s];
    if (o.dom.parentNode == t)
      return o.domAtPos(0);
  }
  return new Ke(t, 0);
}
function fm(i, e, t) {
  let n, { children: r } = i;
  t > 0 && e instanceof ni && r.length && (n = r[r.length - 1]) instanceof ni && n.mark.eq(e.mark) ? fm(n, e.children[0], t - 1) : (r.push(e), e.setParent(i)), i.length += e.length;
}
function um(i, e, t) {
  let n = null, r = -1, s = null, o = -1;
  function l(c, h) {
    for (let f = 0, u = 0; f < c.children.length && u <= h; f++) {
      let d = c.children[f], O = u + d.length;
      O >= h && (d.children.length ? l(d, h - u) : !s && (O > h || u == O && d.getSide() > 0) ? (s = d, o = h - u) : (u < h || u == O && d.getSide() < 0) && (n = d, r = h - u)), u = O;
    }
  }
  l(i, e);
  let a = (t < 0 ? n : s) || n || s;
  return a ? a.coordsAt(Math.max(0, a == n ? r : o), t) : yv(i);
}
function yv(i) {
  let e = i.dom.lastChild;
  if (!e)
    return i.dom.getBoundingClientRect();
  let t = zr(e);
  return t[t.length - 1] || null;
}
function gc(i, e) {
  for (let t in i)
    t == "class" && e.class ? e.class += " " + i.class : t == "style" && e.style ? e.style += ";" + i.style : e[t] = i[t];
  return e;
}
function _h(i, e) {
  if (i == e)
    return !0;
  if (!i || !e)
    return !1;
  let t = Object.keys(i), n = Object.keys(e);
  if (t.length != n.length)
    return !1;
  for (let r of t)
    if (n.indexOf(r) == -1 || i[r] !== e[r])
      return !1;
  return !0;
}
function bc(i, e, t) {
  let n = null;
  if (e)
    for (let r in e)
      t && r in t || i.removeAttribute(n = r);
  if (t)
    for (let r in t)
      e && e[r] == t[r] || i.setAttribute(n = r, t[r]);
  return !!n;
}
class gi {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  @internal
  */
  get customView() {
    return null;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var Qe = /* @__PURE__ */ function(i) {
  return i[i.Text = 0] = "Text", i[i.WidgetBefore = 1] = "WidgetBefore", i[i.WidgetAfter = 2] = "WidgetAfter", i[i.WidgetRange = 3] = "WidgetRange", i;
}(Qe || (Qe = {}));
class L extends Sn {
  constructor(e, t, n, r) {
    super(), this.startSide = e, this.endSide = t, this.widget = n, this.spec = r;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new kl(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = e.side || 0, n = !!e.block;
    return t += n ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new yn(e, t, t, n, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, n, r;
    if (e.isBlockGap)
      n = -5e8, r = 4e8;
    else {
      let { start: s, end: o } = dm(e, t);
      n = (s ? t ? -3e8 : -1 : 5e8) - 1, r = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new yn(e, n, r, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new ms(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return pe.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
L.none = pe.empty;
class kl extends L {
  constructor(e) {
    let { start: t, end: n } = dm(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    return this == e || e instanceof kl && this.tagName == e.tagName && this.class == e.class && _h(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
kl.prototype.point = !1;
class ms extends L {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof ms && this.spec.class == e.spec.class && _h(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
ms.prototype.mapMode = Ge.TrackBefore;
ms.prototype.point = !0;
class yn extends L {
  constructor(e, t, n, r, s, o) {
    super(t, n, s, e), this.block = r, this.isReplace = o, this.mapMode = r ? t <= 0 ? Ge.TrackBefore : Ge.TrackAfter : Ge.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide < this.endSide ? Qe.WidgetRange : this.startSide <= 0 ? Qe.WidgetBefore : Qe.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && this.widget.estimatedHeight >= 5;
  }
  eq(e) {
    return e instanceof yn && Qv(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
yn.prototype.point = !0;
function dm(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = i;
  return t == null && (t = i.inclusive), n == null && (n = i.inclusive), { start: t ?? e, end: n ?? e };
}
function Qv(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function Sc(i, e, t, n = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + n >= i ? t[r] = Math.max(t[r], e) : t.push(i, e);
}
class at extends xe {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, n, r, s, o) {
    if (n) {
      if (!(n instanceof at))
        return !1;
      this.dom || n.transferDOM(this);
    }
    return r && this.setDeco(n ? n.attrs : null), sm(this, e, t, n ? n.children : [], s, o), !0;
  }
  split(e) {
    let t = new at();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i: n, off: r } = this.childPos(e);
    r && (t.append(this.children[n].split(r), 0), this.children[n].merge(r, this.children[n].length, null, !1, 0, 0), n++);
    for (let s = n; s < this.children.length; s++)
      t.append(this.children[s], 0);
    for (; n > 0 && this.children[n - 1].length == 0; )
      this.children[--n].destroy();
    return this.children.length = n, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    _h(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    fm(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, n = e.spec.class;
    t && (this.attrs = gc(t, this.attrs || {})), n && (this.attrs = gc({ class: n }, this.attrs || {}));
  }
  domAtPos(e) {
    return hm(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.dirty |= 6);
  }
  sync(e) {
    var t;
    this.dom ? this.dirty & 4 && (im(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (bc(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e);
    let n = this.dom.lastChild;
    for (; n && xe.get(n) instanceof ni; )
      n = n.lastChild;
    if (!n || !this.length || n.nodeName != "BR" && ((t = xe.get(n)) === null || t === void 0 ? void 0 : t.isEditable) == !1 && (!Y.ios || !this.children.some((r) => r instanceof qi))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0;
    for (let t of this.children) {
      if (!(t instanceof qi) || /[^ -~]/.test(t.text))
        return null;
      let n = zr(t.dom);
      if (n.length != 1)
        return null;
      e += n[0].width;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length
    } : null;
  }
  coordsAt(e, t) {
    return um(this, e, t);
  }
  become(e) {
    return !1;
  }
  get type() {
    return Qe.Text;
  }
  static find(e, t) {
    for (let n = 0, r = 0; n < e.children.length; n++) {
      let s = e.children[n], o = r + s.length;
      if (o >= t) {
        if (s instanceof at)
          return s;
        if (o > t)
          break;
      }
      r = o + s.breakAfter;
    }
    return null;
  }
}
class mn extends xe {
  constructor(e, t, n) {
    super(), this.widget = e, this.length = t, this.type = n, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, n, r, s, o) {
    return n && (!(n instanceof mn) || !this.widget.compare(n.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (n ? n.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? Ke.before(this.dom) : Ke.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let n = new mn(this.widget, t, this.type);
    return n.breakAfter = this.breakAfter, n;
  }
  get children() {
    return Th;
  }
  sync() {
    (!this.dom || !this.widget.updateDOM(this.dom)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(this.editorView)), this.dom.contentEditable = "false");
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : de.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof mn && e.type == this.type && e.widget.constructor == this.widget.constructor ? (e.widget.eq(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Xh {
  constructor(e, t, n, r) {
    this.doc = e, this.pos = t, this.end = n, this.disallowBlockEffectsFor = r, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !e.breakAfter && !(e instanceof mn && e.type == Qe.WidgetBefore);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new at()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Vs(new Jn(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || this.getLine();
  }
  buildText(e, t, n) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: s, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = s, this.textOff = 0;
      }
      let r = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(t.slice(t.length - n)), this.getLine().append(Vs(new qi(this.text.slice(this.textOff, this.textOff + r)), t), n), this.atCursorPos = !0, this.textOff += r, e -= r, n = 0;
    }
  }
  span(e, t, n, r) {
    this.buildText(t - e, n, r), this.pos = t, this.openStart < 0 && (this.openStart = r);
  }
  point(e, t, n, r, s, o) {
    if (this.disallowBlockEffectsFor[o] && n instanceof yn) {
      if (n.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (n instanceof yn)
      if (n.block) {
        let { type: a } = n;
        a == Qe.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new mn(n.widget || new mu("div"), l, a));
      } else {
        let a = Ti.create(n.widget || new mu("span"), l, l ? 0 : n.startSide), c = this.atCursorPos && !a.isEditable && s <= r.length && (e < t || n.startSide > 0), h = !a.isEditable && (e < t || s > r.length || n.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !c && (this.pendingBuffer = 0), this.flushBuffer(r), c && (f.append(Vs(new Jn(1), r), s), s = r.length + Math.max(0, s - r.length)), f.append(Vs(a, r), s), this.atCursorPos = h, this.pendingBuffer = h ? e < t || s > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, t, n, r, s) {
    let o = new Xh(e, t, n, s);
    return o.openEnd = pe.spans(r, t, n, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Vs(i, e) {
  for (let t of e)
    i = new ni(t, [i], i.length);
  return i;
}
class mu extends gi {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
}
const Om = /* @__PURE__ */ j.define(), pm = /* @__PURE__ */ j.define(), mm = /* @__PURE__ */ j.define(), gm = /* @__PURE__ */ j.define(), yc = /* @__PURE__ */ j.define(), bm = /* @__PURE__ */ j.define(), Sm = /* @__PURE__ */ j.define({
  combine: (i) => i.some((e) => e)
}), ym = /* @__PURE__ */ j.define({
  combine: (i) => i.some((e) => e)
});
class Zo {
  constructor(e, t = "nearest", n = "nearest", r = 5, s = 5) {
    this.range = e, this.y = t, this.x = n, this.yMargin = r, this.xMargin = s;
  }
  map(e) {
    return e.empty ? this : new Zo(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const gu = /* @__PURE__ */ ne.define({ map: (i, e) => i.map(e) });
function xt(i, e, t) {
  let n = i.facet(gm);
  n.length ? n[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const Cl = /* @__PURE__ */ j.define({ combine: (i) => i.length ? i[0] : !0 });
let vv = 0;
const $r = /* @__PURE__ */ j.define();
class Re {
  constructor(e, t, n, r) {
    this.id = e, this.create = t, this.domEventHandlers = n, this.extension = r(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: n, provide: r, decorations: s } = t || {};
    return new Re(vv++, e, n, (o) => {
      let l = [$r.of(o)];
      return s && l.push(Fr.of((a) => {
        let c = a.plugin(o);
        return c ? s(c) : L.none;
      })), r && l.push(r(o)), l;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Re.define((n) => new e(n), t);
  }
}
class ia {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (n) {
            if (xt(t.state, n, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        xt(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        xt(e.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Qm = /* @__PURE__ */ j.define(), Ah = /* @__PURE__ */ j.define(), Fr = /* @__PURE__ */ j.define(), vm = /* @__PURE__ */ j.define(), xm = /* @__PURE__ */ j.define(), Pr = /* @__PURE__ */ j.define();
class ii {
  constructor(e, t, n, r) {
    this.fromA = e, this.toA = t, this.fromB = n, this.toB = r;
  }
  join(e) {
    return new ii(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, n = this;
    for (; t > 0; t--) {
      let r = e[t - 1];
      if (!(r.fromA > n.toA)) {
        if (r.toA < n.fromA)
          break;
        n = n.join(r), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, n), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let n = [];
    for (let r = 0, s = 0, o = 0, l = 0; ; r++) {
      let a = r == e.length ? null : e[r], c = o - l, h = a ? a.fromB : 1e9;
      for (; s < t.length && t[s] < h; ) {
        let f = t[s], u = t[s + 1], d = Math.max(l, f), O = Math.min(h, u);
        if (d <= O && new ii(d + c, O + c, d, O).addToSet(n), u > h)
          break;
        s += 2;
      }
      if (!a)
        return n;
      new ii(a.fromA, a.toA, a.fromB, a.toB).addToSet(n), o = a.toA, l = a.toB;
    }
  }
}
class Ro {
  constructor(e, t, n) {
    this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = De.empty(this.startState.doc.length);
    for (let o of n)
      this.changes = this.changes.compose(o.changes);
    let r = [];
    this.changes.iterChangedRanges((o, l, a, c) => r.push(new ii(o, l, a, c))), this.changedRanges = r;
    let s = e.hasFocus;
    s != e.inputState.notifiedFocused && (e.inputState.notifiedFocused = s, this.flags |= 1);
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Ro(e, t, n);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
var Te = /* @__PURE__ */ function(i) {
  return i[i.LTR = 0] = "LTR", i[i.RTL = 1] = "RTL", i;
}(Te || (Te = {}));
const Qc = Te.LTR, xv = Te.RTL;
function wm(i) {
  let e = [];
  for (let t = 0; t < i.length; t++)
    e.push(1 << +i[t]);
  return e;
}
const wv = /* @__PURE__ */ wm("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), $v = /* @__PURE__ */ wm("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), vc = /* @__PURE__ */ Object.create(null), Ut = [];
for (let i of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ i.charCodeAt(0), t = /* @__PURE__ */ i.charCodeAt(1);
  vc[e] = t, vc[t] = -e;
}
function Pv(i) {
  return i <= 247 ? wv[i] : 1424 <= i && i <= 1524 ? 2 : 1536 <= i && i <= 1785 ? $v[i - 1536] : 1774 <= i && i <= 2220 ? 4 : 8192 <= i && i <= 8203 ? 256 : 64336 <= i && i <= 65023 ? 4 : i == 8204 ? 256 : 1;
}
const kv = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Bn {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.from = e, this.to = t, this.level = n;
  }
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? xv : Qc;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  static find(e, t, n, r) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == n)
          return o;
        (s < 0 || (r != 0 ? r < 0 ? l.from < t : l.to > t : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0)
      throw new RangeError("Index out of range");
    return s;
  }
}
const ke = [];
function Cv(i, e) {
  let t = i.length, n = e == Qc ? 1 : 2, r = e == Qc ? 2 : 1;
  if (!i || n == 1 && !kv.test(i))
    return $m(t);
  for (let o = 0, l = n, a = n; o < t; o++) {
    let c = Pv(i.charCodeAt(o));
    c == 512 ? c = l : c == 8 && a == 4 && (c = 16), ke[o] = c == 4 ? 2 : c, c & 7 && (a = c), l = c;
  }
  for (let o = 0, l = n, a = n; o < t; o++) {
    let c = ke[o];
    if (c == 128)
      o < t - 1 && l == ke[o + 1] && l & 24 ? c = ke[o] = l : ke[o] = 256;
    else if (c == 64) {
      let h = o + 1;
      for (; h < t && ke[h] == 64; )
        h++;
      let f = o && l == 8 || h < t && ke[h] == 8 ? a == 1 ? 1 : 8 : 256;
      for (let u = o; u < h; u++)
        ke[u] = f;
      o = h - 1;
    } else
      c == 8 && a == 1 && (ke[o] = 1);
    l = c, c & 7 && (a = c);
  }
  for (let o = 0, l = 0, a = 0, c, h, f; o < t; o++)
    if (h = vc[c = i.charCodeAt(o)])
      if (h < 0) {
        for (let u = l - 3; u >= 0; u -= 3)
          if (Ut[u + 1] == -h) {
            let d = Ut[u + 2], O = d & 2 ? n : d & 4 ? d & 1 ? r : n : 0;
            O && (ke[o] = ke[Ut[u]] = O), l = u;
            break;
          }
      } else {
        if (Ut.length == 189)
          break;
        Ut[l++] = o, Ut[l++] = c, Ut[l++] = a;
      }
    else if ((f = ke[o]) == 2 || f == 1) {
      let u = f == n;
      a = u ? 0 : 1;
      for (let d = l - 3; d >= 0; d -= 3) {
        let O = Ut[d + 2];
        if (O & 2)
          break;
        if (u)
          Ut[d + 2] |= 2;
        else {
          if (O & 4)
            break;
          Ut[d + 2] |= 4;
        }
      }
    }
  for (let o = 0; o < t; o++)
    if (ke[o] == 256) {
      let l = o + 1;
      for (; l < t && ke[l] == 256; )
        l++;
      let a = (o ? ke[o - 1] : n) == 1, c = (l < t ? ke[l] : n) == 1, h = a == c ? a ? 1 : 2 : n;
      for (let f = o; f < l; f++)
        ke[f] = h;
      o = l - 1;
    }
  let s = [];
  if (n == 1)
    for (let o = 0; o < t; ) {
      let l = o, a = ke[o++] != 1;
      for (; o < t && a == (ke[o] != 1); )
        o++;
      if (a)
        for (let c = o; c > l; ) {
          let h = c, f = ke[--c] != 2;
          for (; c > l && f == (ke[c - 1] != 2); )
            c--;
          s.push(new Bn(c, h, f ? 2 : 1));
        }
      else
        s.push(new Bn(l, o, 0));
    }
  else
    for (let o = 0; o < t; ) {
      let l = o, a = ke[o++] == 2;
      for (; o < t && a == (ke[o] == 2); )
        o++;
      s.push(new Bn(l, o, a ? 1 : 2));
    }
  return s;
}
function $m(i) {
  return [new Bn(0, i, 0)];
}
let Pm = "";
function Tv(i, e, t, n, r) {
  var s;
  let o = n.head - i.from, l = -1;
  if (o == 0) {
    if (!r || !i.length)
      return null;
    e[0].level != t && (o = e[0].side(!1, t), l = 0);
  } else if (o == i.length) {
    if (r)
      return null;
    let u = e[e.length - 1];
    u.level != t && (o = u.side(!0, t), l = e.length - 1);
  }
  l < 0 && (l = Bn.find(e, o, (s = n.bidiLevel) !== null && s !== void 0 ? s : -1, n.assoc));
  let a = e[l];
  o == a.side(r, t) && (a = e[l += r ? 1 : -1], o = a.side(!r, t));
  let c = r == (a.dir == t), h = lt(i.text, o, c);
  if (Pm = i.text.slice(Math.min(o, h), Math.max(o, h)), h != a.side(r, t))
    return v.cursor(h + i.from, c ? -1 : 1, a.level);
  let f = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
  return !f && a.level != t ? v.cursor(r ? i.to : i.from, r ? -1 : 1, t) : f && f.level < a.level ? v.cursor(f.side(!r, t) + i.from, r ? 1 : -1, f.level) : v.cursor(h + i.from, r ? -1 : 1, a.level);
}
const _i = "￿";
class km {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(ue.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += _i;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let n = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(n, r), this.readNode(r);
      let s = r.nextSibling;
      if (s == t)
        break;
      let o = xe.get(r), l = xe.get(s);
      (o && l ? o.breakAfter : (o ? o.breakAfter : bu(r)) || bu(s) && (r.nodeName != "BR" || r.cmIgnore)) && this.lineBreak(), r = s;
    }
    return this.findPointBefore(n, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let n of this.points)
      n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
    for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, o = 1, l;
      if (this.lineSeparator ? (s = t.indexOf(this.lineSeparator, n), o = this.lineSeparator.length) : (l = r.exec(t)) && (s = l.index, o = l[0].length), this.append(t.slice(n, s < 0 ? t.length : s)), s < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      n = s + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = xe.get(e), n = t && t.overrideDOMText;
    if (n != null) {
      this.findPointInside(e, n.length);
      for (let r = n.iter(); !r.next().done; )
        r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else
      e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let n of this.points)
      n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let n of this.points)
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + Math.min(t, n.offset));
  }
}
function bu(i) {
  return i.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName);
}
class Su {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class yu extends xe {
  constructor(e) {
    super(), this.view = e, this.compositionDeco = L.none, this.decorations = [], this.dynamicDecorationMap = [], this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new at()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new ii(0, 0, 0, e.state.doc.length)], 0);
  }
  get editorView() {
    return this.view;
  }
  get length() {
    return this.view.state.doc.length;
  }
  // Update the document view to a given state. scrollIntoView can be
  // used as a hint to compute a new viewport that includes that
  // position, if we know the editor is going to scroll that position
  // into view.
  update(e) {
    let t = e.changedRanges;
    this.minWidth > 0 && t.length && (t.every(({ fromA: o, toA: l }) => l < this.minWidthFrom || o > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.view.inputState.composing < 0 ? this.compositionDeco = L.none : (e.transactions.length || this.dirty) && (this.compositionDeco = Xv(this.view, e.changes)), (Y.ie || Y.chrome) && !this.compositionDeco.size && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let n = this.decorations, r = this.updateDeco(), s = Zv(n, r, e.changes);
    return t = ii.extendWithRanges(t, s), this.dirty == 0 && t.length == 0 ? !1 : (this.updateInner(t, e.startState.doc.length), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t);
    let { observer: n } = this.view;
    n.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let s = Y.chrome || Y.ios ? { node: n.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(s), this.dirty = 0, s && (s.written || n.selectionRange.focusNode != s.node) && (this.forceSelection = !0), this.dom.style.height = "";
    });
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let s of this.children)
        s instanceof mn && s.widget instanceof Qu && r.push(s.dom);
    n.updateGaps(r);
  }
  updateChildren(e, t) {
    let n = this.childCursor(t);
    for (let r = e.length - 1; ; r--) {
      let s = r >= 0 ? e[r] : null;
      if (!s)
        break;
      let { fromA: o, toA: l, fromB: a, toB: c } = s, { content: h, breakAtStart: f, openStart: u, openEnd: d } = Xh.build(this.view.state.doc, a, c, this.decorations, this.dynamicDecorationMap), { i: O, off: m } = n.findPos(l, 1), { i: b, off: y } = n.findPos(o, -1);
      rm(this, b, y, O, m, h, f, u, d);
    }
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    if ((e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange(), !(t || this.mayControlSelection()))
      return;
    let n = this.forceSelection;
    this.forceSelection = !1;
    let r = this.view.state.selection.main, s = this.domAtPos(r.anchor), o = r.empty ? s : this.domAtPos(r.head);
    if (Y.gecko && r.empty && _v(s)) {
      let a = document.createTextNode("");
      this.view.observer.ignore(() => s.node.insertBefore(a, s.node.childNodes[s.offset] || null)), s = o = new Ke(a, 0), n = !0;
    }
    let l = this.view.observer.selectionRange;
    (n || !l.focusNode || !Vo(s.node, s.offset, l.anchorNode, l.anchorOffset) || !Vo(o.node, o.offset, l.focusNode, l.focusOffset)) && (this.view.observer.ignore(() => {
      Y.android && Y.chrome && this.dom.contains(l.focusNode) && Rv(l.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let a = Ao(this.view.root);
      if (a)
        if (r.empty) {
          if (Y.gecko) {
            let c = Vv(s.node, s.offset);
            if (c && c != 3) {
              let h = Tm(s.node, s.offset, c == 1 ? 1 : -1);
              h && (s = new Ke(h, c == 1 ? 0 : h.nodeValue.length));
            }
          }
          a.collapse(s.node, s.offset), r.bidiLevel != null && l.cursorBidiLevel != null && (l.cursorBidiLevel = r.bidiLevel);
        } else if (a.extend) {
          a.collapse(s.node, s.offset);
          try {
            a.extend(o.node, o.offset);
          } catch {
          }
        } else {
          let c = document.createRange();
          r.anchor > r.head && ([s, o] = [o, s]), c.setEnd(o.node, o.offset), c.setStart(s.node, s.offset), a.removeAllRanges(), a.addRange(c);
        }
    }), this.view.observer.setSelectionRange(s, o)), this.impreciseAnchor = s.precise ? null : new Ke(l.anchorNode, l.anchorOffset), this.impreciseHead = o.precise ? null : new Ke(l.focusNode, l.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.compositionDeco.size)
      return;
    let { view: e } = this, t = e.state.selection.main, n = Ao(e.root), { anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
    if (!n || !t.empty || !t.assoc || !n.modify)
      return;
    let o = at.find(this, t.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), c = this.coordsAt(t.head, 1);
    if (!a || !c || a.bottom > c.top)
      return;
    let h = this.domAtPos(t.head + t.assoc);
    n.collapse(h.node, h.offset), n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && n.collapse(r, s);
  }
  mayControlSelection() {
    let e = this.view.root.activeElement;
    return e == this.dom || co(this.dom, this.view.observer.selectionRange) && !(e && this.dom.contains(e));
  }
  nearest(e) {
    for (let t = e; t; ) {
      let n = xe.get(t);
      if (n && n.rootView == this)
        return n;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let n = this.nearest(e);
    if (!n)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return n.localPosFromDOM(e, t) + n.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: n } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let r = this.children[t];
      if (n < r.length || r instanceof at)
        break;
      t++, n = 0;
    }
    return this.children[t].domAtPos(n);
  }
  coordsAt(e, t) {
    for (let n = this.length, r = this.children.length - 1; ; r--) {
      let s = this.children[r], o = n - s.breakAfter - s.length;
      if (e > o || e == o && s.type != Qe.WidgetBefore && s.type != Qe.WidgetAfter && (!r || t == 2 || this.children[r - 1].breakAfter || this.children[r - 1].type == Qe.WidgetBefore && t > -2))
        return s.coordsAt(e - o, t);
      n = o;
    }
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: n, to: r } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == Te.LTR;
    for (let c = 0, h = 0; h < this.children.length; h++) {
      let f = this.children[h], u = c + f.length;
      if (u > r)
        break;
      if (c >= n) {
        let d = f.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let O = f.dom.lastChild, m = O ? zr(O) : [];
          if (m.length) {
            let b = m[m.length - 1], y = a ? b.right - d.left : d.right - b.left;
            y > l && (l = y, this.minWidth = s, this.minWidthFrom = c, this.minWidthTo = u);
          }
        }
      }
      c = u + f.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? Te.RTL : Te.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof at) {
        let s = r.measureTextSize();
        if (s)
          return s;
      }
    let e = document.createElement("div"), t, n;
    return e.className = "cm-line", e.style.width = "99999px", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let r = zr(e.firstChild)[0];
      t = e.getBoundingClientRect().height, n = r ? r.width / 27 : 7, e.remove();
    }), { lineHeight: t, charWidth: n };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new nm(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let n = 0, r = 0; ; r++) {
      let s = r == t.viewports.length ? null : t.viewports[r], o = s ? s.from - 1 : this.length;
      if (o > n) {
        let l = t.lineBlockAt(o).bottom - t.lineBlockAt(n).top;
        e.push(L.replace({
          widget: new Qu(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(n, o));
      }
      if (!s)
        break;
      n = s.to + 1;
    }
    return L.set(e);
  }
  updateDeco() {
    let e = this.view.state.facet(Fr).map((t, n) => (this.dynamicDecorationMap[n] = typeof t == "function") ? t(this.view) : t);
    for (let t = e.length; t < e.length + 3; t++)
      this.dynamicDecorationMap[t] = !1;
    return this.decorations = [
      ...e,
      this.compositionDeco,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ];
  }
  scrollIntoView(e) {
    let { range: t } = e, n = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), r;
    if (!n)
      return;
    !t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, r.left),
      top: Math.min(n.top, r.top),
      right: Math.max(n.right, r.right),
      bottom: Math.max(n.bottom, r.bottom)
    });
    let s = 0, o = 0, l = 0, a = 0;
    for (let h of this.view.state.facet(xm).map((f) => f(this.view)))
      if (h) {
        let { left: f, right: u, top: d, bottom: O } = h;
        f != null && (s = Math.max(s, f)), u != null && (o = Math.max(o, u)), d != null && (l = Math.max(l, d)), O != null && (a = Math.max(a, O));
      }
    let c = {
      left: n.left - s,
      top: n.top - l,
      right: n.right + o,
      bottom: n.bottom + a
    };
    dv(this.view.scrollDOM, c, t.head < t.anchor ? -1 : 1, e.x, e.y, e.xMargin, e.yMargin, this.view.textDirection == Te.LTR);
  }
}
function _v(i) {
  return i.node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false");
}
class Qu extends gi {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get estimatedHeight() {
    return this.height;
  }
}
function Cm(i) {
  let e = i.observer.selectionRange, t = e.focusNode && Tm(e.focusNode, e.focusOffset, 0);
  if (!t)
    return null;
  let n = i.docView.nearest(t);
  if (!n)
    return null;
  if (n instanceof at) {
    let r = t;
    for (; r.parentNode != n.dom; )
      r = r.parentNode;
    let s = r.previousSibling;
    for (; s && !xe.get(s); )
      s = s.previousSibling;
    let o = s ? xe.get(s).posAtEnd : n.posAtStart;
    return { from: o, to: o, node: r, text: t };
  } else {
    for (; ; ) {
      let { parent: s } = n;
      if (!s)
        return null;
      if (s instanceof at)
        break;
      n = s;
    }
    let r = n.posAtStart;
    return { from: r, to: r + n.length, node: n.dom, text: t };
  }
}
function Xv(i, e) {
  let t = Cm(i);
  if (!t)
    return L.none;
  let { from: n, to: r, node: s, text: o } = t, l = e.mapPos(n, 1), a = Math.max(l, e.mapPos(r, -1)), { state: c } = i, h = s.nodeType == 3 ? s.nodeValue : new km([], c).readRange(s.firstChild, null).text;
  if (a - l < h.length)
    if (c.doc.sliceString(l, Math.min(c.doc.length, l + h.length), _i) == h)
      a = l + h.length;
    else if (c.doc.sliceString(Math.max(0, a - h.length), a, _i) == h)
      l = a - h.length;
    else
      return L.none;
  else if (c.doc.sliceString(l, a, _i) != h)
    return L.none;
  let f = xe.get(s);
  return f instanceof am ? f = f.widget.topView : f && (f.parent = null), L.set(L.replace({ widget: new Av(s, o, f), inclusive: !0 }).range(l, a));
}
class Av extends gi {
  constructor(e, t, n) {
    super(), this.top = e, this.text = t, this.topView = n;
  }
  eq(e) {
    return this.top == e.top && this.text == e.text;
  }
  toDOM() {
    return this.top;
  }
  ignoreEvent() {
    return !1;
  }
  get customView() {
    return am;
  }
}
function Tm(i, e, t) {
  for (; ; ) {
    if (i.nodeType == 3)
      return i;
    if (i.nodeType == 1 && e > 0 && t <= 0)
      i = i.childNodes[e - 1], e = Gr(i);
    else if (i.nodeType == 1 && e < i.childNodes.length && t >= 0)
      i = i.childNodes[e], e = 0;
    else
      return null;
  }
}
function Vv(i, e) {
  return i.nodeType != 1 ? 0 : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < i.childNodes.length && i.childNodes[e].contentEditable == "false" ? 2 : 0);
}
class Ev {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Sc(e, t, this.changes);
  }
  comparePoint(e, t) {
    Sc(e, t, this.changes);
  }
}
function Zv(i, e, t) {
  let n = new Ev();
  return pe.compare(i, e, t, n), n.changes;
}
function Rv(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function Dv(i, e, t = 1) {
  let n = i.charCategorizer(e), r = i.doc.lineAt(e), s = e - r.from;
  if (r.length == 0)
    return v.cursor(e);
  s == 0 ? t = 1 : s == r.length && (t = -1);
  let o = s, l = s;
  t < 0 ? o = lt(r.text, s, !1) : l = lt(r.text, s);
  let a = n(r.text.slice(o, l));
  for (; o > 0; ) {
    let c = lt(r.text, o, !1);
    if (n(r.text.slice(c, o)) != a)
      break;
    o = c;
  }
  for (; l < r.length; ) {
    let c = lt(r.text, l);
    if (n(r.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return v.range(o + r.from, l + r.from);
}
function Wv(i, e) {
  return e.left > i ? e.left - i : Math.max(0, i - e.right);
}
function Nv(i, e) {
  return e.top > i ? e.top - i : Math.max(0, i - e.bottom);
}
function na(i, e) {
  return i.top < e.bottom - 1 && i.bottom > e.top + 1;
}
function vu(i, e) {
  return e < i.top ? { top: e, left: i.left, right: i.right, bottom: i.bottom } : i;
}
function xu(i, e) {
  return e > i.bottom ? { top: i.top, left: i.left, right: i.right, bottom: e } : i;
}
function xc(i, e, t) {
  let n, r, s, o, l = !1, a, c, h, f;
  for (let O = i.firstChild; O; O = O.nextSibling) {
    let m = zr(O);
    for (let b = 0; b < m.length; b++) {
      let y = m[b];
      r && na(r, y) && (y = vu(xu(y, r.bottom), r.top));
      let P = Wv(e, y), C = Nv(t, y);
      if (P == 0 && C == 0)
        return O.nodeType == 3 ? wu(O, e, t) : xc(O, e, t);
      if (!n || o > C || o == C && s > P) {
        n = O, r = y, s = P, o = C;
        let x = C ? t < y.top ? -1 : 1 : P ? e < y.left ? -1 : 1 : 0;
        l = !x || (x > 0 ? b < m.length - 1 : b > 0);
      }
      P == 0 ? t > y.bottom && (!h || h.bottom < y.bottom) ? (a = O, h = y) : t < y.top && (!f || f.top > y.top) && (c = O, f = y) : h && na(h, y) ? h = xu(h, y.bottom) : f && na(f, y) && (f = vu(f, y.top));
    }
  }
  if (h && h.bottom >= t ? (n = a, r = h) : f && f.top <= t && (n = c, r = f), !n)
    return { node: i, offset: 0 };
  let u = Math.max(r.left, Math.min(r.right, e));
  if (n.nodeType == 3)
    return wu(n, u, t);
  if (l && n.contentEditable != "false")
    return xc(n, u, t);
  let d = Array.prototype.indexOf.call(i.childNodes, n) + (e >= (r.left + r.right) / 2 ? 1 : 0);
  return { node: i, offset: d };
}
function wu(i, e, t) {
  let n = i.nodeValue.length, r = -1, s = 1e9, o = 0;
  for (let l = 0; l < n; l++) {
    let a = Kn(i, l, l + 1).getClientRects();
    for (let c = 0; c < a.length; c++) {
      let h = a[c];
      if (h.top == h.bottom)
        continue;
      o || (o = e - h.left);
      let f = (h.top > t ? h.top - t : t - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && f < s) {
        let u = e >= (h.left + h.right) / 2, d = u;
        if ((Y.chrome || Y.gecko) && Kn(i, l).getBoundingClientRect().left == h.right && (d = !u), f <= 0)
          return { node: i, offset: l + (d ? 1 : 0) };
        r = l + (d ? 1 : 0), s = f;
      }
    }
  }
  return { node: i, offset: r > -1 ? r : o > 0 ? i.nodeValue.length : 0 };
}
function _m(i, { x: e, y: t }, n, r = -1) {
  var s;
  let o = i.contentDOM.getBoundingClientRect(), l = o.top + i.viewState.paddingTop, a, { docHeight: c } = i.viewState, h = t - l;
  if (h < 0)
    return 0;
  if (h > c)
    return i.state.doc.length;
  for (let y = i.defaultLineHeight / 2, P = !1; a = i.elementAtHeight(h), a.type != Qe.Text; )
    for (; h = r > 0 ? a.bottom + y : a.top - y, !(h >= 0 && h <= c); ) {
      if (P)
        return n ? null : 0;
      P = !0, r = -r;
    }
  t = l + h;
  let f = a.from;
  if (f < i.viewport.from)
    return i.viewport.from == 0 ? 0 : n ? null : $u(i, o, a, e, t);
  if (f > i.viewport.to)
    return i.viewport.to == i.state.doc.length ? i.state.doc.length : n ? null : $u(i, o, a, e, t);
  let u = i.dom.ownerDocument, d = i.root.elementFromPoint ? i.root : u, O = d.elementFromPoint(e, t);
  O && !i.contentDOM.contains(O) && (O = null), O || (e = Math.max(o.left + 1, Math.min(o.right - 1, e)), O = d.elementFromPoint(e, t), O && !i.contentDOM.contains(O) && (O = null));
  let m, b = -1;
  if (O && ((s = i.docView.nearest(O)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (u.caretPositionFromPoint) {
      let y = u.caretPositionFromPoint(e, t);
      y && ({ offsetNode: m, offset: b } = y);
    } else if (u.caretRangeFromPoint) {
      let y = u.caretRangeFromPoint(e, t);
      y && ({ startContainer: m, startOffset: b } = y, (!i.contentDOM.contains(m) || Y.safari && Mv(m, b, e) || Y.chrome && Yv(m, b, e)) && (m = void 0));
    }
  }
  if (!m || !i.docView.dom.contains(m)) {
    let y = at.find(i.docView, f);
    if (!y)
      return h > a.top + a.height / 2 ? a.to : a.from;
    ({ node: m, offset: b } = xc(y.dom, e, t));
  }
  return i.docView.posFromDOM(m, b);
}
function $u(i, e, t, n, r) {
  let s = Math.round((n - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = Math.floor((r - t.top) / i.defaultLineHeight);
    s += l * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + cc(o, s, i.state.tabSize);
}
function Mv(i, e, t) {
  let n;
  if (i.nodeType != 3 || e != (n = i.nodeValue.length))
    return !1;
  for (let r = i.nextSibling; r; r = r.nextSibling)
    if (r.nodeType != 1 || r.nodeName != "BR")
      return !1;
  return Kn(i, n - 1, n).getBoundingClientRect().left > t;
}
function Yv(i, e, t) {
  if (e != 0)
    return !1;
  for (let r = i; ; ) {
    let s = r.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != r)
      return !1;
    if (s.classList.contains("cm-line"))
      break;
    r = s;
  }
  let n = i.nodeType == 1 ? i.getBoundingClientRect() : Kn(i, 0, Math.max(i.nodeValue.length, 1)).getBoundingClientRect();
  return t - n.left > 5;
}
function jv(i, e, t, n) {
  let r = i.state.doc.lineAt(e.head), s = !n || !i.lineWrapping ? null : i.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (s) {
    let a = i.dom.getBoundingClientRect(), c = i.textDirectionAt(r.from), h = i.posAtCoords({
      x: t == (c == Te.LTR) ? a.right - 1 : a.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (h != null)
      return v.cursor(h, t ? -1 : 1);
  }
  let o = at.find(i.docView, e.head), l = o ? t ? o.posAtEnd : o.posAtStart : t ? r.to : r.from;
  return v.cursor(l, t ? -1 : 1);
}
function Pu(i, e, t, n) {
  let r = i.state.doc.lineAt(e.head), s = i.bidiSpans(r), o = i.textDirectionAt(r.from);
  for (let l = e, a = null; ; ) {
    let c = Tv(r, s, o, l, t), h = Pm;
    if (!c) {
      if (r.number == (t ? i.state.doc.lines : 1))
        return l;
      h = `
`, r = i.state.doc.line(r.number + (t ? 1 : -1)), s = i.bidiSpans(r), c = v.cursor(t ? r.from : r.to);
    }
    if (a) {
      if (!a(h))
        return l;
    } else {
      if (!n)
        return c;
      a = n(h);
    }
    l = c;
  }
}
function Uv(i, e, t) {
  let n = i.state.charCategorizer(e), r = n(t);
  return (s) => {
    let o = n(s);
    return r == $e.Space && (r = o), r == o;
  };
}
function Iv(i, e, t, n) {
  let r = e.head, s = t ? 1 : -1;
  if (r == (t ? i.state.doc.length : 0))
    return v.cursor(r, e.assoc);
  let o = e.goalColumn, l, a = i.contentDOM.getBoundingClientRect(), c = i.coordsAtPos(r), h = i.documentTop;
  if (c)
    o == null && (o = c.left - a.left), l = s < 0 ? c.top : c.bottom;
  else {
    let d = i.viewState.lineBlockAt(r);
    o == null && (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (r - d.from))), l = (s < 0 ? d.top : d.bottom) + h;
  }
  let f = a.left + o, u = n ?? i.defaultLineHeight >> 1;
  for (let d = 0; ; d += 10) {
    let O = l + (u + d) * s, m = _m(i, { x: f, y: O }, !1, s);
    if (O < a.top || O > a.bottom || (s < 0 ? m < r : m > r))
      return v.cursor(m, e.assoc, void 0, o);
  }
}
function ra(i, e, t) {
  let n = i.state.facet(vm).map((r) => r(i));
  for (; ; ) {
    let r = !1;
    for (let s of n)
      s.between(t.from - 1, t.from + 1, (o, l, a) => {
        t.from > o && t.from < l && (t = e.head > t.from ? v.cursor(o, 1) : v.cursor(l, -1), r = !0);
      });
    if (!r)
      return t;
  }
}
class qv {
  constructor(e) {
    this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.mouseSelection = null;
    let t = (n, r) => {
      this.ignoreDuringComposition(r) || r.type == "keydown" && this.keydown(e, r) || (this.mustFlushObserver(r) && e.observer.forceFlush(), this.runCustomHandlers(r.type, e, r) ? r.preventDefault() : n(e, r));
    };
    for (let n in Me) {
      let r = Me[n];
      e.contentDOM.addEventListener(n, (s) => {
        ku(e, s) && t(r, s);
      }, wc[n]), this.registeredEvents.push(n);
    }
    e.scrollDOM.addEventListener("mousedown", (n) => {
      n.target == e.scrollDOM && t(Me.mousedown, n);
    }), Y.chrome && Y.chrome_version == 102 && e.scrollDOM.addEventListener("wheel", () => {
      this.chromeScrollHack < 0 ? e.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout(() => {
        this.chromeScrollHack = -1, e.contentDOM.style.pointerEvents = "";
      }, 100);
    }, { passive: !0 }), this.notifiedFocused = e.hasFocus, Y.safari && e.contentDOM.addEventListener("input", () => null);
  }
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  ensureHandlers(e, t) {
    var n;
    let r;
    this.customHandlers = [];
    for (let s of t)
      if (r = (n = s.update(e).spec) === null || n === void 0 ? void 0 : n.domEventHandlers) {
        this.customHandlers.push({ plugin: s.value, handlers: r });
        for (let o in r)
          this.registeredEvents.indexOf(o) < 0 && o != "scroll" && (this.registeredEvents.push(o), e.contentDOM.addEventListener(o, (l) => {
            ku(e, l) && this.runCustomHandlers(o, e, l) && l.preventDefault();
          }));
      }
  }
  runCustomHandlers(e, t, n) {
    for (let r of this.customHandlers) {
      let s = r.handlers[e];
      if (s)
        try {
          if (s.call(r.plugin, n, t) || n.defaultPrevented)
            return !0;
        } catch (o) {
          xt(t.state, o);
        }
    }
    return !1;
  }
  runScrollHandlers(e, t) {
    this.lastScrollTop = e.scrollDOM.scrollTop, this.lastScrollLeft = e.scrollDOM.scrollLeft;
    for (let n of this.customHandlers) {
      let r = n.handlers.scroll;
      if (r)
        try {
          r.call(n.plugin, t, e);
        } catch (s) {
          xt(e.state, s);
        }
    }
  }
  keydown(e, t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (Y.android && Y.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return e.observer.delayAndroidKey(t.key, t.keyCode), !0;
    let n;
    return Y.ios && !t.synthetic && !t.altKey && !t.metaKey && ((n = Xm.find((r) => r.keyCode == t.keyCode)) && !t.ctrlKey || Bv.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = n || t, setTimeout(() => this.flushIOSKey(e), 250), !0) : !1;
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return t ? (this.pendingIOSKey = void 0, qn(e.contentDOM, t.key, t.keyCode)) : !1;
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : Y.safari && !Y.ios && Date.now() - this.compositionEndedAt < 100 ? (this.compositionEndedAt = 0, !0) : !1 : !1;
  }
  mustFlushObserver(e) {
    return e.type == "keydown" && e.keyCode != 229;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.mouseSelection && this.mouseSelection.update(e), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
const Xm = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Bv = "dthko", Am = [16, 17, 18, 20, 91, 92, 224, 225];
function Es(i) {
  return i * 0.7 + 8;
}
class Lv {
  constructor(e, t, n, r) {
    this.view = e, this.style = n, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParent = Ov(e.contentDOM);
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(ue.allowMultipleSelections) && zv(e, t), this.dragMove = Gv(e, t), this.dragging = Fv(e, t) && Rm(t) == 1 ? null : !1, this.dragging === !1 && (t.preventDefault(), this.select(t));
  }
  move(e) {
    var t;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging !== !1)
      return;
    this.select(this.lastEvent = e);
    let n = 0, r = 0, s = ((t = this.scrollParent) === null || t === void 0 ? void 0 : t.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight };
    e.clientX <= s.left ? n = -Es(s.left - e.clientX) : e.clientX >= s.right && (n = Es(e.clientX - s.right)), e.clientY <= s.top ? r = -Es(s.top - e.clientY) : e.clientY >= s.bottom && (r = Es(e.clientY - s.bottom)), this.setScrollSpeed(n, r);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let t = this.style.get(e, this.extend, this.multiple);
    (this.mustSelect || !t.eq(this.view.state.selection) || t.main.assoc != this.view.state.selection.main.assoc) && this.view.dispatch({
      selection: t,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.docChanged && this.dragging && (this.dragging = this.dragging.map(e.changes)), this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function zv(i, e) {
  let t = i.state.facet(Om);
  return t.length ? t[0](e) : Y.mac ? e.metaKey : e.ctrlKey;
}
function Gv(i, e) {
  let t = i.state.facet(pm);
  return t.length ? t[0](e) : Y.mac ? !e.altKey : !e.ctrlKey;
}
function Fv(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty)
    return !1;
  let n = Ao(i.root);
  if (!n || n.rangeCount == 0)
    return !0;
  let r = n.getRangeAt(0).getClientRects();
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function ku(i, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, n; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (n = xe.get(t)) && n.ignoreEvent(e))
      return !1;
  return !0;
}
const Me = /* @__PURE__ */ Object.create(null), wc = /* @__PURE__ */ Object.create(null), Vm = Y.ie && Y.ie_version < 15 || Y.ios && Y.webkit_version < 604;
function Hv(i) {
  let e = i.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    i.focus(), t.remove(), Em(i, t.value);
  }, 50);
}
function Em(i, e) {
  let { state: t } = i, n, r = 1, s = t.toText(e), o = s.lines == t.selection.ranges.length;
  if ($c != null && t.selection.ranges.every((a) => a.empty) && $c == s.toString()) {
    let a = -1;
    n = t.changeByRange((c) => {
      let h = t.doc.lineAt(c.from);
      if (h.from == a)
        return { range: c };
      a = h.from;
      let f = t.toText((o ? s.line(r++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: f },
        range: v.cursor(c.from + f.length)
      };
    });
  } else
    o ? n = t.changeByRange((a) => {
      let c = s.line(r++);
      return {
        changes: { from: a.from, to: a.to, insert: c.text },
        range: v.cursor(a.from + c.length)
      };
    }) : n = t.replaceSelection(s);
  i.dispatch(n, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Me.keydown = (i, e) => {
  i.inputState.setSelectionOrigin("select"), e.keyCode == 27 ? i.inputState.lastEscPress = Date.now() : Am.indexOf(e.keyCode) < 0 && (i.inputState.lastEscPress = 0);
};
Me.touchstart = (i, e) => {
  i.inputState.lastTouchTime = Date.now(), i.inputState.setSelectionOrigin("select.pointer");
};
Me.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
wc.touchstart = wc.touchmove = { passive: !0 };
Me.mousedown = (i, e) => {
  if (i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3)
    return;
  let t = null;
  for (let n of i.state.facet(mm))
    if (t = n(i, e), t)
      break;
  if (!t && e.button == 0 && (t = ex(i, e)), t) {
    let n = i.root.activeElement != i.contentDOM;
    n && i.observer.ignore(() => tm(i.contentDOM)), i.inputState.startMouseSelection(new Lv(i, e, t, n));
  }
};
function Cu(i, e, t, n) {
  if (n == 1)
    return v.cursor(e, t);
  if (n == 2)
    return Dv(i.state, e, t);
  {
    let r = at.find(i.docView, e), s = i.state.doc.lineAt(r ? r.posAtEnd : e), o = r ? r.posAtStart : s.from, l = r ? r.posAtEnd : s.to;
    return l < i.state.doc.length && l == s.to && l++, v.range(o, l);
  }
}
let Zm = (i, e) => i >= e.top && i <= e.bottom, Tu = (i, e, t) => Zm(e, t) && i >= t.left && i <= t.right;
function Kv(i, e, t, n) {
  let r = at.find(i.docView, e);
  if (!r)
    return 1;
  let s = e - r.posAtStart;
  if (s == 0)
    return 1;
  if (s == r.length)
    return -1;
  let o = r.coordsAt(s, -1);
  if (o && Tu(t, n, o))
    return -1;
  let l = r.coordsAt(s, 1);
  return l && Tu(t, n, l) ? 1 : o && Zm(n, o) ? -1 : 1;
}
function _u(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: Kv(i, t, e.clientX, e.clientY) };
}
const Jv = Y.ie && Y.ie_version <= 11;
let Xu = null, Au = 0, Vu = 0;
function Rm(i) {
  if (!Jv)
    return i.detail;
  let e = Xu, t = Vu;
  return Xu = i, Vu = Date.now(), Au = !e || t > Date.now() - 400 && Math.abs(e.clientX - i.clientX) < 2 && Math.abs(e.clientY - i.clientY) < 2 ? (Au + 1) % 3 : 1;
}
function ex(i, e) {
  let t = _u(i, e), n = Rm(e), r = i.state.selection;
  return {
    update(s) {
      s.docChanged && (t.pos = s.changes.mapPos(t.pos), r = r.map(s.changes));
    },
    get(s, o, l) {
      let a = _u(i, s), c = Cu(i, a.pos, a.bias, n);
      if (t.pos != a.pos && !o) {
        let h = Cu(i, t.pos, t.bias, n), f = Math.min(h.from, c.from), u = Math.max(h.to, c.to);
        c = f < c.from ? v.range(f, u) : v.range(u, f);
      }
      return o ? r.replaceRange(r.main.extend(c.from, c.to)) : l && r.ranges.length > 1 && r.ranges.some((h) => h.eq(c)) ? tx(r, c) : l ? r.addRange(c) : v.create([c]);
    }
  };
}
function tx(i, e) {
  for (let t = 0; ; t++)
    if (i.ranges[t].eq(e))
      return v.create(i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)), i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0));
}
Me.dragstart = (i, e) => {
  let { selection: { main: t } } = i.state, { mouseSelection: n } = i.inputState;
  n && (n.dragging = t), e.dataTransfer && (e.dataTransfer.setData("Text", i.state.sliceDoc(t.from, t.to)), e.dataTransfer.effectAllowed = "copyMove");
};
function Eu(i, e, t, n) {
  if (!t)
    return;
  let r = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  e.preventDefault();
  let { mouseSelection: s } = i.inputState, o = n && s && s.dragging && s.dragMove ? { from: s.dragging.from, to: s.dragging.to } : null, l = { from: r, insert: t }, a = i.state.changes(o ? [o, l] : l);
  i.focus(), i.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  });
}
Me.drop = (i, e) => {
  if (!e.dataTransfer)
    return;
  if (i.state.readOnly)
    return e.preventDefault();
  let t = e.dataTransfer.files;
  if (t && t.length) {
    e.preventDefault();
    let n = Array(t.length), r = 0, s = () => {
      ++r == t.length && Eu(i, e, n.filter((o) => o != null).join(i.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (n[o] = l.result), s();
      }, l.readAsText(t[o]);
    }
  } else
    Eu(i, e, e.dataTransfer.getData("Text"), !0);
};
Me.paste = (i, e) => {
  if (i.state.readOnly)
    return e.preventDefault();
  i.observer.flush();
  let t = Vm ? null : e.clipboardData;
  t ? (Em(i, t.getData("text/plain")), e.preventDefault()) : Hv(i);
};
function ix(i, e) {
  let t = i.dom.parentNode;
  if (!t)
    return;
  let n = t.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = e, n.focus(), n.selectionEnd = e.length, n.selectionStart = 0, setTimeout(() => {
    n.remove(), i.focus();
  }, 50);
}
function nx(i) {
  let e = [], t = [], n = !1;
  for (let r of i.selection.ranges)
    r.empty || (e.push(i.sliceDoc(r.from, r.to)), t.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: s } of i.selection.ranges) {
      let o = i.doc.lineAt(s);
      o.number > r && (e.push(o.text), t.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })), r = o.number;
    }
    n = !0;
  }
  return { text: e.join(i.lineBreak), ranges: t, linewise: n };
}
let $c = null;
Me.copy = Me.cut = (i, e) => {
  let { text: t, ranges: n, linewise: r } = nx(i.state);
  if (!t && !r)
    return;
  $c = r ? t : null;
  let s = Vm ? null : e.clipboardData;
  s ? (e.preventDefault(), s.clearData(), s.setData("text/plain", t)) : ix(i, t), e.type == "cut" && !i.state.readOnly && i.dispatch({
    changes: n,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
};
function Dm(i) {
  setTimeout(() => {
    i.hasFocus != i.inputState.notifiedFocused && i.update([]);
  }, 10);
}
Me.focus = (i) => {
  i.inputState.lastFocusTime = Date.now(), !i.scrollDOM.scrollTop && (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) && (i.scrollDOM.scrollTop = i.inputState.lastScrollTop, i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft), Dm(i);
};
Me.blur = (i) => {
  i.observer.clearSelectionRange(), Dm(i);
};
Me.compositionstart = Me.compositionupdate = (i) => {
  i.inputState.compositionFirstChange == null && (i.inputState.compositionFirstChange = !0), i.inputState.composing < 0 && (i.inputState.composing = 0);
};
Me.compositionend = (i) => {
  i.inputState.composing = -1, i.inputState.compositionEndedAt = Date.now(), i.inputState.compositionFirstChange = null, Y.chrome && Y.android && i.observer.flushSoon(), setTimeout(() => {
    i.inputState.composing < 0 && i.docView.compositionDeco.size && i.update([]);
  }, 50);
};
Me.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
Me.beforeinput = (i, e) => {
  var t;
  let n;
  if (Y.chrome && Y.android && (n = Xm.find((r) => r.inputType == e.inputType)) && (i.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let r = ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.height) || 0;
    setTimeout(() => {
      var s;
      (((s = window.visualViewport) === null || s === void 0 ? void 0 : s.height) || 0) > r + 10 && i.hasFocus && (i.contentDOM.blur(), i.focus());
    }, 100);
  }
};
const Zu = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class rx {
  constructor(e) {
    this.lineWrapping = e, this.doc = de.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.lineLength = 30, this.heightChanged = !1;
  }
  heightForGap(e, t) {
    let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (n += Math.ceil((t - e - n * this.lineLength * 0.5) / this.lineLength)), this.lineHeight * n;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Zu.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, n, r, s) {
    let o = Zu.indexOf(e) > -1, l = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != o;
    if (this.lineWrapping = o, this.lineHeight = t, this.charWidth = n, this.lineLength = r, l) {
      this.heightSamples = {};
      for (let a = 0; a < s.length; a++) {
        let c = s[a];
        c < 0 ? a++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return l;
  }
}
class sx {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Xi {
  /**
  @internal
  */
  constructor(e, t, n, r, s) {
    this.from = e, this.length = t, this.top = n, this.height = r, this.type = s;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this.type) ? this.type : [this]).concat(Array.isArray(e.type) ? e.type : [e]);
    return new Xi(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var ve = /* @__PURE__ */ function(i) {
  return i[i.ByPos = 0] = "ByPos", i[i.ByHeight = 1] = "ByHeight", i[i.ByPosNoHeight = 2] = "ByPosNoHeight", i;
}(ve || (ve = {}));
const ho = 1e-3;
class ct {
  constructor(e, t, n = 2) {
    this.length = e, this.height = t, this.flags = n;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e, t) {
    this.height != t && (Math.abs(this.height - t) > ho && (e.heightChanged = !0), this.height = t);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, n) {
    return ct.of(n);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, n, r) {
    let s = this;
    for (let o = r.length - 1; o >= 0; o--) {
      let { fromA: l, toA: a, fromB: c, toB: h } = r[o], f = s.lineAt(l, ve.ByPosNoHeight, t, 0, 0), u = f.to >= a ? f : s.lineAt(a, ve.ByPosNoHeight, t, 0, 0);
      for (h += u.to - a, a = u.to; o > 0 && f.from <= r[o - 1].toA; )
        l = r[o - 1].fromA, c = r[o - 1].fromB, o--, l < f.from && (f = s.lineAt(l, ve.ByPosNoHeight, t, 0, 0));
      c += f.from - l, l = f.from;
      let d = Vh.build(n, e, c, h);
      s = s.replace(l, a, d);
    }
    return s.updateHeight(n, 0);
  }
  static empty() {
    return new St(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, n = e.length, r = 0, s = 0;
    for (; ; )
      if (t == n)
        if (r > s * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), n += 1 + l.break, r -= l.size;
        } else if (s > r * 2) {
          let l = e[n];
          l.break ? e.splice(n, 1, l.left, null, l.right) : e.splice(n, 1, l.left, l.right), n += 2 + l.break, s -= l.size;
        } else
          break;
      else if (r < s) {
        let l = e[t++];
        l && (r += l.size);
      } else {
        let l = e[--n];
        l && (s += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, n++), new ox(ct.of(e.slice(0, t)), o, ct.of(e.slice(n)));
  }
}
ct.prototype.size = 1;
class Wm extends ct {
  constructor(e, t, n) {
    super(e, t), this.type = n;
  }
  blockAt(e, t, n, r) {
    return new Xi(r, this.length, n, this.height, this.type);
  }
  lineAt(e, t, n, r, s) {
    return this.blockAt(0, n, r, s);
  }
  forEachLine(e, t, n, r, s, o) {
    e <= s + this.length && t >= s && o(this.blockAt(0, n, r, s));
  }
  updateHeight(e, t = 0, n = !1, r) {
    return r && r.from <= t && r.more && this.setHeight(e, r.heights[r.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class St extends Wm {
  constructor(e, t) {
    super(e, t, Qe.Text), this.collapsed = 0, this.widgetHeight = 0;
  }
  replace(e, t, n) {
    let r = n[0];
    return n.length == 1 && (r instanceof St || r instanceof Be && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof Be ? r = new St(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = !1), r) : ct.of(n);
  }
  updateHeight(e, t = 0, n = !1, r) {
    return r && r.from <= t && r.more ? this.setHeight(e, r.heights[r.index++]) : (n || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed))), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Be extends ct {
  constructor(e) {
    super(e, 0);
  }
  lines(e, t) {
    let n = e.lineAt(t).number, r = e.lineAt(t + this.length).number;
    return { firstLine: n, lastLine: r, lineHeight: this.height / (r - n + 1) };
  }
  blockAt(e, t, n, r) {
    let { firstLine: s, lastLine: o, lineHeight: l } = this.lines(t, r), a = Math.max(0, Math.min(o - s, Math.floor((e - n) / l))), { from: c, length: h } = t.line(s + a);
    return new Xi(c, h, n + l * a, l, Qe.Text);
  }
  lineAt(e, t, n, r, s) {
    if (t == ve.ByHeight)
      return this.blockAt(e, n, r, s);
    if (t == ve.ByPosNoHeight) {
      let { from: f, to: u } = n.lineAt(e);
      return new Xi(f, u - f, 0, 0, Qe.Text);
    }
    let { firstLine: o, lineHeight: l } = this.lines(n, s), { from: a, length: c, number: h } = n.lineAt(e);
    return new Xi(a, c, r + l * (h - o), l, Qe.Text);
  }
  forEachLine(e, t, n, r, s, o) {
    let { firstLine: l, lineHeight: a } = this.lines(n, s);
    for (let c = Math.max(e, s), h = Math.min(s + this.length, t); c <= h; ) {
      let f = n.lineAt(c);
      c == e && (r += a * (f.number - l)), o(new Xi(f.from, f.length, r, a, Qe.Text)), r += a, c = f.to + 1;
    }
  }
  replace(e, t, n) {
    let r = this.length - t;
    if (r > 0) {
      let s = n[n.length - 1];
      s instanceof Be ? n[n.length - 1] = new Be(s.length + r) : n.push(null, new Be(r - 1));
    }
    if (e > 0) {
      let s = n[0];
      s instanceof Be ? n[0] = new Be(e + s.length) : n.unshift(new Be(e - 1), null);
    }
    return ct.of(n);
  }
  decomposeLeft(e, t) {
    t.push(new Be(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Be(this.length - e - 1));
  }
  updateHeight(e, t = 0, n = !1, r) {
    let s = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let o = [], l = Math.max(t, r.from), a = -1, c = e.heightChanged;
      for (r.from > t && o.push(new Be(r.from - t - 1).updateHeight(e, t)); l <= s && r.more; ) {
        let f = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let u = r.heights[r.index++];
        a == -1 ? a = u : Math.abs(u - a) >= ho && (a = -2);
        let d = new St(f, u);
        d.outdated = !1, o.push(d), l += f + 1;
      }
      l <= s && o.push(null, new Be(s - l).updateHeight(e, l));
      let h = ct.of(o);
      return e.heightChanged = c || a < 0 || Math.abs(h.height - this.height) >= ho || Math.abs(a - this.lines(e.doc, t).lineHeight) >= ho, h;
    } else
      (n || this.outdated) && (this.setHeight(e, e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class ox extends ct {
  constructor(e, t, n) {
    super(e.length + t + n.length, e.height + n.height, t | (e.outdated || n.outdated ? 2 : 0)), this.left = e, this.right = n, this.size = e.size + n.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, n, r) {
    let s = n + this.left.height;
    return e < s ? this.left.blockAt(e, t, n, r) : this.right.blockAt(e, t, s, r + this.left.length + this.break);
  }
  lineAt(e, t, n, r, s) {
    let o = r + this.left.height, l = s + this.left.length + this.break, a = t == ve.ByHeight ? e < o : e < l, c = a ? this.left.lineAt(e, t, n, r, s) : this.right.lineAt(e, t, n, o, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let h = t == ve.ByPosNoHeight ? ve.ByPosNoHeight : ve.ByPos;
    return a ? c.join(this.right.lineAt(l, h, n, o, l)) : this.left.lineAt(l, h, n, r, s).join(c);
  }
  forEachLine(e, t, n, r, s, o) {
    let l = r + this.left.height, a = s + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, n, r, s, o), t >= a && this.right.forEachLine(e, t, n, l, a, o);
    else {
      let c = this.lineAt(a, ve.ByPos, n, r, s);
      e < c.from && this.left.forEachLine(e, c.from - 1, n, r, s, o), c.to >= e && c.from <= t && o(c), t > c.to && this.right.forEachLine(c.to + 1, t, n, l, a, o);
    }
  }
  replace(e, t, n) {
    let r = this.left.length + this.break;
    if (t < r)
      return this.balanced(this.left.replace(e, t, n), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - r, t - r, n));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of n)
      s.push(l);
    if (e > 0 && Ru(s, o - 1), t < this.length) {
      let l = s.length;
      this.decomposeRight(t, s), Ru(s, l);
    }
    return ct.of(s);
  }
  decomposeLeft(e, t) {
    let n = this.left.length;
    if (e <= n)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (n++, e >= n && t.push(null)), e > n && this.right.decomposeLeft(e - n, t);
  }
  decomposeRight(e, t) {
    let n = this.left.length, r = n + this.break;
    if (e >= r)
      return this.right.decomposeRight(e - r, t);
    e < n && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? ct.of(this.break ? [e, null, t] : [e, t]) : (this.left = e, this.right = t, this.height = e.height + t.height, this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, n = !1, r) {
    let { left: s, right: o } = this, l = t + s.length + this.break, a = null;
    return r && r.from <= t + s.length && r.more ? a = s = s.updateHeight(e, t, n, r) : s.updateHeight(e, t, n), r && r.from <= l + o.length && r.more ? a = o = o.updateHeight(e, l, n, r) : o.updateHeight(e, l, n), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Ru(i, e) {
  let t, n;
  i[e] == null && (t = i[e - 1]) instanceof Be && (n = i[e + 1]) instanceof Be && i.splice(e - 1, 3, new Be(t.length + 1 + n.length));
}
const lx = 5;
class Vh {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof St ? r.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new St(n - this.pos, -1)), this.writtenTo = n, t > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let r = n.widget ? n.widget.estimatedHeight : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let s = t - e;
      n.block ? this.addBlock(new Wm(s, r, n.type)) : (s || r >= lx) && this.addLineDeco(r, s);
    } else
      t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new St(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let n = new Be(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof St)
      return e;
    let t = new St(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine(), e.type == Qe.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, e.type != Qe.WidgetBefore && (this.covering = e);
  }
  addLineDeco(e, t) {
    let n = this.ensureLine();
    n.length += t, n.collapsed += t, n.widgetHeight = Math.max(n.widgetHeight, e), this.writtenTo = this.pos = this.pos + t;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof St) && !this.isCovered ? this.nodes.push(new St(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let r of this.nodes)
      r instanceof St && r.updateHeight(this.oracle, n), n += r ? r.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, n, r) {
    let s = new Vh(n, e);
    return pe.spans(t, n, r, s, 0), s.finish(n);
  }
}
function ax(i, e, t) {
  let n = new cx();
  return pe.compare(i, e, t, n, 0), n.changes;
}
class cx {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, n, r) {
    (e < t || n && n.heightRelevant || r && r.heightRelevant) && Sc(e, t, this.changes, 5);
  }
}
function hx(i, e) {
  let t = i.getBoundingClientRect(), n = i.ownerDocument, r = n.defaultView || window, s = Math.max(0, t.left), o = Math.min(r.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(r.innerHeight, t.bottom);
  for (let c = i.parentNode; c && c != n.body; )
    if (c.nodeType == 1) {
      let h = c, f = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && f.overflow != "visible") {
        let u = h.getBoundingClientRect();
        s = Math.max(s, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = c == i.parentNode ? u.bottom : Math.min(a, u.bottom);
      }
      c = f.position == "absolute" || f.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: s - t.left,
    right: Math.max(s, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function fx(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class sa {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.size = n;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++) {
      let r = e[n], s = t[n];
      if (r.from != s.from || r.to != s.to || r.size != s.size)
        return !1;
    }
    return !0;
  }
  draw(e) {
    return L.replace({ widget: new ux(this.size, e) }).range(this.from, this.to);
  }
}
class ux extends gi {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Du {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaler = Wu, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Te.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(Ah).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new rx(t), this.stateDeco = e.facet(Fr).filter((n) => typeof n != "function"), this.heightMap = ct.empty().applyChanges(this.stateDeco, de.empty, this.heightOracle.setDoc(e.doc), [new ii(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = L.set(this.lineGaps.map((n) => n.draw(!1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let r = n ? t.head : t.anchor;
      if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
        let { from: s, to: o } = this.lineBlockAt(r);
        e.push(new Zs(s, o));
      }
    }
    this.viewports = e.sort((n, r) => n.from - r.from), this.scaler = this.heightMap.height <= 7e6 ? Wu : new px(this.heightOracle.doc, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : kr(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(Fr).filter((c) => typeof c != "function");
    let r = e.changedRanges, s = ii.extendWithRanges(r, ax(n, this.stateDeco, e ? e.changes : De.empty(this.state.doc.length))), o = this.heightMap.height;
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), this.heightMap.height != o && (e.flags |= 2);
    let l = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < l.from || t.range.head > l.to) || !this.viewportIsAppropriate(l)) && (l = this.getViewport(0, t));
    let a = !e.changes.empty || e.flags & 2 || l.from != this.viewport.from || l.to != this.viewport.to;
    this.viewport = l, this.updateForViewport(), a && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(ym) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, n = window.getComputedStyle(t), r = this.heightOracle, s = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? Te.RTL : Te.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = o || this.mustMeasureContent || this.contentDOMHeight != t.clientHeight;
    this.contentDOMHeight = t.clientHeight, this.mustMeasureContent = !1;
    let a = 0, c = 0, h = parseInt(n.paddingTop) || 0, f = parseInt(n.paddingBottom) || 0;
    (this.paddingTop != h || this.paddingBottom != f) && (this.paddingTop = h, this.paddingBottom = f, a |= 10), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (l = !0), this.editorWidth = e.scrollDOM.clientWidth, a |= 8);
    let u = (this.printing ? fx : hx)(t, this.paddingTop), d = u.top - this.pixelViewport.top, O = u.bottom - this.pixelViewport.bottom;
    this.pixelViewport = u;
    let m = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (m != this.inView && (this.inView = m, m && (l = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let b = t.clientWidth;
    if ((this.contentDOMWidth != b || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = b, this.editorHeight = e.scrollDOM.clientHeight, a |= 8), l) {
      let P = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(P) && (o = !0), o || r.lineWrapping && Math.abs(b - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: C, charWidth: x } = e.docView.measureTextSize();
        o = C > 0 && r.refresh(s, C, x, b / x, P), o && (e.docView.minWidth = 0, a |= 8);
      }
      d > 0 && O > 0 ? c = Math.max(d, O) : d < 0 && O < 0 && (c = Math.min(d, O)), r.heightChanged = !1;
      for (let C of this.viewports) {
        let x = C.from == this.viewport.from ? P : e.docView.measureVisibleLineHeights(C);
        this.heightMap = (o ? ct.empty().applyChanges(this.stateDeco, de.empty, this.heightOracle, [new ii(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, o, new sx(C.from, x));
      }
      r.heightChanged && (a |= 2);
    }
    let y = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return y && (this.viewport = this.getViewport(c, this.scrollTarget)), this.updateForViewport(), (a & 2 || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), a |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), a;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, s = this.state.doc, { visibleTop: o, visibleBottom: l } = this, a = new Zs(r.lineAt(o - n * 1e3, ve.ByHeight, s, 0, 0).from, r.lineAt(l + (1 - n) * 1e3, ve.ByHeight, s, 0, 0).to);
    if (t) {
      let { head: c } = t.range;
      if (c < a.from || c > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = r.lineAt(c, ve.ByPos, s, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && c < a.from ? u = f.top : u = f.bottom - h, a = new Zs(r.lineAt(u - 1e3 / 2, ve.ByHeight, s, 0, 0).from, r.lineAt(u + h + 1e3 / 2, ve.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
    return new Zs(this.heightMap.lineAt(n, ve.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(r, ve.ByPos, this.state.doc, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView)
      return !0;
    let { top: r } = this.heightMap.lineAt(e, ve.ByPos, this.state.doc, 0, 0), { bottom: s } = this.heightMap.lineAt(t, ve.ByPos, this.state.doc, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || r <= o - Math.max(10, Math.min(
      -n,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || s >= l + Math.max(10, Math.min(
      n,
      250
      /* VP.MaxCoverMargin */
    ))) && r > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let n = [];
    for (let r of e)
      t.touchesRange(r.from, r.to) || n.push(new sa(t.mapPos(r.from), t.mapPos(r.to), r.size));
    return n;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let n = this.heightOracle.lineWrapping, r = n ? 1e4 : 2e3, s = r >> 1, o = r << 1;
    if (this.defaultTextDirection != Te.LTR && !n)
      return [];
    let l = [], a = (c, h, f, u) => {
      if (h - c < s)
        return;
      let d = this.state.selection.main, O = [d.from];
      d.empty || O.push(d.to);
      for (let b of O)
        if (b > c && b < h) {
          a(c, b - 10, f, u), a(b + 10, h, f, u);
          return;
        }
      let m = Ox(e, (b) => b.from >= f.from && b.to <= f.to && Math.abs(b.from - c) < s && Math.abs(b.to - h) < s && !O.some((y) => b.from < y && b.to > y));
      if (!m) {
        if (h < f.to && t && n && t.visibleRanges.some((b) => b.from <= h && b.to >= h)) {
          let b = t.moveToLineBoundary(v.cursor(h), !1, !0).head;
          b > c && (h = b);
        }
        m = new sa(c, h, this.gapSize(f, c, h, u));
      }
      l.push(m);
    };
    for (let c of this.viewportLines) {
      if (c.length < o)
        continue;
      let h = dx(c.from, c.to, this.stateDeco);
      if (h.total < o)
        continue;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, u, d;
      if (n) {
        let O = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, b;
        if (f != null) {
          let y = Ds(h, f), P = ((this.visibleBottom - this.visibleTop) / 2 + O) / c.height;
          m = y - P, b = y + P;
        } else
          m = (this.visibleTop - c.top - O) / c.height, b = (this.visibleBottom - c.top + O) / c.height;
        u = Rs(h, m), d = Rs(h, b);
      } else {
        let O = h.total * this.heightOracle.charWidth, m = r * this.heightOracle.charWidth, b, y;
        if (f != null) {
          let P = Ds(h, f), C = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + m) / O;
          b = P - C, y = P + C;
        } else
          b = (this.pixelViewport.left - m) / O, y = (this.pixelViewport.right + m) / O;
        u = Rs(h, b), d = Rs(h, y);
      }
      u > c.from && a(c.from, u, c, h), d < c.to && a(d, c.to, c, h);
    }
    return l;
  }
  gapSize(e, t, n, r) {
    let s = Ds(r, n) - Ds(r, t);
    return this.heightOracle.lineWrapping ? e.height * s : r.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    sa.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = L.set(e.map((t) => t.draw(this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    pe.spans(e, this.viewport.from, this.viewport.to, {
      span(r, s) {
        t.push({ from: r, to: s });
      },
      point() {
      }
    }, 20);
    let n = t.length != this.visibleRanges.length || this.visibleRanges.some((r, s) => r.from != t[s].from || r.to != t[s].to);
    return this.visibleRanges = t, n ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || kr(this.heightMap.lineAt(e, ve.ByPos, this.state.doc, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return kr(this.heightMap.lineAt(this.scaler.fromDOM(e), ve.ByHeight, this.state.doc, 0, 0), this.scaler);
  }
  elementAtHeight(e) {
    return kr(this.heightMap.blockAt(this.scaler.fromDOM(e), this.state.doc, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Zs {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function dx(i, e, t) {
  let n = [], r = i, s = 0;
  return pe.spans(t, i, e, {
    span() {
    },
    point(o, l) {
      o > r && (n.push({ from: r, to: o }), s += o - r), r = l;
    }
  }, 20), r < e && (n.push({ from: r, to: e }), s += e - r), { total: s, ranges: n };
}
function Rs({ total: i, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let n = Math.floor(i * t);
  for (let r = 0; ; r++) {
    let { from: s, to: o } = e[r], l = o - s;
    if (n <= l)
      return s + n;
    n -= l;
  }
}
function Ds(i, e) {
  let t = 0;
  for (let { from: n, to: r } of i.ranges) {
    if (e <= r) {
      t += e - n;
      break;
    }
    t += r - n;
  }
  return t / i.total;
}
function Ox(i, e) {
  for (let t of i)
    if (e(t))
      return t;
}
const Wu = {
  toDOM(i) {
    return i;
  },
  fromDOM(i) {
    return i;
  },
  scale: 1
};
class px {
  constructor(e, t, n) {
    let r = 0, s = 0, o = 0;
    this.viewports = n.map(({ from: l, to: a }) => {
      let c = t.lineAt(l, ve.ByPos, e, 0, 0).top, h = t.lineAt(a, ve.ByPos, e, 0, 0).bottom;
      return r += h - c, { from: l, to: a, top: c, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (t.height - r);
    for (let l of this.viewports)
      l.domTop = o + (l.top - s) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), s = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, n = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.top)
        return r + (e - n) * this.scale;
      if (e <= s.bottom)
        return s.domTop + (e - s.top);
      n = s.bottom, r = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.domTop)
        return n + (e - r) / this.scale;
      if (e <= s.domBottom)
        return s.top + (e - s.domTop);
      n = s.bottom, r = s.domBottom;
    }
  }
}
function kr(i, e) {
  if (e.scale == 1)
    return i;
  let t = e.toDOM(i.top), n = e.toDOM(i.bottom);
  return new Xi(i.from, i.length, t, n - t, Array.isArray(i.type) ? i.type.map((r) => kr(r, e)) : i.type);
}
const Ws = /* @__PURE__ */ j.define({ combine: (i) => i.join(" ") }), Pc = /* @__PURE__ */ j.define({ combine: (i) => i.indexOf(!0) > -1 }), kc = /* @__PURE__ */ Ui.newName(), Nm = /* @__PURE__ */ Ui.newName(), Mm = /* @__PURE__ */ Ui.newName(), Ym = { "&light": "." + Nm, "&dark": "." + Mm };
function Cc(i, e, t) {
  return new Ui(e, {
    finish(n) {
      return /&/.test(n) ? n.replace(/&\w*/, (r) => {
        if (r == "&")
          return i;
        if (!t || !t[r])
          throw new RangeError(`Unsupported selector: ${r}`);
        return t[r];
      }) : i + " " + n;
    }
  });
}
const mx = /* @__PURE__ */ Cc("." + kc, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#444"
  },
  "&.cm-focused .cm-cursor": {
    display: "block"
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    left: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace:before": {
    content: "attr(data-display)",
    position: "absolute",
    pointerEvents: "none",
    color: "#888"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Ym);
class gx {
  constructor(e, t, n, r) {
    this.typeOver = r, this.bounds = null, this.text = "";
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, n, 0))) {
      let l = s || o ? [] : Sx(e), a = new km(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = yx(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = s && s.node == l.focusNode && s.offset == l.focusOffset || !Hn(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Hn(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = v.single(c, a);
    }
  }
}
function jm(i, e) {
  let t, { newSel: n } = e, r = i.state.selection.main;
  if (e.bounds) {
    let { from: s, to: o } = e.bounds, l = r.from, a = null;
    (i.inputState.lastKeyCode === 8 && i.inputState.lastKeyTime > Date.now() - 100 || Y.android && e.text.length < o - s) && (l = r.to, a = "end");
    let c = bx(i.state.doc.sliceString(s, o, _i), e.text, l - s, a);
    c && (Y.chrome && i.inputState.lastKeyCode == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == _i + _i && c.toB--, t = {
      from: s + c.from,
      to: s + c.toA,
      insert: de.of(e.text.slice(c.from, c.toB).split(_i))
    });
  } else
    n && (!i.hasFocus && i.state.facet(Cl) || n.main.eq(r)) && (n = null);
  if (!t && !n)
    return !1;
  if (!t && e.typeOver && !r.empty && n && n.main.empty ? t = { from: r.from, to: r.to, insert: i.state.doc.slice(r.from, r.to) } : t && t.from >= r.from && t.to <= r.to && (t.from != r.from || t.to != r.to) && r.to - r.from - (t.to - t.from) <= 4 ? t = {
    from: r.from,
    to: r.to,
    insert: i.state.doc.slice(r.from, t.from).append(t.insert).append(i.state.doc.slice(t.to, r.to))
  } : (Y.mac || Y.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) ? (n && t.insert.length == 2 && (n = v.single(n.main.anchor - 1, n.main.head - 1)), t = { from: r.from, to: r.to, insert: de.of([" "]) }) : Y.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && i.lineWrapping && (n && (n = v.single(n.main.anchor - 1, n.main.head - 1)), t = { from: r.from, to: r.to, insert: de.of([" "]) }), t) {
    let s = i.state;
    if (Y.ios && i.inputState.flushIOSKey(i) || Y.android && (t.from == r.from && t.to == r.to && t.insert.length == 1 && t.insert.lines == 2 && qn(i.contentDOM, "Enter", 13) || t.from == r.from - 1 && t.to == r.to && t.insert.length == 0 && qn(i.contentDOM, "Backspace", 8) || t.from == r.from && t.to == r.to + 1 && t.insert.length == 0 && qn(i.contentDOM, "Delete", 46)))
      return !0;
    let o = t.insert.toString();
    if (i.state.facet(bm).some((c) => c(i, t.from, t.to, o)))
      return !0;
    i.inputState.composing >= 0 && i.inputState.composing++;
    let l;
    if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!n || n.main.empty && n.main.from == t.from + t.insert.length) && i.inputState.composing < 0) {
      let c = r.from < t.from ? s.sliceDoc(r.from, t.from) : "", h = r.to > t.to ? s.sliceDoc(t.to, r.to) : "";
      l = s.replaceSelection(i.state.toText(c + t.insert.sliceString(0, void 0, i.state.lineBreak) + h));
    } else {
      let c = s.changes(t), h = n && !s.selection.main.eq(n.main) && n.main.to <= c.newLength ? n.main : void 0;
      if (s.selection.ranges.length > 1 && i.inputState.composing >= 0 && t.to <= r.to && t.to >= r.to - 10) {
        let f = i.state.sliceDoc(t.from, t.to), u = Cm(i) || i.state.doc.lineAt(r.head), d = r.to - t.to, O = r.to - r.from;
        l = s.changeByRange((m) => {
          if (m.from == r.from && m.to == r.to)
            return { changes: c, range: h || m.map(c) };
          let b = m.to - d, y = b - f.length;
          if (m.to - m.from != O || i.state.sliceDoc(y, b) != f || // Unfortunately, there's no way to make multiple
          // changes in the same node work without aborting
          // composition, so cursors in the composition range are
          // ignored.
          u && m.to >= u.from && m.from <= u.to)
            return { range: m };
          let P = s.changes({ from: y, to: b, insert: t.insert }), C = m.to - r.to;
          return {
            changes: P,
            range: h ? v.range(Math.max(0, h.anchor + C), Math.max(0, h.head + C)) : m.map(P)
          };
        });
      } else
        l = {
          changes: c,
          selection: h && s.selection.replaceRange(h)
        };
    }
    let a = "input.type";
    return i.composing && (a += ".compose", i.inputState.compositionFirstChange && (a += ".start", i.inputState.compositionFirstChange = !1)), i.dispatch(l, { scrollIntoView: !0, userEvent: a }), !0;
  } else if (n && !n.main.eq(r)) {
    let s = !1, o = "select";
    return i.inputState.lastSelectionTime > Date.now() - 50 && (i.inputState.lastSelectionOrigin == "select" && (s = !0), o = i.inputState.lastSelectionOrigin), i.dispatch({ selection: n, scrollIntoView: s, userEvent: o }), !0;
  } else
    return !1;
}
function bx(i, e, t, n) {
  let r = Math.min(i.length, e.length), s = 0;
  for (; s < r && i.charCodeAt(s) == e.charCodeAt(s); )
    s++;
  if (s == r && i.length == e.length)
    return null;
  let o = i.length, l = e.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (n == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    t -= o + a - s;
  }
  if (o < s && i.length < e.length) {
    let a = t <= s && t >= o ? s - t : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = t <= s && t >= l ? s - t : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { from: s, toA: o, toB: l };
}
function Sx(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: n, focusNode: r, focusOffset: s } = i.observer.selectionRange;
  return t && (e.push(new Su(t, n)), (r != t || s != n) && e.push(new Su(r, s))), e;
}
function yx(i, e) {
  if (i.length == 0)
    return null;
  let t = i[0].pos, n = i.length == 2 ? i[1].pos : t;
  return t > -1 && n > -1 ? v.single(t + e, n + e) : null;
}
const Qx = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, oa = Y.ie && Y.ie_version <= 11;
class vx {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new pv(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let n of t)
        this.queue.push(n);
      (Y.ie && Y.ie_version <= 11 || Y.ios && e.composing) && t.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), oa && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM), this.resizeContent = new ResizeObserver(() => this.view.requestMeasure()), this.resizeContent.observe(e.contentDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, {}), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runScrollHandlers(this.view, e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint() {
    this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500);
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: n } = this, r = this.selectionRange;
    if (n.state.facet(Cl) ? n.root.activeElement != this.dom : !co(n.dom, r))
      return;
    let s = r.anchorNode && n.docView.nearest(r.anchorNode);
    if (s && s.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (Y.ie && Y.ie_version <= 11 || Y.android && Y.chrome) && !n.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    r.focusNode && Vo(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = Y.safari && e.root.nodeType == 11 && fv(this.dom.ownerDocument) == this.dom && xx(this.view) || Ao(e.root);
    if (!t || this.selectionRange.eq(t))
      return !1;
    let n = co(this.dom, t);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && gv(this.dom, t) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(t), n && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let n = this.dom; n; )
      if (n.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == n ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(n), n = n.assignedSlot || n.parentNode;
      else if (n.nodeType == 11)
        n = n.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let n of this.scrollTargets)
        n.removeEventListener("scroll", this.onScroll);
      for (let n of this.scrollTargets = t)
        n.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, Qx), oa && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), oa && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var n;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), !this.flush() && s.force && qn(this.dom, s.key, s.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((n = this.delayedAndroidKey) === null || n === void 0) && n.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  processRecords() {
    let e = this.queue;
    for (let s of this.observer.takeRecords())
      e.push(s);
    e.length && (this.queue = []);
    let t = -1, n = -1, r = !1;
    for (let s of e) {
      let o = this.readMutation(s);
      o && (o.typeOver && (r = !0), t == -1 ? { from: t, to: n } = o : (t = Math.min(o.from, t), n = Math.max(o.to, n)));
    }
    return { from: t, to: n, typeOver: r };
  }
  readChange() {
    let { from: e, to: t, typeOver: n } = this.processRecords(), r = this.selectionChanged && co(this.dom, this.selectionRange);
    return e < 0 && !r ? null : (e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new gx(this.view, e, t, n));
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return !1;
    let n = this.view.state, r = jm(this.view, t);
    return this.view.state == n && this.view.update([]), r;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.dirty |= 4), e.type == "childList") {
      let n = Nu(t, e.previousSibling || e.target.previousSibling, -1), r = Nu(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? t.posAfter(n) : t.posAtStart,
        to: r ? t.posBefore(r) : t.posAtEnd,
        typeOver: !1
      };
    } else
      return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var e, t, n, r;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect(), (r = this.resizeContent) === null || r === void 0 || r.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function Nu(i, e, t) {
  for (; e; ) {
    let n = xe.get(e);
    if (n && n.parent == i)
      return n;
    let r = e.parentNode;
    e = r != i.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function xx(i) {
  let e = null;
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  if (i.contentDOM.addEventListener("beforeinput", t, !0), i.dom.ownerDocument.execCommand("indent"), i.contentDOM.removeEventListener("beforeinput", t, !0), !e)
    return null;
  let n = e.startContainer, r = e.startOffset, s = e.endContainer, o = e.endOffset, l = i.docView.domAtPos(i.state.selection.main.anchor);
  return Vo(l.node, l.offset, s, o) && ([n, r, s, o] = [s, o, n, r]), { anchorNode: n, anchorOffset: r, focusNode: s, focusOffset: o };
}
class U {
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: fixed; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), this._dispatch = e.dispatch || ((t) => this.update([t])), this.dispatch = this.dispatch.bind(this), this._root = e.root || mv(e.parent) || document, this.viewState = new Du(e.state || ue.create(e)), this.plugins = this.state.facet($r).map((t) => new ia(t));
    for (let t of this.plugins)
      t.update(this);
    this.observer = new vx(this), this.inputState = new qv(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new yu(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), e.parent && e.parent.appendChild(this.dom);
  }
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  dispatch(...e) {
    this._dispatch(e.length == 1 && e[0] instanceof Ne ? e[0] : this.state.update(...e));
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, n = !1, r, s = this.state;
    for (let c of e) {
      if (c.startState != s)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = c.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.observer.delayedAndroidKey, l = null;
    if (o ? (this.observer.clearDelayedAndroidKey(), l = this.observer.readChange(), (l && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (l = null)) : this.observer.clear(), s.facet(ue.phrases) != this.state.facet(ue.phrases))
      return this.setState(s);
    r = Ro.create(this, s, e);
    let a = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let c of e) {
        if (a && (a = a.map(c.changes)), c.scrollIntoView) {
          let { main: h } = c.state.selection;
          a = new Zo(h.empty ? h : v.cursor(h.head, h.head > h.anchor ? -1 : 1));
        }
        for (let h of c.effects)
          h.is(gu) && (a = h.value);
      }
      this.viewState.update(r, a), this.bidiCache = Do.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), t = this.docView.update(r), this.state.facet(Pr) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((c) => c.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(Ws) != r.state.facet(Ws) && (this.viewState.mustMeasureContent = !0), (t || n || a || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !r.empty)
      for (let c of this.state.facet(yc))
        c(r);
    l && !jm(this, l) && o.force && qn(this.contentDOM, o.key, o.keyCode);
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let n of this.plugins)
        n.destroy(this);
      this.viewState = new Du(e), this.plugins = e.facet($r).map((n) => new ia(n)), this.pluginMap.clear();
      for (let n of this.plugins)
        n.update(this);
      this.docView = new yu(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet($r), n = e.state.facet($r);
    if (t != n) {
      let r = [];
      for (let s of n) {
        let o = t.indexOf(s);
        if (o < 0)
          r.push(new ia(s));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, r.push(l);
        }
      }
      for (let s of this.plugins)
        s.mustUpdate != e && s.destroy(this);
      this.plugins = r, this.pluginMap.clear(), this.inputState.ensureHandlers(this, this.plugins);
    } else
      for (let r of this.plugins)
        r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++)
      this.plugins[r].update(this);
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, { scrollHeight: n, scrollTop: r, clientHeight: s } = this.scrollDOM, o = r > n - s - 4 ? n : r;
    try {
      for (let l = 0; ; l++) {
        this.updateState = 1;
        let a = this.viewport, c = this.viewState.lineBlockAtHeight(o), h = this.viewState.measure(this);
        if (!h && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let f = [];
        h & 4 || ([this.measureRequests, f] = [f, this.measureRequests]);
        let u = f.map((b) => {
          try {
            return b.read(this);
          } catch (y) {
            return xt(this.state, y), Mu;
          }
        }), d = Ro.create(this, this.state, []), O = !1, m = !1;
        d.flags |= h, t ? t.flags |= h : t = d, this.updateState = 2, d.empty || (this.updatePlugins(d), this.inputState.update(d), this.updateAttrs(), O = this.docView.update(d));
        for (let b = 0; b < f.length; b++)
          if (u[b] != Mu)
            try {
              let y = f[b];
              y.write && y.write(u[b], this);
            } catch (y) {
              xt(this.state, y);
            }
        if (this.viewState.editorHeight)
          if (this.viewState.scrollTarget)
            this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, m = !0;
          else {
            let b = this.viewState.lineBlockAt(c.from).top - c.top;
            (b > 1 || b < -1) && (this.scrollDOM.scrollTop += b, m = !0);
          }
        if (O && this.docView.updateSelection(!0), this.viewport.from == a.from && this.viewport.to == a.to && !m && this.measureRequests.length == 0)
          break;
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(yc))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return kc + " " + (this.state.facet(Pc) ? Mm : Nm) + " " + this.state.facet(Ws);
  }
  updateAttrs() {
    let e = Yu(this, Qm, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(Cl) ? "true" : "false",
      class: "cm-content",
      style: `${Y.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), Yu(this, Ah, t);
    let n = this.observer.ignore(() => {
      let r = bc(this.contentDOM, this.contentAttrs, t), s = bc(this.dom, this.editorAttrs, e);
      return r || s;
    });
    return this.editorAttrs = e, this.contentAttrs = t, n;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let r of n.effects)
        if (r.is(U.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = r.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Pr), Ui.mount(this.root, this.styleModules.concat(mx).reverse());
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.spec != e) && this.pluginMap.set(e, t = this.plugins.find((n) => n.spec == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line breaks, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, n) {
    return ra(this, e, Pu(this, e, t, n));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return ra(this, e, Pu(this, e, t, (n) => Uv(this, e.head, n)));
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, n = !0) {
    return jv(this, e, t, n);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, n) {
    return ra(this, e, Iv(this, e, t, n));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), _m(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(e, t);
    if (!n || n.left == n.right)
      return n;
    let r = this.state.doc.lineAt(e), s = this.bidiSpans(r), o = s[Bn.find(s, e - r.from, -1, t)];
    return Ch(n, o.dir == Te.LTR == t > 0);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(Sm) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > wx)
      return $m(e.length);
    let t = this.textDirectionAt(e.from);
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t)
        return r.order;
    let n = Cv(e.text, t);
    return this.bidiCache.push(new Do(e.from, e.to, t, n)), n;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || Y.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      tm(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    return gu.of(new Zo(typeof e == "number" ? v.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return Re.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let n = Ui.newName(), r = [Ws.of(n), Pr.of(Cc(`.${n}`, e))];
    return t && t.dark && r.push(Pc.of(!0)), r;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return $n.lowest(Pr.of(Cc("." + kc, e, Ym)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let n = e.querySelector(".cm-content"), r = n && xe.get(n) || xe.get(e);
    return ((t = r == null ? void 0 : r.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
U.styleModule = Pr;
U.inputHandler = bm;
U.perLineTextDirection = Sm;
U.exceptionSink = gm;
U.updateListener = yc;
U.editable = Cl;
U.mouseSelectionStyle = mm;
U.dragMovesSelection = pm;
U.clickAddsSelectionRange = Om;
U.decorations = Fr;
U.atomicRanges = vm;
U.scrollMargins = xm;
U.darkTheme = Pc;
U.contentAttributes = Ah;
U.editorAttributes = Qm;
U.lineWrapping = /* @__PURE__ */ U.contentAttributes.of({ class: "cm-lineWrapping" });
U.announce = /* @__PURE__ */ ne.define();
const wx = 4096, Mu = {};
class Do {
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.dir = n, this.order = r;
  }
  static update(e, t) {
    if (t.empty)
      return e;
    let n = [], r = e.length ? e[e.length - 1].dir : Te.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == r && !t.touchesRange(o.from, o.to) && n.push(new Do(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.order));
    }
    return n;
  }
}
function Yu(i, e, t) {
  for (let n = i.state.facet(e), r = n.length - 1; r >= 0; r--) {
    let s = n[r], o = typeof s == "function" ? s(i) : s;
    o && gc(o, t);
  }
  return t;
}
const $x = Y.mac ? "mac" : Y.windows ? "win" : Y.linux ? "linux" : "key";
function Px(i, e) {
  const t = i.split(/-(?!$)/);
  let n = t[t.length - 1];
  n == "Space" && (n = " ");
  let r, s, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const c = t[a];
    if (/^(cmd|meta|m)$/i.test(c))
      l = !0;
    else if (/^a(lt)?$/i.test(c))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      s = !0;
    else if (/^s(hift)?$/i.test(c))
      o = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? l = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), l && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Ns(i, e, t) {
  return e.altKey && (i = "Alt-" + i), e.ctrlKey && (i = "Ctrl-" + i), e.metaKey && (i = "Meta-" + i), t !== !1 && e.shiftKey && (i = "Shift-" + i), i;
}
const kx = /* @__PURE__ */ $n.default(/* @__PURE__ */ U.domEventHandlers({
  keydown(i, e) {
    return Im(Um(e.state), i, e, "editor");
  }
})), gs = /* @__PURE__ */ j.define({ enables: kx }), ju = /* @__PURE__ */ new WeakMap();
function Um(i) {
  let e = i.facet(gs), t = ju.get(e);
  return t || ju.set(e, t = _x(e.reduce((n, r) => n.concat(r), []))), t;
}
function Cx(i, e, t) {
  return Im(Um(i.state), e, i, t);
}
let ki = null;
const Tx = 4e3;
function _x(i, e = $x) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = (o, l) => {
    let a = n[o];
    if (a == null)
      n[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, a, c) => {
    var h, f;
    let u = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), d = l.split(/ (?!$)/).map((b) => Px(b, e));
    for (let b = 1; b < d.length; b++) {
      let y = d.slice(0, b).join(" ");
      r(y, !0), u[y] || (u[y] = {
        preventDefault: !0,
        run: [(P) => {
          let C = ki = { view: P, prefix: y, scope: o };
          return setTimeout(() => {
            ki == C && (ki = null);
          }, Tx), !0;
        }]
      });
    }
    let O = d.join(" ");
    r(O, !1);
    let m = u[O] || (u[O] = { preventDefault: !1, run: ((f = (h = u._any) === null || h === void 0 ? void 0 : h.run) === null || f === void 0 ? void 0 : f.slice()) || [] });
    a && m.run.push(a), c && (m.preventDefault = !0);
  };
  for (let o of i) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let c of l) {
        let h = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, run: [] });
        for (let f in h)
          h[f].run.push(o.any);
      }
    let a = o[e] || o.key;
    if (a)
      for (let c of l)
        s(c, a, o.run, o.preventDefault), o.shift && s(c, "Shift-" + a, o.shift, o.preventDefault);
  }
  return t;
}
function Im(i, e, t, n) {
  let r = hv(e), s = Le(r, 0), o = yt(s) == r.length && r != " ", l = "", a = !1;
  ki && ki.view == t && ki.scope == n && (l = ki.prefix + " ", (a = Am.indexOf(e.keyCode) < 0) && (ki = null));
  let c = /* @__PURE__ */ new Set(), h = (O) => {
    if (O) {
      for (let m of O.run)
        if (!c.has(m) && (c.add(m), m(t, e)))
          return !0;
      O.preventDefault && (a = !0);
    }
    return !1;
  }, f = i[n], u, d;
  if (f) {
    if (h(f[l + Ns(r, e, !o)]))
      return !0;
    if (o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
    !(Y.windows && e.ctrlKey && e.altKey) && (u = Ii[e.keyCode]) && u != r) {
      if (h(f[l + Ns(u, e, !0)]))
        return !0;
      if (e.shiftKey && (d = Lr[e.keyCode]) != r && d != u && h(f[l + Ns(d, e, !1)]))
        return !0;
    } else if (o && e.shiftKey && h(f[l + Ns(r, e, !0)]))
      return !0;
    if (h(f._any))
      return !0;
  }
  return a;
}
class bs {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, n, r, s) {
    this.className = e, this.left = t, this.top = n, this.width = r, this.height = s;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, n) {
    if (n.empty) {
      let r = e.coordsAtPos(n.head, n.assoc || 1);
      if (!r)
        return [];
      let s = qm(e);
      return [new bs(t, r.left - s.left, r.top - s.top, null, r.bottom - r.top)];
    } else
      return Xx(e, t, n);
  }
}
function qm(i) {
  let e = i.scrollDOM.getBoundingClientRect();
  return { left: (i.textDirection == Te.LTR ? e.left : e.right - i.scrollDOM.clientWidth) - i.scrollDOM.scrollLeft, top: e.top - i.scrollDOM.scrollTop };
}
function Uu(i, e, t) {
  let n = v.cursor(e);
  return {
    from: Math.max(t.from, i.moveToLineBoundary(n, !1, !0).from),
    to: Math.min(t.to, i.moveToLineBoundary(n, !0, !0).from),
    type: Qe.Text
  };
}
function Iu(i, e) {
  let t = i.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let n of t.type)
      if (n.to > e || n.to == e && (n.to == t.to || n.type == Qe.Text))
        return n;
  }
  return t;
}
function Xx(i, e, t) {
  if (t.to <= i.viewport.from || t.from >= i.viewport.to)
    return [];
  let n = Math.max(t.from, i.viewport.from), r = Math.min(t.to, i.viewport.to), s = i.textDirection == Te.LTR, o = i.contentDOM, l = o.getBoundingClientRect(), a = qm(i), c = window.getComputedStyle(o.firstChild), h = l.left + parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)), f = l.right - parseInt(c.paddingRight), u = Iu(i, n), d = Iu(i, r), O = u.type == Qe.Text ? u : null, m = d.type == Qe.Text ? d : null;
  if (i.lineWrapping && (O && (O = Uu(i, n, O)), m && (m = Uu(i, r, m))), O && m && O.from == m.from)
    return y(P(t.from, t.to, O));
  {
    let x = O ? P(t.from, null, O) : C(u, !1), T = m ? P(null, t.to, m) : C(d, !0), R = [];
    return (O || u).to < (m || d).from - 1 ? R.push(b(h, x.bottom, f, T.top)) : x.bottom < T.top && i.elementAtHeight((x.bottom + T.top) / 2).type == Qe.Text && (x.bottom = T.top = (x.bottom + T.top) / 2), y(x).concat(R).concat(y(T));
  }
  function b(x, T, R, G) {
    return new bs(
      e,
      x - a.left,
      T - a.top - 0.01,
      R - x,
      G - T + 0.01
      /* C.Epsilon */
    );
  }
  function y({ top: x, bottom: T, horizontal: R }) {
    let G = [];
    for (let N = 0; N < R.length; N += 2)
      G.push(b(R[N], x, R[N + 1], T));
    return G;
  }
  function P(x, T, R) {
    let G = 1e9, N = -1e9, W = [];
    function D(re, Oe, ae, H, K) {
      let B = i.coordsAtPos(re, re == R.to ? -2 : 2), fe = i.coordsAtPos(ae, ae == R.from ? 2 : -2);
      G = Math.min(B.top, fe.top, G), N = Math.max(B.bottom, fe.bottom, N), K == Te.LTR ? W.push(s && Oe ? h : B.left, s && H ? f : fe.right) : W.push(!s && H ? h : fe.left, !s && Oe ? f : B.right);
    }
    let F = x ?? R.from, J = T ?? R.to;
    for (let re of i.visibleRanges)
      if (re.to > F && re.from < J)
        for (let Oe = Math.max(re.from, F), ae = Math.min(re.to, J); ; ) {
          let H = i.state.doc.lineAt(Oe);
          for (let K of i.bidiSpans(H)) {
            let B = K.from + H.from, fe = K.to + H.from;
            if (B >= ae)
              break;
            fe > Oe && D(Math.max(B, Oe), x == null && B <= F, Math.min(fe, ae), T == null && fe >= J, K.dir);
          }
          if (Oe = H.to + 1, Oe >= ae)
            break;
        }
    return W.length == 0 && D(F, x == null, J, T == null, i.textDirection), { top: G, bottom: N, horizontal: W };
  }
  function C(x, T) {
    let R = l.top + (T ? x.top : x.bottom);
    return { top: R, bottom: R, horizontal: [] };
  }
}
function Ax(i, e) {
  return i.constructor == e.constructor && i.eq(e);
}
class Vx {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(fo) != e.state.facet(fo) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && e.view.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, n = e.facet(fo);
    for (; t < n.length && n[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, n) => !Ax(t, this.drawn[n]))) {
      let t = this.dom.firstChild, n = 0;
      for (let r of e)
        r.update && t && r.constructor && this.drawn[n].constructor && r.update(t, this.drawn[n]) ? (t = t.nextSibling, n++) : this.dom.insertBefore(r.draw(), t);
      for (; t; ) {
        let r = t.nextSibling;
        t.remove(), t = r;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const fo = /* @__PURE__ */ j.define();
function Bm(i) {
  return [
    Re.define((e) => new Vx(e, i)),
    fo.of(i)
  ];
}
const Lm = !Y.ios, Hr = /* @__PURE__ */ j.define({
  combine(i) {
    return ri(i, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Ex(i = {}) {
  return [
    Hr.of(i),
    Zx,
    Rx,
    Dx,
    ym.of(!0)
  ];
}
function zm(i) {
  return i.startState.facet(Hr) != i.state.facet(Hr);
}
const Zx = /* @__PURE__ */ Bm({
  above: !0,
  markers(i) {
    let { state: e } = i, t = e.facet(Hr), n = [];
    for (let r of e.selection.ranges) {
      let s = r == e.selection.main;
      if (r.empty ? !s || Lm : t.drawRangeCursor) {
        let o = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = r.empty ? r : v.cursor(r.head, r.head > r.anchor ? -1 : 1);
        for (let a of bs.forRange(i, o, l))
          n.push(a);
      }
    }
    return n;
  },
  update(i, e) {
    i.transactions.some((n) => n.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = zm(i);
    return t && qu(i.state, e), i.docChanged || i.selectionSet || t;
  },
  mount(i, e) {
    qu(e.state, i);
  },
  class: "cm-cursorLayer"
});
function qu(i, e) {
  e.style.animationDuration = i.facet(Hr).cursorBlinkRate + "ms";
}
const Rx = /* @__PURE__ */ Bm({
  above: !1,
  markers(i) {
    return i.state.selection.ranges.map((e) => e.empty ? [] : bs.forRange(i, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(i, e) {
    return i.docChanged || i.selectionSet || i.viewportChanged || zm(i);
  },
  class: "cm-selectionLayer"
}), Gm = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
Lm && (Gm[".cm-line"].caretColor = "transparent !important");
const Dx = /* @__PURE__ */ $n.highest(/* @__PURE__ */ U.theme(Gm)), Fm = /* @__PURE__ */ ne.define({
  map(i, e) {
    return i == null ? null : e.mapPos(i);
  }
}), Cr = /* @__PURE__ */ qe.define({
  create() {
    return null;
  },
  update(i, e) {
    return i != null && (i = e.changes.mapPos(i)), e.effects.reduce((t, n) => n.is(Fm) ? n.value : t, i);
  }
}), Wx = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.view = i, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(i) {
    var e;
    let t = i.state.field(Cr);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (i.startState.field(Cr) != t || i.docChanged || i.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let i = this.view.state.field(Cr), e = i != null && this.view.coordsAtPos(i);
    if (!e)
      return null;
    let t = this.view.scrollDOM.getBoundingClientRect();
    return {
      left: e.left - t.left + this.view.scrollDOM.scrollLeft,
      top: e.top - t.top + this.view.scrollDOM.scrollTop,
      height: e.bottom - e.top
    };
  }
  drawCursor(i) {
    this.cursor && (i ? (this.cursor.style.left = i.left + "px", this.cursor.style.top = i.top + "px", this.cursor.style.height = i.height + "px") : this.cursor.style.left = "-100000px");
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(i) {
    this.view.state.field(Cr) != i && this.view.dispatch({ effects: Fm.of(i) });
  }
}, {
  eventHandlers: {
    dragover(i) {
      this.setDropPos(this.view.posAtCoords({ x: i.clientX, y: i.clientY }));
    },
    dragleave(i) {
      (i.target == this.view.contentDOM || !this.view.contentDOM.contains(i.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function Nx() {
  return [Cr, Wx];
}
function Bu(i, e, t, n, r) {
  e.lastIndex = 0;
  for (let s = i.iterRange(t, n), o = t, l; !s.next().done; o += s.value.length)
    if (!s.lineBreak)
      for (; l = e.exec(s.value); )
        r(o + l.index, l);
}
function Mx(i, e) {
  let t = i.visibleRanges;
  if (t.length == 1 && t[0].from == i.viewport.from && t[0].to == i.viewport.to)
    return t;
  let n = [];
  for (let { from: r, to: s } of t)
    r = Math.max(i.state.doc.lineAt(r).from, r - e), s = Math.min(i.state.doc.lineAt(s).to, s + e), n.length && n[n.length - 1].to >= r ? n[n.length - 1].to = s : n.push({ from: r, to: s });
  return n;
}
class Yx {
  /**
  Create a decorator.
  */
  constructor(e) {
    const { regexp: t, decoration: n, decorate: r, boundary: s, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, r)
      this.addMatch = (l, a, c, h) => r(h, c, c + l[0].length, l, a);
    else if (typeof n == "function")
      this.addMatch = (l, a, c, h) => {
        let f = n(l, a, c);
        f && h(c, c + l[0].length, f);
      };
    else if (n)
      this.addMatch = (l, a, c, h) => h(c, c + l[0].length, n);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = s, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(e) {
    let t = new ji(), n = t.add.bind(t);
    for (let { from: r, to: s } of Mx(e, this.maxLength))
      Bu(e.state.doc, this.regexp, r, s, (o, l) => this.addMatch(l, e, o, n));
    return t.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(e, t) {
    let n = 1e9, r = -1;
    return e.docChanged && e.changes.iterChanges((s, o, l, a) => {
      a > e.view.viewport.from && l < e.view.viewport.to && (n = Math.min(l, n), r = Math.max(a, r));
    }), e.viewportChanged || r - n > 1e3 ? this.createDeco(e.view) : r > -1 ? this.updateRange(e.view, t.map(e.changes), n, r) : t;
  }
  updateRange(e, t, n, r) {
    for (let s of e.visibleRanges) {
      let o = Math.max(s.from, n), l = Math.min(s.to, r);
      if (l > o) {
        let a = e.state.doc.lineAt(o), c = a.to < l ? e.state.doc.lineAt(l) : a, h = Math.max(s.from, a.from), f = Math.min(s.to, c.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              h = o;
              break;
            }
          for (; l < c.to; l++)
            if (this.boundary.test(c.text[l - c.from])) {
              f = l;
              break;
            }
        }
        let u = [], d, O = (m, b, y) => u.push(y.range(m, b));
        if (a == c)
          for (this.regexp.lastIndex = h - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, e, d.index + a.from, O);
        else
          Bu(e.state.doc, this.regexp, h, f, (m, b) => this.addMatch(b, e, m, O));
        t = t.update({ filterFrom: h, filterTo: f, filter: (m, b) => m < h || b > f, add: u });
      }
    }
    return t;
  }
}
const Tc = /x/.unicode != null ? "gu" : "g", jx = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Tc), Ux = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let la = null;
function Ix() {
  var i;
  if (la == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    la = ((i = e.tabSize) !== null && i !== void 0 ? i : e.MozTabSize) != null;
  }
  return la || !1;
}
const uo = /* @__PURE__ */ j.define({
  combine(i) {
    let e = ri(i, {
      render: null,
      specialChars: jx,
      addSpecialChars: null
    });
    return (e.replaceTabs = !Ix()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Tc)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Tc)), e;
  }
});
function qx(i = {}) {
  return [uo.of(i), Bx()];
}
let Lu = null;
function Bx() {
  return Lu || (Lu = Re.fromClass(class {
    constructor(i) {
      this.view = i, this.decorations = L.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(i.state.facet(uo)), this.decorations = this.decorator.createDeco(i);
    }
    makeDecorator(i) {
      return new Yx({
        regexp: i.specialChars,
        decoration: (e, t, n) => {
          let { doc: r } = t.state, s = Le(e[0], 0);
          if (s == 9) {
            let o = r.lineAt(n), l = t.state.tabSize, a = ps(o.text, l, n - o.from);
            return L.replace({ widget: new Fx((l - a % l) * this.view.defaultCharacterWidth) });
          }
          return this.decorationCache[s] || (this.decorationCache[s] = L.replace({ widget: new Gx(i, s) }));
        },
        boundary: i.replaceTabs ? void 0 : /[^]/
      });
    }
    update(i) {
      let e = i.state.facet(uo);
      i.startState.facet(uo) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(i.view)) : this.decorations = this.decorator.updateDeco(i, this.decorations);
    }
  }, {
    decorations: (i) => i.decorations
  }));
}
const Lx = "•";
function zx(i) {
  return i >= 32 ? Lx : i == 10 ? "␤" : String.fromCharCode(9216 + i);
}
class Gx extends gi {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = zx(this.code), n = e.state.phrase("Control character") + " " + (Ux[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, n, t);
    if (r)
      return r;
    let s = document.createElement("span");
    return s.textContent = t, s.title = n, s.setAttribute("aria-label", n), s.className = "cm-specialChar", s;
  }
  ignoreEvent() {
    return !1;
  }
}
class Fx extends gi {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return !1;
  }
}
function Hx() {
  return Jx;
}
const Kx = /* @__PURE__ */ L.line({ class: "cm-activeLine" }), Jx = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.docChanged || i.selectionSet) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = -1, t = [];
    for (let n of i.state.selection.ranges) {
      let r = i.lineBlockAt(n.head);
      r.from > e && (t.push(Kx.range(r.from)), e = r.from);
    }
    return L.set(t);
  }
}, {
  decorations: (i) => i.decorations
}), _c = 2e3;
function ew(i, e, t) {
  let n = Math.min(e.line, t.line), r = Math.max(e.line, t.line), s = [];
  if (e.off > _c || t.off > _c || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = n; a <= r; a++) {
      let c = i.doc.line(a);
      c.length <= l && s.push(v.range(c.from + o, c.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = n; a <= r; a++) {
      let c = i.doc.line(a), h = cc(c.text, o, i.tabSize, !0);
      if (h < 0)
        s.push(v.cursor(c.to));
      else {
        let f = cc(c.text, l, i.tabSize);
        s.push(v.range(c.from + h, c.from + f));
      }
    }
  }
  return s;
}
function tw(i, e) {
  let t = i.coordsAtPos(i.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / i.defaultCharacterWidth)) : -1;
}
function zu(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), n = i.state.doc.lineAt(t), r = t - n.from, s = r > _c ? -1 : r == n.length ? tw(i, e.clientX) : ps(n.text, i.state.tabSize, t - n.from);
  return { line: n.number, col: s, off: r };
}
function iw(i, e) {
  let t = zu(i, e), n = i.state.selection;
  return t ? {
    update(r) {
      if (r.docChanged) {
        let s = r.changes.mapPos(r.startState.doc.line(t.line).from), o = r.state.doc.lineAt(s);
        t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, n = n.map(r.changes);
      }
    },
    get(r, s, o) {
      let l = zu(i, r);
      if (!l)
        return n;
      let a = ew(i.state, t, l);
      return a.length ? o ? v.create(a.concat(n.ranges)) : v.create(a) : n;
    }
  } : null;
}
function nw(i) {
  let e = (i == null ? void 0 : i.eventFilter) || ((t) => t.altKey && t.button == 0);
  return U.mouseSelectionStyle.of((t, n) => e(n) ? iw(t, n) : null);
}
const rw = {
  Alt: [18, (i) => i.altKey],
  Control: [17, (i) => i.ctrlKey],
  Shift: [16, (i) => i.shiftKey],
  Meta: [91, (i) => i.metaKey]
}, sw = { style: "cursor: crosshair" };
function ow(i = {}) {
  let [e, t] = rw[i.key || "Alt"], n = Re.fromClass(class {
    constructor(r) {
      this.view = r, this.isDown = !1;
    }
    set(r) {
      this.isDown != r && (this.isDown = r, this.view.update([]));
    }
  }, {
    eventHandlers: {
      keydown(r) {
        this.set(r.keyCode == e || t(r));
      },
      keyup(r) {
        (r.keyCode == e || !t(r)) && this.set(!1);
      },
      mousemove(r) {
        this.set(t(r));
      }
    }
  });
  return [
    n,
    U.contentAttributes.of((r) => {
      var s;
      return !((s = r.plugin(n)) === null || s === void 0) && s.isDown ? sw : null;
    })
  ];
}
const Ms = "-10000px";
class Hm {
  constructor(e, t, n) {
    this.facet = t, this.createTooltipView = n, this.input = e.state.facet(t), this.tooltips = this.input.filter((r) => r), this.tooltipViews = this.tooltips.map(n);
  }
  update(e) {
    var t;
    let n = e.state.facet(this.facet), r = n.filter((o) => o);
    if (n === this.input) {
      for (let o of this.tooltipViews)
        o.update && o.update(e);
      return !1;
    }
    let s = [];
    for (let o = 0; o < r.length; o++) {
      let l = r[o], a = -1;
      if (l) {
        for (let c = 0; c < this.tooltips.length; c++) {
          let h = this.tooltips[c];
          h && h.create == l.create && (a = c);
        }
        if (a < 0)
          s[o] = this.createTooltipView(l);
        else {
          let c = s[o] = this.tooltipViews[a];
          c.update && c.update(e);
        }
      }
    }
    for (let o of this.tooltipViews)
      s.indexOf(o) < 0 && (o.dom.remove(), (t = o.destroy) === null || t === void 0 || t.call(o));
    return this.input = n, this.tooltips = r, this.tooltipViews = s, !0;
  }
}
function lw(i) {
  let { win: e } = i;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const aa = /* @__PURE__ */ j.define({
  combine: (i) => {
    var e, t, n;
    return {
      position: Y.ios ? "absolute" : ((e = i.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = i.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((n = i.find((r) => r.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || lw
    };
  }
}), Km = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.view = i, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = i.state.facet(aa);
    this.position = e.position, this.parent = e.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.manager = new Hm(i, Eh, (t) => this.createTooltip(t)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), i.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let i of this.manager.tooltipViews)
        this.intersectionObserver.observe(i.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(i) {
    i.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(i);
    e && this.observeIntersection();
    let t = e || i.geometryChanged, n = i.state.facet(aa);
    if (n.position != this.position) {
      this.position = n.position;
      for (let r of this.manager.tooltipViews)
        r.dom.style.position = this.position;
      t = !0;
    }
    if (n.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = n.parent, this.createContainer();
      for (let r of this.manager.tooltipViews)
        this.container.appendChild(r.dom);
      t = !0;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(i) {
    let e = i.create(this.view);
    if (e.dom.classList.add("cm-tooltip"), i.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let t = document.createElement("div");
      t.className = "cm-tooltip-arrow", e.dom.appendChild(t);
    }
    return e.dom.style.position = this.position, e.dom.style.top = Ms, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e;
  }
  destroy() {
    var i, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let t of this.manager.tooltipViews)
      t.dom.remove(), (i = t.destroy) === null || i === void 0 || i.call(t);
    (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let i = this.view.dom.getBoundingClientRect();
    return {
      editor: i,
      parent: this.parent ? this.container.getBoundingClientRect() : i,
      pos: this.manager.tooltips.map((e, t) => {
        let n = this.manager.tooltipViews[t];
        return n.getCoords ? n.getCoords(e.pos) : this.view.coordsAtPos(e.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: e }) => e.getBoundingClientRect()),
      space: this.view.state.facet(aa).tooltipSpace(this.view)
    };
  }
  writeMeasure(i) {
    let { editor: e, space: t } = i, n = [];
    for (let r = 0; r < this.manager.tooltips.length; r++) {
      let s = this.manager.tooltips[r], o = this.manager.tooltipViews[r], { dom: l } = o, a = i.pos[r], c = i.size[r];
      if (!a || a.bottom <= Math.max(e.top, t.top) || a.top >= Math.min(e.bottom, t.bottom) || a.right < Math.max(e.left, t.left) - 0.1 || a.left > Math.min(e.right, t.right) + 0.1) {
        l.style.top = Ms;
        continue;
      }
      let h = s.arrow ? o.dom.querySelector(".cm-tooltip-arrow") : null, f = h ? 7 : 0, u = c.right - c.left, d = c.bottom - c.top, O = o.offset || cw, m = this.view.textDirection == Te.LTR, b = c.width > t.right - t.left ? m ? t.left : t.right - c.width : m ? Math.min(a.left - (h ? 14 : 0) + O.x, t.right - u) : Math.max(t.left, a.left - u + (h ? 14 : 0) - O.x), y = !!s.above;
      !s.strictSide && (y ? a.top - (c.bottom - c.top) - O.y < t.top : a.bottom + (c.bottom - c.top) + O.y > t.bottom) && y == t.bottom - a.bottom > a.top - t.top && (y = !y);
      let P = (y ? a.top - t.top : t.bottom - a.bottom) - f;
      if (P < d && o.resize !== !1) {
        if (P < this.view.defaultLineHeight) {
          l.style.top = Ms;
          continue;
        }
        l.style.height = (d = P) + "px";
      } else
        l.style.height && (l.style.height = "");
      let C = y ? a.top - d - f - O.y : a.bottom + f + O.y, x = b + u;
      if (o.overlap !== !0)
        for (let T of n)
          T.left < x && T.right > b && T.top < C + d && T.bottom > C && (C = y ? T.top - d - 2 - f : T.bottom + f + 2);
      this.position == "absolute" ? (l.style.top = C - i.parent.top + "px", l.style.left = b - i.parent.left + "px") : (l.style.top = C + "px", l.style.left = b + "px"), h && (h.style.left = `${a.left + (m ? O.x : -O.x) - (b + 14 - 7)}px`), o.overlap !== !0 && n.push({ left: b, top: C, right: x, bottom: C + d }), l.classList.toggle("cm-tooltip-above", y), l.classList.toggle("cm-tooltip-below", !y), o.positioned && o.positioned(i.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let i of this.manager.tooltipViews)
        i.dom.style.top = Ms;
  }
}, {
  eventHandlers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), aw = /* @__PURE__ */ U.baseTheme({
  ".cm-tooltip": {
    zIndex: 100,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: `${7}px`,
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: `${7}px solid transparent`,
      borderRight: `${7}px solid transparent`
    },
    ".cm-tooltip-above &": {
      bottom: `-${7}px`,
      "&:before": {
        borderTop: `${7}px solid #bbb`
      },
      "&:after": {
        borderTop: `${7}px solid #f5f5f5`,
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: `-${7}px`,
      "&:before": {
        borderBottom: `${7}px solid #bbb`
      },
      "&:after": {
        borderBottom: `${7}px solid #f5f5f5`,
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), cw = { x: 0, y: 0 }, Eh = /* @__PURE__ */ j.define({
  enables: [Km, aw]
}), Wo = /* @__PURE__ */ j.define();
class Zh {
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Hm(e, Wo, (t) => this.createHostedView(t));
  }
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new Zh(e);
  }
  createHostedView(e) {
    let t = e.create(this.view);
    return t.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(t.dom), this.mounted && t.mount && t.mount(this.view), t;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
}
const hw = /* @__PURE__ */ Eh.compute([Wo], (i) => {
  let e = i.facet(Wo).filter((t) => t);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.filter((t) => t.end != null).map((t) => t.end)),
    create: Zh.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class fw {
  constructor(e, t, n, r, s) {
    this.view = e, this.source = t, this.field = n, this.setHover = r, this.hoverTime = s, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { lastMove: e } = this, t = this.view.contentDOM.contains(e.target) ? this.view.posAtCoords(e) : null;
    if (t == null)
      return;
    let n = this.view.coordsAtPos(t);
    if (n == null || e.y < n.top || e.y > n.bottom || e.x < n.left - this.view.defaultCharacterWidth || e.x > n.right + this.view.defaultCharacterWidth)
      return;
    let r = this.view.bidiSpans(this.view.state.doc.lineAt(t)).find((l) => l.from <= t && l.to >= t), s = r && r.dir == Te.RTL ? -1 : 1, o = this.source(this.view, t, e.x < n.left ? -s : s);
    if (o != null && o.then) {
      let l = this.pending = { pos: t };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && this.view.dispatch({ effects: this.setHover.of(a) }));
      }, (a) => xt(this.view.state, a, "hover tooltip"));
    } else
      o && this.view.dispatch({ effects: this.setHover.of(o) });
  }
  mousemove(e) {
    var t;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let n = this.active;
    if (n && !Gu(this.lastMove.target) || this.pending) {
      let { pos: r } = n || this.pending, s = (t = n == null ? void 0 : n.end) !== null && t !== void 0 ? t : r;
      (r == s ? this.view.posAtCoords(this.lastMove) != r : !uw(
        this.view,
        r,
        s,
        e.clientX,
        e.clientY,
        6
        /* Hover.MaxDist */
      )) && (this.view.dispatch({ effects: this.setHover.of(null) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !Gu(e.relatedTarget) && this.view.dispatch({ effects: this.setHover.of(null) });
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function Gu(i) {
  for (let e = i; e; e = e.parentNode)
    if (e.nodeType == 1 && e.classList.contains("cm-tooltip"))
      return !0;
  return !1;
}
function uw(i, e, t, n, r, s) {
  let o = document.createRange(), l = i.domAtPos(e), a = i.domAtPos(t);
  o.setEnd(a.node, a.offset), o.setStart(l.node, l.offset);
  let c = o.getClientRects();
  o.detach();
  for (let h = 0; h < c.length; h++) {
    let f = c[h];
    if (Math.max(f.top - r, r - f.bottom, f.left - n, n - f.right) <= s)
      return !0;
  }
  return !1;
}
function dw(i, e = {}) {
  let t = ne.define(), n = qe.define({
    create() {
      return null;
    },
    update(r, s) {
      if (r && (e.hideOnChange && (s.docChanged || s.selection) || e.hideOn && e.hideOn(s, r)))
        return null;
      if (r && s.docChanged) {
        let o = s.changes.mapPos(r.pos, -1, Ge.TrackDel);
        if (o == null)
          return null;
        let l = Object.assign(/* @__PURE__ */ Object.create(null), r);
        l.pos = o, r.end != null && (l.end = s.changes.mapPos(r.end)), r = l;
      }
      for (let o of s.effects)
        o.is(t) && (r = o.value), o.is(pw) && (r = null);
      return r;
    },
    provide: (r) => Wo.from(r)
  });
  return [
    n,
    Re.define((r) => new fw(
      r,
      i,
      n,
      t,
      e.hoverTime || 300
      /* Hover.Time */
    )),
    hw
  ];
}
function Ow(i, e) {
  let t = i.plugin(Km);
  if (!t)
    return null;
  let n = t.manager.tooltips.indexOf(e);
  return n < 0 ? null : t.manager.tooltipViews[n];
}
const pw = /* @__PURE__ */ ne.define(), Fu = /* @__PURE__ */ j.define({
  combine(i) {
    let e, t;
    for (let n of i)
      e = e || n.topContainer, t = t || n.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function Kr(i, e) {
  let t = i.plugin(Jm), n = t ? t.specs.indexOf(e) : -1;
  return n > -1 ? t.panels[n] : null;
}
const Jm = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.input = i.state.facet(Jr), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(i));
    let e = i.state.facet(Fu);
    this.top = new Ys(i, !0, e.topContainer), this.bottom = new Ys(i, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(i) {
    let e = i.state.facet(Fu);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Ys(i.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Ys(i.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = i.state.facet(Jr);
    if (t != this.input) {
      let n = t.filter((a) => a), r = [], s = [], o = [], l = [];
      for (let a of n) {
        let c = this.specs.indexOf(a), h;
        c < 0 ? (h = a(i.view), l.push(h)) : (h = this.panels[c], h.update && h.update(i)), r.push(h), (h.top ? s : o).push(h);
      }
      this.specs = n, this.panels = r, this.top.sync(s), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let n of this.panels)
        n.update && n.update(i);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (i) => U.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class Ys {
  constructor(e, t, n) {
    this.view = e, this.top = t, this.container = n, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = Hu(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = Hu(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function Hu(i) {
  let e = i.nextSibling;
  return i.remove(), e;
}
const Jr = /* @__PURE__ */ j.define({
  enables: Jm
});
class Oi extends Sn {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
Oi.prototype.elementClass = "";
Oi.prototype.toDOM = void 0;
Oi.prototype.mapMode = Ge.TrackBefore;
Oi.prototype.startSide = Oi.prototype.endSide = -1;
Oi.prototype.point = !0;
const Oo = /* @__PURE__ */ j.define(), mw = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => pe.empty,
  lineMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, Rr = /* @__PURE__ */ j.define();
function gw(i) {
  return [eg(), Rr.of(Object.assign(Object.assign({}, mw), i))];
}
const Xc = /* @__PURE__ */ j.define({
  combine: (i) => i.some((e) => e)
});
function eg(i) {
  let e = [
    bw
  ];
  return i && i.fixed === !1 && e.push(Xc.of(!0)), e;
}
const bw = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.view = i, this.prevViewport = i.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = i.state.facet(Rr).map((e) => new Ju(i, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !i.state.facet(Xc), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), i.scrollDOM.insertBefore(this.dom, i.contentDOM);
  }
  update(i) {
    if (this.updateGutters(i)) {
      let e = this.prevViewport, t = i.view.viewport, n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(n < (t.to - t.from) * 0.8);
    }
    i.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(Xc) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = i.view.viewport;
  }
  syncGutters(i) {
    let e = this.dom.nextSibling;
    i && this.dom.remove();
    let t = pe.iter(this.view.state.facet(Oo), this.view.viewport.from), n = [], r = this.gutters.map((s) => new Sw(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks) {
      let o;
      if (Array.isArray(s.type)) {
        for (let l of s.type)
          if (l.type == Qe.Text) {
            o = l;
            break;
          }
      } else
        o = s.type == Qe.Text ? s : void 0;
      if (o) {
        n.length && (n = []), tg(t, n, s.from);
        for (let l of r)
          l.line(this.view, o, n);
      }
    }
    for (let s of r)
      s.finish();
    i && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(i) {
    let e = i.startState.facet(Rr), t = i.state.facet(Rr), n = i.docChanged || i.heightChanged || i.viewportChanged || !pe.eq(i.startState.facet(Oo), i.state.facet(Oo), i.view.viewport.from, i.view.viewport.to);
    if (e == t)
      for (let r of this.gutters)
        r.update(i) && (n = !0);
    else {
      n = !0;
      let r = [];
      for (let s of t) {
        let o = e.indexOf(s);
        o < 0 ? r.push(new Ju(this.view, s)) : (this.gutters[o].update(i), r.push(this.gutters[o]));
      }
      for (let s of this.gutters)
        s.dom.remove(), r.indexOf(s) < 0 && s.destroy();
      for (let s of r)
        this.dom.appendChild(s.dom);
      this.gutters = r;
    }
    return n;
  }
  destroy() {
    for (let i of this.gutters)
      i.destroy();
    this.dom.remove();
  }
}, {
  provide: (i) => U.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == Te.LTR ? { left: t.dom.offsetWidth } : { right: t.dom.offsetWidth };
  })
});
function Ku(i) {
  return Array.isArray(i) ? i : [i];
}
function tg(i, e, t) {
  for (; i.value && i.from <= t; )
    i.from == t && e.push(i.value), i.next();
}
class Sw {
  constructor(e, t, n) {
    this.gutter = e, this.height = n, this.i = 0, this.cursor = pe.iter(e.markers, t.from);
  }
  line(e, t, n) {
    let r = [];
    tg(this.cursor, r, t.from), n.length && (r = r.concat(n));
    let s = this.gutter.config.lineMarker(e, t, r);
    s && r.unshift(s);
    let o = this.gutter;
    if (r.length == 0 && !o.config.renderEmptyElements)
      return;
    let l = t.top - this.height;
    if (this.i == o.elements.length) {
      let a = new ig(e, t.height, l, r);
      o.elements.push(a), o.dom.appendChild(a.dom);
    } else
      o.elements[this.i].update(e, t.height, l, r);
    this.height = t.bottom, this.i++;
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Ju {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let n in t.domEventHandlers)
      this.dom.addEventListener(n, (r) => {
        let s = r.target, o;
        if (s != this.dom && this.dom.contains(s)) {
          for (; s.parentNode != this.dom; )
            s = s.parentNode;
          let a = s.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = r.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[n](e, l, r) && r.preventDefault();
      });
    this.markers = Ku(t.markers(e)), t.initialSpacer && (this.spacer = new ig(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = Ku(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let n = e.view.viewport;
    return !pe.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class ig {
  constructor(e, t, n, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, n, r);
  }
  update(e, t, n, r) {
    this.height != t && (this.dom.style.height = (this.height = t) + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), yw(this.markers, r) || this.setMarkers(e, r);
  }
  setMarkers(e, t) {
    let n = "cm-gutterElement", r = this.dom.firstChild;
    for (let s = 0, o = 0; ; ) {
      let l = o, a = s < t.length ? t[s++] : null, c = !1;
      if (a) {
        let h = a.elementClass;
        h && (n += " " + h);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, c = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(r);
          let f = r.nextSibling;
          r.remove(), r = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (c ? r = r.nextSibling : this.dom.insertBefore(a.toDOM(e), r)), c && o++;
    }
    this.dom.className = n, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function yw(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (!i[t].compare(e[t]))
      return !1;
  return !0;
}
const Qw = /* @__PURE__ */ j.define(), Dn = /* @__PURE__ */ j.define({
  combine(i) {
    return ri(i, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let n = Object.assign({}, e);
        for (let r in t) {
          let s = n[r], o = t[r];
          n[r] = s ? (l, a, c) => s(l, a, c) || o(l, a, c) : o;
        }
        return n;
      }
    });
  }
});
class ca extends Oi {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function ha(i, e) {
  return i.state.facet(Dn).formatNumber(e, i.state);
}
const vw = /* @__PURE__ */ Rr.compute([Dn], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Qw);
  },
  lineMarker(e, t, n) {
    return n.some((r) => r.toDOM) ? null : new ca(ha(e, e.state.doc.lineAt(t.from).number));
  },
  lineMarkerChange: (e) => e.startState.facet(Dn) != e.state.facet(Dn),
  initialSpacer(e) {
    return new ca(ha(e, ed(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = ha(t.view, ed(t.view.state.doc.lines));
    return n == e.number ? e : new ca(n);
  },
  domEventHandlers: i.facet(Dn).domEventHandlers
}));
function xw(i = {}) {
  return [
    Dn.of(i),
    eg(),
    vw
  ];
}
function ed(i) {
  let e = 9;
  for (; e < i; )
    e = e * 10 + 9;
  return e;
}
const ww = /* @__PURE__ */ new class extends Oi {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), $w = /* @__PURE__ */ Oo.compute(["selection"], (i) => {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let r = i.doc.lineAt(n.head).from;
    r > t && (t = r, e.push(ww.range(r)));
  }
  return pe.of(e);
});
function Pw() {
  return $w;
}
const ng = 1024;
let kw = 0;
class Pt {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class le {
  /// Create a new node prop type.
  constructor(e = {}) {
    this.id = kw++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /// This is meant to be used with
  /// [`NodeSet.extend`](#common.NodeSet.extend) or
  /// [`LRParser.configure`](#lr.ParserConfig.props) to compute
  /// prop values for each node type in the set. Takes a [match
  /// object](#common.NodeType^match) or function that returns undefined
  /// if the node type doesn't get this prop, and the prop's value if
  /// it does.
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = ht.match(e)), (t) => {
      let n = e(t);
      return n === void 0 ? null : [this, n];
    };
  }
}
le.closedBy = new le({ deserialize: (i) => i.split(" ") });
le.openedBy = new le({ deserialize: (i) => i.split(" ") });
le.group = new le({ deserialize: (i) => i.split(" ") });
le.contextHash = new le({ perNode: !0 });
le.lookAhead = new le({ perNode: !0 });
le.mounted = new le({ perNode: !0 });
class Cw {
  constructor(e, t, n) {
    this.tree = e, this.overlay = t, this.parser = n;
  }
}
const Tw = /* @__PURE__ */ Object.create(null);
class ht {
  /// @internal
  constructor(e, t, n, r = 0) {
    this.name = e, this.props = t, this.id = n, this.flags = r;
  }
  /// Define a node type.
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Tw, n = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new ht(e.name || "", t, e.id, n);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(r)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[s[0].id] = s[1];
        }
    }
    return r;
  }
  /// Retrieves a node prop for this type. Will return `undefined` if
  /// the prop isn't present on this node.
  prop(e) {
    return this.props[e.id];
  }
  /// True when this is the top node of a grammar.
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /// True when this node is produced by a skip rule.
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /// Indicates whether this is an error node.
  get isError() {
    return (this.flags & 4) > 0;
  }
  /// When true, this node type doesn't correspond to a user-declared
  /// named node, for example because it is used to cache repetition.
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /// Returns true when this node's name or one of its
  /// [groups](#common.NodeProp^group) matches the given string.
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(le.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /// Create a function from node types to arbitrary values by
  /// specifying an object whose property names are node or
  /// [group](#common.NodeProp^group) names. Often useful with
  /// [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  /// names, separated by spaces, in a single property name to map
  /// multiple node names to a single value.
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let n in e)
      for (let r of n.split(" "))
        t[r] = e[n];
    return (n) => {
      for (let r = n.prop(le.group), s = -1; s < (r ? r.length : 0); s++) {
        let o = t[s < 0 ? n.name : r[s]];
        if (o)
          return o;
      }
    };
  }
}
ht.none = new ht(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class Rh {
  /// Create a set with the given types. The `id` property of each
  /// type should correspond to its position within the array.
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /// Create a copy of this set with some node properties added. The
  /// arguments to this method can be created with
  /// [`NodeProp.add`](#common.NodeProp.add).
  extend(...e) {
    let t = [];
    for (let n of this.types) {
      let r = null;
      for (let s of e) {
        let o = s(n);
        o && (r || (r = Object.assign({}, n.props)), r[o[0].id] = o[1]);
      }
      t.push(r ? new ht(n.name, r, n.id, n.flags) : n);
    }
    return new Rh(t);
  }
}
const js = /* @__PURE__ */ new WeakMap(), td = /* @__PURE__ */ new WeakMap();
var we;
(function(i) {
  i[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays";
})(we || (we = {}));
class _e {
  /// Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  constructor(e, t, n, r, s) {
    if (this.type = e, this.children = t, this.positions = n, this.length = r, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /// @internal
  toString() {
    let e = this.prop(le.mounted);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let n of this.children) {
      let r = n.toString();
      r && (t && (t += ","), t += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /// Get a [tree cursor](#common.TreeCursor) positioned at the top of
  /// the tree. Mode can be used to [control](#common.IterMode) which
  /// nodes the cursor visits.
  cursor(e = 0) {
    return new es(this.topNode, e);
  }
  /// Get a [tree cursor](#common.TreeCursor) pointing into this tree
  /// at the given position and side (see
  /// [`moveTo`](#common.TreeCursor.moveTo).
  cursorAt(e, t = 0, n = 0) {
    let r = js.get(this) || this.topNode, s = new es(r);
    return s.moveTo(e, t), js.set(this, s._tree), s;
  }
  /// Get a [syntax node](#common.SyntaxNode) object for the top of the
  /// tree.
  get topNode() {
    return new Ct(this, 0, 0, null);
  }
  /// Get the [syntax node](#common.SyntaxNode) at the given position.
  /// If `side` is -1, this will move into nodes that end at the
  /// position. If 1, it'll move into nodes that start at the
  /// position. With 0, it'll only enter nodes that cover the position
  /// from both sides.
  ///
  /// Note that this will not enter
  /// [overlays](#common.MountedTree.overlay), and you often want
  /// [`resolveInner`](#common.Tree.resolveInner) instead.
  resolve(e, t = 0) {
    let n = er(js.get(this) || this.topNode, e, t, !1);
    return js.set(this, n), n;
  }
  /// Like [`resolve`](#common.Tree.resolve), but will enter
  /// [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  /// pointing into the innermost overlaid tree at the given position
  /// (with parent links going through all parent structure, including
  /// the host trees).
  resolveInner(e, t = 0) {
    let n = er(td.get(this) || this.topNode, e, t, !0);
    return td.set(this, n), n;
  }
  /// Iterate over the tree and its children, calling `enter` for any
  /// node that touches the `from`/`to` region (if given) before
  /// running over such a node's children, and `leave` (if given) when
  /// leaving the node. When `enter` returns `false`, that node will
  /// not have its children iterated over (or `leave` called).
  iterate(e) {
    let { enter: t, leave: n, from: r = 0, to: s = this.length } = e;
    for (let o = this.cursor((e.mode || 0) | we.IncludeAnonymous); ; ) {
      let l = !1;
      if (o.from <= s && o.to >= r && (o.type.isAnonymous || t(o) !== !1)) {
        if (o.firstChild())
          continue;
        l = !0;
      }
      for (; l && n && !o.type.isAnonymous && n(o), !o.nextSibling(); ) {
        if (!o.parent())
          return;
        l = !0;
      }
    }
  }
  /// Get the value of the given [node prop](#common.NodeProp) for this
  /// node. Works with both per-node and per-type props.
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /// Returns the node's [per-node props](#common.NodeProp.perNode) in a
  /// format that can be passed to the [`Tree`](#common.Tree)
  /// constructor.
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /// Balance the direct children of this tree, producing a copy of
  /// which may have children grouped into subtrees with type
  /// [`NodeType.none`](#common.NodeType^none).
  balance(e = {}) {
    return this.children.length <= 8 ? this : Nh(ht.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, n, r) => new _e(this.type, t, n, r, this.propValues), e.makeTree || ((t, n, r) => new _e(ht.none, t, n, r)));
  }
  /// Build a tree from a postfix-ordered buffer of node information,
  /// or a cursor over such a buffer.
  static build(e) {
    return Xw(e);
  }
}
_e.empty = new _e(ht.none, [], [], 0);
class Dh {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Dh(this.buffer, this.index);
  }
}
class Pn {
  /// Create a tree buffer.
  constructor(e, t, n) {
    this.buffer = e, this.length = t, this.set = n;
  }
  /// @internal
  get type() {
    return ht.none;
  }
  /// @internal
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /// @internal
  childString(e) {
    let t = this.buffer[e], n = this.buffer[e + 3], r = this.set.types[t], s = r.name;
    if (/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), e += 4, n == e)
      return s;
    let o = [];
    for (; e < n; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + o.join(",") + ")";
  }
  /// @internal
  findChild(e, t, n, r, s) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(rg(s, r, o[a + 1], o[a + 2]) && (l = a, n > 0)); a = o[a + 3])
      ;
    return l;
  }
  /// @internal
  slice(e, t, n) {
    let r = this.buffer, s = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      s[a++] = r[l++], s[a++] = r[l++] - n;
      let c = s[a++] = r[l++] - n;
      s[a++] = r[l++] - e, o = Math.max(o, c);
    }
    return new Pn(s, o, this.set);
  }
}
function rg(i, e, t, n) {
  switch (i) {
    case -2:
      return t < e;
    case -1:
      return n >= e && t < e;
    case 0:
      return t < e && n > e;
    case 1:
      return t <= e && n > e;
    case 2:
      return n > e;
    case 4:
      return !0;
  }
}
function sg(i, e) {
  let t = i.childBefore(e);
  for (; t; ) {
    let n = t.lastChild;
    if (!n || n.to != t.to)
      break;
    n.type.isError && n.from == n.to ? (i = t, t = n.prevSibling) : t = n;
  }
  return i;
}
function er(i, e, t, n) {
  for (var r; i.from == i.to || (t < 1 ? i.from >= e : i.from > e) || (t > -1 ? i.to <= e : i.to < e); ) {
    let o = !n && i instanceof Ct && i.index < 0 ? null : i.parent;
    if (!o)
      return i;
    i = o;
  }
  let s = n ? 0 : we.IgnoreOverlays;
  if (n)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof Ct && o.index < 0 && ((r = l.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != o.from && (i = l);
  for (; ; ) {
    let o = i.enter(e, t, s);
    if (!o)
      return i;
    i = o;
  }
}
class Ct {
  constructor(e, t, n, r) {
    this._tree = e, this.from = t, this.index = n, this._parent = r;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, n, r, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, c = t > 0 ? l.length : -1; e != c; e += t) {
        let h = l[e], f = a[e] + o.from;
        if (rg(r, n, f, f + h.length)) {
          if (h instanceof Pn) {
            if (s & we.ExcludeBuffers)
              continue;
            let u = h.findChild(0, h.buffer.length, t, n - f, r);
            if (u > -1)
              return new Kt(new _w(o, h, e, f), null, u);
          } else if (s & we.IncludeAnonymous || !h.type.isAnonymous || Wh(h)) {
            let u;
            if (!(s & we.IgnoreMounts) && h.props && (u = h.prop(le.mounted)) && !u.overlay)
              return new Ct(u.tree, f, e, o);
            let d = new Ct(h, f, e, o);
            return s & we.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? h.children.length - 1 : 0, t, n, r);
          }
        }
      }
      if (s & we.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, n = 0) {
    let r;
    if (!(n & we.IgnoreOverlays) && (r = this._tree.prop(le.mounted)) && r.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of r.overlay)
        if ((t > 0 ? o <= s : o < s) && (t < 0 ? l >= s : l > s))
          return new Ct(r.tree, r.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, n);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  cursor(e = 0) {
    return new es(this, e);
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  resolve(e, t = 0) {
    return er(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return er(this, e, t, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return sg(this, e);
  }
  getChild(e, t = null, n = null) {
    let r = No(this, e, t, n);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return No(this, e, t, n);
  }
  /// @internal
  toString() {
    return this._tree.toString();
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return Mo(this, e);
  }
}
function No(i, e, t, n) {
  let r = i.cursor(), s = [];
  if (!r.firstChild())
    return s;
  if (t != null) {
    for (; !r.type.is(t); )
      if (!r.nextSibling())
        return s;
  }
  for (; ; ) {
    if (n != null && r.type.is(n))
      return s;
    if (r.type.is(e) && s.push(r.node), !r.nextSibling())
      return n == null ? s : [];
  }
}
function Mo(i, e, t = e.length - 1) {
  for (let n = i.parent; t >= 0; n = n.parent) {
    if (!n)
      return !1;
    if (!n.type.isAnonymous) {
      if (e[t] && e[t] != n.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class _w {
  constructor(e, t, n, r) {
    this.parent = e, this.buffer = t, this.index = n, this.start = r;
  }
}
class Kt {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, n) {
    this.context = e, this._parent = t, this.index = n, this.type = e.buffer.set.types[e.buffer.buffer[n]];
  }
  child(e, t, n) {
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, n);
    return s < 0 ? null : new Kt(this.context, this, s);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, n = 0) {
    if (n & we.ExcludeBuffers)
      return null;
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return s < 0 ? null : new Kt(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Kt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Kt(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  cursor(e = 0) {
    return new es(this, e);
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: n } = this.context, r = this.index + 4, s = n.buffer[this.index + 3];
    if (s > r) {
      let o = n.buffer[this.index + 1];
      e.push(n.slice(r, s, o)), t.push(0);
    }
    return new _e(this.type, e, t, this.to - this.from);
  }
  resolve(e, t = 0) {
    return er(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return er(this, e, t, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return sg(this, e);
  }
  /// @internal
  toString() {
    return this.context.buffer.childString(this.index);
  }
  getChild(e, t = null, n = null) {
    let r = No(this, e, t, n);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return No(this, e, t, n);
  }
  get node() {
    return this;
  }
  matchContext(e) {
    return Mo(this, e);
  }
}
class es {
  /// Shorthand for `.type.name`.
  get name() {
    return this.type.name;
  }
  /// @internal
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof Ct)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let n = e._parent; n; n = n._parent)
        this.stack.unshift(n.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: n, buffer: r } = this.buffer;
    return this.type = t || r.set.types[r.buffer[e]], this.from = n + r.buffer[e + 1], this.to = n + r.buffer[e + 2], !0;
  }
  yield(e) {
    return e ? e instanceof Ct ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /// @internal
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /// @internal
  enterChild(e, t, n) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, n, this.mode));
    let { buffer: r } = this.buffer, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, n);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
  }
  /// Move the cursor to this node's first child. When this returns
  /// false, the node has no child, and the cursor has not been moved.
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /// Move the cursor to this node's last child.
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /// Move the cursor to the first child that ends after `pos`.
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /// Move to the last child that starts before `pos`.
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /// Move the cursor to the child around `pos`. If side is -1 the
  /// child may end at that position, when 1 it may start there. This
  /// will also enter [overlaid](#common.MountedTree.overlay)
  /// [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  /// set to false.
  enter(e, t, n = this.mode) {
    return this.buffer ? n & we.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n));
  }
  /// Move to the node's parent node, if this isn't the top node.
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & we.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & we.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /// @internal
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, n = this.stack.length - 1;
    if (e < 0) {
      let r = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != r)
        return this.yieldBuf(t.findChild(
          r,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let r = t.buffer[this.index + 3];
      if (r < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
        return this.yieldBuf(r);
    }
    return n < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /// Move to this node's next sibling, if any.
  nextSibling() {
    return this.sibling(1);
  }
  /// Move to this node's previous sibling, if any.
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, n, { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (r.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: t, parent: n } = r);
    } else
      ({ index: t, _parent: n } = this._tree);
    for (; n; { index: t, _parent: n } = n)
      if (t > -1)
        for (let s = t + e, o = e < 0 ? -1 : n._tree.children.length; s != o; s += e) {
          let l = n._tree.children[s];
          if (this.mode & we.IncludeAnonymous || l instanceof Pn || !l.type.isAnonymous || Wh(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /// Move to the next node in a
  /// [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  /// traversal, going from a node to its first child or, if the
  /// current node is empty or `enter` is false, its next sibling or
  /// the next sibling of the first parent node that has one.
  next(e = !0) {
    return this.move(1, e);
  }
  /// Move to the next node in a last-to-first pre-order traveral. A
  /// node is followed by its last child or, if it has none, its
  /// previous sibling or the previous sibling of the first parent
  /// node that has one.
  prev(e = !0) {
    return this.move(-1, e);
  }
  /// Move the cursor to the innermost node that covers `pos`. If
  /// `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  /// it will enter nodes that start at `pos`.
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /// Get a [syntax node](#common.SyntaxNode) at the cursor's current
  /// position.
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, n = 0;
    if (e && e.context == this.buffer) {
      e:
        for (let r = this.index, s = this.stack.length; s >= 0; ) {
          for (let o = e; o; o = o._parent)
            if (o.index == r) {
              if (r == this.index)
                return o;
              t = o, n = s + 1;
              break e;
            }
          r = this.stack[--s];
        }
    }
    for (let r = n; r < this.stack.length; r++)
      t = new Kt(this.buffer, t, this.stack[r]);
    return this.bufferNode = new Kt(this.buffer, t, this.index);
  }
  /// Get the [tree](#common.Tree) that represents the current node, if
  /// any. Will return null when the node is in a [tree
  /// buffer](#common.TreeBuffer).
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /// Iterate over the current node and all its descendants, calling
  /// `enter` when entering a node and `leave`, if given, when leaving
  /// one. When `enter` returns `false`, any children of that node are
  /// skipped, and `leave` isn't called for it.
  iterate(e, t) {
    for (let n = 0; ; ) {
      let r = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (r = !0);
      }
      for (; r && t && t(this), r = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!n)
          return;
        this.parent(), n--, r = !0;
      }
    }
  }
  /// Test whether the current node matches a given context—a sequence
  /// of direct parent node names. Empty strings in the context array
  /// are treated as wildcards.
  matchContext(e) {
    if (!this.buffer)
      return Mo(this.node, e);
    let { buffer: t } = this.buffer, { types: n } = t.set;
    for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
      if (s < 0)
        return Mo(this.node, e, r);
      let o = n[t.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[r] && e[r] != o.name)
          return !1;
        r--;
      }
    }
    return !0;
  }
}
function Wh(i) {
  return i.children.some((e) => e instanceof Pn || !e.type.isAnonymous || Wh(e));
}
function Xw(i) {
  var e;
  let { buffer: t, nodeSet: n, maxBufferLength: r = ng, reused: s = [], minRepeatType: o = n.types.length } = i, l = Array.isArray(t) ? new Dh(t, t.length) : t, a = n.types, c = 0, h = 0;
  function f(x, T, R, G, N) {
    let { id: W, start: D, end: F, size: J } = l, re = h;
    for (; J < 0; )
      if (l.next(), J == -1) {
        let B = s[W];
        R.push(B), G.push(D - x);
        return;
      } else if (J == -3) {
        c = W;
        return;
      } else if (J == -4) {
        h = W;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${J}`);
    let Oe = a[W], ae, H, K = D - x;
    if (F - D <= r && (H = m(l.pos - T, N))) {
      let B = new Uint16Array(H.size - H.skip), fe = l.pos - H.size, tt = B.length;
      for (; l.pos > fe; )
        tt = b(H.start, B, tt);
      ae = new Pn(B, F - H.start, n), K = H.start - x;
    } else {
      let B = l.pos - J;
      l.next();
      let fe = [], tt = [], it = W >= o ? W : -1, nt = 0, Ae = F;
      for (; l.pos > B; )
        it >= 0 && l.id == it && l.size >= 0 ? (l.end <= Ae - r && (d(fe, tt, D, nt, l.end, Ae, it, re), nt = fe.length, Ae = l.end), l.next()) : f(D, B, fe, tt, it);
      if (it >= 0 && nt > 0 && nt < fe.length && d(fe, tt, D, nt, D, Ae, it, re), fe.reverse(), tt.reverse(), it > -1 && nt > 0) {
        let kn = u(Oe);
        ae = Nh(Oe, fe, tt, 0, fe.length, 0, F - D, kn, kn);
      } else
        ae = O(Oe, fe, tt, F - D, re - F);
    }
    R.push(ae), G.push(K);
  }
  function u(x) {
    return (T, R, G) => {
      let N = 0, W = T.length - 1, D, F;
      if (W >= 0 && (D = T[W]) instanceof _e) {
        if (!W && D.type == x && D.length == G)
          return D;
        (F = D.prop(le.lookAhead)) && (N = R[W] + D.length + F);
      }
      return O(x, T, R, G, N);
    };
  }
  function d(x, T, R, G, N, W, D, F) {
    let J = [], re = [];
    for (; x.length > G; )
      J.push(x.pop()), re.push(T.pop() + R - N);
    x.push(O(n.types[D], J, re, W - N, F - W)), T.push(N - R);
  }
  function O(x, T, R, G, N = 0, W) {
    if (c) {
      let D = [le.contextHash, c];
      W = W ? [D].concat(W) : [D];
    }
    if (N > 25) {
      let D = [le.lookAhead, N];
      W = W ? [D].concat(W) : [D];
    }
    return new _e(x, T, R, G, W);
  }
  function m(x, T) {
    let R = l.fork(), G = 0, N = 0, W = 0, D = R.end - r, F = { size: 0, start: 0, skip: 0 };
    e:
      for (let J = R.pos - x; R.pos > J; ) {
        let re = R.size;
        if (R.id == T && re >= 0) {
          F.size = G, F.start = N, F.skip = W, W += 4, G += 4, R.next();
          continue;
        }
        let Oe = R.pos - re;
        if (re < 0 || Oe < J || R.start < D)
          break;
        let ae = R.id >= o ? 4 : 0, H = R.start;
        for (R.next(); R.pos > Oe; ) {
          if (R.size < 0)
            if (R.size == -3)
              ae += 4;
            else
              break e;
          else
            R.id >= o && (ae += 4);
          R.next();
        }
        N = H, G += re, W += ae;
      }
    return (T < 0 || G == x) && (F.size = G, F.start = N, F.skip = W), F.size > 4 ? F : void 0;
  }
  function b(x, T, R) {
    let { id: G, start: N, end: W, size: D } = l;
    if (l.next(), D >= 0 && G < o) {
      let F = R;
      if (D > 4) {
        let J = l.pos - (D - 4);
        for (; l.pos > J; )
          R = b(x, T, R);
      }
      T[--R] = F, T[--R] = W - x, T[--R] = N - x, T[--R] = G;
    } else
      D == -3 ? c = G : D == -4 && (h = G);
    return R;
  }
  let y = [], P = [];
  for (; l.pos > 0; )
    f(i.start || 0, i.bufferStart || 0, y, P, -1);
  let C = (e = i.length) !== null && e !== void 0 ? e : y.length ? P[0] + y[0].length : 0;
  return new _e(a[i.topID], y.reverse(), P.reverse(), C);
}
const id = /* @__PURE__ */ new WeakMap();
function po(i, e) {
  if (!i.isAnonymous || e instanceof Pn || e.type != i)
    return 1;
  let t = id.get(e);
  if (t == null) {
    t = 1;
    for (let n of e.children) {
      if (n.type != i || !(n instanceof _e)) {
        t = 1;
        break;
      }
      t += po(i, n);
    }
    id.set(e, t);
  }
  return t;
}
function Nh(i, e, t, n, r, s, o, l, a) {
  let c = 0;
  for (let O = n; O < r; O++)
    c += po(i, e[O]);
  let h = Math.ceil(
    c * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], u = [];
  function d(O, m, b, y, P) {
    for (let C = b; C < y; ) {
      let x = C, T = m[C], R = po(i, O[C]);
      for (C++; C < y; C++) {
        let G = po(i, O[C]);
        if (R + G >= h)
          break;
        R += G;
      }
      if (C == x + 1) {
        if (R > h) {
          let G = O[x];
          d(G.children, G.positions, 0, G.children.length, m[x] + P);
          continue;
        }
        f.push(O[x]);
      } else {
        let G = m[C - 1] + O[C - 1].length - T;
        f.push(Nh(i, O, m, x, C, T, G, null, a));
      }
      u.push(T + P - s);
    }
  }
  return d(e, t, n, r, 0), (l || a)(f, u, o);
}
class Aw {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, n) {
    let r = this.map.get(e);
    r || this.map.set(e, r = /* @__PURE__ */ new Map()), r.set(t, n);
  }
  getBuffer(e, t) {
    let n = this.map.get(e);
    return n && n.get(t);
  }
  /// Set the value for this syntax node.
  set(e, t) {
    e instanceof Kt ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof Ct && this.map.set(e.tree, t);
  }
  /// Retrieve value for this syntax node, if it exists in the map.
  get(e) {
    return e instanceof Kt ? this.getBuffer(e.context.buffer, e.index) : e instanceof Ct ? this.map.get(e.tree) : void 0;
  }
  /// Set the value for the node that a cursor currently points to.
  cursorSet(e, t) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t);
  }
  /// Retrieve the value for the node that a cursor currently points
  /// to.
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
}
class fi {
  /// Construct a tree fragment. You'll usually want to use
  /// [`addTree`](#common.TreeFragment^addTree) and
  /// [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  /// calling this directly.
  constructor(e, t, n, r, s = !1, o = !1) {
    this.from = e, this.to = t, this.tree = n, this.offset = r, this.open = (s ? 1 : 0) | (o ? 2 : 0);
  }
  /// Whether the start of the fragment represents the start of a
  /// parse, or the end of a change. (In the second case, it may not
  /// be safe to reuse some nodes at the start, depending on the
  /// parsing algorithm.)
  get openStart() {
    return (this.open & 1) > 0;
  }
  /// Whether the end of the fragment represents the end of a
  /// full-document parse, or the start of a change.
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /// Create a set of fragments from a freshly parsed tree, or update
  /// an existing set of fragments by replacing the ones that overlap
  /// with a tree with content from the new tree. When `partial` is
  /// true, the parse is treated as incomplete, and the resulting
  /// fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  /// true.
  static addTree(e, t = [], n = !1) {
    let r = [new fi(0, e.length, e, 0, !1, n)];
    for (let s of t)
      s.to > e.length && r.push(s);
    return r;
  }
  /// Apply a set of edits to an array of fragments, removing or
  /// splitting fragments as necessary to remove edited ranges, and
  /// adjusting offsets for fragments that moved.
  static applyChanges(e, t, n = 128) {
    if (!t.length)
      return e;
    let r = [], s = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, c = 0; ; l++) {
      let h = l < t.length ? t[l] : null, f = h ? h.fromA : 1e9;
      if (f - a >= n)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || c) {
            let d = Math.max(u.from, a) - c, O = Math.min(u.to, f) - c;
            u = d >= O ? null : new fi(d, O, u.tree, u.offset + c, l > 0, !!h);
          }
          if (u && r.push(u), o.to > f)
            break;
          o = s < e.length ? e[s++] : null;
        }
      if (!h)
        break;
      a = h.toA, c = h.toA - h.toB;
    }
    return r;
  }
}
class og {
  /// Start a parse, returning a [partial parse](#common.PartialParse)
  /// object. [`fragments`](#common.TreeFragment) can be passed in to
  /// make the parse incremental.
  ///
  /// By default, the entire input is parsed. You can pass `ranges`,
  /// which should be a sorted array of non-empty, non-overlapping
  /// ranges, to parse only those ranges. The tree returned in that
  /// case will start at `ranges[0].from`.
  startParse(e, t, n) {
    return typeof e == "string" && (e = new Vw(e)), n = n ? n.length ? n.map((r) => new Pt(r.from, r.to)) : [new Pt(0, 0)] : [new Pt(0, e.length)], this.createParse(e, t || [], n);
  }
  /// Run a full parse, returning the resulting tree.
  parse(e, t, n) {
    let r = this.startParse(e, t, n);
    for (; ; ) {
      let s = r.advance();
      if (s)
        return s;
    }
  }
}
class Vw {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
function Ew(i) {
  return (e, t, n, r) => new Rw(e, i, t, n, r);
}
class nd {
  constructor(e, t, n, r, s) {
    this.parser = e, this.parse = t, this.overlay = n, this.target = r, this.ranges = s;
  }
}
class Zw {
  constructor(e, t, n, r, s, o, l) {
    this.parser = e, this.predicate = t, this.mounts = n, this.index = r, this.start = s, this.target = o, this.prev = l, this.depth = 0, this.ranges = [];
  }
}
const Ac = new le({ perNode: !0 });
class Rw {
  constructor(e, t, n, r, s) {
    this.nest = t, this.input = n, this.fragments = r, this.ranges = s, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e;
  }
  advance() {
    if (this.baseParse) {
      let n = this.baseParse.advance();
      if (!n)
        return null;
      if (this.baseParse = null, this.baseTree = n, this.startInner(), this.stoppedAt != null)
        for (let r of this.inner)
          r.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let n = this.baseTree;
      return this.stoppedAt != null && (n = new _e(n.type, n.children, n.positions, n.length, n.propValues.concat([[Ac, this.stoppedAt]]))), n;
    }
    let e = this.inner[this.innerDone], t = e.parse.advance();
    if (t) {
      this.innerDone++;
      let n = Object.assign(/* @__PURE__ */ Object.create(null), e.target.props);
      n[le.mounted.id] = new Cw(t, e.overlay, e.parser), e.target.props = n;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse)
      return 0;
    let e = this.input.length;
    for (let t = this.innerDone; t < this.inner.length; t++)
      this.inner[t].ranges[0].from < e && (e = Math.min(e, this.inner[t].parse.parsedPos));
    return e;
  }
  stopAt(e) {
    if (this.stoppedAt = e, this.baseParse)
      this.baseParse.stopAt(e);
    else
      for (let t = this.innerDone; t < this.inner.length; t++)
        this.inner[t].parse.stopAt(e);
  }
  startInner() {
    let e = new Nw(this.fragments), t = null, n = null, r = new es(new Ct(this.baseTree, this.ranges[0].from, 0, null), we.IncludeAnonymous | we.IgnoreMounts);
    e:
      for (let s, o; this.stoppedAt == null || r.from < this.stoppedAt; ) {
        let l = !0, a;
        if (e.hasNode(r)) {
          if (t) {
            let c = t.mounts.find((h) => h.frag.from <= r.from && h.frag.to >= r.to && h.mount.overlay);
            if (c)
              for (let h of c.mount.overlay) {
                let f = h.from + c.pos, u = h.to + c.pos;
                f >= r.from && u <= r.to && !t.ranges.some((d) => d.from < u && d.to > f) && t.ranges.push({ from: f, to: u });
              }
          }
          l = !1;
        } else if (n && (o = Dw(n.ranges, r.from, r.to)))
          l = o != 2;
        else if (!r.type.isAnonymous && r.from < r.to && (s = this.nest(r, this.input))) {
          r.tree || Ww(r);
          let c = e.findMounts(r.from, s.parser);
          if (typeof s.overlay == "function")
            t = new Zw(s.parser, s.overlay, c, this.inner.length, r.from, r.tree, t);
          else {
            let h = od(this.ranges, s.overlay || [new Pt(r.from, r.to)]);
            h.length && this.inner.push(new nd(s.parser, s.parser.startParse(this.input, ld(c, h), h), s.overlay ? s.overlay.map((f) => new Pt(f.from - r.from, f.to - r.from)) : null, r.tree, h)), s.overlay ? h.length && (n = { ranges: h, depth: 0, prev: n }) : l = !1;
          }
        } else
          t && (a = t.predicate(r)) && (a === !0 && (a = new Pt(r.from, r.to)), a.from < a.to && t.ranges.push(a));
        if (l && r.firstChild())
          t && t.depth++, n && n.depth++;
        else
          for (; !r.nextSibling(); ) {
            if (!r.parent())
              break e;
            if (t && !--t.depth) {
              let c = od(this.ranges, t.ranges);
              c.length && this.inner.splice(t.index, 0, new nd(t.parser, t.parser.startParse(this.input, ld(t.mounts, c), c), t.ranges.map((h) => new Pt(h.from - t.start, h.to - t.start)), t.target, c)), t = t.prev;
            }
            n && !--n.depth && (n = n.prev);
          }
      }
  }
}
function Dw(i, e, t) {
  for (let n of i) {
    if (n.from >= t)
      break;
    if (n.to > e)
      return n.from <= e && n.to >= t ? 2 : 1;
  }
  return 0;
}
function rd(i, e, t, n, r, s) {
  if (e < t) {
    let o = i.buffer[e + 1];
    n.push(i.slice(e, t, o)), r.push(o - s);
  }
}
function Ww(i) {
  let { node: e } = i, t = 0;
  do
    i.parent(), t++;
  while (!i.tree);
  let n = 0, r = i.tree, s = 0;
  for (; s = r.positions[n] + i.from, !(s <= e.from && s + r.children[n].length >= e.to); n++)
    ;
  let o = r.children[n], l = o.buffer;
  function a(c, h, f, u, d) {
    let O = c;
    for (; l[O + 2] + s <= e.from; )
      O = l[O + 3];
    let m = [], b = [];
    rd(o, c, O, m, b, u);
    let y = l[O + 1], P = l[O + 2], C = y + s == e.from && P + s == e.to && l[O] == e.type.id;
    return m.push(C ? e.toTree() : a(O + 4, l[O + 3], o.set.types[l[O]], y, P - y)), b.push(y - u), rd(o, l[O + 3], h, m, b, u), new _e(f, m, b, d);
  }
  r.children[n] = a(0, l.length, ht.none, 0, o.length);
  for (let c = 0; c <= t; c++)
    i.childAfter(e.from);
}
class sd {
  constructor(e, t) {
    this.offset = t, this.done = !1, this.cursor = e.cursor(we.IncludeAnonymous | we.IgnoreMounts);
  }
  // Move to the first node (in pre-order) that starts at or after `pos`.
  moveTo(e) {
    let { cursor: t } = this, n = e - this.offset;
    for (; !this.done && t.from < n; )
      t.to >= e && t.enter(n, 1, we.IgnoreOverlays | we.ExcludeBuffers) || t.next(!1) || (this.done = !0);
  }
  hasNode(e) {
    if (this.moveTo(e.from), !this.done && this.cursor.from + this.offset == e.from && this.cursor.tree)
      for (let t = this.cursor.tree; ; ) {
        if (t == e.tree)
          return !0;
        if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof _e)
          t = t.children[0];
        else
          break;
      }
    return !1;
  }
}
let Nw = class {
  constructor(e) {
    var t;
    if (this.fragments = e, this.curTo = 0, this.fragI = 0, e.length) {
      let n = this.curFrag = e[0];
      this.curTo = (t = n.tree.prop(Ac)) !== null && t !== void 0 ? t : n.to, this.inner = new sd(n.tree, -n.offset);
    } else
      this.curFrag = this.inner = null;
  }
  hasNode(e) {
    for (; this.curFrag && e.from >= this.curTo; )
      this.nextFrag();
    return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e);
  }
  nextFrag() {
    var e;
    if (this.fragI++, this.fragI == this.fragments.length)
      this.curFrag = this.inner = null;
    else {
      let t = this.curFrag = this.fragments[this.fragI];
      this.curTo = (e = t.tree.prop(Ac)) !== null && e !== void 0 ? e : t.to, this.inner = new sd(t.tree, -t.offset);
    }
  }
  findMounts(e, t) {
    var n;
    let r = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e, 1);
      for (let s = this.inner.cursor.node; s; s = s.parent) {
        let o = (n = s.tree) === null || n === void 0 ? void 0 : n.prop(le.mounted);
        if (o && o.parser == t)
          for (let l = this.fragI; l < this.fragments.length; l++) {
            let a = this.fragments[l];
            if (a.from >= s.to)
              break;
            a.tree == this.curFrag.tree && r.push({
              frag: a,
              pos: s.from - a.offset,
              mount: o
            });
          }
      }
    }
    return r;
  }
};
function od(i, e) {
  let t = null, n = e;
  for (let r = 1, s = 0; r < i.length; r++) {
    let o = i[r - 1].to, l = i[r].from;
    for (; s < n.length; s++) {
      let a = n[s];
      if (a.from >= l)
        break;
      a.to <= o || (t || (n = t = e.slice()), a.from < o ? (t[s] = new Pt(a.from, o), a.to > l && t.splice(s + 1, 0, new Pt(l, a.to))) : a.to > l ? t[s--] = new Pt(l, a.to) : t.splice(s--, 1));
    }
  }
  return n;
}
function Mw(i, e, t, n) {
  let r = 0, s = 0, o = !1, l = !1, a = -1e9, c = [];
  for (; ; ) {
    let h = r == i.length ? 1e9 : o ? i[r].to : i[r].from, f = s == e.length ? 1e9 : l ? e[s].to : e[s].from;
    if (o != l) {
      let u = Math.max(a, t), d = Math.min(h, f, n);
      u < d && c.push(new Pt(u, d));
    }
    if (a = Math.min(h, f), a == 1e9)
      break;
    h == a && (o ? (o = !1, r++) : o = !0), f == a && (l ? (l = !1, s++) : l = !0);
  }
  return c;
}
function ld(i, e) {
  let t = [];
  for (let { pos: n, mount: r, frag: s } of i) {
    let o = n + (r.overlay ? r.overlay[0].from : 0), l = o + r.tree.length, a = Math.max(s.from, o), c = Math.min(s.to, l);
    if (r.overlay) {
      let h = r.overlay.map((u) => new Pt(u.from + n, u.to + n)), f = Mw(e, h, a, c);
      for (let u = 0, d = a; ; u++) {
        let O = u == f.length, m = O ? c : f[u].from;
        if (m > d && t.push(new fi(d, m, r.tree, -o, s.from >= d || s.openStart, s.to <= m || s.openEnd)), O)
          break;
        d = f[u].to;
      }
    } else
      t.push(new fi(a, c, r.tree, -o, s.from >= o || s.openStart, s.to <= l || s.openEnd));
  }
  return t;
}
let Yw = 0;
class zt {
  /// @internal
  constructor(e, t, n) {
    this.set = e, this.base = t, this.modified = n, this.id = Yw++;
  }
  /// Define a new tag. If `parent` is given, the tag is treated as a
  /// sub-tag of that parent, and
  /// [highlighters](#highlight.tagHighlighter) that don't mention
  /// this tag will try to fall back to the parent tag (or grandparent
  /// tag, etc).
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let t = new zt([], null, []);
    if (t.set.push(t), e)
      for (let n of e.set)
        t.set.push(n);
    return t;
  }
  /// Define a tag _modifier_, which is a function that, given a tag,
  /// will return a tag that is a subtag of the original. Applying the
  /// same modifier to a twice tag will return the same value (`m1(t1)
  /// == m1(t1)`) and applying multiple modifiers will, regardless or
  /// order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  ///
  /// When multiple modifiers are applied to a given base tag, each
  /// smaller set of modifiers is registered as a parent, so that for
  /// example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  /// `m1(m3(t1)`, and so on.
  static defineModifier() {
    let e = new Yo();
    return (t) => t.modified.indexOf(e) > -1 ? t : Yo.get(t.base || t, t.modified.concat(e).sort((n, r) => n.id - r.id));
  }
}
let jw = 0;
class Yo {
  constructor() {
    this.instances = [], this.id = jw++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let n = t[0].instances.find((l) => l.base == e && Uw(t, l.modified));
    if (n)
      return n;
    let r = [], s = new zt(r, e, t);
    for (let l of t)
      l.instances.push(s);
    let o = Iw(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          r.push(Yo.get(l, a));
    return s;
  }
}
function Uw(i, e) {
  return i.length == e.length && i.every((t, n) => t == e[n]);
}
function Iw(i) {
  let e = [[]];
  for (let t = 0; t < i.length; t++)
    for (let n = 0, r = e.length; n < r; n++)
      e.push(e[n].concat(i[t]));
  return e.sort((t, n) => n.length - t.length);
}
function Tl(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in i) {
    let n = i[t];
    Array.isArray(n) || (n = [n]);
    for (let r of t.split(" "))
      if (r) {
        let s = [], o = 2, l = r;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == r.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + r);
          if (s.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == r.length)
            break;
          let d = r[f++];
          if (f == r.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + r);
          l = r.slice(f);
        }
        let a = s.length - 1, c = s[a];
        if (!c)
          throw new RangeError("Invalid path: " + r);
        let h = new jo(n, o, a > 0 ? s.slice(0, a) : null);
        e[c] = h.sort(e[c]);
      }
  }
  return lg.add(e);
}
const lg = new le();
class jo {
  constructor(e, t, n, r) {
    this.tags = e, this.mode = t, this.context = n, this.next = r;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
jo.empty = new jo([], 2, null);
function ag(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of i)
    if (!Array.isArray(s.tag))
      t[s.tag.id] = s.class;
    else
      for (let o of s.tag)
        t[o.id] = s.class;
  let { scope: n, all: r = null } = e || {};
  return {
    style: (s) => {
      let o = r;
      for (let l of s)
        for (let a of l.set) {
          let c = t[a.id];
          if (c) {
            o = o ? o + " " + c : c;
            break;
          }
        }
      return o;
    },
    scope: n
  };
}
function qw(i, e) {
  let t = null;
  for (let n of i) {
    let r = n.style(e);
    r && (t = t ? t + " " + r : r);
  }
  return t;
}
function Bw(i, e, t, n = 0, r = i.length) {
  let s = new Lw(n, Array.isArray(e) ? e : [e], t);
  s.highlightRange(i.cursor(), n, r, "", s.highlighters), s.flush(r);
}
class Lw {
  constructor(e, t, n) {
    this.at = e, this.highlighters = t, this.span = n, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, n, r, s) {
    let { type: o, from: l, to: a } = e;
    if (l >= n || a <= t)
      return;
    o.isTop && (s = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let c = r, h = zw(e) || jo.empty, f = qw(s, h.tags);
    if (f && (c && (c += " "), c += f, h.mode == 1 && (r += (r ? " " : "") + f)), this.startSpan(e.from, c), h.opaque)
      return;
    let u = e.tree && e.tree.prop(le.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), O = this.highlighters.filter((b) => !b.scope || b.scope(u.tree.type)), m = e.firstChild();
      for (let b = 0, y = l; ; b++) {
        let P = b < u.overlay.length ? u.overlay[b] : null, C = P ? P.from + l : a, x = Math.max(t, y), T = Math.min(n, C);
        if (x < T && m)
          for (; e.from < T && (this.highlightRange(e, x, T, r, s), this.startSpan(Math.min(T, e.to), c), !(e.to >= C || !e.nextSibling())); )
            ;
        if (!P || C > n)
          break;
        y = P.to + l, y > t && (this.highlightRange(d.cursor(), Math.max(t, P.from + l), Math.min(n, y), r, O), this.startSpan(y, c));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      do
        if (!(e.to <= t)) {
          if (e.from >= n)
            break;
          this.highlightRange(e, t, n, r, s), this.startSpan(Math.min(n, e.to), c);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function zw(i) {
  let e = i.type.prop(lg);
  for (; e && e.context && !i.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const E = zt.define, Us = E(), xi = E(), ad = E(xi), cd = E(xi), wi = E(), Is = E(wi), fa = E(wi), Bt = E(), Ji = E(Bt), It = E(), qt = E(), Vc = E(), br = E(Vc), qs = E(), S = {
  /// A comment.
  comment: Us,
  /// A line [comment](#highlight.tags.comment).
  lineComment: E(Us),
  /// A block [comment](#highlight.tags.comment).
  blockComment: E(Us),
  /// A documentation [comment](#highlight.tags.comment).
  docComment: E(Us),
  /// Any kind of identifier.
  name: xi,
  /// The [name](#highlight.tags.name) of a variable.
  variableName: E(xi),
  /// A type [name](#highlight.tags.name).
  typeName: ad,
  /// A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  tagName: E(ad),
  /// A property or field [name](#highlight.tags.name).
  propertyName: cd,
  /// An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  attributeName: E(cd),
  /// The [name](#highlight.tags.name) of a class.
  className: E(xi),
  /// A label [name](#highlight.tags.name).
  labelName: E(xi),
  /// A namespace [name](#highlight.tags.name).
  namespace: E(xi),
  /// The [name](#highlight.tags.name) of a macro.
  macroName: E(xi),
  /// A literal value.
  literal: wi,
  /// A string [literal](#highlight.tags.literal).
  string: Is,
  /// A documentation [string](#highlight.tags.string).
  docString: E(Is),
  /// A character literal (subtag of [string](#highlight.tags.string)).
  character: E(Is),
  /// An attribute value (subtag of [string](#highlight.tags.string)).
  attributeValue: E(Is),
  /// A number [literal](#highlight.tags.literal).
  number: fa,
  /// An integer [number](#highlight.tags.number) literal.
  integer: E(fa),
  /// A floating-point [number](#highlight.tags.number) literal.
  float: E(fa),
  /// A boolean [literal](#highlight.tags.literal).
  bool: E(wi),
  /// Regular expression [literal](#highlight.tags.literal).
  regexp: E(wi),
  /// An escape [literal](#highlight.tags.literal), for example a
  /// backslash escape in a string.
  escape: E(wi),
  /// A color [literal](#highlight.tags.literal).
  color: E(wi),
  /// A URL [literal](#highlight.tags.literal).
  url: E(wi),
  /// A language keyword.
  keyword: It,
  /// The [keyword](#highlight.tags.keyword) for the self or this
  /// object.
  self: E(It),
  /// The [keyword](#highlight.tags.keyword) for null.
  null: E(It),
  /// A [keyword](#highlight.tags.keyword) denoting some atomic value.
  atom: E(It),
  /// A [keyword](#highlight.tags.keyword) that represents a unit.
  unit: E(It),
  /// A modifier [keyword](#highlight.tags.keyword).
  modifier: E(It),
  /// A [keyword](#highlight.tags.keyword) that acts as an operator.
  operatorKeyword: E(It),
  /// A control-flow related [keyword](#highlight.tags.keyword).
  controlKeyword: E(It),
  /// A [keyword](#highlight.tags.keyword) that defines something.
  definitionKeyword: E(It),
  /// A [keyword](#highlight.tags.keyword) related to defining or
  /// interfacing with modules.
  moduleKeyword: E(It),
  /// An operator.
  operator: qt,
  /// An [operator](#highlight.tags.operator) that dereferences something.
  derefOperator: E(qt),
  /// Arithmetic-related [operator](#highlight.tags.operator).
  arithmeticOperator: E(qt),
  /// Logical [operator](#highlight.tags.operator).
  logicOperator: E(qt),
  /// Bit [operator](#highlight.tags.operator).
  bitwiseOperator: E(qt),
  /// Comparison [operator](#highlight.tags.operator).
  compareOperator: E(qt),
  /// [Operator](#highlight.tags.operator) that updates its operand.
  updateOperator: E(qt),
  /// [Operator](#highlight.tags.operator) that defines something.
  definitionOperator: E(qt),
  /// Type-related [operator](#highlight.tags.operator).
  typeOperator: E(qt),
  /// Control-flow [operator](#highlight.tags.operator).
  controlOperator: E(qt),
  /// Program or markup punctuation.
  punctuation: Vc,
  /// [Punctuation](#highlight.tags.punctuation) that separates
  /// things.
  separator: E(Vc),
  /// Bracket-style [punctuation](#highlight.tags.punctuation).
  bracket: br,
  /// Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  /// tokens).
  angleBracket: E(br),
  /// Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  /// tokens).
  squareBracket: E(br),
  /// Parentheses (usually `(` and `)` tokens). Subtag of
  /// [bracket](#highlight.tags.bracket).
  paren: E(br),
  /// Braces (usually `{` and `}` tokens). Subtag of
  /// [bracket](#highlight.tags.bracket).
  brace: E(br),
  /// Content, for example plain text in XML or markup documents.
  content: Bt,
  /// [Content](#highlight.tags.content) that represents a heading.
  heading: Ji,
  /// A level 1 [heading](#highlight.tags.heading).
  heading1: E(Ji),
  /// A level 2 [heading](#highlight.tags.heading).
  heading2: E(Ji),
  /// A level 3 [heading](#highlight.tags.heading).
  heading3: E(Ji),
  /// A level 4 [heading](#highlight.tags.heading).
  heading4: E(Ji),
  /// A level 5 [heading](#highlight.tags.heading).
  heading5: E(Ji),
  /// A level 6 [heading](#highlight.tags.heading).
  heading6: E(Ji),
  /// A prose separator (such as a horizontal rule).
  contentSeparator: E(Bt),
  /// [Content](#highlight.tags.content) that represents a list.
  list: E(Bt),
  /// [Content](#highlight.tags.content) that represents a quote.
  quote: E(Bt),
  /// [Content](#highlight.tags.content) that is emphasized.
  emphasis: E(Bt),
  /// [Content](#highlight.tags.content) that is styled strong.
  strong: E(Bt),
  /// [Content](#highlight.tags.content) that is part of a link.
  link: E(Bt),
  /// [Content](#highlight.tags.content) that is styled as code or
  /// monospace.
  monospace: E(Bt),
  /// [Content](#highlight.tags.content) that has a strike-through
  /// style.
  strikethrough: E(Bt),
  /// Inserted text in a change-tracking format.
  inserted: E(),
  /// Deleted text.
  deleted: E(),
  /// Changed text.
  changed: E(),
  /// An invalid or unsyntactic element.
  invalid: E(),
  /// Metadata or meta-instruction.
  meta: qs,
  /// [Metadata](#highlight.tags.meta) that applies to the entire
  /// document.
  documentMeta: E(qs),
  /// [Metadata](#highlight.tags.meta) that annotates or adds
  /// attributes to a given syntactic element.
  annotation: E(qs),
  /// Processing instruction or preprocessor directive. Subtag of
  /// [meta](#highlight.tags.meta).
  processingInstruction: E(qs),
  /// [Modifier](#highlight.Tag^defineModifier) that indicates that a
  /// given element is being defined. Expected to be used with the
  /// various [name](#highlight.tags.name) tags.
  definition: zt.defineModifier(),
  /// [Modifier](#highlight.Tag^defineModifier) that indicates that
  /// something is constant. Mostly expected to be used with
  /// [variable names](#highlight.tags.variableName).
  constant: zt.defineModifier(),
  /// [Modifier](#highlight.Tag^defineModifier) used to indicate that
  /// a [variable](#highlight.tags.variableName) or [property
  /// name](#highlight.tags.propertyName) is being called or defined
  /// as a function.
  function: zt.defineModifier(),
  /// [Modifier](#highlight.Tag^defineModifier) that can be applied to
  /// [names](#highlight.tags.name) to indicate that they belong to
  /// the language's standard environment.
  standard: zt.defineModifier(),
  /// [Modifier](#highlight.Tag^defineModifier) that indicates a given
  /// [names](#highlight.tags.name) is local to some scope.
  local: zt.defineModifier(),
  /// A generic variant [modifier](#highlight.Tag^defineModifier) that
  /// can be used to tag language-specific alternative variants of
  /// some common tag. It is recommended for themes to define special
  /// forms of at least the [string](#highlight.tags.string) and
  /// [variable name](#highlight.tags.variableName) tags, since those
  /// come up a lot.
  special: zt.defineModifier()
};
ag([
  { tag: S.link, class: "tok-link" },
  { tag: S.heading, class: "tok-heading" },
  { tag: S.emphasis, class: "tok-emphasis" },
  { tag: S.strong, class: "tok-strong" },
  { tag: S.keyword, class: "tok-keyword" },
  { tag: S.atom, class: "tok-atom" },
  { tag: S.bool, class: "tok-bool" },
  { tag: S.url, class: "tok-url" },
  { tag: S.labelName, class: "tok-labelName" },
  { tag: S.inserted, class: "tok-inserted" },
  { tag: S.deleted, class: "tok-deleted" },
  { tag: S.literal, class: "tok-literal" },
  { tag: S.string, class: "tok-string" },
  { tag: S.number, class: "tok-number" },
  { tag: [S.regexp, S.escape, S.special(S.string)], class: "tok-string2" },
  { tag: S.variableName, class: "tok-variableName" },
  { tag: S.local(S.variableName), class: "tok-variableName tok-local" },
  { tag: S.definition(S.variableName), class: "tok-variableName tok-definition" },
  { tag: S.special(S.variableName), class: "tok-variableName2" },
  { tag: S.definition(S.propertyName), class: "tok-propertyName tok-definition" },
  { tag: S.typeName, class: "tok-typeName" },
  { tag: S.namespace, class: "tok-namespace" },
  { tag: S.className, class: "tok-className" },
  { tag: S.macroName, class: "tok-macroName" },
  { tag: S.propertyName, class: "tok-propertyName" },
  { tag: S.operator, class: "tok-operator" },
  { tag: S.comment, class: "tok-comment" },
  { tag: S.meta, class: "tok-meta" },
  { tag: S.invalid, class: "tok-invalid" },
  { tag: S.punctuation, class: "tok-punctuation" }
]);
var ua;
const ts = /* @__PURE__ */ new le();
function Gw(i) {
  return j.define({
    combine: i ? (e) => e.concat(i) : void 0
  });
}
class Dt {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, n = [], r = "") {
    this.data = e, this.name = r, ue.prototype.hasOwnProperty("tree") || Object.defineProperty(ue.prototype, "tree", { get() {
      return Xe(this);
    } }), this.parser = t, this.extension = [
      Bi.of(this),
      ue.languageData.of((s, o, l) => s.facet(hd(s, o, l)))
    ].concat(n);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, n = -1) {
    return hd(e, t, n) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(Bi);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let n = [], r = (s, o) => {
      if (s.prop(ts) == this.data) {
        n.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(le.mounted);
      if (l) {
        if (l.tree.prop(ts) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              n.push({ from: a.from + o, to: a.to + o });
          else
            n.push({ from: o, to: o + s.length });
          return;
        } else if (l.overlay) {
          let a = n.length;
          if (r(l.tree, l.overlay[0].from + o), n.length > a)
            return;
        }
      }
      for (let a = 0; a < s.children.length; a++) {
        let c = s.children[a];
        c instanceof _e && r(c, s.positions[a] + o);
      }
    };
    return r(Xe(e), 0), n;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Dt.setState = /* @__PURE__ */ ne.define();
function hd(i, e, t) {
  let n = i.facet(Bi);
  if (!n)
    return null;
  let r = n.data;
  if (n.allowsNesting)
    for (let s = Xe(i).topNode; s; s = s.enter(e, t, we.ExcludeBuffers))
      r = s.type.prop(ts) || r;
  return r;
}
class tr extends Dt {
  constructor(e, t, n) {
    super(e, t, [], n), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = Gw(e.languageData);
    return new tr(t, e.parser.configure({
      props: [ts.add((n) => n.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new tr(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function Xe(i) {
  let e = i.field(Dt.state, !1);
  return e ? e.tree : _e.empty;
}
class Fw {
  constructor(e, t = e.length) {
    this.doc = e, this.length = t, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let n = this.cursorPos - this.string.length;
    return e < n || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - n, t - n);
  }
}
let Sr = null;
class Uo {
  constructor(e, t, n = [], r, s, o, l, a) {
    this.parser = e, this.state = t, this.fragments = n, this.tree = r, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Uo(e, t, [], _e.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new Fw(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != _e.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var n;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let r = this.parse.advance();
        if (r)
          if (this.fragments = this.withoutTempSkipped(fi.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(fi.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Sr;
    Sr = this;
    try {
      return e();
    } finally {
      Sr = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = fd(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: n, tree: r, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((c, h, f, u) => a.push({ fromA: c, toA: h, fromB: f, toB: u })), n = fi.applyChanges(n, a), r = _e.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let c of this.skipped) {
          let h = e.mapPos(c.from, 1), f = e.mapPos(c.to, -1);
          h < f && l.push({ from: h, to: f });
        }
      }
    }
    return new Uo(this.parser, t, n, r, s, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let n = 0; n < this.skipped.length; n++) {
      let { from: r, to: s } = this.skipped[n];
      r < e.to && s > e.from && (this.fragments = fd(this.fragments, r, s), this.skipped.splice(n--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends og {
      createParse(t, n, r) {
        let s = r[0].from, o = r[r.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = Sr;
            if (a) {
              for (let c of r)
                a.tempSkipped.push(c);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new _e(ht.none, [], [], o - s);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Sr;
  }
}
function fd(i, e, t) {
  return fi.applyChanges(i, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class ir {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), n = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, n) || t.takeTree(), new ir(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), n = Uo.create(e.facet(Bi).parser, e, { from: 0, to: t });
    return n.work(20, t) || n.takeTree(), new ir(n);
  }
}
Dt.state = /* @__PURE__ */ qe.define({
  create: ir.init,
  update(i, e) {
    for (let t of e.effects)
      if (t.is(Dt.setState))
        return t.value;
    return e.startState.facet(Bi) != e.state.facet(Bi) ? ir.init(e.state) : i.apply(e);
  }
});
let cg = (i) => {
  let e = setTimeout(
    () => i(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (cg = (i) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(i, {
        timeout: 500 - 100
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const da = typeof navigator < "u" && (!((ua = navigator.scheduling) === null || ua === void 0) && ua.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Hw = /* @__PURE__ */ Re.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Dt.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), e.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Dt.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = cg(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: n, viewport: { to: r } } = this.view, s = n.field(Dt.state);
    if (s.tree == s.context.tree && s.context.isDone(
      r + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !da ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < r && n.doc.length > r + 1e3, a = s.context.work(() => da && da() || Date.now() > o, r + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: Dt.setState.of(new ir(s.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => xt(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), Bi = /* @__PURE__ */ j.define({
  combine(i) {
    return i.length ? i[0] : null;
  },
  enables: (i) => [
    Dt.state,
    Hw,
    U.contentAttributes.compute([i], (e) => {
      let t = e.facet(i);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class Mh {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const Kw = /* @__PURE__ */ j.define(), _l = /* @__PURE__ */ j.define({
  combine: (i) => {
    if (!i.length)
      return "  ";
    if (!/^(?: +|\t+)$/.test(i[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
    return i[0];
  }
});
function Io(i) {
  let e = i.facet(_l);
  return e.charCodeAt(0) == 9 ? i.tabSize * e.length : e.length;
}
function is(i, e) {
  let t = "", n = i.tabSize;
  if (i.facet(_l).charCodeAt(0) == 9)
    for (; e >= n; )
      t += "	", e -= n;
  for (let r = 0; r < e; r++)
    t += " ";
  return t;
}
function Yh(i, e) {
  i instanceof ue && (i = new Xl(i));
  for (let n of i.state.facet(Kw)) {
    let r = n(i, e);
    if (r !== void 0)
      return r;
  }
  let t = Xe(i.state);
  return t ? Jw(i, t, e) : null;
}
class Xl {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Io(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let n = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: s } = this.options;
    return r != null && r >= n.from && r <= n.to ? s && r == e ? { text: "", from: e } : (t < 0 ? r < e : r <= e) ? { text: n.text.slice(r - n.from), from: r } : { text: n.text.slice(0, r - n.from), from: n.from } : n;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: n, from: r } = this.lineAt(e, t);
    return n.slice(e - r, Math.min(n.length, e + 100 - r));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: n, from: r } = this.lineAt(e, t), s = this.countColumn(n, e - r), o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return o > -1 && (s += o - this.countColumn(n, n.search(/\S|$/))), s;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return ps(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: n, from: r } = this.lineAt(e, t), s = this.options.overrideIndentation;
    if (s) {
      let o = s(r);
      if (o > -1)
        return o;
    }
    return this.countColumn(n, n.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Al = /* @__PURE__ */ new le();
function Jw(i, e, t) {
  return hg(e.resolveInner(t).enterUnfinishedNodesBefore(t), t, i);
}
function e$(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function t$(i) {
  let e = i.type.prop(Al);
  if (e)
    return e;
  let t = i.firstChild, n;
  if (t && (n = t.type.prop(le.closedBy))) {
    let r = i.lastChild, s = r && n.indexOf(r.name) > -1;
    return (o) => fg(o, !0, 1, void 0, s && !e$(o) ? r.from : void 0);
  }
  return i.parent == null ? i$ : null;
}
function hg(i, e, t) {
  for (; i; i = i.parent) {
    let n = t$(i);
    if (n)
      return n(jh.create(t, e, i));
  }
  return null;
}
function i$() {
  return 0;
}
class jh extends Xl {
  constructor(e, t, n) {
    super(e.state, e.options), this.base = e, this.pos = t, this.node = n;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new jh(e, t, n);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    let e = this.state.doc.lineAt(this.node.from);
    for (; ; ) {
      let t = this.node.resolve(e.from);
      for (; t.parent && t.parent.from == t.from; )
        t = t.parent;
      if (n$(t, this.node))
        break;
      e = this.state.doc.lineAt(t.from);
    }
    return this.lineIndent(e.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    let e = this.node.parent;
    return e ? hg(e, this.pos, this.base) : 0;
  }
}
function n$(i, e) {
  for (let t = e; t; t = t.parent)
    if (i == t)
      return !0;
  return !1;
}
function r$(i) {
  let e = i.node, t = e.childAfter(e.from), n = e.lastChild;
  if (!t)
    return null;
  let r = i.options.simulateBreak, s = i.state.doc.lineAt(t.from), o = r == null || r <= s.from ? s.to : Math.min(s.to, r);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == n)
      return null;
    if (!a.type.isSkipped)
      return a.from < o ? t : null;
    l = a.to;
  }
}
function s$({ closing: i, align: e = !0, units: t = 1 }) {
  return (n) => fg(n, e, t, i);
}
function fg(i, e, t, n, r) {
  let s = i.textAfter, o = s.match(/^\s*/)[0].length, l = n && s.slice(o, o + n.length) == n || r == i.pos + o, a = e ? r$(i) : null;
  return a ? l ? i.column(a.from) : i.column(a.to) : i.baseIndent + (l ? 0 : i.unit * t);
}
const o$ = (i) => i.baseIndent;
function mo({ except: i, units: e = 1 } = {}) {
  return (t) => {
    let n = i && i.test(t.textAfter);
    return t.baseIndent + (n ? 0 : e * t.unit);
  };
}
const l$ = 200;
function a$() {
  return ue.transactionFilter.of((i) => {
    if (!i.docChanged || !i.isUserEvent("input.type") && !i.isUserEvent("input.complete"))
      return i;
    let e = i.startState.languageDataAt("indentOnInput", i.startState.selection.main.head);
    if (!e.length)
      return i;
    let t = i.newDoc, { head: n } = i.newSelection.main, r = t.lineAt(n);
    if (n > r.from + l$)
      return i;
    let s = t.sliceString(r.from, n);
    if (!e.some((c) => c.test(s)))
      return i;
    let { state: o } = i, l = -1, a = [];
    for (let { head: c } of o.selection.ranges) {
      let h = o.doc.lineAt(c);
      if (h.from == l)
        continue;
      l = h.from;
      let f = Yh(o, h.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(h.text)[0], d = is(o, f);
      u != d && a.push({ from: h.from, to: h.from + u.length, insert: d });
    }
    return a.length ? [i, { changes: a, sequential: !0 }] : i;
  });
}
const c$ = /* @__PURE__ */ j.define(), Vl = /* @__PURE__ */ new le();
function ug(i) {
  let e = i.firstChild, t = i.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? i.to : t.from } : null;
}
function h$(i, e, t) {
  let n = Xe(i);
  if (n.length < t)
    return null;
  let r = n.resolveInner(t, 1), s = null;
  for (let o = r; o; o = o.parent) {
    if (o.to <= t || o.from > t)
      continue;
    if (s && o.from < e)
      break;
    let l = o.type.prop(Vl);
    if (l && (o.to < n.length - 50 || n.length == i.doc.length || !f$(o))) {
      let a = l(o, i);
      a && a.from <= t && a.from >= e && a.to > t && (s = a);
    }
  }
  return s;
}
function f$(i) {
  let e = i.lastChild;
  return e && e.to == i.to && e.type.isError;
}
function qo(i, e, t) {
  for (let n of i.facet(c$)) {
    let r = n(i, e, t);
    if (r)
      return r;
  }
  return h$(i, e, t);
}
function dg(i, e) {
  let t = e.mapPos(i.from, 1), n = e.mapPos(i.to, -1);
  return t >= n ? void 0 : { from: t, to: n };
}
const El = /* @__PURE__ */ ne.define({ map: dg }), Ss = /* @__PURE__ */ ne.define({ map: dg });
function Og(i) {
  let e = [];
  for (let { head: t } of i.state.selection.ranges)
    e.some((n) => n.from <= t && n.to >= t) || e.push(i.lineBlockAt(t));
  return e;
}
const Qn = /* @__PURE__ */ qe.define({
  create() {
    return L.none;
  },
  update(i, e) {
    i = i.map(e.changes);
    for (let t of e.effects)
      t.is(El) && !u$(i, t.value.from, t.value.to) ? i = i.update({ add: [ud.range(t.value.from, t.value.to)] }) : t.is(Ss) && (i = i.update({
        filter: (n, r) => t.value.from != n || t.value.to != r,
        filterFrom: t.value.from,
        filterTo: t.value.to
      }));
    if (e.selection) {
      let t = !1, { head: n } = e.selection.main;
      i.between(n, n, (r, s) => {
        r < n && s > n && (t = !0);
      }), t && (i = i.update({
        filterFrom: n,
        filterTo: n,
        filter: (r, s) => s <= n || r >= n
      }));
    }
    return i;
  },
  provide: (i) => U.decorations.from(i),
  toJSON(i, e) {
    let t = [];
    return i.between(0, e.doc.length, (n, r) => {
      t.push(n, r);
    }), t;
  },
  fromJSON(i) {
    if (!Array.isArray(i) || i.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < i.length; ) {
      let n = i[t++], r = i[t++];
      if (typeof n != "number" || typeof r != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(ud.range(n, r));
    }
    return L.set(e, !0);
  }
});
function Bo(i, e, t) {
  var n;
  let r = null;
  return (n = i.field(Qn, !1)) === null || n === void 0 || n.between(e, t, (s, o) => {
    (!r || r.from > s) && (r = { from: s, to: o });
  }), r;
}
function u$(i, e, t) {
  let n = !1;
  return i.between(e, e, (r, s) => {
    r == e && s == t && (n = !0);
  }), n;
}
function pg(i, e) {
  return i.field(Qn, !1) ? e : e.concat(ne.appendConfig.of(bg()));
}
const d$ = (i) => {
  for (let e of Og(i)) {
    let t = qo(i.state, e.from, e.to);
    if (t)
      return i.dispatch({ effects: pg(i.state, [El.of(t), mg(i, t)]) }), !0;
  }
  return !1;
}, O$ = (i) => {
  if (!i.state.field(Qn, !1))
    return !1;
  let e = [];
  for (let t of Og(i)) {
    let n = Bo(i.state, t.from, t.to);
    n && e.push(Ss.of(n), mg(i, n, !1));
  }
  return e.length && i.dispatch({ effects: e }), e.length > 0;
};
function mg(i, e, t = !0) {
  let n = i.state.doc.lineAt(e.from).number, r = i.state.doc.lineAt(e.to).number;
  return U.announce.of(`${i.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${n} ${i.state.phrase("to")} ${r}.`);
}
const p$ = (i) => {
  let { state: e } = i, t = [];
  for (let n = 0; n < e.doc.length; ) {
    let r = i.lineBlockAt(n), s = qo(e, r.from, r.to);
    s && t.push(El.of(s)), n = (s ? i.lineBlockAt(s.to) : r).to + 1;
  }
  return t.length && i.dispatch({ effects: pg(i.state, t) }), !!t.length;
}, m$ = (i) => {
  let e = i.state.field(Qn, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, i.state.doc.length, (n, r) => {
    t.push(Ss.of({ from: n, to: r }));
  }), i.dispatch({ effects: t }), !0;
}, g$ = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: d$ },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: O$ },
  { key: "Ctrl-Alt-[", run: p$ },
  { key: "Ctrl-Alt-]", run: m$ }
], b$ = {
  placeholderDOM: null,
  placeholderText: "…"
}, gg = /* @__PURE__ */ j.define({
  combine(i) {
    return ri(i, b$);
  }
});
function bg(i) {
  let e = [Qn, Q$];
  return i && e.push(gg.of(i)), e;
}
const ud = /* @__PURE__ */ L.replace({ widget: /* @__PURE__ */ new class extends gi {
  toDOM(i) {
    let { state: e } = i, t = e.facet(gg), n = (s) => {
      let o = i.lineBlockAt(i.posAtDOM(s.target)), l = Bo(i.state, o.from, o.to);
      l && i.dispatch({ effects: Ss.of(l) }), s.preventDefault();
    };
    if (t.placeholderDOM)
      return t.placeholderDOM(i, n);
    let r = document.createElement("span");
    return r.textContent = t.placeholderText, r.setAttribute("aria-label", e.phrase("folded code")), r.title = e.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = n, r;
  }
}() }), S$ = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Oa extends Oi {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function y$(i = {}) {
  let e = Object.assign(Object.assign({}, S$), i), t = new Oa(e, !0), n = new Oa(e, !1), r = Re.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(Bi) != o.state.facet(Bi) || o.startState.field(Qn, !1) != o.state.field(Qn, !1) || Xe(o.startState) != Xe(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new ji();
      for (let a of o.viewportLineBlocks) {
        let c = Bo(o.state, a.from, a.to) ? n : qo(o.state, a.from, a.to) ? t : null;
        c && l.add(a.from, a.from, c);
      }
      return l.finish();
    }
  }), { domEventHandlers: s } = e;
  return [
    r,
    gw({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(r)) === null || l === void 0 ? void 0 : l.markers) || pe.empty;
      },
      initialSpacer() {
        return new Oa(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, s), { click: (o, l, a) => {
        if (s.click && s.click(o, l, a))
          return !0;
        let c = Bo(o.state, l.from, l.to);
        if (c)
          return o.dispatch({ effects: Ss.of(c) }), !0;
        let h = qo(o.state, l.from, l.to);
        return h ? (o.dispatch({ effects: El.of(h) }), !0) : !1;
      } })
    }),
    bg()
  ];
}
const Q$ = /* @__PURE__ */ U.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class Zl {
  constructor(e, t) {
    this.specs = e;
    let n;
    function r(l) {
      let a = Ui.newName();
      return (n || (n = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const s = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Dt ? (l) => l.prop(ts) == o.data : o ? (l) => l == o : void 0, this.style = ag(e.map((l) => ({
      tag: l.tag,
      class: l.class || r(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = n ? new Ui(n) : null, this.themeType = t.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, t) {
    return new Zl(e, t || {});
  }
}
const Ec = /* @__PURE__ */ j.define(), Sg = /* @__PURE__ */ j.define({
  combine(i) {
    return i.length ? [i[0]] : null;
  }
});
function pa(i) {
  let e = i.facet(Ec);
  return e.length ? e : i.facet(Sg);
}
function v$(i, e) {
  let t = [w$], n;
  return i instanceof Zl && (i.module && t.push(U.styleModule.of(i.module)), n = i.themeType), e != null && e.fallback ? t.push(Sg.of(i)) : n ? t.push(Ec.computeN([U.darkTheme], (r) => r.facet(U.darkTheme) == (n == "dark") ? [i] : [])) : t.push(Ec.of(i)), t;
}
class x$ {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Xe(e.state), this.decorations = this.buildDeco(e, pa(e.state));
  }
  update(e) {
    let t = Xe(e.state), n = pa(e.state), r = n != pa(e.startState);
    t.length < e.view.viewport.to && !r && t.type == this.tree.type ? this.decorations = this.decorations.map(e.changes) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, n));
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return L.none;
    let n = new ji();
    for (let { from: r, to: s } of e.visibleRanges)
      Bw(this.tree, t, (o, l, a) => {
        n.add(o, l, this.markCache[a] || (this.markCache[a] = L.mark({ class: a })));
      }, r, s);
    return n.finish();
  }
}
const w$ = /* @__PURE__ */ $n.high(/* @__PURE__ */ Re.fromClass(x$, {
  decorations: (i) => i.decorations
})), $$ = /* @__PURE__ */ Zl.define([
  {
    tag: S.meta,
    color: "#404740"
  },
  {
    tag: S.link,
    textDecoration: "underline"
  },
  {
    tag: S.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: S.emphasis,
    fontStyle: "italic"
  },
  {
    tag: S.strong,
    fontWeight: "bold"
  },
  {
    tag: S.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: S.keyword,
    color: "#708"
  },
  {
    tag: [S.atom, S.bool, S.url, S.contentSeparator, S.labelName],
    color: "#219"
  },
  {
    tag: [S.literal, S.inserted],
    color: "#164"
  },
  {
    tag: [S.string, S.deleted],
    color: "#a11"
  },
  {
    tag: [S.regexp, S.escape, /* @__PURE__ */ S.special(S.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ S.definition(S.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ S.local(S.variableName),
    color: "#30a"
  },
  {
    tag: [S.typeName, S.namespace],
    color: "#085"
  },
  {
    tag: S.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ S.special(S.variableName), S.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ S.definition(S.propertyName),
    color: "#00c"
  },
  {
    tag: S.comment,
    color: "#940"
  },
  {
    tag: S.invalid,
    color: "#f00"
  }
]), P$ = /* @__PURE__ */ U.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), yg = 1e4, Qg = "()[]{}", vg = /* @__PURE__ */ j.define({
  combine(i) {
    return ri(i, {
      afterCursor: !0,
      brackets: Qg,
      maxScanDistance: yg,
      renderMatch: T$
    });
  }
}), k$ = /* @__PURE__ */ L.mark({ class: "cm-matchingBracket" }), C$ = /* @__PURE__ */ L.mark({ class: "cm-nonmatchingBracket" });
function T$(i) {
  let e = [], t = i.matched ? k$ : C$;
  return e.push(t.range(i.start.from, i.start.to)), i.end && e.push(t.range(i.end.from, i.end.to)), e;
}
const _$ = /* @__PURE__ */ qe.define({
  create() {
    return L.none;
  },
  update(i, e) {
    if (!e.docChanged && !e.selection)
      return i;
    let t = [], n = e.state.facet(vg);
    for (let r of e.state.selection.ranges) {
      if (!r.empty)
        continue;
      let s = Jt(e.state, r.head, -1, n) || r.head > 0 && Jt(e.state, r.head - 1, 1, n) || n.afterCursor && (Jt(e.state, r.head, 1, n) || r.head < e.state.doc.length && Jt(e.state, r.head + 1, -1, n));
      s && (t = t.concat(n.renderMatch(s, e.state)));
    }
    return L.set(t, !0);
  },
  provide: (i) => U.decorations.from(i)
}), X$ = [
  _$,
  P$
];
function A$(i = {}) {
  return [vg.of(i), X$];
}
const xg = /* @__PURE__ */ new le();
function Zc(i, e, t) {
  let n = i.prop(e < 0 ? le.openedBy : le.closedBy);
  if (n)
    return n;
  if (i.name.length == 1) {
    let r = t.indexOf(i.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0))
      return [t[r + e]];
  }
  return null;
}
function Rc(i) {
  let e = i.type.prop(xg);
  return e ? e(i.node) : i;
}
function Jt(i, e, t, n = {}) {
  let r = n.maxScanDistance || yg, s = n.brackets || Qg, o = Xe(i), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let c = Zc(a.type, t, s);
    if (c && a.from < a.to) {
      let h = Rc(a);
      if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
        return V$(i, e, t, a, h, c, s);
    }
  }
  return E$(i, e, t, o, l.type, r, s);
}
function V$(i, e, t, n, r, s, o) {
  let l = n.parent, a = { from: r.from, to: r.to }, c = 0, h = l == null ? void 0 : l.cursor();
  if (h && (t < 0 ? h.childBefore(n.from) : h.childAfter(n.to)))
    do
      if (t < 0 ? h.to <= n.from : h.from >= n.to) {
        if (c == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) {
          let f = Rc(h);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (Zc(h.type, t, o))
          c++;
        else if (Zc(h.type, -t, o)) {
          if (c == 0) {
            let f = Rc(h);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1
            };
          }
          c--;
        }
      }
    while (t < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: !1 };
}
function E$(i, e, t, n, r, s, o) {
  let l = t < 0 ? i.sliceDoc(e - 1, e) : i.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let c = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, h = i.doc.iterRange(e, t > 0 ? i.doc.length : 0), f = 0;
  for (let u = 0; !h.next().done && u <= s; ) {
    let d = h.value;
    t < 0 && (u += d.length);
    let O = e + u * t;
    for (let m = t > 0 ? 0 : d.length - 1, b = t > 0 ? d.length : -1; m != b; m += t) {
      let y = o.indexOf(d[m]);
      if (!(y < 0 || n.resolveInner(O + m, 1).type != r))
        if (y % 2 == 0 == t > 0)
          f++;
        else {
          if (f == 1)
            return { start: c, end: { from: O + m, to: O + m + 1 }, matched: y >> 1 == a >> 1 };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return h.done ? { start: c, matched: !1 } : null;
}
const Z$ = /* @__PURE__ */ Object.create(null), dd = [ht.none], Od = [], R$ = /* @__PURE__ */ Object.create(null);
for (let [i, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  R$[i] = /* @__PURE__ */ D$(Z$, e);
function ma(i, e) {
  Od.indexOf(i) > -1 || (Od.push(i), console.warn(e));
}
function D$(i, e) {
  let t = null;
  for (let s of e.split(".")) {
    let o = i[s] || S[s];
    o ? typeof o == "function" ? t ? t = o(t) : ma(s, `Modifier ${s} used at start of tag`) : t ? ma(s, `Tag ${s} used as modifier`) : t = o : ma(s, `Unknown highlighting tag ${s}`);
  }
  if (!t)
    return 0;
  let n = e.replace(/ /g, "_"), r = ht.define({
    id: dd.length,
    name: n,
    props: [Tl({ [n]: t })]
  });
  return dd.push(r), r.id;
}
const W$ = (i) => {
  let e = Ih(i.state);
  return e.line ? N$(i) : e.block ? Y$(i) : !1;
};
function Uh(i, e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly)
      return !1;
    let r = i(e, t);
    return r ? (n(t.update(r)), !0) : !1;
  };
}
const N$ = /* @__PURE__ */ Uh(
  I$,
  0
  /* CommentOption.Toggle */
), M$ = /* @__PURE__ */ Uh(
  wg,
  0
  /* CommentOption.Toggle */
), Y$ = /* @__PURE__ */ Uh(
  (i, e) => wg(i, e, U$(e)),
  0
  /* CommentOption.Toggle */
);
function Ih(i, e = i.selection.main.head) {
  let t = i.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const yr = 50;
function j$(i, { open: e, close: t }, n, r) {
  let s = i.sliceDoc(n - yr, n), o = i.sliceDoc(r, r + yr), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, c = s.length - l;
  if (s.slice(c - e.length, c) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: r + a, margin: a && 1 }
    };
  let h, f;
  r - n <= 2 * yr ? h = f = i.sliceDoc(n, r) : (h = i.sliceDoc(n, n + yr), f = i.sliceDoc(r - yr, r));
  let u = /^\s*/.exec(h)[0].length, d = /\s*$/.exec(f)[0].length, O = f.length - d - t.length;
  return h.slice(u, u + e.length) == e && f.slice(O, O + t.length) == t ? {
    open: {
      pos: n + u + e.length,
      margin: /\s/.test(h.charAt(u + e.length)) ? 1 : 0
    },
    close: {
      pos: r - d - t.length,
      margin: /\s/.test(f.charAt(O - 1)) ? 1 : 0
    }
  } : null;
}
function U$(i) {
  let e = [];
  for (let t of i.selection.ranges) {
    let n = i.doc.lineAt(t.from), r = t.to <= n.to ? n : i.doc.lineAt(t.to), s = e.length - 1;
    s >= 0 && e[s].to > n.from ? e[s].to = r.to : e.push({ from: n.from, to: r.to });
  }
  return e;
}
function wg(i, e, t = e.selection.ranges) {
  let n = t.map((s) => Ih(e, s.from).block);
  if (!n.every((s) => s))
    return null;
  let r = t.map((s, o) => j$(e, n[o], s.from, s.to));
  if (i != 2 && !r.every((s) => s))
    return { changes: e.changes(t.map((s, o) => r[o] ? [] : [{ from: s.from, insert: n[o].open + " " }, { from: s.to, insert: " " + n[o].close }])) };
  if (i != 1 && r.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < r.length; o++)
      if (l = r[o]) {
        let a = n[o], { open: c, close: h } = l;
        s.push({ from: c.pos - a.open.length, to: c.pos + c.margin }, { from: h.pos - h.margin, to: h.pos + a.close.length });
      }
    return { changes: s };
  }
  return null;
}
function I$(i, e, t = e.selection.ranges) {
  let n = [], r = -1;
  for (let { from: s, to: o } of t) {
    let l = n.length, a = 1e9;
    for (let c = s; c <= o; ) {
      let h = e.doc.lineAt(c);
      if (h.from > r && (s == o || o > h.from)) {
        r = h.from;
        let f = Ih(e, c).line;
        if (!f)
          continue;
        let u = /^\s*/.exec(h.text)[0].length, d = u == h.length, O = h.text.slice(u, u + f.length) == f ? u : -1;
        u < h.text.length && u < a && (a = u), n.push({ line: h, comment: O, token: f, indent: u, empty: d, single: !1 });
      }
      c = h.to + 1;
    }
    if (a < 1e9)
      for (let c = l; c < n.length; c++)
        n[c].indent < n[c].line.text.length && (n[c].indent = a);
    n.length == l + 1 && (n[l].single = !0);
  }
  if (i != 2 && n.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: a, indent: c, empty: h, single: f } of n)
      (f || !h) && s.push({ from: l.from + c, insert: a + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (i != 1 && n.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: a } of n)
      if (l >= 0) {
        let c = o.from + l, h = c + a.length;
        o.text[h - o.from] == " " && h++, s.push({ from: c, to: h });
      }
    return { changes: s };
  }
  return null;
}
const Dc = /* @__PURE__ */ zi.define(), q$ = /* @__PURE__ */ zi.define(), B$ = /* @__PURE__ */ j.define(), $g = /* @__PURE__ */ j.define({
  combine(i) {
    return ri(i, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r)
    });
  }
});
function L$(i) {
  let e = 0;
  return i.iterChangedRanges((t, n) => e = n), e;
}
const Pg = /* @__PURE__ */ qe.define({
  create() {
    return ei.empty;
  },
  update(i, e) {
    let t = e.state.facet($g), n = e.annotation(Dc);
    if (n) {
      let a = e.docChanged ? v.single(L$(e.changes)) : void 0, c = dt.fromTransaction(e, a), h = n.side, f = h == 0 ? i.undone : i.done;
      return c ? f = Lo(f, f.length, t.minDepth, c) : f = Tg(f, e.startState.selection), new ei(h == 0 ? n.rest : f, h == 0 ? f : n.rest);
    }
    let r = e.annotation(q$);
    if ((r == "full" || r == "before") && (i = i.isolate()), e.annotation(Ne.addToHistory) === !1)
      return e.changes.empty ? i : i.addMapping(e.changes.desc);
    let s = dt.fromTransaction(e), o = e.annotation(Ne.time), l = e.annotation(Ne.userEvent);
    return s ? i = i.addChanges(s, o, l, t, e) : e.selection && (i = i.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (r == "full" || r == "after") && (i = i.isolate()), i;
  },
  toJSON(i) {
    return { done: i.done.map((e) => e.toJSON()), undone: i.undone.map((e) => e.toJSON()) };
  },
  fromJSON(i) {
    return new ei(i.done.map(dt.fromJSON), i.undone.map(dt.fromJSON));
  }
});
function z$(i = {}) {
  return [
    Pg,
    $g.of(i),
    U.domEventHandlers({
      beforeinput(e, t) {
        let n = e.inputType == "historyUndo" ? kg : e.inputType == "historyRedo" ? Wc : null;
        return n ? (e.preventDefault(), n(t)) : !1;
      }
    })
  ];
}
function Rl(i, e) {
  return function({ state: t, dispatch: n }) {
    if (!e && t.readOnly)
      return !1;
    let r = t.field(Pg, !1);
    if (!r)
      return !1;
    let s = r.pop(i, t, e);
    return s ? (n(s), !0) : !1;
  };
}
const kg = /* @__PURE__ */ Rl(0, !1), Wc = /* @__PURE__ */ Rl(1, !1), G$ = /* @__PURE__ */ Rl(0, !0), F$ = /* @__PURE__ */ Rl(1, !0);
class dt {
  constructor(e, t, n, r, s) {
    this.changes = e, this.effects = t, this.mapped = n, this.startSelection = r, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new dt(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, n;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((r) => r.toJSON())
    };
  }
  static fromJSON(e) {
    return new dt(e.changes && De.fromJSON(e.changes), [], e.mapped && ti.fromJSON(e.mapped), e.startSelection && v.fromJSON(e.startSelection), e.selectionsAfter.map(v.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let n = kt;
    for (let r of e.startState.facet(B$)) {
      let s = r(e);
      s.length && (n = n.concat(s));
    }
    return !n.length && e.changes.empty ? null : new dt(e.changes.invert(e.startState.doc), n, void 0, t || e.startState.selection, kt);
  }
  static selection(e) {
    return new dt(void 0, kt, void 0, void 0, e);
  }
}
function Lo(i, e, t, n) {
  let r = e + 1 > t + 20 ? e - t - 1 : 0, s = i.slice(r, e);
  return s.push(n), s;
}
function H$(i, e) {
  let t = [], n = !1;
  return i.iterChangedRanges((r, s) => t.push(r, s)), e.iterChangedRanges((r, s, o, l) => {
    for (let a = 0; a < t.length; ) {
      let c = t[a++], h = t[a++];
      l >= c && o <= h && (n = !0);
    }
  }), n;
}
function K$(i, e) {
  return i.ranges.length == e.ranges.length && i.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length === 0;
}
function Cg(i, e) {
  return i.length ? e.length ? i.concat(e) : i : e;
}
const kt = [], J$ = 200;
function Tg(i, e) {
  if (i.length) {
    let t = i[i.length - 1], n = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - J$));
    return n.length && n[n.length - 1].eq(e) ? i : (n.push(e), Lo(i, i.length - 1, 1e9, t.setSelAfter(n)));
  } else
    return [dt.selection([e])];
}
function eP(i) {
  let e = i[i.length - 1], t = i.slice();
  return t[i.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function ga(i, e) {
  if (!i.length)
    return i;
  let t = i.length, n = kt;
  for (; t; ) {
    let r = tP(i[t - 1], e, n);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let s = i.slice(0, t);
      return s[t - 1] = r, s;
    } else
      e = r.mapped, t--, n = r.selectionsAfter;
  }
  return n.length ? [dt.selection(n)] : kt;
}
function tP(i, e, t) {
  let n = Cg(i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(e)) : kt, t);
  if (!i.changes)
    return dt.selection(n);
  let r = i.changes.map(e), s = e.mapDesc(i.changes, !0), o = i.mapped ? i.mapped.composeDesc(s) : s;
  return new dt(r, ne.mapEffects(i.effects, e), o, i.startSelection.map(s), n);
}
const iP = /^(input\.type|delete)($|\.)/;
class ei {
  constructor(e, t, n = 0, r = void 0) {
    this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new ei(this.done, this.undone) : this;
  }
  addChanges(e, t, n, r, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!n || iP.test(n)) && (!l.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(s, H$(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    n == "input.type.compose") ? o = Lo(o, o.length - 1, r.minDepth, new dt(e.changes.compose(l.changes), Cg(e.effects, l.effects), l.mapped, l.startSelection, kt)) : o = Lo(o, o.length, r.minDepth, e), new ei(o, kt, t, n);
  }
  addSelection(e, t, n, r) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : kt;
    return s.length > 0 && t - this.prevTime < r && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && K$(s[s.length - 1], e) ? this : new ei(Tg(this.done, e), this.undone, t, n);
  }
  addMapping(e) {
    return new ei(ga(this.done, e), ga(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, n) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0)
      return null;
    let s = r[r.length - 1];
    if (n && s.selectionsAfter.length)
      return t.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: Dc.of({ side: e, rest: eP(r) }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let o = r.length == 1 ? kt : r.slice(0, r.length - 1);
      return s.mapped && (o = ga(o, s.mapped)), t.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: Dc.of({ side: e, rest: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
ei.empty = /* @__PURE__ */ new ei(kt, kt);
const nP = [
  { key: "Mod-z", run: kg, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Wc, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Wc, preventDefault: !0 },
  { key: "Mod-u", run: G$, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: F$, preventDefault: !0 }
];
function cr(i, e) {
  return v.create(i.ranges.map(e), i.mainIndex);
}
function si(i, e) {
  return i.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Mt({ state: i, dispatch: e }, t) {
  let n = cr(i.selection, t);
  return n.eq(i.selection) ? !1 : (e(si(i, n)), !0);
}
function Dl(i, e) {
  return v.cursor(e ? i.to : i.from);
}
function _g(i, e) {
  return Mt(i, (t) => t.empty ? i.moveByChar(t, e) : Dl(t, e));
}
function et(i) {
  return i.textDirectionAt(i.state.selection.main.head) == Te.LTR;
}
const Xg = (i) => _g(i, !et(i)), Ag = (i) => _g(i, et(i));
function Vg(i, e) {
  return Mt(i, (t) => t.empty ? i.moveByGroup(t, e) : Dl(t, e));
}
const rP = (i) => Vg(i, !et(i)), sP = (i) => Vg(i, et(i));
function oP(i, e, t) {
  if (e.type.prop(t))
    return !0;
  let n = e.to - e.from;
  return n && (n > 2 || /[^\s,.;:]/.test(i.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Wl(i, e, t) {
  let n = Xe(i).resolveInner(e.head), r = t ? le.closedBy : le.openedBy;
  for (let a = e.head; ; ) {
    let c = t ? n.childAfter(a) : n.childBefore(a);
    if (!c)
      break;
    oP(i, c, r) ? n = c : a = t ? c.to : c.from;
  }
  let s = n.type.prop(r), o, l;
  return s && (o = t ? Jt(i, n.from, 1) : Jt(i, n.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? n.to : n.from, v.cursor(l, t ? -1 : 1);
}
const lP = (i) => Mt(i, (e) => Wl(i.state, e, !et(i))), aP = (i) => Mt(i, (e) => Wl(i.state, e, et(i)));
function Eg(i, e) {
  return Mt(i, (t) => {
    if (!t.empty)
      return Dl(t, e);
    let n = i.moveVertically(t, e);
    return n.head != t.head ? n : i.moveToLineBoundary(t, e);
  });
}
const Zg = (i) => Eg(i, !1), Rg = (i) => Eg(i, !0);
function Dg(i) {
  return Math.max(i.defaultLineHeight, Math.min(i.dom.clientHeight, innerHeight) - 5);
}
function Wg(i, e) {
  let { state: t } = i, n = cr(t.selection, (l) => l.empty ? i.moveVertically(l, e, Dg(i)) : Dl(l, e));
  if (n.eq(t.selection))
    return !1;
  let r = i.coordsAtPos(t.selection.main.head), s = i.scrollDOM.getBoundingClientRect(), o;
  return r && r.top > s.top && r.bottom < s.bottom && r.top - s.top <= i.scrollDOM.scrollHeight - i.scrollDOM.scrollTop - i.scrollDOM.clientHeight && (o = U.scrollIntoView(n.main.head, { y: "start", yMargin: r.top - s.top })), i.dispatch(si(t, n), { effects: o }), !0;
}
const pd = (i) => Wg(i, !1), Nc = (i) => Wg(i, !0);
function Gi(i, e, t) {
  let n = i.lineBlockAt(e.head), r = i.moveToLineBoundary(e, t);
  if (r.head == e.head && r.head != (t ? n.to : n.from) && (r = i.moveToLineBoundary(e, t, !1)), !t && r.head == n.from && n.length) {
    let s = /^\s*/.exec(i.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    s && e.head != n.from + s && (r = v.cursor(n.from + s));
  }
  return r;
}
const cP = (i) => Mt(i, (e) => Gi(i, e, !0)), hP = (i) => Mt(i, (e) => Gi(i, e, !1)), fP = (i) => Mt(i, (e) => Gi(i, e, !et(i))), uP = (i) => Mt(i, (e) => Gi(i, e, et(i))), dP = (i) => Mt(i, (e) => v.cursor(i.lineBlockAt(e.head).from, 1)), OP = (i) => Mt(i, (e) => v.cursor(i.lineBlockAt(e.head).to, -1));
function pP(i, e, t) {
  let n = !1, r = cr(i.selection, (s) => {
    let o = Jt(i, s.head, -1) || Jt(i, s.head, 1) || s.head > 0 && Jt(i, s.head - 1, 1) || s.head < i.doc.length && Jt(i, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    n = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return t ? v.range(s.anchor, l) : v.cursor(l);
  });
  return n ? (e(si(i, r)), !0) : !1;
}
const mP = ({ state: i, dispatch: e }) => pP(i, e, !1);
function Xt(i, e) {
  let t = cr(i.state.selection, (n) => {
    let r = e(n);
    return v.range(n.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return t.eq(i.state.selection) ? !1 : (i.dispatch(si(i.state, t)), !0);
}
function Ng(i, e) {
  return Xt(i, (t) => i.moveByChar(t, e));
}
const Mg = (i) => Ng(i, !et(i)), Yg = (i) => Ng(i, et(i));
function jg(i, e) {
  return Xt(i, (t) => i.moveByGroup(t, e));
}
const gP = (i) => jg(i, !et(i)), bP = (i) => jg(i, et(i)), SP = (i) => Xt(i, (e) => Wl(i.state, e, !et(i))), yP = (i) => Xt(i, (e) => Wl(i.state, e, et(i)));
function Ug(i, e) {
  return Xt(i, (t) => i.moveVertically(t, e));
}
const Ig = (i) => Ug(i, !1), qg = (i) => Ug(i, !0);
function Bg(i, e) {
  return Xt(i, (t) => i.moveVertically(t, e, Dg(i)));
}
const md = (i) => Bg(i, !1), gd = (i) => Bg(i, !0), QP = (i) => Xt(i, (e) => Gi(i, e, !0)), vP = (i) => Xt(i, (e) => Gi(i, e, !1)), xP = (i) => Xt(i, (e) => Gi(i, e, !et(i))), wP = (i) => Xt(i, (e) => Gi(i, e, et(i))), $P = (i) => Xt(i, (e) => v.cursor(i.lineBlockAt(e.head).from)), PP = (i) => Xt(i, (e) => v.cursor(i.lineBlockAt(e.head).to)), bd = ({ state: i, dispatch: e }) => (e(si(i, { anchor: 0 })), !0), Sd = ({ state: i, dispatch: e }) => (e(si(i, { anchor: i.doc.length })), !0), yd = ({ state: i, dispatch: e }) => (e(si(i, { anchor: i.selection.main.anchor, head: 0 })), !0), Qd = ({ state: i, dispatch: e }) => (e(si(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0), kP = ({ state: i, dispatch: e }) => (e(i.update({ selection: { anchor: 0, head: i.doc.length }, userEvent: "select" })), !0), CP = ({ state: i, dispatch: e }) => {
  let t = Ml(i).map(({ from: n, to: r }) => v.range(n, Math.min(r + 1, i.doc.length)));
  return e(i.update({ selection: v.create(t), userEvent: "select" })), !0;
}, TP = ({ state: i, dispatch: e }) => {
  let t = cr(i.selection, (n) => {
    var r;
    let s = Xe(i).resolveInner(n.head, 1);
    for (; !(s.from < n.from && s.to >= n.to || s.to > n.to && s.from <= n.from || !(!((r = s.parent) === null || r === void 0) && r.parent)); )
      s = s.parent;
    return v.range(s.to, s.from);
  });
  return e(si(i, t)), !0;
}, _P = ({ state: i, dispatch: e }) => {
  let t = i.selection, n = null;
  return t.ranges.length > 1 ? n = v.create([t.main]) : t.main.empty || (n = v.create([v.cursor(t.main.head)])), n ? (e(si(i, n)), !0) : !1;
};
function Nl(i, e) {
  if (i.state.readOnly)
    return !1;
  let t = "delete.selection", { state: n } = i, r = n.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(o);
      a < o ? (t = "delete.backward", a = Bs(i, a, !1)) : a > o && (t = "delete.forward", a = Bs(i, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Bs(i, o, !1), l = Bs(i, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: v.cursor(o) };
  });
  return r.changes.empty ? !1 : (i.dispatch(n.update(r, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? U.announce.of(n.phrase("Selection deleted")) : void 0
  })), !0);
}
function Bs(i, e, t) {
  if (i instanceof U)
    for (let n of i.state.facet(U.atomicRanges).map((r) => r(i)))
      n.between(e, e, (r, s) => {
        r < e && s > e && (e = t ? s : r);
      });
  return e;
}
const Lg = (i, e) => Nl(i, (t) => {
  let { state: n } = i, r = n.doc.lineAt(t), s, o;
  if (!e && t > r.from && t < r.from + 200 && !/[^ \t]/.test(s = r.text.slice(0, t - r.from))) {
    if (s[s.length - 1] == "	")
      return t - 1;
    let l = ps(s, n.tabSize), a = l % Io(n) || Io(n);
    for (let c = 0; c < a && s[s.length - 1 - c] == " "; c++)
      t--;
    o = t;
  } else
    o = lt(r.text, t - r.from, e, e) + r.from, o == t && r.number != (e ? n.doc.lines : 1) && (o += e ? 1 : -1);
  return o;
}), Mc = (i) => Lg(i, !1), zg = (i) => Lg(i, !0), Gg = (i, e) => Nl(i, (t) => {
  let n = t, { state: r } = i, s = r.doc.lineAt(n), o = r.charCategorizer(n);
  for (let l = null; ; ) {
    if (n == (e ? s.to : s.from)) {
      n == t && s.number != (e ? r.doc.lines : 1) && (n += e ? 1 : -1);
      break;
    }
    let a = lt(s.text, n - s.from, e) + s.from, c = s.text.slice(Math.min(n, a) - s.from, Math.max(n, a) - s.from), h = o(c);
    if (l != null && h != l)
      break;
    (c != " " || n != t) && (l = h), n = a;
  }
  return n;
}), Fg = (i) => Gg(i, !1), XP = (i) => Gg(i, !0), Hg = (i) => Nl(i, (e) => {
  let t = i.lineBlockAt(e).to;
  return e < t ? t : Math.min(i.state.doc.length, e + 1);
}), AP = (i) => Nl(i, (e) => {
  let t = i.lineBlockAt(e).from;
  return e > t ? t : Math.max(0, e - 1);
}), VP = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => ({
    changes: { from: n.from, to: n.to, insert: de.of(["", ""]) },
    range: v.cursor(n.from)
  }));
  return e(i.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, EP = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == i.doc.length)
      return { range: n };
    let r = n.from, s = i.doc.lineAt(r), o = r == s.from ? r - 1 : lt(s.text, r - s.from, !1) + s.from, l = r == s.to ? r + 1 : lt(s.text, r - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: i.doc.slice(r, l).append(i.doc.slice(o, r)) },
      range: v.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(i.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Ml(i) {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let r = i.doc.lineAt(n.from), s = i.doc.lineAt(n.to);
    if (!n.empty && n.to == s.from && (s = i.doc.lineAt(n.to - 1)), t >= r.number) {
      let o = e[e.length - 1];
      o.to = s.to, o.ranges.push(n);
    } else
      e.push({ from: r.from, to: s.to, ranges: [n] });
    t = s.number + 1;
  }
  return e;
}
function Kg(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [], r = [];
  for (let s of Ml(i)) {
    if (t ? s.to == i.doc.length : s.from == 0)
      continue;
    let o = i.doc.lineAt(t ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (t) {
      n.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + i.lineBreak });
      for (let a of s.ranges)
        r.push(v.range(Math.min(i.doc.length, a.anchor + l), Math.min(i.doc.length, a.head + l)));
    } else {
      n.push({ from: o.from, to: s.from }, { from: s.to, insert: i.lineBreak + o.text });
      for (let a of s.ranges)
        r.push(v.range(a.anchor - l, a.head - l));
    }
  }
  return n.length ? (e(i.update({
    changes: n,
    scrollIntoView: !0,
    selection: v.create(r, i.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const ZP = ({ state: i, dispatch: e }) => Kg(i, e, !1), RP = ({ state: i, dispatch: e }) => Kg(i, e, !0);
function Jg(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [];
  for (let r of Ml(i))
    t ? n.push({ from: r.from, insert: i.doc.slice(r.from, r.to) + i.lineBreak }) : n.push({ from: r.to, insert: i.lineBreak + i.doc.slice(r.from, r.to) });
  return e(i.update({ changes: n, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const DP = ({ state: i, dispatch: e }) => Jg(i, e, !1), WP = ({ state: i, dispatch: e }) => Jg(i, e, !0), NP = (i) => {
  if (i.state.readOnly)
    return !1;
  let { state: e } = i, t = e.changes(Ml(e).map(({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s }))), n = cr(e.selection, (r) => i.moveVertically(r, !0)).map(t);
  return i.dispatch({ changes: t, selection: n, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function MP(i, e) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = Xe(i).resolveInner(e), n = t.childBefore(e), r = t.childAfter(e), s;
  return n && r && n.to <= e && r.from >= e && (s = n.type.prop(le.closedBy)) && s.indexOf(r.name) > -1 && i.doc.lineAt(n.to).from == i.doc.lineAt(r.from).from ? { from: n.to, to: r.from } : null;
}
const YP = /* @__PURE__ */ e0(!1), jP = /* @__PURE__ */ e0(!0);
function e0(i) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let n = e.changeByRange((r) => {
      let { from: s, to: o } = r, l = e.doc.lineAt(s), a = !i && s == o && MP(e, s);
      i && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let c = new Xl(e, { simulateBreak: s, simulateDoubleBreak: !!a }), h = Yh(c, s);
      for (h == null && (h = /^\s*/.exec(e.doc.lineAt(s).text)[0].length); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let f = ["", is(e, h)];
      return a && f.push(is(e, c.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: de.of(f) },
        range: v.cursor(s + 1 + f[1].length)
      };
    });
    return t(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function qh(i, e) {
  let t = -1;
  return i.changeByRange((n) => {
    let r = [];
    for (let o = n.from; o <= n.to; ) {
      let l = i.doc.lineAt(o);
      l.number > t && (n.empty || n.to > l.from) && (e(l, r, n), t = l.number), o = l.to + 1;
    }
    let s = i.changes(r);
    return {
      changes: r,
      range: v.range(s.mapPos(n.anchor, 1), s.mapPos(n.head, 1))
    };
  });
}
const UP = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), n = new Xl(i, { overrideIndentation: (s) => {
    let o = t[s];
    return o ?? -1;
  } }), r = qh(i, (s, o, l) => {
    let a = Yh(n, s.from);
    if (a == null)
      return;
    /\S/.test(s.text) || (a = 0);
    let c = /^\s*/.exec(s.text)[0], h = is(i, a);
    (c != h || l.from < s.from + c.length) && (t[s.from] = a, o.push({ from: s.from, to: s.from + c.length, insert: h }));
  });
  return r.changes.empty || e(i.update(r, { userEvent: "indent" })), !0;
}, IP = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(qh(i, (t, n) => {
  n.push({ from: t.from, insert: i.facet(_l) });
}), { userEvent: "input.indent" })), !0), qP = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(qh(i, (t, n) => {
  let r = /^\s*/.exec(t.text)[0];
  if (!r)
    return;
  let s = ps(r, i.tabSize), o = 0, l = is(i, Math.max(0, s - Io(i)));
  for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  n.push({ from: t.from + o, to: t.from + r.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), BP = [
  { key: "Ctrl-b", run: Xg, shift: Mg, preventDefault: !0 },
  { key: "Ctrl-f", run: Ag, shift: Yg },
  { key: "Ctrl-p", run: Zg, shift: Ig },
  { key: "Ctrl-n", run: Rg, shift: qg },
  { key: "Ctrl-a", run: dP, shift: $P },
  { key: "Ctrl-e", run: OP, shift: PP },
  { key: "Ctrl-d", run: zg },
  { key: "Ctrl-h", run: Mc },
  { key: "Ctrl-k", run: Hg },
  { key: "Ctrl-Alt-h", run: Fg },
  { key: "Ctrl-o", run: VP },
  { key: "Ctrl-t", run: EP },
  { key: "Ctrl-v", run: Nc }
], LP = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Xg, shift: Mg, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: rP, shift: gP, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: fP, shift: xP, preventDefault: !0 },
  { key: "ArrowRight", run: Ag, shift: Yg, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: sP, shift: bP, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: uP, shift: wP, preventDefault: !0 },
  { key: "ArrowUp", run: Zg, shift: Ig, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: bd, shift: yd },
  { mac: "Ctrl-ArrowUp", run: pd, shift: md },
  { key: "ArrowDown", run: Rg, shift: qg, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Sd, shift: Qd },
  { mac: "Ctrl-ArrowDown", run: Nc, shift: gd },
  { key: "PageUp", run: pd, shift: md },
  { key: "PageDown", run: Nc, shift: gd },
  { key: "Home", run: hP, shift: vP, preventDefault: !0 },
  { key: "Mod-Home", run: bd, shift: yd },
  { key: "End", run: cP, shift: QP, preventDefault: !0 },
  { key: "Mod-End", run: Sd, shift: Qd },
  { key: "Enter", run: YP },
  { key: "Mod-a", run: kP },
  { key: "Backspace", run: Mc, shift: Mc },
  { key: "Delete", run: zg },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Fg },
  { key: "Mod-Delete", mac: "Alt-Delete", run: XP },
  { mac: "Mod-Backspace", run: AP },
  { mac: "Mod-Delete", run: Hg }
].concat(/* @__PURE__ */ BP.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))), t0 = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: lP, shift: SP },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: aP, shift: yP },
  { key: "Alt-ArrowUp", run: ZP },
  { key: "Shift-Alt-ArrowUp", run: DP },
  { key: "Alt-ArrowDown", run: RP },
  { key: "Shift-Alt-ArrowDown", run: WP },
  { key: "Escape", run: _P },
  { key: "Mod-Enter", run: jP },
  { key: "Alt-l", mac: "Ctrl-l", run: CP },
  { key: "Mod-i", run: TP, preventDefault: !0 },
  { key: "Mod-[", run: qP },
  { key: "Mod-]", run: IP },
  { key: "Mod-Alt-\\", run: UP },
  { key: "Shift-Mod-k", run: NP },
  { key: "Shift-Mod-\\", run: mP },
  { key: "Mod-/", run: W$ },
  { key: "Alt-A", run: M$ }
].concat(LP);
class zo {
  /// @internal
  constructor(e, t, n, r, s, o, l, a, c, h = 0, f) {
    this.p = e, this.stack = t, this.state = n, this.reducePos = r, this.pos = s, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = c, this.lookAhead = h, this.parent = f;
  }
  /// @internal
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /// @internal
  static start(e, t, n = 0) {
    let r = e.parser.context;
    return new zo(e, [], t, n, n, 0, [], 0, r ? new vd(r, r.start) : null, 0, null);
  }
  /// The stack's current [context](#lr.ContextTracker) value, if
  /// any. Its type will depend on the context tracker's type
  /// parameter, or it will be `null` if there is no context
  /// tracker.
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /// @internal
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  // Apply a reduce action
  /// @internal
  reduce(e) {
    let t = e >> 19, n = e & 65535, { parser: r } = this.p, s = r.dynamicPrecedence(n);
    if (s && (this.score += s), t == 0) {
      this.pushState(r.getGoto(this.state, n, !0), this.reducePos), n < r.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, 4, !0), this.reduceContext(n, this.reducePos);
      return;
    }
    let o = this.stack.length - (t - 1) * 3 - (e & 262144 ? 6 : 0), l = o ? this.stack[o - 2] : 0, a = this.reducePos - l;
    a >= 2e3 && (l == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = a) : this.p.lastBigReductionSize < a && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = l, this.p.lastBigReductionSize = a));
    let c = o ? this.stack[o - 1] : 0, h = this.bufferBase + this.buffer.length - c;
    if (n < r.minRepeatTerm || e & 131072) {
      let f = r.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(n, l, f, h + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[o];
    else {
      let f = this.stack[o - 3];
      this.state = r.getGoto(f, n, !0);
    }
    for (; this.stack.length > o; )
      this.stack.pop();
    this.reduceContext(n, l);
  }
  // Shift a value into the buffer
  /// @internal
  storeNode(e, t, n, r = 4, s = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (t == n)
          return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = n;
          return;
        }
      }
    }
    if (!s || this.pos == n)
      this.buffer.push(e, t, n, r);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0)
        for (; o > 0 && this.buffer[o - 2] > n; )
          this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, r > 4 && (r -= 4);
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = n, this.buffer[o + 3] = r;
    }
  }
  // Apply a shift action
  /// @internal
  shift(e, t, n) {
    let r = this.pos;
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      this.pos = n, this.shiftContext(t, r), t <= this.p.parser.maxNode && this.buffer.push(t, r, n, 4);
    else {
      let s = e, { parser: o } = this.p;
      (n > this.pos || t <= o.maxNode) && (this.pos = n, o.stateFlag(
        s,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = n)), this.pushState(s, r), this.shiftContext(t, r), t <= o.maxNode && this.buffer.push(t, r, n, 4);
    }
  }
  // Apply an action
  /// @internal
  apply(e, t, n) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, n);
  }
  // Add a prebuilt (reused) node into the buffer.
  /// @internal
  useNode(e, t) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let r = this.pos;
    this.reducePos = this.pos = r + e.length, this.pushState(t, r), this.buffer.push(
      n,
      r,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /// @internal
  split() {
    let e = this, t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let n = e.buffer.slice(t), r = e.bufferBase + t;
    for (; e && r == e.bufferBase; )
      e = e.parent;
    return new zo(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, r, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /// @internal
  recoverByDelete(e, t) {
    let n = e <= this.p.parser.maxNode;
    n && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, n ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /// Check if the given term would be able to be shifted (optionally
  /// after some reductions) on this stack. This can be useful for
  /// external tokenizers that want to make sure they only provide a
  /// given token when it applies.
  canShift(e) {
    for (let t = new zP(this); ; ) {
      let n = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (n == 0)
        return !1;
      if (!(n & 65536))
        return !0;
      t.reduce(n);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /// @internal
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 4 << 1 || this.stack.length >= 120) {
      let r = [];
      for (let s = 0, o; s < t.length; s += 2)
        (o = t[s + 1]) != this.state && this.p.parser.hasAction(o, e) && r.push(t[s], o);
      if (this.stack.length < 120)
        for (let s = 0; r.length < 4 << 1 && s < t.length; s += 2) {
          let o = t[s + 1];
          r.some((l, a) => a & 1 && l == o) || r.push(t[s], o);
        }
      t = r;
    }
    let n = [];
    for (let r = 0; r < t.length && n.length < 4; r += 2) {
      let s = t[r + 1];
      if (s == this.state)
        continue;
      let o = this.split();
      o.pushState(s, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[r], this.pos), o.score -= 200, n.push(o);
    }
    return n;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /// @internal
  forceReduce() {
    let e = this.p.parser.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if (!(e & 65536))
      return !1;
    let { parser: t } = this.p;
    if (!t.validAction(this.state, e)) {
      let n = e >> 19, r = e & 65535, s = this.stack.length - n * 3;
      if (s < 0 || t.getGoto(this.stack[s], r, !1) < 0)
        return !1;
      this.storeNode(0, this.reducePos, this.reducePos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(e), !0;
  }
  /// @internal
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /// Check whether this state has no further actions (assumed to be a direct descendant of the
  /// top state, since any other states must be able to continue
  /// somehow). @internal
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !e.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /// Restart the stack (put it back in its start state). Only safe
  /// when this.stack.length == 3 (state is directly below the top
  /// state). @internal
  restart() {
    this.state = this.stack[0], this.stack.length = 0;
  }
  /// @internal
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  /// Get the parser used by this stack.
  get parser() {
    return this.p.parser;
  }
  /// Test whether a given dialect (by numeric ID, as exported from
  /// the terms file) is enabled.
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  /// @internal
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.reducePos, this.reducePos, -3);
  }
  /// @internal
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new vd(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  /// @internal
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e);
  }
  /// @internal
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class vd {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
var xd;
(function(i) {
  i[i.Insert = 200] = "Insert", i[i.Delete = 190] = "Delete", i[i.Reduce = 100] = "Reduce", i[i.MaxNext = 4] = "MaxNext", i[i.MaxInsertStackDepth = 300] = "MaxInsertStackDepth", i[i.DampenInsertStackDepth = 120] = "DampenInsertStackDepth", i[i.MinBigReduction = 2e3] = "MinBigReduction";
})(xd || (xd = {}));
class zP {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, n = e >> 19;
    n == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n - 1) * 3;
    let r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = r;
  }
}
class Go {
  constructor(e, t, n) {
    this.stack = e, this.pos = t, this.index = n, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new Go(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new Go(this.stack, this.pos, this.index);
  }
}
function Tr(i, e = Uint16Array) {
  if (typeof i != "string")
    return i;
  let t = null;
  for (let n = 0, r = 0; n < i.length; ) {
    let s = 0;
    for (; ; ) {
      let o = i.charCodeAt(n++), l = !1;
      if (o == 126) {
        s = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), s += a, l)
        break;
      s *= 46;
    }
    t ? t[r++] = s : t = new e(s);
  }
  return t;
}
class go {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const wd = new go();
class GP {
  /// @internal
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = wd, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /// @internal
  resolveOffset(e, t) {
    let n = this.range, r = this.rangeIndex, s = this.pos + e;
    for (; s < n.from; ) {
      if (!r)
        return null;
      let o = this.ranges[--r];
      s -= n.from - o.to, n = o;
    }
    for (; t < 0 ? s > n.to : s >= n.to; ) {
      if (r == this.ranges.length - 1)
        return null;
      let o = this.ranges[++r];
      s += o.from - n.to, n = o;
    }
    return s;
  }
  /// @internal
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  /// Look at a code unit near the stream position. `.peek(0)` equals
  /// `.next`, `.peek(-1)` gives you the previous character, and so
  /// on.
  ///
  /// Note that looking around during tokenizing creates dependencies
  /// on potentially far-away content, which may reduce the
  /// effectiveness incremental parsing—when looking forward—or even
  /// cause invalid reparses when looking backward more than 25 code
  /// units, since the library does not track lookbehind.
  peek(e) {
    let t = this.chunkOff + e, n, r;
    if (t >= 0 && t < this.chunk.length)
      n = this.pos + e, r = this.chunk.charCodeAt(t);
    else {
      let s = this.resolveOffset(e, 1);
      if (s == null)
        return -1;
      if (n = s, n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
        r = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= n; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = n), n + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - n)), r = this.chunk2.charCodeAt(0);
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), r;
  }
  /// Accept a token. By default, the end of the token is set to the
  /// current stream position, but you can pass an offset (relative to
  /// the stream position) to change that.
  acceptToken(e, t = 0) {
    let n = t ? this.resolveOffset(t, -1) : this.pos;
    if (n == null || n < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = n;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /// Move the stream forward N (defaults to 1) code units. Returns
  /// the new value of [`next`](#lr.InputStream.next).
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /// @internal
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = wd, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /// @internal
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let n = "";
    for (let r of this.ranges) {
      if (r.from >= t)
        break;
      r.to > e && (n += this.input.read(Math.max(r.from, e), Math.min(r.to, t)));
    }
    return n;
  }
}
class Ln {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: n } = t.p;
    i0(this.data, e, t, this.id, n.data, n.tokenPrecTable);
  }
}
Ln.prototype.contextual = Ln.prototype.fallback = Ln.prototype.extend = !1;
class Yc {
  constructor(e, t, n) {
    this.precTable = t, this.elseToken = n, this.data = typeof e == "string" ? Tr(e) : e;
  }
  token(e, t) {
    let n = e.pos, r;
    for (; r = e.pos, i0(this.data, e, t, 0, this.data, this.precTable), !(e.token.value > -1); ) {
      if (this.elseToken == null)
        return;
      if (e.next < 0)
        break;
      e.advance(), e.reset(r + 1, e.token);
    }
    r > n && (e.reset(n, e.token), e.acceptToken(this.elseToken, r - n));
  }
}
Yc.prototype.contextual = Ln.prototype.fallback = Ln.prototype.extend = !1;
class bi {
  /// Create a tokenizer. The first argument is the function that,
  /// given an input stream, scans for the types of tokens it
  /// recognizes at the stream's position, and calls
  /// [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  /// one.
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
}
function i0(i, e, t, n, r, s) {
  let o = 0, l = 1 << n, { dialect: a } = t.p.parser;
  e:
    for (; l & i[o]; ) {
      let c = i[o + 1];
      for (let d = o + 3; d < c; d += 2)
        if ((i[d + 1] & l) > 0) {
          let O = i[d];
          if (a.allows(O) && (e.token.value == -1 || e.token.value == O || FP(O, e.token.value, r, s))) {
            e.acceptToken(O);
            break;
          }
        }
      let h = e.next, f = 0, u = i[o + 2];
      if (e.next < 0 && u > f && i[c + u * 3 - 3] == 65535 && i[c + u * 3 - 3] == 65535) {
        o = i[c + u * 3 - 1];
        continue e;
      }
      for (; f < u; ) {
        let d = f + u >> 1, O = c + d + (d << 1), m = i[O], b = i[O + 1] || 65536;
        if (h < m)
          u = d;
        else if (h >= b)
          f = d + 1;
        else {
          o = i[O + 2], e.advance();
          continue e;
        }
      }
      break;
    }
}
function $d(i, e, t) {
  for (let n = e, r; (r = i[n]) != 65535; n++)
    if (r == t)
      return n - e;
  return -1;
}
function FP(i, e, t, n) {
  let r = $d(t, n, e);
  return r < 0 || $d(t, n, i) < r;
}
const Vt = typeof process < "u" && {} && /\bparse\b/.test({}.LOG);
let ba = null;
var Pd;
(function(i) {
  i[i.Margin = 25] = "Margin";
})(Pd || (Pd = {}));
function kd(i, e, t) {
  let n = i.cursor(we.IncludeAnonymous);
  for (n.moveTo(e); ; )
    if (!(t < 0 ? n.childBefore(e) : n.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? n.to < e : n.from > e) && !n.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            n.to - 1,
            e - 25
            /* Safety.Margin */
          )) : Math.min(i.length, Math.max(
            n.from + 1,
            e + 25
            /* Safety.Margin */
          ));
        if (t < 0 ? n.prevSibling() : n.nextSibling())
          break;
        if (!n.parent())
          return t < 0 ? 0 : i.length;
      }
}
class HP {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? kd(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? kd(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let n = this.trees[t], r = this.index[t];
      if (r == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let s = n.children[r], o = this.start[t] + n.positions[r];
      if (o > e)
        return this.nextStart = o, null;
      if (s instanceof _e) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + s.length;
          if (l <= this.safeTo) {
            let a = s.prop(le.lookAhead);
            if (!a || l + a < this.fragment.to)
              return s;
          }
        }
        this.index[t]++, o + s.length >= Math.max(this.safeFrom, e) && (this.trees.push(s), this.start.push(o), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = o + s.length;
    }
  }
}
class KP {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((n) => new go());
  }
  getActions(e) {
    let t = 0, n = null, { parser: r } = e.p, { tokenizers: s } = r, o = r.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let c = 0; c < s.length; c++) {
      if (!(1 << c & o))
        continue;
      let h = s[c], f = this.tokens[c];
      if (!(n && !h.fallback) && ((h.contextual || f.start != e.pos || f.mask != o || f.context != l) && (this.updateCachedToken(f, h, e), f.mask = o, f.context = l), f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)), f.value != 0)) {
        let u = t;
        if (f.extended > -1 && (t = this.addActions(e, f.extended, f.end, t)), t = this.addActions(e, f.value, f.end, t), !h.extend && (n = f, t > u))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !n && e.pos == this.stream.end && (n = new go(), n.value = e.p.parser.eofTerm, n.start = n.end = e.pos, t = this.addActions(e, n.value, n.end, t)), this.mainToken = n, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new go(), { pos: n, p: r } = e;
    return t.start = n, t.end = Math.min(n + 1, r.stream.end), t.value = n == r.stream.end ? r.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, n) {
    let r = this.stream.clipPos(n.pos);
    if (t.token(this.stream.reset(r, e), n), e.value > -1) {
      let { parser: s } = n.p;
      for (let o = 0; o < s.specialized.length; o++)
        if (s.specialized[o] == e.value) {
          let l = s.specializers[o](this.stream.read(e.start, e.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? e.extended = l >> 1 : e.value = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(r + 1);
  }
  putAction(e, t, n, r) {
    for (let s = 0; s < r; s += 3)
      if (this.actions[s] == e)
        return r;
    return this.actions[r++] = e, this.actions[r++] = t, this.actions[r++] = n, r;
  }
  addActions(e, t, n, r) {
    let { state: s } = e, { parser: o } = e.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let c = o.stateSlot(
        s,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; c += 3) {
        if (l[c] == 65535)
          if (l[c + 1] == 1)
            c = ci(l, c + 2);
          else {
            r == 0 && l[c + 1] == 2 && (r = this.putAction(ci(l, c + 2), t, n, r));
            break;
          }
        l[c] == t && (r = this.putAction(ci(l, c + 1), t, n, r));
      }
    return r;
  }
}
var Cd;
(function(i) {
  i[i.Distance = 5] = "Distance", i[i.MaxRemainingPerStep = 3] = "MaxRemainingPerStep", i[i.MinBufferLengthPrune = 500] = "MinBufferLengthPrune", i[i.ForceReduceLimit = 10] = "ForceReduceLimit", i[i.CutDepth = 15e3] = "CutDepth", i[i.CutTo = 9e3] = "CutTo", i[i.MaxLeftAssociativeReductionCount = 1e3] = "MaxLeftAssociativeReductionCount";
})(Cd || (Cd = {}));
class JP {
  constructor(e, t, n, r) {
    this.parser = e, this.input = t, this.ranges = r, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new GP(t, r), this.tokens = new KP(e, this.stream), this.topTerm = e.top[1];
    let { from: s } = r[0];
    this.stacks = [zo.start(this, e.top[0], s)], this.fragments = n.length && this.stream.end - s > e.bufferLength * 4 ? new HP(n, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let e = this.stacks, t = this.minStackPos, n = this.stacks = [], r, s;
    if (this.bigReductionCount > 1e3 && e.length == 1) {
      let [o] = e;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > t)
          n.push(l);
        else {
          if (this.advanceStack(l, n, e))
            continue;
          {
            r || (r = [], s = []), r.push(l);
            let a = this.tokens.getMainToken(l);
            s.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let o = r && tk(r);
      if (o)
        return this.stackToTree(o);
      if (this.parser.strict)
        throw Vt && r && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && r) {
      let o = this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, s, n);
      if (o)
        return this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n.length > o)
        for (n.sort((l, a) => a.score - l.score); n.length > o; )
          n.pop();
      n.some((l) => l.reducePos > t) && this.recovering--;
    } else if (n.length > 1) {
      e:
        for (let o = 0; o < n.length - 1; o++) {
          let l = n[o];
          for (let a = o + 1; a < n.length; a++) {
            let c = n[a];
            if (l.sameState(c) || l.buffer.length > 500 && c.buffer.length > 500)
              if ((l.score - c.score || l.buffer.length - c.buffer.length) > 0)
                n.splice(a--, 1);
              else {
                n.splice(o--, 1);
                continue e;
              }
          }
        }
    }
    this.minStackPos = n[0].pos;
    for (let o = 1; o < n.length; o++)
      n[o].pos < this.minStackPos && (this.minStackPos = n[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(e, t, n) {
    let r = e.pos, { parser: s } = this, o = Vt ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && r > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let c = e.curContext && e.curContext.tracker.strict, h = c ? e.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(r); f; ) {
        let u = this.parser.nodeSet.types[f.type.id] == f.type ? s.getGoto(e.state, f.type.id) : -1;
        if (u > -1 && f.length && (!c || (f.prop(le.contextHash) || 0) == h))
          return e.useNode(f, u), Vt && console.log(o + this.stackID(e) + ` (via reuse of ${s.getName(f.type.id)})`), !0;
        if (!(f instanceof _e) || f.children.length == 0 || f.positions[0] > 0)
          break;
        let d = f.children[0];
        if (d instanceof _e && f.positions[0] == 0)
          f = d;
        else
          break;
      }
    }
    let l = s.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return e.reduce(l), Vt && console.log(o + this.stackID(e) + ` (via always-reduce ${s.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 15e3)
      for (; e.stack.length > 9e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let c = 0; c < a.length; ) {
      let h = a[c++], f = a[c++], u = a[c++], d = c == a.length || !n, O = d ? e : e.split();
      if (O.apply(h, f, u), Vt && console.log(o + this.stackID(O) + ` (via ${h & 65536 ? `reduce of ${s.getName(
        h & 65535
        /* Action.ValueMask */
      )}` : "shift"} for ${s.getName(f)} @ ${r}${O == e ? "" : ", split"})`), d)
        return !0;
      O.pos > r ? t.push(O) : n.push(O);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let n = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > n)
        return Td(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let r = null, s = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], c = t[(o << 1) + 1], h = Vt ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (s || (s = !0, l.restart(), Vt && console.log(h + this.stackID(l) + " (restarted)"), this.advanceFully(l, n))))
        continue;
      let f = l.split(), u = h;
      for (let d = 0; f.forceReduce() && d < 10 && (Vt && console.log(u + this.stackID(f) + " (via force-reduce)"), !this.advanceFully(f, n)); d++)
        Vt && (u = this.stackID(f) + " -> ");
      for (let d of l.recoverByInsert(a))
        Vt && console.log(h + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, n);
      this.stream.end > l.pos ? (c == l.pos && (c++, a = 0), l.recoverByDelete(a, c), Vt && console.log(h + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), Td(l, n)) : (!r || r.score < l.score) && (r = l);
    }
    return r;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), _e.build({
      buffer: Go.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (ba || (ba = /* @__PURE__ */ new WeakMap())).get(e);
    return t || ba.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function Td(i, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == i.pos && n.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class ek {
  constructor(e, t, n) {
    this.source = e, this.flags = t, this.disabled = n;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const Sa = (i) => i;
class n0 {
  /// Define a context tracker.
  constructor(e) {
    this.start = e.start, this.shift = e.shift || Sa, this.reduce = e.reduce || Sa, this.reuse = e.reuse || Sa, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class nr extends og {
  /// @internal
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (${14})`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++)
      t.push("");
    let n = Object.keys(e.topRules).map((l) => e.topRules[l][1]), r = [];
    for (let l = 0; l < t.length; l++)
      r.push([]);
    function s(l, a, c) {
      r[l].push([a, a.deserialize(String(c))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = le[a]);
        for (let c = 1; c < l.length; ) {
          let h = l[c++];
          if (h >= 0)
            s(h, a, l[c++]);
          else {
            let f = l[c + -h];
            for (let u = -h; u > 0; u--)
              s(l[c++], a, f);
            c++;
          }
        }
      }
    this.nodeSet = new Rh(t.map((l, a) => ht.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: r[a],
      top: n.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = ng;
    let o = Tr(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(_d), this.states = Tr(e.states, Uint32Array), this.data = Tr(e.stateData), this.goto = Tr(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new Ln(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, n) {
    let r = new JP(this, e, t, n);
    for (let s of this.wrappers)
      r = s(r, e, t, n);
    return r;
  }
  /// Get a goto table entry @internal
  getGoto(e, t, n = !1) {
    let r = this.goto;
    if (t >= r[0])
      return -1;
    for (let s = r[t + 1]; ; ) {
      let o = r[s++], l = o & 1, a = r[s++];
      if (l && n)
        return a;
      for (let c = s + (o >> 1); s < c; s++)
        if (r[s] == e)
          return a;
      if (l)
        return -1;
    }
  }
  /// Check if this state has an action for a given terminal @internal
  hasAction(e, t) {
    let n = this.data;
    for (let r = 0; r < 2; r++)
      for (let s = this.stateSlot(
        e,
        r ? 2 : 1
        /* ParseState.Actions */
      ), o; ; s += 3) {
        if ((o = n[s]) == 65535)
          if (n[s + 1] == 1)
            o = n[s = ci(n, s + 2)];
          else {
            if (n[s + 1] == 2)
              return ci(n, s + 2);
            break;
          }
        if (o == t || o == 0)
          return ci(n, s + 1);
      }
    return 0;
  }
  /// @internal
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  /// @internal
  stateFlag(e, t) {
    return (this.stateSlot(
      e,
      0
      /* ParseState.Flags */
    ) & t) > 0;
  }
  /// @internal
  validAction(e, t) {
    if (t == this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ))
      return !0;
    for (let n = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1)
          n = ci(this.data, n + 2);
        else
          return !1;
      if (t == ci(this.data, n + 1))
        return !0;
    }
  }
  /// Get the states that can follow this one through shift actions or
  /// goto jumps. @internal
  nextStates(e) {
    let t = [];
    for (let n = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1)
          n = ci(this.data, n + 2);
        else
          break;
      if (!(this.data[n + 2] & 1)) {
        let r = this.data[n + 1];
        t.some((s, o) => o & 1 && s == r) || t.push(this.data[n], r);
      }
    }
    return t;
  }
  /// Configure the parser. Returns a new parser instance that has the
  /// given settings modified. Settings not provided in `config` are
  /// kept from the original parser.
  configure(e) {
    let t = Object.assign(Object.create(nr.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let n = this.topRules[e.top];
      if (!n)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = n;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((n) => {
      let r = e.tokenizers.find((s) => s.from == n);
      return r ? r.to : n;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((n, r) => {
      let s = e.specializers.find((l) => l.from == n.external);
      if (!s)
        return n;
      let o = Object.assign(Object.assign({}, n), { external: s.to });
      return t.specializers[r] = _d(o), o;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  /// Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  /// are registered for this parser.
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /// Returns the name associated with a given term. This will only
  /// work for all terms when the parser was generated with the
  /// `--names` option. By default, only the names of tagged terms are
  /// stored.
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  /// The eof term id is always allocated directly after the node
  /// types. @internal
  get eofTerm() {
    return this.maxNode + 1;
  }
  /// The type of top node produced by the parser.
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /// @internal
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  /// @internal
  parseDialect(e) {
    let t = Object.keys(this.dialects), n = t.map(() => !1);
    if (e)
      for (let s of e.split(" ")) {
        let o = t.indexOf(s);
        o >= 0 && (n[o] = !0);
      }
    let r = null;
    for (let s = 0; s < t.length; s++)
      if (!n[s])
        for (let o = this.dialects[t[s]], l; (l = this.data[o++]) != 65535; )
          (r || (r = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new ek(e, n, r);
  }
  /// Used by the output of the parser generator. Not available to
  /// user code. @hide
  static deserialize(e) {
    return new nr(e);
  }
}
function ci(i, e) {
  return i[e] | i[e + 1] << 16;
}
function tk(i) {
  let e = null;
  for (let t of i) {
    let n = t.p.stoppedAt;
    (t.pos == t.p.stream.end || n != null && t.pos > n) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function _d(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, n) => i.external(t, n) << 1 | e;
  }
  return i.get;
}
const ik = 94, Xd = 1, nk = 95, rk = 96, Ad = 2, r0 = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], sk = 58, ok = 40, s0 = 95, lk = 91, bo = 45, ak = 46, ck = 35, hk = 37;
function Fo(i) {
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 161;
}
function fk(i) {
  return i >= 48 && i <= 57;
}
const uk = new bi((i, e) => {
  for (let t = !1, n = 0, r = 0; ; r++) {
    let { next: s } = i;
    if (Fo(s) || s == bo || s == s0 || t && fk(s))
      !t && (s != bo || r > 0) && (t = !0), n === r && s == bo && n++, i.advance();
    else {
      t && i.acceptToken(s == ok ? nk : n == 2 && e.canShift(Ad) ? Ad : rk);
      break;
    }
  }
}), dk = new bi((i) => {
  if (r0.includes(i.peek(-1))) {
    let { next: e } = i;
    (Fo(e) || e == s0 || e == ck || e == ak || e == lk || e == sk || e == bo) && i.acceptToken(ik);
  }
}), Ok = new bi((i) => {
  if (!r0.includes(i.peek(-1))) {
    let { next: e } = i;
    if (e == hk && (i.advance(), i.acceptToken(Xd)), Fo(e)) {
      do
        i.advance();
      while (Fo(i.next));
      i.acceptToken(Xd);
    }
  }
}), pk = Tl({
  "AtKeyword import charset namespace keyframes media supports": S.definitionKeyword,
  "from to selector": S.keyword,
  NamespaceName: S.namespace,
  KeyframeName: S.labelName,
  TagName: S.tagName,
  ClassName: S.className,
  PseudoClassName: S.constant(S.className),
  IdName: S.labelName,
  "FeatureName PropertyName": S.propertyName,
  AttributeName: S.attributeName,
  NumberLiteral: S.number,
  KeywordQuery: S.keyword,
  UnaryQueryOp: S.operatorKeyword,
  "CallTag ValueName": S.atom,
  VariableName: S.variableName,
  Callee: S.operatorKeyword,
  Unit: S.unit,
  "UniversalSelector NestingSelector": S.definitionOperator,
  MatchOp: S.compareOperator,
  "ChildOp SiblingOp, LogicOp": S.logicOperator,
  BinOp: S.arithmeticOperator,
  Important: S.modifier,
  Comment: S.blockComment,
  ParenthesizedContent: S.special(S.name),
  ColorLiteral: S.color,
  StringLiteral: S.string,
  ":": S.punctuation,
  "PseudoOp #": S.derefOperator,
  "; ,": S.separator,
  "( )": S.paren,
  "[ ]": S.squareBracket,
  "{ }": S.brace
}), mk = { __proto__: null, lang: 32, "nth-child": 32, "nth-last-child": 32, "nth-of-type": 32, "nth-last-of-type": 32, dir: 32, "host-context": 32, url: 60, "url-prefix": 60, domain: 60, regexp: 60, selector: 134 }, gk = { __proto__: null, "@import": 114, "@media": 138, "@charset": 142, "@namespace": 146, "@keyframes": 152, "@supports": 164 }, bk = { __proto__: null, not: 128, only: 128, from: 158, to: 160 }, Sk = nr.deserialize({
  version: 14,
  states: "7WQYQ[OOO#_Q[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO#fQ[O'#CfO$YQXO'#CaO$aQ[O'#ChO$lQ[O'#DPO$qQ[O'#DTOOQP'#Ed'#EdO$vQdO'#DeO%bQ[O'#DrO$vQdO'#DtO%sQ[O'#DvO&OQ[O'#DyO&TQ[O'#EPO&cQ[O'#EROOQS'#Ec'#EcOOQS'#ET'#ETQYQ[OOO&jQXO'#CdO'_QWO'#DaO'dQWO'#EjO'oQ[O'#EjQOQWOOOOQP'#Cg'#CgOOQP,59Q,59QO#fQ[O,59QO'yQ[O'#EWO(eQWO,58{O(mQ[O,59SO$lQ[O,59kO$qQ[O,59oO'yQ[O,59sO'yQ[O,59uO'yQ[O,59vO(xQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO)PQWO,59SO)UQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO)ZQ`O,59oOOQS'#Cp'#CpO$vQdO'#CqO)cQvO'#CsO*pQtO,5:POOQO'#Cx'#CxO)UQWO'#CwO+UQWO'#CyOOQS'#Eg'#EgOOQO'#Dh'#DhO+ZQ[O'#DoO+iQWO'#EkO&TQ[O'#DmO+wQWO'#DpOOQO'#El'#ElO(hQWO,5:^O+|QpO,5:`OOQS'#Dx'#DxO,UQWO,5:bO,ZQ[O,5:bOOQO'#D{'#D{O,cQWO,5:eO,hQWO,5:kO,pQWO,5:mOOQS-E8R-E8RO$vQdO,59{O,xQ[O'#EYO-VQWO,5;UO-VQWO,5;UOOQP1G.l1G.lO-|QXO,5:rOOQO-E8U-E8UOOQS1G.g1G.gOOQP1G.n1G.nO)PQWO1G.nO)UQWO1G.nOOQP1G/V1G/VO.ZQ`O1G/ZO.tQXO1G/_O/[QXO1G/aO/rQXO1G/bO0YQWO,59zO0_Q[O'#DOO0fQdO'#CoOOQP1G/Z1G/ZO$vQdO1G/ZO0mQpO,59]OOQS,59_,59_O$vQdO,59aO0uQWO1G/kOOQS,59c,59cO0zQ!bO,59eO1SQWO'#DhO1_QWO,5:TO1dQWO,5:ZO&TQ[O,5:VO&TQ[O'#EZO1lQWO,5;VO1wQWO,5:XO'yQ[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O2YQWO1G/|O2_QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XO2mQtO1G/gOOQO,5:t,5:tO3TQ[O,5:tOOQO-E8W-E8WO3bQWO1G0pOOQP7+$Y7+$YOOQP7+$u7+$uO$vQdO7+$uOOQS1G/f1G/fO3mQXO'#EiO3tQWO,59jO3yQtO'#EUO4nQdO'#EfO4xQWO,59ZO4}QpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO5VQWO1G/PO$vQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO5[QWO,5:uOOQO-E8X-E8XO5jQXO1G/vOOQS7+%h7+%hO5qQYO'#CsO(hQWO'#E[O5yQdO,5:hOOQS,5:h,5:hO6XQtO'#EXO$vQdO'#EXO7VQdO7+%ROOQO7+%R7+%ROOQO1G0`1G0`O7jQpO<<HaO7rQWO,5;TOOQP1G/U1G/UOOQS-E8S-E8SO$vQdO'#EVO7zQWO,5;QOOQT1G.u1G.uOOQP<<Ha<<HaOOQS7+$k7+$kO8SQdO7+%ZOOQO7+%b7+%bOOQS,5:v,5:vOOQS-E8Y-E8YOOQS1G0S1G0SO8ZQtO,5:sOOQS-E8V-E8VOOQO<<Hm<<HmOOQPAN={AN={O9XQdO,5:qOOQO-E8T-E8TOOQO<<Hu<<Hu",
  stateData: "9i~O#UOSROS~OUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SQO#XSO~OQeOUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SdO#XSO~O#P#^P~P!ZO#SiO~O]nO^nOplOtoOxpO|qO!PsO#QrO#XkO~O!RtO~P#kO`zO#RwO#SvO~O#S{O~O#S}O~OQ!WOb!QOf!WOh!WOn!VO#R!TO#S!PO#[!RO~Ob!YO!b![O!e!]O#S!XO!R#_P~Oh!bOn!VO#S!aO~O#S!dO~Ob!YO!b![O!e!]O#S!XO~O!W#_P~P%bO]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#QWX#XWX~O]!iO~O!W!jO#P#^X!Q#^X~O#P#^X!Q#^X~P!ZOUXOXXO]UO^UOtVOxWO#SQO#XSO~OplO!RtO~O`!sO#RwO#SvO~O!Q#^P~P!ZOb!zO~Ob!{O~Ov!|Oz!}O~OP#PObgXjgX!WgX!bgX!egX#SgXagXQgXfgXhgXngXpgX!VgX#PgX#RgX#[gXvgX!QgX~Ob!YOj#QO!b![O!e!]O#S!XO!W#_P~Ob#TO~Ob!YO!b![O!e!]O#S#UO~Op#YO!`#XO!R#_X!W#_X~Ob#]O~Oj#QO!W#_O~O!W#`O~Oh#aOn!VO~O!R#bO~O!RtO!`#XO~O!RtO!W#eO~O!W!|X#P!|X!Q!|X~P!ZO!W!jO#P#^a!Q#^a~O]nO^nOtoOxpO|qO!PsO#QrO#XkO~Op!za!R!zaa!za~P-bOv#lOz#mO~O]nO^nOtoOxpO#XkO~Op{i|{i!P{i!R{i#Q{ia{i~P.cOp}i|}i!P}i!R}i#Q}ia}i~P.cOp!Oi|!Oi!P!Oi!R!Oi#Q!Oia!Oi~P.cO!Q#nO~Oa#]P~P'yOa#YP~P$vOa#uOj#QO~O!W#wO~Oh#xOo#xO~O]!^Xa![X!`![X~O]#yO~Oa#zO!`#XO~Op#YO!R#_a!W#_a~O!`#XOp!aa!R!aa!W!aaa!aa~O!W$PO~O!Q$TO!q$RO!r$RO#[$QO~Oj#QOp$VO!V$XO!W!Ti#P!Ti!Q!Ti~P$vO!W!|a#P!|a!Q!|a~P!ZO!W!jO#P#^i!Q#^i~Oa#]X~P#kOa$]O~Oj#QOQ!xXa!xXb!xXf!xXh!xXn!xXp!xX#R!xX#S!xX#[!xX~Op$_Oa#YX~P$vOa$aO~Oj#QOv$bO~Oa$cO~O!`#XOp!}a!R!}a!W!}a~Oa$eO~P-bOP#PO!RgX~O!Q$hO!q$RO!r$RO#[$QO~Oj#QOQ!{Xb!{Xf!{Xh!{Xn!{Xp!{X!V!{X!W!{X#P!{X#R!{X#S!{X#[!{X!Q!{X~Op$VO!V$kO!W!Tq#P!Tq!Q!Tq~P$vOj#QOv$lO~OplOa#]a~Op$_Oa#Ya~Oa$oO~P$vOj#QOQ!{ab!{af!{ah!{an!{ap!{a!V!{a!W!{a#P!{a#R!{a#S!{a#[!{a!Q!{a~Oa!yap!ya~P$vOo#[j!Pj~",
  goto: ",`#aPPPPP#bP#k#zP#k$Z#kPP$aPPP$g$p$pP%SP$pP$p%j%|PPP&f&l#kP&rP#kP&xP#kP#k#kPPP'O'b'oPP#bPP'v'v(Q'vP'vP'v'vP#bP#bP#bP(T#bP(W(ZPP#bP#bP(^(m({)R)])c)m)sPPPPPP)y*SP*o*rP+h+k+q+z_aOPcgt!j#hkXOPcglqrst!j!z#]#hkROPcglqrst!j!z#]#hQjSR!mkQxUR!qnQ!qzQ#S!UR#k!sq!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mT$R#b$Sq!UY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mQ!b]R#a!cQyUR!rnQ!qyR#k!rQ|VR!toQ!OWR!upQuTQ!pmQ#^!_Q#d!fQ#e!gR$f$RSfPtQ!lgQ#g!jR$Y#hZePgt!j#ha!^Z_`!S!Y![#X#YR#V!YR!c]R!e^R#c!eQcOSgPtU!hcg#hR#h!jQ#r!{U$^#r$d$mQ$d#yR$m$_Q$`#rR$n$`QmTS!om$[R$[#oQ$W#fR$j$WQ!kfS#i!k#jR#j!lQ#Z!ZR#}#ZQ$S#bR$g$S_bOPcgt!j#h^TOPcgt!j#hQ!nlQ!vqQ!wrQ!xsQ#o!zR$O#]R#s!{Q!SYQ!`[Q#O!QQ#f!i[#q!{#r#y$_$d$mQ#t!}Q#v#QS$U#f$WQ$Z#mR$i$VR#p!zQhPR!ytQ!_ZQ!g`R#R!SU!ZZ`!SQ!f_Q#W!YQ#[![Q#{#XR#|#Y",
  nodeNames: "⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule Styles",
  maxTerm: 108,
  nodeProps: [
    ["openedBy", 17, "(", 48, "{"],
    ["closedBy", 18, ")", 49, "}"]
  ],
  propSources: [pk],
  skippedNodes: [0, 3],
  repeatNodeCount: 8,
  tokenData: "Lq~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Cu![!]Dp!]!^El!^!_$}!_!`E}!`!aF`!a!b$}!b!cG[!c!}$}!}#OHt#O#P$}#P#QIV#Q#R6d#R#T$}#T#UIh#U#c$}#c#dJy#d#o$}#o#pK`#p#q6d#q#rKq#r#sLS#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`Lk<%lO$}W%QSOy%^z;'S%^;'S;=`%o<%lO%^W%cSoWOy%^z;'S%^;'S;=`%o<%lO%^W%rP;=`<%l%^~%zh#U~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#U~oWOX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^^)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^^)sUoWOy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^^*[UoWOy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^^*sUoWOy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^^+[UoWOy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^^+sUoWOy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^^,[UoWOy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^^,sUoWOy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^^-[UoWOy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^^-uS!VUoWOy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOh~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.R_/zYtPOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^^0oYoWOy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^^1dYoWOy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^^2ZYfUoWOy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^^3QYfUoWOy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^^3uYoWOy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^^4lYfUoWOy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^^5aYoWOy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^^6WSfUoWOy%^z;'S%^;'S;=`%o<%lO%^Y6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^Y7QSzQoWOy%^z;'S%^;'S;=`%o<%lO%^X7cSXPOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7o_9cSbVOy%^z;'S%^;'S;=`%o<%lO%^~9tOa~_9{UUPjSOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^_:fWjS!PPOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^^;TUoWOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^^;nYoW#[UOy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^^<cYoWOy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=WUoWOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=qUoW#[UOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^>[[oW#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^_?VSpVOy%^z;'S%^;'S;=`%o<%lO%^^?hWjSOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^_@VU#XPOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTjSOy%^z{@}{;'S%^;'S;=`%o<%lO%^~ASUoWOy@}yzAfz{Bm{;'S@};'S;=`Co<%lO@}~AiTOzAfz{Ax{;'SAf;'S;=`Bg<%lOAf~A{VOzAfz{Ax{!PAf!P!QBb!Q;'SAf;'S;=`Bg<%lOAf~BgOR~~BjP;=`<%lAf~BrWoWOy@}yzAfz{Bm{!P@}!P!QC[!Q;'S@};'S;=`Co<%lO@}~CcSoWR~Oy%^z;'S%^;'S;=`%o<%lO%^~CrP;=`<%l@}^Cz[#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^XDuU]POy%^z![%^![!]EX!];'S%^;'S;=`%o<%lO%^XE`S^PoWOy%^z;'S%^;'S;=`%o<%lO%^_EqS!WVOy%^z;'S%^;'S;=`%o<%lO%^YFSSzQOy%^z;'S%^;'S;=`%o<%lO%^XFeU|POy%^z!`%^!`!aFw!a;'S%^;'S;=`%o<%lO%^XGOS|PoWOy%^z;'S%^;'S;=`%o<%lO%^XG_WOy%^z!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHO[!YPoWOy%^z}%^}!OGw!O!Q%^!Q![Gw![!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHySxPOy%^z;'S%^;'S;=`%o<%lO%^^I[SvUOy%^z;'S%^;'S;=`%o<%lO%^XIkUOy%^z#b%^#b#cI}#c;'S%^;'S;=`%o<%lO%^XJSUoWOy%^z#W%^#W#XJf#X;'S%^;'S;=`%o<%lO%^XJmS!`PoWOy%^z;'S%^;'S;=`%o<%lO%^XJ|UOy%^z#f%^#f#gJf#g;'S%^;'S;=`%o<%lO%^XKeS!RPOy%^z;'S%^;'S;=`%o<%lO%^_KvS!QVOy%^z;'S%^;'S;=`%o<%lO%^ZLXU!PPOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^WLnP;=`<%l$}",
  tokenizers: [dk, Ok, uk, 0, 1, 2, 3],
  topRules: { StyleSheet: [0, 4], Styles: [1, 84] },
  specialized: [{ term: 95, get: (i) => mk[i] || -1 }, { term: 56, get: (i) => gk[i] || -1 }, { term: 96, get: (i) => bk[i] || -1 }],
  tokenPrec: 1123
});
let ya = null;
function Qa() {
  if (!ya && typeof document == "object" && document.body) {
    let i = [];
    for (let e in document.body.style)
      /[A-Z]|^-|^(item|length)$/.test(e) || i.push(e);
    ya = i.sort().map((e) => ({ type: "property", label: e }));
  }
  return ya || [];
}
const Vd = /* @__PURE__ */ [
  "active",
  "after",
  "any-link",
  "autofill",
  "backdrop",
  "before",
  "checked",
  "cue",
  "default",
  "defined",
  "disabled",
  "empty",
  "enabled",
  "file-selector-button",
  "first",
  "first-child",
  "first-letter",
  "first-line",
  "first-of-type",
  "focus",
  "focus-visible",
  "focus-within",
  "fullscreen",
  "has",
  "host",
  "host-context",
  "hover",
  "in-range",
  "indeterminate",
  "invalid",
  "is",
  "lang",
  "last-child",
  "last-of-type",
  "left",
  "link",
  "marker",
  "modal",
  "not",
  "nth-child",
  "nth-last-child",
  "nth-last-of-type",
  "nth-of-type",
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "part",
  "placeholder",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "selection",
  "slotted",
  "target",
  "target-text",
  "valid",
  "visited",
  "where"
].map((i) => ({ type: "class", label: i })), Ed = /* @__PURE__ */ [
  "above",
  "absolute",
  "activeborder",
  "additive",
  "activecaption",
  "after-white-space",
  "ahead",
  "alias",
  "all",
  "all-scroll",
  "alphabetic",
  "alternate",
  "always",
  "antialiased",
  "appworkspace",
  "asterisks",
  "attr",
  "auto",
  "auto-flow",
  "avoid",
  "avoid-column",
  "avoid-page",
  "avoid-region",
  "axis-pan",
  "background",
  "backwards",
  "baseline",
  "below",
  "bidi-override",
  "blink",
  "block",
  "block-axis",
  "bold",
  "bolder",
  "border",
  "border-box",
  "both",
  "bottom",
  "break",
  "break-all",
  "break-word",
  "bullets",
  "button",
  "button-bevel",
  "buttonface",
  "buttonhighlight",
  "buttonshadow",
  "buttontext",
  "calc",
  "capitalize",
  "caps-lock-indicator",
  "caption",
  "captiontext",
  "caret",
  "cell",
  "center",
  "checkbox",
  "circle",
  "cjk-decimal",
  "clear",
  "clip",
  "close-quote",
  "col-resize",
  "collapse",
  "color",
  "color-burn",
  "color-dodge",
  "column",
  "column-reverse",
  "compact",
  "condensed",
  "contain",
  "content",
  "contents",
  "content-box",
  "context-menu",
  "continuous",
  "copy",
  "counter",
  "counters",
  "cover",
  "crop",
  "cross",
  "crosshair",
  "currentcolor",
  "cursive",
  "cyclic",
  "darken",
  "dashed",
  "decimal",
  "decimal-leading-zero",
  "default",
  "default-button",
  "dense",
  "destination-atop",
  "destination-in",
  "destination-out",
  "destination-over",
  "difference",
  "disc",
  "discard",
  "disclosure-closed",
  "disclosure-open",
  "document",
  "dot-dash",
  "dot-dot-dash",
  "dotted",
  "double",
  "down",
  "e-resize",
  "ease",
  "ease-in",
  "ease-in-out",
  "ease-out",
  "element",
  "ellipse",
  "ellipsis",
  "embed",
  "end",
  "ethiopic-abegede-gez",
  "ethiopic-halehame-aa-er",
  "ethiopic-halehame-gez",
  "ew-resize",
  "exclusion",
  "expanded",
  "extends",
  "extra-condensed",
  "extra-expanded",
  "fantasy",
  "fast",
  "fill",
  "fill-box",
  "fixed",
  "flat",
  "flex",
  "flex-end",
  "flex-start",
  "footnotes",
  "forwards",
  "from",
  "geometricPrecision",
  "graytext",
  "grid",
  "groove",
  "hand",
  "hard-light",
  "help",
  "hidden",
  "hide",
  "higher",
  "highlight",
  "highlighttext",
  "horizontal",
  "hsl",
  "hsla",
  "hue",
  "icon",
  "ignore",
  "inactiveborder",
  "inactivecaption",
  "inactivecaptiontext",
  "infinite",
  "infobackground",
  "infotext",
  "inherit",
  "initial",
  "inline",
  "inline-axis",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "inset",
  "inside",
  "intrinsic",
  "invert",
  "italic",
  "justify",
  "keep-all",
  "landscape",
  "large",
  "larger",
  "left",
  "level",
  "lighter",
  "lighten",
  "line-through",
  "linear",
  "linear-gradient",
  "lines",
  "list-item",
  "listbox",
  "listitem",
  "local",
  "logical",
  "loud",
  "lower",
  "lower-hexadecimal",
  "lower-latin",
  "lower-norwegian",
  "lowercase",
  "ltr",
  "luminosity",
  "manipulation",
  "match",
  "matrix",
  "matrix3d",
  "medium",
  "menu",
  "menutext",
  "message-box",
  "middle",
  "min-intrinsic",
  "mix",
  "monospace",
  "move",
  "multiple",
  "multiple_mask_images",
  "multiply",
  "n-resize",
  "narrower",
  "ne-resize",
  "nesw-resize",
  "no-close-quote",
  "no-drop",
  "no-open-quote",
  "no-repeat",
  "none",
  "normal",
  "not-allowed",
  "nowrap",
  "ns-resize",
  "numbers",
  "numeric",
  "nw-resize",
  "nwse-resize",
  "oblique",
  "opacity",
  "open-quote",
  "optimizeLegibility",
  "optimizeSpeed",
  "outset",
  "outside",
  "outside-shape",
  "overlay",
  "overline",
  "padding",
  "padding-box",
  "painted",
  "page",
  "paused",
  "perspective",
  "pinch-zoom",
  "plus-darker",
  "plus-lighter",
  "pointer",
  "polygon",
  "portrait",
  "pre",
  "pre-line",
  "pre-wrap",
  "preserve-3d",
  "progress",
  "push-button",
  "radial-gradient",
  "radio",
  "read-only",
  "read-write",
  "read-write-plaintext-only",
  "rectangle",
  "region",
  "relative",
  "repeat",
  "repeating-linear-gradient",
  "repeating-radial-gradient",
  "repeat-x",
  "repeat-y",
  "reset",
  "reverse",
  "rgb",
  "rgba",
  "ridge",
  "right",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "round",
  "row",
  "row-resize",
  "row-reverse",
  "rtl",
  "run-in",
  "running",
  "s-resize",
  "sans-serif",
  "saturation",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "screen",
  "scroll",
  "scrollbar",
  "scroll-position",
  "se-resize",
  "self-start",
  "self-end",
  "semi-condensed",
  "semi-expanded",
  "separate",
  "serif",
  "show",
  "single",
  "skew",
  "skewX",
  "skewY",
  "skip-white-space",
  "slide",
  "slider-horizontal",
  "slider-vertical",
  "sliderthumb-horizontal",
  "sliderthumb-vertical",
  "slow",
  "small",
  "small-caps",
  "small-caption",
  "smaller",
  "soft-light",
  "solid",
  "source-atop",
  "source-in",
  "source-out",
  "source-over",
  "space",
  "space-around",
  "space-between",
  "space-evenly",
  "spell-out",
  "square",
  "start",
  "static",
  "status-bar",
  "stretch",
  "stroke",
  "stroke-box",
  "sub",
  "subpixel-antialiased",
  "svg_masks",
  "super",
  "sw-resize",
  "symbolic",
  "symbols",
  "system-ui",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row",
  "table-row-group",
  "text",
  "text-bottom",
  "text-top",
  "textarea",
  "textfield",
  "thick",
  "thin",
  "threeddarkshadow",
  "threedface",
  "threedhighlight",
  "threedlightshadow",
  "threedshadow",
  "to",
  "top",
  "transform",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ",
  "transparent",
  "ultra-condensed",
  "ultra-expanded",
  "underline",
  "unidirectional-pan",
  "unset",
  "up",
  "upper-latin",
  "uppercase",
  "url",
  "var",
  "vertical",
  "vertical-text",
  "view-box",
  "visible",
  "visibleFill",
  "visiblePainted",
  "visibleStroke",
  "visual",
  "w-resize",
  "wait",
  "wave",
  "wider",
  "window",
  "windowframe",
  "windowtext",
  "words",
  "wrap",
  "wrap-reverse",
  "x-large",
  "x-small",
  "xor",
  "xx-large",
  "xx-small"
].map((i) => ({ type: "keyword", label: i })).concat(/* @__PURE__ */ [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen"
].map((i) => ({ type: "constant", label: i }))), yk = /* @__PURE__ */ [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "figcaption",
  "figure",
  "footer",
  "form",
  "header",
  "hgroup",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "meter",
  "nav",
  "ol",
  "output",
  "p",
  "pre",
  "ruby",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "u",
  "ul"
].map((i) => ({ type: "type", label: i })), yi = /^[\w-]*/, Qk = (i) => {
  let { state: e, pos: t } = i, n = Xe(e).resolveInner(t, -1);
  if (n.name == "PropertyName")
    return { from: n.from, options: Qa(), validFor: yi };
  if (n.name == "ValueName")
    return { from: n.from, options: Ed, validFor: yi };
  if (n.name == "PseudoClassName")
    return { from: n.from, options: Vd, validFor: yi };
  if (n.name == "TagName") {
    for (let { parent: o } = n; o; o = o.parent)
      if (o.name == "Block")
        return { from: n.from, options: Qa(), validFor: yi };
    return { from: n.from, options: yk, validFor: yi };
  }
  if (!i.explicit)
    return null;
  let r = n.resolve(t), s = r.childBefore(t);
  return s && s.name == ":" && r.name == "PseudoClassSelector" ? { from: t, options: Vd, validFor: yi } : s && s.name == ":" && r.name == "Declaration" || r.name == "ArgList" ? { from: t, options: Ed, validFor: yi } : r.name == "Block" ? { from: t, options: Qa(), validFor: yi } : null;
}, Ho = /* @__PURE__ */ tr.define({
  name: "css",
  parser: /* @__PURE__ */ Sk.configure({
    props: [
      /* @__PURE__ */ Al.add({
        Declaration: /* @__PURE__ */ mo()
      }),
      /* @__PURE__ */ Vl.add({
        Block: ug
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*\}$/,
    wordChars: "-"
  }
});
function o0() {
  return new Mh(Ho, Ho.data.of({ autocomplete: Qk }));
}
const vk = 54, xk = 1, wk = 55, $k = 2, Pk = 56, kk = 3, Ko = 4, l0 = 5, a0 = 6, c0 = 7, h0 = 8, Ck = 9, Tk = 10, _k = 11, va = 57, Xk = 12, Zd = 58, Ak = 18, Vk = 20, f0 = 21, Ek = 22, jc = 24, u0 = 25, Zk = 27, Rk = 30, Dk = 33, d0 = 35, Wk = 36, Nk = 0, Mk = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  frame: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
  menuitem: !0
}, Yk = {
  dd: !0,
  li: !0,
  optgroup: !0,
  option: !0,
  p: !0,
  rp: !0,
  rt: !0,
  tbody: !0,
  td: !0,
  tfoot: !0,
  th: !0,
  tr: !0
}, Rd = {
  dd: { dd: !0, dt: !0 },
  dt: { dd: !0, dt: !0 },
  li: { li: !0 },
  option: { option: !0, optgroup: !0 },
  optgroup: { optgroup: !0 },
  p: {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    dir: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    menu: !0,
    nav: !0,
    ol: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    ul: !0
  },
  rp: { rp: !0, rt: !0 },
  rt: { rp: !0, rt: !0 },
  tbody: { tbody: !0, tfoot: !0 },
  td: { td: !0, th: !0 },
  tfoot: { tbody: !0 },
  th: { td: !0, th: !0 },
  thead: { tbody: !0, tfoot: !0 },
  tr: { tr: !0 }
};
function jk(i) {
  return i == 45 || i == 46 || i == 58 || i >= 65 && i <= 90 || i == 95 || i >= 97 && i <= 122 || i >= 161;
}
function O0(i) {
  return i == 9 || i == 10 || i == 13 || i == 32;
}
let Dd = null, Wd = null, Nd = 0;
function Uc(i, e) {
  let t = i.pos + e;
  if (Nd == t && Wd == i)
    return Dd;
  let n = i.peek(e);
  for (; O0(n); )
    n = i.peek(++e);
  let r = "";
  for (; jk(n); )
    r += String.fromCharCode(n), n = i.peek(++e);
  return Wd = i, Nd = t, Dd = r ? r.toLowerCase() : n == Uk || n == Ik ? void 0 : null;
}
const p0 = 60, m0 = 62, g0 = 47, Uk = 63, Ik = 33, qk = 45;
function Md(i, e) {
  this.name = i, this.parent = e, this.hash = e ? e.hash : 0;
  for (let t = 0; t < i.length; t++)
    this.hash += (this.hash << 4) + i.charCodeAt(t) + (i.charCodeAt(t) << 8);
}
const Bk = [Ko, h0, l0, a0, c0], Lk = new n0({
  start: null,
  shift(i, e, t, n) {
    return Bk.indexOf(e) > -1 ? new Md(Uc(n, 1) || "", i) : i;
  },
  reduce(i, e) {
    return e == Ak && i ? i.parent : i;
  },
  reuse(i, e, t, n) {
    let r = e.type.id;
    return r == Ko || r == d0 ? new Md(Uc(n, 1) || "", i) : i;
  },
  hash(i) {
    return i ? i.hash : 0;
  },
  strict: !1
}), zk = new bi((i, e) => {
  if (i.next != p0) {
    i.next < 0 && e.context && i.acceptToken(va);
    return;
  }
  i.advance();
  let t = i.next == g0;
  t && i.advance();
  let n = Uc(i, 0);
  if (n === void 0)
    return;
  if (!n)
    return i.acceptToken(t ? Xk : Ko);
  let r = e.context ? e.context.name : null;
  if (t) {
    if (n == r)
      return i.acceptToken(Ck);
    if (r && Yk[r])
      return i.acceptToken(va, -2);
    if (e.dialectEnabled(Nk))
      return i.acceptToken(Tk);
    for (let s = e.context; s; s = s.parent)
      if (s.name == n)
        return;
    i.acceptToken(_k);
  } else {
    if (n == "script")
      return i.acceptToken(l0);
    if (n == "style")
      return i.acceptToken(a0);
    if (n == "textarea")
      return i.acceptToken(c0);
    if (Mk.hasOwnProperty(n))
      return i.acceptToken(h0);
    r && Rd[r] && Rd[r][n] ? i.acceptToken(va, -1) : i.acceptToken(Ko);
  }
}, { contextual: !0 }), Gk = new bi((i) => {
  for (let e = 0, t = 0; ; t++) {
    if (i.next < 0) {
      t && i.acceptToken(Zd);
      break;
    }
    if (i.next == qk)
      e++;
    else if (i.next == m0 && e >= 2) {
      t > 3 && i.acceptToken(Zd, -2);
      break;
    } else
      e = 0;
    i.advance();
  }
});
function Bh(i, e, t) {
  let n = 2 + i.length;
  return new bi((r) => {
    for (let s = 0, o = 0, l = 0; ; l++) {
      if (r.next < 0) {
        l && r.acceptToken(e);
        break;
      }
      if (s == 0 && r.next == p0 || s == 1 && r.next == g0 || s >= 2 && s < n && r.next == i.charCodeAt(s - 2))
        s++, o++;
      else if ((s == 2 || s == n) && O0(r.next))
        o++;
      else if (s == n && r.next == m0) {
        l > o ? r.acceptToken(e, -o) : r.acceptToken(t, -(o - 2));
        break;
      } else if ((r.next == 10 || r.next == 13) && l) {
        r.acceptToken(e, 1);
        break;
      } else
        s = o = 0;
      r.advance();
    }
  });
}
const Fk = Bh("script", vk, xk), Hk = Bh("style", wk, $k), Kk = Bh("textarea", Pk, kk), Jk = Tl({
  "Text RawText": S.content,
  "StartTag StartCloseTag SelfClosingEndTag EndTag": S.angleBracket,
  TagName: S.tagName,
  "MismatchedCloseTag/TagName": [S.tagName, S.invalid],
  AttributeName: S.attributeName,
  "AttributeValue UnquotedAttributeValue": S.attributeValue,
  Is: S.definitionOperator,
  "EntityReference CharacterReference": S.character,
  Comment: S.blockComment,
  ProcessingInst: S.processingInstruction,
  DoctypeDecl: S.documentMeta
}), eC = nr.deserialize({
  version: 14,
  states: ",xOVOxOOO!WQ!bO'#CoO!]Q!bO'#CyO!bQ!bO'#C|O!gQ!bO'#DPO!lQ!bO'#DRO!qOXO'#CnO!|OYO'#CnO#XO[O'#CnO$eOxO'#CnOOOW'#Cn'#CnO$lO!rO'#DTO$tQ!bO'#DVO$yQ!bO'#DWOOOW'#Dk'#DkOOOW'#DY'#DYQVOxOOO%OQ#tO,59ZO%WQ#tO,59eO%`Q#tO,59hO%hQ#tO,59kO%sQ#tO,59mOOOX'#D^'#D^O%{OXO'#CwO&WOXO,59YOOOY'#D_'#D_O&`OYO'#CzO&kOYO,59YOOO['#D`'#D`O&sO[O'#C}O'OO[O,59YOOOW'#Da'#DaO'WOxO,59YO'_Q!bO'#DQOOOW,59Y,59YOOO`'#Db'#DbO'dO!rO,59oOOOW,59o,59oO'lQ!bO,59qO'qQ!bO,59rOOOW-E7W-E7WO'vQ#tO'#CqOOQO'#DZ'#DZO(UQ#tO1G.uOOOX1G.u1G.uO(^Q#tO1G/POOOY1G/P1G/PO(fQ#tO1G/SOOO[1G/S1G/SO(nQ#tO1G/VOOOW1G/V1G/VOOOW1G/X1G/XO(yQ#tO1G/XOOOX-E7[-E7[O)RQ!bO'#CxOOOW1G.t1G.tOOOY-E7]-E7]O)WQ!bO'#C{OOO[-E7^-E7^O)]Q!bO'#DOOOOW-E7_-E7_O)bQ!bO,59lOOO`-E7`-E7`OOOW1G/Z1G/ZOOOW1G/]1G/]OOOW1G/^1G/^O)gQ&jO,59]OOQO-E7X-E7XOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)rQ!bO,59dO)wQ!bO,59gO)|Q!bO,59jOOOW1G/W1G/WO*RO,UO'#CtO*dO7[O'#CtOOQO1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#D['#D[O*uO,UO,59`OOQO,59`,59`OOOO'#D]'#D]O+WO7[O,59`OOOO-E7Y-E7YOOQO1G.z1G.zOOOO-E7Z-E7Z",
  stateData: "+u~O!^OS~OSSOTPOUQOVROWTOY]OZ[O[^O^^O_^O`^Oa^Ox^O{_O!dZO~OdaO~OdbO~OdcO~OddO~OdeO~O!WfOPkP!ZkP~O!XiOQnP!ZnP~O!YlORqP!ZqP~OSSOTPOUQOVROWTOXqOY]OZ[O[^O^^O_^O`^Oa^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OdvO~OdwO~OfyOj|O~OfyOj!OO~OfyOj!QO~OfyOj!SOv!TO~OfyOj!TO~O!WfOPkX!ZkX~OP!WO!Z!XO~O!XiOQnX!ZnX~OQ!ZO!Z!XO~O!YlORqX!ZqX~OR!]O!Z!XO~O!Z!XO~P#dOd!_O~O![sO!e!aO~Oj!bO~Oj!cO~Og!dOfeXjeXveX~OfyOj!fO~OfyOj!gO~OfyOj!hO~OfyOj!iOv!jO~OfyOj!jO~Od!kO~Od!lO~Od!mO~Oj!nO~Oi!qO!`!oO!b!pO~Oj!rO~Oj!sO~Oj!tO~O_!uO`!uOa!uO!`!wO!a!uO~O_!xO`!xOa!xO!b!wO!c!xO~O_!uO`!uOa!uO!`!{O!a!uO~O_!xO`!xOa!xO!b!{O!c!xO~Ov~vj`!dx{_a_~",
  goto: "%p!`PPPPPPPPPPPPPPPPPP!a!gP!mPP!yPP!|#P#S#Y#]#`#f#i#l#r#xP!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
  nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag SelfClosingEndTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
  maxTerm: 67,
  context: Lk,
  nodeProps: [
    ["closedBy", -10, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, "EndTag", 4, "EndTag SelfClosingEndTag", -4, 19, 29, 32, 35, "CloseTag"],
    ["group", -9, 12, 15, 16, 17, 18, 39, 40, 41, 42, "Entity", 14, "Entity TextContent", -3, 27, 30, 33, "TextContent Entity"],
    ["openedBy", 26, "StartTag StartCloseTag", -4, 28, 31, 34, 36, "OpenTag", 38, "StartTag"]
  ],
  propSources: [Jk],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "#(r!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs4ysv-_vw5iwxJ^x}-_}!OKP!O!P-_!P!Q!!O!Q![-_![!]!$c!]!^-_!^!_!(k!_!`#'S!`!a#'z!a!c-_!c!}!$c!}#R-_#R#S!$c#S#T3V#T#o!$c#o#s-_#s$f$q$f%W-_%W%o!$c%o%p-_%p&a!$c&a&b-_&b1p!$c1p4U-_4U4d!$c4d4e-_4e$IS!$c$IS$I`-_$I`$Ib!$c$Ib$Kh-_$Kh%#t!$c%#t&/x-_&/x&Et!$c&Et&FV-_&FV;'S!$c;'S;:j!(e;:j;=`4s<%l?&r-_?&r?Ah!$c?Ah?BY$q?BY?Mn!$c?MnO$q!Z$|c^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX^P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV^P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT^POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W^P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYiWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`^P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljfS^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ecfSiWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0uXfSqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0pS1eP;=`<%l0p[1kP;=`<%l/^!U1wbfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!U3SP;=`<%l1n!V3bcfS^P!a`!cpOq&Xqr3Vrs&}sv3Vvw0pwx(tx!P3V!P!Q&X!Q!^3V!^!_1n!_!a&X!a#s3V#s$f&X$f;'S3V;'S;=`4m<%l?Ah3V?Ah?BY&X?BY?Mn3V?MnO&X!V4pP;=`<%l3V!_4vP;=`<%l-_!Z5SV!`h^P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_5rjfSiWa!ROX7dXZ8qZ[7d[^8q^p7dqr:crs8qst@Ttw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^/^!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!Z7ibiWOX7dXZ8qZ[7d[^8q^p7dqr7drs8qst+Ptw7dwx8qx!]7d!]!^9f!^!a8q!a#S7d#S#T8q#T;'S7d;'S;=`:]<%lO7d!R8tVOp8qqs8qt!]8q!]!^9Z!^;'S8q;'S;=`9`<%lO8q!R9`O_!R!R9cP;=`<%l8q!Z9mYiW_!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z:`P;=`<%l7d!_:jjfSiWOX7dXZ8qZ[7d[^8q^p7dqr:crs8qst/^tw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^<[!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!_<ecfSiW_!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V=udfSOp8qqr=prs8qst0ptw=pwx8qx!P=p!P!Q8q!Q!]=p!]!^?T!^!_=p!_!a8q!a#s=p#s$f8q$f;'S=p;'S;=`?w<%l?Ah=p?Ah?BY8q?BY?Mn=p?MnO8q!V?[XfS_!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!V?zP;=`<%l=p!_@QP;=`<%l:c!_@[ifSiWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^/^!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!ZBOaiWOXAyXZCTZ[Ay[^CT^pAyqrAyrsCTswAywxCTx!]Ay!]!^Cu!^!aCT!a#SAy#S#TCT#T;'SAy;'S;=`Dl<%lOAy!RCWUOpCTq!]CT!]!^Cj!^;'SCT;'S;=`Co<%lOCT!RCoO`!R!RCrP;=`<%lCT!ZC|YiW`!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZDoP;=`<%lAy!_DyifSiWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^Fh!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!_FqcfSiW`!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VHRcfSOpCTqrG|rsCTswG|wxCTx!PG|!P!QCT!Q!]G|!]!^I^!^!_G|!_!aCT!a#sG|#s$fCT$f;'SG|;'S;=`JQ<%l?AhG|?Ah?BYCT?BY?MnG|?MnOCT!VIeXfS`!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!VJTP;=`<%lG|!_JZP;=`<%lDr!ZJgW!bx^P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aK^lfS^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMU!O!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aMckfS^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!`&X!`!a! W!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!T! cX^P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!a!!Zd^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!`&X!`!a!#i!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!X!#vX^P!a`!cpvSjUOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!a!$r!ZfSdQ^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!O!$c!O!P!$c!P!Q$q!Q![!$c![!]!$c!]!^-_!^!_1n!_!a&X!a!c-_!c!}!$c!}#R-_#R#S!$c#S#T3V#T#o!$c#o#s-_#s$f$q$f$}-_$}%O!$c%O%W-_%W%o!$c%o%p-_%p&a!$c&a&b-_&b1p!$c1p4U!$c4U4d!$c4d4e-_4e$IS!$c$IS$I`-_$I`$Ib!$c$Ib$Je-_$Je$Jg!$c$Jg$Kh-_$Kh%#t!$c%#t&/x-_&/x&Et!$c&Et&FV-_&FV;'S!$c;'S;:j!(e;:j;=`4s<%l?&r-_?&r?Ah!$c?Ah?BY$q?BY?Mn!$c?MnO$q!a!(hP;=`<%l!$c!V!(tcfS!a`!cpOq*Vqr!*Prs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!b!H^!b#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!*YhfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!+t!O!P1n!P!Q*V!Q!_1n!_!a*V!a!f1n!f!g!.p!g#W1n#W#X!?^#X#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!+}dfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!-]!O!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!-hbfS!a`!cp!dPOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!.ydfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!q1n!q!r!0X!r#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!0bdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!e1n!e!f!1p!f#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!1ydfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!v1n!v!w!3X!w#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!3bdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!{1n!{!|!4p!|#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!4ydfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!r1n!r!s!6X!s#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!6bdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!g1n!g!h!7p!h#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!7ycfS!a`!cpOq!9Uqr!7prs!9{sv!7pvw!=swx!;ox!P!7p!P!Q!9U!Q!_!7p!_!`!9U!`!a!<}!a#s!7p#s$f!9U$f;'S!7p;'S;=`!?W<%l?Ah!7p?Ah?BY!9U?BY?Mn!7p?MnO!9U!R!9]Y!a`!cpOr!9Urs!9{sv!9Uvw!:gwx!;ox!`!9U!`!a!<}!a;'S!9U;'S;=`!=m<%lO!9Uq!:QV!cpOv!9{vx!:gx!`!9{!`!a!;U!a;'S!9{;'S;=`!;i<%lO!9{P!:jTO!`!:g!`!a!:y!a;'S!:g;'S;=`!;O<%lO!:gP!;OO{PP!;RP;=`<%l!:gq!;]S!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!;lP;=`<%l!9{a!;tX!a`Or!;ors!:gsv!;ovw!:gw!`!;o!`!a!<a!a;'S!;o;'S;=`!<w<%lO!;oa!<hT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!<zP;=`<%l!;o!R!=WV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!=pP;=`<%l!9UT!=xbfSOq!:gqr!=srs!:gsw!=swx!:gx!P!=s!P!Q!:g!Q!_!=s!_!`!:g!`!a!:y!a#s!=s#s$f!:g$f;'S!=s;'S;=`!?Q<%l?Ah!=s?Ah?BY!:g?BY?Mn!=s?MnO!:gT!?TP;=`<%l!=s!V!?ZP;=`<%l!7p!V!?gdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#c1n#c#d!@u#d#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!AOdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#V1n#V#W!B^#W#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!BgdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#h1n#h#i!Cu#i#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!DOdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#m1n#m#n!E^#n#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!EgdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#d1n#d#e!Fu#e#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!GOdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#X1n#X#Y!7p#Y#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!HgcfS!a`!cpOq!Irqr!H^rs!Jisv!H^vw#!vwx!MZx!P!H^!P!Q!Ir!Q!_!H^!_!a!Ir!a!b#%h!b#s!H^#s$f!Ir$f;'S!H^;'S;=`#&|<%l?Ah!H^?Ah?BY!Ir?BY?Mn!H^?MnO!Ir!R!IyY!a`!cpOr!Irrs!Jisv!Irvw!KTwx!MZx!a!Ir!a!b# Z!b;'S!Ir;'S;=`#!p<%lO!Irq!JnV!cpOv!Jivx!KTx!a!Ji!a!b!LU!b;'S!Ji;'S;=`!MT<%lO!JiP!KWTO!a!KT!a!b!Kg!b;'S!KT;'S;=`!LO<%lO!KTP!KjTO!`!KT!`!a!Ky!a;'S!KT;'S;=`!LO<%lO!KTP!LOOxPP!LRP;=`<%l!KTq!LZV!cpOv!Jivx!KTx!`!Ji!`!a!Lp!a;'S!Ji;'S;=`!MT<%lO!Jiq!LwS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!MWP;=`<%l!Jia!M`X!a`Or!MZrs!KTsv!MZvw!KTw!a!MZ!a!b!M{!b;'S!MZ;'S;=`# T<%lO!MZa!NQX!a`Or!MZrs!KTsv!MZvw!KTw!`!MZ!`!a!Nm!a;'S!MZ;'S;=`# T<%lO!MZa!NtT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea# WP;=`<%l!MZ!R# bY!a`!cpOr!Irrs!Jisv!Irvw!KTwx!MZx!`!Ir!`!a#!Q!a;'S!Ir;'S;=`#!p<%lO!Ir!R#!ZV!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R#!sP;=`<%l!IrT#!{bfSOq!KTqr#!vrs!KTsw#!vwx!KTx!P#!v!P!Q!KT!Q!_#!v!_!a!KT!a!b#$T!b#s#!v#s$f!KT$f;'S#!v;'S;=`#%b<%l?Ah#!v?Ah?BY!KT?BY?Mn#!v?MnO!KTT#$YbfSOq!KTqr#!vrs!KTsw#!vwx!KTx!P#!v!P!Q!KT!Q!_#!v!_!`!KT!`!a!Ky!a#s#!v#s$f!KT$f;'S#!v;'S;=`#%b<%l?Ah#!v?Ah?BY!KT?BY?Mn#!v?MnO!KTT#%eP;=`<%l#!v!V#%qcfS!a`!cpOq!Irqr!H^rs!Jisv!H^vw#!vwx!MZx!P!H^!P!Q!Ir!Q!_!H^!_!`!Ir!`!a#!Q!a#s!H^#s$f!Ir$f;'S!H^;'S;=`#&|<%l?Ah!H^?Ah?BY!Ir?BY?Mn!H^?MnO!Ir!V#'PP;=`<%l!H^!V#'_XgS^P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!X#(VX^P!a`!cpjUOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
  tokenizers: [Fk, Hk, Kk, zk, Gk, 0, 1, 2, 3, 4, 5],
  topRules: { Document: [0, 13] },
  dialects: { noMatch: 0, selfClosing: 485 },
  tokenPrec: 487
});
function b0(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n of i.getChildren(f0)) {
    let r = n.getChild(Ek), s = n.getChild(jc) || n.getChild(u0);
    r && (t[e.read(r.from, r.to)] = s ? s.type.id == jc ? e.read(s.from + 1, s.to - 1) : e.read(s.from, s.to) : "");
  }
  return t;
}
function Yd(i, e) {
  let t = i.getChild(Vk);
  return t ? e.read(t.from, t.to) : " ";
}
function xa(i, e, t) {
  let n;
  for (let r of t)
    if (!r.attrs || r.attrs(n || (n = b0(i.node.parent.firstChild, e))))
      return { parser: r.parser };
  return null;
}
function S0(i = [], e = []) {
  let t = [], n = [], r = [], s = [];
  for (let l of i)
    (l.tag == "script" ? t : l.tag == "style" ? n : l.tag == "textarea" ? r : s).push(l);
  let o = e.length ? /* @__PURE__ */ Object.create(null) : null;
  for (let l of e)
    (o[l.name] || (o[l.name] = [])).push(l);
  return Ew((l, a) => {
    let c = l.type.id;
    if (c == Zk)
      return xa(l, a, t);
    if (c == Rk)
      return xa(l, a, n);
    if (c == Dk)
      return xa(l, a, r);
    if (c == d0 && s.length) {
      let h = l.node, f = Yd(h, a), u;
      for (let d of s)
        if (d.tag == f && (!d.attrs || d.attrs(u || (u = b0(h, a))))) {
          let O = h.parent.lastChild;
          return { parser: d.parser, overlay: [{ from: l.to, to: O.type.id == Wk ? O.from : h.parent.to }] };
        }
    }
    if (o && c == f0) {
      let h = l.node, f;
      if (f = h.firstChild) {
        let u = o[a.read(f.from, f.to)];
        if (u)
          for (let d of u) {
            if (d.tagName && d.tagName != Yd(h.parent, a))
              continue;
            let O = h.lastChild;
            if (O.type.id == jc)
              return { parser: d.parser, overlay: [{ from: O.from + 1, to: O.to - 1 }] };
            if (O.type.id == u0)
              return { parser: d.parser, overlay: [{ from: O.from, to: O.to }] };
          }
      }
    }
    return null;
  });
}
const jd = 301, Ud = 1, tC = 2, Id = 302, iC = 304, nC = 305, rC = 3, sC = 4, oC = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], y0 = 125, lC = 59, qd = 47, aC = 42, cC = 43, hC = 45, fC = new n0({
  start: !1,
  shift(i, e) {
    return e == rC || e == sC || e == iC ? i : e == nC;
  },
  strict: !1
}), uC = new bi((i, e) => {
  let { next: t } = i;
  (t == y0 || t == -1 || e.context) && e.canShift(Id) && i.acceptToken(Id);
}, { contextual: !0, fallback: !0 }), dC = new bi((i, e) => {
  let { next: t } = i, n;
  oC.indexOf(t) > -1 || t == qd && ((n = i.peek(1)) == qd || n == aC) || t != y0 && t != lC && t != -1 && !e.context && e.canShift(jd) && i.acceptToken(jd);
}, { contextual: !0 }), OC = new bi((i, e) => {
  let { next: t } = i;
  if ((t == cC || t == hC) && (i.advance(), t == i.next)) {
    i.advance();
    let n = !e.context && e.canShift(Ud);
    i.acceptToken(n ? Ud : tC);
  }
}, { contextual: !0 }), pC = Tl({
  "get set async static": S.modifier,
  "for while do if else switch try catch finally return throw break continue default case": S.controlKeyword,
  "in of await yield void typeof delete instanceof": S.operatorKeyword,
  "let var const function class extends": S.definitionKeyword,
  "import export from": S.moduleKeyword,
  "with debugger as new": S.keyword,
  TemplateString: S.special(S.string),
  super: S.atom,
  BooleanLiteral: S.bool,
  this: S.self,
  null: S.null,
  Star: S.modifier,
  VariableName: S.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": S.function(S.variableName),
  VariableDefinition: S.definition(S.variableName),
  Label: S.labelName,
  PropertyName: S.propertyName,
  PrivatePropertyName: S.special(S.propertyName),
  "CallExpression/MemberExpression/PropertyName": S.function(S.propertyName),
  "FunctionDeclaration/VariableDefinition": S.function(S.definition(S.variableName)),
  "ClassDeclaration/VariableDefinition": S.definition(S.className),
  PropertyDefinition: S.definition(S.propertyName),
  PrivatePropertyDefinition: S.definition(S.special(S.propertyName)),
  UpdateOp: S.updateOperator,
  LineComment: S.lineComment,
  BlockComment: S.blockComment,
  Number: S.number,
  String: S.string,
  Escape: S.escape,
  ArithOp: S.arithmeticOperator,
  LogicOp: S.logicOperator,
  BitOp: S.bitwiseOperator,
  CompareOp: S.compareOperator,
  RegExp: S.regexp,
  Equals: S.definitionOperator,
  Arrow: S.function(S.punctuation),
  ": Spread": S.punctuation,
  "( )": S.paren,
  "[ ]": S.squareBracket,
  "{ }": S.brace,
  "InterpolationStart InterpolationEnd": S.special(S.brace),
  ".": S.derefOperator,
  ", ;": S.separator,
  "@": S.meta,
  TypeName: S.typeName,
  TypeDefinition: S.definition(S.typeName),
  "type enum interface implements namespace module declare": S.definitionKeyword,
  "abstract global Privacy readonly override": S.modifier,
  "is keyof unique infer": S.operatorKeyword,
  JSXAttributeValue: S.attributeValue,
  JSXText: S.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": S.angleBracket,
  "JSXIdentifier JSXNameSpacedName": S.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": S.attributeName,
  "JSXBuiltin/JSXIdentifier": S.standard(S.tagName)
}), mC = { __proto__: null, export: 14, as: 19, from: 27, default: 30, async: 35, function: 36, extends: 46, this: 50, true: 58, false: 58, null: 70, void: 74, typeof: 78, super: 96, new: 130, delete: 146, yield: 155, await: 159, class: 164, public: 219, private: 219, protected: 219, readonly: 221, instanceof: 240, satisfies: 243, in: 244, const: 246, import: 278, keyof: 333, unique: 337, infer: 343, is: 379, abstract: 399, implements: 401, type: 403, let: 406, var: 408, interface: 415, enum: 419, namespace: 425, module: 427, declare: 431, global: 435, for: 456, of: 465, while: 468, with: 472, do: 476, if: 480, else: 482, switch: 486, case: 492, try: 498, catch: 502, finally: 506, return: 510, throw: 514, break: 518, continue: 522, debugger: 526 }, gC = { __proto__: null, async: 117, get: 119, set: 121, public: 181, private: 181, protected: 181, static: 183, abstract: 185, override: 187, readonly: 193, accessor: 195, new: 383 }, bC = { __proto__: null, "<": 137 }, SC = nr.deserialize({
  version: 14,
  states: "$BhO`QUOOO%QQUOOO'TQWOOP(_OSOOO*mQ(CjO'#CfO*tOpO'#CgO+SO!bO'#CgO+bO07`O'#DZO-sQUO'#DaO.TQUO'#DlO%QQUO'#DvO0[QUO'#EOOOQ(CY'#EW'#EWO0rQSO'#ETOOQO'#I_'#I_O0zQSO'#GjOOQO'#Eh'#EhO1VQSO'#EgO1[QSO'#EgO3^Q(CjO'#JbO5}Q(CjO'#JcO6kQSO'#FVO6pQ#tO'#FnOOQ(CY'#F_'#F_O6{O&jO'#F_O7ZQ,UO'#FuO8qQSO'#FtOOQ(CY'#Jc'#JcOOQ(CW'#Jb'#JbOOQQ'#J|'#J|O8vQSO'#IOO8{Q(C[O'#IPOOQQ'#JO'#JOOOQQ'#IT'#ITQ`QUOOO%QQUO'#DnO9TQUO'#DzO%QQUO'#D|O9[QSO'#GjO9aQ,UO'#ClO9oQSO'#EfO9zQSO'#EqO:PQ,UO'#F^O:nQSO'#GjO:sQSO'#GnO;OQSO'#GnO;^QSO'#GqO;^QSO'#GrO;^QSO'#GtO9[QSO'#GwO;}QSO'#GzO=`QSO'#CbO=pQSO'#HXO=xQSO'#H_O=xQSO'#HaO`QUO'#HcO=xQSO'#HeO=xQSO'#HhO=}QSO'#HnO>SQ(C]O'#HtO%QQUO'#HvO>_Q(C]O'#HxO>jQ(C]O'#HzO8{Q(C[O'#H|O>uQ(CjO'#CfO?wQWO'#DfQOQSOOO@_QSO'#EPO9aQ,UO'#EfO@jQSO'#EfO@uQ`O'#F^OOQQ'#Cd'#CdOOQ(CW'#Dk'#DkOOQ(CW'#Jf'#JfO%QQUO'#JfOBOQWO'#E_OOQ(CW'#E^'#E^OBYQ(C`O'#E_OBtQWO'#ESOOQO'#Ji'#JiOCYQWO'#ESOCgQWO'#E_OC}QWO'#EeODQQWO'#E_O@}QWO'#E_OBtQWO'#E_PDkO?MpO'#C`POOO)CDm)CDmOOOO'#IU'#IUODvOpO,59ROOQ(CY,59R,59ROOOO'#IV'#IVOEUO!bO,59RO%QQUO'#D]OOOO'#IX'#IXOEdO07`O,59uOOQ(CY,59u,59uOErQUO'#IYOFVQSO'#JdOHXQbO'#JdO+pQUO'#JdOH`QSO,59{OHvQSO'#EhOITQSO'#JqOI`QSO'#JpOI`QSO'#JpOIhQSO,5;UOImQSO'#JoOOQ(CY,5:W,5:WOItQUO,5:WOKuQ(CjO,5:bOLfQSO,5:jOLkQSO'#JmOMeQ(C[O'#JnO:sQSO'#JmOMlQSO'#JmOMtQSO,5;TOMyQSO'#JmOOQ(CY'#Cf'#CfO%QQUO'#EOONmQ`O,5:oOOQO'#Jj'#JjOOQO-E<]-E<]O9[QSO,5=UO! TQSO,5=UO! YQUO,5;RO!#]Q,UO'#EcO!$pQSO,5;RO!&YQ,UO'#DpO!&aQUO'#DuO!&kQWO,5;[O!&sQWO,5;[O%QQUO,5;[OOQQ'#E}'#E}OOQQ'#FP'#FPO%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]OOQQ'#FT'#FTO!'RQUO,5;nOOQ(CY,5;s,5;sOOQ(CY,5;t,5;tO!)UQSO,5;tOOQ(CY,5;u,5;uO%QQUO'#IeO!)^Q(C[O,5<bO!#]Q,UO,5;]O!){Q,UO,5;]O%QQUO,5;qO!*SQ#tO'#FdO!+PQ#tO'#JuO!*kQ#tO'#JuO!+WQ#tO'#JuOOQO'#Ju'#JuO!+lQ#tO,5;|OOOO,5<Y,5<YO!+}QUO'#FpOOOO'#Id'#IdO6{O&jO,5;yO!,UQ#tO'#FrOOQ(CY,5;y,5;yO!,uQ7[O'#CrOOQ(CY'#Cv'#CvO!-YQSO'#CvO!-_O07`O'#CzO!-{Q,UO,5<_O!.SQSO,5<aO!/iQMhO'#GPO!/vQSO'#GQO!/{QSO'#GQO!0QQMhO'#GUO!1PQWO'#GYO!1rQ7[O'#J]OOQ(CY'#J]'#J]O!1|QSO'#J[O!2[QSO'#JZO!2dQSO'#CqOOQ(CY'#Ct'#CtOOQ(CY'#DO'#DOOOQ(CY'#DQ'#DQO0uQSO'#DSO!$uQ,UO'#FwO!$uQ,UO'#FyO!2lQSO'#F{O!2qQSO'#F|O!/{QSO'#GSO!$uQ,UO'#GXO!2vQSO'#EiO!3bQSO,5<`O`QUO,5>jOOQQ'#JW'#JWOOQQ,5>k,5>kOOQQ-E<R-E<RO!5aQ(CjO,5:YO!7}Q(CjO,5:fO%QQUO,5:fO!:hQ(CjO,5:hOOQ(CW'#Co'#CoO!;XQ,UO,5=UO!;gQ(C[O'#JXO8qQSO'#JXO=}QSO,59WO!;xQWO,59WO!<QQ,UO,59WO9aQ,UO,59WO!<]QSO,5;RO!<eQSO'#HWO!<vQSO'#KQO%QQUO,5;vO!=OQWO,5;xO!=TQSO,5=qO!=YQSO,5=qO!=_QSO,5=qO8{Q(C[O,5=qO!=mQSO'#EjO!>gQWO'#EkOOQ(CW'#Jo'#JoO!>nQ(C[O'#J}O8{Q(C[O,5=YO;^QSO,5=`OOQO'#Cr'#CrO!>yQWO,5=]O!?RQ,UO,5=^O!?^QSO,5=`O!?cQ`O,5=cO=}QSO'#G|O9[QSO'#HOO!?kQSO'#HOO9aQ,UO'#HRO!?pQSO'#HROOQQ,5=f,5=fO!?uQSO'#HSO!?}QSO'#ClO!@SQSO,58|O!@^QSO,58|O!BfQUO,58|OOQQ,58|,58|O!BsQ(C[O,58|O%QQUO,58|O!COQUO'#HZOOQQ'#H['#H[OOQQ'#H]'#H]O`QUO,5=sO!C`QSO,5=sO`QUO,5=yO`QUO,5={O!CeQSO,5=}O`QUO,5>PO!CjQSO,5>SO!CoQUO,5>YOOQQ,5>`,5>`O%QQUO,5>`O8{Q(C[O,5>bOOQQ,5>d,5>dO!GvQSO,5>dOOQQ,5>f,5>fO!GvQSO,5>fOOQQ,5>h,5>hO!G{QWO'#DXO%QQUO'#JfO!HjQWO'#JfO!IXQWO'#DgO!IjQWO'#DgO!K{QUO'#DgO!LSQSO'#JeO!L[QSO,5:QO!LaQSO'#ElO!LoQSO'#JrO!LwQSO,5;VO!L|QWO'#DgO!MZQWO'#EROOQ(CY,5:k,5:kO%QQUO,5:kO!MbQSO,5:kO=}QSO,5;QO!;xQWO,5;QO!<QQ,UO,5;QO9aQ,UO,5;QO!MjQSO,5@QO!MoQ!LQO,5:oO!NrQ(C`O,5:yOBtQWO,5:nO# ^QWO,5:nO# kQWO,5:yO#!RQWO,5:yO#!lQWO,5:yOBtQWO,5:yO=}QSO,5:nOOQ(CW'#Eb'#EbOOQO,5:y,5:yO%QQUO,5:yO##]Q(C[O,5:yO##hQ(C[O,5:yO!;xQWO,5:nOOQO,5;P,5;PO##vQ(C[O,5:yPOOO'#IS'#ISP#$[O?MpO,58zPOOO,58z,58zOOOO-E<S-E<SOOQ(CY1G.m1G.mOOOO-E<T-E<TO#$gQ`O,59wOOOO-E<V-E<VOOQ(CY1G/a1G/aO#$lQbO,5>tO+pQUO,5>tOOQO,5>z,5>zO#$vQUO'#IYOOQO-E<W-E<WO#%TQSO,5@OO#%]QbO,5@OO#%dQSO,5@[OOQ(CY1G/g1G/gO%QQUO,5@]O#%lQSO'#I`OOQO-E<^-E<^O#%dQSO,5@[OOQ(CW1G0p1G0pOOQ(CY1G/r1G/rOOQ(CY1G0U1G0UO#&QQSO,5@XO:sQSO,5@XO#&YQSO,5@XO%QQUO,5@YO#&hQ(C[O,5@YO#&yQ(C[O,5@YO#'QQSO'#IbO#&QQSO,5@XOOQ(CW1G0o1G0oO!&kQWO,5:qO!&vQWO,5:qOOQO,5:s,5:sO#'oQSO,5:sO#'wQ,UO1G2pO9[QSO1G2pOOQ(CY1G0m1G0mO#(VQ(CjO1G0mO#)[Q(ChO,5:}OOQ(CY'#GO'#GOO#)xQ(CjO'#J]O! YQUO1G0mO#,QQ,UO'#JgO#,[QSO,5:[O#,aQbO'#JhO%QQUO'#JhO#,kQSO,5:aOOQ(CY'#DX'#DXOOQ(CY1G0v1G0vO%QQUO1G0vOOQ(CY1G1`1G1`O#,pQSO1G0vO#/XQ(CjO1G0wO#/`Q(CjO1G0wO#1yQ(CjO1G0wO#2QQ(CjO1G0wO#4[Q(CjO1G0wO#4rQ(CjO1G0wO#7lQ(CjO1G0wO#7sQ(CjO1G0wO#:^Q(CjO1G0wO#:eQ(CjO1G0wO#<]Q(CjO1G0wO#?]Q$IUO'#CfO#AZQ$IUO1G1YO#CXQ$IUO'#JcO!)XQSO1G1`O#ClQ(CjO,5?POOQ(CW-E<c-E<cO#D`Q(CjO1G0wOOQ(CY1G0w1G0wO#FkQ(CjO1G1]O#G_Q#tO,5<QO#GgQ#tO,5<RO#GoQ#tO'#FiO#HWQSO'#FhOOQO'#Jv'#JvOOQO'#Ic'#IcO#H]Q#tO1G1hOOQ(CY1G1h1G1hOOOO1G1s1G1sO#HnQ$IUO'#JbO#HxQSO,5<[O!'RQUO,5<[OOOO-E<b-E<bOOQ(CY1G1e1G1eO#H}QWO'#JuOOQ(CY,5<^,5<^O#IVQWO,5<^OOQ(CY,59b,59bO!#]Q,UO'#C|OOOO'#IW'#IWO#I[O07`O,59fOOQ(CY,59f,59fO%QQUO1G1yO!2qQSO'#IgO#IgQSO,5<rOOQ(CY,5<o,5<oOOQO'#Ge'#GeO!$uQ,UO,5=OOOQO'#Gg'#GgO!$uQ,UO,5=QO!#]Q,UO,5=SOOQO1G1{1G1{O#IuQ`O'#CoO#JYQ`O,5<kO#JaQSO'#JyO9[QSO'#JyO#JoQSO,5<mO!$uQ,UO,5<lO#JtQSO'#GRO#KPQSO,5<lO#KUQ`O'#GOO#KcQ`O'#JzO#KmQSO'#JzO!#]Q,UO'#JzO#KrQSO,5<pO#KwQWO'#GZO!0zQWO'#GZO#LYQSO'#G]O#L_QSO'#G_O!/{QSO'#GbO#LdQ(C[O'#IiO#LoQWO,5<tOOQ(CY,5<t,5<tO#LvQWO'#GZO#MUQWO'#G[O#M^QWO'#G[OOQ(CY,5=T,5=TO!$uQ,UO,5?vO!$uQ,UO,5?vO#McQSO'#IjO#MnQSO,5?uO#MvQSO,59]O#NgQ,UO,59nOOQ(CY,59n,59nO$ YQ,UO,5<cO$ {Q,UO,5<eO?oQSO,5<gOOQ(CY,5<h,5<hO$!VQSO,5<nO$![Q,UO,5<sO! YQUO1G1zO$!lQSO1G1zOOQQ1G4U1G4UOOQ(CY1G/t1G/tO!)UQSO1G/tO$$kQ(CjO1G0QOOQQ1G2p1G2pO!#]Q,UO1G2pO%QQUO1G2pO$%[QSO1G2pO$%gQ,UO'#EcOOQ(CW,5?s,5?sO$%qQ(C[O,5?sOOQQ1G.r1G.rO=}QSO1G.rO!;xQWO1G.rO!<QQ,UO1G.rO$&SQSO1G0mO$&XQSO'#CfO$&dQSO'#KRO$&lQSO,5=rO$&qQSO'#KRO$&vQSO'#KRO$'RQSO'#IrO$'aQSO,5@lO$'iQbO1G1bOOQ(CY1G1d1G1dO9[QSO1G3]O?oQSO1G3]O$'pQSO1G3]O$'uQSO1G3]OOQQ1G3]1G3]O:sQSO'#JpO:sQSO'#ElO%QQUO'#ElO:sQSO'#IlO$'zQ(C[O,5@iOOQQ1G2t1G2tO!?^QSO1G2zO!#]Q,UO1G2wO$(VQSO1G2wOOQQ1G2x1G2xO!#]Q,UO1G2xO$([QSO1G2xO$(dQWO'#GvOOQQ1G2z1G2zO!0zQWO'#InO!?cQ`O1G2}OOQQ1G2}1G2}OOQQ,5=h,5=hO$(lQ,UO,5=jO9[QSO,5=jO#L_QSO,5=mO8qQSO,5=mO!;xQWO,5=mO!<QQ,UO,5=mO9aQ,UO,5=mO$(zQSO'#KPO$)VQSO,5=nOOQQ1G.h1G.hO$)[Q(C[O1G.hO?oQSO1G.hO$)gQSO1G.hO8{Q(C[O1G.hO$)rQbO,5@nO$*VQSO,5@nO$*bQUO,5=uO$*iQSO,5=uO:sQSO,5@nOOQQ1G3_1G3_O`QUO1G3_OOQQ1G3e1G3eOOQQ1G3g1G3gO=xQSO1G3iO$*nQUO1G3kO$.oQUO'#HjOOQQ1G3n1G3nO$.|QSO'#HpO=}QSO'#HrOOQQ1G3t1G3tO$/UQUO1G3tO8{Q(C[O1G3zOOQQ1G3|1G3|OOQ(CW'#GV'#GVO8{Q(C[O1G4OO8{Q(C[O1G4QO$3YQSO,5@QO!'RQUO,5;WO:sQSO,5;WO=}QSO,5:RO!'RQUO,5:RO!;xQWO,5:RO$3_Q$IUO,5:ROOQO,5;W,5;WO$3iQWO'#IZO$4PQSO,5@POOQ(CY1G/l1G/lO$4XQWO'#IaO$4cQSO,5@^OOQ(CW1G0q1G0qO!IjQWO,5:ROOQO'#I^'#I^O$4kQWO,5:mOOQ(CY,5:m,5:mO!MeQSO1G0VOOQ(CY1G0V1G0VO%QQUO1G0VOOQ(CY1G0l1G0lO=}QSO1G0lO!;xQWO1G0lO!<QQ,UO1G0lOOQ(CW1G5l1G5lO=}QSO1G0YOOQO1G0e1G0eO%QQUO1G0eO$4rQ(C[O1G0eO$4}Q(C[O1G0eO!;xQWO1G0YOBtQWO1G0YO$5]Q(C`O1G0eO$5wQWO1G0YOBtQWO1G0eO$6UQWO1G0eO$6lQWO1G0eO$7VQ(C[O1G0eOOQO1G0Y1G0YO$7kQ(CjO1G0ePOOO-E<Q-E<QPOOO1G.f1G.fOOOO1G/c1G/cO$7uQ`O,5<bO$7}QbO1G4`OOQO1G4f1G4fO%QQUO,5>tO$8XQSO1G5jO$8aQSO1G5vO$8iQbO1G5wO:sQSO,5>zO$8sQSO1G5sO$8sQSO1G5sO:sQSO1G5sO$8{Q(CjO1G5tO%QQUO1G5tO$9]Q(C[O1G5tO$9nQSO,5>|O:sQSO,5>|OOQO,5>|,5>|O$:SQSO,5>|OOQO-E<`-E<`OOQO1G0]1G0]OOQO1G0_1G0_O!)XQSO1G0_OOQQ7+([7+([O!#]Q,UO7+([O%QQUO7+([O$:bQSO7+([O$:mQ,UO7+([O$:{Q(CjO,59nO$=TQ(CjO,5<cO$?`Q(CjO,5<eO$AkQ(CjO,5<sOOQ(CY7+&X7+&XO$C|Q(CjO7+&XO$DpQ,UO'#I[O$DzQSO,5@ROOQ(CY1G/v1G/vO$ESQUO'#I]O$EaQSO,5@SO$EiQbO,5@SOOQ(CY1G/{1G/{O$EsQSO7+&bOOQ(CY7+&b7+&bO$ExQ$IUO,5:bO%QQUO7+&tO$FSQ$IUO,5:YO$FaQ$IUO,5:fO$FkQ$IUO,5:hOOQ(CY7+&z7+&zOOQO1G1l1G1lOOQO1G1m1G1mO$FuQ#tO,5<TO!'RQUO,5<SOOQO-E<a-E<aOOQ(CY7+'S7+'SOOOO7+'_7+'_OOOO1G1v1G1vO$GQQSO1G1vOOQ(CY1G1x1G1xO$GVQ`O,59hOOOO-E<U-E<UOOQ(CY1G/Q1G/QO$G^Q(CjO7+'eOOQ(CY,5?R,5?RO$HQQSO,5?ROOQ(CY1G2^1G2^P$HVQSO'#IgPOQ(CY-E<e-E<eO$HyQ,UO1G2jO$IlQ,UO1G2lO$IvQ`O1G2nOOQ(CY1G2V1G2VO$I}QSO'#IfO$J]QSO,5@eO$J]QSO,5@eO$JeQSO,5@eO$JpQSO,5@eOOQO1G2X1G2XO$KOQ,UO1G2WO!$uQ,UO1G2WO$K`QMhO'#IhO$KpQSO,5@fO!#]Q,UO,5@fO$KxQ`O,5@fOOQ(CY1G2[1G2[OOQ(CW,5<u,5<uOOQ(CW,5<v,5<vO$LSQSO,5<vOBoQSO,5<vO!;xQWO,5<uOOQO'#G^'#G^O$LXQSO,5<wOOQ(CW,5<y,5<yO$LSQSO,5<|OOQO,5?T,5?TOOQO-E<g-E<gOOQ(CY1G2`1G2`O!0zQWO,5<uO$LaQSO,5<vO#LYQSO,5<wO!0zQWO,5<vO$LlQ,UO1G5bO$LvQ,UO1G5bOOQO,5?U,5?UOOQO-E<h-E<hOOQO1G.w1G.wO!=OQWO,59pO%QQUO,59pO$MTQSO1G2RO!$uQ,UO1G2YO$MYQ(CjO7+'fOOQ(CY7+'f7+'fO! YQUO7+'fOOQ(CY7+%`7+%`O$M|Q`O'#J{O!MeQSO7+([O$NWQbO7+([O$:eQSO7+([O$N_Q(ChO'#CfO$NrQ(ChO,5<zO% dQSO,5<zOOQ(CW1G5_1G5_OOQQ7+$^7+$^O=}QSO7+$^O!;xQWO7+$^O! YQUO7+&XO% iQSO'#IqO% }QSO,5@mOOQO1G3^1G3^O9[QSO,5@mO% }QSO,5@mO%!VQSO,5@mOOQO,5?^,5?^OOQO-E<p-E<pOOQ(CY7+&|7+&|O%![QSO7+(wO8{Q(C[O7+(wO9[QSO7+(wO?oQSO7+(wO%!aQSO,5;WOOQ(CW,5?W,5?WOOQ(CW-E<j-E<jOOQQ7+(f7+(fO%!fQ(ChO7+(cO!#]Q,UO7+(cO%!pQ`O7+(dOOQQ7+(d7+(dO!#]Q,UO7+(dO%!wQSO'#KOO%#SQSO,5=bOOQO,5?Y,5?YOOQO-E<l-E<lOOQQ7+(i7+(iO%$`QWO'#HPOOQQ1G3U1G3UO!#]Q,UO1G3UO%QQUO1G3UO%$gQSO1G3UO%$rQ,UO1G3UO8{Q(C[O1G3XO#L_QSO1G3XO8qQSO1G3XO!;xQWO1G3XO!<QQ,UO1G3XO%%QQSO'#IpO%%]QSO,5@kO%%eQWO,5@kOOQ(CW1G3Y1G3YOOQQ7+$S7+$SO?oQSO7+$SO8{Q(C[O7+$SO%%pQSO7+$SO%QQUO1G6YO%QQUO1G6ZO%%uQUO1G3aO%%|QSO1G3aO%&RQUO1G3aO%&YQ(C[O1G6YOOQQ7+(y7+(yO8{Q(C[O7+)TO`QUO7+)VOOQQ'#KU'#KUOOQQ'#Is'#IsO%&dQUO,5>UOOQQ,5>U,5>UO%QQUO'#HkO%&qQSO'#HmOOQQ,5>[,5>[O:sQSO,5>[OOQQ,5>^,5>^OOQQ7+)`7+)`OOQQ7+)f7+)fOOQQ7+)j7+)jOOQQ7+)l7+)lO%&vQWO1G5lO%'[Q$IUO1G0rO%'fQSO1G0rOOQO1G/m1G/mO%'qQ$IUO1G/mO=}QSO1G/mO!'RQUO'#DgOOQO,5>u,5>uOOQO-E<X-E<XOOQO,5>{,5>{OOQO-E<_-E<_O!;xQWO1G/mOOQO-E<[-E<[OOQ(CY1G0X1G0XOOQ(CY7+%q7+%qO!MeQSO7+%qOOQ(CY7+&W7+&WO=}QSO7+&WO!;xQWO7+&WOOQO7+%t7+%tO$7kQ(CjO7+&POOQO7+&P7+&PO%QQUO7+&PO%'{Q(C[O7+&PO=}QSO7+%tO!;xQWO7+%tO%(WQ(C[O7+&POBtQWO7+%tO%(fQ(C[O7+&PO%(zQ(C`O7+&PO%)UQWO7+%tOBtQWO7+&PO%)cQWO7+&PO%)yQSO7++_O%)yQSO7++_O%*RQ(CjO7++`O%QQUO7++`OOQO1G4h1G4hO:sQSO1G4hO%*cQSO1G4hOOQO7+%y7+%yO!MeQSO<<KvO$NWQbO<<KvO%*qQSO<<KvOOQQ<<Kv<<KvO!#]Q,UO<<KvO%QQUO<<KvO%*yQSO<<KvO%+UQ(CjO1G2jO%-aQ(CjO1G2lO%/lQ(CjO1G2WO%1}Q,UO,5>vOOQO-E<Y-E<YO%2XQbO,5>wO%QQUO,5>wOOQO-E<Z-E<ZO%2cQSO1G5nOOQ(CY<<I|<<I|O%2kQ$IUO1G0mO%4uQ$IUO1G0wO%4|Q$IUO1G0wO%7QQ$IUO1G0wO%7XQ$IUO1G0wO%8|Q$IUO1G0wO%9dQ$IUO1G0wO%;wQ$IUO1G0wO%<OQ$IUO1G0wO%>SQ$IUO1G0wO%>ZQ$IUO1G0wO%@RQ$IUO1G0wO%@fQ(CjO<<J`O%AkQ$IUO1G0wO%CaQ$IUO'#J]O%EdQ$IUO1G1]O%EqQ$IUO1G0QO!'RQUO'#FkOOQO'#Jw'#JwOOQO1G1o1G1oO%E{QSO1G1nO%FQQ$IUO,5?POOOO7+'b7+'bOOOO1G/S1G/SOOQ(CY1G4m1G4mO!$uQ,UO7+(YO%F[QSO,5?QO9[QSO,5?QOOQO-E<d-E<dO%FjQSO1G6PO%FjQSO1G6PO%FrQSO1G6PO%F}Q,UO7+'rO%G_Q`O,5?SO%GiQSO,5?SO!#]Q,UO,5?SOOQO-E<f-E<fO%GnQ`O1G6QO%GxQSO1G6QOOQ(CW1G2b1G2bO$LSQSO1G2bOOQ(CW1G2a1G2aO%HQQSO1G2cO!#]Q,UO1G2cOOQ(CW1G2h1G2hO!;xQWO1G2aOBoQSO1G2bO%HVQSO1G2cO%H_QSO1G2bO!$uQ,UO7+*|OOQ(CY1G/[1G/[O%HjQSO1G/[OOQ(CY7+'m7+'mO%HoQ,UO7+'tO%IPQ(CjO<<KQOOQ(CY<<KQ<<KQO!#]Q,UO'#IkO%IsQSO,5@gO!#]Q,UO1G2fOOQQ<<Gx<<GxO=}QSO<<GxO%I{Q(CjO<<IsOOQ(CY<<Is<<IsOOQO,5?],5?]O%JoQSO,5?]O$&vQSO,5?]OOQO-E<o-E<oO%JtQSO1G6XO%JtQSO1G6XO9[QSO1G6XO?oQSO<<LcOOQQ<<Lc<<LcO%J|QSO<<LcO8{Q(C[O<<LcO%KRQSO1G0rOOQQ<<K}<<K}O%!fQ(ChO<<K}OOQQ<<LO<<LOO%!pQ`O<<LOO%KWQWO'#ImO%KcQSO,5@jO!'RQUO,5@jOOQQ1G2|1G2|O%KkQ(C`O'#JfO%LVQUO'#JfO%L^QWO'#E_O%LwQ(C[O'#E_OBYQ(C`O'#E_O(VQWO'#HQOOQO'#Io'#IoO8{Q(C[O'#IoO%M]QWO,5=kOOQQ,5=k,5=kO%MuQWO'#E_O%LmQWO'#E_O%M|QWO'#E_O%NgQWO'#E_O& WQWO'#HQO& iQSO7+(pO& nQSO7+(pOOQQ7+(p7+(pO!#]Q,UO7+(pO%QQUO7+(pO& vQSO7+(pOOQQ7+(s7+(sO8{Q(C[O7+(sO#L_QSO7+(sO8qQSO7+(sO!;xQWO7+(sO&!RQSO,5?[OOQO-E<n-E<nOOQO'#HT'#HTO&!^QSO1G6VO8{Q(C[O<<GnOOQQ<<Gn<<GnO?oQSO<<GnO&!fQSO7++tO&!kQSO7++uOOQQ7+({7+({O&!pQSO7+({O&!uQUO7+({O&!|QSO7+({O%QQUO7++tO%QQUO7++uOOQQ<<Lo<<LoOOQQ<<Lq<<LqOOQQ-E<q-E<qOOQQ1G3p1G3pO&#RQSO,5>VOOQQ,5>X,5>XO&#WQSO1G3vO:sQSO7+&^O!'RQUO7+&^OOQO7+%X7+%XO&#]Q$IUO1G5wO=}QSO7+%XOOQ(CY<<I]<<I]OOQ(CY<<Ir<<IrO=}QSO<<IrOOQO<<Ik<<IkO$7kQ(CjO<<IkO%QQUO<<IkOOQO<<I`<<I`O=}QSO<<I`O&#gQ(C[O<<IkO!;xQWO<<I`O&#rQ(C[O<<IkOBtQWO<<I`O&$QQ(C[O<<IkO&$fQ(C`O<<IkO&$pQWO<<I`OBtQWO<<IkO&$}QSO<<NyO&%VQ(CjO<<NzOOQO7+*S7+*SO:sQSO7+*SOOQQANAbANAbO&%gQSOANAbO!#]Q,UOANAbO!MeQSOANAbO$NWQbOANAbO%QQUOANAbO&%oQ(CjO7+'rO&(QQ(CjO7+'tO&*cQbO1G4cO&*mQ$IUO7+&XO&*zQ$IUO,59nO&,}Q$IUO,5<cO&/QQ$IUO,5<eO&1TQ$IUO,5<sO&2yQ$IUO7+'eO&3WQ$IUO7+'fO&3eQSO,5<VOOQO7+'Y7+'YO&3jQ,UO<<KtOOQO1G4l1G4lO&3qQSO1G4lO&3|QSO1G4lO&4[QSO7++kO&4[QSO7++kO!#]Q,UO1G4nO&4dQ`O1G4nO&4nQSO7++lOOQ(CW7+'|7+'|O$LSQSO7+'}O&4vQ`O7+'}OOQ(CW7+'{7+'{O$LSQSO7+'|O&4}QSO7+'}O!#]Q,UO7+'}OBoQSO7+'|O&5SQ,UO<<NhOOQ(CY7+$v7+$vO&5^Q`O,5?VOOQO-E<i-E<iO&5hQ(ChO7+(QOOQQAN=dAN=dO9[QSO1G4wOOQO1G4w1G4wO&5xQSO1G4wO&5}QSO7++sO&5}QSO7++sO8{Q(C[OANA}O?oQSOANA}OOQQANA}ANA}OOQQANAiANAiOOQQANAjANAjO&6VQSO,5?XOOQO-E<k-E<kO&6bQ$IUO1G6UO#L_QSO,5=lO8qQSO,5=lO&8rQbO'#CfO&8|QWO,5:yO&9WQWO,5:yO&9eQWO,5:yO!;xQWO,5=lOOQO,5?Z,5?ZOOQO-E<m-E<mOOQQ1G3V1G3VO%LVQUO,5<wO%KkQ(C`O,5=lO!NrQ(C`O,5:yO(VQWO,5=lO&9xQWO,5=lO&:ZQWO,5:yOOQQ<<L[<<L[O!#]Q,UO<<L[O& iQSO<<L[O&:tQSO<<L[O%QQUO<<L[OOQQ<<L_<<L_O8{Q(C[O<<L_O#L_QSO<<L_O8qQSO<<L_O&:|QWO1G4vO&;XQSO7++qOOQQAN=YAN=YO8{Q(C[OAN=YOOQQ<= `<= `OOQQ<= a<= aOOQQ<<Lg<<LgO&;aQSO<<LgO&;fQUO<<LgO&;mQSO<= `O&;rQSO<= aOOQQ1G3q1G3qO=}QSO7+)bO&;wQSO<<IxO&<SQ$IUO<<IxOOQO<<Hs<<HsOOQ(CYAN?^AN?^OOQOAN?VAN?VO$7kQ(CjOAN?VOOQOAN>zAN>zO%QQUOAN?VO=}QSOAN>zO&<^Q(C[OAN?VO!;xQWOAN>zO&<iQ(C[OAN?VOBtQWOAN>zO&<wQ(C[OAN?VOOQO<<Mn<<MnOOQQG26|G26|O!#]Q,UOG26|O!MeQSOG26|O&=]QSOG26|O$NWQbOG26|O&=eQ$IUO<<J`O&=rQ$IUO1G2WO&?hQ$IUO1G2jO&AkQ$IUO1G2lO&CnQ$IUO<<KQO&C{Q$IUO<<IsOOQO1G1q1G1qO!$uQ,UOANA`OOQO7+*W7+*WO&DYQSO7+*WO&DeQSO<= VO&DmQ`O7+*YOOQ(CW<<Ki<<KiO$LSQSO<<KiOOQ(CW<<Kh<<KhO&DwQ`O<<KiO$LSQSO<<KhOOQO7+*c7+*cO9[QSO7+*cO&EOQSO<= _OOQQG27iG27iO8{Q(C[OG27iO!'RQUO1G4sO&EWQSO7++pO8{Q(C[O1G3WO#L_QSO1G3WO&E`QWO1G0eO&EjQWO1G0eO8qQSO1G3WO!;xQWO1G3WO(VQWO1G3WO%KkQ(C`O1G3WO$5]Q(C`O1G0eO&EwQWO1G3WO& iQSOANAvOOQQANAvANAvO!#]Q,UOANAvO&FYQSOANAvOOQQANAyANAyO8{Q(C[OANAyO#L_QSOANAyOOQO'#HU'#HUOOQO7+*b7+*bOOQQG22tG22tOOQQANBRANBRO&FbQSOANBROOQQANDzANDzOOQQAND{AND{OOQQ<<L|<<L|O!'RQUOAN?dOOQOG24qG24qO$7kQ(CjOG24qOOQOG24fG24fO%QQUOG24qO=}QSOG24fO&FgQ(C[OG24qO!;xQWOG24fO&FrQ(C[OG24qO!MeQSOLD,hOOQQLD,hLD,hO!#]Q,UOLD,hO&GQQSOLD,hO&GYQ$IUO7+'rO&IOQ$IUO7+'tO&JtQ,UOG26zOOQO<<Mr<<MrOOQ(CWANATANATO$LSQSOANATOOQ(CWANASANASOOQO<<M}<<M}OOQQLD-TLD-TO&KUQ$IUO7+*_OOQO7+(r7+(rO8{Q(C[O7+(rO&K`QWO7+&PO#L_QSO7+(rO8qQSO7+(rO!;xQWO7+(rO(VQWO7+(rOOQQG27bG27bO& iQSOG27bO!#]Q,UOG27bOOQQG27eG27eO8{Q(C[OG27eOOQQG27mG27mO&KjQ$IUOG25OOOQOLD*]LD*]O$7kQ(CjOLD*]OOQOLD*QLD*QO%QQUOLD*]O=}QSOLD*QO&KtQ(C[OLD*]OOQQ!$(!S!$(!SO!MeQSO!$(!SO!#]Q,UO!$(!SO&LPQ(CjOG26zOOQ(CWG26oG26oOOQO<<L^<<L^O8{Q(C[O<<L^O#L_QSO<<L^O8qQSO<<L^O!;xQWO<<L^OOQQLD,|LD,|O& iQSOLD,|OOQQLD-PLD-POOQO!$'Mw!$'MwO$7kQ(CjO!$'MwOOQO!$'Ml!$'MlO%QQUO!$'MwOOQQ!)9En!)9EnO!MeQSO!)9EnOOQOANAxANAxO8{Q(C[OANAxO#L_QSOANAxO8qQSOANAxOOQQ!$(!h!$(!hOOQO!)9Cc!)9CcO$7kQ(CjO!)9CcOOQQ!.K;Y!.K;YO&NbQ$IUOG26zOOQOG27dG27dO8{Q(C[OG27dO#L_QSOG27dOOQO!.K8}!.K8}OOQOLD-OLD-OO8{Q(C[OLD-OOOQO!$(!j!$(!jO!'RQUO'#DvO0rQSO'#ETO'!WQbO'#JbO!'RQUO'#DnO'!_QUO'#DzO!'RQUO'#D|O'!fQbO'#CfO'$|QbO'#CfO'%^QUO,5;RO!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO'#IeO''aQSO,5<bO''iQ,UO,5;]O'(|Q,UO,5;]O!'RQUO,5;qO0uQSO'#DSO0uQSO'#DSO!#]Q,UO'#FwO''iQ,UO'#FwO!#]Q,UO'#FyO''iQ,UO'#FyO!#]Q,UO'#GXO''iQ,UO'#GXO!'RQUO,5:fO!'RQUO,5@]O'%^QUO1G0mO')TQ$IUO'#CfO!'RQUO1G1yO!#]Q,UO,5=OO''iQ,UO,5=OO!#]Q,UO,5=QO''iQ,UO,5=QO!#]Q,UO,5<lO''iQ,UO,5<lO'%^QUO1G1zO!'RQUO7+&tO!#]Q,UO1G2WO''iQ,UO1G2WO!#]Q,UO1G2YO''iQ,UO1G2YO'%^QUO7+'fO'%^QUO7+&XO!#]Q,UOANA`O''iQ,UOANA`O')_QSO'#EgO')dQSO'#EgO')lQSO'#FVO')qQSO'#EqO')vQSO'#JqO'*RQSO'#JoO'*^QSO,5;RO'*cQ,UO,5<_O'*jQSO'#GQO'*oQSO'#GQO'*tQSO,5<`O'*|QSO,5;RO'+UQ$IUO1G1YO'+]QSO,5<lO'+bQSO,5<lO'+gQSO,5<nO'+lQSO,5<nO'+qQSO1G1zO'+vQSO1G0mO'+{Q,UO<<KtO',SQ,UO<<KtO7ZQ,UO'#FuO8qQSO'#FtO@jQSO'#EfO!'RQUO,5;nO!/{QSO'#GQO!/{QSO'#GQO!/{QSO'#GSO!/{QSO'#GSO!$uQ,UO7+(YO!$uQ,UO7+(YO$IvQ`O1G2nO$IvQ`O1G2nO!#]Q,UO,5=SO!#]Q,UO,5=S",
  stateData: "'-[~O'lOS'mOSROS'nRQ~OPYOQYOV!TO^pOaxObwOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!XXO!csO!hZO!kYO!lYO!mYO!otO!quO!tvO!x]O#o}O$PzO$TfO%_{O%a!OO%c|O%d|O%g!PO%i!QO%l!RO%m!RO%o!SO%|!UO&S!VO&U!WO&W!XO&Y!YO&]!ZO&c![O&i!]O&k!^O&m!_O&o!`O&q!aO'sSO'uTO'xUO(QVO(_[O(liO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's!bO'uTO'xUO(QVO(_[O(liO~O^!qOl!kO|!lO![!rO!]!pO!^!pO!x;oO!|!vO!}!tO#O!uO#P!sO#S!wO#T!wO't!iO'uTO'xUO(T!jO(_!nO~O'n!xO~OPYXXYX^YXkYXyYXzYX|YX!VYX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX'jYX(QYX(`YX(gYX(hYX~O!a$yX~P(dO[!zO'u!|O'v!zO'w!|O~O[!}O'w!|O'x!|O'y!}O~Oq#PO!O#QO(R#QO(S#SO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's;tO'uTO'xUO(QVO(_[O(liO~O!U#WO!V#TO!S(WP!S(dP~P+pO!W#`O~P`OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO'uTO'xUO(QVO(_[O(liO~O!U#fO!x]O#a#iO#b#fO's;uO!g(aP~P.[O!h#kO's#jO~O!t#oO!x]O%_#pO~O#c#qO~O!a#rO#c#qO~OP$YOX$aOk#}Oy#vOz#wO|#xO!V$^O!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O^(UX'j(UX'h(UX!g(UX!S(UX!X(UX%`(UX!a(UX~P1dO#W$bO#z$bOP(VXX(VXk(VXy(VXz(VX|(VX!V(VX!e(VX!h(VX!l(VX#f(VX#g(VX#h(VX#i(VX#j(VX#k(VX#l(VX#m(VX#n(VX#p(VX#r(VX#t(VX#u(VX(Q(VX(`(VX(g(VX(h(VX!X(VX%`(VX~O^(VX!f(VX'j(VX'h(VX!S(VX!g(VXo(VX!a(VX~P3zO#W$bO~O$V$dO$X$cO$`$iO~O!X$jO$TfO$c$kO$e$mO~Oi%POk$qOl$pOm$pOs%QOu%ROw%SO|$xO!X$yO!c%XO!h$uO#b%YO$P%VO$l%TO$n%UO$q%WO's$oO'uTO'xUO'|%OO(Q$rOd'}P~O!h%ZO~O!a%]O~O^%^O'j%^O~O't!iO~P%QO's%eO~O!h%ZO's%eO't!iO'|%OO~Ob%lO!h%ZO's%eO~O#n$PO~Oy%qO!X%nO!h%pO%a%tO's%eO't!iO'uTO'xUO](tP~O!t#oO~O|%vO!X%wO's%eO~O|%vO!X%wO%i%{O's%eO~O's%|O~O#o}O%a!OO%c|O%d|O%g!PO%i!QO%l!RO%m!RO~Oa&VOb&UO!t&SO%_&TO%q&RO~P;cOa&YObwO!X&XO!tvO!x]O#o}O%_{O%c|O%d|O%g!PO%i!QO%l!RO%m!RO%o!SO~O_&]O#W&`O%a&ZO't!iO~P<bO!h&aO!q&eO~O!h#kO~O!XXO~O^%^O'i&mO'j%^O~O^%^O'i&pO'j%^O~O^%^O'i&rO'j%^O~O'hYX!SYXoYX!gYX&QYX!XYX%`YX!aYX~P(dO!['PO!]&xO!^&xO't!iO'uTO'xUO~Ol&vO|&uO!U&yO(T&tO!W(XP!W(fP~P?cOg'SO!X'QO's%eO~Ob'XO!h%ZO's%eO~Oy%qO!h%pO~Ol!kO|!lO!['^O!]']O!^']O!}'`O#O'`O#P'_O#S'bO#T'bO't!iO'uTO'xUO(T!jO(_!nO~O!x;oO!|'aO~P@}O^%^O!a#rO!h%ZO!l'hO#W'fO'j%^O'|%OO(`'dO~Ol!kO|!lO'uTO'xUO(T!jO(_!nO~O!]']O!^']O't!iO~PBtO!['^O!]']O!^']O#S'bO#T'bO't!iO~PBtO!XXO!['^O!]']O!^']O#P'_O#S'bO#T'bO't!iO~PBtO'o'lO'p'lO'q'nO~O[!zO'u'pO'v!zO'w'pO~O[!}O'w'pO'x'pO'y!}O~Oq#PO!O#QO(R#QO(S'tO~O!U'vO!S&|X!S'SX!V&|X!V'SX~P+pO!V'xO!S(WX~OP$YOX$aOk#}Oy#vOz#wO|#xO!V'xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O!S(WX~PF_O!S'}O~O!S(cX!V(cX!a(cX!g(cX(`(cX~O#W(cX#c#[X!W(cX~PHeO#W(OO!S(eX!V(eX~O!V(PO!S(dX~O!S(SO~O#W$bO~PHeO!W(TO~P`Oy#vOz#wO|#xO!f#tO!h#uO(QVOP!jaX!jak!ja!V!ja!e!ja!l!ja#f!ja#g!ja#h!ja#i!ja#j!ja#k!ja#l!ja#m!ja#n!ja#p!ja#r!ja#t!ja#u!ja(`!ja(g!ja(h!ja~O^!ja'j!ja'h!ja!S!ja!g!jao!ja!X!ja%`!ja!a!ja~PI{O!g(UO~O|%vO!X%wO!x]O#a(XO#b(WO's%eO~O!a#rO#W(YO(`'dO!V(bX^(bX'j(bX~O!g(bX~PMPO!V(]O!g(aX~O!g(_O~O|%vO!X%wO#b(WO's%eO~Oy(`Oz(aO!f#tO!h#uO!x!wa|!wa~O!t!wa%_!wa!X!wa#a!wa#b!wa's!wa~PNXO!t(eO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!XXO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's!bO'uTO'xUO(QVO(_[O(liO~Oi%POk$qOl$pOm$pOs%QOu%ROw<XO|$xO!X$yO!c=cO!h$uO#b<_O$P%VO$l<ZO$n<]O$q%WO's(iO'uTO'xUO'|%OO(Q$rO~O#c(kO~Oi%POk$qOl$pOm$pOs%QOu%ROw%SO|$xO!X$yO!c%XO!h$uO#b%YO$P%VO$l%TO$n%UO$q%WO's(iO'uTO'xUO'|%OO(Q$rO~Od(ZP~P!$uO!U(oO!g([P~P%QO(T(qO(_[O~O|(sO!h#uO(T(qO(_[O~OP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!X!cO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO's)RO'uTO'xUO(QVO(_[O(l=]O~Oz)UO!h#uO~O!V$^O^$ja'j$ja'h$ja!g$ja!S$ja!X$ja%`$ja!a$ja~O#o)YO~P!#]Oy)]O!a)[O!X$WX$S$WX$V$WX$X$WX$`$WX~O!a)[O!X(iX$S(iX$V(iX$X(iX$`(iX~Oy)]O~P!*kOy)]O!X(iX$S(iX$V(iX$X(iX$`(iX~O!X)_O$S)cO$V)^O$X)^O$`)dO~O!U)gO~P!'RO$V$dO$X$cO$`)kO~Og$rXy$rX|$rX!f$rX(g$rX(h$rX~OdfXd$rXgfX!VfX#WfX~P!,aOl)mO~Oq)nO(R)oO(S)qO~Og)zOy)sO|)tO(g)vO(h)xO~Od)rO~P!-jOd){O~Oi%POk$qOl$pOm$pOs%QOu%ROw<XO|$xO!X$yO!c=cO!h$uO#b<_O$P%VO$l<ZO$n<]O$q%WO'uTO'xUO'|%OO(Q$rO~O!U*PO's)|O!g(mP~P!.XO#c*RO~O!h*SO~O!U*XO's*UO!S(nP~P!.XOk*eO|*]O![*cO!]*[O!^*[O!h*SO#S*dO%V*_O't!iO(T!jO~O!W*bO~P!0_O!f#tOg(PXy(PX|(PX(g(PX(h(PX!V(PX#W(PX~Od(PX#x(PX~P!1WOg*hO#W*gOd(OX!V(OX~O!V*iOd'}X~O's%|Od'}P~O!h*pO~O's(iO~O|%vO!U#fO!X%wO!x]O#a#iO#b#fO's%eO!g(aP~O!a#rO#c*tO~OP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O^!ba!V!ba'j!ba'h!ba!S!ba!g!bao!ba!X!ba%`!ba!a!ba~P!3jOy#vOz#wO|#xO!f#tO!h#uO(QVOP!naX!nak!na!V!na!e!na!l!na#f!na#g!na#h!na#i!na#j!na#k!na#l!na#m!na#n!na#p!na#r!na#t!na#u!na(`!na(g!na(h!na~O^!na'j!na'h!na!S!na!g!nao!na!X!na%`!na!a!na~P!6TOy#vOz#wO|#xO!f#tO!h#uO(QVOP!paX!pak!pa!V!pa!e!pa!l!pa#f!pa#g!pa#h!pa#i!pa#j!pa#k!pa#l!pa#m!pa#n!pa#p!pa#r!pa#t!pa#u!pa(`!pa(g!pa(h!pa~O^!pa'j!pa'h!pa!S!pa!g!pao!pa!X!pa%`!pa!a!pa~P!8nOg*|O!X'QO%`*{O'|%OO~O!a+OO!X'{X^'{X!V'{X'j'{X~O!h%ZO'|%OO~O!h%ZO's%eO'|%OO~O!a#rO#c(kO~O%a+[O's+WO'uTO'xUO!W(uP~O!V+]O](tX~O(T(qO~OX+aO~O]+bO~O!X%nO's%eO't!iO](tP~O|%vO!U+fO!V(PO!X%wO's%eO!S(dP~Ol&|O|+hO!U+gO'uTO'xUO(T(qO~O!W(fP~P!>RO!V+iO^(qX'j(qX~O#W+mO'|%OO~Og+pO!X$yO'|%OO~O!X+rO~Oy+tO!XXO~O!t+yO~Ob,OO~O's#jO!W(sP~Ob%lO~O%a!OO's%|O~P<bOX,UO],TO~OPYOQYOaxObwOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!csO!hZO!kYO!lYO!mYO!otO!quO!tvO!x]O$TfO%_{O'uTO'xUO(QVO(_[O(liO~O!X!cO$P!hO's!bO~P!@fO],TO^%^O'j%^O~O^,YO#o,[O%c,[O%d,[O~P%QO!h&aO~O&S,aO~O!X,cO~O&e,eO&g,fOP&baQ&baV&ba^&baa&bab&bai&bak&bal&bam&bas&bau&baw&ba|&ba!Q&ba!R&ba!X&ba!c&ba!h&ba!k&ba!l&ba!m&ba!o&ba!q&ba!t&ba!x&ba#o&ba$P&ba$T&ba%_&ba%a&ba%c&ba%d&ba%g&ba%i&ba%l&ba%m&ba%o&ba%|&ba&S&ba&U&ba&W&ba&Y&ba&]&ba&c&ba&i&ba&k&ba&m&ba&o&ba&q&ba'h&ba's&ba'u&ba'x&ba(Q&ba(_&ba(l&ba!W&ba&Z&ba_&ba&`&ba~O's,kO~O!V{X!V!_X!W{X!W!_X!a{X!a!_X!h!_X#W{X'|!_X~O!a,pO#W,oO!V#`X!V(YX!W#`X!W(YX!a(YX!h(YX'|(YX~O!a,rO!h%ZO'|%OO!V!ZX!W!ZX~Ol!kO|!lO'uTO'xUO(T!jO~OP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!X!cO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO'uTO'xUO(QVO(_[O(l=]O~O's<dO~P!I{O!V,vO!W(XX~O!W,xO~O!a,pO#W,oO!V#`X!W#`X~O!V,yO!W(fX~O!W,{O~O!],|O!^,|O't!iO~P!IjO!W-PO~P'TOg-SO!X'QO~O!S-XO~Ol!wa![!wa!]!wa!^!wa!|!wa!}!wa#O!wa#P!wa#S!wa#T!wa't!wa'u!wa'x!wa(T!wa(_!wa~PNXO^%^O!a#rO!h%ZO!l-^O#W-[O'j%^O'|%OO(`'dO~O!]-`O!^-`O't!iO~PBtO![-bO!]-`O!^-`O#S-cO#T-cO't!iO~PBtO![-bO!]-`O!^-`O#P-dO#S-cO#T-cO't!iO~PBtO![-bO!]-`O!^-`O!}-eO#O-eO#P-dO#S-cO#T-cO't!iO~PBtO^%^O#W-[O'j%^O~O^%^O!a#rO#W-[O'j%^O~O^%^O!a#rO!l-^O#W-[O'j%^O(`'dO~O'o'lO'p'lO'q-jO~Oo-kO~O!S&|a!V&|a~P!3jO!U-oO!S&|X!V&|X~P%QO!V'xO!S(Wa~O!S(Wa~PF_O!V(PO!S(da~O|%vO!U-sO!X%wO's%eO!S'SX!V'SX~O!V(]O!g(aa~O|%vO!X%wO#b-vO's%eO~O#W-xO!V(ba!g(ba^(ba'j(ba~O!a#rO~P#&hO|%vO!U-{O!X%wO!x]O#a-}O#b-{O's%eO!V'UX!g'UX~Oz.RO!h#uO~Og.UO!X'QO%`.TO'|%OO~O^#Zi!V#Zi'j#Zi'h#Zi!S#Zi!g#Zio#Zi!X#Zi%`#Zi!a#Zi~P!3jOg=iOy)sO|)tO(g)vO(h)xO~O#c#Va^#Va#W#Va'j#Va!V#Va!g#Va!X#Va!S#Va~P#(yO#c(PXP(PXX(PX^(PXk(PXz(PX!e(PX!h(PX!l(PX#f(PX#g(PX#h(PX#i(PX#j(PX#k(PX#l(PX#m(PX#n(PX#p(PX#r(PX#t(PX#u(PX'j(PX(Q(PX(`(PX!g(PX!S(PX'h(PXo(PX!X(PX%`(PX!a(PX~P!1WO!V._Od(ZX~P!-jOd.aO~O!V.bO!g([X~P!3jO!g.eO~O!S.gO~OP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO(QVOX#ei^#eik#ei!V#ei!e#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O#f#ei~P#,uO#f#{O~P#,uOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O(QVOX#ei^#ei!V#ei!e#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~Ok#ei~P#/gOk#}O~P#/gOP$YOk#}Oy#vOz#wO|#xO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO(QVO^#ei!V#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~OX#ei!e#ei#k#ei#l#ei#m#ei#n#ei~P#2XOX$aO!e$PO#k$PO#l$PO#m$`O#n$PO~P#2XOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO(QVO^#ei!V#ei#r#ei#t#ei#u#ei'j#ei(`#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O(g#ei~P#5YO(g#yO~P#5YOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO(QVO(g#yO^#ei!V#ei#t#ei#u#ei'j#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O(h#ei~P#7zO(h#zO~P#7zOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO(QVO(g#yO(h#zO~O^#ei!V#ei#u#ei'j#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~P#:lOPYXXYXkYXyYXzYX|YX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX!VYX!WYX~O#xYX~P#=VOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO#t<QO#u<RO(QVO(`$WO(g#yO(h#zO~O#x.iO~P#?dOP(VXX(VXk(VXy(VXz(VX|(VX!e(VX!f(VX!h(VX!l(VX#f(VX#g(VX#h(VX#i(VX#j(VX#k(VX#l(VX#m(VX#p(VX#r(VX#t(VX#u(VX(Q(VX(`(VX(g(VX(h(VX!V(VX~O#W<WO#z<WO#n(VX#x(VX!W(VX~P#AbO^'Xa!V'Xa'j'Xa'h'Xa!g'Xa!S'Xao'Xa!X'Xa%`'Xa!a'Xa~P!3jOP#eiX#ei^#eik#eiz#ei!V#ei!e#ei!f#ei!h#ei!l#ei#f#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(Q#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~P#(yO^#yi!V#yi'j#yi'h#yi!S#yi!g#yio#yi!X#yi%`#yi!a#yi~P!3jO$V.nO$X.nO~O$V.oO$X.oO~O!a)[O#W.pO!X$]X$S$]X$V$]X$X$]X$`$]X~O!U.qO~O!X)_O$S.sO$V)^O$X)^O$`.tO~O!V<SO!W(UX~P#?dO!W.uO~O!a)[O$`(iX~O$`.wO~Oq)nO(R)oO(S.zO~Ol.}O!S/OO'uTO'xUO~O!VcX!acX!gcX!g$rX(`cX~P!,aO!g/UO~P#(yO!V/VO!a#rO(`'dO!g(mX~O!g/[O~O!U*PO's%eO!g(mP~O#c/^O~O!S$rX!V$rX!a$yX~P!,aO!V/_O!S(nX~P#(yO!a/aO~O!S/cO~Ok/gO!a#rO!h%ZO'|%OO(`'dO~O's/iO~O!a+OO~O^%^O!V/mO'j%^O~O!W/oO~P!0_O!]/pO!^/pO't!iO(T!jO~O|/rO(T!jO~O#S/sO~O's%|Od'^X!V'^X~O!V*iOd'}a~Od/xO~Oy/yOz/yO|/zOgva(gva(hva!Vva#Wva~Odva#xva~P#M{Oy)sO|)tOg$ka(g$ka(h$ka!V$ka#W$ka~Od$ka#x$ka~P#NqOy)sO|)tOg$ma(g$ma(h$ma!V$ma#W$ma~Od$ma#x$ma~P$ dO#c/|O~Od${a!V${a#W${a#x${a~P!-jO#c0PO~Oy#vOz#wO|#xO!f#tO!h#uO(QVOP!niX!nik!ni!V!ni!e!ni!l!ni#f!ni#g!ni#h!ni#i!ni#j!ni#k!ni#l!ni#m!ni#n!ni#p!ni#r!ni#t!ni#u!ni(`!ni(g!ni(h!ni~O^!ni'j!ni'h!ni!S!ni!g!nio!ni!X!ni%`!ni!a!ni~P$!qOg.UO!X'QO%`.TO~Oi0WO's0VO~P!.[O!a+OO!X'{a^'{a!V'{a'j'{a~O#c0^O~OXYX!VcX!WcX~O!V0_O!W(uX~O!W0aO~OX0bO~O's+WO'uTO'xUO~O!X%nO's%eO]'fX!V'fX~O!V+]O](ta~O!g0gO~P!3jOX0jO~O]0kO~O!V+iO^(qa'j(qa~O#W0qO~Og0tO!X$yO~O(T(qO!W(rP~Og0}O!X0zO%`0|O'|%OO~OX1XO!V1VO!W(sX~O!W1YO~O]1[O^%^O'j%^O~O's#jO'uTO'xUO~O#W$bO#n1_O#z$bO&Q1`O^(VX~P#AbO#W$bO#n1_O&Q1`O~O^1aO~P%QO^1cO~O&Z1gOP&XiQ&XiV&Xi^&Xia&Xib&Xii&Xik&Xil&Xim&Xis&Xiu&Xiw&Xi|&Xi!Q&Xi!R&Xi!X&Xi!c&Xi!h&Xi!k&Xi!l&Xi!m&Xi!o&Xi!q&Xi!t&Xi!x&Xi#o&Xi$P&Xi$T&Xi%_&Xi%a&Xi%c&Xi%d&Xi%g&Xi%i&Xi%l&Xi%m&Xi%o&Xi%|&Xi&S&Xi&U&Xi&W&Xi&Y&Xi&]&Xi&c&Xi&i&Xi&k&Xi&m&Xi&o&Xi&q&Xi'h&Xi's&Xi'u&Xi'x&Xi(Q&Xi(_&Xi(l&Xi!W&Xi_&Xi&`&Xi~O_1mO!W1kO&`1lO~P`O!XXO!h1oO~O&g,fOP&biQ&biV&bi^&bia&bib&bii&bik&bil&bim&bis&biu&biw&bi|&bi!Q&bi!R&bi!X&bi!c&bi!h&bi!k&bi!l&bi!m&bi!o&bi!q&bi!t&bi!x&bi#o&bi$P&bi$T&bi%_&bi%a&bi%c&bi%d&bi%g&bi%i&bi%l&bi%m&bi%o&bi%|&bi&S&bi&U&bi&W&bi&Y&bi&]&bi&c&bi&i&bi&k&bi&m&bi&o&bi&q&bi'h&bi's&bi'u&bi'x&bi(Q&bi(_&bi(l&bi!W&bi&Z&bi_&bi&`&bi~O!S1uO~O!V!Za!W!Za~P#?dOl!kO|!lO!U1{O(T!jO!V&}X!W&}X~P?cO!V,vO!W(Xa~O!V'TX!W'TX~P!>RO!V,yO!W(fa~O!W2SO~P'TO^%^O#W2]O'j%^O~O^%^O!a#rO#W2]O'j%^O~O^%^O!a#rO!h%ZO!l2aO#W2]O'j%^O'|%OO(`'dO~O!]2bO!^2bO't!iO~PBtO![2eO!]2bO!^2bO#S2fO#T2fO't!iO~PBtO![2eO!]2bO!^2bO#P2gO#S2fO#T2fO't!iO~PBtO^%^O!a#rO!l2aO#W2]O'j%^O(`'dO~O^%^O'j%^O~P!3jO!V$^Oo$ja~O!S&|i!V&|i~P!3jO!V'xO!S(Wi~O!V(PO!S(di~O!S(ei!V(ei~P!3jO!V(]O!g(ai~O!V(bi!g(bi^(bi'j(bi~P!3jO#W2kO!V(bi!g(bi^(bi'j(bi~O|%vO!X%wO!x]O#a2nO#b2mO's%eO~O|%vO!X%wO#b2mO's%eO~Og2uO!X'QO%`2tO~Og2uO!X'QO%`2tO'|%OO~O#cvaPvaXva^vakva!eva!fva!hva!lva#fva#gva#hva#iva#jva#kva#lva#mva#nva#pva#rva#tva#uva'jva(Qva(`va!gva!Sva'hvaova!Xva%`va!ava~P#M{O#c$kaP$kaX$ka^$kak$kaz$ka!e$ka!f$ka!h$ka!l$ka#f$ka#g$ka#h$ka#i$ka#j$ka#k$ka#l$ka#m$ka#n$ka#p$ka#r$ka#t$ka#u$ka'j$ka(Q$ka(`$ka!g$ka!S$ka'h$kao$ka!X$ka%`$ka!a$ka~P#NqO#c$maP$maX$ma^$mak$maz$ma!e$ma!f$ma!h$ma!l$ma#f$ma#g$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#p$ma#r$ma#t$ma#u$ma'j$ma(Q$ma(`$ma!g$ma!S$ma'h$mao$ma!X$ma%`$ma!a$ma~P$ dO#c${aP${aX${a^${ak${az${a!V${a!e${a!f${a!h${a!l${a#f${a#g${a#h${a#i${a#j${a#k${a#l${a#m${a#n${a#p${a#r${a#t${a#u${a'j${a(Q${a(`${a!g${a!S${a'h${a#W${ao${a!X${a%`${a!a${a~P#(yO^#Zq!V#Zq'j#Zq'h#Zq!S#Zq!g#Zqo#Zq!X#Zq%`#Zq!a#Zq~P!3jOd'OX!V'OX~P!$uO!V._Od(Za~O!U2}O!V'PX!g'PX~P%QO!V.bO!g([a~O!V.bO!g([a~P!3jO!S3QO~O#x!ja!W!ja~PI{O#x!ba!V!ba!W!ba~P#?dO#x!na!W!na~P!6TO#x!pa!W!pa~P!8nO!X3dO$TfO$^3eO~O!W3iO~Oo3jO~P#(yO^$gq!V$gq'j$gq'h$gq!S$gq!g$gqo$gq!X$gq%`$gq!a$gq~P!3jO!S3kO~Ol.}O'uTO'xUO~Oy)sO|)tO(h)xOg%Wi(g%Wi!V%Wi#W%Wi~Od%Wi#x%Wi~P$HbOy)sO|)tOg%Yi(g%Yi(h%Yi!V%Yi#W%Yi~Od%Yi#x%Yi~P$ITO(`$WO~P#(yO!U3nO's%eO!V'YX!g'YX~O!V/VO!g(ma~O!V/VO!a#rO!g(ma~O!V/VO!a#rO(`'dO!g(ma~Od$ti!V$ti#W$ti#x$ti~P!-jO!U3vO's*UO!S'[X!V'[X~P!.XO!V/_O!S(na~O!V/_O!S(na~P#(yO!a#rO~O!a#rO#n4OO~Ok4RO!a#rO(`'dO~Od(Oi!V(Oi~P!-jO#W4UOd(Oi!V(Oi~P!-jO!g4XO~O^$hq!V$hq'j$hq'h$hq!S$hq!g$hqo$hq!X$hq%`$hq!a$hq~P!3jO!V4]O!X(oX~P#(yO!f#tO~P3zO!X$rX%TYX^$rX!V$rX'j$rX~P!,aO%T4_OghXyhX|hX!XhX(ghX(hhX^hX!VhX'jhX~O%T4_O~O%a4fO's+WO'uTO'xUO!V'eX!W'eX~O!V0_O!W(ua~OX4jO~O]4kO~O!S4oO~O^%^O'j%^O~P#(yO!X$yO~P#(yO!V4tO#W4vO!W(rX~O!W4wO~Ol!kO|4yO![5WO!]4}O!^4}O!x;oO!|5VO!}5UO#O5UO#P5TO#S5SO#T!wO't!iO'uTO'xUO(T!jO(_!nO~O!W5RO~P%#XOg5]O!X0zO%`5[O~Og5]O!X0zO%`5[O'|%OO~O's#jO!V'dX!W'dX~O!V1VO!W(sa~O'uTO'xUO(T5fO~O]5jO~O!g5mO~P%QO^5oO~O^5oO~P%QO#n5qO&Q5rO~PMPO_1mO!W5vO&`1lO~P`O!a5xO~O!a5zO!V(Yi!W(Yi!a(Yi!h(Yi'|(Yi~O!V#`i!W#`i~P#?dO#W5{O!V#`i!W#`i~O!V!Zi!W!Zi~P#?dO^%^O#W6UO'j%^O~O^%^O!a#rO#W6UO'j%^O~O^%^O!a#rO!l6ZO#W6UO'j%^O(`'dO~O!h%ZO'|%OO~P%(fO!]6[O!^6[O't!iO~PBtO![6_O!]6[O!^6[O#S6`O#T6`O't!iO~PBtO!V(]O!g(aq~O!V(bq!g(bq^(bq'j(bq~P!3jO|%vO!X%wO#b6dO's%eO~O!X'QO%`6gO~Og6jO!X'QO%`6gO~O#c%WiP%WiX%Wi^%Wik%Wiz%Wi!e%Wi!f%Wi!h%Wi!l%Wi#f%Wi#g%Wi#h%Wi#i%Wi#j%Wi#k%Wi#l%Wi#m%Wi#n%Wi#p%Wi#r%Wi#t%Wi#u%Wi'j%Wi(Q%Wi(`%Wi!g%Wi!S%Wi'h%Wio%Wi!X%Wi%`%Wi!a%Wi~P$HbO#c%YiP%YiX%Yi^%Yik%Yiz%Yi!e%Yi!f%Yi!h%Yi!l%Yi#f%Yi#g%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#p%Yi#r%Yi#t%Yi#u%Yi'j%Yi(Q%Yi(`%Yi!g%Yi!S%Yi'h%Yio%Yi!X%Yi%`%Yi!a%Yi~P$ITO#c$tiP$tiX$ti^$tik$tiz$ti!V$ti!e$ti!f$ti!h$ti!l$ti#f$ti#g$ti#h$ti#i$ti#j$ti#k$ti#l$ti#m$ti#n$ti#p$ti#r$ti#t$ti#u$ti'j$ti(Q$ti(`$ti!g$ti!S$ti'h$ti#W$tio$ti!X$ti%`$ti!a$ti~P#(yOd'Oa!V'Oa~P!-jO!V'Pa!g'Pa~P!3jO!V.bO!g([i~O#x#Zi!V#Zi!W#Zi~P#?dOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO(QVOX#eik#ei!e#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~O#f#ei~P%2xO#f;wO~P%2xOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO(QVOX#ei!e#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~Ok#ei~P%5TOk;yO~P%5TOP$YOk;yOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO(QVO#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~OX#ei!e#ei#k#ei#l#ei#m#ei#n#ei~P%7`OX<VO!e;{O#k;{O#l;{O#m<UO#n;{O~P%7`OP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O(QVO#r#ei#t#ei#u#ei#x#ei(`#ei(h#ei!V#ei!W#ei~O(g#ei~P%9zO(g#yO~P%9zOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO(QVO(g#yO#t#ei#u#ei#x#ei(`#ei!V#ei!W#ei~O(h#ei~P%<VO(h#zO~P%<VOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO#t<QO(QVO(g#yO(h#zO~O#u#ei#x#ei(`#ei!V#ei!W#ei~P%>bO^#vy!V#vy'j#vy'h#vy!S#vy!g#vyo#vy!X#vy%`#vy!a#vy~P!3jOg=jOy)sO|)tO(g)vO(h)xO~OP#eiX#eik#eiz#ei!e#ei!f#ei!h#ei!l#ei#f#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(Q#ei(`#ei!V#ei!W#ei~P%AYO!f#tOP(PXX(PXg(PXk(PXy(PXz(PX|(PX!e(PX!h(PX!l(PX#f(PX#g(PX#h(PX#i(PX#j(PX#k(PX#l(PX#m(PX#n(PX#p(PX#r(PX#t(PX#u(PX#x(PX(Q(PX(`(PX(g(PX(h(PX!V(PX!W(PX~O#x#yi!V#yi!W#yi~P#?dO#x!ni!W!ni~P$!qO!W6vO~O!V'Xa!W'Xa~P#?dO!a#rO(`'dO!V'Ya!g'Ya~O!V/VO!g(mi~O!V/VO!a#rO!g(mi~Od$tq!V$tq#W$tq#x$tq~P!-jO!S'[a!V'[a~P#(yO!a6}O~O!V/_O!S(ni~P#(yO!V/_O!S(ni~O!S7RO~O!a#rO#n7WO~Ok7XO!a#rO(`'dO~O!S7ZO~Od$vq!V$vq#W$vq#x$vq~P!-jO^$hy!V$hy'j$hy'h$hy!S$hy!g$hyo$hy!X$hy%`$hy!a$hy~P!3jO!V4]O!X(oa~O^#Zy!V#Zy'j#Zy'h#Zy!S#Zy!g#Zyo#Zy!X#Zy%`#Zy!a#Zy~P!3jOX7`O~O!V0_O!W(ui~O]7fO~O!a5zO~O(T(qO!V'aX!W'aX~O!V4tO!W(ra~O!h%ZO'|%OO^(YX!a(YX!l(YX#W(YX'j(YX(`(YX~O's7oO~P.[O!x;oO!|7rO!}7qO#O7qO#P7pO#S'bO#T'bO~PBtO^%^O!a#rO!l'hO#W'fO'j%^O(`'dO~O!W7vO~P%#XOl!kO'uTO'xUO(T!jO(_!nO~O|7wO~P%MdO![7{O!]7zO!^7zO#P7pO#S'bO#T'bO't!iO~PBtO![7{O!]7zO!^7zO!}7|O#O7|O#P7pO#S'bO#T'bO't!iO~PBtO!]7zO!^7zO't!iO(T!jO(_!nO~O!X0zO~O!X0zO%`8OO~Og8RO!X0zO%`8OO~OX8WO!V'da!W'da~O!V1VO!W(si~O!g8[O~O!g8]O~O!g8^O~O!g8^O~P%QO^8`O~O!a8cO~O!g8dO~O!V(ei!W(ei~P#?dO^%^O#W8lO'j%^O~O^%^O!a#rO#W8lO'j%^O~O^%^O!a#rO!l8pO#W8lO'j%^O(`'dO~O!h%ZO'|%OO~P&$QO!]8qO!^8qO't!iO~PBtO!V(]O!g(ay~O!V(by!g(by^(by'j(by~P!3jO!X'QO%`8uO~O#c$tqP$tqX$tq^$tqk$tqz$tq!V$tq!e$tq!f$tq!h$tq!l$tq#f$tq#g$tq#h$tq#i$tq#j$tq#k$tq#l$tq#m$tq#n$tq#p$tq#r$tq#t$tq#u$tq'j$tq(Q$tq(`$tq!g$tq!S$tq'h$tq#W$tqo$tq!X$tq%`$tq!a$tq~P#(yO#c$vqP$vqX$vq^$vqk$vqz$vq!V$vq!e$vq!f$vq!h$vq!l$vq#f$vq#g$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#p$vq#r$vq#t$vq#u$vq'j$vq(Q$vq(`$vq!g$vq!S$vq'h$vq#W$vqo$vq!X$vq%`$vq!a$vq~P#(yO!V'Pi!g'Pi~P!3jO#x#Zq!V#Zq!W#Zq~P#?dOy/yOz/yO|/zOPvaXvagvakva!eva!fva!hva!lva#fva#gva#hva#iva#jva#kva#lva#mva#nva#pva#rva#tva#uva#xva(Qva(`va(gva(hva!Vva!Wva~Oy)sO|)tOP$kaX$kag$kak$kaz$ka!e$ka!f$ka!h$ka!l$ka#f$ka#g$ka#h$ka#i$ka#j$ka#k$ka#l$ka#m$ka#n$ka#p$ka#r$ka#t$ka#u$ka#x$ka(Q$ka(`$ka(g$ka(h$ka!V$ka!W$ka~Oy)sO|)tOP$maX$mag$mak$maz$ma!e$ma!f$ma!h$ma!l$ma#f$ma#g$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#p$ma#r$ma#t$ma#u$ma#x$ma(Q$ma(`$ma(g$ma(h$ma!V$ma!W$ma~OP${aX${ak${az${a!e${a!f${a!h${a!l${a#f${a#g${a#h${a#i${a#j${a#k${a#l${a#m${a#n${a#p${a#r${a#t${a#u${a#x${a(Q${a(`${a!V${a!W${a~P%AYO#x$gq!V$gq!W$gq~P#?dO#x$hq!V$hq!W$hq~P#?dO!W9PO~O#x9QO~P!-jO!a#rO!V'Yi!g'Yi~O!a#rO(`'dO!V'Yi!g'Yi~O!V/VO!g(mq~O!S'[i!V'[i~P#(yO!V/_O!S(nq~O!S9WO~P#(yO!S9WO~Od(Oy!V(Oy~P!-jO!V'_a!X'_a~P#(yO!X%Sq^%Sq!V%Sq'j%Sq~P#(yOX9]O~O!V0_O!W(uq~O#W9aO!V'aa!W'aa~O!V4tO!W(ri~P#?dOPYXXYXkYXyYXzYX|YX!SYX!VYX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX~O!a%QX#n%QX~P&6lO#S-cO#T-cO~PBtO#P9eO#S-cO#T-cO~PBtO!}9fO#O9fO#P9eO#S-cO#T-cO~PBtO!]9iO!^9iO't!iO(T!jO(_!nO~O![9lO!]9iO!^9iO#P9eO#S-cO#T-cO't!iO~PBtO!X0zO%`9oO~O'uTO'xUO(T9tO~O!V1VO!W(sq~O!g9wO~O!g9wO~P%QO!g9yO~O!g9zO~O#W9|O!V#`y!W#`y~O!V#`y!W#`y~P#?dO^%^O#W:QO'j%^O~O^%^O!a#rO#W:QO'j%^O~O^%^O!a#rO!l:UO#W:QO'j%^O(`'dO~O!X'QO%`:XO~O#x#vy!V#vy!W#vy~P#?dOP$tiX$tik$tiz$ti!e$ti!f$ti!h$ti!l$ti#f$ti#g$ti#h$ti#i$ti#j$ti#k$ti#l$ti#m$ti#n$ti#p$ti#r$ti#t$ti#u$ti#x$ti(Q$ti(`$ti!V$ti!W$ti~P%AYOy)sO|)tO(h)xOP%WiX%Wig%Wik%Wiz%Wi!e%Wi!f%Wi!h%Wi!l%Wi#f%Wi#g%Wi#h%Wi#i%Wi#j%Wi#k%Wi#l%Wi#m%Wi#n%Wi#p%Wi#r%Wi#t%Wi#u%Wi#x%Wi(Q%Wi(`%Wi(g%Wi!V%Wi!W%Wi~Oy)sO|)tOP%YiX%Yig%Yik%Yiz%Yi!e%Yi!f%Yi!h%Yi!l%Yi#f%Yi#g%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#p%Yi#r%Yi#t%Yi#u%Yi#x%Yi(Q%Yi(`%Yi(g%Yi(h%Yi!V%Yi!W%Yi~O#x$hy!V$hy!W$hy~P#?dO#x#Zy!V#Zy!W#Zy~P#?dO!a#rO!V'Yq!g'Yq~O!V/VO!g(my~O!S'[q!V'[q~P#(yO!S:`O~P#(yO!V0_O!W(uy~O!V4tO!W(rq~O#S2fO#T2fO~PBtO#P:gO#S2fO#T2fO~PBtO!]:kO!^:kO't!iO(T!jO(_!nO~O!X0zO%`:nO~O!g:qO~O^%^O#W:vO'j%^O~O^%^O!a#rO#W:vO'j%^O~O!X'QO%`:{O~OP$tqX$tqk$tqz$tq!e$tq!f$tq!h$tq!l$tq#f$tq#g$tq#h$tq#i$tq#j$tq#k$tq#l$tq#m$tq#n$tq#p$tq#r$tq#t$tq#u$tq#x$tq(Q$tq(`$tq!V$tq!W$tq~P%AYOP$vqX$vqk$vqz$vq!e$vq!f$vq!h$vq!l$vq#f$vq#g$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#p$vq#r$vq#t$vq#u$vq#x$vq(Q$vq(`$vq!V$vq!W$vq~P%AYOd%[!Z!V%[!Z#W%[!Z#x%[!Z~P!-jO!V'aq!W'aq~P#?dO#S6`O#T6`O~PBtO!V#`!Z!W#`!Z~P#?dO^%^O#W;ZO'j%^O~O#c%[!ZP%[!ZX%[!Z^%[!Zk%[!Zz%[!Z!V%[!Z!e%[!Z!f%[!Z!h%[!Z!l%[!Z#f%[!Z#g%[!Z#h%[!Z#i%[!Z#j%[!Z#k%[!Z#l%[!Z#m%[!Z#n%[!Z#p%[!Z#r%[!Z#t%[!Z#u%[!Z'j%[!Z(Q%[!Z(`%[!Z!g%[!Z!S%[!Z'h%[!Z#W%[!Zo%[!Z!X%[!Z%`%[!Z!a%[!Z~P#(yOP%[!ZX%[!Zk%[!Zz%[!Z!e%[!Z!f%[!Z!h%[!Z!l%[!Z#f%[!Z#g%[!Z#h%[!Z#i%[!Z#j%[!Z#k%[!Z#l%[!Z#m%[!Z#n%[!Z#p%[!Z#r%[!Z#t%[!Z#u%[!Z#x%[!Z(Q%[!Z(`%[!Z!V%[!Z!W%[!Z~P%AYOo(UX~P1dO't!iO~P!'RO!ScX!VcX#WcX~P&6lOPYXXYXkYXyYXzYX|YX!VYX!VcX!eYX!fYX!hYX!lYX#WYX#WcX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX~O!acX!gYX!gcX(`cX~P'!sOP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!XXO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO's)RO'uTO'xUO(QVO(_[O(l=]O~O!V<SO!W$ja~Oi%POk$qOl$pOm$pOs%QOu%ROw<YO|$xO!X$yO!c=dO!h$uO#b<`O$P%VO$l<[O$n<^O$q%WO's(iO'uTO'xUO'|%OO(Q$rO~O#o)YO~P''iO!WYX!WcX~P'!sO#c;vO~O!a#rO#c;vO~O#W<WO~O#n;{O~O#W<bO!V(eX!W(eX~O#W<WO!V(cX!W(cX~O#c<cO~Od<eO~P!-jO#c<jO~O#c<kO~O!a#rO#c<lO~O!a#rO#c<cO~O#x<mO~P#?dO#c<nO~O#c<oO~O#c<pO~O#c<qO~O#c<rO~O#c<sO~O#x<tO~P!-jO#x<uO~P!-jO$T~!f!|#O#P#S#a#b#m(l$l$n$q%T%_%`%a%g%i%l%m%o%q~'nR$T(l#g!R'l't#hl#f#iky'm(T'm's$V$X$V~",
  goto: "$/X(yPPPP(zP(}P)_P+a/fPPPP6iPP7OP<|@mPAQPAQPPPAQPBpPAQPAQPAQPBtPPByPCdPH`PPPHdPPPPHdKfPPPKlMlPHdP!!SPPPP!$eHdPPPHdPHdP!&vHdP!*]!+_!+dP!,U!,Y!,UPPPP!/f!1kPP!1t!3OP!+_HdHd!6b!9m!>v!>v!BnPPP!BuHdPPPPPPPPPPP!FTP!GiPPHd!HyPHdPHdHdHdHdPHd!J`PP!MiP#!nP#!r#!|##Q##QP!MfP##U##UP#&ZP#&_HdHd#&e#)iAQPAQPAQAQP#*sAQAQ#,mAQ#.zAQ#0nAQAQ#1[#3W#3W#3[#3d#3W#3lP#3WPAQ#4hAQ#5pAQAQ6iPPP#6{PP#7e#7eP#7eP#7z#7ePP#8QP#7wP#7w#8d!1p#7w#9O#9U6f(}#9X(}P#9`#9`#9`P(}P(}P(}P(}PP(}P#9f#9iP#9i(}P#9mP#9pP(}P(}P(}P(}P(}P(}(}PP#9v#9|#:W#:^#:d#:j#:p#;O#;U#;[#;f#;l#<h#<w#<}#=a#=g#=m#={#>b#?r#@Q#@W#@^#@d#@j#@t#@z#AQ#A[#An#AtPPPPPPPPPP#AzPPPPPPP#Bn#FYP#Gu#G|#HUPPPP#L`$ U$'t$'w$'z$)w$)z$)}$*UPP$*[$*`$+X$,X$,]$,qPP$,u$,{$-PP$-S$-W$-Z$.P$.g$.l$.o$.r$.x$.{$/P$/TR!yRmpOXr!X#a%]&d&f&g&i,^,c1g1jU!pQ'Q-OQ%ctQ%kwQ%rzQ&[!TS&x!c,vQ'W!f[']!m!r!s!t!u!vS*[$y*aQ+U%lQ+c%tQ+}&UQ,|'PQ-W'XW-`'^'_'`'aQ/p*cQ1U,OU2b-b-d-eS4}0z5QS6[2e2gU7z5U5V5WQ8q6_S9i7{7|Q:k9lR<a;r%QdOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t+h,Y,^,c-S-[-o-x.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2}4y5]5o5q5r6U7w8R8`8l:Q:v;ZS#m];o!r)T$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q*l%SQ+Z%nQ,P&XQ,W&aQ.X<XQ0T*|Q0X+OQ0d+[Q1^,UQ2q.UQ4e0_Q5d1VQ6i2uQ6o<YQ7b4fR8x6j'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`#S!kQ!m!p!r!s!t!u!v!w&x'P'Q']'^'_'`'a'b,v,|-O-`-b-c-d-e0z2b2e2f2g4z5Q5S5T5U5V6[6_6`7p7q7r7|8q9e9f:g$Y$pi#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jQ%uzQ&v!cS&|%w,yQ+Z%nS.})t/PQ/{*pQ0d+[Q0i+bQ1],TQ1^,UQ4e0_Q4n0kQ5g1XQ5h1[Q7b4fQ7e4kQ8Z5jQ9`7fR9u8WpmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jR,R&]&x`OPXYrstux!X!^!g!l#P#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u'S'f'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=_=`[#YWZ#T#W&y'vQ%fvQ%jwS%oz%t!U%x|}#d#f#i%Z%v(P(W(X(]+f+g+i,[,p-s-v-z-{-}1o2m2n5z6dQ&Q!RQ'T!eQ'V!fQ(d#oS*O$u*SS+T%k%lQ+X%nQ+x&SQ+|&US-V'W'XQ.W(eQ/Z*PQ0]+UQ0c+[Q0e+]Q0h+aQ1P+yS1T+},OQ2X-WQ3m/VQ4d0_Q4h0bQ4m0jQ5c1UQ6z3nQ7a4fQ7d4jQ9[7`R:b9]v$wi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!`%hw!f!o%j%k%l&w'V'W'X'['i*Z+T+U,s-V-W-_-a/h0]2Q2X2`2d4Q6Y6^8o:TQ*}%fQ+n%}Q+q&OQ+{&UQ.V(dQ1O+xU1S+|+},OQ2v.WQ5^1PS5b1T1US7n4x4|Q8V5cU9g7s7x7yU:i9h9j9kQ;R:jQ;a;S!z=a#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jg=b<U<V<[<^<`<g<i<k<o<q<uW$|i%O*i=]S%}!O&ZQ&O!PQ&P!QR+l%{$Z${i#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jT)o$r)pV*m%S<X<YU&|!c%w,yS(r#v#wQ+`%qS.P(`(aQ0u+rQ4V/yR7j4t'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`$o$]c#V#b%a%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.j.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=ST#QV#R'PkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q&z!cR1|,v!z!kQ!c!m!p!r!s!t!u!v!w&x'P'Q']'^'_'`'a'b,v,|-O-`-b-c-d-e2b2e2f2g4z5S5T6[6_6`7p7q7r8q9e9f:gS*Z$y*aS/h*[*cQ/q*dQ0w+tQ4Q/pQ4T/sS4x0z5QS7s4}5WS7x5U5VS9h7z7{Q9j7|S:j9i9lR;S:klpOXr!X#a%]&d&f&g&i,^,c1g1jQ&k![Q'j!tS(f#q;vQ+R%iQ+v&QQ+w&RQ-T'UQ-g'cS.](k<cS0O*t<lQ0Z+SQ0y+uQ1n,eQ1p,fQ1x,qQ2V-UQ2Y-YS4[0P<rQ4`0[S4c0^<sQ5|1zQ6Q2WQ6V2_Q7_4aQ8g6OQ8h6RQ8k6WQ9{8dQ:P8mQ:u:RR;Y:w$j$[c#V#b%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=SS(c#l'ZU*f$z(j3aS*x%a.jQ2r0TQ6f2qQ8w6iR:Y8x$j$Zc#V#b%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=SS(b#l'ZS(t#w$[S*w%a.jS.Q(a(cQ.m)UQ0Q*xR2o.R'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`S#m];oQ&f!VQ&g!WQ&i!YQ&j!ZR1f,aQ'R!eQ*z%fQ-R'TS.S(d*}Q2T-QW2s.V.W0S0UQ6P2UU6e2p2r2vS8t6f6hS:W8v8wS:y:V:YQ;[:zR;e;]V!qQ'Q-O!_^OQXZ_r!T!X!m#a#d%Z%]&Z&]&d&f&g&i'Q(],^,c-O-z0z1g1j4z5QT#m];o%[yOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZS(r#v#wS.P(`(a!s<y$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`U!oQ'Q-OY'[!m!s!t!u!vS'i!p!rW'k!w4z5S5TS-_']'^U-a'_'`'aW-f'b7p7q7rS2`-`-bU2c-c9e9fS2d-d-eS4|0z5QS6Y2b2eS6]2f:gQ6^2gS7s4}5WS7y5U5VS8o6[6_Q8r6`S9h7z7{Q9k7|Q:T8qS:j9i9lR;S:kU!qQ'Q-OT5O0z5QU'h!o4{4|S([#e1dU-^'['k7yQ/Y*OQ/f*ZU2a-a-f9kQ3r/ZS3{/g/qS6Z2c2dQ6y3mS7U4R4TS8p6]6^Q9S6zQ9Z7XR:U8rQ#sbU'g!o4{4|S(Z#e1dQ*u%[Q+P%gQ+V%mW-]'['h'k7yQ-y([Q/X*OQ/e*ZQ/k*^Q0Y+QQ1Q+zW2^-^-a-f9kS3q/Y/ZS3z/f/qQ3}/jQ4P/lQ5`1RU6X2a2c2dQ6x3mQ6|3rS7Q3{4TQ7V4SQ8T5aU8n6Z6]6^S9R6y6zQ9V7RQ9X7UQ9c7mQ9r8US:S8p8rQ:^9SQ:_9WQ:a9ZQ:f9dQ:p9sQ:x:UQ:}:`Q;P:hQ;_;QQ;h;`Q;l;iQ<|<wQ=X=QR=Y=R%[aOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZS#sx!g!r<v$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`R<|=_%[bOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZQ%[j!`%gw!f!o%j%k%l&w'V'W'X'['i*Z+T+U,s-V-W-_-a/h0]2Q2X2`2d4Q6Y6^8o:TS%mx!gQ+Q%hQ+z&UW1R+{+|+},OU5a1S1T1US7m4x4|S8U5b5cW9d7n7s7x7yQ9s8VW:h9g9h9j9kS;Q:i:jS;`;R;SQ;i;a!r<w$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q=Q=^R=R=_%OeOPXYrstu!X!^!l#P#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZY#_WZ#T#W'v!U%x|}#d#f#i%Z%v(P(W(X(]+f+g+i,[,p-s-v-z-{-}1o2m2n5z6dQ,X&a!p<x$X$j)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`R<{&yS&}!c%wR2O,y%QdOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t+h,Y,^,c-S-[-o-x.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2}4y5]5o5q5r6U7w8R8`8l:Q:v;Z!r)T$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q,W&aQ0T*|Q2q.UQ6i2uR8x6j!l$Rc#V%a'u'{(g(n(})O)P)Q)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;p!T;})S)e,t.j1v1y3R3Z3[3]3^3b3h5}6n6s6t7l8f8y8}9O:d:r=S!h$Tc#V%a'u'{(g(n)P)Q)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;p!P<P)S)e,t.j1v1y3R3]3^3b3h5}6n6s6t7l8f8y8}9O:d:r=S!d$Xc#V%a'u'{(g(n)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;pQ3l/Tz=`)S)e,t.j1v1y3R3b3h5}6n6s6t7l8f8y8}9O:d:r=SQ=e=gR=f=h'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`S$kh$lR3e.p'VgOPWXYZhrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j$l%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.p.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`T$gf$mQ$efS)^$h)bR)j$mT$ff$mT)`$h)b'VhOPWXYZhrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j$l%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.p.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`T$kh$lQ$nhR)i$l%[jOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;Z!s=^$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`#alOPXZr!X!^!l#P#a#k#x$j%]&]&`&a&d&f&g&i&m&u'S(s)g*|+h,Y,^,c-S.U.q/z0}1_1`1a1c1g1j1l2u3d4y5]5o5q5r6j7w8R8`v$zi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!z(j#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jQ*q%WQ.|)sg3a<U<V<[<^<`<g<i<k<o<q<uv$vi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=fQ*T$wS*^$y*aQ*r%XQ/l*_!z=O#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jf=P<U<V<[<^<`<g<i<k<o<q<uQ=T=aQ=U=bQ=V=cR=W=dv$zi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!z(j#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jg3a<U<V<[<^<`<g<i<k<o<q<ulnOXr!X#a%]&d&f&g&i,^,c1g1jQ*W$xQ,l&pQ,m&rR3u/_$Y${i#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jQ+o&OQ0s+qQ4r0rR7i4sT*`$y*aS*`$y*aT5P0z5QS/j*]4yT4S/r7wQ+P%gQ/k*^Q0Y+QQ1Q+zQ5`1RQ8T5aQ9c7mQ9r8UQ:f9dQ:p9sQ;P:hQ;_;QQ;h;`R;l;in)w$s(l*s/]/t/u2z3s4Y6w7Y:]<}=Z=[!W<f(h)X)}*V.[.x/T/b0R0p0r2y3t3x4q4s6k6l7O7S7[7^9U9Y:|=g=h]<g3`6r8z:Z:[;fp)y$s(l*s/R/]/t/u2z3s4Y6w7Y:]<}=Z=[!Y<h(h)X)}*V.[.x/T/b0R0p0r2w2y3t3x4q4s6k6l7O7S7[7^9U9Y:|=g=h_<i3`6r8z8{:Z:[;fpmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jQ&W!SR,Y&apmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jR&W!SQ+s&PR0o+lqmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jQ0{+xS5Z1O1PU7}5X5Y5^S9n8P8QS:l9m9pQ;T:mR;b;UQ&_!TR,S&ZR5g1XS%oz%tR0e+]Q&d!UR,^&eR,d&jT1h,c1jR,h&kQ,g&kR1q,hQ'm!xR-i'mQrOQ#aXT%`r#aQ!{TR'o!{Q#OUR'q#OQ)p$rR.y)pQ#RVR's#RQ#UWU'y#U'z-pQ'z#VR-p'{Q,w&zR1},wQ.`(lR2{.`Q.c(nS3O.c3PR3P.dQ-O'QR2R-Or_OXr!T!X#a%]&Z&]&d&f&g&i,^,c1g1jU!mQ'Q-OS#dZ%ZY#n_!m#d-z4zQ-z(]T4z0z5QS#[W%vU(Q#[(R-qQ(R#]R-q'|Q,z&}R2P,zQ(^#gQ-t(VW.O(^-t2h6aQ2h-uR6a2iQ)b$hR.r)bQ$lhR)h$lQ$_cU)W$_-l<TQ-l;pR<T)eQ/W*OW3o/W3p6{9TU3p/X/Y/ZS6{3q3rR9T6|#m)u$s(h(l)X)}*V*n*o*s.Y.Z.[.x/R/S/T/]/b/t/u0R0p0r2w2x2y2z3`3s3t3x4Y4q4s6k6l6p6q6r6w7O7S7Y7[7^8z8{8|9U9Y:Z:[:]:|;f<}=Z=[=g=hQ/`*VU3w/`3y7PQ3y/bR7P3xQ*a$yR/n*aQ*j$}R/w*jQ4^0RR7]4^Q+j%yR0n+jQ4u0uS7k4u9bR9b7lQ+u&QR0x+uQ5Q0zR7u5QQ1W,PS5e1W8XR8X5gQ0`+XW4g0`4i7c9^Q4i0cQ7c4hR9^7dQ+^%oR0f+^Q1j,cR5u1jWqOXr#aQ&h!XQ*v%]Q,]&dQ,_&fQ,`&gQ,b&iQ1e,^S1h,c1jR5t1gQ%_oQ&l!]Q&o!_Q&q!`Q&s!aU'e!o4{4|Q+e%uQ+k%zQ,R&_Q,j&nY-Z'['g'h'k7yQ/m*`S1Z,S,VQ1r,iQ1s,lQ1t,m[2[-]-^-a-f-h9kQ4l0iQ4p0pQ5_1QQ5i1]Q5s1fY6S2Z2^2a2c2dQ7g4nQ7h4qQ7t5PQ8S5`Q8Y5hY8i6T6X6Z6]6^Q9_7eQ9q8TQ9v8ZW9}8j8n8p8rQ:c9`Q:e9cQ:o9rU:s:O:S:UQ;O:fQ;V:pS;W:t:xQ;^;PQ;c;XQ;g;_Q;j;dQ;k;hR;m;lQ%iwQ'U!fQ'c!oU+S%j%k%lQ,q&wU-U'V'W'XS-Y'['iQ/d*ZS0[+T+UQ1z,sS2W-V-WS2_-_-aQ3|/hQ4a0]Q6O2QQ6R2XS6W2`2dQ7T4QS8m6Y6^Q:R8oR:w:TS$ti=]R*k%OU$}i%O=]R/v*iQ$siS(h#r+OQ(l#tS)X$`$aQ)}$uQ*V$xQ*n%TQ*o%UQ*s%YQ.Y<ZQ.Z<]Q.[<_Q.x)nQ/R)wQ/S)yQ/T)zQ/]*RQ/b*XQ/t*gQ/u*hh0R*{.T0|2t5[6g8O8u9o:X:n:{Q0p+mQ0r+pQ2w<fQ2x<hQ2y<jQ2z._S3`<U<VQ3s/^Q3t/_Q3x/aQ4Y/|Q4q0qQ4s0tQ6k<nQ6l<pQ6p<[Q6q<^Q6r<`Q6w3lQ7O3vQ7S4OQ7Y4UQ7[4]Q7^4_Q8z<kQ8{<gQ8|<iQ9U6}Q9Y7WQ:Z<oQ:[<qQ:]9QQ:|<tQ;f<uQ<}=]Q=Z=eQ=[=fQ=g=iR=h=jloOXr!X#a%]&d&f&g&i,^,c1g1jQ!dPS#cZ#kQ&n!^U'Y!l4y7wQ'r#PQ(u#xQ)f$jS,V&]&`Q,Z&aQ,i&mQ,n&uQ-Q'SQ.f(sQ.v)gQ0U*|Q0l+hQ1b,YQ2U-SQ2r.UQ3g.qQ4W/zQ5Y0}Q5k1_Q5l1`Q5n1aQ5p1cQ5w1lQ6f2uQ6u3dQ8Q5]Q8_5oQ8a5qQ8b5rQ8w6jQ9p8RR9x8`#UcOPXZr!X!^!l#a#k#x%]&]&`&a&d&f&g&i&m&u'S(s*|+h,Y,^,c-S.U/z0}1_1`1a1c1g1j1l2u4y5]5o5q5r6j7w8R8`Q#VWQ#bYQ%asQ%btQ%duS'u#T'xQ'{#WQ(g#qQ(n#uQ(v#{Q(w#|Q(x#}Q(y$OQ(z$PQ({$QQ(|$RQ(}$SQ)O$TQ)P$UQ)Q$VQ)S$XQ)V$^Q)Z$bW)e$j)g.q3dQ*y%cQ+_%pS,t&y1{Q-h'fS-m'v-oQ-r(OQ-w(YQ.^(kQ.d(oQ.h;nQ.j;qQ.k;rQ.l;sQ.{)rQ/}*tQ1v,oQ1y,rQ2Z-[Q2j-xQ2|.bQ3R;vQ3S;wQ3T;xQ3U;yQ3V;zQ3W;{Q3X;|Q3Y;}Q3Z<OQ3[<PQ3]<QQ3^<RQ3_.iQ3b<WQ3c<aQ3h<SQ4Z0PQ4b0^Q5}<bQ6T2]Q6b2kQ6m2}Q6n<cQ6s<eQ6t<lQ7l4vQ8f5{Q8j6UQ8y<mQ8}<rQ9O<sQ:O8lQ:d9aQ:r9|Q:t:QQ;X:vQ;d;ZQ;p#PR=S=`R#XWR&{!cU!oQ'Q-OS&w!c,vY'[!m!s!t!u!vS'i!p!r['k!w4z5S5T5U5VS,s&x'PS-_']'^U-a'_'`'aY-f'b7p7q7r7|Q2Q,|S2`-`-bU2c-c9e9fS2d-d-eS4{0z5QS6Y2b2eS6]2f:gQ6^2gS8o6[6_Q8r6`R:T8qR(m#tR(p#uQ!dQT,}'Q-OQ#l]R'Z;oT#hZ%ZS#gZ%ZU%y|},[U(V#d#f#iS-u(W(XQ-|(]Q0m+iQ2i-vU2l-z-{-}S6c2m2nR8s6d`#ZW#T#W%v'v(P+f-st#eZ|}#d#f#i%Z(W(X(]+i-v-z-{-}2m2n6dQ1d,[Q1w,pQ5y1oQ8e5zT<z&y+gT#^W%vS#]W%vS'w#T(PS'|#W+fS,u&y+gT-n'v-sT'O!c%wQ$hfR)l$mT)a$h)bR3f.pT*Q$u*SR*Y$xQ0S*{Q2p.TQ5X0|Q6h2tQ8P5[Q8v6gQ9m8OQ:V8uQ:m9oQ:z:XQ;U:nR;]:{lpOXr!X#a%]&d&f&g&i,^,c1g1jQ&^!TR,R&ZV%z|},[R0v+rR,Q&XQ%szR+d%tR+Y%nT&b!U&eT&c!U&eT1i,c1j",
  nodeNames: "⚠ ArithOp ArithOp LineComment BlockComment Script ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 362,
  context: fC,
  nodeProps: [
    ["group", -26, 6, 14, 16, 62, 198, 202, 205, 206, 208, 211, 214, 225, 227, 233, 235, 237, 239, 242, 248, 254, 256, 258, 260, 262, 264, 265, "Statement", -32, 10, 11, 25, 28, 29, 35, 45, 48, 49, 51, 56, 64, 72, 76, 78, 80, 81, 102, 103, 112, 113, 130, 133, 135, 136, 137, 138, 140, 141, 161, 162, 164, "Expression", -23, 24, 26, 30, 34, 36, 38, 165, 167, 169, 170, 172, 173, 174, 176, 177, 178, 180, 181, 182, 192, 194, 196, 197, "Type", -3, 84, 95, 101, "ClassItem"],
    ["openedBy", 31, "InterpolationStart", 50, "[", 54, "{", 69, "(", 142, "JSXStartTag", 154, "JSXStartTag JSXStartCloseTag"],
    ["closedBy", 33, "InterpolationEnd", 44, "]", 55, "}", 70, ")", 143, "JSXSelfCloseEndTag JSXEndTag", 159, "JSXEndTag"]
  ],
  propSources: [pC],
  skippedNodes: [0, 3, 4, 268],
  repeatNodeCount: 32,
  tokenData: "$>y(CSR!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tu>PuvBavwDxwxGgxyMvyz! Qz{!![{|!%O|}!&]}!O!%O!O!P!'g!P!Q!1w!Q!R#0t!R![#3T![!]#@T!]!^#Aa!^!_#Bk!_!`#GS!`!a#In!a!b#N{!b!c$$z!c!}>P!}#O$&U#O#P$'`#P#Q$,w#Q#R$.R#R#S>P#S#T$/`#T#o$0j#o#p$4z#p#q$5p#q#r$7Q#r#s$8^#s$f%Z$f$g+g$g#BY>P#BY#BZ$9h#BZ$IS>P$IS$I_$9h$I_$I|>P$I|$I}$<s$I}$JO$<s$JO$JT>P$JT$JU$9h$JU$KV>P$KV$KW$9h$KW&FU>P&FU&FV$9h&FV;'S>P;'S;=`BZ<%l?HT>P?HT?HU$9h?HUO>P(n%d_$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$c&j'y!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU'y!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$c&j'vpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU'vpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z(CS+rq$c&j'vp'y!b'l(;dOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z(CS.ST'w#S$c&j'm(;dO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c(CS.n_$c&j'vp'y!b'm(;dOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`/x`$c&j!l$Ip'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S1V`#p$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S2d_#p$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2b3l_'u$(n$c&j'y!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k*r4r_$c&j'y!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k)`5vX$c&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q)`6jT$^#t$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#t6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y#t7bO$^#t#t7eP;=`<%l6y)`7kP;=`<%l5q*r7w]$^#t$c&j'y!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}%W8uZ'y!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p%W9oU$^#t'y!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}%W:UP;=`<%l8p*r:[P;=`<%l4k#%|:hg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}st%Ztu<Puw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}<P!}#O%Z#O#P&c#P#R%Z#R#S<P#S#T%Z#T#o<P#o#p*g#p$g%Z$g;'S<P;'S;=`=y<%lO<P#%|<[i$c&j(_!L^'vp'y!bOY%ZYZ&cZr%Zrs&}st%Ztu<Puw%Zwx(rx!Q%Z!Q![<P![!^%Z!^!_*g!_!c%Z!c!}<P!}#O%Z#O#P&c#P#R%Z#R#S<P#S#T%Z#T#o<P#o#p*g#p$g%Z$g;'S<P;'S;=`=y<%lO<P#%|=|P;=`<%l<P(CS>`k$c&j'vp'y!b(T!LY's&;d$V#tOY%ZYZ&cZr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$g%Z$g;'S>P;'S;=`BZ<%lO>P+d@`k$c&j'vp'y!b$V#tOY%ZYZ&cZr%Zrs&}st%Ztu@Tuw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![@T![!^%Z!^!_*g!_!c%Z!c!}@T!}#O%Z#O#P&c#P#R%Z#R#S@T#S#T%Z#T#o@T#o#p*g#p$g%Z$g;'S@T;'S;=`BT<%lO@T+dBWP;=`<%l@T(CSB^P;=`<%l>P%#SBl`$c&j'vp'y!b#h$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SCy_$c&j#z$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%DfETa(h%<v$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sv%ZvwFYwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SFe`$c&j#t$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2bGp_'x$)`$c&j'vpOYHoYZIuZrHorsIuswHowxKVx!^Ho!^!_LX!_#OHo#O#PIu#P#oHo#o#pLX#p;'SHo;'S;=`Mp<%lOHo*QHv_$c&j'vpOYHoYZIuZrHorsIuswHowxKVx!^Ho!^!_LX!_#OHo#O#PIu#P#oHo#o#pLX#p;'SHo;'S;=`Mp<%lOHo)`IzX$c&jOwIuwx6cx!^Iu!^!_Jg!_#oIu#o#pJg#p;'SIu;'S;=`KP<%lOIu#tJjTOwJgwx7]x;'SJg;'S;=`Jy<%lOJg#tJ|P;=`<%lJg)`KSP;=`<%lIu*QK`]$^#t$c&j'vpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r$fL^Z'vpOYLXYZJgZrLXrsJgswLXwxMPx#OLX#O#PJg#P;'SLX;'S;=`Mj<%lOLX$fMWU$^#t'vpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r$fMmP;=`<%lLX*QMsP;=`<%lHo(*QNR_!h(!b$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'l! ]_!gM|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h!!ib$c&j'vp'y!b't#)d#i$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!#q{!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S!#|`$c&j'vp'y!b#f$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&-O!%Z`$c&j'vp'y!bk&%`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&C[!&h_!V&;l$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!'rc$c&j'vp'y!by'<nOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!(}!P!Q%Z!Q![!+g![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!)Wa$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!*]!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!*h_!UMt$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!+rg$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!+g![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S!+g#S#X%Z#X#Y!-Z#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!-dg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!.{|}%Z}!O!.{!O!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!/Uc$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!0lc$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!2Sf$c&j'vp'y!b#g$IdOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}xz!3hz{#$s{!P!3h!P!Q#&Y!Q!^!3h!^!_!Mh!_!`#-x!`!a#/_!a!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(r!3sb$c&j'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(Q!5U`$c&j'y!b!RSOY!4{YZ&cZw!4{wx!6Wx!P!4{!P!Q!=o!Q!^!4{!^!_!?g!_!}!4{!}#O!Bn#O#P!<w#P#o!4{#o#p!?g#p;'S!4{;'S;=`!Cw<%lO!4{&n!6_^$c&j!RSOY!6WYZ&cZ!P!6W!P!Q!7Z!Q!^!6W!^!_!8g!_!}!6W!}#O!;U#O#P!<w#P#o!6W#o#p!8g#p;'S!6W;'S;=`!=i<%lO!6W&n!7ba$c&j!RSO!^&c!_#Z&c#Z#[!7Z#[#]&c#]#^!7Z#^#a&c#a#b!7Z#b#g&c#g#h!7Z#h#i&c#i#j!7Z#j#m&c#m#n!7Z#n#o&c#p;'S&c;'S;=`&w<%lO&cS!8lX!RSOY!8gZ!P!8g!P!Q!9X!Q!}!8g!}#O!9p#O#P!:o#P;'S!8g;'S;=`!;O<%lO!8gS!9^U!RS#Z#[!9X#]#^!9X#a#b!9X#g#h!9X#i#j!9X#m#n!9XS!9sVOY!9pZ#O!9p#O#P!:Y#P#Q!8g#Q;'S!9p;'S;=`!:i<%lO!9pS!:]SOY!9pZ;'S!9p;'S;=`!:i<%lO!9pS!:lP;=`<%l!9pS!:rSOY!8gZ;'S!8g;'S;=`!;O<%lO!8gS!;RP;=`<%l!8g&n!;Z[$c&jOY!;UYZ&cZ!^!;U!^!_!9p!_#O!;U#O#P!<P#P#Q!6W#Q#o!;U#o#p!9p#p;'S!;U;'S;=`!<q<%lO!;U&n!<UX$c&jOY!;UYZ&cZ!^!;U!^!_!9p!_#o!;U#o#p!9p#p;'S!;U;'S;=`!<q<%lO!;U&n!<tP;=`<%l!;U&n!<|X$c&jOY!6WYZ&cZ!^!6W!^!_!8g!_#o!6W#o#p!8g#p;'S!6W;'S;=`!=i<%lO!6W&n!=lP;=`<%l!6W(Q!=xi$c&j'y!b!RSOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#Z&}#Z#[!=o#[#]&}#]#^!=o#^#a&}#a#b!=o#b#g&}#g#h!=o#h#i&}#i#j!=o#j#m&}#m#n!=o#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!f!?nZ'y!b!RSOY!?gZw!?gwx!8gx!P!?g!P!Q!@a!Q!}!?g!}#O!Ap#O#P!:o#P;'S!?g;'S;=`!Bh<%lO!?g!f!@hb'y!b!RSOY'}Zw'}x#O'}#P#Z'}#Z#[!@a#[#]'}#]#^!@a#^#a'}#a#b!@a#b#g'}#g#h!@a#h#i'}#i#j!@a#j#m'}#m#n!@a#n;'S'};'S;=`(f<%lO'}!f!AuX'y!bOY!ApZw!Apwx!9px#O!Ap#O#P!:Y#P#Q!?g#Q;'S!Ap;'S;=`!Bb<%lO!Ap!f!BeP;=`<%l!Ap!f!BkP;=`<%l!?g(Q!Bu^$c&j'y!bOY!BnYZ&cZw!Bnwx!;Ux!^!Bn!^!_!Ap!_#O!Bn#O#P!<P#P#Q!4{#Q#o!Bn#o#p!Ap#p;'S!Bn;'S;=`!Cq<%lO!Bn(Q!CtP;=`<%l!Bn(Q!CzP;=`<%l!4{'`!DW`$c&j'vp!RSOY!C}YZ&cZr!C}rs!6Ws!P!C}!P!Q!EY!Q!^!C}!^!_!GQ!_!}!C}!}#O!JX#O#P!<w#P#o!C}#o#p!GQ#p;'S!C};'S;=`!Kb<%lO!C}'`!Eci$c&j'vp!RSOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#Z(r#Z#[!EY#[#](r#]#^!EY#^#a(r#a#b!EY#b#g(r#g#h!EY#h#i(r#i#j!EY#j#m(r#m#n!EY#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rt!GXZ'vp!RSOY!GQZr!GQrs!8gs!P!GQ!P!Q!Gz!Q!}!GQ!}#O!IZ#O#P!:o#P;'S!GQ;'S;=`!JR<%lO!GQt!HRb'vp!RSOY)rZr)rs#O)r#P#Z)r#Z#[!Gz#[#])r#]#^!Gz#^#a)r#a#b!Gz#b#g)r#g#h!Gz#h#i)r#i#j!Gz#j#m)r#m#n!Gz#n;'S)r;'S;=`*Z<%lO)rt!I`X'vpOY!IZZr!IZrs!9ps#O!IZ#O#P!:Y#P#Q!GQ#Q;'S!IZ;'S;=`!I{<%lO!IZt!JOP;=`<%l!IZt!JUP;=`<%l!GQ'`!J`^$c&j'vpOY!JXYZ&cZr!JXrs!;Us!^!JX!^!_!IZ!_#O!JX#O#P!<P#P#Q!C}#Q#o!JX#o#p!IZ#p;'S!JX;'S;=`!K[<%lO!JX'`!K_P;=`<%l!JX'`!KeP;=`<%l!C}(r!Ksk$c&j'vp'y!b!RSOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#Z%Z#Z#[!Kh#[#]%Z#]#^!Kh#^#a%Z#a#b!Kh#b#g%Z#g#h!Kh#h#i%Z#i#j!Kh#j#m%Z#m#n!Kh#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#W!Mq]'vp'y!b!RSOY!MhZr!Mhrs!?gsw!Mhwx!GQx!P!Mh!P!Q!Nj!Q!}!Mh!}#O#!U#O#P!:o#P;'S!Mh;'S;=`##U<%lO!Mh#W!Nse'vp'y!b!RSOY*gZr*grs'}sw*gwx)rx#O*g#P#Z*g#Z#[!Nj#[#]*g#]#^!Nj#^#a*g#a#b!Nj#b#g*g#g#h!Nj#h#i*g#i#j!Nj#j#m*g#m#n!Nj#n;'S*g;'S;=`+Z<%lO*g#W#!]Z'vp'y!bOY#!UZr#!Urs!Apsw#!Uwx!IZx#O#!U#O#P!:Y#P#Q!Mh#Q;'S#!U;'S;=`##O<%lO#!U#W##RP;=`<%l#!U#W##XP;=`<%l!Mh(r##e`$c&j'vp'y!bOY##[YZ&cZr##[rs!Bnsw##[wx!JXx!^##[!^!_#!U!_#O##[#O#P!<P#P#Q!3h#Q#o##[#o#p#!U#p;'S##[;'S;=`#$g<%lO##[(r#$jP;=`<%l##[(r#$pP;=`<%l!3h(CS#%Qb$c&j'vp'y!b'n(;d!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(CS#&e_$c&j'vp'y!bR(;dOY#&YYZ&cZr#&Yrs#'dsw#&Ywx#*tx!^#&Y!^!_#,s!_#O#&Y#O#P#(f#P#o#&Y#o#p#,s#p;'S#&Y;'S;=`#-r<%lO#&Y(Bb#'m]$c&j'y!bR(;dOY#'dYZ&cZw#'dwx#(fx!^#'d!^!_#)w!_#O#'d#O#P#(f#P#o#'d#o#p#)w#p;'S#'d;'S;=`#*n<%lO#'d(AO#(mX$c&jR(;dOY#(fYZ&cZ!^#(f!^!_#)Y!_#o#(f#o#p#)Y#p;'S#(f;'S;=`#)q<%lO#(f(;d#)_SR(;dOY#)YZ;'S#)Y;'S;=`#)k<%lO#)Y(;d#)nP;=`<%l#)Y(AO#)tP;=`<%l#(f(<v#*OW'y!bR(;dOY#)wZw#)wwx#)Yx#O#)w#O#P#)Y#P;'S#)w;'S;=`#*h<%lO#)w(<v#*kP;=`<%l#)w(Bb#*qP;=`<%l#'d(Ap#*}]$c&j'vpR(;dOY#*tYZ&cZr#*trs#(fs!^#*t!^!_#+v!_#O#*t#O#P#(f#P#o#*t#o#p#+v#p;'S#*t;'S;=`#,m<%lO#*t(<U#+}W'vpR(;dOY#+vZr#+vrs#)Ys#O#+v#O#P#)Y#P;'S#+v;'S;=`#,g<%lO#+v(<U#,jP;=`<%l#+v(Ap#,pP;=`<%l#*t(=h#,|Y'vp'y!bR(;dOY#,sZr#,srs#)wsw#,swx#+vx#O#,s#O#P#)Y#P;'S#,s;'S;=`#-l<%lO#,s(=h#-oP;=`<%l#,s(CS#-uP;=`<%l#&Y%#W#.Vb$c&j#z$Id'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h+h#/lb$S#t$c&j'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h$/l#1Pp$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!+g!P!Q%Z!Q![#3T![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S#3T#S#U%Z#U#V#6_#V#X%Z#X#Y!-Z#Y#b%Z#b#c#5T#c#d#9g#d#l%Z#l#m#<i#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#3`k$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!+g!P!Q%Z!Q![#3T![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S#3T#S#X%Z#X#Y!-Z#Y#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#5`_$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#6hd$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#7v!R!S#7v!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#7v#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#8Rf$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#7v!R!S#7v!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#7v#S#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#9pc$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#:{!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#:{#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#;We$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#:{!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#:{#S#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#<rg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#>Z![!^%Z!^!_*g!_!c%Z!c!i#>Z!i#O%Z#O#P&c#P#R%Z#R#S#>Z#S#T%Z#T#Z#>Z#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#>fi$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#>Z![!^%Z!^!_*g!_!c%Z!c!i#>Z!i#O%Z#O#P&c#P#R%Z#R#S#>Z#S#T%Z#T#Z#>Z#Z#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#@b_!a$b$c&j#x%<f'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Al_^l$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS#Bz^'|!*v!e'.r'vp'y!b$T)d(lSOY*gZr*grs'}sw*gwx)rx!P*g!P!Q#Cv!Q!^*g!^!_#Dl!_!`#F^!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#DPX$e&j'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#DuZ#j$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Eh!`#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#EqX#z$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#FgX#k$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Gh#G_a#W%?x$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a#Hd!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#W#Ho_#c$Ih$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#I}adBf#k$Id$`#|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`#KS!`!a#L^!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#K__#k$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#Lia#j$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`!a#Mn!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#My`#j$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h$ Wc(`$Ip$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P$!c!P!^%Z!^!_*g!_!a%Z!a!b$#m!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+`$!n_z'#p$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$#x`$c&j#u$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&^$%V_!x!Ln$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(@^$&a_|(8n$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$'eZ$c&jO!^$(W!^!_$(n!_#i$(W#i#j$(s#j#l$(W#l#m$*f#m#o$(W#o#p$(n#p;'S$(W;'S;=`$,q<%lO$(W(n$(_T[#S$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$(sO[#S(n$(x[$c&jO!Q&c!Q![$)n![!^&c!_!c&c!c!i$)n!i#T&c#T#Z$)n#Z#o&c#o#p$,U#p;'S&c;'S;=`&w<%lO&c(n$)sZ$c&jO!Q&c!Q![$*f![!^&c!_!c&c!c!i$*f!i#T&c#T#Z$*f#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$*kZ$c&jO!Q&c!Q![$+^![!^&c!_!c&c!c!i$+^!i#T&c#T#Z$+^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$+cZ$c&jO!Q&c!Q![$(W![!^&c!_!c&c!c!i$(W!i#T&c#T#Z$(W#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$,XR!Q![$,b!c!i$,b#T#Z$,b#S$,eS!Q![$,b!c!i$,b#T#Z$,b#q#r$(n(n$,tP;=`<%l$(W!'l$-S_!SM|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$.^`#r$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&,v$/k_$c&j'vp'y!b(Q&%WOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$0yk$c&j'vp'y!b(T!LY's&;d$X#tOY%ZYZ&cZr%Zrs&}st%Ztu$0juw%Zwx(rx}%Z}!O$2n!O!Q%Z!Q![$0j![!^%Z!^!_*g!_!c%Z!c!}$0j!}#O%Z#O#P&c#P#R%Z#R#S$0j#S#T%Z#T#o$0j#o#p*g#p$g%Z$g;'S$0j;'S;=`$4t<%lO$0j+d$2yk$c&j'vp'y!b$X#tOY%ZYZ&cZr%Zrs&}st%Ztu$2nuw%Zwx(rx}%Z}!O$2n!O!Q%Z!Q![$2n![!^%Z!^!_*g!_!c%Z!c!}$2n!}#O%Z#O#P&c#P#R%Z#R#S$2n#S#T%Z#T#o$2n#o#p*g#p$g%Z$g;'S$2n;'S;=`$4n<%lO$2n+d$4qP;=`<%l$2n(CS$4wP;=`<%l$0j!5p$5TX!X!3l'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Df$5{a(g%<v$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$#m#q;'S%Z;'S;=`+a<%lO%Z%#`$7__!W$I`o`$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(r$8i_!mS$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$9y|$c&j'vp'y!b'l(;d(T!LY's&;d$V#tOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$f%Z$f$g+g$g#BY>P#BY#BZ$9h#BZ$IS>P$IS$I_$9h$I_$JT>P$JT$JU$9h$JU$KV>P$KV$KW$9h$KW&FU>P&FU&FV$9h&FV;'S>P;'S;=`BZ<%l?HT>P?HT?HU$9h?HUO>P(CS$=Uk$c&j'vp'y!b'm(;d(T!LY's&;d$V#tOY%ZYZ&cZr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$g%Z$g;'S>P;'S;=`BZ<%lO>P",
  tokenizers: [dC, OC, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, uC, new Yc("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOq~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!O~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(S~~", 141, 325), new Yc("j~RQYZXz{^~^O'p~~aP!P!Qd~iO'q~~", 25, 307)],
  topRules: { Script: [0, 5], SingleExpression: [1, 266], SingleClassItem: [2, 267] },
  dialects: { jsx: 13213, ts: 13215 },
  dynamicPrecedences: { 76: 1, 78: 1, 162: 1, 190: 1 },
  specialized: [{ term: 311, get: (i) => mC[i] || -1 }, { term: 327, get: (i) => gC[i] || -1 }, { term: 67, get: (i) => bC[i] || -1 }],
  tokenPrec: 13238
});
class Q0 {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, n) {
    this.state = e, this.pos = t, this.explicit = n, this.abortListeners = [];
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = Xe(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), r = t.text.slice(n - t.from, this.pos - t.from), s = r.search(x0(e, !1));
    return s < 0 ? null : { from: n + s, to: this.pos, text: r.slice(s) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  */
  addEventListener(e, t) {
    e == "abort" && this.abortListeners && this.abortListeners.push(t);
  }
}
function Bd(i) {
  let e = Object.keys(i).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function yC(i) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of i) {
    e[r[0]] = !0;
    for (let s = 1; s < r.length; s++)
      t[r[s]] = !0;
  }
  let n = Bd(e) + Bd(t) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function v0(i) {
  let e = i.map((r) => typeof r == "string" ? { label: r } : r), [t, n] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : yC(e);
  return (r) => {
    let s = r.matchBefore(n);
    return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null;
  };
}
function QC(i, e) {
  return (t) => {
    for (let n = Xe(t.state).resolveInner(t.pos, -1); n; n = n.parent)
      if (i.indexOf(n.name) > -1)
        return null;
    return e(t);
  };
}
class Ld {
  constructor(e, t, n) {
    this.completion = e, this.source = t, this.match = n;
  }
}
function Zi(i) {
  return i.selection.main.head;
}
function x0(i, e) {
  var t;
  let { source: n } = i, r = e && n[0] != "^", s = n[n.length - 1] != "$";
  return !r && !s ? i : new RegExp(`${r ? "^" : ""}(?:${n})${s ? "$" : ""}`, (t = i.flags) !== null && t !== void 0 ? t : i.ignoreCase ? "i" : "");
}
const vC = /* @__PURE__ */ zi.define();
function xC(i, e, t, n) {
  return Object.assign(Object.assign({}, i.changeByRange((r) => {
    if (r == i.selection.main)
      return {
        changes: { from: t, to: n, insert: e },
        range: v.cursor(t + e.length)
      };
    let s = n - t;
    return !r.empty || s && i.sliceDoc(r.from - s, r.from) != i.sliceDoc(t, n) ? { range: r } : {
      changes: { from: r.from - s, to: r.from, insert: e },
      range: v.cursor(r.from - s + e.length)
    };
  })), { userEvent: "input.complete" });
}
function w0(i, e) {
  const t = e.completion.apply || e.completion.label;
  let n = e.source;
  typeof t == "string" ? i.dispatch(Object.assign(Object.assign({}, xC(i.state, t, n.from, n.to)), { annotations: vC.of(e.completion) })) : t(i, e.completion, n.from, n.to);
}
const zd = /* @__PURE__ */ new WeakMap();
function wC(i) {
  if (!Array.isArray(i))
    return i;
  let e = zd.get(i);
  return e || zd.set(i, e = v0(i)), e;
}
class $C {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [];
    for (let t = 0; t < e.length; ) {
      let n = Le(e, t), r = yt(n);
      this.chars.push(n);
      let s = e.slice(t, t + r), o = s.toUpperCase();
      this.folded.push(Le(o == s ? s.toLowerCase() : o, 0)), t += r;
    }
    this.astral = e.length != this.chars.length;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return null for no match, and otherwise an array that starts
  // with the match score, followed by any number of `from, to` pairs
  // indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(e) {
    if (this.pattern.length == 0)
      return [0];
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: n, any: r, precise: s, byWord: o } = this;
    if (t.length == 1) {
      let P = Le(e, 0);
      return P == t[0] ? [0, 0, yt(P)] : P == n[0] ? [-200, 0, yt(P)] : null;
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return [0, 0, this.pattern.length];
    let a = t.length, c = 0;
    if (l < 0) {
      for (let P = 0, C = Math.min(e.length, 200); P < C && c < a; ) {
        let x = Le(e, P);
        (x == t[c] || x == n[c]) && (r[c++] = P), P += yt(x);
      }
      if (c < a)
        return null;
    }
    let h = 0, f = 0, u = !1, d = 0, O = -1, m = -1, b = /[a-z]/.test(e), y = !0;
    for (let P = 0, C = Math.min(e.length, 200), x = 0; P < C && f < a; ) {
      let T = Le(e, P);
      l < 0 && (h < a && T == t[h] && (s[h++] = P), d < a && (T == t[d] || T == n[d] ? (d == 0 && (O = P), m = P + 1, d++) : d = 0));
      let R, G = T < 255 ? T >= 48 && T <= 57 || T >= 97 && T <= 122 ? 2 : T >= 65 && T <= 90 ? 1 : 0 : (R = wh(T)) != R.toLowerCase() ? 1 : R != R.toUpperCase() ? 2 : 0;
      (!P || G == 1 && b || x == 0 && G != 0) && (t[f] == T || n[f] == T && (u = !0) ? o[f++] = P : o.length && (y = !1)), x = G, P += yt(T);
    }
    return f == a && o[0] == 0 && y ? this.result(-100 + (u ? -200 : 0), o, e) : d == a && O == 0 ? [-200 - e.length, 0, m] : l > -1 ? [-700 - e.length, l, l + this.pattern.length] : d == a ? [-200 + -700 - e.length, O, m] : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (y ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
  }
  result(e, t, n) {
    let r = [e - n.length], s = 1;
    for (let o of t) {
      let l = o + (this.astral ? yt(Le(n, o)) : 1);
      s > 1 && r[s - 1] == o ? r[s - 1] = l : (r[s++] = o, r[s++] = l);
    }
    return r;
  }
}
const Tt = /* @__PURE__ */ j.define({
  combine(i) {
    return ri(i, {
      activateOnTyping: !0,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (n) => Gd(e(n), t(n)),
      optionClass: (e, t) => (n) => Gd(e(n), t(n)),
      addToOptions: (e, t) => e.concat(t)
    });
  }
});
function Gd(i, e) {
  return i ? e ? i + " " + e : i : e;
}
function PC(i) {
  let e = i.addToOptions.slice();
  return i.icons && e.push({
    render(t) {
      let n = document.createElement("div");
      return n.classList.add("cm-completionIcon"), t.type && n.classList.add(...t.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), n.setAttribute("aria-hidden", "true"), n;
    },
    position: 20
  }), e.push({
    render(t, n, r) {
      let s = document.createElement("span");
      s.className = "cm-completionLabel";
      let { label: o } = t, l = 0;
      for (let a = 1; a < r.length; ) {
        let c = r[a++], h = r[a++];
        c > l && s.appendChild(document.createTextNode(o.slice(l, c)));
        let f = s.appendChild(document.createElement("span"));
        f.appendChild(document.createTextNode(o.slice(c, h))), f.className = "cm-completionMatchedText", l = h;
      }
      return l < o.length && s.appendChild(document.createTextNode(o.slice(l))), s;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let n = document.createElement("span");
      return n.className = "cm-completionDetail", n.textContent = t.detail, n;
    },
    position: 80
  }), e.sort((t, n) => t.position - n.position).map((t) => t.render);
}
function Fd(i, e, t) {
  if (i <= t)
    return { from: 0, to: i };
  if (e < 0 && (e = 0), e <= i >> 1) {
    let r = Math.floor(e / t);
    return { from: r * t, to: (r + 1) * t };
  }
  let n = Math.floor((i - e) / t);
  return { from: i - (n + 1) * t, to: i - n * t };
}
class kC {
  constructor(e, t) {
    this.view = e, this.stateField = t, this.info = null, this.placeInfo = {
      read: () => this.measureInfo(),
      write: (l) => this.positionInfo(l),
      key: this
    }, this.space = null, this.currentClass = "";
    let n = e.state.field(t), { options: r, selected: s } = n.open, o = e.state.facet(Tt);
    this.optionContent = PC(o), this.optionClass = o.optionClass, this.tooltipClass = o.tooltipClass, this.range = Fd(r.length, s, o.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (l) => {
      for (let a = l.target, c; a && a != this.dom; a = a.parentNode)
        if (a.nodeName == "LI" && (c = /-(\d+)$/.exec(a.id)) && +c[1] < r.length) {
          w0(e, r[+c[1]]), l.preventDefault();
          return;
        }
    }), this.list = this.dom.appendChild(this.createListBox(r, n.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfo);
    });
  }
  mount() {
    this.updateSel();
  }
  update(e) {
    var t, n, r;
    let s = e.state.field(this.stateField), o = e.startState.field(this.stateField);
    this.updateTooltipClass(e.state), s != o && (this.updateSel(), ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) != ((n = o.open) === null || n === void 0 ? void 0 : n.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!(!((r = s.open) === null || r === void 0) && r.disabled)));
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let n of this.currentClass.split(" "))
        n && this.dom.classList.remove(n);
      for (let n of t.split(" "))
        n && this.dom.classList.add(n);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfo);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Fd(t.options.length, t.selected, this.view.state.facet(Tt).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t.options, e.id, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfo);
    })), this.updateSelectedOption(t.selected)) {
      this.info && (this.info.remove(), this.info = null);
      let { completion: n } = t.options[t.selected], { info: r } = n;
      if (!r)
        return;
      let s = typeof r == "string" ? document.createTextNode(r) : r(n);
      if (!s)
        return;
      "then" in s ? s.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o);
      }).catch((o) => xt(this.view.state, o, "completion info")) : this.addInfoPane(s);
    }
  }
  addInfoPane(e) {
    let t = this.info = document.createElement("div");
    t.className = "cm-tooltip cm-completionInfo", t.appendChild(e), this.dom.appendChild(t), this.view.requestMeasure(this.placeInfo);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++)
      r == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && n.removeAttribute("aria-selected");
    return t && TC(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let O = this.dom.ownerDocument.defaultView || window;
      s = { left: 0, top: 0, right: O.innerWidth, bottom: O.innerHeight };
    }
    if (r.top > Math.min(s.bottom, t.bottom) - 10 || r.bottom < Math.max(s.top, t.top) + 10)
      return null;
    let o = this.view.textDirection == Te.RTL, l = o, a = !1, c, h = "", f = "", u = t.left - s.left, d = s.right - t.right;
    if (l && u < Math.min(n.width, d) ? l = !1 : !l && d < Math.min(n.width, u) && (l = !0), n.width <= (l ? u : d))
      h = Math.max(s.top, Math.min(r.top, s.bottom - n.height)) - t.top + "px", c = Math.min(400, l ? u : d) + "px";
    else {
      a = !0, c = Math.min(
        400,
        (o ? t.right : s.right - t.left) - 30
        /* Info.Margin */
      ) + "px";
      let O = s.bottom - t.bottom;
      O >= n.height || O > t.top ? h = r.bottom - t.top + "px" : f = t.bottom - r.top + "px";
    }
    return {
      top: h,
      bottom: f,
      maxWidth: c,
      class: a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right"
    };
  }
  positionInfo(e) {
    this.info && (e ? (this.info.style.top = e.top, this.info.style.bottom = e.bottom, this.info.style.maxWidth = e.maxWidth, this.info.className = "cm-tooltip cm-completionInfo cm-completionInfo-" + e.class) : this.info.style.top = "-1e6px");
  }
  createListBox(e, t, n) {
    const r = document.createElement("ul");
    r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions"));
    for (let s = n.from; s < n.to; s++) {
      let { completion: o, match: l } = e[s];
      const a = r.appendChild(document.createElement("li"));
      a.id = t + "-" + s, a.setAttribute("role", "option");
      let c = this.optionClass(o);
      c && (a.className = c);
      for (let h of this.optionContent) {
        let f = h(o, this.view.state, l);
        f && a.appendChild(f);
      }
    }
    return n.from && r.classList.add("cm-completionListIncompleteTop"), n.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
  }
}
function CC(i) {
  return (e) => new kC(e, i);
}
function TC(i, e) {
  let t = i.getBoundingClientRect(), n = e.getBoundingClientRect();
  n.top < t.top ? i.scrollTop -= t.top - n.top : n.bottom > t.bottom && (i.scrollTop += n.bottom - t.bottom);
}
function Hd(i) {
  return (i.boost || 0) * 100 + (i.apply ? 10 : 0) + (i.info ? 5 : 0) + (i.type ? 1 : 0);
}
function _C(i, e) {
  let t = [], n = 0;
  for (let l of i)
    if (l.hasResult())
      if (l.result.filter === !1) {
        let a = l.result.getMatch;
        for (let c of l.result.options) {
          let h = [1e9 - n++];
          if (a)
            for (let f of a(c))
              h.push(f);
          t.push(new Ld(c, l, h));
        }
      } else {
        let a = new $C(e.sliceDoc(l.from, l.to)), c;
        for (let h of l.result.options)
          (c = a.match(h.label)) && (h.boost != null && (c[0] += h.boost), t.push(new Ld(h, l, c)));
      }
  let r = [], s = null, o = e.facet(Tt).compareCompletions;
  for (let l of t.sort((a, c) => c.match[0] - a.match[0] || o(a.completion, c.completion)))
    !s || s.label != l.completion.label || s.detail != l.completion.detail || s.type != null && l.completion.type != null && s.type != l.completion.type || s.apply != l.completion.apply ? r.push(l) : Hd(l.completion) > Hd(s) && (r[r.length - 1] = l), s = l.completion;
  return r;
}
class Wn {
  constructor(e, t, n, r, s, o) {
    this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = r, this.selected = s, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Wn(this.options, Kd(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, n, r, s) {
    let o = _C(e, t);
    if (!o.length)
      return r && e.some(
        (a) => a.state == 1
        /* State.Pending */
      ) ? new Wn(r.options, r.attrs, r.tooltip, r.timestamp, r.selected, !0) : null;
    let l = t.facet(Tt).selectOnOpen ? 0 : -1;
    if (r && r.selected != l && r.selected != -1) {
      let a = r.options[r.selected].completion;
      for (let c = 0; c < o.length; c++)
        if (o[c].completion == a) {
          l = c;
          break;
        }
    }
    return new Wn(o, Kd(n, l), {
      pos: e.reduce((a, c) => c.hasResult() ? Math.min(a, c.from) : a, 1e8),
      create: CC($t),
      above: s.aboveCursor
    }, r ? r.timestamp : Date.now(), l, !1);
  }
  map(e) {
    return new Wn(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class Jo {
  constructor(e, t, n) {
    this.active = e, this.id = t, this.open = n;
  }
  static start() {
    return new Jo(VC, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, n = t.facet(Tt), s = (n.override || t.languageDataAt("autocomplete", Zi(t)).map(wC)).map((l) => (this.active.find((c) => c.source == l) || new ut(
      l,
      this.active.some(
        (c) => c.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, n));
    s.length == this.active.length && s.every((l, a) => l == this.active[a]) && (s = this.active);
    let o = this.open;
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) || !XC(s, this.active) ? o = Wn.build(s, t, this.id, o, n) : o && o.disabled && !s.some(
      (l) => l.state == 1
      /* State.Pending */
    ) && (o = null), !o && s.every(
      (l) => l.state != 1
      /* State.Pending */
    ) && s.some((l) => l.hasResult()) && (s = s.map((l) => l.hasResult() ? new ut(
      l.source,
      0
      /* State.Inactive */
    ) : l));
    for (let l of e.effects)
      l.is(P0) && (o = o && o.setSelected(l.value, this.id));
    return s == this.active && o == this.open ? this : new Jo(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : AC;
  }
}
function XC(i, e) {
  if (i == e)
    return !0;
  for (let t = 0, n = 0; ; ) {
    for (; t < i.length && !i[t].hasResult; )
      t++;
    for (; n < e.length && !e[n].hasResult; )
      n++;
    let r = t == i.length, s = n == e.length;
    if (r || s)
      return r == s;
    if (i[t++].result != e[n++].result)
      return !1;
  }
}
const AC = {
  "aria-autocomplete": "list"
};
function Kd(i, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i
  };
  return e > -1 && (t["aria-activedescendant"] = i + "-" + e), t;
}
const VC = [];
function Ic(i) {
  return i.isUserEvent("input.type") ? "input" : i.isUserEvent("delete.backward") ? "delete" : null;
}
class ut {
  constructor(e, t, n = -1) {
    this.source = e, this.state = t, this.explicitPos = n;
  }
  hasResult() {
    return !1;
  }
  update(e, t) {
    let n = Ic(e), r = this;
    n ? r = r.handleUserEvent(e, n, t) : e.docChanged ? r = r.handleChange(e) : e.selection && r.state != 0 && (r = new ut(
      r.source,
      0
      /* State.Inactive */
    ));
    for (let s of e.effects)
      if (s.is(Lh))
        r = new ut(r.source, 1, s.value ? Zi(e.state) : -1);
      else if (s.is(el))
        r = new ut(
          r.source,
          0
          /* State.Inactive */
        );
      else if (s.is($0))
        for (let o of s.value)
          o.source == r.source && (r = o);
    return r;
  }
  handleUserEvent(e, t, n) {
    return t == "delete" || !n.activateOnTyping ? this.map(e.changes) : new ut(
      this.source,
      1
      /* State.Pending */
    );
  }
  handleChange(e) {
    return e.changes.touchesRange(Zi(e.startState)) ? new ut(
      this.source,
      0
      /* State.Inactive */
    ) : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new ut(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class Dr extends ut {
  constructor(e, t, n, r, s) {
    super(e, 2, t), this.result = n, this.from = r, this.to = s;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, t, n) {
    var r;
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = Zi(e.state);
    if ((this.explicitPos < 0 ? l <= s : l < this.from) || l > o || t == "delete" && Zi(e.startState) == this.from)
      return new ut(
        this.source,
        t == "input" && n.activateOnTyping ? 1 : 0
        /* State.Inactive */
      );
    let a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos), c;
    return EC(this.result.validFor, e.state, s, o) ? new Dr(this.source, a, this.result, s, o) : this.result.update && (c = this.result.update(this.result, s, o, new Q0(e.state, l, a >= 0))) ? new Dr(this.source, a, c, c.from, (r = c.to) !== null && r !== void 0 ? r : Zi(e.state)) : new ut(this.source, 1, a);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new ut(
      this.source,
      0
      /* State.Inactive */
    ) : this.map(e.changes);
  }
  map(e) {
    return e.empty ? this : new Dr(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1));
  }
}
function EC(i, e, t, n) {
  if (!i)
    return !1;
  let r = e.sliceDoc(t, n);
  return typeof i == "function" ? i(r, t, n, e) : x0(i, !0).test(r);
}
const Lh = /* @__PURE__ */ ne.define(), el = /* @__PURE__ */ ne.define(), $0 = /* @__PURE__ */ ne.define({
  map(i, e) {
    return i.map((t) => t.map(e));
  }
}), P0 = /* @__PURE__ */ ne.define(), $t = /* @__PURE__ */ qe.define({
  create() {
    return Jo.start();
  },
  update(i, e) {
    return i.update(e);
  },
  provide: (i) => [
    Eh.from(i, (e) => e.tooltip),
    U.contentAttributes.from(i, (e) => e.attrs)
  ]
});
function Ls(i, e = "option") {
  return (t) => {
    let n = t.state.field($t, !1);
    if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < t.state.facet(Tt).interactionDelay)
      return !1;
    let r = 1, s;
    e == "page" && (s = Ow(t, n.open.tooltip)) && (r = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = n.open.options, l = n.open.selected > -1 ? n.open.selected + r * (i ? 1 : -1) : i ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: P0.of(l) }), !0;
  };
}
const ZC = (i) => {
  let e = i.state.field($t, !1);
  return i.state.readOnly || !e || !e.open || e.open.selected < 0 || Date.now() - e.open.timestamp < i.state.facet(Tt).interactionDelay ? !1 : (e.open.disabled || w0(i, e.open.options[e.open.selected]), !0);
}, RC = (i) => i.state.field($t, !1) ? (i.dispatch({ effects: Lh.of(!0) }), !0) : !1, DC = (i) => {
  let e = i.state.field($t, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (i.dispatch({ effects: el.of(null) }), !0);
};
class WC {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Jd = 50, NC = 50, MC = 1e3, YC = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.view = i, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
    for (let e of i.state.field($t).active)
      e.state == 1 && this.startQuery(e);
  }
  update(i) {
    let e = i.state.field($t);
    if (!i.selectionSet && !i.docChanged && i.startState.field($t) == e)
      return;
    let t = i.transactions.some((n) => (n.selection || n.docChanged) && !Ic(n));
    for (let n = 0; n < this.running.length; n++) {
      let r = this.running[n];
      if (t || r.updates.length + i.transactions.length > NC && Date.now() - r.time > MC) {
        for (let s of r.context.abortListeners)
          try {
            s();
          } catch (o) {
            xt(this.view.state, o);
          }
        r.context.abortListeners = null, this.running.splice(n--, 1);
      } else
        r.updates.push(...i.transactions);
    }
    if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((n) => n.state == 1 && !this.running.some((r) => r.active.source == n.source)) ? setTimeout(() => this.startUpdate(), Jd) : -1, this.composing != 0)
      for (let n of i.transactions)
        Ic(n) == "input" ? this.composing = 2 : this.composing == 2 && n.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    let { state: i } = this.view, e = i.field($t);
    for (let t of e.active)
      t.state == 1 && !this.running.some((n) => n.active.source == t.source) && this.startQuery(t);
  }
  startQuery(i) {
    let { state: e } = this.view, t = Zi(e), n = new Q0(e, t, i.explicitPos == t), r = new WC(i, n);
    this.running.push(r), Promise.resolve(i.source(n)).then((s) => {
      r.context.aborted || (r.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: el.of(null) }), xt(this.view.state, s);
    });
  }
  scheduleAccept() {
    this.running.every((i) => i.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), Jd));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var i;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(Tt);
    for (let n = 0; n < this.running.length; n++) {
      let r = this.running[n];
      if (r.done === void 0)
        continue;
      if (this.running.splice(n--, 1), r.done) {
        let o = new Dr(r.active.source, r.active.explicitPos, r.done, r.done.from, (i = r.done.to) !== null && i !== void 0 ? i : Zi(r.updates.length ? r.updates[0].startState : this.view.state));
        for (let l of r.updates)
          o = o.update(l, t);
        if (o.hasResult()) {
          e.push(o);
          continue;
        }
      }
      let s = this.view.state.field($t).active.find((o) => o.source == r.active.source);
      if (s && s.state == 1)
        if (r.done == null) {
          let o = new ut(
            r.active.source,
            0
            /* State.Inactive */
          );
          for (let l of r.updates)
            o = o.update(l, t);
          o.state != 1 && e.push(o);
        } else
          this.startQuery(s);
    }
    e.length && this.view.dispatch({ effects: $0.of(e) });
  }
}, {
  eventHandlers: {
    blur() {
      let i = this.view.state.field($t, !1);
      i && i.tooltip && this.view.state.facet(Tt).closeOnBlur && this.view.dispatch({ effects: el.of(null) });
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Lh.of(!1) }), 20), this.composing = 0;
    }
  }
}), k0 = /* @__PURE__ */ U.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer",
        padding: "1px 3px",
        lineHeight: 1.2
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: `${400}px`,
    boxSizing: "border-box"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: `${30}px` },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: `${30}px` },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
});
class jC {
  constructor(e, t, n, r) {
    this.field = e, this.line = t, this.from = n, this.to = r;
  }
}
class zh {
  constructor(e, t, n) {
    this.field = e, this.from = t, this.to = n;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, Ge.TrackDel), n = e.mapPos(this.to, 1, Ge.TrackDel);
    return t == null || n == null ? null : new zh(this.field, t, n);
  }
}
class Gh {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let n = [], r = [t], s = e.doc.lineAt(t), o = /^\s*/.exec(s.text)[0];
    for (let a of this.lines) {
      if (n.length) {
        let c = o, h = /^\t*/.exec(a)[0].length;
        for (let f = 0; f < h; f++)
          c += e.facet(_l);
        r.push(t + c.length - h), a = c + a.slice(h);
      }
      n.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new zh(a.field, r[a.line] + a.from, r[a.line] + a.to));
    return { text: n, ranges: l };
  }
  static parse(e) {
    let t = [], n = [], r = [], s;
    for (let o of e.split(/\r\n?|\n/)) {
      for (; s = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(o); ) {
        let l = s[1] ? +s[1] : null, a = s[2] || s[3] || "", c = -1;
        for (let h = 0; h < t.length; h++)
          (l != null ? t[h].seq == l : a && t[h].name == a) && (c = h);
        if (c < 0) {
          let h = 0;
          for (; h < t.length && (l == null || t[h].seq != null && t[h].seq < l); )
            h++;
          t.splice(h, 0, { seq: l, name: a }), c = h;
          for (let f of r)
            f.field >= c && f.field++;
        }
        r.push(new jC(c, n.length, s.index, s.index + a.length)), o = o.slice(0, s.index) + a + o.slice(s.index + s[0].length);
      }
      for (let l; l = /\\([{}])/.exec(o); ) {
        o = o.slice(0, l.index) + l[1] + o.slice(l.index + l[0].length);
        for (let a of r)
          a.line == n.length && a.from > l.index && (a.from--, a.to--);
      }
      n.push(o);
    }
    return new Gh(n, r);
  }
}
let UC = /* @__PURE__ */ L.widget({ widget: /* @__PURE__ */ new class extends gi {
  toDOM() {
    let i = document.createElement("span");
    return i.className = "cm-snippetFieldPosition", i;
  }
  ignoreEvent() {
    return !1;
  }
}() }), IC = /* @__PURE__ */ L.mark({ class: "cm-snippetField" });
class hr {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = L.set(e.map((n) => (n.from == n.to ? UC : IC).range(n.from, n.to)));
  }
  map(e) {
    let t = [];
    for (let n of this.ranges) {
      let r = n.map(e);
      if (!r)
        return null;
      t.push(r);
    }
    return new hr(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((n) => n.field == this.active && n.from <= t.from && n.to >= t.to));
  }
}
const ys = /* @__PURE__ */ ne.define({
  map(i, e) {
    return i && i.map(e);
  }
}), qC = /* @__PURE__ */ ne.define(), ns = /* @__PURE__ */ qe.define({
  create() {
    return null;
  },
  update(i, e) {
    for (let t of e.effects) {
      if (t.is(ys))
        return t.value;
      if (t.is(qC) && i)
        return new hr(i.ranges, t.value);
    }
    return i && e.docChanged && (i = i.map(e.changes)), i && e.selection && !i.selectionInsideField(e.selection) && (i = null), i;
  },
  provide: (i) => U.decorations.from(i, (e) => e ? e.deco : L.none)
});
function Fh(i, e) {
  return v.create(i.filter((t) => t.field == e).map((t) => v.range(t.from, t.to)));
}
function BC(i) {
  let e = Gh.parse(i);
  return (t, n, r, s) => {
    let { text: o, ranges: l } = e.instantiate(t.state, r), a = {
      changes: { from: r, to: s, insert: de.of(o) },
      scrollIntoView: !0
    };
    if (l.length && (a.selection = Fh(l, 0)), l.length > 1) {
      let c = new hr(l, 0), h = a.effects = [ys.of(c)];
      t.state.field(ns, !1) === void 0 && h.push(ne.appendConfig.of([ns, HC, KC, k0]));
    }
    t.dispatch(t.state.update(a));
  };
}
function C0(i) {
  return ({ state: e, dispatch: t }) => {
    let n = e.field(ns, !1);
    if (!n || i < 0 && n.active == 0)
      return !1;
    let r = n.active + i, s = i > 0 && !n.ranges.some((o) => o.field == r + i);
    return t(e.update({
      selection: Fh(n.ranges, r),
      effects: ys.of(s ? null : new hr(n.ranges, r))
    })), !0;
  };
}
const LC = ({ state: i, dispatch: e }) => i.field(ns, !1) ? (e(i.update({ effects: ys.of(null) })), !0) : !1, zC = /* @__PURE__ */ C0(1), GC = /* @__PURE__ */ C0(-1), FC = [
  { key: "Tab", run: zC, shift: GC },
  { key: "Escape", run: LC }
], eO = /* @__PURE__ */ j.define({
  combine(i) {
    return i.length ? i[0] : FC;
  }
}), HC = /* @__PURE__ */ $n.highest(/* @__PURE__ */ gs.compute([eO], (i) => i.facet(eO)));
function Et(i, e) {
  return Object.assign(Object.assign({}, e), { apply: BC(i) });
}
const KC = /* @__PURE__ */ U.domEventHandlers({
  mousedown(i, e) {
    let t = e.state.field(ns, !1), n;
    if (!t || (n = e.posAtCoords({ x: i.clientX, y: i.clientY })) == null)
      return !1;
    let r = t.ranges.find((s) => s.from <= n && s.to >= n);
    return !r || r.field == t.active ? !1 : (e.dispatch({
      selection: Fh(t.ranges, r.field),
      effects: ys.of(t.ranges.some((s) => s.field > r.field) ? new hr(t.ranges, r.field) : null)
    }), !0);
  }
}), rs = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, cn = /* @__PURE__ */ ne.define({
  map(i, e) {
    let t = e.mapPos(i, -1, Ge.TrackAfter);
    return t ?? void 0;
  }
}), Hh = /* @__PURE__ */ ne.define({
  map(i, e) {
    return e.mapPos(i);
  }
}), Kh = /* @__PURE__ */ new class extends Sn {
}();
Kh.startSide = 1;
Kh.endSide = -1;
const T0 = /* @__PURE__ */ qe.define({
  create() {
    return pe.empty;
  },
  update(i, e) {
    if (e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head).from, n = e.startState.doc.lineAt(e.startState.selection.main.head).from;
      t != e.changes.mapPos(n, -1) && (i = pe.empty);
    }
    i = i.map(e.changes);
    for (let t of e.effects)
      t.is(cn) ? i = i.update({ add: [Kh.range(t.value, t.value + 1)] }) : t.is(Hh) && (i = i.update({ filter: (n) => n != t.value }));
    return i;
  }
});
function JC() {
  return [tT, T0];
}
const wa = "()[]{}<>";
function _0(i) {
  for (let e = 0; e < wa.length; e += 2)
    if (wa.charCodeAt(e) == i)
      return wa.charAt(e + 1);
  return wh(i < 128 ? i : i + 1);
}
function X0(i, e) {
  return i.languageDataAt("closeBrackets", e)[0] || rs;
}
const eT = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), tT = /* @__PURE__ */ U.inputHandler.of((i, e, t, n) => {
  if ((eT ? i.composing : i.compositionStarted) || i.state.readOnly)
    return !1;
  let r = i.state.selection.main;
  if (n.length > 2 || n.length == 2 && yt(Le(n, 0)) == 1 || e != r.from || t != r.to)
    return !1;
  let s = rT(i.state, n);
  return s ? (i.dispatch(s), !0) : !1;
}), iT = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let n = X0(i, i.selection.main.head).brackets || rs.brackets, r = null, s = i.changeByRange((o) => {
    if (o.empty) {
      let l = sT(i.doc, o.head);
      for (let a of n)
        if (a == l && Yl(i.doc, o.head) == _0(Le(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: v.cursor(o.head - a.length)
          };
    }
    return { range: r = o };
  });
  return r || e(i.update(s, { scrollIntoView: !0, userEvent: "delete.backward" })), !r;
}, nT = [
  { key: "Backspace", run: iT }
];
function rT(i, e) {
  let t = X0(i, i.selection.main.head), n = t.brackets || rs.brackets;
  for (let r of n) {
    let s = _0(Le(r, 0));
    if (e == r)
      return s == r ? aT(i, r, n.indexOf(r + r + r) > -1, t) : oT(i, r, s, t.before || rs.before);
    if (e == s && A0(i, i.selection.main.from))
      return lT(i, r, s);
  }
  return null;
}
function A0(i, e) {
  let t = !1;
  return i.field(T0).between(0, i.doc.length, (n) => {
    n == e && (t = !0);
  }), t;
}
function Yl(i, e) {
  let t = i.sliceString(e, e + 2);
  return t.slice(0, yt(Le(t, 0)));
}
function sT(i, e) {
  let t = i.sliceString(e - 2, e);
  return yt(Le(t, 0)) == t.length ? t : t.slice(1);
}
function oT(i, e, t, n) {
  let r = null, s = i.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: cn.of(o.to + e.length),
        range: v.range(o.anchor + e.length, o.head + e.length)
      };
    let l = Yl(i.doc, o.head);
    return !l || /\s/.test(l) || n.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: cn.of(o.head + e.length),
      range: v.cursor(o.head + e.length)
    } : { range: r = o };
  });
  return r ? null : i.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function lT(i, e, t) {
  let n = null, r = i.selection.ranges.map((s) => s.empty && Yl(i.doc, s.head) == t ? v.cursor(s.head + t.length) : n = s);
  return n ? null : i.update({
    selection: v.create(r, i.selection.mainIndex),
    scrollIntoView: !0,
    effects: i.selection.ranges.map(({ from: s }) => Hh.of(s))
  });
}
function aT(i, e, t, n) {
  let r = n.stringPrefixes || rs.stringPrefixes, s = null, o = i.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: cn.of(l.to + e.length),
        range: v.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, c = Yl(i.doc, a), h;
    if (c == e) {
      if (tO(i, a))
        return {
          changes: { insert: e + e, from: a },
          effects: cn.of(a + e.length),
          range: v.cursor(a + e.length)
        };
      if (A0(i, a)) {
        let f = t && i.sliceDoc(a, a + e.length * 3) == e + e + e;
        return {
          range: v.cursor(a + e.length * (f ? 3 : 1)),
          effects: Hh.of(a)
        };
      }
    } else {
      if (t && i.sliceDoc(a - 2 * e.length, a) == e + e && (h = iO(i, a - 2 * e.length, r)) > -1 && tO(i, h))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: cn.of(a + e.length),
          range: v.cursor(a + e.length)
        };
      if (i.charCategorizer(a)(c) != $e.Word && iO(i, a, r) > -1 && !cT(i, a, e, r))
        return {
          changes: { insert: e + e, from: a },
          effects: cn.of(a + e.length),
          range: v.cursor(a + e.length)
        };
    }
    return { range: s = l };
  });
  return s ? null : i.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function tO(i, e) {
  let t = Xe(i).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function cT(i, e, t, n) {
  let r = Xe(i).resolveInner(e, -1), s = n.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = i.sliceDoc(r.from, Math.min(r.to, r.from + t.length + s)), a = l.indexOf(t);
    if (!a || a > -1 && n.indexOf(l.slice(0, a)) > -1) {
      let h = r.firstChild;
      for (; h && h.from == r.from && h.to - h.from > t.length + a; ) {
        if (i.sliceDoc(h.to - t.length, h.to) == t)
          return !1;
        h = h.firstChild;
      }
      return !0;
    }
    let c = r.to == e && r.parent;
    if (!c)
      break;
    r = c;
  }
  return !1;
}
function iO(i, e, t) {
  let n = i.charCategorizer(e);
  if (n(i.sliceDoc(e - 1, e)) != $e.Word)
    return e;
  for (let r of t) {
    let s = e - r.length;
    if (i.sliceDoc(s, e) == r && n(i.sliceDoc(s - 1, s)) != $e.Word)
      return s;
  }
  return -1;
}
function hT(i = {}) {
  return [
    $t,
    Tt.of(i),
    YC,
    fT,
    k0
  ];
}
const V0 = [
  { key: "Ctrl-Space", run: RC },
  { key: "Escape", run: DC },
  { key: "ArrowDown", run: /* @__PURE__ */ Ls(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Ls(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Ls(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Ls(!1, "page") },
  { key: "Enter", run: ZC }
], fT = /* @__PURE__ */ $n.highest(/* @__PURE__ */ gs.computeN([Tt], (i) => i.facet(Tt).defaultKeymap ? [V0] : [])), uT = [
  /* @__PURE__ */ Et("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Et("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Et("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Et("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Et("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Et(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ Et("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ Et(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ Et(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Et('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ Et('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], nO = /* @__PURE__ */ new Aw(), E0 = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function Qr(i) {
  return (e, t) => {
    let n = e.node.getChild("VariableDefinition");
    return n && t(n, i), !0;
  };
}
const dT = ["FunctionDeclaration"], OT = {
  FunctionDeclaration: /* @__PURE__ */ Qr("function"),
  ClassDeclaration: /* @__PURE__ */ Qr("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ Qr("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ Qr("type"),
  NamespaceDeclaration: /* @__PURE__ */ Qr("namespace"),
  VariableDefinition(i, e) {
    i.matchContext(dT) || e(i, "variable");
  },
  TypeDefinition(i, e) {
    e(i, "type");
  },
  __proto__: null
};
function Z0(i, e) {
  let t = nO.get(e);
  if (t)
    return t;
  let n = [], r = !0;
  function s(o, l) {
    let a = i.sliceString(o.from, o.to);
    n.push({ label: a, type: l });
  }
  return e.cursor(we.IncludeAnonymous).iterate((o) => {
    if (r)
      r = !1;
    else if (o.name) {
      let l = OT[o.name];
      if (l && l(o, s) || E0.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of Z0(i, o.node))
        n.push(l);
      return !1;
    }
  }), nO.set(e, n), n;
}
const rO = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, R0 = [
  "TemplateString",
  "String",
  "RegExp",
  "LineComment",
  "BlockComment",
  "VariableDefinition",
  "TypeDefinition",
  "Label",
  "PropertyDefinition",
  "PropertyName",
  "PrivatePropertyDefinition",
  "PrivatePropertyName"
];
function pT(i) {
  let e = Xe(i.state).resolveInner(i.pos, -1);
  if (R0.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && rO.test(i.state.sliceDoc(e.from, e.to));
  if (!t && !i.explicit)
    return null;
  let n = [];
  for (let r = e; r; r = r.parent)
    E0.has(r.name) && (n = n.concat(Z0(i.state.doc, r)));
  return {
    options: n,
    from: t ? e.from : i.pos,
    validFor: rO
  };
}
const ui = /* @__PURE__ */ tr.define({
  name: "javascript",
  parser: /* @__PURE__ */ SC.configure({
    props: [
      /* @__PURE__ */ Al.add({
        IfStatement: /* @__PURE__ */ mo({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ mo({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: o$,
        SwitchBody: (i) => {
          let e = i.textAfter, t = /^\s*\}/.test(e), n = /^\s*(case|default)\b/.test(e);
          return i.baseIndent + (t ? 0 : n ? 1 : 2) * i.unit;
        },
        Block: /* @__PURE__ */ s$({ closing: "}" }),
        ArrowFunction: (i) => i.baseIndent + i.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ mo({ except: /^{/ }),
        JSXElement(i) {
          let e = /^\s*<\//.test(i.textAfter);
          return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
        },
        JSXEscape(i) {
          let e = /\s*\}/.test(i.textAfter);
          return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
        },
        "JSXOpenTag JSXSelfClosingTag"(i) {
          return i.column(i.node.from) + i.unit;
        }
      }),
      /* @__PURE__ */ Vl.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression": ug,
        BlockComment(i) {
          return { from: i.from + 2, to: i.to - 2 };
        }
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
}), D0 = /* @__PURE__ */ ui.configure({ dialect: "ts" }, "typescript"), W0 = /* @__PURE__ */ ui.configure({ dialect: "jsx" }), N0 = /* @__PURE__ */ ui.configure({ dialect: "jsx ts" }, "typescript"), mT = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map((i) => ({ label: i, type: "keyword" }));
function M0(i = {}) {
  let e = i.jsx ? i.typescript ? N0 : W0 : i.typescript ? D0 : ui;
  return new Mh(e, [
    ui.data.of({
      autocomplete: QC(R0, v0(uT.concat(mT)))
    }),
    ui.data.of({
      autocomplete: pT
    }),
    i.jsx ? ST : []
  ]);
}
function gT(i) {
  for (; ; ) {
    if (i.name == "JSXOpenTag" || i.name == "JSXSelfClosingTag" || i.name == "JSXFragmentTag")
      return i;
    if (!i.parent)
      return null;
    i = i.parent;
  }
}
function sO(i, e, t = i.length) {
  for (let n = e == null ? void 0 : e.firstChild; n; n = n.nextSibling)
    if (n.name == "JSXIdentifier" || n.name == "JSXBuiltin" || n.name == "JSXNamespacedName" || n.name == "JSXMemberExpression")
      return i.sliceString(n.from, Math.min(n.to, t));
  return "";
}
const bT = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), ST = /* @__PURE__ */ U.inputHandler.of((i, e, t, n) => {
  if ((bT ? i.composing : i.compositionStarted) || i.state.readOnly || e != t || n != ">" && n != "/" || !ui.isActiveAt(i.state, e, -1))
    return !1;
  let { state: r } = i, s = r.changeByRange((o) => {
    var l, a;
    let { head: c } = o, h = Xe(r).resolveInner(c, -1), f;
    if (h.name == "JSXStartTag" && (h = h.parent), n == ">" && h.name == "JSXFragmentTag")
      return { range: v.cursor(c + 1), changes: { from: c, insert: "><>" } };
    if (n == "/" && h.name == "JSXFragmentTag") {
      let u = h.parent, d = u == null ? void 0 : u.parent;
      if (u.from == c - 1 && ((l = d.lastChild) === null || l === void 0 ? void 0 : l.name) != "JSXEndTag" && (f = sO(r.doc, d == null ? void 0 : d.firstChild, c))) {
        let O = `/${f}>`;
        return { range: v.cursor(c + O.length), changes: { from: c, insert: O } };
      }
    } else if (n == ">") {
      let u = gT(h);
      if (u && ((a = u.lastChild) === null || a === void 0 ? void 0 : a.name) != "JSXEndTag" && r.sliceDoc(c, c + 2) != "</" && (f = sO(r.doc, u, c)))
        return { range: v.cursor(c + 1), changes: { from: c, insert: `></${f}>` } };
    }
    return { range: o };
  });
  return s.changes.empty ? !1 : (i.dispatch(s, { userEvent: "input.type", scrollIntoView: !0 }), !0);
}), vr = ["_blank", "_self", "_top", "_parent"], $a = ["ascii", "utf-8", "utf-16", "latin1", "latin1"], Pa = ["get", "post", "put", "delete"], ka = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], mt = ["true", "false"], I = {}, yT = {
  a: {
    attrs: {
      href: null,
      ping: null,
      type: null,
      media: null,
      target: vr,
      hreflang: null
    }
  },
  abbr: I,
  address: I,
  area: {
    attrs: {
      alt: null,
      coords: null,
      href: null,
      target: null,
      ping: null,
      media: null,
      hreflang: null,
      type: null,
      shape: ["default", "rect", "circle", "poly"]
    }
  },
  article: I,
  aside: I,
  audio: {
    attrs: {
      src: null,
      mediagroup: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["none", "metadata", "auto"],
      autoplay: ["autoplay"],
      loop: ["loop"],
      controls: ["controls"]
    }
  },
  b: I,
  base: { attrs: { href: null, target: vr } },
  bdi: I,
  bdo: I,
  blockquote: { attrs: { cite: null } },
  body: I,
  br: I,
  button: {
    attrs: {
      form: null,
      formaction: null,
      name: null,
      value: null,
      autofocus: ["autofocus"],
      disabled: ["autofocus"],
      formenctype: ka,
      formmethod: Pa,
      formnovalidate: ["novalidate"],
      formtarget: vr,
      type: ["submit", "reset", "button"]
    }
  },
  canvas: { attrs: { width: null, height: null } },
  caption: I,
  center: I,
  cite: I,
  code: I,
  col: { attrs: { span: null } },
  colgroup: { attrs: { span: null } },
  command: {
    attrs: {
      type: ["command", "checkbox", "radio"],
      label: null,
      icon: null,
      radiogroup: null,
      command: null,
      title: null,
      disabled: ["disabled"],
      checked: ["checked"]
    }
  },
  data: { attrs: { value: null } },
  datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
  datalist: { attrs: { data: null } },
  dd: I,
  del: { attrs: { cite: null, datetime: null } },
  details: { attrs: { open: ["open"] } },
  dfn: I,
  div: I,
  dl: I,
  dt: I,
  em: I,
  embed: { attrs: { src: null, type: null, width: null, height: null } },
  eventsource: { attrs: { src: null } },
  fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
  figcaption: I,
  figure: I,
  footer: I,
  form: {
    attrs: {
      action: null,
      name: null,
      "accept-charset": $a,
      autocomplete: ["on", "off"],
      enctype: ka,
      method: Pa,
      novalidate: ["novalidate"],
      target: vr
    }
  },
  h1: I,
  h2: I,
  h3: I,
  h4: I,
  h5: I,
  h6: I,
  head: {
    children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
  },
  header: I,
  hgroup: I,
  hr: I,
  html: {
    attrs: { manifest: null }
  },
  i: I,
  iframe: {
    attrs: {
      src: null,
      srcdoc: null,
      name: null,
      width: null,
      height: null,
      sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
      seamless: ["seamless"]
    }
  },
  img: {
    attrs: {
      alt: null,
      src: null,
      ismap: null,
      usemap: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"]
    }
  },
  input: {
    attrs: {
      alt: null,
      dirname: null,
      form: null,
      formaction: null,
      height: null,
      list: null,
      max: null,
      maxlength: null,
      min: null,
      name: null,
      pattern: null,
      placeholder: null,
      size: null,
      src: null,
      step: null,
      value: null,
      width: null,
      accept: ["audio/*", "video/*", "image/*"],
      autocomplete: ["on", "off"],
      autofocus: ["autofocus"],
      checked: ["checked"],
      disabled: ["disabled"],
      formenctype: ka,
      formmethod: Pa,
      formnovalidate: ["novalidate"],
      formtarget: vr,
      multiple: ["multiple"],
      readonly: ["readonly"],
      required: ["required"],
      type: [
        "hidden",
        "text",
        "search",
        "tel",
        "url",
        "email",
        "password",
        "datetime",
        "date",
        "month",
        "week",
        "time",
        "datetime-local",
        "number",
        "range",
        "color",
        "checkbox",
        "radio",
        "file",
        "submit",
        "image",
        "reset",
        "button"
      ]
    }
  },
  ins: { attrs: { cite: null, datetime: null } },
  kbd: I,
  keygen: {
    attrs: {
      challenge: null,
      form: null,
      name: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      keytype: ["RSA"]
    }
  },
  label: { attrs: { for: null, form: null } },
  legend: I,
  li: { attrs: { value: null } },
  link: {
    attrs: {
      href: null,
      type: null,
      hreflang: null,
      media: null,
      sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
    }
  },
  map: { attrs: { name: null } },
  mark: I,
  menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
  meta: {
    attrs: {
      content: null,
      charset: $a,
      name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
      "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
    }
  },
  meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
  nav: I,
  noscript: I,
  object: {
    attrs: {
      data: null,
      type: null,
      name: null,
      usemap: null,
      form: null,
      width: null,
      height: null,
      typemustmatch: ["typemustmatch"]
    }
  },
  ol: {
    attrs: { reversed: ["reversed"], start: null, type: ["1", "a", "A", "i", "I"] },
    children: ["li", "script", "template", "ul", "ol"]
  },
  optgroup: { attrs: { disabled: ["disabled"], label: null } },
  option: { attrs: { disabled: ["disabled"], label: null, selected: ["selected"], value: null } },
  output: { attrs: { for: null, form: null, name: null } },
  p: I,
  param: { attrs: { name: null, value: null } },
  pre: I,
  progress: { attrs: { value: null, max: null } },
  q: { attrs: { cite: null } },
  rp: I,
  rt: I,
  ruby: I,
  samp: I,
  script: {
    attrs: {
      type: ["text/javascript"],
      src: null,
      async: ["async"],
      defer: ["defer"],
      charset: $a
    }
  },
  section: I,
  select: {
    attrs: {
      form: null,
      name: null,
      size: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      multiple: ["multiple"]
    }
  },
  slot: { attrs: { name: null } },
  small: I,
  source: { attrs: { src: null, type: null, media: null } },
  span: I,
  strong: I,
  style: {
    attrs: {
      type: ["text/css"],
      media: null,
      scoped: null
    }
  },
  sub: I,
  summary: I,
  sup: I,
  table: I,
  tbody: I,
  td: { attrs: { colspan: null, rowspan: null, headers: null } },
  template: I,
  textarea: {
    attrs: {
      dirname: null,
      form: null,
      maxlength: null,
      name: null,
      placeholder: null,
      rows: null,
      cols: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      readonly: ["readonly"],
      required: ["required"],
      wrap: ["soft", "hard"]
    }
  },
  tfoot: I,
  th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
  thead: I,
  time: { attrs: { datetime: null } },
  title: I,
  tr: I,
  track: {
    attrs: {
      src: null,
      label: null,
      default: null,
      kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
      srclang: null
    }
  },
  ul: { children: ["li", "script", "template", "ul", "ol"] },
  var: I,
  video: {
    attrs: {
      src: null,
      poster: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["auto", "metadata", "none"],
      autoplay: ["autoplay"],
      mediagroup: ["movie"],
      muted: ["muted"],
      controls: ["controls"]
    }
  },
  wbr: I
}, Y0 = {
  accesskey: null,
  class: null,
  contenteditable: mt,
  contextmenu: null,
  dir: ["ltr", "rtl", "auto"],
  draggable: ["true", "false", "auto"],
  dropzone: ["copy", "move", "link", "string:", "file:"],
  hidden: ["hidden"],
  id: null,
  inert: ["inert"],
  itemid: null,
  itemprop: null,
  itemref: null,
  itemscope: ["itemscope"],
  itemtype: null,
  lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
  spellcheck: mt,
  autocorrect: mt,
  autocapitalize: mt,
  style: null,
  tabindex: null,
  title: null,
  translate: ["yes", "no"],
  rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
  role: /* @__PURE__ */ "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
  "aria-activedescendant": null,
  "aria-atomic": mt,
  "aria-autocomplete": ["inline", "list", "both", "none"],
  "aria-busy": mt,
  "aria-checked": ["true", "false", "mixed", "undefined"],
  "aria-controls": null,
  "aria-describedby": null,
  "aria-disabled": mt,
  "aria-dropeffect": null,
  "aria-expanded": ["true", "false", "undefined"],
  "aria-flowto": null,
  "aria-grabbed": ["true", "false", "undefined"],
  "aria-haspopup": mt,
  "aria-hidden": mt,
  "aria-invalid": ["true", "false", "grammar", "spelling"],
  "aria-label": null,
  "aria-labelledby": null,
  "aria-level": null,
  "aria-live": ["off", "polite", "assertive"],
  "aria-multiline": mt,
  "aria-multiselectable": mt,
  "aria-owns": null,
  "aria-posinset": null,
  "aria-pressed": ["true", "false", "mixed", "undefined"],
  "aria-readonly": mt,
  "aria-relevant": null,
  "aria-required": mt,
  "aria-selected": ["true", "false", "undefined"],
  "aria-setsize": null,
  "aria-sort": ["ascending", "descending", "none", "other"],
  "aria-valuemax": null,
  "aria-valuemin": null,
  "aria-valuenow": null,
  "aria-valuetext": null
}, j0 = /* @__PURE__ */ "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((i) => "on" + i);
for (let i of j0)
  Y0[i] = null;
class tl {
  constructor(e, t) {
    this.tags = Object.assign(Object.assign({}, yT), e), this.globalAttrs = Object.assign(Object.assign({}, Y0), t), this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
}
tl.default = /* @__PURE__ */ new tl();
function rr(i, e, t = i.length) {
  if (!e)
    return "";
  let n = e.firstChild, r = n && n.getChild("TagName");
  return r ? i.sliceString(r.from, Math.min(r.to, t)) : "";
}
function jl(i, e = !1) {
  for (let t = i.parent; t; t = t.parent)
    if (t.name == "Element")
      if (e)
        e = !1;
      else
        return t;
  return null;
}
function U0(i, e, t) {
  let n = t.tags[rr(i, jl(e, !0))];
  return (n == null ? void 0 : n.children) || t.allTags;
}
function Jh(i, e) {
  let t = [];
  for (let n = e; n = jl(n); ) {
    let r = rr(i, n);
    if (r && n.lastChild.name == "CloseTag")
      break;
    r && t.indexOf(r) < 0 && (e.name == "EndTag" || e.from >= n.firstChild.to) && t.push(r);
  }
  return t;
}
const I0 = /^[:\-\.\w\u00b7-\uffff]*$/;
function oO(i, e, t, n, r) {
  let s = /\s*>/.test(i.sliceDoc(r, r + 5)) ? "" : ">";
  return {
    from: n,
    to: r,
    options: U0(i.doc, t, e).map((o) => ({ label: o, type: "type" })).concat(Jh(i.doc, t).map((o, l) => ({
      label: "/" + o,
      apply: "/" + o + s,
      type: "type",
      boost: 99 - l
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
function lO(i, e, t, n) {
  let r = /\s*>/.test(i.sliceDoc(n, n + 5)) ? "" : ">";
  return {
    from: t,
    to: n,
    options: Jh(i.doc, e).map((s, o) => ({ label: s, apply: s + r, type: "type", boost: 99 - o })),
    validFor: I0
  };
}
function QT(i, e, t, n) {
  let r = [], s = 0;
  for (let o of U0(i.doc, t, e))
    r.push({ label: "<" + o, type: "type" });
  for (let o of Jh(i.doc, t))
    r.push({ label: "</" + o + ">", type: "type", boost: 99 - s++ });
  return { from: n, to: n, options: r, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
function vT(i, e, t, n, r) {
  let s = jl(t), o = s ? e.tags[rr(i.doc, s)] : null, l = o && o.attrs ? Object.keys(o.attrs) : [], a = o && o.globalAttrs === !1 ? l : l.length ? l.concat(e.globalAttrNames) : e.globalAttrNames;
  return {
    from: n,
    to: r,
    options: a.map((c) => ({ label: c, type: "property" })),
    validFor: I0
  };
}
function xT(i, e, t, n, r) {
  var s;
  let o = (s = t.parent) === null || s === void 0 ? void 0 : s.getChild("AttributeName"), l = [], a;
  if (o) {
    let c = i.sliceDoc(o.from, o.to), h = e.globalAttrs[c];
    if (!h) {
      let f = jl(t), u = f ? e.tags[rr(i.doc, f)] : null;
      h = (u == null ? void 0 : u.attrs) && u.attrs[c];
    }
    if (h) {
      let f = i.sliceDoc(n, r).toLowerCase(), u = '"', d = '"';
      /^['"]/.test(f) ? (a = f[0] == '"' ? /^[^"]*$/ : /^[^']*$/, u = "", d = i.sliceDoc(r, r + 1) == f[0] ? "" : f[0], f = f.slice(1), n++) : a = /^[^\s<>='"]*$/;
      for (let O of h)
        l.push({ label: O, apply: u + O + d, type: "constant" });
    }
  }
  return { from: n, to: r, options: l, validFor: a };
}
function wT(i, e) {
  let { state: t, pos: n } = e, r = Xe(t).resolveInner(n), s = r.resolve(n, -1);
  for (let o = n, l; r == s && (l = s.childBefore(o)); ) {
    let a = l.lastChild;
    if (!a || !a.type.isError || a.from < a.to)
      break;
    r = s = l, o = a.from;
  }
  return s.name == "TagName" ? s.parent && /CloseTag$/.test(s.parent.name) ? lO(t, s, s.from, n) : oO(t, i, s, s.from, n) : s.name == "StartTag" ? oO(t, i, s, n, n) : s.name == "StartCloseTag" || s.name == "IncompleteCloseTag" ? lO(t, s, n, n) : e.explicit && (s.name == "OpenTag" || s.name == "SelfClosingTag") || s.name == "AttributeName" ? vT(t, i, s, s.name == "AttributeName" ? s.from : n, n) : s.name == "Is" || s.name == "AttributeValue" || s.name == "UnquotedAttributeValue" ? xT(t, i, s, s.name == "Is" ? n : s.from, n) : e.explicit && (r.name == "Element" || r.name == "Text" || r.name == "Document") ? QT(t, i, s, n) : null;
}
function $T(i) {
  let { extraTags: e, extraGlobalAttributes: t } = i, n = t || e ? new tl(e, t) : tl.default;
  return (r) => wT(n, r);
}
const q0 = [
  {
    tag: "script",
    attrs: (i) => i.type == "text/typescript" || i.lang == "ts",
    parser: D0.parser
  },
  {
    tag: "script",
    attrs: (i) => i.type == "text/babel" || i.type == "text/jsx",
    parser: W0.parser
  },
  {
    tag: "script",
    attrs: (i) => i.type == "text/typescript-jsx",
    parser: N0.parser
  },
  {
    tag: "script",
    attrs(i) {
      return !i.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(i.type);
    },
    parser: ui.parser
  },
  {
    tag: "style",
    attrs(i) {
      return (!i.lang || i.lang == "css") && (!i.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(i.type));
    },
    parser: Ho.parser
  }
], B0 = /* @__PURE__ */ [
  {
    name: "style",
    parser: /* @__PURE__ */ Ho.parser.configure({ top: "Styles" })
  }
].concat(/* @__PURE__ */ j0.map((i) => ({ name: i, parser: ui.parser }))), So = /* @__PURE__ */ tr.define({
  name: "html",
  parser: /* @__PURE__ */ eC.configure({
    props: [
      /* @__PURE__ */ Al.add({
        Element(i) {
          let e = /^(\s*)(<\/)?/.exec(i.textAfter);
          return i.node.to <= i.pos + e[0].length ? i.continue() : i.lineIndent(i.node.from) + (e[2] ? 0 : i.unit);
        },
        "OpenTag CloseTag SelfClosingTag"(i) {
          return i.column(i.node.from) + i.unit;
        },
        Document(i) {
          if (i.pos + /\s*/.exec(i.textAfter)[0].length < i.node.to)
            return i.continue();
          let e = null, t;
          for (let n = i.node; ; ) {
            let r = n.lastChild;
            if (!r || r.name != "Element" || r.to != n.to)
              break;
            e = n = r;
          }
          return e && !((t = e.lastChild) && (t.name == "CloseTag" || t.name == "SelfClosingTag")) ? i.lineIndent(e.from) + i.unit : null;
        }
      }),
      /* @__PURE__ */ Vl.add({
        Element(i) {
          let e = i.firstChild, t = i.lastChild;
          return !e || e.name != "OpenTag" ? null : { from: e.to, to: t.name == "CloseTag" ? t.from : i.to };
        }
      }),
      /* @__PURE__ */ xg.add({
        "OpenTag CloseTag": (i) => i.getChild("TagName")
      })
    ],
    wrap: /* @__PURE__ */ S0(q0, B0)
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/\w+\W$/,
    wordChars: "-._"
  }
});
function PT(i = {}) {
  let e = "", t;
  i.matchClosingTags === !1 && (e = "noMatch"), i.selfClosingTags === !0 && (e = (e ? e + " " : "") + "selfClosing"), (i.nestedLanguages && i.nestedLanguages.length || i.nestedAttributes && i.nestedAttributes.length) && (t = S0((i.nestedLanguages || []).concat(q0), (i.nestedAttributes || []).concat(B0)));
  let n = t || e ? So.configure({ dialect: e, wrap: t }) : So;
  return new Mh(n, [
    So.data.of({ autocomplete: $T(i) }),
    i.autoCloseTags !== !1 ? kT : [],
    M0().support,
    o0().support
  ]);
}
const kT = /* @__PURE__ */ U.inputHandler.of((i, e, t, n) => {
  if (i.composing || i.state.readOnly || e != t || n != ">" && n != "/" || !So.isActiveAt(i.state, e, -1))
    return !1;
  let { state: r } = i, s = r.changeByRange((o) => {
    var l, a, c;
    let { head: h } = o, f = Xe(r).resolveInner(h, -1), u;
    if ((f.name == "TagName" || f.name == "StartTag") && (f = f.parent), n == ">" && f.name == "OpenTag") {
      if (((a = (l = f.parent) === null || l === void 0 ? void 0 : l.lastChild) === null || a === void 0 ? void 0 : a.name) != "CloseTag" && (u = rr(r.doc, f.parent, h))) {
        let d = i.state.doc.sliceString(h, h + 1) === ">", O = `${d ? "" : ">"}</${u}>`;
        return { range: v.cursor(h + 1), changes: { from: h + (d ? 1 : 0), insert: O } };
      }
    } else if (n == "/" && f.name == "OpenTag") {
      let d = f.parent, O = d == null ? void 0 : d.parent;
      if (d.from == h - 1 && ((c = O.lastChild) === null || c === void 0 ? void 0 : c.name) != "CloseTag" && (u = rr(r.doc, O, h))) {
        let m = i.state.doc.sliceString(h, h + 1) === ">", b = `/${u}${m ? "" : ">"}`, y = h + b.length + (m ? 1 : 0);
        return { range: v.cursor(y), changes: { from: h, insert: b } };
      }
    }
    return { range: o };
  });
  return s.changes.empty ? !1 : (i.dispatch(s, { userEvent: "input.type", scrollIntoView: !0 }), !0);
});
function ye() {
  var i = arguments[0];
  typeof i == "string" && (i = document.createElement(i));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var n in t)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var r = t[n];
        typeof r == "string" ? i.setAttribute(n, r) : r != null && (i[n] = r);
      }
    e++;
  }
  for (; e < arguments.length; e++)
    L0(i, arguments[e]);
  return i;
}
function L0(i, e) {
  if (typeof e == "string")
    i.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      i.appendChild(e);
    else if (Array.isArray(e))
      for (var t = 0; t < e.length; t++)
        L0(i, e[t]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const aO = typeof String.prototype.normalize == "function" ? (i) => i.normalize("NFKD") : (i) => i;
class sr {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(e, t, n = 0, r = e.length, s, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, r), this.bufferStart = n, this.normalize = s ? (l) => s(aO(l)) : aO, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Le(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = wh(e), n = this.bufferStart + this.bufferPos;
      this.bufferPos += yt(e);
      let r = this.normalize(t);
      for (let s = 0, o = n; ; s++) {
        let l = r.charCodeAt(s), a = this.match(l, o);
        if (a)
          return this.value = a, this;
        if (s == r.length - 1)
          break;
        o == n && s < t.length && t.charCodeAt(s) == l && o++;
      }
    }
  }
  match(e, t) {
    let n = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let s = this.matches[r], o = !1;
      this.query.charCodeAt(s) == e && (s == this.query.length - 1 ? n = { from: this.matches[r + 1], to: t + 1 } : (this.matches[r]++, o = !0)), o || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? n = { from: t, to: t + 1 } : this.matches.push(1, t)), n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferPos) && (n = null), n;
  }
}
typeof Symbol < "u" && (sr.prototype[Symbol.iterator] = function() {
  return this;
});
const z0 = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, ef = "gm" + (/x/.unicode == null ? "" : "u");
class G0 {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, n, r = 0, s = e.length) {
    if (this.text = e, this.to = s, this.curLine = "", this.done = !1, this.value = z0, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new F0(e, t, n, r, s);
    this.re = new RegExp(t, ef + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = e.iter();
    let o = e.lineAt(r);
    this.curLineStart = o.from, this.matchPos = il(e, r), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let n = this.curLineStart + t.index, r = n + t[0].length;
        if (this.matchPos = il(this.text, r + (n == r ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, t)))
          return this.value = { from: n, to: r, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Ca = /* @__PURE__ */ new WeakMap();
class zn {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, n) {
    let r = Ca.get(e);
    if (!r || r.from >= n || r.to <= t) {
      let l = new zn(t, e.sliceString(t, n));
      return Ca.set(e, l), l;
    }
    if (r.from == t && r.to == n)
      return r;
    let { text: s, from: o } = r;
    return o > t && (s = e.sliceString(t, o) + s, o = t), r.to < n && (s += e.sliceString(r.to, n)), Ca.set(e, new zn(o, s)), new zn(t, s.slice(t - o, n - o));
  }
}
class F0 {
  constructor(e, t, n, r, s) {
    this.text = e, this.to = s, this.done = !1, this.value = z0, this.matchPos = il(e, r), this.re = new RegExp(t, ef + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = zn.get(e, r, this.chunkEnd(
      r + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let n = this.flat.from + t.index, r = n + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, r, t)))
          return this.value = { from: n, to: r, match: t }, this.matchPos = il(this.text, r + (n == r ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = zn.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (G0.prototype[Symbol.iterator] = F0.prototype[Symbol.iterator] = function() {
  return this;
});
function CT(i) {
  try {
    return new RegExp(i, ef), !0;
  } catch {
    return !1;
  }
}
function il(i, e) {
  if (e >= i.length)
    return e;
  let t = i.lineAt(e), n;
  for (; e < t.to && (n = t.text.charCodeAt(e - t.from)) >= 56320 && n < 57344; )
    e++;
  return e;
}
function qc(i) {
  let e = ye("input", { class: "cm-textfield", name: "line" }), t = ye("form", {
    class: "cm-gotoLine",
    onkeydown: (r) => {
      r.keyCode == 27 ? (r.preventDefault(), i.dispatch({ effects: nl.of(!1) }), i.focus()) : r.keyCode == 13 && (r.preventDefault(), n());
    },
    onsubmit: (r) => {
      r.preventDefault(), n();
    }
  }, ye("label", i.state.phrase("Go to line"), ": ", e), " ", ye("button", { class: "cm-button", type: "submit" }, i.state.phrase("go")));
  function n() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!r)
      return;
    let { state: s } = i, o = s.doc.lineAt(s.selection.main.head), [, l, a, c, h] = r, f = c ? +c.slice(1) : 0, u = a ? +a : o.number;
    if (a && h) {
      let O = u / 100;
      l && (O = O * (l == "-" ? -1 : 1) + o.number / s.doc.lines), u = Math.round(s.doc.lines * O);
    } else
      a && l && (u = u * (l == "-" ? -1 : 1) + o.number);
    let d = s.doc.line(Math.max(1, Math.min(s.doc.lines, u)));
    i.dispatch({
      effects: nl.of(!1),
      selection: v.cursor(d.from + Math.max(0, Math.min(f, d.length))),
      scrollIntoView: !0
    }), i.focus();
  }
  return { dom: t };
}
const nl = /* @__PURE__ */ ne.define(), cO = /* @__PURE__ */ qe.define({
  create() {
    return !0;
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(nl) && (i = t.value);
    return i;
  },
  provide: (i) => Jr.from(i, (e) => e ? qc : null)
}), TT = (i) => {
  let e = Kr(i, qc);
  if (!e) {
    let t = [nl.of(!0)];
    i.state.field(cO, !1) == null && t.push(ne.appendConfig.of([cO, _T])), i.dispatch({ effects: t }), e = Kr(i, qc);
  }
  return e && e.dom.querySelector("input").focus(), !0;
}, _T = /* @__PURE__ */ U.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), XT = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, H0 = /* @__PURE__ */ j.define({
  combine(i) {
    return ri(i, XT, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function AT(i) {
  let e = [DT, RT];
  return i && e.push(H0.of(i)), e;
}
const VT = /* @__PURE__ */ L.mark({ class: "cm-selectionMatch" }), ET = /* @__PURE__ */ L.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function hO(i, e, t, n) {
  return (t == 0 || i(e.sliceDoc(t - 1, t)) != $e.Word) && (n == e.doc.length || i(e.sliceDoc(n, n + 1)) != $e.Word);
}
function ZT(i, e, t, n) {
  return i(e.sliceDoc(t, t + 1)) == $e.Word && i(e.sliceDoc(n - 1, n)) == $e.Word;
}
const RT = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.selectionSet || i.docChanged || i.viewportChanged) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = i.state.facet(H0), { state: t } = i, n = t.selection;
    if (n.ranges.length > 1)
      return L.none;
    let r = n.main, s, o = null;
    if (r.empty) {
      if (!e.highlightWordAroundCursor)
        return L.none;
      let a = t.wordAt(r.head);
      if (!a)
        return L.none;
      o = t.charCategorizer(r.head), s = t.sliceDoc(a.from, a.to);
    } else {
      let a = r.to - r.from;
      if (a < e.minSelectionLength || a > 200)
        return L.none;
      if (e.wholeWords) {
        if (s = t.sliceDoc(r.from, r.to), o = t.charCategorizer(r.head), !(hO(o, t, r.from, r.to) && ZT(o, t, r.from, r.to)))
          return L.none;
      } else if (s = t.sliceDoc(r.from, r.to).trim(), !s)
        return L.none;
    }
    let l = [];
    for (let a of i.visibleRanges) {
      let c = new sr(t.doc, s, a.from, a.to);
      for (; !c.next().done; ) {
        let { from: h, to: f } = c.value;
        if ((!o || hO(o, t, h, f)) && (r.empty && h <= r.from && f >= r.to ? l.push(ET.range(h, f)) : (h >= r.to || f <= r.from) && l.push(VT.range(h, f)), l.length > e.maxMatches))
          return L.none;
      }
    }
    return L.set(l);
  }
}, {
  decorations: (i) => i.decorations
}), DT = /* @__PURE__ */ U.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), WT = ({ state: i, dispatch: e }) => {
  let { selection: t } = i, n = v.create(t.ranges.map((r) => i.wordAt(r.head) || v.cursor(r.head)), t.mainIndex);
  return n.eq(t) ? !1 : (e(i.update({ selection: n })), !0);
};
function NT(i, e) {
  let { main: t, ranges: n } = i.selection, r = i.wordAt(t.head), s = r && r.from == t.from && r.to == t.to;
  for (let o = !1, l = new sr(i.doc, e, n[n.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new sr(i.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), o = !0;
    } else {
      if (o && n.some((a) => a.from == l.value.from))
        continue;
      if (s) {
        let a = i.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const MT = ({ state: i, dispatch: e }) => {
  let { ranges: t } = i.selection;
  if (t.some((s) => s.from === s.to))
    return WT({ state: i, dispatch: e });
  let n = i.sliceDoc(t[0].from, t[0].to);
  if (i.selection.ranges.some((s) => i.sliceDoc(s.from, s.to) != n))
    return !1;
  let r = NT(i, n);
  return r ? (e(i.update({
    selection: i.selection.addRange(v.range(r.from, r.to), !1),
    effects: U.scrollIntoView(r.to)
  })), !0) : !1;
}, tf = /* @__PURE__ */ j.define({
  combine(i) {
    return ri(i, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      wholeWord: !1,
      createPanel: (e) => new KT(e)
    });
  }
});
class K0 {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || CT(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  /**
  @internal
  */
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new IT(this) : new jT(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, n) {
    let r = e.doc ? e : ue.create({ doc: e });
    return n == null && (n = r.doc.length), this.regexp ? En(this, r, t, n) : Vn(this, r, t, n);
  }
}
class J0 {
  constructor(e) {
    this.spec = e;
  }
}
function Vn(i, e, t, n) {
  return new sr(e.doc, i.unquoted, t, n, i.caseSensitive ? void 0 : (r) => r.toLowerCase(), i.wholeWord ? YT(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function YT(i, e) {
  return (t, n, r, s) => ((s > t || s + r.length < n) && (s = Math.max(0, t - 2), r = i.sliceString(s, Math.min(i.length, n + 2))), (e(rl(r, t - s)) != $e.Word || e(sl(r, t - s)) != $e.Word) && (e(sl(r, n - s)) != $e.Word || e(rl(r, n - s)) != $e.Word));
}
class jT extends J0 {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, n) {
    let r = Vn(this.spec, e, n, e.doc.length).nextOverlapping();
    return r.done && (r = Vn(this.spec, e, 0, t).nextOverlapping()), r.done ? null : r.value;
  }
  // Searching in reverse is, rather than implementing inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, n) {
    for (let r = n; ; ) {
      let s = Math.max(t, r - 1e4 - this.spec.unquoted.length), o = Vn(this.spec, e, s, r), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (s == t)
        return null;
      r -= 1e4;
    }
  }
  prevMatch(e, t, n) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let n = Vn(this.spec, e, 0, e.doc.length), r = [];
    for (; !n.next().done; ) {
      if (r.length >= t)
        return null;
      r.push(n.value);
    }
    return r;
  }
  highlight(e, t, n, r) {
    let s = Vn(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done; )
      r(s.value.from, s.value.to);
  }
}
function En(i, e, t, n) {
  return new G0(e.doc, i.search, {
    ignoreCase: !i.caseSensitive,
    test: i.wholeWord ? UT(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, n);
}
function rl(i, e) {
  return i.slice(lt(i, e, !1), e);
}
function sl(i, e) {
  return i.slice(e, lt(i, e));
}
function UT(i) {
  return (e, t, n) => !n[0].length || (i(rl(n.input, n.index)) != $e.Word || i(sl(n.input, n.index)) != $e.Word) && (i(sl(n.input, n.index + n[0].length)) != $e.Word || i(rl(n.input, n.index + n[0].length)) != $e.Word);
}
class IT extends J0 {
  nextMatch(e, t, n) {
    let r = En(this.spec, e, n, e.doc.length).next();
    return r.done && (r = En(this.spec, e, 0, t).next()), r.done ? null : r.value;
  }
  prevMatchInRange(e, t, n) {
    for (let r = 1; ; r++) {
      let s = Math.max(
        t,
        n - r * 1e4
        /* FindPrev.ChunkSize */
      ), o = En(this.spec, e, s, n), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (s == t || l.from > s + 10))
        return l;
      if (s == t)
        return null;
    }
  }
  prevMatch(e, t, n) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (t, n) => n == "$" ? "$" : n == "&" ? e.match[0] : n != "0" && +n < e.match.length ? e.match[n] : t));
  }
  matchAll(e, t) {
    let n = En(this.spec, e, 0, e.doc.length), r = [];
    for (; !n.next().done; ) {
      if (r.length >= t)
        return null;
      r.push(n.value);
    }
    return r;
  }
  highlight(e, t, n, r) {
    let s = En(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(n + 250, e.doc.length));
    for (; !s.next().done; )
      r(s.value.from, s.value.to);
  }
}
const ss = /* @__PURE__ */ ne.define(), nf = /* @__PURE__ */ ne.define(), Ri = /* @__PURE__ */ qe.define({
  create(i) {
    return new Ta(Bc(i).create(), null);
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(ss) ? i = new Ta(t.value.create(), i.panel) : t.is(nf) && (i = new Ta(i.query, t.value ? rf : null));
    return i;
  },
  provide: (i) => Jr.from(i, (e) => e.panel)
});
class Ta {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const qT = /* @__PURE__ */ L.mark({ class: "cm-searchMatch" }), BT = /* @__PURE__ */ L.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), LT = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.view = i, this.decorations = this.highlight(i.state.field(Ri));
  }
  update(i) {
    let e = i.state.field(Ri);
    (e != i.startState.field(Ri) || i.docChanged || i.selectionSet || i.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: i, panel: e }) {
    if (!e || !i.spec.valid)
      return L.none;
    let { view: t } = this, n = new ji();
    for (let r = 0, s = t.visibleRanges, o = s.length; r < o; r++) {
      let { from: l, to: a } = s[r];
      for (; r < o - 1 && a > s[r + 1].from - 2 * 250; )
        a = s[++r].to;
      i.highlight(t.state, l, a, (c, h) => {
        let f = t.state.selection.ranges.some((u) => u.from == c && u.to == h);
        n.add(c, h, f ? BT : qT);
      });
    }
    return n.finish();
  }
}, {
  decorations: (i) => i.decorations
});
function Qs(i) {
  return (e) => {
    let t = e.state.field(Ri, !1);
    return t && t.query.spec.valid ? i(e, t) : eb(e);
  };
}
const ol = /* @__PURE__ */ Qs((i, { query: e }) => {
  let { to: t } = i.state.selection.main, n = e.nextMatch(i.state, t, t);
  return n ? (i.dispatch({
    selection: { anchor: n.from, head: n.to },
    scrollIntoView: !0,
    effects: sf(i, n),
    userEvent: "select.search"
  }), !0) : !1;
}), ll = /* @__PURE__ */ Qs((i, { query: e }) => {
  let { state: t } = i, { from: n } = t.selection.main, r = e.prevMatch(t, n, n);
  return r ? (i.dispatch({
    selection: { anchor: r.from, head: r.to },
    scrollIntoView: !0,
    effects: sf(i, r),
    userEvent: "select.search"
  }), !0) : !1;
}), zT = /* @__PURE__ */ Qs((i, { query: e }) => {
  let t = e.matchAll(i.state, 1e3);
  return !t || !t.length ? !1 : (i.dispatch({
    selection: v.create(t.map((n) => v.range(n.from, n.to))),
    userEvent: "select.search.matches"
  }), !0);
}), GT = ({ state: i, dispatch: e }) => {
  let t = i.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: n, to: r } = t.main, s = [], o = 0;
  for (let l = new sr(i.doc, i.sliceDoc(n, r)); !l.next().done; ) {
    if (s.length > 1e3)
      return !1;
    l.value.from == n && (o = s.length), s.push(v.range(l.value.from, l.value.to));
  }
  return e(i.update({
    selection: v.create(s, o),
    userEvent: "select.search.matches"
  })), !0;
}, fO = /* @__PURE__ */ Qs((i, { query: e }) => {
  let { state: t } = i, { from: n, to: r } = t.selection.main;
  if (t.readOnly)
    return !1;
  let s = e.nextMatch(t, n, n);
  if (!s)
    return !1;
  let o = [], l, a, c = [];
  if (s.from == n && s.to == r && (a = t.toText(e.getReplacement(s)), o.push({ from: s.from, to: s.to, insert: a }), s = e.nextMatch(t, s.from, s.to), c.push(U.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(n).number) + "."))), s) {
    let h = o.length == 0 || o[0].from >= s.to ? 0 : s.to - s.from - a.length;
    l = { anchor: s.from - h, head: s.to - h }, c.push(sf(i, s));
  }
  return i.dispatch({
    changes: o,
    selection: l,
    scrollIntoView: !!l,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), FT = /* @__PURE__ */ Qs((i, { query: e }) => {
  if (i.state.readOnly)
    return !1;
  let t = e.matchAll(i.state, 1e9).map((r) => {
    let { from: s, to: o } = r;
    return { from: s, to: o, insert: e.getReplacement(r) };
  });
  if (!t.length)
    return !1;
  let n = i.state.phrase("replaced $ matches", t.length) + ".";
  return i.dispatch({
    changes: t,
    effects: U.announce.of(n),
    userEvent: "input.replace.all"
  }), !0;
});
function rf(i) {
  return i.state.facet(tf).createPanel(i);
}
function Bc(i, e) {
  var t, n, r, s;
  let o = i.selection.main, l = o.empty || o.to > o.from + 100 ? "" : i.sliceDoc(o.from, o.to);
  if (e && !l)
    return e;
  let a = i.facet(tf);
  return new K0({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : a.literal) ? l : l.replace(/\n/g, "\\n"),
    caseSensitive: (n = e == null ? void 0 : e.caseSensitive) !== null && n !== void 0 ? n : a.caseSensitive,
    literal: (r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : a.literal,
    wholeWord: (s = e == null ? void 0 : e.wholeWord) !== null && s !== void 0 ? s : a.wholeWord
  });
}
const eb = (i) => {
  let e = i.state.field(Ri, !1);
  if (e && e.panel) {
    let t = Kr(i, rf);
    if (!t)
      return !1;
    let n = t.dom.querySelector("[main-field]");
    if (n && n != i.root.activeElement) {
      let r = Bc(i.state, e.query.spec);
      r.valid && i.dispatch({ effects: ss.of(r) }), n.focus(), n.select();
    }
  } else
    i.dispatch({ effects: [
      nf.of(!0),
      e ? ss.of(Bc(i.state, e.query.spec)) : ne.appendConfig.of(e_)
    ] });
  return !0;
}, tb = (i) => {
  let e = i.state.field(Ri, !1);
  if (!e || !e.panel)
    return !1;
  let t = Kr(i, rf);
  return t && t.dom.contains(i.root.activeElement) && i.focus(), i.dispatch({ effects: nf.of(!1) }), !0;
}, HT = [
  { key: "Mod-f", run: eb, scope: "editor search-panel" },
  { key: "F3", run: ol, shift: ll, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: ol, shift: ll, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: tb, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: GT },
  { key: "Alt-g", run: TT },
  { key: "Mod-d", run: MT, preventDefault: !0 }
];
class KT {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(Ri).query.spec;
    this.commit = this.commit.bind(this), this.searchField = ye("input", {
      value: t.search,
      placeholder: gt(e, "Find"),
      "aria-label": gt(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = ye("input", {
      value: t.replace,
      placeholder: gt(e, "Replace"),
      "aria-label": gt(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = ye("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = ye("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = ye("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function n(r, s, o) {
      return ye("button", { class: "cm-button", name: r, onclick: s, type: "button" }, o);
    }
    this.dom = ye("div", { onkeydown: (r) => this.keydown(r), class: "cm-search" }, [
      this.searchField,
      n("next", () => ol(e), [gt(e, "next")]),
      n("prev", () => ll(e), [gt(e, "previous")]),
      n("select", () => zT(e), [gt(e, "all")]),
      ye("label", null, [this.caseField, gt(e, "match case")]),
      ye("label", null, [this.reField, gt(e, "regexp")]),
      ye("label", null, [this.wordField, gt(e, "by word")]),
      ...e.state.readOnly ? [] : [
        ye("br"),
        this.replaceField,
        n("replace", () => fO(e), [gt(e, "replace")]),
        n("replaceAll", () => FT(e), [gt(e, "replace all")])
      ],
      ye("button", {
        name: "close",
        onclick: () => tb(e),
        "aria-label": gt(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new K0({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: ss.of(e) }));
  }
  keydown(e) {
    Cx(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? ll : ol)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), fO(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(ss) && !n.value.eq(this.query) && this.setQuery(n.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(tf).top;
  }
}
function gt(i, e) {
  return i.state.phrase(e);
}
const zs = 30, Gs = /[\s\.,:;?!]/;
function sf(i, { from: e, to: t }) {
  let n = i.state.doc.lineAt(e), r = i.state.doc.lineAt(t).to, s = Math.max(n.from, e - zs), o = Math.min(r, t + zs), l = i.state.sliceDoc(s, o);
  if (s != n.from) {
    for (let a = 0; a < zs; a++)
      if (!Gs.test(l[a + 1]) && Gs.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != r) {
    for (let a = l.length - 1; a > l.length - zs; a--)
      if (!Gs.test(l[a - 1]) && Gs.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return U.announce.of(`${i.state.phrase("current match")}. ${l} ${i.state.phrase("on line")} ${n.number}.`);
}
const JT = /* @__PURE__ */ U.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), e_ = [
  Ri,
  /* @__PURE__ */ $n.lowest(LT),
  JT
];
class t_ {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.diagnostic = n;
  }
}
class sn {
  constructor(e, t, n) {
    this.diagnostics = e, this.panel = t, this.selected = n;
  }
  static init(e, t, n) {
    let r = e, s = n.facet(Nn).markerFilter;
    s && (r = s(r));
    let o = L.set(r.map((l) => l.from == l.to || l.from == l.to - 1 && n.doc.lineAt(l.from).to == l.from ? L.widget({
      widget: new f_(l),
      diagnostic: l
    }).range(l.from) : L.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new sn(o, t, or(o));
  }
}
function or(i, e = null, t = 0) {
  let n = null;
  return i.between(t, 1e9, (r, s, { spec: o }) => {
    if (!(e && o.diagnostic != e))
      return n = new t_(r, s, o.diagnostic), !1;
  }), n;
}
function i_(i, e) {
  return !!(i.effects.some((t) => t.is(of)) || i.changes.touchesRange(e.pos));
}
function ib(i, e) {
  return i.field(vt, !1) ? e : e.concat(ne.appendConfig.of([
    vt,
    U.decorations.compute([vt], (t) => {
      let { selected: n, panel: r } = t.field(vt);
      return !n || !r || n.from == n.to ? L.none : L.set([
        r_.range(n.from, n.to)
      ]);
    }),
    dw(s_, { hideOn: i_ }),
    d_
  ]));
}
function n_(i, e) {
  return {
    effects: ib(i, [of.of(e)])
  };
}
const of = /* @__PURE__ */ ne.define(), lf = /* @__PURE__ */ ne.define(), nb = /* @__PURE__ */ ne.define(), vt = /* @__PURE__ */ qe.define({
  create() {
    return new sn(L.none, null, null);
  },
  update(i, e) {
    if (e.docChanged) {
      let t = i.diagnostics.map(e.changes), n = null;
      if (i.selected) {
        let r = e.changes.mapPos(i.selected.from, 1);
        n = or(t, i.selected.diagnostic, r) || or(t, null, r);
      }
      i = new sn(t, i.panel, n);
    }
    for (let t of e.effects)
      t.is(of) ? i = sn.init(t.value, i.panel, e.state) : t.is(lf) ? i = new sn(i.diagnostics, t.value ? Ul.open : null, i.selected) : t.is(nb) && (i = new sn(i.diagnostics, i.panel, t.value));
    return i;
  },
  provide: (i) => [
    Jr.from(i, (e) => e.panel),
    U.decorations.from(i, (e) => e.diagnostics)
  ]
}), r_ = /* @__PURE__ */ L.mark({ class: "cm-lintRange cm-lintRange-active" });
function s_(i, e, t) {
  let { diagnostics: n } = i.state.field(vt), r = [], s = 2e8, o = 0;
  n.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, c, { spec: h }) => {
    e >= a && e <= c && (a == c || (e > a || t > 0) && (e < c || t < 0)) && (r.push(h.diagnostic), s = Math.min(a, s), o = Math.max(c, o));
  });
  let l = i.state.facet(Nn).tooltipFilter;
  return l && (r = l(r)), r.length ? {
    pos: s,
    end: o,
    above: i.state.doc.lineAt(s).to < o,
    create() {
      return { dom: o_(i, r) };
    }
  } : null;
}
function o_(i, e) {
  return ye("ul", { class: "cm-tooltip-lint" }, e.map((t) => sb(i, t, !1)));
}
const l_ = (i) => {
  let e = i.state.field(vt, !1);
  (!e || !e.panel) && i.dispatch({ effects: ib(i.state, [lf.of(!0)]) });
  let t = Kr(i, Ul.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, uO = (i) => {
  let e = i.state.field(vt, !1);
  return !e || !e.panel ? !1 : (i.dispatch({ effects: lf.of(!1) }), !0);
}, a_ = (i) => {
  let e = i.state.field(vt, !1);
  if (!e)
    return !1;
  let t = i.state.selection.main, n = e.diagnostics.iter(t.to + 1);
  return !n.value && (n = e.diagnostics.iter(0), !n.value || n.from == t.from && n.to == t.to) ? !1 : (i.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: !0 }), !0);
}, c_ = [
  { key: "Mod-Shift-m", run: l_, preventDefault: !0 },
  { key: "F8", run: a_ }
], h_ = /* @__PURE__ */ Re.fromClass(class {
  constructor(i) {
    this.view = i, this.timeout = -1, this.set = !0;
    let { delay: e } = i.state.facet(Nn);
    this.lintTime = Date.now() + e, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e);
  }
  run() {
    let i = Date.now();
    if (i < this.lintTime - 10)
      setTimeout(this.run, this.lintTime - i);
    else {
      this.set = !1;
      let { state: e } = this.view, { sources: t } = e.facet(Nn);
      Promise.all(t.map((n) => Promise.resolve(n(this.view)))).then((n) => {
        let r = n.reduce((s, o) => s.concat(o));
        this.view.state.doc == e.doc && this.view.dispatch(n_(this.view.state, r));
      }, (n) => {
        xt(this.view.state, n);
      });
    }
  }
  update(i) {
    let e = i.state.facet(Nn);
    (i.docChanged || e != i.startState.facet(Nn)) && (this.lintTime = Date.now() + e.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, e.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
}), Nn = /* @__PURE__ */ j.define({
  combine(i) {
    return Object.assign({ sources: i.map((e) => e.source) }, ri(i.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null
    }));
  },
  enables: h_
});
function rb(i) {
  let e = [];
  if (i)
    e:
      for (let { name: t } of i) {
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          if (/[a-zA-Z]/.test(r) && !e.some((s) => s.toLowerCase() == r.toLowerCase())) {
            e.push(r);
            continue e;
          }
        }
        e.push("");
      }
  return e;
}
function sb(i, e, t) {
  var n;
  let r = t ? rb(e.actions) : [];
  return ye("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, ye("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage() : e.message), (n = e.actions) === null || n === void 0 ? void 0 : n.map((s, o) => {
    let l = (f) => {
      f.preventDefault();
      let u = or(i.state.field(vt).diagnostics, e);
      u && s.apply(i, u.from, u.to);
    }, { name: a } = s, c = r[o] ? a.indexOf(r[o]) : -1, h = c < 0 ? a : [
      a.slice(0, c),
      ye("u", a.slice(c, c + 1)),
      a.slice(c + 1)
    ];
    return ye("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: l,
      onmousedown: l,
      "aria-label": ` Action: ${a}${c < 0 ? "" : ` (access key "${r[o]})"`}.`
    }, h);
  }), e.source && ye("div", { class: "cm-diagnosticSource" }, e.source));
}
class f_ extends gi {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return ye("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class dO {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = sb(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Ul {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (r) => {
      if (r.keyCode == 27)
        uO(this.view), this.view.focus();
      else if (r.keyCode == 38 || r.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (r.keyCode == 40 || r.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (r.keyCode == 36)
        this.moveSelection(0);
      else if (r.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (r.keyCode == 13)
        this.view.focus();
      else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: s } = this.items[this.selectedIndex], o = rb(s.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == r.keyCode) {
            let a = or(this.view.state.field(vt).diagnostics, s);
            a && s.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      r.preventDefault();
    }, n = (r) => {
      for (let s = 0; s < this.items.length; s++)
        this.items[s].dom.contains(r.target) && this.moveSelection(s);
    };
    this.list = ye("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: n
    }), this.dom = ye("div", { class: "cm-panel-lint" }, this.list, ye("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => uO(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(vt).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(vt), n = 0, r = !1, s = null;
    for (e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
      let c = -1, h;
      for (let f = n; f < this.items.length; f++)
        if (this.items[f].diagnostic == a.diagnostic) {
          c = f;
          break;
        }
      c < 0 ? (h = new dO(this.view, a.diagnostic), this.items.splice(n, 0, h), r = !0) : (h = this.items[c], c > n && (this.items.splice(n, c - n), r = !0)), t && h.diagnostic == t.diagnostic ? h.dom.hasAttribute("aria-selected") || (h.dom.setAttribute("aria-selected", "true"), s = h) : h.dom.hasAttribute("aria-selected") && h.dom.removeAttribute("aria-selected"), n++;
    }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      r = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new dO(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), r = !0), s ? (this.list.setAttribute("aria-activedescendant", s.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: s.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: o, panel: l }) => {
        o.top < l.top ? this.list.scrollTop -= l.top - o.top : o.bottom > l.bottom && (this.list.scrollTop += o.bottom - l.bottom);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let n = e;
      e = n.nextSibling, n.remove();
    }
    for (let n of this.items)
      if (n.dom.parentNode == this.list) {
        for (; e != n.dom; )
          t();
        e = n.dom.nextSibling;
      } else
        this.list.insertBefore(n.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(vt), n = or(t.diagnostics, this.items[e].diagnostic);
    n && this.view.dispatch({
      selection: { anchor: n.from, head: n.to },
      scrollIntoView: !0,
      effects: nb.of(n)
    });
  }
  static open(e) {
    return new Ul(e);
  }
}
function u_(i, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(i)}</svg>')`;
}
function _a(i) {
  return u_(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${i}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const d_ = /* @__PURE__ */ U.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ _a("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ _a("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ _a("#999") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
}), O_ = /* @__PURE__ */ (() => [
  xw(),
  Pw(),
  qx(),
  z$(),
  y$(),
  Ex(),
  Nx(),
  ue.allowMultipleSelections.of(!0),
  a$(),
  v$($$, { fallback: !0 }),
  A$(),
  JC(),
  hT(),
  nw(),
  ow(),
  Hx(),
  AT(),
  gs.of([
    ...nT,
    ...t0,
    ...HT,
    ...nP,
    ...g$,
    ...V0,
    ...c_
  ])
])(), p_ = (i) => {
  const e = () => i.state.doc.toString();
  return {
    getDoc: e,
    setDoc: (n) => {
      n !== e() && i.dispatch({
        changes: {
          from: 0,
          to: i.state.doc.length,
          insert: n
        }
      });
    }
  };
}, Xa = /* @__PURE__ */ Nt({
  __name: "CodeEditor",
  props: {
    theme: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(i, { emit: e }) {
    const t = i, n = {
      html: PT,
      javascript: M0,
      css: o0
    }, r = Ce(), s = Ce();
    return lr(() => {
      s.value = new U({
        parent: r.value,
        doc: t.modelValue,
        extensions: [
          gs.of(t0),
          O_,
          t.theme ? n[t.theme]() : n.javascript(),
          U.updateListener.of((l) => {
            l.docChanged && e("update:modelValue", l.state.doc.toString());
          })
        ]
      });
      const o = p_(s.value);
      Je(
        () => t.modelValue,
        (l) => {
          l !== o.getDoc() && o.setDoc(l ?? "");
        }
      );
    }), (o, l) => (_t(), mi("div", {
      ref_key: "codeWrapper",
      ref: r,
      style: { width: "100%", height: "100%" }
    }, null, 512));
  }
}), m_ = /* @__PURE__ */ Nt({
  __name: "HtmlIframe",
  props: {
    html: null,
    javascript: null,
    css: null
  },
  setup(i) {
    const e = i, t = Ce(), n = () => {
      const r = document.createElement("iframe");
      return r.style.height = "100%", r.style.width = "100%", r.onload = () => {
        const s = document.createElement("style");
        s.innerHTML = e.css ?? "", s.id = "iframe-css";
        const o = document.createElement("script");
        o.innerHTML = e.javascript ?? "", o.id = "iframe-js", r.contentDocument && (r.contentDocument.head.appendChild(s), r.contentDocument.body.innerHTML = e.html ?? "", r.contentDocument.body.appendChild(o));
      }, r;
    };
    return lr(() => {
      if (t.value) {
        let r = n();
        t.value.appendChild(r), Je(
          () => [e.html, e.javascript, e.css].join(),
          (s) => {
            t.value && (t.value.removeChild(r), r = n(), t.value.appendChild(r));
          }
        );
      }
    }), (r, s) => (_t(), mi("div", {
      ref_key: "iframeWrapRef",
      ref: t,
      style: { width: "100%", height: "100%" }
    }, null, 512));
  }
}), g_ = /* @__PURE__ */ Nt({
  __name: "HtmlViewer",
  props: {
    html: null,
    js: null,
    css: null
  },
  setup(i) {
    const e = i, t = Ce("result"), n = cs({
      html: e.html,
      css: e.css,
      js: e.js
    });
    return (r, s) => (_t(), bh(We(UQ), {
      modelValue: t.value,
      "onUpdate:modelValue": s[3] || (s[3] = (o) => t.value = o),
      class: "html-tabs"
    }, {
      default: An(() => [
        ce(We(Ts), {
          label: "效果",
          name: "result"
        }, {
          default: An(() => [
            ce(m_, {
              html: n.html,
              javascript: n.js,
              css: n.css
            }, null, 8, ["html", "javascript", "css"])
          ]),
          _: 1
        }),
        ce(We(Ts), {
          label: "HTML",
          name: "HTML"
        }, {
          default: An(() => [
            ce(Xa, {
              theme: "html",
              modelValue: n.html,
              "onUpdate:modelValue": s[0] || (s[0] = (o) => n.html = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        ce(We(Ts), {
          label: "CSS",
          name: "CSS"
        }, {
          default: An(() => [
            ce(Xa, {
              theme: "css",
              modelValue: n.css,
              "onUpdate:modelValue": s[1] || (s[1] = (o) => n.css = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        ce(We(Ts), {
          label: "JavaScript",
          name: "JavaScript"
        }, {
          default: An(() => [
            ce(Xa, {
              theme: "javascript",
              modelValue: n.js,
              "onUpdate:modelValue": s[2] || (s[2] = (o) => n.js = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), b_ = `.el-tabs {
  --el-tabs-header-height: 40px;
  --el-border-color-light: #e4e7ed;
  --el-transition-duration: 0.3s;
  --el-index-normal: 1;
  --el-bg-color: #ffffff;
  --el-transition-function-ease-in-out-bezier: cubic-bezier(
    0.645,
    0.045,
    0.355,
    1
  );
  --el-color-primary: #409eff;
  --el-font-size-base: 14px;
  --el-text-color-primary: #303133;
  --el-text-color-secondary: #909399;
}

.el-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-tabs__header {
  margin-bottom: 0;
}

.el-tabs--card > .el-tabs__header {
  border-bottom: 1px solid var(--el-border-color-light);
  height: var(--el-tabs-header-height);
}

.el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 0 15px;
}

.el-tabs__nav-wrap {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative;
}

.el-tabs__nav-scroll {
  overflow: hidden;
}

.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 1px solid var(--el-border-color-light);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
}

.el-tabs__nav {
  white-space: nowrap;
  position: relative;
  transition: transform var(--el-transition-duration);
  float: left;
  z-index: calc(var(--el-index-normal) + 1);
}

.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: var(--el-bg-color);
}

.el-tabs--card > .el-tabs__header .el-tabs__item:first-child {
  border-left: none;
}

.el-tabs--card > .el-tabs__header .el-tabs__item {
  border-bottom: 1px solid transparent;
  border-left: 1px solid var(--el-border-color-light);
  transition: color var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier),
    padding var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
}

.el-tabs__item.is-active {
  color: var(--el-color-primary);
}

.el-tabs__item {
  padding: 0 20px;
  height: var(--el-tabs-header-height);
  box-sizing: border-box;
  line-height: var(--el-tabs-header-height);
  display: inline-block;
  list-style: none;
  font-size: var(--el-font-size-base);
  /* font-weight: 500; */
  font-size: 14px;
  color: var(--el-text-color-primary);
  position: relative;
  font-family: 'Lato', 'Helvetica Neue', 'Arial', 'Verdana', 'Tahoma',
    'Lucida Sans', 'FreeSans', 'Lucida Sans Unicode', 'Luxi Sans', sans-serif;
}

.el-tabs__item:hover {
  color: var(--el-color-primary);
  cursor: pointer;
}

.el-tabs__content {
  background: #f3f5f6;
}

.el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: var(--el-color-primary);
  z-index: 1;
  transition: width var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier),
    transform var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
  list-style: none;
}

.el-tabs__nav-wrap.is-scrollable {
  padding: 0 20px;
  box-sizing: border-box;
}

.el-tabs__nav-prev {
  left: 0;
}

.el-tabs__nav-next,
.el-tabs__nav-prev {
  position: absolute;
  cursor: pointer;
  line-height: 44px;
  font-size: 12px;
  color: var(--el-text-color-secondary);
  width: 20px;
  text-align: center;
}

.el-tabs__nav-next {
  right: 0;
}

.el-tabs__nav-next,
.el-tabs__nav-prev {
  position: absolute;
  cursor: pointer;
  font-size: 12px;
  color: var(--el-text-color-secondary);
  width: 20px;
  text-align: center;
  display: flex;
  height: 100%;
  align-items: center;
}

.el-icon {
  --color: inherit;
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--color);
  font-size: inherit;
}
`, S_ = `.html-root {
  height: 100%;
}

.html-root .el-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.html-root .el-tabs__header {
  margin-bottom: 0;
}

.html-root .el-tabs__content {
  flex: 1;
  overflow-y: auto;
}

.html-root .el-tabs__content .el-tab-pane {
  height: 100%;
}

.cm-editor {
  height: 100%;
}
`;
var Lc = {}, y_ = {
  get exports() {
    return Lc;
  },
  set exports(i) {
    Lc = i;
  }
}, zc = {}, Q_ = {
  get exports() {
    return zc;
  },
  set exports(i) {
    zc = i;
  }
}, yo = 1;
function v_() {
  return yo = (yo * 9301 + 49297) % 233280, yo / 233280;
}
function x_(i) {
  yo = i;
}
var w_ = {
  nextValue: v_,
  seed: x_
}, Gc = w_, on = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-", Ai, OO, _r;
function Fc() {
  _r = !1;
}
function ob(i) {
  if (!i) {
    Ai !== on && (Ai = on, Fc());
    return;
  }
  if (i !== Ai) {
    if (i.length !== on.length)
      throw new Error("Custom alphabet for shortid must be " + on.length + " unique characters. You submitted " + i.length + " characters: " + i);
    var e = i.split("").filter(function(t, n, r) {
      return n !== r.lastIndexOf(t);
    });
    if (e.length)
      throw new Error("Custom alphabet for shortid must be " + on.length + " unique characters. These characters were not unique: " + e.join(", "));
    Ai = i, Fc();
  }
}
function $_(i) {
  return ob(i), Ai;
}
function P_(i) {
  Gc.seed(i), OO !== i && (Fc(), OO = i);
}
function k_() {
  Ai || ob(on);
  for (var i = Ai.split(""), e = [], t = Gc.nextValue(), n; i.length > 0; )
    t = Gc.nextValue(), n = Math.floor(t * i.length), e.push(i.splice(n, 1)[0]);
  return e.join("");
}
function lb() {
  return _r || (_r = k_(), _r);
}
function C_(i) {
  var e = lb();
  return e[i];
}
function T_() {
  return Ai || on;
}
var af = {
  get: T_,
  characters: $_,
  seed: P_,
  lookup: C_,
  shuffled: lb
}, Aa = typeof window == "object" && (window.crypto || window.msCrypto), Hc;
!Aa || !Aa.getRandomValues ? Hc = function(i) {
  for (var e = [], t = 0; t < i; t++)
    e.push(Math.floor(Math.random() * 256));
  return e;
} : Hc = function(i) {
  return Aa.getRandomValues(new Uint8Array(i));
};
var __ = Hc, X_ = function(i, e, t) {
  for (var n = (2 << Math.log(e.length - 1) / Math.LN2) - 1, r = -~(1.6 * n * t / e.length), s = ""; ; )
    for (var o = i(r), l = r; l--; )
      if (s += e[o[l] & n] || "", s.length === +t)
        return s;
}, A_ = af, V_ = __, E_ = X_;
function Z_(i) {
  for (var e = 0, t, n = ""; !t; )
    n = n + E_(V_, A_.get(), 1), t = i < Math.pow(16, e + 1), e++;
  return n;
}
var R_ = Z_, Fs = R_, D_ = 1567752802062, W_ = 7, Hs, pO;
function N_(i) {
  var e = "", t = Math.floor((Date.now() - D_) * 1e-3);
  return t === pO ? Hs++ : (Hs = 0, pO = t), e = e + Fs(W_), e = e + Fs(i), Hs > 0 && (e = e + Fs(Hs)), e = e + Fs(t), e;
}
var M_ = N_, Y_ = af;
function j_(i) {
  if (!i || typeof i != "string" || i.length < 6)
    return !1;
  var e = new RegExp("[^" + Y_.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]");
  return !e.test(i);
}
var U_ = j_;
(function(i) {
  var e = af, t = M_, n = U_, r = 0;
  function s(c) {
    return e.seed(c), i.exports;
  }
  function o(c) {
    return r = c, i.exports;
  }
  function l(c) {
    return c !== void 0 && e.characters(c), e.shuffled();
  }
  function a() {
    return t(r);
  }
  i.exports = a, i.exports.generate = a, i.exports.seed = s, i.exports.worker = o, i.exports.characters = l, i.exports.isValid = n;
})(Q_);
(function(i) {
  i.exports = zc;
})(y_);
function I_(i, e, t = {}) {
  const n = document.createElement("iframe"), r = document.createElement("div");
  return r.id = "html-app-" + Lc.generate(), r.className = "html-root", n.style.boxSizing = "border-box", n.style.border = "1px solid #e4e7ed", Object.assign(
    n.style,
    {
      width: "100%",
      height: "500px"
    },
    t.iframeStyle
  ), n.onload = () => {
    var s, o;
    (s = t.stylesCss) == null || s.forEach((l) => {
      var c;
      const a = document.createElement("style");
      a.innerHTML = l, (c = n.contentDocument) == null || c.head.appendChild(a);
    }), (o = n.contentDocument) == null || o.body.appendChild(r), u1(i, e).mount(r);
  }, n;
}
function z_(i = {}) {
  var e;
  return I_(
    g_,
    {
      html: i.html instanceof Array ? i.html.join(`
`) : i.html,
      css: i.css instanceof Array ? i.css.join(`
`) : i.css,
      js: i.js instanceof Array ? i.js.join(`
`) : i.js
    },
    {
      stylesCss: [hb, b_, S_],
      iframeStyle: Object.assign(
        {},
        (e = window.htmlViewerConfig) == null ? void 0 : e.iframeStyle,
        i.iframeStyle
      )
    }
  );
}
export {
  z_ as createHtmlViewer
};
