"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8140],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2910:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={title:"Core",sidebar_position:2},l="Core",p={unversionedId:"concepts/core",id:"concepts/core",isDocsHomePage:!1,title:"Core",description:"Core \u662f tKeel \u7269\u8054\u7f51\u5e73\u53f0\u7684\u6570\u636e\u4e2d\u5fc3\uff0c\u9ad8\u6027\u80fd\u3001\u53ef\u62d3\u5c55\u7684\u8f7b\u91cf\u7ea7\u4e0b\u4e00\u4ee3\u6570\u5b57\u5316\u6570\u636e\u5f15\u64ce\u3002",source:"@site/docs/concepts/core.md",sourceDirName:"concepts",slug:"/concepts/core",permalink:"/docs/zh-cn/concepts/core",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/concepts/core.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Core",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"tKeel",permalink:"/docs/zh-cn/"},next:{title:"Keel",permalink:"/docs/zh-cn/internal_concepts/keel"}},u=[{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",children:[],level:2}],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"core"},"Core"),(0,c.kt)("p",null,"Core \u662f tKeel \u7269\u8054\u7f51\u5e73\u53f0\u7684\u6570\u636e\u4e2d\u5fc3\uff0c\u9ad8\u6027\u80fd\u3001\u53ef\u62d3\u5c55\u7684\u8f7b\u91cf\u7ea7\u4e0b\u4e00\u4ee3\u6570\u5b57\u5316\u6570\u636e\u5f15\u64ce\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u4ee5 \u5b9e\u4f53\uff08entity\uff09 \u4e3a\u64cd\u4f5c\u5355\u5143\uff0c\u901a\u8fc7\u7b80\u6613\u660e\u4e86\u7684 API \u5bf9\u5916\u63d0\u4f9b\u8bfb\u5199\u80fd\u529b\uff08\u5c5e\u6027\u8bfb\u5199\u3001\u65f6\u5e8f\u67e5\u8be2\u3001\u8ba2\u9605\uff0c\u6620\u5c04\u7b49\uff09\u3002"),(0,c.kt)("h2",{id:"\u67b6\u6784\u8bbe\u8ba1"},"\u67b6\u6784\u8bbe\u8ba1"))}f.isMDXComponent=!0}}]);