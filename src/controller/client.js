const getProducts = async (req, res) => {
  const item1 = { id: 1, name: "iphone X" };
  res.cookie("cart", "item1", {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  res.send("get all product data ");
};

const getProduct = async (req, res) => {
  const { id } = req.params.id;
  const cookie = req.cookies;
  console.log(cookie);
  res.clearCookie("cart", { httpOnly: true });
  res.json({ helo: "raza" });
};

//AddImage
const AddImage = async (req, res) => {
  console.log(req.file);
  res.send("done");
};

export { getProducts, getProduct, AddImage };
