const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: ["Electronics", "Furniture", "Clothing", "Books"], required: true
    },
    stock: { type: Number, default: 0 },
    image: String, // e.g URL for product image
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
