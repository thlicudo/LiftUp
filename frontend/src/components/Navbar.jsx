import React from "react";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header>
      <div>
        <Link
          to="/"
          className="flex items-center justify-center gap-2 py-4 lg:justify-start lg:px-32 lg:py-8"
        >
          <h1 className="text-3xl font-bold">
            Lift<span className="text-primary_blue">Up</span>
          </h1>
          <FaArrowTrendUp className="text-3xl" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
