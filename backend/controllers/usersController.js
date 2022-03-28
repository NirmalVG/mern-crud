const express = require("express");
var router = express.Router();
var users = require("../models/users");
var ObjectID = require("mongodb").ObjectID;

router.get("/", (req, res) => {
    users.find((err, docs) => {
        if (!err) return res.send(docs);
        else
            console.log(
                "Error in Retriving users :" + JSON.stringify(err, undefined, 2)
            );
    });
});

router.post("/", (req, res) => {
    var newRecord = new users({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
    });
    newRecord.save((err, docs) => {
        if (!err) return res.send(docs);
        else
            console.log("Error in users :" + JSON.stringify(err, undefined, 2));
    });
});

router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res
            .status(400)
            .send(`No record with given id : ${req.params.id}`);
    var record = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
    };
    users.findByIdAndUpdate(
        req.params.id,
        { $set: record },
        { new: true },
        (err, docs) => {
            if (!err) return res.send(docs);
            else
                console.log(
                    "Error in Updating users :" +
                        JSON.stringify(err, undefined, 2)
                );
        }
    );
});

router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res
            .status(400)
            .send(`No record with given id : ${req.params.id}`);
    users.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) return res.send(docs);
        else
            console.log(
                "Error in Deleting users :" + JSON.stringify(err, undefined, 2)
            );
    });
});

module.exports = router;
