import React from "react";
import Link from "next/link";

// To-Do:
// - Routing
// - On hover

const Navbar = () => {
  return (
    <div className="sticky top-0 flex h-16 w-full items-center justify-between bg-gray-200 pl-8 pr-20">
      <div className="flex h-full w-4/12 items-center justify-center">
        <span className="text-3xl font-bold text-black">PORTOFOLIO.</span>
      </div>
      <div className="flex w-4/12 items-center justify-between rounded-xl p-2 px-10">
        <Link
          href={"/"}
          className="relative flex h-8 items-center justify-center text-xl font-semibold text-black md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[3px] md:after:w-0 md:after:bg-black md:after:duration-300 md:after:hover:w-full"
        >
          Home
        </Link>
        <Link
          href={"/skills"}
          className="relative flex h-8 items-center justify-center text-xl font-semibold text-black md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[3px] md:after:w-0 md:after:bg-black md:after:duration-300 md:after:hover:w-full"
        >
          Skills
        </Link>
        <Link
          href={"/projects"}
          className="relative flex h-8 items-center justify-center text-xl font-semibold text-black md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[3px] md:after:w-0 md:after:bg-black md:after:duration-300 md:after:hover:w-full"
        >
          Projects
        </Link>
        <Link
          href={"/contact"}
          className="relative flex h-8 items-center justify-center text-xl font-semibold text-black md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[3px] md:after:w-0 md:after:bg-black md:after:duration-300 md:after:hover:w-full"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
