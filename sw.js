// Écouter les messages push
self.addEventListener("push", (event) => {
  const data = event.data.json();
  
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/favicon.jpg",
      badge: "/favicon.jpg",
      vibrate: [400, 200, 400, 200, 400],
      tag: 'alert-notification',
      requireInteraction: true, // La notification reste jusqu'à interaction
      data: {
        url: '/' // URL à ouvrir au clic
      }
    })
  );
});

// Gérer le clic sur la notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
