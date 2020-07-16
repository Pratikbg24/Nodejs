var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log("connected !");
    //DELETE FROM students WHERE addr='Baramati'
    //DROP TABLE IF EXISTS tbl-name
    con.query("DROP TABLE customer", (err, result) => {
        if (err) throw err;
        console.log('Table Deleted :');
    });
});