import React from "react";
import { Component } from "react";
import Contact from "./components/Contact";

const Footer = () => {
  return (
    <section
      id="benefits-section"
      className="benefits-section theme-bg-light-gradient py-5"
    >
      <div className="container py-5">
        <h2 className="section-heading text-center mb-3">
          What Will You Get From BookWave?
        </h2>
        <div className="section-intro single-col-max mx-auto text-center mb-5">
          At BookWave, our mission is to revolutionize your reading experience.
          With a vast collection of ebooks, seamless purchasing options, and
          vibrant reader communities, we provide everything you need to dive
          into your next great read. Here's what BookWave offers to enhance your
          reading journey:
        </div>
        <div className="row text-center">
          <div className="item col-12 col-md-6 col-lg-4">
            <div className="item-inner p-3 p-lg-4">
              <div className="item-header mb-3">
                <div className="item-icon">
                  <i className="fa fa-book" aria-hidden="true"></i>
                </div>
                <h3 className="item-heading">Explore a Vast Library</h3>
              </div>
              <div className="item-desc">
                Discover a wide range of genres and titles curated to your
                preferences. From bestsellers to hidden gems, BookWave has it
                all.
              </div>
            </div>
          </div>
          <div className="item col-12 col-md-6 col-lg-4">
            <div className="item-inner p-3 p-lg-4">
              <div className="item-header mb-3">
                <div className="item-icon">
                  <i className="fa fa-download" aria-hidden="true"></i>
                </div>
                <h3 className="item-heading">Easy Download & Purchase</h3>
              </div>
              <div className="item-desc">
                Freely download ebooks & Seamlessly purchase books with Amazon
                for secure and quick transactions.
              </div>
            </div>
          </div>
          <div className="item col-12 col-md-6 col-lg-4">
            <div className="item-inner p-3 p-lg-4">
              <div className="item-header mb-3">
                <div className="item-icon">
                  <i className="fab fa-rocketchat"></i>
                </div>
                <h3 className="item-heading">Join Communities</h3>
              </div>
              <div className="item-desc">
                Connect with fellow readers on Discord & Reddit. Share reviews,
                join discussions, and make new friends who share your love for
                books.
              </div>
            </div>
          </div>
          <div className="item col-12 col-md-6 col-lg-4">
            <div className="item-inner p-3 p-lg-4">
              <div className="item-header mb-3">
                <div className="item-icon">
                  <i className="fas fa-user"></i>
                </div>
                <h3 className="item-heading">Personalized Experience</h3>
              </div>
              <div className="item-desc">
                Get tailored recommendations based on your reading history and
                preferences, making your reading journey seamless and enjoyable.
              </div>
            </div>
          </div>
          <div className="item col-12 col-md-6 col-lg-4">
            <div className="item-inner p-3 p-lg-4">
              <div className="item-header mb-3">
                <div className="item-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3 className="item-heading">Secure Transactions</h3>
              </div>
              <div className="item-desc">
                Your privacy and security are our top priority. Shop with
                confidence knowing your data is protected.
              </div>
            </div>
          </div>
          <div className="item col-12 col-md-6 col-lg-4">
            <div className="item-inner p-3 p-lg-4">
              <div className="item-header mb-3">
                <div className="item-icon">
                  <i className="fas fa-headphones"></i>
                </div>
                <h3 className="item-heading">Customer Support</h3>
              </div>
              <div className="item-desc">
                Need help? Our customer support team is here to assist you with
                any questions or issues.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
