const express = require("express");
const path = require("path");
const app = express();
const PORT = 8082;
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());


//*Connect to mongoose
mongoose.connect("mongodb+srv://petrsmolka5:9j2yhSmjU9fZiqRX@cluster0.ysk8doy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("DB connected");
}).catch((err=>{
  console.log(err);
}))

//*Create the userSchema
const userSchema = new mongoose.Schema({
  username: String,
  role: {type: String,
      default: "user"
  }
});




const User = mongoose.model("User" , userSchema)


//Login Route logic
app.post("/login", async (req, res) => {
 
});


app.get("/main", function (req, res) {
  res.render('teacher.ejs');
});


app.get("/" , function (req, res) {
  res.render('login.ejs');
});

app.post("login_user" , function (req, res) {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});

const isAuthenticated = (req, res, next) => {
  //check user in the session
  const username = req.session.userData ? req.session.userData.username : null;
  if (username) {
    return next();
  } else {
    res.redirect("/login");
  }
};



//*Start the server
app.listen(PORT, function () {
  console.log("server is running on http://localhost:", PORT);
});