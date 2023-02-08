// os module
const os = require('os');
const freeMem = os.freemem();  //freemem - kompdagi bo'sh xotira baytlarda
const userInfo = os.userInfo(); //userInfo - foydaluvchi haqida ma'lumot
const upTime = os.uptime();
const networkInterfaces = os.networkInterfaces();


console.log(`Bo'sh xotira miqdori: ${freeMem} bayt`);
console.log(`Foydaluvchi haqida ma'lumot: ${userInfo.username} `);
console.log(Math.trunc(upTime / (3600)) + ' hours');
// console.log(networkInterfaces);



//Topshiriq: komyuterdagi band xotira miqdorini gb da chiqaring
const totalMem = os.totalmem();
const busyMem = totalMem - freeMem;

console.log(busyMem / 1073741824 + ' Gb');