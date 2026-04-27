self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("health-app-cache").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./manifest.json",
        "./123.png",
        "./bg.jpg",
        "./baby-heimlich.jpg",
        "./adult-choking.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});