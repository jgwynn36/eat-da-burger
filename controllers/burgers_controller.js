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
        const hbsObject = {
            burgers: burgerData
        };
        res.render("index", hbsObject);

    });

});

router.post("/api/burger", function (req, res) {
    console.log('IS THIS RUNNING??????????????')
    burger.create([
        "burger"
    ], [
        req.body.burger_name
    ], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burger/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        burger_name: req.body.burger_name
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;