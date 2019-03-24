const orm = require("../config/orm");

orm.selectAll();
orm.insertOne(burger_name, devoured);
orm.updateOne(burger_name, id);

module.exports = burgers;