import{d as B,o as n,c as l,F as y,r as k,a as v,b as T,n as b,t as g,p as $,e as x,f as p,g as K,h as V,i as D,w as q,T as U,j as W,k as O,l as Z}from"./vendor.206afc82.js";const J=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};J();function Q(){const t=24*60*60*1e3,u=new Date(2022,1,21).setHours(0,0,0,0),c=new Date().setHours(0,0,0,0);let a=Math.round(Math.abs((u-c)/t));for(;a>I.length;)a-=I.length;return I[a]}const I=["salvo","pissy","snozy","rarts","packs","baldy","foden","cruft","matty","scran","botty","bunda","roses","plube","nutes","chunky","fryup","goats","voice","tinny","missy","flare","penos","balls","andre","goaty","david","pints","piggy","mario","clart","thicc","train","clown","rarta","seesh","swole","hoggg","bongo","pinky","reeee","wario","karts","stink","tramp","ponds","shots"];var z=(t,u)=>{const c=t.__vccOpts||t;for(const[a,e]of u)c[a]=e;return c};const X=t=>($("data-v-a7ac7f5c"),t=t(),x(),t),Y={id:"keyboard"},ee={class:"row"},te={key:0,class:"spacer"},se=["onClick"],re={key:0},oe={key:1,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},ae=X(()=>v("path",{fill:"currentColor",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"},null,-1)),ne=[ae],le={key:1,class:"spacer"},ie=B({props:{letterStates:null},emits:["key"],setup(t){const u=["qwertyuiop".split(""),"asdfghjkl".split(""),["Enter",..."zxcvbnm".split(""),"Backspace"]];return(c,a)=>(n(),l("div",Y,[(n(),l(y,null,k(u,(e,o)=>v("div",ee,[o===1?(n(),l("div",te)):T("",!0),(n(!0),l(y,null,k(e,d=>(n(),l("button",{class:b([d.length>1&&"big",t.letterStates[d]]),onClick:w=>c.$emit("key",d)},[d!=="Backspace"?(n(),l("span",re,g(d),1)):(n(),l("svg",oe,ne))],10,se))),256)),o===1?(n(),l("div",le)):T("",!0)])),64))]))}});var ue=z(ie,[["__scopeId","data-v-a7ac7f5c"]]),f;(function(t){t[t.INITIAL=0]="INITIAL",t.CORRECT="correct",t.PRESENT="present",t.ABSENT="absent"})(f||(f={}));const ce=t=>($("data-v-72029378"),t=t(),x(),t),de={key:0,class:"message"},fe={key:0},ve=ce(()=>v("header",null,[v("h1",null,"RARTLE"),v("a",{id:"source-link",href:"https://github.com/yyx990803/vue-wordle",target:"_blank"},"Source")],-1)),pe={id:"board"},he=B({setup(t){const u=Q(),c=p(Array.from({length:6},()=>Array.from({length:5},()=>({letter:"",state:f.INITIAL}))));let a=p(0);const e=K(()=>c.value[a.value]);let o=p(""),d=p(""),w=p(-1),C=p(!1);const h=p({});let N=!0;const S=s=>L(s.key);window.addEventListener("keyup",S),V(()=>{window.removeEventListener("keyup",S)});function L(s){!N||(/^[a-zA-Z]$/.test(s)?j(s.toLowerCase()):s==="Backspace"?H():s==="Enter"&&M())}function j(s){for(const i of e.value)if(!i.letter){i.letter=s;break}}function H(){for(const s of[...e.value].reverse())if(s.letter){s.letter="";break}}function M(){if(e.value.every(s=>s.letter)){const s=e.value.map(r=>r.letter).join("");if(!I.includes(s)&&s!==u){A(),E("Not in word list");return}const i=u.split("");e.value.forEach((r,_)=>{i[_]===r.letter&&(r.state=h.value[r.letter]=f.CORRECT,i[_]=null)}),e.value.forEach(r=>{!r.state&&i.includes(r.letter)&&(r.state=f.PRESENT,i[i.indexOf(r.letter)]=null,h.value[r.letter]||(h.value[r.letter]=f.PRESENT))}),e.value.forEach(r=>{r.state||(r.state=f.ABSENT,h.value[r.letter]||(h.value[r.letter]=f.ABSENT))}),N=!1,e.value.every(r=>r.state===f.CORRECT)?setTimeout(()=>{d.value=G(),E(["Genius","Magnificent","Impressive","Splendid","Great","Phew"][a.value],-1),C.value=!0},1600):a.value<c.value.length-1?(a.value++,setTimeout(()=>{N=!0},1600)):setTimeout(()=>{E(u.toUpperCase(),-1)},1600)}else A(),E("Not enough letters")}function E(s,i=1e3){o.value=s,i>0&&setTimeout(()=>{o.value=""},i)}function A(){w.value=a.value,setTimeout(()=>{w.value=-1},1e3)}const F={[f.CORRECT]:"\u{1F7E9}",[f.PRESENT]:"\u{1F7E8}",[f.ABSENT]:"\u2B1C",[f.INITIAL]:null};function G(){return c.value.slice(0,a.value+1).map(s=>s.map(i=>F[i.state]).join("")).join(`
`)}return(s,i)=>(n(),l(y,null,[D(U,null,{default:q(()=>[o.value?(n(),l("div",de,[W(g(o.value)+" ",1),d.value?(n(),l("pre",fe,g(d.value),1)):T("",!0)])):T("",!0)]),_:1}),ve,v("div",pe,[(n(!0),l(y,null,k(c.value,(r,_)=>(n(),l("div",{class:b(["row",w.value===_&&"shake",C.value&&a.value===_&&"jump"])},[(n(!0),l(y,null,k(r,(m,R)=>(n(),l("div",{class:b(["tile",m.letter&&"filled",m.state&&"revealed"])},[v("div",{class:"front",style:O({transitionDelay:`${R*300}ms`})},g(m.letter),5),v("div",{class:b(["back",m.state]),style:O({transitionDelay:`${R*300}ms`,animationDelay:`${R*100}ms`})},g(m.letter),7)],2))),256))],2))),256))]),D(ue,{onKey:L,"letter-states":h.value},null,8,["letter-states"])],64))}});var _e=z(he,[["__scopeId","data-v-72029378"]]);window.addEventListener("resize",P);P();function P(){document.body.style.setProperty("--vh",window.innerHeight+"px")}Z(_e).mount("#app");
