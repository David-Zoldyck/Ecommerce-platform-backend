require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
// const orderRoutes = require("./src/routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI =
  process.env.DB_URI || "mongodb://localhost:27017/ecommerce-backend";

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
// app.use("/api/orders", orderRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the application:", error.message);
    process.exit(1);
  }
};

startServer();
