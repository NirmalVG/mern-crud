const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/apicrud", (err) => {
    if (!err) {
        console.log("Database Connect Successfully");
    } else {
        console.log("Error in connection");
    }
});

module.export = mongoose;
