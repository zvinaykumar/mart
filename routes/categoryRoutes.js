import express from "express";
const router = express.Router();

import CategoryController from "../controllers/CategoryCantroller.js";

router.post("/category", CategoryController.newCategory);
router.get("/allCategory", CategoryController.getAllCategory);
router.get('/category/:id', CategoryController.oneCategory);
router.put("/update/:id", CategoryController.updateCategory);
router.delete("/delete/:id", CategoryController.deleteCategory);

export default router;
