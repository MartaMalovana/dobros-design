"use strict";(self.webpackChunkdobros_design=self.webpackChunkdobros_design||[]).push([[388],{79388:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(70885),i=t(72791),o=t(59434),s=t(19348),c=t(33085),a=t(31379),l=t(34916),u=t(53089),d=t(72961),f=t(2456),h=t(11532),v=t(10958),g=t(53284),y=t(80184);function p(){var e=(0,o.v9)(f.B),n=(0,o.v9)(v.$),t=(0,o.I0)(),p=(0,i.useState)(e),b=(0,r.Z)(p,2),w=b[0],V=b[1],k=(0,i.useState)(0),j=(0,r.Z)(k,2),x=j[0],m=j[1],I=(0,s.YD)({root:null,rootMargin:"0px",threshold:0}),O=I.ref,Z=I.inView,C=(I.entry,function(e){m(e)});return(0,y.jsxs)(c.i,{children:[(0,y.jsx)("div",{ref:O,children:(0,y.jsx)(a.Z,{})}),(0,y.jsx)(u.W2,{children:(0,y.jsxs)(c.V,{empty:!0,children:[(0,y.jsx)(u._L,{children:w&&w.map((function(e,n){return(0,y.jsx)(d.Z,{data:e,title:!0,slide:C,index:n},e.id)}))}),n&&(0,y.jsx)(h.Z,{data:w,slider:function(){t(g.Z.sliderToggle())},slide:x,changeElement:function(e){console.log(e),V(e)}})]})}),!Z&&(0,y.jsx)(u.Up,{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:(0,y.jsx)(u.Eh,{})}),(0,y.jsx)(l.Z,{})]})}},19348:function(e,n,t){t.d(n,{YD:function(){return w}});var r=t(70885),i=t(15671),o=t(43144),s=t(60136),c=t(50516),a=t(72791);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}var u=new Map,d=new WeakMap,f=0,h=void 0;function v(e){return Object.keys(e).sort().filter((function(n){return void 0!==e[n]})).map((function(n){return"".concat(n,"_").concat("root"===n?(t=e.root)?(d.has(t)||(f+=1,d.set(t,f.toString())),d.get(t)):"0":e[n]);var t})).toString()}function g(e){var n=v(e),t=u.get(n);if(!t){var r,i=new Map,o=new IntersectionObserver((function(n){n.forEach((function(n){var t,o=n.isIntersecting&&r.some((function(e){return n.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=o),null==(t=i.get(n.target))||t.forEach((function(e){e(o,n)}))}))}),e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:o,elements:i},u.set(n,t)}return t}function y(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return n(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=g(t),s=o.id,c=o.observer,a=o.elements,l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(n),c.observe(e),function(){l.splice(l.indexOf(n),1),0===l.length&&(a.delete(e),c.unobserve(e)),0===a.size&&(c.disconnect(),u.delete(s))}}var p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function b(e){return"function"!==typeof e.children}a.Component;function w(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.threshold,i=n.delay,o=n.trackVisibility,s=n.rootMargin,c=n.root,l=n.triggerOnce,u=n.skip,d=n.initialInView,f=n.fallbackInView,h=n.onChange,v=a.useState(null),g=(0,r.Z)(v,2),p=g[0],b=g[1],w=a.useRef(),V=a.useState({inView:!!d,entry:void 0}),k=(0,r.Z)(V,2),j=k[0],x=k[1];w.current=h,a.useEffect((function(){var e;if(!u&&p)return e=y(p,(function(n,t){x({inView:n,entry:t}),w.current&&w.current(n,t),t.isIntersecting&&l&&e&&(e(),e=void 0)}),{root:c,rootMargin:s,threshold:t,trackVisibility:o,delay:i},f),function(){e&&e()}}),[Array.isArray(t)?t.toString():t,p,c,s,l,u,o,f,i]);var m=null==(e=j.entry)?void 0:e.target;a.useEffect((function(){p||!m||l||u||x({inView:!!d,entry:void 0})}),[p,m,l,u,d]);var I=[b,j.inView,j.entry];return I.ref=I[0],I.inView=I[1],I.entry=I[2],I}}}]);
//# sourceMappingURL=388.685c1c78.chunk.js.map