const { encrypt } = require("../helpers/helpers.js");
const User = require("../models/User.js")


const userRegister = async(req, res) => {
try {
    const { username, password, email } = req.body
    const user = await User.findOne({ email });
    if (user) {
      return res.status(405).json({ msg: "Usario con mismo email" });
    }
    const passwordHash = await encrypt(password)
    await User.create({
        username: username,
        password: passwordHash,
        email: email,
        isAdmin: false
    })
    return res.status(200).json("Usuario creado satisfactoriamente")
} catch (e) {
    console.log(req.body)
    console.log("e",e)
    return res.status(400).json({ msg: `Error - ${e}` })
}}

module.exports = userRegister