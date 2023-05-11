const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
// product routes
router
  .post("/products/new", productController.createProduct)
  .get("/products", productController.getProducts)
  .get("/products/:id", productController.getProduct)
  .patch("/products/:id", productController.updateProduct)
  .delete("/products/:id", productController.deleteProduct);

exports.router = router;
