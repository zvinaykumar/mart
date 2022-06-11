import express from "express";
const router = express.Router();

import ProductController from "../controllers/Product.js";

router.post("/newproduct", ProductController.newProduct);
router.get("/allProduct", ProductController.getAllProduct);
router.get("/Product/:id", ProductController.oneProduct);
router.put("/update/:id", ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

export default router;
