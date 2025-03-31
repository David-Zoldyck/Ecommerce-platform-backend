const express = require("express");
const {
  addToCart,
  getCart,
  removeFromCart,
//   updateCartItem,
} = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.delete("/:productId", authMiddleware, removeFromCart);
// router.put("/:productId", authMiddleware, updateCartItem);

module.exports = router;
