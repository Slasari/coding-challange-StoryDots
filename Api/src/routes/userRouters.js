const { Router } = require("express");
const {
  userRegister,
  getUsers,
  deleteUser,
} = require("../controllers/userControllers.js");

const router = Router();

router.get("/users", getUsers);
router.post("/register", userRegister);
router.delete("/user/delete/:id", deleteUser);

module.exports = router;
