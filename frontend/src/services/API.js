import axios from "axios";

export const fetchWorkouts = async (dispatch) => {
  try {
    const response = await axios.get("/api/workouts");
    const data = await response.data;

    dispatch({ type: "SET_WORKOUTS", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createWorkout = async (dispatch, workout) => {
  try {
    const response = await axios.post("/api/workouts", workout);
    const data = response.data;

    dispatch({ type: "CREATE_WORKOUT", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteWorkout = async (dispatch, id) => {
  try {
    const response = await axios.delete(`/api/workouts/${id}`);
    const data = response.data;

    dispatch({ type: "DELETE_WORKOUT", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateWorkout = async (dispatch, workout) => {
  try {
    const response = await axios.patch(`/api/workouts/${workout._id}`, workout);
    const data = response.data;

    dispatch({ type: "UPDATE_WORKOUT", payload: data });
  } catch (error) {
    console.error(error);
  }
};
