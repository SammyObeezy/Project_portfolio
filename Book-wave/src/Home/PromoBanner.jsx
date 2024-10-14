import React from "react";
import { Link } from "react-router-dom";
import bookPic from "../assets/community1.jpg"; // Update this to your new relevant image

const PromoBanner = () => {
  return (
    <div className="mt-16 mb-12 py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 lg:px-24 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Unleash Your Imagination: Join Our Reading Revolution!
          </h2>
          <p className="mb-4">
            Dive into our curated selection of the latest bestsellers, exclusive
            discounts, and community events designed just for you!
          </p>
          <Link to="/shop" className="block">
            <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-500 transition-all duration-300">
              Grab Your Discount Now!
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src={bookPic}
            alt="Happy person reading"
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
