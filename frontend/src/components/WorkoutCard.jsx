import React from "react";
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { deleteWorkout } from "../services/API";
import { toast } from "react-toastify";

const WorkoutCard = ({ workouts, setIsEditOpen, setSelectedWorkout }) => {
  const { dispatch } = useWorkoutContext();

  const handleDelete = async (id) => {
    deleteWorkout(dispatch, id);
    toast.success("Workout deleted!");
  };

  const handleEdit = (workout) => {
    setIsEditOpen(true);
    setSelectedWorkout(workout);
  };

  return (
    <div className="grid w-full gap-4 pt-3 md:grid-cols-2 md:gap-6">
      {workouts &&
        workouts.map((workout) => (
          <div
            key={workout._id}
            className="shadow_card flex flex-grow animate-wiggle items-center rounded-md bg-primary_white p-4 text-primary_black transition-all duration-100 lg:hover:rotate-1"
          >
            <div className="flex flex-grow flex-col gap-1">
              <h1 className="text-xl font-bold capitalize text-primary_blue lg:text-2xl">
                {workout.title}
              </h1>

              <div className="flex flex-col gap-2 text-sm font-bold lg:text-base">
                <h2>Reps: {workout.reps}</h2>
                <h2>Duration (sec): {workout.duration}s</h2>

                <span className="w-fit rounded-md bg-primary_blue px-2 py-0.5 text-primary_white">
                  {workout.day}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xl text-primary_white">
              <button
                className="rounded-md bg-primary_blue p-1.5 transition-all duration-200 ease-in-out lg:hover:bg-blue-500"
                title="Edit"
                onClick={() => handleEdit(workout)}
              >
                <FaRegPenToSquare />
              </button>
              <button
                className="rounded-md bg-primary_red p-1.5 transition-all duration-200 ease-in-out lg:hover:bg-red-500"
                title="Delete"
                onClick={() => handleDelete(workout._id)}
              >
                <FaRegTrashCan />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WorkoutCard;
