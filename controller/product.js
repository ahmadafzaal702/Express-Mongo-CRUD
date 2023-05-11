const model = require("../model/product");

const Product = model.Product;

// create new product
exports.createProduct = (req, res) => {
  try {
    const product = new Product(req.body);
    product.save();
    res.status(201).json({ message: "Product Created" });
  } catch (error) {
    res.status(400).json(err);
  }
};

// get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ title: 1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

// get singe product
exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

// update product
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

// delete product
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndDelete({ _id: id });
    res
      .status(200)
      .json({ message: `The product "${product.title}" has been deleted.` });
  } catch (error) {
    res.status(400).json(error);
  }
};
