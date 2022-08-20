const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");
const { protect } = require("../middleware/authMiddleware");

//Description: Get all workouts
//Method: GET
//Route: /api/workouts/all
//Access: PRIVATE
router.route("/all").get(protect, getWorkouts);

//Description: Create new workout
//Method: POST
//Route: /api/workouts/create
//Access: PRIVATE
router.route("/create").post(protect, createWorkout);

//Description: Get/Delete/Update a specific workout
//Method: GET/DELETE/put
//Route: /api/workouts/:id
//Access: PRIVATE
router.route("/:id").delete(protect, deleteWorkout).put(protect, updateWorkout);

module.exports = router;
