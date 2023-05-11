const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    maidenName: { type: String },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    birthDate: { type: String, required: true },
    image: { type: String, required: true },
    bloodGroup: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

exports.Model = mongoose.model("User", userScheme);
