import mongoose from "mongoose";
import Category from "./Category.js";

// Define scheema

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  category: [{ type: "ObjectId", ref: Category }],
});

//models
const Product = mongoose.model("ProductCollection", ProductSchema);

export default Product;
