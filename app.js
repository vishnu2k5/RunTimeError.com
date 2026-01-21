const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const homeRoutes = require("./routes/homeRoutes");
const { checkAuth } = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());
app.use(cookieParser());
// IMPORTANT: CORS MUST COME BEFORE ROUTES
app.use(cors({
  origin: "http://localhost:5173", // Vite frontend
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);

// Public test route
app.get("/", (req, res) => {
  res.send("Server is running");
});


// Connect to MongoDB and start the server

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch(console.error);
