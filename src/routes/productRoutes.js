const express = require("express");
const {
  createProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createProduct); // Only admins can create
router.get("/", getProducts); // Public route
router.get("/:id", getOneProduct); // Public route
router.put("/:id", authMiddleware, updateProduct); // Only admins can update
router.delete("/:id", authMiddleware, deleteProduct); // Only admins can delete

module.exports = router;