exports.authController = {
  // logout
  logout: async (req, res) => {
    req.session.destroy();
    req.redirect("/");
  },

  //   get authenticated user
  getAuthenticatedUser: async (req, res) => {
    token = req.token;
    res.send(token);
  },
};
