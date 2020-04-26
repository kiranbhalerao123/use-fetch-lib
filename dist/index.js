"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),s=e(t),i=e(require("axios"));class a{constructor(e){this.baseUrl=e,this.get=(e,t,s,i)=>this.fetch(e,t,i),this.post=(e,t,s,i)=>this.fetchWithBody("POST",e,t,s,i),this.delete=(e,t,s,i)=>this.fetchWithBody("DELETE",e,t,s,i),this.put=(e,t,s,i)=>this.fetchWithBody("PUT",e,t,s,i),this.absUrl=e=>this.baseUrl+e,this.getHeaders=e=>e?{Authorization:e,"Access-Control-Allow-Origin":"*"}:{},this.fetch=(e,t,s={})=>i.get(this.absUrl(e),Object.assign(Object.assign({},s),{headers:Object.assign(Object.assign({},this.getHeaders(t)),"object"==typeof s.headers?s.headers:{})})).then(e=>e).catch(e=>{throw e}),this.fetchWithBody=(e,t,s,a={},r={})=>i(Object.assign(Object.assign({method:e,url:this.absUrl(t),data:a},r),{headers:Object.assign(Object.assign({},this.getHeaders(s)),"object"==typeof r.headers?r.headers:{})})).then(e=>e).catch(e=>{throw e})}}a.Cancelable=function(){let e;return t=>{const s=t;return function(){const t=[...arguments];if(t.length>4)throw new Error("Wrong Number of arguments, Check Api class");e&&e.cancel(),e=i.CancelToken.source();let a={cancelToken:e.token};return 4===t.length&&(a=Object.assign(Object.assign({},t[3]),a)),t[3]=a,s.apply(this,[...t])}}}();const r=t.createContext({authorizationToken:"",HttpService:new a(""),doesProviderAdded:!1,cacheStore:{},updateCache:()=>{}}),o=e=>{try{return e.response&&e.response.data&&e.response.data.message||e.message}catch(t){return e}};exports.UseFetchProvider=e=>{const{children:i,baseUrl:o,authorizationToken:c}=e,n=new a(o),[d,h]=t.useState({});return s.createElement(r.Provider,{value:{authorizationToken:c,HttpService:n,doesProviderAdded:!0,cacheStore:d,updateCache:(e,t)=>h(s=>Object.assign(Object.assign({},s),{[e]:t}))}},i)},exports.useFetch=e=>{const{url:s,method:i="get",mockData:c,shouldDispatch:n,cancelable:d=!1,cache:h=!1,shouldUseAuthToken:u=!0,dependencies:l,beforeServiceCall:f,options:g={}}="string"==typeof e?{url:e}:e,{authorizationToken:b,HttpService:p,doesProviderAdded:j,cacheStore:v,updateCache:O}=t.useContext(r),C=d?a.Cancelable(p[i]):p[i];if(!j)throw new Error("You must wrap your higher level(parent) component with UseFetchProvider, before using useFetch 😬");let k=(e=>{let t="";return t="function"==typeof e?e():e,t})(b);const y=l||[],P=!!c,w=u?k:null,m="get"===i&&h,F={data:c,status:{isPending:!1,isRejected:!1,isFulfilled:!1,isCached:!1,isMocked:P,err:""}},[S,T]=t.useState(F),U=e=>{var t;if((e=>{if("function"==typeof e)return e();void 0!==e&&console.warn("useFetch arg `beforeServiceCall` must be a function")})(f),T({data:S.data?S.data:void 0,status:{isFulfilled:!1,isPending:!0,isRejected:!1,isCached:!1,isMocked:P,err:""}}),m){const e=v[s];if(e)return T(Object.assign(Object.assign({},e),{status:Object.assign(Object.assign({},e.status),{isMocked:!1,isFulfilled:!0,isCached:!0})}))}null===(t=C)||void 0===t||t(s,w,e,g).then(({data:e})=>{const t={data:e,status:{isFulfilled:!0,isPending:!1,isRejected:!1,isMocked:!1,isCached:!1,err:""}};T(Object.assign({},t)),m&&O(s,t)}).catch(e=>{T({data:S.data,status:{isFulfilled:!1,isPending:!1,isCached:!1,isRejected:!0,isMocked:P,err:o(e)}})})};return t.useEffect(()=>{n?("function"==typeof n&&n()||"boolean"==typeof n&&n)&&U():void 0===n&&void 0!==l&&U()},[...y]),[S,U,m?e=>{var t;const i=null===(t=v[s])||void 0===t?void 0:t.data;if(i){const t=e(i);O(s,{data:t,status:Object.assign(Object.assign({},F.status),{isCached:!0,isMocked:!1,isFulfilled:!0})})}}:void 0]};
