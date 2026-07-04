const CACHE_NAME='xiaoshan-v03-20260704';
const ASSETS=['./index.html?v=03','./manifest.webmanifest?v=03','./icon-192.png?v=03','./icon-512.png?v=03'];
self.addEventListener('install',e=>{self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS).catch(()=>{})));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))); self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html?v=03'))));});
