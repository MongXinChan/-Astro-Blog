import{a as K,I as R,i as g,s as V,b as $,r as z}from"./Icon.CSsrAGda.js";import{p as A,m as B,l as E,n as F,t as G,a as J,e as L,j as t,b as M,f as N,s as v,c as a,o as O,k as x,i as h,r as s}from"./render.w1qpoaHy.js";import{b as P}from"./input.DvZj6pkK.js";import{I as y}from"./zh_TW.BLx2dViU.js";import{b as Q,c as w,d as k}from"./setting-utils.De4sCiaH.js";var T=G('<div id="display-setting" class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4 svelte-1s19bex"><div class="flex flex-row gap-2 mb-3 items-center justify-between"><div class="flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3\n            before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)]\n            before:absolute before:-left-3 before:top-[0.33rem]"> <button aria-label="Reset to Default"><div class="text-[var(--btn-content)]"><!></div></button></div> <div class="flex gap-1"><div id="hueValue" class="transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center\n            font-bold text-sm items-center text-[var(--btn-content)]"> </div></div></div> <div class="w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none"><input type="range" min="0" max="360" class="slider svelte-1s19bex" id="colorSlider" step="5" style="width: 100%"></div></div>');function te(e,r){A(r,!1);let l=B(Q());const o=w();E((()=>(t(l),k)),(()=>{(t(l)||0===t(l))&&k(t(l))})),F(),K();var i=T(),n=a(i),d=a(n),b=a(d),f=v(b);let c;var m=a(f),p=a(m);R(p,{icon:"fa6-solid:arrow-rotate-left",class:"text-[0.875rem]"}),s(m),s(f),s(d);var u=v(d,2),j=a(u),_=a(j,!0);s(j),s(u),s(n);var C=v(n,2),D=a(C);z(D),s(C),s(i),J(((e,a,s)=>{x(b,`${e??""} `),c=V(f,1,"btn-regular w-7 h-7 rounded-md  active:scale-90",null,c,a),x(_,t(l)),$(D,"aria-label",s)}),[()=>g(y.themeColor),()=>({"opacity-0":t(l)===o,"pointer-events-none":t(l)===o}),()=>g(y.themeColor)],O),L("click",f,(function(){h(l,w())})),P(D,(()=>t(l)),(e=>h(l,e))),M(e,i),N()}export{te as default};