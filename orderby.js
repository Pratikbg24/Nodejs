var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected !');
    //ORDER BY :Alphabetically
    //ORDER BY name DESC :reverse Alphabetically
    var sql = "SELECT * FROM students ORDER BY name DESC"

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
});