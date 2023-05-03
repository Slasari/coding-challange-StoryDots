const { Router } = require("express");
const {
  getProducts,
  postProduct,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../controllers/productControllers");

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/products/add", postProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

module.exports = router;
