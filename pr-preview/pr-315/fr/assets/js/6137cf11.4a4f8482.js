"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9051],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2162:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return c}});var n=t(3117),o=(t(7294),t(3905));const l={sidebar_label:"gm world Overview"},i="\u2600\ufe0f\xa0Introduction",a={unversionedId:"developers/gm-world",id:"developers/gm-world",title:"\u2600\ufe0f\xa0Introduction",description:"In this tutorial, we will build a sovereign gm world rollup using rollmint",source:"@site/docs/developers/gm-world.md",sourceDirName:"developers",slug:"/developers/gm-world",permalink:"/pr-preview/pr-315/fr/developers/gm-world",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-world.md",tags:[],version:"current",frontMatter:{sidebar_label:"gm world Overview"},sidebar:"developers",previous:{title:"gm world",permalink:"/pr-preview/pr-315/fr/category/gm-world"},next:{title:"Setup",permalink:"/pr-preview/pr-315/fr/developers/gm-setup"}},p={},c=[{value:"Table of Contents",id:"table-of-contents",level:2}],u={toc:c};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0fintroduction"},"\u2600\ufe0f\xa0Introduction"),(0,o.kt)("p",null,"In this tutorial, we will build a sovereign ",(0,o.kt)("inlineCode",{parentName:"p"},"gm world")," rollup using rollmint\nand Celestia\u2019s data availability and consensus layer to submit rollmint blocks."),(0,o.kt)("p",null,"This tutorial will cover setting up a Celestia Light Node, Ignite CLI, and\nbuilding a Cosmos-SDK application-specific rollup blockchain on top of\nCelestia."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK")," is a framework for\nbuilding blockchain applications. The Cosmos Ecosystem uses\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"},"Inter-Blockchain Communication (IBC)"),"\nto allow blockchains to communicate with one another."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-315/fr/developers/gm-world"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-315/fr/developers/gm-setup"},"Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-315/fr/developers/gm-node"},"Run a Light Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-315/fr/developers/gm-rollmint"},"Build a Sovereign Rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-315/fr/developers/gm-query"},"Query your Rollup"))))}s.isMDXComponent=!0}}]);