"use strict";var precacheConfig=[["/boy-girl-kalkulator/index.html","5c5aaa91ec806fcfe3542b656c95922a"],["/boy-girl-kalkulator/static/css/main.06dca515.css","4c9a56c26f611c3889ce60c6a9265b95"],["/boy-girl-kalkulator/static/js/main.6c2fdcb2.js","4b85575b5c6826ab5fe25066a64b0860"],["/boy-girl-kalkulator/static/media/2a.f56cc0eb.jpg","f56cc0eb955b1affa1e5e76343bb0b58"],["/boy-girl-kalkulator/static/media/2b.47f21651.jpg","47f21651557350154f4a15f9a8d8b9f0"],["/boy-girl-kalkulator/static/media/3a.39b5fbfc.jpg","39b5fbfc2c62dcfe91607b602fdeeb93"],["/boy-girl-kalkulator/static/media/3b.c4c58930.jpg","c4c589307b65f314a6a284fed91582e6"],["/boy-girl-kalkulator/static/media/5a.1304fa5e.jpg","1304fa5ec972faf7f064ab02aa4084e3"],["/boy-girl-kalkulator/static/media/5b.2762fe72.jpg","2762fe72f8e01adf43e94fdbd78fff82"],["/boy-girl-kalkulator/static/media/arrow.626c3f70.png","626c3f7002b27e1bf39a9fe3f69663de"],["/boy-girl-kalkulator/static/media/bg_wheel.9bdce1a4.png","9bdce1a4e90b629d2575fc7837aff8fe"],["/boy-girl-kalkulator/static/media/bg_wheel_down.a6b1559e.png","a6b1559e58abf9adbab0bb8baa70f546"],["/boy-girl-kalkulator/static/media/circle.36873568.png","36873568137c0dc0abea9a8e1b900fd6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/boy-girl-kalkulator/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});