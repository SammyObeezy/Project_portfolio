import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faDownload,
  faUsers,
  faUserFriends,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          What Will You Get From BookWave?
        </h2>
        <p className="text-lg mb-8">
          At BookWave, our mission is to revolutionize your reading experience.
          With a vast collection of ebooks, seamless purchasing options, and
          vibrant reader communities, we provide everything you need to dive
          into your next great read.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Explore a Vast Library
            </h3>
            <p>
              Discover a wide range of genres and titles curated to your
              preferences. From bestsellers to hidden gems, BookWave has it all.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <FontAwesomeIcon
              icon={faDownload}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Easy Download & Purchase
            </h3>
            <p>
              Freely download ebooks & seamlessly purchase books with Amazon for
              secure and quick transactions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Join Communities</h3>
            <p>
              Connect with fellow readers through our "Connect" page, where you
              can join groups and communities on platforms like Facebook,
              Discord, and Reddit.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <FontAwesomeIcon
              icon={faUserFriends}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              User-Friendly Experience
            </h3>
            <p>
              Enjoy a smooth and intuitive user interface, making your book
              discovery and reading experience delightful.
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Features;
