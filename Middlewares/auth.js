const credentials = { name: "naveen", pass: 123 };
const auth = (req, res, next) => {
  const { name, pass } = req.query;
  if (name == credentials.name && pass == credentials.pass) {
    console.log("Login success");
    next();
  }
  return res.json({ msg: "incorrect password" });
};
module.exports = auth;
