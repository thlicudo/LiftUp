import React from "react";
import { FaPlus, FaHeartCircleBolt } from "react-icons/fa6";

const Heading = ({ isOpen, setIsOpen }) => {
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="pt-12 pb-3 flex w-full items-center justify-between">
      <h1 className="flex items-center gap-2 text-3xl font-bold lg:text-4xl">
        Workouts
        <span className="text-primary_blue">
          <FaHeartCircleBolt />
        </span>
      </h1>
      <button
        className={`flex items-center justify-center overflow-hidden rounded-md p-2 font-bold text-primary_white transition-all duration-200 ease-in-out lg:w-[130px] lg:py-2 ${isOpen ? "bg-primary_red lg:hover:bg-red-500" : "bg-primary_blue lg:hover:bg-blue-500"}`}
        onClick={handleOpen}
      >
        <FaPlus
          className={`text-xl transition-all duration-300 ease-in-out ${isOpen ? "rotate-[45deg]" : "rotate-0"}`}
        />
        <div className="relative hidden h-6 w-24 overflow-hidden lg:block">
          <div
            className={`absolute left-0 w-full transition-transform duration-300 ease-in-out ${
              isOpen ? "-translate-y-full" : "translate-y-0"
            }`}
          >
            <span className="block">Workout</span>
          </div>
          <div
            className={`absolute left-0 w-full transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <span className="block">Close</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Heading;
