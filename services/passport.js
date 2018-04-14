const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
const keys = require("../config/keys");
// 我们不应该把user表直接require进来，因为我们有可能在
// 不同的文件中引入多次这个表，这样会造成mongoose的困惑
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //mongoo generate the user.id automally, use this rather googleId is because people could log in with a different OAuth.
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: "/auth/github/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // This piece of code will be execute *after* using code and have receieved the email and profile!!
      //profile: we need
      //id,username,profileUrl
      // console.log("====================================");
      // console.log(profile);
      const existingUser = await User.findOne({ githubId: profile.id });
      if (existingUser) {
        //aleady have a record before
        //done method will resume the passport process

        return done(null, existingUser);
      }
      //make new record
      //need save() to
      const user = await new User({
        githubId: profile.id,
        userName: profile.username,
        userUrl: profile.profileUrl
      }).save();
      done(null, user);
    }
  )
);
