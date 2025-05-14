const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8082;

// Middleware Setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key', // Change this in production
  resave: false,
  saveUninitialized: false
}));

// MongoDB Connection
mongoose.connect("mongodb+srv://petrsmolka5:9j2yhSmjU9fZiqRX@cluster0.ysk8doy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user"
  }
});

const User = mongoose.model("User", userSchema);

// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
  if (req.session.userData) {
    return next();
  } else {
    res.redirect("/");
  }
};

// Routes
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/main", isAuthenticated, (req, res) => {
  res.render("teacher", { username: req.session.userData.username });
});

// Registration Route (optional for testing)
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.send("User registered.");
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.send("User not found.");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.send("Incorrect password.");
  }

  req.session.userData = { username: user.username, role: user.role };
  res.redirect("/main");
});

// Logout Route
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

// Start Server
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
