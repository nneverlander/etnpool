const createProxy = require('coin-hive-stratum');

const proxy = createProxy({
  host: 'eupool.electroneum.com',
  port: 3333,
  logFile: '/home/adi/pool/logs/proxy.log',
  statsFile: '/home/adi/pool/logs/proxy.stats',
  dynamicPool: true,
  donations: [{
    address: "etnk6YhyuiRFqdBuk88G1RfcDGfxXn4GK44uQJQyukBkRnciqbxdsjYAnjyHoraNRR9aSkYwGsghPFYeUkStvoQJ7j4rrG9ES4",
    host: "eupool.electroneum.com",
    port: 3333,
    pass: "x",
    percentage: 0.01 // 1%
  }]
});
proxy.listen(8887);
