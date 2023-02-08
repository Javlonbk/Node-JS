// path module
const path = require('path');
// console.log(__filename);
const pathObj = path.parse(__filename);
// console.log(pathObj);

// basename
// console.log(path.basename(__filename, '.js')); 

//dirname
// console.log(path.dirname(__filename))

// extname
// console.log(path.extname(__filename));

// isAbsolute
// console.log(path.isAbsolute(__filename));

// join
console.log(path.join('a', 'b', 'c'));
