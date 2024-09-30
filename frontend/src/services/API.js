const STORAGE_KEY = "workouts";

const getStoredWorkouts = () => {
  const storedWorkouts = localStorage.getItem(STORAGE_KEY);
  return storedWorkouts ? JSON.parse(storedWorkouts) : [];
};

const saveWorkouts = (workouts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
};

export const fetchWorkouts = async (dispatch) => {
  try {
    const workouts = getStoredWorkouts();
    dispatch({ type: "SET_WORKOUTS", payload: workouts });
  } catch (error) {
    console.error(error);
  }
};

export const createWorkout = async (dispatch, workout) => {
  try {
    const workouts = getStoredWorkouts();
    const newWorkout = { ...workout, _id: Date.now().toString() };
    workouts.push(newWorkout);
    saveWorkouts(workouts);
    dispatch({ type: "CREATE_WORKOUT", payload: newWorkout });
  } catch (error) {
    console.error(error);
  }
};

export const deleteWorkout = async (dispatch, id) => {
  try {
    const workouts = getStoredWorkouts();
    const updatedWorkouts = workouts.filter((w) => w._id !== id);
    saveWorkouts(updatedWorkouts);
    dispatch({ type: "DELETE_WORKOUT", payload: { _id: id } });
  } catch (error) {
    console.error(error);
  }
};

export const updateWorkout = async (dispatch, workout) => {
  try {
    const workouts = getStoredWorkouts();
    const updatedWorkouts = workouts.map((w) =>
      w._id === workout._id ? workout : w,
    );
    saveWorkouts(updatedWorkouts);
    dispatch({ type: "UPDATE_WORKOUT", payload: workout });
  } catch (error) {
    console.error(error);
  }
};
