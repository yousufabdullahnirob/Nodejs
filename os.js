const os = require('os');


const platform = os.platform();
console.log(`Platform: ${platform}`);

const release = os.release();
console.log(`Release: ${release}`);

const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory}`);

const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory}`);
