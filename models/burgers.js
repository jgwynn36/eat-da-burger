const orm = require("../config/orm");

const burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    create: function (burger_name, devoured, burgers) {
        orm.insertOne(burger_name, devoured, function (res) {
            burgers(res);
        });
    },
    update: function (burger_name, id, burgers) {
        orm.updateOne(burger_name, id, function (res) {
            burgers(res);
        });
    }
};

module.exports = burger;