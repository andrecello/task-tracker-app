const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/tasks"); // 👈 use correct file name!
const authRoutes = require("./routes/auth"); // Add auth routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Add auth routes (no auth middleware needed for login/register)
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes); // 👈 no auth here, it's applied inside taskRoutes

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
