"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[394],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var a=n(3117),r=(n(7294),n(3905));const o={sidebar_label:"Contract Interaction"},s="Contract Interaction on CosmWasm with Celestia",c={unversionedId:"developers/cosmwasm-contract-interaction",id:"developers/cosmwasm-contract-interaction",title:"Contract Interaction on CosmWasm with Celestia",description:"In the previous steps, we have stored out contract's tx hash in an",source:"@site/docs/developers/cosmwasm-contract-interaction.md",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-interaction",permalink:"/developers/cosmwasm-contract-interaction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-interaction.md",tags:[],version:"current",frontMatter:{sidebar_label:"Contract Interaction"},sidebar:"developers",previous:{title:"Contract Deployment",permalink:"/developers/cosmwasm-contract-deployment"},next:{title:"CosmWasm Resources",permalink:"/developers/cosmwasm-resources"}},i={},l=[{value:"Contract Querying",id:"contract-querying",level:2},{value:"Contract Instantiation",id:"contract-instantiation",level:2},{value:"Contract Interaction",id:"contract-interaction",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-interaction-on-cosmwasm-with-celestia"},"Contract Interaction on CosmWasm with Celestia"),(0,r.kt)("p",null,"In the previous steps, we have stored out contract's tx hash in an\nenvironment variable for later use."),(0,r.kt)("p",null,"Because of the longer time periods of submitting transactions via Rollmint\ndue to waiting on Celestia's Data Availability Layer to confirm block inclusion,\nwe will need to query our  tx hash directly to get information about it."),(0,r.kt)("h2",{id:"contract-querying"},"Contract Querying"),(0,r.kt)("p",null,"Let's start by querying our transaction hash for its code ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"CODE_ID=$(wasmd query tx --type=hash $TX_HASH $CHAINFLAG $NODEIP --output json | jq -r '.logs[0].events[-1].attributes[0].value')\necho $CODE_ID\n")),(0,r.kt)("p",null,"This will give us back the Code ID of the deployed contract."),(0,r.kt)("p",null,"In our case, since it's the first contract deployed on our local network,\nthe value is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("p",null,"Now, we can take a look at the contracts instantiated by this Code ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $CHAINFLAG $NODEIP --output json\n")),(0,r.kt)("p",null,"We get the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"contracts":[],"pagination":{"next_key":null,"total":"0"}}\n')),(0,r.kt)("h2",{id:"contract-instantiation"},"Contract Instantiation"),(0,r.kt)("p",null,"We start instantiating the contract by writing up the following ",(0,r.kt)("inlineCode",{parentName:"p"},"INIT")," message\nfor nameservice contract. Here, we are specifying that ",(0,r.kt)("inlineCode",{parentName:"p"},"purchase_price")," of a name\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"100uwasm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_price")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"999uwasm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'INIT=\'{"purchase_price":{"amount":"100","denom":"uwasm"},"transfer_price":{"amount":"999","denom":"uwasm"}}\'\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from $KEY_NAME --keyring-backend test --label "name service" $TXFLAG -y --no-admin $NODEIP\n')),(0,r.kt)("h2",{id:"contract-interaction"},"Contract Interaction"),(0,r.kt)("p",null,"Now that we instantiated it, we can interact further with the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $CHAINFLAG --output json $NODEIP\nCONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $CHAINFLAG --output json $NODEIP | jq -r '.contracts[-1]')\necho $CONTRACT\n\nwasmd query wasm contract $NODEIP $CONTRACT $CHAINFLAG\nwasmd query bank balances $NODEIP $CONTRACT $CHAINFLAG\n")),(0,r.kt)("p",null,"This allows us to see the contract address, contract details, and\nbank balances."),(0,r.kt)("p",null,"Your output will look similar to below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'{"contracts":["wasm14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s0phg4d"],"pagination":{"next_key":null,"total":"0"}}\nwasm14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s0phg4d\naddress: wasm14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s0phg4d\ncontract_info:\n  admin: ""\n  code_id: "1"\n  created: null\n  creator: wasm1y9ceqvnsnm9xtcdmhrjvv4rslgwfzmrzky2c5z\n  extension: null\n  ibc_port_id: ""\n  label: name service\nbalances: []\npagination:\n  next_key: null\n  total: "0"\n')),(0,r.kt)("p",null,"Now, let's register a name to the contract for our wallet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'REGISTER=\'{"register":{"name":"fred"}}\'\nwasmd tx wasm execute $CONTRACT "$REGISTER" --amount 100uwasm --from $KEY_NAME $TXFLAG $NODEIP --keyring-backend test -y\n')),(0,r.kt)("p",null,"Your output will look similar to below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'DEIP --keyring-backend test -y\ngas estimate: 167533\ncode: 0\ncodespace: ""\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: C147257485B72E7FFA5FDB943C94CE951A37817554339586FFD645AD2AA397C3\n')),(0,r.kt)("p",null,"Next, query the owner of the name record:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'NAME_QUERY=\'{"resolve_record": {"name": "fred"}}\'\nwasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $CHAINFLAG $NODEIP --output json\n')),(0,r.kt)("p",null,"You'll see the owner's address in a JSON response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'{"data":{"address":"wasm1y9ceqvnsnm9xtcdmhrjvv4rslgwfzmrzky2c5z"}}\n')),(0,r.kt)("p",null,"With that, we have instantiated and interacted with the CosmWasm nameservice\nsmart contract using Celestia!"))}p.isMDXComponent=!0}}]);