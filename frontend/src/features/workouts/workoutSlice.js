import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import workoutService from "./workoutService";

const initialState = {
  workouts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//get all workout
export const fetchAllWorkouts = createAsyncThunk(
  "workouts/getAlls",
  async (_, thunkAPI) => {
    try {
      return await workoutService.fetchAllWorkouts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get a workout
export const fetchAWorkout = createAsyncThunk(
  "workouts/getOne",
  async (workoutid, thunkAPI) => {
    try {
      return await workoutService.fetchAWorkout(workoutid);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//creating a workout
export const createWorkout = createAsyncThunk(
  "workouts/create",
  async (workoutData, thunkAPI) => {
    try {
      return await workoutService.createWorkout(workoutData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//delete a workout
export const deleteWorkout = createAsyncThunk(
  "workouts/delete",
  async (workoutid, thunkAPI) => {
    try {
      return await workoutService.deleteWorkout(workoutid);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//updating a workout
export const updateWorkout = createAsyncThunk(
  "workout/update",
  async (workoutid, workoutData) => {
    try {
      return await workoutService.updateWorkout(workoutid, workoutData);
    } catch (error) {
      return console.log(error);
    }
  }
);

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWorkouts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllWorkouts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.workouts = action.payload;
      })
      .addCase(fetchAllWorkouts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchAWorkout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAWorkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.workouts = action.payload;
      })
      .addCase(fetchAWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createWorkout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWorkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.workouts.push(action.payload);
      })
      .addCase(createWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteWorkout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteWorkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.workouts = state.workouts.filter(
          (workout) => workout._id !== action.payload.id
        );
      })
      .addCase(deleteWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateWorkout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateWorkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.workouts.push(action.payload);
      })
      .addCase(updateWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = workoutSlice.actions;
export default workoutSlice.reducer;
