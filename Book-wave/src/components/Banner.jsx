import React from "react";
import BannerCard from "../Home/BannerCard";
import devbook from "../assets/devbook-cover.png"; 
import bannerImage from "../assets/banner1111.webp"; 

const Banner = () => {
  return (
    <div className="relative px-4 lg:px-24 bg-white-100 flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          transform: "scaleX(-1)", // Flip the image 
          opacity: 0.8, 
          zIndex: 0, 
        }}
      />
      <div className="relative flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 z-10">
        {/* Left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-black">
            {" "}
            {/* Increased size */}
            Discover, Purchase, & <br /> Enjoy eBooks Easily
          </h2>
          <p className="md:w-4/5">Discover Your Next Great Read!</p>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search a book"
            className="py-2 px-2 rounded-s-sm outline-none"
          />
          <button className="bg-red-600 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-md border border-red-600 hover:border-black">
            Search
          </button>
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
