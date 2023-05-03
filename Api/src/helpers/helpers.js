const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};
const tokenSign = async (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      username: user.username,
      isAdmin: user.isAdmin,
    },
    process.env.TOKEN_JWT,
    {
      expiresIn: 606024000000,
    }
  );
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.TOKEN_JWT);
  } catch (e) {
    return null;
  }
};

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log("no autorizado 1");
    return res.status(401).json({ message: "no estas autorizado" });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    console.log("no autorizado 2");
    return res.status(401).json({ message: "no estas autorizado" });
  }

  jwt.verify(token, process.env.TOKEN_JWT, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "no estas autorizado" });
    }
    if (!user.isAdmin) {
      return res.status(405).json({ message: "no estas autorizado " });
    }
    req.user = user;
    next();
  });
};

module.exports.encrypt = encrypt;
module.exports.compare = compare;
module.exports.verifyToken = verifyToken;
module.exports.tokenSign = tokenSign;
module.exports.requireAuth = requireAuth;
