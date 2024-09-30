import React, { useEffect, useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { fetchWorkouts } from "../services/API";
import DayButtons from "../components/DayButtons";
import WorkoutCard from "../components/WorkoutCard";
import Heading from "../components/Heading";
import WorkoutForm from "../components/WorkoutForm";
import EditWorkoutForm from "../components/EditWorkoutForm";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [activeButton, setActiveButton] = useState("Monday");
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { workouts, dispatch } = useWorkoutContext();

  const filteredWorkouts = workouts
    ? workouts.filter((workout) => workout.day === activeButton)
    : [];

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setIsLoading(true);
        await fetchWorkouts(dispatch);
      } catch (err) {
        setError("Failed to fetch workouts. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadWorkouts();
  }, [dispatch]);

  return (
    <div className="flex w-full flex-col items-center p-6 lg:px-32">
      {/* EDIT WORKOUT FORM */}
      {selectedWorkout && (
        <EditWorkoutForm
          isEditOpen={isEditOpen}
          setIsEditOpen={setIsEditOpen}
          selectedWorkout={selectedWorkout}
          setSelectedWorkout={setSelectedWorkout}
        />
      )}

      {/* DAY SELECTION */}
      <DayButtons
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {/* HEADING AND ADD WORKOUT BUTTON */}
      <Heading isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* WORKOUT FORM */}
      <WorkoutForm isOpen={isOpen} />

      {/* WORKOUTS CARD */}
      {isLoading ? (
        <LoadingSpinner />
      ) : workouts && workouts.length > 0 ? (
        filteredWorkouts.length > 0 ? (
          <WorkoutCard
            workouts={filteredWorkouts}
            setIsEditOpen={setIsEditOpen}
            setSelectedWorkout={setSelectedWorkout}
          />
        ) : (
          <h1 className="absolute left-1/2 top-1/2 z-[-1] w-full -translate-x-1/2 -translate-y-1/2 px-6 text-center text-xl font-bold lg:text-2xl">
            No workouts for {activeButton}
          </h1>
        )
      ) : (
        <h1 className="absolute left-1/2 top-1/2 z-[-1] w-full -translate-x-1/2 -translate-y-1/2 px-6 text-center text-xl font-bold lg:text-2xl">
          No workouts available
        </h1>
      )}
    </div>
  );
};

export default Home;
