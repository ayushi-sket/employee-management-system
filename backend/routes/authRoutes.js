const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

// Protected test route — only Admin can access
router.get("/admin-only", protect, authorizeRoles("Admin"), (req, res) => {
  res.json({ message: "Welcome Admin! You have access.", user: req.user });
});

module.exports = router;
