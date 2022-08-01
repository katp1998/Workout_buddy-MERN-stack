const Workout = require("../models/workoutModel");
const asyncHandler = require("express-async-handler");

//Description: Get all workouts
//Method: GET
//Route: /api/workouts/all
//Access: PRIVATE
const getWorkouts = asyncHandler(async (rq, rs) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  if (!workouts) {
    rs.status(400);
    throw new Error("No workouts to show");
  } else {
    rs.status(200).json(workouts);
  }
});

//Description: Create new workout
//Method: POST
//Route: /api/workouts/create
//Access: PRIVATE
const createWorkout = asyncHandler(async (rq, rs) => {
  const { title, reps, load } = rq.body;

  //check if the title is included! opt: reps, load
  if (!title) {
    rs.status(400);
    throw new Error("Please enter title of the workout!");
  }

  //create the workout
  try {
    const workout = await Workout.create({ title, reps, load });
    rs.status(200).json(workout);
  } catch (error) {
    rs.status(400);
    throw new Error("Error in creating workout");
  }
});

//Description: Gets a specific workout
//Method: GET
//Route: /api/workouts/:id
//Access: PRIVATE
const getWorkout = asyncHandler(async (rq, rs) => {
  const workout = await Workout.findById(rq.params.id);

  //check if the workout exists
  if (!workout) {
    rs.status(400);
    throw new Error("No Workout found");
  }

  rs.status(200).json(workout);
});

//Description: Delete a specific workout
//Method: DELETE
//Route: /api/workouts/:id
//Access: PRIVATE
const deleteWorkout = asyncHandler(async (rq, rs) => {
  const workout = await Workout.findById(rq.params.id);
  //check if the workout exists
  if (!workout) {
    rs.status(400);
    throw new Error("No Workout found");
  }
  //delete workout:
  await workout.remove();
  rs.status(200).json(workout);
});

//Description: update a specific workout
//Method: PATCH
//Route: /api/workouts/:id
//Access: PRIVATE
const updateWorkout = asyncHandler(async (rq, rs) => {
  rs.json({ message: "UPDATE a workout" });
});

module.exports = {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
