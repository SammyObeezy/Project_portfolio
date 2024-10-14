import React from "react";
import BannerCard from "../Home/BannerCard";
import yourImage from "../assets/sub-pic11.png";

const Banner = () => {
  return (
    <div
      className="relative px-4 lg:px-24 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 0.8))", // Whitish gradient
      }}
    >
      {/* Background Image on large screens */}
      <div className="hidden lg:block absolute left-0 top-10 z-0">
        <img
          src={yourImage}
          alt="Reading Character"
          className="h-auto w-5/3 lg:w-5/5" // Increased width for large screens
        />
      </div>

      <div className="relative flex w-full max-w-5xl flex-col md:flex-row justify-between items-center gap-12 z-10 py-20 lg:py-40">
        {/* Left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug text-black">
            Discover, Purchase, & <br /> Enjoy eBooks Easily
          </h2>
          <p className="md:w-4/5 text-black">
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
