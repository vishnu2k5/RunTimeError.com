const jwt = require("jsonwebtoken");
const User = require("../schmas/userSchma");

const checkAuth = async (req, res, next) => {
  const token = req.cookies.token;

  // ❌ No token
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated. Please login."
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    // Attach user to request
    req.user = user;

    // ✅ Auth success
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};

module.exports = { checkAuth };
