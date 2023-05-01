const { Router } = require("express");
const router = Router();
const {
  getBrands,
  addBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandsControllers.js");

router.get("/brands", getBrands);
router.post("/brands/add", addBrand);
router.put("/brands/:id", updateBrand);
router.delete("/brand/:id", deleteBrand);

module.exports = router
