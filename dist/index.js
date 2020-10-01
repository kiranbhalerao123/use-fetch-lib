"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),s=e(t),a=e(require("axios"));class i{constructor(e,t){this.baseUrl=e,this.defaultHeaders={},this.get=(e,t,s,a)=>this.fetch(e,t,a),this.post=(e,t,s,a)=>this.fetchWithBody("POST",e,t,s,a),this.delete=(e,t,s,a)=>this.fetchWithBody("DELETE",e,t,s,a),this.put=(e,t,s,a)=>this.fetchWithBody("PUT",e,t,s,a),this.absUrl=e=>this.baseUrl+e,this.getHeaders=e=>e?Object.assign({Authorization:e,"Access-Control-Allow-Origin":"*"},this.defaultHeaders):this.defaultHeaders,this.handleCancel=()=>null,this.fetch=(e,t,s={})=>a.get(this.absUrl(e),Object.assign(Object.assign({},s),{headers:Object.assign(Object.assign({},this.getHeaders(t)),"object"==typeof s.headers?s.headers:{})})).then(e=>e).catch(e=>{if(a.isCancel(e))return this.handleCancel();throw e}),this.fetchWithBody=(e,t,s,i={},n={})=>a(Object.assign(Object.assign({method:e,url:this.absUrl(t),data:i},n),{headers:Object.assign(Object.assign({},this.getHeaders(s)),"object"==typeof n.headers?n.headers:{})})).then(e=>e).catch(e=>{if(a.isCancel(e))return this.handleCancel();throw e}),this.defaultHeaders=t||{}}}const n=t.createContext({authorizationToken:"",HttpService:new i(""),isProviderAdded:!1,cacheStore:{},updateCache:()=>{}});const c=e=>{try{return e.response&&e.response.data&&e.response.data.message||e.message}catch(t){return e}};exports.UseFetchProvider=e=>{const{children:a,baseUrl:c,defaultHeaders:r={},authorizationToken:o}=e,d=new i(c,r),[h,l]=t.useState({});return s.createElement(n.Provider,{value:{authorizationToken:o,HttpService:d,isProviderAdded:!0,cacheStore:h,updateCache:(e,t)=>l(s=>Object.assign(Object.assign({},s),{[e]:t}))}},a)},exports.useFetch=e=>{"string"==typeof e&&(e={url:e});const{url:s,method:i="get",mockData:r,shouldDispatch:o,cancelable:d=!1,cache:h=!1,shouldUseAuthToken:l=!0,dependencies:u,before:f=(()=>{}),after:g=(()=>{}),alter:b,options:p={}}=e,{authorizationToken:j,HttpService:v,isProviderAdded:O,cacheStore:C,updateCache:y}=t.useContext(n);if(!O)throw new Error("You must wrap your higher level(parent) component with UseFetchProvider, before using useFetch 😬");let k=(e=>{let t="";return t="function"==typeof e?e():e,t})(j);const P=u||[],w=!!r,F=l?k:null,H="get"===i&&h;let T=a.CancelToken.source();const U={data:r,status:{isPending:!1,isRejected:!1,isFulfilled:!1,isCached:!1,isMocked:w,err:""}},[m,S]=t.useState(U),x=e=>{return t=void 0,a=void 0,r=function*(){var t,a;if(f(),S({data:m.data?m.data:void 0,status:{isFulfilled:!1,isPending:!0,isRejected:!1,isCached:!1,isMocked:w,err:""}}),H){let e=C[s];e&&(e=Object.assign(Object.assign({},e),{status:Object.assign(Object.assign({},e.status),{isMocked:!1,isFulfilled:!0,isCached:!0})}),S(e),g(e))}null===(a=(t=v)[i])||void 0===a||a.call(t,s,F,e,Object.assign(Object.assign({},p),{cancelToken:T.token})).then(({data:e})=>{let t=e;"function"==typeof b&&(t=b(e));const a={data:t,status:{isFulfilled:!0,isPending:!1,isRejected:!1,isMocked:!1,isCached:!1,err:""}};S(a),g(a),H&&y(s,a)}).catch(e=>{const t={data:m.data,status:{isFulfilled:!1,isPending:!1,isCached:!1,isRejected:!0,isMocked:w,err:c(e)}};S(t),g(t)})},new((n=void 0)||(n=Promise))((function(e,s){function i(e){try{o(r.next(e))}catch(e){s(e)}}function c(e){try{o(r.throw(e))}catch(e){s(e)}}function o(t){t.done?e(t.value):new n((function(e){e(t.value)})).then(i,c)}o((r=r.apply(t,a||[])).next())}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t,a,n,r};return t.useEffect(()=>{o?("function"==typeof o&&o()||"boolean"==typeof o&&o)&&x():void 0===o&&void 0!==u&&x()},[...P]),t.useEffect(()=>()=>{d&&T.cancel()},[]),[m,x,e=>{if(m.data){const t=e(m.data);(e=>{H&&y(s,{data:e,status:Object.assign(Object.assign({},U.status),{isCached:!0,isMocked:!1,isFulfilled:!0})})})(t),S({data:t,status:{isFulfilled:!0,isPending:!1,isRejected:!1,isMocked:!1,isCached:!1,err:""}})}}]};
