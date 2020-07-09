var fs = require('fs');
fs.appendFile('myNewFile.txt', "This Change done by using appendFile() method", (err) => {
    if (err) throw err;
    console.log("File Updated !");
})