const path = require('path');

// const pathObj  = path.parse(__filename);

// console.log(pathObj, pathObj.dir); // _filename

// basename();
// const pathObj = path.basename('/foo/bar/baz/asdf/quux.html');

// console.log(pathObj);

// join();
// let pathObj = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');

// console.log(pathObj);

// normalize();
let pathObj = path.normalize('C:\\temp\\\\foo\\bar\\..\\');

console.log(pathObj);
