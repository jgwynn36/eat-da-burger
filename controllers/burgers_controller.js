const express = require("express");

const router = express.Router();

const burger = require("../models/burgers");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function (burgerData) {
        console.log('BURGER DATA ', burgerData)
        // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
        let hbsObject = {
            burgers: burgerData
        };
        res.render("index", hbsObject);

    });

});

router.post("/burgers/insertOne", function (req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function () {
        res.redirect('/burgers');
    });
});

router.put("/burgers/updateOne/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect('/burgers');
    });
});

module.exports = router;