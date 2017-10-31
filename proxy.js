// Create your proxy
const createProxy = require("coin-hive-stratum");
const proxy = createProxy({
  host: "localhost",
  port: 3333
});

// Create an HTTPS server
const server = require("https").createServer({
  key: fs.readFileSync("./server.key"),
  cert: fs.readFileSync("./server.crt")
});
server.listen(8888);

// Pass your HTTPS server to the proxy
proxy.listen({
  server: server
});
