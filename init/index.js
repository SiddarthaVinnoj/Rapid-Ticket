const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dotenv = require('dotenv');
dotenv.config({ path: "../.env" }); // adjust path

const MONGO_URI = process.env.MONGO_URI;

async function main() {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB");

    // initialize data AFTER DB connection
    await initDB();
}

async function initDB() {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initialized successfully");
}

main().catch(err => console.log(err));
