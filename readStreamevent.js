var fs = require('fs');
var rs = fs.createReadStream('./myNewFile1.txt');
rs.on('open', () => {
    console.log('File Is Open');

})