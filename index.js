// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('ta aplikacja budzi trwogę .......');
// });

// app.listen(8080, () => {
//   console.log('Listening on port 8080');
// });


// Import modułu http (do tworzenia serwera)
const http = require('http');

// Import modułu os (do pobrania danych o systemie, np. hostname)
const os = require('os');

// Pobieranie zmiennej środowiskowej VERSION lub ustawienie domyślnej wartości "1.0"
const version = process.env.VERSION || "1.0";

// Tworzenie serwera HTTP
const server = http.createServer((req, res) => {
  // Ustawienie nagłówka odpowiedzi HTTP – status 200 i typ tekstowy
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Wysłanie odpowiedzi zawierającej IP kontenera, hostname oraz wersję aplikacji
  res.end(
    `IP: ${req.socket.localAddress}\n` +         // adres IP kontenera
    `Hostname: ${os.hostname()}\n` +             // hostname kontenera
    `Version: ${version}\n`                      // wersja aplikacji przekazana przez ARG
  );
});

// Nasłuchiwanie na porcie 8080 i wypisanie informacji do konsoli
server.listen(8080, () => {
  console.log(`Server running on port 8080 (v${version})`);
});

