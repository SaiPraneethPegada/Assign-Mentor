const mongoose = require("mongoose");

const { DB_URL, DB_NAME } = process.env;
console.log(DB_URL);
const dbConnect = async () => {
    try {
        await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log("Mongodb connection established");
    } catch (error) {
        console.log(error, "mongodb connection error");
    }
};

module.exports = dbConnect;
