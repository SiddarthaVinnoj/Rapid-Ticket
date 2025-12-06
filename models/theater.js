const mongoose = require("mongoose");

const theaterSchema = new mongoose.Schema({
  name: String,
  location: String,
  date: String,
  showTimes: [String],
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing"
  }
});

module.exports = mongoose.model("Theater", theaterSchema);
