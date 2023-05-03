const { Router } = require("express");
const {
  getProducts,
  postProduct,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../controllers/productControllers");
const { requireAuth } = require("../helpers/helpers");

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/products/add", requireAuth, postProduct);
router.delete("/products/:id", requireAuth, deleteProduct);
router.put("/products/:id", requireAuth, updateProduct);

module.exports = router;
