import React from "react";
import BannerCard from "../Home/BannerCard";
import devbook from "../assets/devbook-cover.png";
const Banner = () => {
  return (
    <>
      <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
          {/*Lef side*/}
          <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-black">
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
            <button
              className="bg-red-700 px-6 py-2 text-white font-medium hover:bg-black
          transition-all ease-in duration-200"
            >
              Search
            </button>
          </div>
          {/*Right side*/}
          <div>
            <BannerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
