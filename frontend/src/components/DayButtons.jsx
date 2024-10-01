import React from "react";

const DayButtons = ({ activeButton, setActiveButton }) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleClick = (day) => {
    setActiveButton(day);
  };

  return (
    <div className="flex w-full max-w-[400px] flex-wrap justify-center gap-3 lg:max-w-full">
      {daysOfWeek.map((day) => (
        <button
          key={day}
          onClick={() => handleClick(day)}
          className={` ${activeButton === day ? "animate-wiggle bg-primary_blue text-primary_white" : "bg-primary_white text-primary_black"} shadow_btn day_button relative overflow-hidden rounded-md px-2 py-1 text-sm font-bold lg:flex-grow lg:text-lg`}
        >
          <span className="relative z-10">{day}</span>
        </button>
      ))}
    </div>
  );
};

export default DayButtons;
