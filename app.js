const express = require("express");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
const connectDatabase = require("./config/db");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Load environment variables
dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDatabase();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/v1/students", studentRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
