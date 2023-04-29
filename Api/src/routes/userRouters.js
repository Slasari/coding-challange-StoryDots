const { Router } = require("express");
const { userRegister, getUsers } = require("../controllers/userControllers.js");

const router = Router();

router.get("/users", getUsers);
router.post("/register", userRegister);

module.exports = router;
