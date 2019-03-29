const connection = require("./connection.js");

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = 'SELECT * FROM ' + tableInput + ' ;';
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result)
        });
    },
    insertOne: function (table,cols, val, cb) {
        const queryString = "INSERT INTO " + table ;
        queryString += ' ('; 
        queryString += cols.toString(); 
        queryString += ' )'; 
        queryString += 'VALUES ('; 
        queryString += printQuestionMarks(vals.length); 
        queryString += ') '; 
        
        console.log(queryString); 

        connection.query(queryString,vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table,objColVals,condition, cb) {
        const queryString = 'UPDATE ' + table;
        queryString += ' SET '; 
        queryString += objToSql(objColVals); 
        queryString += ' WHERE '; 
        queryString += condition; 
        
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }

}

module.exports = orm;