var fs = require('fs');
fs.writeFile('myNewFile3.txt', 'Hello Content', (err) => {
    if (err) throw err;
    console.log("File Saved !")
})