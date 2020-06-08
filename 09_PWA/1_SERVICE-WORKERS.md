# SERVICE WORKERS

- Fichier js enregistré sur le navigateur.
- Gère le cache.
- Doit être sur un https.

(Infos et tutos sur google)[https://developers.google.com/web/ilt/pwa]


## Notions nécessaires


## Nouvelles notions
- service-workers

## Codes a tester


swUrl : url to js file

### Test browser support
```
if('serviceWorker' in navigator){
  //Test if browser support sw
}
```

### Registration

```
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('swUrl', { scope: '/sw-test/' }).then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};
```

### Check if sw is already registered

```
fetch(swUrl, {
  headers: { 'Service-Worker': 'script' },
})
  .then(response => {
    //Check response status here
    })
```


### Installation event

```
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});

```


### Fetching event

```
self.addEventListener('fetch', function(event) {

  //On fetch, serve from cache or update cache.
}
```

### Message event

#### From app to sw

##### App :

```
navigator.serviceWorker.ready.then( registration => {
    registration.active.postMessage("Hi service worker");
  });
```

##### SW :
```
this.addEventListener('message', event => {
    // event is a MessageEvent object
    console.log(`The client sent me a message: ${event.data}`);
});
```

#### From sw to app

##### SW :

```
event.source.postMessage("Hi client");
```

##### App :
```
navigator.serviceWorker.addEventListener('message', event => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);
});
```


### Push event

#### App

```
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log('Service Worker Registered!', reg);

    reg.pushManager.getSubscription().then(function(sub) {
      if (sub === null) {
        // Update UI to ask user to register for Push
        console.log('Not subscribed to push service!');
      } else {
        // We have a subscription, update the database
        console.log('Subscription object: ', sub);
      }
    });
  })
   .catch(function(err) {
    console.log('Service Worker registration failed: ', err);
  });
}
```


#### SW
```
self.addEventListener('push', function(e) {
  var options = {
    body: 'This notification was generated from a push!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'images/xmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});
```



Vider le cache

```
self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
```
