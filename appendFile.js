var fs = require('fs')
fs.appendFile('myNewFile.txt', 'Hello Pratik', (err) => {
    if (err) throw err;
    console.log('File Saved !');
});