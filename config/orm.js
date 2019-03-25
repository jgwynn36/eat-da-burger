const connection = require("./connection.js");

const orm = {
    selectAll: function () {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (burger) {
        const queryString = "INSERT ?? INTO burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (name, id) {
        const queryString = "UPDATE burger_name SET =??, WHERE id = ?";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }

}

module.exports = orm;