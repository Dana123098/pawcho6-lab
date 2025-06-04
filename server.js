// const http = require('http');
// const os = require('os');

// const version = process.env.VERSION || "1.0";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(
//     `IP: ${req.socket.localAddress}\n` +
//     `Hostname: ${os.hostname()}\n` +
//     `Version: ${version}\n`
//   );
// });

// server.listen(8080, () => {
//   console.log(`Server running on port 8080 (v${version})`);
// });
