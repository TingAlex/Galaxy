const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
//TODO:picture upload use:
//cloudinary://995967916172887:l8RD8WYTNyjDOi47wBiu7hQ5UlQ@tingalex/
require('./models/Activity')
require("./models/User")
require("./models/Address")
require("./models/Cashflow")
require("./models/Picture");
//passport因为其中引入了User表，所以一定要放在下面！
require("./services/passport");
const bodyParser = require("body-parser");
mongoose.connect(keys.mongoURI);

const app = express();
//middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/picUploadRoutes")(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT);
