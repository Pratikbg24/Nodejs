var fs = require('fs');
fs.open('myNewFile2.txt', 'w', (err) => {
    if (err) throw err;
    console.log("Saved File in Open")
})