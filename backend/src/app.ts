import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes";
import connectDB from "./config/db";
const mongoose = require("mongoose");

dotenv.config();

//connect to mongoDB;
connectDB();
const cors = require("cors");

const app = express();
app.use(cors());

//middleware
app.use(express.json());

app.use("/api", postRoutes);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
export default app;
