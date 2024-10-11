const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./src/routes/postRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", postRoutes);

mongoose
  .connect(
    "mongodb+srv://shiferawmichael13:ZI9OHFicHNAeJzKb@cluster0.o3nt6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
