import React from "react";
import BannerCard from "../Home/BannerCard";

const Banner = () => {
  return (
    <div
      className="relative px-4 lg:px-24 flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #4a90e2, #9013fe)", // Updated gradient colors
        height: "70vh", // Adjusted height
      }}
    >
      <div className="relative flex w-full max-w-5xl flex-col md:flex-row justify-between items-center gap-12 z-10">
        {/* Left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-white">
            Discover, Purchase, & <br /> Enjoy eBooks Easily
          </h2>
          <p className="md:w-4/5 text-white">
            Explore a world of knowledge and entertainment with just a few
            clicks!
          </p>
          <div className="flex">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-4 rounded-l-md outline-none"
            />
            <button className="bg-red-600 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-md border border-red-600 hover:border-black">
              Search
            </button>
          </div>
        </div>
        {/* Right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
