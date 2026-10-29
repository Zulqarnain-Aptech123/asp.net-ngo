const mongoose = require("mongoose");




async function ConnectDB() {
    await mongoose.connect("mongodb+srv://backend:Vq9odhrQ7FpG43aJ@backend.clxtflv.mongodb.net/blog");

    console.log("Connected to DB");

}

module.exports = ConnectDB;