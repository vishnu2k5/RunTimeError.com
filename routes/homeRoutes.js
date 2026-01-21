const express = require("express");
const { checkAuth } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected home route
router.get("/home", checkAuth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to RuntimeError Home Page 🔥",
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email
    }
  });
});

module.exports = router;
