const cacheName = 'audible-annotations-cache-v2';
const filesToCache = [
  'index.html',
  'manifest.json',
  'images/logo_192x192_black_on_white.png',
  'audio/annotating_positive.mp3',
  'audio/annotating_interesting.mp3',
  'audio/annotating_question.mp3',
  'audio/annotating_to_do.mp3',
  'audio/annotating_undone.mp3',
  'service-worker.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
