var fs = require('fs');
fs.writeFile('myNewFile3.txt', '\t This is My Text Updated by using writeFile() Method', (err) => {
    if (err) throw err;
    console.log("File Update !")
})