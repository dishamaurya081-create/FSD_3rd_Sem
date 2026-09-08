const os= require('os');
console.log("Free memory: " + os.freemem());
console.log("Total memory: " + os.totalmem());
console.log("Platform: " + os.platform());
console.log("CPU architecture: " + os.arch());
console.log("CPU info: " + os.cpus());
console.log("Home directory: " + os.homedir());
console.log("Hostname: " + os.hostname());
