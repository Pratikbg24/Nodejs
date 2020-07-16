//Createing Primary Keyvar 
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected !');

    var sql = "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), addr VARCHAR(255))";

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table Created")
    })
})