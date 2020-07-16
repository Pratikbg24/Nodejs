var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'


});


con.connect((err) => {
    if (err) throw err;
    console.log("Connected !");
    /*

        sql = "INSERT INTO students(name,addr) VALUES ('Pratik','Pune')";*/

    var sql = "INSERT INTO students(name,addr) VALUES ?";
    var values = [
        ['Fiyaj', 'Baramati'],
    ];

    con.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("1 record inserted !");
    });
});