import Product from "../models/Product.js";

class ProductController {
  // GET "/Product"
  static getAllProduct = async (req, res) => {
    Product.find()
      .then((Product) => {
        res.status(200).json(Product);
      })
      .catch((error) => {
        res.status((400).json)({
          error: error,
        });
      });
  };
  //POST "/Product"
  static newProduct = async (req, res) => {
    let obj = req.body;
    const product = new Product(obj);
    console.log("product", product);
    product
      .save()
      .then(() => {
        res.status(201).json({
          message: "Product saved successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message,
        });
      });
  };
  //get "/Product:ID"
  static oneProduct = async (req, res) => {
    console.log(req.body);
    Product.findOne({
      _id: req.params.id,
    })
      .then((Product) => {
        res.status(200).json({ Product });
      })
      .catch((err) => {
        res.status(404).json({ err: err });
      });
  };

  // PUT "/Product:ID"
  static updateProduct = async (req, res) => {
    const Product = new Product({
      _id: req.params.id,
      name: req.body.name,
      longDescription: req.body.longDescription,
      shortDescription: req.body.shortDescription,
      seoTitle: req.body.seoTitle,
    });
    Product.updateOne({ _id: req.params.id }, Product)
      .then(() => {
        res.status(201).json({
          message: "Updated Product successfully",
        });
      })
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  };

  //DELETE "/Product":ID
  static deleteProduct = (req, res) => {
    console.log("api hitting");
    Product.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Deleted!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };
}

export default ProductController;
