const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");

//Description: Get all workouts
//Method: GET
//Route: /api/workouts/all
//Access: PRIVATE
router.route("/all").get(getWorkouts);

//Description: Create new workout
//Method: POST
//Route: /api/workouts/create
//Access: PRIVATE
router.route("/create").post(createWorkout);

//Description: Get/Delete/Update a specific workout
//Method: GET/DELETE/PATCH
//Route: /api/workouts/:id
//Access: PRIVATE
router.route("/:id").get(getWorkout).delete(deleteWorkout).patch(updateWorkout);

module.exports = router;
