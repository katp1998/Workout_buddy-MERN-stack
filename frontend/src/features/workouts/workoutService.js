//services are used for making HTTP requests and setting/getting any data from local storage

import axios from "axios";

//backend API URL
const API_URL = "/api/workouts/";

//Get all workouts
const fetchAllWorkouts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "all", config);
  return response.data;
};

//Create a workout
const createWorkout = async (workoutData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "create", workoutData, config);
  return response.data;
};

//Delete a specific workout
const deleteWorkout = async (workoutid, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + workoutid, config);
  return response.data;
};

//Update a specific workout
const updateWorkout = async (workoutid, workoutData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const respose = await axios.patch(API_URL + workoutid, workoutData, config);
  return respose.data;
};

const workoutService = {
  fetchAllWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};

export default workoutService;
