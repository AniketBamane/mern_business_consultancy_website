const adminMiddleware = async(req, res, next) => {
  try {
    if (req.user.isAdmin === true) {
      next();
    } else {
      return res.status(401).json({ message: "you are not admin !" });
    }
  } catch (error) {
    return res.status(401).json({ message: "you are not admin !" });
  }
}

module.exports = adminMiddleware;