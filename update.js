var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
})

con.connect((err) => {
    if (err) throw err;
    console.log("Connected !");
    var sql = "UPDATE students  SET name ='Shahbaj' WHERE name = 'Fiyaj'";

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows + "Record(s) updated ")
    })

})