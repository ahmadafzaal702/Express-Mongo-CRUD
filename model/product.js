const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  rating: { type: Number, min: 1, max: 5 },
  stock: Number,
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: String,
  images: [String],
});

exports.Product = mongoose.model("Product", productScheme);
