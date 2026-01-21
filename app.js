const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const homeRoutes = require("./routes/homeRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

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
