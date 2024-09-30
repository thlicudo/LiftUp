import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { createWorkout } from "../services/API";
import { toast } from "react-toastify";

const WorkoutForm = ({ isOpen }) => {
  const { dispatch } = useWorkoutContext();

  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!title || !reps || !day) {
      setError("Please fill in all fields");
      return;
    }

    const workout = { title, reps: Number(reps), day };

    // API CALL TO CREATE WORKOUT
    createWorkout(dispatch, workout);

    toast.success(`Workout added for ${day}!`);
    setTitle("");
    setReps("");
    setDay("");
  };

  return (
    <div
      className={`w-full overflow-hidden rounded-md bg-primary_white shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? "my-3 max-h-[500px]" : "max-h-0"}`}
    >
      <div className="flex flex-col gap-4 px-4 py-6">
        <h1 className="text-xl font-bold text-primary_blue lg:text-2xl">
          Add Exercise
        </h1>

        <form
          className="flex flex-col justify-center gap-4 text-sm font-bold text-primary_black lg:flex-row lg:text-base"
          onSubmit={handleSubmit}
        >
          {error && <div className="mb-2 text-red-500">{error}</div>}
          <div className="flex flex-grow flex-col justify-center gap-2 lg:flex-row lg:items-center">
            <label htmlFor="exercise">Exercise</label>
            <input
              id="exercise"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full flex-grow rounded-md px-2 py-1 font-normal outline outline-1 outline-primary_gray focus:outline-2 focus:outline-primary_blue lg:w-40"
              placeholder="Enter exercise title"
            />
          </div>
          <div className="flex flex-grow flex-col justify-center gap-2 lg:flex-row lg:items-center">
            <label htmlFor="reps">Reps</label>
            <input
              id="reps"
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-full flex-grow rounded-md px-2 py-1 font-normal outline outline-1 outline-primary_gray focus:outline-2 focus:outline-primary_blue lg:w-40"
              placeholder="Enter number of reps"
            />
          </div>
          <div className="flex flex-grow flex-col justify-center gap-2 lg:flex-row lg:items-center">
            <label htmlFor="day">Day</label>
            <select
              id="day"
              name="day"
              className="w-full flex-grow rounded-md bg-white px-2 py-1 font-normal outline outline-1 focus:outline-2 focus:outline-primary_blue lg:w-40"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="" disabled>
                Select Day
              </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-md bg-primary_blue px-4 py-1 text-primary_white transition-all duration-200 ease-in-out lg:w-auto lg:hover:bg-blue-500">
            <FaPlus className="lg:text-xl" />
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;
