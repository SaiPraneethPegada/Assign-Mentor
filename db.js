const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const dbConnect = () => {
    try {
        mongoose.connect(DB_URL);
        console.log("Mongodb connection established");
    } catch (error) {
        console.log(error, "mongodb connection error");
    }
};

module.exports = dbConnect;
