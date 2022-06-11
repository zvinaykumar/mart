import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
  // categoryId: { type: String, unique: true, required: true },
  // createdOn: { type: Date, default: Date.now },
  // delete: { type: Boolean, default: false },
  // active: { type: Boolean, default: true },

  // slug: { type: String, unique: true },
  name: { type: String, required: true },
  longDescription: { type: String },
  shortDescription: { type: String },
  seoTitle: { type: String },
  //   seoDescription: { type: String },
  //   icon: { type: String },
  // imageSquare: { type: String },
  // imageRectangular: { type: String },
  //   image: { type: String },
  // type: { type: String, required: true },
  // tags: [String],
  // premiumSeller: [String],
  // featured: { type: Boolean, default: false },
  // form: { type: String },
  // childCategories: [
  //   { type: mongoose.Schema.Types.ObjectId, ref: config.categoryCollection },
  // ],
  // parentCategory: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: config.categoryCollection,
  // },
  // productCount: { type: Number, default: 0 },
  // priority: { type: Number, default: 30 },
  // deliveryTime: { type: Number, default: 7 },
  // premiumDeliveryTime: { type: Number, default: 7 },

  // variantsIncluded: [
  //   { type: mongoose.Schema.Types.ObjectId, ref: config.productVariant },
  // ],

  // linkedSellers: [
  //   {
  //     _id: false,
  //     businessInfo: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: config.businessCollection,
  //     },
  //     userInfo: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: config.userCollection,
  //     },
  //     sellerType: String,
  //     sellerId: String,
  //     order: { type: Number, default: 0 },
  //   },
  // ],
  // content: String,
  // showHtml: Boolean,
});

const Brand = mongoose.model("brandCollection", BrandSchema);

export default Brand;
