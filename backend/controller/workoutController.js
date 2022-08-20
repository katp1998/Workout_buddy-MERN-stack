const Workout = require("../models/workoutModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

//Description: Get all workouts
//Method: GET
//Route: /api/workouts/all
//Access: PRIVATE
const getWorkouts = asyncHandler(async (rq, rs) => {
  const workouts = await Workout.find({ user: rq.user.id });
  rs.status(200).json(workouts);
});

//Description: Create new workout
//Method: POST
//Route: /api/workouts/create
//Access: PRIVATE
const createWorkout = asyncHandler(async (rq, rs) => {
  const { title, reps, load } = rq.body;
  if (!title || !reps || !load) {
    //if there is no text item in the body of the request
    rs.status(400);
    throw new Error("Please add a text field");
  }

  //create the workout
  const workout = await Workout.create({
    title: rq.body.title,
    reps: rq.body.reps,
    load: rq.body.load,
    user: rq.user.id,
  });
  rs.status(200).json(workout);
});

//Description: Delete a specific workout
//Method: DELETE
//Route: /api/workouts/:id
//Access: PRIVATE
const deleteWorkout = asyncHandler(async (rq, rs) => {
  const workout = await Workout.findById(rq.params.id);

  //check if workout exists
  if (!workout) {
    rs.status(400);
    throw new Error("No workout found");
  }

  //getting user
  const user = await User.findById(rq.user.id);

  //validation: if the user doesnt exist:
  if (!user) {
    rs.status(401);
    throw new Error("User not found");
  }

  //validation: if the logged in user matches the workout user
  if (workout.user.toString() !== user.id) {
    rs.status(401);
    throw new Error("User not authorized");
  }

  //delete workout:
  await workout.remove();
  rs.status(200).json({ id: rq.params.id });
});

//Description: update a specific workout
//Method: PUT
//Route: /api/workouts/:id
//Access: PRIVATE
const updateWorkout = asyncHandler(async (rq, rs) => {
  const workout = await Workout.findById(rq.params.id);

  if (!workout) {
    rs.status(400);
    throw new Error("Workout not found");
  }

  //getting user
  const user = await User.findById(rq.user.id);

  //validation: if the user doesnt exist:
  if (!user) {
    rs.status(401);
    throw new Error("User not found");
  }

  //validation: if the logged in user matches the goal user
  if (workout.user.toString() !== user.id) {
    rs.status(401);
    throw new Error("User not authorized");
  }
  const updatedWorkout = await Goal.findByIdAndUpdate(rq.params.id, rq.body, {
    new: true,
  });

  rs.status(200).json(updatedWorkout);
});

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
