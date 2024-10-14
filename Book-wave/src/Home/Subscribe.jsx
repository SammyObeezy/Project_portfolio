import React from "react";
import { Avatar } from "flowbite-react";
import readingImage from "../assets/sub-pic11.png";

const Subscribe = () => {
  return (
    <section
      id="form-section"
      className="form-section w-full bg-gray-100 py-10"
    >
      <div className="container mx-auto flex items-center">
        <div className="w-1/4">
          <img
            src={readingImage}
            alt="Happy character reading"
            className="h-auto max-w-full" // Ensure image is responsive
          />
        </div>
        <div className="lead-form-wrapper max-w-2xl mx-auto bg-gray-100 rounded p-5 w-3/4">
          <h2 className="form-heading text-center text-3xl font-bold mb-3">
            Join Us on Our Journey
          </h2>
          <div className="form-intro text-center mb-3">
            BookWave isn't just a platform—it's a testament to our dedication to
            blending technology with our passion for literature.
            <br /> Join us as we continue to expand and enhance the reading
            experience for book lovers everywhere.
          </div>
          <div className="form-wrapper mx-auto">
            <form className="signup-form flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-3/4 mb-3 lg:mb-0 lg:mr-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <button className="bg-red-600 text-white py-2 px-5 rounded hover:bg-red-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
