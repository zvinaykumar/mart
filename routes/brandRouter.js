import express from "express";
const router = express.Router();

import BrandController from "../controllers/BrandController.js";

router.post("/newbrand", BrandController.newBrand);
router.get("/allBrand", BrandController.getAllBrand);
router.get("/Brand/:id", BrandController.oneBrand);
router.put("/update/:id", BrandController.updateBrand);
router.delete("/delete/:id", BrandController.deleteBrand);

export default router;
