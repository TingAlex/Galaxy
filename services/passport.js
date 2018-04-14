const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
const keys = require("../config/keys");

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: "/auth/github/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // This piece of code will be execute *after* using code and have receieved the email and profile!!
      console.log("====================================");
      console.log(accessToken);
      console.log("====================================");
      console.log(profile);
    }
  )
);
