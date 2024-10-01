import React from "react";
import { FaCheck, FaX } from "react-icons/fa6";
import { updateWorkout } from "../services/API";
import { toast } from "react-toastify";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const EditWorkoutForm = ({
  isEditOpen,
  setIsEditOpen,
  selectedWorkout,
  setSelectedWorkout,
}) => {
  const { dispatch } = useWorkoutContext();

  const handleClose = () => {
    setIsEditOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedWorkout = {
      ...selectedWorkout,
      title: e.target.title.value,
      reps: e.target.reps.value,
      day: e.target.day.value,
    };

    updateWorkout(dispatch, updatedWorkout);
    toast.success("Workout updated!");
    setIsEditOpen(false);
  };

  return (
    <div
      className={`${isEditOpen ? "flex" : "hidden"} absolute left-1/2 top-1/2 z-50 w-[90%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col gap-3 rounded-md bg-primary_white p-4 shadow-2xl`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary_blue lg:text-2xl">
          Edit Workout
        </h1>

        <button
          className="rounded-md bg-primary_red p-2 text-xl text-primary_white duration-200 ease-in-out lg:hover:bg-red-500"
          onClick={handleClose}
        >
          <FaX />
        </button>
      </div>

      <form
        className="flex w-full flex-col gap-3 text-sm font-bold text-primary_black lg:text-base"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Exercise</label>
          <input
            type="text"
            id="title"
            value={selectedWorkout.title}
            onChange={(e) => {
              setSelectedWorkout({ ...selectedWorkout, title: e.target.value });
            }}
            className="rounded-md bg-white px-2 py-1 font-normal outline outline-1 focus:outline-2 focus:outline-primary_blue"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="reps">Reps</label>
          <input
            type="number"
            id="reps"
            value={selectedWorkout.reps}
            onChange={(e) => {
              setSelectedWorkout({ ...selectedWorkout, reps: e.target.value });
            }}
            className="rounded-md bg-white px-2 py-1 font-normal outline outline-1 focus:outline-2 focus:outline-primary_blue"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="reps">Duration (sec)</label>
          <input
            type="number"
            id="duration"
            value={selectedWorkout.duration}
            onChange={(e) => {
              setSelectedWorkout({
                ...selectedWorkout,
                duration: e.target.value,
              });
            }}
            className="rounded-md bg-white px-2 py-1 font-normal outline outline-1 focus:outline-2 focus:outline-primary_blue"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="day">Day</label>
          <select
            name="day"
            id="day"
            className="rounded-md bg-white px-2 py-1 font-normal outline outline-1 focus:outline-2 focus:outline-primary_blue"
            value={selectedWorkout.day}
            onChange={(e) => {
              setSelectedWorkout({ ...selectedWorkout, day: e.target.value });
            }}
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-md bg-primary_blue p-2 font-bold text-primary_white transition-all duration-200 ease-in-out lg:hover:bg-blue-500">
          Apply
          <FaCheck />
        </button>
      </form>
    </div>
  );
};

export default EditWorkoutForm;
