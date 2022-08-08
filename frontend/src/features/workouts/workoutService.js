//services are used for making HTTP requests and setting/getting any data from local storage

//backend API URL
const API_URL = "/api/workout/";

//Get all workouts
const fetchAllWorkouts = async () => {
  const response = await axios.get(API_URL + "all");
  return response.data;
};

//Get a specific workout
const fetchAWorkout = async (workoutid) => {
  const response = await axios.get(API_URL + workoutid);
  return response.data;
};

//Create a workout
const createWorkout = async (workoutData) => {
  const response = await axios.post(API_URL + "create", workoutData);
  return response.data;
};

//Delete a specific workout
const deleteWorkout = async (workoutid) => {
  const response = await axios.delete(API_URL + workoutid);
  return response.data;
};

//Update a specific workout
const updateWorkout = async (workoutid, workoutData) => {
  const respose = await axios.patch(API_URL + workoutid, workoutData);
  return respose.data;
};

const workoutService = {
  fetchAllWorkouts,
  fetchAWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};

export default workoutService;
