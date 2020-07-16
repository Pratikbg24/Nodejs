var fs = require('fs');
fs.rename('enentEmitter.js', 'eventEmitter.js', (err) => {
    if (err) throw err;
    console.log("File Renamed !");
})