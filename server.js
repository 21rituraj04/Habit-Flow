// server.js
// Entry point of the HabitFlow backend application

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to accept JSON data in req.body

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/habits", require("./routes/habitRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/analytics", require("./routes/analyticsRoutes"));

// Simple health check route
app.get("/", (req, res) => {
  res.send("HabitFlow API is running...");
});

// Error handling middleware (must be placed after all routes)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
