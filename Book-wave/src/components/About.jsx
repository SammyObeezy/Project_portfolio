import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaBook,
  FaBullseye,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import Team from "./Team";
import HeroImage from "../assets/hero11.jpg";
import StoryImage from "../assets/icon book 2.webp";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1
            className={`text-6xl font-extrabold mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About <span className="text-red-600">Bookwave</span>
          </h1>
          <p
            className={`mt-6 text-lg max-w-2xl text-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Learn more about our journey, mission, and vision to connect readers
            worldwide with personalized book recommendations and vibrant
            communities.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Features of <span className="text-red-600">BookWave</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              "Personalized book recommendations tailored to your reading preferences.",
              "Join vibrant reading communities and connect with fellow book enthusiasts.",
              "Track your reading progress and share your thoughts through reviews.",
              "Explore curated lists of books from diverse genres and authors.",
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <FaCheck className="text-red-600 text-2xl flex-shrink-0" />
                <p className="text-lg text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <FaBullseye className="text-red-600 text-5xl" />
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            To inspire and connect readers with tailored book recommendations,
            helping them discover new stories and communities that enrich their
            lives.
          </p>
          <div className="flex justify-center space-x-8 mt-10">
            {[
              { value: "100K+", label: "Books Recommended" },
              { value: "500K+", label: "Happy Readers" },
              { value: "2K+", label: "Community Groups" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-4xl font-extrabold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-lg text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <FaBook className="text-red-600 text-5xl" />
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-lg text-gray-700">
              BookWave started with a dream: to create a place where every
              reader could find the perfect book for their tastes and join a
              community of like-minded individuals.
            </p>
            <p className="text-lg text-gray-700">
              What began as a small project is now a platform with thousands of
              books, interactive reading groups, and a thriving community of
              readers. Whether you're a casual reader or a passionate
              bibliophile, BookWave has something for everyone.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={StoryImage}
              alt="Our Story"
              className={`w-full max-w-md object-cover rounded-lg shadow-md transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <FaLightbulb className="text-red-600 text-5xl" />
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            To become the go-to platform for readers worldwide, where books and
            ideas are shared freely, and everyone can experience the joy of
            reading.
          </p>
          <div className="flex justify-center space-x-8 mt-10">
            {[
              { value: "2030", label: "Our Global Expansion Goal" },
              { value: "5M+", label: "Community Members" },
              { value: "Every Reader", label: "Connected Worldwide" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-4xl font-extrabold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-lg text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <FaUsers className="text-red-600 text-5xl" />
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          </div>
        </div>
        <Team />
      </section>
    </div>
  );
};

export default About;
