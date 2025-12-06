const mongoose = require("mongoose");
const initData = require("./theaterdata.js");
const Theater = require("../models/theater.js");
const dotenv = require('dotenv');

dotenv.config({ path: "../.env" });
const MONGO_URI = process.env.MONGO_URI;

async function main() {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB");

    await initDB();

}

async function initDB() {
    await Theater.deleteMany({});
    await Theater.insertMany(initData.theaterdata);
    console.log("Theaters data initialized successfully");
}

main().catch(err => console.log(err));
