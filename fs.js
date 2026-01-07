const fs = require('fs');

// 1. Write file (Synchronous to ensure it finishes before appending)
fs.writeFileSync('test.txt', 'Hello World');
console.log('File written successfully');

// 2. Append data
fs.appendFileSync('test.txt', ' My name is Yousuf');
fs.appendFileSync('test.txt', ' My name is Abdullah');

// 3. Read data (Add 'utf-8' to get text)
const data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);

// 4. Delete file (Use fs.unlink, not fs.deleteFile)
fs.unlink('test.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully');
});
