var fs = require('fs');
fs.unlink('myNewFile2.txt', (err) => {
    if (err) throw err;
    console.log("File Deleted  successfully!");
});