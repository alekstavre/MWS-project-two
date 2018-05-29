self.addEventListener( 'install', e => {
    e.waitUntil(
        caches.open( 'mws' ).then( cache => {
            console.log( cache );
            return cache.addAll( [
              './',
              './index.html',
              './restaurant.html',
              './css/media.css',
              './css/styles.css',
              './data/restaurants.json',
              './js/dbhelper.js',
              './js/main.js',
              './js/restaurant_info.js',
              './img/1.jpg',
              './img/2.jpg',
              './img/3.jpg',
              './img/4.jpg',
              './img/5.jpg',
              './img/6.jpg',
              './img/7.jpg',
              './img/8.jpg',
              './img/9.jpg',
              './img/10.jpg',
            ] );
        } )
    )
} );


//Code snippet used from blog:
// https://jakearchibald.com/2014/offline-cookbook/#on-network-response

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('mws').then(function(cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});