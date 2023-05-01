const { Router } = require("express");
const {
  userRegister,
  getUsers,
  deleteUser,
  loginUser,
  updateUser
} = require("../controllers/userControllers.js");

const router = Router();

router.get("/users", getUsers);
router.post("/register", userRegister);
router.put("/user/:id", updateUser)
router.delete("/user/delete/:id", deleteUser);
router.post("/login", loginUser)

module.exports = router;
