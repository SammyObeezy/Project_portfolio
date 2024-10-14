import React from "react";
import { Avatar } from "flowbite-react";
import ProfilePic1 from "../assets/profile-1.png";
import ProfilePic2 from "../assets/sammy.png";
import {
  FaTwitter,
  FaGithubAlt,
  FaMediumM,
  FaBlog,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <section id="reviews-section" className="reviews-section py-10 mt-10">
        <div className="container mx-auto">
          <h2 className="section-heading text-center text-2xl font-bold mb-5">
            Meet the Team
          </h2>
          <div className="section-intro text-center max-w-2xl mx-auto mb-5">
            At BookWave, our team is driven by a passion for technology and a
            love for literature. Together, we've crafted a platform that merges
            seamless functionality with a delightful user experience, ensuring
            every reader finds their next favorite book effortlessly.
          </div>
          {/* Set the max-w-5xl (or any preferred size) on the flex container */}
          <div className="flex flex-wrap justify-center max-w-10xl mx-auto">
            <div className="item w-full sm:w-1/4 md:w-1/3 lg:w-1/4 p-3 mb-6">
              <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4">
                <blockquote className="text-gray-700 italic mb-4">
                  "Samuel Waweru brings creativity and precision to the
                  forefront of BookWave's design. With a keen eye for aesthetics
                  and a dedication to user interface excellence, Samuel ensures
                  that every interaction on our platform is intuitive and
                  visually appealing."
                </blockquote>
                <div className="flex flex-col items-center">
                  <img
                    className="w-16 h-16 rounded-full mb-3 border-2 border-orange-400"
                    src={ProfilePic1}
                    alt="Samuel Waweru"
                  />
                  <div className="text-lg font-semibold">Samuel Waweru</div>
                  <div className="text-gray-500 mb-2">
                    Front-End Developer & Designer
                  </div>
                  <div className="author-links text-center">
                    <h4 className="text-black">Follow Samuel</h4>
                    <ul className="social-list flex justify-center space-x-4 mt-2">
                      <li>
                        <a href="https://x.com/Samu_elKE" aria-label="Twitter">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/mogulsam"
                          aria-label="GitHub"
                        >
                          <FaGithubAlt />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://medium.com/@samuel-mogul"
                          aria-label="Medium"
                        >
                          <FaMediumM />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/samuel-mogul/"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="icon-holder text-right text-gray-400 mt-2">
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
            <div className="item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-6">
              <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4">
                <blockquote className="text-gray-700 italic mb-4">
                  "Behind the scenes, Sammy Obonyo drives the technical backbone
                  of BookWave. His commitment to scalability and performance
                  guarantees a seamless experience for users."
                </blockquote>
                <div className="flex flex-col items-center">
                  <img
                    className="w-16 h-16 rounded-full mb-3 border-2 border-orange-400"
                    src={ProfilePic2}
                    alt="Sammy Obonyo"
                  />
                  <div className="text-lg font-semibold">Sammy Obonyo</div>
                  <div className="text-gray-500 mb-2">Back-End Developer</div>
                  <div className="author-links text-center">
                    <h5 className="text-black">Follow Sammy</h5>
                    <ul className="social-list flex justify-center space-x-4 mt-2">
                      <li>
                        <a
                          href="https://x.com/obonyo_sammy"
                          aria-label="Twitter"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/SammyObeezy"
                          aria-label="GitHub"
                        >
                          <FaGithubAlt />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://medium.com/@SammyObeezy"
                          aria-label="Medium"
                        >
                          <FaMediumM />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/sammy-obonyo-2a17b91a9/"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="icon-holder text-right text-gray-400 mt-2">
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Other sections remain unchanged */}
    </>
  );
};

export default Team;
