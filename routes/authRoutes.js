const passport = require("passport");
module.exports = app => {
  app.get("/", (req, res) => {
    console.log("Hi there");
    res.send({ hi: "there" });
  });
  //github OAuth
  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["profile", "email"]
    })
  );
  app.get(
    "/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
      res.redirect("/");
    }
  );
  app.get("/api/logout", (req, res) => {
    //这里的logout是和passport绑定的一个函数，可以帮你退出账户，这样req.user就没有了
    req.logout();
    //req.user was killed so we have no user to sign in, so we just get empty content.
    // res.send(req.user);
    res.redirect("/");
  });
  app.get("/api/current_user", (req, res) => {
    // res.send(req.session);
    res.send(req.user);
  });
};
