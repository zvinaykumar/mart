import Category from "../models/Category.js";
import Brand from "../models/brand.js";
class BrandController {
  // GET "/category"
  static getAllBrand = async (req, res) => {
    Brand.find()
      .then((brand) => {
        res.status(200).json(brand);
      })
      .catch((error) => {
        res.status((400).json)({
          error: error,
        });
      });
  };
  //POST "/category"
  static newBrand = async (req, res) => {
    const brand = new Brand({
      name: req.body.name,
      longDescription: req.body.longDescription,
      shortDescription: req.body.shortDescription,
      seoTitle: req.body.seoTitle,
    });
    brand
      .save()
      .then(() => {
        res.status(201).json({
          message: "Brand saved successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message,
        });
      });
  };
  //get "/category:ID"
  static oneBrand = async (req, res) => {
    console.log(req.body);
    Brand.findOne({
      _id: req.params.id,
    })
      .then((brand) => {
        res.status(200).json({ brand });
      })
      .catch((err) => {
        res.status(404).json({ err: err });
      });
  };

  // PUT "/category:ID"
  static updateBrand = async (req, res) => {
    const brand = new Brand({
      _id: req.params.id,
      name: req.body.name,
      longDescription: req.body.longDescription,
      shortDescription: req.body.shortDescription,
      seoTitle: req.body.seoTitle,
    });
    Brand.updateOne({ _id: req.params.id }, brand)
      .then(() => {
        res.status(201).json({
          message: "Updated Brand successfully",
        });
      })
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  };

  //DELETE "/category":ID
  static deleteBrand = (req, res) => {
    console.log("api hitting");
    Brand.deleteOne({ _id: req.params.id })
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

export default BrandController;
