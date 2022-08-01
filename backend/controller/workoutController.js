//Description: Get all workouts
//Method: GET
//Route: /api/workouts/all
//Access: PRIVATE
const getWorkouts = (rq, rs) => {
  rs.json({ message: "GET all workouts" });
};

//Description: Create new workout
//Method: POST
//Route: /api/workouts/create
//Access: PRIVATE
const createWorkout = (rq, rs) => {
  rs.json({ message: "CREATE a workout" });
};

//Description: Gets a specific workout
//Method: GET
//Route: /api/workouts/:id
//Access: PRIVATE
const getWorkout = (rq, rs) => {
  rs.json({ message: "GET a workout" });
};

//Description: Delete a specific workout
//Method: DELETE
//Route: /api/workouts/:id
//Access: PRIVATE
const deleteWorkout = (rq, rs) => {
  rs.json({ message: "DELETE a workout" });
};

//Description: update a specific workout
//Method: PATCH
//Route: /api/workouts/:id
//Access: PRIVATE
const updateWorkout = (rq, rs) => {
  rs.json({ message: "UPDATE a workout" });
};

module.exports = {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
