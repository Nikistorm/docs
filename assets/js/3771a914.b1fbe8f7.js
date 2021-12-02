"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4222],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),g=s(t),u=o,m=g["".concat(p,".").concat(u)]||g[u]||c[u]||l;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5520:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return g}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),i=["components"],a={sidebar_position:10,title:"\u521b\u5efa\u63d2\u4ef6"},p="\u521b\u5efa\u63d2\u4ef6",s={unversionedId:"developer_cookbook/tkeel_plugin/create",id:"developer_cookbook/tkeel_plugin/create",isDocsHomePage:!1,title:"\u521b\u5efa\u63d2\u4ef6",description:"\u76f8\u4fe1\u60a8\u5e94\u8be5\u5df2\u7ecf\u770b\u89c1\u4e86 tKeel \u63d2\u4ef6\u529f\u80fd\u7684\u5f3a\u5927\uff0c\u672c\u9875\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u521b\u5efa\u4e00\u6b3e\u81ea\u5df1\u5fc3\u4eea\u7684\u63d2\u4ef6\uff0c",source:"@site/docs/developer_cookbook/tkeel_plugin/create.md",sourceDirName:"developer_cookbook/tkeel_plugin",slug:"/developer_cookbook/tkeel_plugin/create",permalink:"/docs/developer_cookbook/tkeel_plugin/create",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/tkeel_plugin/create.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u521b\u5efa\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"OpenAPI",permalink:"/docs/developer_cookbook/tkeel_plugin/openapi"},next:{title:"\u5b89\u5168\u4f53\u7cfb\u8bbe\u8ba1",permalink:"/docs/developer_cookbook/security/SECURITY-001-how_designed"}},d=[{value:"\u4f7f\u7528 Artisan \u5feb\u901f\u642d\u5efa",id:"\u4f7f\u7528-artisan-\u5feb\u901f\u642d\u5efa",children:[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[],level:3},{value:"\u5f00\u53d1\u63d2\u4ef6",id:"\u5f00\u53d1\u63d2\u4ef6",children:[{value:"\u65b0\u5efa\u9879\u76ee",id:"\u65b0\u5efa\u9879\u76ee",children:[],level:4},{value:"\u7f16\u5199\u4e1a\u52a1\u903b\u8f91",id:"\u7f16\u5199\u4e1a\u52a1\u903b\u8f91",children:[{value:"\u6a21\u677f\u4f7f\u7528\u5b9e\u8df5",id:"\u6a21\u677f\u4f7f\u7528\u5b9e\u8df5",children:[],level:5}],level:4},{value:"\u6784\u5efa\u63d2\u4ef6\u955c\u50cf",id:"\u6784\u5efa\u63d2\u4ef6\u955c\u50cf",children:[],level:4},{value:"\u5c06\u670d\u52a1\u6253\u5305\u6210 chart \u5e76\u63d0\u4ea4\u4ed3\u5e93",id:"\u5c06\u670d\u52a1\u6253\u5305\u6210-chart-\u5e76\u63d0\u4ea4\u4ed3\u5e93",children:[],level:4},{value:"\u5b89\u88c5 tKeel CLI \u5de5\u5177\u7528\u4e8e\u5b89\u88c5\u3001\u5378\u8f7d\u3001\u7ba1\u7406\u63d2\u4ef6",id:"\u5b89\u88c5-tkeel-cli-\u5de5\u5177\u7528\u4e8e\u5b89\u88c5\u5378\u8f7d\u7ba1\u7406\u63d2\u4ef6",children:[],level:4}],level:3}],level:2}],c={toc:d};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u521b\u5efa\u63d2\u4ef6"},"\u521b\u5efa\u63d2\u4ef6"),(0,l.kt)("p",null,"\u76f8\u4fe1\u60a8\u5e94\u8be5\u5df2\u7ecf\u770b\u89c1\u4e86 tKeel \u63d2\u4ef6\u529f\u80fd\u7684\u5f3a\u5927\uff0c\u672c\u9875\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u521b\u5efa\u4e00\u6b3e\u81ea\u5df1\u5fc3\u4eea\u7684\u63d2\u4ef6\uff0c"),(0,l.kt)("p",null,"\u901a\u8fc7 tKeel CLI \u5b8c\u6210\u5728 tKeel \u4e0a\u5b89\u88c5\u548c\u6ce8\u518c\u4e00\u4e2a\u6307\u5b9a helm \u6e90\u7684\u63d2\u4ef6\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ","[\u5728 tKeel \u4e0a\u5b89\u88c5\u63d2\u4ef6]"," \u548c\u5728 ","[tKeel \u4e0a\u6ce8\u518c\u63d2\u4ef6]","\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-artisan-\u5feb\u901f\u642d\u5efa"},"\u4f7f\u7528 Artisan \u5feb\u901f\u642d\u5efa"),(0,l.kt)("p",null,"\u6211\u4eec\u6781\u529b\u63a8\u8350\u60a8\u4f7f\u7528\u6211\u4eec\u63a8\u51fa\u7684\u5f00\u53d1\u8005\u5de5\u5177 ",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/tools/artisan"},"artisan"),"\uff0c\u56e0\u4e3a\u6211\u4eec\u5c06\u4e00\u4e9b\u80fd\u81ea\u52a8\u5316\u7684\u5f00\u53d1\u6d41\u7a0b\u90fd\u96c6\u6210\u5728\u4e86\u8be5\u5de5\u5177\u4e2d\uff0c\u5b83\u80fd\u5e2e\u52a9\u60a8\u7b80\u5355\u4fbf\u6377\u7684\u5f00\u53d1\u51fa\u4e00\u6b3e\u63d2\u4ef6\u5e94\u7528\u3002"),(0,l.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/#install-and-initialize-your-tkeel"},"tKeel \u5e73\u53f0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/cli#install-cli"},"tKeel CLI")," \u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u7684 Go \u7f16\u7a0b\u80fd\u529b")),(0,l.kt)("h3",{id:"\u5f00\u53d1\u63d2\u4ef6"},"\u5f00\u53d1\u63d2\u4ef6"),(0,l.kt)("h4",{id:"\u65b0\u5efa\u9879\u76ee"},"\u65b0\u5efa\u9879\u76ee"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/tools/artisan#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E9%A1%B9%E7%9B%AE"},"artisan new")," \u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5e76\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ artisan new github.com/tkeel-io/newPlugin\n\ud83d\ude80 Creating service newPlugin, layout repo is https://github.com/tkeel-io/tkeel-template-go.git, please wait a moment.\n\nhint: Pulling without specifying how to reconcile divergent branches is\nhint: discouraged. You can squelch this message by running one of the following\nhint: commands sometime before your next pull:\nhint:\nhint:   git config pull.rebase false  # merge (the default strategy)\nhint:   git config pull.rebase true   # rebase\nhint:   git config pull.ff only       # fast-forward only\nhint:\nhint: You can replace "git config" with "git config --global" to set a default\nhint: preference for all repositories. You can also pass --rebase, --no-rebase,\nhint: or --ff-only on the command line to override the configured default per\nhint: invocation.\nFrom https://github.com/tkeel-io/tkeel-template-go\n   477e13a..1d3e547  main       -> origin/main\nUpdating 477e13a..1d3e547\nFast-forward\n Makefile                                           |  25 +-\n api/apidocs.swagger.json                           | 451 +++++++++++++++++++++\n api/helloworld/v1/error.pb.go                      | 156 +++++++\n api/helloworld/v1/error_errors.pb.go               |  44 ++\n api/helloworld/v1/greeter.proto                    |  22 +-\n api/helloworld/v1/greeter_http.pb.go               |  11 +-\n api/openapi/v1/server.pb.go                        |  32 +-\n api/openapi/v1/server.proto                        |   2 +-\n api/openapi/v1/server_grpc.pb.go                   |  24 +-\n api/openapi/v1/server_http.pb.go                   |  69 ++--\n go.mod                                             |   7 +-\n go.sum                                             |  19 +-\n third_party/markdown-templates/error.md            |  12 +\n third_party/markdown-templates/method.md           |  84 ++++\n third_party/markdown-templates/schema.md           |  23 ++\n .../markdown-templates/schema_description.md       |   1 +\n third_party/markdown-templates/tag.md              |  15 +\n third_party/openapi/v1/openapi.proto               |  42 +-\n 18 files changed, 936 insertions(+), 103 deletions(-)\n create mode 100644 api/apidocs.swagger.json\n create mode 100644 api/helloworld/v1/error.pb.go\n create mode 100644 api/helloworld/v1/error_errors.pb.go\n create mode 100644 third_party/markdown-templates/error.md\n create mode 100644 third_party/markdown-templates/method.md\n create mode 100644 third_party/markdown-templates/schema.md\n create mode 100644 third_party/markdown-templates/schema_description.md\n create mode 100644 third_party/markdown-templates/tag.md\n\nCREATED newPlugin/.gitignore (600 bytes)\nCREATED newPlugin/Dockerfile (409 bytes)\nCREATED newPlugin/LICENSE (1065 bytes)\nCREATED newPlugin/Makefile (2009 bytes)\nCREATED newPlugin/README.md (1621 bytes)\nCREATED newPlugin/api/apidocs.swagger.json (11082 bytes)\nCREATED newPlugin/api/helloworld/v1/error.pb.go (5728 bytes)\nCREATED newPlugin/api/helloworld/v1/error.proto (617 bytes)\nCREATED newPlugin/api/helloworld/v1/error_errors.pb.go (1499 bytes)\nCREATED newPlugin/api/helloworld/v1/greeter.pb.go (10706 bytes)\nCREATED newPlugin/api/helloworld/v1/greeter.proto (1556 bytes)\nCREATED newPlugin/api/helloworld/v1/greeter_grpc.pb.go (3464 bytes)\nCREATED newPlugin/api/helloworld/v1/greeter_http.pb.go (2352 bytes)\nCREATED newPlugin/api/openapi/v1/server.pb.go (8011 bytes)\nCREATED newPlugin/api/openapi/v1/server.proto (1289 bytes)\nCREATED newPlugin/api/openapi/v1/server_grpc.pb.go (9512 bytes)\nCREATED newPlugin/api/openapi/v1/server_http.pb.go (6050 bytes)\nCREATED newPlugin/cmd/newPlugin/main.go (1619 bytes)\nCREATED newPlugin/go.mod (755 bytes)\nCREATED newPlugin/go.sum (19705 bytes)\nCREATED newPlugin/pkg/server/grpc.go (192 bytes)\nCREATED newPlugin/pkg/server/http.go (196 bytes)\nCREATED newPlugin/pkg/service/README.md (10 bytes)\nCREATED newPlugin/pkg/service/greeter.go (660 bytes)\nCREATED newPlugin/pkg/service/openapi.go (1988 bytes)\nCREATED newPlugin/pkg/util/util.go (416 bytes)\nCREATED newPlugin/third_party/README.md (14 bytes)\nCREATED newPlugin/third_party/google/api/annotations.proto (1051 bytes)\nCREATED newPlugin/third_party/google/api/http.proto (15140 bytes)\nCREATED newPlugin/third_party/google/api/httpbody.proto (2671 bytes)\nCREATED newPlugin/third_party/google/protobuf/descriptor.proto (38027 bytes)\nCREATED newPlugin/third_party/google/protobuf/empty.proto (2428 bytes)\nCREATED newPlugin/third_party/markdown-templates/error.md (205 bytes)\nCREATED newPlugin/third_party/markdown-templates/method.md (2488 bytes)\nCREATED newPlugin/third_party/markdown-templates/schema.md (1125 bytes)\nCREATED newPlugin/third_party/markdown-templates/schema_description.md (86 bytes)\nCREATED newPlugin/third_party/markdown-templates/tag.md (327 bytes)\nCREATED newPlugin/third_party/openapi/v1/openapi.proto (3433 bytes)\nCREATED newPlugin/third_party/protoc-gen-openapiv2/options/annotations.proto (1760 bytes)\nCREATED newPlugin/third_party/protoc-gen-openapiv2/options/openapiv2.proto (24777 bytes)\nCREATED newPlugin/third_party/validate/README.md (81 bytes)\nCREATED newPlugin/third_party/validate/validate.proto (31270 bytes)\n\n\ud83c\udf7a Project creation succeeded newPlugin\n\ud83d\udcbb Use the following command to start the project \ud83d\udc47:\n\n$ cd newPlugin\n$ go generate ./...\n$ go build -o ./bin/ ./...\n$ ./bin/newPlugin\n\n')),(0,l.kt)("h4",{id:"\u7f16\u5199\u4e1a\u52a1\u903b\u8f91"},"\u7f16\u5199\u4e1a\u52a1\u903b\u8f91"),(0,l.kt)("p",null,"\u6839\u636e\u547d\u4ee4\u884c\u63d0\u793a\u6307\u793a\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u8fdb\u5165\u5230\u9879\u76ee\u76ee\u5f55\u7136\u540e\u8fdb\u884c\u4e00\u4e9b\u9879\u76ee\u521d\u59cb\u5316\u64cd\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ cd newPlugin\n\n# \u8fdb\u884c\u4e00\u4e9b\u4ee3\u7801\u521d\u59cb\n$ go generate ./...\n\n# \u6784\u5efa\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\n$ go build -o ./bin/ ./...\n\n# \u8fd0\u884c\u670d\u52a1\n$ ./bin/newPlugin\n2021-12-01T20:41:56+08:00   debug   http/server.go:47   HTTP Server listen: :31234  {"app": "hello"}\n2021-12-01T20:41:56+08:00   debug   grpc/server.go:43   GRPC Server listen: :31233  {"app": "hello"}\n2021-12-01T20:41:56+08:00   info    app/app.go:33   app hello running   {"app": "hello"}\n2021-12-01T20:41:59+08:00   error   http/server.go:50   error http serve: http: Server closed   {"app": "hello"}\n\n')),(0,l.kt)("p",null,"\u60a8\u9700\u8981\u505a\u7684\u5c31\u662f\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"pkg/service/")," \u4e0b\u5bf9\u5e94\u670d\u52a1\u7684\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\uff0c\u6211\u4eec\u4ee5\u6a21\u677f\u751f\u6210\u7684 greeter \u670d\u52a1\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat pkg/service/greeter.go\n\npackage service\n\nimport (\n    "context"\n\n    v1 "github.com/tkeel-io/newPlugin/api/helloworld/v1"\n)\n\n// GreeterService is a greeter service.\ntype GreeterService struct {\n    v1.UnimplementedGreeterServer\n}\n\n// NewGreeterService new a greeter service.\nfunc NewGreeterService() *GreeterService {\n    return &GreeterService{\n        UnimplementedGreeterServer: v1.UnimplementedGreeterServer{},\n    }\n}\n\n// SayHello implements helloworld.GreeterServer.\nfunc (s *GreeterService) SayHello(ctx context.Context, in *v1.HelloRequest) (*v1.HelloResponse, error) {\n    return &v1.HelloResponse{Message: "Hello " + in.GetName() + " " + in.GetTest().GetAaa() + " " + in.GetTest().GetBbb()}, nil\n}\n\n')),(0,l.kt)("p",null,"artisan \u5e2e\u52a9\u6211\u4eec\u751f\u6210\u7684\u9879\u76ee\u7ed3\u6784\u5927\u6982\u662f\u8fd9\u6837\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u251c\u2500\u2500 apidocs.swagger.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 helloworld\n\u2502\xa0\xa0 \u2514\u2500\u2500 openapi\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 newPlugin\n\u251c\u2500\u2500 cmd\n\u2502\xa0\xa0 \u2514\u2500\u2500 newPlugin\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 pkg\n\u2502\xa0\xa0 \u251c\u2500\u2500 server\n\u2502\xa0\xa0 \u251c\u2500\u2500 service\n\u2502\xa0\xa0 \u2514\u2500\u2500 util\n\u2514\u2500\u2500 third_party\n    \u251c\u2500\u2500 README.md\n    \u251c\u2500\u2500 google\n    \u251c\u2500\u2500 markdown-templates\n    \u251c\u2500\u2500 openapi\n    \u251c\u2500\u2500 protoc-gen-openapiv2\n    \u2514\u2500\u2500 validate\n")),(0,l.kt)("h5",{id:"\u6a21\u677f\u4f7f\u7528\u5b9e\u8df5"},"\u6a21\u677f\u4f7f\u7528\u5b9e\u8df5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"api/xxx/yyy.proto")," \u4e2d\u5b9a\u4e49\u63a5\u53e3\u6d88\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"cmd/newPlugin/main.go")," \u4e2d\u6ce8\u518c\u670d\u52a1\uff08server\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"pkg/service/xxx.go")," \u4e2d\u5bf9\u5e94\u7f16\u5199\u4e1a\u52a1\u903b\u8f91")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udce2 \u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/tools/artisan#%E7%94%9F%E6%88%90-protobuf"},"artisan")," \u751f\u6210\u66f4\u591a\u60a8\u9700\u8981\u7684 protobuf \u6587\u4ef6\uff0c\u5e76\u7f16\u5199\u81ea\u5df1\u60f3\u8981\u7684\u4e1a\u52a1\u903b\u8f91\u3002")),(0,l.kt)("h4",{id:"\u6784\u5efa\u63d2\u4ef6\u955c\u50cf"},"\u6784\u5efa\u63d2\u4ef6\u955c\u50cf"),(0,l.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u6784\u5efa docker \u955c\u50cf\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t helloworld:v1 . \n")),(0,l.kt)("p",null,"\u63a8\u9001\u955c\u50cf\u5230\u8fdc\u7a0b\u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker push tkeelio/helloworld:v1\n")),(0,l.kt)("h4",{id:"\u5c06\u670d\u52a1\u6253\u5305\u6210-chart-\u5e76\u63d0\u4ea4\u4ed3\u5e93"},"\u5c06\u670d\u52a1\u6253\u5305\u6210 chart \u5e76\u63d0\u4ea4\u4ed3\u5e93"),(0,l.kt)("p",null,"\u5728\u60a8\u5b8c\u6210\u4e86\u670d\u52a1\u955c\u50cf\u6253\u5305\u4e4b\u540e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/zh/docs/topics/charts/"},"Helm Chart")," \u4e3a\u670d\u52a1\u6253\u5305\u6210\u4e00\u4e2a Chart \u5305\uff0c\u5e76\u5c06 Chart \u4e0a\u4f20\u81f3\u4e00\u4e2a\u7f51\u7edc\u53ef\u8fbe\u7684\u4ed3\u5e93\u5185\u5373\u53ef\u3002"),(0,l.kt)("h4",{id:"\u5b89\u88c5-tkeel-cli-\u5de5\u5177\u7528\u4e8e\u5b89\u88c5\u5378\u8f7d\u7ba1\u7406\u63d2\u4ef6"},"\u5b89\u88c5 tKeel CLI \u5de5\u5177\u7528\u4e8e\u5b89\u88c5\u3001\u5378\u8f7d\u3001\u7ba1\u7406\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u884c\u52a8\u4e2d\uff0c\u6211\u4eec\u6709\u4e00\u4efd\u53eb\u505a ",(0,l.kt)("a",{parentName:"p",href:"/docs/getting_started/how-to-use-plugin"},"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd")," \u7684\u6f14\u793a\u6587\u6863\uff0c\u7b80\u5355\u4ecb\u7ecd\u4e86\u5982\u4f55\u5feb\u901f\u4f7f\u7528\u63d2\u4ef6\u3002"))}g.isMDXComponent=!0}}]);