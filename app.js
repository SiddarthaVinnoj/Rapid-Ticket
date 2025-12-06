const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const engine = require("ejs-mate");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");
const app = express();
const User = require("./models/user");
const Listing = require("./models/listing");
const Theater = require('./models/theater');
const Booking = require('./models/bookinginfo');
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URI = process.env.MONGO_URI 
main().then(() => {
  console.log("Connected to DB");
}).catch(err => {
  console.log(err);
});
async function main() {
  await mongoose.connect(MONGO_URI);
}
const { theaterdata } = require('./init/theaterdata');
const theater = require("./models/theater");
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const sessionConfig = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to pass user to all templates
app.use((req, res, next) => {
  res.locals.currUser = req.user;
  next();
});
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};
const PORT = process.env.PORT || 1011;
app.listen(PORT , (req, res) =>{
    console.log("server is working");
});
app.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const regex = new RegExp(query, 'i');
    const listings = await Listing.find({ title: regex }); // or include other fields

    // View filename is `searchresults.ejs` (lowercase) — use matching casing
    res.render('listings/searchresults', { listings, query });
  } catch (err) {
    console.error(err);
    res.redirect('/index');
  }
});

app.get("/index" , async (req, res) =>{
    const listings = await Listing.find({});
    res.render("listings/index" , {listings});
});
app.get('/index/:Id', async (req, res) => {
  const { Id } = req.params;
  const listing = await Listing.findById(Id);
  const isLoggedIn = req.session.user ? true : false;

  res.render('listings/details', { listings: listing, isLoggedIn });
});
app.use(express.urlencoded({ extended: true }));
app.get("/signup", (req, res) => {
    res.render("users/signup");
});
app.post("/signup", async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Signup successful! Welcome " + username);
            res.redirect("/index");
        });
    } catch (e) {
        req.flash("error", "Signup failed. Try again.");
        res.redirect("/signup");
    }
});
app.get("/login", (req, res) => {
    res.render("users/login");
});
app.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: "Invalid username or password"
}), (req, res) => {
  req.flash("success", "Welcome back, " + req.user.username);
  res.redirect("/index");
});

app.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) return next(err);
        req.flash("success", "You have logged out successfully.");
        res.redirect("/index");
    });
});

app.get('/index/:id/list', async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render('listings/theater', { theaters: theaterdata, listings: listing });
});
app.get('/index/:listingId/:showTime', isLoggedIn, async (req, res) => {
  const { listingId, showTime } = req.params;

  const listing = await Listing.findById(listingId);

  const fakeTheater = {
    name: "Selected Theater",
    location: "Hyd",
    date: new Date().toISOString().slice(0, 10),
    _id: listingId,
  };

  const bookedSeats = ['A1', 'B2', 'C3'];
  res.render('listings/booking', {
    theater: fakeTheater,
    selectedShowTime: showTime,
    bookedSeats,
    listings: listing
  });
});

// Handle booking confirmation
app.post('/index/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const { seats, showTime } = req.body;
  const user = req.user;

  try {

    res.send("Booking confirmed! 🎉");
  } catch (err) {
    console.error(err);
    res.send("Booking failed");
  }
});
app.post('/index/:id/:showTime', isLoggedIn, async (req, res) => {
  const { id, showTime } = req.params;
  const { seats } = req.body;
  const selectedSeats = Array.isArray(seats) ? seats : seats.split(',');

  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash('error', 'Movie listing not found.');
      return res.redirect('/index');
    }

    await Booking.create({
      user: req.user._id,
      movie: listing.title,
      theater: `${listing.theaterName || 'Default Theater'}, ${listing.location || 'Unknown'}`,  
      showTime: showTime,
      seats: selectedSeats
    });

    req.flash('success', 'Booking confirmed!');
    res.redirect('/mybookings');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Booking failed.');
    res.redirect('/index');
  }
});
app.get('/mybookings', isLoggedIn, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id });
    res.render('bookings/mybookings', { bookings });
  } catch (err) {
    console.error(err);
    req.flash('error', 'Could not fetch your bookings');
    res.redirect('/index');
  }
});  
app.delete('/bookings/:id', isLoggedIn, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      req.flash('error', 'Booking not found.');
      return res.redirect('/mybookings');
    }

    if (!booking.user.equals(req.user._id)) {
      req.flash('error', 'Unauthorized to cancel this booking.');
      return res.redirect('/mybookings');
    }

    await Booking.findByIdAndDelete(req.params.id);
    req.flash('success', 'Booking cancelled successfully.');
    res.redirect('/mybookings');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Failed to cancel booking.');
    res.redirect('/mybookings');
  }
});
