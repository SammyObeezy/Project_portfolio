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
          {/* Use flex and wrap to align cards */}
          <div className="flex flex-wrap justify-center">
            {/* Card for Samuel Waweru */}
            <div className="item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4 w-full">
                <blockquote className="text-gray-700 italic mb-4">
                  "Samuel Waweru brings creativity and precision to the
                  forefront of BookWave's design. With a keen eye for aesthetics
                  and a dedication to user interface excellence, Samuel ensures
                  that every interaction on our platform is intuitive and
                  visually appealing."
                </blockquote>
                <div className="flex flex-col items-center">
                  <img
                    className="w-16 h-16 rounded-full mb-3 border-2 border-orange-400" // Smaller image size
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

            {/* Card for Sammy Obonyo */}
            <div className="item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4 w-full">
                <blockquote className="text-gray-700 italic mb-4">
                  "Behind the scenes, Sammy Obonyo drives the technical backbone
                  of BookWave. His commitment to scalability and performance
                  guarantees a seamless experience for users."
                </blockquote>
                <div className="flex flex-col items-center">
                  <img
                    className="w-16 h-16 rounded-full mb-3 border-2 border-orange-400" // Smaller image size
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

      <section className="bg-gray-100  py-5 mb-12">
        <div className="container py-3">
          <div className="items-center text-center mb-5">
            <Link className="text-2xl font-bold text-red-600 flex items-center gap-2">
              <FaBlog className="inline-block" />
              BookWave
            </Link>
          </div>
        

          <div className="author-bio max-w-2xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4 text-black">
              From Team
            </h3>
            <p className="text-black mb-6">
              BookWave began as a shared passion among our team members at ALX
              School—a desire to enrich the world of reading through technology.
              Inspired by our own love for books and the potential of digital
              platforms, we embarked on a journey to create a space where
              readers could explore, connect, and discover new literary
              adventures.
            </p>
            <h3 className="text-3xl font-semibold mb-4 text-red">Timeline</h3>
            <p className="text-black mb-6">
              The idea took root during our coursework at ALX School, where we
              honed our skills in software development and design. As a
              Portfolio Project, BookWave allowed us to apply our knowledge in a
              real-world context, shaping the platform from concept to reality.
            </p>
            <h3 className="text-3xl font-semibold mb-4 text-black">
              Github Repository
            </h3>
            <p className="text-black">
              Explore our project's code and contribute to its development on{" "}
              <a
                href="https://github.com/mogulsam/Bookwave"
                className="text-blue-600 underline hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>

      <section
        id="form-section"
        className="form-section w-full bg-gray-100 py-10"
      >
        <div className="container mx-auto">
          <div className="lead-form-wrapper max-w-2xl mx-auto bg-gray-100 rounded p-5">
            <h2 className="form-heading text-center text-3xl font-bold mb-3">
              Join Us on Our Journey
            </h2>
            <div className="form-intro text-center mb-3">
              BookWave isn't just a platform—it's a testament to our dedication
              to blending technology with our passion for literature.
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
    </>
  );
};

export default Team;
