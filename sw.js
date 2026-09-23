const CACHE='valmar-partner-v5';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c))}return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
self.addEventListener('push',e=>{
  let data={};try{data=e.data?.json()||{}}catch{data={body:e.data?.text()||''}}
  e.waitUntil(self.registration.showNotification(data.title||'Valmar Partner',{body:data.body||'Hai un promemoria.',icon:'./icon-180.png',badge:'./icon-180.png',tag:'valmar-task',data:{url:data.url||'./'}}));
});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(clients=>{const existing=clients.find(c=>new URL(c.url).pathname.includes('/Valmar-partner/'));if(existing){existing.focus();return}return self.clients.openWindow(e.notification.data?.url||'./')}))});
