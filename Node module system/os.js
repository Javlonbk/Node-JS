const os = require('os');

// freeMem
// console.log(os.freemem()/Math.pow(1024, 2) + 'Gb');

//upTime
// console.log(os.uptime()/(360*24) + 'days');

// Task: Kompyuterdagi band xotira miqdorini aniqlab uni mb larda ekranga chiqaring.

console.log((os.totalmem() - os.freemem())/Math.pow(1024, 2) + 'Gb');