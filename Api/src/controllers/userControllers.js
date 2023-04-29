const { encrypt, compare } = require("../helpers/helpers.js");
const User = require("../models/User.js");

const getUsers = async (req, res) => {
  const { email, password } = req.params;

  try {
    if (email) {
      const user = await User.findOne({ email });
      if (!user) return res.status(405).send("Email no encontrado");
      const checkPassword = await compare(password, user.password);

      checkPassword
        ? res.status(201).send("La contraseña está bien")
        : res.status(409).send("Contraseña inválida");
    } else {
      const users = await User.find({});
      if(!users) return res.status(404).json({msg: 'Usuarios no encontrados'});
      return res.json(users)
    }
  } catch (e) {
    return res.send(404).json({msg: `Error 404 - ${e}`});
  }
};

const userRegister = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(405).json({ msg: "Usario con mismo email" });
    }
    const passwordHash = await encrypt(password);
    await User.create({
      username: username,
      password: passwordHash,
      email: email,
      isAdmin: false,
    });
    return res.status(200).json("Usuario creado satisfactoriamente");
  } catch (e) {
    console.log(req.body);
    console.log("e", e);
    return res.status(400).json({ msg: `Error - ${e}` });
  }
};

module.exports = { userRegister, getUsers };
