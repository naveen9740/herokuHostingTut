const mWareConnected = (req, res, next) => {
  console.log(`logged  Method-->${req.method} Path-->${req.path}`);
  next();
};

module.exports = mWareConnected;
