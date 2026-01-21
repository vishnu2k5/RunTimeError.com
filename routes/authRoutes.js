const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser
} = require("../controllers/authcontroller");
const { checkAuth } = require("../middleware/authMiddleware");
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check", checkAuth, (req, res) => {
  res.json({ authenticated: true, user: req.user });
});

module.exports = router;