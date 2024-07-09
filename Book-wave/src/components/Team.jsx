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
      <section id="reviews-section" className="reviews-section py-5">
        <div className="container mx-auto">
          <h2 className="section-heading text-center text-2xl font-bold mb-5">
            Team
          </h2>
          <div className="section-intro text-center max-w-2xl mx-auto mb-5">
            At BookWave, our team is driven by a passion for technology and a
            love for literature. Together, we've crafted a platform that merges
            seamless functionality with a delightful user experience, ensuring
            every reader finds their next favorite book effortlessly.
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="item w-full lg:w-1/3 p-3 mb-4">
              <div className="bg-gray-100 rounded p-4">
                <blockquote className="text-gray-700">
                  Samuel Waweru brings creativity and precision to the forefront
                  of BookWave's design. With a keen eye for aesthetics and a
                  dedication to user interface excellence, Samuel ensures that
                  every interaction on our platform is intuitive and visually
                  appealing. His expertise in front-end development enhances the
                  way users discover and engage with our extensive library of
                  ebooks.
                </blockquote>
                <div className="source flex flex-col md:flex-row items-center mt-4">
                  <div className="md:w-1/4 text-center md:text-left mb-3 md:mb-0">
                    <img
                      className="source-profile w-20 h-20 rounded-full"
                      src={ProfilePic1}
                      alt="Samuel Waweru"
                    />
                  </div>
                  <div className="md:w-3/4 text-center md:text-left">
                    <div className="source-name text-lg font-semibold">
                      Samuel Waweru
                    </div>
                    <div className="source-title text-gray-500">
                      Front-End Developer & Designer
                    </div>
                  </div>
                  <div className="author-links text-center md:text-left mt-4">
                    <h4 className="text-black">Follow Samuel</h4>
                    <ul className="social-list flex justify-center md:justify-start space-x-4 mt-2">
                      <li>
                        <a href="https://x.com/Samu_elKE">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/mogulsam">
                          <FaGithubAlt />
                        </a>
                      </li>
                      <li>
                        <a href="https://medium.com/@samuel-mogul">
                          <FaMediumM />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/samuel-mogul/">
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
            <div className="item w-full lg:w-1/3 p-3 mb-4">
              <div className="bg-gray-100 rounded p-4">
                <blockquote className="text-gray-700">
                  Behind the scenes, Sammy Obonyo drives the technical backbone
                  of BookWave. As our back-end developer, Sammy's expertise in
                  database management and server-side scripting ensures that our
                  platform runs smoothly and securely. His commitment to
                  scalability and performance guarantees a seamless experience
                  for users whether they're browsing, purchasing, or engaging
                  with our community features.
                </blockquote>
                <div className="source flex flex-col md:flex-row items-center mt-4">
                  <div className="md:w-1/4 text-center md:text-left mb-3 md:mb-0">
                    <img
                      className="source-profile w-20 h-20 rounded-full"
                      src={ProfilePic2}
                      alt="Sammy Obonyo"
                    />
                  </div>
                  <div className="md:w-3/4 text-center md:text-left">
                    <div className="source-name text-lg font-semibold">
                      Sammy Obonyo
                    </div>
                    <div className="source-title text-gray-500">
                      Back-End Developer
                    </div>
                  </div>
                  <div className="author-links text-center md:text-left mt-4">
                    <h5 className=" text-black">Follow Sammy</h5>
                    <ul className="social-list flex justify-center md:justify-start space-x-4 mt-2">
                      <li>
                        <a href="https://x.com/obonyo_sammy">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/SammyObeezy">
                          <FaGithubAlt />
                        </a>
                      </li>
                      <li>
                        <a href="https://medium.com/@SammyObeezy">
                          <FaMediumM />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/sammy-obonyo-2a17b91a9/">
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
      <section className="bg-orange-500 py-5 mb-12">
        <div className="container py-3">
          <div className="items-center text-center mb-5">
            {/*logo*/}
            <Link className="text-2xl font-bold text-red-700 flex items-center gap-2">
              <FaBlog className="inline-block" />
              BookWave
            </Link>
          </div>
          <h2 className="section-heading text-5xl text-center text-white mb-3">
            About us
          </h2>
          <div className="author-bio max-w-2xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
            <p className="text-white mb-6">
              BookWave began as a shared passion among our team members at ALX
              School—a desire to enrich the world of reading through technology.
              Inspired by our own love for books and the potential of digital
              platforms, we embarked on a journey to create a space where
              readers could explore, connect, and discover new literary
              adventures.
            </p>
            <h3 className="text-3xl font-semibold mb-4">Timeline</h3>
            <p className="text-white mb-6">
              The idea took root during our coursework at ALX School, where we
              honed our skills in software development and design. As a
              Portfolio Project, BookWave allowed us to apply our knowledge in a
              real-world context, shaping the platform from concept to reality.
            </p>
            <h3 className="text-3xl font-semibold mb-4">Github Repository</h3>
            <p className="text-white">
              Explore our project's code and contribute to its development on{" "}
              <a
                href="https://github.com/mogulsam/Bookwave"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
      <section id="form-section" className="form-section">
        <div className="container mx-auto">
          <div className="lead-form-wrapper max-w-2xl mx-auto bg-gray-100 rounded p-5">
            <h2 className="form-heading text-center  text-3xl font-bold mb-3">
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
                  <label className="sr-only" htmlFor="semail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="semail"
                    name="semail1"
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    placeholder="Your email"
                  />
                </div>
                <div className="w-full lg:w-1/4">
                  <button
                    type="submit"
                    className="btn bg-black w-full p-2 bg-primary text-white rounded"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
