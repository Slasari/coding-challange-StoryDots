const { Router } = require("express");
const router = Router();
const {
  getBrands,
  addBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandsControllers.js");
const { requireAuth } = require("../helpers/helpers.js");

router.get("/brands", getBrands);
router.post("/brands/add", requireAuth, addBrand);
router.put("/brands/:id", requireAuth, updateBrand);
router.delete("/brand/:id", requireAuth, deleteBrand);

module.exports = router;
