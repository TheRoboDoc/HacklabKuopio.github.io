import{x as f,_ as v,p as d,A as l,m as _,B as g,y as h,z as r}from"./entry.3b1cf310.js";import{q as y,h as u,e as w,j as C,u as $}from"./query.6ab00f4a.js";import{_ as N}from"./nuxt-link.1fdc326b.js";import{w as c,s as P,u as j,a as x}from"./utils.f4668b63.js";/* empty css                      *//* empty css                    *//* empty css                       *//* empty css                            */const T=async n=>{const{content:t}=f().public;typeof(n==null?void 0:n.params)!="function"&&(n=y(n));const a=n.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${u(a)}.${t.integrity}`}/${w(a)}.json`):c(`/navigation/${u(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./client-db.6b1f1a44.js"),["./client-db.6b1f1a44.js","./entry.3b1cf310.js","./entry.d1b0621b.css","./utils.f4668b63.js","./query.6ab00f4a.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:C(a),previewToken:j("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const S=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=l(n),a=_(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&g("dd-navigation").value){const{navigation:e}=x();return{navigation:e}}const{data:s}=await $(`content-navigation-${u(a.value)}`,()=>T(a.value));return{navigation:s}},render(n){const t=h(),{navigation:a}=n,s=o=>r(N,{to:o._path},()=>o.title),e=(o,p)=>r("ul",p?{"data-level":p}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,p+1)]):r("li",null,s(i)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{S as default};