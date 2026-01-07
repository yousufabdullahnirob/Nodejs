const path = require('path');
const mypath = 'c:/nodejspractice/index1.js';
console.log(path.basename(mypath));
console.log (path.dirname  (mypath));
console.log (path.extname  (mypath));
console.log (path.parse(mypath));
console.log (path.isAbsolute(mypath));
console.log (path.join('c:/nodejspractice','index1.js'));
console.log (path.resolve('c:/nodejspractice','index1.js'));

