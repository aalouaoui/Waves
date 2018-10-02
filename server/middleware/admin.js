const admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send("Insufficient Privileges");
  }
  next();
};

module.exports = { admin };
