const mysql = require("mysql");

const connection;

if (process.env.JAWSDB_URL) {
    connection = my.sql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "12345678",
        database: "burgers_db"
    });
};

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;