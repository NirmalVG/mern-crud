const mongoose = require("mongoose");

var users = mongoose.model("users", {
    name: { type: String },
    username: { type: String },
    email: { type: String },
    phone: { type: String },
});

module.exports = users;
