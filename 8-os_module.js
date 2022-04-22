const os = require('os');
//console.log(os.cpus())
console.log(os.arch());

//current user
const user = os.userInfo()
//console.log(user);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem(),
    hostname: os.hostname()
}

console.log(currentOs);