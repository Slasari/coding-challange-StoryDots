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

module.exports.encrypt = encrypt;
module.exports.compare = compare;
module.exports.verifyToken = verifyToken;
module.exports.tokenSign = tokenSign;
