var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected !!")
        /*Wildcard characters
        // % wildcard to represent zero,one or multiple character = "SELECT * FROM students WHERE addr LIKE 'b%'"
        */
        //SELECT * FROM students WHERE addr='pune'
        //escape method:- SELECT * FROM students WHERE addr =" + mysql.escape(adr)
        //By using placeholder =above example use multiple placeholder
    var name = 'soma';
    var adr = 'Bigwan';
    var sql = "SELECT * FROM students WHERE addr = ? OR name = ?";
    con.query(sql, [adr, name], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
})