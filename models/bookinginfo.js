const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  movie: String,
  theater: String,
  showTime: String,
  seats: [String]
});

module.exports = mongoose.model("Booking", bookingSchema);
