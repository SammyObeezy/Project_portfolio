import React from "react";
import bookImage from "../assets/banner1.png"; // Replace with actual cover image
import "./About.css";
const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h1 className="about-title mb-4">About BookWave</h1>
            <p className="about-description mb-4">
              BookWave is your go-to platform for discovering and purchasing
              eBooks while connecting with a vibrant community of readers.
              Whether you’re searching for bestsellers, niche genres, or hidden
              gems, our intuitive interface and rich library make reading
              enjoyable and easy. With personalized recommendations,
              community-driven discussions, and secure transactions, BookWave
              revolutionizes how book enthusiasts explore literature.
            </p>
            <a className="btn btn-primary" href="/shop">
              Start Exploring
            </a>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <img
              src={bookImage}
              alt="BookWave cover"
              className="img-fluid"
              style={{ width: "80%" }}
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 text-center">
            <h3>Personalized Recommendations</h3>
            <p>
              Discover books tailored to your preferences, curated based on your
              reading habits and favorite genres.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Join a Community</h3>
            <p>
              Engage in discussions, join book clubs, and connect with fellow
              readers through our interactive platform.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Secure Transactions</h3>
            <p>
              Enjoy a seamless and safe process to purchase or download your
              favorite books with full confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
