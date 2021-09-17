const errorHandler = (err, req, res, next) => {
  // console.log(err.stack);
  res.json({ msg: `Error ${err.message}` });
};
module.exports = errorHandler;
