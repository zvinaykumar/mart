import Category from "../models/Category.js";

class CategoryController {
  // GET "/category"
  static getAllCategory = async (req, res) => {
    Category.find()
      .then((category) => {
        res.status(200).json(category);
      })
      .catch((error) => {
        res.status((400).json)({
          error: error,
        });
      });
  };
  //POST "/category"
  static newCategory = async (req, res) => {
    let obj = req.body;
    let arr = ["category", "sub1", "sub2"];
    const type = obj.type.includes(arr)
    if (type === "sub1") {
      
    }

    Category.create(obj, function (err, res) {
      if (res) {
        res.status(201).json({
          message: "Category saved successfully",
        });
      } else {
        res.status(500).json({
          error: err.message,
        });
      }
    });
    // const category = new Category({
    //   name: req.body.name,
    //   longDescription: req.body.longDescription,
    //   shortDescription: req.body.shortDescription,
    //   seoTitle: req.body.seoTitle,
    // });
    // category
    //   .save()
    //   .then(() => {
    //     res.status(201).json({
    //       message: "Category saved successfully",
    //     });
    //   })
    //   .catch((err) => {
    //     res.status(500).json({
    //       error: err.message,
    //     });
    //   });
  };
  //get "/category:ID"
  static oneCategory = async (req, res) => {
    console.log(req.body);
    Category.findOne({
      _id: req.params.id,
    })
      .then((Category) => {
        res.status(200).json({ Category });
      })
      .catch((err) => {
        res.status(404).json({ err: err });
      });
  };

  // PUT "/category:ID"
  static updateCategory = async (req, res) => {
    const category = new Category({
      _id: req.params.id,
      name: req.body.name,
      longDescription: req.body.longDescription,
      shortDescription: req.body.shortDescription,
      seoTitle: req.body.seoTitle,
    });
    Category.updateOne({ _id: req.params.id }, category)
      .then(() => {
        res.status(201).json({
          message: "Updated category successfully",
        });
      })
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  };

  //DELETE "/category":ID
  static deleteCategory = (req, res) => {
    console.log("api hitting");
    Category.deleteOne({ _id: req.params.id })
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

export default CategoryController;
