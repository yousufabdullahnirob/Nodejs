const os = require('os');


const platform = os.platform();
console.log(`Platform: ${platform}`);

const release = os.release();
console.log(`Release: ${release}`);

const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory}`);

const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory}`);

const cpus = os.cpus();
console.log(`CPUs: ${cpus.length}`);

const uptime = os.uptime();
console.log(`Uptime: ${uptime}`);

const userInfo = os.userInfo();
console.log(`User Info: ${userInfo}`);
