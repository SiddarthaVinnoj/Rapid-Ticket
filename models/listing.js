const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title : String,
    img : String,
    link:String,
    description : String,
    genre : String,
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;