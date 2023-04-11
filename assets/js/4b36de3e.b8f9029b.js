"use strict";(self.webpackChunkatlas_docs_workshop=self.webpackChunkatlas_docs_workshop||[]).push([[361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),s=a(2466),l=a(6550),i=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},7563:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),s=a(5162),l=a(4996);const i={sidebar_position:1},c="Access your cluster",u={unversionedId:"access-your-cluster/access-the-atlas-cluster",id:"access-your-cluster/access-the-atlas-cluster",title:"Access your cluster",description:"Data Explorer is enabled by default and is accsessible via the Browse Collections button on the cluster tile, or Collections tab on the cluster view.",source:"@site/docs/access-your-cluster/access-the-atlas-cluster.md",sourceDirName:"access-your-cluster",slug:"/access-your-cluster/access-the-atlas-cluster",permalink:"/docs/access-your-cluster/access-the-atlas-cluster",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/access-your-cluster/access-the-atlas-cluster.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Access Your Cluster - Excersize Two",permalink:"/docs/category/access-your-cluster---excersize-two"},next:{title:"Indexing and Explain Plans - Excersize Three",permalink:"/docs/category/indexing-and-explain-plans---excersize-three"}},d={},p=[{value:"Edit/Add Documents",id:"editadd-documents",level:4},{value:"Preview",id:"preview",level:4},{value:"Install compass",id:"install-compass",level:3},{value:"Use compass",id:"use-compass",level:3},{value:"Preview",id:"preview-1",level:4},{value:"Install the <code>mongosh</code>",id:"install-the-mongosh",level:3}],m=e=>{let{children:t,color:a,link:n}=e;return(0,r.kt)("a",{href:n},(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"}},t))},h={toc:p,Highlight:m},g="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-your-cluster"},"Access your cluster"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"data-explorer",label:"1. Data Explorer",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  Data Explorer is enabled by default and is accsessible via the ",(0,r.kt)("strong",{parentName:"p"},"Browse Collections")," button on the cluster tile, or ",(0,r.kt)("strong",{parentName:"p"},"Collections")," tab on the cluster view."),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/data-explorer-dbs.png"),border:"1px",width:"700"}),(0,r.kt)("h4",{id:"editadd-documents"},"Edit/Add Documents"),(0,r.kt)("p",null,"  Please see the following ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/atlas-ui/documents/#create--view--update--and-delete-documents"},"documentation"),' on how to "Modify", "Create" and "Delete" documents.'),(0,r.kt)("p",null,"  As an excersize you can create a collection under ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," database named ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),":"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/createCollection.png"),border:"1px",width:"700"}),(0,r.kt)("p",null,"  Insert an array of user documents in the insert document tab."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Alice",\n    "age": 26,\n    "email": "alice@abc.com"\n  },\n  {\n    "name": "Bob",\n    "age": 43,\n    "email": "bob@def.com"\n  },\n  {\n    "name": "Carol",\n    "age": 19,\n    "email": "carol@xyz.com"\n  }\n]\n')),(0,r.kt)("h4",{id:"preview"},"Preview"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/insertData.png"),border:"1px",width:"700"})),(0,r.kt)(s.Z,{value:"compass",label:"2. Compass",mdxType:"TabItem"},(0,r.kt)("h3",{id:"install-compass"},"Install compass"),(0,r.kt)("admonition",{title:"Choose Your Platform",type:"tip"},(0,r.kt)("br",null),(0,r.kt)("div",{className:"compass-platforms"},(0,r.kt)(m,{color:"#555555",link:"https://downloads.mongodb.com/compass/mongodb-compass-latest-darwin-x64.dmg",mdxType:"Highlight"},"Compass on MacOS")," ",(0,r.kt)(m,{color:"#00A4EF",link:"https://downloads.mongodb.com/compass/mongodb-compass-1.36.1-win32-x64.exe",mdxType:"Highlight"},"Compass on Windows")," ",(0,r.kt)(m,{color:"#E95420",link:"https://downloads.mongodb.com/compass/mongodb-compass_1.36.1_amd64.deb",mdxType:"Highlight"},"Compass on Ubuntu"))),(0,r.kt)("p",null,"Go to the following ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/compass/master/install/"},"guide")," to install your compass relevant binary on your working station OS."),(0,r.kt)("h3",{id:"use-compass"},"Use compass"),(0,r.kt)("p",null,"Once you open compass you will get the connection string input screen."),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/default-connection.png"),border:"1px",width:"700"}),(0,r.kt)("p",null,'Use the Atlas "Connection" tab to get the string you need to access your Atlas deployment.'),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/atlas-compass.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"Copy the connection string."),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/copy-paste-conn.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"Paste and connect via Compass:"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/compass-connect.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"Please see the following ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/compass/current/documents/"},"documentation"),' on how to "Modify", "Create" and "Delete" documents.'),(0,r.kt)("p",null,"As an excersize you can create a collection under ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," database named ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),":"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/compass-database-create.png"),width:"500"}),(0,r.kt)("p",null,'  Insert an array of user documents in the "ADD DATA" > "Insert document" json view.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Alice",\n    "age": 26,\n    "email": "alice@abc.com"\n  },\n  {\n    "name": "Bob",\n    "age": 43,\n    "email": "bob@def.com"\n  },\n  {\n    "name": "Carol",\n    "age": 19,\n    "email": "carol@xyz.com"\n  }\n]\n')),(0,r.kt)("h4",{id:"preview-1"},"Preview"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/insertData.png"),width:"500"})),(0,r.kt)(s.Z,{value:"shell",label:"3. MongoDB Shell",mdxType:"TabItem"},(0,r.kt)("h3",{id:"install-the-mongosh"},"Install the ",(0,r.kt)("inlineCode",{parentName:"h3"},"mongosh")),(0,r.kt)("p",null,'Go to the connection tab on your Atlas cluster and choose the "Connect with MongoDB Shell" option'),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/atlas-shell.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"Download the relevant shell for your Operating System and lunch the connection command"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,l.Z)("/img/chapter-1-atlas/shell-connect.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"See the following ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/mongodb-shell/connect/"},"guide")," for more details."),(0,r.kt)("p",null,"As an excersize you can create a collection under ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," database named ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"show databases\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"use test\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'db.users.insertMany([\n    {\n      "name": "Alice",\n      "age": 26,\n      "email": "alice@abc.com"\n    },\n    {\n      "name": "Bob",\n      "age": 43,\n      "email": "bob@def.com"\n    },\n    {\n      "name": "Carol",\n      "age": 19,\n      "email": "carol@xyz.com"\n    }\n])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.users.find()\n")))))}b.isMDXComponent=!0}}]);