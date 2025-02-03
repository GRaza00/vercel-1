import product from "../models/product.js";

//createProduct
const createProduct = async (req, res) => {
  const newProduct = new product(req.body);
  try {
    const doc = await newProduct.save();
    res.status(201).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

//getProducts
const getProducts = async (req, res) => {
  const { pageno, limit } = req.query;

  // .sort({ createdAt: -1 })
  //     .skip((Number(pageNumber) - 1) * Number(limit))
  //     .limit(Number(limit));

  const query = product
    .find()
    .skip((pageno - 1) * limit)
    .limit(limit);

  try {
    const doc = await query.exec();
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

//getProduct
const getProduct = async (req, res) => {
  const { id } = req.params;
  const query = product.findById(id);
  try {
    const doc = await query.exec();
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

//replaceProduct
const replaceProduct = async (req, res) => {
  const { id } = req.params;
  const query = product.findOneAndReplace({ _id: id }, req.body, { new: true });
  try {
    const doc = await query.exec();
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

//updateProduct
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const query = product.findByIdAndUpdate(id, req.body, { new: true });
  try {
    const doc = await query.exec();
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

//deleteProduct
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const query = product.findByIdAndDelete(id, { new: true });
  try {
    const doc = await query.exec();
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

export {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
};
