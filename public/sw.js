if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let t={};const r=e=>s(e,i),b={module:{uri:i},exports:t,require:r};a[i]=Promise.all(n.map((e=>b[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/01.png",revision:"03d74c93b244c53046d849902108c979"},{url:"/_next/app-build-manifest.json",revision:"a1fcd2fd6a581a150cfb623b4689e991"},{url:"/_next/static/aRscOneYFSKaIpbek_HbT/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/aRscOneYFSKaIpbek_HbT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/00cbbcb7-fd409743c8699cf8.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/0e5ce63c-faa9181ab4a577f5.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/102-662e308ac9185e5e.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/143-dff868ec858bc99a.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/164-a5bbf62274c0df0c.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/211-b7fb45a6e57759f5.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/23-b3d9307361958111.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/285-fc54e71152d112ca.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/341-c264e3aaf5f2b02a.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/351-a9b7eb6ee56caefa.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/358ff52d-50f58ae45de67c2f.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/3627521c-7e6f97bf5b151d30.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/39209d7c-3b88945651bc895d.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/426-53e61bd69e36706f.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/443-78cad091cc25a5a9.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/533-5aa9f58f119e3710.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/539-cb10c1791338078e.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/617-54cc04c7b7daa4c0.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/685-7943aa978ab0fac0.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/737dfa3e-9b4ea5447ba5d281.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/8dc5345f-e5f577a5c74acd4f.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/9081a741-975a7b7af156a616.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/98.acf35d7085867f37.js",revision:"acf35d7085867f37"},{url:"/_next/static/chunks/a63740d3-ce28fa310b628854.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/(site)/accounts/page-9640d75941f79ffa.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/(site)/anime/%5B...params%5D/page-c6c5af92451e3761.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/(site)/community/page-d5e7ea5bf9cbaa81.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/(site)/error-538a81aa3119deae.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/(site)/page-2525a40b37498dbf.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/(site)/watch/%5B...params%5D/layout-6bf5e3200ac59d32.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/(site)/watch/%5B...params%5D/page-c91402fe46c0bd88.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/_not-found/page-168ba93ed0f2f8f9.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/layout-f292056fa880b50c.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/app/not-found-f684a32717728a60.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/bc9c3264-ec80cdf2466f4fe9.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/dfb0c4f0.ab2d8a96a5427870.js",revision:"ab2d8a96a5427870"},{url:"/_next/static/chunks/ec3863c0-6b5729398ccf9b5e.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/fd9d1056-1f971f24a8ed68f2.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/main-0dbb88867b3f5993.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/main-app-0ead3e87c495b90c.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b3fa65a98fd1ace0.js",revision:"aRscOneYFSKaIpbek_HbT"},{url:"/_next/static/css/6998430ecc875856.css",revision:"6998430ecc875856"},{url:"/_next/static/css/796ed910dc4a229c.css",revision:"796ed910dc4a229c"},{url:"/_next/static/media/07a54048a9278940-s.p.woff2",revision:"5e6c7802c5c4cc0423f86c3aad29f60a"},{url:"/_next/static/media/4f2204fa15b9b11a-s.woff2",revision:"6f4cf2d9f078b52024414970b7b7f704"},{url:"/anime-34.png",revision:"7764c032288ff2b7105f103b9b43f0b6"},{url:"/animehi.ico",revision:"b3885732b8ed220e93fc4d33b61343aa"},{url:"/animehi.svg",revision:"8b3ac288f93fa2adee579fe2129faf5b"},{url:"/avatar-1.png",revision:"20baf63bdd19efd022c0effeea9ac667"},{url:"/avatar-2.png",revision:"f9334337328ec9e815d8a78c907fe5c3"},{url:"/avatar-3.png",revision:"1e8eef0053998b7b2f5cc14bc29dcd84"},{url:"/avatar-4.png",revision:"d0c208ff30a19f9da03ac38a7fea2071"},{url:"/avatar-5.png",revision:"adfdcf5a344bd6a88150a9d066f604a3"},{url:"/avatar-6.png",revision:"8493964ad4f215de13c11158eeed4df5"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon.png",revision:"7bda23f018826a7c9fc74a5ecf156a8f"},{url:"/favicon.svg",revision:"4164265240505b2d371a870fc7afa35c"},{url:"/h.png",revision:"330d53dd7b81ec59553981e0df76bde2"},{url:"/loading.svg",revision:"89306806b18e556ac9c203eb3a1087af"},{url:"/mobile.png",revision:"113aec7eb2da9317ffd598ad5e7f8e80"},{url:"/page.png",revision:"537ae095baa7b931ffb783a591342c99"},{url:"/placeholder.png",revision:"c3e2f71cfffb4186a5617c3b6a94f6b4"},{url:"/setting.svg",revision:"0a94b4cf49ab2ec71344d0100278fef0"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/volume.svg",revision:"9014c88e83ebb3989115db2911d9b686"},{url:"/watch.jpg",revision:"8b01561c889c61cf1b8232006b1f5c7b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));