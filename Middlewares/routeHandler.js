// 404 Route Handler
const routeHandler = (req, res, next) => {
  res.status(404).json({ msg: "Something broke!" });
};
module.exports = routeHandler;
