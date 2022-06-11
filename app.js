import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRouter.js";
import brandRoutes from "./routes/brandRouter.js";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// CORS Policy
app.use(cors());

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json());

// Load Routes
app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
// app.listen(process.env.PORT || 5000, () => {
//   console.log("backend server is runing..");
// });
