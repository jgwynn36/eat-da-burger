const orm = require("../config/orm");

const burger = {
    all: function(burgers) {
        orm.selectAll("burger",function(res){
            burgers(res); 
        }); 
    },
    create: function(burger_name, devoured,burgers){
        orm.insertOne("burger",burger_name, devoured, function(res){
            burgers(res); 
        });
    }, 
    update: function (burger_name, id, burgers) {
        orm.updateOne("burger",burger_name, id, function(res){
            burgers(res); 
        });
    }
}; 

module.exports = burger;