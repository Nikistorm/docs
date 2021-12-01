"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[6046],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return b}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),a=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=a(e.components);return o.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=a(t),b=n,f=d["".concat(u,".").concat(b)]||d[b]||s[b]||c;return t?o.createElement(f,i(i({ref:r},p),{},{components:t})):o.createElement(f,i({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var a=2;a<c;a++)i[a]=t[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3254:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return p},default:function(){return d}});var o=t(7462),n=t(3366),c=(t(7294),t(3905)),i=["components"],l={title:"\u53d1\u5e03 / \u8ba2\u9605",sidebar_position:2},u="\u53d1\u5e03 / \u8ba2\u9605",a={unversionedId:"developer_cookbook/core/pubsub",id:"developer_cookbook/core/pubsub",isDocsHomePage:!1,title:"\u53d1\u5e03 / \u8ba2\u9605",description:"\u8be5\u7247\u6587\u6863\u5c06\u4f1a\u4e3a\u60a8\u4ecb\u7ecd\u5982\u4f55\u64cd\u4f5c Core \u5b9e\u73b0\u8ba2\u9605\uff0c\u6839\u636e\u60a8\u7684\u573a\u666f\u83b7\u53d6\u4e0d\u540c\u7684\u6570\u636e\u3002",source:"@site/docs/developer_cookbook/core/pubsub.md",sourceDirName:"developer_cookbook/core",slug:"/developer_cookbook/core/pubsub",permalink:"/docs/zh-cn/developer_cookbook/core/pubsub",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/pubsub.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u53d1\u5e03 / \u8ba2\u9605",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u4f53",permalink:"/docs/zh-cn/developer_cookbook/core/entity"},next:{title:"\u5173\u7cfb",permalink:"/docs/zh-cn/developer_cookbook/core/relation"}},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2},{value:"\u521b\u5efa\u8ba2\u9605",id:"\u521b\u5efa\u8ba2\u9605",children:[{value:"\u5173\u4e8e\u8ba2\u9605\u7684\u9ad8\u7ea7\u8bdd\u9898",id:"\u5173\u4e8e\u8ba2\u9605\u7684\u9ad8\u7ea7\u8bdd\u9898",children:[],level:3}],level:2},{value:"\u521b\u5efa\u67e5\u8be2",id:"\u521b\u5efa\u67e5\u8be2",children:[{value:"\u5173\u4e8e\u8ba2\u9605\u7684\u9ad8\u7ea7\u8bdd\u9898",id:"\u5173\u4e8e\u8ba2\u9605\u7684\u9ad8\u7ea7\u8bdd\u9898-1",children:[],level:3}],level:2}],s={toc:p};function d(e){var r=e.components,t=(0,n.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u53d1\u5e03--\u8ba2\u9605"},"\u53d1\u5e03 / \u8ba2\u9605"),(0,c.kt)("p",null,"\u8be5\u7247\u6587\u6863\u5c06\u4f1a\u4e3a\u60a8\u4ecb\u7ecd\u5982\u4f55\u64cd\u4f5c Core \u5b9e\u73b0\u8ba2\u9605\uff0c\u6839\u636e\u60a8\u7684\u573a\u666f\u83b7\u53d6\u4e0d\u540c\u7684\u6570\u636e\u3002"),(0,c.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,c.kt)("p",null,"\u4ec0\u4e48\u662f pub/sub \uff0c\u5b9e\u73b0\u4e86\u4ec0\u4e48\uff0c\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\u3002"),(0,c.kt)("h2",{id:"\u521b\u5efa\u8ba2\u9605"},"\u521b\u5efa\u8ba2\u9605"),(0,c.kt)("h3",{id:"\u5173\u4e8e\u8ba2\u9605\u7684\u9ad8\u7ea7\u8bdd\u9898"},"\u5173\u4e8e\u8ba2\u9605\u7684\u9ad8\u7ea7\u8bdd\u9898"),(0,c.kt)("h2",{id:"\u521b\u5efa\u67e5\u8be2"},"\u521b\u5efa\u67e5\u8be2"),(0,c.kt)("h3",{id:"\u5173\u4e8e\u8ba2\u9605\u7684\u9ad8\u7ea7\u8bdd\u9898-1"},"\u5173\u4e8e\u8ba2\u9605\u7684\u9ad8\u7ea7\u8bdd\u9898"))}d.isMDXComponent=!0}}]);