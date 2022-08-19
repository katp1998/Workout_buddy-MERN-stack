const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserWorkouts,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/myworkouts", protect, getUserWorkouts);

module.exports = router;
